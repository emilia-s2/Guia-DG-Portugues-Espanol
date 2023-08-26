// Antaroth's Abyss (Normal)
//
// made by HSDN / Yuyuko / Owyn

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let secondboss_mech_counter = 0;
	let thirdboss_counter = 0;
	let thirdboss_timer = null;

	function secondboss_stacks_event() {
		secondboss_mech_counter++;

		handlers.text({ sub_type: "notification", message: `${secondboss_mech_counter} stack`, message_ES: `${secondboss_mech_counter} stack`, message_PT: `${secondboss_mech_counter} stack`, speech: false });

		if (secondboss_mech_counter >= 5) {
			secondboss_mech_counter = 0;
		}
	}

	function thirdboss_backattack_event() {
		dispatch.clearTimeout(thirdboss_timer);
		thirdboss_counter++;

		if (thirdboss_counter >= 2) {
			handlers.text({ sub_type: "message", message: "Back Stun", message_ES: "Atrás Stun", message_PT: "Atrás Stun" });
		}

		thirdboss_timer = dispatch.setTimeout(() => thirdboss_counter = 0, 3000);
	}

	return {
		// 1 BOSS
		"nd-720-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-720-1000-1117-0": [{ type: "text", sub_type: "message", message: "In > Out", message_ES: "Entrar > Salir", message_PT: "Entrar | Sair" }],
		"s-720-1000-1116-0": [{ type: "text", sub_type: "message", message: "Out > In", message_ES: "Salir > Entrar", message_PT: "Sair | Entrar" }],
		"s-720-1000-1109-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_ES: "Ataque Atrás", message_PT: "Ataque Atrás" }],
		"s-720-1000-1300-0": [{ type: "text", sub_type: "message", delay: 600, message: "Dodge!", message_ES: "Iframe", message_PT: "Iframe!" }],
		"s-720-1000-2117-0": "s-720-1000-1117-0",
		"s-720-1000-2116-0": "s-720-1000-1116-0",
		"s-720-1000-2109-0": "s-720-1000-1109-0",
		"s-720-1000-2220-0": "s-720-1000-1220-0",
		"qb-720-1000-7201000": [{ type: "text", sub_type: "message", message: "Flying", message_ES: "Volando", message_PT: "Voando!" }],

		// 2 BOSS
		"nd-720-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-720-2000-99": [{ type: "func", func: () => secondboss_mech_counter = 0 }],
		"s-720-2000-1104-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_ES: "Salto Aleatorio", message_PT: "Salto Aleatório" }],
		"s-720-2000-1105-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_ES: "Ataque Atrás", message_PT: "Ataque Atrás" }],
		"s-720-2000-1106-0": [
			{ type: "text", sub_type: "message", message: "Spin Attack", message_ES: "Ataque Giratorio", message_PT: "Ataque Giratorio" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-720-2000-1108-0": [{ type: "text", sub_type: "message", message: "Target Swing", message_ES: "Objetivo", message_PT: "Alvo" }],
		"s-720-2000-1110-0": [
			{ type: "text", sub_type: "message", message: "Stun Attack", message_ES: "Ataque Stun", message_PT: "Ataque Stun" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 175, 10, 260, 0, 5000] }
		],
		"s-720-2000-1111-0": [
			{ type: "text", sub_type: "message", message: "Left Slash", message_ES: "Izquierda Slash", message_PT: "Esquerda Slash" },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 6, 302, 270, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 176, 502, 270, 200, 0, 2000] }
		],
		"s-720-2000-1112-0": [
			{ type: "text", sub_type: "message", message: "Right Slash", message_ES: "Derecha Slash", message_PT: "Direita Slash" },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 354, 302, 90, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 184, 502, 90, 200, 0, 2000] }
		],
		"s-720-2000-1113-0": "s-720-2000-1111-0",
		"s-720-2000-1114-0": "s-720-2000-1112-0",
		"s-720-2000-2104-0": "s-720-2000-1104-0",
		"s-720-2000-2105-0": "s-720-2000-1105-0",
		"s-720-2000-2106-0": "s-720-2000-1106-0",
		"s-720-2000-2108-0": "s-720-2000-1108-0",
		"s-720-2000-2110-0": "s-720-2000-1110-0",
		"s-720-2000-2111-0": "s-720-2000-1111-0",
		"s-720-2000-2112-0": "s-720-2000-1112-0",
		"s-720-2000-2113-0": "s-720-2000-1111-0",
		"s-720-2000-2114-0": "s-720-2000-1112-0",
		"s-720-2000-3116-0": [{ type: "text", sub_type: "message", message: "Circles", message_ES: "Círculos", message_PT: "Círculos" }],
		"s-720-2000-3119-0": [{ type: "text", sub_type: "message", message: "Red: Out safe", message_ES: "Rojo: SALIR", message_PT: "Vermelho: SAIR" }],
		"s-720-2000-3220-0": [{ type: "text", sub_type: "message", message: "Blue: In safe", message_ES: "Azul: ENTRAR", message_PT: "Azul: ENTRAR" }],
		//
		"dm-0-0-7202000": [{ type: "func", func: secondboss_stacks_event }],

		// 3 BOSS
		"nd-720-3000-0": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-720-3000-1104-0": [{ type: "func", func: thirdboss_backattack_event }],
		"s-720-3000-1119-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 0, 2000] }],
		"s-720-3000-1107-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_ES: "Salto Random", message_PT: "Salto Aleatório" }],
		"s-720-3000-1107-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 85, 12, 250, 0, 2000] }],
		"s-720-3000-1109-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "Izquierda", message_PT: "Esqueda" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] }
		],
		"s-720-3000-1111-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha", message_PT: "Direita" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] }
		],
		"s-720-3000-1113-0": [{ type: "text", sub_type: "message", message: "Front | Back Stun", message_ES: "Ataque Frontal | Atrás Stun", message_PT: "Ataque Frontal | Atrás Stun" }],
		"s-720-3000-1115-0": [{ type: "text", sub_type: "message", message: "Spin Attack", message_ES: "Ataque Giratorio", message_PT: "Ataque Giratorio" }],
		"s-720-3000-1120-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Slow)", message_ES: "Rayo de Energia (Lento)", message_PT: "Raio de Energia (Lento)" }],
		"s-720-3000-1204-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Fast)", message_ES: "Rayo de Energia (Rápido", message_PT: "Raio de Energia (Rápido)" }],
		"s-720-3000-1206-0": [{ type: "text", sub_type: "message", message: "Orbs", message_ES: "Orbes", message_PT: "Orbes" }],
		"s-720-3000-1309-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE", message_PT: "AoE" }],
		"s-720-3000-1310-0": [{ type: "text", sub_type: "message", message: "Puddles", message_ES: "Charcos (Olas)", message_PT: "Poças (Ondas)" }],
		"s-720-3000-1311-0": "s-720-3000-1310-0",
		"s-720-3000-1312-0": "s-720-3000-1310-0",
		"s-720-3000-1313-0": "s-720-3000-1310-0",
		"s-720-3000-1314-0": "s-720-3000-1310-0",
		"s-720-3000-1315-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar Atrás (Kaia)", message_PT: "Empurrar Atrás (Kaia)" }],
		"s-720-3000-1400-0": [{ type: "text", sub_type: "message", message: "Clones: Beam", message_ES: "Clones: Rayo", message_PT: "Clones: Raio" }],
		"s-720-3000-1401-0": [{ type: "text", sub_type: "message", message: "Clones: Spin", message_ES: "Clones: Girar", message_PT: "Clones: Girar" }],
		"s-720-3000-2104-0": "s-720-3000-1104-0",
		"s-720-3000-2105-0": "s-720-3000-1105-0",
		"s-720-3000-2119-0": "s-720-3000-1119-0",
		"s-720-3000-2107-0": "s-720-3000-1107-0",
		"s-720-3000-2107-1": "s-720-3000-1107-1",
		"s-720-3000-2109-0": "s-720-3000-1109-0",
		"s-720-3000-2111-0": "s-720-3000-1111-0",
		"s-720-3000-2113-0": "s-720-3000-1113-0",
		"s-720-3000-2115-0": "s-720-3000-1115-0",
		"s-720-3000-2120-0": "s-720-3000-1120-0",
		"s-720-3000-2204-0": "s-720-3000-1204-0",
		"s-720-3000-2202-0": "s-720-3000-1202-0",
		"s-720-3000-2206-0": "s-720-3000-1206-0"
	};
};