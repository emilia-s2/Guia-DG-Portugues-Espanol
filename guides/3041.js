// Damned Citadel
//
// made by ITunk / HSDN / FrostSigil

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-3041-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3041-2000-106-0": [{ type: "text", sub_type: "message", message: "Push (Tank)", message_ES: "Empujar (Tank)", message_PT: "Empurrar (Tank)" }],
		"s-3041-2000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_ES: "Lanzamiento Frontal (Stun)", message_PT: "Lançar Frente (Stun)" }],
		"s-3041-2000-113-0": [{ type: "text", sub_type: "message", message: "Push Back", message_ES: "Empujar Atrás", message_PT: "Empurrar Atrás" }],
		"s-3041-2000-114-0": [{ type: "text", sub_type: "message", message: "Bait (Target)", message_ES: "Bait (Objetivo)", message_PT: "Bait (Alvo)" }],
		"s-3041-2000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzamiento Atrás (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 205, 410, null, 220, 0, 2000] }
		],
		"s-3041-2000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzamiento Atrás (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 155, 410, null, 220, 0, 2000] }
		],
		"s-3041-2000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_ES: "Lanzamiento Atrás (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-3041-2000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-3041-2000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE", message_PT: "АоЕ" }],
		"s-3041-2000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_ES: "Golpe | Frontal Stun", message_PT: "Ataque | Frente Stun" }],
		"s-3041-2000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_ES: "Frente Stun", message_PT: "Frente Stun" },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-3041-2000-127-0": [
			{ type: "text", sub_type: "message", message: "Back Hit", message_ES: "Atque Atrás", message_PT: "Ataque Atrás" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 350, null, 380, 0, 2000] }
		],
		"s-3041-2000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_ES: "Salto Mortal | Golpe Atrás", message_PT: "Salto Mortal | Golpe Atrás" }],
		"s-3041-2000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_ES: "Golpe Atrás (Sangrar)", message_PT: "Golpe Atrás (Sangrar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-3041-2000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_ES: "Frontal Combo", message_PT: "Frontal Combo" }],
		"s-3041-2000-301-0": [
			{ type: "text", sub_type: "message", message: "Thorns (Target)", message_ES: "Espinas Objetivo x5", message_PT: "Espinhos Alvo х5" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1700 }
		],
		"s-3041-2000-303-0": [
			{ type: "text", sub_type: "message", message: "Right Safe", message_ES: "Derecha Seguro", message_PT: "Direita Seguro" },
			{ type: "spawn", func: "marker", args: [false, 120, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 250, 0, 4000, true, null] }
		],
		"s-3041-2000-306-0": [
			{ type: "text", sub_type: "message", message: "Left Safe", message_ES: "Izquierda Seguro", message_PT: "Esquerda Seguro" },
			{ type: "spawn", func: "marker", args: [false, 240, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 250, 0, 4000, true, null] }
		],
		"s-3041-2000-309-0": [{ type: "text", sub_type: "message", message: "Debuff!!!", message_ES: "Debuff", message_PT: "Debuff!!!" }],
		"s-3041-2000-315-0": [
			{ type: "text", sub_type: "message", message: "Dodge | Out", message_ES: "Esquiva | Salir", message_PT: "Esquiva | Sair" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 0, null, 400, 0, 6000] }
		],
		"s-3041-3003-411-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 2000] }]
	};
};