// Catalepticon (Difícil)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let combo_count = 0;

	dispatch.hook("S_ABNORMALITY_BEGIN", 4, event => {
		if (event.id === 31040001)
			handlers.marker({ id: event.target, color: "yellow", sub_delay: 1000000 });
	});

	return {
		"ns-3204-1000": [{ type: "func", func: () => combo_count = 0 }],
		"nd-3204-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"qb-3204-1000-32041000": [
			{ type: "text", sub_type: "message", message: "Arrows", message_PT: "Setas" },
			{ type: "func", func: () => combo_count = 0 }
		],
		"qb-3204-1000-32042000": [{ type: "text", sub_type: "message", message: "Arrows + Line", message_PT: "Setas + Linhas" }],
		"qb-3204-1000-32042006": [
			{ type: "text", sub_type: "message", message: "Cage", message_PT: "Jaula" },
			{ type: "text", sub_type: "alert", message: "Cage soon...", message_PT: "Jaula Embreve...", delay: 100000 }
		],
		"qb-3204-1000-32042009": [
			{ type: "text", sub_type: "message", message: "Skeletons", message_PT: "Esqueletos" },
			{ type: "text", sub_type: "alert", message: "Skeletons soon...", message_PT: "Esqueletos Embreve...", delay: 220000 }
		],

		"h-3204-1000-90": [{ type: "text", sub_type: "message", message: "90%", message_PT: "90%" }],
		"h-3204-1000-70": [{ type: "text", sub_type: "message", message: "70%", message_PT: "70%" }],
		"h-3204-1000-35": [{ type: "text", sub_type: "message", message: "35%", message_PT: "35%" }],

		"s-3204-1000-104-0": [
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_PT: "Stun (AOE)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -50, 10, 380, 0, 2000] }
		],
		"s-3204-1000-107-0": [
			{ type: "text", sub_type: "alert", message: "Line Forward + Side Lines", message_PT: "Linhas no Meio e	Laterais" },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 1000, 0, 2000] },
			{ type: "func", func: () => combo_count++ },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 3000, true, null], check_func: () => combo_count == 2, delay: 1000 }
		],
		"s-3204-1000-110-0": [
			{ type: "text", sub_type: "message", message: "Target + Wave", message_PT: "Atrás - Frente (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -500, 10, 350, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 180, -50, 120, 500, 0, 2000], delay: 1500 },
			{ type: "spawn", func: "vector", args: [553, 180, -50, 240, 500, 0, 2000], delay: 1500 },
			{ type: "func", func: () => combo_count++ },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 3000, true, null], check_func: () => combo_count == 2, delay: 2500 }
		],
		"s-3204-1000-112-0": [{ type: "text", sub_type: "message", message: "Wave Forward", message_PT: "Empurrar a Frente" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 70, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 290, 500, 0, 2000] }
		],
		"s-3204-1000-114-0": [{ type: "text", sub_type: "message", message: "Inner + Outer AOEs", message_PT: "AOEs Dentro e Fora + GIRO" }],
		"s-3204-1000-116-0": [
			{ type: "text", sub_type: "message", message: "Line Forward", message_PT: "Linha no Meio" },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 1000, 0, 2000] }
		],
		"s-3204-1000-119-0": [{ type: "text", sub_type: "message", message: "Two Strikes", message_PT: "Dois Golpes" }],
		"s-3204-1000-120-0": [
			{ type: "text", sub_type: "message", message: "Two Strikes + Stun (AOE)", message_PT: "Explosão Ampla Stun" },
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_PT: "Iframe", delay: 2250 },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -100, 10, 700, 0, 2500], delay: 1500 }
		],
		"s-3204-1000-123-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro" }],
		"s-3204-1000-125-0": [{ type: "text", sub_type: "message", message: "Stun (Tank)", message_PT: "Stun (Tank)" }],
		"s-3204-1000-127-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_PT: "Pizza" },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 2000, true, null] }
		],
		"s-3204-1000-128-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_PT: "Pizza" },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 2000, true, null] }
		],
		"s-3204-1000-148-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_PT: "Pizza" },
			{ type: "spawn", func: "marker", args: [false, 150, 150, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 340, 150, 0, 2000, true, null], delay: 1500 }
		],
		"s-3204-1000-156-0": [{ type: "text", sub_type: "message", message: "Get Skulls", message_PT: "Cabeças" }],
		"s-3204-1000-157-0": [{ type: "text", sub_type: "alert", message: "Gather!", message_PT: "Juntar!", delay: 5000 }],
		"s-3204-1000-158-0": [{ type: "text", sub_type: "alert", message: "Gather!", message_PT: "Juntar!", delay: 5000 }],
		"s-3204-1000-159-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ" },
			{ type: "marker_remove_all" }
		]
	};
};