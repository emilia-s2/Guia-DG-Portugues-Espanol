// RK-9 Kennel Normal
//
// made by michengs

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-735-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-735-1000-111-0": [{ type: "text", sub_type: "message", message_PT: "Frente + Atrás", message_ES: "Frente + Atrás", message: "Back + Front" }],
		"s-735-1000-104-0": [{ type: "text", sub_type: "message", message_PT: "Stun Frontal", message_ES: "Stun Frontal", message: "Front Stun" }],
		"s-735-1000-112-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Atrás", message_ES: "Ataque Atrás", message: "Back Attack" }],
		"s-735-1000-304-0": [{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "Out" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 350, 100, 4000] } // Adicionado
		],
		"s-735-1000-305-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "In" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 290, 100, 4000] } // Adicionado
		],
		"s-735-1000-306-0": [{ type: "text", sub_type: "message", message_PT: "Bombas", message_ES: "Bombas", message: "Bombs" }],
		"s-735-1000-307-0": [{ type: "text", sub_type: "message", message_PT: "Puxar", message_ES: "Jalar", message: "Pull" }],
		"s-735-1000-309-0": [{ type: "text", sub_type: "message", message_PT: "Misseis Iniciados!!", message_ES: "Misiles iniciados!!", message: "Four Missile" },
			{ type: "text", sub_type: "message", delay: 12000, message_PT: "Disparar Misseis", message_ES: "Disparar Misiles", message: "Fire Missiles" } // Adicionado
		],

		// 2 BOSS
		"nd-735-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-735-2000-102-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente Ataque", message_ES: "Frente Ataque", message: "Front Attack" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 300, 12, 228, 0, 3000] }
		],
		"s-735-2000-105-0": [
			{ type: "text", sub_type: "message", message_PT: "Girar (Repelir)", message_ES: "Girar (Repeler)", message: "360" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 278, 0, 4000] }
		],
		"s-735-2000-108-0": [
			{ type: "text", sub_type: "message", message_PT: "Atras (Repelir)", message_ES: "Atras (Repeler)", message: "Back Swipe" },
			{ type: "spawn", func: "semicircle", args: [120, 245, 553, 0, 0, 10, 385, 0, 2000] },  // Adicionado 
			{ type: "spawn", func: "vector", args: [553, 0, 0, 240, 380, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 120, 380, 0, 2000] }
		],
		"s-735-2000-301-0": [{ type: "text", sub_type: "message", message_PT: "Disparar Bombas", message_ES: "Lanzar Bombas", message: "Throwing Orb" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 200, 100, 6000] } // Adicionado
		],	
		"s-735-2000-304-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR (Explosão)", message_ES: "SALIR (Explosión)", message: "Get Out" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 0, 4000] }
		],
		"s-735-2007-201-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 500, 0, 4000] }
		],
		"s-735-2007-306-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 500, 0, 4000] }
		],
		"s-735-2007-307-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 500, 0, 4000] }
		],

		// 3 BOSS
		"nd-735-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-735-3000-116-0": [{ type: "text", sub_type: "message", message_PT: "S-DIREITO Seguro", message_ES: "S-DERECHO Seguro", message: "Right Safe" },
			{ type: "spawn", func: "point", args: [553, 120, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 130, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 140, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 150, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 160, 210, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 170, 210, 180, 290, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 300, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 310, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 320, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 330, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 340, 210, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 350, 210, 0, 290, 0, 3000] }
		],
		"s-735-3000-117-0": [{ type: "text", sub_type: "message", message_PT: "S-ESQUERDO Seguro", message_ES: "S-IZQUIERDO Seguro", message: "Left Safe" },
			{ type: "spawn", func: "vector", args: [553, 10, 210, 0, 290, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 20, 210, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 30, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 40, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 50, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 60, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 240, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 230, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 220, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 210, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 200, 210, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 190, 210, 180, 290, 0, 3000] }
		],
		"s-735-3000-118-0": [{ type: "text", sub_type: "message", message_PT: "S-ESQUERDO Seguro", message_ES: "S-IZQUIERDO Seguro", message: "Left Safe" },
			{ type: "spawn", func: "vector", args: [553, 10, 210, 0, 290, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 20, 210, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 30, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 40, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 50, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 60, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 240, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 230, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 220, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 210, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 200, 210, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 190, 210, 180, 290, 0, 3000] }
		],
		"s-735-3000-119-0": [{ type: "text", sub_type: "message", message_PT: "S-DIREITO Seguro", message_ES: "S-DERECHO Seguro", message: "Right Safe" },
			{ type: "spawn", func: "point", args: [553, 120, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 130, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 140, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 150, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 160, 210, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 170, 210, 180, 290, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 300, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 310, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 320, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 330, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 340, 210, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 350, 210, 0, 290, 0, 3000] }
		],
		"s-735-3000-128-0": [
			{ type: "text", sub_type: "message", message_PT: "Atrás Punho Explosivo", message_ES: "Atrás Puño Explosivo", message: "Explosive Back" },
			{ type: "spawn", func: "vector", args: [553, 180, 40, 120, 900, 2000, 3000] },
			{ type: "spawn", func: "vector", args: [553, 180, 40, 240, 900, 2000, 3000] }
		],
		"s-735-3000-129-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Iframe", message_ES: "Iframe", message: "Iframe" }],
		"s-735-3000-321-0": [
			{ type: "text", sub_type: "message", message_PT: "ESCUDO!", message_ES: "ESCUDO!", message: "Shield!" },
			{ type: "text", sub_type: "message", delay: 105000, message_PT: "ESCUDO em 10 segundos!", message_ES: "ESCUDO en 10 segundos!", message: "SHIELD in 10 seconds!" }
		],
		"s-735-3000-305-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 300, 0, 7000] }],
		"s-735-3000-324-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "GO OUT" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 285, 0, 3000] }
		],	
		"s-735-3000-325-0": [
			{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "IN" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 285, 0, 3000] }
		]
	};
};