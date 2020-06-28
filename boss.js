module.exports = {
	// 进入副本提示文
	DungeonInfo : [
		{zone: 9767, string: 'Bem-Vindo a <font color="#8eff05">Demokron Factory</font> <font color="#09c0e1">Normal</font>'},
		{zone: 9067, string: 'Bem-Vindo a <font color="#8eff05">Demokron Factory</font> <font color="#d92b3c">Dificil</font>'},
		{zone: 9770, string: 'Bem-Vindo a <font color="#8eff05">Ruinous Manor</font> <font color="#09c0e1">Normal</font>'},
		{zone: 9970, string: 'Bem-Vindo a <font color="#8eff05">Ruinous Manor</font> <font color="#d92b3c">Dificil</font>'},
		{zone: 9781, string: 'Bem-Vindo a <font color="#8eff05">Velik Sanctuary</font> <font color="#09c0e1">Normal</font>'},
		{zone: 9981, string: 'Bem-Vindo a <font color="#8eff05">Velik Sanctuary</font> <font color="#d92b3c">Dificil</font>'},
		{zone: 9735, string: 'Bem-Vindo a <font color="#8eff05">RK-9Kenel</font> <font color="#09c0e1">Normal</font>'},
		{zone: 9935, string: 'Bem-Vindo a <font color="#8eff05">RK-9Kenel</font> <font color="#d92b3c">Dificil</font>'},
		{zone: 9739, string: 'Bem-Vindo a <font color="#8eff05">Red Refuge</font> <font color="#09c0e1">Normal</font>'},
		{zone: 9939, string: 'Bem-Vindo a <font color="#8eff05">Red Refuge</font> <font color="#d92b3c">Dificil</font>'},
		{zone: 9720, string: 'Bem-Vindo a <font color="#8eff05">Antaroth Abyss</font> <font color="#09c0e1">Normal</font>'},
		{zone: 9920, string: 'Bem-Vindo a <font color="#8eff05">Antaroth Abyss</font> <font color="#d92b3c">Dificil</font>'},
		{zone: 3017, string: 'Bem-Vindo a <font color="#8eff05">Antaroth Abyss</font> <font color="#FF0000"> 7 Pessoas</font>'},
		{zone: 9783, string: 'Bem-Vindo a <font color="#8eff05">Dark Reach Citadel</font> <font color="#09c0e1">Normal</font>'},
		{zone: 9983, string: 'Bem-Vindo a <font color="#8eff05">Dark Reach Citadel</font> <font color="#d92b3c">Dificil</font>'},
		{zone: 3018, string: 'Bem-Vindo a <font color="#8eff05">Dark Reach Citadel</font> <font color="#FF0000"> 7 Pessoas</font>'},
		{zone: 9782, string: 'Bem-Vindo a <font color="#8eff05">Grotto of Lost Souls</font> <font color="#09c0e1">Normal</font>'},
		{zone: 9982, string: 'Bem-Vindo a <font color="#8eff05">Grotto of Lost Souls</font> <font color="#d92b3c">Dificil</font>'},
		{zone: 3019, string: 'Bem-Vindo a <font color="#8eff05">Grotto of Lost Souls</font> <font color="#FF0000"> 7 Pessoas</font>'},		
		{zone: 3101, string: 'Bem-Vindo a <font color="#8eff05">Gossamer Vault</font> <font color="#09c0e1">Normal</font>'},
		{zone: 3201, string: 'Bem-Vindo a <font color="#8eff05">Gossamer Vault</font> <font color="#d92b3c">Dificil</font>'},
		{zone: 3023, string: 'Bem-Vindo a <font color="#8eff05">Akalath Quarantine</font>'},
		{zone: 3020, string: 'Bem-Vindo a <font color="#8eff05">Sea Of Honor</font>'},
		{zone: 9044, string: 'Bem-Vindo a <font color="#8eff05">Bahaars Sanctum</font>'},
		{zone: 3102, string: 'Bem-Vindo a <font color="#8eff05">Draakon Arena</font> <font color="09c0e1">Normal</font>'},
		{zone: 3202, string: 'Bem-Vindo a <font color="#8eff05">Draakon Arena</font> <font color="#deda12">Beta</font>'},
		{zone: 3026, string: 'Bem-Vindo a <font color="#8eff05">Corrupted Skynest</font> <font color="#09c0e1">Normal</font>'},
		{zone: 3126, string: 'Bem-Vindo a <font color="#8eff05">Corrupted Skynest</font> <font color="#d92b3c">Dificil</font>'},
		{zone: 3027, string: 'Bem-Vindo a <font color="#8eff05">Forbidden Arena Challenge</font>'}
	],
	// 费勒诺的实验室 (Demokron Factory)
	DF_BOSS_1 : [
		
	],
	DF_BOSS_2 : [
		
	],
	DF_BOSS_3 : [
		{id: 205, msg: 'Repelir (devagar)'},
		{id: 218, msg: 'Repelir'},
		{id: 211, msg: 'Difusao (Dentro-> Fora)!'},
		{id: 212, msg: 'Encolhimento (Fora-> Dentro)'},
		{id: 219, msg: 'Dentro e fora'}
	],
	// 拉坎里斯的废墟 (Ruinous Manor)
	RM_BOSS_1 : [
		{id: 107, msg: 'Spray frontal (castanho)'}
	],
	RM_BOSS_2 : [
		{id: 106, msg: 'Inserir terra (Stun)'},
		{id: 111, msg: 'Ataque continuo (imparavel)'}
	],
	RM_BOSS_3 : [
		// 102 101 103          后喷
		{id: 103, msg: 'Repelir (maos)'},
		// 101 102 104 105     不推
		// 101 102 104 106 107 推坦
		{id: 106, msg: 'Empurre para a frente(Bronzeado)'},
		{id: 110, msg: 'Varredura de cauda!!'}, // 108 110 111
		// 317 分散吃球
		// 319 分散吃球 愤怒
		{id: 113, msg: 'FORA do circulo'}, // 113  114 115
		{id: 116, msg: 'DENTRO Circulo'}, // 116  117 118
		// < 30% 
		{id: 311, msg: 'Empurrando pessoas!!'},
		{id: 322, msg: 'Destino!!(buff)'}
	],
	// 贝里克神殿 (Velik's Sanctuary)
	VS_BOSS_1 : [
		{id: 301, msg: 'Veneno(Geral)'},
		//{id: 304, msg: 'Ataque Dentro e Fora'},
		//{id: 401, msg: '<<<<ESQUERDO SEGURO', msg_tk: '->', sign_degrees: 270},
		//{id: 402, msg: 'DIREITO Seguro>>>>', msg_tk: '<-', sign_degrees:  90}
	],
	VS_BOSS_2 : [
		//{id: 106, msg: 'Atras'},
		//{id: 108, msg: 'Frente'},
		//{id: 131, msg: '<--ESQUERDO seguro'},
		//{id: 130, msg: 'DIREITO Seguro-->'},
		{id: 134, msg: 'Debuff'}
	],
	VS_BOSS_3 : [
		{id: 116, msg: 'Stun Frontal'},
		{id: 138, msg: 'Cuidado!!'},
		{id: 144, msg: 'SAIR'},
		{id: 145, msg: 'ENTRAR'},
		// 149 前刺(坦)
		{id: 151, msg: 'Stun + Tres capturas)'},
		{id: 152, msg: 'Stun Frontal - Empurrar Atras (repelir)'},
		{id: 701, msg: 'Empurrar atras - Ataque Frontal '},
		{id: 103, msg: 'Raios (Espalhar)'},
		{id: 301, msg: 'Bomba (Juntar) + Cleanse'},
		{id: 404, msg: 'Debuff (perto)'},
		{id: 105, msg: 'Raios (Juntar)'},
		{id: 302, msg: 'Bomba (Juntar) No Cleanse'},
		{id: 405, msg: 'Debuff (longe)'},
		{id: 401, msg: 'Dissipar!!'},
		{id: 402, msg: 'Halo!!'}
	],
	//            0           1           2           3           1+3=4       2+3=5       3+3=6
	VS_TipMsg : ["Proximo -> ", "Debuff (Perto)", "Raios (Espalhar)", "Bomba (Juntar + Claense)", "Debuff (Longe)", "Raios (Juntar)", "Bomba(Juntar No Cleanse)"],
	// RK-9机库 (RK-9 Kennel)
	RK_BOSS_1 : [
		{id: 104, msg: 'Stun Frontal'},
		{id: 112, msg: 'Ataque ATRAS'},
		{id: 304, msg: 'SAIR!!'},
		{id: 305, msg: 'ENTRAR!!'},
		{id: 306, msg: 'Bombda e demolicao!!'},
		{id: 307, msg: 'PUXAR'},
		{id: 309, msg: 'PULAR'},
		// 上级披萨鉴定
		{id: 315, msg: 'Frente Direita'}, // 1
		{id: 319, msg: 'Frente Direita'},
		{id: 311, msg: 'Superior Direito'}, // 2
		{id: 323, msg: 'Superior Direito'},
		{id: 312, msg: 'Canto inferior direito'}, // 3
		{id: 324, msg: 'Canto inferior direito'},
		{id: 316, msg: 'Voltar a direita'}, // 4
		{id: 320, msg: 'Voltar a direita'},
		{id: 313, msg: 'Voltar a esquerda'}, // 5
		{id: 321, msg: 'Voltar a esquerda'},
		{id: 317, msg: 'Inferior esquerdo'}, // 6
		{id: 325, msg: 'Inferior esquerdo'},
		{id: 318, msg: 'Superior esquerdo'}, // 7
		{id: 322, msg: 'Superior esquerdo'},
		{id: 314, msg: 'Frente Esquerda'}, // 8
		{id: 326, msg: 'Frente Esquerda'}
	],
	RK_BOSS_2 : [
		{id: 102, msg: 'Ataque a Frente'},
		{id: 108, msg: 'Ataque ATRAS (Repelir)'},
		{id: 105, msg: 'Girar (Repelir)'},
		// 上级
		{id: 305, msg: 'Adsorcao (fechar)'},
		{id: 304, msg: 'Explosao (Saia)!!'}
	],
	RK_BOSS_3 : [
		{id: 117, msg: 'S Mao ESQUERDA'}, // 117 121 123
		{id: 118, msg: 'S Mao ESQUERDA'}, // 118 121 123
		{id: 116, msg: 'S Mao DIREITA'}, // 116 120 122
		{id: 119, msg: 'S Mao DIREITA'}, // 119 120 122
		{id: 128, msg: 'Punho de Foguete - Atras'},
		// 128 129 火箭拳 | 130 131 后喷
		{id: 321, msg: 'Escudo!!'},
		{id: 323, msg: 'Radar!!'},
		{id: 324, msg: 'SAIR Circulo'}
		// 305 鉴定
	],
	RK_TipMsg : ["Proxima -> ", "SAIR", "ENTRAR", "ONDA", "ESCUDO em 10s"],
	// 革命团总部 (Red Refuge)
	RR_BOSS_1 : [
	
	],
	RR_BOSS_2 : [
		{id: 119, msg: 'Spray frontal'},
		{id: 120, msg: 'Empurrar (Repelir)'}
	],
	RR_BOSS_3 : [
		{id: 115, msg: 'Rugindo (tontura)!!'},
		{id: 175, msg: 'Rugido verdadeiro (tontura)'},
		{id: 201, msg: 'Cara verdadeira (traco)'}
	],
	// 安塔洛斯的深渊 (Antaroth's Abyss)
	AA_BOSS_1 : [
        //{id: 300, msg: 'Jogar para o Alto(Iframe)'} //deletionTimer: true},
	],
	AA_BOSS_2 : [
        //{id: 106, msg: 'GIRO'},
        //{id: 106, msg: 'GIRO'}, // rage
        //{id: 119, msg: 'FORA Seguro'},
        //{id: 220, msg: 'DENTRO Seguro'}  
	],
	AA_BOSS_3 : [
		//{id: 113, msg: 'Frente - Atras stun'},
        //{id: 113, msg: 'Frente - Atras stun'},
        //{id: 111, msg: 'DIREITO Seguro, SAIR ->'},
        //{id: 109, msg: '<- ESQUERDO Seguro, ENTRAR'},
		{id: 310, msg: 'Onda de agua'},
		{id: 311, msg: 'Onda de agua'},
		{id: 312, msg: 'Onda de agua'},
		{id: 313, msg: 'Onda de agua'},
		{id: 314, msg: 'Onda de agua'}
       // /{id: 400, msg: 'Fantasma Slash x3'}, // 三幻影-剑气 205 500 400 204 204
		//{id: 401, msg: 'Circulo Fantasma x3'},  // 三幻影-转圈 205 500 401 115 309
        //{id: 104, msg: 'Atras Stun'},
        //{id: 104, msg: 'Atras stun'}
	],
	// 泰内布利斯城堡 (Dark Reach Citadel)
	DRC_BOSS_1 : [
		{id: 108, msg: 'Salto atras (Stun)'},
		{id: 109, msg: 'Empurrar Atras (repelir)'},
		{id: 119, msg: 'Poderoso'},
		{id: 127, msg: 'Trovao!!'}
	],
	DRC_BOSS_2 : [
		{id: 105, msg: '(Bata na mosca)'},
		{id: 110, msg: 'Agachamento frontal'},
		{id: 111, msg: 'Pontape na lateral direita (repelir)'},
		{id: 115, msg: 'Chute para tras esquerdo (repelir)'},
		{id: 119, msg: 'Salto (tontura)'},
		{id: 120, msg: 'Soco dianteiro | chute traseiro (repelir)'},
		{id: 316, msg: 'Chama (explosao)'},
		{id: 317, msg: 'Onda de agua'},
		{id: 318, msg: 'Tapete (tonturas)'}
	],
	DRC_BOSS_3 : [
		{id: 106, msg: 'Empurre para a frente'},
		{id: 109, msg: 'Insercao frontal (vertigem)'},
		{id: 112, msg: 'Varredura traseira (repelir)'},
		{id: 301, msg: 'Espinho a terra'},
		{id: 303, msg: 'DIREITO>>>>'},
		{id: 306, msg: '<<<<ESQUERDA'},
		{id: 309, msg: 'Olhar!!'},
		{id: 315, msg: 'Medo (succao de sangue)'}
	],
	DRC_TipMsg : ["100%能量!!"],
		// 里安的地下殿堂 (Grotto of Lost Souls)
	GLS_BOSS_1 : [
		{id: 106, msg: 'Golpe pesado'},
		{id: 107, msg: 'EMPURAO (repelir)'},
		{id: 109, msg: 'Rochas (pequena)'},
		{id: 110, msg: 'Rochas (Grande)'},
		{id: 116, msg: 'Ataque em tela cheia!!'},
		{id: 301, msg: 'Flor Canibal (STUN)'},
		{id: 307, msg: 'Gaiola (proibida)'},
		{id: 309, msg: '1 FLOR - Identificada!!'},
		{id: 310, msg: '2 FLORES - Identificada!!'},
		{id: 312, msg: 'Flor Dourada!!'}
	],
	GLS_BOSS_2 : [
		{id: 105, msg: 'GIRAR Atras'},
		{id: 113, msg: 'Maos (STUN)'},
		{id: 114, msg: 'ENTRAR'},
		{id: 116, msg: 'Frente - Atras'},
		{id: 301, msg: 'SAIR + ESQUIVAR'},
		{id: 302, msg: 'ENTRAR + ESQUIVAR'}
	],
	GLS_BOSS_3 : [
//		{id: 118, msg: 'FRENTE Triplo (Esquerdo-Direito)'},
//		{id: 143, msg: '<<<<ESQUERDO Atras'},
//		{id: 145, msg: '<<<<ESQUERDO Atras'},
//		{id: 146, msg: '<<<ESQUERDA Traseira(Pulsos)'},
//		{id: 154, msg: '<<<ESQUERDA Traseira(Pulsos)'},
//		{id: 144, msg: 'DIREITA Atras>>>'},
//		{id: 147, msg: 'DIREITA Atras>>>'},
//		{id: 148, msg: 'DIREITA Traseira(Pulsos)>>>>'},
//		{id: 155, msg: 'DIREITA Traseira(Pulsos)>>>>'},
//		{id: 161, msg: 'Frente - Atras'},
//		{id: 162, msg: 'Frente - Atras'},
//		{id: 213, msg: 'Cauda!!'},
//		{id: 215, msg: 'Cauda!!'},
//		{id: 139, msg: '<<<<<ESQUERDA Segura'}, //151
//		{id: 150, msg: '<<<<<ESQUERDA Segura'}, //151
//		{id: 141, msg: 'DIEITO Seguro>>>>>'}, //153
//		{id: 152, msg: 'DIEITO Seguro>>>>>'}, //153
//		{id: 300, msg: 'DESPERTAR', level_Msg: ['1!', '2!!', '3!!!', '<font color="#FF0000">4!!!!</font>']},
//		{id: 399, msg: 'Despertar Secundario', level_Msg: ['1!', '<font color="#FF0000">2!!</font>']},
//		{id: 360, msg: 'Explosao !! Explosao!!'}
	],
	// 费尔奎娜巢穴 (Gossamer Vault)
	GV_BOSS_1 : [
		{id: 124, msg: 'Stun Frontal'},
		{id: 104, msg: 'Stun Frontal'},
		{id: 133, msg: 'Pular (Rapido)'},
		{id: 113, msg: 'PULAR (Lento)'},
		{id: 138, msg: 'Pular (Rapido)'},
		{id: 118, msg: 'PULAR (Lento)'},
		// 147 向前连续攻击
		{id: 149, msg: 'Poder da mao ESQUERDA (voando)'},
		{id: 148, msg: 'Poder da mao DIREITA (voando)'},
		
		{id: 127, msg: 'Empurrar ATRAS (Rapido)'},
		{id: 107, msg: 'Empurrar ATRAS (Lento)'},
		{id: 131, msg: 'SPRAY ATRAS (Rapido)'},
		{id: 111, msg: 'SPRAY ATRAS (Lento) '},
		{id: 132, msg: '<-Spray ESQUERDO e DIREITO->'},
		{id: 112, msg: '<-Spray ESQUERDO e DIREITO->'},
		{id: 139, msg: 'Spray FRENTE e ATRAS'},
		{id: 119, msg: 'Spray FRENTE e ATRAS'},
		{id: 314, msg: 'Circulo DENTRO e FORA (Rapido)'},
		{id: 313, msg: 'Circulo DENTRO e FORA (Lento)'},
		
		{id: 305, msg: 'Pizza'}, // 143 / 145
		
		{id: 312, msg: 'Tela cheia (Repelir)(Rapido)'},
		{id: 311, msg: 'Tela Cheia (Repelir)(Lento) '}
	],
	GV_BOSS_2 : [
		{id: 105, msg: 'Espinho da Frente'}, // 104 105
		{id: 109, msg: 'Esquivar (devagar)'},
		{id: 108, msg: 'Ataque Frontal - Ataque ATRAS'},
		{id: 228, msg: 'Juntar time'},
		{id: 227, msg: 'Explosao!!'},
		{id: 230, msg: 'AOE!!'},
		{id: 231, msg: 'SAIR'},
		{id: 232, msg: 'ENTRAR'},
		{id: 235, msg: 'Debuff!!'},
		{id: 236, msg: '(Repelir a Frente)'}
	],
	// 贝尔亚克城堡 (Akalath Quarantine)
	AQ_BOSS_1 : [
		{id: 1104, msg: 'Saltar Stun'},
		{id: 2104, msg: 'Saltar Stun'},
		{id: 1110, msg: 'Frontal Stun'},
		{id: 2110, msg: 'Frontal Stun'},
		{id: 1111, msg: 'Esquerda SLASH'},
		{id: 1113, msg: 'Esquerda SLASH'}, // 1112 1113
		{id: 2111, msg: 'Esquerda SLASH'},
		{id: 2113, msg: 'Esquerda SLASH'}, // 2112 2113
		{id: 1112, msg: 'Direita SLASH'},
		{id: 1114, msg: 'Direita SLASH'}, // 1111 1114
		{id: 2112, msg: 'Direita SLASH'},
		{id: 2114, msg: 'Direita SLASH'}, // 2111 2114
		{id: 1115, msg: 'Semi-circulo Traseiro'},
		{id: 2115, msg: 'Semi-circulo Traseiro'},
		{id: 1116, msg: 'Explosao (Shield/Kaias)!!'}, // 1117
		{id: 2116, msg: 'Explosao (Shield/Kaias)!!'}, // 2117
		{id: 3107, msg: 'Onda a Frente'},
		{id: 3115, msg: 'Ataque rotativo'}, // 1106 2106
		{id: 3116, msg: 'Circulos + Ataque Rotativo'}, // 1106 2106
		{id: 3119, msg: 'Maldicao ', TIP: ["SAIR", "ENTRAR"]}, // 红出 | 蓝进
		{id: 3220, msg: 'Maldicao ', TIP: ["ENTRAR", "SAIR"]}  // 红进 | 蓝出
	],
	AQ_BOSS_2 : [
		{id: 164, msg: 'Ataque de (SANGRAMENTO)'},
		{id: 166, msg: 'Ataque Atras (Vire-se)'}, // 169 166 前搓 左购拳 右勾拳
		{id: 175, msg: 'Rugindo (tontura)!!'},
		{id: 181, msg: 'Rochas'},
		// 214 插地板x3 181
		{id: 182, msg: 'Pise no chao (derrubar)'}, // 183 184
		// 302 209 点名-踩地(击倒) 182 183 184
		{id: 185, msg: 'Explosao (Shield/Kaias)!!'},
		{id: 202, msg: 'Facada Trasera + Frontal'},  // 177
		{id: 207, msg: 'Fantasma x5 (sangramento)'}, // 204 206 205
		{id: 212, msg: 'Flash (sangramento)'}    // 180
	],
	// 金麟號 (Sailing Instance)
	SI_BOSS_1 : [
		{id: 104, msg: 'Succao Azul (Esquiva)'}
	],
	SI_BOSS_2 : [
		{id: 103, msg: 'Succao Azul (Esquiva)'}
	],
	SI_BOSS_3 : [
		{id: 108, msg: 'Ataque a Frente'},
		{id: 128, msg: 'Golfe (voar)'},
		{id: 129, msg: 'Ataque Atras'},
		{id: 135, msg: "Pular corda"},
		{id: 204, msg: "30% Transformar"},
		{id: 137, msg: 'Espalhar'},
		{id: 139, msg: 'Encolher'},
		{id: 133, msg: 'Espalhar (voar)'},
		{id: 127, msg: '', TIP: ["Siga o BOS", "Esmagar"]},
		
		{id: 121, msg: ''},         // Antes de esmagar(Fora) | Circulo (dentro) (verde)_venha  +No.1 buff
		{id: 122, msg: ''},         // Circulo(Dentro) | Esmagar (fora) (Roxo)_Saia  +No.1 buff
	//  {id: 124, msg: 'Antes de esmagar'},     // Primeiro hit / Segundo Hit
	//  {id: 125, msg: 'Circulo'},     // Primeiro hit / Segundo Hit
		{id: 123, msg: ''},         // Carregue antes de esmagar | (Fora) (Verde)_Explosão  +No.2 buff
		{id: 120, msg: ''},         // Circulo carregado | (Dentro) (Roxo)_Abismo  +No.2 buff
	//  {id: 126, msg: 'Esmagar'},  // Terceiro Hit
	//  {id: 134, msg: 'Grande circulo'},  // Terceiro Hit
	],
	//           121+120=241 122+120=242           121+123=244 122+123=245
	SI_TipMsg : ["SAIR-ENTRAR-ENTRAR", "ENTRAR-SAIR-ENTRAR","Stun(ESQUIVAR)!!!", "SAIR-ENTRAR-SAIR", "ENTRAR-SAIR-SAIR"],
	// 凯尔赛克隐藏地(Corrupted Skynest)
	CK_BOSS : [
		// 120 猛烈的咆哮
		// 162 猛烈的咆哮
		// 106 前方-驴打滚
		// 156 前方-驴打滚
		// 205 前方跳跃(回避)
		// 206 后方跳跃(闪避)
		// 131 广域1实例
		{id: 103, msg: 'Cauda (voando!!!)'},
		{id: 153, msg: 'Cauda (voando!!!)'},
		{id: 108, msg: 'Vire a Direita (Repelir)'},
		{id: 158, msg: 'Vire a Direita (Repelir!!)'},
		{id: 109, msg: 'Vire a Esquerda (Repelir!!)'},
		{id: 159, msg: 'Vire a Esquerda (Repelir)'},
		{id: 118, msg: 'Jogar ao alto (Iframe)'},
		{id: 160, msg: 'Jogar ao alto (Iframe)'},
		{id: 137, msg: '[Corra]Distanciar do bos 50m'},
		{id: 138, msg: 'Ataque Amplo!!'},
		{id: 110, msg: 'Mao de FOGO (FORA)'},
		{id: 112, msg: 'Mao de GELO (FORA)'},
		{id: 114, msg: 'Fogueira a Frente DOT (FORA)'},
		{id: 139, msg: '[Temperatura] 60% TODOS (GELO)'},
		{id: 140, msg: '[Temperatura] 40% TODOS (FOGO)'},
		// 164 [温度] 100° 全灭
		// 165 [温度] 0° 全灭
		// 切换DeBuff
		// 101 右脚(火_闪避)
		// 151 右脚(火_闪避)
		// 102 左脚(冰_格挡)
		// 152 左脚(冰_格挡)
		// 107 双脚_快
		// 157 双脚_快
		{id: 145, msg: 'Pes-Lentos (STUN)'},
		{id: 104, msg: 'AOE-Magia de GELO (Grande)'},
		{id: 154, msg: 'AOE-Magia de GELO (Pequeno)'},
		{id: 105, msg: 'AOE-Magia de FOGO (Grande)'},
		{id: 155, msg: 'AOE-Magia de FOGO (Pequeno)'},
		// 内外鉴定
		{id: 212, msg: 'Fogo Dentro'}, // 212 -> 141
		{id: 213, msg: 'Gelo Dentro'}, // 213 -> 143
		{id: 214, msg: 'Gelo Dentro'}, // 214 -> 142
		{id: 215, msg: 'Fogo Dentro'}, // 215 -> 144
	// 以下未知
		{id: 119, msg: 'Rosnado fraco'},
		{id: 161, msg: 'Rosnado fraco'},
		{id: 124, msg: 'Altitude fraca'},
		{id: 163, msg: 'Altitude fraca'},
		
		{id: 116, msg: '(Chama de Fogo)Energetico'},// "(화염브레스용)액티브무브_Run_노멀"
		{id: 117, msg: 'Chama Azul'},// "화염브레스_breath_노멀"
		
		{id: 121, msg: 'Maldicao da Ressurreicao'},// "부활저주_SpwanNpc_노멀"
		{id: 122, msg: 'Convocar subordinados'},// "부하소환_reactionAtk_노멀"
		{id: 123, msg: 'Feitico Espera-Ganho'},// "자기버프_Wait_노멀"
		
		{id: 125, msg: 'Proibido Atacar perto'},// "근거리금지_발동_SpawnNpc_노멀"
		{id: 126, msg: 'Proibido Atacar Longe'},// "원거리금지_발동_SpawnNpc_노멀"
		{id: 127, msg: 'Proibido Curar'},// "회복금지_발동_SpawnNpc_노멀"
		{id: 128, msg: 'Proibicao de ataque perto finalizado'},// "근거리금지_종료_SpawnNpc_노멀"
		{id: 129, msg: 'Proibicao de ataque Lonte finalizado'},// "원거리금지_종료_SpawnNpc_노멀"
		{id: 130, msg: 'Proibicao de cura Finalizado'},// "회복금지_종료_SpawnNpc_노멀"
		
		{id: 132, msg: 'Chamada alvo(475)'},// "오브젝트소환(475)_aggrochange_노말"
		{id: 133, msg: 'Chamada alvo(3026)'},// "오브젝트소환(3026)_aggrochange_노말"
		{id: 134, msg: 'Escravo de Area ampla'},// "광역1인노예_aggrochange_노말"
		
		{id: 135, msg: '[Corra]Kelsaik Rugido forte'},// "[폭주]켈사이크_강한포효_Roar_노멀"
		{id: 136, msg: '[Corra]Kelsaik Acao do Anel'},// "[폭주]켈사이크_루프동작_노멀"
		
		{id: 150, msg: 'Ativo para celular'},// "액티브무브_Run_노멀"
		{id: 201, msg: 'Ronco'},// "헉헉동작_Groggy_노멀"
		{id: 204, msg: 'Substituicao'},// "어그로체인지_aggrochange_노멀"
		{id: 209, msg: 'Lembrete de modo'},// "모드알람_ModeAlarm_더미"
		{id: 210, msg: 'Acoes patrocinadas'},// "스폰동작_Spawn_노멀"
		{id: 211, msg: 'Fim de rotacao'},// "회전종료용_ModeAlarm_노멀"
		{id: 302, msg: 'Aleatorio Buff'}// "무적버프_wait_노멀"
	],
			//            0     1     2      3
	CK_TipMsg : ["", "", "", ""],
	// 狂气竞技场 (Forbidden Arena)
	FA_BOSS : [
		{id: 108, msg: 'Espadada Frontal (Lenta)'},    // 101 121 122 連續攻擊 -> 108 一刀兩斷(坦)
		{id: 355, msg: 'Quebra de mandibula'},    // 102 121 103 連續攻擊 -> 355 右手蓄力 -> 114 下巴粉碎
		{id: 135, msg: 'Espadada Frontal (Lenta)'},    //         104 連續攻擊 -> 135 左手蓄力 -> 130 一刀兩斷
		{id: 111, msg: 'Stun - Fronta'}, //         104 連續攻擊 -> 111 刀背打擊 -> 130 一刀兩斷
		{id: 112, msg: 'Salto Aleatorio - Espada'}, //     121 102 連續攻擊 -> 112 後退踢擊 -> 130 一刀兩斷
		{id: 109, msg: 'salto a Frente - Espadada'},         // 109 向下劈擊 -> 402 等待     -> 130 一刀兩斷
		
//		{id: 116, msg: 'Bloco perfeito (Iframe)'},    // 116 斬擊
//		{id: 140, msg: 'Bloco perfeito (Iframe)'},    // 140 斬擊
		
		{id: 145, msg: '3 Circulos - Slash'},  // 145 重擊斬 139 迴旋砍擊x2 -> 140 斬擊
		{id: 136, msg: '2 Circulos - Golpe Frontal'},  // 136 重擊斬 144 迴旋砍擊x1 -> 130 一刀兩斷
		
		{id: 141, msg: 'Ataque Circular - Espadada Frontal'}, // 141 破壞氣魄+迴旋砍擊x2 -> 146 114 130
		{id: 146, msg: 'Ataque Circular - Espadada Frontal'}, // 146 一刀兩斷       -> 114 下巴粉碎 -> 130 一刀兩斷
		{id: 142, msg: 'Ataque com Giro '}, // 142 破壞氣魄+迴旋砍擊x2 -> 143 114 130
		{id: 143, msg: 'Espadada Frontal'},        // 143 一刀兩斷(取消) -> 114 下巴粉碎 -> 130 一刀兩斷
		
		{id: 151, msg: 'Tres cortes - Tamanho Unico'}, // 151 149 148三斬 -> 130 一刀兩斷
		{id: 117, msg: 'Flash (Iframe)'},  //    117 瞬閃点名 -> 130 一刀兩斷
		{id: 356, msg: 'Flash (Iframe)'},  //    356 瞬閃点名 -> 147 一刀兩斷
		{id: 134, msg: 'Cuidado (Ataque Atras)'},  //    134 要害攻擊 -> 147 一刀兩斷
		
//		{id: 357, msg: 'SAIR + Explosao (Iframe)'}, // 357 吸收力量 -> 110 起身攻擊 -> 氣斬
		{id: 350, msg: 'SAIR-> ENTRAR'},     // 350 吸收力量                 -> 302 甜甜圈
		
//		{id: 351, msg: 'Quebrar Escudo!!'},       // 护盾开始 环形爆发
		{id: 401, msg: '30% (Iframe)'}           // 开始
	],
	FA_TipMsg : ["Carga de Skill Completa (Cuidado)!!"]
}