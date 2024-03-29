// Grotto of Lost Souls (Normal)
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let color = 0;
	let debuff = 0;
	let print_wave = true;
	
	const is_mt = dispatch._mod.connection.metadata.serverList[dispatch._mod.serverId].name.includes("MT");

	return {
		// 1 BOSS
		"nd-782-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-782-1000-106-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Heavy", message_ES: "Golpe Pesado", message_PT: "Golpe Pesado" }],
		"s-782-1000-107-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message: "Pushback", message_ES: "Empujar Atrás", message_PT: "Repelir Atrás" },
			{ type: "text", class_position: "heal", sub_type: "message", message: "Pushback (Kaia)", message_ES: "Empujar Atrás (Kaia)", message_PT: "Repelir Atrás (Kaia)" },
			{ type: "spawn", func: "vector", args: [553, 90, 30, 140, 600, 1000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 30, -140, 600, 1000, 2000] }
		],
		"s-782-1000-108-0": [
			{ type: "text", sub_type: "message", message: "Bait Front (Flying)", message_ES: "Espinas al Suelo (Bait)", message_PT: "Espinhos no Chao (Bait)" },
		],
		"s-782-1000-108-1": [
			{ type: "spawn", func: "vector", args: [553, 90, 140, 5, 620, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 270, 140, 355, 620, 0, 1500] }
		],
		"s-782-1000-109-0": [{ type: "text", sub_type: "message", message: "Rocks (Small)", message_ES: "Rocks (pequenas)", message_PT: "Rochas (pequenas)" }],
		"s-782-1000-110-0": [{ type: "text", sub_type: "message", message: "Rocks (Large)", message_ES: "Rocks (Grande)", message_PT: "Rochas (Grandes)" }],
		"s-782-1000-111-0": [
			{ type: "text", sub_type: "message", message: "Stun (Dodge)", message_ES: "Stun (Esquiva)", message_PT: "Stun (Esquiva)", delay: 1500 },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 50, null, 350, 1500, 2000] }
		],
		"s-782-1000-113-0": [{ type: "text", sub_type: "message", message: "Thorns (Bleed)", message_ES: "Espinas (Sangrar)", message_PT: "Espinhos (Sangrar)" }],
		"s-782-1000-116-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE", message_PT: "AoE" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Esquiva", message_PT: "Esquiva", delay: 2000 }
		],
		"s-782-1000-301-0": [
			{ type: "text", sub_type: "message", message: "Flower Stuns", message_ES: "Flor Canibal (Stun)", message_PT: "Flor Canibal (Stun)" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Esquiva", message_PT: "Esquiva", delay: 2000 }
		],
		"s-782-1000-307-0": [{ type: "text", sub_type: "message", message: "Cage (Don't move)", message_ES: "Jaula (no Move)", message_PT: "Jaula (Não se Mova)" }],
		// Flowers mech
		"ab-782-1003-78200161": [
			{ type: "text", sub_type: "message", message: "Green", message_ES: "Verde", message_PT: "Verde" },
			{ type: "func", func: () => color = 1 }
		],
		"ab-782-1003-78200162": [
			{ type: "text", sub_type: "message", message: "Violet", message_ES: "Morado", message_PT: "Roxo" },
			{ type: "func", func: () => color = 2 }
		],
		"ae-0-0-78200148": [{ type: "func", func: () => debuff = 1 }], // green
		"ae-0-0-78200149": [{ type: "func", func: () => debuff = 2 }], // violet
		"s-782-1000-201-0": [{ type: "text", sub_type: "alert", message: "Change Debuff", message_ES: "Cambiar Debuff", message_PT: "Mudar Debuff", check_func: () => debuff !== 0 && color !== debuff, delay: 5000 }],
		"s-782-1000-309-0": [
			{ type: "text", sub_type: "message", message: "One Flower", message_ES: "1 FLOR", message_PT: "1 FLOR" },
			{ type: "text", sub_type: "alert", message: "Dodge the flower!", message_ES: "Esquiva la Flor", message_PT: "Esquiva da Flor!", check_func: () => color === debuff, delay: 1500 }
		],
		"s-782-1000-310-0": [
			{ type: "text", sub_type: "message", message: "Two Flowers", message_ES: "2 FLORES", message_PT: "2FLORES" },
			{ type: "text", sub_type: "alert", message: "Dodge ONE flower!", message_ES: "Esquiva 1 Flor!", message_PT: "Esquiva 1 Flor!", check_func: () => color !== debuff, delay: 1500 }
		],
		"s-782-1000-312-0": [
			{ type: "text", sub_type: "message", message: "Break Golden Flower", message_ES: " Romper la Flor Dorada", message_PT: " Quebrar a Flor Dourada" },
			{ type: "text", sub_type: "alert", message: "Dodge the Flower!!", message_ES: "Esquiva la Flor", message_PT: "Esquiva da Flor", check_func: () => color === debuff, delay: 1500 }
		],
		"s-782-1000-308-0": [
			{ type: "func", func: () => color = 0 },
			{ type: "func", func: () => debuff = 0 }
		],

		// 2 BOSS
		"nd-782-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-782-2000-105-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "GIRO Atrás", message_PT: "GIRAR Atrás" }],
		"s-782-2000-108-0": [{ type: "text", sub_type: "message", message: "Shot Forward", message_ES: "Disparo Delantero", message_PT: "Disparo na Frente" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 500  }
		],
		"s-782-2000-109-0": [{ type: "text", sub_type: "message", message: "Wave Forward", message_ES: "Vómito Frente", message_PT: "Vómito Frente" }],
		"s-782-2000-112-0": [{ type: "text", sub_type: "message", message: "Kick Forward", message_ES: "Patada Frente", message_PT: "Patada Frente" }],
		"s-782-2000-113-0": [
			{ type: "text", sub_type: "message", message: "Stun (AoE)", message_ES: "Stun (AoE)", message_PT: "Stun (AoE)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 310, 0, 3000] }
		],
		"s-782-2000-114-0": [
			{ type: "text", sub_type: "message", message: "Get In", message_ES: "ENTRAR", message_PT: "ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 600, 0, 5000] }
		],
		"s-782-2000-116-0": [
			{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Frente | Atrás", message_PT: "Frente | Atrás" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 180, 0, 90, 500, 0, 5000] }
		],
		"s-782-2000-117-0": "s-782-2000-116-0",
		"s-782-2000-301-0": [
			{ type: "text", sub_type: "message", message: "Get Out | Dodge", message_ES: "SALIR + ESQUIVAR", message_PT: "SAIR + ESQUIVAR" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 3700  },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 650, 0, 3000] }
		],
		"s-782-2000-302-0": [
			{ type: "text", sub_type: "message", message: "Get In | Dodge", message_ES: "ENTRAR + ESQUIVAR", message_PT: "ENTRAR + ESQUIVAR" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 3700  },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 650, 0, 3000] }
		],
		"s-782-2000-307-0": [{ type: "text", sub_type: "message", message: "Target", message_ES: "Objetivo", message_PT: "Alvo" }],
		"s-782-2000-307-2": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }],

		// 3 BOSS
		"nd-782-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-782-3000-99": [{ type: "func", func: () => print_wave = true }],
		"h-782-3000-80": [{ type: "text", sub_type: "message", message: "80%", message_ES: "80%", message_PT: "80%", check_func: () => !is_mt }],
		"h-782-3000-70": [{ type: "text", sub_type: "message", message: "70%", message_ES: "70%", message_PT: "70%", check_func: () => is_mt }],
		"s-782-3000-109-0": [{ type: "text", sub_type: "message", message: "Front Throw (Target)", message_ES: "Ataque Frontal (Objetivo)", message_PT: "Ataque Frontal (Alvo)" }],
		"s-782-3000-134-0": [{ type: "text", sub_type: "message", message: "Front Throw (Target)", message_ES: "Ataque Frontal (Objetivo)", message_PT: "Ataque Frontal (Alvo)" }],
		"s-782-3000-118-0": [{ type: "text", sub_type: "message", message: "Front Triple", message_ES: "Ataque Frontal Triplo", message_PT: "Ataque Frontal Triplo" }],
		"s-782-3000-143-0": [
			{ type: "text", sub_type: "message", message: "Left Rear", message_ES: "IZQUIERDA Atrás ataque", message_PT: "ESQUERDA Atrás ataque" },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 330, null, 280, 0, 3000] }
		],
		"s-782-3000-145-0": "s-782-3000-143-0",
		"s-782-3000-144-0": [
			{ type: "text", sub_type: "message", message: "Right Rear", message_ES: "DERECHA Atrás ataque", message_PT: "DIREITA Atrás ataque" },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 330, null, 280, 0, 3000] }
		],
		"s-782-3000-147-0": "s-782-3000-144-0",
		"s-782-3000-146-0": [
			{ type: "text", sub_type: "message", message: "Pulses Left", message_ES: "IZQUIERDA Atrás (Pulsos)", message_PT: "ESQUERDA Atrás (Pulsos)" },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 215, 370, is_mt ? 3200 : 5300, 3000, true, null] }, // 1
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 15, 160, 2000, 4500] }
			//{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 12, 320, 2000, 6000] },
			//{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 10, 480, 2000, 6000] },
			//{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 8, 640, 2000, 6000] },
			//{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 6, 800, 2000, 6000] }
		],
		"s-782-3000-154-0": [
			{ type: "text", sub_type: "message", message: "Pulses Left", message_ES: "IZQUIERDA Atrás (Pulsos)", message_PT: "ESQUERDA Atrás (Pulsos)" },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 215, 370, is_mt ? 3200 : 4200, 4000, true, null] }, // 2
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 15, 160, 2000, 4500] }
			//{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 12, 320, 2000, 6000] },
			//{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 10, 480, 2000, 6000] },
			//{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 8, 640, 2000, 6000] },
			//{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 6, 800, 2000, 6000] }
		],
		"s-782-3000-148-0": [
			{ type: "text", sub_type: "message", message: "Pulses Right", message_ES: "DERECHA Atrás (Pulsos)", message_PT: "DIREITA Atrás (Pulsos)" },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 155, 388, is_mt ? 3200 : 5300, 3000, true, null] }, // 1
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 15, 160, 2000, 4500] }
			//{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 12, 320, 2000, 6000] },
			//{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 10, 480, 2000, 6000] },
			//{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 8, 640, 2000, 6000] },
			//{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 6, 800, 2000, 6000] }
		],
		"s-782-3000-155-0": [
			{ type: "text", sub_type: "message", message: "Pulses Right", message_ES: "DERECHA Atrás (Pulsos)", message_PT: "DIREITA Atrás (Pulsos)" },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 155, 388, is_mt ? 3200 : 4200, 4000, true, null] }, // 2
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 15, 160, 2000, 4500] }
			//{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 12, 320, 2000, 6000] },
			//{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 10, 480, 2000, 6000] },
			//{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 8, 640, 2000, 6000] },
			//{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 6, 800, 2000, 6000] }
		],
		"s-782-3000-161-0": [
			{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Frente | Atrás ataque", message_PT: "Frente | Atrás ataque" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 310, null, 290, 3000, 2500] }
		],
		"s-782-3000-162-0": [
			{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Frente | Atrás ataque", message_PT: "Frente | Atrás ataque" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 310, null, 290, 3000, 2500] }
		],
		"s-782-3000-213-0": [{ type: "text", sub_type: "message", message: "Tail", message_ES: "Cola", message_PT: "Cauda" }],
		"s-782-3000-215-0": [{ type: "text", sub_type: "message", message: "Tail (Combo)", message_ES: "Cola (Combo)", message_PT: "Cauda (Combo)" }],
		"s-782-3000-139-0": [
			{ type: "text", sub_type: "message", message: "Wave + Wing (Left Safe)", message_ES: "Ola (IZQUIERDA Segura)", message_PT: "Onda (ESQUERDA Seguro)", check_func: () => print_wave },
			{ type: "despawn_all", tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 100, 4000, true, null], tag: "wave" },
			{ type: "func", func: () => print_wave = false },
			{ type: "func", func: () => print_wave = true, delay: 8000 }
		],
		"s-782-3000-139-1": "s-782-3000-139-0",
		"s-782-3000-139-2": "s-782-3000-139-0",
		"s-782-3000-150-0": "s-782-3000-139-0", //
		"s-782-3000-150-1": "s-782-3000-139-0",
		"s-782-3000-150-2": "s-782-3000-139-0",
		"s-782-3000-141-0": [
			{ type: "text", sub_type: "message", message: "Wave + Wing (Right Safe)", message_ES: "Ola (DERECHA Segura)", message_PT: "Onda (DIREITA Seguro)", check_func: () => print_wave },
			{ type: "despawn_all", tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 100, 4000, true, null], tag: "wave" },
			{ type: "func", func: () => print_wave = false },
			{ type: "func", func: () => print_wave = true, delay: 8000 }
		],
		"s-782-3000-141-1": "s-782-3000-141-0",
		"s-782-3000-141-2": "s-782-3000-141-0",
		"s-782-3000-152-0": "s-782-3000-141-0", //
		"s-782-3000-152-1": "s-782-3000-141-0",
		"s-782-3000-152-2": "s-782-3000-141-0",
		"s-782-3000-300-0": [
			{ type: "text", sub_type: "message", message: "3" },
			{ type: "text", sub_type: "message", delay:  400, message: "2" },
			{ type: "text", sub_type: "message", delay:  800, message: "1" },
			{ type: "text", sub_type: "message", message: "Dodge! (Awakening 1)", message_ES: "ESPIERTAR 1 (Iframe)", message_PT: "DESPERTAR 1 (Iframe)", delay: 1200 }	
		],
		"s-782-3000-360-0": [{ type: "text", sub_type: "message", message: "Dodge! (Explosion)", message_ES: "EXPLOSIÓN (Iframe)", message_PT: "EXPLOSÃO (Iframe)" }],
		"s-782-3000-351-0": [
			{ type: "text", sub_type: "message", message: "Stones", message_ES: "Piedras", message_PT: "Pedras" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 2000 },
			{ type: "text", sub_type: "message", message: "Line up to the plate", message_ES: "Alinear hasta la Placa", message_PT: "Alinhar até a Placa", delay: 4000 },
			{ type: "text", sub_type: "message", message: "Kaia!", message_ES: "Kaia!", message_PT: "Kaia!", delay: 9500 }
		]
	};
};