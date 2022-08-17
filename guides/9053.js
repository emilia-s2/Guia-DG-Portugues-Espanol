// Kezzel's Gorge
//
// Made by Multarix

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-453-999": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-453-999-103-0": [{ type: "text", sub_type: "message", message_PT: "Esmagar Esquerda (Atrás)", message_ES: "Aplastar Izquierda (Atrás)", message: "Smash (Left)" }],
		"s-453-999-104-0": [{ type: "text", sub_type: "message", message_PT: "Esmagar Direita (Atrás)", message_ES: "Aplastar Derecha (Atrás)", message: "Smash (Right)" }],
		"s-453-999-105-0": [
			{ type: "text", sub_type: "message", message_PT: "Rochas | Esmagar", message_ES: "Rocks | Aplastar", message: "Rock Smash", class_position: "tank" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 210, 14, 190, 0, 3000] }
		],
		"s-453-999-106-0": [
			{ type: "text", sub_type: "message", message_PT: "Explosão", message_ES: "Explosión", message: "Blast" },
			{ type: "text", sub_type: "message", message_PT: "Iframe!", message_ES: "Iframe", message: "Dodge!", delay: 1800 }
		],
		"s-453-999-107-0": [{ type: "text", sub_type: "message", message_PT: "Chicote", message_ES: "Latigo", message: "Whip" }],
		"s-453-999-116-0": [{ type: "text", sub_type: "message", message_PT: "Escudo", message_ES: "Escudo", message: "Shield" }],
		"s-453-999-119-0": [
			{ type: "text", sub_type: "message", message_PT: "Kaia's Shield", message_ES: "Kaia's Shield", message: "Kaia's Shield", class_position: "priest" },
			{ type: "text", sub_type: "message", message_PT: "Thrall of Protection", message_ES: "Thrall of Protection", message: "Thrall of Protection", class_position: "mystic" },
			{ type: "text", sub_type: "message", message_PT: "Derrubar", message_ES: "Tumbar", message: "kickdown", class_position: "tank" },
			{ type: "text", sub_type: "message", message_PT: "Derrubar", message_ES: "Tumbar", message: "kickdown", class_position: "dps" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 500, 0, 6000] }
		],
		"s-453-999-120-0": [
			{ type: "text", sub_type: "message", message_PT: "Onda Explosiva", message_ES: "Ola Explosiva", message: "AoE Waves" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 200, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 390, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 590, 0, 7000] }
		]
	};
};