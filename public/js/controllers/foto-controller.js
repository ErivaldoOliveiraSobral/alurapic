angular.module('alurapic')
.controller('FotoController', function($scope, $http, $routeParams, recursoFoto) {
	$scope.foto = {};
	$scope.mensagem = '';
	
	
	if ($routeParams.fotoId) {
		recursoFoto.get({ fotoId : $routeParams.fotoId }, 
			function(foto){
				$scope.foto = foto;
			},
			function(erro){
				console.log(erro);
				$scope.mensagem = "Não foi possivel localizar a foto";
			});
	};

	$scope.submeter = function() {
		if ($scope.formulario.$valid) {
			if($scope.foto._id) {
				recursoFoto.update({fotoId:$scope.foto._id},
					function(){
						$scope.mensagem = 'Foto atualizada com sucesso';
					},
					function(erro){
						console.log(erro);
						$scope.mensagem = 'Erro ao alterar a foto';
					});
			} else {
				recursoFoto.save($scope.foto, 
					function(){
						$scope.foto = {};
						$scope.formulario.$setPristine();
						$scope.mensagem = 'Foto cadastrada com sucesso';
					},
					function(erro){
						console.log(erro);
						$scope.mensagem = 'Erro ao cadastrar foto';
					});
			}
		}
	};
});