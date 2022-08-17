// Forbidden Arena [Undying Warlord]
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	let timer1 = null;
	let print_target = true;
	let in_bait = false;

	function back_kick_event(skillid) {
		if ([107, 310].includes(skillid)) { // Bait/Back Flip
			in_bait = true;
			dispatch.setTimeout(() => in_bait = false, 3500);
		}

		if (skillid == 116) { // Haymaker
			if (in_bait) {
				handlers.text({
					sub_type: "message",
					message_PT: "Golpe Aleatório (Haymaker)",
					message_ES: "Golpe Aleatório (Haymaker)",
					message: "Haymaker"
				});
			} else { // 116 -> 146
				handlers.text({
					sub_type: "message",
					message_PT: "Golpe Frontal + Chute Atrás (Haymaker)",
					message_ES: "Golpe Frontal + Patada Atrás (Haymaker)",
					message: "Haymaker | Back Kick"
				});
			}
		}
	}

	function target_attack_event() {
		if (print_target) {
			dispatch.clearTimeout(timer1);
			print_target = false;
			dispatch.setTimeout(() => print_target = true, 5000);

			timer1 = dispatch.setTimeout(() => {
				handlers.text({
					sub_type: "alert",
					message_PT: "Ataque alvo em breve...",
					message_ES: "Ataque objetivo pronto...",
					message: "Target attacks soon..."
				});
			}, 65000);
		}
	}

	return {
		"nd-3103-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3102-1000-30": [{ type: "text", sub_type: "message", message_PT: "30%", message_ES: "30%", message: "30%" }],
		"s-3102-1000-113-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Chute Circular", message_ES: "Patada Circular", message: "Roundhouse Kick" }],
		"s-3102-1000-111-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Derrubar", message_ES: "Tumbar", message: "Knockdown" }],
		"s-3102-1000-120-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Derrubar", message_ES: "Tumbar", message: "Knockdown" }],
		"s-3102-1000-153-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "2 chutes", message_ES: "2 Patada", message: "Two Kicks" }], // 153 108

		"s-3102-1000-121-0": [{ type: "text", sub_type: "message", message_PT: "Giro + Chute(Stun)", message_ES: "Giro + Patada (Stun)", message: "Flip Kick (Stun)" }],
		"s-3102-1000-107-0": [
			{ type: "text", sub_type: "message", message_PT: "Bait", message_ES: "Bait", message: "Bait" },
			{ type: "func", func: back_kick_event, args: [107] }
		],
		"s-3102-1000-110-0": [
			{ type: "text", sub_type: "message", message_PT: "Girar", message_ES: "Girar", message: "Spin" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 420, 0, 3000] }
		],
		"s-3102-1000-114-0": [
			{ type: "text", sub_type: "message", message_PT: "Salto (Derrubar)", message_ES: "Salto (Tumbar)", message: "Leap (Knockdown)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 240, 0, 2000] }
		],
		// 310 116
		"s-3102-1000-310-0": [
			{ type: "text", sub_type: "message", message_PT: "Giro Atrás | Haymaker", message_ES: "Giro Atrás | Haymaker", message: "Back Flip | Haymaker" },
			{ type: "func", func: back_kick_event, args: [310] }
		],
		"s-3102-1000-116-0": [{ type: "func", func: back_kick_event, args: [116] }], // Haymaker
		"s-3102-1000-115-0": [{ type: "text", sub_type: "message", message_PT: "Golpe Frontal (Haymaker)", message_ES: "Golpe Frontal (Haymaker)", message: "Haymaker (Tank)" }],
		"s-3102-1000-131-0": [{ type: "text", sub_type: "message", message_PT: "Ritmico Golpes", message_ES: "Ritmico Golpes", message: "Rhythmic Blows" }], // 131 132 133
		"s-3102-1000-146-0": [
			{ type: "text", sub_type: "message", message_PT: "Chute Atrás", message_ES: "Patada Atrás", message: "Back Kick" }, // 116 146
			{ type: "spawn", func: "vector", args: [553, 90, 120, 170, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 120, -170, 600, 0, 3000] }
		],

		// Shield
		"qb-3102-1000-31021006": [{ type: "text", sub_type: "message", message_PT: "ESCUDO!", message_ES: "ESCUDO", message: "Shield!" }],

		// Target "Ha" attacks 308 31021007 125
		"qb-3102-1000-31021007": [
			{ type: "text", sub_type: "message", message_PT: "Alvo", message_ES: "Objetivo", message: "Target" },
			{ type: "func", func: target_attack_event }
		],
		"s-3102-1000-124-0": [{ type: "text", sub_type: "message", message_PT: "Chute", message_ES: "Patada", message: "Kick" }], // 305 124
		"s-3102-1000-125-0": [{ type: "text", sub_type: "message", message_PT: "Chute", message_ES: "Patada", message: "Kick" }],

		// Donuts
		"qb-3102-1000-31021008": [{ type: "text", sub_type: "message", message_PT: "SAIR - ENTRAR (Donuts)", message_ES: "SALIR - ENTRAR (Donuts)", message: "Donuts: Out > In > Dodge" }], // 31021008 303/304 117 155
		"qb-3102-1000-31021009": [{ type: "text", sub_type: "message", message_PT: "ENTRAR - SAIR (Donuts)", message_ES: "ENTRAR - SALIR (Donuts)", message: "Donuts: In > Out > Dodge" }], // 31021009 303/304 118 155
		"s-3102-1000-303-0": [
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 630, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 250, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 490, 0, 5000] }
		],
		"s-3102-1000-304-0": [
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 630, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 250, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 490, 0, 5000] }
		],
		"s-3102-1000-155-0": [{ type: "text", sub_type: "message", delay: 400, message_PT: "Iframe", message_ES: "Iframe", message: "Dodge" }],

		// Stun 142 148 129
		"s-3102-1000-142-0": [{ type: "text", sub_type: "message", message_PT: "Ondas Atrás | Stun", message_ES: "Olas Atrás | Stun", message: "Stun | Back Wave" }],
		"s-3102-1000-148-0": [{ type: "spawn", func: "circle", args: [true, 912, 0, -10, 12, 300, 0, 3000] }],
		"s-3102-1000-129-0": [
			{ type: "text", sub_type: "message", message_PT: "Ondas Atrás", message_ES: "Olas Atrás", message: "Back Wave" },
			{ type: "spawn", func: "vector", args: [912, 90, 210, 390, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 90, 140, 380, 350, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 90, 70, 370, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 70, -370, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 140, -380, 350, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 210, -390, 300, 0, 2000] }
		],

		// Jump 143-0 143-1
		"s-3102-1000-143-0": [{ type: "text", sub_type: "message", message_PT: "Pulo (Stun)", message_ES: "Salto (Stun)", message: "Jump (Stun)" }],
		"s-3102-1000-143-1": [{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 14, 240, 0, 2000] }],

		// AoE 313 314
		"s-3102-1000-313-0": [{ type: "text", sub_type: "message", message_PT: "AOE", message_ES: "AOE", message: "AOE" }],
		"s-3103-1000-314-0": [
		    { type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "Get Out" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 470, 0, 4000] }
		],

		// Debuff
		"ae-0-0-31021011": [{ type: "text", sub_type: "alert", message_PT: "Debuff Stack", message_ES: "Debuff Stack", message: "Debuff Stack" }],
		"am-3102-1000-31021011": [{ type: "text", sub_type: "alert", message_PT: "Debuff Stack", message_ES: "Debuff Stack", message: "Debuff Stack" }],
		"am-3102-1000-31021012": [{ type: "text", sub_type: "alert", message_PT: "Debuff Stack", message_ES: "Debuff Stack", message: "Debuff Stack" }]
	};
};