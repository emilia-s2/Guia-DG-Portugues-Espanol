// Rampaging RK-9 Kennel
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	let orb_notice = true;
	let boss_seventy = false;
	let msg_a = 3;
	let msg_b = 3;
	let mech_reverse = false;
	let mech_notice = false;

	const mech_messages = {
		0: { message: "Out", message_PT: "SAIR", message_ES: "SALIR" },
		1: { message: "In", message_PT: "ENTRAR", message_ES: "ENTRAR" },
		2: { message: "Wave", message_PT: "Onda", message_ES: "Ola" },
		3: { message: "?", message_PT: "?", message_ES: "?" }
	};

	// Throwing orbs
	function throwing_orb_event() {
		if (orb_notice) {
			orb_notice = false;

			handlers.text({
				sub_type: "message",
				message: "Throwing Orb",
				message_PT: "Jogar Bombas",
				message_ES: "Jugar Bombs"
			});

			dispatch.setTimeout(() => orb_notice = true, 13000);
		}
	}

	// Core mechanics
	function thirdboss_mech_event(skillid) {
		if ([3034302, 3034303, 3034304, 3034311, 3034312].includes(skillid)) {
			switch (skillid) {
				// DM
				case 3034302: // Out
					msg_a = 0;
					print_mech(true, false);
					break;

				case 3034303: // In
					msg_a = 1;
					print_mech(true, false);
					break;

				case 3034304: // Wave
					msg_a = 2;
					print_mech(true, false);
					break;

				// QB
				case 3034311: // STANDARD (1)
					mech_reverse = false;
					print_mech(true, true);
					if (mech_notice) {
						print_mech(false, false);
					}
					break;

				case 3034312: // REVERSE (0)
					mech_reverse = true;
					print_mech(true, true);
					if (mech_notice) {
						print_mech(false, false);
					}
					break;
			}
		}
		// QB
		// 0: Out  3034301
		// 1: In   3034302
		// 2: Wave 3034303
		if (skillid >= 0 && skillid < 3) {
			msg_b = skillid;
			print_mech(false, false);
			msg_a = msg_b;
			msg_b = 3;

			dispatch.setTimeout(() => {
				print_mech(true, false);
			}, 7000);

			mech_notice = true;
			dispatch.setTimeout(() => mech_notice = false, 3000);
		}
	}
	function print_mech(next, code) {
		let message = "",
			message_PT = "",
			message_ES = "",
			sub_type = "message";

		if (next) {
			message += "Next: ";
			message_PT += "Proximo: ";
			message_ES += "Next: ";
			sub_type = "notification";
		}

		if (mech_reverse) {
			message += `${mech_messages[msg_b].message} + ${mech_messages[msg_a].message}`;
			message_PT += `${mech_messages[msg_b].message_PT} + ${mech_messages[msg_a].message_PT}`;
			message_ES += `${mech_messages[msg_b].message_ES} + ${mech_messages[msg_a].message_ES}`;
		} else {
			message += `${mech_messages[msg_a].message} + ${mech_messages[msg_b].message}`;
			message_PT += `${mech_messages[msg_a].message_PT} + ${mech_messages[msg_b].message_PT}`;
			message_ES += `${mech_messages[msg_a].message_ES} + ${mech_messages[msg_b].message_ES}`;
		}

		if (code) {
			message += `, Code: ${mech_reverse ? "0" : "1"}`;
			message_PT += `, Código: ${mech_reverse ? "0" : "1"}`;
			message_ES += `, Código: ${mech_reverse ? "0" : "1"}`;
		}

		handlers.text({
			sub_type: sub_type,
			message: message,
			message_PT: message_PT,
			message_ES: message_ES
		});
	}

	// S-attacks
	function thirdboss_sattack_event(skillid) {
		// Safe: 116/119 [R] + 222-0 [R] > 222-1 [L] > 222-2 [R] > 326/327
		// Safe: 117/118 [L] + 223-0 [L] > 223-1 [R] > 223-2 [L] > 326/327
		const delay = boss_seventy ? 2000 : 0;
		let duration = boss_seventy ? 800 : 900;

		if ([1160, 1190].includes(skillid)) {
			handlers.text({ sub_type: "message", delay: delay, message: "Right Safe", message_PT: "DIREITA Seguro", message_ES: "DERECHA Seguro" });
		}
		if ([1170, 1180].includes(skillid)) {
			handlers.text({ sub_type: "message", delay: delay, message: "Left Safe", message_PT: "ESQUERDA Seguro", message_ES: "IZQUIERDA Seguro" });
		}
		if ([1160, 1170, 1180, 1190].includes(skillid) && boss_seventy) { // <70%
			if (mech_reverse) {
				handlers.text({ sub_type: "message", message: "Triple-S | Out", message_PT: "Triplo-S | SAIR", message_ES: "Triplo-S | SALIR" });
				handlers.text({ sub_type: "message", delay: 4500, message: "Out", message_PT: "SAIR", message_ES: "SALIR" });
			} else {
				handlers.text({ sub_type: "message", message: "Triple-S | In", message_PT: "Triplo-S | ENTRAR", message_ES: "Triplo-S | ENTRAR" });
				handlers.text({ sub_type: "message", delay: 4500, message: "In", message_PT: "ENTRAR", message_ES: "ENTRAR" });
			}
			handlers.spawn({ func: "circle", args: [false, 445, 0, 0, 10, 300, 5000, 2000] });
			duration = 2000;
		}
		if ([1160, 1161, 1162, 1163, 1190, 1191, 1192, 1193, 2220, 2222, 2231].includes(skillid)) { // right safe
			handlers.event([
				{ type: "spawn", func: "marker", args: [false, 160, 300, 0, duration, true, null] },
				{ type: "spawn", func: "marker", args: [false, 340, 300, 0, duration, true, null] },
				{ type: "spawn", func: "point", args: [202, 170, 200, 0, duration] },
				{ type: "spawn", func: "point", args: [202, 350, 200, 0, duration] },
				{ type: "spawn", func: "vector", args: [912, 170, 210, 180, 290, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 120, 250, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 130, 240, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 140, 230, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 150, 220, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 160, 210, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 300, 250, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 310, 240, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 320, 230, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 330, 220, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 340, 210, 0, duration] },
				{ type: "spawn", func: "vector", args: [912, 350, 210, 0, 290, 0, duration] }
			]);
		}
		if ([1170, 1171, 1172, 1173, 1180, 1181, 1182, 1183, 2230, 2232, 2221].includes(skillid)) { // left safe
			handlers.event([
				{ type: "spawn", func: "marker", args: [false, 20, 300, 0, duration, true, null] },
				{ type: "spawn", func: "marker", args: [false, 200, 300, 0, duration, true, null] },
				{ type: "spawn", func: "point", args: [202, 10, 200, 0, duration] },
				{ type: "spawn", func: "point", args: [202, 190, 200, 0, duration] },
				{ type: "spawn", func: "vector", args: [912, 10, 210, 0, 290, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 20, 210, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 30, 220, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 40, 230, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 50, 240, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 60, 250, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 240, 250, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 230, 240, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 220, 230, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 210, 220, 0, duration] },
				{ type: "spawn", func: "point", args: [912, 200, 210, 0, duration] },
				{ type: "spawn", func: "vector", args: [912, 190, 210, 180, 290, 0, duration] }
			]);
		}
	}

	function thirdboss_start_event() {
		boss_seventy = false;
	}

	function thirdboss_seventy_event() {
		boss_seventy = true;
	}

	return {
		// 1 BOSS
		"nd-3034-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"qb-3034-1000-3034101": [{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza", message_PT: "Pizza" }],
		"qb-3034-1000-3034102": [{ type: "text", sub_type: "message", message: "AOE! Jump", message_ES: "AOE! SALTAR", message_PT: "AOE PULAR" }],
		"s-3034-1000-104-0": [{ type: "text", sub_type: "message", message: "Front Clip", message_ES: "Stun Frontal", message_PT: "Stun Frontal" }],
		"s-3034-1000-108-0": [{ type: "text", sub_type: "message", message: "Get Out", message_ES: "SALIR", message_PT: "SAIR" }], // крутилка
		"s-3034-1000-111-0": [{ type: "text", sub_type: "message", message: "Back + Front", message_ES: "Atrás | Frente Ataque", message_PT: "Atrás | Frente Ataque" }],
		"s-3034-1000-112-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque Atrás", message_PT: "Ataque Atrás" }],
		"s-3034-1001-205-0": [{ type: "text", sub_type: "message", message: "Wind (Kaia)", message_ES: "Ventilador (Kaia)", message_PT: "Ventilador (Kaia)" }],
		"s-3034-1002-205-0": [{ type: "alias", id: "s-3034-1001-205-0" }],
		"s-3034-1003-205-0": [{ type: "alias", id: "s-3034-1001-205-0" }],
		"s-3034-1004-205-0": [{ type: "alias", id: "s-3034-1001-205-0" }],
		"s-3034-1005-205-0": [{ type: "alias", id: "s-3034-1001-205-0" }],
		"s-3034-1006-205-0": [{ type: "alias", id: "s-3034-1001-205-0" }],
		"s-3034-1007-205-0": [{ type: "alias", id: "s-3034-1001-205-0" }],
		"s-3034-1008-205-0": [{ type: "alias", id: "s-3034-1001-205-0" }],
		"s-3034-1000-304-0": [{ type: "text", sub_type: "message", message: "Out", message_ES: "SALIR", message_PT: "SAIR" }],
		"s-3034-1000-305-0": [{ type: "text", sub_type: "message", message: "In", message_ES: "ENTRAR", message_PT: "ENTRAR" }],
		"s-3034-1000-306-0": [{ type: "text", sub_type: "message", message: "Bombs", message_ES: "Bombas", message_PT: "Bombas" }],
		"s-3034-1000-307-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Jalar", message_PT: "Puxar" }],
		"s-3034-1000-309-0": [
			{ type: "text", sub_type: "message", message: "Four Missile", message_ES: "Misiles Iniciados", message_PT: "Mísseis Iniciados" },
			{ type: "text", sub_type: "message", delay: 6000, message: "5", message_ES: "5", message_PT: "5" },
			{ type: "text", sub_type: "message", delay: 7000, message: "4", message_ES: "4", message_PT: "4" },
			{ type: "text", sub_type: "message", delay: 8000, message: "3", message_ES: "3", message_PT: "3" },
			{ type: "text", sub_type: "message", delay: 9000, message: "2", message_ES: "2", message_PT: "2" },
			{ type: "text", sub_type: "message", delay: 10000, message: "1", message_ES: "1", message_PT: "1" },
			{ type: "text", sub_type: "message", delay: 11000, message: "Jump", message_ES: "SALTAR", message_PT: "PULAR!" }
		],
		"s-3034-1000-311-0": [
			{ type: "text", sub_type: "message", message: "Safe right front", message_ES: "Derecha Frente | Seguro", message_PT: "Direita Frente | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 67, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-312-0": [
			{ type: "text", sub_type: "message", message: "Safe right back", message_ES: "Derecha Atrás | Seguro", message_PT: "Direita Atrás | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 112, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-313-0": [
			{ type: "text", sub_type: "message", message: "Safe back left", message_ES: "Atrás Izquierda | Seguro", message_PT: "Atrás Esquerda | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 202, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-314-0": [
			{ type: "text", sub_type: "message", message: "Safe front left", message_ES: "Frente Izquierda | Seguro", message_PT: "Frente Esquerda | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 337, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-315-0": [
			{ type: "text", sub_type: "message", message: "Safe front right", message_ES: "Frente Derecha | Seguro", message_PT: "Frente Direita | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 22, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-316-0": [
			{ type: "text", sub_type: "message", message: "Safe back right", message_ES: "Atrás Derecha | Seguro", message_PT: "Atrás Direita | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 157, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-317-0": [
			{ type: "text", sub_type: "message", message: "Safe left back", message_ES: "Izquierda Atrás | Seguro", message_PT: "Esquerda Atrás | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 247, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-318-0": [
			{ type: "text", sub_type: "message", message: "Safe left front", message_ES: "Izquierda Frente | Seguro", message_PT: "Esquerda Frente | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 292, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-319-0": [
			{ type: "text", sub_type: "message", message: "Safe front right", message_ES: "Frente Derecha | Seguro", message_PT: "Frente Direita | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 22, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-320-0": [
			{ type: "text", sub_type: "message", message: "Safe back right", message_ES: "Atrás Derecha | Seguro", message_PT: "Atrás Direita | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 157, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-321-0": [
			{ type: "text", sub_type: "message", message: "Safe back left", message_ES: "Atrás Izquierda | Seguro", message_PT: "Atrás Esquerda | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 202, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-322-0": [
			{ type: "text", sub_type: "message", message: "Safe left front", message_ES: "Izquierda Frente | Seguro", message_PT: "Esquerda Frente | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 292, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-323-0": [
			{ type: "text", sub_type: "message", message: "Safe right front", message_ES: "Derecha Frente | Seguro", message_PT: "Direita Frente | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 67, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-324-0": [
			{ type: "text", sub_type: "message", message: "Safe right back", message_ES: "Derecha Atrás | Seguro", message_PT: "Direita Atrás | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 112, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-325-0": [
			{ type: "text", sub_type: "message", message: "Safe left back", message_ES: "Izquierda Atrás | Seguro", message_PT: "Esquerda Atrás | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 247, 120, 100, 12000, true, null] }
		],
		"s-3034-1000-326-0": [
			{ type: "text", sub_type: "message", message: "Safe front left", message_ES: "Frente Izquierda | Seguro", message_PT: "Frente Esquerda | Seguro" },
			{ type: "spawn", func: "marker", args: [false, 337, 120, 100, 12000, true, null] }
		],

		// 2 BOSS
		"nd-3034-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-3034-2000": [
			{ type: "spawn", "id": 476, "sub_delay": 99999999, "pos": { x: -32904, y: 59440, z: 0 } },
			{ type: "spawn", "id": 445, "sub_delay": 99999999, "pos": { x: -32704, y: 59325, z: 0 } },
			{ type: "spawn", "id": 476, "sub_delay": 99999999, "pos": { x: -32900, y: 58824, z: 0 } },
			{ type: "spawn", "id": 445, "sub_delay": 99999999, "pos": { x: -32700, y: 58946, z: 0 } },
			{ type: "spawn", "id": 476, "sub_delay": 99999999, "pos": { x: -32372, y: 58520, z: 0 } },
			{ type: "spawn", "id": 445, "sub_delay": 99999999, "pos": { x: -32372, y: 58755, z: 0 } },
			{ type: "spawn", "id": 476, "sub_delay": 99999999, "pos": { x: -31842, y: 58833, z: 0 } },
			{ type: "spawn", "id": 445, "sub_delay": 99999999, "pos": { x: -32045, y: 58945, z: 0 } },
			{ type: "spawn", "id": 476, "sub_delay": 99999999, "pos": { x: -31846, y: 59444, z: 0 } },
			{ type: "spawn", "id": 445, "sub_delay": 99999999, "pos": { x: -32044, y: 59327, z: 0 } },
			{ type: "spawn", "id": 476, "sub_delay": 99999999, "pos": { x: -32379, y: 59750, z: 0 } },
			{ type: "spawn", "id": 445, "sub_delay": 99999999, "pos": { x: -32375, y: 59515, z: 0 } }
		],
		"s-3034-2000-102-0": [
			{ type: "text", sub_type: "message", message: "Pizza Cutter", message_ES: "Frente", message_PT: "Frente" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 300, 12, 228, 0, 3000] }
		],
		"s-3034-2000-105-0": [
			{ type: "text", sub_type: "message", message: "360", message_ES: "360 (Repeler)", message_PT: "360 (Repelir)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 278, 0, 5000] }
		],
		"s-3034-2000-108-0": [
			{ type: "text", sub_type: "message", message: "Back Swipe", message_ES: "Atrás (Repeler)", message_PT: "Atrás (Repelir)" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 240, 380, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 120, 380, 0, 2000] }
		],
		"s-3034-2000-301-0": [{ type: "func", func: throwing_orb_event }],
		"s-3034-2000-304-0": [
			{ type: "text", sub_type: "message", message: "Get Out", message_ES: "SLAIR (Explosión)", message_PT: "SAIR (Explosão)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 0, 4000] }
		],
		"s-3034-2000-305-0": [
			{ type: "text", sub_type: "message", message: "In | Out", message_ES: "ENTRAR | SALIR", message_PT: "ENTRAR | SAIR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 200, 0, 3000] }
		],
		// Safe: |||2|2||| > ||||1|||| > ||3|||3||
		"s-3034-2000-310-0": [{ type: "text", sub_type: "message", message: "2 - 1 - 3" },
			{ type: "spawn", func: "marker", args: [false, 40, 220, 0, 1500, true, null] }, // 2
			{ type: "spawn", func: "marker", args: [false, -40, 220, 0, 1500, true, null] }, // 2
			{ type: "spawn", func: "marker", args: [false, 0, 150, 1600, 1500, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 60, 300, 1600, 1500, true, null] }, // 3
			{ type: "spawn", func: "marker", args: [false, -60, 300, 3200, 1500, true, null] } // 3
		],
		// Safe: ||||1|||| > ||3|||3|| > |||2|2|||
		"s-3034-2000-311-0": [{ type: "text", sub_type: "message", message: "1 - 3 - 2" },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 1500, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 60, 300, 1600, 1500, true, null] }, // 3
			{ type: "spawn", func: "marker", args: [false, -60, 300, 1600, 1500, true, null] }, // 3
			{ type: "spawn", func: "marker", args: [false, 40, 220, 3200, 1500, true, null] }, // 2
			{ type: "spawn", func: "marker", args: [false, -40, 220, 3200, 1500, true, null] } // 2
		],
		"s-3034-2007-201-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 500, 0, 8000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 500, 0, 8000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 500, 0, 8000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 500, 0, 8000] }
		],
		"s-3034-2007-306-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 500, 0, 4000] }
		],
		"s-3034-2007-307-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 500, 0, 12000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 500, 0, 12000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 500, 0, 12000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 500, 0, 12000] }
		],

		// 3 BOSS
		"nd-3034-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3034-3000-99": [{ type: "func", func: thirdboss_start_event }],
		"h-3034-3000-70": [
			{ type: "text", sub_type: "message", message: "70%", message_PT: "70%", message_ES: "70%" },
			{ type: "func", func: thirdboss_seventy_event }
		],
		//
		"dm-0-0-3034311": [{ type: "func", func: thirdboss_mech_event, args: [3034311] }], // 1 std
		"dm-0-0-3034312": [{ type: "func", func: thirdboss_mech_event, args: [3034312] }], // 0 rev
		"dm-0-0-3034302": [{ type: "func", func: thirdboss_mech_event, args: [3034302] }], // out
		"dm-0-0-3034303": [{ type: "func", func: thirdboss_mech_event, args: [3034303] }], // in
		"dm-0-0-3034304": [{ type: "func", func: thirdboss_mech_event, args: [3034304] }], // wave
		"qb-3034-3000-3034301": [{ type: "func", func: thirdboss_mech_event, args: [0] }], // out
		"qb-3034-3000-3034302": [{ type: "func", func: thirdboss_mech_event, args: [1] }], // in
		"qb-3034-3000-3034303": [{ type: "func", func: thirdboss_mech_event, args: [2] }], // wave
		// right safe S
		"s-3034-3000-116-0": [{ type: "func", func: thirdboss_sattack_event, args: [1160] }],
		"s-3034-3000-116-1": [{ type: "func", func: thirdboss_sattack_event, args: [1161] }],
		"s-3034-3000-116-2": [{ type: "func", func: thirdboss_sattack_event, args: [1162] }],
		"s-3034-3000-116-3": [{ type: "func", func: thirdboss_sattack_event, args: [1163] }],
		"s-3034-3000-119-0": [{ type: "func", func: thirdboss_sattack_event, args: [1190] }],
		"s-3034-3000-119-1": [{ type: "func", func: thirdboss_sattack_event, args: [1191] }],
		"s-3034-3000-119-2": [{ type: "func", func: thirdboss_sattack_event, args: [1192] }],
		"s-3034-3000-119-3": [{ type: "func", func: thirdboss_sattack_event, args: [1193] }],
		"s-3034-3000-223-1": [{ type: "func", func: thirdboss_sattack_event, args: [2231] }],
		"s-3034-3000-222-0": [{ type: "func", func: thirdboss_sattack_event, args: [2220] }],
		"s-3034-3000-222-2": [{ type: "func", func: thirdboss_sattack_event, args: [2222] }],
		// left safe S
		"s-3034-3000-117-0": [{ type: "func", func: thirdboss_sattack_event, args: [1170] }],
		"s-3034-3000-117-1": [{ type: "func", func: thirdboss_sattack_event, args: [1171] }],
		"s-3034-3000-117-2": [{ type: "func", func: thirdboss_sattack_event, args: [1172] }],
		"s-3034-3000-117-3": [{ type: "func", func: thirdboss_sattack_event, args: [1173] }],
		"s-3034-3000-118-0": [{ type: "func", func: thirdboss_sattack_event, args: [1180] }],
		"s-3034-3000-118-1": [{ type: "func", func: thirdboss_sattack_event, args: [1181] }],
		"s-3034-3000-118-2": [{ type: "func", func: thirdboss_sattack_event, args: [1182] }],
		"s-3034-3000-118-3": [{ type: "func", func: thirdboss_sattack_event, args: [1182] }],
		"s-3034-3000-222-1": [{ type: "func", func: thirdboss_sattack_event, args: [2221] }],
		"s-3034-3000-223-0": [{ type: "func", func: thirdboss_sattack_event, args: [2230] }],
		"s-3034-3000-223-2": [{ type: "func", func: thirdboss_sattack_event, args: [2232] }],
		//
		"s-3034-3000-125-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Frente", message_PT: "Frente" }],
		"s-3034-3000-126-0": [{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Frente | Atrás", message_PT: "Frente | Atrás" }],
		"s-3034-3000-127-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Atrás", message_PT: "Atrás" }],
		"s-3034-3000-128-0": [
			{ type: "text", sub_type: "message", message: "Combo | Back Wave", message_ES: "Combo | Atrás Puno Explosivo", message_PT: "Combo | Atrás Punho Explosivo" },
			{ type: "spawn", func: "vector", args: [553, 180, 40, 120, 1200, 2000, 3000] },
			{ type: "spawn", func: "vector", args: [553, 180, 40, 240, 1200, 2000, 3000] }
		],
		"s-3034-3000-129-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }],
		"s-3034-3000-305-0": [{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 300, 0, 6000] }], // 3034301 3034302 3034303 -> 305
		"s-3034-3000-321-0": [
			{ type: "text", sub_type: "message", message: "Shield!", message_ES: "Escudo!", message_PT: "Escudo!" },
			{ type: "text", sub_type: "message", delay: 105000, message: "Shield in 10 seconds!", message_ES: "ESCUDO en 10 Secundos!", message_PT: "ESCUDO em 10 Segundos!" }
		],
		"s-3034-3001-308-0": [
			{ type: "text", sub_type: "message", message: "Bait!", message_ES: "Bait!", message_PT: "Bait!" },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 300, 0, 2000] }
		],
		// Radar
		"qb-3034-3000-3034312": [{ type: "text", sub_type: "message", message: "!!! Radar !!!", message_ES: "!!! Radar !!!", message_PT: "!!! Radar !!!" }],
		"s-3034-3000-324-0": [
			{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR", message_PT: "SAIR" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 250, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 200, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 14, 150, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 18, 100, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 50, 50, 0, 3000] }
		],
		"s-3034-3000-325-0": [
			{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR", message_PT: "ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		]
	};
};