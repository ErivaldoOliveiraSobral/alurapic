// Usando o modulo (alurapic) criado em main.js
angular.module('alurapic')
.controller('FotosController', function($scope, $http, $window, recursoFoto) {
	
	$scope.mensagem = '';
	$scope.fotos = [];
	$scope.filtro = '';
	
	recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro);
    });

	$scope.remover = function(foto) {
		recursoFoto.delete({ fotoId:foto._id }, function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
		},function(erro){
			$scope.mensagem = 'Foto ' + foto.titulo + 'não foi removida!';
		});
	};

	$scope.clicou = function(foto) {
		$window.location.href = foto.url;
	};
})
.controller('FotoAngularController', function($scope) {

	$scope.minhaFoto = {
		titulo: 'Foto',
		url: 'http://blog.alura.com.br/wp-content/uploads/2017/07/ANGULAR2.png'
	};
});
