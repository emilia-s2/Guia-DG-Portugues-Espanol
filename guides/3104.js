// Catalepticon (Normal)
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		"nd-3104-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"qb-3104-1000-32042000": [{ type: "text", sub_type: "message", message: "Arrows", message_PT: "Setas" }],
		"h-3104-1000-35": [{ type: "text", sub_type: "message", message: "35%", message_PT: "35%" }],

		"s-3104-1000-104-0": [{ type: "text", sub_type: "message", message: "Stun (AOE)", message_PT: "Stun (AOE)" }],
		"s-3104-1000-107-0": [{ type: "text", sub_type: "message", message: "Line Forward + Side Lines", message_PT: "Linha para Frente + Linhas Laterais" }],
		"s-3104-1000-110-0": [{ type: "text", sub_type: "message", message: "Target + Wave", message_PT: "Atrás - Frente (Stun)" }],
		"s-3104-1000-112-0": [{ type: "text", sub_type: "message", message: "Wave Forward", message_PT: "Empurrar a Frente" }],
		"s-3104-1000-114-0": [{ type: "text", sub_type: "message", message: "Inner + Outer AOEs", message_PT: "AOEs Dentro e Fora" }],
		"s-3104-1000-116-0": [{ type: "text", sub_type: "message", message: "Line Forward", message_PT: "Linha no Meio" }],
		"s-3104-1000-119-0": [{ type: "text", sub_type: "message", message: "Two Strikes", message_PT: "Dois Golpes" }],
		"s-3104-1000-120-0": [{ type: "text", sub_type: "message", message: "Two Strikes + Stun (AOE)", message_PT: "Explosão Ampla Stun" }],
		"s-3104-1000-123-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro" }],
		"s-3104-1000-125-0": [{ type: "text", sub_type: "message", message: "Strun (Tank)", message_PT: "Stun (Tank)" }],
		"s-3104-1000-127-0": [{ type: "text", sub_type: "message", message: "Pizza", message_PT: "Pizza" }],
		"s-3104-1000-128-0": [{ type: "text", sub_type: "message", message: "Pizza", message_PT: "Pizza" }],
		"s-3104-1000-148-0": [{ type: "text", sub_type: "message", message: "Pizza", message_PT: "Pizza" }],
		"s-3104-1000-156-0": [{ type: "text", sub_type: "message", message: "Get Skulls", message_PT: "Cabeças" }],
		"s-3104-1000-157-0": [{ type: "text", sub_type: "message", message: "Gather!", message_PT: "Juntar!", delay: 5000 }],
		"s-3104-1000-158-0": [{ type: "text", sub_type: "message", message: "Gather!", message_PT: "Juntar!", delay: 5000 }],
		"s-3104-1000-159-0": [{ type: "text", sub_type: "message", message: "AOE", message_PT: "АОЕ" }]
	};
};