// Velik's Sanctuary (Hard)
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let thirdboss_fifty = false;

	function thirdboss_message_event(skillid) {
		switch (skillid) {
			// Lakan te ha notado.
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
			// Lakan está tratando de enfrentarte de uno en uno.
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
			// Lakan tiene la intención de matarlos a todos a la vez.
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

	return {
		// 1 BOSS
		"nd-981-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-981-1000-1401-0": [
			{ type: "text", sub_type: "message", message: "Right", message_PT: "Direita", message_ES: "Derecha" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		"s-981-1000-1402-0": [
			{ type: "text", sub_type: "message", message: "Left", message_PT: "Esquerda", message_ES: "Izquierda" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-981-1000-1303-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Girar", message_ES: "Girar" }],
		"s-981-1000-1304-0": [
			{ type: "text", sub_type: "message", message: "Flying", message_PT: "Voar", message_ES: "Volar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
		],
		"s-981-1000-1308-0": [{ type: "text", sub_type: "message", message: "OUT", message_PT: "SAIR", message_ES: "SALIR" }],
		"s-981-1000-1309-0": [{ type: "text", sub_type: "message", message: "IN", message_PT: "ENTRAR", message_ES: "ENTRAR" }],
		"s-981-1000-1113-0": [{ type: "text", sub_type: "message", message: "Front + AoEs", message_PT: "Ataque Frontal | AOE", message_ES: "Ataque frontal | AOE" }],
		"s-981-1000-2401-0": "s-981-1000-1401-0",
		"s-981-1000-2402-0": "s-981-1000-1402-0",
		"s-981-1000-2303-0": "s-981-1000-1303-0",
		"s-981-1000-2304-0": "s-981-1000-1304-0",
		"s-981-1000-2308-0": "s-981-1000-1308-0",
		"s-981-1000-2309-0": "s-981-1000-1309-0",
		"s-981-1000-2113-0": "s-981-1000-1113-0",

		// 2 BOSS
		"nd-981-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Mecánica de jaula
		"s-981-2000-1501-0": [
			{ type: "text", sub_type: "message", message: "Identification", message_PT: "Identificacão", message_ES: "Identificación" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" }
		],
		"s-981-2000-1106-0": [
			{ type: "text", sub_type: "message", message: "Back", message_PT: "Ataque Atrás", message_ES: "Ataque Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 14, 270, 0, 2600] }
		],
		"s-981-2000-1108-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Ataque Frontal", message_ES: "Ataque frontal" }],
		"s-981-2000-1111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_PT: "Ataque 360", message_ES: "Ataque Circular" }],
		"s-981-2000-1134-0": [
			{ type: "text", sub_type: "message", message: "Combo Attack (Dodge)", message_PT: "Ataque Combo (Iframe)", message_ES: "Ataque Combo (Iframe)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-981-2000-1134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 15, 175, 100, 2000] }
		],
		"s-981-2000-1130-0": [
			{ type: "text", sub_type: "message", message: "Left", message_PT: "Esquerda", message_ES: "Izquierda" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-981-2000-1131-0": [
			{ type: "text", sub_type: "message", message: "Right", message_PT: "Direita", message_ES: "Derecha" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		"s-981-2000-1302-0": [{ type: "text", sub_type: "message", message: "Bait", message_PT: "Bait", message_ES: "Ataque -> (al jugador)" }],
		"s-981-2000-2501-0": "s-981-2000-1501-0",
		"s-981-2000-2106-0": "s-981-2000-1106-0",
		"s-981-2000-2108-0": "s-981-2000-1108-0",
		"s-981-2000-2111-0": "s-981-2000-1111-0",
		"s-981-2000-2134-0": "s-981-2000-1134-0",
		"s-981-2000-2134-1": "s-981-2000-1134-1",
		"s-981-2000-2130-0": "s-981-2000-1130-0",
		"s-981-2000-2131-0": "s-981-2000-1131-0",
		//
		"qb-981-4000-9981046": [{ type: "text", sub_type: "notification", message: "First: (Debuffs) Closest", message_PT: "Primeiro: Debuff (Juntar)", message_ES: "Primero: Debuff (Más cercano)" }], // Gracias... por esta versión...
		"qb-981-4000-9981047": [{ type: "text", sub_type: "notification", message: "First: (Círculos) Spread", message_PT: "Primeiro: Círculos (Afastar)", message_ES: "Primero: Círculos (Separarse)" }], // Cuidado con el... rayo rojo...
		"qb-981-4000-9981048": [{ type: "text", sub_type: "notification", message: "First: (Bombas) Gather + Cleanse", message_PT: "Primeiro: Bombas (Juntar + Cleanse)", message_ES: "Primero: Bombas (Reunirse + Cleanse)" }], // Cuidado con la marca... de Lakan...

		// 3 BOSS
		"nd-981-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-981-3000-99": [{ type: "func", func: () => thirdboss_fifty = false }],
		"h-981-3000-50": [{ type: "func", func: () => thirdboss_fifty = true }],
		"dm-0-0-9981043": [{ type: "func", func: thirdboss_message_event, args: [1043] }], // Lakan se ha fijado en ti.
		"dm-0-0-9981044": [{ type: "func", func: thirdboss_message_event, args: [1044] }], // Lakan está tratando de enfrentarte de uno en uno.
		"dm-0-0-9981045": [{ type: "func", func: thirdboss_message_event, args: [1045] }], // Lakan tiene la intención de matarlos a todos a la vez.
		"s-981-3000-1404-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Closest", message_PT: "Debuff (Juntar)", message_ES: "Debuff (Más cercano)" }],
		"s-981-3000-1405-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Farthest", message_PT: "Debuff (Afastar)", message_ES: "Debuff (Más lejano)" }],
		"s-981-3000-1301-0": [{ type: "text", sub_type: "message", message: "(Bombas) Gather + Cleanse", message_PT: "Bombas Juntar + Cleanse", message_ES: "Bombas (Reunirse) + Cleanse" }],
		"s-981-3000-1302-0": [{ type: "text", sub_type: "message", message: "(Bombas) Gather + No cleanse", message_PT: "Bombas Juntar + No Cleanse", message_ES: "Bombas (Reunirse) + No Cleanse" }],
		"s-981-3000-3103-0": [{ type: "text", sub_type: "message", message: "(Círculos) Spread", message_PT: "Círculos (Afastar)", message_ES: "Círculos (Separarse)" }],
		"s-981-3000-3105-0": [{ type: "text", sub_type: "message", message: "(Círculos) Gather", message_PT: "Círculos (Juntar)", message_ES: "Círculos (Reunirse)" }],
		"s-981-3000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_PT: "Garra", message_ES: "Garra" }],
		"s-981-3000-1144-0": [{ type: "text", sub_type: "message", message: "OUT", message_PT: "SAIR", message_ES: "SALIR" }],
		"s-981-3000-1145-0": [{ type: "text", sub_type: "message", message: "IN", message_PT: "ENTRAR", message_ES: "ENTRAR" }],
		"s-981-3000-1240-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_PT: "Donuts", message_ES: "Donas" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 0, 6000] }
		],
		"s-981-3000-1401-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_PT: "Plague/Regress", message_ES: "Plague/Regress" }],
		"s-981-3000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_PT: "Dormir", message_ES: "¡¡Dormir!!" }],
		"s-981-3000-1701-0": [{ type: "text", sub_type: "message", message: "Back + Front", message_PT: "Atras + Frente Ataque", message_ES: "Ataque atrás + Ataque frontal" }],
		//
		"s-981-3000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_PT: "Bait", message_ES: "Ataque -> (al jugador)" }],
		"s-981-3000-1151-0": [{ type: "text", sub_type: "message", message: "Attention Stun", message_PT: "Atenção Stun", message_ES: "Stun" }],
		"s-981-3000-1152-0": [{ type: "text", sub_type: "message", message: "Stun + Back", message_PT: "Stun + Atrás Ataque", message_ES: "Stun + Ataque atrás" }],
		"s-981-3000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }],
		"s-981-3000-2113-0": "s-981-3000-1113-0",
		"s-981-3000-2151-0": "s-981-3000-1151-0",
		"s-981-3000-2152-0": "s-981-3000-1152-0",
		"s-981-3000-2138-0": "s-981-3000-1138-0"
	};
};