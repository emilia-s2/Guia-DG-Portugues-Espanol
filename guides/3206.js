// Crimson Killing Grounds
//
// made by HSDN / Kuroine / Minghan / Vampic

module.exports = (dispatch, handlers, guide, lang) => {

	const { player, effect } = dispatch.require.library;

	let combo_start = false;

	// Perto/longe depende do efeito atual do próprio personagem.
	function personal_position_event(near) {
		if (dispatch._mod.game.me.alive === false) return;

		if (!effect || typeof effect.hasAbnormality !== "function") {
			handlers.text({ sub_type: "message", message: "Check your Cold Surge effect", message_ES: "Comprueba tu efecto de Frío", message_PT: "Confira seu debuff de Frio", speech: false });
			return;
		}

		if (effect.hasAbnormality(32060008)) {
			handlers.text({ sub_type: "message", message: "Frozen - unable to move", message_ES: "Congelado - no puedes moverte", message_PT: "Congelado - não é possível se mover", speech: false });
			return;
		}

		const move_close = near !== effect.hasAbnormality(32060007);
		handlers.text({
			sub_type: "notification",
			message: move_close ? "Move CLOSE to the boss" : "Move AWAY from the boss",
			message_ES: move_close ? "ACÉRCATE al boss" : "ALÉJATE del boss",
			message_PT: move_close ? "APROXIME-SE do boss" : "AFASTE-SE do boss",
			speech: false
		});
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
						message_ES: `Bola de Nieve Activada ${member.name}`,
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

	return {
		"nd-3206-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "marker_remove_all" }
		],
		"ns-3206-1000": [
			{ type: "spawn", func: "marker", args: [false, 3, -700, 100, 60000000, false, ["Giant", "Giant Direction"]] }
		],

		"qb-3206-1000-32061001": [
			{ type: "func", func: personal_position_event, args: [true] },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_ES: "Dar Stun Pronto...", message_PT: "Dar Stun Embreve...", delay: 2000 }
		],
		"qb-3206-1000-32061002": [
			{ type: "func", func: personal_position_event, args: [false] },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_ES: "Dar Stun Pronto...", message_PT: "Dar Stun em Breve...", delay: 2000 }
		],

		"s-3206-1000-102-0": [
			{ type: "func", func: () => combo_start = true },
			{ type: "func", func: () => combo_start = false, delay: 1400 }
		],
		"s-3206-1000-105-0": [{ type: "text", sub_type: "message", message: "Knockback Spin (Kaia)", message_ES: "Giro Atrás Empujón (KAIA)", message_PT: "Giro Atrás Empurrão (KAIA)", check_func: () => combo_start === true }],
		"s-3206-1000-106-0": [
			{ type: "text", sub_type: "message", message: "Knockback", message_ES: "Atrás (Empujón)", message_PT: "Atrás (Empurrão)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 350, 0, 3000] }
		],

		"s-3206-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Jump (Knockdown)", message_ES: "Salto (Tumbar)", message_PT: "Salto (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 150, 10, 300, 0, 2500] }
		],
		"s-3206-1000-111-0": [{ type: "text", sub_type: "message", message: "Knockdown (Dodge)", message_ES: "Tumbar (Iframe)", message_PT: "Derrubar (Iframe)", class_position: "tank" }],
		"s-3206-1000-201-0": [{ type: "text", sub_type: "message", message: "Front (Dodge)", message_ES: "Frente (Iframe)", message_PT: "Frente (Iframe)", class_position: "tank" }],
		"s-3206-1000-202-0": [{ type: "text", sub_type: "message", message: "Front AoE", message_ES: "Frente AoE", message_PT: "Frente АоЕ" }],
		"s-3206-1000-203-0": [{ type: "text", sub_type: "message", message: "Front AoE + Wave", message_ES: "Frente AoE + Ola", message_PT: "Frente АоЕ + Onda" }],
		"s-3206-1000-205-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro",  message_PT: "Giro" }],
		"s-3206-1000-206-0": [{ type: "text", sub_type: "message", message: "Spin (Bleed)", message_ES: "Giro (Sangrar)",  message_PT: "Giro (Sangrar))" }],
		"s-3206-1000-207-0": [{ type: "text", sub_type: "message", message: "Spin (Bleed)", message_ES: "Giro (Sangrar)",  message_PT: "Giro (Sangrar))" }],
		"s-3206-1000-209-0": [
			{ type: "text", sub_type: "message", message: "Give Stun! (Knockdown)", message_ES: "Dar Stun ( Tumbar)",  message_PT: "Dê Stun (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 400, 0, 1500] }
		],
		"s-3206-1000-210-0": [
			{ type: "text", sub_type: "message", message: "Give Stun! (Knockdown)", message_ES: "Dar Stun ( Tumbar)",  message_PT: "Dê Stun (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 400, 0, 1500] }
		],
		"s-3206-1000-211-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar",  message_PT: "Empurrar" }],
		"s-3206-1000-212-0": [{ type: "text", sub_type: "message", message: "Somersault", message_ES: "Salto Mortal",  message_PT: "Salto Mortal" }],
		"s-3206-1000-215-0": [{ type: "text", sub_type: "message", message: "Somersault", message_ES: "Salto Mortal",  message_PT: "Salto Mortal" }],
		"s-3206-1000-507-0": [{ type: "text", sub_type: "message", message: "Leash | Jump (Knockdown)", message_ES: "Jalar | Salto (Tumbar)",  message_PT: "Puxar | Salto (Derrubar)" }],
		"s-3206-1000-508-0": [
			{ type: "text", sub_type: "message", message: "Donuts (Out > In)", message_ES: "Salir > Entrar",  message_PT: "SAIR > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-509-0": [
			{ type: "text", sub_type: "message", message: "Donuts (In > Out)", message_ES: "Entrar > Salir",  message_PT: "ENTRAR > Sair" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-516-0": [
			{ type: "text", sub_type: "message", message: "Donuts Fast (Out > In)", message_ES: "Salir > Entrar (Rapido)",  message_PT: "SAIR > Entrar (Rápido)" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-517-0": [
			{ type: "text", sub_type: "message", message: "Donuts Fast (In > Out)", message_ES: "Entrar > Salir (Rapido)",  message_PT: "ENTRAR > Sair (Rápido)" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-512-0": [{ type: "text", sub_type: "message", message: "Turn | Spin", message_ES: "Doblar | Girar",  message_PT: "Virar | Girar" }],
		"s-3206-1004-506-0": [{ type: "text", sub_type: "message", message: "Wave", message_ES: "Ola",  message_PT: "Onda" }],
		"s-3206-1000-522-0": [{ type: "text", sub_type: "message", message: "Bait on distant", message_ES: "Bait al Alejarse",  message_PT: "Bait ao Distanciar" }],
		"s-3206-1000-523-0": [{ type: "text", sub_type: "message", message: "Bait on resurrect", message_ES: "Bait al Reviver",  message_PT: "Bait ao Reviver" }],
		"s-3206-1000-513-0": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_ES: "Plague of Exhaustion",  message_PT: "Plague of Exhaustion", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_ES: "Regression",  message_PT: "Regression", class_position: "mystic" }
		],
		"s-3206-1000-514-0": "s-3206-1000-513-0",

		"s-3206-1000-502-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Liberar",  message_PT: "Liberar" }],
		"s-3206-1000-518-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Liberar",  message_PT: "Liberar" }],
		"s-3206-1000-519-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Liberar",  message_PT: "Liberar" }],
		"s-3206-1000-306-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro",  message_PT: "Giro" }],
		"s-3206-1000-309-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Frente",  message_PT: "Frente" }],
		"s-3206-1000-311-0": [{ type: "text", sub_type: "message", message: "Evade!", message_ES: "Iframe!", message_PT: "Iframe!", delay: 150 }],
		"s-3206-1000-321-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE",  message_PT: "AoE" }],
		"s-3206-1000-324-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE",  message_PT: "AoE" }]
	};
};