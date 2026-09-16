// Phantom hideout
//
// made by star, hyacinth for Arborea Reborn

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = ES;

	const { HIGHLIGHT_ITEM } = module.parent.exports.spawn;
	const { player } = dispatch.require.library;

	let shield_timer1 = null;
	let shield_timer2 = null;
	let print_shield = true;
	let print_hp = true;
	let is_hp_74_39 = false;
	let thirdboss_colour_to_use = null;
	let thirdboss_counter = 0;
	let thirdboss_timer = null;
	let boss = null;
	let print_loading = true;
	let print_lasers = true;
	let boss7_hp_49 = false;
	let debuff_list = [];
	let type = -1;
	let back_print = false;
	let back_time = 0;
	let end_back_time = 0;
	let is_one_back = false;
	let counter = 0;
	let counter1_date = null;
	let prev_back_attack = 0;
	let prev_date = 0;
	let ninth_triple_swipe_remaining = 0;
	let triples_timer = null;
	let secondary_timer = null;
	let secondary_aggro_date = 0;
	let is_ninth_floor = false;
	let ninth_floor_fifty = false;
	let boss_data = null;

	dispatch.hook("S_USER_EFFECT", "*", e => {
		if (!is_ninth_floor) return;
		if (e.circle == 3 && e.operation == 1 && e.source == boss_data.gameId) {
			secondary_aggro_date = new Date();
		}
	});

	function shield_event() {
		dispatch.clearTimeout(shield_timer1);
		dispatch.clearTimeout(shield_timer2);

		shield_timer1 = dispatch.setTimeout(() => {
			if (!is_hp_74_39) {
				handlers.text({
					sub_type: "message",
					message: "Shield in 5 seconds!", message_ES: "Escudo en 5 segundos!", message_PT: "Escudo em 5 segundos!"
				});
			}
		}, 85000);

		shield_timer2 = dispatch.setTimeout(() => {
			if (!is_hp_74_39) {
				handlers.text({
					sub_type: "message",
					message: "Shield in 15 seconds!", message_ES: "Escudo en 15 segundos!", message_PT: "Escudo em 15 segundos!"
				});
			}
		}, 75000);
	}

	function boss_hp_event(hp) {
		if ([74, 39].includes(hp)) {
			if (print_hp) {
				dispatch.clearTimeout(shield_timer1);
				dispatch.clearTimeout(shield_timer2);
				print_hp = false;
				is_hp_74_39 = true;
				dispatch.setTimeout(() => print_hp = true, 15000);
			}
		}
		if ([89, 59, 29].includes(hp)) { // до щита
			if (print_shield) {
				print_shield = false;
				is_hp_74_39 = false;
				dispatch.setTimeout(() => print_shield = true, 15000);

				handlers.text({
					sub_type: "alert",
					message: "Ready for Shield", message_ES: "Preparar Escudo", message_PT: "Preparar Escudo"
				});
			}
		}
	}

	function thirdboss_backattack_event() {
		dispatch.clearTimeout(thirdboss_timer);
		thirdboss_counter++;

		if (thirdboss_counter >= 2) {
			handlers.text({ sub_type: "message", message: "Back Stun", message_ES: "Stun Atrás", message_PT: "Stun Atrás" });
		}

		thirdboss_timer = dispatch.setTimeout(() => thirdboss_counter = 0, 3000);
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

	function waves_event() {
		handlers.event([
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 500, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 6, 400, 0, 6000] },
			{ type: "text", sub_type: "alert", delay: 60000, message: "Waves soon...", message_ES: "Olas Pronto...", message_PT: "Ondas em Breve..." }
		]);
	}

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 90442502) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: "Laser on you", message_ES: "Láser en Ti", message_PT: "Laser em Você" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: `Laser on ${member.name}`, message_ES: "Láser en ${member.name}", message_PT: "Laser em ${member.name}",
						message_ES: "Láser en ${member.name}", message_PT: "Laser em ${member.name}"
					});
				}
			}
		}
	});

	//For DARKAN FUNCTIONS

	dispatch.hook("S_USER_EFFECT", "*", e => {
		if (!is_ninth_floor) return;
		if (e.circle == 3 && e.operation == 1 && e.source == boss_data.gameId) {
			secondary_aggro_date = new Date();
		}
	});

	function boss_backattack_event() {
		end_back_time = new Date() - back_time;

		if (!back_print) {
			back_print = true;
			is_one_back = end_back_time > 0 && end_back_time < 1500;

			if (is_one_back) {
				handlers.text({
					sub_type: "message", message: "360", message_ES: "360", message_PT: "360"
				});
			}
		}
		dispatch.setTimeout(() => back_print = false, 3500);
	}

	function boss_backattack_event_new(curr, ent) {
		const start = new Date();
		const tmp = prev_date;
		prev_date = start;

		const time_diff = start - tmp;

		const prev = prev_back_attack;
		prev_back_attack = curr;

		let back_combo_time_diff = 5000;
		if (counter1_date != null) {
			back_combo_time_diff = start - counter1_date;
		}

		if (curr == 1103 || curr == 1106) {
			const secondary_time_diff = start - secondary_aggro_date;
			const markers = [
				[
					{ type: "text", sub_type: "message", message_ES: "IZQUIERDA", message_PT: "ESQUERDA", message: "Left" },
					{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2500, true, null] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 2500] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 2500] }
				],
				[
					{ type: "text", sub_type: "message", message_ES: "DERECHA", message_PT: "DIREITA", message: "Right" },
					{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2500, true, null] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 2500] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 2500] }
				]
			];

			if (secondary_time_diff < 3000) {
				if (ninth_floor_fifty) {
					const safe_spot_index = curr == 1103 ? 0 : 1;
					handlers.event(markers[safe_spot_index]);
				}
				ninth_secondary_event();
			}
		}

		if (prev == 1106 && curr == 1103 && time_diff < 1000) {
			handlers.text({
				sub_type: "message", message: "360", message_ES: "360", message_PT: "360"
			});
		} else if (prev === 1103 && curr === 1105 && time_diff < 1000) {
			counter = 1;
			counter1_date = new Date();
		} else if (prev === 1105 && curr === 1106 && counter === 1 && time_diff < 1500 && back_combo_time_diff < 1500) {
			counter = 2;
		} else if (prev === 1106 && curr === 1108 && counter == 2 && time_diff < 1000 && back_combo_time_diff < 2000) {
			handlers.text({
				sub_type: "message", message: "2x360", message_ES: "2x360", message_PT: "2x360"
			});
		} else {
			counter = 0;
			counter1_date = null;
		}
	}

	function ninth_new_swipe_event(curr, ent) {
		ninth_triple_swipe_remaining--;
		if (ninth_triple_swipe_remaining > 0) {
			if (curr == 1407) {
				handlers.event([
					{ type: "text", sub_type: "message", message_ES: "IZQUIERDA", message_PT: "ESQUERDA", message: "Left" },
					{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 1000, true, null] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1000] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1000] }
				]);
			} else {
				handlers.event([
					{ type: "text", sub_type: "message", message_ES: "DERECHA", message_PT: "DIREITA", message: "Right" },
					{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 1000, true, null] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1000] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1000] }
				]);
			}
		} else {
			// non triple
			// eslint-disable-next-line no-lonely-if
			if (curr == 1407) {
				handlers.event([
					{ type: "text", sub_type: "message", message_ES: "IZQUIERDA (Doble)", message_PT: "ESQUERDA (Duplo)", message: "Left (Double)", message_zh: "左 (双挥)" },
					{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 1000, true, null] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 2500] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 2500] },
					{ type: "spawn", func: "marker", args: [false, 60, 100, 1000, 1000, true, null] }

				]);
			} else {
				handlers.event([
					{ type: "text", sub_type: "message", message_ES: "DERECHA (Doble)", message_PT: "DIREITA (Duplo)", message: "Right (Double)", message_zh: "右 (双挥)" },
					{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 1000, true, null] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 2500] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 2500] },
					{ type: "spawn", func: "marker", args: [false, 300, 100, 1000, 1000, true, null] }
				]);
			}
		}
	}

	function ninth_old_swipe_event(curr, ent) {
		if (ninth_triple_swipe_remaining > 0) {
			ninth_triple_swipe_remaining--;
		}
		if (curr == 1401) {
			handlers.event([
				{ type: "text", sub_type: "message", message_ES: "IZQUIERDA", message_PT: "ESQUERDA", message: "Left", message_zh: "左" },
				{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 1000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1000] },
				{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1000] }
			]);
		} else {
			handlers.event([
				{ type: "text", sub_type: "message", message_ES: "DERECHA", message_PT: "DIREITA", message: "Right", message_zh: "右" },
				{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 1000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1000] },
				{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1000] }
			]);
		}
	}

	function ninth_triples_event() {
		if (triples_timer != null) {
			dispatch.clearTimeout(triples_timer);
		}

		triples_timer = dispatch.setTimeout(() => {
			handlers.text({
				sub_type: "notification",
				message: "Triples Soon!", message_ES: "¡Triples Pronto!", message_PT: "Triplos em Breve!",
				message_ES: "¡Triples Pronto!", message_PT: "Triplos em Breve!"
			});
		}, 100000);
	}

	function ninth_secondary_event() {
		if (secondary_timer != null) {
			dispatch.clearTimeout(secondary_timer);
		}

		secondary_timer = dispatch.setTimeout(() => {
			if (ninth_floor_fifty) {
				handlers.text({
					sub_type: "notification",
					message: "Secondary Soon!", message_ES: "¡Secundario Pronto!", message_PT: "Secundário em Breve!",
					message_ES: "¡Secundario Pronto!", message_PT: "Secundário em Breve!"
				});
			}
		}, 45000);
	}

	function reset_backevent() {
		back_print = false;
		back_time = 0;
		end_back_time = 0;
		is_one_back = false;
		counter = 0;
		counter1_date = null;
		prev_back_attack = 0;
		prev_date = 0;

		// reset aggro event
		secondary_aggro_date = 0;
		is_ninth_floor = false;
		ninth_floor_fifty = false;

		if (triples_timer != null) {
			dispatch.clearTimeout(triples_timer);
			triples_timer = null;
		}

		if (secondary_timer != null) {
			dispatch.clearTimeout(secondary_timer);
			secondary_timer = null;
		}
	}

	//For Lakan funcs
	// eslint-disable-next-line no-shadow
	function boss7_star_event(str, type) {
		const [message_en, message_zh] = str.split("|");
		handlers.event([
			{ type: "text", sub_type: "message", message: message_en, message_ES: message_en, message_PT: message_en },
			{ type: "spawn", func: "vector", args: [912, 18, 300, 7, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 18, 300, 29, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 54, 300, 43, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 54, 300, 65, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 90, 300, 79, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 90, 300, 102, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 126, 300, 115, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 126, 300, 137, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 162, 300, 151, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 162, 300, 173, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, -18, 300, -7, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, -18, 300, -29, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, -54, 300, -43, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, -54, 300, -65, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, -90, 300, -79, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, -90, 300, -102, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, -126, 300, -115, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, -126, 300, -137, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, -162, 300, -151, 750, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, -162, 300, -173, 750, 0, 4000] }
		]);
		if (type == 0) {
			handlers.event([
				{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 16, 175, 0, 4000] },
				{ type: "spawn", func: "item", args: [89141, 0, 250, 2250, 1750] }, // Front
				{ type: "spawn", func: "point", args: [810, 0, 250, 2250, 1750] },
				{ type: "spawn", func: "item", args: [89141, 36, 250, 0, 2500] },
				{ type: "spawn", func: "point", args: [810, 36, 250, 0, 2500] },
				{ type: "spawn", func: "item", args: [89141, -36, 250, 0, 2500] },
				{ type: "spawn", func: "point", args: [810, -36, 250, 0, 2500] },
				{ type: "spawn", func: "item", args: [89141, 180, 250, 0, 2500] }, // Back
				{ type: "spawn", func: "point", args: [810, 180, 250, 0, 2500] },
				{ type: "spawn", func: "item", args: [89141, 144, 250, 2250, 1750] },
				{ type: "spawn", func: "point", args: [810, 144, 250, 2250, 1750] },
				{ type: "spawn", func: "item", args: [89141, 216, 250, 2250, 1750] },
				{ type: "spawn", func: "point", args: [810, 216, 250, 2250, 1750] }
			]);
		} else if (type == 1) {
			handlers.event([
				{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 16, 175, 0, 4000] },
				{ type: "spawn", func: "item", args: [89141, 0, 250, 0, 2500] }, // Front
				{ type: "spawn", func: "point", args: [810, 0, 250, 0, 2500] },
				{ type: "spawn", func: "item", args: [89141, 36, 250, 2250, 1750] },
				{ type: "spawn", func: "point", args: [810, 36, 250, 2250, 1750] },
				{ type: "spawn", func: "item", args: [89141, -36, 250, 2250, 1750] },
				{ type: "spawn", func: "point", args: [810, -36, 250, 2250, 1750] },
				{ type: "spawn", func: "item", args: [89141, 180, 250, 2250, 1750] }, // Back
				{ type: "spawn", func: "point", args: [810, 180, 250, 2250, 1750] },
				{ type: "spawn", func: "item", args: [89141, 144, 250, 0, 2500] },
				{ type: "spawn", func: "point", args: [810, 144, 250, 0, 2500] },
				{ type: "spawn", func: "item", args: [89141, 216, 250, 0, 2500] },
				{ type: "spawn", func: "point", args: [810, 216, 250, 0, 2500] }
			]);
		}
	}

	function boss7_message_event(id) {
		switch (id) {
			// Lakan has noticed you.
			case 703:
				if (!boss7_hp_49) { handlers.text({ sub_type: "notification", message: "Debuffs > Circles > Bombs", message_ES: "Debuffs > Círculos > Bombas", message_PT: "Debuffs > Círculos > Bombas" }); } else { handlers.text({ sub_type: "notification", message: "Debuffs > Bombs > Circles", message_ES: "Debuffs > Bombas > Círculos", message_PT: "Debuffs > Bombas > Círculos" }); }
				break;
			// Lakan is trying to take you on (one-1) at a time.
			case 704:
				if (!boss7_hp_49) { handlers.text({ sub_type: "notification", message: "Circles > Bombs > Debuffs", message_ES: "Círculos > Bombas > Debuffs", message_PT: "Círculos > Bombas > Debuffs" }); } else { handlers.text({ sub_type: "notification", message: "Circles > Debuffs > Bombs", message_ES: "Debuffs > Bombas > Círculos", message_PT: "Debuffs > Bombas > Círculos" }); }
				break;
			// Lakan intends to kill all of you at once.
			case 705:
				if (!boss7_hp_49) { handlers.text({ sub_type: "notification", message: "Bombs > Debuffs > Circles", message_ES: "Bombas > Debuffs > Círculos", message_PT: "Bombas > Debuffs > Círculos" }); } else { handlers.text({ sub_type: "notification", message: "Bombs > Circles > Debuffs", message_ES: "Debuffs > Bombas > Círculos", message_PT: "Debuffs > Bombas > Círculos" }); }
				break;
		}
	}

	function enhanced_text(sub_type, message, delay, ent) {
		const messages_ES = { "Dodge": "Iframe" }; const messages_PT = { "Dodge": "Iframe" }; handlers.text({ sub_type, message, message_ES: messages_ES[message] || message, message_PT: messages_PT[message] || message, delay });
	}

	// for manaya

	const mech_messages = {
		1: { message: "1 (White)", message_ES: "1 (Blanco)", message_PT: "1 (Branco)" },
		2: { message: "2 (Green)", message_ES: "2 (Verde)", message_PT: "2 (Verde)" },
		3: { message: "3 (Red)", message_ES: "3 (Rojo)", message_PT: "3 (Vermelho)" },
		4: { message: "4 (Blue)", message_ES: "4 (Azul)", message_PT: "4 (Azul)" }
	};

	function debuff_text() {
		if (debuff_list.length === 0) return;

		if (type == 0) debuff_list.push(debuff_list.shift()); // Normal
		else debuff_list.unshift(debuff_list.pop()); // Reverse

		handlers.event([
			{ type: "text", sub_type: "message", message: mech_messages[debuff_list[0]].message, message_ES: mech_messages[debuff_list[0]].message_ES, message_PT: mech_messages[debuff_list[0]].message_PT },
			{ type: "text", sub_type: "notification", message: mech_messages[debuff_list[0]].message, message_ES: mech_messages[debuff_list[0]].message_ES, message_PT: mech_messages[debuff_list[0]].message_PT, speech: false }
		]);
	}

	function debuff_event(id) {
		if (id == 1) debuff_list = [1, 2, 3, 4]; // Greedy Thoughts #White
		else if (id == 2) debuff_list = [2, 3, 4, 1]; // Hateful Thoughts #Green
		else if (id == 3) debuff_list = [3, 4, 1, 2]; // Desperate Thoughts #Red
		else if (id == 4) debuff_list = [4, 1, 2, 3]; // Dreadful Thoughts #Blue

		debuff_text();
	}

	return {
		// Argog
		"h-2804-1000-30": [{ type: "text", sub_type: "message", message: "Reveal soon...", message_ES: "Revelar Pronto...", message_PT: "Revelar em Breve..." }],
		"s-2804-1000-201-0": [
			{ type: "text", sub_type: "message", message: "Stun (Pushback)", message_ES: "Stun (Empuje)", message_PT: "Stun (Empurrão)" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 1000, message: "1" },
			{ type: "text", sub_type: "message", delay: 4000, message: "Dodge!", message_ES: "Iframe!", message_PT: "Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 5000] }
		],
		"s-2804-1000-107-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Golpes", message_PT: "Múltiplos Golpes" }],
		"s-2804-1000-112-0": [{ type: "text", sub_type: "message", message: "Target", message_ES: "Objetivo", message_PT: "Alvo" }],
		"s-2804-1000-115-0": [
			{ type: "text", sub_type: "message", message: "Incoming Stun", message_ES: "Stun Entrante", message_PT: "Stun Chegando" },
			{ type: "text", sub_type: "message", delay: 1600, message: "Dodge!", message_ES: "Iframe!", message_PT: "Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-2804-1000-118-0": [{ type: "text", sub_type: "message", message: "Scratching", message_ES: "Arañazo", message_PT: "Arranhão" }],
		"s-2804-1000-164-0": [{ type: "text", sub_type: "message", message: "Counter Attack (bleed)", message_ES: "Contraataque (Sangrado)", message_PT: "Contra-Ataque (Sangramento)" }],
		"s-2804-1000-167-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Golpes", message_PT: "Múltiplos Golpes" }],
		"s-2804-1000-172-0": "s-2804-1000-112-0",
		"s-2804-1000-301-0": "s-2804-1000-112-0",
		"s-2804-1000-302-0": "s-2804-1000-112-0",
		"s-2804-1000-170-0": [
			{ type: "text", sub_type: "message", message: "Turn + Pushback", message_ES: "Girar + Empuje", message_PT: "Girar + Empurrão" },
			{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empuje", message_PT: "Empurrão", delay: 2700 }
		],
		"s-2804-1000-175-0": [
			{ type: "text", sub_type: "message", message: "Incoming Stun", message_ES: "Stun Entrante", message_PT: "Stun Chegando" },
			{ type: "text", sub_type: "message", delay: 1600, message: "Dodge!", message_ES: "Iframe!", message_PT: "Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-2804-1000-177-0": [{ type: "text", sub_type: "message", message: "Backstab", message_ES: "Apuñalar Atrás", message_PT: "Facada Atrás" }],
		"s-2804-1000-178-0": [{ type: "text", sub_type: "message", message: "Scratching (bleed)", message_ES: "Arañazo (Sangrado)", message_PT: "Arranhão (Sangramento)" }],
		"s-2804-1000-203-0": [{ type: "text", sub_type: "message", message: "Phantom x3 (bleed)", message_ES: "Fantasma x3 (Sangrado)", message_PT: "Fantasma x3 (Sangramento)" }],
		"s-2804-1000-207-0": [{ type: "text", sub_type: "message", message: "Phantom x5 (bleed)", message_ES: "Fantasma x5 (Sangrado)", message_PT: "Fantasma x5 (Sangramento)" }],
		"s-2804-1000-213-0": [{ type: "text", sub_type: "message", message: "Reveal | Phantom (bleed)", message_ES: "Revelar | Fantasma (Sangrado)", message_PT: "Revelar | Fantasma (Sangramento)" }],
		"s-2804-1000-212-0": [{ type: "text", sub_type: "message", message: "Flash", message_ES: "Flash", message_PT: "Flash" }],

		// AQ boss
		"nd-2804-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-2804-2000-164-0": [{ type: "text", sub_type: "message", message: "Counter Attack (bleed)", message_ES: "Contraataque (Sangrado)", message_PT: "Contra-Ataque (Sangramento)" }],
		"s-2804-2000-166-0": [{ type: "text", sub_type: "message", message: "Turn-back", message_ES: "Girar hacia Atrás", message_PT: "Virar para Atrás" }],
		"s-2804-2000-175-0": [
			{ type: "text", sub_type: "message", message: "Incoming Stun", message_ES: "Stun Entrante", message_PT: "Stun Chegando" },
			{ type: "text", sub_type: "message", delay: 1500, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }
		],
		"s-2804-2000-178-0": [{ type: "text", sub_type: "message", message: "Scratching (bleed)", message_ES: "Arañazo (Sangrado)", message_PT: "Arranhão (Sangramento)" }],
		"s-2804-2000-214-0": [
			{ type: "text", sub_type: "message", message: "Rock Throw", message_ES: "Lanzar Roca", message_PT: "Lançamento de Pedra" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 4000] }
		],
		"s-2804-2000-182-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "Derribar", message_PT: "Derrubar" }],
		"s-2804-2000-185-0": [
			{ type: "text", sub_type: "message", message: "Big jump (Kaia's Shield)", message_ES: "Salto Grande (Kaia)", message_PT: "Salto Grande (Kaia)", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Big jump (Thrall of Protection)", message_ES: "Salto Grande (Thrall)", message_PT: "Salto Grande (Thrall)", class_position: "mystic" },
			{ type: "text", sub_type: "alert", delay: 110000, message: "Big jump soon...", message_ES: "Salto Grande Pronto...", message_PT: "Salto Grande em Breve...", class_position: "heal" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 500, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 750, 0, 6000] }
		],
		"s-2804-2000-202-0": [
			{ type: "text", sub_type: "message", message: "Backstab", message_ES: "Apuñalar Atrás", message_PT: "Facada Atrás" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 180, 500, 0, 1000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 180, 500, 0, 1000] }
		],
		"s-2804-2000-204-0": [{ type: "text", sub_type: "message", message: "Phantom x5 (bleed)", message_ES: "Fantasma x5 (Sangrado)", message_PT: "Fantasma x5 (Sangramento)" }],
		"s-2804-2000-322-0": [{ type: "text", sub_type: "message", message: "Flash (bleed)", message_ES: "Flash (Sangrado)", message_PT: "Flash (Sangramento)" }],
		"s-2804-2000-207-0": [{ type: "text", sub_type: "message", message: "Phantom x5 (bleed)", message_ES: "Fantasma x5 (Sangrado)", message_PT: "Fantasma x5 (Sangramento)" }],
		"s-2804-2000-212-0": [{ type: "text", sub_type: "message", message: "Flash (bleed)", message_ES: "Flash (Sangrado)", message_PT: "Flash (Sangramento)" }],

		// FA GOOFNA
		"h-2804-3000-89": [{ type: "func", func: boss_hp_event, args: [89] }],
		"h-2804-3000-59": [{ type: "func", func: boss_hp_event, args: [59] }],
		"h-2804-3000-29": [{ type: "func", func: boss_hp_event, args: [29] }],
		"h-2804-3000-74": [{ type: "func", func: boss_hp_event, args: [74] }],
		"h-2804-3000-39": [{ type: "func", func: boss_hp_event, args: [39] }],

		"s-2804-1001-255-0": [{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1000, 0, 5000] }],
		"s-2804-1002-256-0": [{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1000, 0, 5000] }],
		"s-2804-1003-257-0": [{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1000, 0, 5000] }],
		"s-2804-1004-258-0": [{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1000, 0, 5000] }],

		"s-2804-3000-108-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Strike (Slow)", message_ES: "Golpe (Lento)", message_PT: "Golpe (Lento)" }],
		"s-2804-1000-355-0": [{ type: "text", sub_type: "message", message: "Eviscerate", message_ES: "Eviscerar", message_PT: "Eviscerar" }],
		"s-2804-3000-135-0": [{ type: "text", sub_type: "message", message: "Strike (Slow)", message_ES: "Golpe (Lento)", message_PT: "Golpe (Lento)" }],
		"s-2804-3000-111-0": [{ type: "text", sub_type: "message", message: "Stun | Strike", message_ES: "Stun | Golpe", message_PT: "Stun | Golpe" }],
		"s-2804-3000-112-0": [{ type: "text", sub_type: "message", message: "Back Jump | Strike", message_ES: "Salto Atrás | Golpe", message_PT: "Salto Atrás | Golpe" }],

		// Jump
		"s-2804-3000-116-0": [
			{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" }
		],
		"s-2804-3000-116-1": [
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" },
			{ type: "spawn", func: "circle", args: [true, 912, 0, 110, 8, 480, 0, 1000] }
		],

		// 3 оборота -> Jump (145 -> 139 -> 140)
		"s-2804-3000-145-0": [{ type: "text", sub_type: "message", message: "3x360 | Jump", message_ES: "3x360 | Salto", message_PT: "3x360 | Salto" }],
		"s-2804-3000-139-0": [{ type: "text", sub_type: "message", delay: 1000, message: "Jump", message_ES: "Salto", message_PT: "Salto" }],
		"s-2804-3000-140-0": [
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 110, 8, 480, 0, 1000] }
		],

		// 109 -> 402 -> 130
		"s-2804-3000-109-0": [{ type: "text", sub_type: "message", message: "Forward Jump", message_ES: "Salto hacia Adelante", message_PT: "Salto para Frente" }],
		"s-2804-3000-402-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" }],

		// 136 -> 144 -> 130
		"s-2804-3000-136-0": [{ type: "text", sub_type: "message", message: "2x360 | Strike", message_ES: "2x360 | Golpe", message_PT: "2x360 | Golpe" }],
		"s-2804-3000-144-0": [{ type: "text", sub_type: "message", message: "Strike", message_ES: "Golpe", message_PT: "Golpe" }],

		// 134 -> 147
		"s-2804-3000-134-0": [{ type: "text", sub_type: "message", message: "Turn around | Back", message_ES: "Girar | Atrás", message_PT: "Virar | Atrás" }],
		"s-2804-3000-134-1": [{ type: "text", sub_type: "message", message: "Back", message_ES: "ATRÁS", message_PT: "ATRÁS" }],
		"s-2804-3000-147-0": [{ type: "text", sub_type: "message", message: "Strike", message_ES: "Golpe", message_PT: "Golpe" }],

		// 142 -> 143 114 130
		"s-2804-3000-142-0": [{ type: "text", sub_type: "message", message: "2x360 | Strike", message_ES: "2x360 | Golpe", message_PT: "2x360 | Golpe" }],
		"s-2804-3000-143-0": [{ type: "text", sub_type: "message", message: "Strike", message_ES: "Golpe", message_PT: "Golpe" }],

		"s-2804-3000-141-0": [{ type: "text", sub_type: "message", message: "2x360 | Eviscerate", message_ES: "2x360 | Eviscerar", message_PT: "2x360 | Eviscerar" }],
		"s-2804-3000-146-0": [{ type: "text", sub_type: "message", message: "Eviscerate | Strike", message_ES: "Eviscerar | Ataque", message_PT: "Eviscerar | Ataque" }],

		// Стяжка -> Donutи (350 -> 302)
		"s-2804-3000-350-0": [
			{ type: "text", sub_type: "message", message: "Red: Donuts (Out > In)", message_ES: "Rojo: Donuts (SALIR > ENTRAR)", message_PT: "Vermelho: Donuts (SAIR > ENTRAR)" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 240, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 480, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 3, 950, 0, 5000] },
			{ type: "spawn", func: "item", args: [HIGHLIGHT_ITEM, 0, 0, 3800, 1000] },
			{ type: "text", sub_type: "message", delay: 3800, message: "In", message_ES: "ENTRAR", message_PT: "ENTRAR" },
			{ type: "spawn", func: "marker", args: [false, 180, 100, 3800, 1000, false, ["CENTER", "IN"]] },
			{ type: "spawn", func: "marker", args: [false, 0, 100, 3800, 1000, false, ["CENTER", "IN"]] },
			{ type: "spawn", func: "marker", args: [false, 90, 100, 3800, 1000, false, ["CENTER", "IN"]] },
			{ type: "spawn", func: "marker", args: [false, 270, 100, 3800, 1000, false, ["CENTER", "IN"]] },
			{ type: "text", sub_type: "alert", delay: 58000, message: "Mechanics soon...", message_ES: "Mecanica Pronto...", message_PT: "Mecanica em Breve..." }
		],
		// Стяжка -> волна (357 -> 110)
		"s-2804-3000-357-0": [
			{ type: "text", sub_type: "message", message: "Purple: Get Out", message_ES: "Morado: SALIR", message_PT: "Roxo: SAIR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 20, 500, 2000, 5000] },
			{ type: "text", sub_type: "alert", delay: 58000, message: "Mechanics soon...", message_ES: "Mecanica Pronto...", message_PT: "Mecanica em Breve..." }
		],

		"s-2804-1000-114-0": [{ type: "text", sub_type: "message", message: "Eviscerate (slow)", message_ES: "Eviscerar (Lento)", message_PT: "Eviscerar (Lento)" }],
		"s-2804-1000-130-0": [{ type: "text", sub_type: "message", message: "Target", message_ES: "Objetivo", message_PT: "Alvo" }],
		"s-2804-3000-151-0": [{ type: "text", sub_type: "message", message: "Back teleport | Strike", message_ES: "Teletransporte Atrás | Golpe", message_PT: "Teleporte Atrás | Golpe" }],
		"s-2804-3000-149-1": [{ type: "text", sub_type: "message", message: "Back teleport (Target)", message_ES: "Teletransporte Atrás (Objetivo)", message_PT: "Teleporte Atrás (Alvo)" }],
		"s-2804-3000-117-0": [{ type: "text", sub_type: "message", message: "Teleport (Target)", message_ES: "Teletransporte (Objetivo)", message_PT: "Teleporte (Alvo)" }],
		"s-2804-3000-356-0": [{ type: "text", sub_type: "message", message: "Teleport (Target)", message_ES: "Teletransporte (Objetivo)", message_PT: "Teleporte (Alvo)" }],
		"s-2804-3000-148-1": [{ type: "text", sub_type: "message", message: "Teleport (Target)", message_ES: "Teletransporte (Objetivo)", message_PT: "Teleporte (Alvo)" }],

		"s-2804-3000-351-0": [
			{ type: "text", sub_type: "message", message: "Shield!", message_ES: "Escudo!", message_PT: "Escudo!" },
			{ type: "func", func: shield_event }
		],
		"s-2804-3000-401-0": [
			{ type: "text", sub_type: "message", message: "30% AOE!", message_ES: "30% AOE!", message_PT: "30% AOE!" },
			{ type: "text", sub_type: "message", delay: 1600, message: "Dodge!", message_ES: "Iframe!", message_PT: "Iframe!" }
		],

		// Antaroth
		"s-2804-4000-104-0": [{ type: "func", func: thirdboss_backattack_event }],
		"s-2804-4000-105-0": [{ type: "text", sub_type: "message", message: "Target Cage", message_ES: "Jaula al Objetivo", message_PT: "Jaula no Alvo" }],
		"s-2804-4000-119-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 0, 2000] }],
		"s-2804-4000-107-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_ES: "Salto Aleatorio", message_PT: "Salto Aleatório" }],
		"s-2804-4000-107-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 85, 12, 250, 0, 2000] }],
		"s-2804-4000-109-0": [
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
		"s-2804-4000-111-0": [
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
		"s-2804-4000-113-0": [{ type: "text", sub_type: "message", message: "Front | Back Stun", message_ES: "Stun Frente | Atrás", message_PT: "Stun Frente | Atrás" }],
		"s-2804-4000-115-0": [{ type: "text", sub_type: "message", message: "Spin Attack", message_ES: "Ataque Giratorio", message_PT: "Ataque Giratório" }],
		"s-2804-4000-120-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Slow)", message_ES: "Rayo de Energía (Lento)", message_PT: "Raio de Energia (Lento)" }],
		"s-2804-4000-204-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Fast)", message_ES: "Rayo de Energía (Rápido)", message_PT: "Raio de Energia (Rápido)" }],
		"s-2804-4000-206-0": [{ type: "text", sub_type: "message", message: "Orbs", message_ES: "Orbes", message_PT: "Orbes" }],
		"s-2804-4000-309-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AOE", message_PT: "AOE" }],
		"s-2804-4000-314-0": [{ type: "text", sub_type: "message", message: "Puddles", message_ES: "Charcos", message_PT: "Poças" }],
		"s-2804-4000-315-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empuje", message_PT: "Empurrão" }],
		"s-2804-4000-317-0": [{ type: "func", func: thirdboss_cage_event, args: [false], delay: 1000 }],
		"s-2804-4000-318-0": [{ type: "func", func: thirdboss_cage_event, args: [true], delay: 1000 }],
		"s-2804-4000-400-0": [{ type: "text", sub_type: "message", message: "Clones: Beam", message_ES: "Clones: Rayo", message_PT: "Clones: Raio" }],
		"s-2804-4000-401-0": [{ type: "text", sub_type: "message", message: "Clones: Spin", message_ES: "Clones: Giro", message_PT: "Clones: Giro" }],
		"s-2804-4000-410-0": [{ type: "text", sub_type: "message", message: "Cage", message_ES: "Jaula", message_PT: "Jaula" }],
		"ae-0-0-98043037": [{ type: "func", func: () => thirdboss_colour_to_use = "red" }],
		"ae-0-0-98043038": [{ type: "func", func: () => thirdboss_colour_to_use = "yellow" }],
		"ae-0-0-98043039": [{ type: "func", func: () => thirdboss_colour_to_use = "blue" }],

		// GVH 2ND BOSS
		"ns-2804-6000": [{ type: "func", func: () => boss = null }],
		"am-2804-280426-28040224": [
			{ type: "func", func: () => boss = 1 },
			{ type: "text", delay: 52000, sub_type: "notification", message: "True Debuff in 5 seconds", message_ES: "Debuff Verdadero en 5s", message_PT: "Debuff Verdadeiro em 5s" },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 1, func: () => boss = null },
				{ type: "text", check_func: () => boss === 1, sub_type: "message", message: "Debuff reload", message_ES: "Debuff Recargar", message_PT: "Debuff Recarregar" }
			] }
		],
		"am-2804-6000-28040220": [
			{ type: "func", func: () => { boss = 0; } },
			{ type: "text", delay: 52000, sub_type: "notification", message: "False Debuff in 5 seconds", message_ES: "Debuff Falso en 5s", message_PT: "Debuff Falso em 5s" },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 0, func: () => boss = null },
				{ type: "text", check_func: () => boss === 0, sub_type: "message", message: "Debuff reload", message_ES: "Debuff Recargar", message_PT: "Debuff Recarregar" }
			] }
		],
		"am-2804-280421-28040222": [{ type: "text", sub_type: "notification", message: "Spike in 5 seconds", message_ES: "Púa en 5s", message_PT: "Espinho em 5s" }],
		"h-2804-6000-81": [{ type: "text", sub_type: "message", message: "80%", message_ES: "80%", message_PT: "80%" }],
		"h-2804-6000-76": [{ type: "text", sub_type: "message", message: "75%", message_ES: "70%", message_PT: "75%" }],
		"s-2804-6000-108-0": [{ type: "text", sub_type: "message", message: "Back Attack!", message_ES: "¡Ataque Atrás!", message_PT: "Ataque Atrás!" }],
		"s-2804-6000-150-0": [{ type: "text", sub_type: "message", message: "Phantom", message_ES: "Fantasma", message_PT: "Fantasma" }],
		"s-2804-6000-228-0": [
			{ type: "text", sub_type: "message", message: "Team Up", message_ES: "Juntar Time", message_PT: "Juntar Time" },
			{ type: "text", sub_type: "message", delay: 3500, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }
		],
		"s-2804-6000-230-0": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE", message_PT: "AOE" }],
		"s-2804-6000-231-0": [
			{ type: "text", sub_type: "message", message: "Out Safe", message_ES: "Salir Seguro", message_PT: "Sair Seguro" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-2804-6000-232-0": [
			{ type: "text", sub_type: "message", message: "In Safe", message_ES: "Entrar Seguro", message_PT: "Entrar Seguro" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		],
		"s-2804-6000-236-0": [{ type: "text", sub_type: "message", message: "Counter Attack (Bait)", message_ES: "Repelir a Frente (Bait)", message_PT: "Repelir a Frente (Bait)" }],
		"s-2804-6000-238-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_ES: "SALIR > ENTRAR", message_PT: "SAIR > ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-2804-6000-239-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_ES: "ENTRAR > SALIR", message_PT: "ENTRAR > SAIR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		],

		// Lakan
		"nd-2804-7000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: () => boss7_hp_49 = false }
		],
		"h-2804-7000-49": [{ type: "func", func: () => boss7_hp_49 = true }],
		"s-2804-7000-103-0": [{ type: "text", sub_type: "message", message: "Back + Front", message_ES: "Atrás | Frente Ataque", message_PT: "Atrás | Frente Ataque" }],
		"s-2804-7000-110-0": [{ type: "text", sub_type: "message", message: "Claw", message_ES: "Garra", message_PT: "Garra" }],
		"s-2804-7000-110-1": [{ type: "func", func: enhanced_text, args: ["alert", "Dodge", 1100] }],
		"s-2804-7000-113-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait", message_PT: "Bait" }],
		"s-2804-7000-135-0": [{ type: "text", sub_type: "message", message: "In", message_ES: "ENTRAR", message_PT: "ENTRAR" }],
		"s-2804-7000-136-0": [{ type: "text", sub_type: "message", message: "Claw", message_ES: "Garra", message_PT: "Garra" }],
		"s-2804-7000-136-1": [{ type: "func", func: enhanced_text, args: ["alert", "Dodge", 1100] }],
		"s-2804-7000-138-0": [{ type: "spawn", func: "circle", args: [false, 912, 0, 15, 10, 250, 0, 6000] }],
		"s-2804-7000-144-0": [{ type: "text", sub_type: "message", message: "Out", message_ES: "SALIR", message_PT: "SAIR" }],
		"s-2804-7000-145-0": [{ type: "text", sub_type: "message", message: "In", message_ES: "ENTRAR", message_PT: "ENTRAR" }],
		"s-2804-7000-151-0": [
			{ type: "text", sub_type: "message", message: "Attention Stun", message_ES: "Stun", message_PT: "Atenção Stun" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 100, 18, 210, 0, 3000] }
		],
		"s-2804-7000-152-0": [
			{ type: "text", sub_type: "message", message: "Stun + Back", message_ES: "Stun + Atrás", message_PT: "Stun + Atrás" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 100, 18, 210, 0, 3000] }
		],
		"s-2804-7000-154-0": [{ type: "text", sub_type: "message", message: "Out > In", message_ES: "SALIR > ENTRAR", message_PT: "SAIR > ENTRAR" }],
		"s-2804-7000-155-0": [{ type: "text", sub_type: "message", message: "In > Out", message_ES: "ENTRAR > SALIR", message_PT: "ENTRAR > SAIR" }],
		"s-2804-7000-240-0": [
			{ type: "text", sub_type: "message", message: "Donuts (Out > In > Out)", message_ES: "Donuts (FUERA > DENTRO > FUERA)", message_PT: "Donuts (FORA > DENTRO > FORA)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 50, 18, 210, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 50, 10, 360, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 50, 8, 520, 0, 5000] }
		],
		"s-2804-7000-301-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + Cleanse", message_ES: "Bombas (Reunirse + Cleanse)", message_PT: "Bombas Juntar + Cleanse" }],
		"s-2804-7000-302-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + No cleanse", message_ES: "(Bombas) Juntar + No cleanse", message_PT: "(Bombas) Gather + No cleanse" }],
		"s-2804-7000-401-0": [
			{ type: "text", sub_type: "message", message: "Inward wave", message_ES: "Ola Hacia Adentro", message_PT: "Onda Para Dentro" },
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_ES: "Plague of Exhaustion", message_PT: "Plague of Exhaustion", class_position: "priest", delay: 1000 },
			{ type: "text", sub_type: "message", message: "Regression", message_ES: "Regresión", message_PT: "Regressão", class_position: "mystic", delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 16, 175, 2000, 5000] }
		],
		"s-2804-7000-402-0": [
			{ type: "text", sub_type: "message", message: "Inward wave", message_ES: "Ola Hacia Adentro", message_PT: "Onda Para Dentro" },
			{ type: "text", sub_type: "message", message: "Sleep Boss", message_ES: "Dormir Boss", message_PT: "Dormir Boss", class_position: "heal", delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 16, 175, 2000, 5000] }
		],
		"s-2804-7000-901-0": [{ type: "func", func: boss7_star_event, args: ["(Debuffs) Closest|(Дебаффы) Ближайший", 0] }],
		"s-2804-7000-902-0": [{ type: "func", func: boss7_star_event, args: ["(Debuffs) Farthest|(Дебаффы) Дальний", 1] }],
		"s-2804-7000-903-0": [{ type: "func", func: boss7_star_event, args: ["(Bombs) Gather + Cleanse|(Бомбы) Собраться + Очистка", 0] }],
		"s-2804-7000-904-0": [{ type: "func", func: boss7_star_event, args: ["(Bombs) Gather + No cleanse|(Бомбы) Собраться + Без очистки", 1] }],
		"s-2804-7000-905-0": [{ type: "func", func: boss7_star_event, args: ["(Circles) Spread|(Круги) Разойтись", 0] }],
		"s-2804-7000-906-0": [{ type: "func", func: boss7_star_event, args: ["(Circles) Gather|(Круги) Собраться", 1] }],
		"dm-0-0-90340703": [{ type: "func", func: boss7_message_event, args: [703] }],
		"dm-0-0-90340704": [{ type: "func", func: boss7_message_event, args: [704] }],
		"dm-0-0-90340705": [{ type: "func", func: boss7_message_event, args: [705] }],

		// Darkan
		"ns-2804-8000": [
			{ type: "func", func: () => is_ninth_floor = true },
			{ type: "func", func: ninth_triples_event },
			{ type: "func", func: ninth_secondary_event }
		],
		"nd-2804-8000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: reset_backevent },
			{ type: "func", func: () => boss_data = null }
		],
		"h-2804-8000-99": [{ type: "func", func: () => is_ninth_floor = true }],
		"h-2804-8000-49": [
			{ type: "text", sub_type: "message", message: "49%", message_ES: "49%", message_PT: "49%" },
			{ type: "func", func: () => ninth_floor_fifty = true },
			{ type: "text", sub_type: "notification", message: "Triples Soon!", message_ES: "¡Triples Pronto!", message_PT: "Triplos em Breve!", delay: 1000 }
		],
		"dm-0-0-9034901": [
			{ type: "text", sub_type: "message", message: "Triples!", message_ES: "¡Triples!", message_PT: "Triplos!" },
			{ type: "func", func: () => ninth_triple_swipe_remaining = 3 },
			{ type: "func", func: ninth_triples_event }
		],
		"s-2804-8000-112-0": [{ type: "text", sub_type: "message", message: "Back Move", message_ES: "Movimiento hacia Atrás", message_PT: "Movimento para Atrás" }],
		"s-2804-8000-102-0": [{ type: "func", func: () => back_time = new Date() }],
		"s-2804-8000-101-0": [{ type: "func", func: boss_backattack_event }],
		"s-2804-8000-106-0": [{ type: "func", func: boss_backattack_event_new, args: [1106] }],
		"s-2804-8000-105-0": [{ type: "func", func: boss_backattack_event_new, args: [1105] }],
		"s-2804-8000-103-0": [{ type: "func", func: boss_backattack_event_new, args: [1103] }],
		"s-2804-8000-108-0": [{ type: "func", func: boss_backattack_event_new, args: [1108] }],
		"s-2804-8000-114-0": [
			{ type: "text", sub_type: "message", message: "Target Attack", message_ES: "Ataque al Objetivo", message_PT: "Ataque no Alvo" },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-2804-8000-115-0": [
			{ type: "text", sub_type: "message", message: "3", message_ES: "3", message_PT: "3" },
			{ type: "text", sub_type: "message", delay: 1000, message: "2", message_ES: "2", message_PT: "2" },
			{ type: "text", sub_type: "message", delay: 2000, message: "1", message_ES: "1", message_PT: "1" },
			{ type: "text", sub_type: "message", delay: 3200, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }
		],
		"s-2804-8000-117-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "FRENTE", message_PT: "FRENTE" }],
		"s-2804-8000-302-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE", message_PT: "AOE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 100, 6000] }
		],
		"s-2804-8000-407-0": [{ type: "func", func: ninth_new_swipe_event, args: [1407] }],
		"s-2804-8000-408-0": [{ type: "func", func: ninth_new_swipe_event, args: [1408] }],
		"s-2804-8000-303-0": [{ type: "text", sub_type: "message", message: "Spin Attack", message_ES: "Ataque Giratorio", message_PT: "Ataque Giratório" }],
		"s-2804-8000-401-0": [{ type: "func", func: ninth_old_swipe_event, args: [1401] }],
		"s-2804-8000-402-0": [{ type: "func", func: ninth_old_swipe_event, args: [1402] }],
		"s-2804-8000-301-0": [{ type: "text", sub_type: "message", message: "Scream", message_ES: "Gritar", message_PT: "Gritar" }],
		"s-2804-8000-312-0": [{ type: "text", sub_type: "message", message: "Ghost", message_ES: "Fantasma", message_PT: "Fantasma" }],

		// Bahaar
		"nd-2804-9000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-2804-9000": [
			{ type: "spawn", func: "marker", args: [false, 0, -700, 100, 60000000, false, ["Throne", "Throne Direction"]] },
			{ type: "spawn", func: "point", args: [513, 0, 800, 100, 60000000] },
			{ type: "func", func: () => print_loading = true },
			{ type: "func", func: () => print_lasers = true }
		],
		// Not enraged
		"s-2804-9000-101-0": [
			{ type: "text", sub_type: "message", message: "4 Hit Combo", message_ES: "4 Hit Combo", message_PT: "4 Hit Combo" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 195, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 3000] }
		],
		"s-2804-9000-103-0": [
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_ES: "Frente (Iframe)", message_PT: "Frente (Iframe)" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3000] }
		],
		"s-2804-9000-107-0": [{ type: "text", sub_type: "message", message: "4 Hit (3)", message_ES: "4 Hit (3)", message_PT: "4 Hit (3)" }],
		"s-2804-9000-108-0": [
			{ type: "text", sub_type: "message", message: "Back Throw", message_ES: "Martillo Atrás (Stun)", message_PT: "Martelo Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 250, 12, 300, 100, 3000] }
		],
		"s-2804-9000-111-0": [
			{ type: "text", sub_type: "message", message: "Back", message_ES: "ATRÁS", message_PT: "ATRÁS" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 1500, 2000] }
		],
		"s-2804-9000-112-0": [
			{ type: "text", sub_type: "message", message: "Perfect Defense (Fast)", message_ES: "Defesa Perfecta (Rápida)", message_PT: "Defesa Perfeita (Rápido)" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Block", message_ES: "Block", message_PT: "Block" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-2804-9000-113-0": [{ type: "text", sub_type: "message", message: "Throw (Bait)", message_ES: "Bait (Iframe)", message_PT: "Bait (Iframe)" }],
		"s-2804-9000-114-0": [
			{ type: "text", sub_type: "message", message: "Front Slam", message_ES: "Frente Slam", message_PT: "Frente Slam" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 260, 10, 320, 100, 3000] }
		],
		"s-2804-9000-115-0": [{ type: "text", sub_type: "message", delay: 1100, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }],
		"s-2804-9000-116-0": [
			{ type: "text", sub_type: "message", message: "Donuts (In)", message_ES: "Donuts (Entrar)", message_PT: "Donuts (Entrar)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 290, 100, 2000] }
		],
		"s-2804-9000-116-1": [
			{ type: "text", sub_type: "message", message: "Out > In", message_ES: "SALIR > ENTRAR", message_PT: "SAIR > ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 290, 100, 4000] }
		],
		"s-2804-9000-117-0": [{ type: "text", sub_type: "message", message: "Jump (Bait)", message_ES: "Salto (Bait)", message_PT: "Pular (Bait)" }],
		"s-2804-9000-118-0": [{ type: "text", sub_type: "message", message: "Jump (Tank)", message_ES: "Salto (Tank)", message_PT: "Pular (Tank)" }],
		"s-2804-9000-118-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 400, 12, 300, 100, 2000] }],
		"s-2804-9000-119-0": [
			{ type: "text", sub_type: "message", message: "Left Swipe", message_ES: "Deslizar Izquierda", message_PT: "Deslizar Esquerda" },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 100, 2000, true, null] }
		],
		"s-2804-9000-120-0": [
			{ type: "text", sub_type: "message", message: "Right Swipe", message_ES: "Deslizar Derecha", message_PT: "Deslizar Direita" },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 100, 2000, true, null] }
		],
		"s-2804-9000-121-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left)", message_ES: "Olas (IZQUIERDA)", message_PT: "Ondas (ESQUERDA)" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-2804-9000-122-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left) 3nd fast", message_ES: "Olas (IZQUIERDA) 3nd Rapido", message_PT: "Ondas (ESQUERDA) 3nd Rapido" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-2804-9000-123-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left) 2nd fast", message_ES: "Olas (IZQUIERDA) 2nd Rapido", message_PT: "Ondas (ESQUERDA) 2nd Rapido" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2500, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2500, false, ["safe", "safe"]] }
		],
		"s-2804-9000-125-0": [
			{ type: "text", sub_type: "message", message: "Front | Right Scratch", message_ES: "Frente | Derecha Rasguno", message_PT: "Frente | Direita Arranhão" },
			{ type: "text", sub_type: "message", delay: 1750, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 2000] },
			{ type: "spawn", func: "vector", args: [553, 60, 290, 175, 800, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 60, 290, -5, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 290, 95, -5, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 290, 95, 175, 800, 0, 3500] }
		],
		"s-2804-9000-131-0": [
			{ type: "text", sub_type: "message", message: "Front | Left Scratch", message_ES: "Frente | Izquierda Rasguno", message_PT: "Frente | Esquerda Arranhão" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" },
			{ type: "spawn", func: "circle", args: [false, 553, 358, 340, 6, 630, 100, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 186, 800, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 186, 800, 0, 3500] }
		],
		"s-2804-9000-135-0": [
			{ type: "text", sub_type: "message", message: "Perfect Defense", message_ES: "Defesa Perfecta", message_PT: "Defesa Perfeita" },
			{ type: "text", sub_type: "message", delay: 800, message: "Block", message_ES: "Block", message_PT: "Block" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-2804-9000-137-0": [
			{ type: "text", sub_type: "message", message: "Hammer back", message_ES: "Martillo Atrás", message_PT: "Martelo Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-2804-9000-138-0": [{ type: "text", sub_type: "message", delay: 900, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }],
		"s-2804-9000-139-0": [{ type: "text", sub_type: "message", delay: 200, message: "Dodge!", message_ES: "Iframe!", message_PT: "Iframe!" }],
		"s-2804-9000-140-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right)", message_ES: "Olas (DERECHA)", message_PT: "Ondas (DIREITA)" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-2804-9000-141-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right) 3nd fast", message_ES: "Olas (DERECHA) 3nd Rapido", message_PT: "Ondas (DIREITA) 3nd Rapido" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-2804-9000-142-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right) 2nd fast", message_ES: "Olas (DERECHA) 2nd Rapido", message_PT: "Ondas (DIREITA) 2nd Rapido" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2500, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2500, false, ["safe", "safe"]] }
		],
		"s-2804-9000-307-0": [
			{ type: "text", sub_type: "message", message: "!", message_ES: "!", message_PT: "!" },
			{ type: "text", sub_type: "message", delay: 20000, message: "Last aerolite", message_ES: "ULTIMO AEROLITE", message_PT: "ULTIMO AEROLITE" }
		],
		"s-2804-9000-308-0": [{ type: "text", sub_type: "message", message: "Stun (1)", message_ES: "Stun (1)", message_PT: "Stun (1)" }],
		"s-2804-9000-309-0": [{ type: "text", sub_type: "message", message: "Stun (2)", message_ES: "Stun (2)", message_PT: "Stun (2)" }],
		"s-2804-9000-310-0": [{ type: "text", sub_type: "message", message: "Stun (3)", message_ES: "Stun (3)", message_PT: "Stun (3)" }],
		"s-2804-9000-311-0": [
			{ type: "text", sub_type: "message", message: "Wrath (Kaia)", message_ES: "IRA (Kaia)", message_PT: "IRA (Kaia)" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],
		"s-2804-9000-312-0": [
			{ type: "text", sub_type: "message", message: "Wrath (Kaia)", message_ES: "IRA (Kaia)", message_PT: "IRA (Kaia)" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],
		// Enraged
		/*
		"s-2804-9000-101-0": "s-2804-2000-1101-0",
		"s-2804-9000-103-0": "s-2804-2000-1103-0",
		"s-2804-9000-107-0": "s-2804-2000-1107-0",
		"s-2804-9000-108-0": "s-2804-2000-1108-0",
		"s-2804-9000-111-0": "s-2804-2000-1111-0",
		"s-2804-9000-112-0": [
			{ type: "text", sub_type: "message", delay: 1000, message: "Perfect Defense x2 (Slow)", message_ES: "Defesa Perfecta x2 (Lenta)", message_PT: "Defesa Perfeita  x2 (Lenta)" },
			{ type: "text", sub_type: "message", delay: 2400, message: "Block", message_ES: "Block", message_PT: "Block" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 4000] }
		],
		"s-2804-9000-115-0": [{ type: "text", sub_type: "message", delay: 100, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }],
		"s-2804-9000-135-0": [
			{ type: "text", sub_type: "message", message: "Perfect Defense x2", message_ES: "Defesa Perfecta x2", message_PT: "Defesa Perfeita x2" },
			{ type: "text", sub_type: "message", delay: 800, message: "Block", message_ES: "Block", message_PT: "Block" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 4000] }
		],
		"s-2804-9000-138-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }],
		*/
		"s-2804-2500-201-0": [
			{ type: "event", check_func: () => print_loading, args: [
				{ type: "text", sub_type: "alert", message: "Loading lasers...", message_ES: "Cargando Lasers...", message_PT: "Carregando Lasers..." },
				{ type: "func", func: () => print_loading = false }
			] }
		],
		"s-2804-2500-305-0": [
			{ type: "event", check_func: () => print_lasers, args: [
				{ type: "text", sub_type: "message", message: "Laser", message_ES: "Láser", message_PT: "Laser" },
				{ type: "func", func: () => print_lasers = false },
				{ type: "func", func: () => print_lasers = true, delay: 4000 }
			] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 4000] }
		],
		"ab-2804-9000-90442303": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "Plague/Regress", message_PT: "Plague/Regress" }],
		"ab-2804-9000-90442304": [
			{ type: "text", sub_type: "notification", message: "Stun", message_ES: "Stun", message_PT: "Stun", speech: false },
			{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun" }
		],

		// Manaya
		"ns-2804-10000": [
			{ type: "func", func: () => debuff_list = [] }
		],
		"nd-2804-10000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-2804-10000-40": [{ type: "text", sub_type: "message", message: "40%", message_ES: "40%", message_PT: "40%" }],
		"h-2804-10000-50": [{ type: "text", sub_type: "message", message: "50%", message_ES: "50%", message_PT: "50%" }],
		"h-2804-10000-80": [{ type: "text", sub_type: "message", message: "80%", message_ES: "80%", message_PT: "80%" }],
		// Donuts
		"s-2804-10000-102-0": [{ type: "text", sub_type: "message", message: "In - Out", message_ES: "ENTRAR > SALIR", message_PT: "ENTRAR > SAIR" }],
		// AoE
		"s-2804-10000-122-0": [
			{ type: "text", sub_type: "message", message: "Roar (AoE) - Inward Waves", message_ES: "Rugido (AOE) - Olas Hacia Adentro", message_PT: "Rugido (AOE) - Ondas Para Dentro" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 9000] }
		],
		"s-2804-1002-212-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 500 }],
		"s-2804-10000-204-0": [
			{ type: "text", sub_type: "message", message: "Roar (AoE)", message_ES: "Rugido (AOE)", message_PT: "Rugido (AOE)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 5000] }
		],
		// Puddle
		"s-2804-10000-116-0": [{ type: "text", sub_type: "message", message: "5 Puddles", message_ES: "5 Charcos", message_PT: "5 Poças" }],
		// Shield Phase
		"s-2804-10000-303-0": [
			{ type: "text", sub_type: "message", message: "Shield", message_ES: "Escudo", message_PT: "Escudo" },
			{ type: "text", sub_type: "message", message: "Shield soon...!", message_ES: "Escudo Pronto...!", message_PT: "Escudo em Breve...!", delay: 1000000 }
		],
		// Stuns
		"s-2804-10000-119-0": [{ type: "text", sub_type: "message", message: "Stun Frontal", message_ES: "Stun Frontal", message_PT: "Stun Frontal" }],
		"s-2804-10000-104-0": [
			{ type: "text", sub_type: "message", message: "Jump (Stun)", message_ES: "Salto (Stun)", message_PT: "Salto (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 20, 200, 0, 1500] }
		],
		"s-2804-10000-108-0": [{ type: "text", sub_type: "message", message: "Fly (Puddle)", message_ES: "Volar (Charco)", message_PT: "Voar (Poça)" }],
		"s-2804-10000-108-2": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 20, 200, 0, 1250] }],
		// Attacks
		"s-2804-10000-107-0": [{ type: "text", sub_type: "message", message: "Laser", message_ES: "Láser", message_PT: "Laser" }],
		"s-2804-10000-109-0": [{ type: "text", sub_type: "message", message: "Stun (Puddle)", message_ES: "Stun (Charco)", message_PT: "Stun (Poça)" }],
		"s-2804-10000-115-0": [
			{ type: "text", sub_type: "message", message: "Tail Split", message_ES: "Dividir Cola", message_PT: "Dividir Cauda" },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 220, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -220, 350, 0, 3000] }
		],
		"s-2804-10000-120-0": [{ type: "text", sub_type: "message", message: "Tail Pushback", message_ES: "Empuje Cola", message_PT: "Empurrão Cauda" }],
		"s-2804-10000-205-0": [{ type: "text", sub_type: "message", message: "Dig Attack", message_ES: "Ataque Subterráneo", message_PT: "Ataque Subterrâneo" }],
		"s-2804-10000-205-1": [{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 20, 185, 0, 1500] }],
		// "s-2804-10000-205-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 20, 185, 0, 1500] }],
		// Debuff Mechs
		"qb-2804-10000-28041004": [
			{ type: "func", func: () => type = 0 },
			{ type: "text", sub_type: "message", message: "Debuff (Normal)", message_ES: "Debuff (Normal)", message_PT: "Debuff (Normal)" }
		],
		"qb-2804-10000-28041002": [
			{ type: "func", func: () => type = 1 },
			{ type: "text", sub_type: "message", message: "Debuff (Reverse)", message_ES: "Debuff (Invertido)", message_PT: "Debuff (Invertido)" }
		],
		"am-2804-10000-28041008": [{ type: "func", func: debuff_event, args: [1] }],
		"am-2804-10000-28041009": [{ type: "func", func: debuff_event, args: [2] }],
		"am-2804-10000-28041010": [{ type: "func", func: debuff_event, args: [3] }],
		"am-2804-10000-28041011": [{ type: "func", func: debuff_event, args: [4] }],
		// Plague/Regress
		"ab-2804-10000-28040100-1": [{ type: "text", sub_type: "message", message: "Plague/Regress - Stack 1", message_ES: "Plague/Regress - Carga 1", message_PT: "Plague/Regress - Acúmulo 1" }],
		"ab-2804-10000-28040100-2": [{ type: "text", sub_type: "message", message: "Plague/Regress - Stack 2", message_ES: "Plague/Regress - Carga 2", message_PT: "Plague/Regress - Acúmulo 2" }]
	};
};