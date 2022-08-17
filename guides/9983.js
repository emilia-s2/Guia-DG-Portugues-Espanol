// Dark Reach Citadel (Hard)
//
// made by ITunk / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-983-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-983-1000-119-0": [{ type: "text", sub_type: "message", message: "Heavy Attack", message_ES: "Ataque Fuerte", message: "Ataque Fuerte" }],
		"s-983-1000-120-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message: "Iframe" }],
		"s-983-1000-302-0": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "АОЕ", message: "АОЕ" }],
		"s-983-1000-108-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message: "Stun" }],
		"s-983-1000-109-0": [{ type: "text", sub_type: "message", message: "Push Back", message_ES: "Empujar Atrás", message: "Empurrar Atrás" }],
		"s-983-1000-127-0": [{ type: "text", sub_type: "message", message: "Many Attack", message_ES: "Muchos Ataques", message: "Muitos Ataques" }],
		"s-983-1000-305-0": [{ type: "text", sub_type: "message", message: "Triple Laser (Together)", message_ES: "Triple Laser (Juntos)", message: "Triplo Laser (Juntos)" }],
		"s-983-1000-304-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Jalar", message: "Puxar" }],

		// 2 BOSS
		"nd-983-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-983-2000-110-0": [{ type: "text", sub_type: "message", message: "Front Attack (Dodge)", message_ES: "Ataque Frontal (Iframe)", message: "Ataque Frontal (Iframe)" }],
		"s-983-2000-112-0": [{ type: "text", sub_type: "message", message: "Push Back (Right)", message_ES: "Empujar Atrás (Derecha)", message: "Empurrar Atrás (Direita)" }],
		"s-983-2000-115-0": [{ type: "text", sub_type: "message", message: "Push Back (Left)", message_ES: "Empujar Atrás (Izquierda)", message: "Empurrar Atrás (Esquerda)" }],
		"s-983-2000-119-0": [{ type: "text", sub_type: "message", message: "Jump (Dodge)", message_ES: "Salto (Iframe)", message: "Salto (Iframe)" }],
		"s-983-2000-120-0": [{ type: "text", sub_type: "message", message: "Front Attack | Push Back", message_ES: "Ataque Frontal | Empujar Atrás", message: "Ataque Frontal | Empurrar Atrás" }],
		/*	{ type: "spawn", func: "vector", args: [553, 0, 0, 70, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 305, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 210, 380, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 0, 50, 150, 380, 0, 4000] } */
		"s-983-2000-105-0": [{ type: "text", sub_type: "message", message: "Whip (Dodge)", message_ES: "Látigo (Iframe)", message: "Chicote (Iframe)" }],
		"s-983-2000-316-0": [{ type: "text", sub_type: "message", message: "Fire AOE", message_ES: "Fuego AOE", message: "Fogo АОЕ" }],
		"s-983-2000-306-0": [{ type: "text", sub_type: "message", message: "Dodge | Out", message_ES: "Iframe | Salir", message: "Iframe | Sair" }],
		// { type: "spawn", func: "circle", args: [false, 553, 0, -50, null, 675, 0, 3000] }
		"s-983-2000-317-0": [{ type: "text", sub_type: "message", message: "Dodge (AOE)", message_ES: "Iframe (AOE)", message: "Iframe (AOE)" }],
		"s-983-2000-318-0": [{ type: "text", sub_type: "message", message: "Dodge (Get out)", message_ES: "Iframe (Salir)", message: "Iframe (Sair)" }],
		// { type: "spawn", func: "circle", args: [false, 553, 0, -50, null, 675, 0, 7000] }

		// 3 BOSS
		"nd-983-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-983-3000-106-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar", message: "Empurrar" }],
		"s-983-3000-309-0": [{ type: "text", sub_type: "message", message: "Debuff!!!", message_ES: "Debuff!!!", message: "Debuff!!!" }],
		"s-983-3000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_ES: "Ataque Frontal (Stun)", message: "Ataque Frontal (Stun)" }],
		"s-983-3000-113-0": [{ type: "text", sub_type: "message", message: "Push Back", message_ES: "Empujar Atras", message: "Empurrar" }],
		"s-983-3000-315-0": [{ type: "text", sub_type: "message", message: "Dodge | Out", message_ES: "Iframe | Salir", message: "Iframe | Sair" }],
		"s-983-3000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzar Atrás (Stun)", message: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 210, 380, null, 250, 0, 2000] }
		],
		"s-983-3000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzar Atrás (Stun)", message: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 150, 380, null, 250, 0, 2000] }
		],
		"s-983-3000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_ES: "Lanzar Atrás (Stun)", message: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-983-3000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-983-3000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE", message: "АоЕ" }],
		"s-983-3000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_ES: "Hit | Frontal Stun", message: "Hit | Frontal Stun" }],
		"s-983-3000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_ES: "Stun Frontal", message: "Stun Frontal" },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-983-3000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_ES: "Salto Mortal | Golpe Atrás", message: "Salto Mortal | Golpe Atrás" }],
		"s-983-3000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_ES: "Golpe Atrás (Sangrar)", message: "Golpe Atrás (Sangrar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-983-3000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_ES: "Combo Frontal", message: "Combo Frontal" }],
		"s-983-3000-301-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_ES: "Círculos х5 (Objetivo)", message: "Círculos х5 (Alvo)" }],
		"s-983-3000-303-0": [
			{ type: "text", sub_type: "message", message: "Right Safe", message_ES: "Derecha Segura", message: "Direita" },
			{ type: "spawn", func: "marker", args: [false, 120, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 250, 0, 4000, true, null] }
		],
		"s-983-3000-306-0": [
			{ type: "text", sub_type: "message", message: "Left Safe", message_ES: "Izquierda", message: "Esquerda" },
			{ type: "spawn", func: "marker", args: [false, 240, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 250, 0, 4000, true, null] }
		]
	};
};