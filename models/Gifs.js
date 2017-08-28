var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    url: {type: String},
    pokemonNumber: {type:String}
});

module.exports = mongoose.model('Gif',schema);