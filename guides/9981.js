// Velik's Sanctuary (Difícil)
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let boss_enraged = false;

	let back_print = false;
	let back_time = 0;
	let end_back_time = 0;
	let is_one_back = false;
	let counter = 0;
	let counter1_date = null;

	let prev_back_attack = 0;
	let prev_date = 0;
	let attack_360 = false;
	function boss_backattack_event() {
		end_back_time = new Date() - back_time;

		if (!back_print) {
			back_print = true;
			is_one_back = end_back_time > 0 && end_back_time < 1500;

			if (is_one_back) {
				handlers.text({
					sub_type: "message",
					message_RU: "360",
					message: "360",
				});
			}
		}
		dispatch.setTimeout(() => back_print = false, 3500);
	}


	function boss_backattack_event_new(curr, ent) {
		let start = new Date();
		let tmp = prev_date;
		prev_date = start;

		let time_diff = start - tmp;

		let prev = prev_back_attack;
		prev_back_attack = curr;

		let back_combo_time_diff = 5000;
		if (counter1_date != null) {
			back_combo_time_diff = start - counter1_date;
		}

		if (prev == 1106 && curr == 1103 && time_diff < 1000) {
			handlers.text({
				sub_type: "message",
				message: "360"
			});
		} else if (prev === 1103 && curr === 1105 && time_diff < 1000) {
			counter = 1;
			counter1_date = new Date();
		} else if (prev === 1105 && curr === 1106 && counter === 1 && time_diff < 1500 && back_combo_time_diff < 1500) {
			counter = 2;
		} else if (prev === 1106 && curr === 1108 && counter == 2 && time_diff < 1000 && back_combo_time_diff < 2000) {
			attack_360 = true;
			handlers.text({
				sub_type: "message",
				message: "2x360"
			});
		} else {
			counter = 0;
			counter1_date = null;
		}
	}


	let first_fifty = false;
	let prev_attack = 0;
	let triple_swipe_remaining = 0;
	function first_swipe_event(skillid, ent) {
		let double = "";
		let double_ru = "";
		if ((first_fifty || attack_360) && triple_swipe_remaining === 0) {
			double = "(Double)";
			double_es = "(Doble)";
			double_pt = "(Duplo)";
			if (attack_360) {
				attack_360 = false;
			}
		}

		if (triple_swipe_remaining > 0) {
			triple_swipe_remaining--;
		}
		// 1401 non-enraged
		const rightSafe = [
			{ type: "text", sub_type: "message", message: `Right ${double}`, message_ES: `Derecha ${double_es}`, message_PT: `Direita ${double_pt}` },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		];

		// 1402 non-enraged
		const leftSafe = [
			{ type: "text", sub_type: "message", message: `Left ${double}`, message_ES: `Izquierda ${double_es}`, message_PT: `Esquerda ${double_pt}` },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		];


		if (skillid == 1401) {
			if (boss_enraged) {
				handlers.event(leftSafe);
			} else {
				handlers.event(rightSafe);
			}
		} else {
			if (!boss_enraged) {
				handlers.event(leftSafe);
			} else {
				handlers.event(rightSafe);
			}
		}
	}


	let triples_timer = null;
	function first_triples_event() {
		if (triples_timer != null) {
			dispatch.clearTimeout(triples_timer);
		}

		triples_timer = dispatch.setTimeout(() => {
			handlers.text({
				sub_type: "notification",
				message: "Triples Soon!",
				message_ES: "Triples Pronto!",
				message_PT: "Triplos Em Breve!"
			});
		}, 55000);

	}

	let last_donut_msg = null;
	function first_fly_mech(skillid) {
		let delay = first_fifty ? 6 : 6;
		let PizzaUnEnragedMarkers = [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 4 * 45 + 45, 750, 0, 1000 * delay] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 195, 750, 0, 1000 * delay] },

			{ type: "spawn", func: "vector", args: [553, 0, 0, 7 * 45 + 90, 750, 0, 1000 * delay] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, (7 * 45 + 90) - 30, 750, 0, 1000 * delay] },

			{ type: "spawn", func: "vector", args: [912, 0, 0, 45 + 90, 750, 0, 1000 * delay] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, (45 + 90) + 30, 750, 0, 1000 * delay] },

			{ type: "spawn", func: "vector", args: [445, 0, 0, (45 + 90) - 30, 750, 0, 1000 * delay] },
			{ type: "spawn", func: "vector", args: [445, 0, 0, (45 + 90) - 60, 750, 0, 1000 * delay] },

			{ type: "spawn", func: "vector", args: [413, 0, 0, 6 * 45 + 45, 750, 0, 1000 * delay] },
			{ type: "spawn", func: "vector", args: [413, 0, 0, (6 * 45 + 45) + 30, 750, 0, 1000 * delay] },

			{ type: "spawn", func: "vector", args: [537, 0, 0, (6 * 45 + 45) - 30, 750, 0, 1000 * delay] },
			{ type: "spawn", func: "vector", args: [537, 0, 0, (6 * 45 + 45) - 60, 750, 0, 1000 * delay] },
		];

		let PizzaEnragedMarkers = [
			{ type: "spawn", func: "vector", args: [537, 0, 0, (45 + 90) + 30, 750, 0, 1000 * delay] }, // 537 Mutated Mushroom 
			{ type: "spawn", func: "vector", args: [537, 0, 0, 195, 750, 0, 1000 * delay] },		// 537 Mutated Mushroom

			{ type: "spawn", func: "vector", args: [553, 0, 0, 4 * 45 + 45, 750, 0, 1000 * delay] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, (6 * 45 + 45) - 60, 750, 0, 1000 * delay] },

			{ type: "spawn", func: "vector", args: [912, 0, 0, 45 + 90, 750, 0, 1000 * delay] }, // egg 912
			{ type: "spawn", func: "vector", args: [912, 0, 0, (45 + 90) - 30, 750, 0, 1000 * delay] },  // egg 912

			{ type: "spawn", func: "vector", args: [553, 0, 0, (45 + 90) - 60, 750, 0, 1000 * delay] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 7 * 45 + 90, 750, 0, 1000 * delay] },


			{ type: "spawn", func: "vector", args: [443, 0, 0, (6 * 45 + 45) + 30, 750, 0, 1000 * delay] }, // skull  443
			{ type: "spawn", func: "vector", args: [443, 0, 0, (7 * 45 + 90) - 30, 750, 0, 1000 * delay] }, // skull  443

			{ type: "spawn", func: "vector", args: [537, 0, 0, 6 * 45 + 45, 750, 0, 1000 * delay] },
			{ type: "spawn", func: "vector", args: [537, 0, 0, (6 * 45 + 45) - 30, 750, 0, 1000 * delay] },
		];

		if (!first_fifty) {
			if (prev_attack === 1113) {
				// Donuts
				handlers.event([
					{ type: "text", sub_type: "message", message: "Donuts", message_ES: "Donuts", message_PT: "Donuts" },
					{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] },
				]);
			} else {
				handlers.event([{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza", message_PT: "Pizza" }]);
				if (boss_enraged) {
					handlers.event(PizzaEnragedMarkers);
				} else {
					handlers.event(PizzaUnEnragedMarkers);
				}

			}
		} else {
			if (boss_enraged) {
				handlers.event(PizzaEnragedMarkers);
			} else {
				handlers.event(PizzaUnEnragedMarkers);
			}

			if ((skillid === 1308 || skillid === 1309) && last_donut_msg == null) {
				last_donut_msg = skillid === 1308 ? "last: IN" : "last: OUT";
				handlers.event([{ type: "text", sub_type: "notification", message: last_donut_msg, delay: 1000 }]);
				dispatch.setTimeout(() => last_donut_msg = null, 7500);
			}
		}
		prev_attack = 0;

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

		boss_enraged = false;
		triple_swipe_remaining = 0;
		attack_360 = false;
		first_fifty = false;
		prev_attack = 0;
	}


	let second_swipes_remaining = 0;
	let second_fifty = false;
	let second_new_swipe = false;
	let second_swipe_counter = 0;
	function secondboss_floor_event(one, two) {
		if (one && two) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza", message_PT: "Pizza" },
				{ type: "spawn", func: "marker", args: [false, one * 45 + 68, 500, 0, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 + 45, 750, 0, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 + 90, 750, 0, 5000] },
				{ type: "spawn", func: "marker", args: [false, two * 45 + 68, 300, 7000, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 + 45, 750, 7000, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 + 90, 750, 7000, 5000] }
			]);
		}
	}


	function secondboss_swipe_event(skillid) {
		if (!second_new_swipe) return;
		let pattern = null;
		if (!second_fifty) {
			const pattern1 = [
				{ type: "text", sub_type: "notification", message: "Right (Double)", message_ES: "Derecha (Doble)", message_PT: "Direita (Duplo)" },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 6000] },
				{ type: "spawn", func: "marker", args: [false, 60, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "marker", args: [false, 130, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 4600, 2200] }
			];
			const pattern2 = [
				{ type: "text", sub_type: "notification", message: "Left (Double)", message_ES: "Izquierda (Doble)", message_PT: "Esquerda (Duplo)" },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 6000] },
				{ type: "spawn", func: "marker", args: [false, 300, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "marker", args: [false, 230, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 4600, 2200] }
			];

			const pattern3 = [{ type: "text", sub_type: "message", message: "Back - Front", message_ES: "Atrás - Frente", message_PT: "Atrás - Frente" }];
			const pattern4 = [{ type: "text", sub_type: "message", message: "Front - Back", message_ES: "Frente - Atrás", message_PT: "Frente - Atrás" }];


			pattern = skillid === 1101 ? pattern3 : pattern4;
			if (second_swipe_counter % 2 === 0) {
				pattern = skillid === 1101 ? pattern1 : pattern2;
			}

		} else {
			const pattern1 = [
				{ type: "text", sub_type: "notification", message: "Right (Double) - Front - Back", message_ES: "Derecha (Doble) - Frente - Atrás", message_PT: "Direita (Duplo) - Frente - Atrás" },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 6000] },
				{ type: "spawn", func: "marker", args: [false, 60, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "marker", args: [false, 130, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 4600, 2200] }
			];
			const pattern2 = [
				{ type: "text", sub_type: "notification", message: "Left (Double) - Back - Front", message_ES: "Izquierda (Doble) - Atrás - Frente", message_PT: "Esquerda (Duplo) - Atrás - Frente" },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 6000] },
				{ type: "spawn", func: "marker", args: [false, 300, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "marker", args: [false, 230, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 4600, 2200] }
			];

			pattern = skillid === 1101 ? pattern1 : pattern2;

		}
		handlers.event(pattern);
		second_swipe_counter++;
		second_new_swipe = false;
	}


	let thirdboss_fifty = false;
	let thirdboss_soul_world = false;

	function thirdboss_message_event(skillid) {
		switch (skillid) {
			// Lakan has noticed you.
			case 1043:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Circles > Bombs",
						message_PT: "Debuffs > Círculos > Bombas",
						message_ES: "Debuffs > Círculos > Bombas"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Bombs > Circles",
						message_PT: "Debuffs > Bombas > Círculos",
						message_ES: "Debuffs > Bombas > Círculos"
					});
				}
				break;
			// Lakan is trying to take you on one at a time.
			case 1044:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Bombs > Debuffs",
						message_PT: "Círculos > Bombas > Debuffs",
						message_ES: "Círculos > Bombas > Debuffs"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Debuffs > Bombs",
						message_PT: "Círculos > Debuffs > Bombas",
						message_ES: "Círculos > Debuffs > Bombas"
					});
				}
				break;
			// Lakan intends to kill all of you at once.
			case 1045:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Debuffs > Circles",
						message_PT: "Bombas > Debuffs > Círculos",
						message_ES: "Bombas > Debuffs > Círculos"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Circles > Debuffs",
						message_PT: "Bombas > Círculos > Debuffs",
						message_ES: "Bombas > Círculos > Debuffs"
					});
				}
				break;
		}
	}

	let run_mech_active = false;
	let run_mech_push_back = false;
	function run_if_you_can(skillid) {
		if (!run_mech_active) return;

		if (skillid === 1117) {
			handlers.event([{ type: "text", sub_type: "message", message: "Stun + Back" }]);
		}

		if (skillid === 1105) {
			run_mech_push_back = true;
		} else if (run_mech_push_back) {
			let msg = skillid === 1102 ? "In" : "Out";
			handlers.event([
				{ type: "text", sub_type: "notification", message: msg },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }
			]);
			run_mech_active = false;
			run_mech_push_back = false;
		}
	}

	let afriad_mech_active = false;
	function are_you_afraid_of_me(skillid) {
		if (!afriad_mech_active) return;
		let msg = "";
		if (thirdboss_soul_world) {
			msg = skillid === 1132 ? "Out + In" : "In + Out";
		} else {
			msg = skillid === 1131 ? "Out + In" : "In + Out";
		}

		handlers.event([
			{ type: "text", sub_type: "notification", message: msg }
		]);
		afriad_mech_active = false;
	}

	let clever_mech_active = false;
	function are_you_clever(skillid) {
		if (!clever_mech_active) return;
		if (skillid === 1102) {
			handlers.event([{ type: "text", sub_type: "message", message: "Spin", delay: 900 }]);
		}
		if (skillid === 1131 || skillid === 1132) {
			let msg = "";
			if (thirdboss_soul_world) {
				msg = skillid === 1132 ? "OUT + Blue Donuts" : "IN + Red Donuts";
			} else {
				msg = skillid === 1131 ? "OUT + Blue Donuts" : "IN + Red Donuts";
			}

			handlers.event([
				{ type: "text", sub_type: "notification", message: msg },
				{ type: "text", sub_type: "message", message: msg, delay: 2000 }
			]);
			clever_mech_active = false;
		}
	}

	function reset_third_boss() {
		clever_mech_active = false;
		afriad_mech_active = false;
		run_mech_push_back = false;
		run_mech_active = false;
		thirdboss_soul_world = false;
		thirdboss_fifty = false;
	}
	return {
		// 1 BOSS
		"ns-981-1000": [{ type: "func", func: () => boss_enraged = false }],
		"nd-981-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: reset_backevent }
		],
		"rb-981-1000": [{ type: "func", func: () => boss_enraged = true }],
		"re-981-1000": [{ type: "func", func: () => boss_enraged = false }],
		"h-981-1000-49": [
			{ type: "text", sub_type: "message", message: "49%" },
			{ type: "func", func: () => first_fifty = true }
		],
		"s-981-1000-1102-0": [{ type: "func", func: () => back_time = new Date() }],
		"s-981-1000-1101-0": [{ type: "func", func: boss_backattack_event }],
		"s-981-1000-1106-0": [{ type: "func", func: boss_backattack_event_new, args: [1106] }],
		"s-981-1000-1105-0": [{ type: "func", func: boss_backattack_event_new, args: [1105] }],
		"s-981-1000-1103-0": [{ type: "func", func: boss_backattack_event_new, args: [1103] }],
		"s-981-1000-1108-0": [{ type: "func", func: boss_backattack_event_new, args: [1108] }],
		"s-981-1000-1401-0": [{ type: "func", func: first_swipe_event, args: [1401] }],
		"s-981-1000-1402-0": [{ type: "func", func: first_swipe_event, args: [1402] }],
		"s-981-1000-1303-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro", message_PT: "Giro" }],
		"s-981-1000-1304-0": [
			{ type: "func", func: first_fly_mech, args: [1304] },
			{ type: "text", sub_type: "message", message: "Donuts + Pizza", message_ES: "Donuts + Pizza", message_PT: "Donuts + Pizza", check_func: () => first_fifty },
		],
		"s-981-1000-1308-0": [
			{ type: "func", func: first_fly_mech, args: [1308], check_func: () => first_fifty },
			{ type: "text", sub_type: "message", message: "Out", message_ES: "Salir", message_PT: "Sair" }
		], //out
		"s-981-1000-1309-0": [
			{ type: "func", func: first_fly_mech, args: [1309], check_func: () => first_fifty },
			{ type: "text", sub_type: "message", message: "In", message_ES: "Entrar", message_PT: "Entrar" }], //in
		"s-981-1000-1111-0": [{ type: "func", func: () => prev_attack = 1111 }],
		"s-981-1000-1113-0": [
			{ type: "text", sub_type: "message", message: "Front + AoEs", message_ES: "Frente + AoEs", message_PT: "Frente + AoEs" },
			{ type: "func", func: () => prev_attack = 1113 }
		],
		"s-981-1000-1114-0": [
			{ type: "text", sub_type: "message", message_ES: "Objetivo Ataque", message_PT: "Alvo Ataque", message: "Target Attack" },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-981-1000-1115-0": [{ type: "text", sub_type: "message", delay: 2500, message_ES: "Iframe", message_PT: "Iframe", message: "Dodge" }], // dodge circle
		"s-981-1000-1117-0": [{ type: "text", sub_type: "message", delay: 4500, message_ES: "Iframe", message_PT: "Iframe", message: "Dodge" }], // dodge circles
		"s-981-1000-2111-0": "s-981-1000-1111-0",
		"s-981-1000-2112-0": "s-981-1000-1112-0",
		"s-981-1000-2113-0": "s-981-1000-1113-0",
		"s-981-1000-2114-0": "s-981-1000-1114-0",
		"s-981-1000-2115-0": "s-981-1000-1115-0",
		"s-981-1000-2117-0": "s-981-1000-1117-0",
		"s-981-1000-2101-0": "s-981-1000-1101-0",
		"s-981-1000-2102-0": "s-981-1000-1102-0",
		"s-981-1000-2103-0": "s-981-1000-1103-0",
		"s-981-1000-2105-0": "s-981-1000-1105-0",
		"s-981-1000-2106-0": "s-981-1000-1106-0",
		"s-981-1000-2108-0": "s-981-1000-1108-0",
		"qb-981-1000-98103": [{ type: "text", sub_type: "message", message: "Lead circle to the stone", message_ES: "Conduza el Círculo a La Piedra", message_PT: "Conduza o Círculo Até a Pedra" }],
		"qb-981-1000-98106": [{ type: "text", sub_type: "message", message: "Lead circles to the stone", message_ES: "Conduza el Círculo a La Piedra", message_PT: "Conduza o Círculo Até a Pedra" }],
		"dm-0-0-9981005": [
			{ type: "text", sub_type: "message", message: "Triples!" },
			{ type: "func", func: () => triple_swipe_remaining = 3 },
			{ type: "func", func: first_triples_event },
		],
		// 2 BOSS

		"nd-981-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: () => second_swipes_remaining = 0 },
			{ type: "func", func: () => second_fifty = false },
			{ type: "func", func: () => second_swipe_counter = 0 },
		],
		"h-981-2000-49": [
			{ type: "text", sub_type: "message", message: "49%" },
			{ type: "func", func: () => second_fifty = true },
		],
		"dm-0-0-9068016": [{ type: "func", func: () => second_new_swipe = true }],
		// I will rip you apart
		"dm-0-0-9981021": [
			{ type: "func", func: () => second_swipes_remaining = 4, check_func: () => second_fifty }
		],
		// Cage Mechanic
		"s-981-2000-1501-0": [
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" }
		],
		// cage - only mark safe spot for last pattern
		"s-981-2000-1138-0": [
			{ type: "spawn", func: "marker", args: [false, 75, 170, 0, 11000, false, null] },
			{ type: "spawn", func: "marker", args: [false, 165, 170, 0, 11000, false, null] },
			{ type: "spawn", func: "marker", args: [false, 255, 170, 0, 11000, false, null] },
			{ type: "spawn", func: "marker", args: [false, 345, 170, 0, 11000, false, null] }
		],
		"s-981-2000-1139-0": "s-981-2000-1138-0",
		"s-981-2000-1140-0": "s-981-2000-1138-0",
		"s-981-2000-1141-0": "s-981-2000-1138-0",
		"s-981-2000-1110-0": [{ type: "text", sub_type: "message", message: "Back Move", message_PT: "Mover Atrás", message_ES: "Ataque Atrás" }],
		"s-981-2000-1111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_PT: "Ataque 360", message_ES: "Ataque Circular" }],
		"s-981-2000-1114-0": [{ type: "text", sub_type: "message", message: "Pull", message_PT: "Puxar", message_ES: "Jalar" }],
		"s-981-2000-1115-0": [{ type: "text", sub_type: "message", message: "Circles", message_PT: "Círculos", message_ES: "Círculos" }],
		"s-981-2000-1115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_PT: "Iframe", message_ES: "Iframe", delay: 150 }],
		"s-981-2000-1117-0": [{ type: "text", sub_type: "message", message: "Jump", message_PT: "Salto", message_ES: "Salto" }],
		"s-981-2000-1106-0": [
			{ type: "func", func: () => second_swipes_remaining--, check_func: second_swipes_remaining > 0 },
			{ type: "text", sub_type: "message", message: "Back", message_ES: "Atrás", message_PT: "Atrás", check_func: !first_fifty || second_swipes_remaining > 1 },
			{ type: "text", sub_type: "message", message: "Back - Front", message_ES: "Atrás - Frente", message_PT: "Atrás - Frente", check_func: first_fifty && second_swipes_remaining === 1 },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 14, 270, 0, 2600] },
		],
		"s-981-2000-1108-0": [
			{ type: "func", func: () => second_swipes_remaining--, check_func: second_swipes_remaining > 0 },
			{ type: "text", sub_type: "message", message: "Front", message_ES: "Frente", message_PT: "Frente", check_func: !first_fifty || second_swipes_remaining > 1 },
			{ type: "text", sub_type: "message", message: "Front - Back", message_ES: "Frente - Atrás", message_PT: "Frente - Atrás", check_func: first_fifty && second_swipes_remaining === 1 },
		],
		"s-981-2000-1130-0": [
			{ type: "func", func: () => second_swipes_remaining--, check_func: second_swipes_remaining > 0 },
			{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha", message_PT: "Direita" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-2000-1131-0": [
			{ type: "func", func: () => second_swipes_remaining--, check_func: second_swipes_remaining > 0 },
			{ type: "text", sub_type: "message", message: "Left", message_ES: "Izquierda", message_PT: "Esquerda" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-2000-1101-0": [{ type: "func", func: secondboss_swipe_event, args: [1101] }],
		"s-981-2000-2101-0": "s-981-2000-1101-0",
		"s-981-2000-1102-0": [{ type: "func", func: secondboss_swipe_event, args: [1102] }],
		"s-981-2000-2102-0": "s-981-2000-1102-0",
		"s-981-2000-1134-0": [
			{ type: "text", sub_type: "message", message: "Inner + AoE", message_ES: "Interno + AoE", message_PT: "Interno + АоЕ" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 14, 175, 0, 1500] }
		],
		"s-981-2000-1134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-981-2000-1136-0": [{ type: "text", sub_type: "message", message: "Donut", message_ES: "Donut", message_PT: "Donut" }],
		"s-981-2000-1202-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_ES: "Objetivo Lanzar", message_PT: "Alvo Lançar" }],
		"s-981-2000-1205-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_ES: "Objetivo Lanzar", message_PT: "Alvo Lançar" }],
		"s-981-2000-1206-0": [{ type: "text", sub_type: "message", message: "Pike (Target)", message_ES: "Pike (Objetivo)", message_PT: "Pike (Alvo)" }],
		"s-981-2000-1302-0": [{ type: "text", sub_type: "message", message: "Bait (Target)", message_ES: "Bait (Objetivo)", message_PT: "Байт (Alvo)" }],
		"s-981-2000-1302-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1600 }],
		"s-981-2000-1502-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ", message_PT: "АоЕ" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 3000] }
		],
		"s-981-2000-1503-0": [{ type: "text", sub_type: "message", message: "Target Lockon", message_ES: "Fijado Objetivo", message_PT: "Trancar Alvo" }],
		"s-981-2000-1504-0": [{ type: "text", sub_type: "message", message: "Mobs Summon", message_ES: "Sumonar Mobs", message_PT: "Sumonar Mobs" }],
		//
		"s-981-2000-2106-0": "s-981-2000-1106-0",
		"s-981-2000-2108-0": "s-981-2000-1108-0",
		"s-981-2000-2110-0": "s-981-2000-1110-0",
		"s-981-2000-2111-0": "s-981-2000-1111-0",
		"s-981-2000-2114-0": "s-981-2000-1114-0",
		"s-981-2000-2115-0": "s-981-2000-1115-0",
		"s-981-2000-2115-1": "s-981-2000-1115-1",
		"s-981-2000-2117-0": "s-981-2000-1117-0",
		"s-981-2000-2130-0": "s-981-2000-1130-0",
		"s-981-2000-2131-0": "s-981-2000-1131-0",
		"s-981-2000-2134-0": "s-981-2000-1134-0",
		"s-981-2000-2134-1": "s-981-2000-1134-1",
		"s-981-2000-2136-0": "s-981-2000-1136-0",
		// Pizza Mechanic
		"s-981-927-1301-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-981-927-1302-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-981-927-1303-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-981-927-1307-0": [{ type: "func", func: secondboss_floor_event, args: [1, 6] }],
		"s-981-927-1308-0": [{ type: "func", func: secondboss_floor_event, args: [3, 6] }],
		"s-981-927-1309-0": [{ type: "func", func: secondboss_floor_event, args: [6, 3] }],
		"s-981-927-1310-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-981-927-1311-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-981-927-1312-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-981-927-1313-0": [{ type: "func", func: secondboss_floor_event, args: [1, 6] }],
		"s-981-927-1314-0": [{ type: "func", func: secondboss_floor_event, args: [3, 6] }],
		"s-981-927-1315-0": [{ type: "func", func: secondboss_floor_event, args: [6, 3] }],
		//
		"qb-981-4000-9981046": [{ type: "text", sub_type: "notification", message: "First: (Debuffs) Closest", message_PT: "Primeiro: Debuff (Juntar)", message_ES: "Primero: Debuff (Más cercano)" }], // Gracias... por esta versión...
		"qb-981-4000-9981047": [{ type: "text", sub_type: "notification", message: "First: (Circles) Spread", message_PT: "Primeiro: Círculos (Afastar)", message_ES: "Primero: Círculos (Separarse)" }], // Cuidado con el... rayo rojo...
		"qb-981-4000-9981048": [{ type: "text", sub_type: "notification", message: "First: (Bombs) Gather + Cleanse", message_PT: "Primeiro: Bombas (Juntar + Cleanse)", message_ES: "Primero: Bombas (Reunirse + Cleanse)" }], // Cuidado con la marca... de Lakan...

		// 3 BOSS
		"nd-981-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: reset_third_boss },
		],
		"s-981-3000-1130-0": [{ type: "text", sub_type: "message", message: "Stun" }],
		"s-981-3000-2130-0": "s-981-3000-1130-0",

		"s-981-3000-1116-0": [
			{ type: "text", sub_type: "message", message: "Red Donut", check_func: () => !thirdboss_soul_world && !thirdboss_fifty },
			{ type: "text", sub_type: "message", message: "Blue Donut", check_func: () => thirdboss_soul_world && !thirdboss_fifty },
			{ type: "text", sub_type: "message", message: "Red Donut (Double)", check_func: () => !thirdboss_soul_world && thirdboss_fifty },
			{ type: "text", sub_type: "message", message: "Blue Donut (Double)", check_func: () => thirdboss_soul_world && thirdboss_fifty },
		],
		"s-981-3000-2116-0": "s-981-3000-1116-0",
		"h-981-3000-99": [{ type: "func", func: () => thirdboss_fifty = false }],
		"h-981-3000-50": [{ type: "func", func: () => thirdboss_fifty = true }],
		"dm-0-0-9981043": [{ type: "func", func: thirdboss_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-9981044": [{ type: "func", func: thirdboss_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-9981045": [{ type: "func", func: thirdboss_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"qb-981-3000-98131": [{ type: "text", sub_type: "message", message: "Range Check" }],
		"qb-981-3000-98135": [{ type: "func", func: () => run_mech_active = true }],
		"s-981-3000-1101-0": [{ type: "func", func: run_if_you_can, args: [1101] }],
		"s-981-3000-1102-0": [
			{ type: "func", func: run_if_you_can, args: [1102] },
			{ type: "func", func: are_you_clever, args: [1102] }
		],
		"s-981-3000-1105-0": [
			{ type: "func", func: run_if_you_can, args: [1105] },
			{ type: "text", sub_type: "message", message: "Back" },
		],
		"s-981-3000-1117-0": [{ type: "func", func: run_if_you_can, args: [1117] }],
		"qb-981-3000-98133": [
			{ type: "func", func: () => clever_mech_active = true },
			{ type: "text", sub_type: "message", message: "Cone + Donuts" },
		], // let's see just how clever you are...
		"qb-981-3000-98134": [
			{ type: "func", func: () => afriad_mech_active = true },
			{ type: "text", sub_type: "message", message: "Double Cones" },
		], //are_you_afraid_of_me
		"s-981-3000-1131-0": [
			{ type: "func", func: are_you_afraid_of_me, args: [1131] },
			{ type: "func", func: are_you_clever, args: [1131] }
		],
		"s-981-3000-1132-0": [
			{ type: "func", func: are_you_afraid_of_me, args: [1132] },
			{ type: "func", func: are_you_clever, args: [1132] }
		],
		"s-981-3000-2131-0": "s-981-3000-1131-0",
		"s-981-3000-2132-0": "s-981-3000-1132-0",
		"s-981-3000-2101-0": "s-981-3000-1101-0",
		"s-981-3000-2102-0": "s-981-3000-1102-0",
		"s-981-3000-2105-0": "s-981-3000-1105-0",
		"s-981-3000-2117-0": "s-981-3000-1117-0",
		"s-981-3000-1404-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Closest", message_PT: "Debuff (Juntar)", message_ES: "Debuff (Más cercano)" }],
		"s-981-3000-1405-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Farthest", message_PT: "Debuff (Afastar)", message_ES: "Debuff (Más lejano)" }],
		"s-981-3000-1301-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + Cleanse", message_PT: "Bombas Juntar + Cleanse", message_ES: "Bombas (Reunirse) + Cleanse" }],
		"s-981-3000-1302-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + [c=#ff0004]No[/c]  cleanse", message_PT: "Bombas Juntar + [c=#ff0004]No[/c] Cleanse", message_ES: "Bombas (Reunirse) + [c=#ff0004]No[/c]	 Cleanse" }],
		"s-981-3000-3103-0": [{ type: "text", sub_type: "message", message: "(Circles) Spread", message_PT: "Círculos (Afastar)", message_ES: "Círculos (Separarse)" }],
		"s-981-3000-3105-0": [{ type: "text", sub_type: "message", message: "(Circles) Gather", message_PT: "Círculos (Juntar)", message_ES: "Círculos (Reunirse)" }],
		"s-981-3000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_PT: "Garra", message_ES: "Garra"}],
		"s-981-3000-1144-0": [{ type: "text", sub_type: "message", message: "OUT", message_PT: "SAIR", message_ES: "SALIR" }],
		"s-981-3000-1145-0": [{ type: "text", sub_type: "message", message: "IN", message_PT: "ENTRAR", message_ES: "ENTRAR" }],
		"s-981-3000-1240-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_ES: "Donuts", message_PT: "Donuts" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 0, 6000] }
		],
		"s-981-3000-1401-0": [
			{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "Plague/Regress", message_PT: "Plague/Regress" },
			{ type: "text", sub_type: "message", message: "Puddles! Puddles!", delay: 1900 },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 15, 175, 1000, 7000] },
			{ type: "func", func: () => thirdboss_soul_world = true },
		],
		"s-981-3000-1140-0": [{ type: "text", sub_type: "message", message: "Red Donuts", message_ES: "Donuts Rojo", message_PT: "Donuts Vermelho" }],
		"s-981-3000-2140-0": "s-981-3000-1140-0",
		"s-981-3000-1146-0": [{ type: "text", sub_type: "message", message: "Blue Donuts", message_ES: "Donuts Azul", message_PT: "Donuts Azul" }],
		"s-981-3000-2146-0": "s-981-3000-1146-0",
		"s-981-3000-1402-0": [
			{ type: "text", sub_type: "message", message: "Sleep", message_ES: "Dormir", message_PT: "Dormir" },
			{ type: "func", func: () => thirdboss_soul_world = false },
		],
		"s-981-3000-1701-0": [{ type: "text", sub_type: "message", message: "Back + front", message_ES: "Atrás + Frente", message_PT: "Atrás + Frente" }],
		//
		"s-981-3000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait", message_PT: "Bait" }],
		"s-981-3000-1151-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun" }],
		"s-981-3000-1152-0": [{ type: "text", sub_type: "message", message: "Stun + Back", message_ES: "Stun + Atrás", message_PT: "Stun + Atrás" }],
		"s-981-3000-1152-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1900 }],
		"s-981-3000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }], // begone
		"s-981-3000-2145-0": [{ "type": "text", "sub_type": "message", "message": "IN" }],
		"s-981-3000-2144-0": [{ "type": "text", "sub_type": "message", "message": "Out" }],
		"s-981-3000-2113-0": "s-981-3000-1113-0",
		"s-981-3000-2151-0": "s-981-3000-1151-0",
		"s-981-3000-2152-0": "s-981-3000-1152-0",
		"s-981-3000-2152-1": "s-981-3000-1152-1",
		"s-981-3000-2138-0": "s-981-3000-1138-0"
	};
};
