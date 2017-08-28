var Sets = require('../models/Sets');

var mongoose = require("mongoose");

mongoose.connect('localhost:27017/gottatcg');
var done = 0;

var sets = [
	new Sets(
	{
		code:"base1",
		name:"Base",
		series:"Base",
		totalCards:102,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"01/09/1999"
	}),
	new Sets(
	{
		code:"base2",
		name:"Jungle",
		series:"Base",
		totalCards:64,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"06/16/1999"
	}),
	new Sets(
	{
		code:"basep",
		name:"Wizards Black Star Promos",
		series:"Base",
		totalCards:53,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"07/01/1999"
	}),
	new Sets(
	{
		code:"base3",
		name:"Fossil",
		series:"Base",
		totalCards:62,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"10/10/1999"
	}),
	new Sets(
	{
		code:"base4",
		name:"Base Set 2",
		series:"Base",
		totalCards:130,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"02/24/2000"
	}),
	new Sets(
	{
		code:"base5",
		name:"Team Rocket",
		series:"Base",
		totalCards:83,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"04/24/2000"
	}),
	new Sets(
	{
		code:"gym1",
		name:"Gym Heroes",
		series:"Gym",
		totalCards:132,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"08/14/2000"
	}),
	new Sets(
	{
		code:"gym2",
		name:"Gym Challenge",
		series:"Gym",
		totalCards:132,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"10/16/2000"
	}),
	new Sets(
	{
		code:"neo1",
		name:"Neo Genesis",
		series:"Neo",
		totalCards:111,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"12/16/2000"
	}),
	new Sets(
	{
		code:"neo2",
		name:"Neo Discovery",
		series:"Neo",
		totalCards:75,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"06/01/2001"
	}),
	new Sets(
	{
		code:"neo3",
		name:"Neo Revelation",
		series:"Neo",
		totalCards:66,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"09/21/2001"
	}),
	new Sets(
	{
		code:"neo4",
		name:"Neo Destiny",
		series:"Neo",
		totalCards:113,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"02/28/2002"
	}),
	new Sets(
	{
		code:"base6",
		name:"Legendary Collection",
		series:"Base",
		totalCards:110,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"05/24/2002"
	}),
	new Sets(
	{
		code:"ecard1",
		name:"Expedition Base Set",
		series:"E-Card",
		totalCards:165,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"09/15/2002"
	}),
	new Sets(
	{
		code:"ecard2",
		name:"Aquapolis",
		series:"E-Card",
		totalCards:186,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"01/15/2003"
	}),
	new Sets(
	{
		code:"ecard3",
		name:"Skyridge",
		series:"E-Card",
		totalCards:182,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"05/12/2003"
	}),
	new Sets(
	{
		code:"ex1",
		name:"Ruby & Sapphire",
		series:"EX",
		totalCards:109,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"07/01/2003"
	}),
	new Sets(
	{
		code:"ex2",
		name:"Sandstorm",
		series:"EX",
		totalCards:100,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"09/18/2003"
	}),
	new Sets(
	{
		code:"ex3",
		name:"Dragon",
		series:"EX",
		totalCards:97,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"09/18/2003"
	}),
	new Sets(
	{
		code:"ex4",
		name:"Team Magma vs Team Aqua",
		series:"EX",
		totalCards:95,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"03/01/2004"
	}),
	new Sets(
	{
		code:"ex5",
		name:"Hidden Legends",
		series:"EX",
		totalCards:101,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"06/01/2004"
	}),
	new Sets(
	{
		code:"ex6",
		name:"FireRed & LeafGreen",
		series:"EX",
		totalCards:112,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"09/01/2004"
	}),
	new Sets(
	{
		code:"pop1",
		name:"POP Series 1",
		series:"POP",
		totalCards:17,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"09/01/2004"
	}),
	new Sets(
	{
		code:"ex7",
		name:"Team Rocket Returns",
		series:"EX",
		totalCards:109,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"11/01/2004"
	}),
	new Sets(
	{
		code:"ex8",
		name:"Deoxys",
		series:"EX",
		totalCards:107,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"02/01/2005"
	}),
	new Sets(
	{
		code:"ex9",
		name:"Emerald",
		series:"EX",
		totalCards:106,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"05/01/2005"
	}),
	new Sets(
	{
		code:"ex10",
		name:"Unseen Forces",
		series:"EX",
		totalCards:115,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"08/01/2005"
	}),
	new Sets(
	{
		code:"pop2",
		name:"POP Series 2",
		series:"POP",
		totalCards:17,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"08/01/2005"
	}),
	new Sets(
	{
		code:"ex11",
		name:"Delta Species",
		series:"EX",
		totalCards:113,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"10/31/2005"
	}),
	new Sets(
	{
		code:"ex12",
		name:"Legend Maker",
		series:"EX",
		totalCards:92,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"02/01/2006"
	}),
	new Sets(
	{
		code:"pop3",
		name:"POP Series 3",
		series:"POP",
		totalCards:17,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"04/01/2006"
	}),
	new Sets(
	{
		code:"ex13",
		name:"Holon Phantoms",
		series:"EX",
		totalCards:110,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"05/01/2006"
	}),
	new Sets(
	{
		code:"ex14",
		name:"Crystal Guardians",
		series:"EX",
		totalCards:100,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"08/01/2006"
	}),
	new Sets(
	{
		code:"pop4",
		name:"POP Series 4",
		series:"POP",
		totalCards:17,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"08/01/2006"
	}),
	new Sets(
	{
		code:"ex15",
		name:"Dragon Frontiers",
		series:"EX",
		totalCards:101,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"11/01/2006"
	}),
	new Sets(
	{
		code:"pop5",
		name:"POP Series 5",
		series:"POP",
		totalCards:17,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"03/01/2007"
	}),
	new Sets(
	{
		code:"ex16",
		name:"Power Keepers",
		series:"EX",
		totalCards:108,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"02/02/2007"
	}),
	new Sets(
	{
		code:"dp1",
		name:"Diamond & Pearl",
		series:"Diamond & Pearl",
		totalCards:130,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"05/01/2007"
	}),
	new Sets(
	{
		code:"dp2",
		name:"Mysterious Treasures",
		series:"Diamond & Pearl",
		totalCards:123,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"08/01/2007"
	}),
	new Sets(
	{
		code:"pop6",
		name:"POP Series 6",
		series:"POP",
		totalCards:17,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"09/01/2007"
	}),
	new Sets(
	{
		code:"dp3",
		name:"Secret Wonders",
		series:"Diamond & Pearl",
		totalCards:132,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"11/01/2007"
	}),
	new Sets(
	{
		code:"dp4",
		name:"Great Encounters",
		series:"Diamond & Pearl",
		totalCards:106,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"02/01/2008"
	}),
	new Sets(
	{
		code:"pop7",
		name:"POP Series 7",
		series:"POP",
		totalCards:17,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"03/01/2008"
	}),
	new Sets(
	{
		code:"dp5",
		name:"Majestic Dawn",
		series:"Diamond & Pearl",
		totalCards:100,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"05/01/2008"
	}),
	new Sets(
	{
		code:"dp6",
		name:"Legends Awakened",
		series:"Diamond & Pearl",
		totalCards:146,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"08/01/2008"
	}),
	new Sets(
	{
		code:"pop8",
		name:"POP Series 8",
		series:"POP",
		totalCards:17,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"09/01/2008"
	}),
	new Sets(
	{
		code:"dp7",
		name:"Stormfront",
		series:"Diamond & Pearl",
		totalCards:100,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"11/01/2008"
	}),
	new Sets(
	{
		code:"pl1",
		name:"Platinum",
		series:"Platinum",
		totalCards:127,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"02/11/2009"
	}),
	new Sets(
	{
		code:"pop9",
		name:"POP Series 9",
		series:"POP",
		totalCards:17,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"03/01/2009"
	}),
	new Sets(
	{
		code:"pl2",
		name:"Rising Rivals",
		series:"Platinum",
		totalCards:111,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"05/16/2009"
	}),
	new Sets(
	{
		code:"pl3",
		name:"Supreme Victors",
		series:"Platinum",
		totalCards:147,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"08/19/2009"
	}),
	new Sets(
	{
		code:"pl4",
		name:"Arceus",
		series:"Platinum",
		totalCards:99,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"11/04/2009"
	}),
	new Sets(
	{
		code:"hgss1",
		name:"HeartGold & SoulSilver",
		series:"HeartGold & SoulSilver",
		totalCards:123,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"02/10/2010"
	}),
	new Sets(
	{
		code:"hgss2",
		name:"HS—Unleashed",
		series:"HeartGold & SoulSilver",
		totalCards:95,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"05/12/2010"
	}),
	new Sets(
	{
		code:"hgss3",
		name:"HS—Undaunted",
		series:"HeartGold & SoulSilver",
		totalCards:90,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"08/18/2010"
	}),
	new Sets(
	{
		code:"hgss4",
		name:"HS—Triumphant",
		series:"HeartGold & SoulSilver",
		totalCards:102,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"11/03/2010"
	}),
	new Sets(
	{
		code:"col1",
		name:"Call of Legends",
		series:"HeartGold & SoulSilver",
		totalCards:106,
		standardLegal:false,
		expandedLegal:false,
		releaseDate:"02/09/2011"
	}),
	new Sets(
	{
		code:"bwp",
		name:"BW Black Star Promos",
		series:"Black & White",
		totalCards:101,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"03/01/2011"
	}),
	new Sets(
	{
		code:"bw1",
		name:"Black & White",
		series:"Black & White",
		totalCards:114,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"04/25/2011"
	}),
	new Sets(
	{
		code:"bw2",
		name:"Emerging Powers",
		series:"Black & White",
		totalCards:98,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"08/31/2011"
	}),
	new Sets(
	{
		code:"bw3",
		name:"Noble Victories",
		series:"Black & White",
		totalCards:101,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"11/16/2011"
	}),
	new Sets(
	{
		code:"bw4",
		name:"Next Destinies",
		series:"Black & White",
		totalCards:99,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"02/08/2012"
	}),
	new Sets(
	{
		code:"bw5",
		name:"Dark Explorers",
		series:"Black & White",
		totalCards:108,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"05/09/2012"
	}),
	new Sets(
	{
		code:"bw6",
		name:"Dragons Exalted",
		series:"Black & White",
		totalCards:124,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"08/15/2012"
	}),
	new Sets(
	{
		code:"dv1",
		name:"Dragon Vault",
		series:"Black & White",
		totalCards:20,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"10/05/2012"
	}),
	new Sets(
	{
		code:"bw7",
		name:"Boundaries Crossed",
		series:"Black & White",
		totalCards:149,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"11/07/2012"
	}),
	new Sets(
	{
		code:"bw8",
		name:"Plasma Storm",
		series:"Black & White",
		totalCards:135,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"02/06/2013"
	}),
	new Sets(
	{
		code:"bw9",
		name:"Plasma Freeze",
		series:"Black & White",
		totalCards:116,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"05/08/2013"
	}),
	new Sets(
	{
		code:"bw10",
		name:"Plasma Blast",
		series:"Black & White",
		totalCards:101,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"08/14/2013"
	}),
	new Sets(
	{
		code:"xyp",
		name:"XY Black Star Promos",
		series:"XY",
		totalCards:183,
		standardLegal:true,
		expandedLegal:true,
		releaseDate:"10/12/2013"
	}),
	new Sets(
	{
		code:"bw11",
		name:"Legendary Treasures",
		series:"Black & White",
		totalCards:113,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"11/06/2013"
	}),
	new Sets(
	{
		code:"xy0",
		name:"Kalos Starter Set",
		series:"XY",
		totalCards:39,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"11/08/2013"
	}),
	new Sets(
	{
		code:"xy1",
		name:"XY",
		series:"XY",
		totalCards:146,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"02/05/2014"
	}),
	new Sets(
	{
		code:"xy2",
		name:"Flashfire",
		series:"XY",
		totalCards:106,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"05/07/2014"
	}),
	new Sets(
	{
		code:"xy3",
		name:"Furious Fists",
		series:"XY",
		totalCards:111,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"08/13/2014"
	}),
	new Sets(
	{
		code:"xy4",
		name:"Phantom Forces",
		series:"XY",
		totalCards:119,
		standardLegal:false,
		expandedLegal:true,
		releaseDate:"11/05/2014"
	}),
	new Sets(
	{
		code:"xy5",
		name:"Primal Clash",
		series:"XY",
		totalCards:160,
		standardLegal:true,
		expandedLegal:true,
		releaseDate:"02/04/2015"
	}),
	new Sets(
	{
		code:"dc1",
		name:"Double Crisis",
		series:"XY",
		totalCards:34,
		standardLegal:true,
		expandedLegal:true,
		releaseDate:"03/25/2015"
	}),
	new Sets(
	{
		code:"xy6",
		name:"Roaring Skies",
		series:"XY",
		totalCards:108,
		standardLegal:true,
		expandedLegal:true,
		releaseDate:"05/06/2015"
	}),
	new Sets(
	{
		code:"xy7",
		name:"Ancient Origins",
		series:"XY",
		totalCards:98,
		standardLegal:true,
		expandedLegal:true,
		releaseDate:"08/12/2015"
	}),
	new Sets(
	{
		code:"xy8",
		name:"BREAKthrough",
		series:"XY",
		totalCards:162,
		standardLegal:true,
		expandedLegal:true,
		releaseDate:"11/04/2015"
	}),
	new Sets(
	{
		code:"xy9",
		name:"BREAKpoint",
		series:"XY",
		totalCards:122,
		standardLegal:true,
		expandedLegal:true,
		releaseDate:"02/03/2016"
	}),
	new Sets(
	{
		code:"g1",
		name:"Generations",
		series:"XY",
		totalCards:115,
		standardLegal:true,
		expandedLegal:true,
		releaseDate:"02/22/2016"
	}),
	new Sets(
	{
		code:"xy10",
		name:"Fates Collide",
		series:"XY",
		totalCards:124,
		standardLegal:true,
		expandedLegal:true,
		releaseDate:"05/02/2016"
	}),
	new Sets(
	{
		code:"xy11",
		name:"Steam Siege",
		series:"XY",
		totalCards:114,
		standardLegal:true,
		expandedLegal:true,
		releaseDate:"08/03/2016"
	}),
	new Sets(
	{
		code:"xy12",
		name:"Evolutions",
		series:"XY",
		totalCards:108,
		standardLegal:true,
		expandedLegal:true,
		releaseDate:"11/02/2016"
	}),
	new Sets(
	{
		code:"sm1",
		name:"Sun & Moon",
		series:"Sun & Moon",
		totalCards:149,
		standardLegal:true,
		expandedLegal:true,
		releaseDate:"02/03/2017"
	}
	)
]

for(var i = 0; i < sets.length; i++)
{
	sets[i].number = i
	sets[i].save(function(result)
	{
		done++;
		if(done == sets.length)
		{
			exit();
		}
	})
}

function exit(){
    mongoose.disconnect();
}
