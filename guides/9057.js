// Akeron's Inferno (Difícil)
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	
	return {
		// 1 BOSS
		"nd-457-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1001-1104-0": [{ type: "text", sub_type: "message", message_PT: "Mão Direita (Empurrar)", message_ES: "Mano Derecha (Empujar)", message: "Right Hand (Push)" }],
		"s-457-1001-1117-0": [{ type: "text", sub_type: "message", message_PT: "Patadas (Esmagar)", message_ES: "Patadas (Aplastar)", message: "Kick (Smash)" }],
		"s-457-1001-1118-0": [{ type: "text", sub_type: "message", message_PT: "Salto Aleatório", message_ES: "Salto Aleatorio", message: "Random Jump" }],
		"s-457-1001-1116-0": [{ type: "text", sub_type: "message", message_PT: "Saltos (Tank)", message_ES: "Saltos (Tank)", message: "Jumps (Tank)" }],
		"s-457-1001-1107-0": [{ type: "text", sub_type: "message", message_PT: "Frente", message_ES: "Frente", message: "Front" }],
		"s-457-1001-1206-0": [{ type: "text", sub_type: "message", message_PT: "Salto Atrás", message_ES: "Salto Atrás", message: "Jump Back" }],
		"s-457-1001-1109-0": [{ type: "text", sub_type: "message", message_PT: "AoE Frente", message_ES: "AoE Frente", message: "Front AoE" }],
		"s-457-1001-1108-0": [{ type: "text", sub_type: "message", message_PT: "Salto Aleatório", message_ES: "Salto Aleatorio", message: "Random Jump" }],
		"s-457-1001-2104-0": "s-457-1001-1104-0",
		"s-457-1001-2117-0": "s-457-1001-1117-0",
		"s-457-1001-2118-0": "s-457-1001-1118-0",
		"s-457-1001-2116-0": "s-457-1001-1116-0",
		"s-457-1001-2107-0": "s-457-1001-1107-0",
		"s-457-1001-2206-0": "s-457-1001-1206-0",
		"s-457-1001-2109-0": "s-457-1001-1109-0",
		"s-457-1001-2108-0": "s-457-1001-1108-0",
		
		// 2 BOSS
		"nd-457-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1002-1105-0": [{ type: "text", sub_type: "message", message_PT: "Chamas Alvo", message_ES: "Aliento de Fuego", message: "Fire Breath" }],
		"s-457-1002-1108-0": [{ type: "text", sub_type: "message", message_PT: "Bombas de Fogo", message_ES: "Bombas de Fuego", message: "Fire Bombs" }],
		"s-457-1002-1109-0": [{ type: "text", sub_type: "message", message_PT: "Nadar + Ataque Atrás", message_ES: "Nadar + Ataque Atrás", message: "Swim + Back Attack" }],
		"s-457-1002-1206-0": [{ type: "text", sub_type: "message", message_PT: "Salto + Ataque Aleatório", message_ES: "Salto + Ataque Aleatorio", message: "Jump + Random Target" }],
		"s-457-1002-1204-0": [{ type: "text", sub_type: "message", message_PT: "AoE Amplo", message_ES: "AoE Amplio", message: "Large AoE", delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 630, 3000, 4000] }
		],
		"s-457-1002-1107-0": [{ type: "text", sub_type: "message", message_PT: "Giro", message_ES: "Giro", message: "Spin" }],
		"s-457-1002-1106-1": [{ type: "text", sub_type: "message", message_PT: "AoE + Chamas", message_ES: "AoE + Llamas", message: "AoE + Side Flames", delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 3000, 4000] }
		],
		"s-457-1002-1112-0": [{ type: "text", sub_type: "message", message_PT: "Alvo Bolas de Fogo", message_ES: "Objetivo Bolas de Fuego", message: "Target Fireball" }],
		"s-457-1002-2105-0": "s-457-1002-1105-0",
		"s-457-1002-2108-0": "s-457-1002-1108-0",
		"s-457-1002-2109-0": "s-457-1002-1109-0",
		"s-457-1002-2206-0": "s-457-1002-1206-0",
		"s-457-1002-2204-0": "s-457-1002-1204-0",
		"s-457-1002-2107-0": "s-457-1002-1107-0",
		"s-457-1002-2106-1": "s-457-1002-1106-1",
		"s-457-1002-2112-0": "s-457-1002-1112-0",
		
		// 3 BOSS
		"nd-457-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1003-1105-0": [{ type: "text", sub_type: "message", message_PT: "AoE", message_ES: "AoE", message: "AoE" }],
		"s-457-1003-1203-0": [{ type: "text", sub_type: "message", message_PT: "Ataque de Corte Giratorio", message_ES: "Ataque de Corte Giratorio", message: "Spin Cut Attack" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 100, 4000] }
		],
		"s-457-1003-1110-0": [{ type: "text", sub_type: "message", message_PT: "Veneno (Círculo)", message_ES: "Veneno (Círculo)", message: "Poison (Circle)" }],
		"s-457-1003-2105-0": "s-457-1003-1105-0",
		"s-457-1003-2203-0": "s-457-1003-1203-0",
		"s-457-1003-2110-0": "s-457-1003-1110-0",

		// 4 BOSS
		"nd-457-1004": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-457-1004-99": [{ type: "func", func: () => mech_enable = true }],
		"h-457-1004-20": [{ type: "func", func: () => mech_enable = false }],
		"s-457-1004-1105-0": [{ type: "text", sub_type: "message", message_PT: "Golpe Frontal", message_ES: "Golpe Frontal", message: "Frontal Hit" }],
		"s-457-1004-1106-0": [{ type: "text", sub_type: "message", message_PT: "Disparo Aleatório", message_ES: "Disparo Aleatorio", message: "Random Shot" },
			{ type: "spawn", func: "vector", args: [912, 459, 120, 12, 1150, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 251, 100, -13, 1150, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 360, 0, 0, 1150, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 250, 70, -6, 1150, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 460, 70, 6, 1150, 0, 3000] }
		],
		"s-457-1004-1107-0": [{ type: "text", sub_type: "message", message_PT: "Chicote Aleatório", message_ES: "Latigo Aleatorio", message: "Random Whip" },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 900, 0, 2000] }
		],
		"s-457-1004-1108-0": [{ type: "text", sub_type: "message", message_PT: "Linha Terra", message_ES: "Línea de Tierra", message: "Earth Line" }],
		"s-457-1004-1111-0": [{ type: "text", sub_type: "message", message_PT: "Combo de Pisadas", message_ES: "Combo de Pisadas", message: "Stomp Combo" }],
		"s-457-1004-3108-0": [{ type: "text", sub_type: "message", message_PT: "Iframe", message_ES: "Iframe", message: "Iframe" }],
		"s-457-1004-3105-0": [{ type: "text", sub_type: "message", message_PT: "Ataque AoE", message_ES: "Ataque AoE", message: "AoE Attack" }],
		"s-457-1004-3106-0": [{ type: "text", sub_type: "message", message_PT: "Donut AoE", message_ES: "Dona AoE", message: "Donut AoE" }],
		"s-457-1004-3103-0": [{ type: "text", sub_type: "message", message_PT: "Pisada AoE", message_ES: "Pisada AoE", message: "AoE Stomp" }],
		"s-457-1004-4201-0": [{ type: "text", sub_type: "message", message_PT: "Lava", message_ES: "Lava", message: "Lava" },
			{ type: "text", sub_type: "message", message_PT: "Círculos Seguro", message_ES: "Círculos Seguro", message: "Safe Circles", delay: 1500 },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 12000, pos: { x: -83453, y: 100168, z: 3389} },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 12000, pos: { x: -83453, y: 100168, z: 3389, w: -2.36}, ownerName: "Seguro", message: "SEGURO" },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 12000, pos: { x: -83463, y: 99177, z: 3389} },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 12000, pos: { x: -83463, y: 99177, z: 3389, w: 2.38}, ownerName: "Seguro", message: "SEGURO" },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 12000, pos: { x: -84461, y: 99186, z: 3389} },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 12000, pos: { x: -84461, y: 99186, z: 3389, w: 0.80}, ownerName: "Seguro", message: "SEGURO" },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 12000, pos: { x: -84452, y: 100173, z: 3389} },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 12000, pos: { x: -84452, y: 100173, z: 3389, w: -0.79}, ownerName: "Seguro", message: "SEGURO" }
		],
		"qb-457-405-457016": [{ type: "text", sub_type: "message", message_PT: "ESCUDO", message_ES: "ESCUDO", message: "SHIELD" }],
		"qb-457-1004-457003": [{ type: "text", sub_type: "notification", message_PT: "Matar Minions", message_ES: "Matar Minions", message: "Kill Minions", check_func: () => mech_enable }],
		"s-457-1004-2105-0": "s-457-1004-1105-0",
		"s-457-1004-2106-0": "s-457-1004-1106-0",
		"s-457-1004-2107-0": "s-457-1004-1107-0",
		"s-457-1004-2108-0": "s-457-1004-1108-0",
		"s-457-1004-2111-0": "s-457-1004-1111-0"
	};
};