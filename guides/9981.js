// Velik's Sanctuary (Difícil)
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let thirdboss_fifty = false;

	function secondboss_floor_event(one, two) {
		if (one && two) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza", message_PT: "Pizza" },
				{ type: "spawn", func: "marker", args: [false, one * 45 + 68, 500, 0, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 + 45, 750, 0, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 + 90, 750, 0, 5000] },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 330, 0, 6000] },
				{ type: "spawn", func: "marker", args: [false, two * 45 + 68, 300, 7000, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 + 45, 750, 7000, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 + 90, 750, 7000, 5000] }
			]);
		}
	}

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

	return {
		// 1 BOSS
		"nd-981-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-981-1000-1111-0": [{ type: "text", sub_type: "message", message: "Back 360", message_ES: "Atrás 360", message_PT: "Atrás 360" }],
		"s-981-1000-1401-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "DERECHA", message_PT: "DIREITA" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-1000-1402-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "IZQUIERDA", message_PT: "ESQUERDA" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-1000-1301-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE", message_PT: "AOE" },
			{ type: "text", sub_type: "message", message: "Dodge! (Go to the safe)", message_ES: "Iframe", message_PT: "Iframe", delay: 1000 }
		],
		"s-981-1000-1303-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro", message_PT: "Giro" }],
		"s-981-1000-1304-0": [
			{ type: "text", sub_type: "message", message: "Flying", message_ES: "Volando", message_PT: "Voando" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
		],
		"s-981-1000-1308-0": [{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR", message_PT: "SAIR" }],
		"s-981-1000-1309-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR", message_PT: "ENTRAR" }],
		"s-981-1000-1112-0": [{ type: "text", sub_type: "message", message: "BACK MOVE", message_ES: "MOVER ATRÁS", message_PT: "MOVER ATRÁS" }],
		"s-981-1000-1113-0": [{ type: "text", sub_type: "message", message: "Front + AoEs", message_ES: "Frente + AoEs", message_PT: "Frente + AoEs" }],
		"s-981-1000-1114-0": [
			{ type: "text", sub_type: "message", message: "Target", message_ES: "Objetivo", message_PT: "Alvo" },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-981-1000-1115-0": [{ type: "text", sub_type: "message", delay: 3200, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }], // dodge circle
		"s-981-1000-1117-0": [{ type: "text", sub_type: "message", delay: 5200, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }], // dodge circles
		"s-981-1000-2111-0": "s-981-1000-1111-0",
		"s-981-1000-2112-0": "s-981-1000-1112-0",
		"s-981-1000-2113-0": "s-981-1000-1113-0",
		"s-981-1000-2114-0": "s-981-1000-1114-0",
		"s-981-1000-2115-0": "s-981-1000-1115-0",
		"s-981-1000-2117-0": "s-981-1000-1117-0",
		"qb-981-1000-98103": [{ type: "text", sub_type: "message", message: "Lead circle to the stone", message_ES: "Conduza el Círculo a La Piedra", message_PT: "Conduza o Círculo Até a Pedra" }],
		"qb-981-1000-98106": [{ type: "text", sub_type: "message", message: "Lead circles to the stone", message_ES: "Conduza los Círculos a La Piedra", message_PT: "Conduza os Círculos Até a Pedra" }],

		// 2 BOSS
		"nd-981-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Cage Mechanic
		"s-981-2000-1501-0": [
			{ type: "text", sub_type: "message", message: "Identification", message_ES: "Identificación", message_PT: "Identificação" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" }
		],
		"s-981-2000-1138-0": [ // T1
			{ type: "event", delay: 6700, args: [
				{ type: "text", sub_type: "notification", message: "Out > In > Side > Side", message_ES: "Salir > Entrar > Lado", message_PT: "Sair > Entrar > Lado" },
				// x6 normal + in circle
				{ type: "spawn", func: "marker", args: [false, 15, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 0, 3000, true, null] },
				// out circle
				{ type: "spawn", func: "marker", args: [false, 15, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 170, 3000, 1500, true, null] },
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 4500, 1000, true, null] },
				// x4
				{ type: "spawn", func: "marker", args: [false, 75, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 5500, 2000, true, null] }
			] }
		],
		"s-981-2000-1139-0": [ // T2
			{ type: "event", delay: 7700, args: [
				{ type: "text", sub_type: "notification", message: "Side > In > Out > Side", message_ES: "Lado > Entrar > Salir > Lado", message_PT: "Lado > Entrar > Sair > Lado" },
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 0, 1500, true, null] },
				// x6 normal
				{ type: "spawn", func: "marker", args: [false, 15, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 1500, 1500, true, null] },
				// out circle
				{ type: "spawn", func: "marker", args: [false, 15, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 170, 3000, 1500, true, null] },
				// in circle
				{ type: "spawn", func: "marker", args: [false, 15, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 4500, 1500, true, null] },
				// x4
				{ type: "spawn", func: "marker", args: [false, 75, 270, 6000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 6000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 6000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 6000, 1500, true, null] }
			] }
		],
		"s-981-2000-1140-0": [ // T1
			{ type: "event", delay: 6700, args: [
				{ type: "text", sub_type: "notification", message: "Out > In > Side > Side", message_ES: "Salir> Entrar  > Lado", message_PT: "Sair > Entrar  > Lado" },
				// in circle
				{ type: "spawn", func: "marker", args: [false, 45, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 0, 1500, true, null] },
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 1500, 1500, true, null] },
				// x6 normal + out circle
				{ type: "spawn", func: "marker", args: [false, 15, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 170, 3000, 2500, true, null] },
				// x4
				{ type: "spawn", func: "marker", args: [false, 75, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 5500, 2000, true, null] }
			] }
		],
		"s-981-2000-1141-0": [ // T2
			{ type: "event", delay: 7700, args: [
				{ type: "text", sub_type: "notification", message: "Out > Side > Side > In", message_ES: "Salir > Lado > Lado > Entrar", message_PT: "Sair > Lado > Lado > Entrar" },
				// x6 normal
				{ type: "spawn", func: "marker", args: [false, 15, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 0, 1500, true, null] },
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 1500, 1500, true, null] },
				// in circle
				{ type: "spawn", func: "marker", args: [false, 75, 270, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 3000, 1500, true, null] },
				// out circle + x4
				{ type: "spawn", func: "marker", args: [false, 75, 170, 4500, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 4500, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 4500, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 4500, 3000, true, null] }
			] }
		],
		//
		"s-981-2000-1106-0": [
			{ type: "text", sub_type: "message", message: "Back", message_ES: "Atrás", message_PT: "Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 14, 270, 0, 2600] }
		],
		"s-981-2000-1108-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Frente", message_PT: "Frente" }],
		"s-981-2000-1110-0": [{ type: "text", sub_type: "message", message: "Back Move", message_PT: "Mover Atrás", message_ES: "Mover Atrás" }],
		"s-981-2000-1111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_PT: "Ataque 360", message_ES: "Ataque 360" }],
		"s-981-2000-1114-0": [{ type: "text", sub_type: "message", message: "Pull", message_PT: "Puxar", message_ES: "Jalar" }],
		"s-981-2000-1115-0": [{ type: "text", sub_type: "message", message: "Circles", message_PT: "Círculos", message_ES: "Círculos" }],
		"s-981-2000-1115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_PT: "Iframe", message_ES: "Iframe", delay: 150 }],
		"s-981-2000-1117-0": [{ type: "text", sub_type: "message", message: "Jump", message_PT: "Salto", message_ES: "Salto" }],
		"s-981-2000-1130-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "Frente", message_PT: "Frente" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-2000-1131-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha", message_PT: "Direita" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-2000-1134-0": [
			{ type: "text", sub_type: "message", message: "Inner + AoE", message_ES: "Dentro + AoE", message_PT: "Dentro + AoE" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 14, 175, 0, 1500] }
		],
		"s-981-2000-1134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-981-2000-1136-0": [{ type: "text", sub_type: "message", message: "Donut", message_ES: "Donut", message_PT: "Donut" }],
		"s-981-2000-1202-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_ES: "Objetivo Lanzar", message_PT: "Alvo Lançar" }],
		"s-981-2000-1205-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_ES: "Objetivo Lanzar", message_PT: "Alvo Lançar" }],
		"s-981-2000-1206-0": [{ type: "text", sub_type: "message", message: "Pike (Target)", message_ES: "Pike (Objetivo)", message_PT: "Pike (Alvo)" }],
		"s-981-2000-1302-0": [{ type: "text", sub_type: "message", message: "Bait (Target)", message_ES: "Bait (Objetivo)", message_PT: "Bait (Alvo)" }],
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
		"qb-981-4000-9981046": [{ type: "text", sub_type: "notification", message: "First: (Debuffs) Closest", message_PT: "Primeiro: Debuff (Juntar)", message_ES: "Primero: Debuff (Más cercano)" }], // Thank you... for this release...
		"qb-981-4000-9981047": [{ type: "text", sub_type: "notification", message: "First: (Circles) Spread", message_PT: "Primeiro: Círculos (Afastar)", message_ES: "Primero: Círculos (Separarse)" }], // Beware the... red lightning...
		"qb-981-4000-9981048": [{ type: "text", sub_type: "notification", message: "First: (Bombs) Gather + Cleanse", message_PT: "Primeiro: Bombas (Juntar + Cleanse)", message_ES: "Primero: Bombas (Reunirse + Cleanse)" }], // Beware the mark... of Lakan...

		// 3 BOSS
		"nd-981-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-981-3000-99": [{ type: "func", func: () => thirdboss_fifty = false }],
		"h-981-3000-50": [{ type: "func", func: () => thirdboss_fifty = true }],
		"dm-0-0-9981043": [{ type: "func", func: thirdboss_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-9981044": [{ type: "func", func: thirdboss_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-9981045": [{ type: "func", func: thirdboss_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-981-3000-1404-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Closest", message_PT: "Debuff (Juntar)", message_ES: "Debuff (Más cercano)" }],
		"s-981-3000-1405-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Farthest", message_PT: "Debuff (Afastar)", message_ES: "Debuff (Más lejano)" }],
		"s-981-3000-1301-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + Cleanse", message_PT: "Bombas Juntar + Cleanse", message_ES: "Bombas (Reunirse + Cleanse)" }],
		"s-981-3000-1302-0": [{ type: "text", sub_type: "message", message: "Bombs (Gather + [c=#ff0004]No[/c]  cleanse)", message_PT: "Bombas (Juntar + [c=#ff0004]No[/c] Cleanse)", message_ES: "Bombas (Reunirse + [c=#ff0004]No[/c] Cleanse)" }],
		"s-981-3000-3103-0": [{ type: "text", sub_type: "message", message: "(Circles) Spread", message_PT: "Círculos (Afastar)", message_ES: "Círculos (Separarse)" }],
		"s-981-3000-3105-0": [{ type: "text", sub_type: "message", message: "(Circles) Gather", message_PT: "Círculos (Juntar)", message_ES: "Círculos (Reunirse)" }],
		"s-981-3000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_PT: "Garra", message_ES: "Garra" }],
		"s-981-3000-1144-0": [{ type: "text", sub_type: "message", message: "OUT", message_PT: "SAIR", message_ES: "SALIR" }],
		"s-981-3000-1145-0": [{ type: "text", sub_type: "message", message: "IN", message_PT: "ENTRAR", message_ES: "ENTRAR" }],
		"s-981-3000-1240-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_ES: "Donuts", message_PT: "Donuts" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 0, 6000] }
		],
		"s-981-3000-1140-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_ES: "Donuts", message_PT: "Donuts" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 195, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 345, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 515, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 40, 8, 670, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 6, 830, 0, 4500] }
		],
		"s-981-3000-2140-0": "s-981-3000-1140-0",
		"s-981-3000-1146-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_ES: "Donuts", message_PT: "Donuts" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 195, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 345, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 515, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 40, 8, 670, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 6, 830, 0, 4500] }
		],
		"s-981-3000-1401-0": [
			{ type: "text", sub_type: "message", message: "Wave (Dodge) | Plague/Regress", message_ES: "Ola (Iframe) Plague/Regress", message_PT: "Onda (Iframe) Plague/Regress" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 15, 175, 1000, 7000] }
		],
		"s-981-3000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_ES: "Ola | Dormir (Iframe)", message_PT: "Onda | Dormir (Iframe)" }],
		"s-981-3000-1701-0": [{ type: "text", sub_type: "message", message: "Back + front", message_ES: "Atrás + Frente", message_PT: "Atrás + Frente" }],
		//
		"s-981-3000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait", message_PT: "Bait" }],
		"s-981-3000-1151-0": [{ type: "text", sub_type: "message", message: "Attention stun", message_ES: "Atención Stun", message_PT: "Atenção Stun" }],
		"s-981-3000-1152-0": [{ type: "text", sub_type: "message", message: "Stun + Back", message_ES: "Stun + Atrás", message_PT: "Stun + Atrás" }],
		"s-981-3000-1152-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1900 }],
		"s-981-3000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }],
		"s-981-3000-2113-0": "s-981-3000-1113-0",
		"s-981-3000-2151-0": "s-981-3000-1151-0",
		"s-981-3000-2152-0": "s-981-3000-1152-0",
		"s-981-3000-2152-1": "s-981-3000-1152-1",
		"s-981-3000-2138-0": "s-981-3000-1138-0"
	};
};