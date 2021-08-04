// Grotto of Lost Souls (Dificil)
//
// made by michengs

module.exports = (dispatch, handlers, guide, lang) => {
	let power = true;
	let Level = 0;
	let powerMsg = null;
	let notice = true;
	let steptwo = false;

	function start_boss() {
		power = false;
		Level = 0;
		notice = true;
		powerMsg = null;
		steptwo = false;
	}

	function skilld_event(skillid) {
		if (!notice) return;

		if (notice && [118, 139, 141, 150, 152].includes(skillid)) {
			notice = false;
			dispatch.setTimeout(() => notice = true, 4000);
		}

		if (skillid === 300) {
			power = true;
			Level = 0;
			powerMsg = null;
		}

		if (skillid === 360 || skillid === 399)
			Level = 0;

		if (power && [118, 143, 145, 146, 144, 147, 148, 154, 155, 161, 162, 213, 215].includes(skillid)) {
			Level++;
			powerMsg = `(${Level})`;

			if (Level == 4) {
				handlers.text({
					sub_type: "message",
					message_RU: "Полностью заряжен!",
					message_PT: "(4)"
				});
				handlers.text({
					sub_type: "alert",
					message_RU: "Полностью заряжен!",
					message_PT: "Carga Completa!"
				});

			} else if (Level == 2 && steptwo) {
				handlers.text({
					sub_type: "message",
					message_RU: "Полностью заряжен!",
					message_PT: "(2)"
				});
				handlers.text({
					sub_type: "alert",
					message_RU: "Полностью заряжен!",
					message_PT: "Carga Completa!!"
				});
			}

			if (powerMsg !== null && skillid !== 399) {
				if (!steptwo && Level !== 4) {
					handlers.text({
						sub_type: "message",
						message_RU: powerMsg,
						message_PT: powerMsg
					});
				}

				if (steptwo && Level !== 2) {
					handlers.text({
						sub_type: "message",
						message_RU: powerMsg,
						message_PT: powerMsg
					});
				}
			}
		}

		if (skillid === 399)
			steptwo = true;
	}

	return {
		// 1 BOSS
		"nd-982-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-982-1000-106-0": [{ type: "text", class_position: "tank", sub_type: "message", message_PT: "Golpe pesado", message_RU: "Тяжелый удар" }],
		"s-982-1000-107-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message_PT: "Repelir Atras", message_RU: "Откид (конус)" },
			{ type: "text", class_position: "heal", sub_type: "message", message_PT: "Repelir Atras (Kaia)", message_RU: "Откид (кайя)" }
		],
		"s-982-1000-108-0": [{ type: "text", sub_type: "message", message_PT: "Espinhos no Chao", message_RU: "Байт (подлет)" }],
		"s-982-1000-109-0": [{ type: "text", sub_type: "message", message_PT: "Rochas (pequenas)", message_RU: "Камни (малые)" }],
		"s-982-1000-110-0": [{ type: "text", sub_type: "message", message_PT: "Rochas (Grandes)", message_RU: "Камни (большие)" }],
		"s-982-1000-301-0": [{ type: "text", sub_type: "message", message_PT: "Flor Canibal (Stun)", message_RU: "Оглушающие цветы" }],
		"s-982-1000-307-0": [{ type: "text", sub_type: "message", message_PT: "Gaiola (proibida)", message_RU: "Клетка" }],
		"s-982-1000-309-0": [{ type: "text", sub_type: "message", message_PT: "1 FLOR", message_RU: "1 цветок!" }],
		"s-982-1000-310-0": [{ type: "text", sub_type: "message", message_PT: "2 FLORES", message_RU: "2 цветка!" }],
		"s-982-1000-116-0": [{ type: "text", sub_type: "message", message_PT: "Ataque em tela cheia!", message_RU: "AOE!!" }],
		"s-982-1000-312-0": [{ type: "text", sub_type: "message", message_PT: "Flor Dourada!", message_RU: "Золотой цветок!!" }],

		// 2 BOSS
		"nd-982-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-982-2000-105-0": [{ type: "text", sub_type: "message", message_PT: "GIRAR Atras", message_RU: "Кувырок" }],
		"s-982-2000-113-0": [
		    { type: "text", sub_type: "message", message_PT: "Maos Stun", message_RU: "Стан" },
		    { type: "spawn", func: "circle", args: [false, 913, 0, 0, 10, 310, 0,2800] }  //Adicionado
        ],			
		"s-982-2000-114-0": [
			{ type: "text", sub_type: "message", message_PT: "ENTRAR", message_RU: "К нему" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 260, 0, 3000] }
		],
		"s-982-2000-116-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente e Atras", message_RU: "Вперед | Назад" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 180, 0, 90, 500, 0, 5000] }
		],
		"s-982-2000-301-0": [
			{ type: "text", sub_type: "message", message_PT: "SAIR + ESQUIVAR", message_RU: "От него | Эвейд" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 260, 0, 3000] }
		],
		"s-982-2000-302-0": [
			{ type: "text", sub_type: "message", message_PT: "ENTRAR + ESQUIVAR", message_RU: "К нему | Эвейд" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 260, 0, 3000] }
		],

		// 3 БОСС
		"nd-982-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-982-3000-99": [{ type: "func", func: start_boss }],
		"h-982-3000-30": [{ type: "text", sub_type: "message", message_PT: "30%", message_RU: "30%" }],
		"s-982-3000-118-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente Triplo ataque", message_RU: "Передняя комба" },
			{ type: "func", func: skilld_event, args: [118] }
		],
		"s-982-3000-143-0": [
			{ type: "text", sub_type: "message", message_PT: "ESQUERDA Atras ataque", message_RU: "Слева сзади" },
			{ type: "func", func: skilld_event, args: [143] }
		],
		"s-982-3000-145-0": [
			{ type: "text", sub_type: "message", message_PT: "ESQUERDA Atras ataque", message_RU: "Слева сзади" },
			{ type: "func", func: skilld_event, args: [145] }
		],
		"s-982-3000-146-0": [
			{ type: "text", sub_type: "message", message_PT: "ESQUERDA Atras (Pulsos)", message_RU: "Слева сзади (бублик)" },
			{ type: "spawn", func: "marker", args: [false, 215, 370, 0, 4500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 553, 215, 370, 15, 160, 2500, 4500] },
//			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 12, 320, 2500, 8000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 10, 480, 2500, 8000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 8, 640, 2500, 8000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 6, 800, 2500, 8000] },
			{ type: "func", func: skilld_event, args: [146] }
		],
		"s-982-3000-154-0": [
			{ type: "text", sub_type: "message", message_PT: "ESQUERDA Atras (Pulsos)", message_RU: "Слева сзади (бублик)" },
			{ type: "spawn", func: "marker", args: [false, 215, 370, 0, 4500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 553, 215, 370, 15, 160, 2500, 4500] },
//			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 12, 320, 2500, 8000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 10, 480, 2500, 8000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 8, 640, 2500, 8000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 6, 800, 2500, 8000] },
//			{ type: "func", func: skilld_event, args: [154] }
		],
		"s-982-3000-144-0": [
			{ type: "text", sub_type: "message", message_PT: "DIREITA Atras ataque", message_RU: "Справа сзади" },
			{ type: "func", func: skilld_event, args: [144] }
		],
		"s-982-3000-147-0": [
			{ type: "text", sub_type: "message", message_PT: "DIREITA Atras ataque", message_RU: "Справа сзади" },
			{ type: "func", func: skilld_event, args: [147] }
		],
		"s-982-3000-148-0": [
			{ type: "text", sub_type: "message", message_PT: "DIREITA Atras (Pulsos)", message_RU: "Справа сзади (бублик)" },
			{ type: "spawn", func: "marker", args: [false, 155, 388, 0, 4500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 553, 155, 388, 15, 160, 2500, 4500] },
//			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 12, 320, 2500, 8000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 10, 480, 2500, 8000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 8, 640, 2500, 8000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 6, 800, 2500, 8000] },
			{ type: "func", func: skilld_event, args: [148] }
		],
		"s-982-3000-155-0": [
			{ type: "text", sub_type: "message", message_PT: "DIREITA Atras (Pulsos)", message_RU: "Справа сзади (бублик)" },
			{ type: "spawn", func: "marker", args: [false, 155, 388, 0, 4500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 553, 155, 388, 15, 160, 2500, 4500] },
//			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 12, 320, 2500, 8000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 10, 480, 2500, 8000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 8, 640, 2500, 8000] },
//			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 6, 800, 2500, 8000] },
//			{ type: "func", func: skilld_event, args: [155] }
		],
		"s-982-3000-161-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente | Atras ataque", message_RU: "Назад | Вперед" },
			{ type: "func", func: skilld_event, args: [161] }
		],
		"s-982-3000-162-0": [
			{ type: "text", sub_type: "message", message_PT: "Frente | Atras ataque", message_RU: "Назад | Вперед" },
			{ type: "func", func: skilld_event, args: [162] }
		],
		"s-982-3000-213-0": [
			{ type: "text", sub_type: "message", message_PT: "Cauda", message_RU: "Хвост!" },
			{ type: "func", func: skilld_event, args: [213] }
		],
		"s-982-3000-215-0": [
			{ type: "text", sub_type: "message", message_PT: "Cauda!", message_RU: "Хвост!" },
			{ type: "func", func: skilld_event, args: [215] }
		],
		"s-982-3000-139-0": [
			{ type: "text", sub_type: "message", message_PT: "Esquerdo Seguro", message_RU: "Лево сейф" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 5000] },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 5000] },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 0, 8000, true, null] },
			{ type: "func", func: skilld_event, args: [139] }
		],
			"s-982-3000-139-1": [{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 4000] },    //Adicionado
			                     { type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 4000] }],//Adicionado
			"s-982-3000-139-2": [{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 3000] },    //Adicionado
			                     { type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 3000] }  //Adicionado
			//"s-982-3011-352-0": [{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 200] },   //Adicionado
			                     //{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 2000] }//Adicionado
		],
		"s-982-3000-150-0": [
			{ type: "text", sub_type: "message", message_PT: "Direito Seguro", message_RU: "Лево сейф" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 5000] },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 5000] },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 0, 8000, true, null] },
			{ type: "func", func: skilld_event, args: [150] }
		],
		    "s-982-3000-150-1": [{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 4000] },    //Adicionado
			                     { type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 4000] }],//Adicionado
		    "s-982-3000-150-2": [{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 3000] },    //Adicionado
			                     { type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 3000] }  //Adicionado
		   // "s-982-3000-352-0": [{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 2000] },  //Adicionado
			                     //{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 2000] }//Adicionado
		],		
		"s-982-3000-141-0": [
			{ type: "text", sub_type: "message", message_PT: "Esquerdo Seguro", message_RU: "Право сейф" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 5000] },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 5000] },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 0, 8000, true, null] },
			{ type: "func", func: skilld_event, args: [141] }
		],
			"s-982-3000-141-1": [{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 4000] },    //Adicionado
			                     { type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 4000] }],//Adicionado
			"s-982-3000-141-2": [{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 3000] },    //Adicionado
			                     { type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 3000] }  //Adicionado  
			//"s-982-3011-352-0": [{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 2000] },  //Adicionado
			                     //{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 2000] }//Adicionado
		],		
		"s-982-3000-152-0": [
			{ type: "text", sub_type: "message", message_PT: "Direito Seguro", message_RU: "Право сейф" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 5000] },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 5000] },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 0, 8000, true, null] },
			{ type: "func", func: skilld_event, args: [152] }
		],
			"s-982-3000-152-1": [{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 4000] },    //Adicionado
			                     { type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 4000] }],//Adicionado 
			"s-982-3000-152-2": [{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 3000] },    //Adicionado
			                     { type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 3000] }  //Adicionado
			//"s-982-3000-352-0": [{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 500, 0, 2000] },  //Adicionado
		                         //{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 500, 0, 2000] }//Adicionado
		],		
		"s-982-3000-300-0": [
			{ type: "text", sub_type: "message", message_PT: "DESPERTAR (Iframe)", message_RU: "Эвейд! (пробуждение 1)" },
			{ type: "func", func: skilld_event, args: [300] }
		],
		"s-982-3000-399-0": [
			{ type: "text", sub_type: "message", message_PT: "Despertar Secundario (Iframe)", message_RU: "Эвейд! (пробуждение 2)" },
			{ type: "func", func: skilld_event, args: [399] }
		],
		"s-982-3000-360-0": [
			{ type: "text", sub_type: "alert", message_PT: "EXPLOSAO - EXPLOSAO!!!", message_RU: "Взрыв!" },
			{ type: "func", func: skilld_event, args: [360] }
		]
	};
};