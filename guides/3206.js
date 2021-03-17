// Crimson Killing Grounds
//
// made by HSDN / Kuroine

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
		"nd-3206-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "marker_remove_all" }
		],
		"h-3206-1000-99": [
			{ type: "spawn", func: "marker", args: [false, 3, -700, 100, 60000000, false, ["Giant", "Giant Direçao"]] }
		],

		"qb-3206-1000-32061001": [
			{ type: "text", sub_type: "message", message: "Debuff (Close)", message_PT: "Bebuff perto" },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_PT: "Usar Stun embreve...", delay: 2000 }
		],
		"qb-3206-1000-32061002": [
			{ type: "text", sub_type: "message", message: "Debuff (Furthest)", message_PT: "Debuff Longe" },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_PT: "Usar Stun embreve...", delay: 2000 }
		],
		"s-3206-1000-102-0": [
			{ type: "func", func: () => combo_start = true },
			{ type: "func", func: () => combo_start = false, delay: 1400 }
		],
		"s-3206-1000-105-0": [{ type: "text", sub_type: "message", message: "Knockback Spin (Kaia)", message_PT: "Giro Atrás Empurrão (KAIA)", check_func: () => combo_start === true }],
		"s-3206-1000-106-0": [
			{ type: "text", sub_type: "message", message: "Knockback", message_PT: "Atrás (Empurrão)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 350, 0, 3000] }
		],
		"s-3206-1000-109-0": [{ type: "text", sub_type: "message", message: "Jump (Knockdown)", message_PT: "Salto (Derrubar)" }],
		"s-3206-1000-201-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Frente" }],
		"s-3206-1000-202-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Frente AoE" }],
		"s-3206-1000-203-0": [{ type: "text", sub_type: "message", message: "Front + Wave", message_PT: "Frente AoE + Onda" }],
		"s-3206-1000-205-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro" }],
		"s-3206-1000-206-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro(Sangrar)" }],
		"s-3206-1000-207-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro(Sangrar)" }],
		"s-3206-1000-209-0": [
			{ type: "text", sub_type: "notification", message: "Stomp (Knockdown)", message_PT: "Usar Stun (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 400, 0, 2500] }
		],
		"s-3206-1000-210-0": [
			{ type: "text", sub_type: "notification", message: "Stomp (Knockdown)", message_PT: "Usar Stun (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 400, 0, 2500] }
		],
		"s-3206-1000-211-0": [{ type: "text", sub_type: "message", message: "Push", message_PT: "Empurrar" }],
		"s-3206-1000-216-0": [{ type: "text", sub_type: "message", message: "Somersault", message_PT: "Salto Mortal" }],
		"s-3206-1000-508-0": [
			{ type: "text", sub_type: "message", message: "Waves Outward", message_PT: "Ondas DENTRO" },
			{ type: "text", sub_type: "message", message: "Entrar", message_PT: "Entrar", delay: 2800 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 16, 180, 200, 5000] },
			{ type: "spawn", func: "circle", args: [false, 413, 0, 0, 10, 350, 200, 5000] }
		],
		"s-3206-1000-509-0": [
			{ type: "text", sub_type: "message", message: "Waves Inward", message_PT: "Ondas FORA" },
			{ type: "text", sub_type: "message", message: "Sair", message_PT: "Sair", delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 413, 0, 0, 16, 180, 200, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 200, 5000] }
		],
		"s-3206-1000-507-0": [{ type: "text", sub_type: "message", message: "Leash + Jump (Knockdown)", message_PT: "Pùxar + Salto (Derrubar)" }],

		"s-3206-1000-518-0": [{ type: "text", sub_type: "message", message: "Unleash", message_PT: "Liberar" }],
		"s-3206-1000-519-0": [{ type: "text", sub_type: "message", message: "Unleash", message_PT: "Liberar" }],
		"s-3206-1000-306-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro" }],
		"s-3206-1000-309-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Frente" }],
		"s-3206-1000-321-0": [{ type: "text", sub_type: "message", message: "AoE", message_PT: "АоЕ" }],
		"s-3206-1000-324-0": [{ type: "text", sub_type: "message", message: "AoE", message_PT: "АоЕ" }]
	};
};