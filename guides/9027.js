// Manaya's Core (Difícil)
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	
	return {		
		// 1 BOSS
		"s-427-42701-1106-0": [{ type: "text", sub_type: "message", message_PT: "Vento Frontal", message_ES: "Viento Frontal", message: "Frontal Wind" }],
		"s-427-42701-1102-0": [{ type: "text", sub_type: "message", message_PT: "Corte Frontal", message_ES: "Corte Frontal", message: "Frontal Cut" }],
		"s-427-42701-1104-0": [{ type: "text", sub_type: "message", message_PT: "Golpe Frontal ", message_ES: "Golpe Frontal", message: "Frontal Hit" }],
		"s-427-42701-1105-0": [{ type: "text", sub_type: "message", message_PT: "Onda AoE", message_ES: "Onda AoE", message: "AoE Wave" }],
		"s-427-42701-1110-0": [{ type: "text", sub_type: "message", message_PT: "Salto + AoE", message_ES: "Salto + AoE", message: "Jump + AoE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 3000] }
		],
		"s-427-42701-1114-1": [{ type: "text", sub_type: "message", message_PT: "AOE", message_ES: "AoE", message: "AoE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 110, 12, 250, 0, 2500] }
		],
		"s-427-42701-1112-0": [{ type: "text", sub_type: "message", message_PT: "AoE Frontal (Grande)", message_ES: "AoE Frontal (Grande)", message: "Frontal AoE (Big)" }],
		"s-427-42701-1215-0": [{ type: "text", sub_type: "message", message_PT: "AoE", message_ES: "AoE", message: "AoE" }],
		"s-427-42701-1214-0": [{ type: "text", sub_type: "message", message_PT: "Corte Frontal + AoE", message_ES: "Corte Frontal + AoE", message: "Frontal Cut + AoE" }],
		"s-427-42701-1121-0": [{ type: "text", sub_type: "message", message_PT: "Salto + Corte Frontal", message_ES: "Salto + Corte Frontal", message: "Jump + Frontal Cut" }],
		"s-427-42701-2106-0": "s-427-42701-1106-0",
		"s-427-42701-2102-0": "s-427-42701-1102-0",
		"s-427-42701-2104-0": "s-427-42701-1104-0",
		"s-427-42701-2105-0": "s-427-42701-1105-0",
		"s-427-42701-2110-0": "s-427-42701-1110-0",
		"s-427-42701-2114-1": "s-427-42701-1114-1",
		"s-427-42701-2112-0": "s-427-42701-1112-0",
		"s-427-42701-2215-0": "s-427-42701-1215-0",
		"s-427-42701-2214-0": "s-427-42701-1214-0",
		"s-427-42701-2121-0": "s-427-42701-1121-0",

		// 2 BOSS
		"s-427-42702-1104-0": [{ type: "text", sub_type: "message", message_PT: "Laser", message_ES: "Láser", message: "Laser" }],
		"s-427-42702-1109-0": [{ type: "text", sub_type: "message", message_PT: "Escudo Atrás (Esquerdo)", message_ES: "Escudo Atrás", message: "Back Shield Hit" }],
		"s-427-42702-1106-0": [{ type: "text", sub_type: "message", message_PT: "Bomba (Alvo)", message_ES: "Bomba (Objetivo)", message: "Bomb (Target)" }],
		"s-427-42702-1117-0": [{ type: "text", sub_type: "message", message_PT: "Stun + AoE", message_ES: "Stun + AoE", message: "Stun + AoE" }],
		"s-427-42702-1118-0": [{ type: "text", sub_type: "message", message_PT: "Stun + Onda", message_ES: "Stun + Onda", message: "Stun + Wave" }],
		"s-427-42702-1112-0": [{ type: "text", sub_type: "message", message_PT: "Salto Atrás", message_ES: "Salto Atrás", message: "Jump Backwards" }],
		
		"qb-427-42702-427030": [{ type: "text", sub_type: "notification", message_PT: "Matar Minions [c=#05a0fa]Azuis[/c]", message_ES: "Matar Minions [c=#05a0fa]Azules[/c]", message: "Kill [c=#05a0fa]Blue[/c] Minions" }],//69%
		"dm-0-0-9027004": [{ type: "text", sub_type: "notification", message_PT: "Matar Minions [c=#05a0fa]Azuis[/c]", message_ES: "Matar Minions [c=#05a0fa]Azules[/c]", message: "Kill [c=#05a0fa]Blue[/c] Minions" }],	//18%
		"dm-0-0-9027005": [{ type: "text", sub_type: "notification", message_PT: "Matar Minions [c=#e82331]Vermelhos[/c]", message_ES: "Matar Minions [c=#e82331]Rojos[/c]", message: "Kill [c=#e82331]Red[/c] Minions" }],	//18%
		"s-427-42702-2104-0": "s-427-42702-1104-0",
		"s-427-42702-2109-0": "s-427-42702-1109-0",
		"s-427-42702-2106-0": "s-427-42702-1106-0",
		"s-427-42702-2117-0": "s-427-42702-1117-0",
		"s-427-42702-2118-0": "s-427-42702-1118-0",
		"s-427-42702-2112-0": "s-427-42702-1112-0",
		
		// 3 BOSS
		// Fase 1
		"s-427-2001-1101-0": [{ type: "text", sub_type: "message", message_PT: "Flechas AoE (+)", message_ES: "Flechas AoE (+)", message: "Arrows AoE (+)" },
		{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 490, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 120, 100, 176, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 240, 100, -176, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 60, 100, 4, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 300, 100, -4, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 150, -100, 274, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 210, 100, -94, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, -30, -101, 94, 400, 0, 5000] }, 
			{ type: "spawn", func: "vector", args: [553, 210, -101, 86, 400, 0, 5000] }  
		],
		"s-427-2001-1102-0": [{ type: "text", sub_type: "message", message_PT: "Flechas AoE (X)", message_ES: "Flechas AoE (X)", message: "Arrows AoE (X)" },
			{ type: "spawn", func: "vector", args: [553, 160, 110, 222, 450, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 290, 110, -132, 450, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 110, 110, 48, 450, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 340, 110, 42, 450, 0, 5000] },	
			{ type: "spawn", func: "vector", args: [553, 10, 115, -41, 450, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 260, 115, -49, 450, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 80, 115, 131, 450, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 190, 115, -221, 450, 0, 5000] }
		],
		"s-427-2001-1105-0": [{ type: "text", sub_type: "message", message_PT: "Flechas AoE (Pequenas)", message_ES: "Flechas AoE (Pequeñas)", message: "Arrows AoE (Small)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 210, 2000, 4000] }
		],
		"s-427-2001-1103-0": [{ type: "text", sub_type: "message", message_PT: "Ondas AoE", message_ES: "Olas AoE", message: "Wave AoE" }],
		"s-427-2001-1111-0": [{ type: "text", sub_type: "message", message_PT: "Stun", message_ES: "Stun", message: "Stun" }],
		"s-427-2004-1101-0": [{ type: "text", sub_type: "message", message_PT: "Garras", message_ES: "Garras", message: "Claws" }],
		"s-427-2001-1109-0": [{ type: "text", sub_type: "message", message_PT: "AoE Interno", message_ES: "AoE Interno", message: "Inner AoE" }],
		"s-427-2001-2101-0": "s-427-2001-1101-0",
		"s-427-2001-2102-0": "s-427-2001-1102-0",
		"s-427-2001-2105-0": "s-427-2001-1105-0",
		"s-427-2001-2111-0": "s-427-2001-1111-0",
		"s-427-2004-2101-0": "s-427-2004-1101-0",
		"s-427-2001-2103-0": "s-427-2001-1103-0",
		"s-427-2001-2109-0": "s-427-2001-1109-0",
		
		// Fase 2
		"s-427-2007-1103-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Frontal", message_ES: "Ataque Frontal", message: "Frontal Attack" }],
		"s-427-2007-1205-0": [{ type: "text", sub_type: "message", message_PT: "Teleporte", message_ES: "Teletransportación", message: "Teleport" }],
		"s-427-2007-1102-0": [{ type: "text", sub_type: "message", message_PT: "Helicóptero", message_ES: "Helicóptero", message: "Helicopter" }],
		"s-427-2007-1113-0": [{ type: "text", sub_type: "message", message_PT: "Mão Esquerda Ataque", message_ES: "Mano Izquierda Ataque ", message: "Left Hand Attack" }],	
		"s-427-2007-1105-0": [{ type: "text", sub_type: "message", message_PT: "Mão Direita Ataque", message_ES: "Mano Derecha Ataque ", message: "Right Hand Attack" }],
		"s-427-2007-1112-0": [{ type: "text", sub_type: "message", message_PT: "Dount Debuff", message_ES: "Debuff Dona", message: "Donut Debuff" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 330, 0, 12000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 16, 185, 0, 9000] }
		],
		"s-427-2007-1108-0": [{ type: "text", sub_type: "message", message_PT: "Ataque (Alvo) ", message_ES: "Attack (Alvo)", message: "Target Attack" }],
		"s-427-2007-1114-0": [{ type: "text", sub_type: "message", message_PT: "Atrás Ataque", message_ES: "Atrás Ataque", message: "Back Attack" }],	
		"s-427-2007-1115-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Ataque", message_ES: "Ataque de Cola", message: "Tail Attack" }],	
		"s-427-2007-1111-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Frontal Ataque", message_ES: "Ataque de Cola Frontal", message: "Frontal Tail Attack" }],	
		"s-427-2007-1109-0": [{ type: "text", sub_type: "message", message_PT: "AoE (Alvo)", message_ES: "AoE Objetivo", message: "AoE Target" }],
		"s-427-2007-1107-0": [{ type: "text", sub_type: "message", message_PT: "Laser Ataque", message_ES: "Ataque Láser", message: "Laser Attack" }],
		"s-427-2007-1106-0": [{ type: "text", sub_type: "message", message_PT: "Bomba Alvo", message_ES: "Bomba Objetivo", message: "Target Bomb" }],
		"s-427-2007-1204-0": [{ type: "text", sub_type: "message", message_PT: "AoE Grande (Sair)", message_ES: "AoE Grande (Salir)", message: "Big AoE (Run)" }],
		"qb-427-2007-427050": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_ES: "Plague of Exhaustion", message_PT: "Plague of Exhaustion", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_ES: "Regression", message_PT: "Regression", class_position: "mystic" }
		],
		"s-427-2007-2205-0": "s-427-2007-1205-0",
		"s-427-2007-2102-0": "s-427-2007-1102-0",
		"s-427-2007-2113-0": "s-427-2007-1113-0",
		"s-427-2007-2105-0": "s-427-2007-1105-0",
		"s-427-2007-2112-0": "s-427-2007-1112-0",
		"s-427-2007-2115-0": "s-427-2007-1115-0",
		"s-427-2007-2111-0": "s-427-2007-1111-0",
		"s-427-2007-2109-0": "s-427-2007-1109-0",
		"s-427-2007-2107-0": "s-427-2007-1107-0",
		"s-427-2007-2106-0": "s-427-2007-1106-0",
		"s-427-2007-2204-0": "s-427-2007-1204-0",
		"s-427-2007-2103-0": "s-427-2007-1103-0",
		"s-427-2007-2114-0": "s-427-2007-1114-0",
		"s-427-2007-2108-0": "s-427-2007-1108-0"
	};
};
