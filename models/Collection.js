var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user_id: Schema.Types.ObjectId,
    card_id: Schema.Types.ObjectId,
    quantity:{type:Number,required:true}
});

module.exports = mongoose.model('Collection',schema);
