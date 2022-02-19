// Ice Throne
//
// made by icebrog

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		// 1 BOSS
		"nd-3109-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		//  2 BOSS
		"nd-3109-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//
		"s-3109-2000-403-0": [
			{ type: "text", sub_type: "message", message: "Back Slam", message_PT: "Golpe Atrás", message_ES: "Golpe Atrás", delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 160, 400, 12, 300, 0, 1500], delay: 3500 },
			{ type: "spawn", func: "circle", args: [false, 553, 200, 400, 12, 300, 0, 1500], delay: 3500 }
		],
		"s-3109-2000-405-0": [
			{ type: "text", sub_type: "message", message: "Back Slam", message_PT: "Golpe Atrás", message_ES: "Golpe Atrás", delay: 1250 },
			{ type: "spawn", func: "circle", args: [false, 553, 160, 400, 12, 300, 0, 1500], delay: 2000 },
			{ type: "spawn", func: "circle", args: [false, 553, 200, 400, 12, 300, 0, 1500], delay: 2000 }
		],
		"s-3109-2000-407-0": [{ type: "text", sub_type: "message", message: "Back | Front Attack", message_PT: "Atrás | Ataque Frontal", message_ES: "Atrás | Ataque Frontal" }],
		"s-3109-2000-409-0": [
			{ type: "text", sub_type: "message", message: "Back Slam", message_PT: "Golpe Atrás", message_ES: "Golpe Atrás", delay: 3500 },
			{ type: "spawn", func: "circle", args: [false, 553, 160, 425, 12, 250, 0, 1500], delay: 3500 },
			{ type: "spawn", func: "circle", args: [false, 553, 200, 425, 12, 250, 0, 1500], delay: 3500 }
		],
		"s-3109-2000-410-0": [
			{ type: "text", sub_type: "message", message: "Back Slam", message_PT: "Golpe Atrás", message_ES: "Golpe Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 160, 425, 12, 250, 0, 1500] },
			{ type: "spawn", func: "circle", args: [false, 553, 200, 425, 12, 250, 0, 1500] }
		],
		"s-3109-2000-411-0": [{ type: "text", sub_type: "message", message: "Back | Front Attack", message_PT: "Atrás | Ataque Frontal", message_ES: "Atrás | Ataque Frontal" }],
		// In - Out
		"s-3109-2000-412-0": [
			{ type: "text", sub_type: "message", message: "Spin | Out", message_PT: "Girar | Sair", message_ES: "Girar | Salir" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 3000] }
		],
		"s-3109-2000-414-0": [
			{ type: "text", sub_type: "message", message: "Spin | Out-In", message_PT: "Girar | Sair - Entrar", message_ES: "Girar | Salir - Entrar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 5000] }
		],
		"s-3109-2000-415-0": "s-3109-2000-414-0",
		"s-3109-2000-416-0": [
			{ type: "text", sub_type: "message", message: "Spin | Out-In | Pizza", message_PT: "Girar | Sair - Entrar | Pizza", message_ES: "Girar | Salir - Entrar | Pizza" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 8000] },
			{ type: "spawn", func: "vector", args: [553, 0, 20, 10, 425, 0, 3000], delay: 5000 },
			{ type: "spawn", func: "point", args: [513, 32.5, 200, 0, 1500], delay: 6500 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 55, 425, 0, 3000], delay: 5000 },
			{ type: "spawn", func: "point", args: [513, 77.5, 200, 0, 1500], delay: 5000 }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 100, 425, 0, 3000], delay: 5000 },
			{ type: "spawn", func: "point", args: [513, 122.5, 200, 0, 1500], delay: 6500 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 145, 425, 0, 3000], delay: 5000 },
			{ type: "spawn", func: "point", args: [513, 167.5, 200, 0, 1500], delay: 5000 }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 190, 425, 0, 3000], delay: 5000 },
			{ type: "spawn", func: "point", args: [513, 212.5, 200, 0, 1500], delay: 6500 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 235, 425, 0, 3000], delay: 5000 },
			{ type: "spawn", func: "point", args: [513, 257.5, 200, 0, 1500], delay: 5000 }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 280, 425, 0, 3000], delay: 5000 },
			{ type: "spawn", func: "point", args: [513, 302.5, 200, 0, 1500], delay: 6500 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 325, 425, 0, 3000], delay: 5000 },
			{ type: "spawn", func: "point", args: [513, 347.5, 200, 0, 1500], delay: 5000 } // safe 1
		],
		"s-3109-2000-417-0": [
			{ type: "text", sub_type: "message", message: "Spin | In-Out | Pizza", message_PT: "Girar | Entrar - Sair | Pizza", message_ES: "Girar | Entrar - Salir | Pizza" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 9500] },
			{ type: "spawn", func: "vector", args: [553, 0, 20, 10, 425, 0, 3000], delay: 6500 },
			{ type: "spawn", func: "point", args: [513, 32.5, 200, 0, 1500], delay: 6500 }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 55, 425, 0, 3000], delay: 6500 },
			{ type: "spawn", func: "point", args: [513, 77.5, 200, 0, 1500], delay: 8000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 100, 425, 0, 3000], delay: 6500 },
			{ type: "spawn", func: "point", args: [513, 122.5, 200, 0, 1500], delay: 6500 }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 145, 425, 0, 3000], delay: 6500 },
			{ type: "spawn", func: "point", args: [513, 167.5, 200, 0, 1500], delay: 8000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 190, 425, 0, 3000], delay: 6500 },
			{ type: "spawn", func: "point", args: [513, 212.5, 200, 0, 1500], delay: 6500 }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 235, 425, 0, 3000], delay: 6500 },
			{ type: "spawn", func: "point", args: [513, 257.5, 200, 0, 1500], delay: 8000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 280, 425, 0, 3000], delay: 6500 },
			{ type: "spawn", func: "point", args: [513, 302.5, 200, 0, 1500], delay: 6500 }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 325, 425, 0, 3000], delay: 6500 },
			{ type: "spawn", func: "point", args: [513, 347.5, 200, 0, 1500], delay: 8000 } // safe 2
		],
		// Dig
		"s-3109-2000-602-0": [
			{ type: "text", sub_type: "message", message: "Get Out", message_PT: "Sair", message_ES: "Sal de ahí" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 600, 0, 4000] }
		],
		"s-3109-2000-604-0": [
			{ type: "text", sub_type: "message", message: "Get In", message_PT: "Entra", message_ES: "Entra" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 10000] }
		],
		"s-3109-2000-605-0": [{ type: "text", sub_type: "message", message: "Pizza | Out-In", message_PT: "Pizza | Sair - Entrar", message_ES: "Pizza | Salir-Entrar", delay: 5000 }],
		"s-3109-2000-606-0": [
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 0, 20, 20, 425, 0, 3000] },
			{ type: "spawn", func: "point", args: [513, 42.5, 200, 0, 2250] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 65, 425, 0, 3000] },
			{ type: "spawn", func: "point", args: [513, 87.5, 200, 0, 750], delay: 2250 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 110, 425, 0, 3000] },
			{ type: "spawn", func: "point", args: [513, 132.5, 200, 0, 2250] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 155, 425, 0, 3000] },
			{ type: "spawn", func: "point", args: [513, 177.5, 200, 0, 750], delay: 2250 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 200, 425, 0, 3000] },
			{ type: "spawn", func: "point", args: [513, 222.5, 200, 0, 2250] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 245, 425, 0, 3000] },
			{ type: "spawn", func: "point", args: [513, 267.5, 200, 0, 750], delay: 2250 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 290, 425, 0, 3000] },
			{ type: "spawn", func: "point", args: [513, 312.5, 200, 0, 2250] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 335, 425, 0, 3000] },
			{ type: "spawn", func: "point", args: [513, 357.5, 200, 0, 750], delay: 2250 } // safe 2
		],
		// Waves
		"s-3109-2000-616-0": [{ type: "text", sub_type: "message", message: "Inward Wave", message_PT: "Onda Dentro", message_ES: "Ola Adentro" }],
		"s-3109-2000-617-0": [{ type: "text", sub_type: "message", message: "Front | Back Waves", message_PT: "Ataque Frontal | Ondas Atrás", message_ES: "Ataque Frontal | Olas Atrás" }]
	};
};