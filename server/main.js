import { Meteor } from 'meteor/meteor';
import { juegoDB } from '../imports/api/juegodb.js';
import { comicsDB } from '../imports/api/comicdb.js';
import { musicaDB } from '../imports/api/musicadb.js';

Meteor.startup(() => {
  // code to run on server at startup
  if (juegoDB.find().count() === 0) {
  	juegoDB.insert({
  		nombreJuego : "Halo",
  		genero : "Accion",
  		extra : '',
  		owner : 1,
  		user : 'Admin'
  	});
  }
  if (comicsDB.find().count() === 0) {
  	comicsDB.insert({
  		nombreComic : "Spiderman",
  		genero : "Accion",
  		extra : '',
  		owner : 1,
  		user : 'Admin'
  	});
  }
  if (musicaDB.find().count() === 0) {
  	musicaDB.insert({
  		nombreDisco : "Metallica",
  		album : "Black",
  		genero : "Metal",
  		extra : '',
  		owner : 1,
  		user : 'Admin'
  	});
  }


});
