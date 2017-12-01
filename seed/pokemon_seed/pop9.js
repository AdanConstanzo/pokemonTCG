var Card = require('../../models/Cards')
var mongoose = require('mongoose')
mongoose.connect('localhost:27017/gottatcg')
var cards = JSON.parse("[\n    {\n        \"id\": \"pop9-2\",\n        \"name\": \"Manaphy\",\n        \"nationalPokedexNumber\": 490,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/2.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"70\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"2\",\n        \"artist\": \"Masakazu Fukuda\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Water\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Water\"\n                ],\n                \"name\": \"Dive\",\n                \"text\": \"Look at the top 7 cards of your deck, choose 1 of them, and put it into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Water\"\n                ],\n                \"name\": \"Water Glow\",\n                \"text\": \"Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Then, remove from Manaphy the number of damage counters equal to the damage you did to that Pokémon.\",\n                \"damage\": \"20\",\n                \"convertedEnergyCost\": 1\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Lightning\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-6\",\n        \"name\": \"Buizel\",\n        \"nationalPokedexNumber\": 418,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/6.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"60\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"6\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Water\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Water\"\n                ],\n                \"name\": \"Whirlpool\",\n                \"text\": \"Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Water\",\n                    \"Water\"\n                ],\n                \"name\": \"Super Fast\",\n                \"text\": \"If you have Pachirisu in play, flip a coin. If heads, prevent all effects of an attack, including damage, done to Buizel during your opponent's next turn.\",\n                \"damage\": \"30\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Lightning\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-7\",\n        \"name\": \"Croagunk\",\n        \"nationalPokedexNumber\": 453,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/7.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"60\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"7\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Psychic\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Knock Off\",\n                \"text\": \"Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Psychic\",\n                    \"Psychic\"\n                ],\n                \"name\": \"Nimble\",\n                \"text\": \"If you have Turtwig in play, remove from Croagunk the number of damage counters equal to the damage you did to the Defending Pokémon.\",\n                \"damage\": \"30\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Psychic\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-8\",\n        \"name\": \"Gabite\",\n        \"nationalPokedexNumber\": 444,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/8.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"80\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"8\",\n        \"artist\": \"Kagemaru Himeno\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Burrow\",\n                \"text\": \"Flip a coin. If heads, prevent all damage done to Gabite by attacks during your opponent's next turn.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Distorted Wave\",\n                \"text\": \"Before doing damage, remove 2 damage counters from the Defending Pokémon.\",\n                \"damage\": \"60\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Colorless\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-9\",\n        \"name\": \"Lopunny\",\n        \"nationalPokedexNumber\": 428,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/9.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"80\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"9\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Jump Kick\",\n                \"text\": \"Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)\",\n                \"damage\": \"20\",\n                \"convertedEnergyCost\": 2\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Jazzed\",\n                \"text\": \"If Lopunny evolved from Buneary during this turn, remove all damage counters from Lopunny.\",\n                \"damage\": \"50\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-10\",\n        \"name\": \"Pachirisu\",\n        \"nationalPokedexNumber\": 417,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/10.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"70\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"10\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Lightning\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Lightning\"\n                ],\n                \"name\": \"Thunder Wave\",\n                \"text\": \"Flip a coin. If heads, the Defending Pokémon is now Paralyzed.\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Lightning\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Poison Gulp\",\n                \"text\": \"If you have Croagunk in play, this attack does 20 damage plus 20 more damage and the Defending Pokémon is now Poisoned.\",\n                \"damage\": \"20+\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Metal\",\n                \"value\": \"-20\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-12\",\n        \"name\": \"Buneary\",\n        \"nationalPokedexNumber\": 427,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/12.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"50\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"12\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Dizzy Punch\",\n                \"text\": \"Flip 2 coins. This attack does 10 damage times the number of heads.\",\n                \"damage\": \"10×\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Defense Curl\",\n                \"text\": \"Flip a coin. If heads, prevent all damage done to Buneary by attacks during your opponent's next turn.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-13\",\n        \"name\": \"Chimchar\",\n        \"nationalPokedexNumber\": 390,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/13.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"40\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"13\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Fire\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Fire\"\n                ],\n                \"name\": \"Serial Swipes\",\n                \"text\": \"Flip 4 coins. This attack does 10 damage times the number of heads.\",\n                \"damage\": \"10×\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Fire\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Sleepy\",\n                \"text\": \"If you have Piplup in play, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Asleep.\",\n                \"damage\": \"40+\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Water\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-14\",\n        \"name\": \"Gible\",\n        \"nationalPokedexNumber\": 443,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/14.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"50\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"14\",\n        \"artist\": \"Hiroki Fuchino\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Push Down\",\n                \"text\": \"Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Colorless\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-15\",\n        \"name\": \"Pikachu\",\n        \"nationalPokedexNumber\": 25,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/15.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"60\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"15\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Lightning\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Growl\",\n                \"text\": \"During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Lightning\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Numb\",\n                \"text\": \"If Pikachu evolved from Pichu during this turn, the Defending Pokémon is now Paralyzed.\",\n                \"damage\": \"30\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Metal\",\n                \"value\": \"-20\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-16\",\n        \"name\": \"Piplup\",\n        \"nationalPokedexNumber\": 393,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/16.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"50\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"16\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Water\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Water\"\n                ],\n                \"name\": \"Water Sport\",\n                \"text\": \"If Piplup has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.\",\n                \"damage\": \"10+\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Water\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Wavelet\",\n                \"text\": \"If you have Buizel in play, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)\",\n                \"damage\": \"40\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Lightning\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-17\",\n        \"name\": \"Turtwig\",\n        \"nationalPokedexNumber\": 387,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/17.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"60\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"17\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Common\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Grass\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Grass\"\n                ],\n                \"name\": \"Absorb\",\n                \"text\": \"Remove 1 damage counter from Turtwig.\",\n                \"damage\": \"10\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Grass\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Parboil\",\n                \"text\": \"If you have Chimchar in play, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned.\",\n                \"damage\": \"40+\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fire\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Water\",\n                \"value\": \"-20\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-1\",\n        \"name\": \"Garchomp\",\n        \"nationalPokedexNumber\": 445,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/1.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"130\",\n        \"number\": \"1\",\n        \"artist\": \"Kagemaru Himeno\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\"\n                ],\n                \"name\": \"Dragon Rage\",\n                \"text\": \"Flip 2 coins. If either of them is tails, this attack does nothing.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 1\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Jet Sword\",\n                \"text\": \"Discard 2 Energy attached to Garchomp and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)\",\n                \"damage\": \"100\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Colorless\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-3\",\n        \"name\": \"Raichu\",\n        \"nationalPokedexNumber\": 26,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/3.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"90\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"3\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Lightning\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Slam\",\n                \"text\": \"Flip 2 coins. This attack does 30 damage times the number of heads.\",\n                \"damage\": \"30×\",\n                \"convertedEnergyCost\": 2\n            },\n            {\n                \"cost\": [\n                    \"Lightning\",\n                    \"Lightning\",\n                    \"Lightning\"\n                ],\n                \"name\": \"High Volt\",\n                \"text\": \"If Raichu evolved from Pikachu during this turn, this attack's base damage is 100 instead of 60.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 3\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Metal\",\n                \"value\": \"-20\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-4\",\n        \"name\": \"Regigigas\",\n        \"nationalPokedexNumber\": 486,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/4.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"hp\": \"100\",\n        \"retreatCost\": [\n            \"Colorless\",\n            \"Colorless\",\n            \"Colorless\",\n            \"Colorless\"\n        ],\n        \"number\": \"4\",\n        \"artist\": \"Kent Kanetsuna\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Colorless\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Body Slam\",\n                \"text\": \"Flip a coin. If heads, the Defending Pokémon is now Paralyzed.\",\n                \"damage\": \"20\",\n                \"convertedEnergyCost\": 3\n            },\n            {\n                \"cost\": [\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Colorless\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Double Stomp\",\n                \"text\": \"Flip 2 coins. This attack does 50 damage plus 20 more damage for each heads.\",\n                \"damage\": \"50+\",\n                \"convertedEnergyCost\": 4\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-5\",\n        \"name\": \"Rotom\",\n        \"nationalPokedexNumber\": 479,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/5.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"ability\": {\n            \"name\": \"Type Shift\",\n            \"text\": \"Once during your turn (before your attack), you may use this power. Rotom's type is Psychic until the end of your turn\",\n            \"type\": \"Poké-Power\"\n        },\n        \"hp\": \"70\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"5\",\n        \"artist\": \"Masakazu Fukuda\",\n        \"rarity\": \"Rare\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Lightning\"\n        ],\n        \"attacks\": [\n            {\n                \"cost\": [\n                    \"Psychic\",\n                    \"Colorless\"\n                ],\n                \"name\": \"Poltergeist\",\n                \"text\": \"Look at your opponent's hand. This attack does 30 damage plus 10 more damage for each Trainer, Supporter, and Stadium card in your opponent's hand.\",\n                \"damage\": \"30+\",\n                \"convertedEnergyCost\": 2\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Darkness\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Colorless\",\n                \"value\": \"-20\"\n            }\n        ]\n    },\n    {\n        \"id\": \"pop9-11\",\n        \"name\": \"Pichu\",\n        \"nationalPokedexNumber\": 172,\n        \"imageUrl\": \"https://s3.amazonaws.com/pokemontcg/pop9/11.jpg\",\n        \"subtype\": \"Basic\",\n        \"supertype\": \"Pokémon\",\n        \"ability\": {\n            \"name\": \"Baby Evolution\",\n            \"text\": \"Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.\",\n            \"type\": \"Poké-Power\"\n        },\n        \"hp\": \"40\",\n        \"retreatCost\": [\n            \"Colorless\"\n        ],\n        \"number\": \"11\",\n        \"artist\": \"Midori Harada\",\n        \"rarity\": \"Uncommon\",\n        \"series\": \"POP\",\n        \"pokemonSet\": \"POP Series 9\",\n        \"setCode\": \"pop9\",\n        \"types\": [\n            \"Lightning\"\n        ],\n        \"attacks\": [\n            {\n                \"name\": \"Find a Friend\",\n                \"text\": \"Flip a coin. If heads, search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.\",\n                \"damage\": \"\",\n                \"convertedEnergyCost\": 0\n            }\n        ],\n        \"weaknesses\": [\n            {\n                \"type\": \"Fighting\",\n                \"value\": \"×2\"\n            }\n        ],\n        \"resistances\": [\n            {\n                \"type\": \"Metal\",\n                \"value\": \"-20\"\n            }\n        ]\n    }\n]")
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