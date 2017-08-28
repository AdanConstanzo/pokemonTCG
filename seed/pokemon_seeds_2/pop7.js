var Card = require('../../models/Cards')
var mongoose = require('mongoose')
mongoose.connect('localhost:27017/gottatcg')
var cards = JSON.parse("[\n    {\n        \"id\": \"pop7-2\",\n        \"name\": \"Gallade\",\n        \"nationalPokedexNumber\": 475,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/2.jpg\",\n        \"subtype\": \"Stage 2\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"130\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"2\",\n        \"artist\": \"Daisuke Ito\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Fighting\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Fighting\"\n                ],\n                \"name\": \"Sonic Blade\",\n                \"text\": \"Put Damage counters on the Defending Pokémon until it is 50 HP away from being Knocked Out. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 2\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Psychic\"\n                ],\n                \"name\": \"Psychic Cut\",\n                \"text\": \"You may choose as many of your face-down Prize cards as you like and put them face up. If you do, this attack does 60 damge plus 20 more damage for each Prize card you chose. (These cards remain face up for the rest of the game.)\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Psychic\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-3\",\n        \"name\": \"Latias\",\n        \"nationalPokedexNumber\": 380,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/3.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"80\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"3\",\n        \"artist\": \"Daisuke Ito\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Miraculous Light\",\n                \"text\": \"Remove 1 damage counter and all Special Conditions from Latias.\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Fire\",\n                    \"Water\"\n                ],\n                \"name\": \"Mist Ball\",\n                \"text\": \"Discard a Energy and a Energy attached to Latias.\",\n                \"damage\": \"80\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Colorless\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"-20\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-4\",\n        \"name\": \"Latios\",\n        \"nationalPokedexNumber\": 381,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/4.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"90\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"4\",\n        \"artist\": \"Daisuke Ito\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Energy Draw\",\n                \"text\": \"Flip a coin. If heads, search your deck for a basic Energy card and attach it to Latios. Shuffle your deck afterward.\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Grass\",\n                    \"Lightning\"\n                ],\n                \"name\": \"Luster Purge\",\n                \"text\": \"Discard 3 Energy attached to Latios.\",\n                \"damage\": \"120\",\n                \"convertedEnergyCost\": 4\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Colorless\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"-20\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-5\",\n        \"name\": \"Mothim\",\n        \"nationalPokedexNumber\": 414,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/5.jpg\",\n        \"subtype\": \"Stage 1\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"80\",\n        \"number\": \"5\",\n        \"artist\": \"Kazuyuki Kano\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Grass\"\n        ],\n        \"attacks\": [\n            {\n                \"name\": \"Silver Wind\",\n                \"text\": \"During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 0\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Grass\"\n                ],\n                \"name\": \"Raging Scales\",\n                \"text\": \"If Mothim has any damage counters on it, this attack does 30 damage plus 40 more damage.\",\n                \"damage\": \"30+\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fire\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"-20\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-6\",\n        \"name\": \"Delibird\",\n        \"nationalPokedexNumber\": 225,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/6.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"70\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"6\",\n        \"artist\": \"Masakazu Fukuda\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Water\"\n        ],\n        \"attacks\": [\n            {\n                \"name\": \"Present\",\n                \"text\": \"Flip a coin. If heads, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 0\n            },\n            {\n                \"cost\": [\n                    \"Water\"\n                ],\n                \"name\": \"Ice Ball\",\n                \"text\": \"\",\n                \"damage\": \"20\",\n                \"convertedEnergyCost\": 1\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Metal\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-9\",\n        \"name\": \"Stantler\",\n        \"nationalPokedexNumber\": 234,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/9.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"70\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"9\",\n        \"artist\": \"Kouki Saitou\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"name\": \"Lead\",\n                \"text\": \"Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 0\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Frighten Horn\",\n                \"text\": \"If the Defending Pokémon isn't an Evolved Pokémon, that Pokémon is now Confused.\",\n                \"damage\": \"20\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-10\",\n        \"name\": \"Wormadam Sandy Cloak\",\n        \"nationalPokedexNumber\": 413,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/10.jpg\",\n        \"subtype\": \"Stage 1\",\n        \"supertype\": \"Pokémon\",\n        \"ability\": {\n            \"name\": \"Sandy Cloak\",\n            \"text\": \"Prevent all effects of attacks, excluding damage, done to Wormadam Sandy Cloak.\",\n            \"type\": \"Poké-Body\"\n        },\n        \"hp\": \"80\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"10\",\n        \"artist\": \"Kagemaru Himeno\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Fighting\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Fighting\"\n                ],\n                \"name\": \"Push Over\",\n                \"text\": \"Does 40 damage plus 10 more damage for each Energy attached to Wormadam Sandy Cloak.\",\n                \"damage\": \"40+\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fire\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Lightning\",\n                \"value\": \"-20\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-11\",\n        \"name\": \"Burmy Plant Cloak\",\n        \"nationalPokedexNumber\": 412,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/11.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"ability\": {\n            \"name\": \"Wear Cloak\",\n            \"text\": \"Once during your turn (before your attack), if Burmy Plant Cloak is your Active Pokémon, you may search your discard pile for a basic Grass Energy card and attach it to Burmy Plant Cloak.\",\n            \"type\": \"Poké-Power\"\n        },\n        \"hp\": \"40\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"11\",\n        \"artist\": \"Kouki Saitou\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Grass\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Plant Cloak Tackle\",\n                \"text\": \"If Burmy Plant Cloak has any Energy attached to it, this attack does 10 damage plus 10 more damage.\",\n                \"damage\": \"10+\",\n                \"convertedEnergyCost\": 1\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fire\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-12\",\n        \"name\": \"Burmy Sandy Cloak\",\n        \"nationalPokedexNumber\": 412,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/12.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"ability\": {\n            \"name\": \"Wear Cloak\",\n            \"text\": \"Once during your turn (before your attack), if Burmy Sandy Cloak is your Active Pokémon, you may search your discard pile for a basic Fighting Energy card and attach it to Burmy Sandy Cloak.\",\n            \"type\": \"Poké-Power\"\n        },\n        \"hp\": \"40\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"12\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Grass\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Sandy Cloak Tackle\",\n                \"text\": \"If Burmy Sandy Cloak has any Energy attached to it, this attack does 10 damage plus 10 more damage.\",\n                \"damage\": \"10+\",\n                \"convertedEnergyCost\": 1\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fire\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-13\",\n        \"name\": \"Corsola\",\n        \"nationalPokedexNumber\": 222,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/13.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"70\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"13\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Water\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Rally\",\n                \"text\": \"Search your deck for up to 3 different types of Basic Pokémon and put them on your Bench. Shuffle your deck afterward.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Water\"\n                ],\n                \"name\": \"Hook\",\n                \"text\": \"\",\n                \"damage\": \"30\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Grass\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-14\",\n        \"name\": \"Mareep\",\n        \"nationalPokedexNumber\": 179,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/14.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"50\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"14\",\n        \"artist\": \"Atsuko Nishida\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Lightning\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Lightning\"\n                ],\n                \"name\": \"Thundershock\",\n                \"text\": \"Flip a coin. If heads, the Defending Pokémon is now Paralyzed.\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Lightning\"\n                ],\n                \"name\": \"Static Shock\",\n                \"text\": \"\",\n                \"damage\": \"20\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Metal\",\n                \"value\": \"-20\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-15\",\n        \"name\": \"Ralts\",\n        \"nationalPokedexNumber\": 280,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/15.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"60\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"15\",\n        \"artist\": \"Sumiyoshi Kizuki\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Psychic\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Smack\",\n                \"text\": \"\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Psychic\"\n                ],\n                \"name\": \"Confuse Ray\",\n                \"text\": \"Flip a coin. If heads, the Defending Pokémon is now Confused.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Psychic\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-17\",\n        \"name\": \"Spinda\",\n        \"nationalPokedexNumber\": 327,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/17.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"70\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"17\",\n        \"artist\": \"Atsuko Nishida\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Dish Out\",\n                \"text\": \"Draw a card from the top and the bottom of your deck.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Synchro Punch\",\n                \"text\": \"If any basic Energy card attached to Spinda is the same type as any Energy attached to the Defending Pokémon, this attack does 10 damage plus 30 more damage.\",\n                \"damage\": \"10+\",\n                \"convertedEnergyCost\": 1\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-1\",\n        \"name\": \"Ampharos\",\n        \"nationalPokedexNumber\": 181,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/1.jpg\",\n        \"subtype\": \"Stage 2\",\n        \"supertype\": \"Pokémon\",\n        \"ability\": {\n            \"name\": \"Jamming\",\n            \"text\": \"After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.\",\n            \"type\": \"Poké-Body\"\n        },\n        \"hp\": \"130\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"1\",\n        \"artist\": \"Kouki Saitou\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Lightning\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Lightning\"\n                ],\n                \"name\": \"Cluster Bolt\",\n                \"text\": \"You may discard all Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)\",\n                \"damage\": \"70\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Metal\",\n                \"value\": \"-20\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-7\",\n        \"name\": \"Flaaffy\",\n        \"nationalPokedexNumber\": 180,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/7.jpg\",\n        \"subtype\": \"Stage 1\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"80\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"7\",\n        \"artist\": \"Kagemaru Himeno\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Lightning\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Attract Current\",\n                \"text\": \"Search your deck for a Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Lightning\",\n                    \"Lightning\"\n                ],\n                \"name\": \"Electromagnetic Kick\",\n                \"text\": \"Flip a coin. If tails, Flaaffy does 10 damage to itself.\",\n                \"damage\": \"60\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Metal\",\n                \"value\": \"-20\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-8\",\n        \"name\": \"Kirlia\",\n        \"nationalPokedexNumber\": 281,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/8.jpg\",\n        \"subtype\": \"Stage 1\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"80\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"8\",\n        \"artist\": \"Masakazu Fukuda\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Psychic\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Psychic\"\n                ],\n                \"name\": \"Psychic Research\",\n                \"text\": \"Search your discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your discard pile.)\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Psychic\"\n                ],\n                \"name\": \"Telekinesis\",\n                \"text\": \"Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.\",\n                \"damage\": \"40\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Psychic\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop7-16\",\n        \"name\": \"Sentret\",\n        \"nationalPokedexNumber\": 161,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop7/16.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"60\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"16\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 7\",\n        \"setCode\": \"pop7\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Grope\",\n                \"text\": \"Look at the top 2 cards of your deck, choose 1 of them and put it into your hand. Put the other on the bottom of your deck.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Scratch\",\n                \"text\": \"\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ]\n    }\n]")
function getValue(theString)
{
	if(parseInt(theString))
		return parseInt(theString)
	else
		return parseInt(theString.replace( /^\D+/g, '')) + 300
}
var staticRoot = '/images/cards/'
var urlRoot = 'https://s3.amazonaws.com/pokemontcg/'
var done = 0
for(var i = 0; i < cards.length; i++)
{
	var newImageUrl = cards[i].imageUrl.replace(urlRoot,staticRoot)
	cards[i].imageUrl = newImageUrl
	cards[i].standardLegal = false
	cards[i].expandedLegal = false
	var number = cards[i].number
	number = getValue(number)
	cards[i].number = number
	new Card(
		cards[i]
	).save(function(result)
	{
		done++
		if(done === cards.length)
		{
			exit()
		}
	})
}
function exit(){
	mongoose.disconnect()
}