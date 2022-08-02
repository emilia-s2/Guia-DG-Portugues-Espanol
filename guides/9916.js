// Sky Cruiser Endeavor Difícil
//
// made by michengs / HSDN / Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	let back_print = false;
	let back_time = 0;
	let end_back_time = 0;
	let is_one_back = false;
	let is_hp_49 = false;
	let counter = 0;
	let enrage = 0;
	let timer2 = null;
	
	function boss_backcombo_event() {
		dispatch.clearTimeout(timer2);
		counter++;

		if (counter >= 2) {
			handlers.text({
				sub_type: "message",
				message_PT: "Atrás Combo 2x360"	,		
				message_ES: "Atrás Combo 2x360",
				message: "Back Combo 2x360"
			});
		}

		timer2 = dispatch.setTimeout(() => counter = 0, enrage == 1 ? 2000 : 3000);
	}	

	function boss_backattack_event() {
		end_back_time = new Date() - back_time;

		if (!back_print) {
			back_print = true;
			is_one_back = end_back_time > 0 && end_back_time < 1500;

			handlers.text({
				sub_type: "message",
				message_PT: is_one_back ? "Atrás 360" : "!!!",
				message_ES: is_one_back ? "Atrás 360" : "!!!",
				message: is_one_back ? "Back 360" : "!!!"
			});
		}
		dispatch.setTimeout(() => back_print = false, 3500);
	}

		return {
		// Mini BOSS 1
		"qb-916-91660-916045": [{ type: "text", sub_type: "message", message_PT: "Disparo Aleatório", message_ES: "Disparo Aleatorio", message: "Random Shot" }],
		"s-916-91660-1304-0": [
			{ type: "spawn", func: "vector", args: [912, 370, 50, 8, 1900, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 1900, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 350, 50, -8, 1900, 0, 3000] }
		],	
		"s-916-91660-1304-1": [
			{ type: "spawn", func: "vector", args: [912, 370, 50, 8, 1900, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 1900, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 350, 50, -8, 1900, 0, 3000] }
		],
		"s-916-91650-1102-0": [{ type: "text", sub_type: "message", message_PT: "Stun", message_ES: "Stun AoE", message: "AoE Stun" }],
		"s-916-91650-1104-0": [{ type: "text", sub_type: "message", message_PT: "Alvo Aleatório (Stun)", message_ES: "Objetivo Aleatorio (Stun)", message: "Random Target (Stun)" },
			{ type: "spawn", func: "semicircle", args: [-33, 38, 912, 0, 0, 8, 550, 0, 3500] },//1
			{ type: "spawn", func: "semicircle", args: [-30, 35, 912, 0, 0, 8, 500, 0, 3500] },//1
			{ type: "spawn", func: "semicircle", args: [59, 116, 912, -22, 210, 8, 480, 0, 3500] },//2
			{ type: "spawn", func: "semicircle", args: [65, 120, 912, -17, 210, 8, 410, 0, 3500] },//2
			{ type: "spawn", func: "semicircle", args: [-110, -55, 912, 30, 200, 8, 500, 0, 3500] },//3
			{ type: "spawn", func: "semicircle", args: [-110, -55, 912, 30, 200, 8, 450, 0, 3500] }//3
		],
		"s-916-91650-1105-0": [{ type: "text", sub_type: "message", message_PT: "Salto + Cabeçada Alvo", message_ES: "Salto + Cabezazo Objetivo", message: "Jump + Headbutt on Target" }],
		"s-916-91650-1106-0": [{ type: "text", sub_type: "message", message_PT: "Cabeçada (Alvo)", message_ES: "Cabezazo (Objetivo)", message: "Headbutt (Target)" }],
		"s-916-91650-2102-0": "s-916-91650-1102-0",
		"s-916-91650-2104-0": "s-916-91650-1104-0",
		"s-916-91650-2105-0": "s-916-91650-1105-0",
		"s-916-91650-2106-0": "s-916-91650-1106-0",

		// Mini BOSS 2
		"ns-916-91606": [
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 57099, y: 129439, z: 2370, w: -1.004}, ownerName: "LASER ALEATÓRIO", message: "LASER ALEATÓRIO" },//1
			{ type: "spawn", sub_type: "item", id: 110684, sub_delay: 99999999, pos: { x: 57099, y: 129439, z: 2370, w: -1.004} },//1
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 58313, y: 129448, z: 2370, w: -2.06}, ownerName: "LASER ALEATÓRIO", message: "LASER ALEATÓRIO" },//2
			{ type: "spawn", sub_type: "item", id: 110684, sub_delay: 99999999, pos: { x: 58313, y: 129448, z: 2370, w: -2.06} },//2
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 58310, y: 127208, z: 2370, w: 2.00}, ownerName: "LASER ALEATÓRIO", message: "LASER ALEATÓRIO" },//3
			{ type: "spawn", sub_type: "item", id: 110684, sub_delay: 99999999, pos: { x: 58310, y: 127208, z: 2370, w: 2.00} },//3
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 57064, y: 127210, z: 2370, w: 1.00}, ownerName: "LASER ALEATÓRIO", message: "LASER ALEATÓRIO" },//4
			{ type: "spawn", sub_type: "item", id: 110684, sub_delay: 99999999, pos: { x: 57064, y: 127210, z: 2370, w: 1.00} }//4
		],
		"s-916-91606-1304-0": [{ type: "text", sub_type: "message", message_PT: "Laser Aleatório", message_ES: "Laser Aleatorio", message: "Random Laser", },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 5000, pos: { x: 57291, y: 129078, z: 2370, w: -1.00}, ownerName: "LASER ", message: "LASER ALEATÓRIO" },//1
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 5000, pos: { x: 58116, y: 129086, z: 2370, w: -2.06}, ownerName: "LASER", message: "LASER ALEATÓRIO" },//2
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 5000, pos: { x: 58119, y: 127632, z: 2370, w: 2.00}, ownerName: "LASER", message: "LASER ALEATÓRIO" },//3
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 5000, pos: { x: 57294, y: 127626, z: 2370, w: 1.00}, ownerName: "LASER", message: "LASER ALEATÓRIO" }//4
		],
		"s-916-91606-1102-0": [{ type: "text", sub_type: "message", message_PT: "Giro", message_ES: "Giro", message: "Spin" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, -15, 15, 280, 0, 2500] }
		],
		"s-916-91606-1106-0": [{ type: "text", sub_type: "message", message_PT: "Combo Frontal (Alvo)", message_ES: "Combo Frontal (Objetivo)", message: "Frontal Combo (Target)" },
			{ type: "spawn", func: "circle", args: [false, 553, -30, 200, 24, 160, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 445, -10, 230, 24, 210, 2000, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 50, 50, 24, 160, 2000, 3000] }
		],
		"s-916-91606-1107-0": [{ type: "text", sub_type: "message", message_PT: "Muitos Golpes (alvo)", message_ES: "Muchos Golpes (Objetivo)", message: "Many Hits (Target)" }],
		"s-916-91606-1302-0": [{ type: "text", sub_type: "message", message_PT: "Laser (PROTEGER)", message_ES: "Laser (PROTEGER)", message: "Laser (PROTECT)" },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 900, 0, 4000] }
		],
		"s-916-91606-1304-1": [{ type: "text", sub_type: "message", message_PT: "Iframe", message_ES: "Iframe", message: "Dodge", delay: 250 }],
		"s-916-91606-1305-0": [{ type: "text", sub_type: "message", message_PT: "AoEs", message_ES: "AoEs", message: "AoEs" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 210, 22, 140, 0, 3000] },//1 front
			{ type: "spawn", func: "circle", args: [false, 553, 0, -230, 22, 140, 0, 3000] },//2 back
			{ type: "spawn", func: "circle", args: [false, 553, 90, -230, 22, 140, 0, 2000] },//3 left
			{ type: "spawn", func: "circle", args: [false, 553, 270, -230, 22, 140, 0, 2000] },//4 right
			{ type: "spawn", func: "circle", args: [false, 553, 315, 360, 14, 220, 3000, 2000] },//1 front left big
			{ type: "spawn", func: "circle", args: [false, 553, 135, 360, 14, 220, 3000, 2000] },//2 back right big
			{ type: "spawn", func: "circle", args: [false, 553, 45, 360, 14, 220, 2000, 2000] },//3 front right big
			{ type: "spawn", func: "circle", args: [false, 553, 225, 360, 14, 220, 2000, 2000] }//4 back left big
		],
		"s-916-91606-2102-0": "s-916-91606-1102-0",
		"s-916-91606-2106-0": "s-916-91606-1106-0",
		"s-916-91606-2107-0": "s-916-91606-1107-0",
		"qb-916-91606-916027": [{ type: "text", sub_type: "message", message_PT: "Alvo (Empurrar)", message_ES: "Objetivo (Empujar)", message: "Target (Push)" }],
		"qb-916-91606-916007": [{ type: "text", sub_type: "message", message_PT: "(JUNTAR)", message_ES: "JUNTARSE", message: "GATHER" }],

		// Boss 3
		"nd-916-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-916-1000-100": [{ type: "func", func: () => is_hp_49 = false }],
		"h-916-1000-94": [{ type: "text", sub_type: "message", message: "94%" }],
		"h-916-1000-49": [{ type: "text", sub_type: "message", message: "49%" }, { type: "func", func: () => is_hp_49 = true }],
		"s-916-1000-1101-0": [{ type: "func", func: boss_backattack_event }],
		"s-916-1000-1102-0": [{ type: "func", func: () => back_time = new Date() }],
		"s-916-1000-1112-0": [{ type: "text", sub_type: "message", message_PT: "Movimento Atrás", message_ES: "Movimiento Atrás", message: "Back Move" }],
		"s-916-1000-1103-0": [{ type: "func", func: boss_backcombo_event }],
		"s-916-1000-1108-0": [{ type: "func", func: boss_backcombo_event }],
		"s-916-1000-1114-0": [
			{ type: "text", sub_type: "message", message_PT: "Ataque Alvo", message_ES: "Ataque Objetivo", message: "Target Attack" },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-916-1000-1115-0": [
			{ type: "text", sub_type: "message", message: "3" },
			{ type: "text", sub_type: "message", delay: 1000, message: "2" },
			{ type: "text", sub_type: "message", delay: 2000, message: "1" },
			{ type: "text", sub_type: "message", delay: 3200, message_PT: "Iframe", message_ES: "Iframe", message: "Dodge" }
		],
		"s-916-1000-1117-0": [{ type: "text", sub_type: "message", message_PT: "Frente", message_ES: "Frente", message: "Front" }],
		"s-916-1000-1118-0": [
			{ type: "text", sub_type: "message", message_PT: "Corte Frontal | Iframe", message_ES: "Corte Frontal | Iframe", message: "Frontal Cut | Dodge" },
			{ type: "spawn", func: "semicircle", args: [0, 60, 553, 0, 0, 15, 60, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 55, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 45, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 45, 553, 0, 0, 10, 340, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [300, 360, 553, 0, 0, 15, 60, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [305, 360, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [310, 360, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [315, 360, 553, 0, 0, 10, 340, 0, 2000] }
		],
		"s-916-1000-1302-0": [
			{ type: "text", sub_type: "message", message_PT: "AOE", message_ES: "AOE", message: "AOE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 100, 6000] }
		],
		"s-916-1000-2101-0": "s-916-1000-1101-0",
		"s-916-1000-2102-0": "s-916-1000-1102-0",
		"s-916-1000-2103-0": "s-916-1000-1103-0",
		"s-916-1000-2108-0": "s-916-1000-1108-0",
		"s-916-1000-2112-0": "s-916-1000-1112-0",
		"s-916-1000-1303-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Giratorio", message_ES: "Ataque Giratorio", message: "Spin Attack" }],
		"s-916-1000-1801-0": [{ type: "text", sub_type: "message", message_PT: "Entrada (Stun)", message_ES: "Entrada (Stun)", message: "Incoming Stun" }],
		"s-916-1000-1401-0": [{ type: "text", sub_type: "message", message_PT: "Direita", message_ES: "Derecha", message: "Right" },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1500] }
		],
		"s-916-1000-1402-0": [{ type: "text", sub_type: "message", message_PT: "Esquerda", message_ES: "Izquierda", message: "Left" },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1500] }
		],
		"s-916-1000-2114-0": "s-916-1000-1114-0",
		"s-916-1000-2115-0": "s-916-1000-1115-0",
		"s-916-1000-2117-0": "s-916-1000-1117-0",
		"s-916-1000-2118-0": "s-916-1000-1118-0",
		"s-916-1000-2401-0": "s-916-1000-1401-0",
		"s-916-1000-2402-0": "s-916-1000-1402-0"
	};
};