// Crimson Killing Grounds
//
// made by HSDN / Kuroine / Minghan / Vampic

module.exports = (dispatch, handlers, guide, lang) => {

	const { player } = dispatch.require.library;

	let combo_start = false;

	let stack = 0;
	let stackTimer = null;

	function stack_add_event() {
		stack++;
		dispatch.clearTimeout(stackTimer);
		stackTimer = dispatch.setTimeout(() => stack = 0, 86000);
	}

	function stack_remove_event() {
		dispatch.clearTimeout(stackTimer);
		stack = 0;
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
			{ type: "marker_remove_all" },
			{ type: "func", func: stack_remove_event }
		],
		"ns-3206-1000": [
			{ type: "spawn", func: "marker", args: [false, 3, -700, 100, 60000000, false, ["Giant", "Giant Direction"]] },
			{ type: "func", func: stack_remove_event }
		],

		"die": [{ type: "func", func: stack_remove_event }],

		"am-3206-1000-32060007": [{ type: "func", func: stack_add_event }],
		"ar-3206-1000-32060007": [{ type: "func", func: stack_remove_event }],

		"qb-3206-1000-32061001": [
			{ type: "text", sub_type: "message", message: "Close - IN", message_ES: "Cerca - Dentro", message_PT: "Perto - Dentro", check_func: () => stack === 0 },
			{ type: "text", sub_type: "message", message: "Close - OUT", message_ES: "Cerca Fuera",  message_PT: "Perto - Fora", check_func: () => stack !== 0 },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_ES: "Dar Stun Pronto...", message_PT: "Dar Stun Embreve...", delay: 2000 }
		],
		"qb-3206-1000-32061002": [
			{ type: "text", sub_type: "message", message: "Furthest - OUT", message_ES: "Lejos - Fuera", message_PT: "Longe - Fora", check_func: () => stack === 0 },
			{ type: "text", sub_type: "message", message: "Furthest - IN", message_ES: "Lejos - Dentro", message_PT: "Longe - Dentro", check_func: () => stack !== 0 },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_ES: "Dar Stun Pronto...", message_PT: "Dar Stun Embreve...", delay: 2000 }
		],

		"s-3206-1000-102-0": [
			{ type: "func", func: () => combo_start = true },
			{ type: "func", func: () => combo_start = false, delay: 1400 }
		],
		"s-3206-1000-105-0": [{ type: "text", sub_type: "message", message: "Knockback Spin (Kaia)", message_ES: "Giro Atrás Empujón (KAIA)", message_ES: "Giro Atrás Empurrão (KAIA)", check_func: () => combo_start === true }],
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
			{ type: "text", sub_type: "message", message: "Donuts (Out > In)", message_ES: "Salir > Entrar",  message_PT: "Sair > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-509-0": [
			{ type: "text", sub_type: "message", message: "Donuts (In > Out)", message_ES: "Entrar > Salir",  message_PT: "Entrar > Sair" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-516-0": [
			{ type: "text", sub_type: "message", message: "Donuts Fast (Out > In)", message_ES: "Salir > Entrar (Rapido)",  message_PT: "Sair > Entrar (Rápido)" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-517-0": [
			{ type: "text", sub_type: "message", message: "Donuts Fast (In > Out)", message_ES: "Entrar > Salir (Rapido)",  message_PT: "Entrar > Sair (Rápido)" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-512-0": [{ type: "text", sub_type: "message", message: "Turn | Spin", message_ES: "Doblar | Girar",  message_PT: "Virar | Girar" } }],
		"s-3206-1004-506-0": [{ type: "text", sub_type: "message", message: "Wave", message_ES: "Ola",  message_PT: "Onda" }],
		"s-3206-1000-522-0": [{ type: "text", sub_type: "message", message: "Bait on distant", message_ES: "Bait al Alejarse",  message_PT: "Bait ao Distanciar" }],
		"s-3206-1000-523-0": [{ type: "text", sub_type: "message", message: "Bait on resurrect", message_ES: "Bait al Reviver",  message_PT: "Bait ao Reviver" }],
		"s-3206-1000-513-0": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_ES: "Plague of Exhaustion",  message_PT: "Plague of Exhaustion", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_ES: "Regression",  message_PT: "Regression", class_position: "mystic" }
		],
		"s-3206-1000-514-0": "s-3206-1000-513-0",

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