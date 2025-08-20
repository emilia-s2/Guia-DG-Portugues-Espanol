// Aesir's End - (Normal)
//
// made by Mate

module.exports = (dispatch, handlers, guide, lang) => {

	// let print_stun = true;

	return {
		"nd-2803-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"s-2803-1000-1-0": [{ type: "text", sub_type: "message", message: "Double Base Slash", message_ES: "Doble Base Slash", message_PT: "Base Dupla Slash" }],
		"s-2803-1000-2-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro", message_PT: "Giro" }],
		"s-2803-1000-3-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Knock Up", message_ES: "Tumbar Alto", message_PT: "Derrubar Alto" }],
		"s-2803-1000-4-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Giro", message_PT: "Giro" }],
		"s-2803-1000-5-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun" }],
		"s-2803-1000-6-0": [{ type: "text", sub_type: "message", message: "Double Spinning", message_ES: "Doble Giro", message_PT: "Duplo Giro" }],
		"s-2803-1000-7-0": [
			{ type: "text", sub_type: "message", message: "Pull + KD", message_ES: "Jalar + KD", message_PT: "Puxar + KD", class_position: ["tank", "dps"] },
			{ type: "text", sub_type: "message", message: "Kaia", message_ES: "Kaia", message_PT: "Kaia", class_position: ["mystic", "priest"] }
		],
		"s-2803-1000-8-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Tank Buster", message_ES: "Tank Buster", message_PT: "Tank Buster" }],
		"s-2803-1000-9-0": [{ type: "text", sub_type: "message", message: "DODGE", message_ES: "Iframe", message_PT: "Iframe" }],
		"s-2803-1000-10-0": [{ type: "text", sub_type: "message", message: "Spinning DODGE", message_ES: "Girando Iframe", message_PT: "Girando Iframe" }],
		//"s-2803-1000-111-0": [{ type: "text", sub_type: "message", message: "Roll Back", message_ES: "ESPANOL", message_PT: "Откат" }],
		//"s-2803-1000-112-0": [{ type: "text", sub_type: "message", message: "Gungnir", message_ES: "ESPANOL", message_PT: "Гунгнир" }],
		"s-2803-1000-113-0": [{ type: "text", sub_type: "message", message: "Overhead Slash", message_ES: "Arriba Slash", message_PT: "Acima Slash" }],
		"s-2803-1000-101-0": [{ type: "text", sub_type: "message", message: "SHEILD", message_ES: "SHEILD", message_PT: "SHEILD" }],
		"s-2803-1000-102-0": [{ type: "text", sub_type: "message", message: "PLAGUE/REGRESS", message_ES: "PLAGUE/REGRESS", message_PT: "PLAGUE/REGRESS" }],
		//"s-2803-1000-303-0": [{ type: "text", sub_type: "message", message: "Wipe Calamity Strike - (Stage1)", message_ES: "ESPANOL", message_PT: "Удар бедствия (Этап 1)" }],
		//"s-2803-1000-304-0": [{ type: "text", sub_type: "message", message: "Wipe Calamity Strike - (Stage2)", message_ES: "ESPANOL", message_PT: "Удар бедствия (Этап 2)" }],
		"s-2803-1000-305-0": [{ type: "text", sub_type: "message", message: "RuneBurst", message_ES: "RuneBurst", message_PT: "RuneBurst" }]
		//"s-2803-1000-306-0": [{ type: "text", sub_type: "message", message: "Ragnarok", message_ES: "ESPANOL", message_PT: "Рагнарёк" }],
		//"s-2803-1000-7-0": [{ type: "text", sub_type: "message", message: "Glaive Follow", message_ES: "ESPANOL", message_PT: "Удар копьём" }],
		//"s-2803-1000-308-0": [{ type: "text", sub_type: "message", message: "Shinning Slash", message_ES: "ESPANOL", message_PT: "Сияющий удар" }],
		//"s-2803-1000-309-0": [{ type: "text", sub_type: "message", message: "Shinning AOE", message_ES: "ESPANOL", message_PT: "Сияющая зона" }],
		//"s-2803-1000-310-0": [{ type: "text", sub_type: "message", message: "Twilight 1", message_ES: "ESPANOL", message_PT: "Сумерки 1" }],
		//"s-2803-1000-311-0": [{ type: "text", sub_type: "message", message: "Twilight 2", message_ES: "ESPANOL", message_PT: "Сумерки 2" }],
		//"s-2803-1000-312-0": [{ type: "text", sub_type: "message", message: "Twilight 3", message_ES: "ESPANOL", message_PT: "Сумерки 3" }],
		//"s-2803-1000-313-0": [{ type: "text", sub_type: "message", message: "Twilight 4", message_ES: "ESPANOL", message_PT: "Сумерки 4" }],
		//"s-2803-1000-315-0": [{ type: "text", sub_type: "message", message: "Pizza", message_ES: "ESPANOL", message_PT: "Пицца" }],

		/*"s-2803-1000-315-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_ES: "ESPANOL", message_PT: "Пицца" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1700, message: "Dodge!", message_ES: "ESPANOL", message_PT: "Уклонение!" }
		],

		//"s-2803-1000-316-0": [{ type: "text", sub_type: "message", message: "Pizza - (Inverted)", message_ES: "ESPANOL", message_PT: "Пицца (Обратная)" }],

		/*"s-2803-1000-316-0": [
			{ type: "text", sub_type: "message", message: "Pizza - (Inverted)", message_ES: "ESPANOL", message_PT: "Пицца (Обратная)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1700, message: "Dodge!", message_ES: "ESPANOL", message_PT: "Уклонение!" }
		],

		//"s-2803-1000-401-0": [{ type: "text", sub_type: "message", message: "Valk-Wait", message_ES: "ESPANOL", message_PT: "Валькирия - Ждать" }],
		//"s-2803-1000-501-0": [{ type: "text", sub_type: "message", message: "Last-Stand-Valk", message_ES: "ESPANOL", message_PT: "Последний бой Валькирии" }],
		//"s-2803-1000-1-0": [{ type: "text", sub_type: "message", message: "Double Base Slash", message_ES: "ESPANOL", message_PT: "Двойной базовый удар" }],
		//"s-2803-1000-2-0": [{ type: "text", sub_type: "message", message: "Spin & Slash", message_ES: "ESPANOL", message_PT: "Вращение и удар" }],
		//"s-2803-1000-3-0": [{ type: "text", sub_type: "message", message: "Leaping Strike", message_ES: "ESPANOL", message_PT: "Прыжковый удар" }],
		//"s-2803-1000-2104-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "ESPANOL", message_PT: "Вращение" }],
		//"s-2803-1000-2105-0": [{ type: "text", sub_type: "message", message: "BloodFlower", message_ES: "ESPANOL", message_PT: "Кровавый цветок" }],
		//"s-2803-1000-2106-0": [{ type: "text", sub_type: "message", message: "Slash & Double Spinning Death", message_ES: "ESPANOL", message_PT: "Удар и двойная смертельная спираль" }],
		//"s-2803-1000-2107-0": [{ type: "text", sub_type: "message", message: "DreamSlash", message_ES: "ESPANOL", message_PT: "Мечтательный удар" }],
		//"s-2803-1000-2108-0": [{ type: "text", sub_type: "message", message: "Ground Bash", message_ES: "ESPANOL", message_PT: "Удар по земле" }],
		//"s-2803-1000-2109-0": [{ type: "text", sub_type: "message", message: "Glaive Strike", message_ES: "ESPANOL", message_PT: "Удар копьём" }],
		//"s-2803-1000-2110-0": [{ type: "text", sub_type: "message", message: "Spinning Death 3rd Hit", message_ES: "ESPANOL", message_PT: "Третий удар смертельной спирали" }],
		//"s-2803-1000-2112-0": [{ type: "text", sub_type: "message", message: "Gungnir", message_ES: "ESPANOL", message_PT: "Гунгнир" }],
		//"s-2803-1000-2113-0": [{ type: "text", sub_type: "message", message: "Overhead Slash", message_ES: "ESPANOL", message_PT: "Удар сверху" }],
		//"s-2803-1000-3001-0": [{ type: "text", sub_type: "message", message: "DreamSlash", message_ES: "ESPANOL", message_PT: "Мечтательный удар" }],
		//"s-2803-1000-3002-0": [{ type: "text", sub_type: "message", message: "RuneBurst", message_ES: "ESPANOL", message_PT: "Взрыв рун" }],
		//"s-2803-1000-3003-0": [{ type: "text", sub_type: "message", message: "DreamSlash-Pizza", message_ES: "ESPANOL", message_PT: "Мечтательный удар - Пицца" }],

		"s-2803-1000-315-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_ES: "ESPANOL", message_PT: "Пицца" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1700, message: "Dodge!", message_ES: "ESPANOL", message_PT: "Уклонение!" }
		],

		//"am-3030-1000-99000580": [{ type: "text", sub_type: "message", message: "Hit Thorns", message_ES: "ESPANOL", message_PT: "Шипы" }],

		"nd-3030-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3030-2000-309-0": [
			{ type: "text", sub_type: "message", message: "AOE circles | Stun", message_ES: "ESPANOL", message_PT: "АОЕ круги | Стан", check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 4000 }
		],
		"s-3030-2000-105-0": [
			{ type: "text", sub_type: "message", message: "Laser Frontal (Stun)", message_ES: "ESPANOL", message_PT: "Лазер (стан)", check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 15000 }
		],*/
	};
};