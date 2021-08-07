// Lumikan's Trial
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let combo_count = 0;

	return {
		"ns-3040-1000": [{ type: "func", func: () => combo_count = 0 }],
		"nd-3040-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"qb-3040-1000-32042000": [
			{ type: "text", sub_type: "message", message: "Arrows", message_ES: "Flechas", message_PT: "Setas" },
			{ type: "text", sub_type: "alert", message: "Dodge", message_ES: "Esquiva", message_PT: "Esquiva", delay: 1450 },
			{ type: "func", func: () => combo_count = 0 }
		],
		"h-3040-1000-35": [{ type: "text", sub_type: "message", message: "35%", message_ES: "35%", message_PT: "35%" }],
		"qb-3040-1000-32041000": [{ type: "text", sub_type: "alert", message: "combo Pizza em Breve", message_ES: "Combo Pizza en breve", message_PT: "Combo Pizza em Breve" }],

		"s-3040-1000-104-0": [
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_ES: "Stun (AOE)", message_PT: "Stun (AOE)" },
			{ type: "text", sub_type: "message", message: "Iframe", message_ES: "Iframe", message_PT: "Iframe", delay: 800 },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -50, 10, 380, 0, 2000] }
		],
		"s-3040-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Line Forward + Side Lines + PIZZA", message_ES: "Líneas en medio y laterales + PIZZA", message_PT: "Linhas no Meio e Laterais + PIZZA" },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 1000, 0, 2000] },
			{ type: "func", func: () => combo_count++ },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 3000, true, null], check_func: () => combo_count == 2, delay: 1000 }
		],
		"s-3040-1000-110-0": [
			{ type: "text", sub_type: "message", message: "Back - Front (Stun)", message_ES: "Atrás - Frente (Stun)", message_PT: "Atrás - Frente (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -500, 10, 350, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 180, -50, 120, 500, 0, 2000], delay: 1500 },
			{ type: "spawn", func: "vector", args: [553, 180, -50, 240, 500, 0, 2000], delay: 1500 },
			{ type: "func", func: () => combo_count++ },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 3000, true, null], check_func: () => combo_count == 2, delay: 2500 }
		],
		"s-3040-1000-112-0": [{ type: "text", sub_type: "message", message: "Wave Forward", message_ES: "Empujar al frente", message_PT: "Empurrar a Frente" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 70, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 290, 500, 0, 2000] }
		],
		"s-3040-1000-114-0": [{ type: "text", sub_type: "message", message: "Inner + Outer AOEs", message_ES: "AOEs Dentro y Fuera + GIRO", message_PT: "AOEs Dentro e Fora + GIRO" }],
		"s-3040-1000-116-0": [
			{ type: "text", sub_type: "message", message: "Line Forward", message_ES: "Línea al Medio", message_PT: "Linha no Meio" },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 1000, 0, 2000] }
		],
		"s-3040-1000-119-0": [{ type: "text", sub_type: "message", message: "Two Strikes", message_ES: "Dos Golpes", message_PT: "Dois Golpes" }],
		"s-3040-1000-120-0": [
			{ type: "text", sub_type: "message", message: "Two Strikes + Stun (AOE)", message_ES: "Explosión Ampla Stun", message_PT: "Explosão Ampla Stun" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 2250 },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -100, 10, 700, 0, 2500], delay: 1500 }
		],
		"s-3040-1000-123-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro", message_PT: "Giro" }],
		"s-3040-1000-125-0": [{ type: "text", sub_type: "message", message: "Stun (Tank)", message_ES: "Stun (Tank)", message_PT: "Stun (Tank)" }],
		"s-3040-1000-127-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza", message_PT: "Pizza" },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 2000, true, null] }
		],
		"s-3040-1000-128-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza", message_PT: "Pizza" },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 2000, true, null] }
		],
		"s-3040-1000-148-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza", message_PT: "Pizza" },
			{ type: "spawn", func: "marker", args: [false, 150, 150, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 340, 150, 0, 2000, true, null], delay: 1500 }
		],
		"s-3040-1000-156-0": [{ type: "text", sub_type: "message", message: "Get Skulls", message_ES: "Cabezas", message_PT: "Cabeças" }],
		"s-3040-1000-157-0": [{ type: "text", sub_type: "alert", message: "Gather!", message_ES: "Juntar!", message_PT: "Juntar!", delay: 5000 }],
		"s-3040-1000-158-0": [{ type: "text", sub_type: "alert", message: "Gather!", message_ES: "Juntar!", message_PT: "Juntar!", delay: 5000 }],
		"s-3040-1000-159-0": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE", message_PT: "АОЕ" }]
	};
};