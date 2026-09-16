// Hall of the Argon Queen (Hard) (Asura)
//
// made icebrog / Vampic

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let debuff_list = [];
	let curr_debuff_id = null;
	let type = -1;

	dispatch.hook("S_ACTION_STAGE", 9, event => {
		if (event.templateId !== 1000 || event.skill.huntingZoneId !== 3147) return;

		if ([3204, 4204].includes(event.skill.id)) {
			dispatch.setTimeout(() => {
				handlers.text({
					sub_type: "message",
					message: "Evades", message_ES: "Iframes", message_PT: "Iframes",
					message_ES: "Iframes", message_PT: "Iframes"
				});
			}, (event.skill.id === 3204 ? 3000 : 2350) / event.speed);
		}

		if ([3118, 4118, 3123, 4123].includes(event.skill.id)) {
			dispatch.setTimeout(() => {
				handlers.text({
					sub_type: "message",
					message: "4 (Blue)", message_ES: "4 (Azul)", message_PT: "4 (Azul)",
					message_ES: "4 (Azul)", message_PT: "4 (Azul)"
				});
			}, 8700 / event.speed);
		} else if (curr_debuff_id !== null && debuff_list.length === 0) {
			debuff_event(curr_debuff_id);
		}
	});

	const mech_messages = {
		1: { message: "1 (White)", message_ES: "1 (Blanco)", message_PT: "1 (Branco)" },
		2: { message: "2 (Green)", message_ES: "2 (Verde)", message_PT: "2 (Verde)" },
		3: { message: "3 (Red)", message_ES: "3 (Rojo)", message_PT: "3 (Vermelho)" },
		4: { message: "4 (Blue)", message_ES: "4 (Azul)", message_PT: "4 (Azul)" }
	};

	function debuff_text() {
		if (debuff_list.length === 0) return;

		if (type == 0) debuff_list.push(debuff_list.shift()); // Normal
		else debuff_list.unshift(debuff_list.pop()); // Reverse

		handlers.event([
			{ type: "text", sub_type: "message", message: mech_messages[debuff_list[0]].message, message_ES: mech_messages[debuff_list[0]].message_ES, message_PT: mech_messages[debuff_list[0]].message_PT, delay: 150 },
			{ type: "text", sub_type: "notification", message: mech_messages[debuff_list[0]].message, message_ES: mech_messages[debuff_list[0]].message_ES, message_PT: mech_messages[debuff_list[0]].message_PT, speech: false, delay: 150 }
		]);
	}

	function debuff_event(id) {
		if (id == 1) debuff_list = [1, 2, 3, 4]; // Greedy Thoughts #White
		else if (id == 2) debuff_list = [2, 3, 4, 1]; // Hateful Thoughts #Green
		else if (id == 3) debuff_list = [3, 4, 1, 2]; // Desperate Thoughts #Red
		else if (id == 4) debuff_list = [4, 1, 2, 3]; // Dreadful Thoughts #Blue
	}

	function debuff_event_with_offset(offset) {
		if (debuff_list.length === 0) return;

		const id = ((debuff_list[0] - 1 + offset) % 4 + 4) % 4 + 1;

		debuff_event(id);
	}

	return {
		"ns-3147-1000": [
			{ type: "func", func: () => debuff_list = [] },
			{ type: "func", func: () => curr_debuff_id = null }
		],
		"nd-3147-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3147-1000-40": [{ type: "text", sub_type: "message", message: "40%" }],
		"h-3147-1000-50": [{ type: "text", sub_type: "message", message: "50%" }],
		"h-3147-1000-80": [{ type: "text", sub_type: "message", message: "80%" }],
		// Donuts
		"s-3147-1000-3102-0": [{ type: "text", sub_type: "message", message: "In - Out", message_ES: "ENTRAR > SALIR", message_PT: "ENTRAR > SAIR" }],
		"s-3147-1000-4102-0": "s-3147-1000-3102-0",
		// AoE
		"s-3147-1000-3122-0": [
			{ type: "text", sub_type: "message", message: "Roar (AoE) - Inward Waves", message_ES: "Rugido (AOE) - Olas Hacia Adentro", message_PT: "Rugido (AOE) - Ondas Para Dentro" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 9000] }
		],
		"s-3147-1000-4122-0": "s-3147-1000-3122-0",
		"s-3147-1000-3204-0": [
			{ type: "text", sub_type: "message", message: "Roar (AoE)", message_ES: "Rugido (AOE)", message_PT: "Rugido (AOE)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 525, 0, 5000] }
		],
		"s-3147-1000-4204-0": "s-3147-1000-3204-0",
		// Puddle
		"s-3147-1000-3116-0": [{ type: "text", sub_type: "message", message: "5 Puddles", message_ES: "5 Charcos", message_PT: "5 Poças" }],
		"s-3147-1000-4116-0": "s-3147-1000-3116-0",
		// Shield Phase
		"s-3147-1000-3303-0": [
			{ type: "text", sub_type: "message", message: "Shield", message_ES: "Escudo", message_PT: "Escudo" },
			{ type: "text", sub_type: "message", message: "Shield soon...!", message_ES: "Escudo Pronto...!", message_PT: "Escudo em Breve...!", delay: 100000 }
		],
		// Stuns
		"s-3147-1000-3119-0": [
			{ type: "text", sub_type: "message", message: "Stun Frontal", message_ES: "Stun Frontal", message_PT: "Stun Frontal" },
			{ type: "spawn", func: "circle", args: [false, 553, -40, 180, 20, 175, 0, 1450] },
			{ type: "spawn", func: "circle", args: [false, 553, 40, 180, 20, 175, 0, 1450] }
		],
		"s-3147-1000-3104-0": [
			{ type: "text", sub_type: "message", message: "Jump (Stun)", message_ES: "Salto (Stun)", message_PT: "Salto (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 10, 25, 200, 0, 1500] },
			{ type: "spawn", func: "circle", args: [true, 553, 45, 220, 25, 90, 0, 1500] },
			{ type: "spawn", func: "circle", args: [true, 553, -45, 220, 25, 90, 0, 1500] }
		],
		"s-3147-1000-3108-0": [{ type: "text", sub_type: "message", message: "Fly (Puddle)", message_ES: "Volar (Charco)", message_PT: "Voar (Poça)" }],
		"s-3147-1000-3108-2": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 20, 200, 0, 1250] }],
		"s-3147-1000-4119-0": "s-3147-1000-3119-0",
		"s-3147-1000-4104-0": "s-3147-1000-3104-0",
		"s-3147-1000-4108-0": "s-3147-1000-3108-0",
		"s-3147-1000-4108-2": "s-3147-1000-3108-2",
		// Attacks
		"s-3147-1000-3107-0": [{ type: "text", sub_type: "message", message: "Laser", message_ES: "Láser", message_PT: "Laser" }],
		"s-3147-1000-3109-0": [{ type: "text", sub_type: "message", message: "Stun (Puddle)", message_ES: "Stun (Charco)", message_PT: "Stun (Poça)" }],
		"s-3147-1000-3115-0": [
			{ type: "text", sub_type: "message", message: "Tail Split", message_ES: "Dividir Cola", message_PT: "Dividir Cauda" },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 220, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -220, 350, 0, 3000] }
		],
		"s-3147-1000-3120-0": [{ type: "text", sub_type: "message", message: "Tail Pushback", message_ES: "Empuje Cola", message_PT: "Empurrão Cauda" }],
		"s-3147-1000-3205-0": [{ type: "text", sub_type: "message", message: "Dig Attack", message_ES: "Ataque Subterráneo", message_PT: "Ataque Subterrâneo" }],
		"s-3147-1000-3205-1": [{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 20, 185, 0, 1500] }],
		"s-3147-1000-4205-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 20, 185, 0, 1500] }],
		"s-3147-1000-4107-0": "s-3147-1000-3107-0",
		"s-3147-1000-4109-0": "s-3147-1000-3109-0",
		"s-3147-1000-4115-0": "s-3147-1000-3115-0",
		"s-3147-1000-4205-0": "s-3147-1000-3205-0",
		"s-3147-1000-4120-0": "s-3147-1000-3120-0",
		// Plus circles
		"s-3147-1000-3117-0": [
			{ type: "spawn", func: "circle", args: [false, 553, 0, 300, 20, 185, 0, 2177] },
			{ type: "spawn", func: "circle", args: [false, 553, 90, 300, 20, 185, 0, 2177] },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 300, 20, 185, 0, 2177] },
			{ type: "spawn", func: "circle", args: [false, 553, 270, 300, 20, 185, 0, 2177] }
		],
		"s-3147-1000-4117-0": "s-3147-1000-3117-0",
		// Debuff Mechs
		"s-3147-1000-3118-0": [
			{ type: "func", func: () => type = 0 },
			{ type: "func", func: debuff_text },
			{ type: "text", sub_type: "message", message: "Debuff (Normal)", message_ES: "Debuff (Normal)", message_PT: "Debuff (Normal)" }
		],
		"s-3147-1000-4118-0": "s-3147-1000-3118-0",
		"s-3147-1000-3123-0": [
			{ type: "func", func: () => type = 1 },
			{ type: "func", func: debuff_text },
			{ type: "text", sub_type: "message", message: "Debuff (Reverse)", message_ES: "Debuff (Invertido)", message_PT: "Debuff (Invertido)" }
		],
		"s-3147-1000-4123-0": "s-3147-1000-3123-0",

		"am-3147-1000-31471004": [{ type: "func", func: () => curr_debuff_id = 1, check_func: () => curr_debuff_id === null }],
		"am-3147-1000-31471005": [{ type: "func", func: () => curr_debuff_id = 2, check_func: () => curr_debuff_id === null }],
		"am-3147-1000-31471006": [{ type: "func", func: () => curr_debuff_id = 3, check_func: () => curr_debuff_id === null }],
		"am-3147-1000-31471007": [{ type: "func", func: () => curr_debuff_id = 4, check_func: () => curr_debuff_id === null }],

		"am-3147-1000-310471008": [{ type: "func", func: debuff_event, args: [1] }],
		"am-3147-1000-31471009": [{ type: "func", func: debuff_event, args: [2] }],
		"am-3147-1000-31471010": [{ type: "func", func: debuff_event, args: [3] }],
		"am-3147-1000-31471011": [{ type: "func", func: debuff_event, args: [4] }],

		// Debuffs
		"s-3147-1000-3319-0": [{ type: "func", func: debuff_event_with_offset, args: [1] }],
		"s-3147-1000-3320-0": [{ type: "func", func: debuff_event_with_offset, args: [2] }],
		"s-3147-1000-3321-0": [{ type: "func", func: debuff_event_with_offset, args: [3] }],

		// Plague/Regress
		"ab-3147-1000-31470100-1": [{ type: "text", sub_type: "message", message: "Plague/Regress - Stack 1", message_ES: "Plague/Regress - Carga 1", message_PT: "Plague/Regress - Acúmulo 1" }],
		"ab-3147-1000-31470100-2": [{ type: "text", sub_type: "message", message: "Plague/Regress - Stack 2", message_ES: "Plague/Regress - Carga 2", message_PT: "Plague/Regress - Acúmulo 2" }]
	};
};