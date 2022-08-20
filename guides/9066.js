// Demon's Wheel
//
// made by michengs

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let	print = false;
	let circlecount = 0;

	function skilld_event(skillid) {
		if ([1311, 1313, 1315, 1317].includes(skillid)) {
			circlecount = 0;

			handlers.text({ sub_type: "message", message: "OUT", message_ES: "SALIR", message_PT: "SAIR" });
		}

		if ([1312, 1313, 1316, 1318].includes(skillid)) {
			circlecount = 0;

			handlers.text({ sub_type: "message", message: "IN", message_ES: "ENTRAR", message_PT: "ENTRAR" });
		}

		if ([1306, 1307, 1308, 1309, 1310].includes(skillid)) {
			circlecount += (skillid - 1306) + 1;

			handlers.text({
				sub_type: "notification",
				message: `${circlecount} - ${circlecount & 1 ? "Odd - Red" : "Even - Blue"}`,
				message_ES: `${circlecount} - ${circlecount & 1 ? "Odd - Red" : "Even - Blue"}`
				message_PT: `${circlecount} - ${circlecount & 1 ? "Odd - Red" : "Even - Blue"}`,
			});
		}

		if ([1319, 1320, 1321, 1322, 1323].includes(skillid)) {
			// circlecount += (skillid - 1306) + 1;
			circlecount += (skillid - 1319) + 1;

			handlers.text({
				sub_type: "notification",
				message: `${circlecount} - ${circlecount & 1 ? "Odd - Red" : "Even - Blue"}`,
				message_ES: `${circlecount} - ${circlecount & 1 ? "Нечетный - Красный" : "Четный - Синий"}`
				message_PT: `${circlecount} - ${circlecount & 1 ? "Odd - Red" : "Even - Blue"}`,
			});
		}

		if ([21311, 21314].includes(skillid)) {
			handlers.text({ sub_type: "message", message: "IN | OUT", message_ES: "ENTRAR | SALIR", message_PT: "ENTRAR | SAIR" });
		}

		if ([21312, 21313].includes(skillid)) {
			handlers.text({ sub_type: "message", message: "OUT | IN", message_ES: "SALIR | ENTRAR", message_PT: "SAIR | ENTRAR" });
		}

		if ([21303].includes(skillid)) {
			if (print) {
				handlers.text({ sub_type: "notification", message: "Hit ALL", message_ES: "Golpear TODOS", message_PT: "Bata em TODOS", speech: false });
				handlers.text({ sub_type: "message", message: "Hit ALL", message_ES: "Golpear TODOS", message_PT: "Bata em TODOS" });
			} else {
				handlers.text({ sub_type: "message", message: "Hit ALL", message_ES: "Golpear TODOS", message_PT: "Bata em TODOS" });
			}
		}
	}

	return {
		// First boss
		"h-466-46602-99": [{ type: "func", func: () => print = false }],
		"h-466-46602-30": [{ type: "func", func: () => print = true }],
		//
		"qb-466-46621-466050": [
			{ type: "text", sub_type: "notification", message: "Don't hit RED", message_ES: "No Golpear ROJO", message_PT: "Não Bata no VERMELHO", speech: false },
			{ type: "text", sub_type: "message", message: "Don't hit RED", message_ES: "No Golpear ROJO", message_PT: "Não Bata no VERMELHO" }
		],
		"qb-466-46621-466051": [
			{ type: "text", sub_type: "notification", message: "Don't hit WHITE", message_ES: "No Golpear BLANCO", message_PT: "Não Bata no BRANCO", speech: false },
			{ type: "text", sub_type: "message", message: "Don't hit WHITE", message_ES: "No Golpear BLANCO", message_PT: "Não Bata no BRANCO" }
		],
		"qb-466-46621-466052": [
			{ type: "text", sub_type: "notification", message: "Don't hit BLUE", message_ES: "No Golpear AZUL", message_PT: "Não Bata no AZUL", speech: false },
			{ type: "text", sub_type: "message", message: "Don't hit BLUE", message_ES: "No Golpear AZUL", message_PT: "Não Bata no AZUL" }
		],
		"qb-466-46622-466054": [
			{ type: "text", sub_type: "notification", message: "Hit RED", message_ES: "Golpear ROJO", message_PT: "Bata no VERMELHO", speech: false },
			{ type: "text", sub_type: "message", message: "Hit RED", message_ES: "Golpear AZUL", message_PT: "Bata no VERMELHO" }
		],
		"qb-466-46622-466055": [
			{ type: "text", sub_type: "notification", message: "Hit WHITE", message_ES: "Golpear BLANCO", message_PT: "Bata no BRANCO", speech: false },
			{ type: "text", sub_type: "message", message: "Hit WHITE", message_ES: "Golpear BLANCO", message_PT: "Bata no BRANCO" }
		],
		"qb-466-46622-466056": [
			{ type: "text", sub_type: "notification", message: "Hit BLUE", message_ES: "Golpear AZUL", message_PT: "Bata no AZUL", speech: false },
			{ type: "text", sub_type: "message", message: "Hit BLUE", message_ES: "Golpear AZUL", message_PT: "Bata no AZUL" }
		],
		//
		"s-466-46601-1105-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun" }],
		"s-466-46601-1106-0": [{ type: "text", sub_type: "message", message: "Exhaust", message_ES: "Escape", message_PT: "Escape" }],
		"s-466-46601-1109-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Front", message_ES: "Frente Ataque", message_PT: "Frente Ataque" }],
		"s-466-46601-1110-0": [{ type: "text", sub_type: "message", message: "Tail", message_ES: "Cola", message_PT: "Cauda" }],
		"s-466-46601-2105-0": "s-466-46601-1105-0",
		"s-466-46601-2106-0": "s-466-46601-1106-0",
		"s-466-46601-2109-0": "s-466-46601-1109-0",
		"s-466-46601-2110-0": "s-466-46601-1110-0",
		"s-466-46601-1311-0": [{ type: "func", func: skilld_event.bind(null, 1311) }],
		"s-466-46601-1313-0": [{ type: "func", func: skilld_event.bind(null, 1313) }],
		"s-466-46601-1315-0": [{ type: "func", func: skilld_event.bind(null, 1315) }],
		"s-466-46601-1317-0": [{ type: "func", func: skilld_event.bind(null, 1317) }],
		"s-466-46601-1312-0": [{ type: "func", func: skilld_event.bind(null, 1312) }],
		"s-466-46601-1314-0": [{ type: "func", func: skilld_event.bind(null, 1314) }],
		"s-466-46601-1316-0": [{ type: "func", func: skilld_event.bind(null, 1316) }],
		"s-466-46601-1318-0": [{ type: "func", func: skilld_event.bind(null, 1318) }],
		"s-466-46601-1306-0": [{ type: "func", func: skilld_event.bind(null, 1306) }],
		"s-466-46601-1307-0": [{ type: "func", func: skilld_event.bind(null, 1307) }],
		"s-466-46601-1308-0": [{ type: "func", func: skilld_event.bind(null, 1308) }],
		"s-466-46601-1309-0": [{ type: "func", func: skilld_event.bind(null, 1309) }],
		"s-466-46601-1310-0": [{ type: "func", func: skilld_event.bind(null, 1310) }],
		"s-466-46601-1319-0": [{ type: "func", func: skilld_event.bind(null, 1319) }],
		"s-466-46601-1320-0": [{ type: "func", func: skilld_event.bind(null, 1320) }],
		"s-466-46601-1321-0": [{ type: "func", func: skilld_event.bind(null, 1321) }],
		"s-466-46601-1322-0": [{ type: "func", func: skilld_event.bind(null, 1322) }],
		"s-466-46601-1323-0": [{ type: "func", func: skilld_event.bind(null, 1323) }],
		//
		"s-466-46602-1116-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Jalar", message_PT: "Puxar" }],
		"s-466-46602-1223-0": [{ type: "text", sub_type: "message", message: "Double RED", message_ES: "Doble ROJO", message_PT: "VERMELHO Duplo" }],
		"s-466-46602-1113-0": [{ type: "text", sub_type: "message", message: "LASER!!!", message_ES: "LASER!!!", message_PT: "LASER!!!" }],
		"s-466-46602-2116-0": "s-466-46602-1116-0",
		"s-466-46602-2113-0": "s-466-46602-1113-0",
		"s-466-46602-1311-0": [{ type: "func", func: skilld_event.bind(null, 21311) }],
		"s-466-46602-1314-0": [{ type: "func", func: skilld_event.bind(null, 21314) }],
		"s-466-46602-1312-0": [{ type: "func", func: skilld_event.bind(null, 21312) }],
		"s-466-46602-1313-0": [{ type: "func", func: skilld_event.bind(null, 21313) }],
		"s-466-46602-1303-0": [{ type: "func", func: skilld_event.bind(null, 21303) }]
	};
};