// Manglemire
//
// made by michengs / HSDN / ambushing

const OPCODES = {
	"S_DUNGEON_EVENT_GAGE": {
		"366226": 39917,
		"367078": 47028,
		"367081": 39359,
		"376012": 47078
	}
};

function addOpcodeAndDefinition(mod, name, version = null, definition = null) {
	if (OPCODES[name] !== undefined && OPCODES[name][mod.dispatch.protocolVersion] !== undefined) {
		mod.dispatch.addOpcode(name, OPCODES[name][mod.dispatch.protocolVersion]);
	}
	if (version !== null && definition !== null) {
		mod.dispatch.addDefinition(name, version, definition);
	}
}

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let bossBuffs = [];
	let count = -1;
	let shining = true;

	const debuffs_hand = {
		470046: 3,
		470047: 6,
		470048: 9
	};

	function start_boss_event() {
		bossBuffs = [];
		count = -1;
		shining = true;
	}

	function is_telling_truth() {
		const ones = count % 10;
		const tens = Math.floor((count % 100) / 10);

		if (bossBuffs.includes(ones) || bossBuffs.includes(tens)) {
			return false;
		}

		return true;
	}

	const abnormality_change = (added, event) => {
		if (debuffs_hand[event.id]) {
			if (added) {
				if (!bossBuffs.includes(debuffs_hand[event.id])) {
					bossBuffs.push(debuffs_hand[event.id]);
				}
			} else {
				const index = bossBuffs.indexOf(debuffs_hand[event.id]);

				if (index > -1) {
					bossBuffs.splice(index, 1);
				}
			}
		}
	};

	addOpcodeAndDefinition(dispatch._mod, "S_DUNGEON_EVENT_GAGE");

	dispatch.hook("S_ABNORMALITY_BEGIN", 4, abnormality_change.bind(null, true));
	dispatch.hook("S_ABNORMALITY_END", 1, abnormality_change.bind(null, false));

	dispatch.hook("S_DUNGEON_EVENT_GAGE", 1, (event) => {
		if (shining) {
			if (count === 100) {
				count = -1;
			}

			count++;
			shining = false;

			dispatch.setTimeout(() => shining = true, 500);
		}
	});

	return {
		"ns-470-1000": [{ type: "func", func: start_boss_event }],

		"s-470-1000-1105-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" }],
		"s-470-1000-1106-0": [{ type: "text", sub_type: "message", message: "Smash", message_ES: "Aplastar", message_PT: "Esmagar" }],
		"s-470-1000-1120-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Jalar", message_PT: "Puxar" }],
		"s-470-1000-1114-0": [{ type: "text", sub_type: "message", message: "Spray", message_ES: "Spray", message_PT: "Spray" }],
		"s-470-1000-1201-0": [
			{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 250, 0, 2500] }
		],
		"s-470-1000-1307-0": [{ type: "text", sub_type: "message", message: "With a Bomb - Go away. No Bomb - Enter the circle", message_ES: "Una Bomba - Salir  |  Sin Bomba - Entre en al Círculo", message_PT: "Uma Bomba - Sair  |  Sem Bomba - Entre no Círculo" }],
		"s-470-1000-2105-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto", message_PT: "Salto" }],
		"s-470-1000-2106-0": [{ type: "text", sub_type: "message", message: "Smash", message_ES: "Aplastar", message_PT: "Esmagar" }],
		"s-470-1000-2107-0": [
			{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun", message_PT: "Stun" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 100, 12, 250, 0, 2500] }
		],
		"s-470-1000-2114-0": [{ type: "text", sub_type: "message", message: "Line", message_ES: "Línea", message_PT: "Linha" }],
		"s-470-1000-3106-0": [{ type: "text", sub_type: "message", message: "100" }],

		"s-470-1000-3213-0": [ // "My shield will save me!" (shield)
			{ type: "text", sub_type: "message", message: "Break shield", message_ES: "Romper el Escudo", message_PT: "Quebrar Escudo", check_func: () => is_telling_truth() },
			{ type: "text", sub_type: "message", message: "Puddles (run away)", message_ES: "Charcos (Huir)", message_PT: "Poças (Fugir)", check_func: () => !is_telling_truth() }
		],
		"s-470-1000-3212-0": [ // "I will kill you all!" (aoe around boss)
			{ type: "text", sub_type: "message", message: "Out", message_ES: "Salir", message_PT: "Sair", check_func: () => is_telling_truth() },
			{ type: "text", sub_type: "message", message: "In", message_ES: "Entrar", message_PT: "Entrar", check_func: () => !is_telling_truth() }
		],
		"s-470-1000-3218-0": [ // "One of you must die!" (aoe around player)
			{ type: "text", sub_type: "message", message: "Out", message_ES: "Salir", message_PT: "Sair", check_func: () => is_telling_truth() },
			{ type: "text", sub_type: "message", message: "In", message_ES: "Entrar", message_PT: "Entrar", check_func: () => !is_telling_truth() }
		],

		"qb-470-1000-470019": [
			{ type: "text", sub_type: "alert", message: "Truth", message_ES: "Verdad", message_PT: "Verdade", check_func: () => is_telling_truth() },
			{ type: "text", sub_type: "alert", message: "Lie", message_ES: "Mentira", message_PT: "Mentira", check_func: () => !is_telling_truth() }
		],
		"qb-470-1000-470011": [{ type: "text", sub_type: "message", message: "Stand on stars", message_ES: "Quedate en las Estrellas", message_PT: "Fique nas Estrelas" }]
	};
};