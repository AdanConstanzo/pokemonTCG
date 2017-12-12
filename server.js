var express    = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(require('./controllers'));
var port = process.env.API_PORT || 3001;

app.listen(port, function() {
	console.log("api runing on port ", port);
})
mongoose.connect("localhost:27017/gottatcg",function(){
	console.log("mongoose is connected to localhost:27017/gottatcg")
});

app.listen(app.get('port'),function(){
	console.log("app is running in localhost:3000")
});
