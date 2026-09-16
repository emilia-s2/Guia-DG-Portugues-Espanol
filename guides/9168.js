// Shadow Sanguinary (Hard) (Classic+)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let thirdboss_stacks_count = 0;
	let thirdboss_stacks_timer = null;
	let thirdboss_print_combo = true;
	let thirdboss_print_bait = true;
	let thirdboss_combo_count = 0;
	let thirdboss_combo_last_128 = null;
	let thirdboss_combo_last_129 = null;

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

	function thirdboss_stacks_event(count) {
		thirdboss_stacks_count = count;
		dispatch.clearTimeout(thirdboss_stacks_timer);

		if (count === 0) {
			handlers.event([
				{ type: "text", sub_type: "notification", message: "Stacks removed", message_ES: "Stacks Eliminadas", message_PT: "Stacks Removidos", speech: false },
				{ type: "text", sub_type: "message", message: "Stacks removed", message_ES: "Stacks Eliminadas", message_PT: "Stacks Removidos" }
			]);
		} else {
			thirdboss_stacks_timer = dispatch.setTimeout(() => {
				handlers.event([
					{ type: "text", sub_type: "notification", message: `${count} stacks`, message_ES: "${count} cargas", message_PT: "${count} acúmulos", speech: false },
					{ type: "text", sub_type: "message", message: `${count} stacks`, message_ES: "${count} cargas", message_PT: "${count} acúmulos" }
				]);
			}, 500);
		}
	}

	return {
		// 1 BOSS
		"nd-568-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-568-1000-102-0": [{ type: "text", sub_type: "message", message: "Turn Attack", message_ES: "Ataque Giratorio", message_PT: "Ataque Giratório" }],
		"s-568-1000-106-0": [{ type: "text", sub_type: "message", message: "Three Combo", message_ES: "Combo Triple", message_PT: "Combo Triplo" }],
		"s-568-1000-107-0": [{ type: "text", sub_type: "message", message: "Front Combo", message_ES: "Combo Frontal", message_PT: "Combo Frontal" }],
		"s-568-1000-301-0": [{ type: "text", sub_type: "message", message: "Wave Front", message_ES: "Ola Frontal", message_PT: "Onda Frontal" }],
		"s-568-1000-304-0": [{ type: "text", sub_type: "message", message: "Strike (Target)", message_ES: "Golpe (Objetivo)", message_PT: "Golpe (Alvo)" }],
		"s-568-1000-304-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 700 }],
		"s-568-1000-305-0": [{ type: "text", sub_type: "message", message: "8 explosions", message_ES: "8 Explosiones", message_PT: "8 Explosões" }],
		"s-568-1000-306-0": [{ type: "text", sub_type: "message", message: "Stones", message_ES: "Piedras", message_PT: "Pedras" }], // 306 -> 307

		// 2 BOSS
		"nd-568-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-568-2000-101-0": [{ type: "text", sub_type: "message", message: "Fireball", message_ES: "Bola de Fuego", message_PT: "Bola de Fogo" }],
		"s-568-2000-102-0": [{ type: "text", sub_type: "message", message: "Drain", message_ES: "Drenar", message_PT: "Drenar" }],
		"s-568-2000-103-0": [{ type: "text", sub_type: "message", message: "Explosion", message_ES: "Explosión", message_PT: "Explosão" }],
		"s-568-2000-104-0": [{ type: "text", sub_type: "message", message: "Dark Frame", message_ES: "Llama Sombría", message_PT: "Chama Sombria" }],
		"s-568-2000-110-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_ES: "Ataque Frontal", message_PT: "Ataque Frontal" }],
		"s-568-2000-111-0": [{ type: "text", sub_type: "message", message: "360", message_ES: "360", message_PT: "360" }], // 114 -> 111
		"s-568-2000-112-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_ES: "Ataque Atrás", message_PT: "Ataque Atrás" }],
		"s-568-2000-117-0": [{ type: "text", sub_type: "message", message: "Laser (Target)", message_ES: "Láser (Objetivo)", message_PT: "Laser (Alvo)" }],
		"s-568-2000-117-2": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 600 }],
		"s-568-2000-118-0": [{ type: "text", sub_type: "message", message: "Laser", message_ES: "Láser", message_PT: "Laser" }],
		"s-568-2000-307-0": [{ type: "text", sub_type: "message", message: "Donut", message_ES: "Donut", message_PT: "Donut" }],
		"s-568-2000-501-0": [{ type: "text", sub_type: "message", message: "Charging", message_ES: "Cargando", message_PT: "Carregando" }],
		"s-568-2000-301-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-568-2000-302-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-568-2000-303-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-568-2000-304-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 1-4-2-3-5
		"s-568-2000-305-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 4-2-5-1-3
		"s-568-2000-306-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 5-1-4-3-2
		"s-568-2000-310-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-568-2000-311-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-568-2000-312-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],

		// 3 BOSS
		"nd-568-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-568-3000-60": [{ type: "text", sub_type: "message", message: "60%" }],
		"h-568-3000-40": [{ type: "text", sub_type: "message", message: "40%" }],
		//
		"s-568-3000-101-0": [
			{ type: "event", check_func: () => thirdboss_print_combo, args: [
				{ type: "text", sub_type: "message", message: "Combo soon", message_ES: "Combo Pronto", message_PT: "Combo em Breve" },
				{ type: "func", func: () => thirdboss_print_combo = false },
				{ type: "func", func: () => thirdboss_print_combo = true, delay: 12000 }
			] }
		],
		"s-568-3000-102-0": "s-568-3000-101-0",
		//
		"s-568-3000-128-0": [ // 128 -> 106/130
			{ type: "text", sub_type: "message", message: "Back/Left", message_ES: "ATRÁS / IZQUIERDA", message_PT: "ATRÁS / ESQUERDA", check_func: () => thirdboss_combo_last_128 === null },
			{ type: "text", sub_type: "message", message: "Back", message_ES: "ATRÁS", message_PT: "ATRÁS", check_func: () => thirdboss_combo_last_128 === 130 },
			{ type: "text", sub_type: "message", message: "Left", message_ES: "IZQUIERDA", message_PT: "ESQUERDA", check_func: () => thirdboss_combo_last_128 === 106 }
		],
		"s-568-3000-129-0": [ // 129 -> 108/131
			{ type: "text", sub_type: "message", message: "Front/Right", message_ES: "FRENTE / DERECHA", message_PT: "FRENTE / DIREITA", check_func: () => thirdboss_combo_last_129 === null },
			{ type: "text", sub_type: "message", message: "Front", message_ES: "FRENTE", message_PT: "FRENTE", check_func: () => thirdboss_combo_last_129 === 131 },
			{ type: "text", sub_type: "message", message: "Right", message_ES: "DERECHA", message_PT: "DIREITA", check_func: () => thirdboss_combo_last_129 === 108 }
		],
		"s-568-3000-130-0": [ // 128 -> 130
			{ type: "text", sub_type: "message", message: "Left", message_ES: "IZQUIERDA", message_PT: "ESQUERDA", check_func: () => thirdboss_combo_last_128 === null },
			{ type: "func", func: () => {
				thirdboss_combo_count++;
				thirdboss_combo_last_128 = 130;
			} }
		],
		"s-568-3000-105-0": [ // 130 -> 105
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-568-3000-106-0": [ // 128 -> 106
			{ type: "text", sub_type: "message", message: "Back", message_ES: "ATRÁS", message_PT: "ATRÁS", check_func: () => thirdboss_combo_last_128 === null },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 12, 270, 0, 2600] },
			{ type: "func", func: () => {
				thirdboss_combo_count++;
				thirdboss_combo_last_128 = 106;
			} }
		],
		"s-568-3000-131-0": [ // 129 -> 131
			{ type: "text", sub_type: "message", message: "Right", message_ES: "DERECHA", message_PT: "DIREITA", check_func: () => thirdboss_combo_last_129 === null },
			{ type: "func", func: () => {
				thirdboss_combo_count++;
				thirdboss_combo_last_129 = 131;
			} }
		],
		"s-568-3000-107-0": [ // 131 -> 107
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-568-3000-108-0": [ // 129 -> 108
			{ type: "text", sub_type: "message", message: "Front", message_ES: "FRENTE", message_PT: "FRENTE", check_func: () => thirdboss_combo_last_129 === null },
			{ type: "func", func: () => {
				thirdboss_combo_count++;
				thirdboss_combo_last_129 = 108;
			} }
		],
		"s-568-3000-109-0": "s-568-3000-106-0",
		//
		"s-568-3000-110-0": [{ type: "text", sub_type: "message", message: "Back Move", message_ES: "Movimiento hacia Atrás", message_PT: "Movimento para Atrás" }],
		"s-568-3000-111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_ES: "Ataque 360", message_PT: "Ataque 360" }],
		"s-568-3000-114-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Jalar", message_PT: "Puxar" }], // 114 -> 111
		"s-568-3000-115-0": [{ type: "text", sub_type: "message", message: "Circles", message_ES: "Círculos", message_PT: "Círculos" }], // 202/205 -> 115
		"s-568-3000-115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 150 }],
		"s-568-3000-117-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" }], // 503 -> 117
		"s-568-3000-134-0": [ // qb 568052 -> 134
			{ type: "text", sub_type: "message", message: "Inner + AoE", message_ES: "Dentro + AOE", message_PT: "Dentro + AOE" },
			{ type: "text", sub_type: "message", message: "Get Debuff", message_ES: "Obtener Debuff", message_PT: "Pegar Debuff", class_position: "heal", delay: 2000 },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 14, 175, 0, 1500] }
		],
		"s-568-3000-134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-568-3000-136-0": [{ type: "text", sub_type: "message", message: "Donut", message_ES: "Donut", message_PT: "Donut" }], // 135 -> 136
		"s-568-3000-202-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_ES: "Lanzar al Objetivo", message_PT: "Lançar no Alvo" }], // 503 -> 201 -> 202
		"s-568-3000-205-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_ES: "Lanzar al Objetivo", message_PT: "Lançar no Alvo" }], // 503 -> 117 -> 203 -> 204 -> 205
		"s-568-3000-206-0": [{ type: "text", sub_type: "message", message: "Pike (Target)", message_ES: "Lanza (Objetivo)", message_PT: "Lança (Alvo)" }], // 206 -> 207
		"s-568-3000-302-0": [
			{ type: "text", sub_type: "message", message: "Bait (Target)", message_ES: "Bait (Objetivo)", message_PT: "Bait (Alvo)" },
			{ type: "func", func: () => {
				thirdboss_combo_count = 0;
				thirdboss_combo_last_128 = null;
				thirdboss_combo_last_129 = null;
			} }
		],
		"s-568-3000-302-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1600 }],
		"s-568-3000-501-0": [
			{ type: "text", sub_type: "message", message: "Cage", message_ES: "Jaula", message_PT: "Jaula" },
			{ type: "text", sub_type: "alert",
				message: "Stand in the red zone to remove stack", message_ES: "Párate en zona roja para quitar carga", message_PT: "Ficar na zona vermelha para remover acúmulo",
				speech: false, check_func: () => thirdboss_stacks_count > 0, delay: 2000
			}
		],
		"s-568-3000-502-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_ES: "AOE", message_PT: "AOE" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 3000] }
		],
		"s-568-3000-503-0": [{ type: "text", sub_type: "message", message: "Target Lockon", message_ES: "Fijar Objetivo", message_PT: "Mira no Alvo" }], // qb 568050 -> 503
		"s-568-3000-504-0": [{ type: "text", sub_type: "message", message: "Mobs Summon", message_ES: "Invocar Monstruos", message_PT: "Invocar Monstros" }],
		// "s-568-3000-508-0": [{ type: "text", sub_type: "message", message: "Buff" }],
		"dm-0-0-9168013": [
			{ type: "text", sub_type: "notification", message: "Ready to Shield", message_ES: "Preparar Escudo", message_PT: "Preparar Escudo", speech: false },
			{ type: "text", sub_type: "alert", message: "Ready to Shield", message_ES: "Preparar Escudo", message_PT: "Preparar Escudo" }
		],
		"ae-0-0-568039-4": [{ type: "func", func: thirdboss_stacks_event, args: [4] }],
		"ae-0-0-568039-3": [{ type: "func", func: thirdboss_stacks_event, args: [3] }],
		"ae-0-0-568039-2": [{ type: "func", func: thirdboss_stacks_event, args: [2] }],
		"ae-0-0-568039-1": [{ type: "func", func: thirdboss_stacks_event, args: [1] }],
		"ar-0-0-568039": [{ type: "func", func: thirdboss_stacks_event, args: [0] }],
		//
		"give_bait": [
			{ type: "event", check_func: () => thirdboss_print_bait, args: [
				{ type: "text", sub_type: "message", message: "Give Bait", message_ES: "Dar Bait", message_PT: "Dar Bait", class_position: "heal" },
				{ type: "func", func: () => thirdboss_print_bait = false },
				{ type: "func", func: () => thirdboss_print_bait = true, delay: 6000 }
			] }
		],
		"give_bait_combo": [
			{ type: "event", check_func: () => thirdboss_combo_count >= 3, args: [
				{ type: "text", sub_type: "message", message: "Give Bait", message_ES: "Dar Bait", message_PT: "Dar Bait", class_position: "heal" },
				{ type: "func", func: () => {
					thirdboss_combo_count = 0;
					thirdboss_combo_last_128 = null;
					thirdboss_combo_last_129 = null;
				} }
			] }
		],
		"e-568-3000-101": "give_bait",
		"e-568-3000-102": "give_bait",
		"e-568-3000-105": "give_bait_combo", // left
		"e-568-3000-106": "give_bait_combo", // back
		"e-568-3000-107": "give_bait_combo", // right
		"e-568-3000-108": "give_bait_combo", // front
		"e-568-3000-111": "give_bait", // 360 attack
		"e-568-3000-114": "give_bait", // pull
		"e-568-3000-115": "give_bait", // circles
		"e-568-3000-117": "give_bait", // jump
		"e-568-3000-202": "give_bait", // target throw
		"e-568-3000-205": "give_bait", // target throw
		"e-568-3000-207": "give_bait", // pike
		"s-568-3000-122-2": "give_bait", // core pattern 1
		"s-568-3000-123-2": "give_bait", // core pattern 2
		"s-568-3000-124-2": "give_bait", // core pattern 3
		"s-568-3000-127-2": "give_bait", // core pattern 4
		"e-568-3000-136": "give_bait", // donut
		"s-568-3000-506-1": "give_bait" // dissipation
	};
};