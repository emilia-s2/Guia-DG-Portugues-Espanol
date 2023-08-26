// Ruinous Manor (Normal)
//
// made by Emilia-s2 / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let firstboss_debuff = null;
	let thirdboss_left_hand = false;

	return {
		// 1 BOSS
		"nd-770-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"die": [{ type: "func", func: () => { firstboss_debuff = null; } }],
		"ae-0-0-97000057": [{ type: "func", func: () => firstboss_debuff = 1 }], // AoE (red)
		"ae-0-0-97000058": [{ type: "func", func: () => firstboss_debuff = 2 }], // AoE (blue)
		"am-770-1000-97000057": [{ type: "func", func: () => firstboss_debuff = 1 }], // Red
		"am-770-1000-97000058": [{ type: "func", func: () => firstboss_debuff = 2 }], // Blue
		"s-770-1000-1306-0": [ // red inside
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "OUT", check_func: () => firstboss_debuff === 1 },
			{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "IN", check_func: () => firstboss_debuff === 2 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 4000] }
		],
		"s-770-1000-1307-0": [ // blue inside
			{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "IN", check_func: () => firstboss_debuff === 1 },
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "OUT", check_func: () => firstboss_debuff === 2 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 4000] }
		],
		"s-770-1000-1206-0": [{ type: "text", sub_type: "message", message_PT: "Pular Atrás", message_ES: "Salto Atrás", message: "Jump Back" }],
		"s-770-1000-2206-0": "s-770-1000-1206-0",
		"s-770-1000-1106-0": [{ type: "text", sub_type: "message", message_PT: "Salto Frente Stun (Iframe)", message_ES: "Salto Frente Stun (Iframe)", message: "Stun Frontal (Dodge)" }],
		"s-770-1000-2106-0": "s-770-1000-1106-0",
		"s-770-1000-1107-0": [{ type: "text", sub_type: "message", message_PT: "Frente Empurrar", message_ES: "Frente Empujar", message: "Front Push" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
		"s-770-1000-2107-0": "s-770-1000-1107-0",
		"s-770-1000-1117-0": [{ type: "text", sub_type: "message", message_PT: "Patadas", message_ES: "Aplastar", message: "Crush Front" }],
		"s-770-1000-2117-0": "s-770-1000-1117-0",
		// 2 BOSS
		"nd-770-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-770-2000-1103-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Frontal", message_ES: "Ataque Frontal", message: "Frontal Attack" }],
		"s-770-2000-2103-0": "s-770-2000-1103-0",
		"s-770-2000-1105-0": [{ type: "text", sub_type: "message", message_PT: "Alvo Aleatório", message_ES: "Objetivo Aleatorio", message: "Random Target" }],
		"s-770-2000-2105-0": "s-770-2000-1105-0",	
		"s-770-2000-1106-0": [{ type: "text", sub_type: "message", message_PT: "Stun (Iframe)", message_ES: "Stun (Iframe)", message: "Stun (Iframe)" },
			{ type: "spawn", func: "circle", args: [false, 553,0, 40, 13, 180, 0, 2000] }
		],	
		"s-770-2000-2106-0": "s-770-2000-1106-0",
		"s-770-2000-1111-0": [{ type: "text", sub_type: "message", message_PT: "Muitos Golpes (Alvo)", message_ES: "Muchos Golpes (Objetivo)", message: "Many Hits(Target)" }],
		"s-770-2000-2111-0": "s-770-2000-1111-0",
		
		// 3 BOSS
		"nd-770-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-770-3000-1102-0": [
			{ type: "text", sub_type: "message", message_PT: "Mão Esquerda", message_ES: "Mano Izquierda", message: "Left Hand" },
			{ type: "func", func: () => thirdboss_left_hand = true },
			{ type: "func", func: () => thirdboss_left_hand = false, delay: 2000 }
		],
		"s-770-3000-2102-0": "s-770-3000-1102-0",
		"s-770-3000-1101-0": [
			{ type: "text", sub_type: "message", message_PT: "Mão Direita", message_ES: "Mano Derecha", message: "Right Hand", check_func: () => !thirdboss_left_hand },
			{ type: "text", sub_type: "notification", message_PT: "Mão Direita | Cauda Atrás", message_ES: "Mano Derecha | Cola Atrás", message: "Right Hand | Tail Slam", check_func: () => thirdboss_left_hand },
			{ type: "func", func: () => thirdboss_left_hand = false }
		],
		"s-770-3000-2101-0": "s-770-3000-1101-0",
		"s-770-3000-1103-0": [
			{ type: "text", sub_type: "message", message_PT: "Cauda Atrás", message_ES: "Cola Atrás", message: "Tail Back" },
			{ type: "spawn", func: "vector", args: [553, 283, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 77, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 165, 488, 270, 200, 0, 1400] },
			{ type: "func", func: () => thirdboss_left_hand = false }
		],
		"s-770-3000-2103-0": "s-770-3000-1103-0",
		"s-770-3000-1301-0": [{ type: "text", sub_type: "message", message_PT: "Círculos Explosivos", message_ES: "Círculos Explosivos", message: "Circles AoE" }],
		"s-770-3000-2301-0": "s-770-3000-1301-0",
		"s-770-3000-1106-0": [{ type: "text", sub_type: "message", message_PT: "Deslize Frontal", message_ES: "Barrido Frontal", message: "Front Swipe" }],
		"s-770-3000-2106-0": "s-770-3000-1106-0",
		"s-770-3000-1110-0": [
			{ type: "text", sub_type: "message", message_PT: "Cauda AoE", message_ES: "Cola AoE", message: "Tail AoE" },
			{ type: "spawn", func: "semicircle", args: [26, 340, 553, 0, 0, 7, 630, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 4, 40, 338, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, -4, 40, -338, 600, 0, 3000] }
		],
		"s-770-3000-2110-0": "s-770-3000-1110-0",
		"s-770-3000-1304-0": [{ type: "text", sub_type: "message", message_PT: "Prepare-se! (para dentro e fora)", message_ES: "Prepararse! (para dentro y fuera)", message: "Get Ready!" }],
		"s-770-3000-1303-0": "s-770-3000-1304-0",
		"s-770-3000-1113-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "Out" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 3000] }
		],
		"s-770-3000-1114-0": [
			{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "In" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 3000] }
		],
		"s-770-3000-1116-0": [
			{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "In" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 3000] }
		],
		"s-770-3000-1117-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "Out" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 3000] }
		],
		"s-770-3000-2113-0": "s-770-3000-1113-0",
		"s-770-3000-2114-0": "s-770-3000-1114-0",
		"s-770-3000-2116-0": "s-770-3000-1116-0",
		"s-770-3000-2117-0": "s-770-3000-1117-0",
		"s-770-3000-1108-0": [
			{ type: "text", sub_type: "message", message_PT: "Cauda Frente", message_ES: "Cola Frente", message: "Tail Front" },
			{ type: "spawn", func: "circle", args: [false, 553, -7, 280, 20, 155, 0, 2000] }
		],
		"s-770-3000-2108-0": "s-770-3000-1108-0",
		"s-770-3000-1120-0": [
			{ type: "text", sub_type: "message", message_PT: "Cabeças Laser (Triplo)", message_ES: "Cabezas Laser (Triple)", message: "Triple Laser skulls" },
			{ type: "spawn", func: "vector", args: [912, 90, 260, 0, 1300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 250, 0, 1300, 0, 2000] }

		],
		"s-770-3000-2120-0": "s-770-3000-1120-0",
		"s-770-3000-1121-0": [
			{ type: "text", sub_type: "message", message_PT: "Cabeças Laser (Duplo)", message_ES: "Cabezas Laser (Doble)", message: "Double Laser skulls" },
			{ type: "spawn", func: "vector", args: [912, 90, 130, 0, 1300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 130, 0, 1300, 0, 2000] }
		],
		"s-770-3000-2121-0": "s-770-3000-1121-0"
	};
};