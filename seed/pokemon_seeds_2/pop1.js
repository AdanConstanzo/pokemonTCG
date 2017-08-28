var Card = require('../../models/Cards')
var mongoose = require('mongoose')
mongoose.connect('localhost:27017/gottatcg')
var cards = JSON.parse("[\n    {\n        \"id\": \"pop1-2\",\n        \"name\": \"Metagross\",\n        \"nationalPokedexNumber\": 376,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/2.jpg\",\n        \"subtype\": \"Stage 2\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"100\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"2\",\n        \"artist\": \"Ken Sugimori\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Metal\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Metal\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Metal Claw\",\n                \"text\": \"\",\n                \"damage\": \"30\",\n                \"convertedEnergyCost\": 2\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Hyper Beam\",\n                \"text\": \"Flip a coin. If heads, discard 1 Energy attached to the Defending Pokémon.\",\n                \"damage\": \"50\",\n                \"convertedEnergyCost\": 4\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fire\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Grass\",\n                \"value\": \"-30\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-3\",\n        \"name\": \"Rayquaza\",\n        \"nationalPokedexNumber\": 384,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/3.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"80\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"3\",\n        \"artist\": \"Katsura Tabata\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Fly\",\n                \"text\": \"Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Rayquaza during your opponent’s next turn.\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Fire\",\n                    \"Lightning\"\n                ],\n                \"name\": \"Dragon Claw\",\n                \"text\": \"\",\n                \"damage\": \"30\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Colorless\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-4\",\n        \"name\": \"Sceptile\",\n        \"nationalPokedexNumber\": 254,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/4.jpg\",\n        \"subtype\": \"Stage 2\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"100\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"4\",\n        \"artist\": \"Hiromichi Sugiyama\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Grass\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Grass\"\n                ],\n                \"name\": \"Cling\",\n                \"text\": \"After your attack, remove from Sceptile the number of damage counters equal to the damage you did to the Defending Pokémon. If Sceptile has fewer damage counters than that, remove all of them.\",\n                \"damage\": \"20\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Grass\",\n                    \"Grass\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Leaf Blade\",\n                \"text\": \"Flip a coin. If heads, this attack does 40 damage plus 30 more damage.\",\n                \"damage\": \"40+\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fire\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Water\",\n                \"value\": \"-30\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-6\",\n        \"name\": \"Beautifly\",\n        \"nationalPokedexNumber\": 267,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/6.jpg\",\n        \"subtype\": \"Stage 2\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"100\",\n        \"number\": \"6\",\n        \"artist\": \"Ken Sugimori\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Grass\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Green\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Blot\",\n                \"text\": \"Remove 1 damage counter from Beautifly.\",\n                \"damage\": \"30\",\n                \"convertedEnergyCost\": 2\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Whirlwind\",\n                \"text\": \"Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.\",\n                \"damage\": \"40\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fire\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-7\",\n        \"name\": \"Masquerain\",\n        \"nationalPokedexNumber\": 284,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/7.jpg\",\n        \"subtype\": \"Stage 1\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"70\",\n        \"number\": \"7\",\n        \"artist\": \"Kagemaru Himeno\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Grass\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Quick Attack\",\n                \"text\": \"Flip a coin. If heads, this attack does 10 damage plus 20 more damage.\",\n                \"damage\": \"10+\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Grass\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Gust\",\n                \"text\": \"\",\n                \"damage\": \"50\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Lightning\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"-30\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-8\",\n        \"name\": \"Murkrow\",\n        \"nationalPokedexNumber\": 198,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/8.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"ability\": {\n            \"name\": \"Insomnia\",\n            \"text\": \"Murkrow can’t be Asleep.\",\n            \"type\": \"Poké-Body\"\n        },\n        \"hp\": \"60\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"8\",\n        \"artist\": \"Ken Sugimori\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Darkness\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Feint Attack\",\n                \"text\": \"Choose 1 of your opponent’s Pokémon. This attack does 20 damage to that Pokémon. This attack’s damage isn’t affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Psychic\",\n                \"value\": \"-30\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-9\",\n        \"name\": \"Pupitar\",\n        \"nationalPokedexNumber\": 247,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/9.jpg\",\n        \"subtype\": \"Stage 1\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"70\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"9\",\n        \"artist\": \"Hisao Nakamura\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Fighting\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Fighting\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Rock Smash\",\n                \"text\": \"Flip a coin. If heads, this attack does 20 damage plus 10 more damage.\",\n                \"damage\": \"20+\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Water\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-10\",\n        \"name\": \"Torkoal\",\n        \"nationalPokedexNumber\": 324,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/10.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"80\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"10\",\n        \"artist\": \"Ken Sugimori\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Fighting\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Fighting\"\n                ],\n                \"name\": \"Amnesia\",\n                \"text\": \"Choose 1 of the Defending Pokémon’s attacks. That Pokémon can’t use that attack during your opponent’s next turn.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Fighting\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Body Slam\",\n                \"text\": \"Flip a coin. If heads, the Defending Pokémon is now Paralyzed.\",\n                \"damage\": \"20\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Water\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-11\",\n        \"name\": \"Larvitar\",\n        \"nationalPokedexNumber\": 246,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/11.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"40\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"10\",\n        \"artist\": \"Hisao Nakamura\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Fighting\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Fighting\"\n                ],\n                \"name\": \"Sand Attack\",\n                \"text\": \"If the Defending Pokémon tries to attack during your opponent’s next turn, your opponent flips a coin. If tails, that attack does nothing.\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Water\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-12\",\n        \"name\": \"Minun\",\n        \"nationalPokedexNumber\": 312,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/12.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"50\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"12\",\n        \"artist\": \"Ken Sugimori\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Lightning\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Lightning\"\n                ],\n                \"name\": \"Thunder Wave\",\n                \"text\": \"Flip a coin. If heads, the Defending Pokémon is now Paralyzed.\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Spark\",\n                \"text\": \"Choose 2 of your opponent’s Benched Pokémon. This attack does 10 damage to each of those Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Metal\",\n                \"value\": \"-30\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-14\",\n        \"name\": \"Surskit\",\n        \"nationalPokedexNumber\": 283,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/14.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"50\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"13\",\n        \"artist\": \"Kagemaru Himeno\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Water\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Water\"\n                ],\n                \"name\": \"Bubble\",\n                \"text\": \"Flip a coin. If heads, the Defending Pokémon is now Paralyzed.\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Lightning\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-15\",\n        \"name\": \"Swellow\",\n        \"nationalPokedexNumber\": 277,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/15.jpg\",\n        \"subtype\": \"Stage 1\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"70\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"15\",\n        \"artist\": \"Kagemaru Himeno\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Focus Energy\",\n                \"text\": \"During your next turn, base damage of Swellow’s Agility is 70 instead of 30.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Agility\",\n                \"text\": \"Flip a coin. If heads, prevent all effects of an attack, including damage, done to Swellow during your opponent’s next turn.\",\n                \"damage\": \"30\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Lightning\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"-30\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-16\",\n        \"name\": \"Armaldo ex\",\n        \"nationalPokedexNumber\": 348,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/16.jpg\",\n        \"subtype\": \"Stage 2\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"160\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"16\",\n        \"artist\": \"Hikaru Koike\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Fighting\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Fighting\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Twin Blade\",\n                \"text\": \"Does 30 damage to each Defending Pokémon.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 2\n            },\n            {\n                \"cost\": [\n                    \"Fighting\",\n                    \"Fighting\",\n                    \"Fighting\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Supersonic Claws\",\n                \"text\": \"This attack’s damage is not affected by Resistance.\",\n                \"damage\": \"80\",\n                \"convertedEnergyCost\": 5\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Grass\",\n                \"value\": \"×2\"\n            },\n            {\n                \"type\": \"Water\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-17\",\n        \"name\": \"Tyranitar ex\",\n        \"nationalPokedexNumber\": 248,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/17.jpg\",\n        \"subtype\": \"Stage 2\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"150\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\",\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"17\",\n        \"artist\": \"Hikaru Koike\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Darkness\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Scratch\",\n                \"text\": \"\",\n                \"damage\": \"20\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Fighting\",\n                    \"Fighting\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Critical Crush\",\n                \"text\": \"Discard 2 Basic Energy cards attached to Tyranitar ex or this attack does nothing.\",\n                \"damage\": \"80\",\n                \"convertedEnergyCost\": 4\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Grass\",\n                \"value\": \"×2\"\n            },\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Psychic\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-1\",\n        \"name\": \"Blaziken\",\n        \"nationalPokedexNumber\": 257,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/1.jpg\",\n        \"subtype\": \"Stage 2\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"110\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"1\",\n        \"artist\": \"Katsura Tabata\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Fire\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Fire\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Fire Punch\",\n                \"text\": \"\",\n                \"damage\": \"40\",\n                \"convertedEnergyCost\": 2\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Double Kick\",\n                \"text\": \"Flip 2 coins. This attack does 50 damage times the number of heads.\",\n                \"damage\": \"50×\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Water\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-5\",\n        \"name\": \"Swampert\",\n        \"nationalPokedexNumber\": 260,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/5.jpg\",\n        \"subtype\": \"Stage 2\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"100\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"5\",\n        \"artist\": \"Hiromichi Sugiyama\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Water\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Water\"\n                ],\n                \"name\": \"Bubble\",\n                \"text\": \"Flip a coin. If heads, the Defending Pokémon is now Paralyzed.\",\n                \"damage\": \"20\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Water\",\n                    \"Water\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Mud Splash\",\n                \"text\": \"If your opponent has any Benched Pokémon, choose 1 of them and flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)\",\n                \"damage\": \"50\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Lightning\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop1-13\",\n        \"name\": \"Plusle\",\n        \"nationalPokedexNumber\": 311,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop1/13.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"50\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"13\",\n        \"artist\": \"Ken Sugimori\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 1\",\n        \"setCode\": \"pop1\",\n        \"types\": [\n            \"Lightning\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Quick Attack\",\n                \"text\": \"Flip a coin. If heads, this attack does 10 damage plus 10 more damage.\",\n                \"damage\": \"10+\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Lightning\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Agility\",\n                \"text\": \"Flip a coin. If heads, prevent all effects of an attack, including damage, done to Plusle during your opponent’s next turn.\",\n                \"damage\": \"20\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Metal\",\n                \"value\": \"-30\"\n            }\n        ]\n    }\n]")
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