﻿// Sky Cruiser (Hard)
//
// made by michengs

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let status_tracker_started = false;
	let triple_attack = false;
	let timer1 = null;
	let timer2 = null;
	let	step_two = 0;
	let enraged = false;
	let boss_ID = null;
	let counter = 0;
	let print_mech = true;

	const mech_messages = {
		0: { message: "Three Split Strikes", message_PT: "Três ataques divididos" },
		1: { message: "Four Split Strikes", message_PT: "Quatro ataques divididos" },
		2: { message: "Two Split Strikes", message_PT: "Dois ataques divididos" }
	};

	function boss_backattack_event() {
		dispatch.clearTimeout(timer2);
		counter++;
		if (counter >= 2) {
			handlers.text({
				sub_type: "message",
				message: "Back Attack",
				message_PT: "Ataque Atras"
			});
		}
		timer2 = dispatch.setTimeout(() => counter = 0, enraged ? 2000 : 2040);
	}

	function start_dungeon_event() {
		function sBossGageInfo(event) {
			if (!boss_ID || (boss_ID != event.id)) boss_ID = event.id;
		}

		function sInfo(event) {
			const bossWord = parseInt(event.message.match(/\d+/ig));
			if ([3036039, 3036040, 3036041].includes(bossWord)) {
				dispatch.clearTimeout(timer1);
				triple_attack = true;
				timer1 = dispatch.setTimeout(() => triple_attack = false, 2800);
			}
		}

		function sNpcStatus(event) {
			if (boss_ID != event.gameId) return;
			if (event.enraged && !enraged) {
				enraged = true;
				handlers.text({
					sub_type: "message",
					message: "Enrage Up",
					message_PT: "Enfurecer"
				});
			} else if (!event.enraged && enraged) {
				enraged = false;
				handlers.text({
					sub_type: "message",
					message: "End of Enrage",
					message_PT: "Fim do Enfurecer"
				});
			}
		}

		if (!status_tracker_started) {
			dispatch.hook("S_NPC_STATUS", 2, sNpcStatus);
			dispatch.hook("S_BOSS_GAGE_INFO", 3, sBossGageInfo);
			dispatch.hook("S_QUEST_BALLOON", 1, sInfo);
			status_tracker_started = true;
		}

		step_two = 0;
		print_mech = true;
	}

	function skilld_event(skillid) {
		if ([1401, 1402, 1701, 1702].includes(skillid)) {
			if (print_mech) {
				handlers.text({ sub_type: "message",
					message: triple_attack ? mech_messages[step_two].message : mech_messages[2].message,
					message_PT: triple_attack ? mech_messages[step_two].message_PT: : mech_messages[2].message_PT:
				});
				print_mech = false;
				dispatch.setTimeout(() => print_mech = true, 5000);
			}

			handlers.event([
				{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 500, 100, 1500] },
				{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 500, 100, 1500] }
			]);
		}

		if ([1401, 1701].includes(skillid)) {
			if (enraged) {
				handlers.event([
					{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
					{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
					{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
					{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
				]);
			} else {
				handlers.event([
					{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
					{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
					{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
					{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
				]);
			}
		}

		if ([1402, 1702].includes(skillid)) {
			if (!enraged) {
				handlers.event([
					{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
					{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
					{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
					{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
				]);
			} else {
				handlers.event([
					{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
					{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
					{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
					{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
				]);
			}
		}
	}

	return {
		"nd-3036-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3036-1001-1112-0": [{ type: "text", sub_type: "message", message: "Back Jump", message_PT: "Pulo Atrás" }],
		//
		"ns-3036-1000": [{ type: "func", func: start_dungeon_event }],
		"nd-3036-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3036-1000-79": [{ type: "text", sub_type: "message", message: "79%" }, { type: "func", func: () => step_two = 1 }],
		"h-3036-1000-94": [{ type: "text", sub_type: "message", message: "94%" }],
		//
		"s-3036-1000-1103-0": [{ type: "func", func: boss_backattack_event }],
		"s-3036-1000-1106-0": [{ type: "func", func: boss_backattack_event }],
		"s-3036-1000-1112-0": [{ type: "text", sub_type: "message", message: "Back", message_PT: "Atrás" }],
		"s-3036-1000-1117-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Frente" }],
		"s-3036-1000-1118-0": [{ type: "text", sub_type: "message", message: "Front Cut | Dodge", message_PT: "Corte frontal | Esquiva" }],
		"s-3036-1000-1302-0": [
			{ type: "text", sub_type: "message", message: "AOE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 100, 6000] }
		],
		"s-3036-1000-1303-0": [{ type: "text", sub_type: "message", message: "Spin Attack", message_PT: "Ataque Giratório" }],
		"s-3036-1000-1401-0": [{ type: "func", func: skilld_event, args: [1401] }],
		"s-3036-1000-1402-0": [{ type: "func", func: skilld_event, args: [1402] }],
		"s-3036-1000-1701-0": [{ type: "func", func: skilld_event, args: [1701] }], //right
		"s-3036-1000-1702-0": [{ type: "func", func: skilld_event, args: [1702] }], //left
		"s-3036-1000-1805-0": [
			{ type: "text", sub_type: "message", message: "Between -> In -> All -> Out", message_PT: "Dentro -> Entre -> Todos -> Fora" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 20, 50, 0, 1620] }, // in
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 18, 150, 10, 1620] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 16, 250, 0, 1620] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 450, 0, 1620] }, // S out
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 550, 0, 1620] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 650, 0, 1620] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 16, 250, 1620, 900] }, // out
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 14, 350, 1620, 900] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 450, 1620, 900] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 550, 1620, 900] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 650, 1620, 1900] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 20, 50, 2520, 1830] }, // all
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 18, 150, 2520, 1830] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 16, 250, 2520, 1830] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 14, 350, 2520, 1830] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 450, 2520, 1830] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 550, 2520, 1830] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 650, 2520, 1830] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 20, 50, 4350, 2000] }, // in
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 18, 150, 4350, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 16, 250, 4350, 2000] }
		],
		"s-3036-1000-1806-0": [
			{ type: "text", sub_type: "message", message: "In -> Between -> All -> In", message_PT: "Entre -> Dentro -> Todos -> Entrar" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 16, 250, 0, 1620] }, // out
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 14, 350, 0, 1620] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 450, 0, 1620] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 550, 0, 1620] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 650, 0, 1620] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 20, 50, 1620, 900] }, // in
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 18, 150, 1620, 900] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 16, 250, 1620, 900] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 450, 1620, 900] }, // S out
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 550, 1620, 900] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 650, 1620, 900] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 20, 50, 2520, 1830] }, // all
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 18, 150, 2520, 1830] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 16, 250, 2520, 1830] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 14, 350, 2520, 1830] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 450, 2520, 1830] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 550, 2520, 1830] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 650, 2520, 1830] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 16, 250, 4350, 2000] }, // out
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 14, 350, 4350, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 450, 4350, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 550, 4350, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 650, 4350, 2000] }
		],
		"s-3036-1000-2103-0": [{ type: "func", func: boss_backattack_event }],
		"s-3036-1000-2106-0": [{ type: "func", func: boss_backattack_event }],
		"s-3036-1000-2112-0": [{ type: "text", sub_type: "message", message: "Back", message_PT: "Atrás" }],
		"s-3036-1000-2117-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Frente" }],
		"s-3036-1000-2118-0": [{ type: "text", sub_type: "message", message: "Front Cut | Dodge", message_PT: "Corte frontal | Esquiva" }]
	};
};