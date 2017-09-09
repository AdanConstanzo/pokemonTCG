var Silhouette = require('../models/Silhouette');
const mongoose = require("mongoose");
const fs = require('fs');
mongoose.connect('localhost:27017/gottatcg');

const SilDirectory = '../static/images/Silhouette/';
var length = 0;
var done = 0;

var hexColors = ['#d44027','#e6b426','#33c3c3','#8606e6','#af4e29','#d45a04','#901098','#2d86e2','#2372c3','#d44027','#0d6775','#c3b04e','#d44027','#ab7027','#68b538','#0d6775','#d44027']

var obj = [
  new Silhouette({
    imagePath:'/images/Silhouette/Charizard.png',
    name:'Charizard',
    background:hexColors[0]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Dragonite.png',
    name:'Dragonite',
    background:hexColors[1]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Dratini.png',
    name:'Dratini',
    background:hexColors[2]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Gengar.png',
    name:'Gengar',
    background:hexColors[3]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Golem.png',
    name:'Golem',
    background:hexColors[4]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Kabutops.png',
    name:'Kabutops',
    background:hexColors[5]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Kadabra.png',
    name:'Kadabra',
    background:hexColors[6]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Laparas.png',
    name:'Laparas',
    background:hexColors[7]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Mystic.png',
    name:'Mystic',
    background:hexColors[8]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/NineTails.png',
    name:'NineTails',
    background:hexColors[9]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Omanyte.png',
    name:'Omanyte',
    background:hexColors[10]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Persian.png',
    name:'Persian',
    background:hexColors[11]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Rapidash.png',
    name:'Rapidash',
    background:hexColors[12]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Sandslash.png',
    name:'Sandslash',
    background:hexColors[13]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Scyther.png',
    name:'Scyther',
    background:hexColors[14]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Seadra.png',
    name:'Seadra',
    background:hexColors[15]
  }),
  new Silhouette({
    imagePath:'/images/Silhouette/Vulpix.png',
    name:'Vulpix',
    background:hexColors[16]
  })
];

length = obj.length;

for(var i =0; i < length ;i++){
  obj[i].save(function(result){
    done++;
    if(done === length)
      exit();
  })
}

function exit(){
    mongoose.disconnect();
}
