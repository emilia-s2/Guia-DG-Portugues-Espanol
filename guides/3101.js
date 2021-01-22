// Gossamer Vault Normal
// made by michengs/Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	let boss = null;

	return {
	// 1 BOSS

		"nd-3101-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3101-1000-104-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Stun Frontal", message_RU: "Стан!" }],
		"s-3101-1000-112-0": [{ type: "text", sub_type: "message", message_PT: "<-Spray ESQUERDO e DIREITO->", message_RU: "Лево + Право" }],
		"s-3101-1000-119-0": [{ type: "text", sub_type: "message", delay: 0, message_PT: "Spray FRENTE e ATRÁS", message_RU: "Вперед + Назад" }],
		"s-3101-1000-124-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Stun Frontal", message_RU: "Стан (фаст)" }],
		"s-3101-1000-127-0": [{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Empurrar Atrás (Rapido)", message_RU: "Полоса (фаст)" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Empurrar Atrás", message_RU: "Полоса (фаст)" },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 2000] },  //Adicionado
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 2000] } //Adicionado
		],
		"s-3101-1000-131-0": [{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Spray Atrás", message_RU: "Волна назад (фаст)" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Spray Atrás ", message_RU: "Волна назад (фаст)" },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 2000] }, //Adicionado
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 2000] } //Adicionado
		],
		"s-3101-1000-132-0": [{ type: "text", sub_type: "message", message_PT: "<-Spray ESQUERDO e DIREITO->", message_RU: "Лево + Право (фаст)" }],
		"s-3101-1000-133-0": [{ type: "text", sub_type: "message", delay: 0, message_PT: "Salto", message_RU: "Прыжок (фаст)" },
		{ type: "text", sub_type: "message", delay: 700, message_PT: "Iframe", message_RU: "Камень!" }
		],
		"s-3101-1000-138-0": [{ type: "text", sub_type: "message", delay: 0, message_PT: "Salto", message_RU: "Прыжок (фаст)" },
		{ type: "text", sub_type: "message", delay: 700, message_PT: "Iframe", message_RU: "Камень!" }
		],
		"s-3101-1000-148-0": [{ type: "text", sub_type: "message", message_PT: "Poder da Mao DIREITA (voando)", message_RU: "Правая рука (подлет)" },
			{ type: "spawn", func: "circle", args: [false, 553, 20, 150, 10, 300, 0, 4000] }  //Adicionado
		],		
		"s-3101-1000-149-0": [{ type: "text", sub_type: "message", message_PT: "Poder da Mao ESQUERDA (voando)", message_RU: "Левая рука (подлет)" },
			{ type: "spawn", func: "circle", args: [false, 553, 340, 150, 10, 300, 0, 4000] }  //Adicionado
		],
		"s-3101-1000-151-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Stun", message_RU: "Стан!" }],
		"s-3101-1000-313-0": [
			{ type: "text", sub_type: "message", message_PT: "DENTRO e FORA (Lento)", message_RU: "Кольцо" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],
		"s-3101-1000-314-0": [
			{ type: "text", sub_type: "message", message_PT: "DENTRO e FORA (Rapido)", message_RU: "Кольцо (фаст)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],

	// 2 BOSS
	"nd-3101-2000": [
		{ type: "stop_timers" },
		{ type: "despawn_all" }
        ],
		"h-3101-2000-81": [{ type: "text", sub_type: "message", message_PT: "80%", message_RU: "Дебафф" }],
		"h-3101-2000-76": [{ type: "text", sub_type: "message", message_PT: "75%", message_RU: "Камни" }],
		"s-3101-2000-108-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Frente | Atras", message_RU: "Откид назад!" }],
		"s-3101-2000-150-0": [{ type: "text", sub_type: "message", message_PT: "Fantasma", message_RU: "Фантом" }],
		"s-3101-2000-228-0": [
			{ type: "text", sub_type: "message", message_PT: "Juntar Time", message_RU: "Камни (вместе)!!!" },
		],
		"s-3101-2000-230-0": [{ type: "text", sub_type: "message", message_PT: "AOE", message_RU: "AOE!!" }],
		"s-3101-2000-231-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR", message_RU: "От него" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3101-2000-232-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_RU: "К нему" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		],
		"s-3101-2000-235-0": [{ type: "text", sub_type: "message", message_PT: "Debuffs", message_RU: "注视2人吃鉴定" }],
		"s-3101-2000-236-0": [{ type: "text", sub_type: "message", message_PT: "Repelir a Frente", message_RU: "Конус вперед (байт)" }]
    };
};