//Harnovog's Trial (Damned Citadel)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		// PHASE 1
		"nd-3043-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3043-1000-106-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar", message_PT: "Empurrar" }],
		"s-3043-1000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_ES: "Lanzar Frente (Stun)", message_PT: "Lançar para a Frente (Stun)" }],
		"s-3043-1000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzar hacia Atrás (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 210, 380, null, 250, 0, 2000] }
		],
		"s-3043-1000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzar hacia Atrás (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 150, 380, null, 250, 0, 2000] }
		],
		"s-3043-1000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_ES: "Lanzar (Objetivo)", message_PT: "Lançar (Alvo)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-3043-1000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-3043-1000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE", message_PT: "АоЕ" }],
		"s-3043-1000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_ES: "Golpe Frente | Stun", message_PT: "Golpe Frente | Stun" }],
		"s-3043-1000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_ES: "Frente Stun", message_PT: "Frente Stun" },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-3043-1000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_ES: "Salto Mortal | Golpe Atrás", message_PT: "Salto Mortal | Golpe Atrás" }],
		"s-3043-1000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_ES: "Golpe Atrás (Sangrar)", message_PT: "Golpe Atrás (Sangramento)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-3043-1000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_ES: "Combo Frontal", message_PT: "Combo Frontal" }],
		"s-3043-1000-301-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_ES: "Círculos (Objetivo)", message_PT: "Círculos (Alvo)" }],
		"s-3043-1000-340-0": [
			{ type: "text", sub_type: "message", message: "Laser", message_ES: "Laser", message_PT: "Laser" },
			{ type: "spawn", func: "vector", args: [912, 90, 50, 25, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 50, 335, 300, 0, 2000] }
		],

		// PHASE 2
		"nd-3043-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3043-2000-106-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar", message_PT: "Empurrar" }],
		"s-3043-2000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_ES: "Lanzar Frente (Stun)", message_PT: "Lançar para a Frente (Stun)" }],
		"s-3043-2000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzar hacia Atrás (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 210, 380, null, 250, 0, 2000] }
		],
		"s-3043-2000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzar hacia Atrás (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 150, 380, null, 250, 0, 2000] }
		],
		"s-3043-2000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_ES: "Lanzar (Objetivo)", message_PT: "Lançar (Alvo)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-3043-2000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-3043-2000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE", message_PT: "АоЕ" }],
		"s-3043-2000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_ES: "Golpe Frente | Stun", message_PT: "Golpe Frente | Stun" }],
		"s-3043-2000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_ES: "Frente Stun", message_PT: "Frente Stun" },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-3043-2000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_ES: "Salto Mortal | Golpe Atrás", message_PT: "Salto Mortal | Golpe Atrás" }],
		"s-3043-2000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_ES: "Golpe Atrás (Sangrar)", message_PT: "Golpe Atrás (Sangramento)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-3043-2000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_ES: "Combo Frontal", message_PT: "Combo Frontal" }],
		"s-3043-2000-143-0": [{ type: "text", sub_type: "message", message: "Hit | Back Push", message_ES: "Golpe | Empujón Hacia Atrás", message_PT: "Golpe | Empurrão para Atrás" }],
		"s-3043-2000-143-1": [{ type: "text", sub_type: "message", message: "Back Push", message_ES: "Empujón Hacia Atrás", message_PT: "Empurrão para Atrás" }],
		"s-3043-2000-144-0": [
			{ type: "text", sub_type: "message", message: "Right X-Swipe", message_ES: "Deslizar Derecha X", message_PT: "Deslizar a Direita X" },
			{ type: "spawn", func: "vector", args: [553, 305, 700, 130, 1200, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 325, 700, 130, 1200, 0, 3000] },
			{ type: "text", sub_type: "message", message: "Left X-Swipe", message_ES: "Deslizar Izquierda X", message_PT: "Deslizar a Esquerda X", delay: 3000 },
			{ type: "spawn", func: "vector", args: [553, 30, 700, 230, 1200, 0, 2000], delay: 3000 },
			{ type: "spawn", func: "vector", args: [553, 50, 700, 230, 1200, 0, 2000], delay: 3000 }
		],
		"s-3043-2000-146-0": [
			{ type: "text", sub_type: "message", message: "Right Swipe", message_ES: "Deslizar Izquierda", message_PT: "Deslizar a Direita" },
			{ type: "spawn", func: "vector", args: [553, 355, 500, 180, 1000, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 25, 500, 180, 1000, 0, 3000] },
			{ type: "text", sub_type: "message", message: "Left Swipe", message_ES: "Deslizar a Esquerda", message_PT: "Deslizar a Esquerda", delay: 3000 },
			{ type: "spawn", func: "vector", args: [553, 335, 500, 180, 1000, 0, 2000], delay: 3000 },
			{ type: "spawn", func: "vector", args: [553, 5, 500, 180, 1000, 0, 2000], delay: 3000 }
		],
		"s-3043-2000-148-0": [
			{ type: "text", sub_type: "message", message: "Stun (AoE)", message_ES: "Stun (АоЕ)", message_PT: "Stun (АоЕ)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 20, null, 250, 0, 2000] }
		],
		"s-3043-2000-151-0": [
			{ type: "text", sub_type: "message", message: "Throws Combo | Stun (AoE)", message_ES: "Lanzar Combo | Stun", message_PT: "Lançar Combo | Stun" },
			{ type: "spawn", func: "circle", args: [true, 912, 180, 200, null, 200, 0, 3000] }
		],
		"s-3043-2000-152-0": [
			{ type: "text", sub_type: "message", message: "Stun (AoE)", message_ES: "Stun (AoE)", message_PT: "Stun (AoE)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 20, null, 250, 0, 2000] }
		],
		"s-3043-2000-301-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_ES: "Círculos (Objetivo)", message_PT: "Círculos (Alvo)" }],
		"s-3043-2000-340-0": [
			{ type: "text", sub_type: "message", message: "Laser", message_ES: "Laser", message_PT: "Laser" },
			{ type: "spawn", func: "vector", args: [912, 90, 50, 25, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 50, 335, 300, 0, 2000] }
		],

		"qb-3043-2000-3043201": [{ type: "text", sub_type: "message", message: "Blue Circles (Safe)", message_ES: "Círculos Azules  (Seguro)", message_PT: "Círculos Azuis (Seguro)" }],
		"qb-3043-2000-3043202": [{ type: "text", sub_type: "message", message: "Red Circles (Dodge)", message_ES: "Círculos Rojos  (Esquiva)", message_PT: "Círculos Vermelhos (Esquiva)" }],
		"qb-3043-2000-3043400": [{ type: "text", sub_type: "message", message: "Break Statues", message_ES: "Romper  Escudos de las Estatuas", message_PT: "Quebrar Escudos das Státuas" }]
	};
};