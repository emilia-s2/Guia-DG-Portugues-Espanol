﻿// Sky Cruiser (Dificil)
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let triple_attack = false;
	let timer1 = null;
	let timer2 = null;
	let enrage = 0;
	let enrage_time = 0;
	let counter = 0;
	let is_hp_79 = false;
	let mech_total = 0;
	let mech_counter = 0;

	const mech_messages = {
		2: { message: "Two Split Strikes", message_PT: "Três Ataques divididos" },
		3: { message: "Three Split Strikes", message_PT: "Quatro Ataques divididos" },
		4: { message: "Four Split Strikes", message_PT: "Dois Ataques divididos" }
	};

	function boss_backattack_event() {
		dispatch.clearTimeout(timer2);
		counter++;

		if (counter >= 2 && triple_attack) {
			handlers.text({
				sub_type: "message",
				message: "Back Attack",
				message_PT: "Ataque Atrás"
			});
		}

		timer2 = dispatch.setTimeout(() => counter = 0, enrage == 1 ? 2200 : 2500);
	}

	function boss_tripleattack_event() {
		dispatch.clearTimeout(timer1);
		triple_attack = true;
		timer1 = dispatch.setTimeout(() => triple_attack = false, 3500);
	}

	function boss_mech_event(skillid) {
		enrage = new Date() - enrage_time >= 35100 ? 0 : 1;
		mech_total = triple_attack ? (is_hp_79 ? 4 : 3) : 2;

		if (mech_counter == 0) {
			handlers.text({ sub_type: "message",
				message: mech_messages[mech_total].message,
				message_PT: mech_messages[mech_total].message_PT
			});

			mech_counter = mech_total;
		}

		mech_counter--;

		handlers.event([
			{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 500, 100, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 500, 100, 1500] }
		]);

		if (([1401, 1402].includes(skillid) ? (skillid % 2 + enrage) % 2 : skillid % 2) == 0) {
			handlers.event([ // left
				{ type: "text", sub_type: "alert", speech: false,
					message: `(${mech_total - mech_counter}) Left`,
					message_PT: `(${mech_total - mech_counter}) Esquerda`
				},
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
			]);
		} else {
			handlers.event([ // right
				{ type: "text", sub_type: "alert", speech: false,
					message: `(${mech_total - mech_counter}) Right`,
					message_PT: `(${mech_total - mech_counter}) Direita`
				},
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
			]);
		}
	}

	return {
		// Phase 1
		"nd-3036-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3036-1001-1112-0": [{ type: "text", sub_type: "message", message: "Back Jump", message_PT: "Salto Atrás" }],

		// Phase 2
		"ns-3036-1000": [
			{ type: "func", func: () => enrage = 0 },
			{ type: "func", func: () => mech_counter = 0 }
		],
		"nd-3036-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"rb-3036-1000": [
			{ type: "text", sub_type: "message", message: "Enrage Up", message_PT: "Enrage" },
			{ type: "func", func: () => enrage = 1 },
			{ type: "func", func: () => enrage_time = new Date() }
		],
		"re-3036-1000": [
			{ type: "text", sub_type: "message", message: "End of Enrage", message_PT: "Fim do Enrage" },
			{ type: "func", func: () => enrage = 0 }
		],
		"h-3036-1000-100": [{ type: "func", func: () => is_hp_79 = false }],
		"h-3036-1000-94": [{ type: "text", sub_type: "message", message: "94%" }],
		"h-3036-1000-79": [{ type: "text", sub_type: "message", message: "79%" }, { type: "func", func: () => is_hp_79 = true }],
		"s-3036-1000-1103-0": [{ type: "func", func: boss_backattack_event }],
		"s-3036-1000-1106-0": [{ type: "func", func: boss_backattack_event }],
		"s-3036-1000-1112-0": [{ type: "text", sub_type: "message", message: "Back Move", message_PT: "Movimento para trás" }],
		"s-3036-1000-1115-0": [{ type: "text", sub_type: "message", delay: 3500, message: "Dodge", message_PT: "Esquiva" }],
		"s-3036-1000-1117-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Frente" }],
		"s-3036-1000-1118-0": [{ type: "text", sub_type: "message", message: "Front Cut | Dodge", message_PT: "Corte Frontal | Esquiva" }],
		"s-3036-1000-1302-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_PT: "AOE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 100, 6000] }
		],
		"s-3036-1000-1303-0": [{ type: "text", sub_type: "message", message: "Spin Attack", message_PT: "Ataque Giratorio" }],
		"s-3036-1000-1401-0": [{ type: "func", func: boss_mech_event, args: [1401] }],
		"s-3036-1000-1402-0": [{ type: "func", func: boss_mech_event, args: [1402] }],
		"s-3036-1000-1701-0": [{ type: "func", func: boss_mech_event, args: [1701] }], // right
		"s-3036-1000-1702-0": [{ type: "func", func: boss_mech_event, args: [1702] }], // left
		"s-3036-1000-1801-0": [{ type: "text", sub_type: "message", message: "Incoming Stun", message_PT: "Entrada (Stun)" }],
		"s-3036-1000-1805-0": [
			{ type: "text", sub_type: "message", message: "Beween", message_PT: "Dentro" },
			{ type: "text", sub_type: "message", delay: 2150, message: "IN", message_PT: "ENTRAR" },
			{ type: "text", sub_type: "message", delay: 3050, message: "All | OUT", message_PT: "Todos | SAIR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 450, 0, 6000] }
		],
		"s-3036-1000-1806-0": [
			{ type: "text", sub_type: "message", message: "IN", message_PT: "ENTRAR" },
			{ type: "text", sub_type: "message", delay: 2150, message: "Beween", message_PT: "Dentro" },
			{ type: "text", sub_type: "message", delay: 3050, message: "All | IN", message_PT: "Todos | ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 450, 0, 6000] }
		],
		"s-3036-1000-2103-0": [{ type: "func", func: boss_backattack_event }],
		"s-3036-1000-2106-0": [{ type: "func", func: boss_backattack_event }],
		"s-3036-1000-2112-0": [{ type: "text", sub_type: "message", message: "Back Move", message_PT: "Movimento para trás" }],
		"s-3036-1000-2115-0": [{ type: "text", sub_type: "message", delay: 3500, message: "Dodge", message_PT: "Esquiva" }],
		"s-3036-1000-2117-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Frente" }],
		"s-3036-1000-2118-0": [{ type: "text", sub_type: "message", message: "Front Cut | Dodge", message_PT: "Corte Frontal | Esquiva" }],
		"qb-3036-1000-3036039": [{ type: "func", func: boss_tripleattack_event }],
		"qb-3036-1000-3036040": [{ type: "func", func: boss_tripleattack_event }],
		"qb-3036-1000-3036041": [{ type: "func", func: boss_tripleattack_event }]
	};
};