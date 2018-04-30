// Usando o modulo (alurapic) criado em main.js
angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$scope.fotos = [];

	$http.get('http://localhost:3000/v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(erro) {
		console.log(erro);
	});

});