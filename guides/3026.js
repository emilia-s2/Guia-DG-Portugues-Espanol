// Corrupted Skynest
//
// made by michengs / HSDN / ZC

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	const { player } = dispatch.require.library;
	const { MARKER_ITEM } = module.parent.exports.spawn;

	let debuff = null;
	let timer1 = null;
	let timer2 = null;
	let timer3 = null;
	let timer4 = null;
	let timer5 = null;
	let boss_ent = null;
	let boss_offset = 0;
	let qbacting = null;
	let blue = false;
	let red = false;
	let debuff_tracker_started = false;

	const mech_messages = {
		0: { message_PT: "ENTRAR", message_ES: "ENTRAR", message: "IN" },
		1: { message_PT: "SAIR", message_ES: "SALIR", message: "OUT" }
	};

	const qbacting_messages = {
		0: { message_PT: "Diferente", message_ES: "Diferente", message: "different" },
		1: { message_PT: "Igual", message_ES: "Igual", message: "same" }
	};

	const debuff_messages = {
		0: { message_PT: "Pronto para obter o Debuff de FOGO", message_ES: "Listo para obter Debuff de FUEGO", message: "Ready to get Fire debuff" },
		1: { message_PT: "Pronto para obter o Debuff de GELO", message_ES: "Listo para obter Debuff de HIELO", message: "Ready to get Ice debuff" }
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
//			{ type: "spawn", func: "marker", args: [false, 45 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
//			{ type: "spawn", func: "marker", args: [false, 135 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
//			{ type: "spawn", func: "marker", args: [false, 225 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
//			{ type: "spawn", func: "marker", args: [false, 315 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] }
		], boss_ent);
	}

	function debuff_added(id) {
		debuff_removed();
		debuff = id; // debuff event id

		timer1 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message_PT: "Fim do Debuff em 20 segundos",
					message_ES: "Дебафф 20 сек.",
					message: "Debuff 20 seconds"
				});
			}
		}, 70000);

		timer2 = dispatch.setTimeout(() => {
			if (debuff != null) {
				dispatch.setTimeout(() => {
					handlers.text({
						sub_type: "alert",
						message_PT: (`${debuff_messages[debuff % 2].message_PT}`),
						message_ES: (`${debuff_messages[debuff % 2].message_ES}`),
						message: (`${debuff_messages[debuff % 2].message}`)
					});
				}, 2000);

				handlers.text({
					sub_type: "message",
					message_PT: "Debuff 50 segundos",
					message_ES: "Debuff 50 secundos",
					message: "Debuff 50 seconds"
				});
			}
		}, 40000);

		timer3 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message_PT: "Fim do Debuff em 15 segundos",
					message_ES: "Fin del Debuff en 15 secundos",
					message: "Warning! Debuff 15 seconds"
				});
			}
		}, 75000);

		timer4 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message_PT: "Fim do Debuff em 10 segundos",
					message_ES: "Fin del Debuff en 10 secundos",
					message: "Warning! Debuff 10 seconds"
				});
			}
		}, 80000);

		timer5 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message_PT: "Fim do Debuff em 5 segundos",
					message_ES: "Fin del Debuff en 5 secundos",
					message: "Warning! Debuff 5 seconds"
				});
			}
		}, 85000);

		if (blue) {
			handlers.text({
				sub_type: "message",
				message_PT: (`${mech_messages[(qbacting + debuff + 1) % 2].message_PT}`),
				message_ES: (`${mech_messages[(qbacting + debuff + 1) % 2].message_ES}`),
				message: (`${mech_messages[(qbacting + debuff + 1) % 2].message}`)
			});

			spawn_marker((qbacting + debuff + 1) % 2);
		} else if (red) {
			handlers.text({
				sub_type: "message",
				message_PT: (`${mech_messages[(qbacting + debuff) % 2].message_PT}`),
				message_ES: (`${mech_messages[(qbacting + debuff) % 2].message_ES}`),
				message: (`${mech_messages[(qbacting + debuff) % 2].message}`)
			});

			spawn_marker((qbacting + debuff) % 2);
		}
	}

	function debuff_removed() {
		debuff = null;
		dispatch.clearTimeout(timer1);
		dispatch.clearTimeout(timer2);
		dispatch.clearTimeout(timer3);
		dispatch.clearTimeout(timer4);
		dispatch.clearTimeout(timer5);
	}

	function skilld_event(skillid, ent) {
		const abnormality_change = (added, event) => {
			// Fire/Ice debuff
			if (player.isMe(event.target.toString()) && [30260001, 30260002, 31260001, 31260002].includes(event.id)) {
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

		// In-Out quest balloons (qbacting => ярость 0, ужас 1)
		if ([3026004, 3126004, 3026005, 3126005].includes(skillid)) {
			qbacting = skillid % 2;
		}

		// Fire/Ice debuff (debuff % 2 => синий 0, красный 1)
		if ([30260001, 31260001, 30260002, 31260002].includes(skillid) && !debuff_tracker_started) {
			debuff_added(skillid);
		}

		// In-Out identification
		if ([212, 213, 214, 215].includes(skillid)) {
			boss_ent = ent;
			handlers.event([
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 440, 200, 8000] },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 4, 840, 200, 8000] }
			]);
		}

		if ([212, 214].includes(skillid)) { // Fire claw (141, 142)
			boss_offset = 10;
			handlers.event([
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 840, 200, 8000] }, // Alterado 190>180 Rotaçao
				{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 840, 200, 8000] }   // Alterado 10>0 Rotaçao
			]);
		}

		if ([213, 215].includes(skillid)) { // Ice claw (143, 144)
			boss_offset = -10;
			handlers.event([
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 840, 200, 8000] }, // Alterado 170>180 Rotaçao
				{ type: "spawn", func: "vector", args: [553, 0, 0, 360, 840, 200, 8000] }  // Alterado 350>360 Rotaçao
			]);
		}

		if ([213, 214].includes(skillid)) { // Ice inside
			dispatch.setTimeout(() => {
				if (debuff != null) {
					handlers.text({
						sub_type: "message",
						message_PT: (`Gelo (${qbacting_messages[qbacting].message_PT}) | ${mech_messages[(qbacting + debuff + 1) % 2].message_PT}`),
						message_ES: (`Hielo (${qbacting_messages[qbacting].message_ES}) | ${mech_messages[(qbacting + debuff + 1) % 2].message_ES}`),
						message: (`Ice inside (${qbacting_messages[qbacting].message}) | ${mech_messages[(qbacting + debuff + 1) % 2].message}`)
					});

					spawn_marker((qbacting + debuff + 1) % 2);
				} else {
					handlers.text({
						sub_type: "message",
						message_PT: (`Gelo (${qbacting_messages[qbacting].message_PT})`),
						message_ES: (`Hielo (${qbacting_messages[qbacting].message_ES})`),
						message: (`Ice inside (${qbacting_messages[qbacting].message})`)
					});
				}
			}, 500);

			blue = true;
			red = false;

			dispatch.setTimeout(() => blue = false, 6500); //6700
		}

		if ([212, 215].includes(skillid)) { // Fire inside
			dispatch.setTimeout(() => {
				if (debuff != null) {
					handlers.text({
						sub_type: "message",
						message_PT: (`Fogo (${qbacting_messages[qbacting].message_PT}) | ${mech_messages[(qbacting + debuff) % 2].message_PT}`),
						message_ES: (`Fuego (${qbacting_messages[qbacting].message_ES}) | ${mech_messages[(qbacting + debuff) % 2].message_ES}`),
						message: (`Fire inside (${qbacting_messages[qbacting].message}) | ${mech_messages[(qbacting + debuff) % 2].message}`)
					});

					spawn_marker((qbacting + debuff) % 2);
				} else {
					handlers.text({
						sub_type: "message",
						message_PT: (`Fogo (${qbacting_messages[qbacting].message_PT})`),
						message_ES: (`Fuego (${qbacting_messages[qbacting].message_ES})`),
						message: (`Fire inside (${qbacting_messages[qbacting].message})`)
					});
				}
			}, 500);

			blue = false;
			red = true;

			dispatch.setTimeout(() => red = false, 6500);
		}

		if (!debuff_tracker_started) {
			dispatch.hook("S_ABNORMALITY_BEGIN", 4, abnormality_change.bind(null, true));
			dispatch.hook("S_ABNORMALITY_END", 1, abnormality_change.bind(null, false));

			debuff_tracker_started = true;
		}
	}

	const skills = {
		"112-0": [{ type: "text", sub_type: "message", message_PT: "Mão de GELO", message_ES: "Mano de HIELO", message: "Ice DOT" }],
		"110-0": [{ type: "text", sub_type: "message", message_PT: "Mão de FOGO", message_ES: "Mano de FUEGO", message: "Fire DOT" }],
		"108-0": [
			{ type: "text", sub_type: "message", message_PT: "Giro a Direita (Repelir!)", message_ES: "Giro a la Derecha (Repeler)", message: "Turn Right (Repel)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"158-0": [
			{ type: "text", sub_type: "message", message_PT: "Giro a Direita (Repelir!)", message_ES: "Giro a la Derecha (Repeler)", message: "Turn Right (Repel)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"109-0": [
			{ type: "text", sub_type: "message", message_PT: "Giro a Esquerda (Repelir!)", message_ES: "Giro a la Izquierda (Repeler)", message: "Turn Left (Repel)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"159-0": [
			{ type: "text", sub_type: "message", message_PT: "Giro a Esquerda (Repelir!)", message_ES: "Giro a la Izquierda (Repeler)", message: "Turn Left (Repel)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"120-0": [{ type: "text", sub_type: "message", message_PT: "JUNTAR", message_ES: "JUNTAR", message: "Together" }],
		"145-0": [{ type: "text", sub_type: "message", message_PT: "Pés Stun", message_ES: "Pies Stun", message: "Stun" }],
//	    "157-0": [{ type: "text", sub_type: "message", message_PT: "Trocar", message_ES: "Cambiar", message: "Change" }],
		"103-0": [
			{ type: "text", sub_type: "message", message_PT: "Cauda (voando)", message_ES: "Cola (vuela)", message: "Tail (Flying)" },
			{ type: "text", sub_type: "message", message_PT: "Arise!", message_ES: "Arise!", message: "Arise!", delay: 1500, class_position: "priest" },
			{ type: "spawn", func: "semicircle", args: [140, 260, 553, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 135, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 260, 500, 0, 2000] }
		],
		"153-0": [
			{ type: "text", sub_type: "message", message_PT: "Cauda (voando)", message_ES: "Cola (vuela)", message: "Tail (Flying)" },
			{ type: "text", sub_type: "message", message_PT: "Arise!", message_ES: "Arise!", message: "Arise!", delay: 1500, class_position: "priest" },
			{ type: "spawn", func: "semicircle", args: [140, 260, 553, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 135, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 260, 500, 0, 2000] }
		],
		"s-3026-1000-1118-0": [{ type: "text", sub_type: "message", message_PT: "Saltar (Jogar ao alto)", message_ES: "Saltar (Jugar al alto)", message: "Jump" }],
		"s-3026-1000-2118-0": [{ type: "text", sub_type: "message", message_PT: "Saltar (Jogar ao alto)", message_ES: "Saltar (Jugar al alto)", message: "Jump" }],
		"s-3026-1000-1118-1": [{ type: "text", sub_type: "message", message_PT: "Iframe!", message_ES: "Iframe!", message: "Iframe", delay: 615 }],
		"s-3026-1000-2118-1": [{ type: "text", sub_type: "message", message_PT: "Iframe!", message_ES: "Iframe!", message: "Iframe", delay: 625 }],

		// AOE лед (большой)
		"104-0": [
			{ type: "text", sub_type: "message", message_PT: "Tempestade de GELO (Grande)", message_ES: "Tormenta de HIELO (Grande)", message: "Ice Storm DOTs" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 5000] }
		],
		// AOE огонь (большой)
		"105-0": [
			{ type: "text", sub_type: "message", message_PT: "Bombas de FOGO", message_ES: "Bombas de Fuego", message: "Fire Bombs" },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 500, 10, 270, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 500, 10, 270, 0, 3250] },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 500, 10, 270, 0, 3500] },
			{ type: "spawn", func: "circle", args: [false, 553, 235, 500, 10, 270, 0, 3750] },
			{ type: "spawn", func: "circle", args: [false, 553, 90, 500, 10, 270, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 270, 500, 10, 270, 0, 4250] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 500, 10, 270, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 500, 10, 270, 0, 4750] }
		],
		// AOE лед (малый)
		"154-0": [
			{ type: "text", sub_type: "message", message_PT: "Tempestade de Gelo", message_ES: "Tormenta de Hielo", message: "Ice Storm" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 6000] }
		],
		// AOE огонь (малый)
		"155-0": [{ type: "text", sub_type: "message", message_PT: "AoE de Fogo (Derrubar)", message_ES: "AoE de Fuego (Derrubar)", message: "Fire (Knockdown)" },
			{ type: "text", sub_type: "message", delay: 1100, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe" }
		],
		"206-0": [{ type: "text", sub_type: "message", message_PT: "Salto Atrás", message_ES: "Salto Atrás", message: "Jump Back" }],
        "164-0": [{ type: "text", sub_type: "message", message_PT: "R.I.P xD e.e (100%)", message_ES: "R.I.P xD e.e (100%)", message: "R.I.P xD e.e (100%)" }], 
		"165-0": [{ type: "text", sub_type: "message", message_PT: "R.I.P xD e.e (0%)", message_ES: "R.I.P xD e.e (0%)", message: "R.I.P xD e.e (0%)" }],
		"137-0": [{ type: "text", sub_type: "message", message_PT: "Derrubar + Explosão Ampla (50metros)", message_ES: "Tumbar + Explosión Ampla (50metros)", message: "Knockdown" }],
		"138-0": [{ type: "text", sub_type: "message", message_PT: "Explosão (Iframe)", message_ES: "Explosión (Iframe)", message: "AoE (Iframe)", delay: 1720 }],
		"139-0": [
			{ type: "text", sub_type: "message", message_PT: "[Temperatura] 60+ TODOS (GELO)", message_ES: "[Temperatura] 60+ TODOS (HIELO)", message: "60 degrees (Fire to all)" }
		],
		"140-0": [
			{ type: "text", sub_type: "message", message_PT: "[Temperatura] 40- TODOS (FOGO)", message_ES: "[Temperatura] 40- TODOS (FUEGO)", message: "40 degrees (Ice to all)" }
		],

		"die": [{ type: "func", func: debuff_removed }],
		"nd-3026-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3026-1000-1212-0": [{ type: "func", func: skilld_event, args: [212] }],
		"s-3026-1000-1215-0": [{ type: "func", func: skilld_event, args: [215] }],
		"s-3026-1000-1213-0": [{ type: "func", func: skilld_event, args: [213] }],
		"s-3026-1000-1214-0": [{ type: "func", func: skilld_event, args: [214] }],
		"qb-3026-1000-3026005": [{ type: "func", func: skilld_event, args: [3026005] }], // ужас, одинаковые цвета
		"qb-3026-1000-3026004": [{ type: "func", func: skilld_event, args: [3026004] }], // ярость, разные цвета
		"qb-3026-1000-3126005": [{ type: "func", func: skilld_event, args: [3126005] }], // ужас, одинаковые цвета
		"qb-3026-1000-3126004": [{ type: "func", func: skilld_event, args: [3126004] }], // ярость, разные цвета
		"am-3026-1000-30260001": [{ type: "func", func: skilld_event, args: [30260001] }], // красный
		"am-3026-1000-30260002": [{ type: "func", func: skilld_event, args: [30260002] }], // синий
		"am-3026-1000-31260001": [{ type: "func", func: skilld_event, args: [31260001] }], // красный
		"am-3026-1000-31260002": [{ type: "func", func: skilld_event, args: [31260002] }] // синий
	};

	const object = {};

	for (const [key, value] of Object.entries(skills)) {
		if (key.length === 5) {
			object[`s-3026-1000-1${key}`] = value;
			object[`s-3026-1000-2${key}`] = value;
		} else {
			object[key] = value;
		}
	}

	return object;
};