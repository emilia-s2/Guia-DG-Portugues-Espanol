// Dreadspire (Asura)
//
// made by TristanPW / Vampic

const EventEmitter = require("events").EventEmitter;

// version 1.03
class ChatLink extends EventEmitter {
	constructor(mod) {
		super();

		this._min = 4415e4;
		this._max = this._min + 1e4;

		this._pointer = this._min;

		mod.hook("C_REQUEST_NONDB_ITEM_INFO", "*", event => {
			if (event.item <= this._max && event.item >= this._min) {
				process.nextTick(() => this.emit(event.item));
				return false;
			}
		});
	}

	get(name, callback) {
		this._pointer++;

		if (this._pointer > this._max) {
			this._pointer = this._min;
		}

		this.on(this._pointer, callback);

		return `<ChatLinkAction param="1#####${this._pointer}@-1@Link">${name}</ChatLinkAction>`;
	}

	get pointer() {
		return this._pointer;
	}

	set pointer(pointer) {
		this._pointer = pointer;
	}

	destructor() {
		this.removeAllListeners();
		this._pointer = this._min;
	}
}

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	if (global._teraGuide_9034_asura_chatLink) {
		global._teraGuide_9034_asura_chatLink.destructor();
		delete global._teraGuide_9034_asura_chatLink;
	}

	global._teraGuide_9034_asura_chatLink = new ChatLink(dispatch);

	function showMessageForSettings() {
		global._teraGuide_9034_asura_chatLink.destructor();

		const buttonOff = global._teraGuide_9034_asura_chatLink.get((lang.language === "ru" ? "Выключить" : "Disable"), () => {
			guide.settings.firstBossCageMechObjects = false;
			showMessageForSettings();
		});

		const buttonMushroom = global._teraGuide_9034_asura_chatLink.get((lang.language === "ru" ? "Мутировавший гриб" : "Mutated Mushroom"), () => {
			guide.settings.firstBossCageMechObjects = "Mushroom";
			showMessageForSettings();
		});

		const buttonGalborne = global._teraGuide_9034_asura_chatLink.get((lang.language === "ru" ? "Галенит" : "Galborne Ore"), () => {
			guide.settings.firstBossCageMechObjects = "Galborne";
			showMessageForSettings();
		});

		const buttonPillar = global._teraGuide_9034_asura_chatLink.get((lang.language === "ru" ? "Столб света" : "Pillar of light"), () => {
			guide.settings.firstBossCageMechObjects = "Pillar";
			showMessageForSettings();
		});

		const buttonSign = global._teraGuide_9034_asura_chatLink.get((lang.language === "ru" ? "Табличка" : "Sign"), () => {
			guide.settings.firstBossCageMechObjects = "Sign";
			showMessageForSettings();
		});


		const resultString = `<font color="${guide.settings.firstBossCageMechObjects === false ? "#00ff00" : "#ff0000"}">[${buttonOff}]</font> <font color="${guide.settings.firstBossCageMechObjects === "Sign" ? "#00ff00" : "#ff0000"}">[${buttonSign}]</font> <font color="${guide.settings.firstBossCageMechObjects === "Pillar" ? "#00ff00" : "#ff0000"}">[${buttonPillar}]</font> <font color="${(guide.settings.firstBossCageMechObjects === "Mushroom" || guide.settings.firstBossCageMechObjects === undefined) ? "#00ff00" : "#ff0000"}">[${buttonMushroom}]</font> <font color="${guide.settings.firstBossCageMechObjects === "Galborne" ? "#00ff00" : "#ff0000"}">[${buttonGalborne}]</font>`;

		dispatch._mod.command.message(lang.language === "ru" ? `<font color="#ffff00">Выберите объект для отрисовки клетки на первом боссе:</font> ${resultString}` : `<font color="#ffff00">Select an object to draw a cell on the first boss:</font> ${resultString}`);
	}

	let has_first_message_for_settings = false;

	dispatch.hook("S_LOAD_TOPO", "*", () => {
		if (has_first_message_for_settings) return;

		has_first_message_for_settings = true;

		dispatch.setTimeout(showMessageForSettings, 5000);
	});

	dispatch.setTimeout(() => {
		if (!has_first_message_for_settings) {
			has_first_message_for_settings = true;

			showMessageForSettings();
		}
	}, 500);

	// THIRD FLOOR
	let third_has_target_debuff = false;
	let third_combo_count = 0;
	let third_combo_last_128 = null;
	let third_combo_last_129 = null;

	const PizzaA = {
		offsets: [0.24, 1.29, 2.33, -2.88, -1.84, -0.8],
		distance: 200
	};

	const PizzaB = {
		offsets: [-0.26, 0.79, 1.83, 2.9, -2.34, -1.3],
		distance: 200
	};

	const PizzaC = {
		offsets: [-0.26, 1.29, 2.9, -1.84],
		distance: 200
	};

	const CounterPizzaC = {
		offsets: [0.24, 2.33, -2.88, -0.8, 0.79, 1.83, -2.34, -1.3],
		distance: 200
	};

	const Inner = {
		offsets: [0.24, 1.29, 2.33, -2.88, -1.84, -0.8, -0.26, 0.79, 1.83, 2.9, -2.34, -1.3],
		distance: 275
	};

	const Outer = {
		offsets: [0.24, 1.29, 2.33, -2.88, -1.84, -0.8, -0.26, 0.79, 1.83, 2.9, -2.34, -1.3],
		distance: 150
	};

	PizzaA.counter = PizzaB;
	PizzaB.counter = PizzaA;
	PizzaC.counter = CounterPizzaC;
	Inner.counter = Outer;
	Outer.counter = Inner;

	const Mechanics = {
		1122: {
			order: [PizzaA, Inner, Outer, PizzaB, PizzaC],
			delays: [0, 1250, 2500, 3750, 5000]
		},
		1123: {
			order: [PizzaB, PizzaA, Outer, Inner, PizzaC],
			delays: [0, 1250, 2500, 3750, 5000]
		},
		1124: {
			order: [Inner, PizzaB, PizzaA, Outer, PizzaC],
			delays: [0, 1250, 2500, 3750, 5000]
		},
		1127: {
			order: [PizzaA, PizzaB, Inner, Outer, PizzaC],
			delays: [0, 1250, 2500, 3750, 5000]
		}
	};

	const debuffs_thirdfloor = [false, false, false, false, false]; // False = Blue (Avoid Hit), True = Red (Take Hit)

	function cage_set_debuff(id, bool) {
		debuffs_thirdfloor[id] = bool;
	}

	function cage_mechanic_thirdfloor(skillId, ent) {
		if (guide.settings.firstBossCageMechObjects === false) return;

		// Если делать ссылкой то иногда может посчитать что он сместился куда-то и отрисоваться хрен пойми где
		const entLoc = ent.loc;
		const entW = ent.w;
		const entClone = { ...ent };
		entClone.loc = entLoc;
		entClone.w = entW;

		const mechanic = Mechanics[skillId];
		let objId = 537;

		if (guide.settings.firstBossCageMechObjects === "Galborne") {
			objId = 106;
		} else if (guide.settings.firstBossCageMechObjects === "Mushroom") {
			objId = 537;
		}

		if (mechanic && ent.stage == 0) {
			// eslint-disable-next-line guard-for-in
			for (const i in mechanic.order) {
				const pattern = !debuffs_thirdfloor[i] ? mechanic.order[i] : mechanic.order[i].counter;

				for (const offset of pattern.offsets) {
					if (guide.settings.firstBossCageMechObjects === "Pillar") {
						handlers.spawn({
							"id": 89141,
							"sub_type": "item",
							"delay": mechanic.delays[i] / entClone.speed,
							"sub_delay": 1466 / entClone.speed,
							"distance": pattern.distance,
							"offset": offset
						}, entClone);
					} else if (guide.settings.firstBossCageMechObjects === "Sign") {
						handlers.spawn({
							"func": "marker",
							args: [
								false,
								offset * 180 / Math.PI,
								pattern.distance,
								mechanic.delays[i] / entClone.speed,
								1466 / entClone.speed,
								true,
								["Safe", "Spot"]
							]
						}, entClone);
					} else {
						handlers.spawn({
							"id": objId,
							"delay": mechanic.delays[i] / entClone.speed,
							"sub_delay": 1466 / entClone.speed,
							"distance": pattern.distance,
							"offset": offset
						}, entClone);
					}
				}
			}
		}
	}

	function third_bait_evade(ent) {
		third_combo_count = 0;
		third_combo_last_128 = null;
		third_combo_last_129 = null;

		dispatch.setTimeout(() => {
			handlers.text({
				sub_type: "message",
				message: "Evade", message_ES: "Iframe", message_PT: "Iframe",
				message_ES: "Iframe", message_PT: "Iframe"
			});
		}, 3350 / ent.speed);
	}

	function third_combo_last_front() {
		dispatch.setTimeout(() => {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Front", message_ES: "FRENTE", message_PT: "FRENTE" },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 250, 12, 225, 0, 2500] }
			]);
		}, 500);
	}

	function third_combo_last_back() {
		dispatch.setTimeout(() => {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Back", message_ES: "ATRÁS", message_PT: "ATRÁS" },
				{ type: "spawn", func: "circle", args: [false, 553, 180, 300, 12, 275, 0, 2500] }
			]);
		}, 500);
	}

	function third_combo_last_left() {
		dispatch.setTimeout(() => {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Left", message_ES: "IZQUIERDA", message_PT: "ESQUERDA" },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2500] }
			]);
		}, 500);
	}

	function third_combo_last_right() {
		dispatch.setTimeout(() => {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Right", message_ES: "DERECHA", message_PT: "DIREITA" },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2500] }
			]);
		}, 500);
	}

	// SEVENTH FLOOR
	let seventh_fifty = false;
	let seventh_is_out_spin = false;
	let seventh_prev = null;
	let seventh_curr = null;

	dispatch.hook("S_ACTION_STAGE", 9, event => {
		if (event.skill.huntingZoneId !== 434 || event.templateId !== 7000) return;

		seventh_prev = seventh_curr;
		seventh_curr = event.skill.id;
	});

	dispatch.hook("S_BOSS_GAGE_INFO", 3, event => {
		if (event.huntingZoneId !== 434 || ![7000, 9000].includes(event.templateId)) return;

		const hpPercent = Number(event.maxHp) !== 0 ? (Number(event.curHp) / Number(event.maxHp)) * 100 : 0;

		if (event.templateId === 7000 && hpPercent < 50 && !seventh_fifty) {
			handlers.text({ type: "text", sub_type: "message", message: "50%" });
			seventh_fifty = true;
		}

		if (event.templateId === 9000) {
			if (hpPercent < 50 && !ninth_floor_fifty) {
				handlers.text({ type: "text", sub_type: "message", message: "50%" });
				handlers.text({ type: "text", sub_type: "notification", message: "Triple Soon", message_ES: "Triple Pronto", message_PT: "Triplo Embreve", delay: 1000 });
				ninth_floor_fifty = true;
			}

			if (hpPercent < 80 && !ninth_floor_eighty) {
				ninth_floor_eighty = true;
			}
		}
	});

	function seventh_message_event(skillid) {
		switch (skillid) {
			// Lakan has noticed you.
			case 1043:
				if (!seventh_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Circles > Bombs", message_ES: "Debuffs > Círculos > Bombas", message_PT: "Debuffs > Círculos > Bombas",
						message_ES: "Debuffs > Círculos > Bombas", message_PT: "Debuffs > Círculos > Bombas"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Bombs > Circles", message_ES: "Debuffs > Bombas > Círculos", message_PT: "Debuffs > Bombas > Círculos",
						message_ES: "Debuffs > Bombas > Círculos", message_PT: "Debuffs > Bombas > Círculos"
					});
				}
				break;
			// Lakan is trying to take you on one at a time.
			case 1044:
				if (!seventh_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Bombs > Debuffs", message_ES: "Círculos > Bombas > Debuffs", message_PT: "Círculos > Bombas > Debuffs",
						message_ES: "Círculos > Bombas > Debuffs", message_PT: "Círculos > Bombas > Debuffs"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Debuffs > Bombs", message_ES: "Círculos > Debuffs > Bombas", message_PT: "Círculos > Debuffs > Bombas",
						message_ES: "Círculos > Debuffs > Bombas", message_PT: "Círculos > Debuffs > Bombas"
					});
				}
				break;
			// Lakan intends to kill all of you at once.
			case 1045:
				if (!seventh_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Debuffs > Circles", message_ES: "Bombas > Debuffs > Círculos", message_PT: "Bombas > Debuffs > Círculos",
						message_ES: "Bombas > Debuffs > Círculos", message_PT: "Bombas > Debuffs > Círculos"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Circles > Debuffs", message_ES: "Bombas > Círculos > Debuffs", message_PT: "Bombas > Círculos > Debuffs",
						message_ES: "Bombas > Círculos > Debuffs", message_PT: "Bombas > Círculos > Debuffs"
					});
				}
				break;
		}
	}

	function seventh_spawn_tables(is_normal_world, ent) {
		const regularWorld = [
			{ type: "spawn", func: "marker", args: [false, 36, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 108, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 180, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 252, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 324, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 0, 225, 2000, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 72, 225, 2000, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 144, 225, 2000, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 216, 225, 2000, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 288, 225, 2000, 2000, true, ["Safe", "Spot"]] },
			// general safe spots
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 2.8, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 3.46, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.12, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.75, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.38, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.97, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 6.58, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.2, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.8, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 8.44, "ownerName": "SAFE SPOT", "message": "SAFE" }
		];

		const soulWorld = [
			{ type: "spawn", func: "marker", args: [false, 0, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 72, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 144, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 216, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 288, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 36, 225, 2000, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 108, 225, 2000, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 180, 225, 2000, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 252, 225, 2000, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 324, 225, 2000, 2000, true, ["Safe", "Spot"]] },
			// general safe spots
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 2.8, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 3.46, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.12, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.75, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.38, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.97, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 6.58, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.2, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.8, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 8.44, "ownerName": "SAFE SPOT", "message": "SAFE" }
		];

		if (is_normal_world) {
			handlers.event(regularWorld);
		} else {
			handlers.event(soulWorld);
		}
	}

	// 8th floor
	let boss_data = null;

	function set_boss_data(ent) {
		boss_data = ent;
	}

	let is_eighth_floor = false;
	let carpet_mob_game_id = null;
	let carpet_event_done = false;
	const BackCarpetMarkers = 0;
	const FrontCarpetMarkers = 1;
	const LeftCarpetMarkers = 2;
	const RightCarpetMarkers = 3;
	const CarpetMarkers = [
		[{ type: "text", sub_type: "notification", message: "Back -> Front", message_ES: "ATRÁS -> FRENTE", message_PT: "ATRÁS -> FRENTE" }],
		[{ type: "text", sub_type: "notification", message: "Front -> Back", message_ES: "FRENTE -> ATRÁS", message_PT: "FRENTE -> ATRÁS" }],
		[{ type: "text", sub_type: "notification", message: "Left -> Right", message_ES: "IZQUIERDA -> DERECHA", message_PT: "ESQUERDA -> DIREITA" }],
		[{ type: "text", sub_type: "notification", message: "Right -> Left", message_ES: "DERECHA -> IZQUIERDA", message_PT: "DIREITA -> ESQUERDA" }]
	];

	function eighth_drain_evade(ent) {
		dispatch.setTimeout(() => {
			handlers.text({
				sub_type: "message",
				message: "Evade", message_ES: "Iframe", message_PT: "Iframe",
				message_ES: "Iframe", message_PT: "Iframe"
			});
		}, 14700 / ent.speed);
	}

	function curse_mob_spawned(ent) {
		const angle = ent.loc.angleTo(boss_data.loc);

		// left: 0.79, 2.37
		// right: -2.36, -0.78
		const is_left = ((angle > 1.9 && angle < 2.7) || (angle > 0.3 && angle < 1.1));
		const curse_msg = is_left ? "Curse Left" : "Curse Right"; const curse_msg_es = is_left ? "Maldición IZQUIERDA" : "Maldición DERECHA"; const curse_msg_pt = is_left ? "Maldição ESQUERDA" : "Maldição DIREITA"; handlers.text({ sub_type: "message", message: curse_msg, message_ES: curse_msg_es, message_PT: curse_msg_pt });
	}

	function carpet_mob_spawned(ent) {
		handlers.text({
			sub_type: "message",
			message: "Carpet Mob Spawned", message_ES: "Monstruo de Alfombra Apareció", message_PT: "Monstro do Tapete Nasceu"
		});

		carpet_mob_game_id = ent.gameId;
	}

	function carpet_mob_reset_event() {
		carpet_mob_game_id = null;
		carpet_event_done = false;
	}

	dispatch.hook("S_CREATURE_ROTATE", "*", e => {
		if (!is_eighth_floor || e.gameId != carpet_mob_game_id || carpet_event_done) return;

		carpet_event_done = true;

		let pattern = null;

		if ((e.w <= -0.065 && e.w >= -1.195) || (e.w <= 1.195 && e.w >= 0.065)) {
			pattern = BackCarpetMarkers;
		} else if (e.w <= -1.45 && e.w >= -1.85) {
			pattern = RightCarpetMarkers;
		} else if ((e.w <= 3.075 && e.w >= 3.010) || e.w <= -3.010 && e.w >= -3.075) {
			pattern = FrontCarpetMarkers;
		} else if (e.w <= 1.85 && e.w >= 1.45) {
			pattern = LeftCarpetMarkers;
		}

		if (pattern !== null) {
			handlers.event(CarpetMarkers[pattern]);
		}/*  else {
			handlers.text({
				sub_type: "message",
				message: `S_CREATURE_ROTATE: ${e.w}`,
				speech: false
			});
			console.log(`S_CREATURE_ROTATE: ${e.w}`);
		} */
	});

	// 9th floor darkan
	let is_ninth_floor = false;
	let ninth_floor_fifty = false;
	let ninth_has_secondary_aggro = false;

	dispatch.hook("S_USER_EFFECT", "*", e => {
		if (!is_ninth_floor) return;

		if (e.circle == 3 && e.source == boss_data.gameId) {
			if (e.operation == 1) {
				ninth_has_secondary_aggro = true;
			} else if (e.operation == 2) {
				ninth_has_secondary_aggro = false;
			}
		}
	});

	let back_print = false;
	let back_time = 0;
	let end_back_time = 0;
	let is_one_back = false;
	let counter1_date = null;

	let enrage = false;
	let enrage_time = 0;
	let ninth_floor_eighty = false;
	let prev_back_attack = 0;
	let prev_prev_back_attack = 0;
	let ninth_triple_swipe_remaining = 0;
	let prev_date = 0;

	dispatch.hook("S_NPC_STATUS", 2, event => {
		if (!is_ninth_floor) return;

		if (event.enraged && event.remainingEnrageTime == 36000) {
			enrage_time = new Date();
			enrage = true;
		}
	});

	function boss_backattack_event() {
		end_back_time = new Date() - back_time;

		if (!back_print) {
			back_print = true;
			is_one_back = end_back_time > 0 && end_back_time < 1500;

			handlers.text({
				sub_type: "message",
				message: is_one_back ? "Back!" : "Triple Strikes | Split Strikes", message_ES: is_one_back ? "¡Atrás!" : "Tres Golpes | Empuje", message_PT: is_one_back ? "Atrás!" : "Três Golpes | Empurrão"
			});
		}

		dispatch.setTimeout(() => back_print = false, 3500);
	}

	function ninth_secondary_swipe(ent) {
		if (!ninth_has_secondary_aggro || !ninth_floor_fifty) return;

		if (ent.skill.id % 1000 === 108) {
			return handlers.event([
				{ type: "text", sub_type: "message", message_ES: "Golpe IZQUIERDO", message_PT: "Golpe ESQUERDO", message: "Left swipe" },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2500] },
				{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2500] }
			]);
		}

		if (ent.skill.id % 1000 === 105) {
			return handlers.event([
				{ type: "text", sub_type: "message", message_ES: "Golpe DERECHO", message_PT: "Golpe DIREITO", message: "Right swipe" },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2500] },
				{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2500] }
			]);
		}
	}

	function boss_backattack_event_new(curr, ent) {
		const start = new Date();
		const tmp = prev_date;
		prev_date = start;

		const time_diff = start - tmp;
		let prev_prev = prev_prev_back_attack;
		prev_prev_back_attack = prev_back_attack;
		const prev = prev_back_attack;
		prev_back_attack = curr;

		let back_combo_time_diff = 5000;
		if (counter1_date != null) {
			back_combo_time_diff = start - counter1_date;
		}

		dispatch.setTimeout(() => prev_prev = 0, back_combo_time_diff);

		if (prev == 1106 && curr == 1103 && time_diff < 1000) {
			handlers.text({
				sub_type: "message", message: "360", message_ES: "360", message_PT: "360"
			});
		} else if ((prev_prev == 1105 || prev_prev == 2105) && (prev == 1106 || prev == 2106) && (curr == 1108 || curr == 2108) && time_diff < 1500) {
			handlers.text({
				sub_type: "message", message: "360х2+", message_ES: "360 x2+", message_PT: "360 x2+"
			});
		}
	}

	let ninth_swipe_wings_curr = 0;

	dispatch.hook("S_ACTION_STAGE", 9, event => {
		if (event.skill.huntingZoneId !== 434 || event.templateId !== 9000) return;

		if (![1407, 1408].includes(event.skill.id)) {
			ninth_swipe_wings_curr = 0;
		}
	});

	function ninth_new_swipe_event(curr, ent) {
		handlers.despawn_all({ tag: "ninth_wings" });
		ninth_swipe_wings_curr = curr;

		ninth_triple_swipe_remaining--;

		if (ninth_triple_swipe_remaining > 0) {
			if (curr == 1407) {
				handlers.event([
					{ type: "text", sub_type: "message", message_ES: "IZQUIERDA", message_PT: "ESQUERDA", message: "Left", tag: "ninth_wings" },
					{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000], tag: "ninth_wings" },
					{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null], tag: "ninth_wings" },
					{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null], tag: "ninth_wings" },
					{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2000], tag: "ninth_wings" },
					{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2000], tag: "ninth_wings" },
					{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2000], tag: "ninth_wings" },
					{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2000], tag: "ninth_wings" }
				]);
			} else {
				handlers.event([
					{ type: "text", sub_type: "message", message_ES: "DERECHA", message_PT: "DIREITA", message: "Right", tag: "ninth_wings" },
					{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000], tag: "ninth_wings" },
					{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null], tag: "ninth_wings" },
					{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null], tag: "ninth_wings" },
					{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2000], tag: "ninth_wings" },
					{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2000], tag: "ninth_wings" },
					{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2000], tag: "ninth_wings" },
					{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2000], tag: "ninth_wings" }

				]);
			}
		} else if (curr == 1407) {
			handlers.event([
				{ type: "text", sub_type: "message", message_ES: "IZQUIERDA (Doble)", message_PT: "ESQUERDA (Duplo)", message: "Left (Double)", tag: "ninth_wings" },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000], tag: "ninth_wings" },
				{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null], tag: "ninth_wings" },
				{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null], tag: "ninth_wings" },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2000], tag: "ninth_wings" },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2000], tag: "ninth_wings" },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2000], tag: "ninth_wings" },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2000], tag: "ninth_wings" }
			]);
		} else {
			handlers.event([
				{ type: "text", sub_type: "message", message_ES: "DERECHA (Doble)", message_PT: "DIREITA (Duplo)", message: "Right (Double)", tag: "ninth_wings" },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000], tag: "ninth_wings" },
				{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null], tag: "ninth_wings" },
				{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null], tag: "ninth_wings" },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2000], tag: "ninth_wings" },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2000], tag: "ninth_wings" },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2000], tag: "ninth_wings" },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2000], tag: "ninth_wings" }
			]);
		}
	}

	function ninth_old_swipe_event(curr, ent) {
		enrage = !(new Date() - enrage_time >= 35500);
		const curr_triple_swipe_remaining = ninth_triple_swipe_remaining;
		const message_left = enrage ? ["Golpe IZQUIERDO (Doble)", "Golpe ESQUERDO (Duplo)", "Left swipe(double)"] : ["Golpe DERECHO (Doble)", "Golpe DIREITO (Duplo)", "Right swipe(double)"];
		const message_right = enrage ? ["Golpe DERECHO (Doble)", "Golpe DIREITO (Duplo)", "Right swipe(double)"] : ["Golpe IZQUIERDO (Doble)", "Golpe ESQUERDO (Duplo)", "Left swipe(double)"];
		const message_triple_swipe_left = enrage ? ["Golpe DERECHO", "Golpe DIREITO", "Right swipe"] : ["Golpe IZQUIERDO", "Golpe ESQUERDO", "Left swipe"];
		const message_triple_swipe_right = enrage ? ["Golpe IZQUIERDO", "Golpe ESQUERDO", "Left swipe"] : ["Golpe DERECHO", "Golpe DIREITO", "Right swipe"];
		const message_left_id = enrage ? 1 : 0;
		const message_right_id = enrage ? 0 : 1;
		const last_triple_swipe_double = ninth_floor_eighty && curr_triple_swipe_remaining == 1;

		function get_swipe_markers(message_ES, message_PT, message) {
			return [[
				{ type: "text", sub_type: "message", message: message, message_ES: message_ES, message_PT: message_PT },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
				{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2000] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2000] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2000] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2000] }
			],
			[
				{ type: "text", sub_type: "message", message: message, message_ES: message_ES, message_PT: message_PT },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
				{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2000] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2000] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2000] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2000] }
			]];
		}

		if (ninth_triple_swipe_remaining > 0) {
			ninth_triple_swipe_remaining--;
		}

		if (ninth_triple_swipe_remaining == 0 && (curr_triple_swipe_remaining == 0 || last_triple_swipe_double)) {
			if (curr == 1401) {
				handlers.event(get_swipe_markers(...message_left)[message_left_id]);
			} else {
				handlers.event(get_swipe_markers(...message_right)[message_right_id]);
			}
		} else if (curr == 1401) {
			handlers.event(get_swipe_markers(...message_triple_swipe_left)[message_left_id]);
		} else {
			handlers.event(get_swipe_markers(...message_triple_swipe_right)[message_right_id]);
		}
	}

	let triples_timer = null;
	function ninth_triples_event() {
		if (triples_timer != null) {
			dispatch.clearTimeout(triples_timer);
		}

		triples_timer = dispatch.setTimeout(() => {
			handlers.text({
				sub_type: "notification",
				message: "Triple Soon", message_ES: "Triple Pronto", message_PT: "Triplo Embreve",
				message_ES: "Triple Pronto", message_PT: "Triplo Embreve"
			});
		}, 100000);

	}

	let secondary_timer = null;
	function ninth_secondary_event() {
		if (secondary_timer != null) {
			dispatch.clearTimeout(secondary_timer);
		}

		secondary_timer = dispatch.setTimeout(() => {
			if (ninth_floor_fifty) {
				handlers.text({
					sub_type: "notification",
					message: "Secondary Soon", message_ES: "Pronto Secundario", message_PT: "Em Breve Secundário",
					message_ES: "Pronto Secundario", message_PT: "Em Breve Secundário"
				});
			}
		}, 45000);

	}
	function reset_backevent() {
		back_print = false;
		back_time = 0;
		end_back_time = 0;
		is_one_back = false;
		counter1_date = null;
		prev_back_attack = 0;
		prev_date = 0;

		// reset aggro event
		ninth_has_secondary_aggro = false;
		is_ninth_floor = false;
		ninth_floor_fifty = false;
		ninth_floor_eighty = false;
		enrage = false;
		enrage_time = 0;

		if (triples_timer != null) {
			dispatch.clearTimeout(triples_timer);
			triples_timer = null;
		}

		if (secondary_timer != null) {
			dispatch.clearTimeout(secondary_timer);
			secondary_timer = null;
		}
	}

	// 10th floor
	let tenth_debuff_list = [];
	let tenth_curr_debuff_id = null;
	let tenth_type = -1;

	function tenth_roar_evades(ent) {
		dispatch.setTimeout(() => {
			handlers.text({
				sub_type: "message",
				message: "Evades", message_ES: "Iframes", message_PT: "Iframes",
				message_ES: "Iframes", message_PT: "Iframes"
			});
		}, (ent.skill.id === 3204 ? 3000 : 2350) / ent.speed);
	}

	function tenth_blue_debuff(ent) {
		dispatch.setTimeout(() => {
			handlers.text({
				sub_type: "message",
				message: "4 (Blue)", message_ES: "4 (Azul)", message_PT: "4 (Azul)",
				message_ES: "4 (Azul)", message_PT: "4 (Azul)"
			});
		}, 8700 / ent.speed);
	}

	dispatch.hook("S_ACTION_STAGE", 9, event => {
		if (event.templateId !== 10000 || event.skill.huntingZoneId !== 434) return;

		if (![3118, 4118, 3123, 4123].includes(event.skill.id) && tenth_curr_debuff_id !== null && tenth_debuff_list.length === 0) {
			tenth_debuff_event(tenth_curr_debuff_id);
		}
	});

	const tenth_mech_messages = {
		1: { message: "1 (White)", message_ES: "1 (Blanco)", message_PT: "1 (Branco)" },
		2: { message: "2 (Green)", message_ES: "2 (Verde)", message_PT: "2 (Verde)" },
		3: { message: "3 (Red)", message_ES: "3 (Rojo)", message_PT: "3 (Vermelho)" },
		4: { message: "4 (Blue)", message_ES: "4 (Azul)", message_PT: "4 (Azul)" }
	};

	function tenth_debuff_text() {
		if (tenth_debuff_list.length === 0) return;

		if (tenth_type == 0) tenth_debuff_list.push(tenth_debuff_list.shift()); // Normal
		else tenth_debuff_list.unshift(tenth_debuff_list.pop()); // Reverse

		handlers.event([
			{ type: "text", sub_type: "message", message: tenth_mech_messages[tenth_debuff_list[0]].message, message_ES: tenth_mech_messages[tenth_debuff_list[0]].message_ES, message_PT: tenth_mech_messages[tenth_debuff_list[0]].message_PT, delay: 150 },
			{ type: "text", sub_type: "notification", message: tenth_mech_messages[tenth_debuff_list[0]].message, message_ES: tenth_mech_messages[tenth_debuff_list[0]].message_ES, message_PT: tenth_mech_messages[tenth_debuff_list[0]].message_PT, speech: false, delay: 150 }
		]);
	}

	function tenth_debuff_event(id) {
		if (id == 1) tenth_debuff_list = [1, 2, 3, 4]; // Greedy Thoughts #White
		else if (id == 2) tenth_debuff_list = [2, 3, 4, 1]; // Hateful Thoughts #Green
		else if (id == 3) tenth_debuff_list = [3, 4, 1, 2]; // Desperate Thoughts #Red
		else if (id == 4) tenth_debuff_list = [4, 1, 2, 3]; // Dreadful Thoughts #Blue
	}

	function tenth_debuff_event_with_offset(offset) {
		if (tenth_debuff_list.length === 0) return;

		const id = ((tenth_debuff_list[0] - 1 + offset) % 4 + 4) % 4 + 1;

		tenth_debuff_event(id);
	}

	return {
		// THIRD FLOOR
		"ns-434-3000": [
			{ type: "func", func: () => {
				third_has_target_debuff = false;
				third_combo_count = 0;
				third_combo_last_128 = null;
				third_combo_last_129 = null;
			} }
		],
		"nd-434-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: () => {
				third_has_target_debuff = false;
				third_combo_count = 0;
				third_combo_last_128 = null;
				third_combo_last_129 = null;
			} }
		],

		// Cage Mechanic
		"s-434-3000-1122-0": [{ "type": "func", "func": cage_mechanic_thirdfloor, args: [1122] }],
		"s-434-3000-3122-0": "s-434-3000-1122-0",
		"s-434-3000-1123-0": [{ "type": "func", "func": cage_mechanic_thirdfloor, args: [1123] }],
		"s-434-3000-3123-0": "s-434-3000-1123-0",
		"s-434-3000-1124-0": [{ "type": "func", "func": cage_mechanic_thirdfloor, args: [1124] }],
		"s-434-3000-3124-0": "s-434-3000-1124-0",
		"s-434-3000-1127-0": [{ "type": "func", "func": cage_mechanic_thirdfloor, args: [1127] }],
		"s-434-3000-3127-0": "s-434-3000-1127-0",
		"ae-0-0-90340306": [{ "type": "func", "func": cage_set_debuff, args: [0, true] }],
		"ae-0-0-90340307": [{ "type": "func", "func": cage_set_debuff, args: [0, false] }],
		"ae-0-0-90340308": [{ "type": "func", "func": cage_set_debuff, args: [1, true] }],
		"ae-0-0-90340309": [{ "type": "func", "func": cage_set_debuff, args: [1, false] }],
		"ae-0-0-90340310": [{ "type": "func", "func": cage_set_debuff, args: [2, true] }],
		"ae-0-0-90340311": [{ "type": "func", "func": cage_set_debuff, args: [2, false] }],
		"ae-0-0-90340312": [{ "type": "func", "func": cage_set_debuff, args: [3, true] }],
		"ae-0-0-90340313": [{ "type": "func", "func": cage_set_debuff, args: [3, false] }],
		"ae-0-0-90340314": [{ "type": "func", "func": cage_set_debuff, args: [4, true] }],
		"ae-0-0-90340315": [{ "type": "func", "func": cage_set_debuff, args: [4, false] }],

		// Combo mechanic
		"qb-434-3000-434302": [{ type: "func", func: () => {
			third_combo_count = 0;
			third_combo_last_128 = null;
			third_combo_last_129 = null;
		} }],
		"s-434-3000-1128-0": [ // 128 -> 106/130
			{ type: "text", sub_type: "message", message: "Back/Left", message_ES: "ATRÁS / IZQUIERDA", message_PT: "ATRÁS / ESQUERDA", check_func: () => third_combo_last_128 === null },
			{ type: "text", sub_type: "message", message: "Back", message_ES: "ATRÁS", message_PT: "ATRÁS", check_func: () => third_combo_last_128 === 130 },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 250, 12, 275, 0, 2000], check_func: () => third_combo_last_128 === 130 },
			{ type: "text", sub_type: "message", message: "Left", message_ES: "IZQUIERDA", message_PT: "ESQUERDA", check_func: () => third_combo_last_128 === 106 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 2000], check_func: () => third_combo_last_128 === 106 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 2000], check_func: () => third_combo_last_128 === 106 },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2000], check_func: () => third_combo_last_128 === 106 },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2000], check_func: () => third_combo_last_128 === 106 },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2000], check_func: () => third_combo_last_128 === 106 },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2000], check_func: () => third_combo_last_128 === 106 }
		],
		"s-434-3000-2128-0": "s-434-3000-1128-0",
		"s-434-3000-3128-0": "s-434-3000-1128-0",
		"s-434-3000-4128-0": "s-434-3000-1128-0",
		"s-434-3000-1129-0": [ // 129 -> 108/131
			{ type: "text", sub_type: "message", message: "Front/Right", message_ES: "FRENTE / DERECHA", message_PT: "FRENTE / DIREITA", check_func: () => third_combo_last_129 === null },
			{ type: "text", sub_type: "message", message: "Front", message_ES: "FRENTE", message_PT: "FRENTE", check_func: () => third_combo_last_129 === 131 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 275, 12, 225, 0, 2000], check_func: () => third_combo_last_129 === 131 },
			{ type: "text", sub_type: "message", message: "Right", message_ES: "DERECHA", message_PT: "DIREITA", check_func: () => third_combo_last_129 === 108 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 2000], check_func: () => third_combo_last_129 === 108 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 2000], check_func: () => third_combo_last_129 === 108 },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2000], check_func: () => third_combo_last_129 === 108 },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2000], check_func: () => third_combo_last_129 === 108 },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2000], check_func: () => third_combo_last_129 === 108 },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2000], check_func: () => third_combo_last_129 === 108 }
		],
		"s-434-3000-2129-0": "s-434-3000-1129-0",
		"s-434-3000-3129-0": "s-434-3000-1129-0",
		"s-434-3000-4129-0": "s-434-3000-1129-0",
		"s-434-3000-1130-0": [ // 128 -> 130
			{
				type: "func", func: () => {
					if (third_combo_count === 2 && third_combo_last_129 === 131 && third_combo_last_128 === 106) {
						third_combo_last_front();
					}
					if (third_combo_count === 2 && third_combo_last_129 === 108 && third_combo_last_128 === 106) {
						third_combo_last_right();
					}
					if (third_combo_count === 2 && third_combo_last_129 !== null && third_combo_last_128 === null) {
						third_combo_last_back();
					}
				}
			},
			{ type: "text", sub_type: "message", message: "Left", message_ES: "IZQUIERDA", message_PT: "ESQUERDA", check_func: () => third_combo_last_128 === null },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500], check_func: () => third_combo_last_128 === null },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500], check_func: () => third_combo_last_128 === null },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500], check_func: () => third_combo_last_128 === null },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500], check_func: () => third_combo_last_128 === null },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500], check_func: () => third_combo_last_128 === null },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500], check_func: () => third_combo_last_128 === null },
			{ type: "func", func: () => third_combo_last_128 = 130 },
			{ type: "func", func: () => third_combo_count++ }
		],
		"s-434-3000-2130-0": "s-434-3000-1130-0",
		"s-434-3000-3130-0": "s-434-3000-1130-0",
		"s-434-3000-4130-0": "s-434-3000-1130-0",
		"s-434-3000-1106-0": [ // 128 -> 106
			{
				type: "func", func: () => {
					if (third_combo_count === 2 && third_combo_last_129 === 131 && third_combo_last_128 === 130) {
						third_combo_last_front();
					}
					if (third_combo_count === 2 && third_combo_last_129 === 108 && third_combo_last_128 === 130) {
						third_combo_last_right();
					}
					if (third_combo_count === 2 && third_combo_last_129 !== null && third_combo_last_128 === null) {
						third_combo_last_left();
					}
				}
			},
			{ type: "text", sub_type: "message", message: "Back", message_ES: "ATRÁS", message_PT: "ATRÁS", check_func: () => third_combo_last_128 === null },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 300, 12, 275, 0, 1500], check_func: () => third_combo_last_128 === null },
			{ type: "func", func: () => third_combo_last_128 = 106 },
			{ type: "func", func: () => third_combo_count++ }
		],
		"s-434-3000-2106-0": "s-434-3000-1106-0",
		"s-434-3000-3106-0": "s-434-3000-1106-0",
		"s-434-3000-4106-0": "s-434-3000-1106-0",
		"s-434-3000-1131-0": [ // 129 -> 131
			{
				type: "func", func: () => {
					if (third_combo_count === 2 && third_combo_last_128 === 130 && third_combo_last_129 === 108) {
						third_combo_last_back();
					}
					if (third_combo_count === 2 && third_combo_last_128 === 106 && third_combo_last_129 === 108) {
						third_combo_last_left();
					}
					if (third_combo_count === 2 && third_combo_last_128 !== null && third_combo_last_129 === null) {
						third_combo_last_front();
					}
				}
			},
			{ type: "text", sub_type: "message", message: "Right", message_ES: "DERECHA", message_PT: "DIREITA", check_func: () => third_combo_last_129 === null },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500], check_func: () => third_combo_last_129 === null },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500], check_func: () => third_combo_last_129 === null },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500], check_func: () => third_combo_last_129 === null },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500], check_func: () => third_combo_last_129 === null },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500], check_func: () => third_combo_last_129 === null },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500], check_func: () => third_combo_last_129 === null },
			{ type: "func", func: () => third_combo_last_129 = 131 },
			{ type: "func", func: () => third_combo_count++ }
		],
		"s-434-3000-2131-0": "s-434-3000-1131-0",
		"s-434-3000-3131-0": "s-434-3000-1131-0",
		"s-434-3000-4131-0": "s-434-3000-1131-0",
		"s-434-3000-1108-0": [ // 129 -> 108
			{
				type: "func", func: () => {
					if (third_combo_count === 2 && third_combo_last_128 === 130 && third_combo_last_129 === 131) {
						third_combo_last_back();
					}
					if (third_combo_count === 2 && third_combo_last_128 === 106 && third_combo_last_129 === 131) {
						third_combo_last_left();
					}
					if (third_combo_count === 2 && third_combo_last_128 !== null && third_combo_last_129 === null) {
						third_combo_last_right();
					}
				}
			},
			{ type: "text", sub_type: "message", message: "Front", message_ES: "FRENTE", message_PT: "FRENTE", check_func: () => third_combo_last_129 === null },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 250, 12, 225, 0, 1500], check_func: () => third_combo_last_129 === null },
			{ type: "func", func: () => third_combo_last_129 = 108 },
			{ type: "func", func: () => third_combo_count++ }
		],
		"s-434-3000-2108-0": "s-434-3000-1108-0",
		"s-434-3000-3108-0": "s-434-3000-1108-0",
		"s-434-3000-4108-0": "s-434-3000-1108-0",

		"s-434-3000-1112-0": [{ type: "text", sub_type: "message", message: "To the Boss", message_ES: "Al Boss", message_PT: "No Boss" }],
		"s-434-3000-2112-0": "s-434-3000-1112-0",
		"s-434-3000-3112-0": "s-434-3000-1112-0",
		"s-434-3000-4112-0": "s-434-3000-1112-0",
		"am-434-3000-90340330": [{ "type": "func", "func": () => third_has_target_debuff = true }],
		"ar-434-3000-90340330": [{ "type": "func", "func": () => third_has_target_debuff = false }],
		"s-434-3000-1134-0": [
			{ type: "text", sub_type: "message", message: "Debuff on close: Take", message_ES: "Debuff en Cercano: Tomar", message_PT: "Debuff no Próximo: Pegar", check_func: () => !third_has_target_debuff },
			{ type: "text", sub_type: "message", message: "Debuff: Don't take", message_ES: "Debuff: No Tomar", message_PT: "Debuff: Não Pegar", check_func: () => third_has_target_debuff }
		], //
		"s-434-3000-2134-0": "s-434-3000-1134-0",
		"s-434-3000-3134-0": "s-434-3000-1134-0",
		"s-434-3000-4134-0": "s-434-3000-1134-0",
		"s-434-3000-1502-0": [
			{ type: "text", sub_type: "message", message: "Reclining -> Cage", message_ES: "Empuje -> Jaula", message_PT: "Empurrão -> Jaula" },
			{ type: "text", sub_type: "message", message: "Place block at the back", message_ES: "Colocar Bloque Atrás", message_PT: "Colocar Bloco Atrás", delay: 100, class_position: "tank" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 400, 0, 3500] }
		],
		"s-434-3000-2502-0": "s-434-3000-1502-0",
		"s-434-3000-3502-0": "s-434-3000-1502-0",
		"s-434-3000-4502-0": "s-434-3000-1502-0",
		"s-434-3000-1502-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 400, 0, 2500] }
		],
		"s-434-3000-2502-1": "s-434-3000-1502-1",
		"s-434-3000-3502-1": "s-434-3000-1502-1",
		"s-434-3000-4502-1": "s-434-3000-1502-1",
		"s-434-3000-1302-0": [
			{ type: "text", sub_type: "message", message: "Bait (Target)", message_ES: "Bait (Objetivo)", message_PT: "Bait (Alvo)" },
			{ type: "func", func: third_bait_evade }
		],
		"s-434-3000-1906-0": [
			{ type: "text", sub_type: "message", message: "Donuts: OUT | IN | OUT", message_ES: "Donuts: SALIR | ENTRAR | SALIR", message_PT: "Donuts: SAIR | ENTRAR | SAIR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 25, 12, 200, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 25, 12, 360, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 25, 12, 520, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 25, 12, 680, 0, 6000] }
		],
		"s-434-3000-1907-0": [
			{ type: "text", sub_type: "message", message: "Donuts: IN | OUT | IN", message_ES: "Donuts: ENTRAR | SALIR | ENTRAR", message_PT: "Donuts: ENTRAR | SAIR | ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 25, 12, 200, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 25, 12, 360, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 25, 12, 520, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 25, 12, 680, 0, 6000] }
		],
		"s-434-3000-1603-0": [
			{ type: "text", sub_type: "message", message: "IN -> OUT", message_ES: "ENTRAR > SALIR", message_PT: "ENTRAR > SAIR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 275, 0, 5500] }
		],
		"s-434-3000-1604-0": [
			{ type: "text", sub_type: "message", message: "OUT -> IN", message_ES: "SALIR > ENTRAR", message_PT: "SAIR > ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 275, 0, 5500] }
		],

		// SEVENTH FLOOR

		// Lasers + Mechanic
		"ns-434-7000": [{ type: "func", func: () => seventh_fifty = false }],
		"nd-434-7000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"dm-0-0-90340703": [{ type: "func", func: seventh_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-90340704": [{ type: "func", func: seventh_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-90340705": [{ type: "func", func: seventh_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-434-7000-1105-0": [
			{ type: "text", sub_type: "message", message: "Discarding", message_ES: "Descarte", message_PT: "Descarte" },
			{ type: "text", sub_type: "message", message: "Place block at the back", message_ES: "Colocar Bloque Atrás", message_PT: "Colocar Bloco Atrás", delay: 100, class_position: "tank" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -95, 850, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 95, 850, 0, 3000] }
		],
		"s-434-7000-2105-0": "s-434-7000-1105-0",
		"s-434-7000-1110-0": [{ type: "text", sub_type: "message", message: "Claw", message_ES: "Garra", message_PT: "Garra" }],
		"s-434-7000-2110-0": "s-434-7000-1110-0",
		"s-434-7000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_ES: "Garra", message_PT: "Garra" }],
		"s-434-7000-2136-0": "s-434-7000-1136-0",
		"s-434-7000-1129-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR", message_PT: "ENTRAR" }],
		"s-434-7000-2129-0": "s-434-7000-1129-0",
		"s-434-7000-1130-0": [
			{ type: "text", sub_type: "message", message: "Shield Strike", message_ES: "Golpe al Escudo", message_PT: "Golpe no Escudo" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 130, 0, 270, 0, 2500] }
		],
		"s-434-7000-2130-0": "s-434-7000-1130-0",
		"s-434-7000-1103-0": [
			{ "type": "text", "sub_type": "message", "message": "OUT -> Donuts IN", "message_ES": "SALIR -> Donuts ENTRAR", "message_PT": "SAIR -> Donuts ENTRAR", check_func: () => seventh_is_out_spin && [1105, 2105].includes(seventh_prev) },
			{ "type": "text", "sub_type": "message", "message": "IN -> Donuts OUT", "message_ES": "ENTRAR -> Donuts SALIR", "message_PT": "ENTRAR -> Donuts SAIR", check_func: () => !seventh_is_out_spin && [1105, 2105].includes(seventh_prev) }
		],
		"s-434-7000-2103-0": "s-434-7000-1103-0",
		"s-434-7000-1132-0": [
			{ type: "func", func: () => seventh_is_out_spin = false },
			{ type: "text", sub_type: "message", message: "AOE Shield", message_ES: "Escudo AOE", message_PT: "Escudo AOE" },
			{ type: "spawn", func: "semicircle", args: [-65, 65, 553, 0, 0, null, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, -65, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, 65, 600, 0, 3000] }
		],
		"s-434-7000-2132-0": "s-434-7000-1132-0",
		"s-434-7000-1131-0": [{ type: "func", func: () => seventh_is_out_spin = true }],
		"s-434-7000-2131-0": "s-434-7000-1131-0",
		"s-434-7000-1133-0": [
			{ type: "text", sub_type: "message", message: "AOE Shield", message_ES: "Escudo AOE", message_PT: "Escudo AOE" },
			{ type: "spawn", func: "semicircle", args: [-65, 65, 553, 0, 0, null, 600, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, -65, 600, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, 65, 600, 0, 6000] }
		],
		"s-434-7000-2133-0": "s-434-7000-1133-0",
		"s-434-7000-1135-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR", message_PT: "ENTRAR" }],
		"s-434-7000-2135-0": "s-434-7000-1135-0",
		"s-434-7000-1240-0": [
			{ type: "text", sub_type: "message", message: "Donuts: OUT | IN | OUT", message_ES: "Donuts: SALIR | ENTRAR | SALIR", message_PT: "Donuts: SAIR | ENTRAR | SAIR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 0, 200, 0, 5500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 0, 360, 0, 5500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 0, 520, 0, 5500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 0, 680, 0, 5500] }
		],
		"s-434-7000-2240-0": "s-434-7000-1240-0",
		"s-434-7000-1401-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "Plague/Regress", message_PT: "Plague/Regress" }],
		"s-434-7000-2401-0": "s-434-7000-1401-0",
		"s-434-7000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_ES: "Dormir", message_PT: "Dormir" }],
		"s-434-7000-2402-0": "s-434-7000-1402-0",
		"s-434-7000-1701-0": [{ type: "text", sub_type: "message", message: "Back + front", message_ES: "Atrás + Frente", message_PT: "Atrás + Frente" }],
		"s-434-7000-2701-0": "s-434-7000-1701-0",
		"s-434-7000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait", message_PT: "Bait" }],
		"s-434-7000-2113-0": "s-434-7000-1113-0",
		"s-434-7000-1151-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun" }],
		"s-434-7000-2151-0": "s-434-7000-1151-0",
		"s-434-7000-1152-0": [
			{ type: "text", sub_type: "message", message: "Stun + Back", message_ES: "Stun + Atrás", message_PT: "Stun + Atrás" },
			{ type: "spawn", func: "semicircle", args: [110, 250, 553, 0, 0, null, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 70, -1000, 70, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 290, -1000, -70, 1000, 0, 6000] }
		],
		"s-434-7000-2152-0": "s-434-7000-1152-0",
		"s-434-7000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }],
		"s-434-7000-2138-0": "s-434-7000-1138-0",
		"s-434-7000-1140-0": [
			{ type: "text", sub_type: "message", message: "Donuts: OUT | IN", message_ES: "Donuts: SALIR | ENTRAR", message_PT: "Donuts: SAIR | ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 0, 200, 0, 5500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 0, 360, 0, 5500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 0, 520, 0, 5500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 0, 680, 0, 5500] }
		],
		"s-434-7000-2140-0": "s-434-7000-1140-0",
		"s-434-7000-1153-0": [
			{ type: "text", sub_type: "message", message: "Donuts: IN | OUT", message_ES: "Donuts: ENTRAR | SALIR", message_PT: "Donuts: ENTRAR | SAIR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 0, 200, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 0, 360, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 0, 520, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 0, 680, 0, 4000] }
		],
		"s-434-7000-2153-0": "s-434-7000-1153-0",
		"s-434-7000-1154-0": [
			{ "type": "text", "sub_type": "message", "message": "OUT", "message_ES": "SALIR", "message_PT": "SAIR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-434-7000-2154-0": "s-434-7000-1154-0",
		"s-434-7000-1155-0": [
			{ "type": "text", "sub_type": "message", "message": "IN", "message_ES": "ENTRAR", "message_PT": "ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-434-7000-2155-0": "s-434-7000-1155-0",
		"s-434-7000-7901-0": [ // normal world
			{ type: "text", sub_type: "message", message: "Debuffs Closest", message_ES: "Debuffs Más Cercanos", message_PT: "Debuffs Mais Próximos" },
			{ type: "text", sub_type: "notification", message: "Debuffs Closest", message_ES: "Debuffs Más Cercanos", message_PT: "Debuffs Mais Próximos" },
			{ type: "func", func: seventh_spawn_tables, args: [true] }
		],
		"s-434-7000-7902-0": [ // soul world
			{ type: "text", sub_type: "message", message: "Debuffs Farthest", message_ES: "Debuffs Más Lejanos", message_PT: "Debuffs Mais Longe" },
			{ type: "text", sub_type: "notification", message: "Debuffs Farthest", message_ES: "Debuffs Más Lejanos", message_PT: "Debuffs Mais Longe" },
			{ type: "func", func: seventh_spawn_tables, args: [false] }
		],
		"s-434-7000-7903-0": [ // normal world
			{ type: "text", sub_type: "message", message: "Gather + Cleanse", message_ES: "Juntar + Cleanse", message_PT: "Juntar + Cleanse" },
			{ type: "text", sub_type: "notification", message: "Gather + Cleanse", message_ES: "Juntar + Cleanse", message_PT: "Juntar + Cleanse" },
			{ type: "func", func: seventh_spawn_tables, args: [true] }
		],
		"s-434-7000-7904-0": [ // soul world
			{ type: "text", sub_type: "message", message: "Gather + No cleanse", message_ES: "Juntar + Sin Cleanse", message_PT: "Juntar + Sem Cleanse" },
			{ type: "text", sub_type: "notification", message: "Gather + No cleanse", message_ES: "Juntar + Sin Cleanse", message_PT: "Juntar + Sem Cleanse" },
			{ type: "func", func: seventh_spawn_tables, args: [false] }
		],
		"s-434-7000-7905-0": [ // normal world
			{ type: "text", sub_type: "message", message: "Spread", message_ES: "Separarse", message_PT: "Espalhar" },
			{ type: "text", sub_type: "notification", message: "Spread", message_ES: "Separarse", message_PT: "Espalhar" },
			{ type: "func", func: seventh_spawn_tables, args: [true] },
			{ type: "text", sub_type: "message", message: "Gather", message_ES: "Juntar", message_PT: "Juntar", delay: 5800 },
			{ type: "text", sub_type: "notification", message: "Gather", message_ES: "Juntar", message_PT: "Juntar", delay: 5800 }
		],
		"s-434-7000-7906-0": [ // soul world
			{ type: "text", sub_type: "message", message: "Gather", message_ES: "Juntar", message_PT: "Juntar" },
			{ type: "text", sub_type: "alert", message: "Gather", message_ES: "Juntar", message_PT: "Juntar" },
			{ type: "text", sub_type: "notification", message: "Gather", message_ES: "Juntar", message_PT: "Juntar" },
			{ type: "func", func: seventh_spawn_tables, args: [false] },
			{ type: "text", sub_type: "message", message: "Spread", message_ES: "Separarse", message_PT: "Espalhar", delay: 5800 },
			{ type: "text", sub_type: "notification", message: "Spread", message_ES: "Separarse", message_PT: "Espalhar", delay: 5800 }
		],
		"s-434-7000-1144-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }],
		"s-434-7000-2144-0": "s-434-7000-1144-0",
		"s-434-7000-1145-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }],
		"s-434-7000-2145-0": "s-434-7000-1145-0",

		// EIGHTH FLOOR
		"ns-434-8000": [
			{ type: "func", func: () => is_eighth_floor = true },
			{ type: "func", func: set_boss_data }
		],
		"nd-434-8000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: () => is_eighth_floor = false },
			{ type: "func", func: () => boss_data = null }
		],
		"ns-434-8100": [{ type: "func", func: curse_mob_spawned }],
		"ns-434-8200": [{ type: "func", func: carpet_mob_spawned }],
		"nd-434-8200": [{ type: "func", func: carpet_mob_reset_event }],
		"qb-434-8000-459006": [{ type: "text", sub_type: "alert", message: "Red Circles", message_ES: "Círculos Rojos", message_PT: "Círculos Vermelhos" }],
		"qb-434-8000-434801": [
			{ type: "text", sub_type: "message", message: "Orbs", message_ES: "Orbes", message_PT: "Orbes" },
			{ type: "text", sub_type: "message", delay: 10000, message: "Attention Orbs", message_ES: "Atención Orbes", message_PT: "Atenção Orbes" }
		],
		"s-434-8200-3102-0": [{ type: "text", sub_type: "message", message: "Yellow Circles", message_ES: "Círculos Amarillos", message_PT: "Círculos Amarelos" }],
		"s-434-8000-1110-0": [
			{ type: "text", sub_type: "message", message: "Lightning", message_ES: "Relámpago", message_PT: "Relâmpago" },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		],
		"s-434-8000-2110-0": "s-434-8000-1110-0",
		"s-434-8000-1303-0": [{ type: "func", func: eighth_drain_evade }],
		"s-434-8000-2303-0": "s-434-8000-1303-0",

		// 9th FLOOR
		"rb-434-9000": [
			{ type: "func", func: () => enrage = true },
			{ type: "func", func: () => enrage_time = new Date() },
			{ type: "func", func: () => ninth_triple_swipe_remaining++, check_func: () => ninth_swipe_wings_curr },
			{ type: "func", func: () => ninth_new_swipe_event, args: [ninth_swipe_wings_curr], check_func: () => ninth_swipe_wings_curr }
		],
		"re-434-9000": [
			{ type: "func", func: () => enrage = false },
			{ type: "func", func: () => enrage_time = 0 },
			{ type: "func", func: () => ninth_triple_swipe_remaining++, check_func: () => ninth_swipe_wings_curr },
			{ type: "func", func: () => ninth_new_swipe_event, args: [ninth_swipe_wings_curr], check_func: () => ninth_swipe_wings_curr }
		],
		"ns-434-9000": [
			{ type: "func", func: () => is_ninth_floor = true },
			{ type: "func", func: ninth_triples_event },
			{ type: "func", func: ninth_secondary_event },
			{ type: "func", func: set_boss_data }
		],
		"nd-434-9000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: reset_backevent },
			{ type: "func", func: () => boss_data = null }
		],
		"h-434-9000-99": [{ type: "func", func: () => is_ninth_floor = true }],
		"dm-0-0-9034901": [
			{ type: "text", sub_type: "message", message: "Triple", message_ES: "Triple", message_PT: "Triplo" },
			{ type: "func", func: () => ninth_triple_swipe_remaining = 3 },
			{ type: "func", func: ninth_triples_event }
		],
		"s-434-9000-1112-0": [{ type: "text", sub_type: "message", message_ES: "Movimiento hacia Atrás", message_PT: "Movimento para Atrás", message: "Back Move" }],
		"s-434-9000-2112-0": "s-434-9000-1112-0",
		"s-434-9000-1101-0": [{ type: "func", func: boss_backattack_event }],
		"s-434-9000-2101-0": "s-434-9000-1101-0",
		"s-434-9000-1102-0": [{ type: "func", func: () => back_time = new Date() }],
		"s-434-9000-2102-0": "s-434-9000-1102-0",
		"s-434-9000-1106-0": [{ type: "func", func: boss_backattack_event_new, args: [1106] }],
		"s-434-9000-1105-0": [
			{ type: "func", func: boss_backattack_event_new, args: [1105] },
			{ type: "func", func: ninth_secondary_swipe }
		],
		"s-434-9000-1103-0": [{ type: "func", func: boss_backattack_event_new, args: [1103] }],
		"s-434-9000-1108-0": [
			{ type: "func", func: boss_backattack_event_new, args: [1108] },
			{ type: "func", func: ninth_secondary_swipe }
		],
		"s-434-9000-1114-0": [
			{ type: "text", sub_type: "message", message_ES: "Ataque al Objetivo", message_PT: "Ataque no Alvo", message: "Target Attack" },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-434-9000-2114-0": "s-434-9000-1114-0",
		"s-434-9000-1115-0": [
			{ type: "text", sub_type: "message", message: "Gather on secondary aggro", message_ES: "Juntar en Aggro Secundario", message_PT: "Juntar no Aggro Secundário" },
			{ type: "text", sub_type: "message", delay: 1317, message: "3" },
			{ type: "text", sub_type: "message", delay: 2634, message: "2" },
			{ type: "text", sub_type: "message", delay: 3951, message: "1" },
			{ type: "text", sub_type: "message", delay: 4871, message_ES: "Salir de los Charcos", message_PT: "Sair das Poças", message: "Get out of the puddles" }
		],
		"s-434-9000-2115-0": "s-434-9000-1115-0",
		"s-434-9000-1117-0": [
			{ type: "text", sub_type: "message", message_ES: "2x Frente", message_PT: "2x Frente", message: "2хFront" },
			{ type: "text", sub_type: "message", delay: 2500, message_ES: "Empujar Frente", message_PT: "Empurrar Frente", message: "Push front" }
		],
		"s-434-9000-2117-0": "s-434-9000-1117-0",
		"s-434-9000-1302-0": [
			{ type: "text", sub_type: "message", message_ES: "AOE", message_PT: "AOE", message: "AOE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 100, 6000] }
		],
		"s-434-9000-1407-0": [{ type: "func", func: ninth_new_swipe_event, args: [1407] }],
		"s-434-9000-1408-0": [{ type: "func", func: ninth_new_swipe_event, args: [1408] }],
		"s-434-9000-2103-0": [{ type: "func", func: boss_backattack_event_new, args: [2103] }],
		"s-434-9000-2105-0": [
			{ type: "func", func: boss_backattack_event_new, args: [2105] },
			{ type: "func", func: ninth_secondary_swipe }
		],
		"s-434-9000-2106-0": [
			{ type: "func", func: boss_backattack_event_new, args: [2106] }
		],
		"s-434-9000-2108-0": [
			{ type: "func", func: boss_backattack_event_new, args: [2108] },
			{ type: "func", func: ninth_secondary_swipe }
		],
		"s-434-9000-1303-0": [{ type: "text", sub_type: "message", message_ES: "Ataque Giratorio", message_PT: "Ataque Giratório", message: "Spin Attack" }],
		"s-434-9000-1401-0": [{ type: "func", func: ninth_old_swipe_event, args: [1401] }],
		"s-434-9000-1402-0": [{ type: "func", func: ninth_old_swipe_event, args: [1402] }],
		"s-434-9000-1301-0": [{ type: "text", sub_type: "message", message_ES: "Stun Entrante", message_PT: "Stun Chegando", message: "Incoming Stun" }],
		"s-434-9000-1801-0": [{ type: "text", sub_type: "message", message_ES: "Stun Entrante", message_PT: "Stun Chegando", message: "Incoming Stun" }],
		"s-434-9000-1312-0": [{ type: "text", sub_type: "message", message_ES: "Monstruos", message_PT: "Monstros", message: "Minions" }],

		// Manyaa floor 10
		"ns-434-10000": [
			{ type: "func", func: () => tenth_debuff_list = [] },
			{ type: "func", func: () => tenth_curr_debuff_id = null }
		],
		"nd-434-10000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-434-10000-40": [{ type: "text", sub_type: "message", message: "40%" }],
		"h-434-10000-50": [{ type: "text", sub_type: "message", message: "50%" }],
		"h-434-10000-80": [{ type: "text", sub_type: "message", message: "80%" }],
		// Donuts
		"s-434-10000-3102-0": [{ type: "text", sub_type: "message", message: "In - Out", message_ES: "ENTRAR > SALIR", message_PT: "ENTRAR > SAIR" }],
		"s-434-10000-4102-0": "s-434-10000-3102-0",
		// AoE
		"s-434-10000-3122-0": [
			{ type: "text", sub_type: "message", message: "Roar (AoE) - Inward Waves", message_ES: "Rugido (AOE) - Olas Hacia Adentro", message_PT: "Rugido (AOE) - Ondas Para Dentro" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 9000] }
		],
		"s-434-10000-4122-0": "s-434-10000-3122-0",
		"s-434-10000-3204-0": [
			{ type: "func", func: tenth_roar_evades },
			{ type: "text", sub_type: "message", message: "Roar (AoE)", message_ES: "Rugido (AOE)", message_PT: "Rugido (AOE)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 525, 0, 5000] }
		],
		"s-434-10000-4204-0": "s-434-10000-3204-0",
		// Puddle
		"s-434-10000-3116-0": [{ type: "text", sub_type: "message", message: "5 Puddles", message_ES: "5 Charcos", message_PT: "5 Poças" }],
		"s-434-10000-4116-0": "s-434-10000-3116-0",
		// Shield Phase
		"s-434-10000-3303-0": [
			{ type: "text", sub_type: "message", message: "Shield", message_ES: "Escudo", message_PT: "Escudo" },
			{ type: "text", sub_type: "message", message: "Shield soon...!", message_ES: "Escudo Pronto...!", message_PT: "Escudo em Breve...!", delay: 100000 }
		],
		// Stuns
		"s-434-10000-3119-0": [
			{ type: "text", sub_type: "message", message: "Stun Frontal", message_ES: "Stun Frontal", message_PT: "Stun Frontal" },
			{ type: "spawn", func: "circle", args: [false, 553, -40, 180, 20, 175, 0, 1450] },
			{ type: "spawn", func: "circle", args: [false, 553, 40, 180, 20, 175, 0, 1450] }
		],
		"s-434-10000-3104-0": [
			{ type: "text", sub_type: "message", message: "Jump (Stun)", message_ES: "Salto (Stun)", message_PT: "Salto (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 10, 25, 200, 0, 1500] },
			{ type: "spawn", func: "circle", args: [true, 553, 45, 220, 25, 90, 0, 1500] },
			{ type: "spawn", func: "circle", args: [true, 553, -45, 220, 25, 90, 0, 1500] }
		],
		"s-434-10000-3108-0": [{ type: "text", sub_type: "message", message: "Fly (Puddle)", message_ES: "Volar (Charco)", message_PT: "Voar (Poça)" }],
		"s-434-10000-3108-2": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 20, 200, 0, 1250] }],
		"s-434-10000-4119-0": "s-434-10000-3119-0",
		"s-434-10000-4104-0": "s-434-10000-3104-0",
		"s-434-10000-4108-0": "s-434-10000-3108-0",
		"s-434-10000-4108-2": "s-434-10000-3108-2",
		// Attacks
		"s-434-10000-3107-0": [{ type: "text", sub_type: "message", message: "Laser", message_ES: "Láser", message_PT: "Laser" }],
		"s-434-10000-3109-0": [{ type: "text", sub_type: "message", message: "Stun (Puddle)", message_ES: "Stun (Charco)", message_PT: "Stun (Poça)" }],
		"s-434-10000-3115-0": [
			{ type: "text", sub_type: "message", message: "Tail Split", message_ES: "Dividir Cola", message_PT: "Dividir Cauda" },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 220, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -220, 350, 0, 3000] }
		],
		"s-434-10000-3120-0": [{ type: "text", sub_type: "message", message: "Tail Pushback", message_ES: "Empuje Cola", message_PT: "Empurrão Cauda" }],
		"s-434-10000-3205-0": [{ type: "text", sub_type: "message", message: "Dig Attack", message_ES: "Ataque Subterráneo", message_PT: "Ataque Subterrâneo" }],
		"s-434-10000-3205-1": [{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 20, 185, 0, 1500] }],
		"s-434-10000-4205-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 20, 185, 0, 1500] }],
		"s-434-10000-4107-0": "s-434-10000-3107-0",
		"s-434-10000-4109-0": "s-434-10000-3109-0",
		"s-434-10000-4115-0": "s-434-10000-3115-0",
		"s-434-10000-4205-0": "s-434-10000-3205-0",
		"s-434-10000-4120-0": "s-434-10000-3120-0",
		// Plus circles
		"s-434-10000-3117-0": [
			{ type: "spawn", func: "circle", args: [false, 553, 0, 300, 20, 185, 0, 2177] },
			{ type: "spawn", func: "circle", args: [false, 553, 90, 300, 20, 185, 0, 2177] },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 300, 20, 185, 0, 2177] },
			{ type: "spawn", func: "circle", args: [false, 553, 270, 300, 20, 185, 0, 2177] }
		],
		"s-434-10000-4117-0": "s-434-10000-3117-0",
		// Debuff Mechs
		"s-434-10000-3118-0": [
			{ type: "func", func: () => tenth_type = 0 },
			{ type: "func", func: tenth_debuff_text },
			{ type: "text", sub_type: "message", message: "Debuff (Normal)", message_ES: "Debuff (Normal)", message_PT: "Debuff (Normal)" },
			{ type: "func", func: tenth_blue_debuff }
		],
		"s-434-10000-4118-0": "s-434-10000-3118-0",
		"s-434-10000-3123-0": [
			{ type: "func", func: () => tenth_type = 1 },
			{ type: "func", func: tenth_debuff_text },
			{ type: "text", sub_type: "message", message: "Debuff (Reverse)", message_ES: "Debuff (Invertido)", message_PT: "Debuff (Invertido)" },
			{ type: "func", func: tenth_blue_debuff }
		],
		"s-434-10000-4123-0": "s-434-10000-3123-0",

		"am-434-10000-31471004": [{ type: "func", func: () => tenth_curr_debuff_id = 1, check_func: () => tenth_curr_debuff_id === null }],
		"am-434-10000-31471005": [{ type: "func", func: () => tenth_curr_debuff_id = 2, check_func: () => tenth_curr_debuff_id === null }],
		"am-434-10000-31471006": [{ type: "func", func: () => tenth_curr_debuff_id = 3, check_func: () => tenth_curr_debuff_id === null }],
		"am-434-10000-31471007": [{ type: "func", func: () => tenth_curr_debuff_id = 4, check_func: () => tenth_curr_debuff_id === null }],

		"am-434-10000-310471008": [{ type: "func", func: tenth_debuff_event, args: [1] }],
		"am-434-10000-31471009": [{ type: "func", func: tenth_debuff_event, args: [2] }],
		"am-434-10000-31471010": [{ type: "func", func: tenth_debuff_event, args: [3] }],
		"am-434-10000-31471011": [{ type: "func", func: tenth_debuff_event, args: [4] }],

		// Debuffs
		"s-434-10000-3319-0": [{ type: "func", func: tenth_debuff_event_with_offset, args: [1] }],
		"s-434-10000-3320-0": [{ type: "func", func: tenth_debuff_event_with_offset, args: [2] }],
		"s-434-10000-3321-0": [{ type: "func", func: tenth_debuff_event_with_offset, args: [3] }],

		// Plague/Regress
		"ab-434-10000-31470100-1": [{ type: "text", sub_type: "message", message: "Plague/Regress - Stack 1", message_ES: "Plague/Regress - Carga 1", message_PT: "Plague/Regress - Acúmulo 1" }],
		"ab-434-10000-31470100-2": [{ type: "text", sub_type: "message", message: "Plague/Regress - Stack 2", message_ES: "Plague/Regress - Carga 2", message_PT: "Plague/Regress - Acúmulo 2" }]
	};
};
