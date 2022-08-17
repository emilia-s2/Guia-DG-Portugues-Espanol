// Gossamer Vault (Normal)
//
// made by michengs / Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	let boss = null;

	return {
	// 1 BOSS
		"nd-3101-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3101-1000-104-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Stun Frontal", message_ES: "Stun Frontal", message: "Stun Frontal!" }],
		"s-3101-1000-112-0": [{ type: "text", sub_type: "message", message_PT: "<-Spray ESQUERDO e DIREITO->", message_ES: "<-Spray IZQUIERDO y DERECHO->", message: "Left + Right" }],
		"s-3101-1000-139-0": [{ type: "text", sub_type: "message", message_PT: "Spray FRENTE e Atrás", message_ES: "Spray FRENTE e Atrás", message: "Back + Front (Fast)" },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }
		],
		"s-3101-1000-124-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Stun Frontal", message_ES: "Stun Frontal", message: "Stun Frontal" }],
		"s-3101-1000-127-0": [{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Empurrar Atrás (Rápido)", message_ES: "Empujar Atrás (Rapido)", message: "Back (Fast)" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Empurrar Atrás (Rápido)", message_ES: "Empujar Atrás (Rapido)", message: "Back (Fast)" },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 2000] }
		],
		"s-3101-1000-131-0": [{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Spray Atrás", message_ES: "Spray Atrás", message: "Back Wave (Fast)" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Spray Atrás ", message_ES: "Spray Atrás", message: "Back Wave (Fast)" },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 2000] }
		],
		"s-3101-1000-132-0": [{ type: "text", sub_type: "message", message_PT: "<-Spray ESQUERDO e DIREITO->", message_ES: "<-Spray IZQUIERDO y DERECHO->", message: "Left + Right (Fast)" }],
		"s-3101-1000-133-0": [{ type: "text", sub_type: "message", message_PT: "Salto", message_ES: "Salto", message: "Jump (Fast)" },
			{ type: "text", sub_type: "message", delay: 1400, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3101-1000-138-0": [{ type: "text", sub_type: "message", message_PT: "Salto", message_ES: "Salto", message: "Jump (Fast)" },
			{ type: "text", sub_type: "message", delay: 1400, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3101-1000-148-0": [{ type: "text", sub_type: "message", message_PT: "Mão DIREITA (voando)", message_ES: "Mano DERECHA (volando)", message: "Right Hand (Flying)" },
			{ type: "spawn", func: "circle", args: [false, 553, 20, 150, 10, 320, 0, 4000] }
		],
		"s-3101-1000-149-0": [{ type: "text", sub_type: "message", message_PT: "Mão ESQUERDA (voando)", message_ES: "Mano IZQUIERDA (volando)", message: "Left Hand (Flying)" },
			{ type: "spawn", func: "circle", args: [false, 553, 340, 150, 10, 320, 0, 4000] }
		],
		"s-3101-1000-151-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Stun", message_ES: "Ataque Stun", message: "Stun Attack!" }],
		"s-3101-1000-313-0": [
			{ type: "text", sub_type: "message", message_PT: "DENTRO e FORA (Lento)", message_ES: "DENTRO y FUERA (Lento)", message: "Circles (Slow)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],
		"s-3101-1000-314-0": [
			{ type: "text", sub_type: "message", message_PT: "DENTRO e FORA (Rápido)", message_ES: "DENTRO y FUERA (Rapido)", message: "Circles (Fast)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],

	// 2 BOSS
		"nd-3101-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3101-2000-81": [{ type: "text", sub_type: "message", message_PT: "80%", message_ES: "80%", message: "80%" }],
		"h-3101-2000-76": [{ type: "text", sub_type: "message", message_PT: "75%", message_ES: "75%", message: "75%" }],
		"s-3101-2000-108-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Frente | Atrás", message_ES: "Ataque Frente | Atrás", message: "Front + Back Attack!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 155, 20, 110, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 163, 1000, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 197, 1000, 2000, 2000] }
		],
		"s-3101-2000-150-0": [{ type: "text", sub_type: "message", message_PT: "Fantasma", message_ES: "Fantasma", message: "Phantom" }],
		"s-3101-2000-228-0": [
			{ type: "text", sub_type: "message", message_PT: "Juntar Time", message_ES: "Juntar Time", message: "Team Up" },
		],
		"s-3101-2000-230-0": [{ type: "text", sub_type: "message", message_PT: "AOE", message_ES: "AOE", message: "AOE!!" },
			{ type: "text", sub_type: "message", delay: 1300, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3101-2000-231-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "Out" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3101-2000-232-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "In" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		],
		"s-3101-2000-235-0": [{ type: "text", sub_type: "message", message_PT: "Debuffs", message_ES: "Debuffs", message: "Debuffs" }],
		"s-3101-2000-236-0": [{ type: "text", sub_type: "message", message_PT: "Repelir (Bait)", message_ES: "Repeler (Bait)", message: "Counter Attack (Bait)" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 17, 1000, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 343, 1000, 0, 3000] }	
		]
	};
};