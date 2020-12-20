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
		//"s-3201-1000-103-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Dodge", message_RU: "Эвейд!" }],
		"s-3201-1000-104-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Stun Frontal", message_RU: "Стан!" }],
		"s-3201-1000-107-0": [
			{ type: "text", sub_type: "message", message_PT: "Empurrar Atras (Lento)", message_RU: "|Полоса|" },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 3500] },  //Adicionado
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 3500] } //Adicionado
		],

		"s-3201-1000-111-0": [{ type: "text", sub_type: "message", message_PT: "Spray Atras (Lento)", message_RU: "Волна назад" },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 3500] },  //Adicionado
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 3500] }  //Adicionado
		],
		"s-3201-1000-112-0": [{ type: "text", sub_type: "message", message_PT: "<-Spray ESQUERDO e DIREITO->", message_RU: "Лево + Право" }],
		"s-3201-1000-113-0": [
			{ type: "text", sub_type: "message", message_PT: "Salto (Lento)", message_RU: "Прыжок" },
			{ type: "text", sub_type: "message", delay: 1900, message_PT: "Iframe", message_RU: "Камень!" }
		],
		"s-3201-1000-118-0": [
			{ type: "text", sub_type: "message", message_PT: "Salto (Lento)", message_RU: "Прыжок" },
			{ type: "text", sub_type: "message", delay: 1900, message_PT: "Iframe", message_RU: "Камень!" },
		],
		"s-3201-1000-119-0": [{ type: "text", sub_type: "message", delay: 0, message_PT: "Spray FRENTE e ATRAS", message_RU: "Вперед + Назад" },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },  //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }  //Adicionado
	    ],
		//"s-3201-1000-121-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Right", message_RU: "Право" }],
		//"s-3201-1000-122-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Left", message_RU: "Лево" }],
		"s-3201-1000-124-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Stun Frontal", message_RU: "Стан (фаст)" }],
		"s-3201-1000-127-0": [{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Empurrar Atras (Rapido)", message_RU: "Полоса (фаст)" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Empurrar Atras (Rapido)", message_RU: "Полоса (фаст)" },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 2000] },  //Adicionado
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 2000] } //Adicionado
		],
		//"s-3201-1000-128-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Triple Attack", message_RU: "Комба" }],
		"s-3201-1000-131-0": [{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Spray Atras (Rapido)", message_RU: "Волна назад (фаст)" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Spray Atras (Rapido)", message_RU: "Волна назад (фаст)" },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 2000] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 2000] } //Adicionado
		],
		"s-3201-1000-132-0": [{ type: "text", sub_type: "message", message_PT: "<-Spray ESQUERDO e DIREITO->", message_RU: "Лево + Право (фаст)" }],
		"s-3201-1000-133-0": [{ type: "text", sub_type: "message", delay: 0, message_PT: "Salto (Rapido)", message_RU: "Прыжок (фаст)" },
		{ type: "text", sub_type: "message", delay: 900, message_PT: "Iframe", message_RU: "Камень!" }
		],
		"s-3201-1000-138-0": [{ type: "text", sub_type: "message", delay: 0, message_PT: "Salto (Rapido)", message_RU: "Прыжок (фаст)" },
		{ type: "text", sub_type: "message", delay: 900, message_PT: "Iframe", message_RU: "Камень!" }
		],
		"s-3201-1000-139-0": [{ type: "text", sub_type: "message", message_PT: "Spray FRENTE e ATRAS (Rapido)", message_RU: "Вперед + Назад (фаст)" },
		    { type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },  //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }  //Adicionado
	    ],
/*		"s-3201-1000-143-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Left > Right", message_RU: "Слева > Справа" },
			{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Right > Left", message_RU: "Справа > Слева" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Right > Left", message_RU: "Справа > Слева" },
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2715, true, null] },  // 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2800, 4175, true, null] }, // 6
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] },   // 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] }  // 7
		],
		"s-3201-1000-145-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Left > Right", message_RU: "Слева > Справа" },
			{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Right > Left", message_RU: "Справа > Слева" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Right > Left", message_RU: "Справа > Слева" },
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] },   // 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] }, // 7
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2000, true, null] },  // 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2500, 5000, true, null] }  // 6
		],*/
		"s-3201-1000-148-0": [{ type: "text", sub_type: "message", message_PT: "Poder da Mao DIREITA (voando)", message_RU: "Правая рука (подлет)" },
			{ type: "spawn", func: "circle", args: [false, 553, 20, 150, 10, 320, 0, 4000] }  //Adicionado
		],		
		"s-3201-1000-149-0": [{ type: "text", sub_type: "message", message_PT: "Poder da Mao ESQUERDA (voando)", message_RU: "Левая рука (подлет)" },
			{ type: "spawn", func: "circle", args: [false, 553, 340, 150, 10, 320, 0, 4000] }  //Adicionado
		],
		"s-3201-1000-151-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Stun", message_RU: "Стан!" }],
		"s-3201-1000-305-0": [{ type: "text", sub_type: "message", message_PT: "Pizza", message_RU: "Pizza" }],
		"s-3201-1000-311-0": [
			{ type: "text", sub_type: "message", message_PT: "Ataque em Tela Cheia (Lento)", message_RU: "Правая рука (подлет)" },
			{ type: "text", sub_type: "message", delay: 4200, message_PT: "Iframe", message_RU: "Откид!" }
		],
		"s-3201-1000-312-0": [
			{ type: "text", sub_type: "message", message_PT: "Ataque em Tela Cheia (Radio)", message_RU: "Правая рука (подлет)" },
			{ type: "text", sub_type: "message", delay: 2200, message_PT: "Iframe", message_RU: "Откид!" }
		],
		"s-3201-1000-313-0": [
			{ type: "text", sub_type: "message", message_PT: "DENTRO e FORA (Lento)", message_RU: "Кольцо" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],
		"s-3201-1000-314-0": [
			{ type: "text", sub_type: "message", message_PT: "DENTRO e FORA (Rapido)", message_RU: "Кольцо (фаст)" },
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
			{ type: "text", delay: 52000, sub_type: "alert", message_PT: "REAL Debuff em 5 segundos", message_RU: "Правда через 5 сек." },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 1, func: () => boss = null },
				{ type: "text", check_func: () => boss === 1, sub_type: "message", message_RU: "Смена дебаффа", message_PT: "Recarregar Debuff" }
			] }
		],
		"am-3201-2000-32010220": [
			{ type: "func", func: () => { boss = 0; } },
			{ type: "text", delay: 52000, sub_type: "alert", message_PT: "FAKE Debuff em 5 segundos", message_RU: "Ложь через 5 сек." },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 0, func: () => boss = null },
				{ type: "text", check_func: () => boss === 0, sub_type: "message", message_RU: "Смена дебаффа", message_PT: "Recarregar Debuff" }
			] }
		],
		"h-3201-2000-81": [{ type: "text", sub_type: "message", message_PT: "80%", message_RU: "Дебафф" }],
		"h-3201-2000-76": [{ type: "text", sub_type: "message", message_PT: "75%", message_RU: "Камни" }],
		"s-3201-2000-108-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Frente | Atras", message_RU: "Откид назад!" }],
		"s-3201-2000-150-0": [{ type: "text", sub_type: "message", message_PT: "Fantasma", message_RU: "Фантом" }],
		"s-3201-2000-228-0": [
			{ type: "text", sub_type: "message", message_PT: "Juntar Time", message_RU: "Камни (вместе)!!!" },
			{ type: "text", sub_type: "message", delay: 4000, message_PT: "ESQUIVA", message_RU: "Эвейд" }
		],
		"s-3201-2000-230-0": [{ type: "text", sub_type: "message", message_PT: "AOE", message_RU: "AOE!!" }],

		"s-3201-2000-231-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_RU: "От него" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3201-2000-232-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_RU: "К нему" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		],
		"s-3201-2000-235-0": [{ type: "text", sub_type: "message", message_PT: "Debuffs", message_RU: "注视2人吃鉴定" }],
		"s-3201-2000-236-0": [{ type: "text", sub_type: "message", message_PT: "Repelir a Frente", message_RU: "Конус вперед (байт)" }]
    };
};