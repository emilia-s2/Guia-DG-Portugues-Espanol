// Thaumetal Refinery
//
// made by ITunk / Vampic

module.exports = (dispatch, handlers, guide, lang) => {
	const { entity } = dispatch.require.library;

	let blue_vaccine_loc = null;
	let red_vaccine_loc = null;
	const road_from_gameIds = new Set();

	function spawn_road(loc) {
		road_from_gameIds.forEach(road_from_gameId => {
			const road_from_ent = entity.mobs[road_from_gameId];
			if (road_from_ent && loc) {
				const angle = (road_from_ent.pos.angleTo(loc) - road_from_ent.pos.w) * 180 / Math.PI;
				const distance = road_from_ent.pos.dist2D(loc);
				handlers.event([
					{ type: "spawn", func: "vector", args: [553, -90 + angle, 50, angle, distance, 0, 10000] },
					{ type: "spawn", func: "vector", args: [553, 90 + angle, 50, angle, distance, 0, 10000] }
				], { loc: road_from_ent.pos });
			}
		});
	}

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 7941030) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "message", message: "Put banana to the tree", message_ES: "Ponle Plátano al Árbol.", message_PT: "Coloque a Banana na Árvore" });
			}
		}
	});

	return {
		// 1 BOSS
		"nd-794-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-794-1000-103-0": [
			{ type: "text", sub_type: "message", message: "AOE Stun (Dodge)", message_ES: "AOE Stun (Iframe)", message_PT: "AOE Stun (Iframe)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 125, null, 250, 0, 2000] }
		],
		"s-794-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Jump (Dodge)", message_ES: "Salto (Iframe)", message_PT: "Salto (Iframe)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, null, 250, 2500, 2500] }
		],
		"s-794-1000-115-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1000 }],
		"s-794-1000-119-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar Atrás", message_PT: "Empurrar Atrás" }],
		"s-794-1000-315-0": [{ type: "text", sub_type: "message", message: "In", message_ES: "Entrar", message_PT: "Entrar" }],
		"ae-0-0-7941002": [{ type: "text", sub_type: "message", message: "Eye (boss to banana)", message_ES: "Ojo (Boss a Plátano)", message_PT: "Olho (Boss para Banana)" }],
		"qb-794-1000-994008": [{ type: "text", sub_type: "message", message: "Push (Kaia)", message_ES: "Empujar (Kaia)", message_PT: "Empurrar (Kaia)" }],

		// 2 BOSS
		"s-794-2000-111-0": [{ type: "text", sub_type: "message", message: "Bait (2 stones)", message_ES: "Bait (2 Piedras)", message_PT: "Bait (2 Pedras)" }],
		"s-794-2000-112-0": [{ type: "text", sub_type: "message", message: "Bait (3 stones)", message_ES: "Bait (3 Piedras)", message_PT: "Bait (3 Pedras)" }],
		"s-794-2000-106-0": [{ type: "text", sub_type: "message", message: "Bait (Rock)", message_ES: "Bait (Roca)", message_PT: "Bait (Rocha)" }],
		"s-794-2000-307-0": [{ type: "text", sub_type: "message", message: "Stones", message_ES: "Piedras", message_PT: "Pedras" }],
		"ae-0-0-7942006": [{ type: "text", sub_type: "message", message: "Stone on you", message_ES: "Piedra sobre ti", message_PT: "Pedra em você", delay: 1000 }],
		"s-794-2000-117-0": [{ type: "text", sub_type: "message", message: "Inward Wave", message_ES: "Ola Dentro", message_PT: "Onde Dentro", delay: 1000 }],
		"s-794-2000-118-0": [{ type: "text", sub_type: "message", message: "Outward Wave", message_ES: "Ola Afuera", message_PT: "Onda Fora" }],
		"s-794-2000-114-0": [{ type: "text", sub_type: "message", message: "Together", message_ES: "Juntar", message_PT: "Juntar" }],
		"s-794-2000-110-0": [{ type: "text", sub_type: "message", message: "Hit in dd", message_ES: "Golpear en dd", message_PT: "Golpear em dd" }],

		// 3 BOSS
		"nd-794-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-794-3002": [{ type: "func", func: ent => road_from_gameIds.add(ent.gameId) }], // Колба с мобом
		"nd-794-3002": [{ type: "func", func: ent => road_from_gameIds.delete(ent.gameId), delay: 5000 }],
		"ns-794-3004": [{ type: "func", func: ent => blue_vaccine_loc = ent.pos }], // Синий
		"ns-794-3005": [{ type: "func", func: ent => red_vaccine_loc = ent.pos }], // Красный
		"s-794-3000-103-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar Atrás", message_PT: "Empurrar Atrás" }],
		"s-794-3000-107-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 3000] },
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_ES: "Frente (Iframe)", message_PT: "Frente (Iframe)" }
		],
		"s-794-3000-108-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 3000] },
			{ type: "text", sub_type: "message", message: "Back (Dodge)", message_ES: "Atrás (Iframe)", message_PT: "Atrás (Iframe)" }
		],
		"s-794-3000-104-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait", message_PT: "Bait" }],
		"s-794-3000-111-0": [{ type: "text", sub_type: "message", message: "Out Safe", message_ES: "Salir", message_PT: "Sair" }],
		"s-794-3000-112-0": [{ type: "text", sub_type: "message", message: "In Safe", message_ES: "Entrar", message_PT: "Entrar" }],
		"s-794-3000-113-0": [{ type: "text", sub_type: "message", message: "Donut (In)", message_ES: "Donut (Entrar)", message_PT: "Donut (Entrar)" }],
		"s-794-3000-114-0": [{ type: "text", sub_type: "message", message: "Donut (Out)", message_ES: "Donut (Salir)", message_PT: "Donut (Salir)" }],
		"s-794-3000-122-0": [{ type: "text", sub_type: "message", message: "Gather!", message_ES: "Juntar", message_PT: "Juntar!" }],
		"s-794-3000-125-0": [{ type: "text", sub_type: "message", message: "Bait (Puddle)", message_ES: "Bait (Charco)", message_PT: "Bait (Poça)" }],
		"s-794-3000-315-0": [
			{ type: "text", sub_type: "message", message: "Remove puddles from paths", message_ES: "Quitarlo los Charcos de los Caminos", message_PT: "Remova as Poças dos Caminhos" },
			{ type: "func", func: () => spawn_road(blue_vaccine_loc) }
		],
		"s-794-3000-316-0": [
			{ type: "text", sub_type: "message", message: "Remove puddles from paths", message_ES: "Quitarlo los Charcos de los Caminos", message_PT: "Remova as Poças dos Caminhos" },
			{ type: "func", func: () => spawn_road(red_vaccine_loc) }
		]
	};
};