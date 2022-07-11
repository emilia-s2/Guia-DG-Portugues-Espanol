// Ruinous Manor (Difícil)
//
// made by Emilia-s2 / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"nd-970-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-970-1000-1206-0": [{ type: "text", sub_type: "message", message_PT: "Pular Atrás", message_ES: "Salto Atrás", message: "Jump Back" }],
		"s-970-1000-2206-0": [{ type: "text", sub_type: "message", message_PT: "Pular Atrás", message_ES: "Salto Atrás", message: "Jump Back" }],
		"s-970-1000-1106-0": [{ type: "text", sub_type: "message", message_PT: "Salto Frente Stun (Iframe)", message_ES: "Salto Frente Stun (Iframe)", message: "Stun Frontal (Dodge)" }],
		"s-970-1000-2106-0": [{ type: "text", sub_type: "message", message_PT: "Salto Frente Stun (Iframe)", message_ES: "Salto Frente Stun (Iframe)", message: "Stun Frontal (Dodge)" }],
		"s-970-1000-1107-0": [{ type: "text", sub_type: "message", message_PT: "Frente Empurrar", message_ES: "Frente Empujar", message: "Front Push" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
		"s-970-1000-2107-0": [{ type: "text", sub_type: "message", message_PT: "Frente Empurrar", message_ES: "Frente Empujar", message: "Front Push" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
		// 2 BOSS
		"nd-970-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-970-2000-1103-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Frontal", message_ES: "Ataque Frontal", message: "Frontal Attack" }],
		"s-970-2000-2103-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Frontal", message_ES: "Ataque Frontal", message: "Frontal Attack" }],
		"s-970-2000-1105-0": [{ type: "text", sub_type: "message", message_PT: "Alvo Aleatório", message_ES: "Objetivo Aleatorio", message: "Random Target" }],
		"s-970-2000-2105-0": [{ type: "text", sub_type: "message", message_PT: "Alvo Aleatório", message_ES: "Objetivo Aleatorio", message: "Random Target" }],		
		"s-970-2000-1106-0": [{ type: "text", sub_type: "message", message_PT: "Stun (Iframe)", message_ES: "Stun (Iframe)", message: "Stun (Iframe)" },
			{ type: "spawn", func: "circle", args: [false, 553,0, 40, 13, 180, 0, 2000] }
		],	
		"s-970-2000-2106-0": [{ type: "text", sub_type: "message", message_PT: "Stun (Iframe)", message_ES: "Stun (Iframe)", message: "Stun (Iframe)" },
			{ type: "spawn", func: "circle", args: [false, 553,0, 40, 13, 180, 0, 2000] }
		],
		
		"s-970-2000-1111-0": [{ type: "text", sub_type: "message", message_PT: "Muitos Golpes (Alvo)", message_ES: "Muchos Golpes (Objetivo)", message: "Many Hits(Target)" }],
		"s-970-2000-2111-0": [{ type: "text", sub_type: "message", message_PT: "Muitos Golpes (Alvo)", message_ES: "Muchos Golpes (Objetivo)", message: "Many Hits(Target)" }],
		
		// 3 BOSS
		"nd-970-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-970-3000-1102-0": [{ type: "text", sub_type: "message", message_PT: "Mão Esquerda", message_ES: "Mano Izquierda", message: "Left Hand" }],
		"s-970-3000-2102-0": [{ type: "text", sub_type: "message", message_PT: "Mão Esquerda", message_ES: "Mano Izquierda", message: "Left Hand" }],
		"s-970-3000-1101-0": [{ type: "text", sub_type: "message", message_PT: "Mão Direita", message_ES: "Mano Derecha", message: "Right Hand" }],
		"s-970-3000-2101-0": [{ type: "text", sub_type: "message", message_PT: "Mão Direita", message_ES: "Mano Derecha", message: "Right Hand" }],
		"s-970-3000-1103-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Atrás", message_ES: "Coletazo Atrás", message: "Tail Back" },
			{ type: "spawn", func: "vector", args: [553, 283, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 77, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 165, 488, 270, 200, 0, 1400] }
		],
		"s-970-3000-2103-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Atrás", message_ES: "Coletazo Atrás", message: "Tail Back" },
			{ type: "spawn", func: "vector", args: [553, 283, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 77, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 165, 488, 270, 200, 0, 1400] }
		],
		
		"s-970-3000-1301-0": [{ type: "text", sub_type: "message", message_PT: "Círculos Explosivos", message_ES: "Círculos Explosivos", message: "Circles AoE" }],
		"s-970-3000-2301-0": [{ type: "text", sub_type: "message", message_PT: "Círculos Explosivos", message_ES: "Círculos Explosivos", message: "Circles AoE" }],
		"s-970-3000-1106-0": [{ type: "text", sub_type: "message", message_PT: "Deslize Frontal", message_ES: "Barrido Frontal", message: "Front Swipe" }],
		"s-970-3000-2106-0": [{ type: "text", sub_type: "message", message_PT: "Deslize Frontal", message_ES: "Barrido Frontal", message: "Front Swipe" }],
		"s-970-3000-2110-0": [{ type: "text", sub_type: "message", message_PT: "Cauda AoE (Frente Seguro)", message_ES: "Cola AoE (Frente Seguro)", message: "Tail AoE (Safe front)" },
			{ type: "spawn", func: "semicircle", args: [26, 340, 553, 0, 0, 7, 630, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 4, 40, 338, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, -4, 40, -338, 600, 0, 3000] }
		],
		"s-970-3000-1110-0": [{ type: "text", sub_type: "message", message_PT: "Cauda AoE (Frente Seguro)", message_ES: "Cola AoE (Frente Seguro)", message: "Tail AoE (Safe front)" },
			{ type: "spawn", func: "semicircle", args: [26, 340, 553, 0, 0, 7, 630, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 4, 40, 338, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, -4, 40, -338, 600, 0, 3000] }
		],
		"s-970-3000-1304-0": [{ type: "text", sub_type: "message", message_PT: "Prepare-se! (Dentro e Fora)", message_ES: "Prepararse! (Dentro y Fuera)", message: "Get Ready!" }],
		"s-970-3000-1303-0": [{ type: "text", sub_type: "message", message_PT: "Prepare-se! (Dentro e Fora)", message_ES: "Prepararse! (Dentro y Fuera)", message: "Get Ready!" }],
		"s-970-3000-1113-0": [{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "Out" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],
		"s-970-3000-1114-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "In" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],		
		"s-970-3000-1116-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "In" },
			{ type: "spawn", func: "circle", args: [false, 553,0, 0, 15, 300, 0, 5000] }
		],
		"s-970-3000-1117-0": [{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "Out" },
			{ type: "spawn", func: "circle", args: [false, 553,0, 0, 15, 300, 0, 5000] }
		],
		"s-970-3000-2113-0": "s-970-3000-1113-0",
		"s-970-3000-2114-0": "s-970-3000-1114-0",
		"s-970-3000-2116-0": "s-970-3000-1116-0",
		"s-970-3000-2117-0": "s-970-3000-1117-0",
		
		"s-970-3000-1108-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Golpe", message_ES: "Cola Golpe", message: "Tail Slam" },
			{ type: "spawn", func: "circle", args: [false, 553, -7, 280, 20, 155, 0, 2000] }
		],
		"s-970-3000-2108-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Golpe", message_ES: "Cola Golpe", message: "Tail Slam" },
			{ type: "spawn", func: "circle", args: [false, 553, -7, 280, 20, 155, 0, 2000] }
		],		
		"s-970-3000-1318-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Vermelhas!", message_ES: "Cráneos Rojos", message: "Red Skulls" }],
		"s-970-3000-1317-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Vermelhas!", message_ES: "Cráneos Rojos", message: "Red Skulls" }],
		"s-970-3000-1319-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Vermelhas!", message_ES: "Cráneos Rojos", message: "Red Skulls" }],
		"s-970-3000-1322-0": [{ type: "text", sub_type: "message", message_PT: "Esquiva dos Padrões", message_ES: "Esquiva los PATTERNS!", message: "Pattern Dodge " },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 230, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 430, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 630, 0, 5000] }
		],
		"s-970-3000-1311-0": [{ type: "text", sub_type: "message", message_PT: "Juntar para Cleanse", message_ES: "Juntar para Cleanse", message: "Gather for Cleanse!" }],
		"s-970-3000-1120-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Laser (Triplo)", message_ES: "Cabezas Laser (Triple)", message: "Triple Laser skulls" }],
		"s-970-3000-2120-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Laser (Triplo)", message_ES: "Cabezas Laser (Triple)", message: "Triple Laser skulls" }],
		"s-970-3000-1121-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Laser (Duplo)", message_ES: "Cabezas Laser (Doble)", message: "Double Laser skulls" }],
		"s-970-3000-2121-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Laser (Duplo)", message_ES: "Cabezas Laser (Doble)", message: "Double Laser skulls" }]
	};
};