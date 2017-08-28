var Card = require('../../models/Cards');

var mongoose = require("mongoose");

mongoose.connect('localhost:27017/gottatcg');



var done = 0
for(var i = 0; i < cards.length; i++)
{
	new Card(
		cards[i]
	).save(function(result)
	{
		done++;
		if(done === cards.length)
		{
			exit()
		}
	})
}

function exit(){
    mongoose.disconnect();
}