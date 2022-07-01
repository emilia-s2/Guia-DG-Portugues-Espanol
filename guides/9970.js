// Ruinous Manor (Difícil)
//
// made by Emilia-s2 / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
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
		"s-970-3000-1113-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "OUT" },
			{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "IN", delay: 1300 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 300, 0, 5000] }
		],		
		"s-970-3000-2113-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "OUT" }, 
			{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "IN", delay: 1300 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 300, 0, 5000] }
		],
		"s-970-3000-1116-0": [
			{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "IN" },
			{ type: "text", sub_type: "message", message_PT: " SAIR", message_ES: "SALIR", message: "OUT", delay: 1300 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 300, 0, 5000] }
		],		
		"s-970-3000-2116-0": [
			{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "IN" }, 
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "OUT", delay: 1300 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 300, 0, 5000] }
		],
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