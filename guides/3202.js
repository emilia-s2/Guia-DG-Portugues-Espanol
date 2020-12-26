// Draakon Arena (Hard)
//
// made by Kuroine / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-3202-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		// Ress bait / range check
		"s-3202-1000-107-0": [{ type: "text", sub_type: "message", message_PT: "Arremesso Spectral", message_RU: "Спектральный бросок (байт)" },
		    { type: "text", sub_type: "message", delay: 1390, message_PT: "Iframe!", message_RU: "Эвейд!" }
        ],
		// Basic attacks
		"s-3202-1000-103-0": [{ type: "text", sub_type: "message", message_PT: "2 Hits | Sangrar", message_RU: "2 удара | Кровоток" }],
		"s-3202-1000-113-0": [{ type: "text", sub_type: "message", message_PT: "4 Hits Combo", message_RU: "4 удара комба" }],
		"s-3202-1000-105-0": [{ type: "text", sub_type: "message", message_PT: "Gancho | Stun", message_RU: "Удар снизу | Стан" }],
		"s-3202-1000-106-0": [{ type: "text", sub_type: "message", message_PT: "Stun", message_RU: "Стан" }],
		// 120 > 114
		"s-3202-1000-120-0": [
		    { type: "text", sub_type: "message", delay: 400, message_PT: "Stun", message_RU: "Несколько ударов | Стан (AOE)" },
			{ type: "text", sub_type: "message", delay: 2100, message_PT: "Iframe!", message_RU: "Эвейд!" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 8, 425, 100, 3000] }
		],
//		"s-3202-1000-114-0": [
//			{ type: "text", sub_type: "message", message_PT: "Stun (AOE)", message_RU: "Стан (AOE)" },

		"s-3202-1000-111-0": [{ type: "text", sub_type: "message", message_PT: "Salto (Stun)", message_RU: "Прыжок (стан)" },
			{ type: "text", sub_type: "message", delay: 1800, message_PT: "Iframe!", message_RU: "Эвейд!" }
		],
		"s-3202-1000-115-0": [
			{ type: "text", sub_type: "message", message_PT: "AOE Bombas (Juntar)", message_RU: "AOE бомбы (вместе)" }
//			{ type: "text", sub_type: "message", delay: 3000, message_PT: "Gather!", message_RU: "Собраться!" }
		],
		"s-3202-1000-112-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente | Atras Chute", message_RU: "Разворот | Откид назад" },
			{ type: "spawn", func: "vector", args: [553, 70, 110, 160, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 290, 110, -160, 350, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 210, 360, 0, 3000] },
    		{ type: "spawn", func: "point", args: [553, 200, 350, 0, 3000] },
            { type: "spawn", func: "point", args: [553, 190, 343, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 150, 360, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 160, 350, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 170, 343, 0, 3000] },
            { type: "spawn", func: "point", args: [553, 180, 340, 0, 3000] }
		],
		"s-3202-1000-110-0": [
			{ type: "text", sub_type: "message", message_PT: "Onda DENTRO", message_RU: "Бублики + Волна" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 650, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 4000] }
		],
		"s-3202-1000-109-0": [
			{ type: "text", sub_type: "message", message_PT: "Derrubar + Girar", message_RU: "Опрокид + Крутилка" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 100, 8, 420, 0, 1000] },
			{ type: "spawn", func: "circle", delay: 1000, args: [true, 553, 180, 0, 8, 415, 0, 3000] }
		],
		"s-3202-1000-304-0": [{ type: "text", sub_type: "message", message_PT: "ESCUDO!", message_RU: "ЩИТ!" }],
		"ab-3202-1000-31021006": [
		    { type: "text", sub_type: "message", message_PT: "Plague of Exhaustion", message_RU: "Чума/регресс", class_position: "priest" },
			{ type: "text", sub_type: "message", message_PT: "Regression", message_RU: "Чума/регресс", class_position: "mystic" }
		],	

		// Pizza + Donuts (outward waves)
		"s-3202-1000-121-0": [
			{ type: "text", sub_type: "message", message_PT: "Pizza Pe Direito + Onda DENTRO", message_RU: "Пицца (правая нога) | Волны наружу: От него > К нему" },
//			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
//			{ type: "spawn", func: "semicircle", args: [-60, 70, 912, 0, 0, 8, 450, 0, 4000] },
//			{ type: "spawn", func: "semicircle", args: [120, 250, 912, 0, 0, 8, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 60, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 120, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 240, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 300, 450, 0, 4000] }
//			{ type: "text", sub_type: "message", delay: 1900, message_PT: "Dodge!", message_RU: "Эвейд!" }
		],
		"s-3202-1000-122-0": [{ type: "spawn", func: "marker", args: [false, 0, 100, 500, 3000, true, null] }],
		"s-3202-1000-123-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 295, 550, 0, 1500] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 85, 550, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [85, 295, 553, 0, 0, 6, 550, 0, 1500] },
			{ type: "text", sub_type: "message", delay:100, message_PT: "Onda DENTRO", message_RU: "[Волны наружу: От него > К нему]" }
		],
		"s-3202-1000-127-0": [
//			{ type: "text", sub_type: "message", message_PT: "Out-waves: Stay Out > Get In", message_RU: "Волны наружу: От него > К нему" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 18, 157, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 330, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 6, 650, 0, 3000] }
		],
		// Pizza + Donuts (inward waves)
		"s-3202-1000-124-0": [
			{ type: "text", sub_type: "message", message_PT: "Pizza Pe Esquerdo + Onda FORA", message_RU: "Пицца (левая нога) | Волны внутрь: К нему > От него" },
//			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
//			{ type: "spawn", func: "semicircle", args: [-60, 70, 912, 0, 0, 8, 450, 0, 4000] },
//			{ type: "spawn", func: "semicircle", args: [120, 250, 912, 0, 0, 8, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 60, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 120, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 240, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 300, 450, 0, 4000] }
//			{ type: "text", sub_type: "message", delay: 1900, message_PT: "Dodge!", message_RU: "Эвейд!" }
		],
		"s-3202-1000-125-0": [{ type: "spawn", func: "marker", args: [false, 0, 300, 500, 3000, true, null] }],
		"s-3202-1000-126-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 295, 550, 0, 1500] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 85, 550, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [85, 295, 553, 0, 0, 6, 550, 0, 1500] },
			{ type: "text", sub_type: "message", delay:100, message_PT: "Onda FORA", message_RU: "[Волны внутрь: К нему > От него]" }
		],
		"s-3202-1000-128-0": [
//			{ type: "text", sub_type: "message", message_PT: "In-waves: Stay In > Get Out", message_RU: "Волны внутрь: К нему > От него" },
//			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 14, 160, 0, 3000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 330, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 650, 0, 3000] }
		]
	};
};