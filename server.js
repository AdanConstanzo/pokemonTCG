var express    = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(require('./controllers'));
app.set('port', (process.env.PORT || 3030));

console.log(app.get('port'))
var connection

if(app.get('port')=== 3030){
	connection = 'localhost:27017/gottatcg'
	mongoose.connect(connection,function(){
		console.log("mongoose is connected")
	})
	app.listen(app.get('port'),function(){
		console.log("app is running in localhost:3000")
	})
}
else{
	connection = "mongodb://danconable:supportftw117@ds147070.mlab.com:47070/gotta"
	mongoose.connect(connection)
	app.listen(app.get('port'))
}
