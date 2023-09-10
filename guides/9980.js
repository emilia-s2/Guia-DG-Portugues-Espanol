// Velik's Hold (Difícil)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		// 1 boss
		"nd-980-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-980-1000-102-0": [{ type: "text", sub_type: "message", message: "Stun (Tank)", message_ES: "Stun (Tank", message_PT: "Stun (Tank)" }],
		"s-980-1000-103-0": [{ type: "text", sub_type: "message", message: "Frontal Hits", message_ES: "Ataque Frontal", message_PT: "Ataque Frontal" }],
		"s-980-1000-104-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar", message_PT: "Girar" }],
		"s-980-1000-109-0": [{ type: "text", sub_type: "message", message: "Push Left", message_ES: "Empujón Izquierdo", message_PT: "Empurrão Esquerdo" }],
		"s-980-1000-110-0": [{ type: "text", sub_type: "message", message: "Push Right", message_ES: "Empujón Derecho", message_PT: "Empurrão Direito" }],
		"s-980-1000-112-0": [{ type: "text", sub_type: "message", message: "Jump Forward", message_ES: "Salto Adelante", message_PT: "Salto Frontal" }],
		"s-980-1000-113-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Salto atrás", message_PT: "Salto Atrás" }],
		"s-980-1000-114-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_ES: "Ataque Atrás", message_PT: "Ataque Atrás" }],
		"s-980-1000-115-0": [{ type: "text", sub_type: "message", message: "Wave Front", message_ES: "Ola Frontal", message_PT: "Onda Frontal" }],
		"s-980-1000-115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }],
		"s-980-1000-202-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_ES: "Salto (Stun)", message_PT: "Salto Stun" }],
		"s-980-1000-108-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1800 }],
		"s-980-1000-302-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar", message_PT: "Girar" }],
		"s-980-1000-302-1": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 2000] }],
		"s-980-1001-302-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 4000] }],

		// 2 boss
		"nd-980-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-980-2000-105-0": [{ type: "text", sub_type: "message", message: "Heavy Front Attack", message_ES: "Ataque Frontal Fuerte", message_PT: "Ataque Frontal Forte" }],
		"s-980-2000-106-0": [{ type: "text", sub_type: "message", message: "Flame Ray (Target)", message_ES: "Rayo de Fuego (Objetivo)", message_PT: "Raio de Fogo (Alvo)" }],
		"s-980-2000-106-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 200 }],
		"s-980-2000-107-0": [{ type: "text", sub_type: "message", message: "Whip", message_ES: "Látigo", message_PT: "Chicote" },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 900, 0, 2000] }
		],
		"s-980-2000-107-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 200 }],
		"s-980-2000-108-0": [{ type: "text", sub_type: "message", message: "Front Attack (Stun)", message_ES: "Ataque Frontal (Stun)", message_PT: "Ataque Frontal (Stun)" }],
		"s-980-2000-301-0": [{ type: "text", sub_type: "message", message: "Jump (Target)", message_ES: "Salto (Objetivo)", message_PT: "Salto (Alvo)" }],
		"s-980-2000-301-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 400 }],
		"s-980-2000-302-0": [{ type: "text", sub_type: "message", message: "AOE (Stand behind a stone)", message_ES: "AOE (Párate Detrás de una Piedra)", message_PT: "AOE (Fique Atrás de uma Pedra)" }],
		"s-980-2000-303-0": [{ type: "text", sub_type: "message", message: "Circles", message_ES: "Círculos", message_PT: "Círculos" }],
		"s-980-2000-304-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 4000] }
		],
		"s-980-2000-304-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 400 }],
		"s-980-2001-326-0": [{ type: "spawn", func: "marker", args: [false, 180, 250, 0, 6000, true, null] }], // stone marker

		// 3 boss
		"nd-980-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-980-3000-104-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_ES: "Ataque Frontal", message_PT: "Ataque Frontal" }],
		"s-980-3000-105-0": [{ type: "text", sub_type: "message", message: "Push Front", message_ES: "Empujón Frontal", message_PT: "Empurrão Frontal" }],
		"s-980-3000-109-0": [{ type: "text", sub_type: "message", message: "Double Front Attack", message_ES: "Ataque Frontal Doble", message_PT: "Ataque Frontal Duplo" }],
		"s-980-3000-111-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar", message_PT: "Giro" }],
		"s-980-3000-112-0": [{ type: "text", sub_type: "message", message: "Target (Front | Back)", message_ES: "Objetivo (Frente | Atrás)", message_PT: "Alvo (Frente | Atrás)" }],
		"s-980-3000-112-2": [{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Ataque Frontal | Atrás", message_PT: "Frente | Atrás" }],
		"s-980-3000-113-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar", message_PT: "Empurrar" }],
		"s-980-3000-114-0": "s-980-3000-113-0",
		"s-980-3000-115-0": [{ type: "text", sub_type: "message", message: "Charging", essage_ES: "Cargando", message_PT: "Carregando" },
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_ES: "Plague of Exhaustion", message_PT: "Plague of Exhaustion", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_ES: "Regression", message_PT: "Regression", class_position: "mystic" }
		],
		"s-980-3000-301-0": [{ type: "text", sub_type: "message", message: "Get Out | Get In", message_ES: "Salir| Entrar", message_PT: "Sair | Entrar" }],
		"s-980-3000-302-0": [{ type: "text", sub_type: "message", message: "Get In", message_ES: "Entrar", message_PT: "Entrar"}],
		"s-980-3000-304-0": [{ type: "text", sub_type: "message", message: "Shot (Target)", message_ES: "Disparar (Objetivo)", message_PT: "Tiros (Alvo)" }],
		"s-980-3000-304-3": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe" }],
		"s-980-3000-306-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ", message_PT: "АоЕ" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 4200 }
		],
		"s-980-3000-307-0": "s-980-3000-306-0",
		"s-980-3000-308-0": "s-980-3000-306-0",
		"s-980-3000-309-0": [
			{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 1800 }
		]
	};
};