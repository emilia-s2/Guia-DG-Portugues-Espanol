// Catalepticon Normal (BETA)
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-3104-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"s-3104-1000-116-0": [{ type: "text", sub_type: "message", message_PT: "Ataque no meio (Pequeno)", message_RU: "nao sei russo :c desculpa" }],,
		"s-3104-1000-120-0": [{ type: "text", sub_type: "message", message_PT: "Explosão Ampla Stun", message_RU: "nao sei russo :c desculpa" }],
		"s-3104-1000-114-0": [{ type: "text", sub_type: "message", message_PT: "Explosão Dentro Fora", message_RU: "nao sei russo :c desculpa" }],

		"s-3104-1000-107-0": [{ type: "text", sub_type: "message", message_PT: "Ataque no meio (Grande)", message_RU: "nao sei russo :c desculpa" }],
		"s-3104-1000-110-0": [{ type: "text", sub_type: "message", message_PT: "Atrás - Frente (Stun)", message_RU: "nao sei russo :c desculpa" }],
		"s-3104-1000-127-0": [{ type: "text", sub_type: "message", message_PT: "Ataque no meio (Grande)", message_RU: "nao sei russo :c desculpa" }],
		"s-3104-1000-104-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Dentro", message_RU: "nao sei russo :c desculpa" }],
//		"s-3104-1000-200-0": [{ type: "text", sub_type: "message", message_PT: "meio ataque rajada", message_RU: "nao sei russo :c desculpa" }],
		"s-3104-1000-148-0": [{ type: "text", sub_type: "message", message_PT: "Giros", message_RU: "nao sei russo :c desculpa" }],
		"s-3104-1000-112-0": [{ type: "text", sub_type: "message", message_PT: "Empurrar a Frente", message_RU: "nao sei russo :c desculpa" }],
//		"s-3104-1000-159-0": [{ type: "text", sub_type: "message", message_PT: "Escudo", message_RU: "nao sei russo :c desculpa" }],
		"s-3104-1000-158-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Giratorio", message_RU: "nao sei russo :c desculpa" }],
		"s-3104-1000-156-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças", message_RU: "nao sei russo :c desculpa" }],	
	};
};