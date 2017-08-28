var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	pokemonType: 	{type:String, required:true},
	imageUrl: 		{type:String, required:true}
});

module.exports = mongoose.model('Type',schema);