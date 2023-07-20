// Timescape
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = ES;

	return {
		// Boss 1
		"s-756-401-104-0": [
			{ type: "text", sub_type: "message", message: "Bomb", message_ES: "Bomba", message_PT: "Bomba" },
			{ type: "text", sub_type: "warning", message: "(1)", speech: false, delay: 550 },
			{ type: "text", sub_type: "warning", message: "(2)", speech: false, delay: 1300 },
			{ type: "text", sub_type: "warning", message: "(3)", speech: false, delay: 2050 },
			{ type: "text", sub_type: "message", message: "(4) Dodge!", message_ES: "(4) Iframe", message_PT: "(4) Iframe", delay: 2800 }
		],
		"s-756-1001-107-0": [{ type: "text", sub_type: "alert", message: "Shot", message_ES: "Disparo", message_PT: "Tiro" }],
		"s-756-403-106-0": [{ type: "text", sub_type: "alert", message: "Circle", message_ES: "Círculo", message_PT: "Círculo" }],
		"s-756-1001-103-0": [{ type: "text", sub_type: "alert", message: "Tail", message_ES: "Cola", message_PT: "Cauda" }],
		"s-756-1001-101-0": [{ type: "text", sub_type: "alert", message: "Hit", message_ES: "Golpe", message_PT: "Bater" }],
		"s-756-1001-112-0": [{ type: "text", sub_type: "message", message: "Rotate", message_ES: "Girar", message_PT: "Girar" }],
		"s-756-1001-113-0": "s-756-1001-112-0",
		"s-756-1001-111-0": [{ type: "text", sub_type: "message", message: "Flight", message_ES: "Volar", message_PT: "Vôo" }],
		"s-756-1001-206-0": [{ type: "text", sub_type: "alert", message: "Pushback", message_ES: "Empujar Atrás", message_PT: "Empurrar Atrás" }],
		"qb-756-1001-456020": [{ type: "text", sub_type: "message", message: "Give stun", message_ES: "Dar Stun", message_PT: "Dê Stun" }],

		// Boss 2
		"s-756-1002-102-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" }],
		"s-756-1002-103-0": [{ type: "text", sub_type: "message", message: "Combo", message_ES: "Combo", message_PT: "Combo" }],
		"s-756-1002-104-0": [{ type: "text", sub_type: "message", message: "Shot (target)", message_ES: "Disparo (Objetivo)", message_PT: "Tiro (Alvo)" }],
		"s-756-1002-107-0": [{ type: "text", sub_type: "message", message: "Many Pokes", message_ES: "Muchos Golpes", message_PT: "Muitos Golpes" }],
		"s-756-1002-110-0": [{ type: "text", sub_type: "message", message: "Clap", message_ES: "Aplaudir", message_PT: "Aplaudir" }],
		"s-756-1002-111-0": [{ type: "text", sub_type: "message", message: "Front | Jump Back", message_ES: "Frente | Salto Atrás", message_PT: "Frente | Salto Atrás" }],
		"s-756-1002-212-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Salto Atrás", message_PT: "Salto Atrás" }],
		"s-756-1002-314-0": [{ type: "text", sub_type: "alert", message: "Lay Back", message_ES: "Acostar Atrás", message_PT: "Deitar Atrás" }],
		"s-756-1002-315-0": [{ type: "text", sub_type: "alert", message: "Lay Front", message_ES: "Acostar Frente", message_PT: "Deitar Frente" }],
		"s-756-1002-319-0": [{ type: "text", sub_type: "alert", message: "Spin", message_ES: "Giro", message_PT: "Giro" }],
		"s-756-1002-3110-0": [{ type: "text", sub_type: "message", message: "Breath", message_ES: "Respiración", message_PT: "Respiração" }],
		"s-756-1002-3112-0": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE", message_PT: "АОЕ", delay: 4000 }],

		// Boss 3
		"ab-756-1003-905607": [
			{ type: "text", sub_type: "message", message: "Cleanse + Plague of Exhaustion", message_ES: "Cleanse + Plague of Exhaustion", message_PT: "Cleanse + Plague of Exhaustion", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Cleanse + Regression", message_ES: "Cleanse + Regression", message_PT: "Cleanse + Regression", class_position: "mystic" }
		],
		"s-756-1003-103-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro", message_PT: "Giro" }],
		"s-756-1003-104-0": [{ type: "text", sub_type: "message", message: "Clap", message_ES: "Aplaudir", message_PT: "Aplaudir" }],
		"s-756-1003-105-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Frente", message_PT: "Frente" }],
		"s-756-1003-105-1": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Atrás", message_PT: "Atrás" }],
		"s-756-1003-107-0": [{ type: "text", sub_type: "message", message: "Swipe", message_ES: "Deslizar", message_PT: "Deslizar" }],
		"s-756-1003-108-0": [{ type: "text", sub_type: "message", message: "Swipe", message_ES: "Deslizar", message_PT: "Deslizar" }],
		"s-756-1003-109-0": [{ type: "text", sub_type: "message", message: "Breath (target)", message_ES: "Respiración (Objetivo)", message_PT: "Respiração (Alvo)" }],
		"s-756-1003-111-0": [{ type: "text", sub_type: "message", message: "Leash (target)", message_ES: "Correa (Objetivo)", message_PT: "Amarrar (Alvo)" }],
		"s-756-1003-3104-0": [{ type: "text", sub_type: "message", message: "Cage", message_ES: "Jaula", message_PT: "Prisão" }], // 456016
		"s-756-1003-3108-0": [{ type: "text", sub_type: "message", message: "Waves", message_ES: "Olas", message_PT: "Ondas" }],
		"qb-756-1003-456015": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE", message_PT: "АОЕ" }], // 3103
		"qb-756-1003-456017": [{ type: "text", sub_type: "message", message: "Give Stun", message_ES: "Dar stun", message_PT: "Dê Stun" }], // 3102
		"dm-0-0-905624": [{ type: "text", sub_type: "alert", message: "Wall Change", message_ES: "Cambio de Parede", message_PT: "Mudança de Parede", delay: 1000 }],
		"dm-0-0-905625": [{ type: "text", sub_type: "alert", message: "Wall Change", message_ES: "Cambio de Parede", message_PT: "Mudança de Parede", delay: 1000 }],
		"dm-0-0-905626": [{ type: "text", sub_type: "alert", message: "Wall Change", message_ES: "Cambio de Parede", message_PT: "Mudança de Parede", delay: 1000 }]
	};
};