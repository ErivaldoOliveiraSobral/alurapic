angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {

	var ddo = {}; //Directive Definition Object

	ddo.restric = "AE"; //atributo ou elemento <div meu-painel></div> ou <meu-painel></meu-painel>
	ddo.transclude = true;

	ddo.scope = { //escopo da diretiva
		//titulo: '@titulo'; //valor do atributo da diretiva EX: <meu-painel titulo="Meu titulo qualquer"></meu painel>
		titulo: '@' //pode ser omitido
		//url:'@url' // omitido pois a o bind da imagem esta direto no index.html
	};

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
})
.directive('minhaFoto', function() {
	var ddo = {};

	ddo.restric = "AE";

	ddo.scope = {
		titulo: '@',
		url: '@'
	};

	ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';

	return ddo;
})
.directive('botaoDanger', function() {
	var ddo = {};

	ddo.restric = "AE";

	ddo.scope = {
		nome: '@', // execta String
		acao: '&' // executa expressão
	};

	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

	return ddo;
})
.directive('botaoPrimary', function() {
	var ddo = {};

	ddo.restric = "AE";

	ddo.scope = {
		nome: '@', 
		url: '@'
	};

	ddo.template = '<a href={{url}} class="btn btn-primary btn-block">{{nome}}</a>';

	return ddo;
})		
.directive('meuFocus', function() {
    var ddo = {};
    ddo.restrict = "A";
   // não tem mais scope
    ddo.link = function(scope, element) {
         scope.$on('fotoCadastrada', function() {
             element[0].focus();
         });
    };

    return ddo;
})
.directive('meusTitulos', function() {
    var ddo = {};
    ddo.restrict = 'E';
    ddo.template = '<ul><li ng-repeat="foto in fotos">{{foto.titulo}}</li></ul>';
    ddo.controller = function($scope, recursoFoto) {
        recursoFoto.query(function(fotos) {
            $scope.fotos = fotos;
        });
    };
    return ddo;
});

/*
*	Contém bug (Dois titulos não podem ter o mesmo nome)
*
.directive('meusTitulos', function() {
    var ddo = {};
    ddo.restrict = 'E';
    ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
    ddo.controller = function($scope, recursoFoto) {
        recursoFoto.query(function(fotos) {
            $scope.titulos = fotos.map(function(foto) {
                return foto.titulo;
            });    
        });
    };
    return ddo;
});
*/