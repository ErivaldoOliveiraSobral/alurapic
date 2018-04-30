angular.module('alurapic').controller('footerController', function($scope, $http) {
	$scope.nome = "Alura AngularJs";
	$scope.filtro = '';

	$scope.pedidos = [];
	$http.get('https://alkimiasimplesassim.com.br/api/pedidos/')
	.success(function(pedido) {
		$scope.pedidos = pedido;
	})
	.error(function(erro) {
		console.log(erro);
	});

});