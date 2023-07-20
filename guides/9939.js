// Red Refuge (Hard)
//
// made by multarix

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-939-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-939-1000-105-0": [{ type: "text", sub_type: "message", message: "Turn + Breath", message_ES: "Girar + Respirar", message_PT: "Virar + Respirar" }],
		"s-939-1000-308-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_ES: "Entrar > Salir", message_PT: "Entrar > Salir" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] }
		],
		"s-939-1000-308-1": [{ type: "text", sub_type: "message", message: "Out", message_ES: "Salir", message_PT: "Sair" }],
		"s-939-1000-112-0": [{ type: "text", sub_type: "message", message: "Back Spray", message_ES: "Atrás Spray", message_PT: "Atrás Spray" }],
		"s-939-1000-107-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" }],
		"s-939-1000-306-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_ES: "Salir > Entrar", message_PT: "Salir > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] }
		],
		"s-939-1000-306-1": [{ type: "text", sub_type: "message", message: "In", message_ES: "Entrar", message_PT: "Entrar" }],

		// 2 BOSS
		"nd-939-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-939-2000-105-0": [
			{ type: "text", sub_type: "message", message: "360", message_ES: "360", message_PT: "360" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 2500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 510, 0, 2500] }
		],
		"s-939-2000-113-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun" }],
		"s-939-2000-108-0": [{ type: "text", sub_type: "message", message: "Clense", message_ES: "Clense", message_PT: "Clense", class_position: "heal" }],
		"s-939-2000-115-0": [
			{ type: "text", sub_type: "message", message: "Whirlwind", message_ES: "Vortice", message_PT: "Redemoinho" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 360, 0, 6500] }
		],
		"s-939-2000-119-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Frente", message_PT: "Frente" }],
		"s-939-2000-120-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Atrás", message_PT: "Atrás" }],
		"s-939-2000-303-0": [{ type: "text", sub_type: "message", message: "Whip", message_ES: "Latigo", message_PT: "Chicote" }],

		// 3 BOSS
		"nd-939-3001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-939-3001-30": [{ type: "text", sub_type: "message", message: "Reveal soon...", message_ES: "Revelar Pronto...", message_PT: "Revelar em Breve..." }],
		"s-939-3001-201-0": [{ type: "text", sub_type: "message", delay: 3600, message: "Dodge!", message_ES: "Iframe!", message_PT: "Iframe!" }],
		"s-939-3001-107-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Golpes", message_PT: "Muitos Golpes" }],
		"s-939-3001-115-0": [
			{ type: "text", sub_type: "message", delay: 1750, message: "Dodge!", message_ES: "Iframe", message_PT: "Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-939-3001-118-0": [{ type: "text", sub_type: "message", message: "Scratching", message_ES: "Rasguno", message_PT: "Arranhar" }],
		// Revealed Argog
		"s-939-3001-167-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Golpes", message_PT: "Muitos Golpes" }],
		"s-939-3001-175-0": [
			{ type: "text", sub_type: "message", delay: 1750, message: "Dodge!", message_ES: "Iframe!", message_PT: "Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-939-3001-178-0": [{ type: "text", sub_type: "message", message: "Scratching (bleed)", message_ES: "Rasguno (Sangrar)", message_PT: "Arranhar (Sangrar)" }]
	};
};