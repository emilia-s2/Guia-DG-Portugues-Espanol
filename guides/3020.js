// Sea of Honor
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	const { player } = dispatch.require.library;

	let green = false;
	let purple = false;
	let boss_thirty = false;

	function boss_mech_event(skillid) {
		// (зеленый) "Ближе!"
		if (skillid == 121) {
			green = true;
			handlers.event([
				// круг перед боссом
				{ type: "spawn", func: "circle", args: [true, 553, 0, 170, 8, 290, 3000, 2000] }, // 1
				// бублик вокруг босса
				{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 8, 280, 4000, 3000] }, // 2
				{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 4, 570, 4000, 3000] } // 2
			]);
		}

		// (фиолетовый) "Проваливай!"
		if (skillid == 122) {
			purple = true;
			handlers.event([
				// бублик вокруг босса
				{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 8, 280, 3000, 2000] }, // 1
				{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 4, 570, 3000, 2000] }, // 1
				// круг перед боссом
				{ type: "spawn", func: "circle", args: [true, 553, 0, 170, 8, 290, 4000, 3000] } // 2
			]);
		}

		// "Упади в бездну"
		if (skillid == 120) {
			// Проваливай! - Упади в бездну
			// к нему (бублик вокруг босса) -> от него (круг перед боссом) -> к нему (бублик перед боссом)
			if (purple && !boss_thirty) {
				handlers.event([
					{ type: "text", sub_type: "message", message_PT: "ENTRAR - SAIR - ENTRAR", message_ES: "ENTRAR - SALIR - ENTRAR", message: "In > Out > In" },
					// бублик перед боссом
					{ type: "spawn", func: "circle", args: [true, 912, 0, 150, 8, 280, 5000, 3000] }, // 3
					{ type: "spawn", func: "circle", args: [true, 912, 0, 150, 4, 570, 5000, 3000] }  // 3
				]);

				dispatch.setTimeout(() => purple = false, 2000);

			// < 30%
			// Проваливай! - Упади в бездну
			// к нему (бублик вокруг босса) -> от него (круг перед боссом) -> [волны] -> к нему (бублик перед боссом)
			} else if (purple && boss_thirty) {
				handlers.event([
					{ type: "text", sub_type: "message", message_PT: "ENTRAR - SAIR - SAIR", message_ES: "ENTRAR - SALIR - SALIR", message: "In > Out > in" },
//					{ type: "text", sub_type: "message", delay: 5000, message_PT: "SAIR", message_ES: "SALIR", message: "in" },
					// бублик перед боссом
					{ type: "spawn", func: "circle", args: [true, 912, 0, 150, 8, 280, 5000, 5000] }, // 3
					{ type: "spawn", func: "circle", args: [true, 912, 0, 150, 4, 570, 5000, 5000] }  // 3
				]);

				dispatch.setTimeout(() => purple = false, 2000);
			}
		}

		// "Ощути силу взрыва"
		if (skillid == 123) {
			// Ближе! - Ощути силу взрыва
			// от него (круг перед боссом) -> к нему (бублик вокруг босса) -> от него (большой круг перед боссом)
			if (green && !boss_thirty) {
				handlers.event([
					{ type: "text", sub_type: "message", message_PT: "SAIR - ENTRAR - SAIR", message_ES: "SALIR - ENTRAR - SALIR", message: "Out > In > Out" },
					// большой круг перед боссом
					{ type: "spawn", func: "circle", args: [true, 912, 0, 200, 8, 450, 5000, 3000] } // 3
				]);

				dispatch.setTimeout(() => green = false, 2000);

			// Проваливай - Ощути силу взрыва
			// к нему (бублик вокруг босса) -> от него (круг перед боссом) -> от него (большой круг перед боссом)
			} else if (purple && !boss_thirty) {
				handlers.event([
					{ type: "text", sub_type: "message", message_PT: "ENTRAR - SAIR - SAIR", message_ES: "ENTRAR - SALIR - SALIR", message: "In > Out > Out" },
					// большой круг перед боссом
					{ type: "spawn", func: "circle", args: [true, 912, 0, 200, 8, 450, 5000, 3000] } // 3
				]);

				dispatch.setTimeout(() => purple = false, 2000);

			// < 30%
			// Ближе! - Ощути силу взрыва
			// от него (круг перед боссом) -> к нему (бублик вокруг босса) -> [волны] -> от него (большой круг перед боссом)
			} else if (green && boss_thirty) {
				handlers.event([
					{ type: "text", sub_type: "message", message_PT: "SAIR - ENTRAR - SAIR", message_ES: "SALIR - ENTRAR - SALIR", message: "Out > In > Out" },
//					{ type: "text", sub_type: "message", delay: 5000, message_PT: "SAIR", message_ES: "SALIR", message: "Out" },
					// большой круг перед боссом
					{ type: "spawn", func: "circle", args: [true, 912, 0, 200, 8, 450, 5000, 5000] } // 3
				]);

				dispatch.setTimeout(() => purple = false, 2000);

			// < 30%
			// Проваливай! - Ощути силу взрыва
			// к нему (бублик вокруг босса) -> от него (круг перед боссом) -> [волны] -> от него (большой круг перед боссом)
			} else if (purple && boss_thirty) {
				handlers.event([
					{ type: "text", sub_type: "message", message_PT: "ENTRAR - SAIR - SAIR", message_ES: "ENTRAR - SALIR - SALIR", message: "In > Out > Out" },
//					{ type: "text", sub_type: "message", delay: 5000, message_PT: "SAIR", message_ES: "SALIR", message: "Out" },
					// большой круг перед боссом
					{ type: "spawn", func: "circle", args: [true, 912, 0, 200, 8, 450, 5000, 5000] } // 3
				]);

				dispatch.setTimeout(() => purple = false, 2000);
			}
		}

		// Прыжок
		if (skillid == 127) {
			if (boss_thirty)
				handlers.text({ sub_type: "message", message_PT: "Pulo | Sair", message_ES: "Salto | Salir", message: "Jump | Get Out" });
			else
				handlers.event([
					{ type: "text", sub_type: "message", message_PT: "Pulo | Entrar", message_ES: "salto | Entrar", message: "Jump | Get Out" },
					{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 15, 200, 250, 1000] },
					{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 300, 1000, 4000] }
				]);
		}
	}

	function boss_start_event() {
		boss_thirty = false;
	}

	function boss_thirty_event() {
		boss_thirty = true;
	}

	let debuff_tracker_started = false;
	const debuffs_targe = {
		30209101: { message_PT: "Raio", message_ES: "Rayo", message: "Lightning" },
		30209102: { message_PT: "Bruxa", message_ES: "Buja", message: "Witch" }
	};

	let debuff_call_event = null;
	function start_dungeon_event() {
		const abnormality_change = (added, event) => {
			if (debuffs_targe[event.id]) {
				// Set party marker to target
				handlers.marker({ id: event.target, color: "blue", sub_delay: 3500 });

				if (player.isMe(event.target.toString()) || player.playersInParty.includes(event.target.toString())) {
					if (added) {
						if (debuff_call_event) {
							dispatch.clearTimeout(debuff_call_event);
						}

						debuff_call_event = dispatch.setTimeout(() => {
							handlers.text({
								sub_type: "alert",
								message_PT: debuffs_targe[event.id].message,
								message_ES: debuffs_targe[event.id].message_ES,
								message: debuffs_targe[event.id].message
							});

							debuff_call_event = null;
						}, 1500);
					}
				}
			}
		};

		if (!debuff_tracker_started) {
			dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, abnormality_change.bind(null, true));
			dispatch.hook("S_ABNORMALITY_END", 1, abnormality_change.bind(null, false));

			debuff_tracker_started = true;
		}
	}

	return {
		"dm-0-0-30209203": [{ type: "func", func: start_dungeon_event }],
		"dm-0-0-30209204": [{ type: "func", func: start_dungeon_event }],

		// 1 BOSS
		"s-3020-1900-104-0": [
			{ type: "text", sub_type: "message", message_PT: "Succão (Iframe)", message_ES: "Succión (Iframe)", message: "Suction (Dodge)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 450, 200, 6000] }
		],

		// 2 BOSS
		"s-3020-1200-103-0": [{ type: "text", sub_type: "message", message_PT: "Succão (Iframe)", message_ES: "Succión (Iframe)", message: "Suction (Dodge)" }],

		// 3 BOSS
		"nd-3020-2200": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3020-2200-99": [{ type: "func", func: boss_start_event }],
		"h-3020-2200-30": [
			{ type: "text", sub_type: "message", message_PT: "30%", message_ES: "30%", message: "30%" },
			{ type: "func", func: boss_thirty_event }
		],
		"h-3020-2200-29": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-28": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-27": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-26": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-25": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-24": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-23": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-22": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-21": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-20": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-19": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-18": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-17": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-16": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-15": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-14": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-13": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-12": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-11": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-10": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-9": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-8": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-7": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-6": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-5": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-4": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-3": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-2": [{ type: "func", func: boss_thirty_event }],
		"h-3020-2200-1": [{ type: "func", func: boss_thirty_event }],

		"s-3020-2200-121-0": [{ type: "func", func: boss_mech_event, args: [121] }], // "Ближе!" (зеленый)
		"s-3020-2200-122-0": [{ type: "func", func: boss_mech_event, args: [122] }], // "Проваливай!" (фиолетовый)
		"s-3020-2200-120-0": [{ type: "func", func: boss_mech_event, args: [120] }], // "Упади в бездну"
		"s-3020-2200-123-0": [{ type: "func", func: boss_mech_event, args: [123] }], // "Ощути силу взрыва"

		"s-3020-2200-108-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente (Stun)", message_ES: "Frente (Stun)", message: "Front Stun" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 170, 20, 120, 200, 2000] }
		],
		//"s-3020-9101-122-0": [{ type: "text", sub_type: "message", message_PT: "Jump", "message_TW": "强袭" }],
		//"s-3020-9101-124-0": [{ type: "text", sub_type: "message", message_PT: "Jump", "message_TW": "前砸" }],
		//"s-3020-9101-125-0": [{ type: "text", sub_type: "message", message_PT: "Jump", "message_TW": "转圈" }],
		//"s-3020-9101-126-0": [{ type: "text", sub_type: "message", message_PT: "Jump", "message_TW": "大前砸" }],
		//"s-3020-2201-121-0": [{ type: "text", sub_type: "message", message_PT: 'Left swipe', "message_TW": "2201-121" }, { type: "spawn", func: "marker", args: [false, 0, 0, 100, 2000, true, null] }],	
		//"s-3020-2201-125-0": [{ type: "text", sub_type: "message", message_PT: 'Left swipe', "message_TW": "2201-125" }, { type: "spawn", func: "marker", args: [false, 0, 0, 100, 2000, true, null] }],	
		//"s-3020-2201-126-0": [{ type: "text", sub_type: "message", message_PT: 'Left swipe', "message_TW": "2201-126" }, { type: "spawn", func: "marker", args: [false, 0, 0, 100, 2000, true, null] }],	
		//"s-3020-2201-201-0": [{ type: "spawn", func: "marker", args: [false, 0, 0, 100, 2000, true, null] }],
		//"s-3020-6103-203-0": [{ type: "text", sub_type: "message", message_PT: 'Left swipe', "message_TW": "6103-203" }, { type: "spawn", func: "marker", args: [false, 0, 0, 100, 2000, true, null] }],	
		//"s-3020-6103-202-0": [{ type: "text", sub_type: "message", message_PT: 'Left swipe', "message_TW": "6103-202" }, { type: "spawn", func: "marker", args: [false, 0, 0, 100, 2000, true, null] }],	
		//"s-3020-6103-201-0": [{ type: "text", sub_type: "message", message_PT: 'Left swipe', "message_TW": "6103-201" }, { type: "spawn", func: "marker", args: [false, 0, 0, 100, 2000, true, null] }],	 
		"s-3020-2200-127-0": [{ type: "func", func: boss_mech_event, args: [127] }],
		"s-3020-2200-128-0": [{ type: "text", sub_type: "message", message_PT: "Golfe (voar)", message_ES: "Golfe (volar)", message: "Uppercut (Knockup)" }],
		"s-3020-2200-129-0": [
			{ type: "text", sub_type: "message", message_PT: "Martelo Esmagar", message_ES: "Martillo Aplastar", message: "Hammer Toss ~ Skull" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 200, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 200, 2000] }
		],
		//"s-3020-2200-131-0": [{ type: "text", sub_type: "message", message_PT: "Jump", message_ES: "Jump", message: "Jump" }],
		"s-3020-2200-133-1": [
			{ type: "text", sub_type: "message", message_PT: "Sair - Entrar (Donuts)", message_ES: "Salir - Entrar (Donuts)", message: "Donuts" },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 300, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 600, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 900, 200, 5000] }
		],
		"s-3020-2200-135-0": [{ type: "text", sub_type: "message", message_PT: "Pular Corda", message_ES: "Saltar Cuerda", message: "Puddles Inc (Jump)" }],

		"s-3020-2200-137-0": [{ type: "text", sub_type: "message", message_PT: "Onda Fora", message_ES: "Ola Dentro", message: "Outward Pulse" }],
		"s-3020-2200-139-0": [{ type: "text", sub_type: "message", message_PT: "Onda Dentro", message_ES: "Ola Fuera", message: "Inward Succ" }],

		"s-3020-2200-202-0": [{ type: "text", sub_type: "message", message_PT: "Defesa 3 seconds", message_ES: "Defensa 3 seconds", message: "Defence 3 seconds" }],
		"s-3020-2200-203-0": [{ type: "text", sub_type: "message", message_PT: "Defesa 10 seconds", message_ES: "Defensa 10 seconds", message: "Defence 10 seconds" }],
		"s-3020-2200-204-0": [{ type: "text", sub_type: "message", message_PT: "30% (Transformar)", message_ES: "30% (Transformar)", message: "30% (transformation)" }]
	};
};