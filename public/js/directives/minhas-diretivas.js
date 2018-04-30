angular.module('minhasDiretivas', []).directive('meuPainel', function() {

	var ddo = {}; //Directive Definition Object

	ddo.restric = "AE"; //atributo ou elemento <div meu-painel></div> ou <meu-painel></meu-painel>
	ddo.transclude = true;

	ddo.scope = { //escopo da diretiva
		//titulo: '@titulo'; //valor do atributo da diretiva EX: <meu-painel titulo="Meu titulo qualquer"></meu painel>
		titulo: '@', //pode ser omitido
		//url:'@url' // omitido pois a o bind da imagem esta direto no index.html
	};

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
});