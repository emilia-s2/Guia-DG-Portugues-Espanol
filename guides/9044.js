// Bahaar's Sanctum
//
// made by michengs / Emilia-s2 / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let print_loading = true;
	let print_lasers = true;

	function waves_event() {
		handlers.event([
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 500, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 400, 0, 6000] },
			{ type: "text", sub_type: "alert", delay: 60000, message: "Waves soon...", message_ES: "Olas Pronto", message_PT: "Ondas em Breve..." }
		]);
	}

	return {
		// PHASE 1
		"nd-444-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Not enraged
		"s-444-1000-1103-0": [
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_ES: "Frente (Esquiva)", message_PT: "Frente (Iframe)" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3000] }
		],
		"s-444-1000-1108-0": [
			{ type: "text", sub_type: "message", message: "Back Throw", message_ES: "Martillo Atrás (Stun)", message_PT: "Martelo Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 250, 12, 300, 100, 3000] }
		],
		"s-444-1000-1111-0": [
			{ type: "text", sub_type: "message", message: "Back", message_ES: "Atrás", message_PT: "Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 1500, 2000] }
		],
		"s-444-1000-1113-0": [{ type: "text", sub_type: "message", message: "Throw (Bait)", message_ES: "Bait (Iframe)", message_PT: "Bait (Iframe)" }],
		"s-444-1000-1114-0": [
			{ type: "text", sub_type: "message", message: "Front Slam", message_ES: "Frente Golpe", message_PT: "Frente Golpe" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 260, 10, 320, 100, 3000] }
		],
		"s-444-1000-1115-0": [{ type: "text", sub_type: "message", delay: 1100, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }], // Knockup
		"s-444-1000-1116-0": [
			{ type: "text", sub_type: "message", message: "Donuts (In)", message_ES: "Donuts (Entrar)", message_PT: "Donuts (Entrar)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 290, 0, 2000] }
		],
		"s-444-1000-1116-1": [
			{ type: "text", sub_type: "message", message: "Out > In", message_ES: "SALIR - ENTRAR", message_PT: "SAIR - ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 290, 0, 4000] }
		],
		"s-444-1000-1117-0": [{ type: "text", sub_type: "message", message: "Jump (Bait)", message_ES: "Salto (Bait)", message_PT: "Pular (Bait)" }],
		"s-444-1000-1118-0": [{ type: "text", sub_type: "message", message: "Jump (Tank)", message_ES: "Salto (Tank)", message_PT: "Pular (Tank)" }],
		"s-444-1000-1118-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 400, 12, 300, 100, 2000] }],
		"s-444-1000-1121-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left)", message_ES: "Olas (IZQUIERDA)", message_PT: "Ondas (ESQUERDA)" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-444-1000-1131-0": [
			{ type: "text", sub_type: "message", message: "Front | Left Scratch", message_ES: "Frente | Izquierda Rasguno", message_PT: "Frente | Esquerda Arranhão" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" },
			{ type: "spawn", func: "circle", args: [false, 553, 358, 340, 6, 630, 100, 3300] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 186, 800, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 186, 800, 0, 3500] }
		],
		"s-444-1000-1137-0": [
			{ type: "text", sub_type: "message", message: "Hammer Back", message_ES: "Martillo Atrás", message_PT: "Martelo Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-444-1000-1138-0": [{ type: "text", sub_type: "message", delay: 900, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }], // Knockup (Bait)
		"s-444-1000-1139-0": [
			{ type: "text", sub_type: "message", delay: 550, message: "Dodge!", message_ES: "Tumbar (Esquiva)", message_PT: "Rebater (Iframe)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 360, 0, 2000] }
		],
		"s-444-1000-1140-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right)", message_ES: "Olas (DERECHA)", message_PT: "Ondas (DIREITA)" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		// Enraged
		"s-444-1000-2103-0": "s-444-1000-1103-0",
		"s-444-1000-2108-0": "s-444-1000-1108-0",
		"s-444-1000-2111-0": "s-444-1000-1111-0",
		"s-444-1000-2113-0": "s-444-1000-1113-0",
		"s-444-1000-2114-0": "s-444-1000-1114-0",
		"s-444-1000-2115-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }], // Knockup
		"s-444-1000-2116-0": "s-444-1000-1116-0",
		"s-444-1000-2116-1": "s-444-1000-1116-1",
		"s-444-1000-2117-0": "s-444-1000-1117-0",
		"s-444-1000-2118-0": "s-444-1000-1118-0",
		"s-444-1000-2118-1": "s-444-1000-1118-1",
		"s-444-1000-2121-0": "s-444-1000-1121-0",
		"s-444-1000-2131-0": "s-444-1000-1131-0",
		"s-444-1000-2137-0": "s-444-1000-1137-0",
		"s-444-1000-2138-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }], // Knockup (Bait)
		"s-444-1000-2139-0": "s-444-1000-1139-0",
		"s-444-1000-2140-0": "s-444-1000-1140-0",

		// PHASE 2
		"nd-444-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-444-2000": [
			{ type: "spawn", func: "marker", args: [false, 0, -700, 100, 60000000, false, ["Throne", "Throne Direction"]] },
			{ type: "spawn", func: "point", args: [513, 0, 800, 100, 60000000] },
			{ type: "func", func: () => print_loading = true },
			{ type: "func", func: () => print_lasers = true }
		],
		// Not enraged
		"s-444-2000-1101-0": [
			{ type: "text", sub_type: "message", message: "4 Hit Combo", message_ES: "4 Hit Combo", message_PT: "4 Hit Combo" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 195, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 3000] }
		],
		"s-444-2000-1103-0": [
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_ES: "Frente (Iframe)", message_PT: "Frente (Iframe)" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3000] }
		],
		"s-444-2000-1107-0": [{ type: "text", sub_type: "message", message: "4 Hit (3)", message_ES: "4 Hit (3)", message_PT: "4 Hit (3)" }],
		"s-444-2000-1108-0": [
			{ type: "text", sub_type: "message", message: "Back Throw", message_ES: "Martillo Atrás (Stun)", message_PT: "Martelo Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 250, 12, 300, 100, 3000] }
		],
		"s-444-2000-1111-0": [
			{ type: "text", sub_type: "message", message: "Back", message_ES: "Atrás", message_PT: "Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 1500, 2000] }
		],
		"s-444-2000-1112-0": [
			{ type: "text", sub_type: "message", delay: 0, message: "Perfect Defense (fast)", message_ES: "Defesa Perfecta (Rápida)", message_PT: "Defesa Perfeita (Rápido)" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Block", message_ES: "Block", message_PT: "Block" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-444-2000-1113-0": [{ type: "text", sub_type: "message", message: "Throw (Bait)", message_ES: "Bait (Iframe)", message_PT: "Bait (Iframe)" }],
		"s-444-2000-1114-0": [
			{ type: "text", sub_type: "message", message: "Front Slam", message_ES: "Frente Slam", message_PT: "Frente Slam" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 260, 10, 320, 100, 3000] }
		],
		"s-444-2000-1115-0": [{ type: "text", sub_type: "message", delay: 1100, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }], // Knockup
		"s-444-2000-1116-0": [
			{ type: "text", sub_type: "message", message: "Donuts (In)", message_ES: "Donuts (Entrar)", message_PT: "Donuts (Entrar)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 290, 100, 2000] }
		],
		"s-444-2000-1116-1": [
			{ type: "text", sub_type: "message", message: "Out > In", message_ES: "SALIR - ENTRA", message_PT: "SAIR - ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 290, 100, 4000] }
		],
		"s-444-2000-1117-0": [{ type: "text", sub_type: "message", message: "Jump (Bait)", message_ES: "Salto (Bait)", message_PT: "Pular (Bait)" }],
		"s-444-2000-1118-0": [{ type: "text", sub_type: "message", message: "Jump (Tank)", message_ES: "Salto (Tank)", message_PT: "Pular (Tank)" }],
		"s-444-2000-1118-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 400, 12, 300, 100, 2000] }],
		"s-444-2000-1119-0": [
			{ type: "text", sub_type: "message", message: "Left Swipe", message_ES: "Deslizar Izquierda", message_PT: "Deslizar Esquerda" },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 100, 2000, true, null] }
		],
		"s-444-2000-1120-0": [
			{ type: "text", sub_type: "message", message: "Right Swipe", message_ES: "Deslizar Derecha", message_PT: "Deslizar Direita" },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 100, 2000, true, null] }
		],
		"s-444-2000-1121-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left)", message_ES: "Olas (IZQUIERDA)", message_PT: "Ondas (ESQUERDA)" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-444-2000-1122-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left) 3nd fast", message_ES: "Olas (IZQUIERDA) 3nd Rapido", message_PT: "Ondas (ESQUERDA) 3nd Rapido" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-444-2000-1123-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left) 2nd fast", message_ES: "Olas (IZQUIERDA) 2nd Rapido", message_PT: "Ondas (ESQUERDA) 2nd Rapido" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2500, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2500, false, ["safe", "safe"]] }
		],
		"s-444-2000-1125-0": [
			{ type: "text", sub_type: "message", message: "Front | Right Scratch", message_ES: "Frente | Derecha Rasguno", message_PT: "Frente | Direita Arranhão" },
			{ type: "text", sub_type: "message", delay: 1750, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3300] },
			{ type: "spawn", func: "vector", args: [553, 60, 290, 175, 800, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 60, 290, -5, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 290, 95, -5, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 290, 95, 175, 800, 0, 3500] }
		],
		"s-444-2000-1126-0": [],
		"s-444-2000-1131-0": [
			{ type: "text", sub_type: "message", message: "Front | Left Scratch", message_ES: "Frente | Izquierda Rasguno", message_PT: "Frente | Esquerda Arranhão" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" },
			{ type: "spawn", func: "circle", args: [false, 553, 358, 340, 6, 630, 100, 3300] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 186, 800, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 186, 800, 0, 3500] }
		],
		"s-444-2000-1135-0": [
			{ type: "text", sub_type: "message", delay: 0, message: "Perfect Defense", message_ES: "Defesa Perfecta", message_PT: "Defesa Perfeita" },
			{ type: "text", sub_type: "message", delay: 800, message: "Block", message_ES: "Block", message_PT: "Block" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-444-2000-1137-0": [
			{ type: "text", sub_type: "message", message: "Hammer back", message_ES: "Martillo Atrás", message_PT: "Martelo Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-444-2000-1138-0": [{ type: "text", sub_type: "message", delay: 900, message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }], // Knockup (Bait)
		"s-444-2000-1139-0": [{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "Iframe", message_PT: "Iframe", delay: 200 }],
		"s-444-2000-1140-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right)", message_ES: "Olas (DERECHA)", message_PT: "Ondas (DIREITA)" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-444-2000-1141-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right) 3nd fast", message_ES: "Olas (DERECHA) 3nd Rapido", message_PT: "Ondas (DIREITA) 3nd Rapido" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-444-2000-1142-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right) 2nd fast", message_ES: "Olas (DERECHA) 2nd Rapido", message_PT: "Ondas (DIREITA) 2nd Rapido" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2500, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2500, false, ["safe", "safe"]] }
		],
		"s-444-2000-1307-0": [
			{ type: "text", sub_type: "message", message: "!", message_ES: "!", message_PT: "!" },
			{ type: "text", sub_type: "message", delay: 20000, message: "Last aerolite", message_ES: "ULTIMO AEROLITE", message_PT: "ULTIMO AEROLITE" }
		],
		"s-444-2000-1308-0": [{ type: "text", sub_type: "message", message: "Stun (1)", message_ES: "Stun (1)", message_PT: "Stun (1)" }],
		"s-444-2000-1309-0": [{ type: "text", sub_type: "message", message: "Stun (2)", message_ES: "Stun (2)", message_PT: "Stun (2)" }],
		"s-444-2000-1310-0": [{ type: "text", sub_type: "message", message: "Stun (3)", message_ES: "Stun (3)", message_PT: "Stun (3)" }],
		"s-444-2000-1311-0": [
			{ type: "text", sub_type: "message", message: "Wrath (Kaia)", message_ES: "IRA (Kaia)", message_PT: "IRA (Kaia)" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],
		"s-444-2000-1312-0": [
			{ type: "text", sub_type: "message", message: "Wrath (Kaia)", message_ES: "IRA (Kaia)", message_PT: "IRA (Kaia)" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],
		// Enraged
		"s-444-2000-2101-0": "s-444-2000-1101-0",
		"s-444-2000-2103-0": "s-444-2000-1103-0",
		"s-444-2000-2107-0": "s-444-2000-1107-0",
		"s-444-2000-2108-0": "s-444-2000-1108-0",
		"s-444-2000-2111-0": "s-444-2000-1111-0",
		"s-444-2000-2112-0": [
			{ type: "text", sub_type: "message", delay: 1000, message: "Perfect Defense x2 (slow)", message_ES: "Defesa Perfecta x2 (Lenta)", message_PT: "Defesa Perfeita  x2 (Lenta)" },
			{ type: "text", sub_type: "message", delay: 2400, message: "Block", message_ES: "Block", message_PT: "Block" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 4000] }
		],
		"s-444-2000-2113-0": "s-444-2000-1113-0",
		"s-444-2000-2114-0": "s-444-2000-1114-0",
		"s-444-2000-2115-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 100 }], // Knockup
		"s-444-2000-2116-0": "s-444-2000-1116-0",
		"s-444-2000-2116-1": "s-444-2000-1116-1",
		"s-444-2000-2117-0": "s-444-2000-1117-0",
		"s-444-2000-2118-0": "s-444-2000-1118-0",
		"s-444-2000-2118-1": "s-444-2000-1118-1",
		"s-444-2000-2119-0": "s-444-2000-1119-0",
		"s-444-2000-2120-0": "s-444-2000-1120-0",
		"s-444-2000-2121-0": "s-444-2000-1121-0",
		"s-444-2000-2122-0": "s-444-2000-1122-0",
		"s-444-2000-2123-0": "s-444-2000-1123-0",
		"s-444-2000-2125-0": "s-444-2000-1125-0",
		"s-444-2000-2131-0": "s-444-2000-1131-0",
		"s-444-2000-2135-0": [
			{ type: "text", sub_type: "message", delay: 0, message: "Perfect Defense x2", message_ES: "Defesa Perfecta x2", message_PT: "Defesa Perfeita x2" },
			{ type: "text", sub_type: "message", delay: 800, message: "Block", message_ES: "Block", message_PT: "Block" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 4000] }
		],
		"s-444-2000-2137-0": "s-444-2000-1137-0",
		"s-444-2000-2138-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 0 }], // Knockup (Bait)
		"s-444-2000-2139-0": "s-444-2000-1139-0",
		"s-444-2000-2140-0": "s-444-2000-1140-0",
		"s-444-2000-2141-0": "s-444-2000-1141-0",
		"s-444-2000-2142-0": "s-444-2000-1142-0",
		//
		"s-444-2500-1201-0": [
			{ type: "event", check_func: () => print_loading, args: [
				{ type: "text", sub_type: "alert", message: "Loading lasers...", message_ES: "Cargando Laser...", message_PT: "Carregando Laser..." },
				{ type: "func", func: () => print_loading = false }
			] }
		],
		"s-444-2500-1305-0": [
			{ type: "event", check_func: () => print_lasers, args: [
				{ type: "text", sub_type: "message", message: "Laser", message_ES: "Laser", message_PT: "Laser" },
				{ type: "func", func: () => print_lasers = false },
				{ type: "func", func: () => print_lasers = true, delay: 4000 }
			] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 4000] }
		],
		"ab-444-2000-90442303": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "Plague/Regress", message_PT: "Plague/Regress" }],
		"ab-444-2000-90442304": [
			{ type: "text", sub_type: "notification", message: "Stun", message_ES: "Stun", message_PT: "Stun" },
			{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun", speech: false }
		]
	};
};