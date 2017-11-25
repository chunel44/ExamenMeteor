import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './comics.html';
import { comicsDB } from '../../api/comicdb.js';
import { Meteor } from 'meteor/meteor'

class Controlador {
	constructor($scope){

		$scope.helpers({
			comiclist(){
				return comicsDB.find({owner : Meteor.userId()});
			}
		});
		$scope.insertInfo = function(index){
			if (Meteor.userId() === null){
				Materialize.toast('Debes iniciar sesión',4000);
				return;
			}else{
				comicsDB.insert({
				id : index,
				nombreComic : $scope.nameComic,
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
			var lista = comicsDB.find({id: index}).fetch();
			for(var i = 0; i < lista.length;i++){
			comicsDB.update(lista[i]._id,{
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


export default angular.module('comicsMod', [angularMeteor]).component('comics', {
	templateUrl : 'imports/components/comics/comics.html', controller : ["$scope",Controlador]
});