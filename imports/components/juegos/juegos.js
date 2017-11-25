import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './juegos.html';
import { juegoDB } from '../../api/juegodb.js';
import { Meteor } from 'meteor/meteor'

class Controlador {
	constructor($scope){

		$scope.helpers({
			juegolist(){
				return juegoDB.find({owner : Meteor.userId()});
			}
		});

		$scope.insertInfo = function(index){
			if (Meteor.userId() === null){
				Materialize.toast('Debes iniciar sesión',4000);
				return;
			}else{
				juegoDB.insert({
				id : index,
				nombreJuego : $scope.nameGame,
				genero : $scope.genero,
				extra : $scope.extra,
				owner : Meteor.userId(),
				user : Meteor.user().emails[0].address
			});
				Materialize.toast('objeto agregado.', 4000);
				return juegoDB.find({owner : Meteor.userId()});
			}
			
		}


		$scope.editarInfo = function(index){
			var lista = juegoDB.find({id: index}).fetch();
			for(var i = 0; i < lista.length;i++){
			juegoDB.update(lista[i]._id,{
				id : index,
				nombreJuego : $scope.nameGame,
				genero : $scope.genero,
				extra : $scope.extra,
				owner : Meteor.userId(),
				user : Meteor.user().emails[0].address

			},{ upsert: true });
		}
		}
	}
}


export default angular.module('juegosMod', [angularMeteor]).component('juegos', {
	templateUrl : 'imports/components/juegos/juegos.html', controller : ["$scope",Controlador]
});