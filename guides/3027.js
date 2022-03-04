// Forbidden Arena [Hagufna]
//
// made by michengs / HSDN

/* eslint-disable no-multi-spaces */

module.exports = (dispatch, handlers, guide, lang) => {
	const { HIGHLIGHT_ITEM } = module.parent.exports.spawn;

	let timer1 = null;
	let timer2 = null;
	let print_shield = true;
	let print_hp = true;
	let is_hp_74_39 = false;

	function shield_event() {
		dispatch.clearTimeout(timer1);
		dispatch.clearTimeout(timer2);

		timer1 = dispatch.setTimeout(() => {
			if (!is_hp_74_39) {
				handlers.text({
					sub_type: "message",
					message_PT: "ESCUDO em 5 Segundos!",
					message_ES: "ESCUDO en 5 Secundos!",
					message: "Shield in 5 seconds!"
				});
			}
		}, 85000);

		timer2 = dispatch.setTimeout(() => {
			if (!is_hp_74_39) {
				handlers.text({
					sub_type: "message",
					message_PT: "ESCUDO em 15 Segundos!",
					message_ES: "ESCUDO en 15 Secundos!",
					message: "Shield in 15 seconds!"
				});
			}
		}, 75000);
	}

	function boss_hp_event(hp) {
		if ([74, 39].includes(hp)) {
			if (print_hp) {
				dispatch.clearTimeout(timer1);
				dispatch.clearTimeout(timer2);
				print_hp = false;
				is_hp_74_39 = true;
				dispatch.setTimeout(() => print_hp = true, 15000);
			}
		}
		if ([89, 59, 29].includes(hp)) { // до щита
			if (print_shield) {
				print_shield = false;
				is_hp_74_39 = false;
				dispatch.setTimeout(() => print_shield = true, 15000);

				handlers.text({
					sub_type: "alert",
					message_PT: "Pronto para o Escudo",
					message_ES: "Pronto para o Escudo",
					message: "Ready for Shield"
				});
			}
		}
	}

	return {
		"nd-3027-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3027-1000-89": [{ type: "func", func: boss_hp_event, args: [89] }],
		"h-3027-1000-59": [{ type: "func", func: boss_hp_event, args: [59] }],
		"h-3027-1000-29": [{ type: "func", func: boss_hp_event, args: [29] }],
		"h-3027-1000-74": [{ type: "func", func: boss_hp_event, args: [74] }],
		"h-3027-1000-39": [{ type: "func", func: boss_hp_event, args: [39] }],

		"s-3027-1001-255-0": [{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 3000, 0, 5000] }],  //0
		"s-3027-1002-256-0": [{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 3000, 0, 5000] }],  //60
		"s-3027-1003-257-0": [{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 3000, 0, 5000] }],  //0
		"s-3027-1004-258-0": [{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 3000, 0, 5000] }],  //60

		"s-3027-1000-108-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Espadada Frontal (CUIDADO)", message_ES: "Espadada Frontal (CUIDADO)", message: "Strike (Slow)" }], // 101 121 122 -> 108
		"s-3027-1000-135-0": [{ type: "text", sub_type: "message", message_PT: "Espadada Frontal (Lenta)", message_ES: "Espadada Frontal (Lenta)", message: "Strike (Slow)" }],                         //         104 -> 135 -> 130
		"s-3027-1000-111-0": [{ type: "text", sub_type: "message", message_PT: "Stun Frontal", message_ES: "Stun Frontal", message: "Stun | Strike" }],                              //         104 -> 111 -> 130
		"s-3027-1000-112-0": [{ type: "text", sub_type: "message", message_PT: "Salto Aleatorio (Espada)", message_ES: "Salto Aleatorio (Espada)", message: "Back Jump | Strike" }],                 //     121 102 -> 112 -> 130

		// прыжок
		"s-3027-1000-116-0": [
			{ type: "text", sub_type: "message", message_PT: "Bloco Perfeito", message_ES: "Bloco Perfecto", message: "Jump" },
			{ type: "spawn", func: "circle", args: [true, 413, 0, 180, 8, 560, 0, 1000] }
		],
		"s-3027-1000-116-1": [
			{ type: "text", sub_type: "message", message_PT: "Iframe", message_ES: "Iframe", message: "Dodge" },
			{ type: "spawn", func: "circle", args: [true, 912, 0, 180, 8, 480, 0, 3000] }
		],

		// 3 оборота -> прыжок (145 -> 139 -> 140)
		"s-3027-1000-145-0": [{ type: "text", sub_type: "message", message_PT: "Salto SLASH", message_ES: "Salto SLASH", message: "3x360 | Jump" }],
		"s-3027-1000-139-0": [
			{ type: "text", sub_type: "message", delay: 1000, message_PT: "Bloco Perfeito", message_ES: "Bloco Perfecto", message: "Jump" },
			{ type: "spawn", func: "circle", args: [true, 413, 0, 180, 8, 660, 1000, 1000] }
		],
		"s-3027-1000-140-0": [
			{ type: "text", sub_type: "message", message_PT: "Iframe", message_ES: "Iframe", message: "Iframe" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 110, 8, 480, 0, 3000] }
		],

		// 109 -> 402 -> 130
		"s-3027-1000-109-0": [{ type: "text", sub_type: "message", message_PT: "Salto a Frente | Espadada", message_ES: "Salto a Frente | Espadada", message: "Forward Jump" }],
		"s-3027-1000-402-0": [{ type: "text", sub_type: "message", message_PT: "Pulo Esmagar", message_ES: "Salto Smash", message: "Jump" }],

		// 136 -> 144 -> 130
		"s-3027-1000-136-0": [{ type: "text", sub_type: "message", message_PT: "2x360 (Giro) | Golpe Frontal", message_ES: "2x360 (Giro) | Golpe Frontal", message: "2x360 | Strike" }],
		"s-3027-1000-144-0": [{ type: "text", sub_type: "message", message_PT: "Strike", message_ES: "Strike", message: "Strike" }],

		// 134 -> 147
		"s-3027-1000-134-0": [{ type: "text", sub_type: "message", message_PT: "Cuidado (Ataque Atras)", message_ES: "Cuidado (Ataque Atras)", message: "Turn around | Back" }],
//		"s-3027-1000-134-1": [{ type: "text", sub_type: "message", message_PT: "Back", message_ES: "Back", message: "Back" }],
//		"s-3027-1000-147-0": [{ type: "text", sub_type: "message", message_PT: "Strike", message_ES: "Strike", message: "Strike" }],

		// 142 -> 143 114 130
		"s-3027-1000-142-0": [{ type: "text", sub_type: "message", message_PT: "2x360 (Giro) | Espadada Frontal", message_ES: "2x360 (Giro) | Espadada Frontal", message: "2x360 | Strike" }],
		"s-3027-1000-143-0": [{ type: "text", sub_type: "message", message_PT: "Espadada Frontal", message_ES: "Espadada Frontal", message: "Strike" }],

		"s-3027-1000-141-0": [{ type: "text", sub_type: "message", message_PT: "2x360 (Giro) | Espadada Frontal", message_ES: "2x360 (Giro) | Espadada Frontal", message: "2x360 | Eviscerate" }], // 141 -> 146 114 130
		"s-3027-1000-146-0": [{ type: "text", sub_type: "message", message_PT: "Espadada Frontal", message_ES: "Espadada Frontal", message: "Eviscerate | Strike" }],      // 146 ->         114 -> 130

		// стяжка -> бублики (350 -> 302)
		"s-3027-1000-350-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR - ENTRAR (Donuts)", message_ES: "SALIR - ENTRAR (Donuts)", message: "Red: Donuts (Out > In)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 240, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 480, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 5000] },
			{ type: "spawn", func: "item", args: [HIGHLIGHT_ITEM, 0, 0, 3800, 1000] },
			{ type: "text", sub_type: "alert", delay: 3450, message_PT: "ENTRA!!", message_ES: "ENTRA!!", message: "In" },
//			{ type: "spawn", func: "marker", args: [false, 180, 100, 3800, 1000, false, ["CENTER", "IN"]] },
//			{ type: "spawn", func: "marker", args: [false, 0, 100, 3800, 1000, false, ["CENTER", "IN"]] },
//			{ type: "spawn", func: "marker", args: [false, 90, 100, 3800, 1000, false, ["CENTER", "IN"]] },
//			{ type: "spawn", func: "marker", args: [false, 270, 100, 3800, 1000, false, ["CENTER", "IN"]] },
			{ type: "text", sub_type: "alert", delay: 58000, message_PT: "Mecanica em breve...", message_ES: "Mecanica pronto...", message: "Mechanics soon..." }
		],
		// стяжка -> волна (357 -> 110)
		"s-3027-1000-357-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR + Explosao (Iframe)", message_ES: "SALIR + Explosion (Iframe)", message: "Purple: Get Out" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 2000, 5000] },
			{ type: "text", sub_type: "alert", delay: 58000, message_PT: "Mecanica em Breve...", message_ES: "Mecanica Pronto...", message: "Mechanics soon..." }
		],

		//"s-3027-1000-114-0": [{ type: "text", sub_type: "message", message_PT: "Eviscerate (slow)", message_ES: "Eviscerate (slow)", message: "Eviscerate (slow)" }],
		//"s-3027-1000-130-0": [{ type: "text", sub_type: "message", message_PT: "Target", message_ES: "Target", message: "Target" }],
//		"s-3027-1000-151-0": [{ type: "text", sub_type: "message", message_PT: "Back teleport | Strike", message_ES: "Back teleport | Strike", message: "Back teleport | Strike" }], // 151 149 148 -> 130
//		"s-3027-1000-149-1": [{ type: "text", sub_type: "message", message_PT: "Back teleport (Target)", message_ES: "Back teleport | Strike", message: "Back teleport (Target)" }],
		"s-3027-1000-117-0": [{ type: "text", sub_type: "message", message_PT: "FLASH (Bait)", message_ES: "FLASH (Bait)", message: "Teleport (Target)" }],         //         117 -> 130
		"s-3027-1000-356-0": [{ type: "text", sub_type: "message", message_PT: "FLASH (Bait)", message_ES: "FLASH (Bait)", message: "Teleport (Target)" }],         //         356 -> 147
//		"s-3027-1000-148-1": [{ type: "text", sub_type: "message", message_PT: "Teleport (Target)", message_ES: "Teleport (Target)", message: "Teleport (Target)" }],

		"s-3027-1000-351-0": [
			{ type: "text", sub_type: "message", message_PT: "ESCUDO!", message_ES: "ESCUDO!", message: "Shield!" },
			{ type: "func", func: shield_event }
		],
		"s-3027-1000-401-0": [
			{ type: "text", sub_type: "message", message_PT: "30% AOE!", message_ES: "30% AOE!", message: "30% AOE!" },
			{ type: "text", sub_type: "message", delay: 1600, message_PT: "Iframe!", message_ES: "Iframe", message: "Dodge!" }
		]
	};
};