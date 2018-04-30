// Usando o modulo (alurapic) criado em main.js
angular.module('alurapic')
.controller('FotosController', function($scope, $http) {
	
	$scope.fotos = [];
	$scope.filtro = '';

	$http.get('http://localhost:3000/v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(erro) {
		console.log(erro);
	});
})
.controller('FotoAngularController', function($scope) {

	$scope.minhaFoto = {
		titulo: 'Foto',
		url: 'http://blog.alura.com.br/wp-content/uploads/2017/07/ANGULAR2.png'
	};
});
