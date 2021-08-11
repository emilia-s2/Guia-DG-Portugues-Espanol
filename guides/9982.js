// Grotto of Lost Souls (Hard)
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let color = 0;
	let debuff = 0;
	let print_wave = true;
	let awakening_one = false;
	let awakening_two = false;
	let stack_level = 0;

	function stacks_level_event() { // 118, 143, 145, 146, 144, 147, 148, 154, 155, 161, 162, 213, 215  -> 98200399
		if (!awakening_one) return;

		stack_level++;

		if ((!awakening_two && stack_level > 0) || (awakening_two && stack_level > 2)) {
			handlers.text({
				sub_type: "notification",
				message: `Stack ${stack_level}`,
				message_PT: `Стак ${stack_level}`,
				message_ES: `Стак ${stack_level}`,
				speech: false
			});
		}

		if (stack_level === 4) {
			handlers.text({
				sub_type: "alert",
				message: "Explosion soon",
				message_PT: "Explosão em Breve",
				message_ES: "Explosión Pronto"
			});
		}
	}

	return {
		// 1 BOSS
		"nd-982-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-982-1000-106-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Heavy", message_ES: "Golpe pesado", message_PT: "Golpe pesado" }],
		"s-982-1000-107-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message: "Pushback", message_ES: "Empujar Atrás", message_PT: "Repelir Atrás" },
			{ type: "text", class_position: "heal", sub_type: "message", message: "Pushback (Kaia)", message_ES: "Empujar Atrás (Kaia)", message_PT: "Repelir Atras (Kaia)" },
			{ type: "spawn", func: "vector", args: [553, 90, 30, 140, 600, 1000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 30, -140, 600, 1000, 2000] }
		],
		"s-982-1000-108-0": [
			{ type: "text", sub_type: "message", message: "Bait Front (Flying)", message_ES: "Espinas al Suelo (Bait)", message_PT: "Espinhos no Chao (Bait)" },
			{ type: "spawn", func: "vector", args: [553, 90, 140, 5, 620, 500, 1500] },
			{ type: "spawn", func: "vector", args: [553, 270, 140, 355, 620, 500, 1500] }
		],
		"s-982-1000-109-0": [{ type: "text", sub_type: "message", message: "Rocks (Small)", message_ES: "Rocks (pequenas)", message_PT: "Rochas (pequenas)" }],
		"s-982-1000-110-0": [{ type: "text", sub_type: "message", message: "Rocks (Large)", message_ES: "Rocks (Grande)", message_PT: "Rochas (Grandes)" }],
		"s-982-1000-111-0": [{ type: "text", sub_type: "message", message: "Stun (Dodge)", message_ES: "Flor Canibal (Stun)", message_PT: "Flor Canibal (Stun)", delay: 1500 }],
		"s-982-1000-113-0": [{ type: "text", sub_type: "message", message: "Thorns (Bleed)", message_ES: "Espinas (Sangrar)", message_PT: "Espinhos (Sangrar)" }],
		"s-982-1000-116-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_ES: "Ataque Full", message_PT: "Ataque Full" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Esquiva", message_PT: "Esquiva", delay: 2000 }
		],
		"s-982-1000-301-0": [{ type: "text", sub_type: "message", message: "Flower Stuns (Dodge)", message_ES: "Flor Canibal (Stun)", message_PT: "Flor Canibal (Stun)" }],
		"s-982-1000-307-0": [{ type: "text", sub_type: "message", message: "Cage (Don't move)", message_ES: "Jaula (no Move)", message_PT: "Jaula (Não se Mova)" }],
		// Flowers mech
		"ab-982-1003-98200161": [
			{ type: "text", sub_type: "message", message: "Green", message_ES: "Verde", message_PT: "Verde" },
			{ type: "func", func: () => color = 1 }
		],
		"ab-982-1003-98200162": [
			{ type: "text", sub_type: "message", message: "Violet", message_ES: "Morado", message_PT: "Roxo" },
			{ type: "func", func: () => color = 2 }
		],
		"ae-0-0-98200148": [{ type: "func", func: () => debuff = 1 }], // green
		"ae-0-0-98200149": [{ type: "func", func: () => debuff = 2 }], // violet
		"s-982-1000-201-0": [{ type: "text", sub_type: "alert", message: "Change Debuff", message_ES: "Cambiar Debuff", message_PT: "Mudar Debuff", check_func: () => debuff !== 0 && color !== debuff, delay: 5000 }],
		"s-982-1000-309-0": [
			{ type: "text", sub_type: "message", message: "One Flower", message_ES: "1 FLOR", message_PT: "1 FLOR" },
			{ type: "text", sub_type: "alert", message: "Dodge the flower!", message_ES: "Esquiva la Flor", message_PT: "Esquiva da Flor!", check_func: () => color === debuff, delay: 1500 }
		],
		"s-982-1000-310-0": [
			{ type: "text", sub_type: "message", message: "Two Flowers", message_ES: "2 FLORES", message_PT: "2FLORES" },
			{ type: "text", sub_type: "alert", message: "Dodge ONE flower!", message_ES: "¡Esquiva 1 Flor!", message_PT: "Esquiva 1 Flor!", check_func: () => color !== debuff, delay: 1500 }
		],
		"s-982-1000-312-0": [
			{ type: "text", sub_type: "message", message: "Flower Golden", message_ES: "Flor Dorada", message_PT: "Flor Dourada" },
			{ type: "text", sub_type: "alert", message: "Break Flower!", message_ES: "Golpea la Flor", message_PT: "Bata na Flor", check_func: () => color !== debuff, delay: 1500 },
			{ type: "text", sub_type: "alert", message: "Dodge Flower!", message_ES: "Esquiva", message_PT: "Esquiva", check_func: () => color === debuff, delay: 4000 }
		],
		"s-982-1000-308-0": [
			{ type: "func", func: () => color = 0 },
			{ type: "func", func: () => debuff = 0 }
		],

		// 2 BOSS
		"nd-982-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-982-2000-105-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "GIRO Atrás", message_PT: "GIRAR Atrás" }],
		"s-982-2000-108-0": [{ type: "text", sub_type: "message", message: "Shot Forward", message_ES: "Disparo Delantero", message_PT: "Disparo na Frente" }],
		"s-982-2000-109-0": [{ type: "text", sub_type: "message", message: "Wave Forward", message_ES: "Ola Delantera", message_PT: "Onda Frente" }],
		"s-982-2000-112-0": [{ type: "text", sub_type: "message", message: "Kick Forward", message_ES: "Patada Frente", message_PT: "Patada Frente" }],
		"s-982-2000-113-0": [
			{ type: "text", sub_type: "message", message: "Stun (AoE)", message_ES: "Stun (AoE)", message_PT: "Stun (AoE)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 320, 0, 3000] }
		],
		"s-982-2000-114-0": [
			{ type: "text", sub_type: "message", message: "Get In", message_ES: "ENTRAR", message_PT: "ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 600, 0, 5000] }
		],
		"s-982-2000-116-0": [
			{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Frente | Atrás", message_PT: "Frente | Atrás" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 180, 0, 90, 500, 0, 5000] }
		],
		"s-982-2000-301-0": [
			{ type: "text", sub_type: "message", message: "Get Out | Dodge", message_ES: "SALIR + ESQUIVAR", message_PT: "SAIR + ESQUIVAR" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Esquiva", message_PT: "Esquiva", delay: 3700  },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 650, 0, 3000] }
		],
		"s-982-2000-302-0": [
			{ type: "text", sub_type: "message", message: "Get In | Dodge", message_ES: "ENTRAR + ESQUIVAR", message_PT: "ENTRAR + ESQUIVAR" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Esquiva", message_PT: "Esquiva", delay: 3700  },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 650, 0, 3000] }
		],
		"s-982-2000-307-0": [{ type: "text", sub_type: "message", message: "Target", message_ES: "Objetivo", message_PT: "Alvo" }],
		"s-982-2000-307-2": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Esquiva", message_PT: "Esquiva" }],

		// 3 BOSS
		"nd-982-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-982-3000-99": [
			{ type: "func", func: () => print_wave = true },
			{ type: "func", func: () => awakening_one = false },
			{ type: "func", func: () => awakening_two = false },
			{ type: "func", func: () => stack_level = 0 }
		],
		"h-982-3000-80": [{ type: "text", sub_type: "message", message: "80%", message_ES: "80%", message_PT: "80%" }],
		"h-982-3000-30": [{ type: "text", sub_type: "message", message: "30%", message_ES: "30%%", message_PT: "30%" }],
		"s-982-3000-109-0": [{ type: "text", sub_type: "message", message: "Front Throw (Target)", message_ES: "Ataque Frontal (Objetivo)", message_PT: "Ataque Frontal (Alvo)" }],
		"s-982-3000-134-0": [{ type: "text", sub_type: "message", message: "Front Throw (Target)", message_ES: "Ataque Frontal (Objetivo)", message_PT: "Ataque Frontal (Alvo)" }],
		"s-982-3000-118-0": [{ type: "text", sub_type: "message", message: "Front Triple", message_ES: "Ataque Frontal Triplo", message_PT: "Ataque Frontal Triplo" }],
		"s-982-3000-143-0": [
			{ type: "text", sub_type: "message", message: "Left Rear", message_ES: "IZQUIERDA Atrás ataque", message_PT: "ESQUERDA Atrás ataque" },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 330, null, 280, 0, 3000] }
		],
		"s-982-3000-145-0": "s-982-3000-143-0",
		"s-982-3000-144-0": [
			{ type: "text", sub_type: "message", message: "Right Rear", message_ES: "DIREITA Atrás ataque", message_PT: "DIREITA Atrás ataque" },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 330, null, 280, 0, 3000] }
		],
		"s-982-3000-147-0": "s-982-3000-144-0",
		"s-982-3000-146-0": [
			{ type: "text", sub_type: "message", message: "Pulses Left", message_ES: "IZQUIERDA Atrás (Pulsos)", message_PT: "ESQUERDA Atrás (Pulsos)" },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 215, 370, 5300, 3000, true, null] }, // 1
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 6, 800, 2000, 6000] }
		],
		"s-982-3000-154-0": [
			{ type: "text", sub_type: "message", message: "Pulses Left", message_ES: "IZQUIERDA Atrás (Pulsos)", message_PT: "ESQUERDA Atrás (Pulsos)" },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 215, 370, 4200, 4000, true, null] }, // 2
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 6, 800, 2000, 6000] }
		],
		"s-982-3000-148-0": [
			{ type: "text", sub_type: "message", message: "Pulses Right", message_ES: "DERECHA Atrás (Pulsos)", message_PT: "DIREITA Atrás (Pulsos)" },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 155, 388, 5300, 3000, true, null] }, // 1
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 6, 800, 2000, 6000] }
		],
		"s-982-3000-155-0": [
			{ type: "text", sub_type: "message", message: "Pulses Right", message_ES: "DERECHA Atrás (Pulsos)", message_PT: "DIREITA Atrás (Pulsos)" },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 155, 388, 4200, 4000, true, null] }, // 2
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 6, 800, 2000, 6000] }
		],
		"s-982-3000-161-0": [
			{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Frente | Atrás ataque", message_PT: "Frente | Atrás ataque" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 310, null, 290, 3000, 2500] }
		],
		"s-982-3000-162-0": [
			{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Frente | Atrás ataque", message_PT: "Frente | Atrás ataque" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 310, null, 290, 3000, 2500] }
		],
		"s-982-3000-213-0": [{ type: "text", sub_type: "message", message: "Tail", message_ES: "Cola", message_PT: "Cauda" }],
		"s-982-3000-215-0": [
			{ type: "text", sub_type: "message", message: "Tail", message_ES: "Cola", message_PT: "Cauda" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 280, 0, 2000] }
		],
		"s-982-3000-139-0": [
			{ type: "text", sub_type: "message", message: "Wave + Wing (Left Safe)", message_ES: "Ola (IZQUIERDA Segura)", message_PT: "Onda (ESQUERDA Seguro)", check_func: () => print_wave },
			{ type: "despawn_all", tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 100, 4000, true, null], tag: "wave" },
			{ type: "func", func: () => print_wave = false },
			{ type: "func", func: () => print_wave = true, delay: 8000 }
		],
		"s-982-3000-139-1": "s-982-3000-139-0",
		"s-982-3000-139-2": "s-982-3000-139-0",
		"s-982-3000-150-0": "s-982-3000-139-0", //
		"s-982-3000-150-1": "s-982-3000-139-0",
		"s-982-3000-150-2": "s-982-3000-139-0",
		"s-982-3000-141-0": [
			{ type: "text", sub_type: "message", message: "Wave + Wing (Right Safe)", message_ES: "Ola (DERECHA Segura)", message_PT: "Onda (DIREITA Seguro)", check_func: () => print_wave },
			{ type: "despawn_all", tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 100, 4000, true, null], tag: "wave" },
			{ type: "func", func: () => print_wave = false },
			{ type: "func", func: () => print_wave = true, delay: 8000 }
		],
		"s-982-3000-141-1": "s-982-3000-141-0",
		"s-982-3000-141-2": "s-982-3000-141-0",
		"s-982-3000-152-0": "s-982-3000-141-0", //
		"s-982-3000-152-1": "s-982-3000-141-0",
		"s-982-3000-152-2": "s-982-3000-141-0",
		"s-982-3000-300-0": [
			{ type: "text", sub_type: "message", message: "Dodge! (Awakening 1)", message_ES: "ESPIERTAR 1 (Iframe)", message_PT: "DESPERTAR 1 (Iframe)", delay: 800 }, // <80%
			{ type: "func", func: () => awakening_one = true },
			{ type: "func", func: () => stack_level = 0 }
		],
		"s-982-3000-399-0": [
			{ type: "text", sub_type: "message", message: "Dodge! (Awakening 2)", message_ES: "ESPIERTAR 2 (Iframe)", message_PT: "DESPERTAR 2 (Iframe)", delay: 1400  }, // <30%
			{ type: "func", func: () => awakening_two = true },
			{ type: "func", func: () => stack_level = 0 }
		],
		"s-982-3000-360-0": [
			{ type: "text", sub_type: "message", message: "Explosion (Dodge)", message_ES: "EXPLOSIÓN (Iframe)", message_PT: "EXPLOSÃO (Iframe)" },
			{ type: "func", func: () => stack_level = 0 }
		],
		"ab-982-3000-98200399": [{ type: "func", func: stacks_level_event }],
		"s-982-3000-351-0": [
			{ type: "text", sub_type: "message", message: "Stones (Dodge)", message_ES: "Piedras ( Esquiva)", message_PT: "Pedras (Esquiva)" },
			{ type: "text", sub_type: "message", message: "Line up to the plate", message_ES: "Alinear hasta la Placa", message_PT: "Alinhar até a Placa", delay: 4000 },
			{ type: "text", sub_type: "message", message: "Kaia!", message_ES: "Kaia!", message_PT: "Kaia!", delay: 9500 }
		],
		"s-982-3011-352-0": [
			{ type: "text", sub_type: "message", message: "Break Sphere", message_ES: "Romper la Esfera", message_PT: "Quebrar a Esfera", check_func: () => !awakening_two },
			{ type: "text", sub_type: "message", message: "Break Three Spheres", message_ES: "Romper 3 Esferas", message_PT: "Quebrar 3 Esferas", check_func: () => awakening_two }
		],
		"s-982-3012-353-0": [{ type: "text", sub_type: "message", message: "Break Two Spheres", message_ES: "Romper 2 Esferas", message_PT: "Quebrar 3 Esferas" }]
	};
};