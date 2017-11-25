import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './inicio.html';
import templatecss from './inicio.css';
import { juegoDB } from '../../api/juegodb.js';
import { comicsDB } from '../../api/comicdb.js';
import { musicaDB } from '../../api/musicadb.js';
import { Meteor } from 'meteor/meteor'

class Controlador {
	constructor($scope){

		$scope.helpers({
			juegolist(){
				return juegoDB.find({owner : Meteor.userId()});
			},comiclist(){
				return comicsDB.find({owner : Meteor.userId()});
			},musiclist(){
				return musicaDB.find({owner : Meteor.userId()});
			}
		});

	}
}


export default angular.module('inicioMod', [angularMeteor]).component('inicio', {
	templateUrl : 'imports/components/inicio/inicio.html', controller : ["$scope",Controlador]
});