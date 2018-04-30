// Usando o modulo (alurapic) criado em main.js
angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$scope.fotos = [];
	$http.get('http://localhost:3000/v1/fotos')
	.success(function(fotos) {
		console.log(fotos);
		$scope.fotos = fotos;
	})
	.error(function(erro) {
		console.log(erro);
	});

	$scope.pedidos = [];
	$http.get('https://alkimiasimplesassim.com.br/api/pedidos/')
	.success(function(pedido) {
		console.log(pedido);
		$scope.pedidos = pedido;
	})
	.error(function(erro) {
		console.log(erro);
	});
});