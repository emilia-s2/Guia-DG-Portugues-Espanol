Guide-DG
======

##  Dungeons Suportadas
ID | Nome das Dungeons 
--- | ---
7011 | Guardian Blightwood
7015 | Guardian Balder's Refuge
9044 | Bahaar's Sanctum 
3023 | Akalath Quarantine 
3020 | Sea of Honor 
3026 | Corrupted Skynest 
3126 | Corrupted Skynest (Hard) 
3102 | Draakon Arena 
3103 | Forbidden Arena [Undying Warlord]]
3037	| Bahaar's Sanctum (Treino)
9770	| Ruinous Manor (Normal)
9970	| Ruinous Manor(Hard)
3101	| Gossamer Vault (Normal)
3104	| Catalepticon (Normal)
3204	| Catalepticon (Hard)
3106 | Killing Grounds
3206 | Crimson Killing Grounds
9070 | Manglemire

----

### Tera-Guide
O módulo Dungeons Guide mostra notificações em voz, mensagens na tela, marcadores de área de ataque e mecânica dos boses. Disponível em idioma *Português*.

----

### Outras Traduçôes
- **[Inglês (English) by HSDN](https://github.com/hsdn/tera-guide)**
- **[Taiwanese (臺灣話) by michengs](https://github.com/michengs/Dungeon-guide)**

---
## Dependencies
###  São instalados automaticamente pelo toolbox

- **[tera-guide-core](https://github.com/hsdn/tera-guide-core)**

------

## Comandos 
proxy(/8) | Comando descrição 
--- | ---
**guia**<br>(padrão: on) | Module on/off
**guia&nbsp;gui** | Mostrar Janela de personalização GUI
**guia&nbsp;help** | Lista de todos os comandos suportados
**guia&nbsp;stream**<br>(padrão: off) | Mensagens apenas no chat, e todos os objetos de marcações serão destivados ON/OFF
**guia&nbsp;lNotice**<br>(padrão: on) | Mensagem enviada para Take notice ON/OFF 
**guia&nbsp;gNotice**<br>(padrão: off) | Mensagem enviada para Chat party ON/OFF
**guia&nbsp;spawnObject**<br>(padrão: on) | Objetos de marcação ON/OFF
**guia&nbsp;dungeons** | Lista de todas as dungeons + IDs
**guia&nbsp;verbose&nbsp;+`ID`**<br>(padrão: todas on) |Guia menssagem para alguma DG específica ON/OFF<br>EX: (guia verbose 9781) ID=Velik's Sanctuary
**guia&nbsp;spawnObject&nbsp;+`ID`**<br>(padrão:todas on) | Marcação para alguma DG específica ON/OFF<br>Ex: (guia spawnObject 9781) ID=Velik's Sanctuary 


---

## Configurações de Menssagens
 
 ATENÇÃO | Ao digitar o comando **lNotice** o *(I) de INotice* não  é um *(I)* maiúsculo, e sim um *(L)* minúsculo
---- | ----


* Quando o **lNotice** estiver *Ativado*, os avisos serão exibidos na parte inferior da tela como Take Notice.

  ![](https://i.imgur.com/qAVCiuv.jpg)
- **[Confira em tamanho real aqui](https://camo.githubusercontent.com/c8cc521b78404cf796eb6b87d0f8b10fbda2e9a2/68747470733a2f2f692e696d6775722e636f6d2f465a5046397a742e706e67)**

##

* Quando **lNotice** estiver *Desativado* e o **gNotice** *Desativado*, os avisos serão exebidos na parte superior da tela, sem ser na forma de Take Notice. (Cor padrão da menssagem é verde, mas você pode alterar para a cor que dejesar, basta digitar o comando /8 guia help para obter a lista completa de cores disponíveis, ou usar o comando (/8 guia gui)  
  
  ![](https://i.imgur.com/R2PuTGK.jpg)
- **[Confira em tamanho real aqui](https://camo.githubusercontent.com/76e36f0630a62a456a43324790b16fce124d4a13/68747470733a2f2f692e696d6775722e636f6d2f6d3656515738552e706e67)** 

##
* Quando o modo **Stream** estiver *Ativado* as mensagens serão exebidas unicamente no chat, e todas as marcaçoes serão desativadas

  ![](https://i.imgur.com/kbRd3Xd.png)

##   
   #### Interface GUI
* Uma Janela de comandos, onde você pode mudar e personalizar o Guia como desejar<br>( comando de Ativação /8 guia gui )
 
  ![](https://i.imgur.com/YIRLVmM.png) 

###  

## Credits
- **[Kasea](https://github.com/Kaseaa)** - Desenvolvedor original do módulo Tera-Guide
- **[hsdn](https://github.com/hsdn)** - Autor atual das principais funçoes e novidades
- **[michengs](https://github.com/michengs)** - Autor do código base para a maioria dos guias e núcleo do módulo
- **[Multarix](https://github.com/Multarix)** - Autor do guia RR e também fazendo alterações na tradução para o inglês
- **[Kuroine](https://github.com/Kuroine)** - Autor do código base para o guia DA
- **[ZC](https://github.com/tera-mod)** - Coordenadas fornecidas para renderização de áreas de ataque e mecânica
- **[Owyn](https://github.com/Owyn)** - Autor do guia RR e também fazendo alterações na tradução para o inglês
- **[ITunk](https://github.com/GrafNikola)** Autor da tradução inicial para o russo
