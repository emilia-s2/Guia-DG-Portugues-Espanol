// Killing Grounds
//
// made by HSDN / Kuroine / Minghan

module.exports = (dispatch, handlers, guide, lang) => {

	let combo_start = false;

	dispatch.hook("S_USER_EFFECT", 1, event => {
		if (event.circle == 3 && event.operation == 1) {
			handlers.marker({ id: event.target, color: "yellow", sub_delay: 1000000 });
		} else if (event.circle == 3 && event.operation == 2) {
			handlers.marker_remove_all({ delay: 1000 });
		}
	});

	return {
		"nd-3106-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "marker_remove_all" }
		],
		"h-3106-1000-99": [
			{ type: "spawn", func: "marker", args: [false, 3, -700, 100, 60000000, false, ["Giant", "Giant Direction"]] }
		],

		"qb-3106-1000-32061001": [
			{ type: "text", sub_type: "message", message: "Debuff (Close)", message_ES: "Debuff (Cercano)",  message_PT: "Bebuff (Perto)" },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_ES: "Dar Stun Pronto...",  message_PT: "Dar Stun Embreve...", delay: 2000 }
		],
		"qb-3106-1000-32061002": [
			{ type: "text", sub_type: "message", message: "Debuff (Furthest)", message_ES: "Debuff (Más Lejos)",  message_PT: "Debuff (Longe)" },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_ES: "Dar Stun Pronto...",  message_PT: "Dar Stun Embreve...", delay: 2000 }
		],

		"s-3106-1000-102-0": [
			{ type: "func", func: () => combo_start = true },
			{ type: "func", func: () => combo_start = false, delay: 1400 }
		],
		"s-3106-1000-105-0": [{ type: "text", sub_type: "message", message: "Knockback Spin (Kaia)", message_ES: "Giro Atrás Empujón (KAIA)",  message_PT: "Giro Atrás Empurrão (KAIA)", check_func: () => combo_start === true }],
		"s-3106-1000-106-0": [
			{ type: "text", sub_type: "message", message: "Knockback", message_ES: "Atrás (Empujón)",  message_PT: "Atrás (Empurrão)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 350, 0, 3000] }
		],

		"s-3106-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Jump (Knockdown)", message_ES: "Salto (Tumbar)",  message_PT: "Salto (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 150, 10, 300, 0, 2500] }
		],
		"s-3106-1002-109-0": [{ type: "text", sub_type: "message", message: "Snowball", message_ES: "Bola de Nieve",  message_PT: "Bola de Neve" }],
		"s-3106-1000-111-0": [{ type: "text", sub_type: "message", message: "Knockdown (Dodge)", message_ES: "Tumbar (Iframe)",  message_PT: "Derrubar (Iframe)", class_position: "tank" }],
		"s-3106-1000-201-0": [{ type: "text", sub_type: "message", message: "Front (Dodge)", message_ES: "Frente (Iframe)",  message_PT: "Frente (Iframe)", class_position: "tank" }],
		"s-3106-1000-202-0": [{ type: "text", sub_type: "message", message: "Front AoE", message_ES: "Frente AoE",  message_PT: "Frente АоЕ" }],
		"s-3106-1000-203-0": [{ type: "text", sub_type: "message", message: "Front AoE + Wave", message_ES: "Frente AoE + Ola",  message_PT: "Frente АоЕ + Onda" }],
		"s-3106-1000-205-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro",  message_PT: "Giro" }],
		"s-3106-1000-206-0": [{ type: "text", sub_type: "message", message: "Spin (Bleed)", message_ES: "Giro (Sangrar)",  message_PT: "Giro (Sangrar))" }],
		"s-3106-1000-207-0": [{ type: "text", sub_type: "message", message: "Spin (Bleed)", message_ES: "Giro (Sangrar)",  message_PT: "Giro (Sangrar))" }],
		"s-3106-1000-209-0": [
			{ type: "text", sub_type: "message", message: "Give Stun! (Knockdown)", message_ES: "Dar Stun ( Tumbar)",  message_PT: "Dê Stun (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 400, 0, 1500] }
		],
		"s-3106-1000-210-0": [
			{ type: "text", sub_type: "message", message: "Give Stun! (Knockdown)", message_ES: "Dar Stun ( Tumbar)",  message_PT: "Dê Stun (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 400, 0, 1500] }
		],
		"s-3106-1000-211-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar",  message_PT: "Empurrar" }],
		"s-3106-1000-212-0": [{ type: "text", sub_type: "message", message: "Somersault", message_ES: "Salto Mortal",  message_PT: "Salto Mortal" }],
		"s-3106-1000-215-0": [{ type: "text", sub_type: "message", message: "Somersault", message_ES: "Salto Mortal",  message_PT: "Salto Mortal" }],
		"s-3106-1000-507-0": [{ type: "text", sub_type: "message", message: "Leash | Jump (Knockdown)", message_ES: "Jalar | Salto (Tumbar)",  message_PT: "Puxar | Salto (Derrubar)" }],
		"s-3106-1000-508-0": [
			{ type: "text", sub_type: "message", message: "Outward Waves (Out > In)", message_ES: "Salir > Entrar",  message_PT: "Sair > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3106-1000-509-0": [
			{ type: "text", sub_type: "message", message: "Inward Waves (In > Out)", message_ES: "Entrar > Salir",  message_PT: "Entrar > Sair" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3106-1000-512-0": [{ type: "text", sub_type: "message", message: "Turn | Spin", message_ES: "Doblar | Girar",  message_PT: "Virar | Girar" }],
		//"s-3106-1000-513-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_RU: "Чума/регресс" }],
		//"s-3106-1000-514-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_RU: "Чума/регресс" }],

		"s-3106-1000-502-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Liberar",  message_PT: "Liberar" }],
		"s-3106-1000-518-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Liberar",  message_PT: "Liberar" }],
		"s-3106-1000-519-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Liberar",  message_PT: "Liberar" }],
		"s-3106-1000-306-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro",  message_PT: "Giro" }],
		"s-3106-1000-309-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Frente",  message_PT: "Frente" }],
		"s-3106-1000-321-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE",  message_PT: "AoE" }],
		"s-3106-1000-324-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE",  message_PT: "AoE" }]
	};
};