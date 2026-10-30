// Killing Grounds
//
// made by HSDN / Kuroine / Minghan / Vampic

module.exports = (dispatch, handlers, guide, lang) => {

	const { player, effect } = dispatch.require.library;

	let combo_start = false;

	// Frio é distribuído por posição relativa, não por uma distância fixa.
	const cold_targets = 1;
	const party_effects = new Map();
	const party_alive = new Map();
	let cold_observed = false;

	function party_members() {
		const members = new Map([[String(player.gameId), { name: player.name, alive: dispatch._mod.game.me.alive }]]);
		for (const [id, member] of player.playersInParty) {
			if (members.size >= 5) break;
			members.set(String(id), member);
		}
		for (const id of party_effects.keys()) if (!members.has(id)) party_effects.delete(id);
		for (const id of party_alive.keys()) if (!members.has(id)) party_alive.delete(id);
		return members;
	}

	function update_party_effect(event, ended = false) {
		if (event.id !== 32060007 && event.id !== 32060008 && event.id !== 32060016) return;
		const id = String(event.target);
		if (!party_members().has(id)) return;

		const duration = Number(event.duration);
		let until = null;
		if (ended || (Number.isFinite(duration) && duration <= 0)) until = 0;
		else if (Number.isFinite(duration) && duration <= 86400000) until = Date.now() + duration;
		if (!party_effects.has(id)) party_effects.set(id, new Map());
		party_effects.get(id).set(event.id, until);
		if (event.id === 32060007 && until !== null && until > Date.now()) cold_observed = true;
	}

	function effect_active(target, id) {
		const effects = party_effects.get(String(target));
		if (effects && effects.has(id)) {
			const until = effects.get(id);
			return until === null ? null : until > Date.now();
		}
		// Ausência de Begin de outro membro não comprova ausência de debuff.
		if (String(target) !== String(player.gameId)) return null;
		if (!effect || typeof effect.hasAbnormality !== "function") return null;
		return effect.hasAbnormality(id) === false ? false : null;
	}

	function reset_cold() {
		party_effects.clear();
		party_alive.clear();
		cold_observed = false;
	}

	function personal_position_event(near) {
		if (dispatch._mod.game.me.alive === false) return;

		const cold = effect_active(player.gameId, 32060007);
		const frozen = effect_active(player.gameId, 32060008);
		const cold_snap = effect_active(player.gameId, 32060016);
		let text;
		if (frozen === true || cold_snap === true) {
			text = ["FROZEN", "CONGELADO", "CONGELADO"];
		} else if (cold === null || frozen === null || cold_snap === null) {
			text = ["CHECK COLD SURGE", "REVISA EL FRÍO", "CONFIRA O FRIO"];
		} else if (!cold_observed || (!cold && (player.unsetPlayersInParty || []).length)) {
			text = near ? ["NEAR DEBUFF", "DEBUFF CERCA", "DEBUFF PERTO"] : ["FAR DEBUFF", "DEBUFF LEJOS", "DEBUFF LONGE"];
		} else {
			// Propõe as vagas em ordem estável; o jogo resolve pela posição real.
			const candidates = Array.from(party_members()).filter(([id, member]) => {
				if (party_alive.get(id) === false || (!party_alive.has(id) && member.alive === false)) return false;
				return [32060007, 32060008, 32060016].every(effect_id => effect_active(id, effect_id) !== true);
			}).map(([id]) => id).sort();
			if (candidates.length < cold_targets) {
				text = ["NO SAFE ROTATION", "SIN ROTACIÓN", "SEM RODÍZIO"];
			} else {
				const receive = !cold && candidates.slice(0, cold_targets).includes(String(player.gameId));
				text = receive
					? (near ? ["(Near Debuff) - RECEIVE", "(Debuff Cerca) - RECIBIR", "(Debuff Perto) - RECEBER"] : ["(Far Debuff) - RECEIVE", "(Debuff Lejos) - RECIBIR", "(Debuff Longe) - RECEBER"])
					: (near ? ["(Near Debuff) - AVOID", "(Debuff Cerca) - EVITAR", "(Debuff Perto) - EVITAR"] : ["(Far Debuff) - AVOID", "(Debuff Lejos) - EVITAR", "(Debuff Longe) - EVITAR"]);
			}
		}
		handlers.text({ sub_type: "message", message: text[0], message_ES: text[1], message_PT: text[2], speech: false });
	}

	dispatch.hook("S_USER_EFFECT", 1, event => {
		if (event.circle == 3 && event.operation == 1) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: "Snowball on you", message_ES: "Bola de Nieve Sobre Ti", message_PT: "Bola de Neve em Você" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: `Snowball on ${member.name}`,
						message_ES: `Bola de Nieve eve Activada ${member.name}`,
						message_PT: `Bola de Neve Ativada ${member.name}`
					});
				} else {
					handlers.text({ sub_type: "message", message: "Snowball", message_ES: "Bola de Nieve", message_PT: "Bola de Neve" });
				}
			}
			handlers.marker({ id: event.target, color: "yellow", sub_delay: 1000000 });
		} else if (event.circle == 3 && event.operation == 2) {
			handlers.marker_remove_all({ delay: 1000 });
		}
	});

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		update_party_effect(event);
		if (event.id === 32060024) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: "Eye on you", message_ES: "Ojo en Ti", message_PT: "De Olho em Você" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: `Eye on ${member.name}`,
						message_ES: `De Ojo ${member.name}`,
						message_PT: `De Olho ${member.name}`
					});
				} else {
					handlers.text({ sub_type: "message", message: "Eye", message_ES: "Ojo", message_PT: "Olho" });
				}
			}
		}
	});

	dispatch.hook("S_ABNORMALITY_REFRESH", 2, event => update_party_effect(event));
	dispatch.hook("S_ABNORMALITY_END", 1, event => update_party_effect(event, true));

	dispatch.hook("S_CREATURE_LIFE", 3, event => {
		const id = String(event.gameId);
		if (!party_members().has(id)) return;
		party_alive.set(id, event.alive);
		if (!event.alive) party_effects.delete(id);
	});

	return {
		"die": [{ type: "func", func: () => party_effects.delete(String(player.gameId)) }],
		"nd-3106-1000": [
			{ type: "func", func: reset_cold },
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "marker_remove_all" }
		],
		"ns-3106-1000": [
			{ type: "func", func: reset_cold },
			{ type: "spawn", func: "marker", args: [false, 3, -700, 100, 60000000, false, ["Giant", "Giant Direction"]] }
		],

		"h-3106-1000-100": [{ type: "func", func: reset_cold }],

		"qb-3106-1000-32061001": [
			{ type: "func", func: personal_position_event, args: [true] },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_ES: "Dar Stun Pronto...", message_PT: "Dar Stun Embreve...", delay: 2000 }
		],
		"qb-3106-1000-32061002": [
			{ type: "func", func: personal_position_event, args: [false] },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_ES: "Dar Stun Pronto...", message_PT: "Dar Stun Embreve...", delay: 2000 }
		],

		"s-3106-1000-102-0": [
			{ type: "func", func: () => combo_start = true },
			{ type: "func", func: () => combo_start = false, delay: 1400 }
		],
		"s-3106-1000-105-0": [{ type: "text", sub_type: "message", message: "Knockback Spin (Kaia)", message_ES: "Giro Atrás Empujón (KAIA)", message_PT: "Giro Atrás Empurrão (KAIA)", check_func: () => combo_start === true }],
		"s-3106-1000-106-0": [
			{ type: "text", sub_type: "message", message: "Knockback", message_ES: "Atrás (Empujón)", message_PT: "Atrás (Empurrão)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 350, 0, 3000] }
		],

		"s-3106-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Jump (Knockdown)", message_ES: "Salto (Tumbar)", message_PT: "Salto (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 150, 10, 300, 0, 2500] }
		],
		"s-3106-1000-111-0": [{ type: "text", sub_type: "message", message: "Knockdown (Dodge)", message_ES: "Tumbar (Iframe)", message_PT: "Derrubar (Iframe)", class_position: "tank" }],
		"s-3106-1000-201-0": [{ type: "text", sub_type: "message", message: "Front (Dodge)", message_ES: "Frente (Iframe)", message_PT: "Frente (Iframe)", class_position: "tank" }],
		"s-3106-1000-202-0": [{ type: "text", sub_type: "message", message: "Front AoE", message_ES: "Frente AoE", message_PT: "Frente АоЕ" }],
		"s-3106-1000-203-0": [{ type: "text", sub_type: "message", message: "Front AoE + Wave", message_ES: "Frente AoE + Ola", message_PT: "Frente АоЕ + Onda" }],
		"s-3106-1000-205-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro",  message_PT: "Giro" }],
		"s-3106-1000-206-0": [{ type: "text", sub_type: "message", message: "Spin (Bleed)", message_ES: "Giro (Sangrar)",  message_PT: "Giro (Sangrar))" }],
		"s-3106-1000-207-0": [{ type: "text", sub_type: "message", message: "Spin (Bleed)", message_ES: "Giro (Sangrar)",  message_PT: "Giro (Sangrar))" }],
		"s-3106-1000-209-0": [
			{ type: "text", sub_type: "message", message: "Give Stun! (Knockdown)", message_ES: "Dar Stun ( Tumbar)",  message_PT: "Dê Stun (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 400, 0, 1500] }
		],
		"s-3106-1000-210-0": [
			{ type: "text", sub_type: "message", message: "Give Stun! (Knockdown)", message_ES: "Dar Stun ( Tumbar)",  message_PT: "Dê Stun (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 400, 0, 1500] }
		],
		"s-3106-1000-211-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar",  message_PT: "Empurrar" }],
		"s-3106-1000-212-0": [{ type: "text", sub_type: "message", message: "Somersault", message_ES: "Salto Mortal",  message_PT: "Salto Mortal" }],
		"s-3106-1000-215-0": [{ type: "text", sub_type: "message", message: "Somersault", message_ES: "Salto Mortal",  message_PT: "Salto Mortal" }],
		"s-3106-1000-507-0": [{ type: "text", sub_type: "message", message: "Leash | Jump (Knockdown)", message_ES: "Jalar | Salto (Tumbar)",  message_PT: "Puxar | Salto (Derrubar)" }],
		"s-3106-1000-508-0": [
			{ type: "text", sub_type: "message", message: "Donuts (Out > In)", message_ES: "Salir > Entrar",  message_PT: "Sair > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3106-1000-509-0": [
			{ type: "text", sub_type: "message", message: "Donuts (In > Out)", message_ES: "Entrar > Salir",  message_PT: "Entrar > Sair" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3106-1000-512-0": [{ type: "text", sub_type: "message", message: "Turn | Spin", message_ES: "Doblar | Girar",  message_PT: "Virar | Girar" }],
		//"s-3106-1000-513-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "ESPANOL", message_PT: "Чума/регресс" }],
		//"s-3106-1000-514-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "ESPANOL", message_PT: "Чума/регресс" }],

		"s-3106-1000-502-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Liberar",  message_PT: "Liberar" }],
		"s-3106-1000-518-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Liberar",  message_PT: "Liberar" }],
		"s-3106-1000-519-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Liberar",  message_PT: "Liberar" }],
		"s-3106-1000-306-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro",  message_PT: "Giro" }],
		"s-3106-1000-309-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Frente",  message_PT: "Frente" }],
		"s-3106-1000-311-0": [{ type: "text", sub_type: "message", message: "Evade!", message_ES: "Huir!", message_PT: "Fugir!", delay: 150 }],
		"s-3106-1000-321-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE",  message_PT: "AoE" }],
		"s-3106-1000-324-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE",  message_PT: "AoE" }]
	};
};