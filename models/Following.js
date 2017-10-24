const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
     user_id: {type: String, required: true},
     user: {type: String, required: true}
});

module.exports = mongoose.model("Following",schema);
