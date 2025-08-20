// Beach River Outpost
//
// made by Boguslaw, False
//feel free to improve :)

module.exports = (dispatch, handlers, guide, lang) => {

	const { player } = dispatch.require.library;
	
	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 428131012) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: "Orb on you fast!!!", message_ES: "Orb en ti Rápido", message_PT: "Orb em você Rápido" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: `Orb on ${member.name}`,
						message_ES: `Orb Encendido ${member.name}`,
						message_PT: `Orb Ligado ${member.name}`
					});
				}
			}
		}
	});

	return {
		"nd-2813-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-2813-1204": [{ type: "text", sub_type: "message", message: "Cross waves", message_ES: "Olas Cruzadas", message_PT: "Ondas Cruzadas" }],
		"ns-2813-1201": "ns-2813-1204",
		"s-2813-1000-501-0": [
			{ type: "text", sub_type: "message", message: "Donuts Out-In", message_ES: "Salir - Entrar", message_PT: "Sair - Entrar" },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 200, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 400, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 600, 200, 5000] }
		],
		"s-2813-1000-502-0": [
			{ type: "text", sub_type: "message", message: "Donuts Out-In-Out", message_ES: "Salir - Entrar - Salir", message_PT: "Sair - Entrar - Sair" },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 200, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 400, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 600, 200, 8000] }
		],
		"s-2813-1000-503-0": [
			{ type: "text", sub_type: "message", message: "Donuts In-Out", message_ES: "Entrar - Salir", message_PT: "Entrar - Sair" },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 200, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 400, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 600, 200, 5000] }
		],
		"s-2813-1000-504-0": [
			{ type: "text", sub_type: "message", message: "Donuts In-Out-In", message_ES: "Entrar - Salir - Entrar", message_PT: "Entrar - Sair - Entrar" },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 200, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 400, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 600, 200, 8000] }
		],
		"s-2813-1000-505-0": [{ type: "text", sub_type: "message", message: "Push to win mechanic", message_ES: "Mecánica de Empujar", message_PT: "Mecánica de Empurrar" }],
		"s-2813-1000-506-0": [{ type: "text", sub_type: "message", message: "Block", message_ES: "Block", message_PT: "Block", class_position: "tank" }],

		"s-2813-1000-510-0": [{ type: "text", sub_type: "message", message: "Take orb for shield", message_ES: "Tomar Orb como escudo", message_PT: "Pegue o Orb como Escudo" }],
		"s-2813-1000-511-0": [{ type: "text", sub_type: "message", message: "Front waves", message_ES: "Olas Frontal", message_PT: "Ondas Frontal", class_position: "tank" }],
		"s-2813-1000-512-0": [{ type: "text", sub_type: "message", message: "Two wide waves front", message_ES: "2 Olas Frontal", message_PT: "2 Ondas Frontal", class_position: "tank" }],
		"s-2813-1000-513-0": [{ type: "text", sub_type: "message", message: "Gather", message_ES: "Juntar", message_PT: "Juntar" }],
		"s-2813-1000-515-0": [{ type: "text", sub_type: "message", message: "Spread", message_ES: "Separarse", message_PT: "Espalhar" }],
		"s-2813-1000-517-0": [{ type: "text", sub_type: "message", message: "Frost Sphere front", message_ES: "Frente Esfera de Hielo", message_PT: "Frente Esfera de Gelo", class_position: "tank" }],
		"s-2813-1000-518-0": [{ type: "text", sub_type: "message", message: "Wave back", message_ES: "Ola Atrás", message_PT: "Onda Atrás" }],
		"s-2813-1000-519-0": [{ type: "text", sub_type: "message", message: "Big hit front", message_ES: "Grande Ataque Frontal", message_PT: "Grande Ataque Frontal", class_position: "tank" }],
		"s-2813-1000-521-0": [{ type: "text", sub_type: "message", message: "Ice Pillar Front", message_ES: "Frente Pilar de Hielo", message_PT: "Frente Pilar de Gelo", class_position: "tank" }],
		"s-2813-1000-522-0": [{ type: "text", sub_type: "message", message: "Two waves back", message_ES: "2 Olas Atrás", message_PT: "2 Ondas Atrás", class_position: ["dps", "heal"] }],
		"s-2813-1000-706-0": [{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "Iframe", message_PT: "Iframe", class_position: "tank" }],
		"s-2813-1000-606-0": [{ type: "text", sub_type: "message", message: "Eye! 4 hits block - 5th Dodge", message_ES: "4 Ojos Bloquea - 5 Esquiva", message_PT: "4 Olhos Bloqueia - 5 Esquiva", class_position: "tank" }]
	};
};