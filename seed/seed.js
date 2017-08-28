var Card = require('../models/Cards');

var mongoose = require("mongoose");

mongoose.connect('localhost:27017/gottatcg');

var cards = [

    
        new Card({
            id: 'xy12-101',
          name: 'M Charizard-EX',
          nationalPokedexNumber: 6,
          imageUrl: '/images/cards/xy/xy12/101.png',
          subtype: 'MEGA',
          supertype: 'Pokémon',
          hp: '220',
          retreatCost: [ 'Colorless' ],
          number: '101',
          artist: '5ban Graphics',
          rarity: 'Rare Ultra',
          series: 'XY',
          pokemonSet: 'Evolutions',
          setCode: 'xy12',
          text: 
           [ 'When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.',
             'When 1 of your Pokémon becomes a Mega Evolution Pokémon, your turn ends.' ],
          types: [ 'Fire' ],
          attacks: 
           [ { cost: [Object],
               name: 'Crimson Dive',
               text: 'This Pokémon does 50 damage to itself.',
               damage: '300',
               convertedEnergyCost: 5 } ],
          weaknesses: [ { type: 'Water', value: '×2' } ] }),
];

/*
var pokemonSets = ["Steam Siege","Fates Collide", "Generations","BREAKpoint","BREAKthrough","Ancient Origins", "Roaring Skies","Primal Clash","Phantom Forces","Furious Fists","Flashfire","XY"];
var numberOfCards = [146,106,111,119,150,108,98,162,122,115,124,114];
var currentPath = "/images/cards/xy/";
*/

var done = 0;
console.log(cards.length);

// for(var a = 0; a < pokemonSets.length; a++)
// {
//     for(var b = 0 ; b < numberOfCards[a]; a++)
//     {

//     }
// }


for(var i = 0; i < cards.length; i++){
    cards[i].save(function (result) {
        done++;
        if(done === cards.length){
            exit();
            console.log(cards.length);
        }
    })
};

function exit(){
    mongoose.disconnect();
}
