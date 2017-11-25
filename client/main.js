import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import juegos from '../imports/components/juegos/juegos';
import comics from '../imports/components/comics/comics';
import musica from '../imports/components/musica/musica';
import inicio from '../imports/components/inicio/inicio';


var app = angular.module('control', [angularMeteor,uiRouter, juegos.name, comics.name, musica.name, inicio.name, 'accounts.ui']);

app.controller('contr', ["$scope", function($scope){
	

}]);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");

	$stateProvider.state('main', {
		url : "/",
		template : "<main><inicio></inicio></main>"
		})
	.state('juegos',{
		url : "/juegos",
		template : "<juegos></juegos>"
	})
	.state('comics',{
		url : "/comics",
		template : "<comics></comics>"
	})
	.state('musica',{
		url : "/musica",
		template : "<musica></musica>"
	})

});

