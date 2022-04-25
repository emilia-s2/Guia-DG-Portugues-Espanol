// Hall of the Argon Queen (Hard)
//
// made icebrog

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let debuff_list = [];
	let type = -1;

	const mech_messages = {
		1: { message: "1 (White)", message_PT: "1 (Branco)", message_ES: "1 (Blanco)" },
		2: { message: "2 (Green)", message_PT: "2 (Verde)", message_ES: "2 (Verde)" },
		3: { message: "3 (Red)", message_PT: "3 (Vermelho)", message_ES: "3 (Rojo)" },
		4: { message: "4 (Blue)", message_PT: "4 (Azul)", message_ES: "4 (Azul)" }
	};

	function debuff_text() {
		if (debuff_list.length === 0) return;

		if (type == 0) debuff_list.push(debuff_list.shift()); // Normal
		else debuff_list.unshift(debuff_list.pop()); // Reverse

		handlers.event([
			{ type: "text", sub_type: "message", message: mech_messages[debuff_list[0]].message, message_PT: mech_messages[debuff_list[0]].message_PT, message_ES: mech_messages[debuff_list[0]].message_ES },
			{ type: "text", sub_type: "notification", message: mech_messages[debuff_list[0]].message, message_PT: mech_messages[debuff_list[0]].message_PT, message_ES: mech_messages[debuff_list[0]].message_ES, speech: false }
		]);
	}

	function debuff_event(id) {
		if (id == 1) debuff_list = [1, 2, 3, 4]; // Greedy Thoughts #White
		else if (id == 2) debuff_list = [2, 3, 4, 1]; // Hateful Thoughts #Green
		else if (id == 3) debuff_list = [3, 4, 1, 2]; // Desperate Thoughts #Red
		else if (id == 4) debuff_list = [4, 1, 2, 3]; // Dreadful Thoughts #Blue

		debuff_text();
	}

	return {
		"ns-3047-1000": [
			{ type: "func", func: () => debuff_list = [] }
		],
		"nd-3047-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3047-1000-40": [{ type: "text", sub_type: "message", message: "40%" }],
		"h-3047-1000-50": [{ type: "text", sub_type: "message", message: "50%" }],
		"h-3047-1000-80": [{ type: "text", sub_type: "message", message: "80%" }],
		// Donuts
		"s-3047-1000-3102-0": [{ type: "text", sub_type: "message", message: "In - Out", message_PT: "Entrar - Sair", message_ES: "Entrar - Salir" }],
		"s-3047-1000-4102-0": "s-3047-1000-3102-0",
		// AoE
		"s-3047-1000-3122-0": [
			{ type: "text", sub_type: "message", message: "Roar (AoE) - Inward Waves", message_PT: "Rugido  (AoE) - Onda Dentro", message_ES: "Rugido (AoE) - Olas adentro" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 9000] }
		],
		"s-3047-1002-1212-0": [{ type: "text", sub_type: "message", message: "Dodge", message_PT: "Iframe", message_ES: "Iframe", delay: 500 }],
		"s-3047-1000-3204-0": [
			{ type: "text", sub_type: "message", message: "Roar (AoE)", message_PT: "Rugido (AoE)", message_ES: "Rugido (AoE)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 5000] }
		],
		"s-3047-1000-4122-0": "s-3047-1000-3122-0",
		"s-3047-1000-4204-0": "s-3047-1000-3204-0",
		// Puddle
		"s-3047-1000-3116-0": [{ type: "text", sub_type: "message", message: "5 Puddles", message_PT: "5 Poços", message_ES: "5 Charcos" }],
		"s-3047-1000-4116-0": "s-3047-1000-3116-0",
		// Shield Phase
		"s-3047-1000-3303-0": [
			{ type: "text", sub_type: "message", message: "Shield", message_PT: "Escudo", message_ES: "Escudo" },
			{ type: "text", sub_type: "message", message: "Shield soon...!", message_PT: "Escudo Em Breve", message_ES: "Escudo pronto...", delay: 100000 }
		],
		// Stuns
		"s-3047-1000-3119-0": [{ type: "text", sub_type: "message", message: "Stun Frontal", message_PT: "Stun Frontal", message_ES: "Stun Frontal" }],
		"s-3047-1000-3104-0": [
			{ type: "text", sub_type: "message", message: "Jump (Stun)", message_PT: "Salto (Stun)", message_ES: "Salto (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 20, 200, 0, 1500] }
		],
		"s-3047-1000-3108-0": [{ type: "text", sub_type: "message", message: "Fly (Puddle)", message_PT: "Voar (Poços)", message_ES: "Volar (Charcos)" }],
		"s-3047-1000-3108-2": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 20, 200, 0, 1250] }],
		"s-3047-1000-4119-0": "s-3047-1000-3119-0",
		"s-3047-1000-4104-0": "s-3047-1000-3104-0",
		"s-3047-1000-4108-0": "s-3047-1000-3108-0",
		"s-3047-1000-4108-2": "s-3047-1000-3108-2",
		// Attacks
		"s-3047-1000-3107-0": [{ type: "text", sub_type: "message", message: "Laser", message_PT: "Laser", message_ES: "Laser" }],
		"s-3047-1000-3109-0": [{ type: "text", sub_type: "message", message: "Stun (Puddle)", message_PT: "Stun (Poços)", message_ES: "Stun (Charcos)" }],
		"s-3047-1000-3115-0": [
			{ type: "text", sub_type: "message", message: "Tail Split", message_PT: "Divisão de Cauda", message_ES: "Cola" },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 220, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -220, 350, 0, 3000] }
		],
		"s-3047-1000-3120-0": [{ type: "text", sub_type: "message", message: "Tail Pushback", message_PT: "Cauda (Empurrar", message_ES: "Cola(Empujar)" }],
		"s-3047-1000-3205-0": [{ type: "text", sub_type: "message", message: "Dig Attack", message_PT: "Ataque por Baixo", message_ES: "Ataque por debajo" }],
		"s-3047-1000-3205-1": [{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 20, 185, 0, 1500] }],
		"s-3047-1000-4205-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 20, 185, 0, 1500] }],
		"s-3047-1000-4107-0": "s-3047-1000-3107-0",
		"s-3047-1000-4109-0": "s-3047-1000-3109-0",
		"s-3047-1000-4115-0": "s-3047-1000-3115-0",
		"s-3047-1000-4205-0": "s-3047-1000-3205-0",
		"s-3047-1000-4120-0": "s-3047-1000-3120-0",
		// Debuff Mechs
		"qb-3047-1000-30471001": [
			{ type: "func", func: () => type = 0 },
			{ type: "text", sub_type: "message", message: "Debuff (Normal)", message_PT: "Debuff (Normal)", message_ES: "Debuff (Normal)" }
		],
		"qb-3047-1000-30471002": [
			{ type: "func", func: () => type = 1 },
			{ type: "text", sub_type: "message", message: "Debuff (Reverse)", message_PT: "Debuff (Reverter)", message_ES: "Debuff (Reverter)" }
		],
		"am-3047-1000-30471008": [{ type: "func", func: debuff_event, args: [1] }],
		"am-3047-1000-30471009": [{ type: "func", func: debuff_event, args: [2] }],
		"am-3047-1000-30471010": [{ type: "func", func: debuff_event, args: [3] }],
		"am-3047-1000-30471011": [{ type: "func", func: debuff_event, args: [4] }],
		// Plague/Regress
		"ab-3047-1000-30470100-1": [{ type: "text", sub_type: "message", message: "Plague/Regress - Stack 1", message_PT: "Plague/Regress - Stack 1", message_ES: "Plague/Regress - Stack 1" }],
		"ab-3047-1000-30470100-2": [{ type: "text", sub_type: "message", message: "Plague/Regress - Stack 2", message_PT: "Plague/Regress - Stack 2", message_ES: "Plague/Regress - Stack 2" }]
	};
};