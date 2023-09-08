// Red Refuge (Difícil)
//
// made by multarix

module.exports = (dispatch, handlers, guide, lang) => {
		let first_boss_debuff = false;
		
	return {
		// 1 BOSS
		"nd-939-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-939-1000-105-0": [{ type: "text", sub_type: "message", message: "Turn + Breath", message_ES: "Girar + Respirar", message_PT: "Virar + Respirar" }],
		"die": [{ type: "func", func: () => { first_boss_debuff = false; } }],
		"ar-0-0-93910005": [{ type: "func", func: () => first_boss_debuff = false }],
		"ae-0-0-93910005": [{ type: "func", func: () => first_boss_debuff = true }],
		"s-939-93910-305-0": [
			{ type: "text", sub_type: "notification", message: "[c=#00e1ff]Enter the big circle[/c]", message_ES: "[c=#00e1ff]Entra en círculo Grande[/c]", message_PT: "[c=#00e1ff]Entrar no Círculo Grande[/c]", check_func: () => first_boss_debuff, speech: false },
			{ type: "text", sub_type: "notification", message: "[c=#ff2e32]Exit the big circle[/c]", message_ES: "[c=#ff2e32]Salir de círculo Grande[/c]", message_PT: "[c=#ff2e32]Sair do círculo Grande[/c]", check_func: () => !first_boss_debuff, speech: false },
			{ type: "text", sub_type: "message", message: "Enter the big circle", message_ES: "Entra en círculo Grande", message_PT: "Entrar no Círculo Grande", check_func: () => first_boss_debuff },
			{ type: "text", sub_type: "message", message: "Exit the big circle", message_ES: "Salir de círculo Grande", message_PT: "Sair do círculo Grande", check_func: () => !first_boss_debuff }
		],
		"s-939-93911-305-0": "s-939-93910-305-0",
		"s-939-93912-305-0": "s-939-93910-305-0",
		"s-939-93913-305-0": "s-939-93910-305-0",
		"s-939-93914-305-0": "s-939-93910-305-0",
		"s-939-1000-308-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_ES: "Entrar > Salir", message_PT: "Entrar > Salir" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6500] }
		],
		"s-939-1000-308-1": [{ type: "text", sub_type: "message", message: "Out", message_ES: "Salir", message_PT: "Sair" }],
		"s-939-1000-112-0": [{ type: "text", sub_type: "message", message: "Back Spray", message_ES: "Atrás Spray", message_PT: "Atrás Spray" }],
		"s-939-1000-120-0": "s-939-1000-112-0",
		"s-939-1000-113-0": [{ type: "text", sub_type: "message", message: "Back Spray + Fire Wave", message_ES: "Atrás Spray + Ola de Fuego", message_PT: "Atrás Spray + Onda de Fogo" }],
		"s-939-1000-115-0": [{ type: "text", sub_type: "message", message: "Front Spray + Fire Wave", message_ES: "Frene Spray + Ola de Fuego", message_PT: "Frente Spray + Onda de Fogo" }],
		"s-939-1000-107-0": [{ type: "text", sub_type: "message", message: "Jump ", message_ES: "Salto", message_PT: "Salto" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 275, 0, 3000] }
		],
		"s-939-1000-117-0": [{ type: "text", sub_type: "message", message: "Jump + Spin Stun", message_ES: "Salto + Giro Stun", message_PT: "Salto + Giro Stun" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 275, 0, 3000] }
		],
		"s-939-1000-119-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Golpes", message_PT: "Muchos Golpes" }],
		"s-939-1000-306-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_ES: "Salir > Entrar", message_PT: "Salir > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6500] }
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
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 342, 0, 2500] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 384, 0, 2500] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 426, 0, 2500] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 468, 0, 2500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 510, 0, 2500] }
		],
		"s-939-2000-113-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun" }],
		"s-939-2000-108-0": [
			{ type: "text", sub_type: "message", message: "Cleanse", message_ES: "Cleanse", message_PT: "Cleanse", class_position: "heal" },
			{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro", message_PT: "Giro", class_position: ["tank", "dps"] }
		],	
		"s-939-2000-115-0": [
			{ type: "text", sub_type: "message", message: "Whirlwind (Out)", message_ES: "Vortice(Salir)", message_PT: "Redemoinho (sair)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 360, 0, 6500] }
		],
		"s-939-2000-119-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Frente", message_PT: "Frente" }],
		"s-939-2000-120-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Atrás", message_PT: "Atrás" }],
		"s-939-2000-303-0": [
			{ type: "text", sub_type: "message", message: "Whip", message_ES: "Latigo", message_PT: "Chicote" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1600 }
		],
		"s-939-2000-304-0": [
			{ type: "text", sub_type: "message", message: "Pull", message_ES: "Jalar", message_PT: "Puxar" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1600 }
		],

		// 3 BOSS
		"nd-939-3001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-939-3001-30": [{ type: "text", sub_type: "message", message: "Reveal soon...", message_ES: "Revelar Pronto...", message_PT: "Revelar em Breve..." }],
		"s-939-3001-201-0": [
			{ type: "text", sub_type: "message", message: "Strong Roar (Stun)", message_ES: "Rugido Fuerte (Stun)", message_PT: "Rugido Forte (Stun)" },
			{ type: "text", sub_type: "message", delay: 3500, message: "Dodge!", message_ES: "Iframe!", message_PT: "Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 650, 0, 4000] }
		],
		"s-939-3001-107-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Golpes", message_PT: "Muitos Golpes" }],
		"s-939-3001-115-0": [
			{ type: "text", sub_type: "message", message: "Strong Roar (Stun)", message_PT: "Rugido Stun)", message_PT: "Rugido (Stun)" },
			{ type: "text", sub_type: "message", delay: 1050, message: "Dodge!", message_ES: "Iframe", message_PT: "Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 650, 0, 4000] }
		],
		"s-939-3001-118-0": [{ type: "text", sub_type: "message", message: "Scratching", message_ES: "Rasguno", message_PT: "Arranhar" }],
		// Revealed Argog
		"s-939-3001-164-0": [{ type: "text", sub_type: "message", message: "Counter Attack (bleed)", message_ES: "Conta Ataque (Sangramiento", message_PT: "Conta Ataque (Sangramento)" }],
		"s-939-3001-167-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Golpes", message_PT: "Muitos Golpes" }],
		"s-939-3001-172-0": [{ type: "text", sub_type: "message", message: "Target", message_ES: "Objetivo", message_PT: "Alvo" }],
		"s-939-3001-175-0": [
			{ type: "text", sub_type: "message", message: "Strong Roar (Stun)", message_PT: "Rugido Stun)", message_PT: "Rugido (Stun)" },
			{ type: "text", sub_type: "message", delay: 1050, message: "Dodge!", message_ES: "Iframe!", message_PT: "Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 650, 0, 4000] }
		],
		"s-939-3001-177-0": [{ type: "text", sub_type: "message", message: "Backstab", message_ES: "Ataque por la Espalda", message_PT: "Ataque nas Costas" }],
		"s-939-3001-178-0": [{ type: "text", sub_type: "message", message: "Scratching (bleed)", message_ES: "Rasguno (Sangrar)", message_PT: "Arranhar (Sangrar)" }],
		"s-939-3001-203-0": [{ type: "text", sub_type: "message", message: "Phantom x3 (bleed)", message_ES: "Fantasma x3 (Sangramiento)", message_PT: "Fantasma x3 (Sangramento)" }],
		"s-939-3001-207-0": [{ type: "text", sub_type: "message", message: "Phantom x5 (bleed)", message_ES: "Fantasma x5 (Sangramiento)", message_PT: "Fantasma x5 (Sangramento)" }],
		"s-939-3001-212-0": [{ type: "text", sub_type: "message", message: "Flash", message_ES: "Flash", message_PT: "Flash" }]
	};
};