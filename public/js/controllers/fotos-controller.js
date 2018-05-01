// Usando o modulo (alurapic) criado em main.js
angular.module('alurapic')
.controller('FotosController', function($scope, $http, $window) {
	
	$scope.mensagem = '';
	$scope.fotos = [];
	$scope.filtro = '';

	$http.get('http://localhost:3000/v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(erro) {
		console.log(erro);
	});

	$scope.remover = function(foto) {
		$http.delete('v1/fotos/' + foto._id)
		.success(function() {
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
		})
		.error(function() {
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
