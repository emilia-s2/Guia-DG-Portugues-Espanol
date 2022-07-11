//Bathysmal Rise (Difícil)
//
//made by michengs / Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	
	return {
		// 1 BOSS
		"s-454-1000-1101-0": [{ type: "text", sub_type: "message", message_PT: "Esquerda", message_ES: "Izquierda", message: "Left" }],
		"s-454-1000-1102-0": [{ type: "text", sub_type: "message", message_PT: "Direita", message_ES: "Derecha", message: "Right" }],
		"s-454-1000-1103-0": [{ type: "text", sub_type: "message", message_PT: "Cabeçada!", message_ES: "Cabezazo!", message: "Head Slam!" },//
			{ type: "spawn", func: "circle", args: [false, 553, 0, 200, 12, 275, 0, 4000]}
		],
		"s-454-1000-1104-0": [{ type: "text", sub_type: "message", message_PT: "Giro Sair (Lento)", message_ES: "Giro Alejarse (Lento)", message: "Spin get out (Slow)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 200, 0, 5000]}
		],
		"s-454-1000-1105-0": [{ type: "text", sub_type: "message", message_PT: "Entrar", message_ES: "Entrar", message: "Get in" }],
		"s-454-1000-1106-0": [{ type: "text", sub_type: "message", message_PT: "Círculo Aleatório", message_ES: "Círculo Aleatorio", message: "Random Circle" }],//
		"s-454-1000-1107-0": [{ type: "text", sub_type: "message", message_PT: "Operação Tartaruga", message_ES: "Operación Tortuga", message: "Action Turtle" }],
		"s-454-1000-1108-0": [{ type: "text", sub_type: "message", message_PT: "Lado Esquerdo", message_ES: "Lado Izquierdo", message: "left side" }],
		"s-454-1000-1109-0": [{ type: "text", sub_type: "message", message_PT: "Lado Direito", message_ES: "Lado Derecho", message: "right side" }],
		"s-454-1000-1201-0": [{ type: "text", sub_type: "message", message_PT: "Pancada", message_ES: "Placaje", message: "Body Slam!" }],
		"s-454-1000-1202-0": [{ type: "text", sub_type: "message", message_PT: "Invocar Tartarugas", message_ES: "Invocación de Tortugas", message: "Turtles Summon" }],
		"s-454-1000-1203-0": [{ type: "text", sub_type: "message", message_PT: "Salto Tonto", message_ES: "Mareo, Salta", message: "Dizzy, Jump" }],
		"s-454-1000-1204-0": [{ type: "text", sub_type: "message", message_PT: "Lembrete do Modo Tartaruga", message_ES: "Recordatorio del Modo Tortuga", message: "Turtle Mode Reminder" }],
		"s-454-1000-1205-0": [{ type: "text", sub_type: "message", message_PT: "Escape de Tartaruga", message_ES: "Escape de Tortuga", message: "Scape Turtle" }],
		"s-454-1000-1206-0": [{ type: "text", sub_type: "message", message_PT: "Atmósfera Ácida", message_ES: "Atmósfera Ácida", message: "Acid Atmosphere" }],
		"s-454-1000-2101-0": "s-454-1000-1101-0",
		"s-454-1000-2102-0": "s-454-1000-1102-0",
		"s-454-1000-2103-0": "s-454-1000-1103-0",
		"s-454-1000-2104-0": "s-454-1000-1104-0",
		"s-454-1000-2105-0": "s-454-1000-1105-0",
		"s-454-1000-2106-0": "s-454-1000-1106-0",
		"s-454-1000-2107-0": "s-454-1000-1107-0",
		"s-454-1000-2108-0": "s-454-1000-1108-0",
		"s-454-1000-2109-0": "s-454-1000-1109-0",
		"s-454-1000-2201-0": "s-454-1000-1201-0",
		"s-454-1000-2202-0": "s-454-1000-1202-0",
		"s-454-1000-2203-0": "s-454-1000-1203-0",
		"s-454-1000-2204-0": "s-454-1000-1204-0",
		"s-454-1000-2205-0": "s-454-1000-1205-0",
		"s-454-1000-2206-0": "s-454-1000-1206-0",
	
		"s-454-1000-3101-0": [{ type: "text", sub_type: "message", message_PT: "Destruição de Rochas", message_ES: "Destrucción de Rocas", message: "Rocks Destroyed" }],
		"s-454-1000-3102-0": [{ type: "text", sub_type: "message", message_PT: "Vômito Ácido Aleatório", message_ES: "Vómito Ácido Aleatorio", message: "Random Acid Puke" }], //
		"s-454-1000-3103-0": [{ type: "text", sub_type: "message", message_PT: "Derrubar o Bos", message_ES: "Derribar al Boss", message: "Knock Down Boss" }],
		"s-454-1000-3104-0": [{ type: "text", sub_type: "message", message_PT: "Quebrar Escudo!", message_ES: "ROMPER ESCUDO!", message: "BREAKE SHIELD!" }],

		// 2 BOSS
		//"s-454-1001-1101-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Frontal", message_ES: "Ataque Frontal", message: "Frontal Attack" }],
		//"s-454-1001-1102-0": [{ type: "text", sub_type: "message", message_PT: "Virar Atrás (Rápido)", message_ES: "Voltereta Atrás (Rápida)", message: "Back Flip (Fast)" }],
		"s-454-1001-1104-0": [{ type: "text", sub_type: "message", message_PT: "Giro Frontal", message_ES: "Giro Frontal!", message: "Frontal Spin!" }],
		"s-454-1001-1105-0": [{ type: "text", sub_type: "message", message_PT: "Cauda", message_ES: "Coletazo", message: "Tail" }],
		"s-454-1001-1108-0": [{ type: "text", sub_type: "message", message_PT: "Veneno Aleatório", message_ES: "Veneno Aleatorio", message: "Random Poison" }],
		"s-454-1001-1109-0": [{ type: "text", sub_type: "message", message_PT: "Puxar + Veneno", message_ES: "Jalar + Veneno", message: "Pull + Poison" },
			{ type: "text", sub_type: "message","delay": 1500, message_PT: "Cegar", message_ES: "Destello", message: "Flash" }
		],
		"s-454-1001-1110-0": [{ type: "text", sub_type: "message", message_PT: "Giro (Lento)", message_ES: "Giro! (Lento)", message: "Spin! (Slow)" }],
		"s-454-1001-1113-0": [{ type: "text", sub_type: "message", message_PT: "Poças de Limo", message_ES: "Charco de Limo", message: "Slime Puddle" }],
		"s-454-1001-1111-0": [{ type: "text", sub_type: "message", message_PT: "Ataque de Carga Giratorio", message_ES: "Ataque de Carga Giratorio", message: "Spin Lunge Attack" }],
		"s-454-1001-2104-0": "s-454-1001-1104-0",
		"s-454-1001-2105-0": "s-454-1001-1105-0",
		"s-454-1001-2108-0": "s-454-1001-1108-0",
		"s-454-1001-2110-0": "s-454-1001-1110-0",
		"s-454-1001-2109-0": "s-454-1001-1109-0",
		"s-454-1001-2113-0": "s-454-1001-1113-0",
		"s-454-1001-2111-0": "s-454-1001-1111-0",
			
		"s-454-1001-3103-0": [{ type: "text", sub_type: "message", message_PT: "Derrubar o Bos", message_ES: "Derribar al Boss", message: "Knock Down Boss" }],
		"s-454-1001-3105-0": [{ type: "text", sub_type: "message", message_PT: "Veneno", message_ES: "Veneno", message: "Poison" }],
		"s-454-1001-3102-0": [{ type: "text", sub_type: "message", message_PT: "Grande Salto + Onda", message_ES: "Gran Salto + Ola", message: "Big Jump + Wave" }],
		"s-454-403-1101-0": [{ type: "text", sub_type: "message", message_PT: "Parede de Água (Quebrar)", message_ES: "Pared de Agua (Romper)", message: "Water Wall (Breake)" },
			{ type: "spawn", func: "marker", args: [false, 500, 180, 100, 9000]}
		],
		
		// 3BOSS
		"s-454-1002-1102-0": [{ type: "text", sub_type: "message", message_PT: "Golpe Frontal", message_ES: "Golpe Frontal", message: "Frontal Attack" }],
		"s-454-1002-1103-0": [{ type: "text", sub_type: "message", message_PT: "Alvo Aleatorio", message_ES: "Objetivo Aleatorio", message: "Random Target" }],
		"s-454-1002-1104-0": [{ type: "text", sub_type: "message", message_PT: "Donut (Entrar)", message_ES: "Dona (Entrar)", message: "Donut (In)" }],
		"s-454-1002-1107-0": [{ type: "text", sub_type: "message", message_PT: "Golpe Atrás (Rápido)", message_ES: "Golpe Atrás (Rápido)", message: "Back Hit! (Fast)" }],
		"s-454-1002-1108-0": [{ type: "text", sub_type: "message", message_PT: "Golpe Atrás", message_ES: "Golpe Atrás", message: "Back Hit" }],
		"s-454-1002-1112-0": [{ type: "text", sub_type: "message", message_PT: "Salto (Rápido)", message_ES: "Salto (Rápido)", message: "Jump (Fast)" }],
		"s-454-1002-1106-0": [{ type: "text", sub_type: "message", message_PT: "Esquerda Ataque", message_ES: "Ataque Izquierda", message: "Left Attack" }],
		"s-454-1002-1110-0": [{ type: "text", sub_type: "message", message_PT: "Mudança de Engrenagem", message_ES: "Barrido Engranajes", message: "Gear Sweep" }],
		"s-454-1002-2102-0": "s-454-1002-1102-0",
		"s-454-1002-2103-0": "s-454-1002-1103-0",
		"s-454-1002-2104-0": "s-454-1002-1104-0",
		"s-454-1002-2107-0": "s-454-1002-1107-0",
		"s-454-1002-2108-0": "s-454-1002-1108-0",
		"s-454-1002-2112-0": "s-454-1002-1112-0",
		"s-454-1002-2106-0": "s-454-1002-1106-0",
		"s-454-1002-2110-0": "s-454-1002-1110-0",

		"s-454-1002-3105-0": [{ type: "text", sub_type: "message", message_PT: "Entrar", message_ES: "Entrar", message: "Get In" }],
		"s-454-1002-3117-0": [{ type: "text", sub_type: "message", message_PT: "Entrar", message_ES: "Entrar", message: "In" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 290, 0, 10000]},
			{ type: "text", sub_type: "message", message_PT: "Sair", message_ES: "Salir", message: "Out", delay: 3500 },
			{ type: "text", sub_type: "message", message_PT: "Entrar", message_ES: "Entrar", message: "In", delay: 5500 }
			
		],
		"s-454-1002-3110-0": [{ type: "text", sub_type: "message", message_PT: "Pizza", message_ES: "Pizza", message: "Pizza" },
			{ type: "spawn", func: "marker", args: [false, 30, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 90, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 150, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 210, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 270, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 330, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 0, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 120, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 180, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 240, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 30, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 90, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 150, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 210, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 270, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 330, 201, 4000, 6000, true, null] }
		],
		"s-454-1002-3106-0": [{ type: "text", sub_type: "message", message_PT: "Corte Completo (Sair)", message_ES: "Corte Completado (Salir)", message: "Cut Completed (Get Out)" }],
		"s-454-1002-3113-0": [{ type: "text", sub_type: "message", message_PT: "Quebrar ESCUDO!", message_ES: "ROMPER ESCUDO!", message: "BREAKE SHIELD!" }],
		"s-454-1002-3115-0": [{ type: "text", sub_type: "message", message_PT: "25% Modo Explosão", message_ES: "25% Modo Explosión", message: "25% Blast Mode" }],
		"s-454-1002-3119-0": [{ type: "text", sub_type: "message", message_PT: "Ataque de Onda (Ir Centro)", message_ES: "Ataque de Ola (Ir Centro)", message: "Wave Attack (Go Center)" }],
		"qb-454-1002-454001": [{ type: "text", sub_type: "alert", message_PT: "Esfera Eletrônica", message_ES: "Esfera Eléctrica", message: "Electric Ball" },
			{ type: "text", sub_type: "alert","delay": 45000, message_PT: "Esfera Eletrônica Pronta", message_ES: "Esfera Eléctrica Lista", message: "Electric Ball Ready" }
		],

		// Ataques especiais
		"qb-454-402-454008": [{ type: "text", sub_type: "message", message_PT: "Onda Ataque", message_ES: "Ataque de Ola", message: "Water Wave Attack" },
			{ type: "text", sub_type: "notification","delay": 70000, message_PT: "Ataque Onda Em Breve", message_ES: "Ataque de Ola Pronto", message: "Water Wave Attack Soon" },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1300, 0, 4000]},
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 1300, 0, 4000]},
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 1300, 0, 4000]},
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 1300, 0, 4000]}
		],
		"qb-454-1000-454012": [{ type: "text", sub_type: "message", message_PT: "Consertar a Placa", message_ES: "Repara la PLACA", message: "Fix the SLATE" }],
		"dm-0-0-905420": [{ type: "text", sub_type: "message", message_PT: "Verificação Parede de Água", message_ES: "Verificación de Pared de Agua", message: "Water Wall Check" }],
		"s-454-100-1101-0": [//{ type: "text", sub_type: "notification", message_PT: "Esfera (Fique Longe)", message_ES: "Esfera (Alejarse)", message: "Ball (Stay Away)" },
			{ type: "spawn", func: "marker", args: [false, 0, 0, 100, 3000]}
		],
		"s-454-106-3101-0": [{ type: "text", sub_type: "message", message_PT: "1", message_ES: "1", message: "1" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 2200, 0, 15000]},
		],
		"s-454-107-3102-0": [{ type: "text", sub_type: "message", message_PT: "2", message_ES: "2", message: "2" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 2200, 0, 15000]}
		],
		"s-454-108-3103-0": [{ type: "text", sub_type: "message", message_PT: "3", message_ES: "3", message: "3" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 2200, 0, 15000]}
		],
		"s-454-109-3104-0": [{ type: "text", sub_type: "message", message_PT: "4", message_ES: "4", message: "4" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 2200, 0, 15000]}
		]
	}
};