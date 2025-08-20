// The Veil (Darkan)
//
//

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let boss_id = 0n;
	let is_hp_49 = false;
	let enrage = true;
	let enrage_time = 0;
	let swipes_event_timeout = null;
	let swipes_active = false;
	let sword_counter = 0;
	let smash_counter = 0;
	let sword_timeout = null;
	let smash_timeout = null;
	let triples_timeout = null;
	let last_smash = 0;
	let reverse = false;
	let secondboss = false;
	let firstpizza = false;

	dispatch.hook("S_NPC_STATUS", 2, event => {
		if (event.gameId == boss_id && event.enraged && event.remainingEnrageTime == 36000) {
			enrage_time = new Date();
			enrage = true;
			// handlers.event({ type: "text", sub_type: "message", message: "testreenrage" });
		}
	});

	function sword_event(skillid, ent) {
		if ([101, 102].includes(skillid)) {
			dispatch.clearTimeout(sword_timeout);
			sword_counter++;
			if (sword_counter >= 2 && skillid == 101) {
				if (sword_counter == 2) handlers.event({ type: "text", sub_type: "message", message: "Back", message_ES: "Atrás", message_PT: "Atrás" });
				if (sword_counter == 3) {
					handlers.event({ type: "text", sub_type: "message", message: "Double", message_ES: "Doble", message_PT: "Duplo" });
					swipes_active = true;
					swipes_event_timeout = dispatch.setTimeout(() => {swipes_active = false; swipes_event_timeout = null; }, 3500);
				}
			}
			sword_timeout = dispatch.setTimeout(() => { sword_counter = 0; sword_timeout = null; }, 1800);
		}
		if ([103, 106].includes(skillid)) {
			if (swipes_active) {
				handlers.event([{ type: "func", func: swipes_event, args: [skillid] }], ent);
			}
		}
		if ([105, 108].includes(skillid) && secondboss) {
			dispatch.clearTimeout(smash_timeout);
			last_smash = skillid;
			smash_timeout = dispatch.setTimeout(() => { last_smash = 0; smash_timeout = null; }, 1800);
		}
		if ([103, 105, 106, 108].includes(skillid) && !secondboss && !swipes_active) {
			dispatch.clearTimeout(smash_timeout);
			smash_counter++;
			if (smash_counter >= 4 && skillid == 108) {
				handlers.event({ type: "text", sub_type: "message", message: "Back X2-X3", message_ES: "Atrás X2-X3", message_PT: "Atrás X2-X3" });
				smash_counter = 0;
			}
			smash_timeout = dispatch.setTimeout(() => { smash_counter = 0; smash_timeout = null; }, 1500);
		}
		if ([111].includes(skillid) && [105, 108].includes(last_smash) && secondboss) {
			swipes_active = true;
			swipes_event_timeout = dispatch.setTimeout(() => { reverse = false; swipes_active = false; swipes_event_timeout = null; }, 6000);
			if (last_smash == 105) {
				reverse = true;
				handlers.text({ sub_type: "notification", message: "X4 REVERSE", message_ES: "X4 INVERTIDO", message_PT: "X4 INVERTIDO" });
			}
			if (last_smash == 108) {
				reverse = false;
				handlers.text({ sub_type: "notification", message: "X4 NORMAL", message_ES: "X4 NORMAL", message_PT: "X4 NORMAL" });
			}
			last_smash = 0;
		}
	}

	function tripleattack_event() {
		dispatch.clearTimeout(swipes_event_timeout);
		dispatch.clearTimeout(triples_timeout);
		swipes_active = true;
		swipes_event_timeout = dispatch.setTimeout(() => { swipes_active = false; swipes_event_timeout = null; }, 7300);
		triples_timeout = dispatch.setTimeout(() => {
			handlers.text({ sub_type: "notification", message: "Triples Soon!", message_ES: "Triples Pronto!", message_PT: "Triplos em Breve!" });
		}, 80000);
	}

	function swipes_event(skillid) {
		let duration = 1;
		if ([103, 106].includes(skillid)) {
			enrage = !(new Date() - enrage_time >= 34500);
			duration = 2000;
		}
		if ([1401, 1402].includes(skillid)) {
			enrage = !(new Date() - enrage_time >= 34500 + 750);
			duration = 750;
		}
		const leftSafe = [
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, duration] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, duration] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, duration] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, duration] }
		];
		const rightSafe = [
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, duration] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, duration] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, duration] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, duration] }
		];
		if ([106, 1402].includes(skillid)) {
			if ((enrage && !reverse) || (!enrage && reverse)) {
				handlers.event(leftSafe);
			} else {
				handlers.event(rightSafe);
			}
		}
		if ([103, 1401].includes(skillid)) {
			if ((!enrage && !reverse) || (enrage && reverse)) {
				handlers.event(leftSafe);
			} else {
				handlers.event(rightSafe);
			}
		}
	}

	function cage_one() {
		if (!reverse) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "OUT - IN - OUT", message_ES: "SALIR - ENTRAR - SALIR", message_PT: "SAIR - ENTRAR - SAIR" },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 250, 0, 7000] }
			]);
		} else {
			handlers.event([
				{ type: "text", sub_type: "message", message: "IN - OUT - IN", message_ES: "ENTRAR - SALIR - ENTRAR", message_PT: "ENTRAR - SAIR - ENTRAR" },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 250, 0, 7000] }
			]);
		}
	}

	function cage_two() {
		if (!reverse) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "IN - OUT - IN", message_ES: "ENTRAR - SALIR - SALIR", message_PT: "ENTRAR - SAIR - ENTRAR" },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 250, 0, 7000] }
			]);
		} else {
			handlers.event([
				{ type: "text", sub_type: "message", message: "OUT - IN - OUT", message_ES: "SALIR - ENTRAR - SALIR", message_PT: "SAIR - ENTRAR - SAIR" },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 250, 0, 7000] }
			]);
		}
	}

	return {
		"ns-3111-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: () => clearTimeout(swipes_event_timeout) },
			{ type: "func", func: () => clearTimeout(triples_timeout) },
			{ type: "func", func: () => smash_counter = sword_counter = enrage_time = 0 },
			{ type: "func", func: () => firstpizza = is_hp_49 = secondboss = enrage = swipes_active = reverse = false },
			{ type: "func", func: () => smash_timeout = sword_timeout = null }

		],
		"ns-3111-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: () => clearTimeout(swipes_event_timeout) },
			{ type: "func", func: () => clearTimeout(triples_timeout) },
			{ type: "func", func: () => secondboss = true },
			{ type: "func", func: () => smash_counter = sword_counter = enrage_time = 0 },
			{ type: "func", func: () => firstpizza = is_hp_49 = enrage = swipes_active = reverse = false },
			{ type: "func", func: () => smash_timeout = sword_timeout = null }

		],
		"h-3111-2000-99": [{ type: "func", func: (ent) => boss_id = ent.gameId }],
		"h-3111-2000-49": [{ type: "func", func: () => is_hp_49 = true }],
		"rb-3111-2000": [
			{ type: "func", func: () => enrage = true },
			{ type: "func", func: () => enrage_time = new Date() }
		],
		"re-3111-2000": [
			{ type: "func", func: () => enrage_time = 0 },
			{ type: "func", func: () => enrage = false }
		],
		"dm-0-0-3111006": [
			{ type: "text", sub_type: "message", message: "Triples!", message_ES: "Triples!", message_PT: "Triplos!" },
			{ type: "func", func: tripleattack_event }
		],
		"s-3111-2000-1101-0": [{ type: "func", func: sword_event, args: [101] }],
		"s-3111-2000-1102-0": [{ type: "func", func: sword_event, args: [102] }],
		"s-3111-2000-1103-0": [{ type: "func", func: sword_event, args: [103] }],
		"s-3111-2000-1105-0": [{ type: "func", func: sword_event, args: [105] }],
		"s-3111-2000-1106-0": [{ type: "func", func: sword_event, args: [106] }],
		"s-3111-2000-1108-0": [{ type: "func", func: sword_event, args: [108] }],
		"s-3111-2000-1111-0": [{ type: "func", func: sword_event, args: [111] }],
		"s-3111-2000-1401-0": [{ type: "func", func: swipes_event, args: [1401] }],
		"s-3111-2000-1402-0": [{ type: "func", func: swipes_event, args: [1402] }],
		"s-3111-2000-1117-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message: "Tank Buster", message_ES: "Tank Destructor", message_PT: "Tank Destruidor" },
			{ type: "text", sub_type: "message", message: "BUSTER SHOT!!!", message_ES: "DISPARO DESTRUCTOR!!!", message_PT: "TIRO DESTRUIDOR!!!", check_func: () => is_hp_49 || firstpizza }
		],
		"s-3111-2000-1303-0": [{ type: "text", sub_type: "message", message: "Drill Attack", message_ES: "Ataque Perfurador", message_PT: "Ataque Perfurador" }],
		"s-3111-2000-2115-0": [
			{ type: "text", sub_type: "message", message: "TOGETHER!!!", message_ES: "JUNTAR!!!", message_PT: "JUNTAR!!!" },
			// { type: "text", sub_type: "message", delay: 1000, message: "3" },
			// { type: "text", sub_type: "message", delay: 2000, message: "2" },
			// { type: "text", sub_type: "message", delay: 3000, message: "1" },
			{ type: "text", sub_type: "message", delay: 4000, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }
		],
		"s-3111-2000-1811-0": [{ type: "text", sub_type: "message", message: "SILENCE", message_ES: "SILENCIO", message_PT: "SILÊNCIO" }],
		"s-3111-2000-1807-0": [{ type: "func", func: cage_one }],
		"s-3111-2000-1808-0": [
			{ type: "func", func: cage_two },
			{ type: "text", sub_type: "message", delay: 3000, message: "Cleanse", message_ES: "Cleanse", message_PT: "Cleanse" }
		],
		"s-3111-2000-1809-0": [
			{ type: "func", func: cage_two },
			{ type: "text", sub_type: "message", delay: 3000, message: "Cleanse", message_ES: "Cleanse", message_PT: "Cleanse" }
		],
		"s-3111-2000-1810-0": [{ type: "func", func: cage_one }],
		"ae-0-0-31111001": [{ type: "func", func: () => reverse = true }],
		"ae-0-0-31111002": [{ type: "func", func: () => reverse = false }],
		"ar-0-0-31111001": [{ type: "func", func: () => reverse = false }],
		"s-3111-2000-2101-0": "s-3111-2000-1101-0",
		"s-3111-2000-2102-0": "s-3111-2000-1102-0",
		"s-3111-2000-2103-0": "s-3111-2000-1103-0",
		"s-3111-2000-2105-0": "s-3111-2000-1105-0",
		"s-3111-2000-2106-0": "s-3111-2000-1106-0",
		"s-3111-2000-2108-0": "s-3111-2000-1108-0",
		"s-3111-2000-2111-0": "s-3111-2000-1111-0",
		"s-3111-2000-2117-0": "s-3111-2000-1117-0",
		"s-3111-675-675-0": [{ type: "text", sub_type: "message", message: "RESBAIT!!!", message_ES: "RES BAIT!!!", message_PT: "RES BAIT!!!" }],
		"s-3111-1023-1305-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 8, 250, 0, 2000] }],
		"qb-3111-2000-31110002": [
			{ type: "text", sub_type: "message", message: "PIZZA!!!", message_ES: "PIZZA!!!", message_PT: "PIZZA!!!" },
			{ type: "func", func: () => firstpizza = true }
		],
		"s-3111-2000-1305-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }],
		"s-3111-2000-1304-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 8, 300, 0, 2400] }],
		"s-3111-2000-3308-0": [
			{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR", message_PT: "SAIR" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 8, 300, 0, 1500] }
		],
		"s-3111-2000-3309-0": [
			{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR", message_PT: "ENTRAR" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 8, 300, 0, 1500] }
		],
		"s-3111-2000-3310-0": [{ type: "spawn", func: "marker", args: [false, -30, 300, 0, 1200, true, null] },
			{ type: "spawn", func: "marker", args: [false, 30, 300, 0, 1200, true, null] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1200, true, null] },
			{ type: "spawn", func: "marker", args: [false, 150, 300, 0, 1200, true, null] },
			{ type: "spawn", func: "marker", args: [false, 210, 300, 0, 1200, true, null] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1200, true, null] }
		],
		"s-3111-2000-3311-0": [{ type: "spawn", func: "marker", args: [false, 0, 300, 0, 1200, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 300, 0, 1200, true, null] },
			{ type: "spawn", func: "marker", args: [false, 120, 300, 0, 1200, true, null] },
			{ type: "spawn", func: "marker", args: [false, 180, 300, 0, 1200, true, null] },
			{ type: "spawn", func: "marker", args: [false, 240, 300, 0, 1200, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 300, 0, 1200, true, null] }
		],

		// p1
		"s-3111-1000-1115-0": [
			{ type: "text", sub_type: "message", message: "3" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3200, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }
		],
		"s-3111-1000-1114-0": [
			{ type: "text", sub_type: "message", message: "Target Attack", message_ES: "Ataque Objetivo", message_PT: "Ataque Alvo" },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-3111-1000-1302-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE", message_PT: "AOE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 100, 6000] }
		],
		"s-3111-1000-1117-0": "s-3111-2000-1117-0",
		"s-3111-1000-2117-0": "s-3111-2000-1117-0",
		"s-3111-1000-2115-0": "s-3111-1000-1115-0",
		"s-3111-1000-1101-0": "s-3111-2000-1101-0",
		"s-3111-1000-1102-0": "s-3111-2000-1102-0",
		"s-3111-1000-1103-0": "s-3111-2000-1103-0",
		"s-3111-1000-1105-0": "s-3111-2000-1105-0",
		"s-3111-1000-1106-0": "s-3111-2000-1106-0",
		"s-3111-1000-1108-0": "s-3111-2000-1108-0",
		"s-3111-1000-1111-0": "s-3111-2000-1111-0",
		"s-3111-1000-2101-0": "s-3111-2000-1101-0",
		"s-3111-1000-2102-0": "s-3111-2000-1102-0",
		"s-3111-1000-2103-0": "s-3111-2000-1103-0",
		"s-3111-1000-2105-0": "s-3111-2000-1105-0",
		"s-3111-1000-2106-0": "s-3111-2000-1106-0",
		"s-3111-1000-2108-0": "s-3111-2000-1108-0",
		"s-3111-1000-2111-0": "s-3111-2000-1111-0",
		"rb-3111-1000": "rb-3111-2000",
		"re-3111-1000": "re-3111-2000",
		"qb-3111-1000-3036039": "dm-0-0-3111006",
		"s-3111-1000-1805-0": "s-3111-2000-1807-0",
		"s-3111-1000-1806-0": "s-3111-2000-1808-0",
		"s-3111-1000-1801-0": "s-3111-2000-1811-0",
		"s-3111-1000-1303-0": "s-3111-2000-1303-0",
		"s-3111-1000-1401-0": "s-3111-2000-1401-0",
		"s-3111-1000-1402-0": "s-3111-2000-1402-0",
		"h-3111-1000-99": "h-3111-2000-99"
	};
};