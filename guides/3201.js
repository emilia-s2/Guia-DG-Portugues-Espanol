// Gossamer Vault (Dificil)
//
// made by michengs / ITunk

module.exports = (dispatch, handlers, guide, lang) => {
	let boss = null;

	return {
		// 1 BOSS
		"nd-3201-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//"s-3201-1000-103-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Dodge", message_RU: "Эвейд!" }],
		"s-3201-1000-104-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Stun attack", message_RU: "Стан!" }],
		"s-3201-1000-107-0": [
			{ type: "text", sub_type: "message", message_PT: "Empurrar Atrás (Lento)", message_ES: "Empujar Atrás (Lento)", message: "Back" },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 3000] }
		],
		"s-3201-1000-111-0": [{ type: "text", sub_type: "message", message_PT: "Spray Atrás (Lento)", message_ES: "Spray Atrás (Lento)", message: "Back Wave" },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 3000] }
		],
		"s-3201-1000-112-0": [{ type: "text", sub_type: "message", message_PT: "<-Spray ESQUERDO e DIREITO-> lento", message_ES: "<-Spray IZQUIERDO e DERECHO->", message: "Left + Right" }],
		"s-3201-1000-112-1": [{ type: "text", sub_type: "message", delay: 1000, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }],	
		"s-3201-1000-113-0": [
			{ type: "text", sub_type: "message", message_PT: "Salto (Lento)", message_ES: "Salto (Lento)", message: "Jump (Slow)" },
			{ type: "text", sub_type: "message", delay: 1500, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-118-0": [
			{ type: "text", sub_type: "message", message_PT: "Salto (Lento)", message_ES: "Salto (Lento)", message: "Jump (Slow)" },
			{ type: "text", sub_type: "message", delay: 1900, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-119-0": [{ type: "text", sub_type: "message", delay: 0, message_PT: "Spray FRENTE e ATRÁS", message_ES: "Spray FRENTE e ATRÁS", message: "Back + Front" },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },	 //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }	 //Adicionado
		],
		//"s-3201-1000-121-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Right", message_RU: "Право" }],
		//"s-3201-1000-122-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Left", message_RU: "Лево" }],
		"s-3201-1000-124-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Stun attack", message_RU: "Стан (фаст)" }],
		"s-3201-1000-127-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Empurrar Atrás (Rápido)", message_ES: "Empujar Atrás (Rápido)", message: "Back (fast)" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Empurrar Atrás (Rápido)", message_ES: "Empujar Atrás (Rápido)", message: "Back (fast)" },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 2000] },	 //Adicionado
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 2000] } //Adicionado
		],
		//"s-3201-1000-128-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Triple Attack", message_RU: "Комба" }],
		"s-3201-1000-131-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Spray Atras (Rápido)", message_ES: "Spray Atrás (Rapido)", message: "Back Wave" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Spray Atras (Rápido)", message_ES: "Spray Atrás (Rapido)", message: "Back Wave" },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 2000] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 2000] } //Adicionado
		],
		"s-3201-1000-132-0": [{ type: "text", sub_type: "message", message_PT: "<-Spray ESQUERDO e DIREITO-> rapido", message_ES: "<-Spray IZQUIERDO e DERECHO->", message: "Left + Right" }],	
		"s-3201-1000-132-1": [{ type: "text", sub_type: "message", delay: 500, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }],
		
		"s-3201-1000-133-0": [
			{ type: "text", sub_type: "message", delay: 0, message_PT: "Salto (Rápido)", message_ES: "Salto (Rapido)", message: "Jump (Fast)" },
			{ type: "text", sub_type: "message", delay: 500, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-138-0": [{ type: "text", sub_type: "message", delay: 0, message_PT: "Salto (Rapido)", message_ES: "Salto (Rapido)", message: "Jump P (Fast)" },
			{ type: "text", sub_type: "message", delay: 500, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-139-0": [
			{ type: "text", sub_type: "message", message_PT: "Spray FRENTE e ATRÁS (Rápido)", message_ES: "Spray FRENTE e ATRÁS (Rapido)", message: "Back + Front (Fast)" },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },	 //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }	 //Adicionado
		],
		"s-3201-1000-143-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Esquerda > Direita", message_ES: "Izquierda > Derecha", message: "Left > Right" },
			{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Direita > Esquerda", message_ES: "Derecha > Izquierda", message: "Right > Left" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Direita > Esquerda", message_ES: "Derecha > Izquierda", message: "Right > Left" },
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2715, true, null] },	// 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2800, 4175, true, null] }, // 6
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] },	// 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] },	 // 7
			{ type: "spawn", func: "point", args: [476, 235, 300, 0, 5715] } // Safe
		],
		"s-3201-1000-145-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Esquerda > Direita", message_ES: "Izquierda > Derecha", message: "Left > Right" },
			{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Direita > Esquerda", message_ES: "Derecha > Izquierda", message: "Right > Left" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Direita > Esquerda", message_ES: "Derecha > Izquierda", message: "Right > Left" },
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] },	// 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] }, // 7
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2000, true, null] },	// 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2500, 5000, true, null] },	 // 6
			{ type: "spawn", func: "point", args: [476, 235, 300, 0, 5715] } // Safe
		],
		"s-3201-1000-148-0": [
			{ type: "text", sub_type: "message", message_PT: "Mão DIREITA (Voando)", message_ES: "Mano Derecha (Volando)", message: "Right Hand (Flying)" },
			{ type: "spawn", func: "circle", args: [false, 553, 20, 150, 10, 320, 0, 4000] }  //Adicionado
		],
		"s-3201-1000-149-0": [
			{ type: "text", sub_type: "message", message_PT: "Mão ESQUERDA (Voando)", message_ES: "Mano Izquierda (Volando)", message: "Left Hand (Flying)" },
			{ type: "spawn", func: "circle", args: [false, 553, 340, 150, 10, 320, 0, 4000] }  //Adicionado
		],
		"s-3201-1000-151-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Stun", message_ES: "Ataque Stun", message: "Stun Attack!" }],
		"s-3201-1000-305-0": [{ type: "text", sub_type: "message", message_PT: "Pizza", message_ES: "Pizza", message: "Pizza" }],
		"s-3201-1000-311-0": [
			{ type: "text", sub_type: "message", message_PT: "Repelir Full (Lento)", message_ES: "Repeler Full (Lento)", message: "Repel Full (Slow)" },
			{ type: "text", sub_type: "message", delay: 4000, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-312-0": [
			{ type: "text", sub_type: "message", message_PT: "Repelir Full (Rápido)", message_ES: "Repeler Full (Rápido)", message: "Repel Full (Fast)" },
			{ type: "text", sub_type: "message", delay: 2000, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-313-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR e ENTRAR (Lento)", message_ES: "SALIR y ENTRAR (Lento)", message: "Circles (Slow)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],
		"s-3201-1000-314-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR e ENTRAR (Rápido)", message_ES: "SALIR y ENTRAR (Rápido)", message: "Circles (Fast)" },
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
			{ type: "text", delay: 52000, sub_type: "notification", message_PT: "[c=#ff6600]REAL[/c] Debuff em 5 segundos", message_ES: "[c=#ff6600]REAL[/c] Debuff en 5 Secundos", message: "[c=#ff6600]TRUE[/c] Debuff in 5 seconds" },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 1, func: () => boss = null },
				{ type: "text", check_func: () => boss === 1, sub_type: "message", message_PT: "Recarregar Debuff", message_ES: "Cargar Debuff", message: "Debuff reload" }
			] }
		],
		"am-3201-2000-32010220": [
			{ type: "func", func: () => { boss = 0; } },
			{ type: "text", delay: 52000, sub_type: "notification", message_PT: "[c=#ba2a02]FAKE[/c] Debuff em 5 segundos", message_ES: "[c=#ba2a02]FAKE[/c] Debuff en 5 Secundos", message: "[c=#ba2a02]FALSE[/c] Debuff in 5 seconds" },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 0, func: () => boss = null },
				{ type: "text", check_func: () => boss === 0, sub_type: "message", message_PT: "Recarregar Debuff", message_ES: "Cargar Debuff", message: "Debuff reload" }
			] }
		],
		"am-3201-320121-32010222": [{ type: "text", sub_type: "notification", message_PT: "Spike em 5 Segundos", message_ES: "Spike en 5 Secondos", message: "Spike in 5 seconds" }],
		"h-3201-2000-81": [{ type: "text", sub_type: "message", message_PT: "80%", message_ES: "80%", message: "80%" }],
		"h-3201-2000-76": [{ type: "text", sub_type: "message", message_PT: "75%", message_ES: "75%", message: "75%" }],
		"s-3201-2000-108-0": [
			{ type: "text", sub_type: "message", message_PT: "Ataque Frente | Atrás", message_ES: "Ataque Frente | Atrás", message: "Back Attack!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 155, 20, 110, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 163, 1000, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 197, 1000, 2000, 2000] }
		],
		"s-3201-2000-150-0": [{ type: "text", sub_type: "message", message_PT: "Fantasma", message_ES: "Fantasma", message: "Phantom" }],
		"s-3201-2000-228-0": [
			{ type: "text", sub_type: "message", message_PT: "Juntar Time", message_ES: "Juntar Time", message: "Team Up!!!" },
			{ type: "text", sub_type: "alert", delay: 3500, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe" }
		],
		"s-3201-2000-230-0": [{ type: "text", sub_type: "message", message_PT: "AOE", message_ES: "AOE!!", message: "AOE!!" },
			{ type: "text", sub_type: "alert", delay: 1150, message_PT: "Iframe", message_ES: "Iframe", message: "Iframe" }
		],
		"s-3201-2000-231-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_ES: "SALIR", message: "Out Safe" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3201-2000-232-0": [
			{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_ES: "ENTRAR", message: "In Safe" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		],
		"s-3201-2000-236-0": [{ type: "text", sub_type: "message", message_PT: "Repelir a Frente (Bait)", message_ES: "Repelir a Frente (Bait)", message: "Counter Attack (Bait)" }],
		"s-3201-2000-238-0": [
			{ type: "text", sub_type: "message", message_PT: "Sair > Entrar", message_ES: "Salir > Entrar", message: "Out > In" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3201-2000-239-0": [
			{ type: "text", sub_type: "message", message_PT: "Entrar > Sair", message_ES: "Entrar > Salir", message: "In > Out" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		]
	};
};