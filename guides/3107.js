// Desolarus Testing Grounds
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		"nd-3107-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		// "s-3107-1000-101-0": [{ type: "text", sub_type: "message", message: "Wide Attack", message_ES: "ESPAÑOL", message_RU "Полосы" }],
		// "s-3107-1000-102-0": [{ type: "text", sub_type: "message", message: "Wide Attack", message_ES: "ESPAÑOL", message_RU "Полосы" }],
		// "s-3107-1000-106-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "ESPAÑOL", message_RU "Передние" }],
		// "s-3107-1000-107-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "ESPAÑOL", message_RU "Задние" }],
		// "s-3107-1000-108-0": [{ type: "text", sub_type: "message", message: "Right", message_ES: "ESPAÑOL", message_RU "Правые" }],
		// "s-3107-1000-109-0": [{ type: "text", sub_type: "message", message: "Left", message_ES: "ESPAÑOL", message_RU "Левые" }],
		"s-3107-1000-112-0": [{ type: "text", sub_type: "message", message: "Inner + Outer Bombs", message_ES: "Bombas Dentro + Afuera", message_PT: "Bombas Dentro + Fora" }],
		"s-3107-1000-113-0": [{ type: "text", sub_type: "message", message: "Inner Bombs", message_ES: "Bombas Dentro", message_PT: "Bombas Dentro" }],
		"s-3107-1000-302-0": [{ type: "text", sub_type: "message", message: "Shield", message_ES: "Escudo", message_PT: "Escudo" }], // 302 -> 303 / 304 -> 305
		"s-3107-1000-304-0": [{ type: "text", sub_type: "message", message: "Break Failure", message_ES: "Romper Fallido", message_PT: "Quebrar Falhou" }],
		"s-3107-1000-310-0": [{ type: "text", sub_type: "message", message: "Break Stones", message_ES: "Romper Piedras", message_PT: "Quebrar Pedras" }], // spawn ghosts
		"s-3107-1000-311-0": [{ type: "text", sub_type: "message", message: "Break Stones", message_ES: "Romper Piedras", message_PT: "Quebrar Pedras" }],
		"s-3107-1000-320-0": [{ type: "text", sub_type: "message", message: "Pizza (Pushback)", message_ES: "Pizza (Empujar Atrás)", message_PT: "Pizza (Empurrar Atrás)" }], // half forward
		"s-3107-1000-321-0": [{ type: "text", sub_type: "message", message: "Pizza (Pushback)", message_ES: "Pizza (Empujar Atrás)", message_PT: "Pizza (Empurrar Atrás)" }], // half reverse
		"s-3107-1000-322-0": [{ type: "text", sub_type: "message", message: "Pizza Spin (Pushback)", message_ES: "Pizza Giro (Empujar Atrás)", message_PT: "Pizza Giro (Empurrar Atrás)" }], // spin forward
		"s-3107-1000-323-0": [{ type: "text", sub_type: "message", message: "Pizza Spin (Pushback)", message_ES: "Pizza Giro (Empujar Atrás)", message_PT: "Pizza Giro (Empurrar Atrás)" }], // spin reverse
		"s-3107-1000-336-0": [{ type: "text", sub_type: "message", message: "180 (Front)", message_ES: "180 (Frente)", message_PT: "180 (Frente)" }],
		"s-3107-1000-337-0": [{ type: "text", sub_type: "message", message: "180 (Right)", message_ES: "180 (Derecha)", message_PT: "180 (Direita)" }],
		"s-3107-1000-338-0": [{ type: "text", sub_type: "message", message: "180 (Back)", message_ES: "180 (Atrás)", message_PT: "180 (Atrás)" }],
		"s-3107-1000-339-0": [{ type: "text", sub_type: "message", message: "180 (Left)", message_ES: "180 (Izquierda)", message_PT: "180 (Esquerda)" }],
		"s-3107-1000-370-0": [{ type: "text", sub_type: "message", message: "Cross (Target)", message_ES: "Cruz (Objetivo)", message_PT: "Cruz (Alvo)" }],

		"qb-3107-1000-31070003": [{ type: "text", sub_type: "message", message: "Circles (Target) | Dodge", message_ES: "Círculos (Objetivo) | Iframe", message_PT: "Círculos (Alvo) | Iframe" }],
		"qb-3107-1000-31070010": [{ type: "text", sub_type: "message", message: "Pizza (Pushback)", message_ES: "Pizza (Empujar Atrás)", message_PT: "Pizza (Empurrar Atrás)" }] // 324 - 335
	};
};