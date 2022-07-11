//Bathysmal Rise (Normal)
//
//made by michengs / Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	
	return {
		// 1 BOSS
		"s-754-1000-1101-0": [{ type: "text", sub_type: "message", message_PT: "Esquerda", message_ES: "Izquierda", message: "Left" }],
		"s-754-1000-1102-0": [{ type: "text", sub_type: "message", message_PT: "Direita", message_ES: "Derecha", message: "Right" }],
		"s-754-1000-1103-0": [{ type: "text", sub_type: "message", message_PT: "Cabeçada!", message_ES: "Cabezazo!", message: "Head Slam!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 200, 12, 275, 0, 4000]}
		],
		"s-754-1000-1105-0": [{ type: "text", sub_type: "message", message_PT: "Entrar", message_ES: "Entrar", message: "Get in" }],
		"s-754-1000-1106-0": [{ type: "text", sub_type: "message", message_PT: "Círculo Aleatório", message_ES: "Círculo Aleatorio", message: "Random Circle" }],
		"s-454-1000-1108-0": [{ type: "text", sub_type: "message", message_PT: "Lado Esquerdo", message_ES: "Lado Izquierdo", message: "left side" }],
		"s-454-1000-1109-0": [{ type: "text", sub_type: "message", message_PT: "Lado Direito", message_ES: "Lado Derecho", message: "right side" }],
		"s-754-1000-2101-0": "s-754-1000-1101-0",
		"s-754-1000-2102-0": "s-754-1000-1102-0",
		"s-754-1000-2103-0": "s-754-1000-1103-0",
		"s-754-1000-2105-0": "s-754-1000-1105-0",
		"s-754-1000-2106-0": "s-754-1000-1106-0",
		"s-454-1000-2108-0": "s-454-1000-1108-0",
		"s-454-1000-2109-0": "s-454-1000-1109-0",

		"s-754-1000-3101-0": [{ type: "text", sub_type: "message", message_PT: "Destruição de Rochas", message_ES: "Destrucción de Rocas", message: "Rocks Destroyed" }],
		"s-754-1000-3103-0": [{ type: "text", sub_type: "message", message_PT: "Derrubar o Bos", message_ES: "Derribar al Boss", message: "Knock Down Boss" }],

		// 2 BOSS
		//"s-754-1001-1101-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Frontal", message_ES: "Ataque Frontal", message: "Frontal Attack" }],
		//"s-754-1001-1102-0": [{ type: "text", sub_type: "message", message_PT: "Virar Atrás (Rápido)", message_ES: "Voltereta Atrás (Rápida)", message: "Back Flip (Fast)" }],
		"s-754-1001-1104-0": [{ type: "text", sub_type: "message", message_PT: "Giro Frontal", message_ES: "Giro Frontal!", message: "Frontal Spin!" }],
		"s-754-1001-1105-0": [{ type: "text", sub_type: "message", message_PT: "Cauda", message_ES: "Coletazo", message: "Tail" }],
		"s-754-1001-1108-0": [{ type: "text", sub_type: "message", message_PT: "Veneno Aleatório", message_ES: "Veneno Aleatorio", message: "Random Poison" }],
		"s-754-1001-1109-0": [{ type: "text", sub_type: "message", message_PT: "Puxar + Veneno", message_ES: "Jalar + Veneno", message: "Pull + Poison" },
			{ type: "text", sub_type: "message","delay": 1500, message_PT: "Cegar", message_ES: "Destello", message: "Flash" }
		],
		"s-754-1001-1110-0": [{ type: "text", sub_type: "message", message_PT: "Giro (Lento)", message_ES: "Giro! (Lento)", message: "Spin! (Slow)" }],
		"s-754-1001-1113-0": [{ type: "text", sub_type: "message", message_PT: "Poças de Limo", message_ES: "Charco de Limo", message: "Slime Puddle" }],
		"s-754-1001-1111-0": [{ type: "text", sub_type: "message", message_PT: "Ataque de Carga Giratorio", message_ES: "Ataque de Carga Giratorio", message: "Spin Lunge Attack" }],
		"s-754-1001-2104-0": "s-754-1001-1104-0",
		"s-754-1001-2105-0": "s-754-1001-1105-0",
		"s-754-1001-2108-0": "s-754-1001-1108-0",
		"s-754-1001-2110-0": "s-754-1001-1110-0",
		"s-754-1001-2109-0": "s-754-1001-1109-0",
		"s-754-1001-2113-0": "s-754-1001-1113-0",
		"s-754-1001-2111-0": "s-754-1001-1111-0",
			
		"s-754-1001-3103-0": [{ type: "text", sub_type: "message", message_PT: "Derrubar o Bos", message_ES: "Derribar al Boss", message: "Knock Down Boss" }],
		"s-754-1001-3105-0": [{ type: "text", sub_type: "message", message_PT: "Veneno", message_ES: "Veneno", message: "Poison" }],
		"s-754-1001-3102-0": [{ type: "text", sub_type: "message", message_PT: "Grande Salto + Onda", message_ES: "Gran Salto + Ola", message: "Big Jump + Wave" }],
		"s-754-403-1101-0": [{ type: "text", sub_type: "message", message_PT: "Parede de Água (Quebrar)", message_ES: "Pared de Agua (Romper)", message: "Water Wall (Breake)" },
			{ type: "spawn", func: "marker", args: [false, 500, 180, 100, 9000]}
		],
		
		// 3BOSS
		"s-754-1002-1102-0": [{ type: "text", sub_type: "message", message_PT: "Golpe Frontal", message_ES: "Golpe Frontal", message: "Frontal Attack" }],
		"s-754-1002-1104-0": [{ type: "text", sub_type: "message", message_PT: "Donut (Entrar)", message_ES: "Dona (Entrar)", message: "Donut (In)" }],
		"s-754-1002-1107-0": [{ type: "text", sub_type: "message", message_PT: "Golpe Atrás (Rápido)", message_ES: "Golpe Atrás (Rápido)", message: "Back Hit! (Fast)" }],
		"s-754-1002-1108-0": [{ type: "text", sub_type: "message", message_PT: "Golpe Atrás", message_ES: "Golpe Atrás", message: "Back Hit" }],
		"s-754-1002-1112-0": [{ type: "text", sub_type: "message", message_PT: "Salto (Rápido)", message_ES: "Salto (Rápido)", message: "Jump (Fast)" }],
		"s-754-1002-1106-0": [{ type: "text", sub_type: "message", message_PT: "Esquerda Ataque", message_ES: "Ataque Izquierda", message: "Left Attack" }],
		"s-754-1002-1110-0": [{ type: "text", sub_type: "message", message_PT: "Mudança de Engrenagem", message_ES: "Barrido Engranajes", message: "Gear Sweep" }],
		"s-754-1002-2102-0": "s-754-1002-1102-0",
		"s-754-1002-2104-0": "s-754-1002-1104-0",
		"s-754-1002-2107-0": "s-754-1002-1107-0",
		"s-754-1002-2108-0": "s-754-1002-1108-0",
		"s-754-1002-2112-0": "s-754-1002-1112-0",
		"s-754-1002-2106-0": "s-754-1002-1106-0",
		"s-754-1002-2110-0": "s-754-1002-1110-0",

		"s-754-1002-3105-0": [{ type: "text", sub_type: "message", message_PT: "Entrar", message_ES: "Entrar", message: "Get In" }],
		"s-754-1002-3117-0": [{ type: "text", sub_type: "message", message_PT: "Entrar - Sair - Entrar", message_ES: "Entrar - Salir - Entrar", message: "In Out in" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 290, 0, 10000]}
		],
		"s-754-1002-3106-0": [{ type: "text", sub_type: "message", message_PT: "Corte Completo (Sair)", message_ES: "Corte Completado (Salir)", message: "Cut Completed (Get Out)" }],
		"s-754-1002-3113-0": [{ type: "text", sub_type: "message", message_PT: "Quebrar ESCUDO", message_ES: "ROMPER ESCUDO", message: "BREAKE SHIELD" }],

		"s-754-1002-3119-0": [{ type: "text", sub_type: "message", message_PT: "Ataque de Onda (Ir Centro Juntar)", message_ES: "Ataque de Ola (Ir Centro )", message: "Wave Attack (Go Center)" }],
		"qb-754-1002-754001": [{ type: "text", sub_type: "alert", message_PT: "Esfera Eletrônica", message_ES: "Esfera Eléctrica", message: "Electric Ball" },
			{ type: "text", sub_type: "alert","delay": 45000, message_PT: "Esfera Eletrônica Pronta", message_ES: "Esfera Eléctrica Lista", message: "Electric Ball Ready" }
		],
		// Ataques especiais
		"s-754-100-1101-0": [//{ type: "text", sub_type: "notification", message_PT: "Esfera (Fique Longe)", message_ES: "Esfera (Alejarse)", message: "Ball (Stay Away)" },
			{ type: "spawn", func: "marker", args: [false, 0, 0, 100, 3000]}
		]
	}
};