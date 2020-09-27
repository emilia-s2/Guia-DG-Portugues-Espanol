// Kezzel's Gorge
//
// Made by Multarix

const { SpawnCircle } = module.parent.exports.lib;

let player, entity, library, effect;

module.exports = {
	load(dispatch){
		({ player, entity, library, effect } = dispatch.require.library);
	},

	"s-453-999-103-0": [{ "type": "text", "sub_type": "message", "message": "Esmagar Esquerda (Atras)", "message_RU": "Удар (лево)" }],
	"s-453-999-104-0": [{ "type": "text", "sub_type": "message", "message": "Esmagar Direita (Atras)", "message_RU": "Удар (право)" }],
	"s-453-999-105-0": [
		{ "type": "text", "sub_type": "message", "message": "Rochas | Esmagar", "message_RU": "Удар (танк)" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 210, 10, 185, 0, 3500] }
	],
	"s-453-999-106-0": [
		{ "type": "text", "sub_type": "message", "message": "Explosao", "message_RU": "Выстрел" },
		{ "type": "text", "sub_type": "message", "message": "Esquiva!", "message_RU": "Эвейд!", "delay": 1800 }
	],
	"s-453-999-107-0": [{ "type": "text", "sub_type": "message", "message": "Chicote", "message_RU": "Кнут" }],
	"s-453-999-116-0": [{ "type": "text", "sub_type": "message", "message": "Escudo", "message_RU": "Щит" }],
	"s-453-999-119-0": [
		{ "type": "text", "sub_type": "message", "message": "Derrubar", "message_RU": "Кайа", "class_position": "dps" },
	    { "type": "text", "sub_type": "message", "message": "Derrubar", "message_RU": "Кайа", "class_position": "tank" },
		{ "type": "text", "sub_type": "message", "message": "Kaia's Shield", "message_RU": "Кайа", "class_position": "priest" },
		{ "type": "text", "sub_type": "message", "message": "Thrall of Protection", "message_RU": "Кайа", "class_position": "mystic" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 75, 10, 450, 0, 5700] } // Unsure on size and position, the in-game telegraphs for this boss are buggy
	],
	"s-453-999-120-0": [
		{ "type": "text", "sub_type": "message", "message": "Onda Explosiva", "message_RU": "AoE волны" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 200, 0, 5700] }, // Inner circle
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 390, 0, 6700] }, // Middle circle
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 590, 0, 7700] }  // Outer circle
	]
};