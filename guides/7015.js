// Guardian Balder's Refuge
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-620-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-620-1000-107-0": [{ type: "text", sub_type: "message", message_PT: "Ataque (Atrás)", message_ES: "Ataque (Atrás)", message: "Attack (Back)" }],
		"s-620-1000-115-0": [{ type: "text", sub_type: "message", message_PT: "Bolas de Fogo", message_ES: "Bolas de Fuego", message: "Fireballs" }],
		"s-620-1000-127-0": [{ type: "text", sub_type: "message", message_PT: "Salto Atrás", message_ES: "Salto Atrás", message: "Jump Back" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 376, 12, 232, 0, 5000] }
		],
		"s-620-1000-120-0": [{ type: "text", sub_type: "message", message_PT: "Onda de Fogo", message_ES: "Ola de Fuego", message: "Fire Wave" }],
		"s-620-1000-121-0": [{ type: "text", sub_type: "message", message_PT: "Repelir (iframe)", message_ES: "Repeler (iframe)", message: "Repel (Dodge)" }],
		"s-620-1000-119-0": [{ type: "text", sub_type: "message", message_PT: "Explosão | Entrar", message_ES: "Explosión | Entrar", message: "Explosion | In" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 8, 14, 216, 100, 6000] }	 
		],
		"s-620-1000-108-0": [{ type: "text", sub_type: "message", message_PT: "Ataque (Atrás)", message_ES: "Ataque (Atrás)", message: "Attack (Back)" }],
		"s-620-1000-103-0": [{ type: "text", sub_type: "message", message_PT: "Stun Frontal", message_ES: "Stun Frontal", message: "Stun Frontal" }],
		"s-620-1000-209-0": [{ type: "text", sub_type: "message", message_PT: "Voltar ao Meio + Bolas de Fogo", message_ES: "Regresar al Medio + Bolas de Fuego", message: "Back to Middle + Fireballs" }],
		"s-620-1000-125-0": [{ type: "text", sub_type: "message", message_PT: "Bolas de Fogo", message_ES: "Bolas de Fuego", message: "Fireballs" }],
		
		"s-620-1001-303-0": [{ type: "text", sub_type: "message", message_PT: "AOE", message_ES: "AOE", message: "AOE" }],
		"s-620-1002-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1003-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1004-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1005-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		
		"s-620-1000-129-0": [{ type: "text", sub_type: "message", message_PT: "Bolas de Fogo", message_ES: "Bolas de Fuego", message: "Fireballs" }],
		"s-620-1000-106-0": [{ type: "text", sub_type: "message", message_PT: "Salto Aleatório", message_ES: "Salto Aleatório", message: "Random Jump" }]
	};
};