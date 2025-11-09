// Fusion Laboratory
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	const { player } = dispatch.require.library;
	let print_lasers = true;
	let print_donuts = true;

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 32051007) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ speech: false, sub_type: "notification", message: "Lasers on you", message_ES: "Lasers en Ti", message_PT: "Lasers em você" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						speech: false,
						sub_type: "message",
						message: `Lasers on ${member.name}`,
						message_ES: `Laser Activado ${member.name}`,
						message_PT: `Laser Ativado ${member.name}`
					});
				}
			}
		}
	});

	return {
		"ns-3105-1000": [
			{ type: "func", func: () => print_lasers = true }
		],
		"nd-3105-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"h-3105-1000-80": [{ type: "text", sub_type: "message", message: "80%", message_ES: "80%", message_PT: "80%" }],
		"h-3105-1000-35": [{ type: "text", sub_type: "message", message: "35%", message_ES: "35%", message_PT: "35%" }],

		"s-3105-1000-101-0": [{ type: "text", sub_type: "message", message: "Front Swing", message_ES: "Balanceo Frontal", message_PT: "Balanço Frontal" }],
		"s-3105-1000-102-0": [
			{ type: "text", sub_type: "message", message: "Disc Throw", message_ES: "Disco Throw", message_PT: "Disco Throw" },
			{ type: "spawn", func: "vector", args: [553, 270, -27, 187, 210, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, -27, 8, 350, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 140, 10, 350, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 140, 190, 210, 2000, 2000] }
		],
		"s-3105-1000-104-0": [
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_ES: "Stun (AOE)", message_PT: "Stun (AOE)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 280, 100, 3000] }
		],
		"s-3105-1000-108-0": [
			{ type: "text", sub_type: "message", message: "Push (Tank)", message_ES: "Empujar (Tank)", message_PT: "Empurrar (Tank)" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 300, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 300, 0, 3000] }
		],
		"s-3105-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Front Laser", message_ES: "Laser Frente", message_PT: "Laser Frente" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 0, 500, 1000, 4000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 0, 500, 1000, 4000] }
		],
		"s-3105-1000-106-0": [{ type: "text", sub_type: "message", message: "Blades Front", message_ES: "Cuchillas Frontal", message_PT: "Lâminas Frontal" }],
		"s-3105-1000-112-0": [
			{ type: "text", sub_type: "message", message: "Blades Back", message_ES: "Cuchillas Atrás", message_PT: "Lâminas Atrás" },
			{ type: "spawn", func: "vector", args: [553, 70, 10, 160, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 290, 10, -160, 350, 0, 3000] }
		],
		"s-3105-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Shot", message_ES: "Disparo", message_PT: "Tiro" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 0, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 0, 500, 0, 3000] }
		],
		"s-3105-1000-114-0": [
			{ type: "text", sub_type: "message", message: "Back Laser", message_ES: "Atrás Laser", message_PT: "Atrás Laser" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 180, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 180, 500, 0, 3000] }
		],
		"s-3105-1000-119-0": [{ type: "text", sub_type: "message", message: "Cut", message_ES: "Corte", message_PT: "Corte" }],
		"s-3105-1000-120-0": [{ type: "text", sub_type: "message", message: "Storm", message_ES: "Tormenta", message_PT: "Tempestade" }],
		"s-3105-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Spin | Back Laser", message_ES: "Girar | Laser Atrás", message_PT: "Girar | Laser Atrás" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 290, 100, 5000] }
		],
		"s-3105-1000-117-0": [{ type: "text", sub_type: "message", message: "Kick", message_ES: "Patada", message_PT: "Chute" }],
		"s-3105-1000-118-0": [{ type: "text", sub_type: "message", message: "Kick (Dodge)", message_ES: "Patada (Iframe)", message_PT: "Chute (Iframe)" }],

		// Donuts combo <80%
		"s-3105-1000-115-0": [
			{ type: "func", func: () => print_donuts = true },
			{ type: "text", sub_type: "message", message: "Outward Donuts (Out > In)", message_ES: "Afuera Donuts (Salir > Entrar", message_PT: "Fora Donuts (Sair > Entrar)", delay: 200, check_func: () => print_donuts },
			{ type: "event", delay: 1500, check_func: () => print_donuts, args: [
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 0, 5000], tag: "donuts" },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 330, 0, 5000], tag: "donuts" },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 510, 0, 5000], tag: "donuts" }
			] },
			{ type: "text", sub_type: "message", message: "Kaia", message_ES: "Kaia", message_PT: "Kaia", delay: 4400, check_func: () => print_donuts }
		],
		"e-3105-1000-115": [
			{ type: "despawn_all", tag: "donuts" },
			{ type: "func", func: () => print_donuts = false }
		],
		"s-3105-1000-116-0": [
			{ type: "func", func: () => print_donuts = true },
			{ type: "text", sub_type: "message", message: "Inward Donuts (In > Out)", message_ES: "Adentro Donuts (Entrar > Salir)", message_PT: "Dentro Donuts (Entrar > Sair)", delay: 200, check_func: () => print_donuts },
			{ type: "event", delay: 1500, check_func: () => print_donuts, args: [
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 0, 5000], tag: "donuts" },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 330, 0, 5000], tag: "donuts" },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 510, 0, 5000], tag: "donuts" }
			] },
			{ type: "text", sub_type: "message", message: "Kaia", message_ES: "Kaia", message_PT: "Kaia", delay: 4400, check_func: () => print_donuts }
		],
		"e-3105-1000-116": [
			{ type: "despawn_all", tag: "donuts" },
			{ type: "func", func: () => print_donuts = false }
		],

		"qb-3105-1000-31051002": [{ type: "text", sub_type: "message", message: "Shield!", message_ES: "Escudo", message_PT: "Escudo!" }], // <50%
		"qb-3105-1000-32051002": "qb-3105-1000-31051002",
		"s-3105-1000-123-0": [{ type: "text", sub_type: "message", message: "Break Failure", message_ES: "Falla en Romper", message_PT: "Falha em Quebrar" }],

		"qb-3105-1000-31051004": [{ type: "text", sub_type: "message", message: "Bait (Lasers)", message_ES: "Bait (Lasers)", message_PT: "Bait (Lasers)" }], // range check
		"qb-3105-1000-32051004": "qb-3105-1000-31051004",
		"qb-3105-1000-31051005": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait", message_PT: "Bait" }], // get stun
		"qb-3105-1000-32051005": "qb-3105-1000-31051005",
		"qb-3105-1000-31051006": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait", message_PT: "Bait" }], // cast ress
		"qb-3105-1000-32051006": "qb-3105-1000-31051006",
		"qb-3105-1000-31051007": [{ type: "text", sub_type: "message", message: "Puddles", message_ES: "Charcos", message_PT: "Poças" }], // <40%
		"qb-3105-1000-32051007": "qb-3105-1000-31051007",

		// Core mech <35%
		"qb-3105-1000-31051010": [
			{ type: "text", sub_type: "message", message: "LASERS + WAVE", message_ES: "LASERS + OLAS", message_PT: "LASERS + ONDAS" },
			{ type: "text", sub_type: "notification", message: "LASERS + WAVE", message_ES: "LASERS + OLAS", message_PT: "LASERS + ONDAS", speech: false }
		],
		"qb-3105-1000-32051010": "qb-3105-1000-31051010",
		"s-3105-1000-310-0": [{ type: "spawn", func: "marker", args: [false, 0, 0, 0, 8000, true, ["Lasers", "Wave"]] }],
		"s-3105-1000-304-0": [ // red
			{ type: "text", sub_type: "message", message: "Wave (Dodge)", message_ES: "Ola (Iframe)", message_PT: "Onda (Iframe)", delay: 100 },
			{ type: "text", sub_type: "message", message: "Give Stun!", message_ES: "Dar Stun!", message_PT: "Dê Stun!", delay: 2000 }
		],
		"s-3105-1000-305-0": [ // blue
			{ type: "text", sub_type: "message", message: "Wave (Dodge)", message_ES: "Ola (Iframe)", message_PT: "Onda (Iframe)", delay: 100 },
			{ type: "text", sub_type: "message", message: "Give Stun!", message_ES: "Dar Stun!", message_PT: "Dê Stun!", delay: 2000 }
		],
		"s-3105-1000-121-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE", message_PT: "АоЕ" }], // red
		"s-3105-1000-122-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE", message_PT: "АоЕ" }], // blue

		// Lasers <80%
		"qb-3105-1001-31051011": [
			{ type: "event", check_func: () => print_lasers, args: [
				{ type: "text", sub_type: "message", message: "Lasers!", message_ES: "Lasers!", message_PT: "Lasers!" },
				{ type: "func", func: () => print_lasers = false },
				{ type: "func", func: () => print_lasers = true, delay: 16000 }
			] }
		],
		"qb-3105-1001-32051011": "qb-3105-1001-31051011",
		"qb-3105-1002-31051011": "qb-3105-1001-31051011",
		"qb-3105-1002-32051011": "qb-3105-1001-31051011",
		"qb-3105-1003-31051011": "qb-3105-1001-31051011",
		"qb-3105-1003-32051011": "qb-3105-1001-31051011",
		"qb-3105-1004-31051011": "qb-3105-1001-31051011",
		"qb-3105-1004-32051011": "qb-3105-1001-31051011",
		"qb-3105-1005-31051011": "qb-3105-1001-31051011",
		"qb-3105-1005-32051011": "qb-3105-1001-31051011",
		"qb-3105-1006-31051011": "qb-3105-1001-31051011",
		"qb-3105-1006-32051011": "qb-3105-1001-31051011",

		"s-3105-1001-101-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 1000, 3000] }], // laser (basic)
		"s-3105-1002-101-0": "s-3105-1001-101-0",
		"s-3105-1003-101-0": "s-3105-1001-101-0",
		"s-3105-1004-101-0": "s-3105-1001-101-0",
		"s-3105-1005-101-0": "s-3105-1001-101-0",
		"s-3105-1006-101-0": "s-3105-1001-101-0",

		"s-3105-1001-102-0": [{ type: "spawn", func: "vector", args: [520, 0, 0, 0, 1600, 1000, 3000] }], // laser (bait)
		"s-3105-1002-102-0": "s-3105-1001-102-0",
		"s-3105-1003-102-0": "s-3105-1001-102-0",
		"s-3105-1004-102-0": "s-3105-1001-102-0",
		"s-3105-1005-102-0": "s-3105-1001-102-0",
		"s-3105-1006-102-0": "s-3105-1001-102-0",

		"s-3105-1001-103-0": [ // laser (core)
			{ type: "spawn", func: "vector", args: [553, 90, 40, 0, 800, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 40, 0, 800, 0, 6000] }
		],
		"s-3105-1002-103-0": "s-3105-1001-103-0",
		"s-3105-1003-103-0": "s-3105-1001-103-0",
		"s-3105-1004-103-0": "s-3105-1001-103-0",
		"s-3105-1005-103-0": "s-3105-1001-103-0",
		"s-3105-1006-103-0": "s-3105-1001-103-0"
	};
};