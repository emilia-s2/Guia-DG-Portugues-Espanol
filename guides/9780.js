// Velik's Hold (5-Person)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		// 1 boss
		"nd-780-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-780-1000-102-0": [{ type: "text", sub_type: "message", message: "Stun (Tank)", message_ES: "Stun (Tank", message_PT: "Stun (Tank)" }],
		"s-780-1000-103-0": [{ type: "text", sub_type: "message", message: "Frontal Hits", message_ES: "Ataque Frontal", message_PT: "Ataque Frontal" }],
		"s-780-1000-104-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar", message_PT: "Girar" }],
		"s-780-1000-109-0": [{ type: "text", sub_type: "message", message: "Push Left", message_ES: "Empujón Izquierdo", message_PT: "Empurrão Esquerdo" }],
		"s-780-1000-110-0": [{ type: "text", sub_type: "message", message: "Push Right", message_ES: "Empujón Derecho", message_PT: "Empurrão Direito" }],
		"s-780-1000-112-0": [{ type: "text", sub_type: "message", message: "Jump Forward", message_ES: "Salto Adelante", message_PT: "Salto Frontal" }],
		"s-780-1000-113-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Salto atrás", message_PT: "Salto Atrás" }],
		"s-780-1000-114-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_ES: "Ataque Atrás", message_PT: "Ataque Atrás" }],
		"s-780-1000-115-0": [{ type: "text", sub_type: "message", message: "Wave Front", message_ES: "Ola Frontal", message_PT: "Onda Frontal" }],
		"s-780-1000-115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }],
		"s-780-1000-202-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_ES: "Salto (Stun)", message_PT: "Salto Stun" }],
		"s-780-1000-108-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 2900 }],
		"s-780-1000-302-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar", message_PT: "Girar" }],
		"s-780-1001-302-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 4000] }],

		// 2 boss
		"nd-780-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-780-2000-105-0": [{ type: "text", sub_type: "message", message: "Heavy Front Attack", message_ES: "Ataque Frontal Fuerte", message_PT: "Ataque Frontal Forte" }],
		"s-780-2000-106-0": [{ type: "text", sub_type: "message", message: "Flame Ray (Target)", message_ES: "Rayo de Fuego (Objetivo)", message_PT: "Raio de Fogo (Alvo)" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1750 }
		],
		"s-780-2000-107-0": [{ type: "text", sub_type: "message", message: "Whip", message_ES: "Látigo", message_PT: "Chicote" }],
		"s-780-2000-107-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1000 }],
		"s-780-2000-108-0": [{ type: "text", sub_type: "message", message: "Front Attack (Stun)", message_ES: "Ataque Frontal (Stun)", message_PT: "Ataque Frontal (Stun)" }],
		"s-780-2000-301-0": [{ type: "text", sub_type: "message", message: "Jump (Target)", message_ES: "Salto (Objetivo)", message_PT: "Salto (Alvo)" }],
		"s-780-2000-301-1": [{ type: "text", sub_type: "message", message: "Dodge",message_ES: "Iframe", message_PT: "Iframe", delay: 1000 }],
		"s-780-2000-302-0": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE", message_PT: "AOE" }],
		"s-780-2000-303-0": [{ type: "text", sub_type: "message", message: "Circles", message_ES: "Círculos", message_PT: "Círculos" }],
		"s-780-2000-304-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" }],
		"s-780-2000-304-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 800 }],
		"s-780-2001-326-0": [{ type: "spawn", func: "marker", args: [false, 180, 250, 0, 6000, true, null] }], // stone marker

		// 3 boss
		"nd-780-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-780-3000-104-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_ES: "Ataque Frontal", message_PT: "Ataque Frontal" }],
		"s-780-3000-105-0": [{ type: "text", sub_type: "message", message: "Push Front", message_ES: "Empujón Frontal", message_PT: "Empurrão Frontal" }],
		"s-780-3000-109-0": [{ type: "text", sub_type: "message", message: "Double Front Attack", message_ES: "Ataque Frontal Doble", message_PT: "Ataque Frontal Duplo" }],
		"s-780-3000-111-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar", message_PT: "Giro" }],
		"s-780-3000-112-0": [{ type: "text", sub_type: "message", message: "Target", message_ES: "Objetivo", message_PT: "Alvo" }],
		"s-780-3000-112-2": [{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Ataque Frontal | Atrás", message_PT: "Frente | Atrás" }],
		"s-780-3000-113-0": [{ type: "text", sub_type: "message", message: "Left Pushback", message_ES: "Izquierda Empujar", message_PT: "Esquerda Empurrar" }], // left
		"s-780-3000-114-0": [{ type: "text", sub_type: "message", message: "Right Pushback", message_ES: "Derecha Empujar", message_PT: "Direita Empurrar" }], // right
		"s-780-3000-115-0": [
			{ type: "text", sub_type: "message", message: "Charging", essage_ES: "Cargando", message_PT: "Carregando" },
			{ type: "text", sub_type: "message", message: "Dodge", essage_ES: "Iframe", message_PT: "Iframe", delay: 13500 }
		],
		"s-780-3000-301-0": [{ type: "text", sub_type: "message", message: "Get Out | Get In", message_ES: "Salir| Entrar", message_PT: "Sair | Entrar" }],
		"s-780-3000-302-0": [{ type: "text", sub_type: "message", message: "Get In", message_ES: "Entrar", message_PT: "Entrar" }],
		"s-780-3000-304-0": [{ type: "text", sub_type: "message", message: "Shot (Target)", message_ES: "Disparar (Objetivo)", message_PT: "Tiros (Alvo)" }],
		"s-780-3000-304-3": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }],
		"s-780-3000-306-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ", message_PT: "АоЕ" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 4500 }
		],
		"s-780-3000-307-0": "s-780-3000-306-0",
		"s-780-3000-308-0": "s-780-3000-306-0",
		"s-780-3000-309-0": [
			{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 2300 }
		]
	};
};