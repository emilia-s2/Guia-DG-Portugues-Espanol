// Abyssal Prison (Arborea Reborn)
//
// made by HSDN / Yuyuko / Owyn / Bogus

// Arborea changes by Bogus
// feel free to improve :)

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let thirdboss_colour_to_use = null;
	let thirdboss_counter1 = 0;
	let thirdboss_counter2 = 0;
	let thirdboss_timer1 = null;
	let thirdboss_timer2 = null;
	let boss_enraged = false;
	let boss_below_thirty_five = false;
	let boss_ent = null;

	function right_safe_handler_below(ent) { //s-2814-1000-1111-0//s-2814-1000-2111-0
		// Only below 35%
		if (!boss_below_thirty_five) return;

		if (boss_enraged) {
			// ENRAGED OUT-IN
			handlers.event([
				{ type: "text", sub_type: "message", message: "Left Swipe - Right Swipe", message_ES: "Golpe IZQUIERDO - Golpe DERECHO", message_PT: "Golpe ESQUERDO - Golpe DIREITO" },
				{ type: "text", sub_type: "message", message: "IN-OUT", message_ES: "ENTRAR > SALIR", message_PT: "ENTRAR > SAIR" },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 2500] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
				{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }

			]);
		} else {
			// NOT ENRAGED IN OUT
			handlers.event([
				{ type: "text", sub_type: "message", message: "Left Swipe - Right Swipe", message_ES: "Golpe IZQUIERDO - Golpe DERECHO", message_PT: "Golpe ESQUERDO - Golpe DIREITO" },
				{ type: "text", sub_type: "message", message: "IN-OUT", message_ES: "ENTRAR > SALIR", message_PT: "ENTRAR > SAIR" },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 2500] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
				{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }

			]);

		}
	}

	function right_safe_handler_above(ent) { //s-2814-1000-1111-0//s-2814-1000-2111-0
		// BELOW 35% → ignore this mechanic
		if (boss_below_thirty_five) return;

		// Normal behavior (original content)
		handlers.event([
			{ type: "text", sub_type: "message", message: "Right safe", message_ES: "DERECHA Seguro", message_PT: "DIREITA Seguro" },
			{ type: "text", sub_type: "message", message: "OUT-IN", message_ES: "SALIR > ENTRAR", message_PT: "SAIR > ENTRAR", delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }

		]);
	}

	function left_safe_handler_above(ent) { //s-2814-1000-1109-0////s-2814-1000-2109-0
		// BELOW 35% → ignore this mechanic
		if (boss_below_thirty_five) return;

		// Normal behavior (original content)
		handlers.event([
			{ type: "text", sub_type: "message", message: "Left safe", message_ES: "IZQUIERDA Seguro", message_PT: "ESQUERDA Seguro" },
			{ type: "text", sub_type: "message", message: "IN-OUT", message_ES: "ENTRAR > SALIR", message_PT: "ENTRAR > SAIR", delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
		]);
	}

	function left_safe_handler_below(ent) { //s-2814-1000-1109-0////s-2814-1000-2109-0
		// Only below 35%
		if (!boss_below_thirty_five) return;

		if (boss_enraged) {
			// ENRAGED OUT-IN
			handlers.event([
				{ type: "text", sub_type: "message", message: "Right Swipe- Left Swipe", message_ES: "Golpe DERECHO - Golpe IZQUIERDO", message_PT: "Golpe DIREITO - Golpe ESQUERDO" },
				{ type: "text", sub_type: "message", message: "OUT-IN", message_ES: "SALIR > ENTRAR", message_PT: "SAIR > ENTRAR" },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 2500] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
				{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
			]);
		} else {
			// NOT ENRAGED IN OUT
			handlers.event([
				{ type: "text", sub_type: "message", message: "Right Swipe- Left Swipe", message_ES: "Golpe DERECHO - Golpe IZQUIERDO", message_PT: "Golpe DIREITO - Golpe ESQUERDO" },
				{ type: "text", sub_type: "message", message: "OUT-IN", message_ES: "SALIR > ENTRAR", message_PT: "SAIR > ENTRAR" },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 2500] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
				{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
			]);
		}
	}

	function thirdboss_backattack_event1() {
		dispatch.clearTimeout(thirdboss_timer1);
		thirdboss_counter1++;

		if (thirdboss_counter1 >= 2) {
			handlers.text({ sub_type: "message", message: "Back Stun", message_ES: "Stun Atrás", message_PT: "Stun Atrás" });
		}

		thirdboss_timer1 = dispatch.setTimeout(() => thirdboss_counter1 = 0, 3000);
	}

	function thirdboss_backattack_event2() {
		dispatch.clearTimeout(thirdboss_timer2);
		thirdboss_counter2++;

		if (thirdboss_counter2 >= 2) {
			handlers.text({ sub_type: "message", message: "Back Stun", message_ES: "Stun Atrás", message_PT: "Stun Atrás" });
		}

		thirdboss_timer2 = dispatch.setTimeout(() => thirdboss_counter2 = 0, 3000);
	}

	function thirdboss_cage_event(clockwise, ent) {
		const colour_order = clockwise ? ["red", "yellow", "blue"] : ["blue", "yellow", "red"];
		const colour_offsets = { "red": 0, "yellow": 120, "blue": 240 };

		const colour_messages = {
			"red": { message: "Red", message_ES: "Rojo", message_PT: "Vermelho" },
			"yellow": { message: "Yellow", message_ES: "Amarillo", message_PT: "Amarelo" },
			"blue": { message: "Blue", message_ES: "Azul", message_PT: "Azul" }
		};

		if (thirdboss_colour_to_use) {
			handlers.text({
				sub_type: "message",
				message: colour_messages[thirdboss_colour_to_use].message,
				message_ES: colour_messages[thirdboss_colour_to_use].message_ES, message_PT: colour_messages[thirdboss_colour_to_use].message_PT
			});
		}

		for (let i = 0; i < 3; i++) {
			const current_colour = colour_order[(colour_order.indexOf(thirdboss_colour_to_use) + i) % 3];

			handlers.spawn({
				func: "marker",
				args: [false, colour_offsets[current_colour], 150, i * 2600, (i + 1) * 3000, true, null]
			}, ent);
		}
	}

	function spawn_cage_lazers() {
		if (!boss_ent) return;

		if (boss_enraged) {
			handlers.event([
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41723, y: -98299, z: 217, w: 1.69 }, tag: "light" },
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41347, y: -97969, z: 217, w: 1.69 }, tag: "light" },
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41349, y: -98667, z: 217, w: 1.69 }, tag: "light" },
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 40980, y: -98303, z: 217, w: 1.69 }, tag: "light" }
			], boss_ent);
		} else {
			handlers.event([
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41628, y: -98582, z: 217, w: 1.69 }, tag: "light" },
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41626, y: -98014, z: 217, w: 1.69 }, tag: "light" },
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41061, y: -98013, z: 217, w: 1.69 }, tag: "light" },
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41049, y: -98590, z: 217, w: 1.69 }, tag: "light" }
			], boss_ent);
		}
	}

	function spawn_enrage_dependent_throne() {
		if (!boss_ent) return;

		if (boss_enraged) {
			// Enraged Right Side
			handlers.event([
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41082, y: -98303, z: 217, w: 2 }, tag: "light" },
				//{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 350, 200, 5000] },
				{ type: "text", sub_type: "message", message: "Right Side", message_ES: "Lado DERECHO", message_PT: "Lado DIREITO" }
			], boss_ent);
		} else {
			// Not enraged  Left Side
			handlers.event([
				//{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 350, 200, 5000] },
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41602, y: -98309, z: 217, w: 1.69 }, tag: "light" },
				{ type: "text", sub_type: "message", message: "Left Side", message_ES: "Lado IZQUIERDO", message_PT: "Lado ESQUERDO" }
			], boss_ent);
		}
	}

	function spawn_enrage_dependent_entrance() {
		if (!boss_ent) return;

		if (boss_enraged) {
			// Enraged Right Side
			handlers.event([
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41602, y: -98309, z: 217, w: 1.69 }, tag: "light" },
				//{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 350, 200, 5000] },
				{ type: "text", sub_type: "message", message: "Right Side", message_ES: "Lado DERECHO", message_PT: "Lado DIREITO" }
			], boss_ent);
		} else {
			// Not enraged  Left Side
			handlers.event([
				//{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 350, 200, 5000] },
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41082, y: -98303, z: 217, w: 2 }, tag: "light" },
				{ type: "text", sub_type: "message", message: "Left Side", message_ES: "Lado IZQUIERDO", message_PT: "Lado ESQUERDO" }
			], boss_ent);
		}
	}

	return {
		"ns-2814-1000": [
			{ type: "func", func: ent => boss_ent = ent },
			{ type: "func", func: () => boss_enraged = false },
			{ type: "func", func: () => boss_below_thirty_five = false }

		],
		"nd-2814-1000": [
			{ type: "func", func: () => boss_ent = null },
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"rb-2814-1000": [{ type: "func", func: () => boss_enraged = true }],
		"re-2814-1000": [{ type: "func", func: () => boss_enraged = false }],
		// debuff Glaze am-2814-1000-428141003 ???

		"s-2814-1000-3101-0": [{ type: "text", sub_type: "message", message: "Boss Swap RED", message_ES: "Boss Cambia ROJO", message_PT: "Boss Troca VERMELHO" }],
		"s-2814-1000-3102-0": [{ type: "text", sub_type: "message", message: "Boss Swap BLUE", message_ES: "Boss Cambia AZUL", message_PT: "Boss Troca AZUL" }],
		"s-2814-1000-3103-0": [{ type: "text", sub_type: "message", message: "[DEBUFF] Closest player", message_ES: "[Debuff] Jugador Más Cercano", message_PT: "[Debuff] Jogador Mais Próximo" }],
		"s-2814-1000-3104-0": [{ type: "text", sub_type: "message", message: "[DEBUFF] Furthest player", message_ES: "[Debuff] Jugador Más Lejano", message_PT: "[Debuff] Jogador Mais Longe" }],
		"s-2814-1000-3105-0": [{ type: "text", sub_type: "message", message: "Slow Jump", message_ES: "Salto Lento", message_PT: "Salto Lento" }],
		"s-2814-1000-3110-0": [{ type: "text", sub_type: "message", message: "Orbs Mechanic-Inverted-Start 1", message_ES: "Mecánica de Orbes - Invertido Inicio 1", message_PT: "Mecânica de Orbes - Invertido Início 1" }],
		"s-2814-1000-3111-0": [{ type: "text", sub_type: "message", message: "Orbs Mechanic-Inverted-Start 2", message_ES: "Mecánica de Orbes - Invertido Inicio 2", message_PT: "Mecânica de Orbes - Invertido Início 2" }],
		"s-2814-1000-3112-0": [{ type: "text", sub_type: "message", message: "Orbs Mechanic-Inverted-Start 3", message_ES: "Mecánica de Orbes - Invertido Inicio 3", message_PT: "Mecânica de Orbes - Invertido Início 3" }],
		"s-2814-1000-1301-0": [{ type: "text", sub_type: "message", message: "Orbs Mechanic-Normal-Start 1", message_ES: "Mecánica de Orbes - Normal Inicio 1", message_PT: "Mecânica de Orbes - Normal Início 1" }],
		"s-2814-1000-1302-0": [{ type: "text", sub_type: "message", message: "Orbs Mechanic-Normal-Start 2", message_ES: "Mecánica de Orbes - Normal Inicio 2", message_PT: "Mecânica de Orbes - Normal Início 2" }],
		"s-2814-1000-1303-0": [{ type: "text", sub_type: "message", message: "Orbs Mechanic-Normal-Start 3", message_ES: "Mecánica de Orbes - Normal Inicio 3", message_PT: "Mecânica de Orbes - Normal Início 3" }],
		//"s-2814-1000-1304-0": [{ type: "text", sub_type: "message", message: "Orbs Mechanic-Circle Spawn and Attack", message_ES: "Mecánica de Orbes - Círculo y Ataque", message_PT: "Mecânica de Orbes - Círculo e Ataque" }],
		"s-2814-1000-1201-0": [{ type: "text", sub_type: "message", message: "INCOMING SWIPE-DONUTS MECHANIC", message_ES: "Mecánica Golpe-Donuts Entrante", message_PT: "Mecânica Golpe-Donuts Chegando" }],

		// FOR 35% BOSS
		"h-2814-1000-35": [{ type: "func", func: () => boss_below_thirty_five = true }],

		//"s-2814-1000-3113-0": [
		//	{ type: "text", sub_type: "message", message: "Right Swipe", message_ES: "Deslizar Derecha", message_PT: "Deslizar Direita" }
		//],
		//"s-2814-1000-3114-0": [
		//	{ type: "text", sub_type: "message", message: "Left Swipe", message_ES: "Deslizar Izquierda", message_PT: "Deslizar Esquerda" }
		//],
		"s-2814-1000-3115-0": [{ type: "text", sub_type: "message", message: "Final Cage", message_ES: "Jaula Final", message_PT: "Jaula Final" }],
		//"s-2814-1000-3116-0": [{ type: "text", sub_type: "message", message: "Escape", message_ES: "Escapar", message_PT: "Fugir" }],
		//"s-2814-1000-3117-0": [{ type: "text", sub_type: "message", message: "Await 5s", message_ES: "Espere 5s", message_PT: "Aguarde 5s" }],
		//"s-2814-1000-3118-0": [{ type: "text", sub_type: "message", message: "Await 10s", message_ES: "Espere 10s", message_PT: "Aguarde 10s" }],
		//"s-2814-1000-5000-0": [{ type: "text", sub_type: "message", message: "[Antaroth]-DeathSkill", message_ES: "[Antaroth] Ataque Mortal", message_PT: "[Antaroth] Ataque Mortal" }],
		//"s-2814-1000-5001-0": [{ type: "text", sub_type: "message", message: "[Antaroth]-[Corrupted]-Shield Phase", message_ES: "[Antaroth] Fase de Escudo", message_PT: "[Antaroth] Fase de Escudo" }],
		//"s-2814-1000-5002-0": [{ type: "text", sub_type: "message", message: "[Arman]-Frenzy-Stun and Hide Self", message_ES: "[Arman] Furia - Stun y Esconder", message_PT: "[Arman] Fúria - Stun e Esconder" }],

		// FOR 15% BOSS
		"dm-0-0-9206011": [
			{ type: "func", func: spawn_cage_lazers },
			{ type: "text", sub_type: "message", message: "CAGE LAZERS", message_ES: "Láseres de Jaula", message_PT: "Lasers da Jaula" }
		],

		"s-2814-1000-1104-0": [{ type: "func", func: thirdboss_backattack_event1 }],
		"s-2814-1000-1102-0": [{ type: "func", func: thirdboss_backattack_event2 }],

		"s-2814-1000-1105-0": [{ type: "text", sub_type: "message", message: "Target Cage", message_ES: "Jaula al Objetivo", message_PT: "Jaula no Alvo" }],
		"s-2814-1000-1119-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 0, 2000] }],
		"s-2814-1000-1107-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_ES: "Salto Aleatorio", message_PT: "Salto Aleatório" }],
		"s-2814-1000-1107-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 85, 12, 250, 0, 2000] }],

		"s-2814-1000-1109-0": [ //left safe
			{ type: "func", func: left_safe_handler_above },
			{ type: "func", func: left_safe_handler_below }
		],
		"s-2814-1000-1111-0": [ //right safe
			{ type: "func", func: right_safe_handler_above },
			{ type: "func", func: right_safe_handler_below }
		],

		"s-2814-1000-1113-0": [{ type: "text", sub_type: "message", message: "Front | Back Stun", message_ES: "Stun Frente | Atrás", message_PT: "Stun Frente | Atrás" }],
		"s-2814-1000-1115-0": [{ type: "text", sub_type: "message", message: "Spin Attack", message_ES: "Ataque Giratorio", message_PT: "Ataque Giratório" }],
		"s-2814-1000-1120-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Slow)", message_ES: "Rayo de Energía (Lento)", message_PT: "Raio de Energia (Lento)" }],
		"s-2814-1000-1204-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Fast)", message_ES: "Rayo de Energía (Rápido)", message_PT: "Raio de Energia (Rápido)" }],
		// "s-2814-1000-1202-0": [{ type: "text", sub_type: "message", message: "Spin or Front | Back Stun", message_ES: "Giro o Stun Frente | Atrás", message_PT: "Giro ou Stun Frente | Atrás" }],
		"s-2814-1000-1206-0": [{ type: "text", sub_type: "message", message: "Orbs", message_ES: "Orbes", message_PT: "Orbes" }],
		"s-2814-1000-1309-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AOE", message_PT: "AOE" }],
		"s-2814-1000-1310-0": [{ type: "text", sub_type: "message", message: "Puddles", message_ES: "Charcos", message_PT: "Poças" }],
		"s-2814-1000-1311-0": "s-2814-1000-1310-0",
		"s-2814-1000-1312-0": "s-2814-1000-1310-0",
		"s-2814-1000-1313-0": "s-2814-1000-1310-0",
		"s-2814-1000-1314-0": "s-2814-1000-1310-0",
		"s-2814-1000-1315-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empuje", message_PT: "Empurrão" }],
		"s-2814-1000-1317-0": [{ type: "func", func: thirdboss_cage_event, args: [false], delay: 1000 }],
		"s-2814-1000-1318-0": [{ type: "func", func: thirdboss_cage_event, args: [true], delay: 1000 }],
		"s-2814-1000-1400-0": [{ type: "text", sub_type: "message", message: "Clones: Beam", message_ES: "Clones: Rayo", message_PT: "Clones: Raio" }],
		"s-2814-1000-1401-0": [{ type: "text", sub_type: "message", message: "Clones: Spin", message_ES: "Clones: Giro", message_PT: "Clones: Giro" }],
		"s-2814-1000-2104-0": "s-2814-1000-1104-0",
		"s-2814-1000-2105-0": "s-2814-1000-1105-0",
		"s-2814-1000-2119-0": "s-2814-1000-1119-0",
		"s-2814-1000-2107-0": "s-2814-1000-1107-0",
		"s-2814-1000-2107-1": "s-2814-1000-1107-1",
		"s-2814-1000-2109-0": "s-2814-1000-1109-0",
		"s-2814-1000-2111-0": "s-2814-1000-1111-0",
		"s-2814-1000-2113-0": "s-2814-1000-1113-0",
		"s-2814-1000-2115-0": "s-2814-1000-1115-0",
		"s-2814-1000-2120-0": "s-2814-1000-1120-0",
		"s-2814-1000-2204-0": "s-2814-1000-1204-0",
		"s-2814-1000-2202-0": "s-2814-1000-1202-0",
		"s-2814-1000-2206-0": "s-2814-1000-1206-0",

		// ENTRANCE
		"dm-0-0-9206007": [
			{ type: "func", func: spawn_enrage_dependent_entrance },
			{ type: "text", sub_type: "message", message: "Entrance clones", message_ES: "Clones de Entrada", message_PT: "Clones da Entrada" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 2000 },
			{ type: "text", sub_type: "message", message: "1", message_ES: "1", message_PT: "1", delay: 1500 },
			{ type: "text", sub_type: "message", message: "2", message_ES: "2", message_PT: "2", delay: 1000 }
		],
		// THRONE
		"dm-0-0-9206006": [
			{ type: "func", func: spawn_enrage_dependent_throne },
			{ type: "text", sub_type: "message", message: "Throne clones", message_ES: "Clones del Trono", message_PT: "Clones do Trono" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 2000 },
			{ type: "text", sub_type: "message", message: "1", message_ES: "1", message_PT: "1", delay: 1500 },
			{ type: "text", sub_type: "message", message: "2", message_ES: "2", message_PT: "2", delay: 1000 }

		],
		"s-2814-1000-1410-0": [{ type: "text", sub_type: "message", message: "Cage", message_ES: "Jaula", message_PT: "Jaula" }],
		"ae-0-0-9203037": [{ type: "func", func: () => thirdboss_colour_to_use = "red" }],
		"ae-0-0-9203038": [{ type: "func", func: () => thirdboss_colour_to_use = "yellow" }],
		"ae-0-0-9203039": [{ type: "func", func: () => thirdboss_colour_to_use = "blue" }]
	};
};