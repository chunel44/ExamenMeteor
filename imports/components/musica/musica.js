import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './musica.html';
import { musicaDB } from '../../api/musicadb.js';
import { Meteor } from 'meteor/meteor'

class Controlador {
	constructor($scope){

		$scope.helpers({
			musiclist(){
				return musicaDB.find({owner : Meteor.userId()});
			}
		});
		$scope.insertInfo = function(index){
			if (Meteor.userId() === null){
				Materialize.toast('Debes iniciar sesión',4000);
				return;
			}else{
				musicaDB.insert({
				id : index,
				nombreDisco : $scope.nameDisco,
				album : $scope.nameAlbum,
				genero : $scope.genero,
				extra : $scope.extra,
				owner : Meteor.userId(),
				user : Meteor.user().emails[0].address
			});
				console.log($scope.nameGame);
				Materialize.toast('objeto agregado.', 4000);
			}
			
		}


		$scope.editarInfo = function(index){
			var lista = musicaDB.find({id: index}).fetch();
			for(var i = 0; i < lista.length;i++){
			musicaDB.update(lista[i]._id,{
				id : index,
				nombreDisco : $scope.nameDisco,
				album : $scope.nameAlbum,
				genero : $scope.genero,
				extra : $scope.extra,
				owner : Meteor.userId(),
				user : Meteor.user().emails[0].address

			},{ upsert: true });
		}
		}
	}
}


export default angular.module('musicaMod', [angularMeteor]).component('musica', {
	templateUrl : 'imports/components/musica/musica.html', controller : ["$scope",Controlador]
});