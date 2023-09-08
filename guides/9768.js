// Shadow Sanguinary
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let thirdboss_print_combo = true;
	let thirdboss_print_bait = true;
	let thirdboss_combo_count = 0;

	function secondboss_floor_event(one, two) {
		if (one && two) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza", message_PT: "Pizza" },
				{ type: "spawn", func: "marker", args: [false, one * 45 - 22, 500, 0, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 - 45, 750, 0, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45, 750, 0, 5000] },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 330, 0, 7000] },
				{ type: "spawn", func: "marker", args: [false, two * 45 - 22, 300, 8000, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 - 45, 750, 8000, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45, 750, 8000, 5000] }
			]);
		}
	}

	return {
		// 1 BOSS
		"nd-768-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-768-1000-102-0": [{ type: "text", sub_type: "message", message: "Turn Attack", message_ES: "Ataque en Vuelta", message_PT: "Ataque em Volta" }],
		"s-768-1000-106-0": [{ type: "text", sub_type: "message", message: "Three Combo", message_ES: "Tres Combo", message_PT: "Três Combo" }],
		"s-768-1000-107-0": [{ type: "text", sub_type: "message", message: "Front Combo", message_ES: "Frente Combo", message_PT: "Frente Combo" }],
		"s-768-1000-301-0": [{ type: "text", sub_type: "message", message: "Wave Front", message_ES: "Ola Frontal", message_PT: "Onda Frente" }],
		"s-768-1000-304-0": [{ type: "text", sub_type: "message", message: "Strike (Target)", message_ES: "Strike (Objetivo)", message_PT: "Strike (Alvo)" }],
		"s-768-1000-304-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 700 }],
		"s-768-1000-305-0": [{ type: "text", sub_type: "message", message: "8 explosions", message_ES: "8 Explosiones", message_PT: "8 Explosões" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 210, 22, 140, 0, 5000] },//1 front 
			{ type: "spawn", func: "circle", args: [false, 445, 0, -230, 22, 140, 0, 5000] },//2 back
			{ type: "spawn", func: "circle", args: [false, 476, 90, -230, 22, 140, 0, 3000] },//3 left
			{ type: "spawn", func: "circle", args: [false, 553, 270, -230, 22, 140, 0, 3000] },//4 right
			{ type: "spawn", func: "circle", args: [false, 912, 315, 360, 14, 220, 1000, 5000] },//1 front left big
			{ type: "spawn", func: "circle", args: [false, 553, 135, 360, 14, 220, 1000, 5000] },//2 back right big
			{ type: "spawn", func: "circle", args: [false, 445, 45, 360, 14, 220, 1000, 4000] },//3 front right big
			{ type: "spawn", func: "circle", args: [false, 476, 225, 360, 14, 220, 1000, 3500] }//4 back left big
		],	
		"s-768-1000-306-0": [{ type: "text", sub_type: "message", message: "Stones", message_ES: "Piedras", message_PT: "Pedras" }], // 306 -> 307

		// 2 BOSS
		"nd-768-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-768-2000-101-0": [{ type: "text", sub_type: "message", message: "Fireball", message_ES: "Bola de Fuego", message_PT: "Bola de Fogo" }],
		"s-768-2000-102-0": [{ type: "text", sub_type: "message", message: "Drain", message_ES: "Drenar", message_PT: "Drenar" }],
		"s-768-2000-103-0": [{ type: "text", sub_type: "message", message: "Explosion", message_ES: "Explosion", message_PT: "Explosão" }],
		"s-768-2000-104-0": [{ type: "text", sub_type: "message", message: "Dark Frame", message_ES: "Dark Frame", message_PT: "Dark Frame" }],
		"s-768-2000-110-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_ES: "Frente Ataque", message_PT: "Frente Ataque" }],
		"s-768-2000-111-0": [{ type: "text", sub_type: "message", message: "360", message_ES: "360", message_PT: "360" }], // 114 -> 111
		"s-768-2000-112-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_ES: "Atrás Ataque", message_PT: "Atrás Ataque" }],
		"s-768-2000-117-0": [{ type: "text", sub_type: "message", message: "Laser (Target)", message_ES: "Lase (Objetivo)", message_PT: "Laser (Alvo)" }],
		"s-768-2000-117-2": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 600 }],
		"s-768-2000-118-0": [{ type: "text", sub_type: "message", message: "Laser", message_ES: "Laser", message_PT: "Laser" }],
		"s-768-2000-307-0": [{ type: "text", sub_type: "message", message: "Donut", message_ES: "Donut", message_PT: "Donut" }],
		"s-768-2000-501-0": [{ type: "text", sub_type: "message", message: "Charging", message_ES: "Cargando", message_PT: "Carregando" }],
		"s-768-2000-301-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-768-2000-302-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-768-2000-303-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-768-2000-304-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 1-4-2-3-5
		"s-768-2000-305-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 4-2-5-1-3
		"s-768-2000-306-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 5-1-4-3-2
		"s-768-2000-310-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-768-2000-311-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-768-2000-312-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],

		// 3 BOSS
		"nd-768-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//
		"s-768-3000-101-0": [
			{ type: "event", check_func: () => thirdboss_print_combo, args: [
				{ type: "text", sub_type: "message", message: "Combo soon", message_ES: "Combo Pronto", message_PT: "Combo em Breve" },
				{ type: "func", func: () => thirdboss_print_combo = false },
				{ type: "func", func: () => thirdboss_print_combo = true, delay: 12000 }
			] }
		],
		"s-768-3000-102-0": "s-768-3000-101-0",
		//
		"s-768-3000-130-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "Izquierda", message_PT: "Esquerda" },
			{ type: "func", func: () => thirdboss_combo_count++ }
		],
		"s-768-3000-105-0": [ // 130 -> 105
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-768-3000-106-0": [ // 128 -> 106
			{ type: "text", sub_type: "message", message: "Back", message_ES: "Atrás", message_PT: "Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 12, 270, 0, 2600] },
			{ type: "func", func: () => thirdboss_combo_count++ }
		],
		"s-768-3000-131-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha", message_PT: "Direita" },
			{ type: "func", func: () => thirdboss_combo_count++ }
		],
		"s-768-3000-107-0": [ // 131 -> 107
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-768-3000-108-0": [ // 129 > 108
			{ type: "text", sub_type: "message", message: "Front", message_ES: "Frente", message_PT: "Frente" },
			{ type: "func", func: () => thirdboss_combo_count++ }
		],
		"s-768-3000-109-0": "s-768-3000-106-0",
		//
		"s-768-3000-110-0": [{ type: "text", sub_type: "message", message: "Back Move", message_ES: "Movimiento Atrás", message_PT: "Movimento Atrás" }],
		"s-768-3000-111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_ES: "360 Ataque", message_PT: "360 Ataque" }],
		"s-768-3000-114-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Jalar", message_PT: "Puxar" }], // 114 -> 111
		"s-768-3000-115-0": [{ type: "text", sub_type: "message", message: "Circles", message_ES: "Círculos", message_PT: "Círculos" }], // 202/205 -> 115
		"s-768-3000-115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 150 }],
		"s-768-3000-117-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" }], // 503 -> 117
		"s-768-3000-134-0": [ // qb 468052 -> 134
			{ type: "text", sub_type: "message", message: "Inner + AoE", message_ES: "Interno + AoE", message_PT: "Interno + AoE" },
			{ type: "text", sub_type: "message", message: "Get Debuff", message_ES: "Obtener Debuff", message_PT: "Pegar Debuff", class_position: "heal", delay: 2000 },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 14, 175, 0, 1500] }
		],
		"s-768-3000-134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-768-3000-136-0": [{ type: "text", sub_type: "message", message: "Donut", message_ES: "Donut", message_PT: "Donut" }], // 135 -> 136
		"s-768-3000-202-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_ES: "Lanzar Objetivo", message_PT: "Arremesso Ao Alvo" }], // 503 -> 201 -> 202
		"s-768-3000-205-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_ES: "Lanzar Objetivo", message_PT: "Arremesso Ao Alvo" }], // 503 -> 117 -> 203 -> 204 -> 205
		"s-768-3000-206-0": [{ type: "text", sub_type: "message", message: "Pike (Target)", message_ES: "Lanza (Objetivo)", message_PT: "Lança (Alvo)" }], // 206 -> 207
		"s-768-3000-302-0": [
			{ type: "text", sub_type: "message", message: "Bait (Target)", message_ES: "Bait (Objetivo)", message_PT: "Bait (Alvo)" },
			{ type: "func", func: () => thirdboss_combo_count = 0 }
		],
		"s-768-3000-302-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1600 }],
		"s-768-3000-501-0": [
			{ type: "text", sub_type: "message", message: "Cage", message_ES: "Jaula", message_PT: "Prisão" }
		],
		"s-768-3000-502-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE", message_PT: "АоЕ" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 3000] }
		],
		"s-768-3000-503-0": [{ type: "text", sub_type: "message", message: "Target Lockon", message_ES: "Fijado Objetivo", message_PT: "Trancar Alvo" }], // qb 468050 -> 503
		"s-768-3000-504-0": [{ type: "text", sub_type: "message", message: "Mobs Summon", message_ES: "Sumonar Mobs", message_PT: "Sumonar Mobs" }],
		// "s-768-3000-508-0": [{ type: "text", sub_type: "message", message: "Buff" }],
		"dm-0-0-9768013": [
			{ type: "text", sub_type: "notification", message: "Ready to Shield", message_ES: "Listo Para el Escudo", message_PT: "Pronto Para o Escudo", speech: false },
			{ type: "text", sub_type: "alert", message: "Ready to Shield", message_ES: "Listo Para el Escudo", message_PT: "Pronto Para o Escudo" }
		],
		//
		"give_bait": [
			{ type: "event", check_func: () => thirdboss_print_bait, args: [
				{ type: "text", sub_type: "message", message: "Give Bait", message_ES: "Dar Bait", message_PT: "Dê Bait", class_position: "heal" },
				{ type: "func", func: () => thirdboss_print_bait = false },
				{ type: "func", func: () => thirdboss_print_bait = true, delay: 6000 }
			] }
		],
		"give_bait_combo": [
			{ type: "event", check_func: () => thirdboss_combo_count >= 3, args: [
				{ type: "text", sub_type: "message", message: "Give Bait", message_ES: "Dar Bait", message_PT: "Dê Bait", class_position: "heal" },
				{ type: "func", func: () => thirdboss_combo_count = 0 }
			] }
		],
		"e-768-3000-101": "give_bait",
		"e-768-3000-102": "give_bait",
		"e-768-3000-105": "give_bait_combo", // left
		"e-768-3000-106": "give_bait_combo", // back
		"e-768-3000-107": "give_bait_combo", // right
		"e-768-3000-108": "give_bait_combo", // front
		"e-768-3000-111": "give_bait", // 360 attack
		"e-768-3000-114": "give_bait", // pull
		"e-768-3000-115": "give_bait", // circles
		"e-768-3000-117": "give_bait", // jump
		"e-768-3000-202": "give_bait", // target throw
		"e-768-3000-205": "give_bait", // target throw
		"e-768-3000-207": "give_bait", // pike
		"s-768-3000-122-2": "give_bait", // core pattern 1
		"s-768-3000-123-2": "give_bait", // core pattern 2
		"s-768-3000-124-2": "give_bait", // core pattern 3
		"s-768-3000-127-2": "give_bait", // core pattern 4
		"e-768-3000-136": "give_bait", // donut
		"s-768-3000-506-1": "give_bait" // dissipation
	};
};