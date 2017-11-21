var Type = require('../../models/Types');

var mongoose = require("mongoose");

mongoose.connect('localhost:27017/gottatcg');

var type = [
  new Type ({
    pokemonType: "Colorless"
  }),
  new Type({
    pokemonType: "Darkness"
  }),
  new Type({
    pokemonType: "Dragon"
  }),
  new Type({
    pokemonType: "Fairy"
  }),
  new Type({
    pokemonType: "Fighting"
  }),
  new Type({
    pokemonType: "Fire"
  }),
   new Type({
    pokemonType: "Grass"
  }),
   new Type({
    pokemonType: "Lightning"
  }),
   new Type({
    pokemonType: "Metal"
  }),
   new Type({
    pokemonType: "Psychic"
  }),
   new Type({
    pokemonType: "Water"
  })
];

var currentPath = "/images/type/";

var done = 0;
console.log(type.length);

for(var i = 0; i < type.length; i++){
    type[i].imageUrl = currentPath + type[i].pokemonType + ".png"
    type[i].save(function (result) {
        done++;
        if(done === type.length){
            exit();
            console.log(type.length);
        }
    })
};

function exit(){
    mongoose.disconnect();
}
