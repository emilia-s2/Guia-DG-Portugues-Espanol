"use strict";

module.exports.NetworkMod = function(mod) {
	try {
		mod.require["tera-guide-core"].load(mod, {
			languages: ["es", "pt", "en"], // supported languages
			colors: { gui: {}, general: {} }, // color settings
			command: ["guia"], // module command
			chat_name: "Guide-DG", // set chat author name for notices
		});
	} catch (e) {
		mod.error("Aviso!\Dependência módulo \"tera-guide-core\" necessário para o TERA-Guide não está instalado!\nPor favor faça o download e instale: https://github.com/hsdn/tera-guide-core\n");
		throw e;
	}
};