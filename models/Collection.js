var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    username: {type:String , required: true},
    cardId: {type:String,required:true},
    quantity:{type:Number,required:true}
});

module.exports = mongoose.model('Collection',schema);
