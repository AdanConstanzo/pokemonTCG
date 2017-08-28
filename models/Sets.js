var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	code: 				{type:String, required:true},
	name: 				{type:String, required:true},
	series: 			{type:String, required: true},
	totalCards: 		{type:Number, required:true},
	standardLegal: 		{type:Boolean, required:true},
	expandedLegal: 		{type:Boolean, required:true},
	releaseDate: 		{type:String, required:true},
	number: 			{type:Number, required:true}
});

module.exports = mongoose.model('Set',schema);