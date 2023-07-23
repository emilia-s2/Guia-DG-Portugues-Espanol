// Red Refuge
//
// made by multarix

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-739-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-739-1000-105-0": [{ type: "text", sub_type: "message", message: "Turn + Breath", message_PT: "Girar + Respirar", message_ES: "Girar + Respirar" }],
		"s-739-1000-308-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_PT: "Entrar > Sair", message_ES: "Entrar > Salir" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] }
		],
		"s-739-1000-308-1": [{ type: "text", sub_type: "message", message: "Out", message_PT: "Sair", message_ES: "Salir" }],
		"s-739-1000-112-0": [{ type: "text", sub_type: "message", message: "Back Spray", message_PT: "Ataque Atrás", message_ES: "Ataque Atrás" }],
		"s-739-1000-107-0": [{ type: "text", sub_type: "message", message: "Jump", message_PT: "Salto", message_ES: "Saltar" }],
		"s-739-1000-306-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_PT: "Sair > Entrar", message_ES: "Salir > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] }
		],
		"s-739-1000-306-1": [{ type: "text", sub_type: "message", message: "In", message_PT: "Entrar", message_ES: "Entrar" }],

		// 2 BOSS
		"nd-739-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-739-2000-105-0": [
			{ type: "text", sub_type: "message", message: "360", message_PT: "Girar", message_ES: "Girar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 2500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 510, 0, 2500] }
		],
		"s-739-2000-113-0": [{ type: "text", sub_type: "message", message: "Stun", message_PT: "Stun", message_ES: "Stun" }],
		"s-739-2000-108-0": [
			{ type: "text", sub_type: "message", message: "Clense", message_PT: "Cleanse", message_ES: "Cleanse", class_position: "heal" },
			{ type: "text", sub_type: "message", message: "Clense", message_PT: "Cleanse", message_ES: "Cleanse", class_position: ["tank", "dps"] }
		],
		"s-739-2000-115-0": [
			{ type: "text", sub_type: "message", message: "Whirlwind", message_PT: "Redemoinho", message_ES: "Vortice" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 360, 0, 6500] }
		],
		"s-739-2000-119-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Spray a Frente", message_ES: "Ataque Frontal" }],
		"s-739-2000-120-0": [{ type: "text", sub_type: "message", message: "Back", message_PT: "Disparo de Canhao Atrás", message_ES: "Ataque Atrás" }],
		"s-739-2000-303-0": [
			{ type: "text", sub_type: "message", message: "Whip", message_PT: "Chicote", message_ES: "Latigo" },
			{ type: "text", sub_type: "message", delay: 1600, message: "Iframe", message_PT: "Iframe", message_ES: "Iframe!" }
		],

		// 3 BOSS
		"nd-739-3001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-739-3001-30": [{ type: "text", sub_type: "message", message: "Reveal soon...", message_PT: "Revealar em Breve...", message_ES: "Revelar Pronto..." }],
		"s-739-3001-201-0": [
			{ type: "text", sub_type: "message", message: "Strong Roar (Stun)", message_PT: "Rugido Forte (Stun)", message_ES: "Rugido Fuerte (Stun)" },
			{ type: "text", sub_type: "message", message: "Iframe!", message_PT: "Iframe", message_ES: "Iframe", delay: 3700 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],	
		"s-739-3001-107-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_PT: "Muitos Hits (Garras)", message_ES: "Muchos Hits (Garras)" }],
		"s-739-3001-115-0": [
			{ type: "text", sub_type: "message", message: "Roar (Stun)", message_PT: "Rugido (Stun)", message_ES: "Rugido (Stun)"},
			{ type: "text", sub_type: "message", message: "Iframe!", message_PT: "Iframe", message_ES: "Iframe", Daley: 1800 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-739-3001-118-0": [{ type: "text", sub_type: "message", message: "Scratching", message_PT: "Arranhar", message_ES: "Rasguno"}],
		// Revealed Argog
		"s-739-3001-164-0": [{ type: "text", sub_type: "message", message: "Counter Attack (bleed)", message_PT: "Conta Ataque (Sangramento)", message_ES: "Conta Ataque (Sangramiento)" }],
		"s-739-3001-167-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_PT: "Muitos Hits (Garras)", message_ES: "Muchos Hits (Garras)"}],
		"s-739-3001-175-0": [
			{ type: "text", sub_type: "message", message: "Roar (Stun)", message_PT: "Rugido (Stun)", message_ES: "Rugido (Stun)" },
			{ type: "text", sub_type: "message", message: "Iframe!", message_PT: "Iframe", message_ES: "Iframe", Daley: 1800 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 630, 0, 4000] }
		],		
		"s-739-3001-177-0": [{ type: "text", sub_type: "message", message: "Backstab", message_PT: "Ataque nas Costas", message_ES: "Ataque por la Espalda" }],
		"s-739-3001-178-0": [{ type: "text", sub_type: "message", message: "Scratching (bleed)", message_PT: "Arranhar (Sangrar)", message_ES: "Rasguno (Sangrar)" }],
		"s-739-3001-203-0": [{ type: "text", sub_type: "message", message: "Phantom x3 (bleed)", message_PT: "Fantasma x3 (Sangramento)", message_ES: "Fantasma x3 (Sangramiento)" }],
		"s-739-3001-207-0": [{ type: "text", sub_type: "message", message: "Phantom x5 (bleed)", message_PT: "Fantasma x5 (Sangramento)", message_ES: "Fantasma x5 (Sangramiento)" }],
		"s-739-3001-212-0": [{ type: "text", sub_type: "message", message: "Flash", message_PT: "Flash", message_ES: "Flash" }]
	};
};