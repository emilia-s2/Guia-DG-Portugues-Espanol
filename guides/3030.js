// Commander's Residence
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	let print_test = true;
	return {
		
		// 1 Maknakh
		"nd-3030-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3030-1000-114-0": [{ type: "text", sub_type: "message", message_PT: "Empurrar (Repelir)", message_ES: "Empujar (Repeler)", message: "Push (Repel)" }],
		"s-3030-1000-303-0": [{ type: "text", sub_type: "message", message_PT: "Meteoros AOE", message_ES: "Meteoritos AOE", message: "Meteors AOE" }],
		"s-3030-1000-120-0": [{ type: "text", sub_type: "message", message_PT: "Empurrar Frente", message_ES: "Empujar Frente", message: "Push Front" }],
		"s-3030-1000-104-0": [{ type: "text", sub_type: "message", message_PT: "Fogo Frente", message_ES: "Fuego Frente", message: "Fire Front" }],
		"s-3030-1000-113-0": [{ type: "text", sub_type: "message", message_PT: "Círculo AOE Frente", message_ES: "Círculo AOE Frente", message: "Circle AOE Front" }],
		"s-3030-1000-108-0": [{ type: "text", sub_type: "message", message_PT: "Espinhos Frontal", message_ES: "Espinas	Frontal", message: "Frontal Thorns" }],
		"s-3030-1000-305-0": [{ type: "text", sub_type: "message", message_PT: "Círculo AOE Frente", message_ES: "Círculo AOE Frente", message: "Circle AOE Front" }],
		"s-3030-1000-301-0": [{ type: "text", sub_type: "message", message_PT: "Hit Frontal | Stun", message_ES: "Hit Frontal | Stun", message: "Frontal Hit | Stun" }],
		"s-3030-1000-307-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Stun", message_ES: "Cola Stun", message: "Tail Stun" }],
		"s-3030-1000-112-0": [{ type: "text", sub_type: "message", message_PT: "Salto", message_ES: "Salto", message: "Jump" }],
		"s-3030-1000-105-0": [{ type: "text", sub_type: "message", message_PT: "Fogo Frontal", message_ES: "Fuego Frontal", message: "Front Fire" }],
		"am-3030-1000-99000580": [{ type: "text", sub_type: "message", message_PT: "Hit Espinhos ", message_ES: "Hit Espinas", message: "Thorns Hit" }],

		// 2 LB-1
		"nd-3030-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],	
		"s-3030-2000-309-0":  [
			{ type: "text", sub_type: "message", message_PT: "Círculos AOE | Stun", message_ES: "Círculos AOE | Stun", message:"AOE circles | Stun", check_func: () => print_test },
			{ type: "func", func: () => print_test = false },
			{ type: "func", func: () => print_test = true, delay: 4000 }
		],
		"s-3030-2000-105-0":  [
			{ type: "text", sub_type: "message", message_PT: "Laser Frontal (Stun)", message_ES: "Láser Frontal", message: "Frontal Laser (Stun)", check_func: () => print_test },
			{ type: "func", func: () => print_test = false },
			{ type: "func", func: () => print_test = true, delay: 15000 }
		],
		"s-3030-2000-103-0": [{ type: "text", sub_type: "message", message_PT: "Hit Frontal", message_ES: "Hit Frontal", message: "Frontal Hit" }],
		"s-3030-2000-101-0": [{ type: "text", sub_type: "message", message_PT: "Garras Frente", message_ES: "Garras Frente", message: "Claws Front" }],
		"s-3030-2000-104-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Frente | Stun", message_ES: "Ataque Frontal | Stun", message: "Front Attack | Stun" }],
		"s-3030-2000-112-0": [{ type: "text", sub_type: "message", message_PT: "Ataque Atrás (Fogo)", message_ES: "Ataque Atrás (Fuego)", message: "Attack Behind (Fire)" }],
		"s-3030-2000-305-0": [{ type: "text", sub_type: "message", message_PT: "Círculos AOE", message_ES: "Círculos AOE", message: "Circles AOE" }],
		"s-3030-2000-109-0": [{ type: "text", sub_type: "message", message_PT: "Laser Atrás | Stun", message_ES: "Láser Atrás | Stun", message: "Laser Behind | Stun" }],	
		"s-3030-2000-301-0": [{ type: "text", sub_type: "message", message_PT: "Giro Debuff", message_ES: "Giro Debuff", message: "Turn Debuff" }]
	};
};