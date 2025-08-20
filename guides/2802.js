// Aesir's End - (Difícil)
// V1.2
//
// made by MissMeowMeow (Amy)

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-2802-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-2802-1000-90": [{ type: "text", sub_type: "notification", message: "Shield Soon", message_ES: "Escudo Pronto", message_PT: "Escudo em Breve" }],
		"h-2802-1000-60": [{ type: "text", sub_type: "notification", message: "Shield Soon", message_ES: "Escudo Pronto", message_PT: "Escudo em Breve" }],
		"h-2802-1000-30": [{ type: "text", sub_type: "notification", message: "Shield Soon", message_ES: "Escudo Pronto", message_PT: "Escudo em Breve" }],
		"h-2802-1000-8": [{ type: "text", sub_type: "notification", message: "D P S ! ? !", message_ES: "D P S ! ? !", message_PT: "D P S ! ? !" }],
		"s-2802-1000-103-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "Tumbar", message_PT: "Derrubar", class_position: "tank" }],
		"s-2802-1000-105-0": [{ type: "text", sub_type: "message", message: "Multi-hit Stun", message_ES: "Multiplo Hit Stun", message_PT: "Multiplo Hit Stun", class_position: "tank" }],
		"s-2802-1000-106-0": [{ type: "text", sub_type: "message", message: "Double Spin", message_ES: "Doble Giro", message_PT: "Duplo Giro" }],
		"s-2802-1000-107-0": [{ type: "text", sub_type: "message", message: "Tank Buster (Slow)", message_ES: "Tank Buster (Lento)", message_PT: "Tank Buster (Lento)", class_position: "tank" }],
		"s-2802-1000-108-0": [{ type: "text", sub_type: "message", message: "Tank Buster (Fast)", message_ES: "Tank Buster (Rápido)", message_PT: "Tank Buster (Rápido)", class_position: "tank" }],
		"s-2802-1000-109-0": [{ type: "text", sub_type: "message", message: "Jump - Dodge", message_ES: "Salto - Iframe", message_PT: "Salto - Iframe" }],
		"s-2802-1000-110-0": [{ type: "text", sub_type: "message", message: "Pull (Jump Soon)", message_ES: "Jalar (Salto Pronto)", message_PT: "Puxar (Salto em Breve)" }],
		"s-2802-1000-111-0": [{ type: "text", sub_type: "message", message: "Res bait (Stun)", message_ES: "Res bait (Stun)", message_PT: "Res bait (Stun)" }],
		"s-2802-1000-112-0": [{ type: "text", sub_type: "message", message: "AOE Soon", message_ES: "AOE Pronto", message_PT: "AOE em Breve" }],
		"s-2802-1000-113-0": [{ type: "text", sub_type: "message", message: "AOE Stun", message_ES: "AOE Stun", message_PT: "AOE Stun" }],
		"s-2802-1000-301-0": [
			{ type: "text", sub_type: "message", message: "Shield", message_ES: "ESCUDO", message_PT: "ESCUDO", class_position: ["dps", "tank"] },
			{ type: "text", sub_type: "message", message: "Shield - Plague", message_ES: "Escudo - Plague", message_PT: "Escudo - Plague", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Shield - Regress", message_ES: "Escudo - Regress", message_PT: "Escudo - Regress", class_position: "mystic" }
		],
		"s-2802-1000-303-0": [{ type: "text", sub_type: "message", message: "You Suck!?", message_ES: "You Suck!?", message_PT: "You Suck!?" }],
		"s-2802-1000-304-0": [{ type: "text", sub_type: "message", message: "You Suck!?", message_ES: "You Suck!?", message_PT: "You Suck!?" }],
		"s-2802-1000-305-0": [{ type: "text", sub_type: "message", message: "Monkeys", message_ES: "Monos", message_PT: "Macacos" }],
		"s-2802-1000-306-0": [
			{ type: "text", sub_type: "message", message: "Donuts Go Out-In", message_ES: "Salir - Entrar", message_PT: "Sair - Entrar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 650, 0, 5000] }
		],
		"s-2802-1000-307-0": [
			{ type: "text", sub_type: "message", message: "Range Bait (Double Jump)", message_ES: "Range Bait (Doble Salto)", message_PT: "Range Bait (Duplo Salto)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 650, 0, 2500] }
		],
		"s-2802-1000-308-0": [{ type: "text", sub_type: "message", message: "AOE Soon", message_ES: "AOE Pronto", message_PT: "AOE em Breve" }],
		"s-2802-1000-309-0": [
			{ type: "text", sub_type: "message", message: "Turn (Dodge)", message_ES: "Voltear (Iframe)", message_PT: "Volta (Iframe)" },
			{ type: "spawn", func: "circle", delay: 700, args: [false, 553, 0, 0, null, 800, 0, 3500] }
		],
		"s-2802-1000-310-0": [{ type: "text", sub_type: "message", message: "Slow Stomp - Dodge", message_ES: "Pisotón lento - Iframe", message_PT: "Pisão Lento - Iframe" }],
		"s-2802-1000-313-0": [{ type: "text", sub_type: "message", message: "Wide Area - Dodge", message_ES: "Área Amplia - Iframe", message_PT: "Área Ampla - Dodge" }]
	};
};