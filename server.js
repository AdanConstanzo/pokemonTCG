var express    = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(require('./controllers'));
app.set('port', 3000);

mongoose.connect("localhost:27017/gottatcg",function(){
	console.log("mongoose is connected to localhost:27017/gottatcg")
});

app.listen(app.get('port'),function(){
	console.log("app is running in localhost:3000")
});
