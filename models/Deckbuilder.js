var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    DeckObject : 	{ type: Object, required: true },
    Username: 		{ type: String, required: true },
    DeckSettings: { type: Object, required: true },
    Raiting : 		{ type: Number, required: true },
    DeltaObject: 	{ type: Object, required: true },
    DeckName:     {type:Object,required:true}
});

module.exports = mongoose.model("Deck",schema);
