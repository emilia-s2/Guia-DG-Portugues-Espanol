// Cursed Antaroth's Abyss (Asura)
//
// made by HSDN / Yuyuko / Owyn / icebrog

const util = require("util");

module.exports = (dispatch, handlers, guide, lang) => {
	let thirdboss_counter = 0;
	let thirdboss_timer = null;
	// let blue_sword = false;
	let stack_red = 0;
	let stack_blue = 0;
	let stack_yellow = 0;
	let buff_merciless = false;

	function thirdboss_backattack_event() {
		dispatch.clearTimeout(thirdboss_timer);
		thirdboss_counter++;

		if (thirdboss_counter >= 2) {
			handlers.text({ sub_type: "message", message: "Back Stun/Front Stun", message_ES: "Stun Atrás / Stun Frente", message_PT: "Stun Atrás / Stun Frente" });
		}

		thirdboss_timer = dispatch.setTimeout(() => thirdboss_counter = 0, 2500);
	}

	function cage_colour_event() {
		const format = `%s: ${stack_red} | %s: ${stack_blue} | %s: ${stack_yellow}`;
		const format_cc = `  [c=#ff7777]%s: ${stack_red}[/c]    [c=#7777ff]%s: ${stack_blue}[/c]    [c=#ffff77]%s: ${stack_yellow}[/c]`;

		handlers.event([
			{
				type: "text",
				sub_type: "message",
				message: util.format(format, "Red", "Blue", "Yellow"),
				message_ES: util.format(format, "Rojo", "Azul", "Amarillo"), message_PT: util.format(format, "Vermelho", "Azul", "Amarelo"),
				speech: false
			},
			{
				type: "text",
				sub_type: "notification",
				message: util.format(format_cc, "Red", "Blue", "Yellow"),
				message_ES: util.format(format_cc, "Rojo", "Azul", "Amarillo"), message_PT: util.format(format_cc, "Vermelho", "Azul", "Amarelo"),
				speech: false
			}
		]);
	}

	return {
		"nd-3920-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3920-3000-64": [{ type: "text", sub_type: "message", message: "64%", message_ES: "64%", message_PT: "64%" }],
		"h-3920-3000-40": [{ type: "text", sub_type: "message", message: "40%", message_ES: "40%", message_PT: "40%" }],

		"ab-3920-3000-40004011": [{ type: "func", func: () => buff_merciless = true }], // resonance 31+ effect

		"s-3920-3000-105-0": [{ type: "text", sub_type: "message", message: "Target Cage", message_ES: "Jaula al Objetivo", message_PT: "Jaula no Alvo" }],
		"s-3920-3000-107-0": [
			{ type: "text", sub_type: "message", message: "Random Jump", message_ES: "Salto Aleatorio", message_PT: "Salto Aleatório" },
			{ type: "text", sub_type: "message", message: "Spin soon", message_ES: "Pronto Giro", message_PT: "Em Breve Giro", check_func: () => buff_merciless, delay: 1000 }
		],
		"s-3920-3000-107-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 85, 12, 250, 0, 2000] }],
		"s-3920-3000-113-0": [
			{ type: "text", sub_type: "message", message: "Front | Back Stun", message_ES: "Stun Frente | Atrás", message_PT: "Stun Frente | Atrás" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 325, 12, 325, 0, 2000] },
			{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 500, 2000] },
			{ type: "text", sub_type: "message", message: "Spin soon", message_ES: "Pronto Giro", message_PT: "Em Breve Giro", check_func: () => buff_merciless, delay: 500 }
		],
		"s-3920-3000-115-0": [{ type: "text", sub_type: "message", message: "Spin Attack", message_ES: "Ataque Giratorio", message_PT: "Ataque Giratório" }],
		"s-3920-3000-131-0": [{ type: "text", sub_type: "message", message: "Front Knockup", message_ES: "Levantar Frente", message_PT: "Levantar Frente" }],
		"s-3920-3000-120-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Slow)", message_ES: "Rayo de Energía (Lento)", message_PT: "Raio de Energia (Lento)" }],
		"s-3920-3000-122-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Slow)", message_ES: "Rayo de Energía (Lento)", message_PT: "Raio de Energia (Lento)" }],
		"s-3920-3000-204-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Fast)", message_ES: "Rayo de Energía (Rápido)", message_PT: "Raio de Energia (Rápido)" }],
		"s-3920-3000-309-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AOE", message_PT: "AOE" }],
		"s-3920-3000-310-0": [{ type: "text", sub_type: "message", message: "Puddles", message_ES: "Charcos", message_PT: "Poças" }],
		"s-3920-3000-311-0": "s-3920-3000-310-0",
		"s-3920-3000-312-0": "s-3920-3000-310-0",
		"s-3920-3000-313-0": "s-3920-3000-310-0",
		"s-3920-3000-314-0": "s-3920-3000-310-0",
		"s-3920-3000-315-0": [{ type: "text", sub_type: "message", message: "Pushback (Kaia)", message_ES: "Empuje (Kaia)", message_PT: "Empurrão (Kaia)" }],

		"am-3920-3013-31083058": [{ type: "text", sub_type: "message", message: "Red", message_ES: "Rojo", message_PT: "Vermelho" }],
		"am-3920-3012-31083057": [{ type: "text", sub_type: "message", message: "Blue", message_ES: "Azul", message_PT: "Azul" }],

		"s-3920-3000-400-0": [{ type: "text", sub_type: "message", message: "Clones: Beam", message_ES: "Clones: Rayo", message_PT: "Clones: Raio" }],
		"s-3920-3000-401-0": [{ type: "text", sub_type: "message", message: "Clones: Spin", message_ES: "Clones: Giro", message_PT: "Clones: Giro" }],

		// Back stun mech
		"s-3920-3000-104-0": [{ type: "func", func: thirdboss_backattack_event }],
		"s-3920-3000-119-0": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 0, 2000] },
			{ type: "text", sub_type: "message", message: "Spin soon", message_ES: "Pronto Giro", message_PT: "Em Breve Giro", check_func: () => buff_merciless, delay: 500 }
		],

		// Waves mech
		// "s-3920-3000-201-0": [{ type: "func", func: () => blue_sword = false }],
		// "s-3920-3000-207-0": [{ type: "func", func: () => blue_sword = true }],
		"s-3920-3000-109-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "IZQUIERDA", message_PT: "ESQUERDA" },
			{ type: "text", sub_type: "message", message: "Inward (In > Out)", message_ES: "Dentro (ENTRAR > SALIR)", message_PT: "Dentro (ENTRAR > SAIR)", delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
		],
		"s-3920-3000-209-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "IZQUIERDA", message_PT: "ESQUERDA" },
			{ type: "text", sub_type: "message", message: "Inward (In > In > Out)", message_ES: "Dentro (ENTRAR > ENTRAR > SALIR)", message_PT: "Dentro (ENTRAR > ENTRAR > SAIR)", delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
		],
		"s-3920-3000-111-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "DERECHA", message_PT: "DIREITA" },
			{ type: "text", sub_type: "message", message: "Outward (Out > In)", message_ES: "Fuera (SALIR > ENTRAR)", message_PT: "Fora (SAIR > ENTRAR)", delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
		],
		"s-3920-3000-211-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "DERECHA", message_PT: "DIREITA" },
			{ type: "text", sub_type: "message", message: "Outward (Out > In > Out)", message_ES: "Fuera (SALIR > ENTRAR > SALIR)", message_PT: "Fora (SAIR > ENTRAR > SAIR)", delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
		],

		// Orbs mech
		"s-3920-3000-206-0": [{ type: "text", sub_type: "message", message: "Orbs", message_ES: "Orbes", message_PT: "Orbes" }],

		// Pushback mech
		"ab-3920-3000-31083063-1": [{ type: "text", sub_type: "notification", message: "Stack 1", message_ES: "Carga 1", message_PT: "Acúmulo 1" }],
		"ab-3920-3000-31083063-2": [{ type: "text", sub_type: "notification", message: "Stack 2", message_ES: "Carga 2", message_PT: "Acúmulo 2" }],
		"ab-3920-3000-31083063-3": [{ type: "text", sub_type: "notification", message: "Stack 3", message_ES: "Carga 3", message_PT: "Acúmulo 3" }],
		"ab-3920-3000-31083064": [
			{ type: "text", sub_type: "notification", message: "Charged", message_ES: "Cargado", message_PT: "Carregado", speech: false },
			{ type: "text", sub_type: "alert", message: "Pushback", message_ES: "Empuje", message_PT: "Empurrão" }
		],

		// Cage mech
		"qb-3920-3000-31083002": [{ type: "text", sub_type: "message", message: "Cage", message_ES: "Jaula", message_PT: "Jaula" }],
		"s-3920-3000-317-0": [
			{ type: "func", func: cage_colour_event, delay: 100 },
			{ type: "func", func: cage_colour_event, delay: 3750 },
			{ type: "func", func: cage_colour_event, delay: 7500 }
		],
		"s-3920-3000-318-0": "s-3920-3000-317-0",
		"ab-3920-3000-31083070-8": [{ type: "func", func: () => stack_red = 8 }],
		"ab-3920-3000-31083070-7": [{ type: "func", func: () => stack_red = 7 }],
		"ab-3920-3000-31083070-6": [{ type: "func", func: () => stack_red = 6 }],
		"ab-3920-3000-31083070-5": [{ type: "func", func: () => stack_red = 5 }],
		"ab-3920-3000-31083070-4": [{ type: "func", func: () => stack_red = 4 }],
		"ab-3920-3000-31083070-3": [{ type: "func", func: () => stack_red = 3 }],
		"ab-3920-3000-31083070-2": [{ type: "func", func: () => stack_red = 2 }],
		"ab-3920-3000-31083070-1": [{ type: "func", func: () => stack_red = 1 }],
		"ad-3920-3000-31083070": [{ type: "func", func: () => stack_red = 0 }],
		"ab-3920-3000-31083071-8": [{ type: "func", func: () => stack_yellow = 8 }],
		"ab-3920-3000-31083071-7": [{ type: "func", func: () => stack_yellow = 7 }],
		"ab-3920-3000-31083071-6": [{ type: "func", func: () => stack_yellow = 6 }],
		"ab-3920-3000-31083071-5": [{ type: "func", func: () => stack_yellow = 5 }],
		"ab-3920-3000-31083071-4": [{ type: "func", func: () => stack_yellow = 4 }],
		"ab-3920-3000-31083071-3": [{ type: "func", func: () => stack_yellow = 3 }],
		"ab-3920-3000-31083071-2": [{ type: "func", func: () => stack_yellow = 2 }],
		"ab-3920-3000-31083071-1": [{ type: "func", func: () => stack_yellow = 1 }],
		"ad-3920-3000-31083071": [{ type: "func", func: () => stack_yellow = 0 }],
		"ab-3920-3000-31083072-8": [{ type: "func", func: () => stack_blue = 8 }],
		"ab-3920-3000-31083072-7": [{ type: "func", func: () => stack_blue = 7 }],
		"ab-3920-3000-31083072-6": [{ type: "func", func: () => stack_blue = 6 }],
		"ab-3920-3000-31083072-5": [{ type: "func", func: () => stack_blue = 5 }],
		"ab-3920-3000-31083072-4": [{ type: "func", func: () => stack_blue = 4 }],
		"ab-3920-3000-31083072-3": [{ type: "func", func: () => stack_blue = 3 }],
		"ab-3920-3000-31083072-2": [{ type: "func", func: () => stack_blue = 2 }],
		"ab-3920-3000-31083072-1": [{ type: "func", func: () => stack_blue = 1 }],
		"ad-3920-3000-31083072": [{ type: "func", func: () => stack_blue = 0 }]
	};
};
