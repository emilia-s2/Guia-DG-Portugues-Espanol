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
		"s-620-1000-107-0": [{ type: "text", sub_type: "message", message_PT: "Ataque (Atras)", message_RU: "nao sei russo :c desculpa" }],
		"s-620-1000-115-0": [{ type: "text", sub_type: "message", message_PT: "Bolas de Fogo", message_RU: "nao sei russo :c desculpa" }],
		"s-620-1000-127-0": [{ type: "text", sub_type: "message", message_PT: "Salto Atras", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 376, 12, 232, 0, 5000] }
		],
		"s-620-1000-120-0": [{ type: "text", sub_type: "message", message_PT: "Onda de Fogo", message_RU: "nao sei russo :c desculpa" }],
		"s-620-1000-121-0": [{ type: "text", sub_type: "message", message_PT: "Repelir (iframe)", message_RU: "nao sei russo :c desculpa" }],
		"s-620-1000-119-0": [{ type: "text", sub_type: "message", message_PT: "Explosao | Entrar", message_RU: "nao sei russo :c desculpa" },
		    { type: "spawn", func: "circle", args: [false, 553, 0, 8, 14, 216, 100, 6000] }  
		],
		"s-620-1000-108-0": [{ type: "text", sub_type: "message", message_PT: "Ataque (Atras)", message_RU: "nao sei russo :c desculpa" }],
		"s-620-1000-103-0": [{ type: "text", sub_type: "message", message_PT: "Stun Frontal", message_RU: "nao sei russo :c desculpa" }],
		"s-620-1000-209-0": [{ type: "text", sub_type: "message", message_PT: "Voltar ao Meio + Bolas de Fogo", message_RU: "nao sei russo :c desculpa" }],
		"s-620-1000-125-0": [{ type: "text", sub_type: "message", message_PT: "Bolas de Fogo", message_RU: "nao sei russo :c desculpa" }],
		
		"s-620-1001-303-0": [{ type: "text", sub_type: "message", message_PT: "AOE", message_RU: "nao sei russo :c desculpa" }],
		"s-620-1002-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1003-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1004-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1005-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		
		"s-620-1000-129-0": [{ type: "text", sub_type: "message", message_PT: "Bolas de Fogo", message_RU: "nao sei russo :c desculpa" }],
		"s-620-1000-106-0": [{ type: "text", sub_type: "message", message_PT: "Salto Aleatorio", message_RU: "nao sei russo :c desculpa" }]
	};
};