var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    first_name :    {type:String,required:true},
    last_name :     {type:String,required:true},
    username :      {type:String,required:true},
    usernameLogin: 	{type:String,required:true},
    password:       {type:String,required:true,select:false},
    email  :        {type:String,required:true},
    following: 		[{user: String}],
	followers: 		[{user: String}],
	user_collection: 	[ { type: Schema.Types.Object } ]
});

module.exports = mongoose.model('User',schema);
