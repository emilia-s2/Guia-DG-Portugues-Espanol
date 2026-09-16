// Kelsaik Hall (Arborea Reborn)
//
// made by michengs / HSDN / ZC / Bogus

// Arborea changes by Bogus
// feel free to improve :)

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	const { player } = dispatch.require.library;
	const { MARKER_ITEM } = module.parent.exports.spawn;

	let debuff = null;
	let timer1 = null;
	let timer2 = null;
	let timer3 = null;
	let boss_ent = null;
	let boss_offset = 0;
	let qbacting = null;
	let blue = false;
	let red = false;
	let debuff_tracker_started = false;

	const mech_messages = {
		0: { message: "IN", message_ES: "ENTRAR", message_PT: "ENTRAR" },
		1: { message: "OUT", message_ES: "SALIR", message_PT: "SAIR" },
		2: { message: "Left", message_ES: "IZQUIERDA", message_PT: "ESQUERDA" },
		3: { message: "Right", message_ES: "DERECHA", message_PT: "DIREITA" }
	};

	const qbacting_messages = {
		0: { message: "different", message_ES: "Diferente", message_PT: "Diferente" },
		1: { message: "same", message_ES: "Igual", message_PT: "Igual" }
	};

	const debuff_messages = {
		0: { message: "Ready to get Fire debuff", message_ES: "Preparar para Debuff de Fuego", message_PT: "Preparar para Debuff de Fogo" },
		1: { message: "Ready to get Ice debuff", message_ES: "Preparar para Debuff de Hielo", message_PT: "Preparar para Debuff de Gelo" }
	};

	// NULL % 2 = 0
	//    1 % 2 = 1
	//    0 % 2 = 0
	//    2 % 2 = 0

	function spawn_marker(out) {
		if (!boss_ent) return;

		let distance = 220;
		let caption = "IN";

		if (out) {
			distance = 620;
			caption = "OUT";
		}

		handlers.event([
			{ type: "spawn", func: "marker", args: [false, 45 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
			{ type: "spawn", func: "marker", args: [false, 135 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
			{ type: "spawn", func: "marker", args: [false, 225 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
			{ type: "spawn", func: "marker", args: [false, 315 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] }
		], boss_ent);
	}

	function debuff_added(id) {
		debuff_removed();
		debuff = id; // debuff event id

		timer1 = dispatch.setTimeout(() => {
			if (debuff != null) {
				dispatch.setTimeout(() => {
					handlers.text({
						sub_type: "alert",
						message: (`${debuff_messages[debuff % 2].message}`),
						message_ES: (`${debuff_messages[debuff % 2].message_ES}`), message_PT: (`${debuff_messages[debuff % 2].message_PT}`)
					});
				}, 2000);
				handlers.text({
					sub_type: "message",
					// message: "Warning! Debuff 15 seconds", message_ES: "¡Aviso! Debuff 15 segundos", message_PT: "Aviso! Debuff 15 segundos",
					message_ES: "¡Aviso! Debuff 15 segundos", message_PT: "Aviso! Debuff 15 segundos"
				});
			}
		}, dispatch._mod.majorPatchVersion >= 99 ? 40000 : 55000);

		timer2 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					// message: "Warning! Debuff 10 seconds", message_ES: "¡Aviso! Debuff 10 segundos", message_PT: "Aviso! Debuff 10 segundos",
					message_ES: "¡Aviso! Debuff 10 segundos", message_PT: "Aviso! Debuff 10 segundos"
				});
			}
		}, dispatch._mod.majorPatchVersion >= 99 ? 45000 : 60000);

		timer3 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					// message: "Warning! Debuff 5 seconds", message_ES: "¡Aviso! Debuff 5 segundos", message_PT: "Aviso! Debuff 5 segundos",
					message_ES: "¡Aviso! Debuff 5 segundos", message_PT: "Aviso! Debuff 5 segundos"
				});
			}
		}, dispatch._mod.majorPatchVersion >= 99 ? 50000 : 65000);

		if (blue) {
			handlers.text({
				sub_type: "message",
				message: (`${mech_messages[(qbacting + debuff + 1) % 2].message}`),
				message_ES: (`${mech_messages[(qbacting + debuff + 1) % 2].message_ES}`), message_PT: (`${mech_messages[(qbacting + debuff + 1) % 2].message_PT}`)
			});

			spawn_marker((qbacting + debuff + 1) % 2);
		} else if (red) {
			handlers.text({
				sub_type: "message",
				message: (`${mech_messages[(qbacting + debuff) % 2].message}`),
				message_ES: (`${mech_messages[(qbacting + debuff) % 2].message_ES}`), message_PT: (`${mech_messages[(qbacting + debuff) % 2].message_PT}`)
			});

			spawn_marker((qbacting + debuff) % 2);
		}
	}

	function debuff_removed() {
		debuff = null;
		dispatch.clearTimeout(timer1);
		dispatch.clearTimeout(timer2);
		dispatch.clearTimeout(timer3);
	}

	function skilld_event(skillid, ent) {
		const abnormality_change = (added, event) => {
			// Fire/Ice debuff
			if (player.isMe(event.target.toString()) && [30260001, 30260002, 31260023, 31260024].includes(event.id)) {
				if (added) {
					debuff_added(event.id);
				} else {
					debuff_removed();
				}
			}

			// Argon Priest Essence buff
			if (player.isMe(event.target.toString()) && [30261701, 31261701].includes(event.id)) {
				if (added && boss_ent) {
					handlers.spawn({ // spawn teleport mark
						sub_type: "item",
						id: MARKER_ITEM,
						sub_delay: 50000,
						pos: {
							x: 53192,
							y: 100761,
							z: 14233
						}
					}, boss_ent);
				}
			}
		};

		// In-Out quest balloons (qbacting => ярость(not enraged) 0, ужас 1)
		if ([3026004, 3126004, 3026005, 3126005].includes(skillid)) {
			qbacting = skillid % 2;
		}

		// Fire/Ice debuff (debuff % 2 => синий 0, красный 1)
		if ([30260001, 31260023, 30260002, 31260024].includes(skillid) && !debuff_tracker_started) {
			debuff_added(skillid);
		}

		// In-Out identification
		if ([212, 213, 214, 215].includes(skillid)) {
			boss_ent = ent;

			handlers.event([
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 460, 200, 11000] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 4, 860, 200, 11000] }
			]);
		}

		if ([212, 214].includes(skillid)) { // Fire claw (141,  142)
			boss_offset = 10;

			handlers.event([
				{ type: "spawn", func: "vector", args: [553, 0, 0, 190, 840, 200, 11000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 10, 840, 200, 11000] }
			]);
		}

		if ([213, 215].includes(skillid)) { // Ice claw (143,  144)
			boss_offset = -10;

			handlers.event([
				{ type: "spawn", func: "vector", args: [553, 0, 0, 170, 840, 200, 11000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 350, 840, 200, 11000] }
			]);
		}

		if ([213, 214].includes(skillid)) { // Ice inside
			dispatch.setTimeout(() => {
				if (debuff != null) {
					handlers.text({
						sub_type: "message",
						message: (`Ice inside (${qbacting_messages[qbacting].message}) | ${mech_messages[debuff % 2 + 2].message} | ${mech_messages[(qbacting + debuff + 1) % 2].message}`),
						message_ES: (`Hielo adentro (${qbacting_messages[qbacting].message_ES}) | ${mech_messages[debuff % 2 + 2].message_ES} | ${mech_messages[(qbacting + debuff + 1) % 2].message_ES}`), message_PT: (`Gelo dentro (${qbacting_messages[qbacting].message_PT}) | ${mech_messages[debuff % 2 + 2].message_PT} | ${mech_messages[(qbacting + debuff + 1) % 2].message_PT}`)
					});

					spawn_marker((qbacting + debuff + 1) % 2);
				} else {
					handlers.text({
						sub_type: "message",
						message: (`Ice inside (${qbacting_messages[qbacting].message})`),
						message_ES: (`Hielo adentro (${qbacting_messages[qbacting].message_ES})`), message_PT: (`Gelo dentro (${qbacting_messages[qbacting].message_PT})`)
					});
				}
			}, 500);

			blue = true;
			red = false;

			dispatch.setTimeout(() => {
				blue = false;
				red = true;
			}, 6600);

			dispatch.setTimeout(() => red = false, 9400);
		}

		if ([212, 215].includes(skillid)) { // Fire inside
			dispatch.setTimeout(() => {
				if (debuff != null) {
					handlers.text({
						sub_type: "message",
						message: (`Fire inside (${qbacting_messages[qbacting].message}) | ${mech_messages[debuff % 2 + 2].message} | ${mech_messages[(qbacting + debuff) % 2].message}`),
						message_ES: (`Fuego adentro (${qbacting_messages[qbacting].message_ES}) | ${mech_messages[debuff % 2 + 2].message_ES} | ${mech_messages[(qbacting + debuff) % 2].message_ES}`), message_PT: (`Fogo dentro (${qbacting_messages[qbacting].message_PT}) | ${mech_messages[debuff % 2 + 2].message_PT} | ${mech_messages[(qbacting + debuff) % 2].message_PT}`)
					});

					spawn_marker((qbacting + debuff) % 2);
				} else {
					handlers.text({
						sub_type: "message",
						message: (`Fire inside (${qbacting_messages[qbacting].message})`),
						message_ES: (`Fuego adentro (${qbacting_messages[qbacting].message_ES})`), message_PT: (`Fogo dentro (${qbacting_messages[qbacting].message_PT})`)
					});
				}
			}, 500);

			blue = false;
			red = true;

			dispatch.setTimeout(() => {
				blue = true;
				red = false;
			}, 6600);

			dispatch.setTimeout(() => blue = false, 9400);
		}

		if (!debuff_tracker_started) {
			dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, abnormality_change.bind(null, true));
			dispatch.hook("S_ABNORMALITY_END", 1, abnormality_change.bind(null, false));

			debuff_tracker_started = true;
		}
	}

	const skills = {
		"112-0": [{ type: "text", sub_type: "message", message: "Ice DOT", message_ES: "DOT de Hielo", message_PT: "DOT de Gelo" }],
		"110-0": [{ type: "text", sub_type: "message", message: "Fire DOT", message_ES: "DOT de Fuego", message_PT: "DOT de Fogo" }],
		"108-0": [
			{ type: "text", sub_type: "message", message: "Turn Right (Repel)", message_ES: "Girar DERECHA (Repeler)", message_PT: "Virar DIREITA (Repelir)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"158-0": [
			{ type: "text", sub_type: "message", message: "Turn Right (Repel)", message_ES: "Girar DERECHA (Repeler)", message_PT: "Virar DIREITA (Repelir)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"109-0": [
			{ type: "text", sub_type: "message", message: "Turn Left (Repel)", message_ES: "Girar IZQUIERDA (Repeler)", message_PT: "Virar ESQUERDA (Repelir)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"159-0": [
			{ type: "text", sub_type: "message", message: "Turn Left (Repel)", message_ES: "Girar IZQUIERDA (Repeler)", message_PT: "Virar ESQUERDA (Repelir)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"120-0": [{ type: "text", sub_type: "message", message: "Together", message_ES: "Juntos", message_PT: "Juntos" }],
		"145-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun" }],
		"157-0": [{ type: "text", sub_type: "message", message: "Change", message_ES: "Cambiar", message_PT: "Trocar" }],
		"103-0": [
			{ type: "text", sub_type: "message", message: "Tail (Flying)", message_ES: "Cola (Volando)", message_PT: "Cauda (Voando)" },
			{ type: "text", sub_type: "message", message: "Arise!", message_ES: "¡Levantarse!", message_PT: "Levantar!", delay: 1500, class_position: "priest" },
			{ type: "spawn", func: "semicircle", args: [140, 260, 912, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 135, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 260, 500, 0, 2000] }
		],
		"153-0": [
			{ type: "text", sub_type: "message", message: "Tail (Flying)", message_ES: "Cola (Volando)", message_PT: "Cauda (Voando)" },
			{ type: "text", sub_type: "message", message: "Arise!", message_ES: "¡Levantarse!", message_PT: "Levantar!", delay: 1500, class_position: "priest" },
			{ type: "spawn", func: "semicircle", args: [140, 260, 912, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 135, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 260, 500, 0, 2000] }
		],
		"114-0": [{ type: "text", sub_type: "message", message: "Front Fire", message_ES: "Fuego Frontal", message_PT: "Fogo Frontal" }],

		// AOE лед (большой)
		"104-0": [
			{ type: "text", sub_type: "message", message: "Ice Storm DOTs", message_ES: "DOTs Tormenta de Hielo", message_PT: "DOTs Tempestade de Gelo" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 525, 0, 5000] }
		],
		// AOE огонь (большой)
		"105-0": [
			{ type: "text", sub_type: "message", message: "Fire Bombs", message_ES: "Bombas de Fuego", message_PT: "Bombas de Fogo" },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 500, 10, 150, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 500, 10, 150, 0, 3250] },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 500, 10, 150, 0, 3500] },
			{ type: "spawn", func: "circle", args: [false, 553, 235, 500, 10, 150, 0, 3750] },
			{ type: "spawn", func: "circle", args: [false, 553, 90, 500, 10, 150, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 270, 500, 10, 150, 0, 4250] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 500, 10, 150, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 500, 10, 150, 0, 4750] }
		],
		// AOE лед (малый)
		"154-0": [
			{ type: "text", sub_type: "message", message: "Ice Storm", message_ES: "Tormenta de Hielo", message_PT: "Tempestade de Gelo" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 6000] }
		],
		// AOE огонь (малый)
		"155-0": [
			{ type: "text", sub_type: "message", message: "Fire (Knockdown)", message_ES: "Fuego (Derribar)", message_PT: "Fogo (Derrubar)" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }
		],

		"124-0": [
			{ type: "text", sub_type: "message", message: "Small Jump", message_ES: "Salto Pequeño", message_PT: "Salto Pequeno" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 125, 0, 3000] }
		],

		"206-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Salto Atrás", message_PT: "Salto Atrás" }],
		"206-2": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 350, 0, 3000] }],
		"137-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "Derribar", message_PT: "Derrubar" }],
		"138-0": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE", message_PT: "AOE" }],
		"139-0": [
			{ type: "text", sub_type: "message", message: "60 degrees (Fire to all)", message_ES: "60 grados (Fuego a Todos)", message_PT: "60 graus (Fogo em Todos)" },
			{ type: "text", sub_type: "message", delay: 4000, message: "Lower the temp", message_ES: "Bajar la Temperatura", message_PT: "Baixar a Temperatura" }
		],
		"140-0": [
			{ type: "text", sub_type: "message", message: "40 degrees (Ice to all)", message_ES: "40 grados (Hielo a Todos)", message_PT: "40 graus (Gelo em Todos)" },
			{ type: "text", sub_type: "message", delay: 4000, message: "Raise the temp", message_ES: "Subir la Temperatura", message_PT: "Aumentar a Temperatura" }
		],

		"die": [{ type: "func", func: debuff_removed }],
		"nd-2816-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		// changed by Bogus
		"dm-0-0-31260012": [{ type: "text", sub_type: "message", message: "WIPE", message_ES: "WIPE", message_PT: "WIPE" }],
		"s-2816-1000-1151-0": [{ type: "text", sub_type: "message", message: "[DEBUFF] Furthest player", message_ES: "[Debuff] Jugador Más Lejano", message_PT: "[Debuff] Jogador Mais Longe" }],
		"s-2816-1000-2151-0": [{ type: "text", sub_type: "message", message: "[DEBUFF] Closest player", message_ES: "[Debuff] Jugador Más Cercano", message_PT: "[Debuff] Jogador Mais Próximo" }],
		"s-2816-1000-1125-0": [{ type: "text", sub_type: "message", message: "SHIELD", message_ES: "ESCUDO", message_PT: "ESCUDO" }],
		"s-2816-1000-1126-0": [{ type: "text", sub_type: "message", message: "SHIELD", message_ES: "ESCUDO", message_PT: "ESCUDO" }],
		//
		"s-2816-1000-1118-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" }],
		"s-2816-1000-2118-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" }],
		"s-2816-1000-1127-0": [{ type: "text", sub_type: "message", message: "SHIELD", message_ES: "ESCUDO", message_PT: "ESCUDO" }],
		"s-2816-1000-1118-1": [{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "Iframe!", message_PT: "Iframe!", delay: 615 }],
		"s-2816-1000-2118-1": [{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "Iframe!", message_PT: "Iframe!", delay: 625 }],
		"s-2816-1000-1212-0": [{ type: "func", func: skilld_event, args: [212] }],
		"s-2816-1000-1215-0": [{ type: "func", func: skilld_event, args: [215] }],
		"s-2816-1000-1213-0": [{ type: "func", func: skilld_event, args: [213] }],
		"s-2816-1000-1214-0": [{ type: "func", func: skilld_event, args: [214] }],

		"qb-2816-1000-3026005": [{ type: "func", func: skilld_event, args: [3026005] }], // ужас, одинаковые цвета
		"qb-2816-1000-3026004": [{ type: "func", func: skilld_event, args: [3026004] }], // ярость(not enraged), разные цвета
		"qb-2816-1000-3126005": [{ type: "func", func: skilld_event, args: [3126005] }], // ужас, одинаковые цвета
		"qb-2816-1000-3126004": [{ type: "func", func: skilld_event, args: [3126004] }], // ярость(not enraged), разные цвета
		"am-2816-1000-30260001": [{ type: "func", func: skilld_event, args: [30260001] }], // красный
		"am-2816-1000-30260002": [{ type: "func", func: skilld_event, args: [30260002] }], // синий
		"am-2816-1000-31260023": [{ type: "func", func: skilld_event, args: [31260023] }], // красный
		"am-2816-1000-31260024": [{ type: "func", func: skilld_event, args: [31260024] }], // синий

		"s-2816-1000-1107-0": [{ type: "text", sub_type: "message", message: "Forced Double Claw", message_ES: "Garra Doble Forzada", message_PT: "Garra Dupla Forçada" }],
		"s-2816-1000-2107-0": [{ type: "text", sub_type: "message", message: "Forced Double Claw", message_ES: "Garra Doble Forzada", message_PT: "Garra Dupla Forçada" }],
		"am-2816-1101-31260251": [{ type: "text", sub_type: "message", message: "[Debuff] Layer 1", message_ES: "[Debuff] Capa 1", message_PT: "[Debuff] Camada 1" }],
		"am-2816-1101-31260067": [{ type: "text", sub_type: "message", message: "[Debuff] Layer 2", message_ES: "[Debuff] Capa 2", message_PT: "[Debuff] Camada 2" }],
		"am-2816-1101-31260068": [
			{ type: "text", sub_type: "message", message: "[Debuff] Layer 3", message_ES: "[Debuff] Capa 3", message_PT: "[Debuff] Camada 3" },
			{ type: "text", sub_type: "message", delay: 120000, message: "[Debuff] 2 minutes passed", message_ES: "[Debuff] Pasaron 2 minutos", message_PT: "[Debuff] 2 minutos passados", check_func: () => dispatch._mod.majorPatchVersion >= 99 },
			{ type: "text", sub_type: "message", delay: 145000, message: "[Debuff] 2.5 minutes passed", message_ES: "[Debuff] Pasaron 2.5 minutos", message_PT: "[Debuff] 2.5 minutos passados", check_func: () => dispatch._mod.majorPatchVersion < 99 }
		]
	};

	const object = {};

	for (const [key, value] of Object.entries(skills)) {
		if (key.length === 5) {
			object[`s-2816-1000-1${key}`] = value;
			object[`s-2816-1000-2${key}`] = value;
		} else {
			object[key] = value;
		}
	}

	return object;
};