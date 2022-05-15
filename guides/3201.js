// Gossamer Vault (Dificil)
//
// made by michengs

module.exports = (dispatch, handlers, guide, lang) => {
	let boss = null;

	return {
		// 1 BOSS
		"nd-3201-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//"s-3201-1000-103-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }],
		"s-3201-1000-104-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Stun Frontal", message_ES: "Stun Frontal", message: "Стан!" }],
		"s-3201-1000-107-0": [
			{ type: "text", sub_type: "message", message_PT: "Empurrar Atrás (Lento)", message_ES: "Empujar Atrás (Lento)", message: "Back" },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 3500] },  //Adicionado
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 3500] } //Adicionado
		],

		"s-3201-1000-111-0": [{ type: "text", sub_type: "message", message_PT: "Spray Atrás (Lento)", message_ES: "Spray Atrás (Lento)", message: "Back Wave" },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 3500] },  //Adicionado
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 3500] }  //Adicionado
		],
		"s-3201-1000-112-0": [{ type: "text", sub_type: "message", message_PT: "<-Spray ESQUERDO e DIREITO->", message_ES: "<-Spray IZQUIERDO e DERECHO->", message: "Left + Right" }],
		"s-3201-1000-113-0": [
			{ type: "text", sub_type: "message", message_PT: "Salto (Lento)", message_ES: "Salto (Lento)", message: "Jump (Slow)" },
			{ type: "text", sub_type: "message", delay: 1900, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-118-0": [
			{ type: "text", sub_type: "message", message_PT: "Salto (Lento)", message_ES: "Salto (Lento)", message: "Jump (Slow)" },
			{ type: "text", sub_type: "message", delay: 1900, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" },
		],
		"s-3201-1000-119-0": [{ type: "text", sub_type: "message", delay: 0, message_PT: "Spray FRENTE e ATRÁS", message_ES: "Spray FRENTE e ATRÁS", message: "Back + Front" },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },  //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }  //Adicionado
	    ],
		//"s-3201-1000-121-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Direita", message_ES: "Derecha", message: "Right" }],
		//"s-3201-1000-122-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Esquerda", message_ES: "Izquierda", message: "Left" }],
		"s-3201-1000-124-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Stun Frontal", message_ES: "Stun Frontal", message: "Stun attack" }],
		"s-3201-1000-127-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Empurrar Atrás (Rápido)", message_ES: "Empujar Atrás (Rápido)", message: "Back (fast)" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Empurrar Atrás (Rápido)", message_ES: "Empujar Atrás (Rápido)", message: "Back (fast)" },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 2000] },  //Adicionado
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 2000] } //Adicionado
		],
		//"s-3201-1000-128-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Triple Attack", message_ES: "Triple Attack", message: "Triple Attack" }],
		"s-3201-1000-131-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Spray Atras (Rápido)", message_ES: "Spray Atrás (Rapido)", message: "Back Wave" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Spray Atras (Rápido)", message_ES: "Spray Atrás (Rapido)", message: "Back Wave" },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 2000] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 2000] } //Adicionado
		],
		"s-3201-1000-132-0": [{ type: "text", sub_type: "message", message_PT: "<-Spray ESQUERDO e DIREITO->", message_ES: "<-Spray IZQUIERDO e DERECHO->", message: "Left + Right" }],
		"s-3201-1000-133-0": [{ type: "text", sub_type: "message", delay: 0, message_PT: "Salto (Rápido)", message_ES: "Salto (Rapido)", message: "Jump (Fast)" },
		{ type: "text", sub_type: "message", delay: 900, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-138-0": [{ type: "text", sub_type: "message", delay: 0, message_PT: "Salto (Rapido)", message_ES: "Espanol", message: "Jump P (Fast)" },
		{ type: "text", sub_type: "message", delay: 900, message_PT: "Iframe", message_ES: "Espanol", message: "Iframe!" }
		],
		"s-3201-1000-139-0": [{ type: "text", sub_type: "message", message_PT: "Spray FRENTE e ATRÁS (Rápido)", message_ES: "Spray FRENTE e ATRÁS (Rapido)", message: "Back + Front (Fast)" },
		    { type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },  //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }  //Adicionado
	    ],
/*		"s-3201-1000-143-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Left > Right", message_ES: "Left > Right", message: "Left > Right" },
			{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Right > Left", message_ES: "Right > Left", message: "Right > Left" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Right > Left", message_ES: "Right > Left", message: "Right > Left" },
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2715, true, null] },  // 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2800, 4175, true, null] }, // 6
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] },   // 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] }  // 7
		],
		"s-3201-1000-145-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Left > Right", message_ES: "Left > Right", message: "Left > Right" },
			{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Right > Left", message_ES: "Right > Left", message: "Right > Left" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Right > Left", message_ES: "Right > Left", message: "Right > Left" },
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] },   // 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] }, // 7
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2000, true, null] },  // 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2500, 5000, true, null] }  // 6
		],*/
		"s-3201-1000-148-0": [{ type: "text", sub_type: "message", message_PT: "Mão DIREITA (voando)", message_ES: "Mano Derecha (Volando)", message: "Right Hand (Flying)" },
			{ type: "spawn", func: "circle", args: [false, 553, 20, 150, 10, 320, 0, 4000] }  //Adicionado
		],		
		"s-3201-1000-149-0": [{ type: "text", sub_type: "message", message_PT: "Mão ESQUERDA (voando)", message_ES: "Mano Derecha (Volando)", message: "Left Hand (Flying)" },
			{ type: "spawn", func: "circle", args: [false, 553, 340, 150, 10, 320, 0, 4000] }  //Adicionado
		],
		"s-3201-1000-151-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Stun", message_ES: "Ataque Stun", message: "Stun Attack!" }],
		"s-3201-1000-305-0": [{ type: "text", sub_type: "message", message_PT: "Pizza", message_ES: "Pizza", message: "Pizza" }],
		"s-3201-1000-311-0": [
			{ type: "text", sub_type: "message", message_PT: "Ataque em Tela Cheia (Lento)", message_ES: "Ataque en Pantalla Llena (Lento)", message: "Slow" },
			{ type: "text", sub_type: "message", delay: 4200, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-312-0": [
			{ type: "text", sub_type: "message", message_PT: "Ataque em Tela Cheia (Rápido)", message_ES: "Ataque en Pantalla Llena (Rapido)", message: "Fast" },
			{ type: "text", sub_type: "message", delay: 2200, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-313-0": [
			{ type: "text", sub_type: "message", message_PT: "DENTRO e FORA (Lento)", message_ES: "DENTRO y FUERA (Lento)", message: "Circles (Slow)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],
		"s-3201-1000-314-0": [
			{ type: "text", sub_type: "message", message_PT: "DENTRO e FORA (Rapido)", message_ES: "DENTRO y FUERA (Rapido)", message: "Circles (Fast)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],

		// 2 BOSS
		"ns-3201-2000": [{ type: "func", func: () => boss = null }],
		"nd-3201-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"am-3201-320126-32010224": [
			{ type: "func", func: () => boss = 1 },
			{ type: "text", delay: 52000, sub_type: "alert", message_PT: "REAL Debuff em 5 segundos", message_ES: "REAL Debuff en 5 Secundos", message: "True Debuff in 5 seconds" },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 1, func: () => boss = null },
				{ type: "text", check_func: () => boss === 1, sub_type: "message", message_PT: "Recarregar Debuff", message_ES: "Cargar Debuff", message: "Debuff reload" }
			] }
		],
		"am-3201-2000-32010220": [
			{ type: "func", func: () => { boss = 0; } },
			{ type: "text", delay: 52000, sub_type: "alert", message_PT: "FAKE Debuff em 5 segundos", message_ES: "FAKE Debuff en 5 Secundos", message: "False Debuff in 5 seconds" },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 0, func: () => boss = null },
				{ type: "text", check_func: () => boss === 0, sub_type: "message", message_PT: "Recarregar Debuff", message_ES: "Cargar Debuff", message: "Debuff reload" }
			] }
		],
		"h-3201-2000-81": [{ type: "text", sub_type: "message", message_PT: "80%", message_ES: "80%", message: "80%" }],
		"h-3201-2000-76": [{ type: "text", sub_type: "message", message_PT: "75%", message_ES: "75%", message: "75%" }],
		"s-3201-2000-108-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Frente | Atrás", message_ES: "Ataque Frente | Atrás", message: "Back Attack!" }],
		"s-3201-2000-150-0": [{ type: "text", sub_type: "message", message_PT: "Fantasma", message_ES: "Fantasma", message: "Phantom" }],
		"s-3201-2000-228-0": [
			{ type: "text", sub_type: "message", message_PT: "Juntar Time", message_ES: "Juntar Time", message: "Team Up!!!" },
			{ type: "text", sub_type: "alert", delay: 4000, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe" }
		],
		"s-3201-2000-230-0": [{ type: "text", sub_type: "message", message_PT: "AOE", message_ES: "AOE!!", message: "AOE!!" },
			{ type: "text", sub_type: "alert", delay: 1190, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe" }
		],
		"s-3201-2000-231-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "Out Safe" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3201-2000-232-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "In Safe" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		],
		"s-3201-2000-235-0": [{ type: "text", sub_type: "message", message_PT: "Debuffs", message_ES: "Debuffs", message: "Debuffs" }],
		"s-3201-2000-236-0": [{ type: "text", sub_type: "message", message_PT: "Repelir a Frente (bait)", message_ES: "Repelir a Frente (bait)", message: "Counter Attack (Bait)" }]
    };
};