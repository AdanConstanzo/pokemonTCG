var Gif = require('../../models/Gifs');

var mongoose = require("mongoose");

mongoose.connect('localhost:27017/gottatcg');
/*
var gijs = [

    new Gif(
    {
        url:
        pokemonNumber
    }),
    new Gif({

    }),

]
*/
var done = 0;

for(var i =1; i <650; i++ )
{
    var a =String("000" + i).slice(-3);
    var temp = new Gif({
        url: '/images/gifs/'+a+'.gif',
        pokemonNumber : a
    })
    temp.save(function(result)
    {
        done++
        if(done === 649)
            exit()
    })
}

/*
for(var i = 0; i < gijs.length; i++){
    gijs[i].save(function (result) {
        done++;
        if(done === gijs.length){
            exit();
            console.log(gijs.length);
        }
    })
};
*/

function exit(){
    mongoose.disconnect();
}
