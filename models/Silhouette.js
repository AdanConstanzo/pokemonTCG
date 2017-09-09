//Silhouette
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	imagePath:         {type:String, required:true},
	name:              {type:String, required:true},
	background:				 {type:String, required:true}
});

module.exports = mongoose.model('Silhouette',schema);
