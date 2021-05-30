// Ruinous Manor (Normal)
// made by Emilia-s2 / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	
	return {
	// 1 BOSS
		"nd-770-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-770-1000-1206-0": [{ type: "text", sub_type: "message", message_PT: "Pular Atrás", message_RU: "nao sei russo :c desculpa" }],
		"s-770-1000-2206-0": [{ type: "text", sub_type: "message", message_PT: "Pular Atrás", message_RU: "nao sei russo :c desculpa" }],
		"s-770-1000-1106-0": [{ type: "text", sub_type: "message", message_PT: "Salto Frente Stun (Iframe)", message_RU: "nao sei russo :c desculpa" }],
		"s-770-1000-2106-0": [{ type: "text", sub_type: "message", message_PT: "Salto Frente Stun (Iframe)", message_RU: "nao sei russo :c desculpa" }],
		"s-770-1000-1107-0": [{ type: "text", sub_type: "message", message_PT: "Frente Empurrar", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
		"s-770-1000-2107-0": [{ type: "text", sub_type: "message", message_PT: "Frente Empurrar", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
//		"s-770-1000-1117-0": [{ type: "text", sub_type: "message", message_PT: "Esmagar Frente", message_RU: "nao sei russo :c desculpa" }],
//		"s-770-1000-2117-0": [{ type: "text", sub_type: "message", message_PT: "Esmagar Frente", message_RU: "nao sei russo :c desculpa" }],
	
	// 2-3 BOSS
			"nd-770-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-770-3000-1102-0": [{ type: "text", sub_type: "message", message_PT: "Mão Esquerda", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-2102-0": [{ type: "text", sub_type: "message", message_PT: "Mão Esquerda", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1101-0": [{ type: "text", sub_type: "message", message_PT: "Mão Direita", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-2101-0": [{ type: "text", sub_type: "message", message_PT: "Mão Direita", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1103-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Atrás", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "vector", args: [553, 283, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 77, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 165, 488, 270, 200, 0, 1400] }
		],
		"s-770-3000-2103-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Atrás", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "vector", args: [553, 283, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 77, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 165, 488, 270, 200, 0, 1400] }
		],
		"s-770-3000-1301-0": [{ type: "text", sub_type: "message", message_PT: "Círculos Explosivos", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-2301-0": [{ type: "text", sub_type: "message", message_PT: "Círculos Explosivos", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1106-0": [{ type: "text", sub_type: "message", message_PT: "Deslize Frontal", message_RU: "Передний удар" }],
		"s-770-3000-2106-0": [{ type: "text", sub_type: "message", message_PT: "Deslize Frontal", message_RU: "Передний удар" }],
		"s-770-3000-1110-0": [{ type: "text", sub_type: "message", message_PT: "Cauda AOE", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "semicircle", args: [26, 340, 553, 0, 0, 7, 630, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 4, 40, 338, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, -4, 40, -338, 600, 0, 3000] }	
		],
		"s-770-3000-2110-0": [{ type: "text", sub_type: "message", message_PT: "Cauda AOE", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "semicircle", args: [26, 340, 553, 0, 0, 7, 630, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 4, 40, 338, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, -4, 40, -338, 600, 0, 3000] }			
		],
		"s-770-3000-1304-0": [{ type: "text", sub_type: "message", message_PT: "Prepare-se! (para dentro e fora)", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1303-0": [{ type: "text", sub_type: "message", message_PT: "Prepare-se! (para dentro e fora)", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1113-0": [{ type: "text", sub_type: "message", message_PT: "SAIR | ENTRAR", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],
		"s-770-3000-2113-0": [{ type: "text", sub_type: "message", message_PT: "SAIR | ENTRAR", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],
		"s-770-3000-1116-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR | SAIR", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "circle", args: [false, 553,0, 0, 15, 300, 0, 5000] }
		],
		"s-770-3000-2116-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR | SAIR", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "circle", args: [false, 553,0, 0, 15, 300, 0, 5000] }
		],
		"s-770-3000-1108-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Frente", message_RU: "Double shooting skulls" },
			{ type: "spawn", func: "circle", args: [false, 553, -7, 280, 20, 155, 0, 2000] }
		],
		"s-770-3000-2108-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Frente", message_RU: "Double shooting skulls" },
			{ type: "spawn", func: "circle", args: [false, 553, -7, 280, 20, 155, 0, 2000] }
		],		
		"s-770-3000-1120-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Laser (Triplo)", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-2120-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Laser (Triplo)", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1121-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Laser (Duplo)", message_RU: "Double shooting skulls" }],
		"s-770-3000-2121-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Laser (Duplo)", message_RU: "Double shooting skulls" }]
	};
};