// Bahaar's Sanctum (Training)
//
// made by michengs

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let print = false;
	let notice = true;
	let printend = false;

	function skilld_event(skillid, ent) {
		if (skillid == 30372304) {
			handlers.text({ sub_type: "notification", message_PT: "Stun", message_ES: "Stun", message: "Stun!" });
			handlers.text({ sub_type: "message", message_PT: "Stun", message_ES: "Stun", message: "Stun!" });
		}

		if (notice && skillid == 305) {
			notice = false;
			handlers.text({
				sub_type: "message",
				message_PT: "Laser",
				message_ES: "Laser",
				message: "Laser"
			});

			dispatch.setTimeout(() => notice = true, 4000);
		}

		// Wawes
		if ([1121, 2121, 1140, 2140, 1123, 2123, 1142, 2142, 1122, 2122, 1141, 2141].includes(skillid)) {
			handlers.event([
				{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 500, 0, 6000] },
				{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 500, 0, 6000] },
				{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 500, 0, 6000] },
				{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 500, 0, 6000] },
//				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 400, 0, 6000] },
				{ type: "text", sub_type: "alert", delay: 60000, message_PT: "Ondas em Breve...", message_ES: "Olas Pronto...", message: "Waves soon..." }
			]);
		}

		// Left
		if ([1121, 2121].includes(skillid)) {
			handlers.event([
				{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe"]] },
				{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe"]] }
			]);
		}

		// Right
		if ([1140, 2140].includes(skillid)) {
			handlers.event([
				{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe"]] },
				{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe"]] }
			]);
		}

		// 2nd fast 123 142
		// Left
		if ([1123, 2123].includes(skillid)) {
			handlers.event([
				{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2500, false, ["safe", "safe"]] },
				{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2500, false, ["safe", "safe"]] }
			]);
		}

		// Right
		if ([1142, 2142].includes(skillid)) {
			handlers.event([
				{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2500, false, ["safe", "safe"]] },
				{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2500, false, ["safe", "safe"]] }
			]);
		}

		// 3rd fast 122 141
		// Left
		if ([1122, 2122].includes(skillid)) {
			handlers.event([
				{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe"]] },
				{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe"]] }
			]);
		}

		// Right
		if ([1141, 2141].includes(skillid)) {
			handlers.event([
				{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe"]] },
				{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe"]] }
			]);
		}
	}

	function start_boss() {
		print = true;
		printend = true;
	}

	function print_th() {
		if (print) {
			handlers.text({
				sub_type: "message",
				message_PT: "Laser (Carregando)",
				message_ES: "Laser (Cargando)",
				message: "Laser (loading)"
			});
		}

		print = false;
	}

	function print_end() {
		if (printend) {
			handlers.text({
				sub_type: "message",
				message_PT: "Laser (Carregando)",
				message_ES: "Laser (Cargando)",
				message: "Laser (loading)"
			});
			handlers.text({
				sub_type: "message",
				delay: 30000,
				message_PT: "Laser (Carregando)",
				message_ES: "Laser (Cargando)",
				message: "Laser (loading)"
			});
		}

		printend = false;
	}

	return {
		// PHASE 1
		"nd-3037-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		// ---------------------------------------- Not enraged ----------------------------------------
		"s-3037-1000-2103-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente (Esquiva)", message_ES: "Frente (Esquiva)", message: "Front (Dodge)" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3000] }
		],
		"s-3037-1000-2108-0": [{ type: "text", sub_type: "message", message_PT: "Martelo Atras (Stun)", message_ES: "Martillo Atras (Stun)", message: "Back Throw | Front" }],
		"s-3037-1000-2111-0": [
			{ type: "text", sub_type: "message", message_PT: "Atras", message_ES: "Atras", message: "Back" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-3037-1000-2113-0": [{ type: "text", sub_type: "message", message_PT: "Bait (Esquiva)", message_ES: "Bait (Esquiva)", message: "Throw (Bait)" }],
		"s-3037-1000-2114-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente Bater", message_ES: "Frente Golpe", message: "Front Slam" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 260, 10, 320, 100, 3000] }
		],
		"s-3037-1000-2115-0": [{ type: "text", sub_type: "message", delay: 234, message_PT: "Knockup", message_ES: "Knockup", message: "Knockup" }],
		"s-3037-1000-2116-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR - ENTRAR (Donuts)", message_ES: "SALIR - ENTRAR (Donuts)", message: "Donuts" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 290, 100, 6000] }
		],
		"s-3037-1000-2117-0": [{ type: "text", sub_type: "message", message_PT: "Pular (Bait)", message_ES: "Salto (Bait)", message: "Jump (Bait)" }],
		"s-3037-1000-2118-0": [{ type: "text", sub_type: "message", message_PT: "Pular (Tank)", message_ES: "Salto (Tank)", message: "Jump (Tank)" }],
		"s-3037-1000-2121-0": [{ type: "text", sub_type: "message", message_PT: "Ondas (ESQUERDA)", message_ES: "Olas (IZQUIERDA)", message: "Waves (Left)" }, { type: "func", func: skilld_event, args: [2121] }],
		//
		"s-3037-1000-2131-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente | Esquerda Arranhao", message_ES: "Frente | Izquierda Rasguno", message: "Front | Left Scratch" },
			{ type: "spawn", func: "circle", args: [false, 553, 358, 340, 6, 630, 100, 3300] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 186 ,800, 0, 3500] },	 //Alterado
			{ type: "spawn", func: "vector", args: [553, 90, 115, 6, 300, 0, 3500] },	 //Alterado
			{ type: "spawn", func: "vector", args: [553, 270, 250, 6, 300, 0, 3500] },	 //Alterado
			{ type: "spawn", func: "vector", args: [553, 270, 250, 186, 800, 0, 3500] }	 //Alterado
	],
		//
		"s-3037-1000-2137-0": [
			{ type: "text", sub_type: "message", message_PT: "Martelo Atras", message_ES: "Martillo Atras", message: "Hammer Back" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-3037-1000-2138-0": [{ type: "text", sub_type: "message", delay: 234, message_PT: "Knockup (Bait)", message_ES: "Knockup (Bait)", message: "Knockup (Bait)" }],
		"s-3037-1000-2139-0": [
			{ type: "text", sub_type: "message", message_PT: "Rebater (Esquiva)!", message_ES: "Tumbar (Esquiva)!", message: "Dodge!" }
/*			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 360, 0, 2000] }*/
		],
		"s-3037-1000-2140-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (DIREITA)", message_ES: "Olas (DERECHA)", message: "Waves (Right)" },
			{ type: "func", func: skilld_event, args: [2140] }
		],

		// ---------------------------------------- Enraged ----------------------------------------
		"s-3037-1000-1103-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente (Esquiva)", message_ES: "Frente (Esquiva)", message: "Front (Dodge)" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3000] }
		],
		"s-3037-1000-1108-0": [{ type: "text", sub_type: "message", message_PT: "Martelo Atras (Stun)", message_ES: "Martillo Atras (Stun)", message: "Back Throw | Front" }],
		"s-3037-1000-1111-0": [
			{ type: "text", sub_type: "message", message_PT: "Atras", message_ES: "Atras", message: "Back" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-3037-1000-1113-0": [{ type: "text", sub_type: "message", message_PT: "Bait (Esquiva)", message_ES: "Bait (Esquiva)", message: "Throw (Bait)" }],
		"s-3037-1000-1114-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente Bater", message_ES: "Frente Golpe", message: "Front Slam" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 260, 10, 320, 100, 3000] }
		],
		"s-3037-1000-1115-0": [{ type: "text", sub_type: "message", delay: 1300, message_PT: "Knockup", message_ES: "Knockup", message: "Knockup" }],
		"s-3037-1000-1116-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR - ENTRAR (Donuts)", message_ES: "SALIR - ENTRAR (Donuts)", message: "Donuts" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 290, 100, 6000] }
		],
		"s-3037-1000-1117-0": [{ type: "text", sub_type: "message", message_PT: "Pular (Bait)", message_ES: "Salto (Bait)", message: "Jump (Bait)" }],
		"s-3037-1000-1118-0": [{ type: "text", sub_type: "message", message_PT: "Pular (Tank)", message_ES: "Salto (Tank)", message: "Jump (Tank)" }],
		"s-3037-1000-1121-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (ESQUERDA)", message_ES: "Olas (IZQUIERDA)", message: "Waves (Left)" },
			{ type: "func", func: skilld_event, args: [1121] }
		],
		"s-3037-1000-1131-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente | Esquerda Arranhao", message_ES: "Frente | Izquierda Rasguno", message: "Front | Left Scratch" },
			{ type: "spawn", func: "circle", args: [false, 553, 358, 340, 6, 630, 100, 3300] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 186 ,800, 0, 3500] },	 //Alterado
			{ type: "spawn", func: "vector", args: [553, 90, 115, 6, 300, 0, 3500] },	 //Alterado
			{ type: "spawn", func: "vector", args: [553, 270, 250, 6, 300, 0, 3500] },	 //Alterado
			{ type: "spawn", func: "vector", args: [553, 270, 250, 186, 800, 0, 3500] }	 //Alterado
	],
		"s-3037-1000-1137-0": [
			{ type: "text", sub_type: "message", message_PT: "Martelo Atras", message_ES: "Martillo Atras", message: "Hammer Back" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-3037-1000-1138-0": [{ type: "text", sub_type: "message", delay: 1300, message_PT: "Knockup (Bait)", message_ES: "Knockup (Bait)", message: "Knockup (Bait)" }],
		"s-3037-1000-1139-0": [
			{ type: "text", sub_type: "message", message_PT: "Rebater (Esquiva)!", message_ES: "Tumbar (Esquiva)!", message: "Dodge!" }
/*			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 360, 0, 2000] }*/
		],
		"s-3037-1000-1140-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (DIREITA)", message_ES: "Olas (DERECHA)", message: "Waves (Right)" },
			{ type: "func", func: skilld_event, args: [1140] }
		],


		// PHASE 2
		"nd-3037-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: print_end }
		],
		"ns-3037-2000": [
			//{ type: "spawn", func: "vector", args: [542, 0, 0, 0, 3000, 0, 6000000] },
			//{ type: "spawn", func: "vector", args: [542, 0, 0, 180, 3000, 0, 6000000] },
			{ type: "spawn", func: "marker", args: [false, 0, -700, 100, 60000000, false, ["Throne", "Throne Direction"]] },
			{ type: "spawn", func: "point", args: [513, 0, 800, 100, 60000000] },
			{ type: "func", func: start_boss }
		],

		// ---------------------------------------- Not enraged ----------------------------------------
		"s-3037-2000-1101-0": [
			{ type: "text", sub_type: "message", message_PT: "4 Hit Combo", message_ES: "4 Hit Combo", message: "4 Hit Combo" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 195, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 3000] }
		],
		"s-3037-2000-1103-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente (Esquiva)", message_ES: "Frente (Esquiva)", message: "Front (Dodge)" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3000] }
		],
		"s-3037-2000-1107-0": [{ type: "text", sub_type: "message", message_PT: "4 Hit (3)", message_ES: "4 Hit (3)", message: "4 Hit (3)" }],
		"s-3037-2000-1108-0": [{ type: "text", sub_type: "message", message_PT: "Martelo Atras (Stun)", message_ES: "Martillo Atras (Stun)", message: "Back Throw | Front" }],
		"s-3037-2000-1111-0": [
			{ type: "text", sub_type: "message", message_PT: "Atras", message_ES: "Atras", message: "Back" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-3037-2000-1112-0": [
			//{ type: "text", sub_type: "message", message_PT: "Defesa Perfeita", message_ES: "Defesa Perfecta", message: "Perfect Defense" },
			{ type: "text", sub_type: "message", delay: 1240, message_PT: "Defesa Perfeita", message_ES: "Defesa Perfecta", message: "Perfect Defense" },
			//{ type: "text", sub_type: "message", delay: 1535, message_PT: "1", message_ES: "1", message: "1" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-3037-2000-1113-0": [{ type: "text", sub_type: "message", message_PT: "Bait (Esquiva)", message_ES: "Bait (Esquiva)", message: "Throw (Bait)" }],
		"s-3037-2000-1114-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente Slam", message_ES: "Frente Slam", message: "Front Slam" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 260, 10, 320, 100, 3000] }
		],
		"s-3037-2000-1115-0": [{ type: "text", sub_type: "message", delay: 1300, message_PT: "Knockup", message_ES: "Knockup", message: "Knockup" }],
		"s-3037-2000-1116-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR - ENTRAR (Donuts)", message_ES: "SALIR - ENTRAR (Donuts)", message: "Donuts" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 290, 100, 6000] }
		],
		"s-3037-2000-1117-0": [{ type: "text", sub_type: "message", message_PT: "Pular (Bait)", message_ES: "Salto (Bait)", message: "Jump (Bait)" }],
		"s-3037-2000-1118-0": [{ type: "text", sub_type: "message", message_PT: "Pular (Tank)", message_ES: "Salto (Tank)", message: "Jump (Tank)" }],
		"s-3037-2000-1119-0": [
			{ type: "text", sub_type: "message", message_PT: "Deslizar Esquerda", message_ES: "Deslizar Izquierda", message: "Left Swipe" },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 100, 2000, true, null] }
		],
		"s-3037-2000-1120-0": [
			{ type: "text", sub_type: "message", message_PT: "Deslizar Direita", message_ES: "Deslizar Direita", message: "Right Swipe" },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 100, 2000, true, null] }
		],
		"s-3037-2000-1121-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (ESQUERDA)", message_ES: "Olas (IZQUIERDA)", message: "Waves (Left)" },
			{ type: "func", func: skilld_event, args: [1121] }
		],
		"s-3037-2000-1122-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (ESQUERDA) 3nd Rapido", message_ES: "Olas (IZQUIERDA) 3nd Rapido", message: "Waves (Left) 3nd fas" },
			{ type: "func", func: skilld_event, args: [1122] }
		],
		"s-3037-2000-1123-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (ESQUERDA) 2nd Rapido", message_ES: "Olas (IZQUIERDA) 2nd Rapido", message: "Waves (Left) 2nd fast" },
			{ type: "func", func: skilld_event, args: [1123] }
		],
		//
		"s-3037-2000-1125-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente | Direita Arranhao", message_ES: "Frente | Derecha Rasguno", message: "Front | Right Scratch" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3300] },
			{ type: "spawn", func: "vector", args: [553, 60, 290, 175 ,800, 0, 3500] }, //Alterado
			{ type: "spawn", func: "vector", args: [553, 60, 290, -5, 300, 0, 3500] },	//Alterado
			{ type: "spawn", func: "vector", args: [553, 290, 95, -5, 300, 0, 3500] },	//Alterado
			{ type: "spawn", func: "vector", args: [553, 290, 95, 175, 800, 0, 3500] }	//Alterado
	],
		"s-3037-2000-1131-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente | Esquerda Arranhao", message_ES: "Frente | Izquierda Rasguno", message: "Front | Left Scratch" },
			{ type: "spawn", func: "circle", args: [false, 553, 358, 340, 6, 630, 100, 3300] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 186 ,800, 0, 3500] },	 //Alterado
			{ type: "spawn", func: "vector", args: [553, 90, 115, 6, 300, 0, 3500] },	 //Alterado
			{ type: "spawn", func: "vector", args: [553, 270, 250, 6, 300, 0, 3500] },	 //Alterado
			{ type: "spawn", func: "vector", args: [553, 270, 250, 186, 800, 0, 3500] }	 //Alterado
	],
		//
		"s-3037-2000-1135-0": [
			//{ type: "text", sub_type: "message", message_PT: "Defesa Perfeita", message_ES: "Defesa Perfecta", message: "Perfect Defense" },
			{ type: "text", sub_type: "message", delay: 200, message_PT: "Defesa Perfeita", message_ES: "Defesa Perfecta", message: "Perfect Defense" },
			//{ type: "text", sub_type: "message", delay: 1535, message_PT: "1", message_ES: "1", message: "1" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-3037-2000-1137-0": [
			{ type: "text", sub_type: "message", message_PT: "Martelo Atras", message_ES: "Martillo Atras", message: "Hammer back" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-3037-2000-1138-0": [{ type: "text", sub_type: "message", delay: 1300, message_PT: "Knockup (Bait)", message_ES: "Knockup (Bait)", message: "Knockup (Bait)" }],
		"s-3037-2000-1139-0": [{ type: "text", sub_type: "message", message_PT: "Rebater (Esquiva)!", message_ES: "Martillazo Tumbar (Esquiva)!", message: "Dodge!" }],
		"s-3037-2000-1140-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (DIREITA)", message_ES: "Olas (DERECHA)", message: "Waves (Right)" },
			{ type: "func", func: skilld_event, args: [1140] }
		],
		"s-3037-2000-1141-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (DIREITA) 3nd Rapido", message_ES: "Olas (DERECHA) 3nd Rapido", message: "Waves (Right) 3nd fast" },
			{ type: "func", func: skilld_event, args: [1141] }
		],
		"s-3037-2000-1142-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (DIREITA) 2nd Rapido", message_ES: "Olas (DERECHA) 2nd Rapido", message: "Waves (Right) 2nd fast" },
			{ type: "func", func: skilld_event, args: [1142] }
		],
		"s-3037-2000-1307-0": [{ type: "text", sub_type: "message", message_PT: "!", message_ES: "!", message: "!" },
			{ type: "text", sub_type: "message", delay: 20000, message_PT: "ULTIMO AEROLITE", message_ES: "ULTIMO AEROLITE", message: "Last aerolite" }
		],
		"ab-3037-2000-30372303": [{ type: "text", sub_type: "message", message_PT: "Plague/Regress", message_ES: "Plague/Regress", message: "Plague/Regress" }],
		"s-3037-2000-1308-0": [{ type: "text", sub_type: "message", message_PT: "Stun (1)", message_ES: "Stun (1)", message: "Stun (1)" }],
		"s-3037-2000-1309-0": [{ type: "text", sub_type: "message", message_PT: "Stun (2)", message_ES: "Stun (2)", message: "Stun (2)" }],
		"s-3037-2000-1310-0": [{ type: "text", sub_type: "message", message_PT: "Stun (3)", message_ES: "Stun (3)", message: "Stun (3)" }],
		"s-3037-2000-1311-0": [
			{ type: "text", sub_type: "message", message_PT: "IRA", message_ES: "IRA", message: "Wrath" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],
		"s-3037-2000-1312-0": [
			{ type: "text", sub_type: "message", message_PT: "IRA!", message_ES: "IRA", message: "Wrath" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],

		// ---------------------------------------- Enraged ----------------------------------------
		"s-3037-2000-2101-0": [
			{ type: "text", sub_type: "message", message_PT: "4 Hit combo", message_ES: "4 Hit combo", message: "4 Hit combo" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 195, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 3000] }
		],
		"s-3037-2000-2103-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente (Esquiva)", message_ES: "Frente (Esquiva)", message: "Front (Dodge)" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3000] }
		],
		"s-3037-2000-2107-0": [{ type: "text", sub_type: "message", message_PT: "4 Hit (3)", message_ES: "4 Hit (3)", message: "4 Hit (3)" }],
		"s-3037-2000-2108-0": [{ type: "text", sub_type: "message", message_PT: "Martelo Atras (Stun)", message_ES: "Martillo Atras (Stun)", message: "Back Throw | Front" }],
		"s-3037-2000-2111-0": [
			{ type: "text", sub_type: "message", message_PT: "Atras", message_ES: "Atras", message: "Back" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-3037-2000-2112-0": [
			//{ type: "text", sub_type: "message", message_PT: "Defesa Perfeita", message_ES: "Defesa Perfecta", message: "Perfect Defense" },
			{ type: "text", sub_type: "message", delay: 2000, message_PT: "Defesa Perfeita", message_ES: "Defesa Perfecta", message: "Perfect Defense" },
			{ type: "text", sub_type: "message", delay: 2700, message_PT: "x2", message_ES: "x2", message: "x2" },
			//{ type: "text", sub_type: "message", delay: 1535, message_PT: "1", message_ES: "1", message: "1" },
			//{ type: "text", sub_type: "message", delay: 2535, message_PT: "2", message_ES: "2", message: "2" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-3037-2000-2113-0": [{ type: "text", sub_type: "message", message_PT: "Bait (Esquiva)", message_ES: "Bait (Esquiva)", message: "Throw (Bait)" }],
		"s-3037-2000-2114-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente Slam", message_ES: "Frente Slam", message: "Front Slam" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 260, 10, 320, 100, 3000] }
		],
		"s-3037-2000-2115-0": [{ type: "text", sub_type: "message", delay: 234, message_PT: "Knockup", message_ES: "Knockup", message: "Knockup" }],
		"s-3037-2000-2116-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR - ENTRAR (Donuts)", message_ES: "SALIR - ENTRAR (Donuts)", message: "Donuts" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 290, 100, 6000] }
		],
		"s-3037-2000-2117-0": [{ type: "text", sub_type: "message", message_PT: "Pular (Bait)", message_ES: "Salto (Bait)", message: "Jump (Bait)" }],
		"s-3037-2000-2118-0": [{ type: "text", sub_type: "message", message_PT: "Pular (Tank)", message_ES: "Salto (Tank)", message: "Jump (Tank)" }],
		"s-3037-2000-2119-0": [
			{ type: "text", sub_type: "message", message_PT: "Esquerda Deslizar", message_ES: "Izquierda Deslizar", message: "Left Swipe" },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 100, 2000, true, null] }
		],
		"s-3037-2000-2120-0": [
			{ type: "text", sub_type: "message", message_PT: "Direita Deslizar", message_ES: "Derecha Deslizar", message: "Right Swipe" },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 100, 2000, true, null] }
		],
		"s-3037-2000-2121-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (ESQUERDA)", message_ES: "Olas (IZQUIERDA)", message: "Waves (Left)" },
			{ type: "func", func: skilld_event, args: [2121] }
		],
		"s-3037-2000-2122-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (ESQUERDA) 3nd Rapido", message_ES: "Olas (IZQUIERDA) 3nd Rapido", message: "Waves (Left) 3nd fast" },
			{ type: "func", func: skilld_event, args: [2122] }
		],
		"s-3037-2000-2123-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (ESQUERDA) 2nd Rapido", message_ES: "Olas (IZQUIERDA) 3nd Rapido", message: "Waves (Left) 2nd fast" },
			{ type: "func", func: skilld_event, args: [2123] }
		],
		//
		"s-3037-2000-2125-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente | Direita Arranhao", message_ES: "Frente | Derecha Rasguno", message: "Front | Right Scratch" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3300] },
			{ type: "spawn", func: "vector", args: [553, 60, 290, 175 ,800, 0, 3500] }, //Alterado
			{ type: "spawn", func: "vector", args: [553, 60, 290, -5, 300, 0, 3500] },	//Alterado
			{ type: "spawn", func: "vector", args: [553, 290, 95, -5, 300, 0, 3500] },	//Alterado
			{ type: "spawn", func: "vector", args: [553, 290, 95, 175, 800, 0, 3500] }	//Alterado
	],
		"s-3037-2000-2131-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente | Esquerda Arranhao", message_ES: "Frente | Izquierda Rasguno", message: "Front | Left Scratch" },
			{ type: "spawn", func: "circle", args: [false, 553, 358, 340, 6, 630, 100, 3300] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 186 ,800, 0, 3500] },	 //Alterado
			{ type: "spawn", func: "vector", args: [553, 90, 115, 6, 300, 0, 3500] },	 //Alterado
			{ type: "spawn", func: "vector", args: [553, 270, 250, 6, 300, 0, 3500] },	 //Alterado
			{ type: "spawn", func: "vector", args: [553, 270, 250, 186, 800, 0, 3500] }	 //Alterado
	],
		//
		"s-3037-2000-2135-0": [
			//{ type: "text", sub_type: "message", message_PT: "Defesa Perfeita", message_ES: "Defesa Perfecta", message: "Perfect Defense" },
			{ type: "text", sub_type: "message", delay: 200, message_PT: "Defesa Perfeita", message_ES: "Defesa Perfecta", message: "Perfect Defense" },
			{ type: "text", sub_type: "message", delay: 1535, message_PT: "x2" },
			//{ type: "text", sub_type: "message", delay: 1535, message_PT: "1", message_ES: "1", message: "1" },
			//{ type: "text", sub_type: "message", delay: 2535, message_PT: "2", message_ES: "2", message: "2" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-3037-2000-2137-0": [
			{ type: "text", sub_type: "message", message_PT: "Martelo Atras", message_ES: "Martillo Atras", message: "Hammer back" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-3037-2000-2138-0": [{ type: "text", sub_type: "message", delay: 234, message_PT: "Knockup (Bait)", message_ES: "Knockup (Bait)", message: "Knockup (Bait)" }],
		"s-3037-2000-2139-0": [{ type: "text", sub_type: "message", message_PT: "Rebater (Esquiva)!", message_ES: "Martillazo Tumbar (Esquiva)!", message: "Dodge!" }],
		"s-3037-2000-2140-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (DIREITA)", message_ES: "Olas (DERECHA)", message: "Waves (Right)" },
			{ type: "func", func: skilld_event, args: [2140] }
		],
		"s-3037-2000-2141-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (DIREITA) 3nd Rapido", message_ES: "Olas (DERECHA) 3nd Rapido", message: "Waves (Right) 3nd fast" },
			{ type: "func", func: skilld_event, args: [2141] }
		],
		"s-3037-2000-2142-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas (DIREITA) 2nd Rapido", message_ES: "Olas (DERECHA) 2nd Rapido", message: "Waves (Right) 2nd fast" },
			{ type: "func", func: skilld_event, args: [2142] }
		],

		"ab-3037-2000-30372000": [{ type: "func", func: skilld_event, args: [30372000] }],
		"ab-3037-2000-30372001": [{ type: "func", func: skilld_event, args: [30372001] }],
		"ab-3037-2000-30372304": [{ type: "func", func: skilld_event, args: [30372304] }],
		"ab-3037-2000-30374001": [{ type: "func", func: skilld_event, args: [30374001] }],
		"s-3037-2500-1201-0": [{ type: "func", func: print_th }],
		"s-3037-2500-1305-0": [
			{ type: "func", func: skilld_event, args: [305] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 4000] }
		]
	};
};