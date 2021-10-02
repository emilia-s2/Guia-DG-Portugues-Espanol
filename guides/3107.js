// Desolarus Testing Grounds
//
// made by HSDN

const Vec3 = require("tera-vec3");

module.exports = (dispatch, handlers, guide, lang) => {

	let boss_ent = null;
	let puzzle_decal = null;

	function puzzle_mech_event(decal, stage) {
		/*
			Stage: 0=Y, 1=X

			Decals:
			1 -> X-O-O-O-O-O
			2 -> O-X-O-O-O-O
			3 -> O-O-X-O-O-O
			4 -> O-O-O-X-O-O
			5 -> O-O-O-O-X-O
			6 -> O-O-O-O-O-X
		*/
		if (!boss_ent) return;

		const offsets = [650, 400, 140, -140, -400, -650];
		const entity = { ...boss_ent };

		entity.loc = new Vec3(-127995, 147156, 1326);
		entity.loc.w = -1.57;

		if (stage === 0) {
			puzzle_decal = decal;

			handlers.event([
				{ type: "spawn", id: 445, angle: 0, distance: offsets[decal - 1] - 15, sub_delay: 15000, tag: "puzzle" },
				{ type: "spawn", func: "vector", args: [445, 0, offsets[decal - 1] - 15, 90, 2000, 0, 15000], tag: "puzzle" },
				{ type: "spawn", func: "vector", args: [445, 0, offsets[decal - 1] - 15, 270, 2000, 0, 15000], tag: "puzzle" }
			], entity);
		} else if (puzzle_decal !== null) {
			const marker_pos = new Vec3(
				entity.loc.x - offsets[decal - 1] - 15,
				entity.loc.y - offsets[puzzle_decal - 1] + 15,
				entity.loc.z
			);

			handlers.event([
				{ type: "spawn", id: 445, angle: 270, distance: -offsets[decal - 1] - 15, sub_delay: 15000, tag: "puzzle" },
				{ type: "spawn", func: "vector", args: [445, 90, -offsets[decal - 1] - 15, 0, 2000, 0, 15000], tag: "puzzle" },
				{ type: "spawn", func: "vector", args: [445, 90, -offsets[decal - 1] - 15, 180, 2000, 0, 15000], tag: "puzzle" },
				{ type: "spawn", sub_type: "item", id: 110684, pos: marker_pos, sub_delay: 15000, tag: "puzzle" },
				{ type: "text", sub_type: "notification", message: `${puzzle_decal} - ${decal}`, speech: false },
				{ type: "despawn_all", tag: "puzzle", delay: 7000 }
			], entity);

			puzzle_decal = null;
		}
	}

	return {
		"ns-3107-1000": [
			{ type: "func", func: ent => boss_ent = ent }
		],
		"nd-3107-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"s-3107-1000-112-0": [
			{ type: "text", sub_type: "message", message: "Inner + Outer Bombs", message_ES: "Bombas Dentro + Afuera", message_PT: "Bombas Dentro + Fora" },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 600, 8, 300, 3500, 2000] }, // outer
			{ type: "spawn", func: "circle", args: [false, 553, 45, 650, 8, 250, 3500, 2000] },
			{ type: "spawn", func: "circle", args: [false, 553, 90, 600, 8, 300, 3500, 2000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 650, 8, 250, 3500, 2000] },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 600, 8, 300, 3500, 2000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 650, 8, 250, 3500, 2000] },
			{ type: "spawn", func: "circle", args: [false, 553, 270, 600, 8, 300, 3500, 2000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 650, 8, 250, 3500, 2000] }
		],
		"s-3107-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Inner Bombs", message_ES: "Bombas Dentro", message_PT: "Bombas Dentro" },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		],
		"s-3107-1000-302-0": [{ type: "text", sub_type: "message", message: "Shield", message_ES: "Escudo", message_PT: "Escudo" }],
		"s-3107-1000-304-0": [{ type: "text", sub_type: "message", message: "Break Failure", message_ES: "Romper Escudo Fallido", message_PT: "Quebrar Escudo Falhou" }],
		"s-3107-1000-305-0": "s-3107-1000-302-0",
		"s-3107-1000-310-0": [{ type: "text", sub_type: "message", message: "Break Stones", message_ES: "Romper Piedras", message_PT: "Quebrar Pedras" }],
		"s-3107-1000-311-0": "s-3107-1000-310-0",
		"s-3107-1000-320-0": [{ type: "text", sub_type: "message", message: "Pizza (Pushback)", message_ES: "Pizza (Empujar Atrás)", message_PT: "Pizza (Empurrar Atrás)" }], // forward
		"s-3107-1000-321-0": [{ type: "text", sub_type: "message", message: "Pizza (Pushback)", message_ES: "Pizza (Empujar Atrás)", message_PT: "Pizza (Empurrar Atrás)" }], // reverse
		"s-3107-1000-322-0": [{ type: "text", sub_type: "message", message: "Pizza Spin (Pushback)", message_ES: "Pizza Giro (Empujar Atrás)", message_PT: "Pizza Giro (Empurrar Atrás)" }], // forward
		"s-3107-1000-323-0": [{ type: "text", sub_type: "message", message: "Pizza Spin (Pushback)", message_ES: "Pizza Giro (Empujar Atrás)", message_PT: "Pizza Giro (Empurrar Atrás)" }], // reverse
		"s-3107-1000-336-0": [{ type: "text", sub_type: "message", message: "180 (Front)", message_ES: "180 (Frente)", message_PT: "180 (Frente)" }],
		"s-3107-1000-337-0": [{ type: "text", sub_type: "message", message: "180 (Right)", message_ES: "180 (Derecha)", message_PT: "180 (Direita)" }],
		"s-3107-1000-338-0": [{ type: "text", sub_type: "message", message: "180 (Back)", message_ES: "180 (Atrás)", message_PT: "180 (Atrás)" }],
		"s-3107-1000-339-0": [{ type: "text", sub_type: "message", message: "180 (Left)", message_ES: "180 (Izquierda)", message_PT: "180 (Esquerda)" }],
		"s-3107-1000-370-0": [
			{ type: "text", sub_type: "message", message: "Cross (Target)", message_ES: "Cruz (Objetivo)", message_PT: "Cruz (Alvo)" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 3000 }
		],
		"qb-3107-1000-31070003": [
			{ type: "text", sub_type: "message", message: "Circles (Target)", message_ES: "Círculos (Objetivo)", message_PT: "Círculos (Alvo)" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", message_PT: "Iframe", delay: 2500 }
		],
		"qb-3107-1000-31070010": [{ type: "text", sub_type: "message", message: "Pizza (Pushback)", message_ES: "Pizza (Empujar Atrás)", message_PT: "Pizza (Empurrar Atrás)" }],

		// Paper puzzle mech
		// stage 0
		"s-3107-5000-331-0": [{ type: "func", func: puzzle_mech_event, args: [1, 0] }], // Y
		"s-3107-5000-332-0": [{ type: "func", func: puzzle_mech_event, args: [2, 0] }],
		"s-3107-5000-333-0": [{ type: "func", func: puzzle_mech_event, args: [3, 0] }],
		"s-3107-5000-334-0": [{ type: "func", func: puzzle_mech_event, args: [4, 0] }],
		"s-3107-5000-335-0": [{ type: "func", func: puzzle_mech_event, args: [5, 0] }],
		"s-3107-5000-336-0": [{ type: "func", func: puzzle_mech_event, args: [6, 0] }],
		"s-3107-5001-331-0": [{ type: "func", func: puzzle_mech_event, args: [1, 1] }], // X
		"s-3107-5001-332-0": [{ type: "func", func: puzzle_mech_event, args: [2, 1] }],
		"s-3107-5001-333-0": [{ type: "func", func: puzzle_mech_event, args: [3, 1] }],
		"s-3107-5001-334-0": [{ type: "func", func: puzzle_mech_event, args: [4, 1] }],
		"s-3107-5001-335-0": [{ type: "func", func: puzzle_mech_event, args: [5, 1] }],
		"s-3107-5001-336-0": [{ type: "func", func: puzzle_mech_event, args: [6, 1] }],
		// stage 1
		"s-3107-5002-331-0": "s-3107-5000-331-0", // Y
		"s-3107-5002-332-0": "s-3107-5000-332-0",
		"s-3107-5002-333-0": "s-3107-5000-333-0",
		"s-3107-5002-334-0": "s-3107-5000-334-0",
		"s-3107-5002-335-0": "s-3107-5000-335-0",
		"s-3107-5002-336-0": "s-3107-5000-336-0",
		"s-3107-5003-331-0": "s-3107-5001-331-0", // X
		"s-3107-5003-332-0": "s-3107-5001-332-0",
		"s-3107-5003-333-0": "s-3107-5001-333-0",
		"s-3107-5003-334-0": "s-3107-5001-334-0",
		"s-3107-5003-335-0": "s-3107-5001-335-0",
		"s-3107-5003-336-0": "s-3107-5001-336-0"
	};
};