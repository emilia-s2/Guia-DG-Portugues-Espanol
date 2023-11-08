// Dark Reach Citadel (Difícil)
//
// made by ITunk / HSDN / FrostSigil / Calvary

module.exports = (dispatch, handlers, guide, lang) => {
	let firstboss_prepare_stun = false;
	let secondboss_show_book_notify = true;
	let secondboss_game_id_for_book = null;
	let secondboss_red_book_loc = null;
	let secondboss_blue_book_loc = null;
	let secondboss_green_book_loc = null;
	let first_skillid = 0;

	function closest(nums, num) {
		return nums.reduce((prev, curr) => (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev));
	}

	function thirdboss_mech(skillid) {
		if (first_skillid === 0) {
			first_skillid = skillid;
		} else if (first_skillid === 119 && skillid === 116) {
			handlers.event([
				{ type: "despawn_all" },
				{ type: "spawn", func: "marker", args: [false, 90, 100, 0, 3000, true, null] },
				{ type: "spawn", func: "semicircle", args: [135, 405, 553, 0, 0, 20, 180, 0, 3000] },
				{ type: "spawn", func: "semicircle", args: [135, 405, 553, 0, 0, 12, 280, 0, 3000] },
				{ type: "spawn", func: "semicircle", args: [135, 405, 553, 0, 0, 10, 380, 0, 3000] },
				{ type: "spawn", func: "semicircle", args: [135, 405, 553, 0, 0,  8, 480, 0, 3000] }
			]);

			first_skillid = 0;
		} else if (first_skillid === 116 && skillid === 119) {
			handlers.event([
				{ type: "despawn_all" },
				{ type: "spawn", func: "marker", args: [false, 270, 100, 0, 3000, true, null] },
				{ type: "spawn", func: "semicircle", args: [-45, 225, 553, 0, 0, 20, 180, 0, 3000] },
				{ type: "spawn", func: "semicircle", args: [-45, 225, 553, 0, 0, 12, 280, 0, 3000] },
				{ type: "spawn", func: "semicircle", args: [-45, 225, 553, 0, 0, 10, 380, 0, 3000] },
				{ type: "spawn", func: "semicircle", args: [-45, 225, 553, 0, 0,  8, 480, 0, 3000] }
			]);

			first_skillid = 0;
		} else if (skillid === 116 || skillid === 119) {
			first_skillid = 0;
		}
	}

	dispatch.hook("S_NPC_LOCATION", "*", e => {
		if (!secondboss_show_book_notify || e.gameId !== secondboss_game_id_for_book) return;

		const books = [
			e.loc.angleTo(secondboss_red_book_loc), // Red book
			e.loc.angleTo(secondboss_blue_book_loc), // Blue book
			e.loc.angleTo(secondboss_green_book_loc) // Green book
		];

		const book = books.indexOf(closest(books, e.w));

		switch (book) {
			case 0: // Red -> Blue
				handlers.alias({ id: "ab-983-2000-98300222" });
				break;
			case 1: // Blue -> Green
				handlers.alias({ id: "ab-983-2000-98300223" });
				break;
			case 2: // Green -> Red
				handlers.alias({ id: "ab-983-2000-98300224" });
				break;
		}

		secondboss_show_book_notify = false;
		secondboss_game_id_for_book = null;
	});

	return {
		// 1 BOSS
		"nd-983-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-983-1008": [{ type: "text", sub_type: "message", message: "Take Balls", message_ES: "Tomar Bolas", message_PT: "Pegar Bolas" }],
		"s-983-1000-101-0": [
			{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun", check_func: () => firstboss_prepare_stun },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, null, 470, 0, 3000], check_func: () => firstboss_prepare_stun }
		],
		"s-983-1000-102-0": [
			{ type: "func", func: () => firstboss_prepare_stun = true },
			{ type: "func", func: () => firstboss_prepare_stun = false, delay: 2700 }
		],
		"s-983-1000-104-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" }],
		"s-983-1000-109-0": [{ type: "text", sub_type: "message", message: "Push Back", message_ES: "Empujar Atrás", message_PT: "Empurrar Atrás" }],
		"s-983-1000-119-0": [
			{ type: "text", sub_type: "message", message: "Heavy Attack", message_ES: "Ataque Fuerte", message_PT: "Ataque Forte" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 250 },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, null, 350, 0, 3000] }
		],
		"s-983-1000-127-0": [{ type: "text", sub_type: "message", message: "Many Attack", message_ES: "Muichos Golpes", message_PT: "Muitos Golpes" }],
		"s-983-1000-128-0": [{ type: "text", sub_type: "message", message: "Lazer", message_ES: "Laser", message_PT: "Laser" }],
		"s-983-1000-130-0": "s-983-1000-128-0",
		"s-983-1000-301-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1900 }],
		"s-983-1000-304-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Jalar", message_PT: "Puxar" }],
		"s-983-1000-305-0": [{ type: "text", sub_type: "message", message: "Triple Laser (Together)", message_ES: "Laser Triple (Juntar)", message_PT: "Laser Triplo (Juntar)" }],

		// 2 BOSS
		"nd-983-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-983-2001": [ // Red book
			{ type: "func", func: ent => secondboss_red_book_loc = ent.loc },
			{ type: "func", func: () => secondboss_show_book_notify = true }
		],
		"ns-983-2002": [ // Blue book
			{ type: "func", func: ent => secondboss_blue_book_loc = ent.loc },
			{ type: "func", func: () => secondboss_show_book_notify = true }
		],
		"ns-983-2003": [ // Green book
			{ type: "func", func: ent => secondboss_green_book_loc = ent.loc },
			{ type: "func", func: () => secondboss_show_book_notify = true }
		],
		"ab-983-2000-98300222": [ // Red
			{ type: "event", check_func: () => secondboss_show_book_notify, args: [
				{ type: "text", sub_type: "message", message: "Take Blue Book", message_ES: "Toma el Libro Azul", message_PT: "Pegue o Livro Azul" },
				{ type: "text", sub_type: "notification", message: "Take [c=#05a0fa]Blue[/c] Book", message_ES: "Toma el Livro [c=#05a0fa]Azul[/c]", message_PT: "Pegue o Livro [c=#05a0fa]Azul[/c]", speech: false },
				{ type: "func", func: () => secondboss_show_book_notify = false }
			] }
		],
		"ab-983-2000-98300223": [ // Blue
			{ type: "event", check_func: () => secondboss_show_book_notify, args: [
				{ type: "text", sub_type: "message", message: "Take Green Book", message_ES: "Toma el Libro Verde", message_PT: "Pegue o Livro Verde" },
				{ type: "text", sub_type: "notification", message: "Take [c=#00a303]Green[/c] Book", message_ES: "Toma el Livro [c=#00a303]Verde[/c]", message_PT: "Pegue o Livro [c=#00a303]Verde[/c]", speech: false },
				{ type: "func", func: () => secondboss_show_book_notify = false }
			] }
		],
		"ab-983-2000-98300224": [ // Green
			{ type: "event", check_func: () => secondboss_show_book_notify, args: [
				{ type: "text", sub_type: "message", message: "Take Red Book", message_ES: "Toma el Libro Rojo", message_PT: "Pegue o Livro Vermelho" },
				{ type: "text", sub_type: "notification", message: "Take [c=#e82331]Red[/c] Book", message_ES: "Toma el Libro [c=#e82331]Rojo[/c]", message_PT: "Pegue o Livro [c=#e82331]Vermelho[/c]", speech: false },
				{ type: "func", func: () => secondboss_show_book_notify = false }
			] }
		],
		"s-983-2000-105-0": [{ type: "text", sub_type: "message", message: "Whip (Dodge)", message_ES: "Látigo (Iframe)", message_PT: "Chicote (Iframe)" }],
		"s-983-2000-110-0": [{ type: "text", sub_type: "message", message: "Front Attack (Dodge)", message_ES: "Frente Ataque (Esquiva)", message_PT: "Frente Ataque (Esquiva)" }],
		"s-983-2000-112-0": [{ type: "text", sub_type: "message", message: "Push Back (Right)", message_ES: "Empujar Atrás (Derecha)", message_PT: "Empurrar Atrás (Direita)" }],
		"s-983-2000-114-0": [{ type: "text", sub_type: "message", message: "Ground Hit", message_ES: "Golpe de tierra", message_PT: "Golpe de Terra" }],
		"s-983-2000-115-0": [{ type: "text", sub_type: "message", message: "Push Back (Left)", message_ES: "Empujar Atrás (Izquierda)", message_PT: "Empurrar Atrás (Direita)" }],
		"s-983-2000-119-0": [{ type: "text", sub_type: "message", message: "Jump (Dodge)", message_ES: "Salto (Iframe)", message_PT: "Salto (Iframe)" }],
		"s-983-2000-120-0": [{ type: "text", sub_type: "message", message: "Front Attack | Push Back", message_ES: "Frente Ataque | Empujar Atrás", message_PT: "Frente Ataque | Empurrar Atrás" }],
		"s-983-2000-206-0": [{ type: "func", func: ent => secondboss_game_id_for_book = ent.gameId }], // prepare to take the book
		"s-983-2000-316-0": [{ type: "text", sub_type: "message", message: "Fire AOE", message_ES: "Fuero AOE", message_PT: "Fogo АОЕ" }],
		"s-983-2000-306-0": [
			{ type: "text", sub_type: "message", message: "Dodge | Out", message_ES: "Esquiva | Salir", message_PT: "Esquiva | Sair" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, -50, null, 375, 0, 5000] }
		],
		"s-983-2000-317-0": [{ type: "text", sub_type: "message", message: "Water AOE", message_ES: "Agua AOE", message_PT: "Água АОЕ" }],
		"s-983-2000-318-0": [
			{ type: "text", sub_type: "message", message: "Dodge (Get out)", message_ES: "Esquiva | Salir", message_PT: "Esquiva | Sair" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, -50, null, 700, 0, 7000] }
		],
		"s-983-2000-324-0": [{ type: "text", sub_type: "message", message: "Dodge (Pull)", message_ES: "Iframe (Jalar)", message_PT: "Iframe (Puxar)", delay: 2400 }],
		//
		"s-983-1011-308-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, 0, null, 305, 0, 1500] }],
		"s-983-1012-308-0": "s-983-1011-308-0",
		"s-983-1013-308-0": "s-983-1011-308-0",
		"s-983-1014-308-0": "s-983-1011-308-0",
		"s-983-1015-308-0": "s-983-1011-308-0",

		// 3 BOSS
		"nd-983-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-983-3000-106-0": [{ type: "text", sub_type: "message", message: "Push (Tank)", message_ES: "Empujar (Tank)", message_PT: "Empurrar (Tank)" }],
		"s-983-3000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_ES: "Lanzamiento Frontal (Stun)", message_PT: "Lançar Frente (Stun)" }],
		"s-983-3000-113-0": [{ type: "text", sub_type: "message", message: "Push Back", message_ES: "Empujar Atrás", message_PT: "Empurrar Atrás" }],
		"s-983-3000-114-0": [{ type: "text", sub_type: "message", message: "Bait (Target)", message_ES: "Bait (Objetivo)", message_PT: "Bait (Alvo)" }],
		"s-983-3000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzamiento Atrás (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 205, 410, null, 220, 0, 2000] },
			{ type: "func", func: thirdboss_mech, args: [116] }
		],
		"s-983-3000-119-0": [ // 119 - 120 -
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzamiento Atrás (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 155, 410, null, 220, 0, 2000] },
			{ type: "func", func: thirdboss_mech, args: [119] }
		],
		"s-983-3000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_ES: "Lanzamiento Atrás (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-983-3000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-983-3000-124-0": [{ type: "text", sub_type: "message", message: "AoE (Dodge)", message_ES: "AoE (Iframe)", message_PT: "АоЕ (Iframe)" }],
		"s-983-3000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun | Back Hit", message_ES: "Frente Stun | Atrás Ataque", message_PT: "Frente Stun | Atrás Ataque" },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-983-3000-127-0": [
			{ type: "spawn", func: "circle", args: [true, 553, 180, 350, null, 380, 0, 2000] }
		],
		"s-983-3000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_ES: "Salto Mortal | Golpe Atrás", message_PT: "Salto Mortal | Golpe Atrás" }],
		"s-983-3000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_ES: "Golpe Atrás (Sangrar)", message_PT: "Golpe Atrás (Sangrar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-983-3000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_ES: "Frontal Combo", message_PT: "Frontal Combo" }],
		"s-983-3000-301-0": [
			{ type: "text", sub_type: "message", message: "Thorns (Target)", message_ES: "Espinas Objetivo x5", message_PT: "Espinhos Alvo х5" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1200 }
		],
		"s-983-3000-303-0": [// 303 - 304 - 305 - 308 - 305
			{ type: "text", sub_type: "message", message: "Right Safe", message_ES: "Derecha Seguro", message_PT: "Direita Seguro" },
			{ type: "spawn", func: "marker", args: [false, 120, 250, 0, 3000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 250, 0, 3000, true, null] }
		],
		"s-983-3000-305-0": [
			{ type: "spawn", func: "marker", args: [false, 120, 250, 0, 1500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 250, 0, 1500, true, null] }
		],
		"s-983-3000-306-0": [ // 306 - 307 - 308 - 305 - 308
			{ type: "text", sub_type: "message", message: "Left Safe", message_ES: "Izquierda Seguro", message_PT: "Esquerda Seguro" },
			{ type: "spawn", func: "marker", args: [false, 240, 250, 0, 3000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 250, 0, 3000, true, null] }
		],
		"s-983-3000-308-0": [
			{ type: "spawn", func: "marker", args: [false, 240, 250, 0, 1500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 250, 0, 1500, true, null] }
		],
		"s-983-3000-309-0": [
			{ type: "text", sub_type: "message", message: "Debuff!!!", message_ES: "Debuff", message_PT: "Debuff!!!" },
			{ type: "text", sub_type: "message", message: "Lasers", message_ES: "Lasers", message_PT: "Lasers", delay: 3000 }
		],
		"s-983-3000-315-0": [
			{ type: "text", sub_type: "message", message: "Dodge | Out", message_ES: "Esquiva | Salir", message_PT: "Esquiva | Sair" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 0, null, 400, 0, 6000] }
		],
		"s-983-3003-411-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 3000] }]
	};
};