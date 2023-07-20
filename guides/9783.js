// Dark Reach Citadel
//
// made by ITunk / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-783-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-783-1000-119-0": [{ type: "text", sub_type: "message", message: "Heavy Attack", message_ES: "Ataque Fuerte", message_PT: "Ataque Fuerte" }],
		"s-783-1000-120-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }],
		"s-783-1000-302-0": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "АОЕ", message_PT: "АОЕ" }],
		"s-783-1000-108-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun" }],
		"s-783-1000-109-0": [{ type: "text", sub_type: "message", message: "Push Back", message_ES: "Empujar Atrás", message_PT: "Empurrar Atrás" }],
		"s-783-1000-127-0": [{ type: "text", sub_type: "message", message: "Many Attack", message_ES: "Muchos Ataques", message_PT: "Muitos Ataques" }],
		"s-783-1000-305-0": [{ type: "text", sub_type: "message", message: "Triple Laser (Together)", message_ES: "Triple Laser (Juntos)", message_PT: "Triplo Laser (Juntos)" }],
		"s-783-1000-304-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Jalar", message_PT: "Puxar" }],

		// 2 BOSS
		"nd-783-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-783-2000-110-0": [{ type: "text", sub_type: "message", message: "Front Attack (Dodge)", message_ES: "Frente Ataque (Esquiva)", message_PT: "Frente Ataque (Esquiva)" }],
		"s-783-2000-112-0": [{ type: "text", sub_type: "message", message: "Push Back (Right)", message_ES: "Empujar Atrás (Derecha)", message_PT: "Empurrar Atrás (Direita)" }],
		"s-783-2000-115-0": [{ type: "text", sub_type: "message", message: "Push Back (Left)", message_ES: "Empujar Atrás (Izquierda)", message_PT: "Empurrar Atrás (Direita)" }],
		"s-783-2000-119-0": [{ type: "text", sub_type: "message", message: "Jump (Dodge)", message_ES: "Salto (Esquiva)", message_PT: "Salto (Esquiva)" }],
		"s-783-2000-120-0": [{ type: "text", sub_type: "message", message: "Front Attack | Push Back", message_ES: "Frente Ataque | Empujar Atrás", message_PT: "Frente Ataque | Empurrar Atrás" }],
		/*	{ type: "spawn", func: "vector", args: [553, 0, 0, 70, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 305, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 210, 380, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 0, 50, 150, 380, 0, 4000] } */
		"s-783-2000-105-0": [{ type: "text", sub_type: "message", message: "Whip (Dodge)", message_ES: "Látigo (Esquiva)", message_PT: "Chicote (Esquiva)" }],
		"s-783-2000-316-0": [{ type: "text", sub_type: "message", message: "Fire AOE", message_ES: "Fuego AoE", message_PT: "Fogo АОЕ" }],
		"s-783-2000-306-0": [{ type: "text", sub_type: "message", message: "Dodge | Out", message_ES: "Esquiva | Salir", message_PT: "Esquivar | Sair" }],
		// { type: "spawn", func: "circle", args: [false, 553, 0, -50, null, 675, 0, 3000] }
		"s-783-2000-317-0": [{ type: "text", sub_type: "message", message: "Dodge (AOE)", message_ES: "Esquiva (AOE)", message_PT: "Esquiva (АОЕ)" }],
		"s-783-2000-318-0": [{ type: "text", sub_type: "message", message: "Dodge (Get out)", message_ES: "Esquiva (Salir)", message_PT: "Esquiva (Sair)" }],
		// { type: "spawn", func: "circle", args: [false, 553, 0, -50, null, 675, 0, 7000] }

		// 3 BOSS
		"nd-783-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-783-3000-106-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar", message_PT: "Empurrar" }],
		"s-783-3000-309-0": [{ type: "text", sub_type: "message", message: "Debuff!!!", message_ES: "Debuff!!!", message_PT: "Debuff!!!" }],
		"s-783-3000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_ES: "Lanzamiento Frontal (Stun)", message_PT: "Lançar Frente (Stun)" }],
		"s-783-3000-113-0": [{ type: "text", sub_type: "message", message: "Push Back", message_ES: "Empujar Atrás", message_PT: "Empurrar Atrás" }],
		"s-783-3000-315-0": [{ type: "text", sub_type: "message", message: "Dodge | Out", message_ES: "Esquiva salir ", message_PT: "Esquiva | Sair" }],
		"s-783-3000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzamiento Atrás (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 210, 380, null, 250, 0, 2000] }
		],
		"s-783-3000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzamiento Atrás (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 150, 380, null, 250, 0, 2000] }
		],
		"s-783-3000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_ES: "Lanzamiento (Objetivo", message_PT: "Lançar (Alvo)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-783-3000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-783-3000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE", message_PT: "АоЕ" }],
		"s-783-3000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_ES: "Golpe | Frontal Stun", message_PT: "Ataque | Frente Stun" }],
		"s-783-3000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_ES: "Frontal Stun", message_PT: "Frontal Stun" },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-783-3000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_ES: "Salto Mortal | Golpe Atrás", message_PT: "Salto Mortal | Golpe Atrás" }],
		"s-783-3000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_ES: "Golpe Atrás (Sangrar)", message_PT: "Golpe Atrás (Sangrar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-783-3000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_ES: "Fontal Combo", message_PT: "Frontal Combo" }],
		"s-783-3000-301-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_ES: "Círculos х5 (Objetivo)", message_PT: "Círculos х5 (Alvo)" }],
		"s-783-3000-303-0": [
			{ type: "text", sub_type: "message", message: "Right Safe", message_ES: "Derecha Seguro", message_PT: "Direita Seguro" },
			{ type: "spawn", func: "marker", args: [false, 120, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 250, 0, 4000, true, null] }
		],
		"s-783-3000-306-0": [
			{ type: "text", sub_type: "message", message: "Left Safe", message_ES: "Izquierda Segura", message_PT: "Esquerda Segura " },
			{ type: "spawn", func: "marker", args: [false, 240, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 250, 0, 4000, true, null] }
		]
	};
};