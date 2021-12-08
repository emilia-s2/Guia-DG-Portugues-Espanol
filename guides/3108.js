// Cursed Antaroth's Abyss
//
// made by HSDN / Yuyuko / Owyn / icebrog

const util = require("util");

module.exports = (dispatch, handlers, guide, lang) => {
	let two_slash_time = 0;
	let blue_sword = false;
	let stack_red = 0;
	let stack_blue = 0;
	let stack_yellow = 0;

	function two_slash_event() {
		const now_time = new Date();

		if ((now_time - two_slash_time) > 1800 && (now_time - two_slash_time) < 2250) {
			handlers.text({ sub_type: "message", message: "Back Stun", message_ES: "Stun Atrás", message_PT: "Stun Atrás" });
		}

		two_slash_time = now_time;
	}

	function cage_colour_event() {
		const format = `%s: ${stack_red} | %s: ${stack_blue} | %s: ${stack_yellow}`;
		const format_cc = `  [c=#ff7777]%s: ${stack_red}[/c]    [c=#7777ff]%s: ${stack_blue}[/c]    [c=#ffff77]%s: ${stack_yellow}[/c]`;

		handlers.event([
			{
				type: "text",
				sub_type: "message",
				message: util.format(format, "Red", "Blue", "Yellow"),
				message_ES: util.format(format, "Rojo", "Azul", "Amarillo"),
				message_PT: util.format(format, "Vermelho", "Azul", "Amarelo"),
				speech: false
			},
			{
				type: "text",
				sub_type: "notification",
				message: util.format(format_cc, "Red", "Blue", "Yellow"),
				message_ES: util.format(format_cc, "Rojo", "Azul", "Amarillo"),
				message_PT: util.format(format_cc, "Vermelho", "Azul", "Amarelo"),
				speech: false
			}
		]);
	}

	return {
		"nd-3108-1000-0": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3108-1000-64": [{ type: "text", sub_type: "message", message: "64%", message_ES: "64%", message_PT: "64%" }],
		"h-3105-1000-40": [{ type: "text", sub_type: "message", message: "40%", message_ES: "64%", message_PT: "40%" }],

		"s-3108-1000-105-0": [{ type: "text", sub_type: "message", message: "Target Cage", message_ES: "Jaula (Objetivo)", message_PT: "Prisão (Alvo)" }],
		"s-3108-1000-107-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_ES: "Salto Aleatorio (Stun)", message_PT: "Alto Aleatório(Stun)" }],
		"s-3108-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Front | Back Stun", message_ES: "Ataque Frontal | Atrás Stun", message_PT: "Ataque Frontal | Atrás Stun" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 325, 12, 325, 0, 2000] },
			{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 500, 2000] }
		],
		"s-3108-1000-115-0": [{ type: "text", sub_type: "message", message: "Spinning Attack", message_ES: "Ataque Giratorio", message_PT: "Ataque Giratorio" }],
		"s-3108-1000-131-0": [{ type: "text", sub_type: "message", message: "Front Knockup", message_ES: "Lanzar hacia adelante", message_PT: "Lançar para Frente" }],
		"s-3108-1000-120-0": [{ type: "text", sub_type: "message", message: "Energy Beam", message_ES: "Rayo de Energia", message_PT: "Raio de Energia" }],
		"s-3108-1000-204-0": [{ type: "text", sub_type: "message", message: "Energy Beam", message_ES: "Rayo de Energia", message_PT: "Raio de Energia" }],
		"s-3108-1000-309-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ", message_PT: "АоЕ" }],
		"s-3108-1000-310-0": [{ type: "text", sub_type: "message", message: "Puddles", message_ES: "Charcos (Olas)", message_PT: "Poças (Ondas)" }],
		"s-3108-1000-311-0": "s-3108-1000-310-0",
		"s-3108-1000-312-0": "s-3108-1000-310-0",
		"s-3108-1000-313-0": "s-3108-1000-310-0",
		"s-3108-1000-314-0": "s-3108-1000-310-0",
		"s-3108-1000-315-0": [{ type: "text", sub_type: "message", message: "Pushback (Kaia)", message_ES: "Empujar Atrás (Kaia)", message_PT: "Empurrar Atrás (Kaia)" }],
		"s-3108-1000-400-0": [{ type: "text", sub_type: "message", message: "Clones: Beam", message_ES: "Clones: Rayo", message_PT: "Clones: Raio" }],
		"s-3108-1000-401-0": [{ type: "text", sub_type: "message", message: "Clones: Spin", message_ES: "Clones: Girar", message_PT: "Clones: Girar" }],

		// Back stun mech
		"s-3108-1000-104-0": [{ type: "func", func: two_slash_event }],
		"s-3108-1000-119-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 0, 2000] }],

		// Waves mech
		"s-3108-1000-201-0": [{ type: "func", func: () => blue_sword = false }],
		"s-3108-1000-207-0": [{ type: "func", func: () => blue_sword = true }],
		"s-3108-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "Izquierda", message_PT: "Esquerda" },
			{ type: "text", sub_type: "message", message: "Inward (In > Out)", message_ES: "Interior (Entrar > Salir)", message_PT: "Dentro (ENTRAR > SAIR)", check_func: () => !blue_sword, delay: 1000 },
			{ type: "text", sub_type: "message", message: "Unstable (In > In > Mid)", message_ES: "Inestable (Entrar > Entrar > Medio)", message_PT: "Instável (Entrar > Entrar > Meio)", check_func: () => blue_sword, delay: 1000 },
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
		"s-3108-1000-111-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha", message_PT: "Direita" },
			{ type: "text", sub_type: "message", message: "Outward (Out > In)", message_ES: "Exterior (Salir > Entrar)", message_PT: "Fora (SAIR > ENTRAR)", check_func: () => !blue_sword, delay: 1000 },
			{ type: "text", sub_type: "message", message: "Unstable (Mid > In > Mid)", message_ES: "Inestable (Medio > Entrar > Medio)", message_PT: "Instável (Meio > Entrar > Meio)", check_func: () => blue_sword, delay: 1000 },
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
		"s-3108-1000-206-0": [{ type: "text", sub_type: "message", message: "Orbs", message_ES: "Orbes", message_PT: "Orbes" }],
		"s-3108-1000-320-0": [
			{ type: "text", sub_type: "message", message: "Left: Blue | Right: Red", message_ES: "Izquierda: Azul | Derecha: Rojo", message_PT: "Esquerda: Azul | Direita: Vermelho" },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 6000, "red", null] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 6000, "purple", null] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] }
		],
		"s-3108-1000-321-0": [
			{ type: "text", sub_type: "message", message: "Left: Red | Right: Blue", message_ES: "Izquierda: Rojo | Derecha: Azul", message_PT: "Esquerda: Vermelho | Direita: Azul" },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 6000, "red", null] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 6000, "purple", null] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] }
		],

		// Pushback mech
		"ab-3108-1000-31083063-1": [{ type: "text", sub_type: "notification", message: "Stack 1", message_ES: "Stack 1", message_PT: "Stack 1" }],
		"ab-3108-1000-31083063-2": [{ type: "text", sub_type: "notification", message: "Stack 2", message_ES: "Stack 2", message_PT: "Stack 2" }],
		"ab-3108-1000-31083063-3": [{ type: "text", sub_type: "notification", message: "Stack 3", message_ES: "Stack 3", message_PT: "Stack 3" }],
		"ab-3108-1000-31083064": [
			{ type: "text", sub_type: "notification", message: "Charged", message_ES: "Cargado", message_PT: "Carregado", speech: false },
			{ type: "text", sub_type: "alert", message: "Pushback soon", message_ES: "Empujar Atrás Pronto", message_PT: "Empurrar Atrás Embreve" }
		],
		"s-3108-1000-209-0": [{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "Iframe!", message_PT: "Iframe!", delay: 500 }],
		"s-3108-1000-211-0": "s-3108-1000-209-0",

		// Cage mech
		"qb-3108-1000-31083002": [{ type: "text", sub_type: "message", message: "Cage", message_ES: "Jaula", message_PT: "Prisão" }],
		"s-3108-1000-317-0": [
			{ type: "func", func: cage_colour_event, delay: 100 },
			{ type: "func", func: cage_colour_event, delay: 3750 },
			{ type: "func", func: cage_colour_event, delay: 7500 }
		],
		"s-3108-1000-318-0": "s-3108-1000-317-0",
		"ab-3108-1000-31083070-6": [{ type: "func", func: () => stack_red = 6 }],
		"ab-3108-1000-31083070-5": [{ type: "func", func: () => stack_red = 5 }],
		"ab-3108-1000-31083070-4": [{ type: "func", func: () => stack_red = 4 }],
		"ab-3108-1000-31083070-3": [{ type: "func", func: () => stack_red = 3 }],
		"ab-3108-1000-31083070-2": [{ type: "func", func: () => stack_red = 2 }],
		"ab-3108-1000-31083070-1": [{ type: "func", func: () => stack_red = 1 }],
		"ad-3108-1000-31083070": [{ type: "func", func: () => stack_red = 0 }],
		"ab-3108-1000-31083071-6": [{ type: "func", func: () => stack_yellow = 6 }],
		"ab-3108-1000-31083071-5": [{ type: "func", func: () => stack_yellow = 5 }],
		"ab-3108-1000-31083071-4": [{ type: "func", func: () => stack_yellow = 4 }],
		"ab-3108-1000-31083071-3": [{ type: "func", func: () => stack_yellow = 3 }],
		"ab-3108-1000-31083071-2": [{ type: "func", func: () => stack_yellow = 2 }],
		"ab-3108-1000-31083071-1": [{ type: "func", func: () => stack_yellow = 1 }],
		"ad-3108-1000-31083071": [{ type: "func", func: () => stack_yellow = 0 }],
		"ab-3108-1000-31083072-6": [{ type: "func", func: () => stack_blue = 6 }],
		"ab-3108-1000-31083072-5": [{ type: "func", func: () => stack_blue = 5 }],
		"ab-3108-1000-31083072-4": [{ type: "func", func: () => stack_blue = 4 }],
		"ab-3108-1000-31083072-3": [{ type: "func", func: () => stack_blue = 3 }],
		"ab-3108-1000-31083072-2": [{ type: "func", func: () => stack_blue = 2 }],
		"ab-3108-1000-31083072-1": [{ type: "func", func: () => stack_blue = 1 }],
		"ad-3108-1000-31083072": [{ type: "func", func: () => stack_blue = 0 }]
	};
};