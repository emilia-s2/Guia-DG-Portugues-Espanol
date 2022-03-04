//Rogash's Trial (Fusion Laboratory)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let print_lasers = true;
	let print_donuts = true;

	return {
		"ns-3046-1000": [
			{ type: "func", func: () => print_lasers = true }
		],
		"nd-3046-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"h-3046-1000-80": [{ type: "text", sub_type: "message", message: "80%", message_ES: "80%", message_PT: "80%" }],
		"h-3046-1000-35": [{ type: "text", sub_type: "message", message: "35%", message_ES: "35%", message_PT: "35%" }],

		"s-3046-1000-101-0": [{ type: "text", sub_type: "message", message: "Front Swing", message_ES: "Golpe Frontal", message_PT: "Balanço Frontal" }],
		"s-3046-1000-102-0": [
			{ type: "text", sub_type: "message", message: "Disc Throw", message_ES: "Lanzar Disco", message_PT: "Lançar Disco" },
			{ type: "spawn", func: "vector", args: [553, 270, -27, 187, 210, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, -27, 8, 350, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 140, 10, 350, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 140, 190, 210, 2000, 2000] }
		],
		"s-3046-1000-104-0": [
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_ES: "Stun (АОЕ)", message_PT: "Stun (AOE)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 280, 100, 3000] }
		],
		"s-3046-1000-108-0": [
			{ type: "text", sub_type: "message", message: "Push (Tank)", message_ES: "Empujar (Tank)", message_PT: "Empurrar (Tanque)" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 300, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 300, 0, 3000] }
		],
		"s-3046-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Front Laser", message_ES: "Laser Frontal", message_PT: "Laser Frente" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 0, 500, 1000, 4000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 0, 500, 1000, 4000] }
		],
		"s-3046-1000-106-0": [{ type: "text", sub_type: "message", message: "Blades Front", message_ES: "Cuchillas Frontal", message_PT: "Lâminas Frontal" }],
		"s-3046-1000-112-0": [
			{ type: "text", sub_type: "message", message: "Blades Back", message_ES: "Cuchillas Atras", message_PT: "Lâminas Atrás" },
			{ type: "spawn", func: "vector", args: [553, 70, 10, 160, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 290, 10, -160, 350, 0, 3000] }
		],
		"s-3046-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Shot", message_ES: "Disparo", message_PT: "Tiros" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 0, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 0, 500, 0, 3000] }
		],
		"s-3046-1000-114-0": [
			{ type: "text", sub_type: "message", message: "Back Laser", message_ES: "Laser Trasero", message_PT: "Laser Atrás" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 180, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 180, 500, 0, 3000] }
		],
		"s-3046-1000-119-0": [{ type: "text", sub_type: "message", message: "Cut", message_ES: "Recorte", message_PT: "Cortar" }],
		"s-3046-1000-120-0": [{ type: "text", sub_type: "message", message: "Storm", message_ES: "Tormenta", message_PT: "Tempestade" }],
		"s-3046-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Spin | Back Laser", message_ES: "Giro | Laser Trasero", message_PT: "Giro | Laser Atrás" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 290, 100, 5000] }
		],
		"s-3046-1000-117-0": [{ type: "text", sub_type: "message", message: "Kick", message_ES: "Patada", message_PT: "Chute" }],
		"s-3046-1000-118-0": [{ type: "text", sub_type: "message", message: "Kick (Dodge)", message_ES: "Patada (Esquiva)", message_PT: "Chute (Esquiva)" }],

		// Donuts combo <80%
		"s-3046-1000-115-0": [
			{ type: "func", func: () => print_donuts = true },
			{ type: "text", sub_type: "message", message: "Outward Donuts (Out > In)", message_ES: "Donuts: Afuera > Adentro", message_PT: "Donuts: SAIR - ENTRAR", delay: 200, check_func: () => print_donuts },
			{ type: "event", delay: 1500, check_func: () => print_donuts, args: [
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 0, 5000], tag: "donuts" },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 330, 0, 5000], tag: "donuts" },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 510, 0, 5000], tag: "donuts" }
			] },
			{ type: "text", sub_type: "message", message: "Kaia", message_ES: "Kaia", message_PT: "Kaia", delay: 4400, check_func: () => print_donuts }
		],
		"e-3046-1000-115": [
			{ type: "despawn_all", tag: "donuts" },
			{ type: "func", func: () => print_donuts = false }
		],
		"s-3046-1000-116-0": [
			{ type: "func", func: () => print_donuts = true },
			{ type: "text", sub_type: "message", message: "Inward Donuts (In > Out)", message_ES: "Donuts: Adentro > Afuera", message_PT: "Donuts: ENTRAR - SAIR", delay: 200, check_func: () => print_donuts },
			{ type: "event", delay: 1500, check_func: () => print_donuts, args: [
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 0, 5000], tag: "donuts" },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 330, 0, 5000], tag: "donuts" },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 510, 0, 5000], tag: "donuts" }
			] },
			{ type: "text", sub_type: "message", message: "Kaia", message_ES: "Kaia", message_PT: "Kaia", delay: 4400, check_func: () => print_donuts }
		],
		"e-3046-1000-116": [
			{ type: "despawn_all", tag: "donuts" },
			{ type: "func", func: () => print_donuts = false }
		],

		"qb-3046-1000-30461002": [{ type: "text", sub_type: "message", message: "Shield!", message_ES: "ESCUDO!", message_PT: "ESCUDO!" }], // <50%
		"s-3046-1000-123-0": [{ type: "text", sub_type: "message", message: "Break Failure", message_ES: "Fallaron Romper", message_PT: "Quebrar Falhou" }],

		"qb-3046-1000-30461004": [{ type: "text", sub_type: "message", message: "Bait (Lasers)", message_ES: "Bait Lasers", message_PT: "Bait (Lasers)" }], // range check
		"qb-3046-1000-30461005": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait", message_PT: "Bait" }], // get stun
		"qb-3046-1000-30461006": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait", message_PT: "Bait" }], // cast ress
		"qb-3046-1000-30461007": [{ type: "text", sub_type: "message", message: "Puddles", message_ES: "Charcos", message_PT: "Poços" }], // <40%

		// Core mech <35%
		"qb-3046-1000-30461010": [
			{ type: "text", sub_type: "message", message: "LASERS + WAVE", message_ES: "LASER + OLA", message_PT: "LASERS + ONDA" },
			{ type: "text", sub_type: "notification", message: "LASERS + WAVE", message_ES: "LASER + OLA", message_PT: "LASERS + ONDA", speech: false }
		],
		"s-3046-1000-310-0": [{ type: "spawn", func: "marker", args: [false, 0, 0, 0, 8000, true, ["Lasers", "Wave"]] }],
		"s-3046-1000-304-0": [ // red
			{ type: "text", sub_type: "message", message: "Wave (Dodge)", message_ES: "Ola Esquiva!", message_PT: "Onda Esquiva!", delay: 100 },
			{ type: "text", sub_type: "message", message: "Give Stun!", message_ES: "Estunear", message_PT: "Dê Stun!", delay: 2000 }
		],
		"s-3046-1000-305-0": [ // blue
			{ type: "text", sub_type: "message", message: "Wave (Dodge)", message_ES: "Ola Esquiva!", message_PT: "Onda Esquiva!", delay: 100 },
			{ type: "text", sub_type: "message", message: "Give Stun!", message_ES: "Estunear", message_PT: "Dê Stun!", delay: 2000 }
		],
		"s-3046-1000-121-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE", message_PT: "АоЕ" }], // red
		"s-3046-1000-122-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE", message_PT: "АоЕ" }], // blue

		// Lasers <80%
		"qb-3046-1001-30461011": [
			{ type: "event", check_func: () => print_lasers, args: [
				{ type: "text", sub_type: "message", message: "Lasers!", message_ES: "Lasers!", message_PT: "Lasers!" },
				{ type: "func", func: () => print_lasers = false },
				{ type: "func", func: () => print_lasers = true, delay: 16000 }
			] }
		],
		"qb-3046-1002-30461011": "qb-3046-1001-30461011",
		"qb-3046-1003-30461011": "qb-3046-1001-30461011",
		"qb-3046-1004-30461011": "qb-3046-1001-30461011",
		"qb-3046-1005-30461011": "qb-3046-1001-30461011",
		"qb-3046-1006-30461011": "qb-3046-1001-30461011",

		"s-3046-1001-101-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 1000, 3000] }], // laser (basic)
		"s-3046-1002-101-0": "s-3046-1001-101-0",
		"s-3046-1003-101-0": "s-3046-1001-101-0",
		"s-3046-1004-101-0": "s-3046-1001-101-0",
		"s-3046-1005-101-0": "s-3046-1001-101-0",
		"s-3046-1006-101-0": "s-3046-1001-101-0",

		"s-3046-1001-102-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 1000, 3000] }], // laser (bait)
		"s-3046-1002-102-0": "s-3046-1001-102-0",
		"s-3046-1003-102-0": "s-3046-1001-102-0",
		"s-3046-1004-102-0": "s-3046-1001-102-0",
		"s-3046-1005-102-0": "s-3046-1001-102-0",
		"s-3046-1006-102-0": "s-3046-1001-102-0",

		"s-3046-1001-103-0": [ // laser (core)
			{ type: "spawn", func: "vector", args: [553, 90, 40, 0, 800, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 40, 0, 800, 0, 6000] }
		],
		"s-3046-1002-103-0": "s-3046-1001-103-0",
		"s-3046-1003-103-0": "s-3046-1001-103-0",
		"s-3046-1004-103-0": "s-3046-1001-103-0",
		"s-3046-1005-103-0": "s-3046-1001-103-0",
		"s-3046-1006-103-0": "s-3046-1001-103-0"
	};
};