// Thaumetal Refinery (Hard)
//
// made by ITunk / Vampic

module.exports = (dispatch, handlers, guide, lang) => {
	const { entity } = dispatch.require.library;

	let blue_vaccine_loc = null;
	let red_vaccine_loc = null;
	let road_from_gameId = null;
	let temperature_boss = null;
	let have_buff = null;

	function spawn_road(loc) {
		const road_from_ent = entity.mobs[road_from_gameId];
		if (road_from_ent && loc) {
			const angle = (road_from_ent.pos.angleTo(loc) - road_from_ent.pos.w) * 180 / Math.PI;
			const distance = road_from_ent.pos.dist2D(loc);
			handlers.spawn({ func: "vector", args: [476, 0, 0, angle, distance, 0, 10000] }, { loc: road_from_ent.pos });
		}
	}

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 9941030) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "message", message: "Put banana to the tree", message_ES: "Ponle Plátano al Árbol.", message_PT: "Coloque a Banana na Árvore" });
			}
		}
	});

	return {
		// 1 BOSS
		"nd-994-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-994-1000-103-0": [
			{ type: "text", sub_type: "message", message: "AOE Stun (Dodge)", message_ES: "AOE Stun (Iframe)", message_PT: "AOE Stun (Iframe)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 125, null, 250, 0, 2000] }
		],
		"s-994-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Jump (Dodge)", message_ES: "Salto (Iframe)", message_PT: "Salto (Iframe)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, null, 250, 2500, 2500] }
		],
		"s-994-1000-108-1": [{ type: "text", sub_type: "message", message: "Stun Back", message_ES: "Stun  Atrás", message_PT: "Stun Atrás" }],
		"s-994-1000-111-0": [
			{ type: "text", sub_type: "message", message: "Explosions (In)", message_ES: "Explosiones (Dentro)", message_PT: "Explosões (Dentro)", delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 275, 1000, 4000] }
		],
		"s-994-1000-112-0": [
			{ type: "text", sub_type: "message", message: "Explosions (Out)", message_ES: "Explosiones (Afuera)", message_PT: "Explosões (Fora)", delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 325, 1000, 4000] }
		],
		"s-994-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Explosions (Middle)", message_ES: "Explosiones (Medio)", message_PT: "Explosões (Meio)", delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 210, 1000, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 400, 1000, 4000] }
		],
		"s-994-1000-114-0": [{ type: "text", sub_type: "message", message: "Many Attacks | Pull", message_ES: "Muchos Golpes | Jalar", message_PT: "Muitos Golpes | Puxar" }],
		"s-994-1000-115-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1000 }],
		"s-994-1000-116-0": [{ type: "text", sub_type: "message", message: "Gather!", message_ES: "Juntar!", message_PT: "Juntar!", delay: 3000 }],
		"s-994-1000-119-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar Atrás", message_PT: "Empurrar Atrás" }],
		"s-994-1000-312-0": [{ type: "text", sub_type: "message", message: "Shield!", message_ES: "Escudo!", message_PT: "Escudo!", delay: 2000 }],
		"s-994-1000-315-0": [{ type: "text", sub_type: "message", message: "In", message_ES: "Entrar", message_PT: "Entrar" }],
		"ae-0-0-9941002": [{ type: "text", sub_type: "message", message: "Eye (boss to banana)", message_ES: "Ojo (Boss a Plátano)", message_PT: "Olho (Boss para Banana)" }],
		"qb-994-1000-994008": [{ type: "text", sub_type: "message", message: "Push (Kaia)", message_ES: "Empujar (Kaia)", message_PT: "Empurrar (Kaia)" }],

		// 2 BOSS
		"nd-994-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-994-2000-111-0": [{ type: "text", sub_type: "message", message: "Bait (2 stones)", message_ES: "Bait (2 Piedras)", message_PT: "Bait (2 Pedras)" }],
		"s-994-2000-112-0": [{ type: "text", sub_type: "message", message: "Bait (3 stones)", message_ES: "Bait (3 Piedras)", message_PT: "Bait (3 Pedras)" }],
		"s-994-2000-106-0": [{ type: "text", sub_type: "message", message: "Bait (Rock)", message_ES: "Bait (Roca)", message_PT: "Bait (Rocha)" }],
		"s-994-2000-108-0": [{ type: "text", sub_type: "message", message: "Jump to Tank", message_ES: "Salto en Tank", message_PT: "Salto no Tank" }],
		"s-994-2000-307-0": [{ type: "text", sub_type: "message", message: "Stones", message_ES: "Piedras", message_PT: "Pedras" }],
		"ae-0-0-9942006": [{ type: "text", sub_type: "message", message: "Stone on you", message_ES: "Piedra sobre ti", message_PT: "Pedra em você", delay: 1000 }],
		"s-994-2000-117-0": [{ type: "text", sub_type: "message", message: "Inward Wave", message_ES: "Ola Dentro", message_PT: "Onde Dentro", delay: 1000 }],
		"s-994-2000-118-0": [{ type: "text", sub_type: "message", message: "Outward Wave", message_ES: "Ola Afuera", message_PT: "Onda Fora" }],
		"s-994-2000-114-0": [{ type: "text", sub_type: "message", message: "Together", message_ES: "Juntar", message_PT: "Juntar" }],
		"s-994-2000-113-0": [
			{ type: "text", sub_type: "message", message: "Donut (In > Out)", message_ES: "Donut (Entrar > Salir)", message_PT: "Donut (Entrar > Sair)", delay: 1500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 225, 1500, 2000] },
			{ type: "text", sub_type: "message", message: "Out / Dodge", message_ES: "Salir / Iframe", message_PT: "Sair / Iframe", delay: 3500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 325, 3500, 3000] }
		],
		"s-994-2000-110-0": [{ type: "text", sub_type: "message", message: "Hit in dd", message_ES: "Golpear en dd", message_PT: "Golpear em dd" }],

		// 3 BOSS
		"die": [{ type: "func", func: () => have_buff = null }],
		"ns-994-3000": [{ type: "func", func: () => temperature_boss = null }],
		"nd-994-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-994-3002": [{ type: "func", func: ent => road_from_gameId = ent.gameId }], // Колба с мобом
		"ns-994-3003": [{ type: "func", func: ent => road_from_gameId = ent.gameId, delay: 1000 }], // Эксперимент(моб)
		"nd-994-3003": [{ type: "func", func: () => road_from_gameId = null }],
		"ns-994-3004": [{ type: "func", func: ent => blue_vaccine_loc = ent.pos }], // Синий
		"ns-994-3005": [{ type: "func", func: ent => red_vaccine_loc = ent.pos }], // Красный
		"s-994-3000-103-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar Atrás", message_PT: "Empurrar Atrás" }],
		"s-994-3000-107-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 5500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 5500] },
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_ES: "Frente (Iframe)", message_PT: "Frente (Iframe)", check_func: () => !temperature_boss },
			{ type: "text", sub_type: "message", message: "Front | Back (Dodge)", message_ES: "Frente | Atrás (Iframe)", message_PT: "Frente | Atrás (Iframe)", check_func: () => temperature_boss === "fire" },
			{ type: "text", sub_type: "message", message: "Front x2 (Dodge)", message_ES: "Frente 2x (Iframe)", message_PT: "Frente x2 (Iframe)", check_func: () => temperature_boss === "ice" }
		],
		"s-994-3000-108-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 5500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 5500] },
			{ type: "text", sub_type: "message", message: "Back (Dodge)", message_ES: "Atrás (Iframe)", message_PT: "Atrás (Iframe)", check_func: () => !temperature_boss },
			{ type: "text", sub_type: "message", message: "Back x2 (Dodge)", message_ES: "Atrás x2 (Iframe)", message_PT: "Atrás x2 (Iframe)", check_func: () => temperature_boss === "fire" },
			{ type: "text", sub_type: "message", message: "Back | Front (Dodge)", message_ES: "Atrás | Frente (Iframe)", message_PT: "Atrás | Frente (Iframe)", check_func: () => temperature_boss === "ice" }
		],
		"s-994-3000-104-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait", message_PT: "Bait" }],
		"s-994-3000-111-0": [
			{ type: "text", sub_type: "message", message: "Out Safe", message_ES: "Salir Seguro", message_PT: "Sair Seguro", check_func: () => have_buff === "ice" || !have_buff }, // ice default
			{ type: "text", sub_type: "message", message: "In Safe", message_ES: "Entrar Seguro", message_PT: "Entrar Seguro", check_func: () => have_buff === "fire" }
		],
		"s-994-3000-112-0": [
			{ type: "text", sub_type: "message", message: "In Safe", message_ES: "Entrar Seguro", message_PT: "Entrar Seguro", check_func: () => have_buff === "fire" || !have_buff }, // fire default
			{ type: "text", sub_type: "message", message: "Out Safe", message_ES: "Salir Seguro", message_PT: "Sair Seguro", check_func: () => have_buff === "ice" }
		],
		"s-994-3000-113-0": [
			{ type: "text", sub_type: "message", message: "Donut (In)", message_ES: "Donut (Dentro)", message_PT: "Donut (Dentro)", check_func: () => have_buff === "ice" || !have_buff }, // ice default
			{ type: "text", sub_type: "message", message: "Donut (Middle)", message_ES: "Donut (Medio)", message_PT: "Donut (Medio)", check_func: () => have_buff === "fire" }
		],
		"s-994-3000-114-0": [
			{ type: "text", sub_type: "message", message: "Donut (Middle)", message_ES: "Donut (medio)", message_PT: "Donut (Meio)", check_func: () => have_buff === "fire" || !have_buff }, // fire default
			{ type: "text", sub_type: "message", message: "Donut (In)", message_ES: "Donut (Dentro)", message_PT: "Donut (Dentro)", check_func: () => have_buff === "ice" }
		],
		"s-994-3000-116-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 3000] },
			{ type: "text", sub_type: "message", message: "Front", message_ES: "Frente", message_PT: "Frente", check_func: () => !temperature_boss }
		],
		"s-994-3000-118-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 3000] },
			{ type: "text", sub_type: "message", message: "Back", message_ES: "Atrás", message_PT: "Atrás", check_func: () => !temperature_boss }
		],
		"s-994-3000-122-0": [{ type: "text", sub_type: "message", message: "Gather!", message_ES: "Juntar!", message_PT: "Juntar!" }],
		"s-994-3000-125-0": [{ type: "text", sub_type: "message", message: "Bait (Puddle)", message_ES: "Bait (Charco)", message_PT: "Bait (Poça)" }],
		"s-994-3000-126-0": "s-994-3000-111-0",
		"s-994-3000-127-0": "s-994-3000-112-0",
		"s-994-3000-128-0": "s-994-3000-113-0",
		"s-994-3000-129-0": "s-994-3000-114-0",
		"s-994-3000-130-0": "s-994-3000-116-0",
		"s-994-3000-301-0": [
			{ type: "text", sub_type: "message", message: "Line up the puddles to blue", message_ES: "Alinea los Charcos en Azules.", message_PT: "Alinha as Poças em Azuis" },
			{ type: "func", func: () => spawn_road(blue_vaccine_loc) }
		],
		"s-994-3000-302-0": [
			{ type: "text", sub_type: "message", message: "Line up the puddles to red", message_ES: "Alinea los Charcos en Roja.", message_PT: "Alinha as Poças em Vermelho" },
			{ type: "func", func: () => spawn_road(red_vaccine_loc) }
		],
		"s-994-3000-315-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Jalar", message_PT: "Puxar" }],
		"s-994-3000-316-0": "s-994-3000-315-0",
		"am-994-3000-9943045": [{ type: "func", func: () => have_buff = "ice", delay: 1000 }],
		"am-994-3000-9943046": [{ type: "func", func: () => have_buff = "fire", delay: 1000 }],
		"ae-0-0-9943045": "am-994-3000-9943045",
		"ae-0-0-9943046": "am-994-3000-9943046",
		"ar-0-0-9943045": [{ type: "func", func: () => have_buff = null }],
		"ar-0-0-9943046": "ar-0-0-9943045",
		"ar-994-3000-9943045": "ar-0-0-9943045",
		"ar-994-3000-9943046": "ar-0-0-9943045",
		"qb-994-3000-994022": [{ type: "func", func: () => temperature_boss = "ice" }],
		"qb-994-3000-994024": [{ type: "func", func: () => temperature_boss = "fire" }],
		"qb-994-3000-994064": [{ type: "text", sub_type: "message", message: "Give stun!", message_ES: "Dar Stun", message_PT: "Dê Stun" }],
		"qb-994-3000-994065": [{ type: "text", sub_type: "message", message: "Gather!", message_ES: "Juntar!", message_PT: "Juntar!" }]
	};
};