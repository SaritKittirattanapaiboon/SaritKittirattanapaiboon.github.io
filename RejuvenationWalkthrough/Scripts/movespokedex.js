function fourPokemonMoves(pokemonNumber, formNumber, levelNumber){
    var fullmoveList=pokemonLevelUpMoveList[pokemonNumber-1][formNumber+1];
    var fourmoves=[];
    var highestlevellocation=0;

    for(var i=0; i<fullmoveList.length; i++){
        if(fullmoveList[i][0]<=levelNumber){
            highestlevellocation++;
        } else {
            break;
        }
    }

    for(var i=highestlevellocation-1; i>=0; i--){
        if(i<highestlevellocation-4){
            break;
        }
        fourmoves.push(fullmoveList[i][1]);
    }
    return fourmoves;
}

var pokemonLevelUpMoveListV0=[
    ['001',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [3, 'Vine Whip'],
            [6, 'Growth'],
            [9, 'Leech Seed'],
            [12, 'Razor Leaf'],
            [15, 'Poison Powder'],
            [15, 'Sleep Powder'],
            [18, 'Seed Bomb'],
            [21, 'Take Down'],
            [24, 'Sweet Scent'],
            [27, 'Synthesis'],
            [30, 'Worry Seed'],
            [33, 'Double Edge'],
            [36, 'Solar Beam'],
        ],
    ],

    ['002',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Vine Whip'],
            [1, 'Growth'],
            [9, 'Leech Seed'],
            [12, 'Razor Leaf'],
            [15, 'Poison Powder'],
            [15, 'Sleep Powder'],
            [20, 'Seed Bomb'],
            [25, 'Take Down'],
            [30, 'Sweet Scent'],
            [35, 'Synthesis'],
            [40, 'Worry Seed'],
            [45, 'Double Edge'],
            [50, 'Solar Beam'],
        ],
    ],

    ['003',
        [
            [0, 'Petal Blizzard'],
            [1, 'Petal Blizzard'],
            [1, 'Petal Dance'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Vine Whip'],
            [1, 'Growth'],
            [9, 'Leech Seed'],
            [12, 'Razor Leaf'],
            [15, 'Poison Powder'],
            [15, 'Sleep Powder'],
            [20, 'Seed Bomb'],
            [25, 'Take Down'],
            [30, 'Sweet Scent'],
            [37, 'Synthesis'],
            [44, 'Worry Seed'],
            [51, 'Double Edge'],
            [58, 'Solar Beam'],
        ],
    ],

    ['004',
        [
            [1, 'Scratch'],
            [1, 'Growl'],
            [4, 'Ember'],
            [8, 'Smokescreen'],
            [12, 'Dragon Breath'],
            [17, 'Fire Fang'],
            [20, 'Slash'],
            [24, 'Flamethrower'],
            [28, 'Scary Face'],
            [32, 'Fire Spin'],
            [36, 'Inferno'],
            [40, 'Flare Blitz'],
        ],
    ],

    ['005',
        [
            [1, 'Scratch'],
            [1, 'Growl'],
            [1, 'Ember'],
            [1, 'Smokescreen'],
            [12, 'Dragon Breath'],
            [19, 'Fire Fang'],
            [24, 'Slash'],
            [30, 'Flamethrower'],
            [37, 'Scary Face'],
            [42, 'Fire Spin'],
            [48, 'Inferno'],
            [54, 'Flare Blitz'],
        ],
    ],

    ['006',
        [
            [0, 'Air Slash'],
            [1, 'Air Slash'],
            [1, 'Dragon Claw'],
            [1, 'Heat Wave'],
            [1, 'Scratch'],
            [1, 'Growl'],
            [1, 'Ember'],
            [1, 'Smokescreen'],
            [12, 'Dragon Breath'],
            [19, 'Fire Fang'],
            [24, 'Slash'],
            [30, 'Flamethrower'],
            [39, 'Scary Face'],
            [46, 'Fire Spin'],
            [54, 'Inferno'],
            [62, 'Flare Blitz'],
        ],
    ],

    ['007',
        [
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [3, 'Water Gun'],
            [6, 'Withdraw'],
            [9, 'Rapid Spin'],
            [12, 'Bite'],
            [15, 'Water Pulse'],
            [18, 'Protect'],
            [21, 'Rain Dance'],
            [24, 'Aqua Tail'],
            [27, 'Shell Smash'],
            [30, 'Iron Defense'],
            [33, 'Hydro Pump'],
            [36, 'Skull Bash'],
        ],
    ],

    ['008',
        [
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [1, 'Water Gun'],
            [1, 'Withdraw'],
            [9, 'Rapid Spin'],
            [12, 'Bite'],
            [15, 'Water Pulse'],
            [20, 'Protect'],
            [25, 'Rain Dance'],
            [30, 'Aqua Tail'],
            [35, 'Shell Smash'],
            [40, 'Iron Defense'],
            [45, 'Hydro Pump'],
            [50, 'Skull Bash'],
        ],
    ],

    ['009',
        [
            [0, 'Flash Cannon'],
            [1, 'Flash Cannon'],
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [1, 'Water Gun'],
            [1, 'Withdraw'],
            [9, 'Rapid Spin'],
            [12, 'Bite'],
            [15, 'Water Pulse'],
            [20, 'Protect'],
            [25, 'Rain Dance'],
            [30, 'Aqua Tail'],
            [35, 'Shell Smash'],
            [42, 'Iron Defense'],
            [49, 'Hydro Pump'],
            [56, 'Skull Bash'],
        ],
    ],

    ['010',
        [
            [1, 'Tackle'],
            [1, 'String Shot'],
            [9, 'Bug Bite'],
        ],
    ],

    ['011',
        [
            [0, 'Harden'],
            [1, 'Harden'],
        ],
    ],

    ['012',
        [
            [0, 'Gust'],
            [1, 'Gust'],
            [1, 'Harden'],
            [1, 'Tackle'],
            [1, 'String Shot'],
            [1, 'Bug Bite'],
            [4, 'Supersonic'],
            [8, 'Confusion'],
            [12, 'Poison Powder'],
            [12, 'Stun Spore'],
            [12, 'Sleep Powder'],
            [16, 'Psybeam'],
            [20, 'Whirlwind'],
            [24, 'Air Slash'],
            [28, 'Safeguard'],
            [32, 'Bug Buzz'],
            [36, 'Tailwind'],
            [40, 'Rage Powder'],
            [44, 'Quiver Dance'],
        ],
    ],

    ['013',
        [
            [1, 'Poison Sting'],
            [1, 'String Shot'],
            [9, 'Bug Bite'],
        ],
    ],

    ['014',
        [
            [0, 'Harden'],
            [1, 'Harden'],
        ],
    ],

    ['015',
        [
            [0, 'Twineedle'],
            [1, 'Twineedle'],
            [1, 'Fury Attack'],
            [11, 'Fury Attack'],
            [14, 'Rage'],
            [17, 'Pursuit'],
            [20, 'Focus Energy'],
            [23, 'Venoshock'],
            [26, 'Assurance'],
            [29, 'Toxic Spikes'],
            [32, 'Pin Missile'],
            [35, 'Poison Jab'],
            [38, 'Agility'],
            [41, 'Endeavor'],
            [44, 'Fell Stinger'],
        ],
    ],

    ['016',
        [
            [1, 'Tackle'],
            [5, 'Sand Attack'],
            [9, 'Gust'],
            [13, 'Quick Attack'],
            [17, 'Whirlwind'],
            [21, 'Twister'],
            [25, 'Feather Dance'],
            [29, 'Agility'],
            [33, 'Wing Attack'],
            [37, 'Roost'],
            [41, 'Tailwind'],
            [45, 'Mirror Move'],
            [49, 'Air Slash'],
            [53, 'Hurricane'],
        ],
    ],

    ['017',
        [
            [1, 'Tackle'],
            [1, 'Sand Attack'],
            [1, 'Gust'],
            [5, 'Sand Attack'],
            [9, 'Gust'],
            [13, 'Quick Attack'],
            [17, 'Whirlwind'],
            [22, 'Twister'],
            [27, 'Feather Dance'],
            [32, 'Agility'],
            [37, 'Wing Attack'],
            [42, 'Roost'],
            [47, 'Tailwind'],
            [52, 'Mirror Move'],
            [57, 'Air Slash'],
            [62, 'Hurricane'],
        ],
    ],

    ['018',
        [
            [1, 'Hurricane'],
            [1, 'Tackle'],
            [1, 'Sand Attack'],
            [1, 'Gust'],
            [1, 'Quick Attack'],
            [5, 'Sand Attack'],
            [9, 'Gust'],
            [13, 'Quick Attack'],
            [17, 'Whirlwind'],
            [22, 'Twister'],
            [27, 'Feather Dance'],
            [32, 'Agility'],
            [38, 'Wing Attack'],
            [44, 'Roost'],
            [50, 'Tailwind'],
            [56, 'Mirror Move'],
            [62, 'Air Slash'],
            [68, 'Hurricane'],
        ],
    ],

    ['019',
        [
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [4, 'Quick Attack'],
            [7, 'Focus Energy'],
            [10, 'Bite'],
            [13, 'Pursuit'],
            [16, 'Hyper Fang'],
            [19, 'Assurance'],
            [22, 'Crunch'],
            [25, 'Sucker Punch'],
            [28, 'Super Fang'],
            [31, 'Double Edge'],
            [34, 'Endeavor'],
        ], //Kantonian Form
        [
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [4, 'Quick Attack'],
            [7, 'Focus Energy'],
            [10, 'Bite'],
            [13, 'Pursuit'],
            [16, 'Hyper Fang'],
            [19, 'Assurance'],
            [22, 'Crunch'],
            [25, 'Sucker Punch'],
            [28, 'Super Fang'],
            [31, 'Double Edge'],
            [34, 'Endeavor'],
        ], //Alolan Form
    ], //Rattata

    ['020',
        [
            [0, 'Scary Face'],
            [1, 'Scary Face'],
            [1, 'Swords Dance'],
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [1, 'Quick Attack'],
            [1, 'Focus Energy'],
            [4, 'Quick Attack'],
            [7, 'Focus Energy'],
            [10, 'Bite'],
            [13, 'Pursuit'],
            [16, 'Hyper Fang'],
            [19, 'Assurance'],
            [24, 'Crunch'],
            [29, 'Sucker Punch'],
            [34, 'Super Fang'],
            [39, 'Double Edge'],
            [44, 'Endeavor'],
        ], //Kantonian Form
        [
            [0, 'Scary Face'],
            [1, 'Scary Face'],
            [1, 'Swords Dance'],
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [1, 'Quick Attack'],
            [1, 'Focus Energy'],
            [4, 'Quick Attack'],
            [7, 'Focus Energy'],
            [10, 'Bite'],
            [13, 'Pursuit'],
            [16, 'Hyper Fang'],
            [19, 'Assurance'],
            [24, 'Crunch'],
            [29, 'Sucker Punch'],
            [34, 'Super Fang'],
            [39, 'Double Edge'],
            [44, 'Endeavor'],
        ], //Alolan Form
    ], //Raticate

    ['021',
        [
            [1, 'Peck'],
            [1, 'Growl'],
            [4, 'Leer'],
            [8, 'Pursuit'],
            [11, 'Fury Attack'],
            [15, 'Aerial Ace'],
            [18, 'Mirror Move'],
            [22, 'Assurance'],
            [25, 'Agility'],
            [29, 'Focus Energy'],
            [32, 'Roost'],
            [36, 'Drill Peck'],
        ],
    ],

    ['022',
        [
            [1, 'Drill Run'],
            [1, 'Pluck'],
            [1, 'Peck'],
            [1, 'Growl'],
            [1, 'Leer'],
            [1, 'Pursuit'],
            [4, 'Leer'],
            [8, 'Pursuit'],
            [11, 'Fury Attack'],
            [15, 'Aerial Ace'],
            [18, 'Mirror Move'],
            [23, 'Assurance'],
            [27, 'Agility'],
            [32, 'Focus Energy'],
            [36, 'Roost'],
            [41, 'Drill Peck'],
            [45, 'Drill Run'],
        ],
    ],

    ['023',
        [
            [1, 'Wrap'],
            [1, 'Leer'],
            [4, 'Poison Sting'],
            [9, 'Bite'],
            [12, 'Glare'],
            [17, 'Screech'],
            [20, 'Acid'],
            [25, 'Stockpile'],
            [25, 'Swallow'],
            [25, 'Spit Up'],
            [28, 'Acid Spray'],
            [33, 'Mud Bomb'],
            [36, 'Gastro Acid'],
            [38, 'Belch'],
            [41, 'Haze'],
            [44, 'Coil'],
            [49, 'Gunk Shot'],
        ],
    ],

    ['024',
        [
            [0, 'Crunch'],
            [1, 'Crunch'],
            [1, 'Ice Fang'],
            [1, 'Thunder Fang'],
            [1, 'Fire Fang'],
            [1, 'Wrap'],
            [1, 'Leer'],
            [1, 'Poison Sting'],
            [1, 'Bite'],
            [4, 'Poison Sting'],
            [9, 'Bite'],
            [12, 'Glare'],
            [17, 'Screech'],
            [20, 'Acid'],
            [27, 'Stockpile'],
            [27, 'Swallow'],
            [27, 'Spit Up'],
            [32, 'Acid Spray'],
            [39, 'Mud Bomb'],
            [44, 'Gastro Acid'],
            [48, 'Belch'],
            [51, 'Haze'],
            [56, 'Coil'],
            [63, 'Gunk Shot'],
        ],
    ],

    ['025',
        [
            [1, 'Play Nice'],
            [1, 'Sweet Kiss'],
            [1, 'Nuzzle'],
            [1, 'Nasty Plot'],
            [1, 'Charm'],
            [1, 'Thunder Shock'],
            [1, 'Tail Whip'],
            [1, 'Growl'],
            [1, 'Quick Attack'],
            [4, 'Thunder Wave'],
            [8, 'Double Team'],
            [12, 'Electro Ball'],
            [16, 'Feint'],
            [20, 'Spark'],
            [24, 'Agility'],
            [28, 'Slam'],
            [32, 'Discharge'],
            [36, 'Thunderbolt'],
            [40, 'Light Screen'],
            [44, 'Thunder'],
        ],
    ],

    ['026',
        [
            [0, 'Thunder Punch'],
            [1, 'Thunder Punch'],
            [1, 'Play Nice'],
            [1, 'Sweet Kiss'],
            [1, 'Nuzzle'],
            [1, 'Nasty Plot'],
            [1, 'Charm'],
            [1, 'Thunder Wave'],
            [1, 'Double Team'],
            [1, 'Electro Ball'],
            [1, 'Feint'],
            [1, 'Spark'],
            [1, 'Agility'],
            [1, 'Slam'],
            [1, 'Discharge'],
            [1, 'Thunderbolt'],
            [1, 'Light Screen'],
            [1, 'Thunder'],
            [1, 'Thunder Shock'],
            [1, 'Tail Whip'],
            [1, 'Growl'],
            [1, 'Quick Attack'],
        ], //Kantonian Form
        [
            [0, 'Psychic'],
            [1, 'Psychic'],
            [1, 'Play Nice'],
            [1, 'Sweet Kiss'],
            [1, 'Nuzzle'],
            [1, 'Nasty Plot'],
            [1, 'Charm'],
            [1, 'Thunder Wave'],
            [1, 'Double Team'],
            [1, 'Electro Ball'],
            [1, 'Feint'],
            [1, 'Spark'],
            [1, 'Agility'],
            [1, 'Slam'],
            [1, 'Discharge'],
            [1, 'Thunderbolt'],
            [1, 'Light Screen'],
            [1, 'Thunder'],
            [1, 'Thunder Shock'],
            [1, 'Tail Whip'],
            [1, 'Growl'],
            [1, 'Quick Attack'],
        ], //Alolan Form
    ], //Raichu

    ['027',
        [
            [1, 'Scratch'],
            [1, 'Defense Curl'],
            [3, 'Poison Sting'],
            [6, 'Sand Attack'],
            [9, 'Rollout'],
            [12, 'Fury Cutter'],
            [15, 'Rapid Spin'],
            [18, 'Bulldoze'],
            [21, 'Swift'],
            [24, 'Fury Swipes'],
            [27, 'Agility'],
            [30, 'Slash'],
            [33, 'Dig'],
            [36, 'Gyro Ball'],
            [39, 'Swords Dance'],
            [42, 'Sandstorm'],
            [45, 'Earthquake'],
        ], //Kantonian Form
        [
            [1, 'Scratch'],
            [1, 'Defense Curl'],
            [3, 'Mist'],
            [6, 'Powder Snow'],
            [9, 'Rollout'],
            [12, 'Fury Cutter'],
            [15, 'Rapid Spin'],
            [18, 'Metal Claw'],
            [21, 'Swift'],
            [24, 'Fury Swipes'],
            [27, 'Iron Defense'],
            [30, 'Slash'],
            [33, 'Iron Head'],
            [36, 'Gyro Ball'],
            [39, 'Swords Dance'],
            [42, 'Hail'],
            [45, 'Blizzard'],
        ], //Alolan Form
    ], //Sandshrew

    ['028',
        [
            [1, 'Crush Claw'],
            [1, 'Scratch'],
            [1, 'Defense Curl'],
            [1, 'Poison Sting'],
            [1, 'Sand Attack'],
            [9, 'Rollout'],
            [12, 'Fury Cutter'],
            [15, 'Rapid Spin'],
            [18, 'Bulldoze'],
            [21, 'Swift'],
            [26, 'Fury Swipes'],
            [31, 'Sand Tomb'],
            [36, 'Slash'],
            [41, 'Dig'],
            [46, 'Gyro Ball'],
            [51, 'Swords Dance'],
            [56, 'Sandstorm'],
            [61, 'Earthquake'],
        ], //Kantonian Form
        [
            [0, 'Icicle Spear'],
            [1, 'Icicle Spear'],
            [1, 'Icicle Crash'],
            [1, 'Metal Burst'],
            [1, 'Rollout'],
            [1, 'Fury Cutter'],
            [1, 'Rapid Spin'],
            [1, 'Metal Claw'],
            [1, 'Swift'],
            [1, 'Fury Swipes'],
            [1, 'Iron Defense'],
            [1, 'Slash'],
            [1, 'Iron Head'],
            [1, 'Gyro Ball'],
            [1, 'Swords Dance'],
            [1, 'Hail'],
            [1, 'Blizzard'],
            [1, 'Scratch'],
            [1, 'Defense Curl'],
            [1, 'Mist'],
            [1, 'Powder Snow'],
        ], //Alolan Form
    ], //Sandslash

    ['029',
        [
            [1, 'Growl'],
            [1, 'Poison Sting'],
            [5, 'Scratch'],
            [10, 'Tail Whip'],
            [15, 'Fury Swipes'],
            [20, 'Toxic Spikes'],
            [25, 'Double Kick'],
            [30, 'Bite'],
            [35, 'Helping Hand'],
            [40, 'Toxic'],
            [45, 'Flatter'],
            [50, 'Crunch'],
            [55, 'Earth Power'],
        ],
    ],

    ['030',
        [
            [1, 'Growl'],
            [1, 'Poison Sting'],
            [1, 'Scratch'],
            [1, 'Tail Whip'],
            [15, 'Fury Swipes'],
            [22, 'Toxic Spikes'],
            [29, 'Double Kick'],
            [36, 'Bite'],
            [43, 'Helping Hand'],
            [50, 'Toxic'],
            [57, 'Flatter'],
            [64, 'Crunch'],
            [71, 'Earth Power'],
        ],
    ],

    ['031',
        [
            [0, 'Superpower'],
            [1, 'Superpower'],
            [1, 'Fury Swipes'],
            [1, 'Toxic Spikes'],
            [1, 'Double Kick'],
            [1, 'Bite'],
            [1, 'Helping Hand'],
            [1, 'Toxic'],
            [1, 'Flatter'],
            [1, 'Crunch'],
            [1, 'Earth Power'],
            [1, 'Growl'],
            [1, 'Poison Sting'],
            [1, 'Scratch'],
            [1, 'Tail Whip'],
        ],
    ],

    ['032',
        [
            [1, 'Leer'],
            [1, 'Poison Sting'],
            [5, 'Peck'],
            [10, 'Focus Energy'],
            [15, 'Fury Attack'],
            [20, 'Toxic Spikes'],
            [25, 'Double Kick'],
            [30, 'Horn Attack'],
            [35, 'Helping Hand'],
            [40, 'Toxic'],
            [45, 'Flatter'],
            [50, 'Poison Jab'],
            [55, 'Earth Power'],
        ],
    ],

    ['033',
        [
            [1, 'Leer'],
            [1, 'Poison Sting'],
            [1, 'Peck'],
            [1, 'Focus Energy'],
            [15, 'Fury Attack'],
            [22, 'Toxic Spikes'],
            [29, 'Double Kick'],
            [36, 'Horn Attack'],
            [43, 'Helping Hand'],
            [50, 'Toxic'],
            [57, 'Flatter'],
            [64, 'Poison Jab'],
            [71, 'Earth Power'],
        ],
    ],

    ['034',
        [
            [0, 'Megahorn'],
            [1, 'Megahorn'],
            [1, 'Fury Attack'],
            [1, 'Toxic Spikes'],
            [1, 'Double Kick'],
            [1, 'Horn Attack'],
            [1, 'Helping Hand'],
            [1, 'Toxic'],
            [1, 'Flatter'],
            [1, 'Poison Jab'],
            [1, 'Earth Power'],
            [1, 'Leer'],
            [1, 'Poison Sting'],
            [1, 'Peck'],
            [1, 'Focus Energy'],
        ],
    ],

    ['035',
        [
            [1, 'Sing'],
            [1, 'Sweet Kiss'],
            [1, 'Disarming Voice'],
            [1, 'Encore'],
            [1, 'Charm'],
            [1, 'Splash'],
            [1, 'Pound'],
            [1, 'Copycat'],
            [1, 'Growl'],
            [1, 'Defense Curl'],
            [4, 'Stored Power'],
            [8, 'Minimize'],
            [12, 'After You'],
            [16, 'Life Dew'],
            [20, 'Metronome'],
            [24, 'Moonlight'],
            [28, 'Gravity'],
            [32, 'Meteor Mash'],
            [36, 'Follow Me'],
            [40, 'Cosmic Power'],
            [44, 'Moonblast'],
            [48, 'Healing Wish'],
        ],
    ],

    ['036',
        [
            [1, 'Sing'],
            [1, 'Sweet Kiss'],
            [1, 'Disarming Voice'],
            [1, 'Encore'],
            [1, 'Charm'],
            [1, 'Stored Power'],
            [1, 'Minimize'],
            [1, 'After You'],
            [1, 'Life Dew'],
            [1, 'Metronome'],
            [1, 'Moonlight'],
            [1, 'Gravity'],
            [1, 'Meteor Mash'],
            [1, 'Follow Me'],
            [1, 'Cosmic Power'],
            [1, 'Moonblast'],
            [1, 'Healing Wish'],
            [1, 'Splash'],
            [1, 'Pound'],
            [1, 'Copycat'],
            [1, 'Growl'],
            [1, 'Defense Curl'],
        ],
    ],

    ['037',
        [
            [1, 'Ember'],
            [1, 'Tail Whip'],
            [4, 'Disable'],
            [8, 'Quick Attack'],
            [12, 'Spite'],
            [16, 'Incinerate'],
            [20, 'Confuse Ray'],
            [24, 'Will O Wisp'],
            [28, 'Extrasensory'],
            [32, 'Flamethrower'],
            [36, 'Imprison'],
            [40, 'Fire Spin'],
            [44, 'Safeguard'],
            [48, 'Inferno'],
            [52, 'Grudge'],
            [56, 'Fire Blast'],
        ], //Kantonian Form
        [
            [1, 'Powder Snow'],
            [1, 'Tail Whip'],
            [4, 'Disable'],
            [8, 'Ice Shard'],
            [12, 'Spite'],
            [16, 'Icy Wind'],
            [20, 'Confuse Ray'],
            [24, 'Aurora Beam'],
            [28, 'Extrasensory'],
            [32, 'Ice Beam'],
            [36, 'Imprison'],
            [40, 'Mist'],
            [44, 'Aurora Veil'],
            [48, 'Sheer Cold'],
            [52, 'Grudge'],
            [56, 'Blizzard'],
        ], //Alolan Form
    ], //Vulpix

    ['038',
        [
            [1, 'Nasty Plot'],
            [1, 'Incinerate'],
            [1, 'Spite'],
            [1, 'Confuse Ray'],
            [1, 'Will O Wisp'],
            [1, 'Extrasensory'],
            [1, 'Flamethrower'],
            [1, 'Imprison'],
            [1, 'Fire Spin'],
            [1, 'Safeguard'],
            [1, 'Inferno'],
            [1, 'Grudge'],
            [1, 'Fire Blast'],
            [1, 'Ember'],
            [1, 'Tail Whip'],
            [1, 'Disable'],
            [1, 'Quick Attack'],
        ], //Kantonian Form
        [
            [0, 'Dazzling Gleam'],
            [1, 'Dazzling Gleam'],
            [1, 'Nasty Plot'],
            [1, 'Spite'],
            [1, 'Icy Wind'],
            [1, 'Confuse Ray'],
            [1, 'Aurora Beam'],
            [1, 'Extrasensory'],
            [1, 'Ice Beam'],
            [1, 'Imprison'],
            [1, 'Mist'],
            [1, 'Aurora Veil'],
            [1, 'Sheer Cold'],
            [1, 'Grudge'],
            [1, 'Blizzard'],
            [1, 'Powder Snow'],
            [1, 'Tail Whip'],
            [1, 'Disable'],
            [1, 'Ice Shard'],
        ], //Alolan Form
    ], //Ninetales

    ['039',
        [
            [1, 'Sweet Kiss'],
            [1, 'Disarming Voice'],
            [1, 'Disable'],
            [1, 'Charm'],
            [1, 'Sing'],
            [1, 'Pound'],
            [1, 'Copycat'],
            [1, 'Defense Curl'],
            [4, 'Echoed Voice'],
            [8, 'Covet'],
            [12, 'Stockpile'],
            [12, 'Swallow'],
            [12, 'Spit Up'],
            [16, 'Round'],
            [20, 'Rest'],
            [24, 'Body Slam'],
            [28, 'Mimic'],
            [32, 'Gyro Ball'],
            [36, 'Hyper Voice'],
            [40, 'Play Rough'],
            [44, 'Double Edge'],
        ],
    ],

    ['040',
        [
            [1, 'Sweet Kiss'],
            [1, 'Disarming Voice'],
            [1, 'Disable'],
            [1, 'Charm'],
            [1, 'Echoed Voice'],
            [1, 'Covet'],
            [1, 'Stockpile'],
            [1, 'Swallow'],
            [1, 'Spit Up'],
            [1, 'Round'],
            [1, 'Rest'],
            [1, 'Body Slam'],
            [1, 'Mimic'],
            [1, 'Gyro Ball'],
            [1, 'Play Rough'],
            [1, 'Hyper Voice'],
            [1, 'Double Edge'],
            [1, 'Sing'],
            [1, 'Pound'],
            [1, 'Copycat'],
            [1, 'Defense Curl'],
        ],
    ],

    ['041',
        [
            [1, 'Absorb'],
            [1, 'Supersonic'],
            [5, 'Astonish'],
            [10, 'Mean Look'],
            [15, 'Poison Fang'],
            [20, 'Quick Guard'],
            [25, 'Air Cutter'],
            [30, 'Bite'],
            [35, 'Haze'],
            [40, 'Venoshock'],
            [45, 'Confuse Ray'],
            [50, 'Air Slash'],
            [55, 'Leech Life'],
        ],
    ],

    ['042',
        [
            [1, 'Screech'],
            [1, 'Absorb'],
            [1, 'Supersonic'],
            [1, 'Astonish'],
            [1, 'Mean Look'],
            [15, 'Poison Fang'],
            [20, 'Quick Guard'],
            [27, 'Air Cutter'],
            [34, 'Bite'],
            [41, 'Haze'],
            [48, 'Venoshock'],
            [55, 'Confuse Ray'],
            [62, 'Air Slash'],
            [69, 'Leech Life'],
        ],
    ],

    ['043',
        [
            [1, 'Absorb'],
            [1, 'Growth'],
            [4, 'Acid'],
            [8, 'Sweet Scent'],
            [12, 'Mega Drain'],
            [14, 'Poison Powder'],
            [16, 'Stun Spore'],
            [18, 'Sleep Powder'],
            [20, 'Giga Drain'],
            [24, 'Toxic'],
            [28, 'Moonblast'],
            [32, 'Grassy Terrain'],
            [36, 'Moonlight'],
            [40, 'Petal Dance'],
        ],
    ],

    ['044',
        [
            [1, 'Absorb'],
            [1, 'Growth'],
            [1, 'Acid'],
            [1, 'Sweet Scent'],
            [12, 'Mega Drain'],
            [14, 'Poison Powder'],
            [16, 'Stun Spore'],
            [18, 'Sleep Powder'],
            [20, 'Giga Drain'],
            [26, 'Toxic'],
            [32, 'Moonblast'],
            [38, 'Grassy Terrain'],
            [44, 'Moonlight'],
            [50, 'Petal Dance'],
        ],
    ],

    ['045',
        [
            [0, 'Petal Blizzard'],
            [1, 'Petal Blizzard'],
            [1, 'Aromatherapy'],
            [1, 'Mega Drain'],
            [1, 'Poison Powder'],
            [1, 'Stun Spore'],
            [1, 'Sleep Powder'],
            [1, 'Giga Drain'],
            [1, 'Toxic'],
            [1, 'Moonblast'],
            [1, 'Grassy Terrain'],
            [1, 'Moonlight'],
            [1, 'Petal Dance'],
            [1, 'Absorb'],
            [1, 'Growth'],
            [1, 'Acid'],
            [1, 'Sweet Scent'],
        ],
    ],

    ['046',
        [
            [1, 'Scratch'],
            [6, 'Stun Spore'],
            [6, 'Poison Powder'],
            [11, 'Absorb'],
            [17, 'Fury Cutter'],
            [22, 'Spore'],
            [27, 'Slash'],
            [33, 'Growth'],
            [38, 'Giga Drain'],
            [43, 'Aromatherapy'],
            [49, 'Rage Powder'],
            [54, 'X Scissor'],
        ],
    ],

    ['047',
        [
            [1, 'Cross Poison'],
            [1, 'Scratch'],
            [1, 'Stun Spore'],
            [1, 'Poison Powder'],
            [1, 'Absorb'],
            [6, 'Stun Spore'],
            [6, 'Poison Powder'],
            [11, 'Absorb'],
            [17, 'Fury Cutter'],
            [22, 'Spore'],
            [29, 'Slash'],
            [37, 'Growth'],
            [44, 'Giga Drain'],
            [51, 'Aromatherapy'],
            [59, 'Rage Powder'],
            [66, 'X Scissor'],
        ],
    ],

    ['048',
        [
            [1, 'Tackle'],
            [1, 'Disable'],
            [1, 'Foresight'],
            [5, 'Supersonic'],
            [11, 'Confusion'],
            [13, 'Poison Powder'],
            [17, 'Psybeam'],
            [23, 'Stun Spore'],
            [25, 'Signal Beam'],
            [29, 'Sleep Powder'],
            [35, 'Leech Life'],
            [37, 'Zen Headbutt'],
            [41, 'Poison Fang'],
            [47, 'Psychic'],
        ],
    ],

    ['049',
        [
            [0, 'Gust'],
            [1, 'Gust'],
            [1, 'Quiver Dance'],
            [1, 'Bug Buzz'],
            [1, 'Silver Wind'],
            [1, 'Tackle'],
            [1, 'Disable'],
            [1, 'Foresight'],
            [1, 'Supersonic'],
            [5, 'Supersonic'],
            [11, 'Confusion'],
            [13, 'Poison Powder'],
            [17, 'Psybeam'],
            [23, 'Stun Spore'],
            [25, 'Signal Beam'],
            [29, 'Sleep Powder'],
            [37, 'Leech Life'],
            [41, 'Zen Headbutt'],
            [47, 'Poison Fang'],
            [55, 'Psychic'],
            [59, 'Bug Buzz'],
            [63, 'Quiver Dance'],
        ],
    ],

    ['050',
        [
            [1, 'Sand Attack'],
            [1, 'Scratch'],
            [4, 'Growl'],
            [8, 'Astonish'],
            [12, 'Mud Slap'],
            [16, 'Bulldoze'],
            [20, 'Sucker Punch'],
            [24, 'Slash'],
            [28, 'Sandstorm'],
            [32, 'Dig'],
            [36, 'Earth Power'],
            [40, 'Earthquake'],
            [44, 'Fissure'],
        ], //Kantonian Form
        [
            [1, 'Sand Attack'],
            [1, 'Metal Claw'],
            [4, 'Growl'],
            [8, 'Astonish'],
            [12, 'Mud Slap'],
            [16, 'Bulldoze'],
            [20, 'Sucker Punch'],
            [24, 'Iron Head'],
            [28, 'Sandstorm'],
            [32, 'Dig'],
            [36, 'Earth Power'],
            [40, 'Earthquake'],
            [44, 'Fissure'],
        ], //Alolan Form
    ], //Diglett

    ['051',
        [
            [0, 'Sand Tomb'],
            [1, 'Sand Tomb'],
            [1, 'Night Slash'],
            [1, 'Tri Attack'],
            [1, 'Sand Attack'],
            [1, 'Scratch'],
            [1, 'Growl'],
            [1, 'Astonish'],
            [12, 'Mud Slap'],
            [16, 'Bulldoze'],
            [20, 'Sucker Punch'],
            [24, 'Slash'],
            [30, 'Sandstorm'],
            [36, 'Dig'],
            [42, 'Earth Power'],
            [48, 'Earthquake'],
            [54, 'Fissure'],
        ], //Kantonian Form
        [
            [0, 'Sand Tomb'],
            [1, 'Sand Tomb'],
            [1, 'Night Slash'],
            [1, 'Tri Attack'],
            [1, 'Sand Attack'],
            [1, 'Metal Claw'],
            [1, 'Growl'],
            [1, 'Astonish'],
            [12, 'Mud Slap'],
            [16, 'Bulldoze'],
            [20, 'Sucker Punch'],
            [24, 'Iron Head'],
            [30, 'Sandstorm'],
            [36, 'Dig'],
            [42, 'Earth Power'],
            [48, 'Earthquake'],
            [54, 'Fissure'],
        ], //Alolan Form
    ], //Dugtrio

    ['052',
        [
            [1, 'Fake Out'],
            [1, 'Growl'],
            [4, 'Feint'],
            [8, 'Scratch'],
            [12, 'Pay Day'],
            [16, 'Bite'],
            [20, 'Taunt'],
            [24, 'Assurance'],
            [29, 'Fury Swipes'],
            [32, 'Screech'],
            [36, 'Slash'],
            [40, 'Nasty Plot'],
            [44, 'Play Rough'],
        ], //Kantonian Form
        [
            [1, 'Fake Out'],
            [1, 'Growl'],
            [4, 'Feint'],
            [8, 'Scratch'],
            [12, 'Pay Day'],
            [16, 'Bite'],
            [20, 'Taunt'],
            [24, 'Assurance'],
            [29, 'Fury Swipes'],
            [32, 'Screech'],
            [36, 'Night Slash'],
            [40, 'Nasty Plot'],
            [44, 'Play Rough'],
        ], //Alolan Form
        [
            [1, 'Fake Out'],
            [1, 'Growl'],
            [4, 'Hone Claws'],
            [8, 'Scratch'],
            [12, 'Pay Day'],
            [16, 'Metal Claw'],
            [20, 'Taunt'],
            [24, 'Swagger'],
            [29, 'Fury Swipes'],
            [32, 'Screech'],
            [36, 'Slash'],
            [40, 'Metal Sound'],
            [44, 'Thrash'],
        ], //Galarian Form
    ], //Meowth

    ['053',
        [
            [0, 'Power Gem'],
            [1, 'Power Gem'],
            [1, 'Switcheroo'],
            [1, 'Fake Out'],
            [1, 'Growl'],
            [1, 'Feint'],
            [1, 'Scratch'],
            [12, 'Pay Day'],
            [16, 'Bite'],
            [20, 'Taunt'],
            [24, 'Assurance'],
            [31, 'Fury Swipes'],
            [36, 'Screech'],
            [42, 'Slash'],
            [48, 'Nasty Plot'],
            [54, 'Play Rough'],
        ], //Kantonian Form
        [
            [0, 'Power Gem'],
            [1, 'Power Gem'],
            [1, 'Quash'],
            [1, 'Switcheroo'],
            [1, 'Fake Out'],
            [1, 'Growl'],
            [1, 'Feint'],
            [1, 'Scratch'],
            [12, 'Pay Day'],
            [16, 'Bite'],
            [20, 'Taunt'],
            [24, 'Assurance'],
            [31, 'Fury Swipes'],
            [36, 'Screech'],
            [42, 'Night Slash'],
            [48, 'Nasty Plot'],
            [54, 'Play Rough'],
        ], //Alolan Form
    ], //Persian

    ['054',
        [
            [1, 'Scratch'],
            [1, 'Tail Whip'],
            [3, 'Water Gun'],
            [6, 'Confusion'],
            [9, 'Fury Swipes'],
            [12, 'Water Pulse'],
            [15, 'Disable'],
            [18, 'Zen Headbutt'],
            [21, 'Screech'],
            [24, 'Aqua Tail'],
            [27, 'Soak'],
            [30, 'Psych Up'],
            [34, 'Amnesia'],
            [36, 'Hydro Pump'],
            [39, 'Wonder Room'],
        ],
    ],

    ['055',
        [
            [1, 'Aqua Jet'],
            [1, 'Scratch'],
            [1, 'Tail Whip'],
            [1, 'Water Gun'],
            [1, 'Confusion'],
            [9, 'Fury Swipes'],
            [12, 'Water Pulse'],
            [15, 'Disable'],
            [18, 'Zen Headbutt'],
            [21, 'Screech'],
            [24, 'Aqua Tail'],
            [27, 'Soak'],
            [30, 'Psych Up'],
            [36, 'Amnesia'],
            [40, 'Hydro Pump'],
            [45, 'Wonder Room'],
        ],
    ],

    ['056',
        [
            [1, 'Covet'],
            [1, 'Scratch'],
            [1, 'Low Kick'],
            [1, 'Leer'],
            [1, 'Focus Energy'],
            [5, 'Fury Swipes'],
            [8, 'Karate Chop'],
            [12, 'Pursuit'],
            [15, 'Seismic Toss'],
            [19, 'Swagger'],
            [22, 'Cross Chop'],
            [26, 'Assurance'],
            [29, 'Punishment'],
            [33, 'Thrash'],
            [36, 'Close Combat'],
            [40, 'Screech'],
            [43, 'Stomping Tantrum'],
            [47, 'Outrage'],
            [50, 'Final Gambit'],
        ],
    ],

    ['057',
        [
            [0, 'Rage'],
            [1, 'Rage'],
            [1, 'Final Gambit'],
            [1, 'Fling'],
            [1, 'Scratch'],
            [1, 'Low Kick'],
            [1, 'Leer'],
            [1, 'Focus Energy'],
            [5, 'Fury Swipes'],
            [8, 'Karate Chop'],
            [12, 'Pursuit'],
            [15, 'Seismic Toss'],
            [19, 'Swagger'],
            [22, 'Cross Chop'],
            [26, 'Assurance'],
            [30, 'Punishment'],
            [35, 'Thrash'],
            [39, 'Close Combat'],
            [44, 'Screech'],
            [48, 'Stomping Tantrum'],
            [53, 'Outrage'],
            [57, 'Final Gambit'],
        ],
    ],

    ['058',
        [
            [1, 'Ember'],
            [1, 'Leer'],
            [4, 'Howl'],
            [8, 'Bite'],
            [12, 'Flame Wheel'],
            [16, 'Helping Hand'],
            [20, 'Agility'],
            [24, 'Fire Fang'],
            [28, 'Retaliate'],
            [32, 'Crunch'],
            [36, 'Take Down'],
            [40, 'Flamethrower'],
            [44, 'Roar'],
            [48, 'Play Rough'],
            [52, 'Reversal'],
            [56, 'Flare Blitz'],
        ],
    ],

    ['059',
        [
            [0, 'Extreme Speed'],
            [1, 'Extreme Speed'],
            [1, 'Burn Up'],
            [1, 'Flame Wheel'],
            [1, 'Helping Hand'],
            [1, 'Agility'],
            [1, 'Fire Fang'],
            [1, 'Retaliate'],
            [1, 'Crunch'],
            [1, 'Take Down'],
            [1, 'Flamethrower'],
            [1, 'Roar'],
            [1, 'Play Rough'],
            [1, 'Reversal'],
            [1, 'Flare Blitz'],
            [1, 'Ember'],
            [1, 'Leer'],
            [1, 'Howl'],
            [1, 'Bite'],
        ],
    ],

    ['060',
        [
            [1, 'Water Gun'],
            [1, 'Hypnosis'],
            [6, 'Pound'],
            [12, 'Mud Shot'],
            [18, 'Bubble Beam'],
            [24, 'Rain Dance'],
            [30, 'Body Slam'],
            [36, 'Earth Power'],
            [42, 'Hydro Pump'],
            [48, 'Belly Drum'],
            [54, 'Double Edge'],
        ],
    ],

    ['061',
        [
            [1, 'Water Gun'],
            [1, 'Hypnosis'],
            [1, 'Pound'],
            [1, 'Mud Shot'],
            [18, 'Bubble Beam'],
            [24, 'Rain Dance'],
            [32, 'Body Slam'],
            [40, 'Earth Power'],
            [48, 'Hydro Pump'],
            [56, 'Belly Drum'],
            [66, 'Double Edge'],
        ],
    ],

    ['062',
        [
            [0, 'Submission'],
            [1, 'Submission'],
            [1, 'Circle Throw'],
            [1, 'Mind Reader'],
            [1, 'Dynamic Punch'],
            [1, 'Bubble Beam'],
            [1, 'Rain Dance'],
            [1, 'Body Slam'],
            [1, 'Earth Power'],
            [1, 'Hydro Pump'],
            [1, 'Belly Drum'],
            [1, 'Double Edge'],
            [1, 'Water Gun'],
            [1, 'Hypnosis'],
            [1, 'Pound'],
            [1, 'Mud Shot'],
        ],
    ],

    ['063',
        [
            [1, 'Teleport'],
        ],
    ],

    ['064',
        [
            [0, 'Confusion'],
            [1, 'Confusion'],
            [1, 'Kinesis'],
            [1, 'Disable'],
            [1, 'Teleport'],
            [5, 'Psybeam'],
            [10, 'Reflect'],
            [15, 'Ally Switch'],
            [20, 'Psycho Cut'],
            [25, 'Recover'],
            [30, 'Psyshock'],
            [35, 'Psychic'],
            [40, 'Role Play'],
            [45, 'Future Sight'],
            [50, 'Calm Mind'],
        ],
    ],

    ['065',
        [
            [1, 'Confusion'],
            [1, 'Kinesis'],
            [1, 'Disable'],
            [1, 'Teleport'],
            [5, 'Psybeam'],
            [10, 'Reflect'],
            [15, 'Ally Switch'],
            [20, 'Psycho Cut'],
            [25, 'Recover'],
            [30, 'Psyshock'],
            [35, 'Psychic'],
            [40, 'Role Play'],
            [45, 'Future Sight'],
            [50, 'Calm Mind'],
        ],
    ],

    ['066',
        [
            [1, 'Low Kick'],
            [1, 'Leer'],
            [4, 'Focus Energy'],
            [8, 'Revenge'],
            [12, 'Low Sweep'],
            [16, 'Knock Off'],
            [20, 'Scary Face'],
            [24, 'Vital Throw'],
            [29, 'Strength'],
            [32, 'Dual Chop'],
            [36, 'Bulk Up'],
            [40, 'Seismic Toss'],
            [44, 'Dynamic Punch'],
            [48, 'Cross Chop'],
            [52, 'Double Edge'],
        ],
    ],

    ['067',
        [
            [1, 'Low Kick'],
            [1, 'Leer'],
            [1, 'Focus Energy'],
            [1, 'Revenge'],
            [12, 'Low Sweep'],
            [16, 'Knock Off'],
            [20, 'Scary Face'],
            [24, 'Vital Throw'],
            [31, 'Strength'],
            [36, 'Dual Chop'],
            [42, 'Bulk Up'],
            [48, 'Seismic Toss'],
            [54, 'Dynamic Punch'],
            [60, 'Cross Chop'],
            [66, 'Double Edge'],
        ],
    ],

    ['068',
        [
            [1, 'Wide Guard'],
            [1, 'Low Kick'],
            [1, 'Leer'],
            [1, 'Focus Energy'],
            [1, 'Revenge'],
            [12, 'Low Sweep'],
            [16, 'Knock Off'],
            [20, 'Scary Face'],
            [24, 'Vital Throw'],
            [31, 'Strength'],
            [36, 'Dual Chop'],
            [42, 'Bulk Up'],
            [48, 'Seismic Toss'],
            [54, 'Dynamic Punch'],
            [60, 'Cross Chop'],
            [66, 'Double Edge'],
        ],
    ],

    ['069',
        [
            [1, 'Vine Whip'],
            [7, 'Growth'],
            [11, 'Wrap'],
            [13, 'Sleep Powder'],
            [15, 'Poison Powder'],
            [17, 'Stun Spore'],
            [23, 'Acid'],
            [27, 'Knock Off'],
            [29, 'Sweet Scent'],
            [35, 'Gastro Acid'],
            [39, 'Razor Leaf'],
            [41, 'Poison Jab'],
            [47, 'Slam'],
            [50, 'Wring Out'],
        ],
    ],

    ['070',
        [
            [1, 'Vine Whip'],
            [1, 'Growth'],
            [1, 'Wrap'],
            [7, 'Growth'],
            [11, 'Wrap'],
            [13, 'Sleep Powder'],
            [15, 'Poison Powder'],
            [17, 'Stun Spore'],
            [24, 'Acid'],
            [29, 'Knock Off'],
            [32, 'Sweet Scent'],
            [39, 'Gastro Acid'],
            [44, 'Razor Leaf'],
            [47, 'Poison Jab'],
            [54, 'Slam'],
            [58, 'Wring Out'],
        ],
    ],

    ['071',
        [
            [0, 'Leaf Tornado'],
            [1, 'Leaf Tornado'],
            [1, 'Stockpile'],
            [1, 'Swallow'],
            [1, 'Spit Up'],
            [1, 'Vine Whip'],
            [1, 'Sleep Powder'],
            [1, 'Sweet Scent'],
            [1, 'Razor Leaf'],
            [32, 'Leaf Storm'],
            [44, 'Leaf Blade'],
        ],
    ],

    ['072',
        [
            [1, 'Poison Sting'],
            [1, 'Water Gun'],
            [4, 'Acid'],
            [8, 'Wrap'],
            [12, 'Supersonic'],
            [16, 'Water Pulse'],
            [20, 'Screech'],
            [24, 'Bubble Beam'],
            [28, 'Hex'],
            [32, 'Acid Armor'],
            [36, 'Poison Jab'],
            [40, 'Surf'],
            [44, 'Sludge Wave'],
            [48, 'Hydro Pump'],
        ],
    ],

    ['073',
        [
            [1, 'Reflect Type'],
            [1, 'Poison Sting'],
            [1, 'Water Gun'],
            [1, 'Acid'],
            [1, 'Wrap'],
            [12, 'Supersonic'],
            [16, 'Water Pulse'],
            [20, 'Screech'],
            [24, 'Bubble Beam'],
            [28, 'Hex'],
            [34, 'Acid Armor'],
            [40, 'Poison Jab'],
            [46, 'Surf'],
            [52, 'Sludge Wave'],
            [58, 'Hydro Pump'],
        ],
    ],

    ['074',
        [
            [1, 'Tackle'],
            [1, 'Defense Curl'],
            [4, 'Mud Sport'],
            [6, 'Rock Polish'],
            [10, 'Rollout'],
            [12, 'Magnitude'],
            [16, 'Rock Throw'],
            [18, 'Smack Down'],
            [22, 'Bulldoze'],
            [24, 'Self Destruct'],
            [28, 'Stealth Rock'],
            [30, 'Rock Blast'],
            [34, 'Earthquake'],
            [36, 'Explosion'],
            [40, 'Double Edge'],
            [42, 'Stone Edge'],
        ], //Kantonian Form
        [
            [1, 'Tackle'],
            [1, 'Defense Curl'],
            [4, 'Charge'],
            [6, 'Rock Polish'],
            [10, 'Rollout'],
            [12, 'Spark'],
            [16, 'Rock Throw'],
            [18, 'Smack Down'],
            [22, 'Thunder Punch'],
            [24, 'Self Destruct'],
            [28, 'Stealth Rock'],
            [30, 'Rock Blast'],
            [34, 'Discharge'],
            [36, 'Explosion'],
            [40, 'Double Edge'],
            [42, 'Stone Edge'],
        ], //Alolan Form
    ], //Geodude

    ['075',
        [
            [1, 'Tackle'],
            [1, 'Defense Curl'],
            [1, 'Mud Sport'],
            [1, 'Rock Polish'],
            [4, 'Mud Sport'],
            [6, 'Rock Polish'],
            [10, 'Rollout'],
            [12, 'Magnitude'],
            [16, 'Rock Throw'],
            [18, 'Smack Down'],
            [22, 'Bulldoze'],
            [24, 'Self Destruct'],
            [30, 'Stealth Rock'],
            [34, 'Rock Blast'],
            [40, 'Earthquake'],
            [44, 'Explosion'],
            [50, 'Double Edge'],
            [54, 'Stone Edge'],
        ], //Kantonian Form
        [
            [1, 'Tackle'],
            [1, 'Defense Curl'],
            [1, 'Charge'],
            [1, 'Rock Polish'],
            [4, 'Charge'],
            [6, 'Rock Polish'],
            [10, 'Rollout'],
            [12, 'Spark'],
            [16, 'Rock Throw'],
            [18, 'Smack Down'],
            [22, 'Thunder Punch'],
            [24, 'Self Destruct'],
            [30, 'Stealth Rock'],
            [34, 'Rock Blast'],
            [40, 'Discharge'],
            [44, 'Explosion'],
            [50, 'Double Edge'],
            [54, 'Stone Edge'],
        ], //Alolan Form
    ], //Graveler

    ['076',
        [
            [1, 'Heavy Slam'],
            [1, 'Tackle'],
            [1, 'Defense Curl'],
            [1, 'Mud Sport'],
            [1, 'Rock Polish'],
            [4, 'Mud Sport'],
            [6, 'Rock Polish'],
            [10, 'Steamroller'],
            [12, 'Magnitude'],
            [16, 'Rock Throw'],
            [18, 'Smack Down'],
            [22, 'Bulldoze'],
            [24, 'Self Destruct'],
            [30, 'Stealth Rock'],
            [34, 'Rock Blast'],
            [40, 'Earthquake'],
            [44, 'Explosion'],
            [50, 'Double Edge'],
            [54, 'Stone Edge'],
            [60, 'Heavy Slam'],
        ], //Kantonian Form
        [
            [1, 'Heavy Slam'],
            [1, 'Tackle'],
            [1, 'Defense Curl'],
            [1, 'Charge'],
            [1, 'Rock Polish'],
            [4, 'Charge'],
            [6, 'Rock Polish'],
            [10, 'Steamroller'],
            [12, 'Spark'],
            [16, 'Rock Throw'],
            [18, 'Smack Down'],
            [22, 'Thunder Punch'],
            [24, 'Self Destruct'],
            [30, 'Stealth Rock'],
            [34, 'Rock Blast'],
            [40, 'Discharge'],
            [44, 'Explosion'],
            [50, 'Double Edge'],
            [54, 'Stone Edge'],
            [60, 'Heavy Slam'],
        ], //Alolan Form
    ], //Golem

    ['077',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [5, 'Tail Whip'],
            [10, 'Ember'],
            [15, 'Flame Charge'],
            [20, 'Agility'],
            [25, 'Flame Wheel'],
            [30, 'Stomp'],
            [35, 'Fire Spin'],
            [41, 'Take Down'],
            [45, 'Inferno'],
            [50, 'Fire Blast'],
            [55, 'Flare Blitz'],
        ], //Kantonian
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [5, 'Tail Whip'],
            [10, 'Confusion'],
            [15, 'Fairy Wind'],
            [20, 'Agility'],
            [25, 'Psybeam'],
            [30, 'Stomp'],
            [35, 'Heal Pulse'],
            [41, 'Take Down'],
            [45, 'Dazzling Gleam'],
            [50, 'Psychic'],
            [55, 'Healing Wish'],
        ], //Galarian
    ], //Ponyta

    ['078',
        [
            [0, 'Smart Strike'],
            [1, 'Smart Strike'],
            [1, 'Megahorn'],
            [1, 'Poison Jab'],
            [1, 'Tackle'],
            [1, 'Quick Attack'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [1, 'Ember'],
            [15, 'Flame Charge'],
            [20, 'Agility'],
            [25, 'Flame Wheel'],
            [30, 'Stomp'],
            [35, 'Fire Spin'],
            [43, 'Take Down'],
            [49, 'Inferno'],
            [56, 'Fire Blast'],
            [63, 'Flare Blitz'],
        ], //Kantonian
        [
            [0, 'Psycho Cut'],
            [1, 'Psycho Cut'],
            [1, 'Megahorn'],
            [1, 'Tackle'],
            [1, 'Quick Attack'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [1, 'Confusion'],
            [15, 'Fairy Wind'],
            [20, 'Agility'],
            [25, 'Psybeam'],
            [30, 'Stomp'],
            [35, 'Heal Pulse'],
            [43, 'Take Down'],
            [49, 'Dazzling Gleam'],
            [56, 'Psychic'],
            [63, 'Healing Wish'],
        ], //Galarian
    ], //Rapidash

    ['079',
        [
            [1, 'Tackle'],
            [1, 'Curse'],
            [3, 'Growl'],
            [6, 'Water Gun'],
            [9, 'Yawn'],
            [12, 'Confusion'],
            [15, 'Disable'],
            [18, 'Water Pulse'],
            [21, 'Headbutt'],
            [24, 'Zen Headbutt'],
            [27, 'Amnesia'],
            [30, 'Surf'],
            [33, 'Slack Off'],
            [36, 'Psychic'],
            [39, 'Psych Up'],
            [42, 'Rain Dance'],
            [45, 'Heal Pulse'],
        ], //Kantonian
        [
            [1, 'Tackle'],
            [1, 'Curse'],
            [3, 'Growl'],
            [6, 'Acid'],
            [9, 'Yawn'],
            [12, 'Confusion'],
            [15, 'Disable'],
            [18, 'Water Pulse'],
            [21, 'Headbutt'],
            [24, 'Zen Headbutt'],
            [27, 'Amnesia'],
            [30, 'Surf'],
            [33, 'Slack Off'],
            [36, 'Psychic'],
            [39, 'Psych Up'],
            [42, 'Rain Dance'],
            [45, 'Heal Pulse'],
        ], //Galarian
    ], //Slowpoke

    ['080',
        [
            [1, 'Withdraw'],
            [1, 'Tackle'],
            [1, 'Curse'],
            [1, 'Growl'],
            [1, 'Water Gun'],
            [9, 'Yawn'],
            [12, 'Confusion'],
            [15, 'Disable'],
            [18, 'Water Pulse'],
            [21, 'Headbutt'],
            [24, 'Zen Headbutt'],
            [27, 'Amnesia'],
            [30, 'Surf'],
            [33, 'Slack Off'],
            [36, 'Psychic'],
            [41, 'Psych Up'],
            [46, 'Rain Dance'],
            [51, 'Heal Pulse'],
        ], //Kantonian
        [
            [0, 'Shell Side Arm'],
            [1, 'Shell Side Arm'],
            [1, 'Withdraw'],
            [1, 'Tackle'],
            [1, 'Curse'],
            [1, 'Growl'],
            [1, 'Acid'],
            [9, 'Yawn'],
            [12, 'Confusion'],
            [15, 'Disable'],
            [18, 'Water Pulse'],
            [21, 'Headbutt'],
            [24, 'Zen Headbutt'],
            [27, 'Amnesia'],
            [30, 'Surf'],
            [33, 'Slack Off'],
            [36, 'Psychic'],
            [39, 'Psych Up'],
            [42, 'Rain Dance'],
            [45, 'Heal Pulse'],
        ], //Galarian
    ], //Slowbro

    ['081',
        [
            [1, 'Thunder Shock'],
            [1, 'Tackle'],
            [4, 'Supersonic'],
            [8, 'Thunder Wave'],
            [12, 'Electro Ball'],
            [16, 'Gyro Ball'],
            [20, 'Spark'],
            [24, 'Screech'],
            [28, 'Magnet Rise'],
            [32, 'Flash Cannon'],
            [36, 'Discharge'],
            [40, 'Metal Sound'],
            [44, 'Light Screen'],
            [48, 'Lock On'],
            [52, 'Zap Cannon'],
        ],
    ],

    ['082',
        [
            [0, 'Tri Attack'],
            [1, 'Tri Attack'],
            [1, 'Electric Terrain'],
            [1, 'Thunder Shock'],
            [1, 'Tackle'],
            [1, 'Supersonic'],
            [1, 'Thunder Wave'],
            [12, 'Electro Ball'],
            [16, 'Gyro Ball'],
            [20, 'Spark'],
            [24, 'Screech'],
            [28, 'Magnet Rise'],
            [34, 'Flash Cannon'],
            [40, 'Discharge'],
            [46, 'Metal Sound'],
            [52, 'Light Screen'],
            [58, 'Lock On'],
            [64, 'Zap Cannon'],
        ],
    ],

    ['083',
        [
            [1, 'Peck'],
            [1, 'Sand Attack'],
            [5, 'Leer'],
            [10, 'Fury Cutter'],
            [15, 'Cut'],
            [20, 'Aerial Ace'],
            [25, 'Air Cutter'],
            [30, 'Knock Off'],
            [35, 'False Swipe'],
            [40, 'Slash'],
            [45, 'Swords Dance'],
            [50, 'Air Slash'],
            [55, 'Leaf Blade'],
            [60, 'Agility'],
            [65, 'Brave Bird'],
        ], //Kantonian
        [
            [1, 'Peck'],
            [1, 'Sand Attack'],
            [5, 'Leer'],
            [10, 'Fury Cutter'],
            [15, 'Rock Smash'],
            [20, 'Brutal Swing'],
            [25, 'Detect'],
            [30, 'Knock Off'],
            [35, 'Defog'],
            [40, 'Brick Break'],
            [45, 'Swords Dance'],
            [50, 'Slam'],
            [55, 'Leaf Blade'],
            [60, 'Final Gambit'],
            [65, 'Brave Bird'],
        ], //Galarian
    ], //Farfetch'd

    ['084',
        [
            [1, 'Peck'],
            [1, 'Growl'],
            [5, 'Quick Attack'],
            [8, 'Rage'],
            [12, 'Fury Attack'],
            [15, 'Pursuit'],
            [19, 'Pluck'],
            [22, 'Double Hit'],
            [26, 'Agility'],
            [29, 'Uproar'],
            [33, 'Acupressure'],
            [36, 'Swords Dance'],
            [40, 'Jump Kick'],
            [43, 'Drill Peck'],
            [47, 'Endeavor'],
            [50, 'Thrash'],
        ],
    ],

    ['085',
        [
            [0, 'Tri Attack'],
            [1, 'Tri Attack'],
            [1, 'Peck'],
            [1, 'Growl'],
            [1, 'Quick Attack'],
            [1, 'Rage'],
            [5, 'Quick Attack'],
            [8, 'Rage'],
            [12, 'Fury Attack'],
            [15, 'Pursuit'],
            [19, 'Pluck'],
            [22, 'Double Hit'],
            [26, 'Agility'],
            [29, 'Uproar'],
            [34, 'Acupressure'],
            [38, 'Swords Dance'],
            [43, 'Jump Kick'],
            [47, 'Drill Peck'],
            [52, 'Endeavor'],
            [56, 'Thrash'],
        ],
    ],

    ['086',
        [
            [1, 'Headbutt'],
            [3, 'Growl'],
            [7, 'Water Sport'],
            [11, 'Icy Wind'],
            [13, 'Encore'],
            [17, 'Ice Shard'],
            [21, 'Rest'],
            [23, 'Aqua Ring'],
            [27, 'Aurora Beam'],
            [31, 'Aqua Jet'],
            [33, 'Brine'],
            [37, 'Take Down'],
            [41, 'Dive'],
            [43, 'Aqua Tail'],
            [47, 'Ice Beam'],
            [51, 'Safeguard'],
            [53, 'Hail'],
        ],
    ],

    ['087',
        [
            [0, 'Sheer Cold'],
            [1, 'Sheer Cold'],
            [1, 'Headbutt'],
            [1, 'Growl'],
            [1, 'Signal Beam'],
            [1, 'Icy Wind'],
            [3, 'Growl'],
            [7, 'Signal Beam'],
            [11, 'Icy Wind'],
            [13, 'Encore'],
            [17, 'Ice Shard'],
            [21, 'Rest'],
            [23, 'Aqua Ring'],
            [27, 'Aurora Beam'],
            [31, 'Aqua Jet'],
            [33, 'Brine'],
            [39, 'Take Down'],
            [45, 'Dive'],
            [49, 'Aqua Tail'],
            [55, 'Ice Beam'],
            [61, 'Safeguard'],
            [65, 'Hail'],
        ],
    ],

    ['088',
        [
            [1, 'Pound'],
            [1, 'Poison Gas'],
            [4, 'Harden'],
            [7, 'Mud Slap'],
            [12, 'Disable'],
            [15, 'Sludge'],
            [18, 'Mud Bomb'],
            [21, 'Minimize'],
            [26, 'Fling'],
            [29, 'Sludge Bomb'],
            [32, 'Sludge Wave'],
            [37, 'Screech'],
            [40, 'Gunk Shot'],
            [43, 'Acid Armor'],
            [46, 'Belch'],
            [48, 'Memento'],
        ], //Kantonian
        [
            [1, 'Pound'],
            [1, 'Poison Gas'],
            [4, 'Harden'],
            [7, 'Bite'],
            [12, 'Disable'],
            [15, 'Acid Spray'],
            [18, 'Poison Fang'],
            [21, 'Minimize'],
            [26, 'Fling'],
            [29, 'Knock Off'],
            [32, 'Crunch'],
            [37, 'Screech'],
            [40, 'Gunk Shot'],
            [43, 'Acid Armor'],
            [46, 'Belch'],
            [48, 'Memento'],
        ], //Alolan
    ], //Grimer

    ['089',
        [
            [0, 'Venom Drench'],
            [1, 'Venom Drench'],
            [1, 'Pound'],
            [1, 'Poison Gas'],
            [1, 'Harden'],
            [1, 'Mud Slap'],
            [4, 'Harden'],
            [7, 'Mud Slap'],
            [12, 'Disable'],
            [15, 'Sludge'],
            [18, 'Mud Bomb'],
            [21, 'Minimize'],
            [26, 'Fling'],
            [29, 'Sludge Bomb'],
            [32, 'Sludge Wave'],
            [37, 'Screech'],
            [40, 'Gunk Shot'],
            [46, 'Acid Armor'],
            [52, 'Belch'],
            [57, 'Memento'],
        ], //Kantonian
        [
            [0, 'Venom Drench'],
            [1, 'Venom Drench'],
            [1, 'Pound'],
            [1, 'Poison Gas'],
            [1, 'Harden'],
            [1, 'Bite'],
            [4, 'Harden'],
            [7, 'Bite'],
            [12, 'Disable'],
            [15, 'Acid Spray'],
            [18, 'Poison Fang'],
            [21, 'Minimize'],
            [26, 'Fling'],
            [29, 'Knock Off'],
            [32, 'Crunch'],
            [37, 'Screech'],
            [40, 'Gunk Shot'],
            [46, 'Acid Armor'],
            [52, 'Belch'],
            [57, 'Memento'],
        ], //Alolan
    ], //Muk

    ['090',
        [
            [1, 'Tackle'],
            [1, 'Water Gun'],
            [4, 'Withdraw'],
            [8, 'Ice Shard'],
            [12, 'Leer'],
            [16, 'Whirlpool'],
            [20, 'Supersonic'],
            [24, 'Aurora Beam'],
            [28, 'Protect'],
            [32, 'Razor Shell'],
            [36, 'Iron Defense'],
            [40, 'Ice Beam'],
            [44, 'Shell Smash'],
            [48, 'Hydro Pump'],
        ],
    ],

    ['091',
        [
            [0, 'Icicle Spear'],
            [1, 'Icicle Spear'],
            [1, 'Icicle Crash'],
            [1, 'Toxic Spikes'],
            [1, 'Spikes'],
            [1, 'Leer'],
            [1, 'Whirlpool'],
            [1, 'Supersonic'],
            [1, 'Aurora Beam'],
            [1, 'Protect'],
            [1, 'Razor Shell'],
            [1, 'Iron Defense'],
            [1, 'Ice Beam'],
            [1, 'Shell Smash'],
            [1, 'Hydro Pump'],
            [1, 'Tackle'],
            [1, 'Water Gun'],
            [1, 'Withdraw'],
            [1, 'Ice Shard'],
        ],
    ],

    ['092',
        [
            [1, 'Lick'],
            [1, 'Confuse Ray'],
            [4, 'Hypnosis'],
            [8, 'Mean Look'],
            [12, 'Payback'],
            [16, 'Spite'],
            [20, 'Curse'],
            [24, 'Hex'],
            [28, 'Night Shade'],
            [32, 'Sucker Punch'],
            [36, 'Dark Pulse'],
            [40, 'Shadow Ball'],
            [44, 'Destiny Bond'],
            [48, 'Dream Eater'],
        ],
    ],

    ['093',
        [
            [0, 'Shadow Punch'],
            [1, 'Shadow Punch'],
            [1, 'Lick'],
            [1, 'Confuse Ray'],
            [1, 'Hypnosis'],
            [1, 'Mean Look'],
            [12, 'Payback'],
            [16, 'Spite'],
            [20, 'Curse'],
            [24, 'Hex'],
            [30, 'Night Shade'],
            [36, 'Sucker Punch'],
            [42, 'Dark Pulse'],
            [48, 'Shadow Ball'],
            [54, 'Destiny Bond'],
            [60, 'Dream Eater'],
        ],
    ],

    ['094',
        [
            [1, 'Shadow Punch'],
            [1, 'Perish Song'],
            [1, 'Reflect Type'],
            [1, 'Lick'],
            [1, 'Confuse Ray'],
            [1, 'Hypnosis'],
            [1, 'Mean Look'],
            [12, 'Payback'],
            [16, 'Spite'],
            [20, 'Curse'],
            [24, 'Hex'],
            [30, 'Night Shade'],
            [36, 'Sucker Punch'],
            [42, 'Dark Pulse'],
            [48, 'Shadow Ball'],
            [54, 'Destiny Bond'],
            [60, 'Dream Eater'],
        ],
    ],

    ['095',
        [
            [1, 'Tackle'],
            [1, 'Harden'],
            [1, 'Bind'],
            [1, 'Rock Throw'],
            [4, 'Smack Down'],
            [8, 'Rock Polish'],
            [12, 'Dragon Breath'],
            [16, 'Curse'],
            [20, 'Rock Slide'],
            [24, 'Screech'],
            [28, 'Sand Tomb'],
            [32, 'Stealth Rock'],
            [36, 'Slam'],
            [40, 'Sandstorm'],
            [44, 'Dig'],
            [48, 'Iron Tail'],
            [52, 'Stone Edge'],
            [56, 'Double Edge'],
        ],
    ],

    ['096',
        [
            [1, 'Pound'],
            [1, 'Hypnosis'],
            [5, 'Disable'],
            [9, 'Confusion'],
            [13, 'Headbutt'],
            [17, 'Poison Gas'],
            [21, 'Meditate'],
            [25, 'Psybeam'],
            [29, 'Wake Up Slap'],
            [33, 'Psych Up'],
            [37, 'Synchronoise'],
            [41, 'Zen Headbutt'],
            [45, 'Swagger'],
            [49, 'Psychic'],
            [53, 'Nasty Plot'],
            [57, 'Psyshock'],
            [61, 'Future Sight'],
        ],
    ],

    ['097',
        [
            [1, 'Future Sight'],
            [1, 'Nasty Plot'],
            [1, 'Nightmare'],
            [1, 'Switcheroo'],
            [1, 'Pound'],
            [1, 'Hypnosis'],
            [1, 'Disable'],
            [1, 'Confusion'],
            [5, 'Disable'],
            [9, 'Confusion'],
            [13, 'Headbutt'],
            [17, 'Poison Gas'],
            [21, 'Meditate'],
            [25, 'Psybeam'],
            [29, 'Wake Up Slap'],
            [33, 'Psych Up'],
            [37, 'Synchronoise'],
            [41, 'Zen Headbutt'],
            [45, 'Swagger'],
            [49, 'Psychic'],
            [53, 'Nasty Plot'],
            [57, 'Psyshock'],
            [61, 'Future Sight'],
        ],
    ],

    ['098',
        [
            [1, 'Water Gun'],
            [1, 'Leer'],
            [4, 'Harden'],
            [8, 'Metal Claw'],
            [12, 'Mud Shot'],
            [16, 'Protect'],
            [20, 'Bubble Beam'],
            [24, 'Stomp'],
            [29, 'Flail'],
            [32, 'Razor Shell'],
            [36, 'Slam'],
            [40, 'Swords Dance'],
            [44, 'Crabhammer'],
            [48, 'Guillotine'],
        ],
    ],

    ['099',
        [
            [1, 'Wide Guard'],
            [1, 'Hammer Arm'],
            [1, 'Water Gun'],
            [1, 'Leer'],
            [1, 'Harden'],
            [1, 'Metal Claw'],
            [12, 'Mud Shot'],
            [16, 'Protect'],
            [20, 'Bubble Beam'],
            [24, 'Stomp'],
            [31, 'Flail'],
            [36, 'Razor Shell'],
            [42, 'Slam'],
            [48, 'Swords Dance'],
            [54, 'Crabhammer'],
            [60, 'Guillotine'],
        ],
    ],

    ['100',
        [
            [1, 'Charge'],
            [1, 'Tackle'],
            [4, 'Sonic Boom'],
            [6, 'Eerie Impulse'],
            [9, 'Spark'],
            [11, 'Rollout'],
            [13, 'Screech'],
            [16, 'Charge Beam'],
            [20, 'Swift'],
            [22, 'Electro Ball'],
            [26, 'Self Destruct'],
            [29, 'Light Screen'],
            [34, 'Magnet Rise'],
            [37, 'Discharge'],
            [41, 'Explosion'],
            [46, 'Gyro Ball'],
            [48, 'Mirror Coat'],
        ],
    ],

    ['101',
        [
            [1, 'Magnetic Flux'],
            [1, 'Charge'],
            [1, 'Tackle'],
            [1, 'Sonic Boom'],
            [1, 'Eerie Impulse'],
            [4, 'Sonic Boom'],
            [6, 'Eerie Impulse'],
            [9, 'Spark'],
            [11, 'Rollout'],
            [13, 'Screech'],
            [16, 'Charge Beam'],
            [20, 'Swift'],
            [22, 'Electro Ball'],
            [26, 'Self Destruct'],
            [29, 'Light Screen'],
            [36, 'Magnet Rise'],
            [41, 'Discharge'],
            [47, 'Explosion'],
            [54, 'Gyro Ball'],
            [58, 'Mirror Coat'],
        ],
    ],

    ['102',
        [
            [1, 'Absorb'],
            [1, 'Hypnosis'],
            [5, 'Reflect'],
            [10, 'Leech Seed'],
            [15, 'Mega Drain'],
            [20, 'Confusion'],
            [25, 'Synthesis'],
            [30, 'Bullet Seed'],
            [35, 'Giga Drain'],
            [40, 'Extrasensory'],
            [45, 'Uproar'],
            [50, 'Worry Seed'],
            [55, 'Solar Beam'],
        ],
    ],

    ['103',
        [
            [0, 'Stomp'],
            [1, 'Stomp'],
            [1, 'Seed Bomb'],
            [1, 'Psyshock'],
            [1, 'Wood Hammer'],
            [1, 'Leaf Storm'],
            [1, 'Mega Drain'],
            [1, 'Confusion'],
            [1, 'Synthesis'],
            [1, 'Bullet Seed'],
            [1, 'Giga Drain'],
            [1, 'Extrasensory'],
            [1, 'Uproar'],
            [1, 'Worry Seed'],
            [1, 'Solar Beam'],
            [1, 'Absorb'],
            [1, 'Hypnosis'],
            [1, 'Reflect'],
            [1, 'Leech Seed'],
        ], //Kantonian
        [
            [0, 'Dragon Hammer'],
            [1, 'Dragon Hammer'],
            [1, 'Seed Bomb'],
            [1, 'Psyshock'],
            [1, 'Wood Hammer'],
            [1, 'Leaf Storm'],
            [1, 'Mega Drain'],
            [1, 'Confusion'],
            [1, 'Synthesis'],
            [1, 'Bullet Seed'],
            [1, 'Giga Drain'],
            [1, 'Extrasensory'],
            [1, 'Uproar'],
            [1, 'Worry Seed'],
            [1, 'Solar Beam'],
            [1, 'Absorb'],
            [1, 'Hypnosis'],
            [1, 'Reflect'],
            [1, 'Leech Seed'],
        ], //Alolan
    ], //Exeggutor

    ['104',
        [
            [1, 'Mud Slap'],
            [1, 'Growl'],
            [4, 'Tail Whip'],
            [8, 'False Swipe'],
            [12, 'Headbutt'],
            [16, 'Retaliate'],
            [20, 'Fling'],
            [24, 'Stomping Tantrum'],
            [29, 'Bone Rush'],
            [32, 'Focus Energy'],
            [36, 'Endeavor'],
            [40, 'Bonemerang'],
            [44, 'Thrash'],
            [48, 'Double Edge'],
        ],
    ],

    ['105',
        [
            [1, 'Mud Slap'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [1, 'False Swipe'],
            [12, 'Headbutt'],
            [16, 'Retaliate'],
            [20, 'Fling'],
            [24, 'Stomping Tantrum'],
            [31, 'Bone Rush'],
            [36, 'Focus Energy'],
            [42, 'Endeavor'],
            [48, 'Bonemerang'],
            [54, 'Thrash'],
            [60, 'Double Edge'],
        ], //Kantonian
        [
            [0, 'Shadow Bone'],
            [1, 'False Swipe'],
            [1, 'Headbutt'],
            [1, 'Retaliate'],
            [1, 'Focus Energy'],
            [1, 'Double Edge'],
            [1, 'Mud Slap'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [1, 'Fire Spin'],
            [12, 'Flame Wheel'],
            [16, 'Hex'],
            [20, 'Fling'],
            [24, 'Stomping Tantrum'],
            [31, 'Bone Rush'],
            [36, 'Will O Wisp'],
            [42, 'Endeavor'],
            [48, 'Bonemerang'],
            [54, 'Thrash'],
            [60, 'Flare Blitz'],
        ], //Alolan
    ], //Marowak

    ['106',
        [
            [0, 'Brick Break'],
            [1, 'Brick Break'],
            [1, 'Feint'],
            [1, 'Low Sweep'],
            [1, 'Tackle'],
            [1, 'Helping Hand'],
            [1, 'Fake Out'],
            [1, 'Focus Energy'],
            [4, 'Double Kick'],
            [8, 'Low Kick'],
            [12, 'Endure'],
            [16, 'Revenge'],
            [21, 'Wide Guard'],
            [24, 'Blaze Kick'],
            [28, 'Mind Reader'],
            [32, 'Mega Kick'],
            [36, 'Close Combat'],
            [40, 'Reversal'],
            [44, 'High Jump Kick'],
        ],
    ],

    ['107',
        [
            [0, 'Drain Punch'],
            [1, 'Drain Punch'],
            [1, 'Feint'],
            [1, 'Vacuum Wave'],
            [1, 'Bullet Punch'],
            [1, 'Tackle'],
            [1, 'Helping Hand'],
            [1, 'Fake Out'],
            [1, 'Focus Energy'],
            [4, 'Mach Punch'],
            [8, 'Power Up Punch'],
            [12, 'Detect'],
            [16, 'Revenge'],
            [21, 'Quick Guard'],
            [24, 'Thunder Punch'],
            [24, 'Ice Punch'],
            [24, 'Fire Punch'],
            [28, 'Agility'],
            [32, 'Mega Punch'],
            [36, 'Close Combat'],
            [40, 'Counter'],
            [44, 'Focus Punch'],
        ],
    ],

    ['108',
        [
            [1, 'Lick'],
            [1, 'Defense Curl'],
            [6, 'Rollout'],
            [12, 'Supersonic'],
            [18, 'Wrap'],
            [24, 'Disable'],
            [30, 'Stomp'],
            [36, 'Knock Off'],
            [42, 'Screech'],
            [48, 'Slam'],
            [54, 'Power Whip'],
            [60, 'Belly Drum'],
        ],
    ],

    ['109',
        [
            [1, 'Poison Gas'],
            [1, 'Tackle'],
            [4, 'Smog'],
            [8, 'Smokescreen'],
            [12, 'Clear Smog'],
            [16, 'Assurance'],
            [20, 'Sludge'],
            [24, 'Haze'],
            [28, 'Self Destruct'],
            [32, 'Sludge Bomb'],
            [36, 'Toxic'],
            [40, 'Belch'],
            [44, 'Explosion'],
            [48, 'Memento'],
            [52, 'Destiny Bond'],
        ],
    ],

    ['110',
        [
            [0, 'Double Hit'],
            [1, 'Double Hit'],
            [1, 'Heat Wave'],
            [1, 'Poison Gas'],
            [1, 'Tackle'],
            [1, 'Smog'],
            [1, 'Smokescreen'],
            [12, 'Clear Smog'],
            [16, 'Assurance'],
            [20, 'Sludge'],
            [24, 'Haze'],
            [28, 'Self Destruct'],
            [32, 'Sludge Bomb'],
            [38, 'Toxic'],
            [44, 'Belch'],
            [50, 'Explosion'],
            [56, 'Memento'],
            [62, 'Destiny Bond'],
        ], //Kantonian
        [
            [0, 'Double Hit'],
            [1, 'Double Hit'],
            [1, 'Strange Steam'],
            [1, 'Defog'],
            [1, 'Heat Wave'],
            [1, 'Smog'],
            [1, 'Smokescreen'],
            [1, 'Haze'],
            [1, 'Poison Gas'],
            [1, 'Tackle'],
            [1, 'Fairy Wind'],
            [1, 'Aromatic Mist'],
            [12, 'Clear Smog'],
            [16, 'Assurance'],
            [20, 'Sludge'],
            [24, 'Aromatherapy'],
            [28, 'Self Destruct'],
            [32, 'Sludge Bomb'],
            [38, 'Toxic'],
            [44, 'Belch'],
            [50, 'Explosion'],
            [56, 'Memento'],
            [62, 'Destiny Bond'],
            [68, 'Misty Terrain'],
        ], //Galarian
    ], //Weezing

    ['111',
        [
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [5, 'Smack Down'],
            [10, 'Bulldoze'],
            [15, 'Horn Attack'],
            [20, 'Scary Face'],
            [25, 'Stomp'],
            [30, 'Rock Blast'],
            [35, 'Drill Run'],
            [40, 'Take Down'],
            [45, 'Earthquake'],
            [50, 'Stone Edge'],
            [55, 'Megahorn'],
            [60, 'Horn Drill'],
        ],
    ],

    ['112',
        [
            [0, 'Hammer Arm'],
            [1, 'Hammer Arm'],
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [1, 'Smack Down'],
            [1, 'Bulldoze'],
            [15, 'Horn Attack'],
            [20, 'Scary Face'],
            [25, 'Stomp'],
            [30, 'Rock Blast'],
            [35, 'Drill Run'],
            [40, 'Take Down'],
            [47, 'Earthquake'],
            [54, 'Stone Edge'],
            [61, 'Megahorn'],
            [68, 'Horn Drill'],
        ],
    ],

    ['113',
        [
            [1, 'Sweet Kiss'],
            [1, 'Disarming Voice'],
            [1, 'Covet'],
            [1, 'Charm'],
            [1, 'Minimize'],
            [1, 'Pound'],
            [1, 'Copycat'],
            [1, 'Defense Curl'],
            [4, 'Tail Whip'],
            [8, 'Echoed Voice'],
            [12, 'Life Dew'],
            [16, 'Sing'],
            [20, 'Fling'],
            [24, 'Take Down'],
            [28, 'Heal Pulse'],
            [32, 'Helping Hand'],
            [36, 'Light Screen'],
            [40, 'Double Edge'],
            [44, 'Soft Boiled'],
            [48, 'Last Resort'],
            [52, 'Healing Wish'],
        ],
    ],

    ['114',
        [
            [1, 'Absorb'],
            [1, 'Bind'],
            [4, 'Stun Spore'],
            [8, 'Growth'],
            [12, 'Mega Drain'],
            [16, 'Vine Whip'],
            [20, 'Poison Powder'],
            [24, 'Ancient Power'],
            [28, 'Knock Off'],
            [32, 'Giga Drain'],
            [36, 'Sleep Powder'],
            [40, 'Slam'],
            [44, 'Tickle'],
            [48, 'Power Whip'],
            [52, 'Ingrain'],
            [56, 'Grassy Terrain'],
        ],
    ],

    ['115',
        [
            [1, 'Pound'],
            [1, 'Tail Whip'],
            [4, 'Growl'],
            [8, 'Fake Out'],
            [12, 'Bite'],
            [16, 'Stomp'],
            [20, 'Focus Energy'],
            [24, 'Headbutt'],
            [28, 'Sucker Punch'],
            [32, 'Double Hit'],
            [36, 'Crunch'],
            [40, 'Endure'],
            [44, 'Reversal'],
            [48, 'Outrage'],
            [52, 'Last Resort'],
        ],
    ],

    ['116',
        [
            [1, 'Water Gun'],
            [1, 'Leer'],
            [5, 'Smokescreen'],
            [10, 'Twister'],
            [15, 'Focus Energy'],
            [20, 'Dragon Breath'],
            [25, 'Bubble Beam'],
            [30, 'Agility'],
            [35, 'Laser Focus'],
            [40, 'Dragon Pulse'],
            [45, 'Hydro Pump'],
            [50, 'Dragon Dance'],
            [55, 'Rain Dance'],
        ],
    ],

    ['117',
        [
            [1, 'Water Gun'],
            [1, 'Leer'],
            [1, 'Smokescreen'],
            [1, 'Twister'],
            [15, 'Focus Energy'],
            [20, 'Dragon Breath'],
            [25, 'Bubble Beam'],
            [30, 'Agility'],
            [37, 'Laser Focus'],
            [44, 'Dragon Pulse'],
            [51, 'Hydro Pump'],
            [58, 'Dragon Dance'],
            [65, 'Rain Dance'],
        ],
    ],

    ['118',
        [
            [1, 'Peck'],
            [1, 'Tail Whip'],
            [5, 'Supersonic'],
            [10, 'Water Pulse'],
            [15, 'Horn Attack'],
            [20, 'Agility'],
            [25, 'Aqua Ring'],
            [30, 'Flail'],
            [35, 'Waterfall'],
            [40, 'Soak'],
            [45, 'Megahorn'],
            [50, 'Horn Drill'],
        ],
    ],

    ['119',
        [
            [1, 'Peck'],
            [1, 'Tail Whip'],
            [1, 'Supersonic'],
            [1, 'Water Pulse'],
            [15, 'Horn Attack'],
            [20, 'Agility'],
            [25, 'Aqua Ring'],
            [30, 'Flail'],
            [37, 'Waterfall'],
            [44, 'Soak'],
            [51, 'Megahorn'],
            [58, 'Horn Drill'],
        ],
    ],

    ['120',
        [
            [1, 'Tackle'],
            [1, 'Harden'],
            [4, 'Water Gun'],
            [8, 'Confuse Ray'],
            [12, 'Rapid Spin'],
            [16, 'Minimize'],
            [20, 'Swift'],
            [24, 'Psybeam'],
            [28, 'Brine'],
            [32, 'Light Screen'],
            [36, 'Power Gem'],
            [40, 'Psychic'],
            [44, 'Surf'],
            [48, 'Recover'],
            [52, 'Cosmic Power'],
            [56, 'Hydro Pump'],
        ],
    ],

    ['121',
        [
            [1, 'Rapid Spin'],
            [1, 'Minimize'],
            [1, 'Swift'],
            [1, 'Psybeam'],
            [1, 'Brine'],
            [1, 'Light Screen'],
            [1, 'Power Gem'],
            [1, 'Psychic'],
            [1, 'Surf'],
            [1, 'Recover'],
            [1, 'Cosmic Power'],
            [1, 'Hydro Pump'],
            [1, 'Tackle'],
            [1, 'Harden'],
            [1, 'Water Gun'],
            [1, 'Confuse Ray'],
        ],
    ],

    ['122',
        [
            [1, 'Quick Guard'],
            [1, 'Wide Guard'],
            [1, 'Power Swap'],
            [1, 'Guard Swap'],
            [1, 'Pound'],
            [1, 'Copycat'],
            [1, 'Baton Pass'],
            [1, 'Encore'],
            [12, 'Confusion'],
            [16, 'Role Play'],
            [20, 'Protect'],
            [24, 'Recycle'],
            [28, 'Psybeam'],
            [32, 'Mimic'],
            [36, 'Light Screen'],
            [36, 'Reflect'],
            [36, 'Safeguard'],
            [40, 'Sucker Punch'],
            [44, 'Dazzling Gleam'],
            [48, 'Psychic'],
            [52, 'Teeter Dance'],
        ], //Kantonian
        [
            [1, 'Copycat'],
            [1, 'Encore'],
            [1, 'Role Play'],
            [1, 'Protect'],
            [1, 'Recycle'],
            [1, 'Mimic'],
            [1, 'Light Screen'],
            [1, 'Reflect'],
            [1, 'Safeguard'],
            [1, 'Dazzling Gleam'],
            [1, 'Misty Terrain'],
            [1, 'Pound'],
            [1, 'Rapid Spin'],
            [1, 'Baton Pass'],
            [1, 'Ice Shard'],
            [12, 'Confusion'],
            [16, 'Ally Switch'],
            [20, 'Icy Wind'],
            [24, 'Double Kick'],
            [28, 'Psybeam'],
            [32, 'Hypnosis'],
            [36, 'Mirror Coat'],
            [40, 'Sucker Punch'],
            [44, 'Freeze Dry'],
            [48, 'Psychic'],
            [52, 'Teeter Dance'],
        ], //Galarian
    ], //Mr. Mime

    ['123',
        [
            [1, 'Quick Attack'],
            [1, 'Leer'],
            [4, 'Fury Cutter'],
            [8, 'False Swipe'],
            [12, 'Wing Attack'],
            [16, 'Double Team'],
            [20, 'Double Hit'],
            [24, 'Slash'],
            [28, 'Focus Energy'],
            [32, 'Agility'],
            [36, 'Air Slash'],
            [40, 'X Scissor'],
            [44, 'Laser Focus'],
            [48, 'Swords Dance'],
        ],
    ],

    ['124',
        [
            [1, 'Sweet Kiss'],
            [1, 'Lick'],
            [1, 'Pound'],
            [1, 'Powder Snow'],
            [1, 'Copycat'],
            [12, 'Confusion'],
            [16, 'Covet'],
            [20, 'Sing'],
            [24, 'Fake Tears'],
            [28, 'Ice Punch'],
            [34, 'Psychic'],
            [40, 'Lovely Kiss'],
            [46, 'Mean Look'],
            [52, 'Perish Song'],
            [58, 'Blizzard'],
        ],
    ],

    ['125',
        [
            [1, 'Quick Attack'],
            [1, 'Leer'],
            [1, 'Thunder Shock'],
            [1, 'Charge'],
            [12, 'Swift'],
            [16, 'Shock Wave'],
            [20, 'Thunder Wave'],
            [24, 'Screech'],
            [28, 'Thunder Punch'],
            [34, 'Discharge'],
            [40, 'Low Kick'],
            [46, 'Thunderbolt'],
            [52, 'Light Screen'],
            [58, 'Thunder'],
            [64, 'Giga Impact'],
        ],
    ],

    ['126',
        [
            [1, 'Smog'],
            [1, 'Leer'],
            [1, 'Ember'],
            [1, 'Smokescreen'],
            [12, 'Clear Smog'],
            [16, 'Flame Wheel'],
            [20, 'Confuse Ray'],
            [24, 'Scary Face'],
            [28, 'Fire Punch'],
            [34, 'Lava Plume'],
            [40, 'Low Kick'],
            [46, 'Flamethrower'],
            [52, 'Sunny Day'],
            [58, 'Fire Blast'],
            [64, 'Hyper Beam'],
        ],
    ],

    ['127',
        [
            [1, 'Vice Grip'],
            [1, 'Harden'],
            [4, 'Focus Energy'],
            [8, 'Bind'],
            [12, 'Seismic Toss'],
            [16, 'Bug Bite'],
            [20, 'Storm Throw'],
            [24, 'Double Hit'],
            [28, 'Vital Throw'],
            [32, 'X Scissor'],
            [36, 'Strength'],
            [40, 'Swords Dance'],
            [44, 'Submission'],
            [48, 'Guillotine'],
            [52, 'Superpower'],
        ],
    ],

    ['128',
        [
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [5, 'Work Up'],
            [10, 'Payback'],
            [15, 'Assurance'],
            [20, 'Horn Attack'],
            [25, 'Scary Face'],
            [30, 'Zen Headbutt'],
            [35, 'Take Down'],
            [40, 'Rest'],
            [45, 'Swagger'],
            [50, 'Thrash'],
            [55, 'Double Edge'],
            [60, 'Giga Impact'],
        ],
    ],

    ['129',
        [
            [1, 'Splash'],
            [15, 'Tackle'],
            [25, 'Flail'],
        ],
    ],

    ['130',
        [
            [0, 'Bite'],
            [1, 'Bite'],
            [1, 'Flail'],
            [1, 'Splash'],
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Twister'],
            [4, 'Whirlpool'],
            [8, 'Ice Fang'],
            [12, 'Brine'],
            [16, 'Scary Face'],
            [21, 'Waterfall'],
            [24, 'Crunch'],
            [28, 'Rain Dance'],
            [32, 'Aqua Tail'],
            [36, 'Dragon Dance'],
            [40, 'Hydro Pump'],
            [44, 'Hurricane'],
            [48, 'Thrash'],
            [52, 'Hyper Beam'],
        ],
    ],

    ['131',
        [
            [1, 'Growl'],
            [1, 'Water Gun'],
            [5, 'Sing'],
            [10, 'Mist'],
            [15, 'Life Dew'],
            [20, 'Ice Shard'],
            [25, 'Confuse Ray'],
            [30, 'Water Pulse'],
            [35, 'Brine'],
            [40, 'Body Slam'],
            [45, 'Ice Beam'],
            [50, 'Rain Dance'],
            [55, 'Hydro Pump'],
            [60, 'Perish Song'],
            [65, 'Sheer Cold'],
        ],
    ],

    ['132',
        [
            [1, 'Transform'],
        ],
    ],

    ['133',
        [
            [1, 'Covet'],
            [1, 'Helping Hand'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [5, 'Sand Attack'],
            [10, 'Quick Attack'],
            [15, 'Baby Doll Eyes'],
            [20, 'Swift'],
            [25, 'Bite'],
            [30, 'Copycat'],
            [35, 'Baton Pass'],
            [40, 'Take Down'],
            [45, 'Charm'],
            [50, 'Double Edge'],
            [55, 'Last Resort'],
        ],
    ],

    ['134',
        [
            [0, 'Water Gun'],
            [1, 'Water Gun'],
            [1, 'Covet'],
            [1, 'Swift'],
            [1, 'Bite'],
            [1, 'Copycat'],
            [1, 'Baton Pass'],
            [1, 'Take Down'],
            [1, 'Charm'],
            [1, 'Double Edge'],
            [1, 'Helping Hand'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [5, 'Sand Attack'],
            [10, 'Quick Attack'],
            [15, 'Baby Doll Eyes'],
            [20, 'Haze'],
            [25, 'Water Pulse'],
            [30, 'Aurora Beam'],
            [35, 'Aqua Ring'],
            [40, 'Muddy Water'],
            [45, 'Acid Armor'],
            [50, 'Hydro Pump'],
            [55, 'Last Resort'],
        ],
    ],

    ['135',
        [
            [0, 'Thunder Shock'],
            [1, 'Thunder Shock'],
            [1, 'Covet'],
            [1, 'Swift'],
            [1, 'Bite'],
            [1, 'Copycat'],
            [1, 'Baton Pass'],
            [1, 'Take Down'],
            [1, 'Charm'],
            [1, 'Double Edge'],
            [1, 'Helping Hand'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [5, 'Sand Attack'],
            [10, 'Quick Attack'],
            [15, 'Baby Doll Eyes'],
            [20, 'Thunder Wave'],
            [25, 'Double Kick'],
            [30, 'Thunder Fang'],
            [35, 'Pin Missile'],
            [40, 'Discharge'],
            [45, 'Agility'],
            [50, 'Thunder'],
            [55, 'Last Resort'],
        ],
    ],

    ['136',
        [
            [0, 'Ember'],
            [1, 'Ember'],
            [1, 'Covet'],
            [1, 'Swift'],
            [1, 'Copycat'],
            [1, 'Baton Pass'],
            [1, 'Take Down'],
            [1, 'Charm'],
            [1, 'Double Edge'],
            [1, 'Helping Hand'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [5, 'Sand Attack'],
            [10, 'Quick Attack'],
            [15, 'Baby Doll Eyes'],
            [20, 'Smog'],
            [25, 'Bite'],
            [30, 'Fire Fang'],
            [35, 'Fire Spin'],
            [40, 'Lava Plume'],
            [45, 'Scary Face'],
            [50, 'Flare Blitz'],
            [55, 'Last Resort'],
        ],
    ],

    ['137',
        [
            [1, 'Tackle'],
            [1, 'Conversion'],
            [5, 'Recycle'],
            [10, 'Magnet Rise'],
            [15, 'Thunder Shock'],
            [20, 'Psybeam'],
            [25, 'Conversion 2'],
            [30, 'Agility'],
            [35, 'Recover'],
            [40, 'Discharge'],
            [45, 'Tri Attack'],
            [50, 'Magic Coat'],
            [55, 'Lock On'],
            [60, 'Zap Cannon'],
        ],
    ],

    ['138',
        [
            [1, 'Bind'],
            [1, 'Withdraw'],
            [5, 'Rollout'],
            [10, 'Sand Attack'],
            [15, 'Water Gun'],
            [20, 'Leer'],
            [25, 'Mud Shot'],
            [30, 'Ancient Power'],
            [35, 'Brine'],
            [41, 'Protect'],
            [45, 'Rock Blast'],
            [50, 'Surf'],
            [55, 'Shell Smash'],
            [60, 'Hydro Pump'],
        ],
    ],

    ['139',
        [
            [0, 'Crunch'],
            [1, 'Crunch'],
            [1, 'Bind'],
            [1, 'Withdraw'],
            [1, 'Rollout'],
            [1, 'Sand Attack'],
            [15, 'Water Gun'],
            [20, 'Leer'],
            [25, 'Mud Shot'],
            [30, 'Ancient Power'],
            [35, 'Brine'],
            [43, 'Protect'],
            [49, 'Rock Blast'],
            [56, 'Surf'],
            [63, 'Shell Smash'],
            [70, 'Hydro Pump'],
        ],
    ],

    ['140',
        [
            [1, 'Absorb'],
            [1, 'Harden'],
            [5, 'Scratch'],
            [10, 'Sand Attack'],
            [15, 'Aqua Jet'],
            [20, 'Leer'],
            [25, 'Mud Shot'],
            [30, 'Ancient Power'],
            [35, 'Brine'],
            [41, 'Protect'],
            [45, 'Leech Life'],
            [50, 'Liquidation'],
            [55, 'Metal Sound'],
            [60, 'Stone Edge'],
        ],
    ],

    ['141',
        [
            [0, 'Slash'],
            [1, 'Slash'],
            [1, 'Night Slash'],
            [1, 'Feint'],
            [1, 'Absorb'],
            [1, 'Harden'],
            [1, 'Scratch'],
            [1, 'Sand Attack'],
            [15, 'Aqua Jet'],
            [20, 'Leer'],
            [25, 'Mud Shot'],
            [30, 'Ancient Power'],
            [35, 'Brine'],
            [43, 'Protect'],
            [49, 'Leech Life'],
            [56, 'Liquidation'],
            [63, 'Metal Sound'],
            [70, 'Stone Edge'],
        ],
    ],

    ['142',
        [
            [1, 'Bite'],
            [1, 'Ancient Power'],
            [5, 'Supersonic'],
            [10, 'Wing Attack'],
            [15, 'Scary Face'],
            [20, 'Rock Slide'],
            [25, 'Roar'],
            [30, 'Crunch'],
            [35, 'Iron Head'],
            [40, 'Take Down'],
            [45, 'Stone Edge'],
            [50, 'Agility'],
            [55, 'Hyper Beam'],
            [60, 'Giga Impact'],
        ],
    ],

    ['143',
        [
            [1, 'Recycle'],
            [1, 'Covet'],
            [1, 'Stockpile'],
            [1, 'Swallow'],
            [1, 'Screech'],
            [1, 'Fling'],
            [1, 'Metronome'],
            [1, 'Flail'],
            [1, 'Last Resort'],
            [1, 'Lick'],
            [1, 'Tackle'],
            [1, 'Defense Curl'],
            [1, 'Block'],
            [12, 'Yawn'],
            [16, 'Bite'],
            [20, 'Rest'],
            [20, 'Snore'],
            [20, 'Sleep Talk'],
            [24, 'Crunch'],
            [28, 'Body Slam'],
            [32, 'Heavy Slam'],
            [36, 'Amnesia'],
            [40, 'High Horsepower'],
            [44, 'Hammer Arm'],
            [48, 'Belly Drum'],
            [52, 'Belch'],
            [56, 'Giga Impact'],
        ],
    ],

    ['144',
        [
            [1, 'Gust'],
            [1, 'Mist'],
            [5, 'Powder Snow'],
            [10, 'Reflect'],
            [15, 'Ice Shard'],
            [20, 'Agility'],
            [25, 'Ancient Power'],
            [30, 'Tailwind'],
            [35, 'Freeze Dry'],
            [40, 'Roost'],
            [45, 'Ice Beam'],
            [50, 'Hail'],
            [55, 'Hurricane'],
            [60, 'Mind Reader'],
            [65, 'Blizzard'],
            [70, 'Sheer Cold'],
        ], //Kantonian
        [
            [1, 'Gust'],
            [1, 'Psycho Shift'],
            [5, 'Confusion'],
            [10, 'Reflect'],
            [15, 'Hypnosis'],
            [20, 'Agility'],
            [25, 'Ancient Power'],
            [30, 'Tailwind'],
            [35, 'Psycho Cut'],
            [40, 'Recover'],
            [45, 'Freezing Glare'],
            [50, 'Dream Eater'],
            [55, 'Hurricane'],
            [60, 'Mind Reader'],
            [65, 'Future Sight'],
            [70, 'Trick Room'],
        ], //Galarian
    ], //Articuno

    ['145',
        [
            [1, 'Peck'],
            [1, 'Thunder Wave'],
            [5, 'Thunder Shock'],
            [10, 'Light Screen'],
            [15, 'Pluck'],
            [20, 'Agility'],
            [25, 'Ancient Power'],
            [30, 'Charge'],
            [35, 'Drill Peck'],
            [40, 'Roost'],
            [45, 'Discharge'],
            [50, 'Rain Dance'],
            [55, 'Thunder'],
            [60, 'Detect'],
            [65, 'Magnetic Flux'],
            [70, 'Zap Cannon'],
        ], //Kantonian
        [
            [1, 'Peck'],
            [1, 'Focus Energy'],
            [5, 'Rock Smash'],
            [10, 'Light Screen'],
            [15, 'Pluck'],
            [20, 'Agility'],
            [25, 'Ancient Power'],
            [30, 'Brick Break'],
            [35, 'Drill Peck'],
            [40, 'Quick Guard'],
            [45, 'Thunderous Kick'],
            [50, 'Bulk Up'],
            [55, 'Counter'],
            [60, 'Detect'],
            [65, 'Close Combat'],
            [70, 'Reversal'],
        ], //Galarian
    ], //Zapdos

    ['146',
        [
            [1, 'Gust'],
            [1, 'Leer'],
            [5, 'Ember'],
            [10, 'Safeguard'],
            [15, 'Wing Attack'],
            [20, 'Agility'],
            [25, 'Ancient Power'],
            [30, 'Incinerate'],
            [35, 'Air Slash'],
            [40, 'Roost'],
            [45, 'Heat Wave'],
            [50, 'Sunny Day'],
            [55, 'Hurricane'],
            [60, 'Endure'],
            [65, 'Burn Up'],
            [70, 'Sky Attack'],
        ], //Kantonian
        [
            [1, 'Gust'],
            [1, 'Leer'],
            [5, 'Payback'],
            [10, 'Safeguard'],
            [15, 'Wing Attack'],
            [20, 'Agility'],
            [25, 'Ancient Power'],
            [30, 'Sucker Punch'],
            [35, 'Air Slash'],
            [40, 'After You'],
            [45, 'Fiery Wrath'],
            [50, 'Nasty Plot'],
            [55, 'Hurricane'],
            [60, 'Endure'],
            [65, 'Memento'],
            [70, 'Sky Attack'],
        ], //Galarian
    ], //Moltres

    ['147',
        [
            [1, 'Wrap'],
            [1, 'Leer'],
            [5, 'Twister'],
            [10, 'Thunder Wave'],
            [15, 'Dragon Tail'],
            [20, 'Agility'],
            [25, 'Slam'],
            [31, 'Aqua Tail'],
            [35, 'Dragon Rush'],
            [40, 'Safeguard'],
            [45, 'Rain Dance'],
            [50, 'Dragon Dance'],
            [55, 'Outrage'],
            [60, 'Hyper Beam'],
        ],
    ],

    ['148',
        [
            [1, 'Wrap'],
            [1, 'Leer'],
            [1, 'Twister'],
            [1, 'Thunder Wave'],
            [15, 'Dragon Tail'],
            [20, 'Agility'],
            [25, 'Slam'],
            [33, 'Aqua Tail'],
            [39, 'Dragon Rush'],
            [46, 'Safeguard'],
            [53, 'Rain Dance'],
            [60, 'Dragon Dance'],
            [67, 'Outrage'],
            [74, 'Hyper Beam'],
        ],
    ],

    ['149',
        [
            [0, 'Hurricane'],
            [1, 'Hurricane'],
            [1, 'Wing Attack'],
            [1, 'Roost'],
            [1, 'Extreme Speed'],
            [1, 'Fire Punch'],
            [1, 'Thunder Punch'],
            [1, 'Wrap'],
            [1, 'Leer'],
            [1, 'Twister'],
            [1, 'Thunder Wave'],
            [15, 'Dragon Tail'],
            [20, 'Agility'],
            [25, 'Slam'],
            [33, 'Aqua Tail'],
            [39, 'Dragon Rush'],
            [41, 'Outrage'],
            [46, 'Safeguard'],
            [53, 'Rain Dance'],
            [62, 'Dragon Dance'],
            [80, 'Hyper Beam'],
        ],
    ],

    ['150',
        [
            [1, 'Life Dew'],
            [1, 'Laser Focus'],
            [1, 'Disable'],
            [1, 'Confusion'],
            [1, 'Swift'],
            [8, 'Ancient Power'],
            [16, 'Psycho Cut'],
            [24, 'Safeguard'],
            [32, 'Amnesia'],
            [40, 'Aura Sphere'],
            [48, 'Psychic'],
            [56, 'Power Swap'],
            [56, 'Guard Swap'],
            [64, 'Mist'],
            [72, 'Psystrike'],
            [80, 'Recover'],
            [88, 'Future Sight'],
        ],
    ],

    ['151',
        [
            [1, 'Pound'],
            [1, 'Reflect Type'],
            [10, 'Amnesia'],
            [20, 'Baton Pass'],
            [30, 'Ancient Power'],
            [40, 'Life Dew'],
            [50, 'Nasty Plot'],
            [60, 'Metronome'],
            [70, 'Imprison'],
            [80, 'Transform'],
            [90, 'Aura Sphere'],
            [100, 'Psychic'],
        ],
    ],

    ['152',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [6, 'Razor Leaf'],
            [9, 'Poison Powder'],
            [12, 'Synthesis'],
            [17, 'Reflect'],
            [20, 'Magical Leaf'],
            [23, 'Natural Gift'],
            [28, 'Sweet Scent'],
            [31, 'Light Screen'],
            [34, 'Body Slam'],
            [39, 'Safeguard'],
            [42, 'Aromatherapy'],
            [45, 'Solar Beam'],
        ],
    ],

    ['153',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Razor Leaf'],
            [1, 'Poison Powder'],
            [6, 'Razor Leaf'],
            [9, 'Poison Powder'],
            [12, 'Synthesis'],
            [18, 'Reflect'],
            [22, 'Magical Leaf'],
            [26, 'Natural Gift'],
            [32, 'Sweet Scent'],
            [36, 'Light Screen'],
            [40, 'Body Slam'],
            [46, 'Safeguard'],
            [50, 'Aromatherapy'],
            [54, 'Solar Beam'],
        ],
    ],

    ['154',
        [
            [0, 'Petal Dance'],
            [1, 'Petal Dance'],
            [1, 'Petal Blizzard'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Razor Leaf'],
            [1, 'Poison Powder'],
            [6, 'Razor Leaf'],
            [9, 'Poison Powder'],
            [12, 'Synthesis'],
            [18, 'Reflect'],
            [22, 'Magical Leaf'],
            [26, 'Natural Gift'],
            [34, 'Sweet Scent'],
            [40, 'Light Screen'],
            [46, 'Body Slam'],
            [54, 'Safeguard'],
            [60, 'Aromatherapy'],
            [66, 'Solar Beam'],
            [70, 'Petal Blizzard'],
        ],
    ],

    ['155',
        [
            [1, 'Tackle'],
            [1, 'Leer'],
            [6, 'Smokescreen'],
            [10, 'Ember'],
            [13, 'Quick Attack'],
            [19, 'Flame Wheel'],
            [22, 'Defense Curl'],
            [28, 'Flame Charge'],
            [31, 'Swift'],
            [37, 'Lava Plume'],
            [40, 'Flamethrower'],
            [46, 'Inferno'],
            [49, 'Rollout'],
            [55, 'Double Edge'],
            [58, 'Burn Up'],
            [64, 'Eruption'],
        ],
    ],

    ['156',
        [
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Smokescreen'],
            [6, 'Smokescreen'],
            [10, 'Ember'],
            [13, 'Quick Attack'],
            [20, 'Flame Wheel'],
            [24, 'Defense Curl'],
            [31, 'Swift'],
            [35, 'Flame Charge'],
            [42, 'Lava Plume'],
            [46, 'Flamethrower'],
            [53, 'Inferno'],
            [57, 'Rollout'],
            [64, 'Double Edge'],
            [68, 'Burn Up'],
            [75, 'Eruption'],
        ],
    ],

    ['157',
        [
            [1, 'Eruption'],
            [1, 'Double Edge'],
            [1, 'Gyro Ball'],
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Smokescreen'],
            [1, 'Ember'],
            [6, 'Smokescreen'],
            [10, 'Ember'],
            [13, 'Quick Attack'],
            [20, 'Flame Wheel'],
            [24, 'Defense Curl'],
            [31, 'Swift'],
            [35, 'Flame Charge'],
            [43, 'Lava Plume'],
            [48, 'Flamethrower'],
            [56, 'Inferno'],
            [61, 'Rollout'],
            [69, 'Double Edge'],
            [74, 'Burn Up'],
            [82, 'Eruption'],
        ],
    ],

    ['158',
        [
            [1, 'Scratch'],
            [1, 'Leer'],
            [6, 'Water Gun'],
            [8, 'Rage'],
            [13, 'Bite'],
            [15, 'Scary Face'],
            [20, 'Ice Fang'],
            [22, 'Flail'],
            [27, 'Crunch'],
            [29, 'Chip Away'],
            [34, 'Slash'],
            [36, 'Screech'],
            [41, 'Thrash'],
            [43, 'Aqua Tail'],
            [48, 'Superpower'],
            [50, 'Hydro Pump'],
        ],
    ],

    ['159',
        [
            [1, 'Scratch'],
            [1, 'Leer'],
            [1, 'Water Gun'],
            [6, 'Water Gun'],
            [8, 'Rage'],
            [13, 'Bite'],
            [15, 'Scary Face'],
            [21, 'Ice Fang'],
            [24, 'Flail'],
            [30, 'Crunch'],
            [33, 'Chip Away'],
            [39, 'Slash'],
            [42, 'Screech'],
            [48, 'Thrash'],
            [51, 'Aqua Tail'],
            [57, 'Superpower'],
            [60, 'Hydro Pump'],
        ],
    ],

    ['160',
        [
            [1, 'Agility'],
            [1, 'Scratch'],
            [1, 'Leer'],
            [1, 'Water Gun'],
            [1, 'Rage'],
            [6, 'Water Gun'],
            [8, 'Rage'],
            [13, 'Bite'],
            [15, 'Scary Face'],
            [21, 'Ice Fang'],
            [24, 'Flail'],
            [32, 'Crunch'],
            [37, 'Chip Away'],
            [45, 'Slash'],
            [50, 'Screech'],
            [58, 'Thrash'],
            [63, 'Aqua Tail'],
            [71, 'Superpower'],
            [76, 'Hydro Pump'],
        ],
    ],

    ['161',
        [
            [1, 'Scratch'],
            [1, 'Foresight'],
            [4, 'Defense Curl'],
            [7, 'Quick Attack'],
            [13, 'Fury Swipes'],
            [16, 'Helping Hand'],
            [19, 'Follow Me'],
            [25, 'Slam'],
            [28, 'Rest'],
            [31, 'Sucker Punch'],
            [36, 'Amnesia'],
            [39, 'Baton Pass'],
            [42, 'Me First'],
            [47, 'Hyper Voice'],
        ],
    ],

    ['162',
        [
            [0, 'Agility'],
            [1, 'Agility'],
            [1, 'Coil'],
            [1, 'Scratch'],
            [1, 'Foresight'],
            [1, 'Defense Curl'],
            [1, 'Quick Attack'],
            [4, 'Defense Curl'],
            [7, 'Quick Attack'],
            [13, 'Fury Swipes'],
            [17, 'Helping Hand'],
            [21, 'Follow Me'],
            [28, 'Slam'],
            [32, 'Rest'],
            [36, 'Sucker Punch'],
            [42, 'Amnesia'],
            [46, 'Baton Pass'],
            [50, 'Me First'],
            [56, 'Hyper Voice'],
        ],
    ],

    ['163',
        [
            [1, 'Peck'],
            [1, 'Growl'],
            [3, 'Tackle'],
            [6, 'Echoed Voice'],
            [9, 'Confusion'],
            [12, 'Reflect'],
            [15, 'Psycho Shift'],
            [18, 'Air Slash'],
            [21, 'Extrasensory'],
            [24, 'Take Down'],
            [27, 'Uproar'],
            [30, 'Roost'],
            [33, 'Moonblast'],
            [36, 'Hypnosis'],
            [39, 'Dream Eater'],
        ],
    ],

    ['164',
        [
            [1, 'Sky Attack'],
            [1, 'Peck'],
            [1, 'Growl'],
            [1, 'Tackle'],
            [1, 'Echoed Voice'],
            [9, 'Confusion'],
            [12, 'Reflect'],
            [15, 'Psycho Shift'],
            [18, 'Air Slash'],
            [23, 'Extrasensory'],
            [28, 'Take Down'],
            [33, 'Uproar'],
            [38, 'Roost'],
            [43, 'Moonblast'],
            [48, 'Hypnosis'],
            [53, 'Dream Eater'],
        ],
    ],

    ['165',
        [
            [1, 'Tackle'],
            [5, 'Supersonic'],
            [8, 'Swift'],
            [12, 'Light Screen'],
            [12, 'Reflect'],
            [12, 'Safeguard'],
            [15, 'Mach Punch'],
            [19, 'Silver Wind'],
            [22, 'Comet Punch'],
            [26, 'Baton Pass'],
            [29, 'Agility'],
            [33, 'Bug Buzz'],
            [36, 'Air Slash'],
            [40, 'Double Edge'],
        ],
    ],

    ['166',
        [
            [1, 'Tackle'],
            [1, 'Supersonic'],
            [1, 'Swift'],
            [5, 'Supersonic'],
            [8, 'Swift'],
            [12, 'Light Screen'],
            [12, 'Reflect'],
            [12, 'Safeguard'],
            [15, 'Mach Punch'],
            [20, 'Silver Wind'],
            [24, 'Comet Punch'],
            [29, 'Baton Pass'],
            [33, 'Agility'],
            [38, 'Bug Buzz'],
            [42, 'Air Slash'],
            [47, 'Double Edge'],
        ],
    ],

    ['167',
        [
            [1, 'Poison Sting'],
            [1, 'String Shot'],
            [1, 'Constrict'],
            [5, 'Absorb'],
            [8, 'Infestation'],
            [12, 'Scary Face'],
            [15, 'Night Shade'],
            [19, 'Shadow Sneak'],
            [22, 'Fury Swipes'],
            [26, 'Sucker Punch'],
            [29, 'Spider Web'],
            [33, 'Agility'],
            [36, 'Pin Missile'],
            [40, 'Psychic'],
            [43, 'Poison Jab'],
            [47, 'Cross Poison'],
            [50, 'Sticky Web'],
            [54, 'Toxic Thread'],
        ],
    ],

    ['168',
        [
            [0, 'Swords Dance'],
            [1, 'Swords Dance'],
            [1, 'Focus Energy'],
            [1, 'Venom Drench'],
            [1, 'Fell Stinger'],
            [1, 'Bug Bite'],
            [1, 'Poison Sting'],
            [1, 'String Shot'],
            [1, 'Constrict'],
            [1, 'Absorb'],
            [5, 'Absorb'],
            [8, 'Infestation'],
            [12, 'Scary Face'],
            [15, 'Night Shade'],
            [19, 'Shadow Sneak'],
            [23, 'Fury Swipes'],
            [28, 'Sucker Punch'],
            [32, 'Spider Web'],
            [37, 'Agility'],
            [41, 'Pin Missile'],
            [46, 'Psychic'],
            [50, 'Poison Jab'],
            [55, 'Cross Poison'],
            [58, 'Sticky Web'],
            [63, 'Toxic Thread'],
        ],
    ],

    ['169',
        [
            [0, 'Cross Poison'],
            [1, 'Cross Poison'],
            [1, 'Tailwind'],
            [1, 'Toxic'],
            [1, 'Screech'],
            [1, 'Absorb'],
            [1, 'Supersonic'],
            [1, 'Astonish'],
            [1, 'Mean Look'],
            [15, 'Poison Fang'],
            [20, 'Quick Guard'],
            [27, 'Air Cutter'],
            [34, 'Bite'],
            [41, 'Haze'],
            [48, 'Venoshock'],
            [55, 'Confuse Ray'],
            [62, 'Air Slash'],
            [69, 'Leech Life'],
        ],
    ],

    ['170',
        [
            [1, 'Water Gun'],
            [1, 'Supersonic'],
            [4, 'Electro Ball'],
            [8, 'Thunder Wave'],
            [12, 'Bubble Beam'],
            [16, 'Confuse Ray'],
            [20, 'Spark'],
            [24, 'Charge'],
            [28, 'Discharge'],
            [32, 'Aqua Ring'],
            [36, 'Flail'],
            [40, 'Take Down'],
            [44, 'Hydro Pump'],
        ],
    ],

    ['171',
        [
            [0, 'Stockpile'],
            [0, 'Swallow'],
            [0, 'Spit Up'],
            [1, 'Stockpile'],
            [1, 'Swallow'],
            [1, 'Spit Up'],
            [1, 'Eerie Impulse'],
            [1, 'Water Gun'],
            [1, 'Supersonic'],
            [1, 'Electro Ball'],
            [1, 'Thunder Wave'],
            [12, 'Bubble Beam'],
            [16, 'Confuse Ray'],
            [20, 'Spark'],
            [24, 'Charge'],
            [30, 'Discharge'],
            [36, 'Aqua Ring'],
            [42, 'Flail'],
            [48, 'Take Down'],
            [54, 'Hydro Pump'],
        ],
    ],

    ['172',
        [
            [1, 'Thunder Shock'],
            [1, 'Tail Whip'],
            [4, 'Play Nice'],
            [8, 'Sweet Kiss'],
            [12, 'Nuzzle'],
            [16, 'Nasty Plot'],
            [20, 'Charm'],
        ],
    ],

    ['173',
        [
            [1, 'Splash'],
            [1, 'Pound'],
            [1, 'Copycat'],
            [4, 'Sing'],
            [8, 'Sweet Kiss'],
            [12, 'Disarming Voice'],
            [16, 'Encore'],
            [20, 'Charm'],
        ],
    ],

    ['174',
        [
            [1, 'Sing'],
            [1, 'Pound'],
            [1, 'Copycat'],
            [4, 'Defense Curl'],
            [8, 'Sweet Kiss'],
            [12, 'Disarming Voice'],
            [16, 'Disable'],
            [20, 'Charm'],
        ],
    ],

    ['175',
        [
            [1, 'Growl'],
            [1, 'Pound'],
            [4, 'Sweet Kiss'],
            [8, 'Life Dew'],
            [12, 'Charm'],
            [16, 'Ancient Power'],
            [20, 'Yawn'],
            [24, 'Metronome'],
            [28, 'After You'],
            [32, 'Double Edge'],
            [36, 'Safeguard'],
            [40, 'Follow Me'],
            [44, 'Baton Pass'],
            [48, 'Last Resort'],
            [52, 'Wish'],
        ],
    ],

    ['176',
        [
            [0, 'Fairy Wind'],
            [1, 'Fairy Wind'],
            [1, 'Growl'],
            [1, 'Pound'],
            [1, 'Sweet Kiss'],
            [1, 'Life Dew'],
            [12, 'Charm'],
            [16, 'Ancient Power'],
            [20, 'Yawn'],
            [24, 'Metronome'],
            [28, 'After You'],
            [32, 'Double Edge'],
            [36, 'Safeguard'],
            [40, 'Follow Me'],
            [44, 'Baton Pass'],
            [48, 'Last Resort'],
            [52, 'Wish'],
        ],
    ],

    ['177',
        [
            [1, 'Peck'],
            [1, 'Leer'],
            [5, 'Stored Power'],
            [10, 'Teleport'],
            [15, 'Confuse Ray'],
            [20, 'Night Shade'],
            [26, 'Psycho Shift'],
            [30, 'Power Swap'],
            [35, 'Guard Swap'],
            [35, 'Psychic'],
            [40, 'Wish'],
            [45, 'Future Sight'],
        ],
    ],

    ['178',
        [
            [0, 'Air Slash'],
            [1, 'Air Slash'],
            [1, 'Tailwind'],
            [1, 'Peck'],
            [1, 'Leer'],
            [1, 'Stored Power'],
            [1, 'Teleport'],
            [15, 'Confuse Ray'],
            [20, 'Night Shade'],
            [28, 'Psycho Shift'],
            [34, 'Power Swap'],
            [34, 'Guard Swap'],
            [41, 'Psychic'],
            [48, 'Wish'],
            [55, 'Future Sight'],
        ],
    ],

    ['179',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [4, 'Thunder Wave'],
            [8, 'Thunder Shock'],
            [11, 'Cotton Spore'],
            [15, 'Charge'],
            [18, 'Take Down'],
            [22, 'Electro Ball'],
            [25, 'Confuse Ray'],
            [29, 'Power Gem'],
            [32, 'Discharge'],
            [36, 'Cotton Guard'],
            [39, 'Signal Beam'],
            [43, 'Light Screen'],
            [46, 'Thunder'],
        ],
    ],

    ['180',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Thunder Wave'],
            [1, 'Thunder Shock'],
            [4, 'Thunder Wave'],
            [8, 'Thunder Shock'],
            [11, 'Cotton Spore'],
            [16, 'Charge'],
            [20, 'Take Down'],
            [25, 'Electro Ball'],
            [29, 'Confuse Ray'],
            [34, 'Power Gem'],
            [38, 'Discharge'],
            [43, 'Cotton Guard'],
            [47, 'Signal Beam'],
            [52, 'Light Screen'],
            [56, 'Thunder'],
        ],
    ],

    ['181',
        [
            [0, 'Thunder Punch'],
            [1, 'Thunder Punch'],
            [1, 'Zap Cannon'],
            [1, 'Magnetic Flux'],
            [1, 'Ion Deluge'],
            [1, 'Dragon Pulse'],
            [1, 'Fire Punch'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Thunder Wave'],
            [1, 'Thunder Shock'],
            [4, 'Thunder Wave'],
            [8, 'Thunder Shock'],
            [11, 'Cotton Spore'],
            [16, 'Charge'],
            [20, 'Take Down'],
            [25, 'Electro Ball'],
            [29, 'Confuse Ray'],
            [35, 'Power Gem'],
            [40, 'Discharge'],
            [46, 'Cotton Guard'],
            [51, 'Signal Beam'],
            [57, 'Light Screen'],
            [62, 'Thunder'],
            [65, 'Dragon Pulse'],
        ],
    ],

    ['182',
        [
            [0, 'Petal Blizzard'],
            [1, 'Petal Blizzard'],
            [1, 'Quiver Dance'],
            [1, 'Mega Drain'],
            [1, 'Poison Powder'],
            [1, 'Stun Spore'],
            [1, 'Sleep Powder'],
            [1, 'Giga Drain'],
            [1, 'Toxic'],
            [1, 'Moonblast'],
            [1, 'Grassy Terrain'],
            [1, 'Moonlight'],
            [1, 'Petal Dance'],
            [1, 'Absorb'],
            [1, 'Growth'],
            [1, 'Acid'],
            [1, 'Sweet Scent'],
        ],
    ],

    ['183',
        [
            [1, 'Rollout'],
            [1, 'Defense Curl'],
            [1, 'Tackle'],
            [1, 'Water Gun'],
            [1, 'Tail Whip'],
            [1, 'Helping Hand'],
            [6, 'Bubble Beam'],
            [9, 'Charm'],
            [12, 'Slam'],
            [15, 'Bounce'],
            [19, 'Aqua Tail'],
            [21, 'Play Rough'],
            [24, 'Aqua Ring'],
            [27, 'Rain Dance'],
            [30, 'Hydro Pump'],
            [33, 'Double Edge'],
            [36, 'Superpower'],
        ],
    ],

    ['184',
        [
            [1, 'Rollout'],
            [1, 'Defense Curl'],
            [1, 'Tackle'],
            [1, 'Water Gun'],
            [1, 'Tail Whip'],
            [1, 'Helping Hand'],
            [6, 'Bubble Beam'],
            [9, 'Charm'],
            [12, 'Slam'],
            [15, 'Bounce'],
            [21, 'Aqua Tail'],
            [25, 'Play Rough'],
            [30, 'Aqua Ring'],
            [35, 'Rain Dance'],
            [40, 'Hydro Pump'],
            [45, 'Double Edge'],
            [50, 'Superpower'],
        ],
    ],

    ['185',
        [
            [0, 'Slam'],
            [1, 'Slam'],
            [1, 'Stone Edge'],
            [1, 'Hammer Arm'],
            [1, 'Wood Hammer'],
            [1, 'Fake Tears'],
            [1, 'Copycat'],
            [1, 'Flail'],
            [1, 'Rock Throw'],
            [12, 'Block'],
            [16, 'Mimic'],
            [20, 'Rock Tomb'],
            [24, 'Tearful Look'],
            [28, 'Sucker Punch'],
            [32, 'Rock Slide'],
            [36, 'Low Kick'],
            [40, 'Counter'],
            [44, 'Double Edge'],
            [48, 'Head Smash'],
        ],
    ],

    ['186',
        [
            [0, 'Bounce'],
            [1, 'Bounce'],
            [1, 'Swagger'],
            [1, 'Hyper Voice'],
            [1, 'Perish Song'],
            [1, 'Bubble Beam'],
            [1, 'Rain Dance'],
            [1, 'Body Slam'],
            [1, 'Earth Power'],
            [1, 'Hydro Pump'],
            [1, 'Belly Drum'],
            [1, 'Double Edge'],
            [1, 'Water Gun'],
            [1, 'Hypnosis'],
            [1, 'Pound'],
            [1, 'Mud Shot'],
        ],
    ],

    ['187',
        [
            [1, 'Splash'],
            [1, 'Absorb'],
            [4, 'Synthesis'],
            [6, 'Tail Whip'],
            [8, 'Tackle'],
            [10, 'Fairy Wind'],
            [12, 'Poison Powder'],
            [14, 'Stun Spore'],
            [16, 'Sleep Powder'],
            [19, 'Bullet Seed'],
            [22, 'Leech Seed'],
            [25, 'Mega Drain'],
            [28, 'Acrobatics'],
            [31, 'Rage Powder'],
            [34, 'Cotton Spore'],
            [37, 'U Turn'],
            [40, 'Worry Seed'],
            [43, 'Giga Drain'],
            [46, 'Bounce'],
            [49, 'Memento'],
        ],
    ],

    ['188',
        [
            [1, 'Splash'],
            [1, 'Absorb'],
            [1, 'Synthesis'],
            [1, 'Tail Whip'],
            [4, 'Synthesis'],
            [6, 'Tail Whip'],
            [8, 'Tackle'],
            [10, 'Fairy Wind'],
            [12, 'Poison Powder'],
            [14, 'Stun Spore'],
            [16, 'Sleep Powder'],
            [20, 'Bullet Seed'],
            [24, 'Leech Seed'],
            [28, 'Mega Drain'],
            [32, 'Acrobatics'],
            [36, 'Rage Powder'],
            [40, 'Cotton Spore'],
            [44, 'U Turn'],
            [48, 'Worry Seed'],
            [52, 'Giga Drain'],
            [56, 'Bounce'],
            [60, 'Memento'],
        ],
    ],

    ['189',
        [
            [1, 'Splash'],
            [1, 'Absorb'],
            [1, 'Synthesis'],
            [1, 'Tail Whip'],
            [4, 'Synthesis'],
            [6, 'Tail Whip'],
            [8, 'Tackle'],
            [10, 'Fairy Wind'],
            [12, 'Poison Powder'],
            [14, 'Stun Spore'],
            [16, 'Sleep Powder'],
            [20, 'Bullet Seed'],
            [24, 'Leech Seed'],
            [29, 'Mega Drain'],
            [34, 'Acrobatics'],
            [39, 'Rage Powder'],
            [44, 'Cotton Spore'],
            [49, 'U Turn'],
            [54, 'Worry Seed'],
            [59, 'Giga Drain'],
            [64, 'Bounce'],
            [69, 'Memento'],
        ],
    ],

    ['190',
        [
            [1, 'Scratch'],
            [1, 'Tail Whip'],
            [4, 'Sand Attack'],
            [8, 'Astonish'],
            [11, 'Baton Pass'],
            [15, 'Tickle'],
            [18, 'Fury Swipes'],
            [22, 'Swift'],
            [25, 'Screech'],
            [29, 'Agility'],
            [32, 'Double Hit'],
            [36, 'Fling'],
            [39, 'Nasty Plot'],
            [43, 'Last Resort'],
        ],
    ],

    ['191',
        [
            [1, 'Absorb'],
            [1, 'Growth'],
            [4, 'Ingrain'],
            [7, 'Grass Whistle'],
            [10, 'Mega Drain'],
            [13, 'Leech Seed'],
            [16, 'Razor Leaf'],
            [19, 'Worry Seed'],
            [22, 'Giga Drain'],
            [25, 'Endeavor'],
            [28, 'Synthesis'],
            [31, 'Natural Gift'],
            [34, 'Solar Beam'],
            [37, 'Double Edge'],
            [40, 'Sunny Day'],
            [43, 'Seed Bomb'],
        ],
    ],

    ['192',
        [
            [1, 'Flower Shield'],
            [1, 'Absorb'],
            [1, 'Pound'],
            [1, 'Growth'],
            [4, 'Ingrain'],
            [7, 'Grass Whistle'],
            [10, 'Mega Drain'],
            [13, 'Leech Seed'],
            [16, 'Razor Leaf'],
            [19, 'Worry Seed'],
            [22, 'Giga Drain'],
            [25, 'Bullet Seed'],
            [28, 'Petal Dance'],
            [31, 'Natural Gift'],
            [34, 'Solar Beam'],
            [37, 'Double Edge'],
            [40, 'Sunny Day'],
            [43, 'Leaf Storm'],
            [50, 'Petal Blizzard'],
        ],
    ],

    ['193',
        [
            [1, 'Tackle'],
            [1, 'Foresight'],
            [6, 'Quick Attack'],
            [11, 'Double Team'],
            [14, 'Sonic Boom'],
            [17, 'Detect'],
            [22, 'Supersonic'],
            [27, 'Uproar'],
            [30, 'Pursuit'],
            [33, 'Ancient Power'],
            [38, 'Hypnosis'],
            [43, 'Wing Attack'],
            [46, 'Screech'],
            [49, 'U Turn'],
            [54, 'Air Slash'],
            [57, 'Bug Buzz'],
        ],
    ],

    ['194',
        [
            [1, 'Water Gun'],
            [1, 'Tail Whip'],
            [4, 'Rain Dance'],
            [8, 'Mud Shot'],
            [12, 'Mist'],
            [12, 'Haze'],
            [16, 'Slam'],
            [21, 'Yawn'],
            [24, 'Aqua Tail'],
            [28, 'Muddy Water'],
            [32, 'Amnesia'],
            [36, 'Toxic'],
            [40, 'Earthquake'],
        ],
    ],

    ['195',
        [
            [1, 'Water Gun'],
            [1, 'Tail Whip'],
            [1, 'Rain Dance'],
            [1, 'Mud Shot'],
            [12, 'Mist'],
            [12, 'Haze'],
            [16, 'Slam'],
            [23, 'Yawn'],
            [28, 'Aqua Tail'],
            [34, 'Muddy Water'],
            [40, 'Amnesia'],
            [46, 'Toxic'],
            [52, 'Earthquake'],
        ],
    ],

    ['196',
        [
            [0, 'Confusion'],
            [1, 'Confusion'],
            [1, 'Covet'],
            [1, 'Bite'],
            [1, 'Copycat'],
            [1, 'Baton Pass'],
            [1, 'Take Down'],
            [1, 'Charm'],
            [1, 'Double Edge'],
            [1, 'Helping Hand'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [5, 'Sand Attack'],
            [10, 'Quick Attack'],
            [15, 'Baby Doll Eyes'],
            [20, 'Swift'],
            [25, 'Psybeam'],
            [30, 'Morning Sun'],
            [35, 'Power Swap'],
            [40, 'Psychic'],
            [45, 'Psych Up'],
            [50, 'Future Sight'],
            [55, 'Last Resort'],
        ],
    ],

    ['197',
        [
            [0, 'Snarl'],
            [1, 'Snarl'],
            [1, 'Covet'],
            [1, 'Swift'],
            [1, 'Bite'],
            [1, 'Copycat'],
            [1, 'Baton Pass'],
            [1, 'Take Down'],
            [1, 'Charm'],
            [1, 'Double Edge'],
            [1, 'Helping Hand'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [5, 'Sand Attack'],
            [10, 'Quick Attack'],
            [15, 'Baby Doll Eyes'],
            [20, 'Confuse Ray'],
            [25, 'Assurance'],
            [30, 'Moonlight'],
            [35, 'Guard Swap'],
            [40, 'Dark Pulse'],
            [45, 'Screech'],
            [50, 'Mean Look'],
            [55, 'Last Resort'],
        ],
    ],

    ['198',
        [
            [1, 'Peck'],
            [1, 'Astonish'],
            [5, 'Pursuit'],
            [11, 'Haze'],
            [15, 'Wing Attack'],
            [21, 'Night Shade'],
            [25, 'Assurance'],
            [31, 'Taunt'],
            [35, 'Feint Attack'],
            [41, 'Mean Look'],
            [45, 'Foul Play'],
            [50, 'Tailwind'],
            [55, 'Sucker Punch'],
            [61, 'Torment'],
            [65, 'Quash'],
        ],
    ],

    ['199',
        [
            [1, 'Power Gem'],
            [1, 'Nasty Plot'],
            [1, 'Swagger'],
            [1, 'Tackle'],
            [1, 'Curse'],
            [1, 'Growl'],
            [1, 'Water Gun'],
            [9, 'Yawn'],
            [12, 'Confusion'],
            [15, 'Disable'],
            [18, 'Water Pulse'],
            [21, 'Headbutt'],
            [24, 'Zen Headbutt'],
            [27, 'Amnesia'],
            [30, 'Surf'],
            [33, 'Slack Off'],
            [36, 'Psychic'],
            [39, 'Psych Up'],
            [42, 'Rain Dance'],
            [45, 'Heal Pulse'],
        ], //Johtonian
        [
            [0, 'Eerie Spell'],
            [1, 'Eerie Spell'],
            [1, 'Power Gem'],
            [1, 'Nasty Plot'],
            [1, 'Swagger'],
            [1, 'Tackle'],
            [1, 'Curse'],
            [1, 'Growl'],
            [1, 'Acid'],
            [9, 'Yawn'],
            [12, 'Confusion'],
            [15, 'Disable'],
            [18, 'Water Pulse'],
            [21, 'Headbutt'],
            [24, 'Zen Headbutt'],
            [27, 'Amnesia'],
            [30, 'Surf'],
            [33, 'Slack Off'],
            [36, 'Psychic'],
            [39, 'Psych Up'],
            [42, 'Rain Dance'],
            [45, 'Heal Pulse'],
        ], //Galarian
    ],

    ['200',
        [
            [1, 'Growl'],
            [1, 'Psywave'],
            [5, 'Spite'],
            [10, 'Astonish'],
            [14, 'Confuse Ray'],
            [19, 'Mean Look'],
            [23, 'Hex'],
            [28, 'Psybeam'],
            [32, 'Pain Split'],
            [37, 'Payback'],
            [41, 'Shadow Ball'],
            [46, 'Perish Song'],
            [50, 'Grudge'],
            [55, 'Power Gem'],
        ],
    ],

    ['201',
        [
            [1, 'Hidden Power'],
        ],
    ],

    ['202',
        [
            [0, 'Counter'],
            [0, 'Mirror Coat'],
            [0, 'Safeguard'],
            [0, 'Destiny Bond'],
            [1, 'Splash'],
            [1, 'Charm'],
            [1, 'Encore'],
            [1, 'Amnesia'],
            [1, 'Counter'],
            [1, 'Mirror Coat'],
            [1, 'Safeguard'],
            [1, 'Destiny Bond'],
        ],
    ],

    ['203',
        [
            [1, 'Power Swap'],
            [1, 'Guard Swap'],
            [1, 'Astonish'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Confusion'],
            [5, 'Odor Sleuth'],
            [10, 'Assurance'],
            [14, 'Stomp'],
            [19, 'Psybeam'],
            [23, 'Agility'],
            [28, 'Double Hit'],
            [32, 'Zen Headbutt'],
            [37, 'Crunch'],
            [41, 'Baton Pass'],
            [46, 'Nasty Plot'],
            [50, 'Psychic'],
        ],
    ],

    ['204',
        [
            [1, 'Tackle'],
            [1, 'Protect'],
            [6, 'Self Destruct'],
            [9, 'Bug Bite'],
            [12, 'Take Down'],
            [17, 'Rapid Spin'],
            [20, 'Bide'],
            [23, 'Natural Gift'],
            [28, 'Spikes'],
            [31, 'Payback'],
            [34, 'Explosion'],
            [39, 'Iron Defense'],
            [42, 'Gyro Ball'],
            [45, 'Double Edge'],
        ],
    ],

    ['205',
        [
            [0, 'Mirror Shot'],
            [0, 'Autotomize'],
            [1, 'Mirror Shot'],
            [1, 'Autotomize'],
            [1, 'Heavy Slam'],
            [1, 'Zap Cannon'],
            [1, 'Magnet Rise'],
            [1, 'Toxic Spikes'],
            [1, 'Tackle'],
            [1, 'Protect'],
            [1, 'Self Destruct'],
            [1, 'Bug Bite'],
            [6, 'Self Destruct'],
            [9, 'Bug Bite'],
            [12, 'Take Down'],
            [17, 'Rapid Spin'],
            [20, 'Bide'],
            [23, 'Natural Gift'],
            [28, 'Spikes'],
            [32, 'Payback'],
            [36, 'Explosion'],
            [42, 'Iron Defense'],
            [46, 'Gyro Ball'],
            [50, 'Double Edge'],
            [56, 'Magnet Rise'],
            [60, 'Zap Cannon'],
            [64, 'Heavy Slam'],
        ],
    ],

    ['206',
        [
            [1, 'Flail'],
            [1, 'Defense Curl'],
            [4, 'Mud Slap'],
            [8, 'Rollout'],
            [12, 'Glare'],
            [16, 'Screech'],
            [20, 'Ancient Power'],
            [24, 'Drill Run'],
            [28, 'Yawn'],
            [32, 'Body Slam'],
            [36, 'Take Down'],
            [40, 'Roost'],
            [44, 'Dragon Rush'],
            [48, 'Coil'],
            [52, 'Double Edge'],
            [56, 'Endeavor'],
        ],
    ],

    ['207',
        [
            [1, 'Poison Sting'],
            [4, 'Sand Attack'],
            [7, 'Harden'],
            [10, 'Knock Off'],
            [13, 'Quick Attack'],
            [16, 'Fury Cutter'],
            [19, 'Feint Attack'],
            [22, 'Acrobatics'],
            [27, 'Slash'],
            [30, 'U Turn'],
            [35, 'Screech'],
            [40, 'X Scissor'],
            [45, 'Sky Uppercut'],
            [50, 'Swords Dance'],
            [55, 'Guillotine'],
        ],
    ],

    ['208',
        [
            [1, 'Crunch'],
            [1, 'Thunder Fang'],
            [1, 'Ice Fang'],
            [1, 'Fire Fang'],
            [1, 'Rock Polish'],
            [1, 'Tackle'],
            [1, 'Harden'],
            [1, 'Bind'],
            [1, 'Rock Throw'],
            [4, 'Smack Down'],
            [8, 'Autotomize'],
            [12, 'Dragon Breath'],
            [16, 'Curse'],
            [20, 'Rock Slide'],
            [24, 'Screech'],
            [28, 'Sand Tomb'],
            [32, 'Stealth Rock'],
            [36, 'Slam'],
            [40, 'Sandstorm'],
            [44, 'Dig'],
            [48, 'Iron Tail'],
            [52, 'Stone Edge'],
            [56, 'Double Edge'],
            [60, 'Magnet Rise'],
        ],
    ],

    ['209',
        [
            [1, 'Ice Fang'],
            [1, 'Fire Fang'],
            [1, 'Thunder Fang'],
            [1, 'Tackle'],
            [1, 'Scary Face'],
            [1, 'Tail Whip'],
            [1, 'Charm'],
            [7, 'Bite'],
            [13, 'Lick'],
            [19, 'Headbutt'],
            [25, 'Roar'],
            [31, 'Rage'],
            [37, 'Play Rough'],
            [43, 'Payback'],
            [49, 'Crunch'],
        ],
    ],

    ['210',
        [
            [1, 'Outrage'],
            [1, 'Ice Fang'],
            [1, 'Fire Fang'],
            [1, 'Thunder Fang'],
            [1, 'Tackle'],
            [1, 'Scary Face'],
            [1, 'Tail Whip'],
            [1, 'Charm'],
            [7, 'Bite'],
            [13, 'Lick'],
            [19, 'Headbutt'],
            [27, 'Roar'],
            [35, 'Rage'],
            [43, 'Play Rough'],
            [51, 'Payback'],
            [59, 'Crunch'],
            [67, 'Outrage'],
        ],
    ],

    ['211',
        [
            [1, 'Poison Sting'],
            [1, 'Tackle'],
            [4, 'Harden'],
            [8, 'Water Gun'],
            [12, 'Fell Stinger'],
            [16, 'Minimize'],
            [20, 'Spikes'],
            [24, 'Brine'],
            [28, 'Revenge'],
            [32, 'Pin Missile'],
            [36, 'Toxic Spikes'],
            [40, 'Poison Jab'],
            [44, 'Stockpile'],
            [44, 'Spit Up'],
            [48, 'Take Down'],
            [52, 'Toxic'],
            [56, 'Aqua Tail'],
            [60, 'Acupressure'],
            [66, 'Destiny Bond'],
        ],
    ],

    ['212',
        [
            [0, 'Bullet Punch'],
            [1, 'Bullet Punch'],
            [1, 'Wing Attack'],
            [1, 'Agility'],
            [1, 'Air Slash'],
            [1, 'Quick Attack'],
            [1, 'Leer'],
            [1, 'Fury Cutter'],
            [1, 'False Swipe'],
            [12, 'Metal Claw'],
            [16, 'Double Team'],
            [20, 'Double Hit'],
            [24, 'Slash'],
            [28, 'Focus Energy'],
            [32, 'Iron Defense'],
            [36, 'Iron Head'],
            [40, 'X Scissor'],
            [44, 'Laser Focus'],
            [48, 'Swords Dance'],
        ],
    ],

    ['213',
        [
            [1, 'Withdraw'],
            [1, 'Wrap'],
            [5, 'Rollout'],
            [10, 'Struggle Bug'],
            [15, 'Rock Throw'],
            [20, 'Safeguard'],
            [25, 'Rest'],
            [30, 'Bug Bite'],
            [35, 'Power Split'],
            [35, 'Guard Split'],
            [40, 'Rock Slide'],
            [45, 'Gastro Acid'],
            [50, 'Sticky Web'],
            [55, 'Power Trick'],
            [60, 'Stone Edge'],
            [65, 'Shell Smash'],
        ],
    ],

    ['214',
        [
            [1, 'Tackle'],
            [1, 'Leer'],
            [5, 'Fury Attack'],
            [10, 'Endure'],
            [15, 'Aerial Ace'],
            [20, 'Horn Attack'],
            [25, 'Counter'],
            [30, 'Brick Break'],
            [35, 'Pin Missile'],
            [40, 'Throat Chop'],
            [45, 'Thrash'],
            [50, 'Swords Dance'],
            [55, 'Megahorn'],
            [60, 'Close Combat'],
        ],
    ],

    ['215',
        [
            [1, 'Scratch'],
            [1, 'Leer'],
            [6, 'Taunt'],
            [12, 'Quick Attack'],
            [18, 'Metal Claw'],
            [24, 'Icy Wind'],
            [30, 'Fury Swipes'],
            [36, 'Hone Claws'],
            [42, 'Beat Up'],
            [48, 'Agility'],
            [54, 'Screech'],
            [60, 'Slash'],
        ],
    ],

    ['216',
        [
            [1, 'Fling'],
            [1, 'Covet'],
            [1, 'Scratch'],
            [1, 'Baby Doll Eyes'],
            [1, 'Lick'],
            [1, 'Fake Tears'],
            [8, 'Fury Swipes'],
            [15, 'Feint Attack'],
            [22, 'Sweet Scent'],
            [25, 'Play Nice'],
            [29, 'Slash'],
            [36, 'Charm'],
            [43, 'Rest'],
            [43, 'Snore'],
            [50, 'Thrash'],
            [57, 'Fling'],
        ],
    ],

    ['217',
        [
            [1, 'Hammer Arm'],
            [1, 'Covet'],
            [1, 'Scratch'],
            [1, 'Leer'],
            [1, 'Lick'],
            [1, 'Fake Tears'],
            [8, 'Fury Swipes'],
            [15, 'Feint Attack'],
            [22, 'Sweet Scent'],
            [25, 'Play Nice'],
            [29, 'Slash'],
            [38, 'Scary Face'],
            [47, 'Rest'],
            [49, 'Snore'],
            [58, 'Thrash'],
            [67, 'Hammer Arm'],
        ],
    ],

    ['218',
        [
            [1, 'Yawn'],
            [1, 'Smog'],
            [6, 'Ember'],
            [8, 'Rock Throw'],
            [13, 'Harden'],
            [15, 'Incinerate'],
            [20, 'Clear Smog'],
            [22, 'Ancient Power'],
            [27, 'Flame Burst'],
            [29, 'Rock Slide'],
            [34, 'Lava Plume'],
            [36, 'Amnesia'],
            [41, 'Body Slam'],
            [43, 'Recover'],
            [48, 'Flamethrower'],
            [50, 'Earth Power'],
        ],
    ],

    ['219',
        [
            [0, 'Shell Smash'],
            [1, 'Shell Smash'],
            [1, 'Earth Power'],
            [1, 'Yawn'],
            [1, 'Smog'],
            [1, 'Ember'],
            [1, 'Rock Throw'],
            [6, 'Ember'],
            [8, 'Rock Throw'],
            [13, 'Harden'],
            [15, 'Incinerate'],
            [20, 'Clear Smog'],
            [22, 'Ancient Power'],
            [27, 'Flame Burst'],
            [29, 'Rock Slide'],
            [34, 'Lava Plume'],
            [36, 'Amnesia'],
            [43, 'Body Slam'],
            [47, 'Recover'],
            [54, 'Flamethrower'],
            [58, 'Earth Power'],
        ],
    ],

    ['220',
        [
            [1, 'Tackle'],
            [1, 'Mud Slap'],
            [5, 'Powder Snow'],
            [10, 'Flail'],
            [15, 'Ice Shard'],
            [20, 'Mist'],
            [25, 'Endure'],
            [30, 'Icy Wind'],
            [35, 'Amnesia'],
            [40, 'Take Down'],
            [45, 'Earthquake'],
            [50, 'Blizzard'],
        ],
    ],

    ['221',
        [
            [0, 'Ice Fang'],
            [1, 'Ice Fang'],
            [1, 'Ancient Power'],
            [1, 'Tackle'],
            [1, 'Mud Slap'],
            [1, 'Powder Snow'],
            [1, 'Flail'],
            [15, 'Ice Shard'],
            [20, 'Mist'],
            [25, 'Endure'],
            [30, 'Icy Wind'],
            [37, 'Amnesia'],
            [44, 'Take Down'],
            [51, 'Earthquake'],
            [58, 'Blizzard'],
            [65, 'Thrash'],
        ],
    ],

    ['222',
        [
            [1, 'Tackle'],
            [1, 'Harden'],
            [5, 'Water Gun'],
            [10, 'Aqua Ring'],
            [15, 'Endure'],
            [20, 'Ancient Power'],
            [25, 'Bubble Beam'],
            [30, 'Flail'],
            [35, 'Life Dew'],
            [40, 'Power Gem'],
            [45, 'Earth Power'],
            [50, 'Recover'],
            [55, 'Mirror Coat'],
        ], //Johtonian
        [
            [1, 'Tackle'],
            [1, 'Harden'],
            [5, 'Astonish'],
            [10, 'Disable'],
            [15, 'Spite'],
            [20, 'Ancient Power'],
            [25, 'Hex'],
            [30, 'Curse'],
            [35, 'Strength Sap'],
            [40, 'Power Gem'],
            [45, 'Night Shade'],
            [50, 'Grudge'],
            [55, 'Mirror Coat'],
        ], //Galarian
    ], //Corsola

    ['223',
        [
            [1, 'Water Gun'],
            [1, 'Helping Hand'],
            [4, 'Water Pulse'],
            [8, 'Focus Energy'],
            [12, 'Psybeam'],
            [16, 'Aurora Beam'],
            [20, 'Bubble Beam'],
            [24, 'Lock On'],
            [28, 'Bullet Seed'],
            [32, 'Ice Beam'],
            [36, 'Hydro Pump'],
            [40, 'Soak'],
            [44, 'Hyper Beam'],
        ],
    ],

    ['224',
        [
            [0, 'Octazooka'],
            [1, 'Octazooka'],
            [1, 'Gunk Shot'],
            [1, 'Rock Blast'],
            [1, 'Helping Hand'],
            [1, 'Water Gun'],
            [1, 'Wrap'],
            [1, 'Water Pulse'],
            [1, 'Focus Energy'],
            [12, 'Psybeam'],
            [16, 'Aurora Beam'],
            [20, 'Bubble Beam'],
            [24, 'Lock On'],
            [30, 'Bullet Seed'],
            [36, 'Ice Beam'],
            [42, 'Hydro Pump'],
            [48, 'Soak'],
            [54, 'Hyper Beam'],
        ],
    ],

    ['225',
        [
            [1, 'Present'],
            [25, 'Drill Peck'],
        ],
    ],

    ['226',
        [
            [1, 'Psybeam'],
            [1, 'Bullet Seed'],
            [1, 'Roost'],
            [1, 'Tackle'],
            [1, 'Water Gun'],
            [1, 'Supersonic'],
            [1, 'Wing Attack'],
            [12, 'Water Pulse'],
            [16, 'Wide Guard'],
            [20, 'Agility'],
            [24, 'Bubble Beam'],
            [28, 'Headbutt'],
            [32, 'Air Slash'],
            [36, 'Aqua Ring'],
            [40, 'Bounce'],
            [44, 'Take Down'],
            [48, 'Hydro Pump'],
        ],
    ],

    ['227',
        [
            [1, 'Peck'],
            [1, 'Leer'],
            [4, 'Sand Attack'],
            [8, 'Fury Attack'],
            [12, 'Metal Claw'],
            [16, 'Agility'],
            [20, 'Wing Attack'],
            [24, 'Slash'],
            [28, 'Steel Wing'],
            [32, 'Autotomize'],
            [36, 'Drill Peck'],
            [40, 'Metal Sound'],
            [44, 'Spikes'],
            [48, 'Iron Defense'],
            [52, 'Brave Bird'],
        ],
    ],

    ['228',
        [
            [1, 'Leer'],
            [1, 'Ember'],
            [4, 'Howl'],
            [8, 'Smog'],
            [13, 'Roar'],
            [16, 'Bite'],
            [20, 'Odor Sleuth'],
            [25, 'Beat Up'],
            [28, 'Fire Fang'],
            [32, 'Feint Attack'],
            [37, 'Embargo'],
            [40, 'Foul Play'],
            [44, 'Flamethrower'],
            [49, 'Crunch'],
            [52, 'Nasty Plot'],
            [56, 'Inferno'],
        ],
    ],

    ['229',
        [
            [1, 'Inferno'],
            [1, 'Nasty Plot'],
            [1, 'Thunder Fang'],
            [1, 'Leer'],
            [1, 'Ember'],
            [1, 'Howl'],
            [1, 'Smog'],
            [4, 'Howl'],
            [8, 'Smog'],
            [13, 'Roar'],
            [16, 'Bite'],
            [20, 'Odor Sleuth'],
            [26, 'Beat Up'],
            [30, 'Fire Fang'],
            [35, 'Feint Attack'],
            [41, 'Embargo'],
            [45, 'Foul Play'],
            [50, 'Flamethrower'],
            [56, 'Crunch'],
            [60, 'Nasty Plot'],
            [65, 'Inferno'],
        ],
    ],

    ['230',
        [
            [1, 'Whirlpool'],
            [1, 'Yawn'],
            [1, 'Water Gun'],
            [1, 'Leer'],
            [1, 'Smokescreen'],
            [1, 'Twister'],
            [15, 'Focus Energy'],
            [20, 'Dragon Breath'],
            [25, 'Bubble Beam'],
            [30, 'Agility'],
            [37, 'Laser Focus'],
            [44, 'Dragon Pulse'],
            [51, 'Hydro Pump'],
            [58, 'Dragon Dance'],
            [65, 'Rain Dance'],
        ],
    ],

    ['231',
        [
            [1, 'Odor Sleuth'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Defense Curl'],
            [6, 'Flail'],
            [10, 'Rollout'],
            [15, 'Natural Gift'],
            [19, 'Endure'],
            [24, 'Slam'],
            [28, 'Take Down'],
            [33, 'Charm'],
            [37, 'Last Resort'],
            [42, 'Double Edge'],
        ],
    ],

    ['232',
        [
            [0, 'Fury Attack'],
            [1, 'Fury Attack'],
            [1, 'Fire Fang'],
            [1, 'Thunder Fang'],
            [1, 'Horn Attack'],
            [1, 'Bulldoze'],
            [1, 'Growl'],
            [1, 'Defense Curl'],
            [6, 'Rapid Spin'],
            [10, 'Rollout'],
            [15, 'Assurance'],
            [19, 'Knock Off'],
            [24, 'Slam'],
            [30, 'Magnitude'],
            [37, 'Scary Face'],
            [43, 'Earthquake'],
            [50, 'Giga Impact'],
        ],
    ],

    ['233',
        [
            [1, 'Defense Curl'],
            [1, 'Tackle'],
            [1, 'Conversion'],
            [1, 'Recycle'],
            [1, 'Magnet Rise'],
            [15, 'Thunder Shock'],
            [20, 'Psybeam'],
            [25, 'Conversion 2'],
            [30, 'Agility'],
            [35, 'Recover'],
            [40, 'Discharge'],
            [45, 'Tri Attack'],
            [50, 'Magic Coat'],
            [55, 'Lock On'],
            [60, 'Zap Cannon'],
            [65, 'Hyper Beam'],
        ],
    ],

    ['234',
        [
            [1, 'Me First'],
            [1, 'Tackle'],
            [3, 'Leer'],
            [7, 'Astonish'],
            [10, 'Hypnosis'],
            [13, 'Stomp'],
            [16, 'Sand Attack'],
            [21, 'Take Down'],
            [23, 'Confuse Ray'],
            [27, 'Calm Mind'],
            [33, 'Role Play'],
            [38, 'Zen Headbutt'],
            [43, 'Jump Kick'],
            [49, 'Imprison'],
            [50, 'Captivate'],
            [55, 'Me First'],
        ],
    ],

    ['235',
        [
            [1, 'Sketch'],
            [11, 'Sketch'],
            [21, 'Sketch'],
            [31, 'Sketch'],
            [41, 'Sketch'],
            [51, 'Sketch'],
            [61, 'Sketch'],
            [71, 'Sketch'],
            [81, 'Sketch'],
            [91, 'Sketch'],
        ],
    ],

    ['236',
        [
            [1, 'Tackle'],
            [1, 'Helping Hand'],
            [1, 'Fake Out'],
            [1, 'Focus Energy'],
        ],
    ],

    ['237',
        [
            [0, 'Triple Kick'],
            [1, 'Triple Kick'],
            [1, 'Feint'],
            [1, 'Rapid Spin'],
            [1, 'Tackle'],
            [1, 'Helping Hand'],
            [1, 'Fake Out'],
            [1, 'Focus Energy'],
            [4, 'Quick Attack'],
            [8, 'Gyro Ball'],
            [12, 'Detect'],
            [16, 'Revenge'],
            [21, 'Wide Guard'],
            [21, 'Quick Guard'],
            [24, 'Sucker Punch'],
            [28, 'Agility'],
            [32, 'Dig'],
            [36, 'Close Combat'],
            [40, 'Counter'],
            [44, 'Endeavor'],
        ],
    ],

    ['238',
        [
            [1, 'Lick'],
            [1, 'Pound'],
            [4, 'Powder Snow'],
            [8, 'Copycat'],
            [12, 'Confusion'],
            [16, 'Covet'],
            [20, 'Sing'],
            [24, 'Fake Tears'],
            [28, 'Ice Punch'],
            [32, 'Psychic'],
            [36, 'Sweet Kiss'],
            [40, 'Mean Look'],
            [44, 'Perish Song'],
            [48, 'Blizzard'],
        ],
    ],

    ['239',
        [
            [1, 'Quick Attack'],
            [1, 'Leer'],
            [4, 'Thunder Shock'],
            [8, 'Charge'],
            [12, 'Swift'],
            [16, 'Shock Wave'],
            [20, 'Thunder Wave'],
            [24, 'Screech'],
            [28, 'Thunder Punch'],
            [32, 'Discharge'],
            [36, 'Low Kick'],
            [40, 'Thunderbolt'],
            [44, 'Light Screen'],
            [48, 'Thunder'],
        ],
    ],

    ['240',
        [
            [1, 'Smog'],
            [1, 'Leer'],
            [4, 'Ember'],
            [8, 'Smokescreen'],
            [12, 'Clear Smog'],
            [16, 'Flame Wheel'],
            [20, 'Confuse Ray'],
            [24, 'Scary Face'],
            [28, 'Fire Punch'],
            [32, 'Lava Plume'],
            [36, 'Low Kick'],
            [40, 'Flamethrower'],
            [44, 'Sunny Day'],
            [48, 'Fire Blast'],
        ],
    ],

    ['241',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [5, 'Rollout'],
            [10, 'Defense Curl'],
            [15, 'Stomp'],
            [20, 'Heal Bell'],
            [25, 'Headbutt'],
            [30, 'Zen Headbutt'],
            [35, 'Milk Drink'],
            [40, 'Body Slam'],
            [45, 'Play Rough'],
            [50, 'Charm'],
            [55, 'High Horsepower'],
        ],
    ],

    ['242',
        [
            [1, 'Sweet Kiss'],
            [1, 'Disarming Voice'],
            [1, 'Covet'],
            [1, 'Charm'],
            [1, 'Minimize'],
            [1, 'Pound'],
            [1, 'Copycat'],
            [1, 'Defense Curl'],
            [4, 'Tail Whip'],
            [8, 'Echoed Voice'],
            [12, 'Life Dew'],
            [16, 'Sing'],
            [20, 'Fling'],
            [24, 'Take Down'],
            [28, 'Heal Pulse'],
            [32, 'Helping Hand'],
            [36, 'Light Screen'],
            [40, 'Double Edge'],
            [44, 'Soft Boiled'],
            [48, 'Last Resort'],
            [52, 'Healing Wish'],
        ],
    ],

    ['243',
        [
            [1, 'Extreme Speed'],
            [1, 'Thunder Shock'],
            [1, 'Leer'],
            [1, 'Charge'],
            [1, 'Quick Attack'],
            [6, 'Spark'],
            [12, 'Bite'],
            [18, 'Calm Mind'],
            [24, 'Roar'],
            [30, 'Thunder Fang'],
            [36, 'Howl'],
            [42, 'Crunch'],
            [48, 'Extrasensory'],
            [54, 'Discharge'],
            [60, 'Reflect'],
            [66, 'Rain Dance'],
            [72, 'Thunder'],
            [78, 'Zap Cannon'],
        ],
    ],

    ['244',
        [
            [1, 'Sacred Fire'],
            [1, 'Extreme Speed'],
            [1, 'Ember'],
            [1, 'Leer'],
            [1, 'Stomp'],
            [1, 'Smokescreen'],
            [6, 'Flame Wheel'],
            [12, 'Bite'],
            [18, 'Calm Mind'],
            [24, 'Roar'],
            [30, 'Fire Fang'],
            [36, 'Scary Face'],
            [42, 'Crunch'],
            [48, 'Extrasensory'],
            [54, 'Lava Plume'],
            [60, 'Swagger'],
            [66, 'Sunny Day'],
            [72, 'Fire Blast'],
            [78, 'Eruption'],
        ],
    ],

    ['245',
        [
            [1, 'Sheer Cold'],
            [1, 'Extreme Speed'],
            [1, 'Water Gun'],
            [1, 'Leer'],
            [1, 'Gust'],
            [1, 'Mist'],
            [6, 'Water Pulse'],
            [12, 'Bite'],
            [18, 'Calm Mind'],
            [24, 'Roar'],
            [30, 'Ice Fang'],
            [36, 'Tailwind'],
            [42, 'Crunch'],
            [48, 'Extrasensory'],
            [54, 'Surf'],
            [60, 'Mirror Coat'],
            [66, 'Rain Dance'],
            [72, 'Hydro Pump'],
            [78, 'Blizzard'],
        ],
    ],

    ['246',
        [
            [1, 'Tackle'],
            [1, 'Leer'],
            [3, 'Rock Throw'],
            [6, 'Payback'],
            [9, 'Bite'],
            [12, 'Scary Face'],
            [15, 'Rock Slide'],
            [18, 'Stomping Tantrum'],
            [21, 'Screech'],
            [24, 'Dark Pulse'],
            [27, 'Crunch'],
            [31, 'Earthquake'],
            [33, 'Stone Edge'],
            [36, 'Thrash'],
            [39, 'Sandstorm'],
            [42, 'Hyper Beam'],
        ],
    ],

    ['247',
        [
            [0, 'Iron Defense'],
            [1, 'Iron Defense'],
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Rock Throw'],
            [1, 'Payback'],
            [9, 'Bite'],
            [12, 'Scary Face'],
            [15, 'Rock Slide'],
            [18, 'Stomping Tantrum'],
            [21, 'Screech'],
            [24, 'Dark Pulse'],
            [27, 'Crunch'],
            [33, 'Earthquake'],
            [37, 'Stone Edge'],
            [42, 'Thrash'],
            [47, 'Sandstorm'],
            [52, 'Hyper Beam'],
        ],
    ],

    ['248',
        [
            [1, 'Iron Defense'],
            [1, 'Thunder Fang'],
            [1, 'Ice Fang'],
            [1, 'Fire Fang'],
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Rock Throw'],
            [1, 'Payback'],
            [9, 'Bite'],
            [12, 'Scary Face'],
            [15, 'Rock Slide'],
            [18, 'Stomping Tantrum'],
            [21, 'Screech'],
            [24, 'Dark Pulse'],
            [27, 'Crunch'],
            [33, 'Earthquake'],
            [37, 'Stone Edge'],
            [42, 'Thrash'],
            [47, 'Sandstorm'],
            [52, 'Hyper Beam'],
            [59, 'Giga Impact'],
        ],
    ],

    ['249',
        [
            [1, 'Dragon Rush'],
            [1, 'Gust'],
            [1, 'Whirlwind'],
            [1, 'Weather Ball'],
            [1, 'Ancient Power'],
            [9, 'Mist'],
            [18, 'Safeguard'],
            [27, 'Calm Mind'],
            [36, 'Extrasensory'],
            [45, 'Recover'],
            [54, 'Aeroblast'],
            [63, 'Rain Dance'],
            [72, 'Hydro Pump'],
            [81, 'Future Sight'],
            [90, 'Sky Attack'],
        ],
    ],

    ['250',
        [
            [1, 'Gust'],
            [1, 'Whirlwind'],
            [1, 'Weather Ball'],
            [1, 'Ancient Power'],
            [9, 'Life Dew'],
            [18, 'Safeguard'],
            [27, 'Calm Mind'],
            [36, 'Extrasensory'],
            [45, 'Recover'],
            [54, 'Sacred Fire'],
            [63, 'Sunny Day'],
            [72, 'Fire Blast'],
            [81, 'Future Sight'],
            [90, 'Sky Attack'],
            [99, 'Burn Up'],
        ],
    ],

    ['251',
        [
            [1, 'Confusion'],
            [1, 'Heal Bell'],
            [10, 'Magical Leaf'],
            [20, 'Baton Pass'],
            [30, 'Ancient Power'],
            [40, 'Life Dew'],
            [50, 'Leech Seed'],
            [60, 'Recover'],
            [70, 'Future Sight'],
            [80, 'Healing Wish'],
            [90, 'Leaf Storm'],
            [100, 'Perish Song'],
        ],
    ],

    ['252',
        [
            [1, 'Pound'],
            [1, 'Leer'],
            [3, 'Leafage'],
            [6, 'Quick Attack'],
            [9, 'Mega Drain'],
            [12, 'Detect'],
            [15, 'Quick Guard'],
            [18, 'Assurance'],
            [21, 'Giga Drain'],
            [24, 'Slam'],
            [27, 'Double Team'],
            [30, 'Energy Ball'],
            [33, 'Screech'],
            [36, 'Endeavor'],
            [39, 'Leaf Storm'],
        ],
    ],

    ['253',
        [
            [1, 'Fury Cutter'],
            [1, 'False Swipe'],
            [1, 'X Scissor'],
            [1, 'Energy Ball'],
            [1, 'Pound'],
            [1, 'Leer'],
            [1, 'Leafage'],
            [1, 'Quick Attack'],
            [9, 'Mega Drain'],
            [12, 'Detect'],
            [15, 'Quick Guard'],
            [20, 'Assurance'],
            [25, 'Giga Drain'],
            [30, 'Slam'],
            [35, 'Double Team'],
            [40, 'Leaf Blade'],
            [45, 'Screech'],
            [50, 'Endeavor'],
            [55, 'Leaf Storm'],
        ],
    ],

    ['254',
        [
            [0, 'Dual Chop'],
            [1, 'Dual Chop'],
            [1, 'Fury Cutter'],
            [1, 'False Swipe'],
            [1, 'X Scissor'],
            [1, 'Energy Ball'],
            [1, 'Pound'],
            [1, 'Leer'],
            [1, 'Leafage'],
            [1, 'Quick Attack'],
            [5, 'Mega Drain'],
            [12, 'Detect'],
            [15, 'Quick Guard'],
            [20, 'Assurance'],
            [25, 'Giga Drain'],
            [30, 'Slam'],
            [35, 'Double Team'],
            [42, 'Leaf Blade'],
            [49, 'Screech'],
            [56, 'Endeavor'],
            [63, 'Leaf Storm'],
        ],
    ],

    ['255',
        [
            [1, 'Scratch'],
            [1, 'Growl'],
            [3, 'Ember'],
            [6, 'Quick Attack'],
            [9, 'Flame Charge'],
            [12, 'Detect'],
            [15, 'Sand Attack'],
            [18, 'Aerial Ace'],
            [21, 'Slash'],
            [24, 'Bounce'],
            [27, 'Focus Energy'],
            [30, 'Flamethrower'],
            [33, 'Feather Dance'],
            [36, 'Reversal'],
            [39, 'Flare Blitz'],
        ],
    ],

    ['256',
        [
            [0, 'Double Kick'],
            [1, 'Double Kick'],
            [1, 'Flamethrower'],
            [1, 'Feather Dance'],
            [1, 'Scratch'],
            [1, 'Growl'],
            [1, 'Ember'],
            [1, 'Quick Attack'],
            [9, 'Flame Charge'],
            [12, 'Detect'],
            [15, 'Sand Attack'],
            [20, 'Aerial Ace'],
            [25, 'Slash'],
            [30, 'Bounce'],
            [35, 'Focus Energy'],
            [40, 'Blaze Kick'],
            [45, 'Bulk Up'],
            [50, 'Reversal'],
            [55, 'Flare Blitz'],
        ],
    ],

    ['257',
        [
            [1, 'Double Kick'],
            [1, 'Fire Punch'],
            [1, 'Brave Bird'],
            [1, 'Flamethrower'],
            [1, 'Feather Dance'],
            [1, 'Scratch'],
            [1, 'Growl'],
            [1, 'Ember'],
            [1, 'Quick Attack'],
            [9, 'Flame Charge'],
            [12, 'Detect'],
            [15, 'Sand Attack'],
            [20, 'Aerial Ace'],
            [25, 'Slash'],
            [30, 'Bounce'],
            [35, 'Focus Energy'],
            [42, 'Blaze Kick'],
            [49, 'Bulk Up'],
            [56, 'Reversal'],
            [63, 'Flare Blitz'],
        ],
    ],

    ['258',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [3, 'Water Gun'],
            [6, 'Rock Smash'],
            [9, 'Rock Throw'],
            [12, 'Protect'],
            [15, 'Supersonic'],
            [18, 'Water Pulse'],
            [21, 'Rock Slide'],
            [24, 'Take Down'],
            [27, 'Amnesia'],
            [30, 'Surf'],
            [33, 'Screech'],
            [36, 'Endeavor'],
            [39, 'Hydro Pump'],
        ],
    ],

    ['259',
        [
            [0, 'Mud Shot'],
            [1, 'Mud Shot'],
            [1, 'Earthquake'],
            [1, 'Surf'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Water Gun'],
            [1, 'Rock Smash'],
            [9, 'Rock Throw'],
            [12, 'Protect'],
            [15, 'Supersonic'],
            [20, 'Water Pulse'],
            [25, 'Rock Slide'],
            [30, 'Take Down'],
            [35, 'Amnesia'],
            [40, 'Muddy Water'],
            [45, 'Screech'],
            [50, 'Endeavor'],
            [55, 'Hydro Pump'],
        ],
    ],

    ['260',
        [
            [1, 'Mud Shot'],
            [1, 'Hammer Arm'],
            [1, 'Earthquake'],
            [1, 'Surf'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Water Gun'],
            [1, 'Rock Smash'],
            [9, 'Rock Throw'],
            [12, 'Protect'],
            [15, 'Supersonic'],
            [20, 'Water Pulse'],
            [25, 'Rock Slide'],
            [30, 'Take Down'],
            [35, 'Amnesia'],
            [42, 'Muddy Water'],
            [49, 'Screech'],
            [56, 'Endeavor'],
            [63, 'Hydro Pump'],
        ],
    ],

    ['261',
        [
            [1, 'Tackle'],
            [4, 'Howl'],
            [7, 'Sand Attack'],
            [10, 'Bite'],
            [13, 'Odor Sleuth'],
            [16, 'Roar'],
            [19, 'Swagger'],
            [22, 'Assurance'],
            [25, 'Scary Face'],
            [28, 'Embargo'],
            [31, 'Taunt'],
            [34, 'Crunch'],
            [37, 'Yawn'],
            [40, 'Take Down'],
            [43, 'Sucker Punch'],
            [46, 'Play Rough'],
        ],
    ],

    ['262',
        [
            [0, 'Snarl'],
            [1, 'Snarl'],
            [1, 'Fire Fang'],
            [1, 'Thunder Fang'],
            [1, 'Ice Fang'],
            [1, 'Crunch'],
            [1, 'Thief'],
            [1, 'Tackle'],
            [1, 'Howl'],
            [1, 'Sand Attack'],
            [1, 'Bite'],
            [4, 'Howl'],
            [7, 'Sand Attack'],
            [10, 'Bite'],
            [13, 'Odor Sleuth'],
            [16, 'Roar'],
            [20, 'Swagger'],
            [24, 'Assurance'],
            [28, 'Scary Face'],
            [32, 'Embargo'],
            [36, 'Taunt'],
            [40, 'Crunch'],
            [44, 'Yawn'],
            [48, 'Take Down'],
            [52, 'Sucker Punch'],
            [56, 'Play Rough'],
        ],
    ],

    ['263',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [3, 'Sand Attack'],
            [6, 'Tail Whip'],
            [9, 'Covet'],
            [12, 'Headbutt'],
            [15, 'Baby Doll Eyes'],
            [18, 'Pin Missile'],
            [21, 'Rest'],
            [24, 'Take Down'],
            [27, 'Fling'],
            [30, 'Flail'],
            [33, 'Belly Drum'],
            [36, 'Double Edge'],
        ], //Hoenn
        [
            [1, 'Tackle'],
            [1, 'Leer'],
            [3, 'Sand Attack'],
            [6, 'Lick'],
            [9, 'Snarl'],
            [12, 'Headbutt'],
            [15, 'Baby Doll Eyes'],
            [18, 'Pin Missile'],
            [21, 'Rest'],
            [24, 'Take Down'],
            [27, 'Scary Face'],
            [30, 'Counter'],
            [33, 'Taunt'],
            [36, 'Double Edge'],
        ], //Galarian
    ], //Zigzagoon

    ['264',
        [
            [0, 'Slash'],
            [1, 'Slash'],
            [1, 'Switcheroo'],
            [1, 'Pin Missile'],
            [1, 'Baby Doll Eyes'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Sand Attack'],
            [1, 'Tail Whip'],
            [9, 'Covet'],
            [12, 'Headbutt'],
            [15, 'Hone Claws'],
            [18, 'Fury Swipes'],
            [23, 'Rest'],
            [28, 'Take Down'],
            [33, 'Fling'],
            [38, 'Flail'],
            [43, 'Belly Drum'],
            [48, 'Double Edge'],
        ], //Hoenn
        [
            [0, 'Night Slash'],
            [1, 'Night Slash'],
            [1, 'Switcheroo'],
            [1, 'Pin Missile'],
            [1, 'Baby Doll Eyes'],
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Sand Attack'],
            [1, 'Lick'],
            [9, 'Snarl'],
            [12, 'Headbutt'],
            [15, 'Hone Claws'],
            [18, 'Fury Swipes'],
            [23, 'Rest'],
            [28, 'Take Down'],
            [33, 'Scary Face'],
            [38, 'Counter'],
            [43, 'Taunt'],
            [48, 'Double Edge'],
        ], //Galarian
    ], //Linoone

    ['265',
        [
            [1, 'Tackle'],
            [1, 'String Shot'],
            [5, 'Poison Sting'],
            [15, 'Bug Bite'],
        ],
    ],

    ['266',
        [
            [0, 'Harden'],
            [1, 'Harden'],
        ],
    ],

    ['267',
        [
            [0, 'Gust'],
            [1, 'Gust'],
            [12, 'Absorb'],
            [15, 'Stun Spore'],
            [17, 'Morning Sun'],
            [20, 'Air Cutter'],
            [22, 'Mega Drain'],
            [25, 'Silver Wind'],
            [27, 'Attract'],
            [30, 'Whirlwind'],
            [32, 'Giga Drain'],
            [35, 'Bug Buzz'],
            [37, 'Rage'],
            [40, 'Quiver Dance'],
        ],
    ],

    ['268',
        [
            [0, 'Harden'],
            [1, 'Harden'],
        ],
    ],

    ['269',
        [
            [0, 'Gust'],
            [1, 'Gust'],
            [12, 'Confusion'],
            [15, 'Poison Powder'],
            [17, 'Moonlight'],
            [20, 'Venoshock'],
            [22, 'Psybeam'],
            [25, 'Silver Wind'],
            [27, 'Light Screen'],
            [30, 'Whirlwind'],
            [32, 'Toxic'],
            [35, 'Bug Buzz'],
            [37, 'Protect'],
            [40, 'Quiver Dance'],
        ],
    ],

    ['270',
        [
            [1, 'Astonish'],
            [1, 'Growl'],
            [3, 'Absorb'],
            [6, 'Water Gun'],
            [9, 'Mist'],
            [12, 'Mega Drain'],
            [16, 'Flail'],
            [20, 'Bubble Beam'],
            [24, 'Nature Power'],
            [28, 'Giga Drain'],
            [33, 'Rain Dance'],
            [38, 'Zen Headbutt'],
            [43, 'Energy Ball'],
        ],
    ],

    ['271',
        [
            [1, 'Teeter Dance'],
            [1, 'Fake Out'],
            [1, 'Knock Off'],
            [1, 'Flail'],
            [1, 'Astonish'],
            [1, 'Growl'],
            [1, 'Absorb'],
            [1, 'Water Gun'],
            [9, 'Mist'],
            [12, 'Mega Drain'],
            [18, 'Fury Swipes'],
            [24, 'Bubble Beam'],
            [30, 'Nature Power'],
            [36, 'Giga Drain'],
            [43, 'Rain Dance'],
            [50, 'Zen Headbutt'],
            [57, 'Energy Ball'],
            [64, 'Hydro Pump'],
        ],
    ],

    ['272',
        [
            [1, 'Teeter Dance'],
            [1, 'Fake Out'],
            [1, 'Knock Off'],
            [1, 'Flail'],
            [1, 'Mist'],
            [1, 'Mega Drain'],
            [1, 'Fury Swipes'],
            [1, 'Bubble Beam'],
            [1, 'Nature Power'],
            [1, 'Giga Drain'],
            [1, 'Rain Dance'],
            [1, 'Zen Headbutt'],
            [1, 'Energy Ball'],
            [1, 'Hydro Pump'],
            [1, 'Astonish'],
            [1, 'Growl'],
            [1, 'Absorb'],
            [1, 'Water Gun'],
        ],
    ],

    ['273',
        [
            [1, 'Tackle'],
            [1, 'Harden'],
            [3, 'Absorb'],
            [6, 'Astonish'],
            [9, 'Growth'],
            [12, 'Rollout'],
            [15, 'Mega Drain'],
            [18, 'Payback'],
            [21, 'Nature Power'],
            [24, 'Sunny Day'],
            [27, 'Synthesis'],
            [30, 'Sucker Punch'],
            [33, 'Explosion'],
        ],
    ],

    ['274',
        [
            [0, 'Razor Leaf'],
            [1, 'Razor Leaf'],
            [1, 'Air Cutter'],
            [1, 'Torment'],
            [1, 'Fake Out'],
            [1, 'Swagger'],
            [1, 'Synthesis'],
            [1, 'Explosion'],
            [1, 'Tackle'],
            [1, 'Harden'],
            [1, 'Absorb'],
            [1, 'Astonish'],
            [9, 'Growth'],
            [12, 'Rollout'],
            [18, 'Mega Drain'],
            [24, 'Payback'],
            [30, 'Nature Power'],
            [36, 'Sunny Day'],
            [43, 'Extrasensory'],
            [50, 'Sucker Punch'],
            [57, 'Leaf Blade'],
        ],
    ],

    ['275',
        [
            [0, 'Leaf Tornado'],
            [1, 'Leaf Tornado'],
            [1, 'Razor Leaf'],
            [1, 'Air Cutter'],
            [1, 'Torment'],
            [1, 'Fake Out'],
            [1, 'Swagger'],
            [1, 'Whirlwind'],
            [1, 'Hurricane'],
            [1, 'Synthesis'],
            [1, 'Explosion'],
            [1, 'Growth'],
            [1, 'Rollout'],
            [1, 'Mega Drain'],
            [1, 'Payback'],
            [1, 'Nature Power'],
            [1, 'Sunny Day'],
            [1, 'Extrasensory'],
            [1, 'Sucker Punch'],
            [1, 'Leaf Blade'],
            [1, 'Tackle'],
            [1, 'Harden'],
            [1, 'Absorb'],
            [1, 'Astonish'],
        ],
    ],

    ['276',
        [
            [1, 'Peck'],
            [1, 'Growl'],
            [5, 'Focus Energy'],
            [9, 'Quick Attack'],
            [13, 'Wing Attack'],
            [17, 'Double Team'],
            [21, 'Aerial Ace'],
            [25, 'Quick Guard'],
            [29, 'Agility'],
            [33, 'Air Slash'],
            [37, 'Endeavor'],
            [41, 'Brave Bird'],
            [45, 'Reversal'],
        ],
    ],

    ['277',
        [
            [1, 'Brave Bird'],
            [1, 'Air Slash'],
            [1, 'Pluck'],
            [1, 'Peck'],
            [1, 'Growl'],
            [1, 'Focus Energy'],
            [1, 'Quick Attack'],
            [5, 'Focus Energy'],
            [9, 'Quick Attack'],
            [13, 'Wing Attack'],
            [17, 'Double Team'],
            [21, 'Aerial Ace'],
            [27, 'Quick Guard'],
            [33, 'Agility'],
            [39, 'Air Slash'],
            [45, 'Endeavor'],
            [51, 'Brave Bird'],
            [57, 'Reversal'],
        ],
    ],

    ['278',
        [
            [1, 'Growl'],
            [1, 'Water Gun'],
            [5, 'Quick Attack'],
            [10, 'Supersonic'],
            [15, 'Wing Attack'],
            [20, 'Water Pulse'],
            [26, 'Agility'],
            [30, 'Air Slash'],
            [35, 'Mist'],
            [40, 'Roost'],
            [45, 'Hurricane'],
        ],
    ],

    ['279',
        [
            [1, 'Protect'],
            [1, 'Soak'],
            [1, 'Quick Attack'],
            [1, 'Agility'],
            [1, 'Air Slash'],
            [1, 'Growl'],
            [1, 'Water Gun'],
            [1, 'Tailwind'],
            [1, 'Supersonic'],
            [15, 'Wing Attack'],
            [20, 'Water Pulse'],
            [28, 'Stockpile'],
            [28, 'Swallow'],
            [28, 'Spit Up'],
            [34, 'Fling'],
            [41, 'Mist'],
            [48, 'Roost'],
            [55, 'Hurricane'],
            [62, 'Hydro Pump'],
        ],
    ],

    ['280',
        [
            [1, 'Growl'],
            [1, 'Disarming Voice'],
            [3, 'Double Team'],
            [6, 'Confusion'],
            [9, 'Hypnosis'],
            [12, 'Draining Kiss'],
            [15, 'Teleport'],
            [18, 'Psybeam'],
            [21, 'Life Dew'],
            [24, 'Charm'],
            [27, 'Calm Mind'],
            [30, 'Psychic'],
            [33, 'Heal Pulse'],
            [36, 'Dream Eater'],
            [39, 'Future Sight'],
        ],
    ],

    ['281',
        [
            [1, 'Growl'],
            [1, 'Disarming Voice'],
            [1, 'Double Team'],
            [1, 'Confusion'],
            [9, 'Hypnosis'],
            [12, 'Draining Kiss'],
            [15, 'Teleport'],
            [18, 'Psybeam'],
            [23, 'Life Dew'],
            [28, 'Charm'],
            [33, 'Calm Mind'],
            [38, 'Psychic'],
            [43, 'Heal Pulse'],
            [48, 'Dream Eater'],
            [53, 'Future Sight'],
        ],
    ],

    ['282',
        [
            [0, 'Dazzling Gleam'],
            [1, 'Dazzling Gleam'],
            [1, 'Moonblast'],
            [1, 'Misty Terrain'],
            [1, 'Healing Wish'],
            [1, 'Charm'],
            [1, 'Growl'],
            [1, 'Disarming Voice'],
            [1, 'Double Team'],
            [1, 'Confusion'],
            [9, 'Hypnosis'],
            [12, 'Draining Kiss'],
            [15, 'Teleport'],
            [18, 'Psybeam'],
            [23, 'Life Dew'],
            [28, 'Wish'],
            [35, 'Calm Mind'],
            [42, 'Psychic'],
            [49, 'Heal Pulse'],
            [56, 'Dream Eater'],
            [63, 'Future Sight'],
        ],
    ],

    ['283',
        [
            [1, 'Bubble'],
            [6, 'Quick Attack'],
            [9, 'Sweet Scent'],
            [14, 'Water Sport'],
            [17, 'Bubble Beam'],
            [22, 'Agility'],
            [25, 'Mist'],
            [25, 'Haze'],
            [30, 'Aqua Jet'],
            [35, 'Baton Pass'],
            [38, 'Sticky Web'],
        ],
    ],

    ['284',
        [
            [1, 'Quiver Dance'],
            [1, 'Whirlwind'],
            [1, 'Bug Buzz'],
            [1, 'Ominous Wind'],
            [1, 'Bubble'],
            [1, 'Quick Attack'],
            [1, 'Sweet Scent'],
            [1, 'Water Sport'],
            [6, 'Quick Attack'],
            [9, 'Sweet Scent'],
            [14, 'Water Sport'],
            [17, 'Gust'],
            [22, 'Scary Face'],
            [22, 'Air Cutter'],
            [26, 'Stun Spore'],
            [32, 'Silver Wind'],
            [38, 'Air Slash'],
            [42, 'Bug Buzz'],
            [48, 'Whirlwind'],
            [52, 'Quiver Dance'],
        ],
    ],

    ['285',
        [
            [1, 'Absorb'],
            [1, 'Tackle'],
            [5, 'Stun Spore'],
            [8, 'Leech Seed'],
            [12, 'Mega Drain'],
            [15, 'Headbutt'],
            [19, 'Poison Powder'],
            [22, 'Worry Seed'],
            [26, 'Giga Drain'],
            [29, 'Growth'],
            [33, 'Toxic'],
            [36, 'Seed Bomb'],
            [40, 'Spore'],
        ],
    ],

    ['286',
        [
            [0, 'Mach Punch'],
            [1, 'Mach Punch'],
            [1, 'Absorb'],
            [1, 'Tackle'],
            [1, 'Stun Spore'],
            [1, 'Leech Seed'],
            [5, 'Stun Spore'],
            [8, 'Leech Seed'],
            [12, 'Mega Drain'],
            [15, 'Headbutt'],
            [19, 'Feint'],
            [22, 'Counter'],
            [28, 'Force Palm'],
            [33, 'Mind Reader'],
            [39, 'Sky Uppercut'],
            [44, 'Seed Bomb'],
            [50, 'Dynamic Punch'],
        ],
    ],

    ['287',
        [
            [1, 'Scratch'],
            [1, 'Yawn'],
            [6, 'Encore'],
            [9, 'Slack Off'],
            [14, 'Feint Attack'],
            [17, 'Amnesia'],
            [22, 'Covet'],
            [25, 'Chip Away'],
            [30, 'Counter'],
            [33, 'Flail'],
            [38, 'Play Rough'],
        ],
    ],

    ['288',
        [
            [1, 'Reversal'],
            [1, 'Scratch'],
            [1, 'Focus Energy'],
            [1, 'Encore'],
            [1, 'Uproar'],
            [6, 'Encore'],
            [9, 'Uproar'],
            [14, 'Fury Swipes'],
            [17, 'Endure'],
            [23, 'Slash'],
            [27, 'Chip Away'],
            [33, 'Counter'],
            [37, 'Focus Punch'],
            [43, 'Reversal'],
        ],
    ],

    ['289',
        [
            [0, 'Swagger'],
            [1, 'Swagger'],
            [1, 'Hammer Arm'],
            [1, 'Punishment'],
            [1, 'Fling'],
            [1, 'Scratch'],
            [1, 'Yawn'],
            [1, 'Encore'],
            [1, 'Slack Off'],
            [6, 'Encore'],
            [9, 'Slack Off'],
            [14, 'Feint Attack'],
            [17, 'Amnesia'],
            [23, 'Covet'],
            [27, 'Chip Away'],
            [33, 'Counter'],
            [39, 'Flail'],
            [47, 'Fling'],
            [53, 'Punishment'],
            [61, 'Hammer Arm'],
        ],
    ],

    ['290',
        [
            [1, 'Sand Attack'],
            [1, 'Scratch'],
            [5, 'Harden'],
            [10, 'False Swipe'],
            [15, 'Mud Slap'],
            [21, 'Absorb'],
            [25, 'Metal Claw'],
            [30, 'Fury Swipes'],
            [35, 'Mind Reader'],
            [40, 'Dig'],
        ],
    ],

    ['291',
        [
            [0, 'Double Team'],
            [0, 'Screech'],
            [0, 'Fury Cutter'],
            [1, 'Double Team'],
            [1, 'Screech'],
            [1, 'Fury Cutter'],
            [1, 'Baton Pass'],
            [1, 'Aerial Ace'],
            [1, 'Mud Slap'],
            [1, 'Metal Claw'],
            [1, 'Dig'],
            [1, 'Sand Attack'],
            [1, 'Scratch'],
            [1, 'Harden'],
            [1, 'False Swipe'],
            [15, 'Agility'],
            [23, 'Absorb'],
            [29, 'Bug Bite'],
            [36, 'Fury Swipes'],
            [43, 'Mind Reader'],
            [50, 'Slash'],
            [57, 'Swords Dance'],
            [64, 'X Scissor'],
        ],
    ],

    ['292',
        [
            [1, 'Shadow Claw'],
            [1, 'Grudge'],
            [1, 'Mud Slap'],
            [1, 'Metal Claw'],
            [1, 'Dig'],
            [1, 'Scratch'],
            [1, 'Sand Attack'],
            [1, 'Harden'],
            [1, 'False Swipe'],
            [15, 'Confuse Ray'],
            [23, 'Absorb'],
            [29, 'Shadow Sneak'],
            [36, 'Fury Swipes'],
            [43, 'Mind Reader'],
            [50, 'Shadow Ball'],
            [57, 'Spite'],
            [64, 'Phantom Force'],
        ],
    ],

    ['293',
        [
            [1, 'Astonish'],
            [1, 'Pound'],
            [5, 'Echoed Voice'],
            [10, 'Howl'],
            [15, 'Rest'],
            [15, 'Sleep Talk'],
            [21, 'Stomp'],
            [25, 'Roar'],
            [30, 'Supersonic'],
            [35, 'Uproar'],
            [40, 'Screech'],
            [45, 'Hyper Voice'],
        ],
    ],

    ['294',
        [
            [0, 'Bite'],
            [1, 'Bite'],
            [1, 'Astonish'],
            [1, 'Pound'],
            [1, 'Echoed Voice'],
            [1, 'Howl'],
            [15, 'Rest'],
            [15, 'Sleep Talk'],
            [23, 'Stomp'],
            [29, 'Roar'],
            [36, 'Supersonic'],
            [43, 'Uproar'],
            [50, 'Screech'],
            [57, 'Hyper Voice'],
        ],
    ],

    ['295',
        [
            [0, 'Crunch'],
            [1, 'Crunch'],
            [1, 'Bite'],
            [1, 'Ice Fang'],
            [1, 'Fire Fang'],
            [1, 'Thunder Fang'],
            [1, 'Astonish'],
            [1, 'Pound'],
            [1, 'Echoed Voice'],
            [1, 'Howl'],
            [15, 'Rest'],
            [15, 'Sleep Talk'],
            [23, 'Stomp'],
            [29, 'Roar'],
            [36, 'Supersonic'],
            [45, 'Uproar'],
            [54, 'Screech'],
            [63, 'Hyper Voice'],
            [72, 'Boomburst'],
            [81, 'Hyper Beam'],
        ],
    ],

    ['296',
        [
            [1, 'Tackle'],
            [1, 'Focus Energy'],
            [4, 'Sand Attack'],
            [7, 'Arm Thrust'],
            [10, 'Fake Out'],
            [13, 'Force Palm'],
            [16, 'Whirlwind'],
            [19, 'Knock Off'],
            [22, 'Vital Throw'],
            [25, 'Belly Drum'],
            [28, 'Smelling Salts'],
            [31, 'Seismic Toss'],
            [34, 'Wake Up Slap'],
            [37, 'Endure'],
            [40, 'Close Combat'],
            [43, 'Reversal'],
            [46, 'Heavy Slam'],
        ],
    ],

    ['297',
        [
            [1, 'Brine'],
            [1, 'Tackle'],
            [1, 'Focus Energy'],
            [1, 'Sand Attack'],
            [1, 'Arm Thrust'],
            [4, 'Sand Attack'],
            [7, 'Arm Thrust'],
            [10, 'Fake Out'],
            [13, 'Force Palm'],
            [16, 'Whirlwind'],
            [19, 'Knock Off'],
            [22, 'Vital Throw'],
            [26, 'Belly Drum'],
            [30, 'Smelling Salts'],
            [34, 'Seismic Toss'],
            [38, 'Wake Up Slap'],
            [42, 'Endure'],
            [46, 'Close Combat'],
            [50, 'Reversal'],
            [54, 'Heavy Slam'],
        ],
    ],

    ['298',
        [
            [1, 'Splash'],
            [1, 'Water Gun'],
            [1, 'Tail Whip'],
            [3, 'Helping Hand'],
            [6, 'Bubble Beam'],
            [9, 'Charm'],
            [12, 'Slam'],
            [15, 'Bounce'],
        ],
    ],

    ['299',
        [
            [1, 'Tackle'],
            [4, 'Harden'],
            [7, 'Block'],
            [10, 'Rock Throw'],
            [13, 'Thunder Wave'],
            [16, 'Rest'],
            [19, 'Spark'],
            [22, 'Rock Slide'],
            [25, 'Power Gem'],
            [28, 'Rock Blast'],
            [31, 'Discharge'],
            [34, 'Sandstorm'],
            [37, 'Earth Power'],
            [40, 'Stone Edge'],
            [43, 'Lock On'],
            [43, 'Zap Cannon'],
        ],
    ],

    ['300',
        [
            [1, 'Fake Out'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [1, 'Tackle'],
            [4, 'Foresight'],
            [7, 'Sing'],
            [10, 'Attract'],
            [13, 'Disarming Voice'],
            [16, 'Double Slap'],
            [19, 'Copycat'],
            [22, 'Feint Attack'],
            [25, 'Charm'],
            [28, 'Wake Up Slap'],
            [31, 'Assist'],
            [34, 'Covet'],
            [37, 'Heal Bell'],
            [40, 'Double Edge'],
            [43, 'Captivate'],
            [46, 'Play Rough'],
        ],
    ],

    ['301',
        [
            [1, 'Fake Out'],
            [1, 'Sing'],
            [1, 'Attract'],
            [1, 'Double Slap'],
        ],
    ],

    ['302',
        [
            [1, 'Leer'],
            [1, 'Scratch'],
            [3, 'Astonish'],
            [6, 'Confuse Ray'],
            [9, 'Shadow Sneak'],
            [12, 'Fake Out'],
            [15, 'Disable'],
            [18, 'Detect'],
            [21, 'Night Shade'],
            [24, 'Fury Swipes'],
            [27, 'Knock Off'],
            [30, 'Quash'],
            [33, 'Shadow Claw'],
            [36, 'Mean Look'],
            [39, 'Power Gem'],
            [42, 'Zen Headbutt'],
            [45, 'Shadow Ball'],
            [48, 'Foul Play'],
        ],
    ],

    ['303',
        [
            [1, 'Astonish'],
            [1, 'Growl'],
            [4, 'Fairy Wind'],
            [8, 'Baton Pass'],
            [12, 'Bite'],
            [16, 'Stockpile'],
            [16, 'Swallow'],
            [16, 'Spit Up'],
            [20, 'Sucker Punch'],
            [24, 'Iron Defense'],
            [28, 'Crunch'],
            [32, 'Sweet Scent'],
            [36, 'Iron Head'],
            [40, 'Taunt'],
            [44, 'Fake Tears'],
            [48, 'Play Rough'],
        ],
    ],

    ['304',
        [
            [1, 'Tackle'],
            [1, 'Harden'],
            [4, 'Metal Claw'],
            [8, 'Rock Tomb'],
            [12, 'Roar'],
            [16, 'Headbutt'],
            [20, 'Protect'],
            [24, 'Rock Slide'],
            [28, 'Iron Head'],
            [33, 'Metal Sound'],
            [36, 'Take Down'],
            [40, 'Autotomize'],
            [44, 'Iron Tail'],
            [48, 'Iron Defense'],
            [52, 'Heavy Slam'],
            [56, 'Double Edge'],
            [60, 'Metal Burst'],
        ],
    ],

    ['305',
        [
            [1, 'Tackle'],
            [1, 'Harden'],
            [1, 'Metal Claw'],
            [1, 'Rock Tomb'],
            [12, 'Roar'],
            [16, 'Headbutt'],
            [20, 'Protect'],
            [24, 'Rock Slide'],
            [28, 'Iron Head'],
            [35, 'Metal Sound'],
            [40, 'Take Down'],
            [46, 'Autotomize'],
            [52, 'Iron Tail'],
            [58, 'Iron Defense'],
            [64, 'Heavy Slam'],
            [70, 'Double Edge'],
            [76, 'Metal Burst'],
        ],
    ],

    ['306',
        [
            [1, 'Tackle'],
            [1, 'Harden'],
            [1, 'Metal Claw'],
            [1, 'Rock Tomb'],
            [12, 'Roar'],
            [16, 'Headbutt'],
            [20, 'Protect'],
            [24, 'Rock Slide'],
            [28, 'Iron Head'],
            [35, 'Metal Sound'],
            [40, 'Take Down'],
            [48, 'Autotomize'],
            [56, 'Iron Tail'],
            [64, 'Iron Defense'],
            [72, 'Heavy Slam'],
            [80, 'Double Edge'],
            [88, 'Metal Burst'],
        ],
    ],

    ['307',
        [
            [1, 'Bide'],
            [4, 'Meditate'],
            [7, 'Confusion'],
            [9, 'Detect'],
            [12, 'Endure'],
            [15, 'Feint'],
            [17, 'Force Palm'],
            [20, 'Hidden Power'],
            [23, 'Calm Mind'],
            [25, 'Mind Reader'],
            [28, 'High Jump Kick'],
            [31, 'Psych Up'],
            [33, 'Acupressure'],
            [36, 'Power Trick'],
            [39, 'Reversal'],
            [41, 'Recover'],
            [44, 'Counter'],
        ],
    ],

    ['308',
        [
            [1, 'Zen Headbutt'],
            [1, 'Fire Punch'],
            [1, 'Thunder Punch'],
            [1, 'Ice Punch'],
            [1, 'Bide'],
            [1, 'Meditate'],
            [1, 'Confusion'],
            [1, 'Detect'],
            [4, 'Meditate'],
            [7, 'Confusion'],
            [9, 'Detect'],
            [12, 'Endure'],
            [15, 'Feint'],
            [17, 'Force Palm'],
            [20, 'Hidden Power'],
            [23, 'Calm Mind'],
            [25, 'Mind Reader'],
            [28, 'High Jump Kick'],
            [31, 'Psych Up'],
            [33, 'Acupressure'],
            [36, 'Power Trick'],
            [42, 'Reversal'],
            [47, 'Recover'],
            [53, 'Counter'],
        ],
    ],

    ['309',
        [
            [1, 'Tackle'],
            [1, 'Thunder Wave'],
            [4, 'Leer'],
            [8, 'Howl'],
            [12, 'Quick Attack'],
            [16, 'Shock Wave'],
            [20, 'Bite'],
            [24, 'Thunder Fang'],
            [28, 'Roar'],
            [32, 'Discharge'],
            [36, 'Charge'],
            [40, 'Wild Charge'],
            [44, 'Thunder'],
        ],
    ],

    ['310',
        [
            [1, 'Fire Fang'],
            [1, 'Tackle'],
            [1, 'Thunder Wave'],
            [1, 'Leer'],
            [1, 'Howl'],
            [12, 'Quick Attack'],
            [16, 'Shock Wave'],
            [20, 'Bite'],
            [24, 'Thunder Fang'],
            [30, 'Roar'],
            [36, 'Discharge'],
            [42, 'Charge'],
            [48, 'Wild Charge'],
            [54, 'Thunder'],
            [60, 'Electric Terrain'],
        ],
    ],

    ['311',
        [
            [1, 'Nuzzle'],
            [1, 'Play Nice'],
            [1, 'Growl'],
            [1, 'Thunder Wave'],
            [1, 'Quick Attack'],
            [4, 'Helping Hand'],
            [7, 'Spark'],
            [10, 'Encore'],
            [13, 'Bestow'],
            [16, 'Swift'],
            [19, 'Electro Ball'],
            [22, 'Copycat'],
            [25, 'Charm'],
            [28, 'Charge'],
            [31, 'Discharge'],
            [34, 'Baton Pass'],
            [37, 'Agility'],
            [40, 'Last Resort'],
            [43, 'Thunder'],
            [46, 'Nasty Plot'],
            [49, 'Entrainment'],
        ],
    ],

    ['312',
        [
            [1, 'Nuzzle'],
            [1, 'Play Nice'],
            [1, 'Growl'],
            [1, 'Thunder Wave'],
            [1, 'Quick Attack'],
            [4, 'Helping Hand'],
            [7, 'Spark'],
            [10, 'Encore'],
            [13, 'Switcheroo'],
            [16, 'Swift'],
            [19, 'Electro Ball'],
            [22, 'Copycat'],
            [25, 'Fake Tears'],
            [28, 'Charge'],
            [31, 'Discharge'],
            [34, 'Baton Pass'],
            [37, 'Agility'],
            [40, 'Trump Card'],
            [43, 'Thunder'],
            [46, 'Nasty Plot'],
            [49, 'Entrainment'],
        ],
    ],

    ['313',
        [
            [1, 'Flash'],
            [1, 'Tackle'],
            [5, 'Double Team'],
            [8, 'Confuse Ray'],
            [12, 'Quick Attack'],
            [15, 'Struggle Bug'],
            [19, 'Moonlight'],
            [22, 'Tail Glow'],
            [26, 'Signal Beam'],
            [29, 'Protect'],
            [33, 'Zen Headbutt'],
            [36, 'Helping Hand'],
            [40, 'Bug Buzz'],
            [43, 'Play Rough'],
            [47, 'Double Edge'],
            [50, 'Infestation'],
        ],
    ],

    ['314',
        [
            [1, 'Play Nice'],
            [1, 'Tackle'],
            [5, 'Sweet Scent'],
            [9, 'Charm'],
            [12, 'Quick Attack'],
            [15, 'Struggle Bug'],
            [19, 'Moonlight'],
            [22, 'Wish'],
            [26, 'Encore'],
            [29, 'Flatter'],
            [33, 'Zen Headbutt'],
            [36, 'Helping Hand'],
            [40, 'Bug Buzz'],
            [43, 'Play Rough'],
            [47, 'Covet'],
            [50, 'Infestation'],
        ],
    ],

    ['315',
        [
            [0, 'Poison Sting'],
            [1, 'Poison Sting'],
            [1, 'Absorb'],
            [1, 'Growth'],
            [1, 'Stun Spore'],
            [1, 'Worry Seed'],
            [5, 'Mega Drain'],
            [10, 'Leech Seed'],
            [15, 'Magical Leaf'],
            [20, 'Toxic Spikes'],
            [25, 'Sweet Scent'],
            [30, 'Giga Drain'],
            [35, 'Synthesis'],
            [40, 'Toxic'],
            [45, 'Petal Blizzard'],
            [50, 'Aromatherapy'],
            [55, 'Ingrain'],
            [60, 'Petal Dance'],
        ],
    ],

    ['316',
        [
            [1, 'Pound'],
            [5, 'Yawn'],
            [8, 'Poison Gas'],
            [10, 'Sludge'],
            [12, 'Amnesia'],
            [17, 'Acid Spray'],
            [20, 'Encore'],
            [25, 'Toxic'],
            [28, 'Stockpile'],
            [28, 'Spit Up'],
            [28, 'Swallow'],
            [33, 'Sludge Bomb'],
            [36, 'Gastro Acid'],
            [41, 'Belch'],
            [44, 'Wring Out'],
            [49, 'Gunk Shot'],
        ],
    ],

    ['317',
        [
            [0, 'Body Slam'],
            [1, 'Body Slam'],
            [1, 'Venom Drench'],
            [1, 'Gunk Shot'],
            [1, 'Wring Out'],
            [1, 'Pound'],
            [1, 'Yawn'],
            [1, 'Poison Gas'],
            [1, 'Sludge'],
            [5, 'Yawn'],
            [8, 'Poison Gas'],
            [10, 'Sludge'],
            [12, 'Amnesia'],
            [17, 'Acid Spray'],
            [20, 'Encore'],
            [25, 'Toxic'],
            [30, 'Stockpile'],
            [30, 'Spit Up'],
            [30, 'Swallow'],
            [37, 'Sludge Bomb'],
            [42, 'Gastro Acid'],
            [49, 'Belch'],
            [54, 'Wring Out'],
            [61, 'Gunk Shot'],
        ],
    ],

    ['318',
        [
            [1, 'Aqua Jet'],
            [1, 'Leer'],
            [4, 'Poison Fang'],
            [8, 'Focus Energy'],
            [12, 'Scary Face'],
            [16, 'Bite'],
            [20, 'Ice Fang'],
            [24, 'Screech'],
            [28, 'Swagger'],
            [32, 'Crunch'],
            [36, 'Agility'],
            [40, 'Liquidation'],
            [44, 'Take Down'],
        ],
    ],

    ['319',
        [
            [0, 'Slash'],
            [1, 'Slash'],
            [1, 'Night Slash'],
            [1, 'Aqua Jet'],
            [1, 'Leer'],
            [1, 'Poison Fang'],
            [1, 'Focus Energy'],
            [12, 'Scary Face'],
            [16, 'Bite'],
            [20, 'Ice Fang'],
            [24, 'Screech'],
            [28, 'Swagger'],
            [34, 'Crunch'],
            [40, 'Agility'],
            [46, 'Liquidation'],
            [52, 'Take Down'],
        ],
    ],

    ['320',
        [
            [1, 'Splash'],
            [3, 'Growl'],
            [6, 'Astonish'],
            [12, 'Water Gun'],
            [15, 'Mist'],
            [18, 'Water Pulse'],
            [21, 'Heavy Slam'],
            [24, 'Brine'],
            [27, 'Whirlpool'],
            [30, 'Dive'],
            [33, 'Bounce'],
            [36, 'Body Slam'],
            [39, 'Rest'],
            [42, 'Amnesia'],
            [45, 'Hydro Pump'],
            [48, 'Water Spout'],
        ],
    ],

    ['321',
        [
            [1, 'Soak'],
            [1, 'Noble Roar'],
            [1, 'Splash'],
            [1, 'Growl'],
            [1, 'Astonish'],
            [1, 'Water Gun'],
            [15, 'Mist'],
            [18, 'Water Pulse'],
            [21, 'Heavy Slam'],
            [24, 'Brine'],
            [27, 'Whirlpool'],
            [30, 'Dive'],
            [33, 'Bounce'],
            [36, 'Body Slam'],
            [39, 'Rest'],
            [44, 'Amnesia'],
            [49, 'Hydro Pump'],
            [54, 'Water Spout'],
        ],
    ],

    ['322',
        [
            [1, 'Growl'],
            [1, 'Tackle'],
            [5, 'Ember'],
            [8, 'Focus Energy'],
            [12, 'Magnitude'],
            [15, 'Flame Burst'],
            [19, 'Amnesia'],
            [22, 'Lava Plume'],
            [26, 'Earth Power'],
            [29, 'Curse'],
            [31, 'Take Down'],
            [36, 'Yawn'],
            [40, 'Earthquake'],
            [43, 'Flamethrower'],
            [47, 'Double Edge'],
        ],
    ],

    ['323',
        [
            [0, 'Rock Slide'],
            [1, 'Rock Slide'],
            [1, 'Fissure'],
            [1, 'Eruption'],
            [1, 'Growl'],
            [1, 'Tackle'],
            [1, 'Ember'],
            [1, 'Focus Energy'],
            [8, 'Ember'],
            [8, 'Focus Energy'],
            [12, 'Magnitude'],
            [15, 'Flame Burst'],
            [19, 'Amnesia'],
            [22, 'Lava Plume'],
            [26, 'Earth Power'],
            [29, 'Curse'],
            [31, 'Take Down'],
            [39, 'Yawn'],
            [46, 'Earthquake'],
            [52, 'Eruption'],
            [59, 'Fissure'],
        ],
    ],

    ['324',
        [
            [1, 'Smog'],
            [1, 'Ember'],
            [4, 'Withdraw'],
            [8, 'Rapid Spin'],
            [12, 'Smokescreen'],
            [16, 'Clear Smog'],
            [20, 'Flame Wheel'],
            [24, 'Protect'],
            [28, 'Lava Plume'],
            [32, 'Body Slam'],
            [36, 'Iron Defense'],
            [40, 'Flamethrower'],
            [44, 'Curse'],
            [48, 'Heat Wave'],
            [52, 'Amnesia'],
            [56, 'Inferno'],
            [60, 'Shell Smash'],
            [64, 'Eruption'],
        ],
    ],

    ['325',
        [
            [1, 'Splash'],
            [7, 'Psywave'],
            [10, 'Odor Sleuth'],
            [14, 'Psybeam'],
            [15, 'Psych Up'],
            [18, 'Confuse Ray'],
            [21, 'Magic Coat'],
            [26, 'Zen Headbutt'],
            [29, 'Power Gem'],
            [29, 'Rest'],
            [33, 'Snore'],
            [38, 'Psyshock'],
            [40, 'Payback'],
            [44, 'Psychic'],
            [50, 'Bounce'],
        ],
    ],

    ['326',
        [
            [0, 'Teeter Dance'],
            [1, 'Teeter Dance'],
            [1, 'Belch'],
            [1, 'Splash'],
            [1, 'Psywave'],
            [1, 'Odor Sleuth'],
            [1, 'Psybeam'],
            [7, 'Psywave'],
            [10, 'Odor Sleuth'],
            [14, 'Psybeam'],
            [15, 'Psych Up'],
            [18, 'Confuse Ray'],
            [21, 'Magic Coat'],
            [26, 'Zen Headbutt'],
            [29, 'Power Gem'],
            [35, 'Rest'],
            [35, 'Snore'],
            [42, 'Psyshock'],
            [46, 'Payback'],
            [52, 'Psychic'],
            [60, 'Bounce'],
        ],
    ],

    ['327',
        [
            [1, 'Tackle'],
            [5, 'Copycat'],
            [10, 'Feint Attack'],
            [14, 'Psybeam'],
            [19, 'Hypnosis'],
            [23, 'Dizzy Punch'],
            [28, 'Sucker Punch'],
            [32, 'Teeter Dance'],
            [37, 'Uproar'],
            [41, 'Psych Up'],
            [46, 'Double Edge'],
            [50, 'Flail'],
            [55, 'Thrash'],
        ],
    ],

    ['328',
        [
            [1, 'Sand Attack'],
            [1, 'Astonish'],
            [4, 'Laser Focus'],
            [8, 'Bite'],
            [12, 'Mud Slap'],
            [16, 'Sand Tomb'],
            [20, 'Bulldoze'],
            [24, 'Dig'],
            [28, 'Crunch'],
            [32, 'Sandstorm'],
            [36, 'Earth Power'],
            [40, 'Earthquake'],
            [44, 'Superpower'],
            [48, 'Fissure'],
        ],
    ],

    ['329',
        [
            [0, 'Dragon Breath'],
            [1, 'Dragon Breath'],
            [1, 'Laser Focus'],
            [1, 'Bulldoze'],
            [1, 'Dig'],
            [1, 'Crunch'],
            [1, 'Superpower'],
            [1, 'Fissure'],
            [1, 'Sand Attack'],
            [1, 'Astonish'],
            [1, 'Supersonic'],
            [1, 'Bite'],
            [12, 'Mud Slap'],
            [16, 'Sand Tomb'],
            [20, 'Dragon Tail'],
            [24, 'Screech'],
            [28, 'Bug Buzz'],
            [32, 'Sandstorm'],
            [38, 'Earth Power'],
            [44, 'Earthquake'],
            [50, 'Uproar'],
            [56, 'Dragon Rush'],
            [62, 'Boomburst'],
        ],
    ],

    ['330',
        [
            [0, 'Dragon Claw'],
            [1, 'Dragon Claw'],
            [1, 'Dragon Breath'],
            [1, 'Dragon Dance'],
            [1, 'Feint'],
            [1, 'Laser Focus'],
            [1, 'Bulldoze'],
            [1, 'Dig'],
            [1, 'Crunch'],
            [1, 'Superpower'],
            [1, 'Fissure'],
            [1, 'Sand Attack'],
            [1, 'Astonish'],
            [1, 'Supersonic'],
            [1, 'Bite'],
            [12, 'Mud Slap'],
            [16, 'Sand Tomb'],
            [20, 'Dragon Tail'],
            [24, 'Screech'],
            [28, 'Bug Buzz'],
            [32, 'Sandstorm'],
            [38, 'Earth Power'],
            [44, 'Earthquake'],
            [52, 'Uproar'],
            [60, 'Dragon Rush'],
            [68, 'Boomburst'],
        ],
    ],

    ['331',
        [
            [1, 'Poison Sting'],
            [1, 'Leer'],
            [4, 'Absorb'],
            [7, 'Growth'],
            [10, 'Leech Seed'],
            [13, 'Sand Attack'],
            [16, 'Needle Arm'],
            [19, 'Feint Attack'],
            [22, 'Ingrain'],
            [26, 'Payback'],
            [30, 'Spikes'],
            [34, 'Sucker Punch'],
            [38, 'Pin Missile'],
            [42, 'Energy Ball'],
            [46, 'Cotton Spore'],
            [50, 'Sandstorm'],
            [54, 'Destiny Bond'],
        ],
    ],

    ['332',
        [
            [0, 'Spiky Shield'],
            [1, 'Spiky Shield'],
            [1, 'Destiny Bond'],
            [1, 'Revenge'],
            [1, 'Poison Sting'],
            [1, 'Leer'],
            [1, 'Absorb'],
            [1, 'Growth'],
            [4, 'Absorb'],
            [7, 'Growth'],
            [10, 'Leech Seed'],
            [13, 'Sand Attack'],
            [16, 'Needle Arm'],
            [19, 'Feint Attack'],
            [22, 'Ingrain'],
            [26, 'Payback'],
            [30, 'Spikes'],
            [35, 'Sucker Punch'],
            [38, 'Pin Missile'],
            [44, 'Energy Ball'],
            [49, 'Cotton Spore'],
            [54, 'Sandstorm'],
            [59, 'Destiny Bond'],
        ],
    ],

    ['333',
        [
            [1, 'Peck'],
            [1, 'Growl'],
            [4, 'Disarming Voice'],
            [8, 'Mist'],
            [12, 'Fury Attack'],
            [16, 'Round'],
            [20, 'Dragon Breath'],
            [24, 'Safeguard'],
            [28, 'Sing'],
            [32, 'Cotton Guard'],
            [36, 'Take Down'],
            [40, 'Moonblast'],
            [44, 'Perish Song'],
        ],
    ],

    ['334',
        [
            [0, 'Dragon Pulse'],
            [1, 'Dragon Pulse'],
            [1, 'Pluck'],
            [1, 'Peck'],
            [1, 'Growl'],
            [1, 'Disarming Voice'],
            [1, 'Mist'],
            [12, 'Fury Attack'],
            [16, 'Round'],
            [20, 'Dragon Breath'],
            [24, 'Safeguard'],
            [28, 'Sing'],
            [32, 'Cotton Guard'],
            [38, 'Take Down'],
            [44, 'Moonblast'],
            [50, 'Perish Song'],
            [56, 'Sky Attack'],
        ],
    ],

    ['335',
        [
            [1, 'Scratch'],
            [1, 'Leer'],
            [5, 'Quick Attack'],
            [8, 'Fury Cutter'],
            [12, 'Pursuit'],
            [15, 'Hone Claws'],
            [19, 'Slash'],
            [22, 'Revenge'],
            [26, 'Crush Claw'],
            [29, 'False Swipe'],
            [33, 'Embargo'],
            [36, 'Detect'],
            [40, 'X Scissor'],
            [43, 'Taunt'],
            [47, 'Swords Dance'],
            [50, 'Close Combat'],
        ],
    ],

    ['336',
        [
            [1, 'Wrap'],
            [1, 'Swagger'],
            [4, 'Bite'],
            [6, 'Lick'],
            [9, 'Poison Tail'],
            [11, 'Feint'],
            [14, 'Screech'],
            [16, 'Venoshock'],
            [19, 'Glare'],
            [21, 'Poison Fang'],
            [24, 'Venom Drench'],
            [26, 'Night Slash'],
            [29, 'Gastro Acid'],
            [31, 'Poison Jab'],
            [34, 'Haze'],
            [36, 'Swords Dance'],
            [39, 'Crunch'],
            [41, 'Belch'],
            [44, 'Coil'],
            [46, 'Wring Out'],
        ],
    ],

    ['337',
        [
            [1, 'Moonblast'],
            [1, 'Moonlight'],
            [1, 'Tackle'],
            [1, 'Harden'],
            [1, 'Confusion'],
            [1, 'Rock Throw'],
            [5, 'Hypnosis'],
            [10, 'Rock Polish'],
            [15, 'Rock Slide'],
            [20, 'Psyshock'],
            [25, 'Cosmic Power'],
            [30, 'Psychic'],
            [35, 'Stone Edge'],
            [40, 'Future Sight'],
            [45, 'Magic Room'],
            [50, 'Explosion'],
        ],
    ],

    ['338',
        [
            [1, 'Flare Blitz'],
            [1, 'Morning Sun'],
            [1, 'Tackle'],
            [1, 'Harden'],
            [1, 'Confusion'],
            [1, 'Rock Throw'],
            [5, 'Hypnosis'],
            [10, 'Rock Polish'],
            [15, 'Rock Slide'],
            [20, 'Zen Headbutt'],
            [25, 'Cosmic Power'],
            [30, 'Psychic'],
            [35, 'Stone Edge'],
            [40, 'Solar Beam'],
            [45, 'Wonder Room'],
            [50, 'Explosion'],
        ],
    ],

    ['339',
        [
            [1, 'Mud Slap'],
            [1, 'Water Gun'],
            [6, 'Rest'],
            [6, 'Snore'],
            [12, 'Water Pulse'],
            [18, 'Amnesia'],
            [24, 'Aqua Tail'],
            [31, 'Muddy Water'],
            [36, 'Earthquake'],
            [42, 'Future Sight'],
            [48, 'Fissure'],
        ],
    ],

    ['340',
        [
            [0, 'Thrash'],
            [1, 'Thrash'],
            [1, 'Belch'],
            [1, 'Zen Headbutt'],
            [1, 'Tickle'],
            [1, 'Mud Slap'],
            [1, 'Water Gun'],
            [1, 'Rest'],
            [1, 'Snore'],
            [12, 'Water Pulse'],
            [18, 'Amnesia'],
            [24, 'Aqua Tail'],
            [33, 'Muddy Water'],
            [40, 'Earthquake'],
            [48, 'Future Sight'],
            [56, 'Fissure'],
        ],
    ],

    ['341',
        [
            [1, 'Water Gun'],
            [1, 'Harden'],
            [4, 'Leer'],
            [8, 'Taunt'],
            [12, 'Bubble Beam'],
            [16, 'Knock Off'],
            [20, 'Double Hit'],
            [24, 'Protect'],
            [28, 'Night Slash'],
            [32, 'Razor Shell'],
            [36, 'Swords Dance'],
            [40, 'Crunch'],
            [44, 'Crabhammer'],
            [48, 'Endeavor'],
            [52, 'Guillotine'],
        ],
    ],

    ['342',
        [
            [0, 'Swift'],
            [1, 'Swift'],
            [1, 'Water Gun'],
            [1, 'Harden'],
            [1, 'Leer'],
            [1, 'Taunt'],
            [12, 'Bubble Beam'],
            [16, 'Knock Off'],
            [20, 'Double Hit'],
            [24, 'Protect'],
            [28, 'Night Slash'],
            [34, 'Razor Shell'],
            [40, 'Swords Dance'],
            [46, 'Crunch'],
            [52, 'Crabhammer'],
            [58, 'Endeavor'],
            [64, 'Guillotine'],
        ],
    ],

    ['343',
        [
            [1, 'Harden'],
            [1, 'Mud Slap'],
            [3, 'Rapid Spin'],
            [6, 'Confusion'],
            [9, 'Rock Tomb'],
            [12, 'Power Trick'],
            [15, 'Psybeam'],
            [18, 'Ancient Power'],
            [21, 'Imprison'],
            [24, 'Cosmic Power'],
            [27, 'Extrasensory'],
            [30, 'Earth Power'],
            [33, 'Self Destruct'],
            [36, 'Guard Split'],
            [36, 'Power Split'],
            [39, 'Sandstorm'],
            [42, 'Explosion'],
        ],
    ],

    ['344',
        [
            [0, 'Hyper Beam'],
            [1, 'Hyper Beam'],
            [1, 'Teleport'],
            [1, 'Harden'],
            [1, 'Mud Slap'],
            [1, 'Rapid Spin'],
            [1, 'Confusion'],
            [9, 'Rock Tomb'],
            [12, 'Power Trick'],
            [15, 'Psybeam'],
            [18, 'Ancient Power'],
            [21, 'Imprison'],
            [24, 'Cosmic Power'],
            [27, 'Extrasensory'],
            [30, 'Earth Power'],
            [33, 'Self Destruct'],
            [38, 'Guard Split'],
            [38, 'Power Split'],
            [43, 'Sandstorm'],
            [48, 'Explosion'],
        ],
    ],

    ['345',
        [
            [1, 'Wrap'],
            [1, 'Astonish'],
            [4, 'Acid'],
            [8, 'Confuse Ray'],
            [12, 'Ingrain'],
            [16, 'Ancient Power'],
            [20, 'Mega Drain'],
            [24, 'Brine'],
            [28, 'Amnesia'],
            [32, 'Gastro Acid'],
            [36, 'Giga Drain'],
            [41, 'Stockpile'],
            [41, 'Spit Up'],
            [41, 'Swallow'],
            [44, 'Energy Ball'],
        ],
    ],

    ['346',
        [
            [1, 'Leech Seed'],
            [1, 'Wrap'],
            [1, 'Astonish'],
            [1, 'Acid'],
            [1, 'Confuse Ray'],
            [12, 'Ingrain'],
            [16, 'Ancient Power'],
            [20, 'Mega Drain'],
            [24, 'Brine'],
            [28, 'Amnesia'],
            [32, 'Gastro Acid'],
            [36, 'Giga Drain'],
            [43, 'Stockpile'],
            [43, 'Spit Up'],
            [43, 'Swallow'],
            [48, 'Energy Ball'],
        ],
    ],

    ['347',
        [
            [1, 'Fury Cutter'],
            [1, 'Harden'],
            [4, 'Water Gun'],
            [8, 'Smack Down'],
            [12, 'Metal Claw'],
            [16, 'Ancient Power'],
            [20, 'Bug Bite'],
            [24, 'Brine'],
            [28, 'Slash'],
            [32, 'Crush Claw'],
            [36, 'Rock Blast'],
            [41, 'Protect'],
            [44, 'X Scissor'],
        ],
    ],

    ['348',
        [
            [1, 'Fury Cutter'],
            [1, 'Harden'],
            [1, 'Water Gun'],
            [1, 'Smack Down'],
            [12, 'Metal Claw'],
            [16, 'Ancient Power'],
            [20, 'Bug Bite'],
            [24, 'Brine'],
            [28, 'Slash'],
            [32, 'Crush Claw'],
            [36, 'Rock Blast'],
            [43, 'Protect'],
            [48, 'X Scissor'],
        ],
    ],

    ['349',
        [
            [1, 'Splash'],
            [15, 'Tackle'],
            [25, 'Flail'],
        ],
    ],

    ['350',
        [
            [0, 'Water Pulse'],
            [1, 'Water Pulse'],
            [1, 'Flail'],
            [1, 'Splash'],
            [1, 'Tackle'],
            [1, 'Wrap'],
            [1, 'Water Gun'],
            [4, 'Disarming Voice'],
            [8, 'Twister'],
            [12, 'Aqua Ring'],
            [16, 'Attract'],
            [20, 'Life Dew'],
            [24, 'Dragon Tail'],
            [28, 'Recover'],
            [32, 'Aqua Tail'],
            [36, 'Safeguard'],
            [40, 'Surf'],
            [44, 'Rain Dance'],
            [48, 'Coil'],
            [52, 'Hydro Pump'],
        ],
    ],

    ['351',
        [
            [1, 'Tackle'],
            [10, 'Water Gun'],
            [10, 'Ember'],
            [10, 'Powder Snow'],
            [15, 'Headbutt'],
            [20, 'Rain Dance'],
            [20, 'Sunny Day'],
            [20, 'Hail'],
            [25, 'Weather Ball'],
            [35, 'Hydro Pump'],
            [35, 'Fire Blast'],
            [35, 'Blizzard'],
            [45, 'Hurricane'],
        ],
    ],

    ['352',
        [
            [1, 'Thief'],
            [1, 'Tail Whip'],
            [1, 'Astonish'],
            [1, 'Lick'],
            [1, 'Scratch'],
            [4, 'Bind'],
            [7, 'Shadow Sneak'],
            [10, 'Feint'],
            [13, 'Fury Swipes'],
            [16, 'Feint Attack'],
            [18, 'Psybeam'],
            [21, 'Ancient Power'],
            [25, 'Slash'],
            [30, 'Camouflage'],
            [33, 'Shadow Claw'],
            [38, 'Screech'],
            [42, 'Substitute'],
            [46, 'Sucker Punch'],
            [50, 'Synchronoise'],
        ],
    ],

    ['353',
        [
            [1, 'Knock Off'],
            [4, 'Screech'],
            [7, 'Night Shade'],
            [10, 'Spite'],
            [13, 'Shadow Sneak'],
            [16, 'Will O Wisp'],
            [19, 'Feint Attack'],
            [22, 'Hex'],
            [26, 'Curse'],
            [30, 'Shadow Ball'],
            [34, 'Embargo'],
            [38, 'Sucker Punch'],
            [42, 'Snatch'],
            [46, 'Grudge'],
            [50, 'Trick'],
            [54, 'Phantom Force'],
        ],
    ],

    ['354',
        [
            [1, 'Phantom Force'],
            [1, 'Knock Off'],
            [1, 'Screech'],
            [1, 'Night Shade'],
            [1, 'Spite'],
            [4, 'Screech'],
            [7, 'Night Shade'],
            [10, 'Spite'],
            [13, 'Shadow Sneak'],
            [16, 'Will O Wisp'],
            [19, 'Feint Attack'],
            [22, 'Hex'],
            [26, 'Curse'],
            [30, 'Shadow Ball'],
            [34, 'Embargo'],
            [40, 'Sucker Punch'],
            [46, 'Snatch'],
            [52, 'Grudge'],
            [58, 'Trick'],
            [64, 'Phantom Force'],
        ],
    ],

    ['355',
        [
            [1, 'Astonish'],
            [1, 'Leer'],
            [4, 'Disable'],
            [8, 'Shadow Sneak'],
            [12, 'Confuse Ray'],
            [16, 'Night Shade'],
            [20, 'Payback'],
            [24, 'Will O Wisp'],
            [28, 'Mean Look'],
            [32, 'Hex'],
            [36, 'Curse'],
            [40, 'Shadow Ball'],
            [44, 'Future Sight'],
        ],
    ],

    ['356',
        [
            [0, 'Shadow Punch'],
            [1, 'Shadow Punch'],
            [1, 'Fire Punch'],
            [1, 'Ice Punch'],
            [1, 'Thunder Punch'],
            [1, 'Gravity'],
            [1, 'Bind'],
            [1, 'Astonish'],
            [1, 'Leer'],
            [1, 'Disable'],
            [1, 'Shadow Sneak'],
            [12, 'Confuse Ray'],
            [16, 'Night Shade'],
            [20, 'Payback'],
            [24, 'Will O Wisp'],
            [28, 'Mean Look'],
            [32, 'Hex'],
            [36, 'Curse'],
            [42, 'Shadow Ball'],
            [48, 'Future Sight'],
        ],
    ],

    ['357',
        [
            [1, 'Leaf Storm'],
            [1, 'Leer'],
            [1, 'Gust'],
            [1, 'Growth'],
            [1, 'Razor Leaf'],
            [6, 'Sweet Scent'],
            [10, 'Stomp'],
            [16, 'Magical Leaf'],
            [21, 'Whirlwind'],
            [26, 'Leaf Tornado'],
            [30, 'Natural Gift'],
            [36, 'Air Slash'],
            [41, 'Body Slam'],
            [46, 'Bestow'],
            [50, 'Synthesis'],
            [56, 'Solar Beam'],
            [61, 'Leaf Storm'],
        ],
    ],

    ['358',
        [
            [1, 'Healing Wish'],
            [1, 'Synchronoise'],
            [1, 'Wrap'],
            [1, 'Growl'],
            [1, 'Astonish'],
            [1, 'Confusion'],
            [4, 'Growl'],
            [7, 'Astonish'],
            [10, 'Confusion'],
            [13, 'Yawn'],
            [16, 'Psywave'],
            [19, 'Take Down'],
            [22, 'Extrasensory'],
            [27, 'Heal Bell'],
            [32, 'Uproar'],
            [37, 'Safeguard'],
            [42, 'Double Edge'],
            [47, 'Heal Pulse'],
            [52, 'Synchronoise'],
            [57, 'Healing Wish'],
        ],
    ],

    ['359',
        [
            [1, 'Quick Attack'],
            [1, 'Leer'],
            [5, 'Double Team'],
            [10, 'Knock Off'],
            [15, 'Detect'],
            [20, 'Taunt'],
            [25, 'Slash'],
            [30, 'Night Slash'],
            [35, 'Focus Energy'],
            [40, 'Sucker Punch'],
            [45, 'Swords Dance'],
            [50, 'Future Sight'],
            [55, 'Perish Song'],
        ],
    ],

    ['360',
        [
            [1, 'Counter'],
            [1, 'Mirror Coat'],
            [1, 'Safeguard'],
            [1, 'Destiny Bond'],
            [1, 'Splash'],
            [1, 'Charm'],
            [1, 'Encore'],
            [1, 'Amnesia'],
        ],
    ],

    ['361',
        [
            [1, 'Powder Snow'],
            [1, 'Astonish'],
            [5, 'Leer'],
            [10, 'Double Team'],
            [15, 'Ice Shard'],
            [20, 'Protect'],
            [25, 'Icy Wind'],
            [30, 'Frost Breath'],
            [35, 'Bite'],
            [40, 'Ice Fang'],
            [45, 'Hail'],
            [50, 'Headbutt'],
            [55, 'Crunch'],
            [60, 'Blizzard'],
        ],
    ],

    ['362',
        [
            [0, 'Freeze Dry'],
            [1, 'Freeze Dry'],
            [1, 'Sheer Cold'],
            [1, 'Powder Snow'],
            [1, 'Astonish'],
            [1, 'Leer'],
            [1, 'Double Team'],
            [15, 'Ice Shard'],
            [20, 'Protect'],
            [25, 'Icy Wind'],
            [30, 'Frost Breath'],
            [35, 'Bite'],
            [40, 'Ice Fang'],
            [47, 'Hail'],
            [54, 'Headbutt'],
            [61, 'Crunch'],
            [68, 'Blizzard'],
        ],
    ],

    ['363',
        [
            [1, 'Rollout'],
            [1, 'Defense Curl'],
            [4, 'Growl'],
            [8, 'Water Gun'],
            [12, 'Powder Snow'],
            [16, 'Rest'],
            [20, 'Snore'],
            [24, 'Brine'],
            [28, 'Aurora Beam'],
            [33, 'Encore'],
            [36, 'Body Slam'],
            [40, 'Surf'],
            [44, 'Blizzard'],
            [48, 'Hail'],
            [52, 'Sheer Cold'],
        ],
    ],

    ['364',
        [
            [0, 'Swagger'],
            [1, 'Swagger'],
            [1, 'Rollout'],
            [1, 'Defense Curl'],
            [1, 'Growl'],
            [1, 'Water Gun'],
            [12, 'Powder Snow'],
            [16, 'Rest'],
            [20, 'Snore'],
            [24, 'Brine'],
            [28, 'Aurora Beam'],
            [35, 'Encore'],
            [40, 'Body Slam'],
            [46, 'Surf'],
            [52, 'Blizzard'],
            [58, 'Hail'],
            [64, 'Sheer Cold'],
        ],
    ],

    ['365',
        [
            [1, 'Swagger'],
            [1, 'Crunch'],
            [1, 'Ice Fang'],
            [1, 'Rollout'],
            [1, 'Defense Curl'],
            [1, 'Growl'],
            [1, 'Water Gun'],
            [12, 'Powder Snow'],
            [16, 'Rest'],
            [20, 'Snore'],
            [24, 'Brine'],
            [28, 'Aurora Beam'],
            [35, 'Encore'],
            [40, 'Body Slam'],
            [48, 'Surf'],
            [56, 'Blizzard'],
            [64, 'Hail'],
            [72, 'Sheer Cold'],
        ],
    ],

    ['366',
        [
            [1, 'Clamp'],
            [1, 'Water Gun'],
            [1, 'Whirlpool'],
            [1, 'Iron Defense'],
            [50, 'Shell Smash'],
        ],
    ],

    ['367',
        [
            [1, 'Whirlpool'],
            [1, 'Bite'],
            [5, 'Screech'],
            [9, 'Scary Face'],
            [11, 'Feint Attack'],
            [14, 'Water Pulse'],
            [16, 'Ice Fang'],
            [19, 'Brine'],
            [23, 'Sucker Punch'],
            [26, 'Dive'],
            [29, 'Baton Pass'],
            [34, 'Crunch'],
            [39, 'Aqua Tail'],
            [45, 'Coil'],
            [50, 'Hydro Pump'],
        ],
    ],

    ['368',
        [
            [1, 'Whirlpool'],
            [1, 'Confusion'],
            [5, 'Water Sport'],
            [9, 'Agility'],
            [11, 'Draining Kiss'],
            [14, 'Water Pulse'],
            [16, 'Amnesia'],
            [19, 'Aqua Ring'],
            [23, 'Captivate'],
            [26, 'Dive'],
            [29, 'Baton Pass'],
            [34, 'Psychic'],
            [39, 'Aqua Tail'],
            [45, 'Coil'],
            [50, 'Hydro Pump'],
        ],
    ],

    ['369',
        [
            [1, 'Tackle'],
            [1, 'Harden'],
            [5, 'Water Gun'],
            [10, 'Ancient Power'],
            [15, 'Yawn'],
            [20, 'Dive'],
            [25, 'Take Down'],
            [30, 'Aqua Tail'],
            [35, 'Rest'],
            [40, 'Flail'],
            [45, 'Hydro Pump'],
            [50, 'Double Edge'],
            [55, 'Head Smash'],
        ],
    ],

    ['370',
        [
            [1, 'Tackle'],
            [1, 'Charm'],
            [4, 'Water Gun'],
            [7, 'Agility'],
            [9, 'Draining Kiss'],
            [13, 'Lucky Chant'],
            [17, 'Water Pulse'],
            [20, 'Attract'],
            [22, 'Heart Stamp'],
            [26, 'Flail'],
            [31, 'Sweet Kiss'],
            [34, 'Take Down'],
            [37, 'Captivate'],
            [40, 'Aqua Ring'],
            [42, 'Soak'],
            [46, 'Hydro Pump'],
            [49, 'Safeguard'],
        ],
    ],

    ['371',
        [
            [1, 'Ember'],
            [1, 'Leer'],
            [5, 'Bite'],
            [10, 'Dragon Breath'],
            [15, 'Headbutt'],
            [20, 'Scary Face'],
            [25, 'Crunch'],
            [31, 'Dragon Claw'],
            [35, 'Zen Headbutt'],
            [40, 'Focus Energy'],
            [45, 'Flamethrower'],
            [50, 'Outrage'],
            [55, 'Double Edge'],
        ],
    ],

    ['372',
        [
            [0, 'Protect'],
            [1, 'Protect'],
            [1, 'Ember'],
            [1, 'Leer'],
            [1, 'Bite'],
            [1, 'Dragon Breath'],
            [15, 'Headbutt'],
            [20, 'Scary Face'],
            [25, 'Crunch'],
            [33, 'Dragon Claw'],
            [39, 'Zen Headbutt'],
            [46, 'Focus Energy'],
            [53, 'Flamethrower'],
            [60, 'Outrage'],
            [67, 'Double Edge'],
        ],
    ],

    ['373',
        [
            [0, 'Fly'],
            [1, 'Fly'],
            [1, 'Protect'],
            [1, 'Dragon Tail'],
            [1, 'Ember'],
            [1, 'Leer'],
            [1, 'Bite'],
            [1, 'Dragon Breath'],
            [15, 'Headbutt'],
            [20, 'Scary Face'],
            [25, 'Crunch'],
            [33, 'Dragon Claw'],
            [39, 'Zen Headbutt'],
            [46, 'Focus Energy'],
            [55, 'Flamethrower'],
            [64, 'Outrage'],
            [73, 'Double Edge'],
        ],
    ],

    ['374',
        [
            [1, 'Tackle'],
        ],
    ],

    ['375',
        [
            [0, 'Confusion'],
            [0, 'Metal Claw'],
            [1, 'Confusion'],
            [1, 'Metal Claw'],
            [1, 'Bullet Punch'],
            [1, 'Tackle'],
            [6, 'Zen Headbutt'],
            [12, 'Magnet Rise'],
            [18, 'Flash Cannon'],
            [26, 'Take Down'],
            [34, 'Psychic'],
            [42, 'Scary Face'],
            [50, 'Meteor Mash'],
            [58, 'Iron Defense'],
            [66, 'Agility'],
            [74, 'Hyper Beam'],
        ],
    ],

    ['376',
        [
            [0, 'Hammer Arm'],
            [1, 'Hammer Arm'],
            [1, 'Confusion'],
            [1, 'Metal Claw'],
            [1, 'Bullet Punch'],
            [1, 'Tackle'],
            [6, 'Zen Headbutt'],
            [12, 'Magnet Rise'],
            [16, 'Flash Cannon'],
            [26, 'Take Down'],
            [34, 'Psychic'],
            [42, 'Scary Face'],
            [52, 'Meteor Mash'],
            [62, 'Iron Defense'],
            [72, 'Agility'],
            [82, 'Hyper Beam'],
        ],
    ],

    ['377',
        [
            [1, 'Charge Beam'],
            [1, 'Rock Throw'],
            [6, 'Bulldoze'],
            [12, 'Ancient Power'],
            [18, 'Stomp'],
            [24, 'Rock Slide'],
            [30, 'Curse'],
            [36, 'Iron Defense'],
            [42, 'Hammer Arm'],
            [48, 'Stone Edge'],
            [54, 'Superpower'],
            [60, 'Lock On'],
            [66, 'Zap Cannon'],
            [72, 'Hyper Beam'],
            [78, 'Explosion'],
        ],
    ],

    ['378',
        [
            [1, 'Charge Beam'],
            [1, 'Icy Wind'],
            [6, 'Bulldoze'],
            [12, 'Ancient Power'],
            [18, 'Stomp'],
            [24, 'Ice Beam'],
            [30, 'Curse'],
            [36, 'Amnesia'],
            [42, 'Hammer Arm'],
            [48, 'Blizzard'],
            [54, 'Superpower'],
            [60, 'Lock On'],
            [66, 'Zap Cannon'],
            [72, 'Hyper Beam'],
            [78, 'Explosion'],
        ],
    ],

    ['379',
        [
            [1, 'Charge Beam'],
            [1, 'Metal Claw'],
            [6, 'Bulldoze'],
            [12, 'Ancient Power'],
            [18, 'Stomp'],
            [24, 'Iron Head'],
            [24, 'Flash Cannon'],
            [30, 'Curse'],
            [36, 'Iron Defense'],
            [36, 'Amnesia'],
            [42, 'Hammer Arm'],
            [48, 'Heavy Slam'],
            [54, 'Superpower'],
            [60, 'Lock On'],
            [66, 'Zap Cannon'],
            [72, 'Hyper Beam'],
            [78, 'Explosion'],
        ],
    ],

    ['380',
        [
            [1, 'Stored Power'],
            [1, 'Charm'],
            [5, 'Helping Hand'],
            [10, 'Recover'],
            [15, 'Confusion'],
            [20, 'Tailwind'],
            [25, 'Dragon Breath'],
            [30, 'Wish'],
            [35, 'Mist Ball'],
            [40, 'Zen Headbutt'],
            [45, 'Dragon Pulse'],
            [50, 'Heal Pulse'],
            [55, 'Reflect Type'],
            [60, 'Psychic'],
            [65, 'Guard Split'],
            [70, 'Healing Wish'],
            [75, 'Psycho Shift'],
        ],
    ],

    ['381',
        [
            [1, 'Stored Power'],
            [1, 'Dragon Dance'],
            [5, 'Helping Hand'],
            [10, 'Recover'],
            [15, 'Confusion'],
            [20, 'Tailwind'],
            [25, 'Dragon Breath'],
            [30, 'Ally Switch'],
            [35, 'Luster Purge'],
            [40, 'Zen Headbutt'],
            [45, 'Dragon Pulse'],
            [50, 'Heal Pulse'],
            [55, 'Simple Beam'],
            [60, 'Psychic'],
            [65, 'Power Split'],
            [70, 'Memento'],
            [75, 'Psycho Shift'],
        ],
    ],

    ['382',
        [
            [1, 'Water Pulse'],
            [1, 'Ancient Power'],
            [1, 'Body Slam'],
            [1, 'Scary Face'],
            [9, 'Aqua Tail'],
            [18, 'Calm Mind'],
            [27, 'Muddy Water'],
            [36, 'Ice Beam'],
            [45, 'Sheer Cold'],
            [54, 'Aqua Ring'],
            [63, 'Origin Pulse'],
            [72, 'Hydro Pump'],
            [81, 'Double Edge'],
            [90, 'Water Spout'],
        ],
    ],

    ['383',
        [
            [1, 'Mud Shot'],
            [1, 'Ancient Power'],
            [1, 'Lava Plume'],
            [1, 'Scary Face'],
            [9, 'Earth Power'],
            [18, 'Bulk Up'],
            [27, 'Earthquake'],
            [36, 'Hammer Arm'],
            [45, 'Fissure'],
            [54, 'Rest'],
            [63, 'Precipice Blades'],
            [72, 'Fire Blast'],
            [81, 'Solar Beam'],
            [90, 'Eruption'],
        ],
    ],

    ['384',
        [
            [1, 'Dragon Ascent'],
            [1, 'Twister'],
            [1, 'Ancient Power'],
            [1, 'Air Slash'],
            [1, 'Scary Face'],
            [9, 'Crunch'],
            [18, 'Dragon Dance'],
            [27, 'Extreme Speed'],
            [36, 'Dragon Pulse'],
            [45, 'Hyper Voice'],
            [54, 'Rest'],
            [63, 'Fly'],
            [72, 'Hurricane'],
            [81, 'Outrage'],
            [90, 'Hyper Beam'],
        ],
    ],

    ['385',
        [
            [1, 'Confusion'],
            [1, 'Wish'],
            [7, 'Swift'],
            [14, 'Helping Hand'],
            [21, 'Life Dew'],
            [28, 'Zen Headbutt'],
            [35, 'Gravity'],
            [42, 'Psychic'],
            [49, 'Meteor Mash'],
            [56, 'Healing Wish'],
            [63, 'Rest'],
            [70, 'Future Sight'],
            [77, 'Double Edge'],
            [84, 'Cosmic Power'],
            [91, 'Last Resort'],
            [98, 'Doom Desire'],
        ],
    ],

    ['386',
        [
            [1, 'Leer'],
            [1, 'Wrap'],
            [7, 'Night Shade'],
            [13, 'Teleport'],
            [19, 'Knock Off'],
            [25, 'Pursuit'],
            [31, 'Psychic'],
            [37, 'Snatch'],
            [43, 'Psycho Shift'],
            [49, 'Zen Headbutt'],
            [55, 'Cosmic Power'],
            [61, 'Recover'],
            [67, 'Psycho Boost'],
            [73, 'Hyper Beam'],
        ], //Normal Forme
        [
            [1, 'Leer'],
            [1, 'Wrap'],
            [7, 'Night Shade'],
            [13, 'Teleport'],
            [19, 'Taunt'],
            [25, 'Pursuit'],
            [31, 'Psychic'],
            [37, 'Superpower'],
            [43, 'Psycho Shift'],
            [49, 'Zen Headbutt'],
            [55, 'Cosmic Power'],
            [61, 'Zap Cannon'],
            [67, 'Psycho Boost'],
            [73, 'Hyper Beam'],
        ], //Attack Forme
        [
            [1, 'Leer'],
            [1, 'Wrap'],
            [7, 'Night Shade'],
            [13, 'Teleport'],
            [19, 'Knock Off'],
            [25, 'Spikes'],
            [31, 'Psychic'],
            [37, 'Snatch'],
            [43, 'Psycho Shift'],
            [49, 'Zen Headbutt'],
            [55, 'Iron Defense'],
            [55, 'Amnesia'],
            [61, 'Recover'],
            [67, 'Psycho Boost'],
            [73, 'Counter'],
            [73, 'Mirror Coat'],
        ], //Defense Forme
        [
            [1, 'Leer'],
            [1, 'Wrap'],
            [7, 'Night Shade'],
            [13, 'Double Team'],
            [19, 'Knock Off'],
            [25, 'Pursuit'],
            [31, 'Psychic'],
            [37, 'Swift'],
            [43, 'Psycho Shift'],
            [49, 'Zen Headbutt'],
            [55, 'Agility'],
            [61, 'Recover'],
            [67, 'Psycho Boost'],
            [73, 'Extreme Speed'],
        ], //Speed Forme
    ], //Deoxys

    ['387',
        [
            [1, 'Tackle'],
            [5, 'Withdraw'],
            [9, 'Absorb'],
            [13, 'Razor Leaf'],
            [17, 'Curse'],
            [21, 'Bite'],
            [25, 'Mega Drain'],
            [29, 'Leech Seed'],
            [33, 'Synthesis'],
            [37, 'Crunch'],
            [41, 'Giga Drain'],
            [45, 'Leaf Storm'],
        ],
    ],

    ['388',
        [
            [1, 'Tackle'],
            [1, 'Withdraw'],
            [1, 'Absorb'],
            [5, 'Withdraw'],
            [9, 'Absorb'],
            [13, 'Razor Leaf'],
            [17, 'Curse'],
            [22, 'Bite'],
            [27, 'Mega Drain'],
            [32, 'Leech Seed'],
            [37, 'Synthesis'],
            [42, 'Crunch'],
            [47, 'Giga Drain'],
            [52, 'Leaf Storm'],
        ],
    ],

    ['389',
        [
            [0, 'Earthquake'],
            [1, 'Earthquake'],
            [1, 'Wood Hammer'],
            [1, 'Tackle'],
            [1, 'Withdraw'],
            [1, 'Absorb'],
            [1, 'Razor Leaf'],
            [5, 'Withdraw'],
            [9, 'Absorb'],
            [13, 'Razor Leaf'],
            [17, 'Curse'],
            [22, 'Bite'],
            [27, 'Mega Drain'],
            [33, 'Leech Seed'],
            [39, 'Synthesis'],
            [45, 'Crunch'],
            [51, 'Giga Drain'],
            [57, 'Leaf Storm'],
        ],
    ],

    ['390',
        [
            [1, 'Scratch'],
            [1, 'Leer'],
            [7, 'Ember'],
            [9, 'Taunt'],
            [15, 'Fury Swipes'],
            [17, 'Flame Wheel'],
            [23, 'Nasty Plot'],
            [25, 'Torment'],
            [31, 'Facade'],
            [33, 'Fire Spin'],
            [39, 'Acrobatics'],
            [41, 'Slack Off'],
            [47, 'Flamethrower'],
        ],
    ],

    ['391',
        [
            [0, 'Mach Punch'],
            [1, 'Mach Punch'],
            [1, 'Scratch'],
            [1, 'Leer'],
            [1, 'Ember'],
            [7, 'Ember'],
            [9, 'Taunt'],
            [16, 'Fury Swipes'],
            [19, 'Flame Wheel'],
            [26, 'Feint'],
            [29, 'Torment'],
            [36, 'Close Combat'],
            [39, 'Fire Spin'],
            [46, 'Acrobatics'],
            [49, 'Slack Off'],
            [56, 'Flare Blitz'],
        ],
    ],

    ['392',
        [
            [0, 'Close Combat'],
            [1, 'Close Combat'],
            [1, 'Mach Punch'],
            [1, 'Flare Blitz'],
            [1, 'Scratch'],
            [1, 'Leer'],
            [1, 'Ember'],
            [1, 'Taunt'],
            [7, 'Ember'],
            [9, 'Taunt'],
            [16, 'Fury Swipes'],
            [19, 'Flame Wheel'],
            [26, 'Feint'],
            [29, 'Punishment'],
            [42, 'Fire Spin'],
            [52, 'Acrobatics'],
            [58, 'Calm Mind'],
            [68, 'Flare Blitz'],
        ],
    ],

    ['393',
        [
            [1, 'Pound'],
            [4, 'Growl'],
            [8, 'Bubble'],
            [11, 'Water Sport'],
            [15, 'Peck'],
            [18, 'Bubble Beam'],
            [22, 'Bide'],
            [25, 'Fury Attack'],
            [29, 'Brine'],
            [32, 'Whirlpool'],
            [36, 'Mist'],
            [39, 'Drill Peck'],
            [43, 'Hydro Pump'],
        ],
    ],

    ['394',
        [
            [0, 'Metal Claw'],
            [1, 'Metal Claw'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Bubble'],
            [4, 'Growl'],
            [8, 'Bubble'],
            [11, 'Water Sport'],
            [15, 'Peck'],
            [19, 'Bubble Beam'],
            [24, 'Bide'],
            [28, 'Fury Attack'],
            [33, 'Brine'],
            [37, 'Whirlpool'],
            [42, 'Mist'],
            [46, 'Drill Peck'],
            [50, 'Hydro Pump'],
        ],
    ],

    ['395',
        [
            [0, 'Aqua Jet'],
            [1, 'Aqua Jet'],
            [1, 'Metal Claw'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Bubble'],
            [4, 'Growl'],
            [8, 'Bubble'],
            [11, 'Swords Dance'],
            [15, 'Peck'],
            [19, 'Bubble Beam'],
            [24, 'Swagger'],
            [28, 'Fury Attack'],
            [33, 'Brine'],
            [39, 'Whirlpool'],
            [46, 'Mist'],
            [52, 'Drill Peck'],
            [59, 'Hydro Pump'],
        ],
    ],

    ['396',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [5, 'Quick Attack'],
            [9, 'Wing Attack'],
            [13, 'Double Team'],
            [17, 'Endeavor'],
            [21, 'Whirlwind'],
            [25, 'Aerial Ace'],
            [29, 'Take Down'],
            [33, 'Agility'],
            [37, 'Brave Bird'],
            [41, 'Final Gambit'],
        ],
    ],

    ['397',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Quick Attack'],
            [5, 'Quick Attack'],
            [9, 'Wing Attack'],
            [13, 'Double Team'],
            [18, 'Endeavor'],
            [23, 'Whirlwind'],
            [28, 'Aerial Ace'],
            [33, 'Take Down'],
            [38, 'Agility'],
            [43, 'Brave Bird'],
            [48, 'Final Gambit'],
        ],
    ],

    ['398',
        [
            [0, 'Close Combat'],
            [1, 'Close Combat'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Quick Attack'],
            [1, 'Wing Attack'],
            [5, 'Quick Attack'],
            [9, 'Wing Attack'],
            [13, 'Double Team'],
            [18, 'Endeavor'],
            [23, 'Whirlwind'],
            [28, 'Aerial Ace'],
            [33, 'Take Down'],
            [41, 'Agility'],
            [49, 'Brave Bird'],
            [57, 'Final Gambit'],
        ],
    ],

    ['399',
        [
            [1, 'Tackle'],
            [1, 'Growl'],
            [5, 'Defense Curl'],
            [9, 'Rollout'],
            [13, 'Headbutt'],
            [17, 'Hyper Fang'],
            [21, 'Yawn'],
            [25, 'Crunch'],
            [29, 'Take Down'],
            [33, 'Super Fang'],
            [37, 'Swords Dance'],
            [41, 'Amnesia'],
            [45, 'Superpower'],
            [49, 'Curse'],
        ],
    ],

    ['400',
        [
            [0, 'Water Gun'],
            [1, 'Water Gun'],
            [1, 'Aqua Jet'],
            [1, 'Rototiller'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [5, 'Defense Curl'],
            [9, 'Rollout'],
            [13, 'Headbutt'],
            [18, 'Hyper Fang'],
            [23, 'Yawn'],
            [28, 'Crunch'],
            [33, 'Take Down'],
            [38, 'Super Fang'],
            [43, 'Swords Dance'],
            [48, 'Amnesia'],
            [53, 'Superpower'],
            [58, 'Curse'],
        ],
    ],

    ['401',
        [
            [1, 'Growl'],
            [1, 'Bide'],
            [6, 'Struggle Bug'],
            [16, 'Bug Bite'],
        ],
    ],

    ['402',
        [
            [0, 'Fury Cutter'],
            [1, 'Fury Cutter'],
            [1, 'Growl'],
            [1, 'Bide'],
            [14, 'Absorb'],
            [18, 'Sing'],
            [22, 'Focus Energy'],
            [26, 'Slash'],
            [30, 'X Scissor'],
            [34, 'Screech'],
            [36, 'Fell Stinger'],
            [38, 'Taunt'],
            [42, 'Night Slash'],
            [44, 'Sticky Web'],
            [46, 'Bug Buzz'],
            [50, 'Perish Song'],
        ],
    ],

    ['403',
        [
            [1, 'Tackle'],
            [1, 'Leer'],
            [4, 'Thunder Shock'],
            [8, 'Charge'],
            [12, 'Bite'],
            [16, 'Spark'],
            [20, 'Roar'],
            [24, 'Volt Switch'],
            [28, 'Scary Face'],
            [32, 'Thunder Wave'],
            [36, 'Crunch'],
            [40, 'Discharge'],
            [44, 'Swagger'],
            [48, 'Wild Charge'],
        ],
    ],

    ['404',
        [
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Thunder Shock'],
            [1, 'Charge'],
            [12, 'Bite'],
            [18, 'Spark'],
            [24, 'Roar'],
            [31, 'Volt Switch'],
            [36, 'Scary Face'],
            [42, 'Thunder Wave'],
            [48, 'Crunch'],
            [54, 'Discharge'],
            [60, 'Swagger'],
            [68, 'Wild Charge'],
        ],
    ],

    ['405',
        [
            [1, 'Electric Terrain'],
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Thunder Shock'],
            [1, 'Charge'],
            [12, 'Bite'],
            [18, 'Spark'],
            [24, 'Roar'],
            [33, 'Volt Switch'],
            [40, 'Scary Face'],
            [48, 'Thunder Wave'],
            [56, 'Crunch'],
            [64, 'Discharge'],
            [72, 'Swagger'],
            [80, 'Wild Charge'],
        ],
    ],

    ['406',
        [
            [1, 'Absorb'],
            [1, 'Growth'],
            [1, 'Stun Spore'],
            [1, 'Worry Seed'],
        ],
    ],

    ['407',
        [
            [1, 'Grassy Terrain'],
            [1, 'Poison Sting'],
            [1, 'Venom Drench'],
            [1, 'Mega Drain'],
            [1, 'Leech Seed'],
            [1, 'Magical Leaf'],
            [1, 'Toxic Spikes'],
            [1, 'Sweet Scent'],
            [1, 'Giga Drain'],
            [1, 'Synthesis'],
            [1, 'Toxic'],
            [1, 'Petal Blizzard'],
            [1, 'Aromatherapy'],
            [1, 'Ingrain'],
            [1, 'Petal Dance'],
            [1, 'Absorb'],
            [1, 'Growth'],
            [1, 'Stun Spore'],
            [1, 'Worry Seed'],
        ],
    ],

    ['408',
        [
            [1, 'Headbutt'],
            [1, 'Leer'],
            [6, 'Focus Energy'],
            [10, 'Pursuit'],
            [15, 'Take Down'],
            [19, 'Scary Face'],
            [24, 'Assurance'],
            [28, 'Chip Away'],
            [33, 'Ancient Power'],
            [37, 'Zen Headbutt'],
            [42, 'Screech'],
            [46, 'Head Smash'],
        ],
    ],

    ['409',
        [
            [0, 'Endeavor'],
            [1, 'Endeavor'],
            [1, 'Headbutt'],
            [1, 'Leer'],
            [1, 'Focus Energy'],
            [1, 'Pursuit'],
            [6, 'Focus Energy'],
            [10, 'Pursuit'],
            [15, 'Take Down'],
            [19, 'Scary Face'],
            [24, 'Assurance'],
            [28, 'Chip Away'],
            [36, 'Ancient Power'],
            [43, 'Zen Headbutt'],
            [51, 'Screech'],
            [58, 'Head Smash'],
        ],
    ],

    ['410',
        [
            [1, 'Tackle'],
            [1, 'Protect'],
            [6, 'Taunt'],
            [10, 'Metal Sound'],
            [15, 'Take Down'],
            [19, 'Iron Defense'],
            [24, 'Swagger'],
            [28, 'Ancient Power'],
            [33, 'Endure'],
            [37, 'Metal Burst'],
            [42, 'Iron Head'],
            [46, 'Heavy Slam'],
        ],
    ],

    ['411',
        [
            [0, 'Block'],
            [1, 'Block'],
            [1, 'Tackle'],
            [1, 'Protect'],
            [1, 'Taunt'],
            [1, 'Metal Sound'],
            [6, 'Taunt'],
            [10, 'Metal Sound'],
            [15, 'Take Down'],
            [19, 'Iron Defense'],
            [24, 'Swagger'],
            [28, 'Ancient Power'],
            [36, 'Endure'],
            [43, 'Metal Burst'],
            [51, 'Iron Head'],
            [58, 'Heavy Slam'],
        ],
    ],

    ['412',
        [
            [1, 'Protect'],
            [10, 'Tackle'],
            [15, 'Bug Bite'],
            [20, 'Hidden Power'],
        ],
    ],

    ['413',
        [
            [0, 'Quiver Dance'],
            [1, 'Quiver Dance'],
            [1, 'Sucker Punch'],
            [1, 'Tackle'],
            [1, 'Protect'],
            [1, 'Bug Bite'],
            [10, 'Protect'],
            [15, 'Bug Bite'],
            [20, 'Hidden Power'],
            [23, 'Confusion'],
            [26, 'Razor Leaf'],
            [29, 'Growth'],
            [32, 'Psybeam'],
            [35, 'Captivate'],
            [38, 'Flail'],
            [41, 'Attract'],
            [44, 'Psychic'],
            [47, 'Leaf Storm'],
            [50, 'Bug Buzz'],
        ], //Leaf Form
        [
            [0, 'Quiver Dance'],
            [1, 'Quiver Dance'],
            [1, 'Sucker Punch'],
            [1, 'Tackle'],
            [1, 'Protect'],
            [1, 'Bug Bite'],
            [10, 'Protect'],
            [15, 'Bug Bite'],
            [20, 'Hidden Power'],
            [23, 'Confusion'],
            [26, 'Rock Blast'],
            [29, 'Harden'],
            [32, 'Psybeam'],
            [35, 'Captivate'],
            [38, 'Flail'],
            [41, 'Attract'],
            [44, 'Psychic'],
            [47, 'Fissure'],
            [50, 'Bug Buzz'],
        ], //Sandy Form
        [
            [0, 'Quiver Dance'],
            [1, 'Quiver Dance'],
            [1, 'Metal Burst'],
            [1, 'Sucker Punch'],
            [1, 'Tackle'],
            [1, 'Protect'],
            [1, 'Bug Bite'],
            [10, 'Protect'],
            [15, 'Bug Bite'],
            [20, 'Hidden Power'],
            [23, 'Confusion'],
            [26, 'Mirror Shot'],
            [29, 'Metal Sound'],
            [32, 'Psybeam'],
            [35, 'Captivate'],
            [38, 'Flail'],
            [41, 'Attract'],
            [44, 'Psychic'],
            [47, 'Iron Head'],
            [50, 'Bug Buzz'],
        ], //Trash Form
    ], //Wormadam

    ['414',
        [
            [0, 'Quiver Dance'],
            [1, 'Quiver Dance'],
            [1, 'Tackle'],
            [1, 'Protect'],
            [1, 'Bug Bite'],
            [10, 'Protect'],
            [15, 'Bug Bite'],
            [20, 'Hidden Power'],
            [23, 'Confusion'],
            [26, 'Gust'],
            [29, 'Poison Powder'],
            [32, 'Psybeam'],
            [35, 'Camouflage'],
            [38, 'Silver Wind'],
            [41, 'Air Slash'],
            [44, 'Psychic'],
            [47, 'Lunge'],
            [50, 'Bug Buzz'],
        ],
    ],

    ['415',
        [
            [1, 'Sweet Scent'],
            [1, 'Gust'],
            [1, 'Struggle Bug'],
            [1, 'Bug Bite'],
        ],
    ],

    ['416',
        [
            [0, 'Slash'],
            [1, 'Slash'],
            [1, 'Struggle Bug'],
            [1, 'Bug Bite'],
            [1, 'Sweet Scent'],
            [1, 'Gust'],
            [1, 'Poison Sting'],
            [1, 'Confuse Ray'],
            [4, 'Fury Cutter'],
            [8, 'Aromatic Mist'],
            [12, 'Fell Stinger'],
            [16, 'Fury Swipes'],
            [20, 'Swagger'],
            [24, 'Aromatherapy'],
            [28, 'Air Slash'],
            [32, 'Power Gem'],
            [36, 'Toxic'],
            [40, 'Attack Order'],
            [40, 'Defend Order'],
            [44, 'Destiny Bond'],
        ],
    ],

    ['417',
        [
            [1, 'Growl'],
            [1, 'Bide'],
            [5, 'Quick Attack'],
            [9, 'Charm'],
            [13, 'Spark'],
            [17, 'Endure'],
            [19, 'Nuzzle'],
            [21, 'Swift'],
            [25, 'Electro Ball'],
            [29, 'Sweet Kiss'],
            [33, 'Thunder Wave'],
            [37, 'Super Fang'],
            [41, 'Discharge'],
            [45, 'Last Resort'],
            [49, 'Hyper Fang'],
        ],
    ],

    ['418',
        [
            [1, 'Sonic Boom'],
            [4, 'Growl'],
            [7, 'Water Sport'],
            [11, 'Quick Attack'],
            [15, 'Water Gun'],
            [18, 'Pursuit'],
            [21, 'Swift'],
            [24, 'Aqua Jet'],
            [27, 'Double Hit'],
            [31, 'Whirlpool'],
            [35, 'Razor Wind'],
            [38, 'Aqua Tail'],
            [41, 'Agility'],
            [45, 'Hydro Pump'],
        ],
    ],

    ['419',
        [
            [1, 'Ice Fang'],
            [1, 'Crunch'],
            [1, 'Sonic Boom'],
            [1, 'Growl'],
            [1, 'Water Sport'],
            [1, 'Quick Attack'],
            [4, 'Growl'],
            [7, 'Water Sport'],
            [11, 'Quick Attack'],
            [15, 'Water Gun'],
            [18, 'Pursuit'],
            [21, 'Swift'],
            [24, 'Aqua Jet'],
            [29, 'Double Hit'],
            [35, 'Whirlpool'],
            [41, 'Razor Wind'],
            [46, 'Aqua Tail'],
            [51, 'Agility'],
            [57, 'Hydro Pump'],
        ],
    ],

    ['420',
        [
            [1, 'Morning Sun'],
            [1, 'Tackle'],
            [5, 'Leafage'],
            [10, 'Growth'],
            [15, 'Helping Hand'],
            [20, 'Magical Leaf'],
            [26, 'Leech Seed'],
            [30, 'Take Down'],
            [35, 'Petal Blizzard'],
            [40, 'Worry Seed'],
            [45, 'Solar Beam'],
        ],
    ],

    ['421',
        [
            [0, 'Sunny Day'],
            [1, 'Sunny Day'],
            [1, 'Flower Shield'],
            [1, 'Morning Sun'],
            [1, 'Tackle'],
            [1, 'Leafage'],
            [1, 'Growth'],
            [15, 'Helping Hand'],
            [20, 'Magical Leaf'],
            [28, 'Leech Seed'],
            [34, 'Take Down'],
            [41, 'Petal Blizzard'],
            [48, 'Worry Seed'],
            [55, 'Solar Beam'],
            [62, 'Petal Dance'],
        ],
    ],

    ['422',
        [
            [1, 'Water Gun'],
            [1, 'Mud Slap'],
            [5, 'Harden'],
            [10, 'Recover'],
            [15, 'Water Pulse'],
            [20, 'Ancient Power'],
            [25, 'Body Slam'],
            [31, 'Muddy Water'],
            [35, 'Earth Power'],
            [40, 'Rain Dance'],
            [45, 'Memento'],
        ],
    ],

    ['423',
        [
            [1, 'Water Gun'],
            [1, 'Mud Slap'],
            [1, 'Harden'],
            [1, 'Recover'],
            [15, 'Water Pulse'],
            [20, 'Ancient Power'],
            [25, 'Body Slam'],
            [33, 'Muddy Water'],
            [39, 'Earth Power'],
            [46, 'Rain Dance'],
            [53, 'Memento'],
        ],
    ],

    ['424',
        [
            [1, 'Dual Chop'],
            [1, 'Scratch'],
            [1, 'Tail Whip'],
            [1, 'Sand Attack'],
            [1, 'Astonish'],
            [4, 'Sand Attack'],
            [8, 'Astonish'],
            [11, 'Baton Pass'],
            [15, 'Tickle'],
            [18, 'Fury Swipes'],
            [22, 'Swift'],
            [25, 'Screech'],
            [29, 'Agility'],
            [32, 'Double Hit'],
            [36, 'Fling'],
            [39, 'Nasty Plot'],
            [43, 'Last Resort'],
        ],
    ],

    ['425',
        [
            [1, 'Minimize'],
            [1, 'Astonish'],
            [4, 'Gust'],
            [8, 'Focus Energy'],
            [12, 'Payback'],
            [16, 'Hex'],
            [20, 'Shadow Ball'],
            [24, 'Stockpile'],
            [24, 'Swallow'],
            [24, 'Spit Up'],
            [29, 'Self Destruct'],
            [32, 'Destiny Bond'],
            [36, 'Baton Pass'],
            [40, 'Tailwind'],
            [44, 'Explosion'],
        ],
    ],

    ['426',
        [
            [0, 'Phantom Force'],
            [1, 'Phantom Force'],
            [1, 'Strength Sap'],
            [1, 'Minimize'],
            [1, 'Astonish'],
            [1, 'Gust'],
            [1, 'Focus Energy'],
            [12, 'Payback'],
            [16, 'Hex'],
            [20, 'Shadow Ball'],
            [24, 'Stockpile'],
            [24, 'Swallow'],
            [24, 'Spit Up'],
            [31, 'Self Destruct'],
            [36, 'Destiny Bond'],
            [42, 'Baton Pass'],
            [48, 'Tailwind'],
            [54, 'Explosion'],
        ],
    ],

    ['427',
        [
            [1, 'Splash'],
            [1, 'Pound'],
            [4, 'Defense Curl'],
            [8, 'Baby Doll Eyes'],
            [12, 'After You'],
            [16, 'Quick Attack'],
            [20, 'Double Kick'],
            [24, 'Charm'],
            [28, 'Baton Pass'],
            [32, 'Headbutt'],
            [36, 'Agility'],
            [40, 'Entrainment'],
            [44, 'Flatter'],
            [48, 'Bounce'],
            [52, 'Healing Wish'],
        ],
    ],

    ['428',
        [
            [1, 'Mirror Coat'],
            [1, 'Magic Coat'],
            [1, 'Splash'],
            [1, 'Pound'],
            [1, 'Defense Curl'],
            [1, 'Baby Doll Eyes'],
            [12, 'After You'],
            [16, 'Quick Attack'],
            [20, 'Double Kick'],
            [24, 'Charm'],
            [28, 'Baton Pass'],
            [32, 'Headbutt'],
            [36, 'Agility'],
            [40, 'Entrainment'],
            [44, 'Flatter'],
            [48, 'Bounce'],
            [52, 'Healing Wish'],
            [56, 'High Jump Kick'],
        ],
    ],

    ['429',
        [
            [1, 'Mystical Fire'],
            [1, 'Power Gem'],
            [1, 'Phantom Force'],
            [1, 'Lucky Chant'],
            [1, 'Magical Leaf'],
            [1, 'Growl'],
            [1, 'Psywave'],
            [1, 'Spite'],
            [1, 'Astonish'],
        ],
    ],

    ['430',
        [
            [1, 'Night Slash'],
            [1, 'Sucker Punch'],
            [1, 'Astonish'],
            [1, 'Pursuit'],
            [1, 'Haze'],
            [1, 'Wing Attack'],
            [25, 'Swagger'],
            [35, 'Nasty Plot'],
            [45, 'Foul Play'],
            [55, 'Night Slash'],
            [65, 'Quash'],
            [75, 'Dark Pulse'],
        ],
    ],

    ['431',
        [
            [1, 'Fake Out'],
            [5, 'Scratch'],
            [8, 'Growl'],
            [13, 'Hypnosis'],
            [17, 'Feint Attack'],
            [20, 'Fury Swipes'],
            [25, 'Charm'],
            [29, 'Assist'],
            [32, 'Captivate'],
            [37, 'Slash'],
            [41, 'Sucker Punch'],
            [44, 'Attract'],
            [48, 'Hone Claws'],
            [50, 'Play Rough'],
        ],
    ],

    ['432',
        [
            [0, 'Swagger'],
            [1, 'Swagger'],
            [1, 'Fake Out'],
            [1, 'Scratch'],
            [1, 'Growl'],
            [5, 'Scratch'],
            [8, 'Growl'],
            [13, 'Hypnosis'],
            [17, 'Feint Attack'],
            [20, 'Fury Swipes'],
            [25, 'Charm'],
            [29, 'Assist'],
            [32, 'Captivate'],
            [37, 'Slash'],
            [45, 'Body Slam'],
            [52, 'Attract'],
            [60, 'Hone Claws'],
        ],
    ],

    ['433',
        [
            [1, 'Wrap'],
            [4, 'Growl'],
            [7, 'Astonish'],
            [10, 'Confusion'],
            [13, 'Yawn'],
            [16, 'Last Resort'],
            [19, 'Entrainment'],
            [32, 'Uproar'],
        ],
    ],

    ['434',
        [
            [1, 'Poison Gas'],
            [1, 'Scratch'],
            [3, 'Feint'],
            [6, 'Smokescreen'],
            [9, 'Acid Spray'],
            [12, 'Fury Swipes'],
            [15, 'Focus Energy'],
            [18, 'Bite'],
            [21, 'Venoshock'],
            [24, 'Screech'],
            [27, 'Toxic'],
            [30, 'Sucker Punch'],
            [33, 'Memento'],
            [36, 'Night Slash'],
            [39, 'Belch'],
            [42, 'Venom Drench'],
            [45, 'Explosion'],
        ],
    ],

    ['435',
        [
            [0, 'Flamethrower'],
            [1, 'Flamethrower'],
            [1, 'Poison Gas'],
            [1, 'Scratch'],
            [1, 'Feint'],
            [1, 'Smokescreen'],
            [9, 'Acid Spray'],
            [12, 'Fury Swipes'],
            [15, 'Focus Energy'],
            [18, 'Bite'],
            [21, 'Venoshock'],
            [24, 'Screech'],
            [27, 'Toxic'],
            [30, 'Sucker Punch'],
            [33, 'Memento'],
            [38, 'Night Slash'],
            [43, 'Belch'],
            [48, 'Venom Drench'],
            [53, 'Explosion'],
        ],
    ],

    ['436',
        [
            [1, 'Tackle'],
            [1, 'Confusion'],
            [4, 'Confuse Ray'],
            [8, 'Payback'],
            [12, 'Imprison'],
            [16, 'Gyro Ball'],
            [20, 'Hypnosis'],
            [24, 'Safeguard'],
            [28, 'Extrasensory'],
            [32, 'Heavy Slam'],
            [36, 'Iron Defense'],
            [40, 'Metal Sound'],
            [44, 'Future Sight'],
        ],
    ],

    ['437',
        [
            [0, 'Block'],
            [1, 'Block'],
            [1, 'Sunny Day'],
            [1, 'Weather Ball'],
            [1, 'Tackle'],
            [1, 'Confusion'],
            [1, 'Confuse Ray'],
            [1, 'Payback'],
            [12, 'Imprison'],
            [16, 'Gyro Ball'],
            [20, 'Hypnosis'],
            [24, 'Safeguard'],
            [28, 'Extrasensory'],
            [32, 'Heavy Slam'],
            [38, 'Iron Defense'],
            [44, 'Metal Sound'],
            [50, 'Future Sight'],
            [56, 'Rain Dance'],
        ],
    ],

    ['438',
        [
            [1, 'Fake Tears'],
            [1, 'Copycat'],
            [4, 'Flail'],
            [8, 'Rock Throw'],
            [12, 'Block'],
            [16, 'Mimic'],
            [20, 'Rock Tomb'],
            [24, 'Tearful Look'],
            [28, 'Sucker Punch'],
            [32, 'Rock Slide'],
            [36, 'Low Kick'],
            [40, 'Counter'],
            [44, 'Double Edge'],
        ],
    ],

    ['439',
        [
            [1, 'Pound'],
            [1, 'Copycat'],
            [4, 'Baton Pass'],
            [8, 'Encore'],
            [12, 'Confusion'],
            [16, 'Role Play'],
            [20, 'Protect'],
            [24, 'Recycle'],
            [28, 'Psybeam'],
            [32, 'Mimic'],
            [36, 'Light Screen'],
            [36, 'Reflect'],
            [36, 'Safeguard'],
            [40, 'Sucker Punch'],
            [44, 'Dazzling Gleam'],
            [48, 'Psychic'],
            [52, 'Teeter Dance'],
        ],
    ],

    ['440',
        [
            [1, 'Minimize'],
            [1, 'Pound'],
            [1, 'Copycat'],
            [4, 'Defense Curl'],
            [8, 'Sweet Kiss'],
            [12, 'Disarming Voice'],
            [16, 'Covet'],
            [20, 'Charm'],
        ],
    ],

    ['441',
        [
            [1, 'Hyper Voice'],
            [1, 'Chatter'],
            [1, 'Confide'],
            [1, 'Taunt'],
            [1, 'Peck'],
            [5, 'Growl'],
            [9, 'Mirror Move'],
            [13, 'Sing'],
            [17, 'Fury Attack'],
            [21, 'Chatter'],
            [25, 'Taunt'],
            [29, 'Round'],
            [33, 'Mimic'],
            [37, 'Echoed Voice'],
            [41, 'Roost'],
            [45, 'Uproar'],
            [49, 'Synchronoise'],
            [50, 'Feather Dance'],
            [57, 'Hyper Voice'],
        ],
    ],

    ['442',
        [
            [1, 'Night Shade'],
            [1, 'Confuse Ray'],
            [5, 'Shadow Sneak'],
            [10, 'Spite'],
            [15, 'Payback'],
            [20, 'Nasty Plot'],
            [25, 'Hex'],
            [30, 'Memento'],
            [35, 'Sucker Punch'],
            [40, 'Curse'],
            [45, 'Shadow Ball'],
            [50, 'Dark Pulse'],
            [55, 'Hypnosis'],
            [60, 'Dream Eater'],
        ],
    ],

    ['443',
        [
            [1, 'Sand Tomb'],
            [1, 'Tackle'],
            [6, 'Sand Attack'],
            [12, 'Dragon Breath'],
            [18, 'Bulldoze'],
            [25, 'Bite'],
            [30, 'Slash'],
            [36, 'Dragon Claw'],
            [42, 'Dig'],
            [48, 'Sandstorm'],
            [54, 'Take Down'],
            [60, 'Dragon Rush'],
        ],
    ],

    ['444',
        [
            [1, 'Dual Chop'],
            [1, 'Sand Tomb'],
            [1, 'Tackle'],
            [1, 'Sand Attack'],
            [1, 'Dragon Breath'],
            [18, 'Bulldoze'],
            [27, 'Bite'],
            [34, 'Slash'],
            [42, 'Dragon Claw'],
            [50, 'Dig'],
            [58, 'Sandstorm'],
            [66, 'Take Down'],
            [74, 'Dragon Rush'],
        ],
    ],

    ['445',
        [
            [0, 'Crunch'],
            [1, 'Crunch'],
            [1, 'Dual Chop'],
            [1, 'Sand Tomb'],
            [1, 'Tackle'],
            [1, 'Sand Attack'],
            [1, 'Dragon Breath'],
            [18, 'Bulldoze'],
            [27, 'Bite'],
            [34, 'Slash'],
            [42, 'Dragon Claw'],
            [52, 'Dig'],
            [62, 'Sandstorm'],
            [72, 'Take Down'],
            [82, 'Dragon Rush'],
        ],
    ],

    ['446',
        [
            [1, 'Lick'],
            [1, 'Tackle'],
            [4, 'Defense Curl'],
            [8, 'Recycle'],
            [12, 'Covet'],
            [16, 'Bite'],
            [20, 'Stockpile'],
            [20, 'Swallow'],
            [24, 'Screech'],
            [28, 'Body Slam'],
            [32, 'Fling'],
            [36, 'Amnesia'],
            [40, 'Metronome'],
            [44, 'Flail'],
            [48, 'Belly Drum'],
            [52, 'Last Resort'],
        ],
    ],

    ['447',
        [
            [1, 'Quick Attack'],
            [1, 'Endure'],
            [4, 'Feint'],
            [8, 'Metal Claw'],
            [12, 'Counter'],
            [16, 'Work Up'],
            [20, 'Rock Smash'],
            [24, 'Nasty Plot'],
            [28, 'Screech'],
            [32, 'Quick Guard'],
            [36, 'Force Palm'],
            [40, 'Swords Dance'],
            [44, 'Helping Hand'],
            [48, 'Copycat'],
            [52, 'Final Gambit'],
            [56, 'Reversal'],
        ],
    ],

    ['448',
        [
            [0, 'Aura Sphere'],
            [1, 'Aura Sphere'],
            [1, 'Life Dew'],
            [1, 'Work Up'],
            [1, 'Rock Smash'],
            [1, 'Nasty Plot'],
            [1, 'Screech'],
            [1, 'Force Palm'],
            [1, 'Helping Hand'],
            [1, 'Copycat'],
            [1, 'Final Gambit'],
            [1, 'Reversal'],
            [1, 'Quick Attack'],
            [1, 'Detect'],
            [1, 'Feint'],
            [1, 'Metal Claw'],
            [12, 'Counter'],
            [16, 'Laser Focus'],
            [20, 'Power Up Punch'],
            [24, 'Calm Mind'],
            [28, 'Metal Sound'],
            [32, 'Quick Guard'],
            [36, 'Bone Rush'],
            [40, 'Swords Dance'],
            [44, 'Heal Pulse'],
            [48, 'Meteor Mash'],
            [52, 'Dragon Pulse'],
            [56, 'Extreme Speed'],
            [60, 'Close Combat'],
        ],
    ],

    ['449',
        [
            [1, 'Tackle'],
            [1, 'Sand Attack'],
            [4, 'Bite'],
            [8, 'Yawn'],
            [12, 'Sand Tomb'],
            [16, 'Dig'],
            [20, 'Crunch'],
            [24, 'Sandstorm'],
            [28, 'Take Down'],
            [32, 'Roar'],
            [36, 'Rest'],
            [40, 'Earthquake'],
            [44, 'Double Edge'],
            [48, 'Fissure'],
            [52, 'Slack Off'],
        ],
    ],

    ['450',
        [
            [1, 'Ice Fang'],
            [1, 'Fire Fang'],
            [1, 'Thunder Fang'],
            [1, 'Tackle'],
            [1, 'Sand Attack'],
            [1, 'Bite'],
            [1, 'Yawn'],
            [12, 'Sand Tomb'],
            [16, 'Dig'],
            [20, 'Crunch'],
            [24, 'Sandstorm'],
            [28, 'Take Down'],
            [32, 'Roar'],
            [38, 'Rest'],
            [44, 'Earthquake'],
            [50, 'Double Edge'],
            [56, 'Fissure'],
            [62, 'Slack Off'],
        ],
    ],

    ['451',
        [
            [1, 'Poison Sting'],
            [1, 'Leer'],
            [3, 'Hone Claws'],
            [6, 'Fell Stinger'],
            [9, 'Poison Fang'],
            [12, 'Bite'],
            [15, 'Toxic Spikes'],
            [18, 'Bug Bite'],
            [21, 'Venoshock'],
            [24, 'Knock Off'],
            [27, 'Scary Face'],
            [30, 'Pin Missile'],
            [33, 'Toxic'],
            [36, 'Night Slash'],
            [39, 'Cross Poison'],
            [42, 'X Scissor'],
            [45, 'Acupressure'],
            [48, 'Crunch'],
        ],
    ],

    ['452',
        [
            [1, 'Thunder Fang'],
            [1, 'Ice Fang'],
            [1, 'Fire Fang'],
            [1, 'Poison Sting'],
            [1, 'Leer'],
            [1, 'Hone Claws'],
            [1, 'Fell Stinger'],
            [9, 'Poison Fang'],
            [12, 'Bite'],
            [15, 'Toxic Spikes'],
            [18, 'Bug Bite'],
            [21, 'Venoshock'],
            [24, 'Knock Off'],
            [27, 'Scary Face'],
            [30, 'Pin Missile'],
            [33, 'Toxic'],
            [36, 'Night Slash'],
            [39, 'Cross Poison'],
            [44, 'X Scissor'],
            [49, 'Acupressure'],
            [54, 'Crunch'],
        ],
    ],

    ['453',
        [
            [1, 'Poison Sting'],
            [1, 'Mud Slap'],
            [4, 'Astonish'],
            [8, 'Taunt'],
            [12, 'Flatter'],
            [16, 'Revenge'],
            [20, 'Venoshock'],
            [24, 'Sucker Punch'],
            [28, 'Swagger'],
            [32, 'Poison Jab'],
            [36, 'Toxic'],
            [40, 'Nasty Plot'],
            [44, 'Sludge Bomb'],
            [48, 'Belch'],
        ],
    ],

    ['454',
        [
            [1, 'Poison Sting'],
            [1, 'Mud Slap'],
            [1, 'Astonish'],
            [1, 'Taunt'],
            [12, 'Flatter'],
            [16, 'Revenge'],
            [20, 'Venoshock'],
            [24, 'Sucker Punch'],
            [28, 'Swagger'],
            [32, 'Poison Jab'],
            [36, 'Toxic'],
            [42, 'Nasty Plot'],
            [48, 'Sludge Bomb'],
            [54, 'Belch'],
        ],
    ],

    ['455',
        [
            [1, 'Bind'],
            [1, 'Growth'],
            [7, 'Bite'],
            [11, 'Vine Whip'],
            [17, 'Sweet Scent'],
            [21, 'Ingrain'],
            [27, 'Feint Attack'],
            [31, 'Leaf Tornado'],
            [37, 'Stockpile'],
            [37, 'Spit Up'],
            [37, 'Swallow'],
            [41, 'Crunch'],
            [47, 'Wring Out'],
            [50, 'Power Whip'],
        ],
    ],

    ['456',
        [
            [1, 'Pound'],
            [6, 'Water Gun'],
            [10, 'Attract'],
            [13, 'Rain Dance'],
            [17, 'Gust'],
            [22, 'Water Pulse'],
            [26, 'Captivate'],
            [29, 'Safeguard'],
            [33, 'Aqua Ring'],
            [38, 'Whirlpool'],
            [42, 'U Turn'],
            [45, 'Bounce'],
            [49, 'Silver Wind'],
            [54, 'Soak'],
        ],
    ],

    ['457',
        [
            [1, 'Soak'],
            [1, 'Gust'],
            [1, 'Pound'],
            [1, 'Water Gun'],
            [1, 'Attract'],
            [6, 'Water Gun'],
            [10, 'Attract'],
            [13, 'Rain Dance'],
            [17, 'Gust'],
            [22, 'Water Pulse'],
            [26, 'Captivate'],
            [29, 'Safeguard'],
            [35, 'Aqua Ring'],
            [42, 'Whirlpool'],
            [48, 'U Turn'],
            [53, 'Bounce'],
            [59, 'Silver Wind'],
            [66, 'Soak'],
        ],
    ],

    ['458',
        [
            [1, 'Tackle'],
            [1, 'Water Gun'],
            [4, 'Supersonic'],
            [8, 'Wing Attack'],
            [12, 'Water Pulse'],
            [16, 'Wide Guard'],
            [20, 'Agility'],
            [24, 'Bubble Beam'],
            [28, 'Headbutt'],
            [32, 'Air Slash'],
            [36, 'Aqua Ring'],
            [40, 'Bounce'],
            [44, 'Take Down'],
            [48, 'Hydro Pump'],
        ],
    ],

    ['459',
        [
            [1, 'Powder Snow'],
            [1, 'Leer'],
            [5, 'Leafage'],
            [10, 'Mist'],
            [15, 'Ice Shard'],
            [20, 'Razor Leaf'],
            [25, 'Icy Wind'],
            [30, 'Swagger'],
            [35, 'Ingrain'],
            [41, 'Wood Hammer'],
            [45, 'Blizzard'],
            [50, 'Sheer Cold'],
        ],
    ],

    ['460',
        [
            [0, 'Ice Punch'],
            [1, 'Ice Punch'],
            [1, 'Aurora Veil'],
            [1, 'Powder Snow'],
            [1, 'Leer'],
            [1, 'Leafage'],
            [1, 'Mist'],
            [15, 'Ice Shard'],
            [20, 'Razor Leaf'],
            [25, 'Icy Wind'],
            [30, 'Swagger'],
            [35, 'Ingrain'],
            [43, 'Wood Hammer'],
            [49, 'Blizzard'],
            [56, 'Sheer Cold'],
        ],
    ],

    ['461',
        [
            [1, 'Revenge'],
            [1, 'Assurance'],
            [1, 'Quick Attack'],
            [1, 'Beat Up'],
            [1, 'Agility'],
            [1, 'Slash'],
            [1, 'Scratch'],
            [1, 'Leer'],
            [1, 'Taunt'],
            [1, 'Ice Shard'],
            [18, 'Metal Claw'],
            [24, 'Icy Wind'],
            [30, 'Fury Swipes'],
            [36, 'Hone Claws'],
            [42, 'Fling'],
            [48, 'Nasty Plot'],
            [54, 'Screech'],
            [60, 'Night Slash'],
            [66, 'Dark Pulse'],
        ],
    ],

    ['462',
        [
            [1, 'Tri Attack'],
            [1, 'Electric Terrain'],
            [1, 'Magnetic Flux'],
            [1, 'Mirror Coat'],
            [1, 'Thunder Shock'],
            [1, 'Tackle'],
            [1, 'Supersonic'],
            [1, 'Thunder Wave'],
            [12, 'Electro Ball'],
            [16, 'Gyro Ball'],
            [20, 'Spark'],
            [24, 'Screech'],
            [28, 'Magnet Rise'],
            [34, 'Flash Cannon'],
            [40, 'Discharge'],
            [46, 'Metal Sound'],
            [52, 'Light Screen'],
            [58, 'Lock On'],
            [64, 'Zap Cannon'],
        ],
    ],

    ['463',
        [
            [1, 'Lick'],
            [1, 'Defense Curl'],
            [1, 'Rollout'],
            [1, 'Supersonic'],
            [18, 'Wrap'],
            [24, 'Disable'],
            [30, 'Stomp'],
            [36, 'Knock Off'],
            [42, 'Screech'],
            [48, 'Slam'],
            [54, 'Power Whip'],
            [60, 'Belly Drum'],
        ],
    ],

    ['464',
        [
            [1, 'Hammer Arm'],
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [1, 'Smack Down'],
            [1, 'Bulldoze'],
            [15, 'Horn Attack'],
            [20, 'Scary Face'],
            [25, 'Stomp'],
            [30, 'Rock Blast'],
            [35, 'Drill Run'],
            [40, 'Take Down'],
            [47, 'Earthquake'],
            [54, 'Stone Edge'],
            [61, 'Megahorn'],
            [68, 'Horn Drill'],
            [75, 'Rock Wrecker'],
        ],
    ],

    ['465',
        [
            [1, 'Block'],
            [1, 'Absorb'],
            [1, 'Bind'],
            [1, 'Stun Spore'],
            [1, 'Growth'],
            [12, 'Mega Drain'],
            [16, 'Vine Whip'],
            [20, 'Poison Powder'],
            [24, 'Ancient Power'],
            [28, 'Knock Off'],
            [32, 'Giga Drain'],
            [36, 'Sleep Powder'],
            [40, 'Slam'],
            [44, 'Tickle'],
            [48, 'Power Whip'],
            [52, 'Ingrain'],
            [56, 'Grassy Terrain'],
        ],
    ],

    ['466',
        [
            [1, 'Quick Attack'],
            [1, 'Leer'],
            [1, 'Thunder Shock'],
            [1, 'Charge'],
            [12, 'Swift'],
            [16, 'Shock Wave'],
            [20, 'Thunder Wave'],
            [24, 'Screech'],
            [28, 'Thunder Punch'],
            [34, 'Discharge'],
            [40, 'Low Kick'],
            [46, 'Thunderbolt'],
            [52, 'Light Screen'],
            [58, 'Thunder'],
            [64, 'Giga Impact'],
        ],
    ],

    ['467',
        [
            [1, 'Smog'],
            [1, 'Leer'],
            [1, 'Ember'],
            [1, 'Smokescreen'],
            [12, 'Clear Smog'],
            [16, 'Flame Wheel'],
            [20, 'Confuse Ray'],
            [24, 'Scary Face'],
            [28, 'Fire Punch'],
            [34, 'Lava Plume'],
            [40, 'Low Kick'],
            [46, 'Flamethrower'],
            [52, 'Sunny Day'],
            [58, 'Fire Blast'],
            [64, 'Hyper Beam'],
        ],
    ],

    ['468',
        [
            [0, 'Air Slash'],
            [1, 'Air Slash'],
            [1, 'Fairy Wind'],
            [1, 'Sky Attack'],
            [1, 'Aura Sphere'],
            [1, 'Extreme Speed'],
            [1, 'Tri Attack'],
            [1, 'Charm'],
            [1, 'Ancient Power'],
            [1, 'Yawn'],
            [1, 'Metronome'],
            [1, 'After You'],
            [1, 'Double Edge'],
            [1, 'Safeguard'],
            [1, 'Follow Me'],
            [1, 'Baton Pass'],
            [1, 'Last Resort'],
            [1, 'Wish'],
            [1, 'Growl'],
            [1, 'Pound'],
            [1, 'Sweet Kiss'],
            [1, 'Life Dew'],
        ],
    ],

    ['469',
        [
            [1, 'Bug Buzz'],
            [1, 'Air Slash'],
            [1, 'Night Slash'],
            [1, 'Bug Bite'],
            [1, 'Tackle'],
            [1, 'Foresight'],
            [1, 'Quick Attack'],
            [1, 'Double Team'],
            [6, 'Quick Attack'],
            [11, 'Double Team'],
            [14, 'Sonic Boom'],
            [17, 'Detect'],
            [22, 'Supersonic'],
            [27, 'Uproar'],
            [30, 'Pursuit'],
            [33, 'Ancient Power'],
            [38, 'Feint'],
            [43, 'Slash'],
            [46, 'Screech'],
            [49, 'U Turn'],
            [54, 'Air Slash'],
            [57, 'Bug Buzz'],
        ],
    ],

    ['470',
        [
            [0, 'Razor Leaf'],
            [1, 'Razor Leaf'],
            [1, 'Covet'],
            [1, 'Swift'],
            [1, 'Bite'],
            [1, 'Copycat'],
            [1, 'Baton Pass'],
            [1, 'Take Down'],
            [1, 'Charm'],
            [1, 'Double Edge'],
            [1, 'Helping Hand'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [5, 'Sand Attack'],
            [10, 'Quick Attack'],
            [15, 'Baby Doll Eyes'],
            [20, 'Leech Seed'],
            [25, 'Magical Leaf'],
            [30, 'Synthesis'],
            [35, 'Sunny Day'],
            [40, 'Giga Drain'],
            [45, 'Swords Dance'],
            [50, 'Leaf Blade'],
            [55, 'Last Resort'],
        ],
    ],

    ['471',
        [
            [0, 'Icy Wind'],
            [1, 'Icy Wind'],
            [1, 'Covet'],
            [1, 'Swift'],
            [1, 'Copycat'],
            [1, 'Baton Pass'],
            [1, 'Take Down'],
            [1, 'Charm'],
            [1, 'Double Edge'],
            [1, 'Helping Hand'],
            [1, 'Tackle'],
            [1, 'Growl'],
            [1, 'Tail Whip'],
            [5, 'Sand Attack'],
            [10, 'Quick Attack'],
            [15, 'Baby Doll Eyes'],
            [20, 'Ice Shard'],
            [25, 'Bite'],
            [30, 'Ice Fang'],
            [35, 'Hail'],
            [40, 'Freeze Dry'],
            [45, 'Mirror Coat'],
            [50, 'Blizzard'],
            [55, 'Last Resort'],
        ],
    ],

    ['472',
        [
            [1, 'Guillotine'],
            [1, 'Thunder Fang'],
            [1, 'Ice Fang'],
            [1, 'Fire Fang'],
            [1, 'Poison Jab'],
            [1, 'Sand Attack'],
            [1, 'Harden'],
            [1, 'Knock Off'],
            [4, 'Sand Attack'],
            [7, 'Harden'],
            [10, 'Knock Off'],
            [13, 'Quick Attack'],
            [16, 'Fury Cutter'],
            [19, 'Feint Attack'],
            [22, 'Acrobatics'],
            [27, 'Night Slash'],
            [30, 'U Turn'],
            [35, 'Screech'],
            [40, 'X Scissor'],
            [45, 'Sky Uppercut'],
            [50, 'Swords Dance'],
            [55, 'Guillotine'],
        ],
    ],

    ['473',
        [
            [0, 'Double Hit'],
            [1, 'Double Hit'],
            [1, 'Ice Fang'],
            [1, 'Ancient Power'],
            [1, 'Tackle'],
            [1, 'Mud Slap'],
            [1, 'Powder Snow'],
            [1, 'Flail'],
            [15, 'Ice Shard'],
            [20, 'Mist'],
            [25, 'Endure'],
            [30, 'Icy Wind'],
            [37, 'Amnesia'],
            [44, 'Take Down'],
            [51, 'Earthquake'],
            [58, 'Blizzard'],
            [65, 'Thrash'],
        ],
    ],

    ['474',
        [
            [1, 'Trick Room'],
            [1, 'Nasty Plot'],
            [1, 'Defense Curl'],
            [1, 'Tackle'],
            [1, 'Conversion'],
            [1, 'Recycle'],
            [1, 'Magnet Rise'],
            [15, 'Thunder Shock'],
            [20, 'Psybeam'],
            [25, 'Conversion 2'],
            [30, 'Agility'],
            [35, 'Recover'],
            [40, 'Discharge'],
            [45, 'Tri Attack'],
            [50, 'Magic Coat'],
            [55, 'Lock On'],
            [60, 'Zap Cannon'],
            [65, 'Hyper Beam'],
        ],
    ],

    ['475',
        [
            [0, 'Slash'],
            [1, 'Slash'],
            [1, 'Night Slash'],
            [1, 'Growl'],
            [1, 'Disarming Voice'],
            [1, 'Hypnosis'],
            [1, 'Draining Kiss'],
            [1, 'Imprison'],
            [1, 'Psybeam'],
            [1, 'Life Dew'],
            [1, 'Charm'],
            [1, 'Calm Mind'],
            [1, 'Psychic'],
            [1, 'Dream Eater'],
            [1, 'Future Sight'],
            [1, 'Leer'],
            [1, 'Fury Cutter'],
            [1, 'Double Team'],
            [1, 'Confusion'],
            [9, 'Helping Hand'],
            [12, 'Feint'],
            [15, 'Teleport'],
            [18, 'Aerial Ace'],
            [23, 'False Swipe'],
            [28, 'Protect'],
            [35, 'Swords Dance'],
            [42, 'Psycho Cut'],
            [49, 'Heal Pulse'],
            [56, 'Quick Guard'],
            [56, 'Wide Guard'],
            [63, 'Close Combat'],
        ],
    ],

    ['476',
        [
            [0, 'Tri Attack'],
            [1, 'Tri Attack'],
            [1, 'Magnetic Flux'],
            [1, 'Magnet Rise'],
            [1, 'Gravity'],
            [1, 'Wide Guard'],
            [1, 'Tackle'],
            [1, 'Iron Defense'],
            [1, 'Block'],
            [1, 'Magnet Bomb'],
            [4, 'Iron Defense'],
            [7, 'Block'],
            [10, 'Magnet Bomb'],
            [13, 'Thunder Wave'],
            [16, 'Rest'],
            [19, 'Spark'],
            [22, 'Rock Slide'],
            [25, 'Power Gem'],
            [28, 'Rock Blast'],
            [31, 'Discharge'],
            [34, 'Sandstorm'],
            [37, 'Earth Power'],
            [40, 'Stone Edge'],
            [43, 'Lock On'],
            [43, 'Zap Cannon'],
        ],
    ],

    ['477',
        [
            [1, 'Shadow Punch'],
            [1, 'Fire Punch'],
            [1, 'Ice Punch'],
            [1, 'Thunder Punch'],
            [1, 'Gravity'],
            [1, 'Bind'],
            [1, 'Astonish'],
            [1, 'Leer'],
            [1, 'Disable'],
            [1, 'Shadow Sneak'],
            [12, 'Confuse Ray'],
            [16, 'Night Shade'],
            [20, 'Payback'],
            [24, 'Will O Wisp'],
            [28, 'Mean Look'],
            [32, 'Hex'],
            [36, 'Curse'],
            [42, 'Shadow Ball'],
            [48, 'Future Sight'],
            [54, 'Destiny Bond'],
        ],
    ],

    ['478',
        [
            [0, 'Hex'],
            [1, 'Hex'],
            [1, 'Destiny Bond'],
            [1, 'Protect'],
            [1, 'Bite'],
            [1, 'Ice Fang'],
            [1, 'Headbutt'],
            [1, 'Crunch'],
            [1, 'Powder Snow'],
            [1, 'Astonish'],
            [1, 'Leer'],
            [1, 'Double Team'],
            [15, 'Ice Shard'],
            [20, 'Draining Kiss'],
            [25, 'Icy Wind'],
            [30, 'Frost Breath'],
            [35, 'Confuse Ray'],
            [40, 'Hail'],
            [47, 'Will O Wisp'],
            [54, 'Aurora Veil'],
            [61, 'Shadow Ball'],
            [68, 'Blizzard'],
        ],
    ],

    ['479',
        [
            [1, 'Astonish'],
            [1, 'Double Team'],
            [5, 'Thunder Shock'],
            [10, 'Confuse Ray'],
            [15, 'Charge'],
            [20, 'Electro Ball'],
            [25, 'Thunder Wave'],
            [30, 'Shock Wave'],
            [35, 'Hex'],
            [40, 'Substitute'],
            [45, 'Trick'],
            [50, 'Discharge'],
            [55, 'Uproar'],
        ],
    ],

    ['480',
        [
            [1, 'Confusion'],
            [1, 'Rest'],
            [7, 'Swift'],
            [14, 'Endure'],
            [21, 'Psybeam'],
            [28, 'Imprison'],
            [35, 'Extrasensory'],
            [42, 'Amnesia'],
            [49, 'Psychic'],
            [56, 'Yawn'],
            [63, 'Future Sight'],
            [70, 'Flail'],
            [77, 'Memento'],
        ],
    ],

    ['481',
        [
            [1, 'Confusion'],
            [1, 'Rest'],
            [7, 'Swift'],
            [14, 'Protect'],
            [21, 'Psybeam'],
            [28, 'Imprison'],
            [35, 'Extrasensory'],
            [42, 'Charm'],
            [49, 'Psychic'],
            [56, 'Flatter'],
            [63, 'Future Sight'],
            [70, 'Copycat'],
            [77, 'Healing Wish'],
        ],
    ],

    ['482',
        [
            [1, 'Confusion'],
            [1, 'Rest'],
            [7, 'Swift'],
            [14, 'Detect'],
            [21, 'Psybeam'],
            [28, 'Imprison'],
            [35, 'Extrasensory'],
            [42, 'Nasty Plot'],
            [49, 'Psychic'],
            [56, 'Uproar'],
            [63, 'Future Sight'],
            [70, 'Last Resort'],
            [77, 'Explosion'],
        ],
    ],

    ['483',
        [
            [1, 'Scary Face'],
            [1, 'Metal Claw'],
            [8, 'Dragon Breath'],
            [16, 'Ancient Power'],
            [24, 'Slash'],
            [32, 'Flash Cannon'],
            [40, 'Dragon Claw'],
            [48, 'Aura Sphere'],
            [56, 'Power Gem'],
            [64, 'Metal Burst'],
            [72, 'Earth Power'],
            [80, 'Iron Tail'],
            [88, 'Roar Of Time'],
        ],
    ],

    ['484',
        [
            [1, 'Scary Face'],
            [1, 'Water Pulse'],
            [8, 'Dragon Breath'],
            [16, 'Ancient Power'],
            [24, 'Slash'],
            [32, 'Aqua Ring'],
            [40, 'Dragon Claw'],
            [48, 'Aura Sphere'],
            [56, 'Power Gem'],
            [64, 'Aqua Tail'],
            [72, 'Earth Power'],
            [80, 'Spacial Rend'],
            [88, 'Hydro Pump'],
        ],
    ],

    ['485',
        [
            [1, 'Fire Spin'],
            [1, 'Leer'],
            [6, 'Metal Claw'],
            [12, 'Ancient Power'],
            [18, 'Fire Fang'],
            [24, 'Scary Face'],
            [30, 'Iron Head'],
            [36, 'Crunch'],
            [42, 'Lava Plume'],
            [48, 'Metal Sound'],
            [54, 'Earth Power'],
            [60, 'Heat Wave'],
            [66, 'Stone Edge'],
            [72, 'Magma Storm'],
        ],
    ],

    ['486',
        [
            [1, 'Pound'],
            [1, 'Confuse Ray'],
            [6, 'Payback'],
            [12, 'Revenge'],
            [18, 'Stomp'],
            [24, 'Protect'],
            [30, 'Knock Off'],
            [36, 'Mega Punch'],
            [42, 'Body Press'],
            [48, 'Wide Guard'],
            [54, 'Zen Headbutt'],
            [60, 'Heavy Slam'],
            [66, 'Hammer Arm'],
            [72, 'Giga Impact'],
            [78, 'Crush Grip'],
        ],
    ],

    ['487',
        [
            [1, 'Shadow Sneak'],
            [1, 'Defog'],
            [7, 'Dragon Breath'],
            [14, 'Ancient Power'],
            [21, 'Hex'],
            [28, 'Slash'],
            [35, 'Scary Face'],
            [42, 'Shadow Claw'],
            [49, 'Pain Split'],
            [56, 'Aura Sphere'],
            [63, 'Dragon Claw'],
            [70, 'Earth Power'],
            [77, 'Shadow Force'],
            [84, 'Destiny Bond'],
        ],
    ],

    ['488',
        [
            [1, 'Confusion'],
            [1, 'Double Team'],
            [6, 'Mist'],
            [12, 'Aurora Beam'],
            [18, 'Psybeam'],
            [24, 'Psycho Shift'],
            [30, 'Slash'],
            [36, 'Psycho Cut'],
            [42, 'Moonlight'],
            [48, 'Safeguard'],
            [54, 'Psychic'],
            [60, 'Moonblast'],
            [66, 'Future Sight'],
            [72, 'Lunar Dance'],
        ],
    ],

    ['489',
        [
            [1, 'Bubble'],
            [1, 'Water Sport'],
            [9, 'Charm'],
            [16, 'Supersonic'],
            [24, 'Bubble Beam'],
            [31, 'Acid Armor'],
            [39, 'Whirlpool'],
            [46, 'Water Pulse'],
            [54, 'Aqua Ring'],
            [61, 'Dive'],
            [69, 'Rain Dance'],
        ],
    ],

    ['490',
        [
            [1, 'Tail Glow'],
            [1, 'Bubble'],
            [1, 'Water Sport'],
            [9, 'Charm'],
            [16, 'Supersonic'],
            [24, 'Bubble Beam'],
            [31, 'Acid Armor'],
            [39, 'Whirlpool'],
            [46, 'Water Pulse'],
            [54, 'Aqua Ring'],
            [61, 'Dive'],
            [69, 'Rain Dance'],
            [76, 'Heart Swap'],
        ],
    ],

    ['491',
        [
            [1, 'Ominous Wind'],
            [1, 'Disable'],
            [11, 'Quick Attack'],
            [20, 'Hypnosis'],
            [29, 'Feint Attack'],
            [38, 'Nightmare'],
            [47, 'Double Team'],
            [57, 'Haze'],
            [66, 'Dark Void'],
            [75, 'Nasty Plot'],
            [84, 'Dream Eater'],
            [93, 'Dark Pulse'],
        ],
    ],

    ['492',
        [
            [1, 'Growth'],
            [10, 'Magical Leaf'],
            [19, 'Leech Seed'],
            [28, 'Synthesis'],
            [37, 'Sweet Scent'],
            [46, 'Natural Gift'],
            [55, 'Worry Seed'],
            [64, 'Aromatherapy'],
            [73, 'Energy Ball'],
            [82, 'Sweet Kiss'],
            [91, 'Healing Wish'],
            [100, 'Seed Flare'],
        ], //Land Forme
        [
            [1, 'Growth'],
            [10, 'Magical Leaf'],
            [19, 'Leech Seed'],
            [28, 'Quick Attack'],
            [37, 'Sweet Scent'],
            [46, 'Natural Gift'],
            [55, 'Worry Seed'],
            [64, 'Air Slash'],
            [73, 'Energy Ball'],
            [82, 'Sweet Kiss'],
            [91, 'Leaf Storm'],
            [100, 'Seed Flare'],
        ], //Sky Forme
    ], //Shaymin

    ['493',
        [
            [1, 'Seismic Toss'],
            [1, 'Cosmic Power'],
            [1, 'Natural Gift'],
            [1, 'Punishment'],
            [10, 'Gravity'],
            [20, 'Earth Power'],
            [30, 'Hyper Voice'],
            [40, 'Extreme Speed'],
            [50, 'Refresh'],
            [60, 'Future Sight'],
            [70, 'Recover'],
            [80, 'Hyper Beam'],
            [90, 'Perish Song'],
            [100, 'Judgment'],
        ],
    ],

    ['494',
        [
            [1, 'V Create'],
            [1, 'Quick Attack'],
            [1, 'Flame Charge'],
            [1, 'Confusion'],
            [1, 'Focus Energy'],
            [7, 'Work Up'],
            [14, 'Incinerate'],
            [21, 'Stored Power'],
            [28, 'Headbutt'],
            [35, 'Endure'],
            [42, 'Zen Headbutt'],
            [49, 'Inferno'],
            [56, 'Reversal'],
            [63, 'Searing Shot'],
            [70, 'Double Edge'],
            [77, 'Flare Blitz'],
            [84, 'Overheat'],
            [91, 'Final Gambit'],
        ],
    ],

    ['495',
        [
            [1, 'Tackle'],
            [4, 'Leer'],
            [7, 'Vine Whip'],
            [10, 'Wrap'],
            [13, 'Growth'],
            [16, 'Leaf Tornado'],
            [19, 'Leech Seed'],
            [22, 'Mega Drain'],
            [25, 'Slam'],
            [28, 'Leaf Blade'],
            [31, 'Coil'],
            [34, 'Giga Drain'],
            [37, 'Wring Out'],
            [40, 'Gastro Acid'],
            [43, 'Leaf Storm'],
        ],
    ],

    ['496',
        [
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Vine Whip'],
            [1, 'Wrap'],
            [4, 'Leer'],
            [7, 'Vine Whip'],
            [10, 'Wrap'],
            [13, 'Growth'],
            [16, 'Leaf Tornado'],
            [20, 'Leech Seed'],
            [24, 'Mega Drain'],
            [28, 'Slam'],
            [32, 'Leaf Blade'],
            [36, 'Coil'],
            [40, 'Giga Drain'],
            [44, 'Wring Out'],
            [48, 'Gastro Acid'],
            [52, 'Leaf Storm'],
        ],
    ],

    ['497',
        [
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Vine Whip'],
            [1, 'Wrap'],
            [4, 'Leer'],
            [7, 'Vine Whip'],
            [10, 'Wrap'],
            [13, 'Growth'],
            [16, 'Leaf Tornado'],
            [20, 'Leech Seed'],
            [24, 'Mega Drain'],
            [28, 'Slam'],
            [32, 'Leaf Blade'],
            [38, 'Coil'],
            [44, 'Giga Drain'],
            [50, 'Wring Out'],
            [56, 'Gastro Acid'],
            [62, 'Leaf Storm'],
        ],
    ],

    ['498',
        [
            [1, 'Tackle'],
            [3, 'Tail Whip'],
            [7, 'Ember'],
            [9, 'Odor Sleuth'],
            [13, 'Defense Curl'],
            [15, 'Flame Charge'],
            [19, 'Smog'],
            [21, 'Rollout'],
            [25, 'Take Down'],
            [27, 'Heat Crash'],
            [31, 'Assurance'],
            [33, 'Flamethrower'],
            [37, 'Head Smash'],
            [39, 'Roar'],
            [43, 'Flare Blitz'],
        ],
    ],

    ['499',
        [
            [0, 'Arm Thrust'],
            [1, 'Arm Thrust'],
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [1, 'Ember'],
            [1, 'Odor Sleuth'],
            [3, 'Tail Whip'],
            [7, 'Ember'],
            [9, 'Odor Sleuth'],
            [13, 'Defense Curl'],
            [15, 'Flame Charge'],
            [20, 'Smog'],
            [23, 'Rollout'],
            [28, 'Take Down'],
            [31, 'Heat Crash'],
            [36, 'Assurance'],
            [39, 'Flamethrower'],
            [44, 'Head Smash'],
            [47, 'Roar'],
            [52, 'Flare Blitz'],
        ],
    ],

    ['500',
        [
            [1, 'Arm Thrust'],
            [1, 'Hammer Arm'],
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [1, 'Ember'],
            [1, 'Odor Sleuth'],
            [3, 'Tail Whip'],
            [7, 'Ember'],
            [9, 'Odor Sleuth'],
            [13, 'Defense Curl'],
            [15, 'Flame Charge'],
            [20, 'Smog'],
            [23, 'Rollout'],
            [28, 'Take Down'],
            [31, 'Heat Crash'],
            [38, 'Assurance'],
            [43, 'Flamethrower'],
            [50, 'Head Smash'],
            [55, 'Roar'],
            [62, 'Flare Blitz'],
        ],
    ],

    ['501',
        [
            [1, 'Tackle'],
            [5, 'Tail Whip'],
            [7, 'Water Gun'],
            [11, 'Water Sport'],
            [13, 'Focus Energy'],
            [17, 'Razor Shell'],
            [19, 'Fury Cutter'],
            [23, 'Water Pulse'],
            [25, 'Revenge'],
            [29, 'Aqua Jet'],
            [31, 'Encore'],
            [35, 'Aqua Tail'],
            [37, 'Retaliate'],
            [41, 'Swords Dance'],
            [43, 'Hydro Pump'],
        ],
    ],

    ['502',
        [
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [1, 'Water Gun'],
            [1, 'Water Sport'],
            [5, 'Tail Whip'],
            [7, 'Water Gun'],
            [11, 'Water Sport'],
            [13, 'Focus Energy'],
            [18, 'Razor Shell'],
            [21, 'Fury Cutter'],
            [26, 'Water Pulse'],
            [29, 'Revenge'],
            [34, 'Aqua Jet'],
            [37, 'Encore'],
            [42, 'Aqua Tail'],
            [45, 'Retaliate'],
            [50, 'Swords Dance'],
            [53, 'Hydro Pump'],
        ],
    ],

    ['503',
        [
            [0, 'Slash'],
            [1, 'Slash'],
            [1, 'Megahorn'],
            [1, 'Tackle'],
            [1, 'Tail Whip'],
            [1, 'Water Gun'],
            [1, 'Water Sport'],
            [5, 'Tail Whip'],
            [7, 'Water Gun'],
            [11, 'Water Sport'],
            [13, 'Focus Energy'],
            [18, 'Razor Shell'],
            [21, 'Fury Cutter'],
            [25, 'Water Pulse'],
            [29, 'Revenge'],
            [34, 'Aqua Jet'],
            [39, 'Encore'],
            [46, 'Aqua Tail'],
            [51, 'Retaliate'],
            [58, 'Swords Dance'],
            [63, 'Hydro Pump'],
        ],
    ],

    ['504',
        [
            [1, 'Tackle'],
            [3, 'Leer'],
            [6, 'Bite'],
            [8, 'Bide'],
            [11, 'Detect'],
            [13, 'Sand Attack'],
            [16, 'Crunch'],
            [18, 'Hypnosis'],
            [21, 'Super Fang'],
            [23, 'After You'],
            [26, 'Focus Energy'],
            [28, 'Work Up'],
            [31, 'Hyper Fang'],
            [33, 'Nasty Plot'],
            [36, 'Mean Look'],
            [38, 'Baton Pass'],
            [41, 'Slam'],
        ],
    ],

    ['505',
        [
            [0, 'Confuse Ray'],
            [1, 'Confuse Ray'],
            [1, 'Rototiller'],
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Bite'],
            [1, 'Low Kick'],
            [3, 'Leer'],
            [6, 'Bite'],
            [8, 'Bide'],
            [11, 'Detect'],
            [13, 'Sand Attack'],
            [16, 'Crunch'],
            [18, 'Hypnosis'],
            [22, 'Super Fang'],
            [25, 'After You'],
            [29, 'Focus Energy'],
            [32, 'Psych Up'],
            [36, 'Hyper Fang'],
            [39, 'Nasty Plot'],
            [43, 'Mean Look'],
            [46, 'Baton Pass'],
            [50, 'Slam'],
        ],
    ],

    ['506',
        [
            [1, 'Tackle'],
            [1, 'Leer'],
            [4, 'Work Up'],
            [8, 'Bite'],
            [12, 'Retaliate'],
            [17, 'Baby Doll Eyes'],
            [20, 'Play Rough'],
            [24, 'Crunch'],
            [28, 'Take Down'],
            [32, 'Helping Hand'],
            [36, 'Reversal'],
            [40, 'Roar'],
            [44, 'Last Resort'],
            [48, 'Giga Impact'],
        ],
    ],

    ['507',
        [
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Work Up'],
            [1, 'Bite'],
            [12, 'Retaliate'],
            [19, 'Baby Doll Eyes'],
            [24, 'Play Rough'],
            [30, 'Crunch'],
            [36, 'Take Down'],
            [42, 'Helping Hand'],
            [48, 'Reversal'],
            [54, 'Roar'],
            [60, 'Last Resort'],
            [66, 'Giga Impact'],
        ],
    ],

    ['508',
        [
            [1, 'Ice Fang'],
            [1, 'Fire Fang'],
            [1, 'Thunder Fang'],
            [1, 'Tackle'],
            [1, 'Leer'],
            [1, 'Work Up'],
            [1, 'Bite'],
            [12, 'Retaliate'],
            [19, 'Baby Doll Eyes'],
            [24, 'Play Rough'],
            [30, 'Crunch'],
            [38, 'Take Down'],
            [46, 'Helping Hand'],
            [54, 'Reversal'],
            [62, 'Roar'],
            [70, 'Last Resort'],
            [78, 'Giga Impact'],
        ],
    ],

    ['509',
        [
            [1, 'Scratch'],
            [1, 'Growl'],
            [4, 'Sand Attack'],
            [5, 'Fake Out'],
            [12, 'Fury Swipes'],
            [16, 'Torment'],
            [21, 'Assurance'],
            [24, 'Hone Claws'],
            [28, 'Sucker Punch'],
            [32, 'Nasty Plot'],
            [36, 'Night Slash'],
            [40, 'Play Rough'],
        ],
    ],

    ['510',
        [
            [1, 'Scratch'],
            [1, 'Growl'],
            [1, 'Sand Attack'],
            [1, 'Fake Out'],
            [12, 'Fury Swipes'],
            [16, 'Torment'],
            [23, 'Assurance'],
            [28, 'Hone Claws'],
            [34, 'Sucker Punch'],
            [40, 'Nasty Plot'],
            [46, 'Night Slash'],
            [52, 'Play Rough'],
        ],
    ],

    ['511',
        [
            [1, 'Scratch'],
            [1, 'Play Nice'],
            [4, 'Leer'],
            [7, 'Lick'],
            [10, 'Vine Whip'],
            [13, 'Fury Swipes'],
            [16, 'Leech Seed'],
            [19, 'Bite'],
            [22, 'Seed Bomb'],
            [25, 'Torment'],
            [28, 'Fling'],
            [31, 'Acrobatics'],
            [34, 'Grass Knot'],
            [37, 'Recycle'],
            [40, 'Natural Gift'],
            [43, 'Crunch'],
        ],
    ],

    ['512',
        [
            [1, 'Leer'],
            [1, 'Lick'],
            [1, 'Fury Swipes'],
            [1, 'Seed Bomb'],
        ],
    ],

    ['513',
        [
            [1, 'Scratch'],
            [1, 'Play Nice'],
            [4, 'Leer'],
            [7, 'Lick'],
            [10, 'Incinerate'],
            [13, 'Fury Swipes'],
            [16, 'Yawn'],
            [19, 'Bite'],
            [22, 'Flame Burst'],
            [25, 'Amnesia'],
            [28, 'Fling'],
            [31, 'Acrobatics'],
            [34, 'Fire Blast'],
            [37, 'Recycle'],
            [40, 'Natural Gift'],
            [43, 'Crunch'],
        ],
    ],

    ['514',
        [
            [1, 'Leer'],
            [1, 'Lick'],
            [1, 'Fury Swipes'],
            [1, 'Flame Burst'],
        ],
    ],

    ['515',
        [
            [1, 'Scratch'],
            [1, 'Play Nice'],
            [4, 'Leer'],
            [7, 'Lick'],
            [10, 'Water Gun'],
            [13, 'Fury Swipes'],
            [16, 'Water Sport'],
            [19, 'Bite'],
            [22, 'Scald'],
            [25, 'Taunt'],
            [28, 'Fling'],
            [31, 'Acrobatics'],
            [34, 'Brine'],
            [37, 'Recycle'],
            [40, 'Natural Gift'],
            [43, 'Crunch'],
        ],
    ],

    ['516',
        [
            [1, 'Leer'],
            [1, 'Lick'],
            [1, 'Fury Swipes'],
            [1, 'Scald'],
        ],
    ],

    ['517',
        [
            [1, 'Stored Power'],
            [1, 'Defense Curl'],
            [4, 'Hypnosis'],
            [8, 'Psybeam'],
            [12, 'Imprison'],
            [16, 'Moonlight'],
            [20, 'Magic Coat'],
            [24, 'Zen Headbutt'],
            [28, 'Calm Mind'],
            [32, 'Yawn'],
            [36, 'Psychic'],
            [40, 'Moonblast'],
            [44, 'Dream Eater'],
            [48, 'Future Sight'],
            [52, 'Wonder Room'],
        ],
    ],

    ['518',
        [
            [1, 'Psychic Terrain'],
            [1, 'Imprison'],
            [1, 'Moonlight'],
            [1, 'Magic Coat'],
            [1, 'Zen Headbutt'],
            [1, 'Calm Mind'],
            [1, 'Yawn'],
            [1, 'Psychic'],
            [1, 'Moonblast'],
            [1, 'Dream Eater'],
            [1, 'Future Sight'],
            [1, 'Wonder Room'],
            [1, 'Stored Power'],
            [1, 'Defense Curl'],
            [1, 'Hypnosis'],
            [1, 'Psybeam'],
        ],
    ],

    ['519',
        [
            [1, 'Gust'],
            [1, 'Growl'],
            [4, 'Leer'],
            [8, 'Quick Attack'],
            [12, 'Taunt'],
            [16, 'Air Cutter'],
            [20, 'Swagger'],
            [24, 'Feather Dance'],
            [28, 'Detect'],
            [32, 'Air Slash'],
            [36, 'Roost'],
            [40, 'Tailwind'],
            [44, 'Sky Attack'],
        ],
    ],

    ['520',
        [
            [1, 'Gust'],
            [1, 'Growl'],
            [1, 'Leer'],
            [1, 'Quick Attack'],
            [12, 'Taunt'],
            [16, 'Air Cutter'],
            [20, 'Swagger'],
            [26, 'Feather Dance'],
            [34, 'Detect'],
            [38, 'Air Slash'],
            [44, 'Roost'],
            [50, 'Tailwind'],
            [56, 'Sky Attack'],
        ],
    ],

    ['521',
        [
            [1, 'Gust'],
            [1, 'Growl'],
            [1, 'Leer'],
            [1, 'Quick Attack'],
            [12, 'Taunt'],
            [16, 'Air Cutter'],
            [20, 'Swagger'],
            [26, 'Feather Dance'],
            [36, 'Detect'],
            [42, 'Air Slash'],
            [50, 'Roost'],
            [58, 'Tailwind'],
            [66, 'Sky Attack'],
        ],
    ],

    ['522',
        [
            [1, 'Quick Attack'],
            [4, 'Tail Whip'],
            [8, 'Charge'],
            [11, 'Shock Wave'],
            [15, 'Thunder Wave'],
            [18, 'Flame Charge'],
            [22, 'Pursuit'],
            [25, 'Spark'],
            [29, 'Stomp'],
            [32, 'Discharge'],
            [36, 'Agility'],
            [39, 'Wild Charge'],
            [43, 'Thrash'],
        ],
    ],

    ['523',
        [
            [1, 'Ion Deluge'],
            [1, 'Quick Attack'],
            [1, 'Tail Whip'],
            [1, 'Charge'],
            [1, 'Thunder Wave'],
            [4, 'Tail Whip'],
            [8, 'Charge'],
            [11, 'Shock Wave'],
            [15, 'Thunder Wave'],
            [18, 'Flame Charge'],
            [22, 'Pursuit'],
            [25, 'Spark'],
            [31, 'Stomp'],
            [36, 'Discharge'],
            [42, 'Agility'],
            [47, 'Wild Charge'],
            [53, 'Thrash'],
            [58, 'Ion Deluge'],
        ],
    ],

    ['524',
        [
            [1, 'Sand Attack'],
            [1, 'Tackle'],
            [4, 'Harden'],
            [8, 'Stealth Rock'],
            [12, 'Mud Slap'],
            [16, 'Smack Down'],
            [20, 'Iron Defense'],
            [24, 'Headbutt'],
            [28, 'Rock Slide'],
            [32, 'Rock Blast'],
            [36, 'Sandstorm'],
            [40, 'Stone Edge'],
            [44, 'Explosion'],
        ],
    ],

    ['525',
        [
            [0, 'Power Gem'],
            [1, 'Power Gem'],
            [1, 'Sand Attack'],
            [1, 'Tackle'],
            [1, 'Harden'],
            [1, 'Stealth Rock'],
            [12, 'Mud Slap'],
            [16, 'Smack Down'],
            [20, 'Iron Defense'],
            [24, 'Headbutt'],
            [30, 'Rock Slide'],
            [36, 'Rock Blast'],
            [42, 'Sandstorm'],
            [48, 'Stone Edge'],
            [54, 'Explosion'],
        ],
    ],

    ['526',
        [
            [1, 'Power Gem'],
            [1, 'Sand Attack'],
            [1, 'Tackle'],
            [1, 'Harden'],
            [1, 'Stealth Rock'],
            [12, 'Mud Slap'],
            [16, 'Smack Down'],
            [20, 'Iron Defense'],
            [24, 'Headbutt'],
            [30, 'Rock Slide'],
            [36, 'Rock Blast'],
            [42, 'Sandstorm'],
            [48, 'Stone Edge'],
            [54, 'Explosion'],
        ],
    ],

    ['527',
        [
            [1, 'Gust'],
            [1, 'Attract'],
            [5, 'Confusion'],
            [10, 'Endeavor'],
            [15, 'Air Cutter'],
            [20, 'Imprison'],
            [25, 'Assurance'],
            [30, 'Amnesia'],
            [35, 'Air Slash'],
            [40, 'Psychic'],
            [45, 'Calm Mind'],
            [50, 'Future Sight'],
            [55, 'Simple Beam'],
        ],
    ],

    ['528',
        [
            [1, 'Gust'],
            [1, 'Attract'],
            [1, 'Confusion'],
            [1, 'Endeavor'],
            [15, 'Air Cutter'],
            [20, 'Imprison'],
            [25, 'Assurance'],
            [30, 'Amnesia'],
            [35, 'Air Slash'],
            [40, 'Psychic'],
            [45, 'Calm Mind'],
            [50, 'Future Sight'],
            [55, 'Simple Beam'],
        ],
    ],

    ['529',
        [
            [1, 'Mud Slap'],
            [1, 'Rapid Spin'],
            [4, 'Scratch'],
            [8, 'Hone Claws'],
            [12, 'Fury Swipes'],
            [16, 'Metal Claw'],
            [20, 'Sandstorm'],
            [24, 'Crush Claw'],
            [28, 'Rock Slide'],
            [32, 'Dig'],
            [36, 'Swords Dance'],
            [40, 'Drill Run'],
            [44, 'Earthquake'],
            [48, 'Fissure'],
        ],
    ],

    ['530',
        [
            [0, 'Horn Drill'],
            [1, 'Horn Drill'],
            [1, 'Mud Slap'],
            [1, 'Rapid Spin'],
            [1, 'Scratch'],
            [1, 'Hone Claws'],
            [12, 'Fury Swipes'],
            [16, 'Metal Claw'],
            [20, 'Sandstorm'],
            [24, 'Crush Claw'],
            [28, 'Rock Slide'],
            [34, 'Dig'],
            [40, 'Swords Dance'],
            [46, 'Drill Run'],
            [52, 'Earthquake'],
            [58, 'Fissure'],
        ],
    ],

    ['531',
        [
            [1, 'Pound'],
            [1, 'Play Nice'],
            [4, 'Disarming Voice'],
            [9, 'Baby Doll Eyes'],
            [12, 'Helping Hand'],
            [16, 'Growl'],
            [20, 'Zen Headbutt'],
            [24, 'Life Dew'],
            [28, 'After You'],
            [32, 'Take Down'],
            [36, 'Simple Beam'],
            [40, 'Hyper Voice'],
            [44, 'Heal Pulse'],
            [48, 'Double Edge'],
            [52, 'Entrainment'],
            [56, 'Misty Terrain'],
            [60, 'Last Resort'],
        ],
    ],

    ['532',
        [
            [1, 'Pound'],
            [1, 'Leer'],
            [4, 'Low Kick'],
            [8, 'Rock Throw'],
            [12, 'Focus Energy'],
            [16, 'Bulk Up'],
            [20, 'Rock Slide'],
            [24, 'Slam'],
            [28, 'Scary Face'],
            [32, 'Dynamic Punch'],
            [36, 'Hammer Arm'],
            [40, 'Stone Edge'],
            [44, 'Superpower'],
            [48, 'Focus Punch'],
        ],
    ],

    ['533',
        [
            [1, 'Pound'],
            [1, 'Leer'],
            [1, 'Low Kick'],
            [1, 'Rock Throw'],
            [12, 'Focus Energy'],
            [16, 'Bulk Up'],
            [20, 'Rock Slide'],
            [24, 'Slam'],
            [30, 'Scary Face'],
            [36, 'Dynamic Punch'],
            [42, 'Hammer Arm'],
            [48, 'Stone Edge'],
            [54, 'Superpower'],
            [60, 'Focus Punch'],
        ],
    ],

    ['534',
        [
            [1, 'Pound'],
            [1, 'Leer'],
            [1, 'Low Kick'],
            [1, 'Rock Throw'],
            [12, 'Focus Energy'],
            [16, 'Bulk Up'],
            [20, 'Rock Slide'],
            [24, 'Slam'],
            [30, 'Scary Face'],
            [36, 'Dynamic Punch'],
            [42, 'Hammer Arm'],
            [48, 'Stone Edge'],
            [54, 'Superpower'],
            [60, 'Focus Punch'],
        ],
    ],

    ['535',
        [
            [1, 'Echoed Voice'],
            [1, 'Growl'],
            [4, 'Acid'],
            [8, 'Supersonic'],
            [12, 'Mud Shot'],
            [16, 'Round'],
            [20, 'Bubble Beam'],
            [24, 'Flail'],
            [28, 'Uproar'],
            [32, 'Aqua Ring'],
            [36, 'Hyper Voice'],
            [40, 'Muddy Water'],
            [44, 'Rain Dance'],
            [48, 'Hydro Pump'],
        ],
    ],

    ['536',
        [
            [1, 'Echoed Voice'],
            [1, 'Growl'],
            [1, 'Acid'],
            [1, 'Supersonic'],
            [12, 'Mud Shot'],
            [16, 'Round'],
            [20, 'Bubble Beam'],
            [24, 'Flail'],
            [30, 'Uproar'],
            [37, 'Aqua Ring'],
            [42, 'Hyper Voice'],
            [48, 'Muddy Water'],
            [54, 'Rain Dance'],
            [60, 'Hydro Pump'],
        ],
    ],

    ['537',
        [
            [0, 'Drain Punch'],
            [1, 'Drain Punch'],
            [1, 'Gastro Acid'],
            [1, 'Echoed Voice'],
            [1, 'Growl'],
            [1, 'Acid'],
            [1, 'Supersonic'],
            [12, 'Mud Shot'],
            [16, 'Round'],
            [20, 'Bubble Beam'],
            [24, 'Flail'],
            [30, 'Uproar'],
            [39, 'Aqua Ring'],
            [46, 'Hyper Voice'],
            [54, 'Muddy Water'],
            [62, 'Rain Dance'],
            [70, 'Hydro Pump'],
        ],
    ],

    ['538',
        [
            [1, 'Bind'],
            [1, 'Leer'],
            [5, 'Focus Energy'],
            [10, 'Circle Throw'],
            [15, 'Wide Guard'],
            [20, 'Revenge'],
            [25, 'Bulk Up'],
            [30, 'Storm Throw'],
            [35, 'Vital Throw'],
            [40, 'Seismic Toss'],
            [45, 'Endure'],
            [50, 'Reversal'],
            [55, 'Superpower'],
        ],
    ],

    ['539',
        [
            [1, 'Rock Smash'],
            [1, 'Leer'],
            [5, 'Focus Energy'],
            [10, 'Double Kick'],
            [15, 'Quick Guard'],
            [20, 'Low Sweep'],
            [25, 'Bulk Up'],
            [30, 'Retaliate'],
            [35, 'Brick Break'],
            [40, 'Counter'],
            [45, 'Endure'],
            [50, 'Reversal'],
            [55, 'Close Combat'],
        ],
    ],

    ['540',
        [
            [1, 'Tackle'],
            [1, 'String Shot'],
            [8, 'Bug Bite'],
            [15, 'Razor Leaf'],
            [22, 'Struggle Bug'],
            [29, 'Endure'],
            [31, 'Sticky Web'],
            [36, 'Bug Buzz'],
            [43, 'Flail'],
        ],
    ],

    ['541',
        [
            [0, 'Protect'],
            [1, 'Protect'],
            [1, 'Grass Whistle'],
            [1, 'Tackle'],
            [1, 'String Shot'],
            [1, 'Bug Bite'],
            [1, 'Razor Leaf'],
        ],
    ],

    ['542',
        [
            [0, 'Slash'],
            [1, 'Slash'],
            [1, 'False Swipe'],
            [1, 'Tackle'],
            [1, 'String Shot'],
            [1, 'Bug Bite'],
            [1, 'Razor Leaf'],
            [8, 'Bug Bite'],
            [15, 'Razor Leaf'],
            [22, 'Struggle Bug'],
            [29, 'Fell Stinger'],
            [32, 'Helping Hand'],
            [36, 'Leaf Blade'],
            [39, 'X Scissor'],
            [43, 'Entrainment'],
            [46, 'Swords Dance'],
            [50, 'Leaf Storm'],
        ],
    ],

    ['543',
        [
            [1, 'Poison Sting'],
            [1, 'Defense Curl'],
            [4, 'Rollout'],
            [8, 'Protect'],
            [12, 'Poison Tail'],
            [16, 'Screech'],
            [20, 'Bug Bite'],
            [24, 'Venoshock'],
            [28, 'Take Down'],
            [32, 'Agility'],
            [36, 'Toxic'],
            [40, 'Venom Drench'],
            [44, 'Double Edge'],
        ],
    ],

    ['544',
        [
            [0, 'Iron Defense'],
            [1, 'Iron Defense'],
            [1, 'Poison Sting'],
            [1, 'Defense Curl'],
            [1, 'Rollout'],
            [1, 'Protect'],
            [12, 'Poison Tail'],
            [16, 'Screech'],
            [20, 'Bug Bite'],
            [26, 'Venoshock'],
            [32, 'Take Down'],
            [38, 'Agility'],
            [44, 'Toxic'],
            [50, 'Venom Drench'],
            [56, 'Double Edge'],
        ],
    ],

    ['545',
        [
            [1, 'Iron Defense'],
            [1, 'Baton Pass'],
            [1, 'Poison Sting'],
            [1, 'Defense Curl'],
            [1, 'Rollout'],
            [1, 'Protect'],
            [12, 'Poison Tail'],
            [16, 'Screech'],
            [20, 'Bug Bite'],
            [26, 'Venoshock'],
            [34, 'Take Down'],
            [42, 'Agility'],
            [50, 'Toxic'],
            [58, 'Venom Drench'],
            [66, 'Double Edge'],
            [74, 'Megahorn'],
        ],
    ],

    ['546',
        [
            [1, 'Absorb'],
            [1, 'Helping Hand'],
            [3, 'Fairy Wind'],
            [6, 'Stun Spore'],
            [12, 'Mega Drain'],
            [15, 'Razor Leaf'],
            [18, 'Growth'],
            [21, 'Poison Powder'],
            [24, 'Giga Drain'],
            [27, 'Charm'],
            [30, 'Leech Seed'],
            [33, 'Cotton Spore'],
            [36, 'Energy Ball'],
            [39, 'Sunny Day'],
            [42, 'Endeavor'],
            [45, 'Cotton Guard'],
            [48, 'Solar Beam'],
        ],
    ],

    ['547',
        [
            [1, 'Gust'],
            [1, 'Tailwind'],
            [1, 'Moonblast'],
            [1, 'Memento'],
            [1, 'Hurricane'],
            [1, 'Mega Drain'],
            [1, 'Razor Leaf'],
            [1, 'Growth'],
            [1, 'Poison Powder'],
            [1, 'Giga Drain'],
            [1, 'Charm'],
            [1, 'Leech Seed'],
            [1, 'Cotton Spore'],
            [1, 'Energy Ball'],
            [1, 'Sunny Day'],
            [1, 'Endeavor'],
            [1, 'Cotton Guard'],
            [1, 'Solar Beam'],
            [1, 'Absorb'],
            [1, 'Helping Hand'],
            [1, 'Fairy Wind'],
            [1, 'Stun Spore'],
        ],
    ],

    ['548',
        [
            [1, 'Absorb'],
            [1, 'Growth'],
            [3, 'Helping Hand'],
            [6, 'Stun Spore'],
            [9, 'Mega Drain'],
            [12, 'Aromatherapy'],
            [15, 'Magical Leaf'],
            [18, 'Sleep Powder'],
            [21, 'Giga Drain'],
            [24, 'Leech Seed'],
            [27, 'After You'],
            [30, 'Energy Ball'],
            [33, 'Synthesis'],
            [36, 'Sunny Day'],
            [39, 'Entrainment'],
            [42, 'Leaf Storm'],
        ],
    ],

    ['549',
        [
            [0, 'Petal Dance'],
            [1, 'Petal Dance'],
            [1, 'Petal Blizzard'],
            [1, 'Quiver Dance'],
            [1, 'Teeter Dance'],
            [1, 'Mega Drain'],
            [1, 'Aromatherapy'],
            [1, 'Magical Leaf'],
            [1, 'Sleep Powder'],
            [1, 'Giga Drain'],
            [1, 'Leech Seed'],
            [1, 'After You'],
            [1, 'Energy Ball'],
            [1, 'Synthesis'],
            [1, 'Sunny Day'],
            [1, 'Entrainment'],
            [1, 'Leaf Storm'],
            [1, 'Absorb'],
            [1, 'Growth'],
            [1, 'Helping Hand'],
            [1, 'Stun Spore'],
        ],
    ],

    ['550',
        [
            [1, 'Water Gun'],
            [1, 'Tail Whip'],
            [4, 'Tackle'],
            [8, 'Flail'],
            [12, 'Aqua Jet'],
            [16, 'Bite'],
            [20, 'Scary Face'],
            [24, 'Headbutt'],
            [28, 'Soak'],
            [32, 'Crunch'],
            [36, 'Take Down'],
            [40, 'Final Gambit'],
            [44, 'Aqua Tail'],
            [48, 'Thrash'],
            [52, 'Double Edge'],
            [56, 'Head Smash'],
        ],
    ],

    ['551',
        [
            [1, 'Power Trip'],
            [1, 'Leer'],
            [3, 'Sand Attack'],
            [6, 'Hone Claws'],
            [9, 'Sand Tomb'],
            [12, 'Scary Face'],
            [15, 'Bite'],
            [18, 'Torment'],
            [21, 'Dig'],
            [24, 'Swagger'],
            [27, 'Crunch'],
            [30, 'Sandstorm'],
            [33, 'Foul Play'],
            [36, 'Earthquake'],
            [39, 'Thrash'],
        ],
    ],

    ['552',
        [
            [1, 'Power Trip'],
            [1, 'Leer'],
            [1, 'Sand Attack'],
            [1, 'Hone Claws'],
            [9, 'Sand Tomb'],
            [12, 'Scary Face'],
            [15, 'Bite'],
            [18, 'Torment'],
            [21, 'Dig'],
            [24, 'Swagger'],
            [27, 'Crunch'],
            [32, 'Sandstorm'],
            [35, 'Foul Play'],
            [42, 'Earthquake'],
            [47, 'Thrash'],
        ],
    ],

    ['553',
        [
            [1, 'Power Trip'],
            [1, 'Leer'],
            [1, 'Sand Attack'],
            [1, 'Hone Claws'],
            [9, 'Sand Tomb'],
            [12, 'Scary Face'],
            [15, 'Bite'],
            [18, 'Torment'],
            [21, 'Dig'],
            [24, 'Swagger'],
            [27, 'Crunch'],
            [32, 'Sandstorm'],
            [35, 'Foul Play'],
            [44, 'Earthquake'],
            [51, 'Thrash'],
            [58, 'Outrage'],
        ],
    ],

    ['554',
        [
            [1, 'Ember'],
            [1, 'Tackle'],
            [4, 'Taunt'],
            [8, 'Bite'],
            [12, 'Incinerate'],
            [16, 'Work Up'],
            [20, 'Fire Fang'],
            [24, 'Headbutt'],
            [28, 'Fire Punch'],
            [32, 'Uproar'],
            [36, 'Belly Drum'],
            [40, 'Flare Blitz'],
            [44, 'Thrash'],
            [48, 'Superpower'],
        ], //Unovan
        [
            [1, 'Powder Snow'],
            [1, 'Tackle'],
            [4, 'Taunt'],
            [8, 'Bite'],
            [12, 'Avalanche'],
            [16, 'Work Up'],
            [20, 'Ice Fang'],
            [24, 'Headbutt'],
            [28, 'Ice Punch'],
            [32, 'Uproar'],
            [36, 'Belly Drum'],
            [40, 'Blizzard'],
            [44, 'Thrash'],
            [48, 'Superpower'],
        ], //Galarian
    ], //Darumaka

    ['555',
        [
            [0, 'Hammer Arm'],
            [1, 'Hammer Arm'],
            [1, 'Ember'],
            [1, 'Tackle'],
            [1, 'Taunt'],
            [1, 'Bite'],
            [12, 'Incinerate'],
            [16, 'Work Up'],
            [20, 'Fire Fang'],
            [24, 'Headbutt'],
            [28, 'Fire Punch'],
            [32, 'Uproar'],
            [38, 'Belly Drum'],
            [44, 'Flare Blitz'],
            [50, 'Thrash'],
            [56, 'Superpower'],
        ], //Unovan
        [
            [0, 'Icicle Crash'],
            [1, 'Icicle Crash'],
            [1, 'Powder Snow'],
            [1, 'Tackle'],
            [1, 'Taunt'],
            [1, 'Bite'],
            [12, 'Avalanche'],
            [16, 'Work Up'],
            [20, 'Ice Fang'],
            [24, 'Headbutt'],
            [28, 'Ice Punch'],
            [32, 'Uproar'],
            [38, 'Belly Drum'],
            [44, 'Blizzard'],
            [50, 'Thrash'],
            [56, 'Superpower'],
        ], //Galarian
    ], //Darmanitan

    ['556',
        [
            [1, 'Spiky Shield'],
            [1, 'Peck'],
            [1, 'Absorb'],
            [1, 'After You'],
            [1, 'Ingrain'],
            [4, 'Growth'],
            [8, 'Mega Drain'],
            [12, 'Leech Seed'],
            [16, 'Sucker Punch'],
            [20, 'Pin Missile'],
            [24, 'Giga Drain'],
            [28, 'Sweet Scent'],
            [32, 'Synthesis'],
            [36, 'Petal Blizzard'],
            [40, 'Cotton Spore'],
            [44, 'Sunny Day'],
            [48, 'Solar Beam'],
            [52, 'Acupressure'],
            [56, 'Petal Dance'],
            [60, 'Cotton Guard'],
        ],
    ],

    ['557',
        [
            [1, 'Fury Cutter'],
            [1, 'Sand Attack'],
            [4, 'Withdraw'],
            [8, 'Smack Down'],
            [12, 'Bug Bite'],
            [16, 'Flail'],
            [20, 'Slash'],
            [24, 'Rock Slide'],
            [28, 'Stealth Rock'],
            [32, 'Rock Blast'],
            [36, 'X Scissor'],
            [40, 'Rock Polish'],
            [44, 'Shell Smash'],
            [48, 'Rock Wrecker'],
        ],
    ],

    ['558',
        [
            [1, 'Fury Cutter'],
            [1, 'Sand Attack'],
            [1, 'Withdraw'],
            [1, 'Smack Down'],
            [12, 'Bug Bite'],
            [16, 'Flail'],
            [20, 'Slash'],
            [24, 'Rock Slide'],
            [28, 'Stealth Rock'],
            [32, 'Rock Blast'],
            [38, 'X Scissor'],
            [44, 'Rock Polish'],
            [50, 'Shell Smash'],
            [56, 'Rock Wrecker'],
        ],
    ],

    ['559',
        [
            [1, 'Low Kick'],
            [1, 'Leer'],
            [4, 'Payback'],
            [8, 'Headbutt'],
            [12, 'Sand Attack'],
            [16, 'Facade'],
            [20, 'Protect'],
            [24, 'Beat Up'],
            [28, 'Scary Face'],
            [32, 'Brick Break'],
            [36, 'Swagger'],
            [40, 'Crunch'],
            [44, 'High Jump Kick'],
            [48, 'Focus Punch'],
            [52, 'Head Smash'],
        ],
    ],

    ['560',
        [
            [1, 'Low Kick'],
            [1, 'Leer'],
            [1, 'Payback'],
            [1, 'Headbutt'],
            [12, 'Sand Attack'],
            [16, 'Facade'],
            [20, 'Protect'],
            [24, 'Beat Up'],
            [28, 'Scary Face'],
            [32, 'Brick Break'],
            [36, 'Swagger'],
            [42, 'Crunch'],
            [48, 'High Jump Kick'],
            [54, 'Focus Punch'],
            [60, 'Head Smash'],
        ],
    ],

    ['561',
        [
            [1, 'Gust'],
            [1, 'Confusion'],
            [5, 'Gravity'],
            [10, 'Hypnosis'],
            [15, 'Air Cutter'],
            [20, 'Psybeam'],
            [25, 'Whirlwind'],
            [30, 'Cosmic Power'],
            [35, 'Air Slash'],
            [40, 'Psychic'],
            [45, 'Tailwind'],
            [50, 'Light Screen'],
            [50, 'Reflect'],
            [55, 'Sky Attack'],
            [60, 'Skill Swap'],
        ],
    ],

    ['562',
        [
            [1, 'Astonish'],
            [1, 'Protect'],
            [4, 'Haze'],
            [8, 'Night Shade'],
            [12, 'Disable'],
            [16, 'Will O Wisp'],
            [20, 'Crafty Shield'],
            [24, 'Hex'],
            [28, 'Mean Look'],
            [32, 'Grudge'],
            [36, 'Curse'],
            [40, 'Shadow Ball'],
            [44, 'Dark Pulse'],
            [48, 'Power Split'],
            [48, 'Guard Split'],
            [52, 'Destiny Bond'],
        ], //Unovan
        [
            [1, 'Astonish'],
            [1, 'Protect'],
            [4, 'Haze'],
            [8, 'Night Shade'],
            [12, 'Disable'],
            [16, 'Brutal Swing'],
            [20, 'Crafty Shield'],
            [24, 'Hex'],
            [28, 'Mean Look'],
            [32, 'Slam'],
            [36, 'Curse'],
            [40, 'Shadow Ball'],
            [44, 'Earthquake'],
            [48, 'Power Split'],
            [48, 'Guard Split'],
            [52, 'Destiny Bond'],
        ], //Galarian
    ], //Yamask

    ['563',
        [
            [0, 'Shadow Claw'],
            [1, 'Shadow Claw'],
            [1, 'Scary Face'],
            [1, 'Astonish'],
            [1, 'Protect'],
            [1, 'Haze'],
            [1, 'Night Shade'],
            [12, 'Disable'],
            [16, 'Will O Wisp'],
            [20, 'Crafty Shield'],
            [24, 'Hex'],
            [28, 'Mean Look'],
            [32, 'Grudge'],
            [38, 'Curse'],
            [44, 'Shadow Ball'],
            [50, 'Dark Pulse'],
            [56, 'Power Split'],
            [56, 'Guard Split'],
            [62, 'Destiny Bond'],
        ],
    ],

    ['564',
        [
            [1, 'Water Gun'],
            [1, 'Withdraw'],
            [3, 'Protect'],
            [6, 'Aqua Jet'],
            [9, 'Smack Down'],
            [12, 'Ancient Power'],
            [15, 'Bite'],
            [18, 'Wide Guard'],
            [21, 'Brine'],
            [24, 'Rock Slide'],
            [27, 'Crunch'],
            [30, 'Curse'],
            [33, 'Iron Defense'],
            [36, 'Aqua Tail'],
            [39, 'Rain Dance'],
            [42, 'Hydro Pump'],
            [45, 'Shell Smash'],
        ],
    ],

    ['565',
        [
            [1, 'Water Gun'],
            [1, 'Withdraw'],
            [1, 'Protect'],
            [1, 'Aqua Jet'],
            [9, 'Smack Down'],
            [12, 'Ancient Power'],
            [15, 'Bite'],
            [18, 'Wide Guard'],
            [21, 'Brine'],
            [24, 'Rock Slide'],
            [27, 'Crunch'],
            [30, 'Curse'],
            [33, 'Iron Defense'],
            [36, 'Aqua Tail'],
            [41, 'Rain Dance'],
            [46, 'Hydro Pump'],
            [51, 'Shell Smash'],
        ],
    ],

    ['566',
        [
            [1, 'Quick Attack'],
            [1, 'Leer'],
            [3, 'Rock Throw'],
            [6, 'Wing Attack'],
            [9, 'Dragon Breath'],
            [12, 'Ancient Power'],
            [15, 'Pluck'],
            [18, 'Quick Guard'],
            [21, 'U Turn'],
            [24, 'Rock Slide'],
            [27, 'Scary Face'],
            [30, 'Crunch'],
            [33, 'Agility'],
            [36, 'Tailwind'],
            [39, 'Dragon Claw'],
            [42, 'Thrash'],
            [45, 'Endeavor'],
        ],
    ],

    ['567',
        [
            [1, 'Quick Attack'],
            [1, 'Leer'],
            [1, 'Rock Throw'],
            [1, 'Wing Attack'],
            [9, 'Dragon Breath'],
            [12, 'Ancient Power'],
            [15, 'Pluck'],
            [18, 'Quick Guard'],
            [21, 'U Turn'],
            [24, 'Rock Slide'],
            [27, 'Scary Face'],
            [30, 'Crunch'],
            [33, 'Agility'],
            [36, 'Tailwind'],
            [41, 'Dragon Claw'],
            [46, 'Thrash'],
            [51, 'Endeavor'],
        ],
    ],

    ['568',
        [
            [1, 'Pound'],
            [1, 'Poison Gas'],
            [3, 'Recycle'],
            [6, 'Acid Spray'],
            [9, 'Amnesia'],
            [12, 'Clear Smog'],
            [15, 'Toxic Spikes'],
            [18, 'Sludge'],
            [21, 'Stockpile'],
            [21, 'Swallow'],
            [24, 'Take Down'],
            [27, 'Sludge Bomb'],
            [30, 'Toxic'],
            [33, 'Belch'],
            [37, 'Pain Split'],
            [39, 'Gunk Shot'],
            [42, 'Explosion'],
        ],
    ],

    ['569',
        [
            [1, 'Pound'],
            [1, 'Take Down'],
            [1, 'Metal Claw'],
            [1, 'Poison Gas'],
            [1, 'Recycle'],
            [1, 'Acid Spray'],
            [9, 'Amnesia'],
            [12, 'Clear Smog'],
            [15, 'Toxic Spikes'],
            [18, 'Sludge'],
            [21, 'Stockpile'],
            [21, 'Swallow'],
            [24, 'Body Slam'],
            [27, 'Sludge Bomb'],
            [30, 'Toxic'],
            [33, 'Belch'],
            [39, 'Pain Split'],
            [43, 'Gunk Shot'],
            [48, 'Explosion'],
        ],
    ],

    ['570',
        [
            [1, 'Scratch'],
            [1, 'Leer'],
            [4, 'Torment'],
            [8, 'Hone Claws'],
            [12, 'Fury Swipes'],
            [16, 'Scary Face'],
            [20, 'Taunt'],
            [24, 'Knock Off'],
            [28, 'Fake Tears'],
            [32, 'Agility'],
            [36, 'Imprison'],
            [40, 'Night Daze'],
            [44, 'Nasty Plot'],
            [48, 'Foul Play'],
        ],
    ],

    ['571',
        [
            [0, 'Night Slash'],
            [1, 'Night Slash'],
            [1, 'U Turn'],
            [1, 'Scratch'],
            [1, 'Leer'],
            [1, 'Torment'],
            [1, 'Hone Claws'],
            [12, 'Fury Swipes'],
            [16, 'Scary Face'],
            [20, 'Taunt'],
            [24, 'Knock Off'],
            [28, 'Fake Tears'],
            [34, 'Agility'],
            [40, 'Imprison'],
            [46, 'Night Daze'],
            [52, 'Nasty Plot'],
            [58, 'Foul Play'],
        ],
    ],

    ['572',
        [
            [1, 'Pound'],
            [1, 'Baby Doll Eyes'],
            [4, 'Helping Hand'],
            [8, 'Echoed Voice'],
            [12, 'Sing'],
            [16, 'Charm'],
            [20, 'Swift'],
            [24, 'Encore'],
            [28, 'After You'],
            [32, 'Tail Slap'],
            [36, 'Tickle'],
            [40, 'Slam'],
            [44, 'Hyper Voice'],
            [48, 'Last Resort'],
        ],
    ],

    ['573',
        [
            [1, 'Bullet Seed'],
            [1, 'Rock Blast'],
            [1, 'Sing'],
            [1, 'Charm'],
            [1, 'Swift'],
            [1, 'Encore'],
            [1, 'After You'],
            [1, 'Tail Slap'],
            [1, 'Tickle'],
            [1, 'Slam'],
            [1, 'Hyper Voice'],
            [1, 'Last Resort'],
            [1, 'Pound'],
            [1, 'Baby Doll Eyes'],
            [1, 'Helping Hand'],
            [1, 'Echoed Voice'],
        ],
    ],

    ['574',
        [
            [1, 'Pound'],
            [1, 'Confusion'],
            [4, 'Play Nice'],
            [8, 'Tickle'],
            [12, 'Psybeam'],
            [16, 'Charm'],
            [20, 'Psyshock'],
            [24, 'Hypnosis'],
            [28, 'Fake Tears'],
            [33, 'Psych Up'],
            [36, 'Psychic'],
            [40, 'Flatter'],
            [44, 'Future Sight'],
            [48, 'Magic Room'],
        ],
    ],

    ['575',
        [
            [1, 'Pound'],
            [1, 'Confusion'],
            [1, 'Play Nice'],
            [1, 'Tickle'],
            [12, 'Psybeam'],
            [16, 'Charm'],
            [20, 'Psyshock'],
            [24, 'Hypnosis'],
            [28, 'Fake Tears'],
            [35, 'Psych Up'],
            [40, 'Psychic'],
            [46, 'Flatter'],
            [52, 'Future Sight'],
            [58, 'Magic Room'],
        ],
    ],

    ['576',
        [
            [1, 'Pound'],
            [1, 'Confusion'],
            [1, 'Play Nice'],
            [1, 'Tickle'],
            [12, 'Psybeam'],
            [16, 'Charm'],
            [20, 'Psyshock'],
            [24, 'Hypnosis'],
            [28, 'Fake Tears'],
            [35, 'Psych Up'],
            [40, 'Psychic'],
            [48, 'Flatter'],
            [56, 'Future Sight'],
            [64, 'Magic Room'],
        ],
    ],

    ['577',
        [
            [1, 'Protect'],
            [1, 'Confusion'],
            [4, 'Recover'],
            [8, 'Endeavor'],
            [12, 'Psybeam'],
            [16, 'Charm'],
            [20, 'Psyshock'],
            [24, 'Light Screen'],
            [24, 'Reflect'],
            [28, 'Ally Switch'],
            [33, 'Pain Split'],
            [36, 'Psychic'],
            [40, 'Skill Swap'],
            [44, 'Future Sight'],
            [48, 'Wonder Room'],
        ],
    ],

    ['578',
        [
            [1, 'Protect'],
            [1, 'Confusion'],
            [1, 'Recover'],
            [1, 'Endeavor'],
            [12, 'Psybeam'],
            [16, 'Charm'],
            [20, 'Psyshock'],
            [24, 'Light Screen'],
            [24, 'Reflect'],
            [28, 'Ally Switch'],
            [35, 'Pain Split'],
            [40, 'Psychic'],
            [46, 'Skill Swap'],
            [52, 'Future Sight'],
            [58, 'Wonder Room'],
        ],
    ],

    ['579',
        [
            [0, 'Hammer Arm'],
            [1, 'Hammer Arm'],
            [1, 'Protect'],
            [1, 'Confusion'],
            [1, 'Recover'],
            [1, 'Endeavor'],
            [12, 'Psybeam'],
            [16, 'Charm'],
            [20, 'Psyshock'],
            [24, 'Light Screen'],
            [24, 'Reflect'],
            [28, 'Ally Switch'],
            [35, 'Pain Split'],
            [40, 'Psychic'],
            [48, 'Skill Swap'],
            [56, 'Future Sight'],
            [64, 'Wonder Room'],
        ],
    ],

    ['580',
        [
            [1, 'Water Gun'],
            [3, 'Water Sport'],
            [6, 'Defog'],
            [9, 'Wing Attack'],
            [13, 'Water Pulse'],
            [15, 'Aerial Ace'],
            [19, 'Bubble Beam'],
            [21, 'Feather Dance'],
            [24, 'Aqua Ring'],
            [27, 'Air Slash'],
            [30, 'Roost'],
            [34, 'Rain Dance'],
            [37, 'Tailwind'],
            [41, 'Brave Bird'],
            [46, 'Hurricane'],
        ],
    ],

    ['581',
        [
            [1, 'Water Gun'],
            [1, 'Water Sport'],
            [1, 'Defog'],
            [1, 'Wing Attack'],
            [3, 'Water Sport'],
            [6, 'Defog'],
            [9, 'Wing Attack'],
            [13, 'Water Pulse'],
            [15, 'Aerial Ace'],
            [19, 'Bubble Beam'],
            [21, 'Feather Dance'],
            [24, 'Aqua Ring'],
            [27, 'Air Slash'],
            [30, 'Roost'],
            [34, 'Rain Dance'],
            [40, 'Tailwind'],
            [47, 'Brave Bird'],
            [55, 'Hurricane'],
        ],
    ],

    ['582',
        [
            [1, 'Astonish'],
            [1, 'Harden'],
            [4, 'Taunt'],
            [8, 'Mist'],
            [12, 'Icy Wind'],
            [16, 'Avalanche'],
            [20, 'Hail'],
            [24, 'Icicle Spear'],
            [28, 'Uproar'],
            [32, 'Acid Armor'],
            [36, 'Mirror Coat'],
            [40, 'Ice Beam'],
            [44, 'Blizzard'],
            [48, 'Sheer Cold'],
        ],
    ],

    ['583',
        [
            [1, 'Astonish'],
            [1, 'Harden'],
            [1, 'Taunt'],
            [1, 'Mist'],
            [12, 'Icy Wind'],
            [16, 'Avalanche'],
            [20, 'Hail'],
            [24, 'Icicle Spear'],
            [28, 'Uproar'],
            [32, 'Acid Armor'],
            [38, 'Mirror Coat'],
            [44, 'Ice Beam'],
            [50, 'Blizzard'],
            [56, 'Sheer Cold'],
        ],
    ],

    ['584',
        [
            [1, 'Weather Ball'],
            [1, 'Icicle Crash'],
            [1, 'Freeze Dry'],
            [1, 'Astonish'],
            [1, 'Harden'],
            [1, 'Taunt'],
            [1, 'Mist'],
            [12, 'Icy Wind'],
            [16, 'Avalanche'],
            [20, 'Hail'],
            [24, 'Icicle Spear'],
            [28, 'Uproar'],
            [32, 'Acid Armor'],
            [38, 'Mirror Coat'],
            [44, 'Ice Beam'],
            [52, 'Blizzard'],
            [60, 'Sheer Cold'],
        ],
    ],

    ['585',
        [
            [1, 'Tackle'],
            [1, 'Camouflage'],
            [4, 'Growl'],
            [7, 'Sand Attack'],
            [10, 'Double Kick'],
            [13, 'Leech Seed'],
            [16, 'Feint Attack'],
            [20, 'Take Down'],
            [24, 'Jump Kick'],
            [28, 'Aromatherapy'],
            [32, 'Energy Ball'],
            [36, 'Charm'],
            [41, 'Nature Power'],
            [46, 'Double Edge'],
            [51, 'Solar Beam'],
        ],
    ],

    ['586',
        [
            [0, 'Horn Leech'],
            [1, 'Horn Leech'],
            [1, 'Megahorn'],
            [1, 'Tackle'],
            [1, 'Camouflage'],
            [1, 'Growl'],
            [1, 'Sand Attack'],
            [4, 'Growl'],
            [7, 'Sand Attack'],
            [10, 'Double Kick'],
            [13, 'Leech Seed'],
            [16, 'Feint Attack'],
            [20, 'Take Down'],
            [24, 'Jump Kick'],
            [28, 'Aromatherapy'],
            [32, 'Energy Ball'],
            [36, 'Charm'],
            [44, 'Nature Power'],
            [52, 'Double Edge'],
            [60, 'Solar Beam'],
        ],
    ],

    ['587',
        [
            [1, 'Nuzzle'],
            [1, 'Tail Whip'],
            [5, 'Double Team'],
            [10, 'Quick Attack'],
            [15, 'Thunder Shock'],
            [20, 'Charge'],
            [25, 'Acrobatics'],
            [30, 'Spark'],
            [35, 'Encore'],
            [40, 'Volt Switch'],
            [45, 'Light Screen'],
            [50, 'Discharge'],
            [55, 'Agility'],
        ],
    ],

    ['588',
        [
            [1, 'Peck'],
            [1, 'Leer'],
            [4, 'Fury Cutter'],
            [8, 'Endure'],
            [12, 'False Swipe'],
            [16, 'Acid Spray'],
            [20, 'Headbutt'],
            [24, 'Flail'],
            [28, 'Scary Face'],
            [32, 'X Scissor'],
            [36, 'Swords Dance'],
            [40, 'Take Down'],
            [44, 'Bug Buzz'],
            [48, 'Double Edge'],
        ],
    ],

    ['589',
        [
            [1, 'Fell Stinger'],
            [1, 'Endure'],
            [1, 'Flail'],
            [1, 'Scary Face'],
            [1, 'Take Down'],
            [1, 'Double Edge'],
            [1, 'Peck'],
            [1, 'Leer'],
            [1, 'Fury Cutter'],
            [1, 'Quick Guard'],
            [12, 'False Swipe'],
            [16, 'Acid Spray'],
            [20, 'Headbutt'],
            [24, 'Reversal'],
            [28, 'Iron Defense'],
            [32, 'X Scissor'],
            [36, 'Swords Dance'],
            [40, 'Iron Head'],
            [44, 'Bug Buzz'],
            [48, 'Giga Impact'],
            [52, 'Metal Burst'],
        ],
    ],

    ['590',
        [
            [1, 'Absorb'],
            [1, 'Astonish'],
            [4, 'Growth'],
            [8, 'Stun Spore'],
            [12, 'Mega Drain'],
            [16, 'Synthesis'],
            [20, 'Clear Smog'],
            [24, 'Sweet Scent'],
            [28, 'Giga Drain'],
            [32, 'Ingrain'],
            [36, 'Toxic'],
            [40, 'Rage Powder'],
            [44, 'Solar Beam'],
            [48, 'Spore'],
        ],
    ],

    ['591',
        [
            [1, 'Absorb'],
            [1, 'Astonish'],
            [1, 'Growth'],
            [1, 'Stun Spore'],
            [12, 'Mega Drain'],
            [16, 'Synthesis'],
            [20, 'Clear Smog'],
            [24, 'Sweet Scent'],
            [28, 'Giga Drain'],
            [32, 'Ingrain'],
            [36, 'Toxic'],
            [42, 'Rage Powder'],
            [48, 'Solar Beam'],
            [54, 'Spore'],
        ],
    ],

    ['592',
        [
            [1, 'Absorb'],
            [1, 'Water Gun'],
            [4, 'Poison Sting'],
            [8, 'Night Shade'],
            [12, 'Water Pulse'],
            [16, 'Rain Dance'],
            [20, 'Hex'],
            [24, 'Brine'],
            [28, 'Recover'],
            [32, 'Shadow Ball'],
            [36, 'Whirlpool'],
            [41, 'Hydro Pump'],
            [44, 'Destiny Bond'],
            [48, 'Water Spout'],
        ],
    ],

    ['593',
        [
            [1, 'Acid Armor'],
            [1, 'Absorb'],
            [1, 'Water Gun'],
            [1, 'Poison Sting'],
            [1, 'Night Shade'],
            [12, 'Water Pulse'],
            [16, 'Rain Dance'],
            [20, 'Hex'],
            [24, 'Brine'],
            [28, 'Recover'],
            [32, 'Shadow Ball'],
            [36, 'Whirlpool'],
            [43, 'Hydro Pump'],
            [48, 'Destiny Bond'],
            [54, 'Water Spout'],
        ],
    ], 

    ['594',
    [
        [1, 'Play Nice'],
        [1, 'Hydro Pump'],
        [1, 'Wide Guard'],
        [1, 'Healing Wish'],
        [1, 'Helping Hand'],
        [1, 'Pound'],
        [1, 'Water Sport'],
        [5, 'Aqua Ring'],
        [9, 'Aqua Jet'],
        [13, 'Double Slap'],
        [17, 'Heal Pulse'],
        [21, 'Protect'],
        [25, 'Water Pulse'],
        [29, 'Wake Up Slap'],
        [33, 'Soak'],
        [37, 'Wish'],
        [41, 'Brine'],
        [45, 'Safeguard'],
        [49, 'Whirlpool'],
        [53, 'Helping Hand'],
        [57, 'Healing Wish'],
        [61, 'Wide Guard'],
        [65, 'Hydro Pump'],
    ],
    ],
    
    ['595',
    [
        [1, 'Absorb'],
        [1, 'Fury Cutter'],
        [4, 'Electroweb'],
        [8, 'Bug Bite'],
        [12, 'String Shot'],
        [16, 'Thunder Wave'],
        [20, 'Electro Ball'],
        [24, 'Agility'],
        [28, 'Sucker Punch'],
        [32, 'Slash'],
        [37, 'Discharge'],
        [40, 'Screech'],
        [44, 'Gastro Acid'],
        [48, 'Bug Buzz'],
    ],
    ],
    
    ['596',
    [
        [0, 'Sticky Web'],
        [1, 'Sticky Web'],
        [1, 'Absorb'],
        [1, 'Fury Cutter'],
        [1, 'Electroweb'],
        [1, 'Bug Bite'],
        [12, 'String Shot'],
        [16, 'Thunder Wave'],
        [20, 'Electro Ball'],
        [24, 'Agility'],
        [28, 'Sucker Punch'],
        [32, 'Slash'],
        [39, 'Discharge'],
        [44, 'Screech'],
        [50, 'Gastro Acid'],
        [56, 'Bug Buzz'],
    ],
    ],
    
    ['597',
    [
        [1, 'Tackle'],
        [1, 'Harden'],
        [5, 'Metal Claw'],
        [10, 'Pin Missile'],
        [15, 'Ingrain'],
        [20, 'Flash Cannon'],
        [25, 'Iron Head'],
        [30, 'Self Destruct'],
        [35, 'Iron Defense'],
        [41, 'Curse'],
        [45, 'Gyro Ball'],
        [50, 'Explosion'],
    ],
    ],
    
    ['598',
    [
        [0, 'Power Whip'],
        [1, 'Power Whip'],
        [1, 'Tackle'],
        [1, 'Harden'],
        [1, 'Metal Claw'],
        [1, 'Pin Missile'],
        [15, 'Ingrain'],
        [20, 'Flash Cannon'],
        [25, 'Iron Head'],
        [30, 'Self Destruct'],
        [35, 'Iron Defense'],
        [43, 'Curse'],
        [49, 'Gyro Ball'],
        [56, 'Explosion'],
    ],
    ],
    
    ['599',
    [
        [1, 'Thunder Shock'],
        [1, 'Vice Grip'],
        [4, 'Bind'],
        [8, 'Charge'],
        [12, 'Charge Beam'],
        [16, 'Metal Sound'],
        [20, 'Autotomize'],
        [24, 'Discharge'],
        [28, 'Screech'],
        [32, 'Gear Grind'],
        [36, 'Lock On'],
        [40, 'Shift Gear'],
        [44, 'Zap Cannon'],
        [48, 'Hyper Beam'],
    ],
    ],
    
    ['600',
    [
        [1, 'Thunder Shock'],
        [1, 'Vice Grip'],
        [1, 'Bind'],
        [1, 'Charge'],
        [12, 'Charge Beam'],
        [16, 'Metal Sound'],
        [20, 'Autotomize'],
        [24, 'Discharge'],
        [28, 'Screech'],
        [32, 'Gear Grind'],
        [36, 'Lock On'],
        [42, 'Shift Gear'],
        [48, 'Zap Cannon'],
        [54, 'Hyper Beam'],
    ],
    ],
    
    ['601',
    [
        [1, 'Gear Up'],
        [1, 'Magnetic Flux'],
        [1, 'Thunder Shock'],
        [1, 'Vice Grip'],
        [1, 'Bind'],
        [1, 'Charge'],
        [12, 'Charge Beam'],
        [16, 'Metal Sound'],
        [20, 'Autotomize'],
        [24, 'Discharge'],
        [28, 'Screech'],
        [32, 'Gear Grind'],
        [36, 'Lock On'],
        [42, 'Shift Gear'],
        [48, 'Zap Cannon'],
        [56, 'Hyper Beam'],
        [64, 'Electric Terrain'],
    ],
    ],
    
    ['602',
    [
        [1, 'Tackle'],
        [1, 'Thunder Wave'],
        [1, 'Spark'],
        [1, 'Charge Beam'],
    ],
    ],
    
    ['603',
    [
        [0, 'Crunch'],
        [1, 'Crunch'],
        [1, 'Headbutt'],
        [1, 'Thunder Wave'],
        [1, 'Spark'],
        [1, 'Charge Beam'],
        [9, 'Bind'],
        [19, 'Acid'],
        [29, 'Discharge'],
        [44, 'Thunderbolt'],
        [49, 'Acid Spray'],
        [54, 'Coil'],
        [59, 'Wild Charge'],
        [64, 'Gastro Acid'],
        [69, 'Zap Cannon'],
        [74, 'Thrash'],
    ],
    ],
    
    ['604',
    [
        [1, 'Crunch'],
        [1, 'Thrash'],
        [1, 'Zap Cannon'],
        [1, 'Gastro Acid'],
        [1, 'Coil'],
        [1, 'Ion Deluge'],
        [1, 'Crush Claw'],
        [1, 'Headbutt'],
        [1, 'Acid'],
        [1, 'Discharge'],
    ],
    ],
    
    ['605',
    [
        [1, 'Confusion'],
        [1, 'Growl'],
        [6, 'Imprison'],
        [12, 'Teleport'],
        [18, 'Psybeam'],
        [24, 'Power Split'],
        [24, 'Guard Split'],
        [30, 'Headbutt'],
        [36, 'Zen Headbutt'],
        [43, 'Recover'],
        [48, 'Calm Mind'],
        [54, 'Wonder Room'],
        [60, 'Psychic'],
    ],
    ],
    
    ['606',
    [
        [1, 'Psychic Terrain'],
        [1, 'Confusion'],
        [1, 'Growl'],
        [1, 'Imprison'],
        [1, 'Teleport'],
        [18, 'Psybeam'],
        [24, 'Power Split'],
        [24, 'Guard Split'],
        [30, 'Headbutt'],
        [36, 'Zen Headbutt'],
        [45, 'Recover'],
        [52, 'Calm Mind'],
        [60, 'Wonder Room'],
        [68, 'Psychic'],
    ],
    ],
    
    ['607',
    [
        [1, 'Astonish'],
        [1, 'Smog'],
        [4, 'Ember'],
        [8, 'Minimize'],
        [12, 'Confuse Ray'],
        [16, 'Hex'],
        [20, 'Will O Wisp'],
        [24, 'Fire Spin'],
        [28, 'Night Shade'],
        [32, 'Curse'],
        [36, 'Shadow Ball'],
        [40, 'Inferno'],
        [44, 'Imprison'],
        [48, 'Pain Split'],
        [52, 'Overheat'],
        [56, 'Memento'],
    ],
    ],
    
    ['608',
    [
        [1, 'Astonish'],
        [1, 'Smog'],
        [1, 'Ember'],
        [1, 'Minimize'],
        [12, 'Confuse Ray'],
        [16, 'Hex'],
        [20, 'Will O Wisp'],
        [24, 'Fire Spin'],
        [28, 'Night Shade'],
        [32, 'Curse'],
        [36, 'Shadow Ball'],
        [40, 'Inferno'],
        [46, 'Imprison'],
        [52, 'Pain Split'],
        [58, 'Overheat'],
        [64, 'Memento'],
    ],
    ],
    
    ['609',
    [
        [1, 'Confuse Ray'],
        [1, 'Hex'],
        [1, 'Will O Wisp'],
        [1, 'Fire Spin'],
        [1, 'Night Shade'],
        [1, 'Curse'],
        [1, 'Shadow Ball'],
        [1, 'Inferno'],
        [1, 'Imprison'],
        [1, 'Pain Split'],
        [1, 'Overheat'],
        [1, 'Memento'],
        [1, 'Astonish'],
        [1, 'Smog'],
        [1, 'Ember'],
        [1, 'Minimize'],
    ],
    ],
    
    ['610',
    [
        [1, 'Scratch'],
        [1, 'Leer'],
        [3, 'Bite'],
        [6, 'False Swipe'],
        [9, 'Assurance'],
        [12, 'Taunt'],
        [15, 'Slash'],
        [18, 'Dragon Claw'],
        [21, 'Scary Face'],
        [24, 'Crunch'],
        [27, 'Dragon Dance'],
        [30, 'Dual Chop'],
        [33, 'Laser Focus'],
        [36, 'Dragon Pulse'],
        [39, 'Swords Dance'],
        [42, 'Outrage'],
        [45, 'Guillotine'],
        [48, 'Giga Impact'],
    ],
    ],
    
    ['611',
    [
        [1, 'Scratch'],
        [1, 'Leer'],
        [1, 'Bite'],
        [1, 'False Swipe'],
        [9, 'Assurance'],
        [12, 'Taunt'],
        [15, 'Slash'],
        [18, 'Dragon Claw'],
        [21, 'Scary Face'],
        [24, 'Crunch'],
        [27, 'Dragon Dance'],
        [30, 'Dual Chop'],
        [33, 'Laser Focus'],
        [36, 'Dragon Pulse'],
        [41, 'Swords Dance'],
        [46, 'Outrage'],
        [51, 'Guillotine'],
        [56, 'Giga Impact'],
    ],
    ],
    
    ['612',
    [
        [1, 'Scratch'],
        [1, 'Leer'],
        [1, 'Bite'],
        [1, 'False Swipe'],
        [9, 'Assurance'],
        [12, 'Taunt'],
        [15, 'Slash'],
        [18, 'Dragon Claw'],
        [21, 'Scary Face'],
        [24, 'Crunch'],
        [27, 'Dragon Dance'],
        [30, 'Dual Chop'],
        [33, 'Laser Focus'],
        [36, 'Dragon Pulse'],
        [41, 'Swords Dance'],
        [46, 'Outrage'],
        [53, 'Guillotine'],
        [60, 'Giga Impact'],
    ],
    ],
    
    ['613',
    [
        [1, 'Powder Snow'],
        [1, 'Growl'],
        [3, 'Endure'],
        [6, 'Fury Swipes'],
        [9, 'Icy Wind'],
        [12, 'Play Nice'],
        [15, 'Brine'],
        [18, 'Frost Breath'],
        [21, 'Slash'],
        [24, 'Flail'],
        [27, 'Charm'],
        [30, 'Hail'],
        [33, 'Thrash'],
        [36, 'Rest'],
        [39, 'Blizzard'],
        [42, 'Sheer Cold'],
    ],
    ],
    
    ['614',
    [
        [0, 'Icicle Crash'],
        [1, 'Icicle Crash'],
        [1, 'Aqua Jet'],
        [1, 'Charm'],
        [1, 'Powder Snow'],
        [1, 'Growl'],
        [1, 'Endure'],
        [1, 'Fury Swipes'],
        [9, 'Icy Wind'],
        [12, 'Play Nice'],
        [15, 'Brine'],
        [18, 'Frost Breath'],
        [21, 'Slash'],
        [24, 'Flail'],
        [27, 'Swagger'],
        [30, 'Hail'],
        [33, 'Thrash'],
        [36, 'Rest'],
        [41, 'Blizzard'],
        [46, 'Sheer Cold'],
        [51, 'Superpower'],
    ],
    ],
    
    ['615',
    [
        [1, 'Bind'],
        [1, 'Ice Shard'],
        [4, 'Confuse Ray'],
        [8, 'Rapid Spin'],
        [12, 'Laser Focus'],
        [16, 'Icy Wind'],
        [20, 'Mist'],
        [20, 'Haze'],
        [24, 'Ancient Power'],
        [28, 'Aurora Beam'],
        [32, 'Slash'],
        [32, 'Night Slash'],
        [36, 'Freeze Dry'],
        [40, 'Light Screen'],
        [40, 'Reflect'],
        [44, 'Recover'],
        [48, 'Ice Beam'],
        [52, 'Acid Armor'],
        [56, 'Solar Beam'],
        [60, 'Sheer Cold'],
    ],
    ],
    
    ['616',
    [
        [1, 'Absorb'],
        [1, 'Protect'],
        [4, 'Acid'],
        [8, 'Curse'],
        [12, 'Mega Drain'],
        [16, 'Struggle Bug'],
        [20, 'Yawn'],
        [24, 'Acid Armor'],
        [28, 'Giga Drain'],
        [32, 'Guard Swap'],
        [36, 'Body Slam'],
        [40, 'Recover'],
        [44, 'Bug Buzz'],
        [48, 'Final Gambit'],
    ],
    ],
    
    ['617',
    [
        [1, 'Water Shuriken'],
        [1, 'Acid'],
        [1, 'Curse'],
        [1, 'Yawn'],
        [1, 'Acid Armor'],
        [1, 'Guard Swap'],
        [1, 'Body Slam'],
        [1, 'Absorb'],
        [1, 'Double Team'],
        [1, 'Acid Spray'],
        [1, 'Quick Attack'],
        [12, 'Mega Drain'],
        [16, 'Struggle Bug'],
        [20, 'Swift'],
        [24, 'Agility'],
        [28, 'Giga Drain'],
        [32, 'Power Swap'],
        [36, 'U Turn'],
        [40, 'Recover'],
        [44, 'Bug Buzz'],
        [48, 'Final Gambit'],
        [52, 'Toxic'],
    ],
    ],
    
    ['618',
    [
        [1, 'Mud Slap'],
        [1, 'Tackle'],
        [1, 'Water Gun'],
        [1, 'Thunder Shock'],
        [5, 'Endure'],
        [10, 'Mud Shot'],
        [15, 'Revenge'],
        [20, 'Charge'],
        [25, 'Sucker Punch'],
        [30, 'Electric Terrain'],
        [35, 'Bounce'],
        [40, 'Muddy Water'],
        [45, 'Discharge'],
        [50, 'Flail'],
        [55, 'Fissure'],
    ], //Unovan
    [
        [1, 'Mud Slap'],
        [1, 'Tackle'],
        [1, 'Water Gun'],
        [1, 'Metal Claw'],
        [5, 'Endure'],
        [10, 'Mud Shot'],
        [15, 'Revenge'],
        [20, 'Metal Sound'],
        [25, 'Sucker Punch'],
        [30, 'Iron Defense'],
        [35, 'Bounce'],
        [40, 'Muddy Water'],
        [45, 'Snap Trap'],
        [50, 'Flail'],
        [55, 'Fissure'],
    ], //Galarian
    ], //Stunfisk
    
    ['619',
    [
        [1, 'Pound'],
        [1, 'Detect'],
        [5, 'Fake Out'],
        [10, 'Reversal'],
        [15, 'Fury Swipes'],
        [20, 'Quick Guard'],
        [25, 'Force Palm'],
        [30, 'U Turn'],
        [35, 'Drain Punch'],
        [40, 'Hone Claws'],
        [45, 'Aura Sphere'],
        [51, 'Bounce'],
        [55, 'Calm Mind'],
        [60, 'High Jump Kick'],
    ],
    ],
    
    ['620',
    [
        [1, 'Quick Guard'],
        [1, 'Pound'],
        [1, 'Detect'],
        [1, 'Fake Out'],
        [1, 'Reversal'],
        [15, 'Fury Swipes'],
        [20, 'Wide Guard'],
        [25, 'Force Palm'],
        [30, 'U Turn'],
        [35, 'Drain Punch'],
        [40, 'Hone Claws'],
        [45, 'Aura Sphere'],
        [53, 'Bounce'],
        [59, 'Calm Mind'],
        [66, 'High Jump Kick'],
    ],
    ],
    
    ['621',
    [
        [1, 'Scratch'],
        [1, 'Leer'],
        [5, 'Bite'],
        [10, 'Dragon Tail'],
        [15, 'Metal Claw'],
        [20, 'Scary Face'],
        [25, 'Slash'],
        [30, 'Dragon Claw'],
        [35, 'Hone Claws'],
        [40, 'Crunch'],
        [45, 'Iron Head'],
        [50, 'Outrage'],
        [55, 'Superpower'],
    ],
    ],
    
    ['622',
    [
        [1, 'Mud Slap'],
        [1, 'Astonish'],
        [4, 'Defense Curl'],
        [8, 'Pound'],
        [12, 'Shadow Punch'],
        [16, 'Curse'],
        [20, 'Night Shade'],
        [24, 'Stomping Tantrum'],
        [28, 'Iron Defense'],
        [32, 'Mega Punch'],
        [36, 'Shadow Ball'],
        [40, 'Heavy Slam'],
        [44, 'Phantom Force'],
        [48, 'Hammer Arm'],
        [52, 'Earthquake'],
        [56, 'Dynamic Punch'],
    ],
    ],
    
    ['623',
    [
        [1, 'High Horsepower'],
        [1, 'Focus Punch'],
        [1, 'Mud Slap'],
        [1, 'Astonish'],
        [1, 'Defense Curl'],
        [1, 'Pound'],
        [12, 'Shadow Punch'],
        [16, 'Curse'],
        [20, 'Night Shade'],
        [24, 'Stomping Tantrum'],
        [28, 'Iron Defense'],
        [32, 'Mega Punch'],
        [36, 'Shadow Ball'],
        [40, 'Heavy Slam'],
        [46, 'Phantom Force'],
        [52, 'Hammer Arm'],
        [58, 'Earthquake'],
        [64, 'Dynamic Punch'],
    ],
    ],
    
    ['624',
    [
        [1, 'Scratch'],
        [1, 'Leer'],
        [5, 'Fury Cutter'],
        [10, 'Metal Claw'],
        [15, 'Torment'],
        [20, 'Scary Face'],
        [25, 'Assurance'],
        [30, 'Metal Sound'],
        [35, 'Slash'],
        [40, 'Night Slash'],
        [45, 'Iron Defense'],
        [50, 'Laser Focus'],
        [55, 'Iron Head'],
        [60, 'Swords Dance'],
        [65, 'Guillotine'],
    ],
    ],
    
    ['625',
    [
        [1, 'Metal Burst'],
        [1, 'Scratch'],
        [1, 'Leer'],
        [1, 'Fury Cutter'],
        [1, 'Metal Claw'],
        [15, 'Torment'],
        [20, 'Scary Face'],
        [25, 'Assurance'],
        [30, 'Metal Sound'],
        [35, 'Slash'],
        [40, 'Night Slash'],
        [45, 'Iron Defense'],
        [50, 'Laser Focus'],
        [57, 'Iron Head'],
        [64, 'Swords Dance'],
        [71, 'Guillotine'],
    ],
    ],
    
    ['626',
    [
        [1, 'Tackle'],
        [1, 'Leer'],
        [5, 'Focus Energy'],
        [10, 'Fury Attack'],
        [15, 'Revenge'],
        [20, 'Scary Face'],
        [25, 'Horn Attack'],
        [30, 'Reversal'],
        [35, 'Throat Chop'],
        [40, 'Head Charge'],
        [45, 'Swords Dance'],
        [50, 'Megahorn'],
        [55, 'Giga Impact'],
    ],
    ],
    
    ['627',
    [
        [1, 'Peck'],
        [1, 'Leer'],
        [6, 'Hone Claws'],
        [12, 'Wing Attack'],
        [18, 'Tailwind'],
        [24, 'Scary Face'],
        [30, 'Aerial Ace'],
        [36, 'Slash'],
        [42, 'Whirlwind'],
        [48, 'Crush Claw'],
        [55, 'Air Slash'],
        [60, 'Defog'],
        [66, 'Thrash'],
        [72, 'Brave Bird'],
    ],
    ],
    
    ['628',
    [
        [0, 'Superpower'],
        [1, 'Superpower'],
        [1, 'Sky Attack'],
        [1, 'Peck'],
        [1, 'Leer'],
        [1, 'Hone Claws'],
        [1, 'Wing Attack'],
        [18, 'Tailwind'],
        [24, 'Scary Face'],
        [30, 'Aerial Ace'],
        [36, 'Slash'],
        [42, 'Whirlwind'],
        [48, 'Crush Claw'],
        [57, 'Air Slash'],
        [64, 'Defog'],
        [72, 'Thrash'],
        [80, 'Brave Bird'],
    ],
    ],
    
    ['629',
    [
        [1, 'Gust'],
        [1, 'Leer'],
        [6, 'Flatter'],
        [12, 'Pluck'],
        [18, 'Tailwind'],
        [24, 'Knock Off'],
        [30, 'Iron Defense'],
        [36, 'Whirlwind'],
        [42, 'Air Slash'],
        [48, 'Dark Pulse'],
        [54, 'Nasty Plot'],
        [60, 'Defog'],
        [66, 'Attract'],
        [72, 'Brave Bird'],
    ],
    ],
    
    ['630',
    [
        [0, 'Bone Rush'],
        [1, 'Bone Rush'],
        [1, 'Sky Attack'],
        [1, 'Toxic'],
        [1, 'Gust'],
        [1, 'Leer'],
        [1, 'Flatter'],
        [1, 'Pluck'],
        [18, 'Tailwind'],
        [24, 'Knock Off'],
        [30, 'Iron Defense'],
        [36, 'Whirlwind'],
        [42, 'Air Slash'],
        [48, 'Dark Pulse'],
        [57, 'Nasty Plot'],
        [64, 'Defog'],
        [72, 'Attract'],
        [80, 'Brave Bird'],
    ],
    ],
    
    ['631',
    [
        [1, 'Lick'],
        [1, 'Tackle'],
        [5, 'Fury Swipes'],
        [10, 'Incinerate'],
        [15, 'Bug Bite'],
        [20, 'Stockpile'],
        [20, 'Swallow'],
        [20, 'Spit Up'],
        [25, 'Slash'],
        [30, 'Bind'],
        [35, 'Fire Lash'],
        [40, 'Hone Claws'],
        [45, 'Amnesia'],
        [50, 'Fire Spin'],
        [55, 'Inferno'],
        [60, 'Flare Blitz'],
    ],
    ],
    
    ['632',
    [
        [1, 'Fury Cutter'],
        [1, 'Sand Attack'],
        [4, 'Vice Grip'],
        [8, 'Metal Claw'],
        [12, 'Beat Up'],
        [16, 'Bug Bite'],
        [20, 'Bite'],
        [24, 'Agility'],
        [28, 'Dig'],
        [32, 'X Scissor'],
        [36, 'Crunch'],
        [40, 'Metal Sound'],
        [44, 'Iron Head'],
        [48, 'Entrainment'],
        [52, 'Iron Defense'],
        [56, 'Guillotine'],
    ],
    ],
    
    ['633',
    [
        [1, 'Tackle'],
        [1, 'Focus Energy'],
        [4, 'Dragon Breath'],
        [8, 'Bite'],
        [12, 'Roar'],
        [16, 'Assurance'],
        [20, 'Headbutt'],
        [24, 'Work Up'],
        [28, 'Slam'],
        [32, 'Crunch'],
        [36, 'Scary Face'],
        [40, 'Dragon Pulse'],
        [44, 'Body Slam'],
        [48, 'Hyper Voice'],
        [52, 'Dragon Rush'],
        [56, 'Nasty Plot'],
        [60, 'Outrage'],
    ],
    ],
    
    ['634',
    [
        [1, 'Tackle'],
        [1, 'Double Hit'],
        [1, 'Focus Energy'],
        [1, 'Dragon Breath'],
        [1, 'Bite'],
        [12, 'Roar'],
        [16, 'Assurance'],
        [20, 'Headbutt'],
        [24, 'Work Up'],
        [28, 'Slam'],
        [32, 'Crunch'],
        [36, 'Scary Face'],
        [40, 'Dragon Pulse'],
        [44, 'Body Slam'],
        [48, 'Hyper Voice'],
        [54, 'Dragon Rush'],
        [60, 'Nasty Plot'],
        [66, 'Outrage'],
    ],
    ],
    
    ['635',
    [
        [1, 'Tackle'],
        [1, 'Double Hit'],
        [1, 'Tri Attack'],
        [1, 'Focus Energy'],
        [1, 'Dragon Breath'],
        [1, 'Bite'],
        [12, 'Roar'],
        [16, 'Assurance'],
        [20, 'Headbutt'],
        [24, 'Work Up'],
        [28, 'Slam'],
        [32, 'Crunch'],
        [36, 'Scary Face'],
        [40, 'Dragon Pulse'],
        [44, 'Body Slam'],
        [48, 'Hyper Voice'],
        [54, 'Dragon Rush'],
        [60, 'Nasty Plot'],
        [68, 'Outrage'],
        [76, 'Hyper Beam'],
    ],
    ],
    
    ['636',
    [
        [1, 'Ember'],
        [1, 'String Shot'],
        [6, 'Flame Charge'],
        [12, 'Struggle Bug'],
        [18, 'Flame Wheel'],
        [24, 'Bug Bite'],
        [30, 'Screech'],
        [36, 'Leech Life'],
        [42, 'Bug Buzz'],
        [48, 'Take Down'],
        [54, 'Amnesia'],
        [60, 'Double Edge'],
        [66, 'Flare Blitz'],
    ],
    ],
    
    ['637',
    [
        [0, 'Quiver Dance'],
        [1, 'Quiver Dance'],
        [1, 'Fiery Dance'],
        [1, 'Whirlwind'],
        [1, 'Ember'],
        [1, 'Flame Charge'],
        [1, 'Take Down'],
        [1, 'Double Edge'],
        [1, 'Flare Blitz'],
        [1, 'Fire Spin'],
        [1, 'String Shot'],
        [1, 'Gust'],
        [1, 'Struggle Bug'],
        [18, 'Flame Wheel'],
        [24, 'Bug Bite'],
        [30, 'Screech'],
        [36, 'Leech Life'],
        [42, 'Bug Buzz'],
        [48, 'Heat Wave'],
        [54, 'Amnesia'],
        [62, 'Hurricane'],
        [70, 'Fire Blast'],
        [78, 'Rage Powder'],
    ],
    ],
    
    ['638',
    [
        [1, 'Quick Attack'],
        [1, 'Leer'],
        [1, 'Helping Hand'],
        [1, 'Work Up'],
        [7, 'Metal Claw'],
        [14, 'Quick Guard'],
        [21, 'Double Kick'],
        [28, 'Retaliate'],
        [35, 'Metal Burst'],
        [42, 'Take Down'],
        [49, 'Sacred Sword'],
        [56, 'Swords Dance'],
        [63, 'Iron Head'],
        [70, 'Close Combat'],
    ],
    ],
    
    ['639',
    [
        [1, 'Quick Attack'],
        [1, 'Leer'],
        [1, 'Helping Hand'],
        [1, 'Work Up'],
        [7, 'Smack Down'],
        [14, 'Quick Guard'],
        [21, 'Double Kick'],
        [28, 'Retaliate'],
        [35, 'Rock Slide'],
        [42, 'Take Down'],
        [49, 'Sacred Sword'],
        [56, 'Swords Dance'],
        [63, 'Stone Edge'],
        [70, 'Close Combat'],
    ],
    ],
    
    ['640',
    [
        [1, 'Quick Attack'],
        [1, 'Leer'],
        [1, 'Helping Hand'],
        [1, 'Work Up'],
        [7, 'Magical Leaf'],
        [14, 'Quick Guard'],
        [21, 'Double Kick'],
        [28, 'Retaliate'],
        [35, 'Giga Drain'],
        [42, 'Take Down'],
        [49, 'Sacred Sword'],
        [56, 'Swords Dance'],
        [63, 'Leaf Blade'],
        [70, 'Close Combat'],
    ],
    ],
    
    ['641',
    [
        [1, 'Astonish'],
        [1, 'Gust'],
        [5, 'Leer'],
        [10, 'Swagger'],
        [15, 'Bite'],
        [20, 'Air Cutter'],
        [25, 'Agility'],
        [30, 'Tailwind'],
        [35, 'Air Slash'],
        [40, 'Crunch'],
        [45, 'Extrasensory'],
        [50, 'Uproar'],
        [55, 'Hammer Arm'],
        [60, 'Rain Dance'],
        [65, 'Hurricane'],
        [70, 'Thrash'],
    ],
    ],
    
    ['642',
    [
        [1, 'Astonish'],
        [1, 'Thunder Shock'],
        [5, 'Leer'],
        [10, 'Swagger'],
        [15, 'Bite'],
        [20, 'Shock Wave'],
        [25, 'Agility'],
        [30, 'Charge'],
        [35, 'Volt Switch'],
        [40, 'Crunch'],
        [45, 'Discharge'],
        [50, 'Uproar'],
        [55, 'Hammer Arm'],
        [60, 'Rain Dance'],
        [65, 'Thunder'],
        [70, 'Thrash'],
    ],
    ],
    
    ['643',
    [
        [1, 'Dragon Breath'],
        [1, 'Noble Roar'],
        [1, 'Ancient Power'],
        [1, 'Fire Fang'],
        [8, 'Slash'],
        [16, 'Crunch'],
        [24, 'Extrasensory'],
        [32, 'Dragon Pulse'],
        [40, 'Flamethrower'],
        [48, 'Fusion Flare'],
        [56, 'Hyper Voice'],
        [64, 'Fire Blast'],
        [72, 'Imprison'],
        [80, 'Outrage'],
        [88, 'Blue Flare'],
    ],
    ],
    
    ['644',
    [
        [1, 'Dragon Breath'],
        [1, 'Noble Roar'],
        [1, 'Ancient Power'],
        [1, 'Thunder Fang'],
        [8, 'Slash'],
        [16, 'Crunch'],
        [24, 'Zen Headbutt'],
        [32, 'Dragon Claw'],
        [40, 'Thunderbolt'],
        [48, 'Fusion Bolt'],
        [56, 'Hyper Voice'],
        [64, 'Thunder'],
        [72, 'Imprison'],
        [80, 'Outrage'],
        [88, 'Bolt Strike'],
    ],
    ],
    
    ['645',
    [
        [1, 'Sand Tomb'],
        [1, 'Rock Throw'],
        [5, 'Leer'],
        [10, 'Block'],
        [15, 'Bulldoze'],
        [20, 'Rock Tomb'],
        [25, 'Swords Dance'],
        [30, 'Imprison'],
        [35, 'Rock Slide'],
        [40, 'Earth Power'],
        [45, 'Extrasensory'],
        [50, 'Stone Edge'],
        [55, 'Hammer Arm'],
        [60, 'Sandstorm'],
        [65, 'Earthquake'],
        [70, 'Outrage'],
        [75, 'Fissure'],
    ],
    ],
    
    ['646',
    [
        [1, 'Dragon Breath'],
        [1, 'Noble Roar'],
        [1, 'Ancient Power'],
        [1, 'Freeze Dry'],
        [8, 'Slash'],
        [16, 'Endeavor'],
        [24, 'Dragon Pulse'],
        [32, 'Ice Beam'],
        [40, 'Hyper Voice'],
        [48, 'Scary Face'],
        [56, 'Blizzard'],
        [64, 'Imprison'],
        [72, 'Outrage'],
        [80, 'Glaciate'],
        [88, 'Sheer Cold'],
    ], //Kyurem Normal
    [
        [1, 'Dragon Breath'],
        [1, 'Noble Roar'],
        [1, 'Ancient Power'],
        [1, 'Freeze Dry'],
        [8, 'Slash'],
        [16, 'Endeavor'],
        [24, 'Dragon Pulse'],
        [32, 'Ice Beam'],
        [40, 'Hyper Voice'],
        [48, 'Fusion Bolt'],
        [56, 'Blizzard'],
        [64, 'Imprison'],
        [72, 'Outrage'],
        [80, 'Freeze Shock'],
        [88, 'Sheer Cold'],
    ], //Kyurem Black
    [
        [1, 'Dragon Breath'],
        [1, 'Noble Roar'],
        [1, 'Ancient Power'],
        [1, 'Freeze Dry'],
        [8, 'Slash'],
        [16, 'Endeavor'],
        [24, 'Dragon Pulse'],
        [32, 'Ice Beam'],
        [40, 'Hyper Voice'],
        [48, 'Fusion Flare'],
        [56, 'Blizzard'],
        [64, 'Imprison'],
        [72, 'Outrage'],
        [80, 'Ice Burn'],
        [88, 'Sheer Cold'],
    ], //Kyurem White
    ], //Kyurem
    
    ['647',
    [
        [1, 'Secret Sword'],
        [1, 'Aqua Jet'],
        [1, 'Leer'],
        [1, 'Helping Hand'],
        [1, 'Work Up'],
        [7, 'Bubble Beam'],
        [14, 'Quick Guard'],
        [21, 'Double Kick'],
        [28, 'Retaliate'],
        [35, 'Aqua Tail'],
        [42, 'Take Down'],
        [49, 'Sacred Sword'],
        [56, 'Swords Dance'],
        [63, 'Hydro Pump'],
        [70, 'Close Combat'],
    ],
    ],
    
    ['648',
    [
        [1, 'Round'],
        [1, 'Quick Attack'],
        [1, 'Confusion'],
        [1, 'Sing'],
        [6, 'Quick Attack'],
        [11, 'Confusion'],
        [16, 'Sing'],
        [21, 'Teeter Dance'],
        [26, 'Acrobatics'],
        [31, 'Psybeam'],
        [36, 'Echoed Voice'],
        [43, 'U Turn'],
        [50, 'Wake Up Slap'],
        [57, 'Psychic'],
        [64, 'Hyper Voice'],
        [71, 'Role Play'],
        [78, 'Close Combat'],
        [85, 'Perish Song'],
    ],
    ],
    
    ['649',
    [
        [1, 'Fury Cutter'],
        [1, 'Quick Attack'],
        [7, 'Screech'],
        [14, 'Metal Claw'],
        [21, 'Fell Stinger'],
        [28, 'Flame Charge'],
        [35, 'Metal Sound'],
        [42, 'X Scissor'],
        [49, 'Magnet Rise'],
        [56, 'Bug Buzz'],
        [63, 'Simple Beam'],
        [70, 'Zap Cannon'],
        [77, 'Lock On'],
        [84, 'Techno Blast'],
        [91, 'Self Destruct'],
    ],
    ],
    
    ['650',
    [
        [1, 'Growl'],
        [1, 'Vine Whip'],
        [5, 'Vine Whip'],
        [8, 'Rollout'],
        [11, 'Bite'],
        [15, 'Leech Seed'],
        [18, 'Pin Missile'],
        [27, 'Take Down'],
        [32, 'Seed Bomb'],
        [35, 'Mud Shot'],
        [39, 'Bulk Up'],
        [42, 'Body Slam'],
        [45, 'Pain Split'],
        [48, 'Wood Hammer'],
    ],
    ],
    
    ['651',
    [
        [0, 'Needle Arm'],
        [1, 'Needle Arm'],
        [1, 'Growl'],
        [1, 'Vine Whip'],
        [5, 'Vine Whip'],
        [8, 'Rollout'],
        [11, 'Bite'],
        [15, 'Leech Seed'],
        [19, 'Pin Missile'],
        [29, 'Take Down'],
        [35, 'Seed Bomb'],
        [39, 'Mud Shot'],
        [44, 'Bulk Up'],
        [48, 'Body Slam'],
        [52, 'Pain Split'],
        [56, 'Wood Hammer'],
    ],
    ],
    
    ['652',
    [
        [0, 'Spiky Shield'],
        [1, 'Spiky Shield'],
        [1, 'Needle Arm'],
        [1, 'Hammer Arm'],
        [1, 'Feint'],
        [1, 'Belly Drum'],
        [1, 'Tackle'],
        [1, 'Growl'],
        [1, 'Vine Whip'],
        [1, 'Rollout'],
        [5, 'Vine Whip'],
        [8, 'Rollout'],
        [11, 'Bite'],
        [15, 'Leech Seed'],
        [19, 'Pin Missile'],
        [29, 'Take Down'],
        [35, 'Seed Bomb'],
        [41, 'Mud Shot'],
        [48, 'Bulk Up'],
        [54, 'Body Slam'],
        [60, 'Pain Split'],
        [66, 'Wood Hammer'],
        [72, 'Hammer Arm'],
        [78, 'Giga Impact'],
    ],
    ],
    
    ['653',
    [
        [1, 'Scratch'],
        [1, 'Tail Whip'],
        [5, 'Ember'],
        [11, 'Howl'],
        [14, 'Flame Charge'],
        [17, 'Psybeam'],
        [20, 'Fire Spin'],
        [25, 'Lucky Chant'],
        [27, 'Light Screen'],
        [31, 'Psyshock'],
        [35, 'Flamethrower'],
        [38, 'Will O Wisp'],
        [41, 'Psychic'],
        [43, 'Sunny Day'],
        [46, 'Magic Room'],
        [48, 'Fire Blast'],
    ],
    ],
    
    ['654',
    [
        [1, 'Scratch'],
        [1, 'Tail Whip'],
        [1, 'Ember'],
        [5, 'Ember'],
        [11, 'Howl'],
        [14, 'Flame Charge'],
        [18, 'Psybeam'],
        [22, 'Fire Spin'],
        [28, 'Lucky Chant'],
        [31, 'Light Screen'],
        [36, 'Psyshock'],
        [41, 'Flamethrower'],
        [45, 'Will O Wisp'],
        [49, 'Psychic'],
        [52, 'Sunny Day'],
        [56, 'Magic Room'],
        [59, 'Fire Blast'],
    ],
    ],
    
    ['655',
    [
        [0, 'Mystical Fire'],
        [1, 'Mystical Fire'],
        [1, 'Future Sight'],
        [1, 'Role Play'],
        [1, 'Switcheroo'],
        [1, 'Shadow Ball'],
        [1, 'Scratch'],
        [1, 'Tail Whip'],
        [1, 'Ember'],
        [1, 'Howl'],
        [5, 'Ember'],
        [11, 'Howl'],
        [14, 'Flame Charge'],
        [18, 'Psybeam'],
        [22, 'Fire Spin'],
        [28, 'Lucky Chant'],
        [31, 'Light Screen'],
        [38, 'Psyshock'],
        [45, 'Flamethrower'],
        [51, 'Will O Wisp'],
        [57, 'Psychic'],
        [62, 'Sunny Day'],
        [68, 'Magic Room'],
        [74, 'Fire Blast'],
        [80, 'Future Sight'],
    ],
    ],
    
    ['656',
    [
        [1, 'Pound'],
        [1, 'Growl'],
        [5, 'Bubble'],
        [8, 'Quick Attack'],
        [10, 'Lick'],
        [14, 'Water Pulse'],
        [18, 'Smokescreen'],
        [21, 'Round'],
        [25, 'Fling'],
        [29, 'Smack Down'],
        [35, 'Substitute'],
        [39, 'Bounce'],
        [43, 'Double Team'],
        [48, 'Hydro Pump'],
    ],
    ],
    
    ['657',
    [
        [1, 'Pound'],
        [1, 'Growl'],
        [1, 'Bubble'],
        [5, 'Bubble'],
        [8, 'Quick Attack'],
        [10, 'Lick'],
        [14, 'Water Pulse'],
        [19, 'Smokescreen'],
        [23, 'Round'],
        [28, 'Fling'],
        [33, 'Smack Down'],
        [40, 'Substitute'],
        [45, 'Bounce'],
        [50, 'Double Team'],
        [56, 'Hydro Pump'],
    ],
    ],
    
    ['658',
    [
        [0, 'Water Shuriken'],
        [1, 'Water Shuriken'],
        [1, 'Night Slash'],
        [1, 'Haze'],
        [1, 'Role Play'],
        [1, 'Mat Block'],
        [1, 'Pound'],
        [1, 'Growl'],
        [1, 'Bubble'],
        [1, 'Quick Attack'],
        [5, 'Bubble'],
        [8, 'Quick Attack'],
        [10, 'Lick'],
        [14, 'Water Pulse'],
        [19, 'Smokescreen'],
        [23, 'Shadow Sneak'],
        [28, 'Spikes'],
        [33, 'Feint Attack'],
        [42, 'Substitute'],
        [49, 'Extrasensory'],
        [56, 'Double Team'],
        [68, 'Hydro Pump'],
        [70, 'Haze'],
        [77, 'Night Slash'],
    ],
    ],
    
    ['659',
    [
        [1, 'Mud Slap'],
        [1, 'Leer'],
        [3, 'Tackle'],
        [6, 'Laser Focus'],
        [9, 'Quick Attack'],
        [12, 'Mud Shot'],
        [15, 'Flail'],
        [18, 'Double Kick'],
        [21, 'Bulldoze'],
        [24, 'Dig'],
        [27, 'Bounce'],
        [30, 'Take Down'],
        [33, 'Swords Dance'],
        [36, 'Earthquake'],
        [39, 'Super Fang'],
    ],
    ],
    
    ['660',
    [
        [1, 'Mud Slap'],
        [1, 'Leer'],
        [1, 'Tackle'],
        [1, 'Laser Focus'],
        [9, 'Quick Attack'],
        [12, 'Mud Shot'],
        [15, 'Flail'],
        [18, 'Double Kick'],
        [23, 'Bulldoze'],
        [28, 'Dig'],
        [33, 'Bounce'],
        [38, 'Take Down'],
        [43, 'Swords Dance'],
        [48, 'Earthquake'],
        [53, 'Super Fang'],
        [58, 'Hammer Arm'],
    ],
    ],
    
    ['661',
    [
        [1, 'Peck'],
        [1, 'Growl'],
        [5, 'Quick Attack'],
        [10, 'Ember'],
        [15, 'Flail'],
        [20, 'Acrobatics'],
        [25, 'Agility'],
        [30, 'Aerial Ace'],
        [35, 'Tailwind'],
        [40, 'Steel Wing'],
        [45, 'Roost'],
        [50, 'Fly'],
    ],
    ],
    
    ['662',
    [
        [0, 'Flame Charge'],
        [1, 'Flame Charge'],
        [1, 'Feint'],
        [1, 'Peck'],
        [1, 'Growl'],
        [1, 'Quick Attack'],
        [1, 'Ember'],
        [15, 'Flail'],
        [22, 'Acrobatics'],
        [29, 'Agility'],
        [36, 'Aerial Ace'],
        [43, 'Tailwind'],
        [50, 'Steel Wing'],
        [57, 'Roost'],
        [64, 'Fly'],
    ],
    ],
    
    ['663',
    [
        [1, 'Flame Charge'],
        [1, 'Flare Blitz'],
        [1, 'Feint'],
        [1, 'Peck'],
        [1, 'Growl'],
        [1, 'Quick Attack'],
        [1, 'Ember'],
        [15, 'Flail'],
        [22, 'Acrobatics'],
        [29, 'Agility'],
        [38, 'Aerial Ace'],
        [47, 'Tailwind'],
        [56, 'Steel Wing'],
        [65, 'Roost'],
        [74, 'Fly'],
        [83, 'Brave Bird'],
    ],
    ],
    
    ['664',
    [
        [1, 'Tackle'],
        [1, 'String Shot'],
        [6, 'Stun Spore'],
        [15, 'Bug Bite'],
    ],
    ],
    
    ['665',
    [
        [0, 'Protect'],
        [1, 'Protect'],
        [1, 'Harden'],
    ],
    ],
    
    ['666',
    [
        [0, 'Gust'],
        [1, 'Gust'],
        [1, 'Powder'],
        [1, 'Sleep Powder'],
        [1, 'Poison Powder'],
        [1, 'Stun Spore'],
        [1, 'Struggle Bug'],
        [12, 'Light Screen'],
        [17, 'Psybeam'],
        [21, 'Supersonic'],
        [25, 'Draining Kiss'],
        [31, 'Aromatherapy'],
        [35, 'Bug Buzz'],
        [41, 'Safeguard'],
        [45, 'Quiver Dance'],
        [50, 'Hurricane'],
        [55, 'Powder'],
    ],
    ],
    
    ['667',
    [
        [1, 'Tackle'],
        [1, 'Leer'],
        [5, 'Ember'],
        [8, 'Work Up'],
        [11, 'Headbutt'],
        [15, 'Noble Roar'],
        [20, 'Take Down'],
        [23, 'Fire Fang'],
        [28, 'Endeavor'],
        [33, 'Echoed Voice'],
        [36, 'Flamethrower'],
        [39, 'Crunch'],
        [43, 'Hyper Voice'],
        [46, 'Incinerate'],
        [50, 'Overheat'],
    ],
    ],
    
    ['668',
    [
        [1, 'Hyper Beam'],
        [1, 'Tackle'],
        [1, 'Leer'],
        [1, 'Ember'],
        [1, 'Work Up'],
        [5, 'Ember'],
        [8, 'Work Up'],
        [11, 'Headbutt'],
        [15, 'Noble Roar'],
        [20, 'Take Down'],
        [23, 'Fire Fang'],
        [28, 'Endeavor'],
        [33, 'Echoed Voice'],
        [38, 'Flamethrower'],
        [42, 'Crunch'],
        [48, 'Hyper Voice'],
        [51, 'Incinerate'],
        [57, 'Overheat'],
    ],
    ],
    
    ['669',
    [
        [1, 'Tackle'],
        [1, 'Vine Whip'],
        [6, 'Fairy Wind'],
        [10, 'Lucky Chant'],
        [15, 'Razor Leaf'],
        [20, 'Wish'],
        [22, 'Magical Leaf'],
        [24, 'Grassy Terrain'],
        [28, 'Petal Blizzard'],
        [33, 'Aromatherapy'],
        [37, 'Misty Terrain'],
        [41, 'Moonblast'],
        [45, 'Petal Dance'],
        [48, 'Solar Beam'],
    ],
    ],
    
    ['670',
    [
        [1, 'Tackle'],
        [1, 'Vine Whip'],
        [1, 'Fairy Wind'],
        [6, 'Fairy Wind'],
        [10, 'Lucky Chant'],
        [15, 'Razor Leaf'],
        [20, 'Wish'],
        [25, 'Magical Leaf'],
        [27, 'Grassy Terrain'],
        [33, 'Petal Blizzard'],
        [38, 'Aromatherapy'],
        [43, 'Misty Terrain'],
        [46, 'Moonblast'],
        [51, 'Petal Dance'],
        [58, 'Solar Beam'],
    ],
    ],
    
    ['671',
    [
        [1, 'Disarming Voice'],
        [1, 'Lucky Chant'],
        [1, 'Wish'],
        [1, 'Magical Leaf'],
        [1, 'Flower Shield'],
        [1, 'Grass Knot'],
        [1, 'Grassy Terrain'],
        [1, 'Petal Blizzard'],
        [1, 'Misty Terrain'],
        [1, 'Moonblast'],
        [1, 'Petal Dance'],
        [1, 'Aromatherapy'],
    ],
    ],
    
    ['672',
    [
        [1, 'Tackle'],
        [1, 'Growth'],
        [7, 'Vine Whip'],
        [9, 'Tail Whip'],
        [12, 'Leech Seed'],
        [13, 'Razor Leaf'],
        [16, 'Worry Seed'],
        [20, 'Synthesis'],
        [22, 'Take Down'],
        [26, 'Bulldoze'],
        [30, 'Seed Bomb'],
        [34, 'Bulk Up'],
        [38, 'Double Edge'],
        [42, 'Horn Leech'],
        [45, 'Leaf Blade'],
        [50, 'Milk Drink'],
    ],
    ],
    
    ['673',
    [
        [0, 'Aerial Ace'],
        [1, 'Aerial Ace'],
        [1, 'Earthquake'],
        [1, 'Tackle'],
        [1, 'Growth'],
        [1, 'Vine Whip'],
        [1, 'Tail Whip'],
        [7, 'Vine Whip'],
        [9, 'Tail Whip'],
        [12, 'Leech Seed'],
        [13, 'Razor Leaf'],
        [16, 'Worry Seed'],
        [20, 'Synthesis'],
        [22, 'Take Down'],
        [26, 'Bulldoze'],
        [30, 'Seed Bomb'],
        [34, 'Bulk Up'],
        [40, 'Double Edge'],
        [47, 'Horn Leech'],
        [55, 'Leaf Blade'],
        [58, 'Milk Drink'],
    ],
    ],
    
    ['674',
    [
        [1, 'Tackle'],
        [1, 'Leer'],
        [4, 'Arm Thrust'],
        [8, 'Taunt'],
        [12, 'Circle Throw'],
        [16, 'Low Sweep'],
        [20, 'Work Up'],
        [24, 'Slash'],
        [28, 'Vital Throw'],
        [33, 'Crunch'],
        [36, 'Body Slam'],
        [40, 'Parting Shot'],
        [44, 'Entrainment'],
    ],
    ],
    
    ['675',
    [
        [0, 'Night Slash'],
        [1, 'Night Slash'],
        [1, 'Bullet Punch'],
        [1, 'Tackle'],
        [1, 'Leer'],
        [1, 'Arm Thrust'],
        [1, 'Taunt'],
        [12, 'Circle Throw'],
        [16, 'Low Sweep'],
        [20, 'Work Up'],
        [24, 'Slash'],
        [28, 'Vital Throw'],
        [35, 'Crunch'],
        [40, 'Body Slam'],
        [46, 'Parting Shot'],
        [52, 'Entrainment'],
        [58, 'Hammer Arm'],
    ],
    ],
    
    ['676',
    [
        [1, 'Tackle'],
        [1, 'Growl'],
        [5, 'Sand Attack'],
        [9, 'Baby Doll Eyes'],
        [12, 'Headbutt'],
        [15, 'Tail Whip'],
        [22, 'Bite'],
        [27, 'Odor Sleuth'],
        [33, 'Retaliate'],
        [35, 'Take Down'],
        [38, 'Charm'],
        [42, 'Sucker Punch'],
        [48, 'Cotton Guard'],
    ],
    ],
    
    ['677',
    [
        [1, 'Scratch'],
        [1, 'Leer'],
        [3, 'Fake Out'],
        [6, 'Disarming Voice'],
        [9, 'Confusion'],
        [18, 'Covet'],
        [21, 'Psybeam'],
        [30, 'Light Screen'],
        [30, 'Reflect'],
        [33, 'Psyshock'],
    ],
    ],
    
    ['678',
    [
        [1, 'Mean Look'],
        [1, 'Scratch'],
        [1, 'Leer'],
        [1, 'Fake Out'],
        [1, 'Disarming Voice'],
        [9, 'Confusion'],
        [12, 'Helping Hand'],
        [15, 'Charm'],
        [18, 'Covet'],
        [21, 'Psybeam'],
        [24, 'Sucker Punch'],
        [29, 'Role Play'],
        [34, 'Light Screen'],
        [34, 'Reflect'],
        [39, 'Psyshock'],
        [44, 'Imprison'],
        [49, 'Quick Guard'],
        [54, 'Psychic'],
        [59, 'Misty Terrain'],
    ], //Male
    [
        [1, 'Magical Leaf'],
        [1, 'Scratch'],
        [1, 'Leer'],
        [1, 'Fake Out'],
        [1, 'Disarming Voice'],
        [9, 'Confusion'],
        [12, 'Stored Power'],
        [15, 'Charge Beam'],
        [18, 'Covet'],
        [21, 'Psybeam'],
        [24, 'Sucker Punch'],
        [29, 'Role Play'],
        [34, 'Light Screen'],
        [34, 'Reflect'],
        [39, 'Psyshock'],
        [44, 'Extrasensory'],
        [49, 'Shadow Ball'],
        [54, 'Psychic'],
        [59, 'Future Sight'],
    ], //Female
    ], //Meowstic
    
    ['679',
    [
        [1, 'Tackle'],
        [1, 'Fury Cutter'],
        [4, 'Shadow Sneak'],
        [8, 'Autotomize'],
        [12, 'Aerial Ace'],
        [16, 'Metal Sound'],
        [20, 'Slash'],
        [24, 'Night Slash'],
        [28, 'Retaliate'],
        [32, 'Iron Defense'],
        [36, 'Iron Head'],
        [40, 'Power Trick'],
        [44, 'Swords Dance'],
        [48, 'Sacred Sword'],
    ],
    ],
    
    ['680',
    [
        [1, 'Tackle'],
        [1, 'Fury Cutter'],
        [1, 'Shadow Sneak'],
        [1, 'Autotomize'],
        [12, 'Aerial Ace'],
        [16, 'Metal Sound'],
        [20, 'Slash'],
        [24, 'Night Slash'],
        [28, 'Retaliate'],
        [32, 'Iron Defense'],
        [38, 'Iron Head'],
        [44, 'Power Trick'],
        [50, 'Swords Dance'],
        [56, 'Sacred Sword'],
    ],
    ],
    
    ['681',
    [
        [0, 'Kings Shield'],
        [1, 'Kings Shield'],
        [1, 'Head Smash'],
        [1, 'Aerial Ace'],
        [1, 'Metal Sound'],
        [1, 'Slash'],
        [1, 'Night Slash'],
        [1, 'Retaliate'],
        [1, 'Iron Defense'],
        [1, 'Iron Head'],
        [1, 'Power Trick'],
        [1, 'Swords Dance'],
        [1, 'Sacred Sword'],
        [1, 'Tackle'],
        [1, 'Fury Cutter'],
        [1, 'Shadow Sneak'],
        [1, 'Autotomize'],
    ],
    ],
    
    ['682',
    [
        [1, 'Fairy Wind'],
        [1, 'Sweet Scent'],
        [3, 'Sweet Kiss'],
        [6, 'Echoed Voice'],
        [9, 'Draining Kiss'],
        [12, 'Aromatherapy'],
        [15, 'Draining Kiss'],
        [18, 'Attract'],
        [21, 'Flail'],
        [24, 'Misty Terrain'],
        [27, 'Psychic'],
        [30, 'Charm'],
        [33, 'Calm Mind'],
        [36, 'Moonblast'],
        [39, 'Skill Swap'],
    ],
    ],
    
    ['683',
    [
        [1, 'Aromatic Mist'],
        [1, 'Heal Pulse'],
        [1, 'Fairy Wind'],
        [1, 'Sweet Scent'],
        [1, 'Sweet Kiss'],
        [1, 'Echoed Voice'],
        [9, 'Disarming Voice'],
        [12, 'Aromatherapy'],
        [15, 'Draining Kiss'],
        [18, 'Attract'],
        [21, 'Flail'],
        [24, 'Misty Terrain'],
        [27, 'Psychic'],
        [30, 'Charm'],
        [33, 'Calm Mind'],
        [36, 'Moonblast'],
        [39, 'Skill Swap'],
        [42, 'Psych Up'],
    ],
    ],
    
    ['684',
    [
        [1, 'Tackle'],
        [1, 'Sweet Scent'],
        [3, 'Play Nice'],
        [6, 'Fairy Wind'],
        [9, 'Aromatherapy'],
        [12, 'Draining Kiss'],
        [15, 'Fake Tears'],
        [18, 'Round'],
        [21, 'String Shot'],
        [24, 'Cotton Spore'],
        [27, 'Energy Ball'],
        [30, 'Wish'],
        [33, 'Play Rough'],
        [36, 'Cotton Guard'],
        [39, 'Endeavor'],
    ],
    ],
    
    ['685',
    [
        [1, 'Tackle'],
        [1, 'Sweet Scent'],
        [1, 'Play Nice'],
        [1, 'Fairy Wind'],
        [9, 'Aromatherapy'],
        [12, 'Draining Kiss'],
        [15, 'Fake Tears'],
        [18, 'Round'],
        [21, 'String Shot'],
        [24, 'Cotton Spore'],
        [27, 'Energy Ball'],
        [30, 'Wish'],
        [33, 'Play Rough'],
        [36, 'Cotton Guard'],
        [39, 'Endeavor'],
        [42, 'Sticky Web'],
    ],
    ],
    
    ['686',
    [
        [1, 'Peck'],
        [1, 'Tackle'],
        [3, 'Hypnosis'],
        [6, 'Wrap'],
        [9, 'Payback'],
        [12, 'Pluck'],
        [15, 'Psybeam'],
        [18, 'Swagger'],
        [21, 'Slash'],
        [24, 'Night Slash'],
        [27, 'Psycho Cut'],
        [31, 'Switcheroo'],
        [33, 'Foul Play'],
        [36, 'Topsy Turvy'],
        [39, 'Superpower'],
    ],
    ],
    
    ['687',
    [
        [1, 'Reversal'],
        [1, 'Peck'],
        [1, 'Tackle'],
        [1, 'Hypnosis'],
        [1, 'Wrap'],
        [9, 'Payback'],
        [12, 'Pluck'],
        [15, 'Psybeam'],
        [18, 'Swagger'],
        [21, 'Slash'],
        [24, 'Night Slash'],
        [27, 'Psycho Cut'],
        [33, 'Switcheroo'],
        [37, 'Foul Play'],
        [42, 'Topsy Turvy'],
        [47, 'Superpower'],
    ],
    ],
    
    ['688',
    [
        [1, 'Mud Slap'],
        [1, 'Scratch'],
        [4, 'Withdraw'],
        [8, 'Water Gun'],
        [12, 'Fury Cutter'],
        [16, 'Fury Swipes'],
        [20, 'Ancient Power'],
        [24, 'Rock Polish'],
        [28, 'Slash'],
        [32, 'Hone Claws'],
        [36, 'Razor Shell'],
        [40, 'Shell Smash'],
        [44, 'Cross Chop'],
    ],
    ],
    
    ['689',
    [
        [1, 'Skull Bash'],
        [1, 'Mud Slap'],
        [1, 'Scratch'],
        [1, 'Withdraw'],
        [1, 'Water Gun'],
        [12, 'Fury Cutter'],
        [16, 'Fury Swipes'],
        [20, 'Ancient Power'],
        [24, 'Rock Polish'],
        [28, 'Slash'],
        [32, 'Hone Claws'],
        [36, 'Razor Shell'],
        [42, 'Shell Smash'],
        [48, 'Cross Chop'],
        [54, 'Stone Edge'],
    ],
    ],
    
    ['690',
    [
        [1, 'Tackle'],
        [1, 'Smokescreen'],
        [5, 'Acid'],
        [10, 'Water Gun'],
        [15, 'Tail Whip'],
        [20, 'Double Team'],
        [25, 'Poison Tail'],
        [30, 'Water Pulse'],
        [35, 'Toxic'],
        [40, 'Dragon Pulse'],
        [45, 'Aqua Tail'],
        [50, 'Sludge Bomb'],
        [55, 'Hydro Pump'],
    ],
    ],
    
    ['691',
    [
        [1, 'Tackle'],
        [1, 'Smokescreen'],
        [1, 'Acid'],
        [1, 'Water Gun'],
        [15, 'Tail Whip'],
        [20, 'Double Team'],
        [25, 'Poison Tail'],
        [30, 'Water Pulse'],
        [35, 'Toxic'],
        [40, 'Dragon Pulse'],
        [45, 'Aqua Tail'],
        [52, 'Sludge Bomb'],
        [59, 'Hydro Pump'],
        [66, 'Outrage'],
    ],
    ],
    
    ['692',
    [
        [1, 'Splash'],
        [1, 'Water Gun'],
        [5, 'Vice Grip'],
        [10, 'Flail'],
        [15, 'Aqua Jet'],
        [20, 'Smack Down'],
        [25, 'Hone Claws'],
        [30, 'Water Pulse'],
        [35, 'Swords Dance'],
        [40, 'Aura Sphere'],
        [45, 'Bounce'],
        [50, 'Muddy Water'],
        [55, 'Crabhammer'],
    ],
    ],
    
    ['693',
    [
        [1, 'Dark Pulse'],
        [1, 'Dragon Pulse'],
        [1, 'Heal Pulse'],
        [1, 'Splash'],
        [1, 'Water Gun'],
        [1, 'Vice Grip'],
        [1, 'Flail'],
        [15, 'Aqua Jet'],
        [20, 'Smack Down'],
        [25, 'Hone Claws'],
        [30, 'Water Pulse'],
        [35, 'Swords Dance'],
        [42, 'Aura Sphere'],
        [49, 'Bounce'],
        [56, 'Muddy Water'],
        [63, 'Crabhammer'],
    ],
    ],
    
    ['694',
    [
        [1, 'Mud Slap'],
        [1, 'Tail Whip'],
        [4, 'Pound'],
        [8, 'Thunder Shock'],
        [12, 'Quick Attack'],
        [16, 'Charge'],
        [20, 'Bulldoze'],
        [24, 'Volt Switch'],
        [28, 'Parabolic Charge'],
        [32, 'Thunder Wave'],
        [36, 'Thunderbolt'],
        [40, 'Electrify'],
        [44, 'Thunder'],
    ],
    ],
    
    ['695',
    [
        [1, 'Eerie Impulse'],
        [1, 'Discharge'],
        [1, 'Quick Attack'],
        [1, 'Charge'],
        [1, 'Bulldoze'],
        [1, 'Volt Switch'],
        [1, 'Parabolic Charge'],
        [1, 'Thunder Wave'],
        [1, 'Thunderbolt'],
        [1, 'Electrify'],
        [1, 'Thunder'],
        [1, 'Mud Slap'],
        [1, 'Tail Whip'],
        [1, 'Pound'],
        [1, 'Thunder Shock'],
    ],
    ],
    
    ['696',
    [
        [1, 'Tackle'],
        [1, 'Tail Whip'],
        [4, 'Roar'],
        [8, 'Ancient Power'],
        [12, 'Charm'],
        [16, 'Bite'],
        [20, 'Dragon Tail'],
        [24, 'Stomp'],
        [28, 'Rock Slide'],
        [32, 'Crunch'],
        [36, 'Dragon Claw'],
        [40, 'Thrash'],
        [44, 'Earthquake'],
        [48, 'Horn Drill'],
    ],
    ],
    
    ['697',
    [
        [1, 'Tackle'],
        [1, 'Tail Whip'],
        [1, 'Roar'],
        [1, 'Ancient Power'],
        [12, 'Charm'],
        [16, 'Bite'],
        [20, 'Dragon Tail'],
        [24, 'Stomp'],
        [28, 'Rock Slide'],
        [32, 'Crunch'],
        [36, 'Dragon Claw'],
        [42, 'Thrash'],
        [48, 'Earthquake'],
        [54, 'Horn Drill'],
        [60, 'Giga Impact'],
        [66, 'Head Smash'],
    ],
    ],
    
    ['698',
    [
        [1, 'Powder Snow'],
        [1, 'Growl'],
        [4, 'Encore'],
        [8, 'Ancient Power'],
        [12, 'Icy Wind'],
        [16, 'Round'],
        [20, 'Mist'],
        [24, 'Aurora Beam'],
        [28, 'Thunder Wave'],
        [32, 'Nature Power'],
        [36, 'Freeze Dry'],
        [40, 'Ice Beam'],
        [44, 'Light Screen'],
        [48, 'Hail'],
        [52, 'Blizzard'],
        [56, 'Hyper Beam'],
    ],
    ],
    
    ['699',
    [
        [1, 'Powder Snow'],
        [1, 'Growl'],
        [1, 'Encore'],
        [1, 'Ancient Power'],
        [12, 'Icy Wind'],
        [16, 'Round'],
        [20, 'Mist'],
        [24, 'Aurora Beam'],
        [28, 'Thunder Wave'],
        [32, 'Nature Power'],
        [36, 'Freeze Dry'],
        [42, 'Ice Beam'],
        [48, 'Light Screen'],
        [54, 'Hail'],
        [60, 'Blizzard'],
        [66, 'Hyper Beam'],
    ],
    ],
    
    ['700',
    [
        [0, 'Disarming Voice'],
        [1, 'Disarming Voice'],
        [1, 'Covet'],
        [1, 'Bite'],
        [1, 'Copycat'],
        [1, 'Baton Pass'],
        [1, 'Take Down'],
        [1, 'Charm'],
        [1, 'Double Edge'],
        [1, 'Helping Hand'],
        [1, 'Tackle'],
        [1, 'Growl'],
        [1, 'Tail Whip'],
        [5, 'Sand Attack'],
        [10, 'Quick Attack'],
        [15, 'Baby Doll Eyes'],
        [20, 'Swift'],
        [25, 'Light Screen'],
        [30, 'Draining Kiss'],
        [35, 'Misty Terrain'],
        [40, 'Skill Swap'],
        [45, 'Psych Up'],
        [50, 'Moonblast'],
        [55, 'Last Resort'],
    ],
    ],
    
    ['701',
    [
        [1, 'Tackle'],
        [1, 'Hone Claws'],
        [4, 'Wing Attack'],
        [8, 'Detect'],
        [12, 'Aerial Ace'],
        [16, 'Encore'],
        [20, 'Feather Dance'],
        [24, 'Submission'],
        [28, 'Bounce'],
        [32, 'Taunt'],
        [36, 'Roost'],
        [40, 'Swords Dance'],
        [44, 'Flying Press'],
        [48, 'High Jump Kick'],
        [52, 'Endeavor'],
        [56, 'Sky Attack'],
    ],
    ],
    
    ['702',
    [
        [1, 'Nuzzle'],
        [1, 'Tail Whip'],
        [5, 'Tackle'],
        [10, 'Charge'],
        [15, 'Thunder Shock'],
        [20, 'Charm'],
        [25, 'Parabolic Charge'],
        [30, 'Volt Switch'],
        [35, 'Rest'],
        [35, 'Snore'],
        [40, 'Discharge'],
        [45, 'Play Rough'],
        [50, 'Super Fang'],
        [55, 'Entrainment'],
        [60, 'Thunder'],
    ],
    ],
    
    ['703',
    [
        [1, 'Tackle'],
        [1, 'Harden'],
        [5, 'Guard Split'],
        [10, 'Smack Down'],
        [15, 'Flail'],
        [20, 'Ancient Power'],
        [25, 'Rock Polish'],
        [30, 'Light Screen'],
        [35, 'Rock Slide'],
        [40, 'Skill Swap'],
        [45, 'Power Gem'],
        [50, 'Stealth Rock'],
        [55, 'Moonblast'],
        [60, 'Stone Edge'],
    ],
    ],
    
    ['704',
    [
        [1, 'Absorb'],
        [1, 'Tackle'],
        [5, 'Water Gun'],
        [10, 'Dragon Breath'],
        [15, 'Protect'],
        [20, 'Flail'],
        [25, 'Water Pulse'],
        [30, 'Rain Dance'],
        [35, 'Dragon Pulse'],
        [41, 'Curse'],
        [45, 'Body Slam'],
        [50, 'Muddy Water'],
    ],
    ],
    
    ['705',
    [
        [0, 'Acid Spray'],
        [1, 'Acid Spray'],
        [1, 'Absorb'],
        [1, 'Tackle'],
        [1, 'Water Gun'],
        [1, 'Dragon Breath'],
        [15, 'Protect'],
        [20, 'Flail'],
        [25, 'Water Pulse'],
        [30, 'Rain Dance'],
        [35, 'Dragon Pulse'],
        [43, 'Curse'],
        [49, 'Body Slam'],
        [56, 'Muddy Water'],
    ],
    ],
    
    ['706',
    [
        [0, 'Aqua Tail'],
        [1, 'Aqua Tail'],
        [1, 'Acid Spray'],
        [1, 'Poison Tail'],
        [1, 'Tearful Look'],
        [1, 'Feint'],
        [1, 'Absorb'],
        [1, 'Tackle'],
        [1, 'Water Gun'],
        [1, 'Dragon Breath'],
        [15, 'Protect'],
        [20, 'Flail'],
        [25, 'Water Pulse'],
        [30, 'Rain Dance'],
        [35, 'Dragon Pulse'],
        [43, 'Curse'],
        [49, 'Body Slam'],
        [58, 'Muddy Water'],
        [67, 'Power Whip'],
    ],
    ],
    
    ['707',
    [
        [1, 'Fairy Lock'],
        [1, 'Astonish'],
        [4, 'Tackle'],
        [8, 'Fairy Wind'],
        [12, 'Torment'],
        [16, 'Crafty Shield'],
        [20, 'Metal Sound'],
        [24, 'Draining Kiss'],
        [28, 'Recycle'],
        [32, 'Imprison'],
        [36, 'Flash Cannon'],
        [40, 'Play Rough'],
        [44, 'Magic Room'],
        [48, 'Foul Play'],
        [52, 'Last Resort'],
    ],
    ],
    
    ['708',
    [
        [1, 'Astonish'],
        [1, 'Tackle'],
        [4, 'Branch Poke'],
        [8, 'Leech Seed'],
        [12, 'Confuse Ray'],
        [16, 'Will O Wisp'],
        [20, 'Hex'],
        [24, 'Growth'],
        [28, 'Horn Leech'],
        [32, 'Curse'],
        [36, 'Phantom Force'],
        [40, 'Ingrain'],
        [44, 'Wood Hammer'],
        [48, 'Destiny Bond'],
        [52, 'Forests Curse'],
    ],
    ],
    
    ['709',
    [
        [0, 'Shadow Claw'],
        [1, 'Shadow Claw'],
        [1, 'Astonish'],
        [1, 'Tackle'],
        [1, 'Branch Poke'],
        [1, 'Leech Seed'],
        [12, 'Confuse Ray'],
        [16, 'Will O Wisp'],
        [20, 'Hex'],
        [24, 'Growth'],
        [28, 'Horn Leech'],
        [32, 'Curse'],
        [36, 'Phantom Force'],
        [40, 'Ingrain'],
        [44, 'Wood Hammer'],
        [48, 'Destiny Bond'],
        [52, 'Forests Curse'],
    ],
    ],
    
    ['710',
    [
        [1, 'Trick Or Treat'],
        [1, 'Astonish'],
        [4, 'Shadow Sneak'],
        [8, 'Confuse Ray'],
        [12, 'Trick Or Treat'],
        [12, 'Razor Leaf'],
        [16, 'Leech Seed'],
        [20, 'Bullet Seed'],
        [24, 'Trick Or Treat'],
        [24, 'Scary Face'],
        [28, 'Worry Seed'],
        [32, 'Seed Bomb'],
        [36, 'Trick Or Treat'],
        [36, 'Shadow Ball'],
        [40, 'Trick'],
        [44, 'Pain Split'],
    ],
    ],
    
    ['711',
    [
        [1, 'Explosion'],
        [1, 'Moonblast'],
        [1, 'Trick Or Treat'],
        [1, 'Astonish'],
        [1, 'Shadow Sneak'],
        [1, 'Confuse Ray'],
        [12, 'Trick Or Treat'],
        [12, 'Razor Leaf'],
        [16, 'Leech Seed'],
        [20, 'Bullet Seed'],
        [24, 'Trick Or Treat'],
        [24, 'Scary Face'],
        [28, 'Worry Seed'],
        [32, 'Seed Bomb'],
        [36, 'Trick Or Treat'],
        [36, 'Shadow Ball'],
        [40, 'Trick'],
        [44, 'Pain Split'],
        [48, 'Phantom Force'],
    ],
    ],
    
    ['712',
    [
        [1, 'Rapid Spin'],
        [1, 'Harden'],
        [3, 'Tackle'],
        [6, 'Powder Snow'],
        [9, 'Curse'],
        [12, 'Icy Wind'],
        [15, 'Protect'],
        [18, 'Avalanche'],
        [21, 'Bite'],
        [24, 'Ice Fang'],
        [27, 'Iron Defense'],
        [30, 'Recover'],
        [33, 'Crunch'],
        [36, 'Take Down'],
        [39, 'Blizzard'],
        [42, 'Double Edge'],
    ],
    ],
    
    ['713',
    [
        [0, 'Body Slam'],
        [1, 'Body Slam'],
        [1, 'Wide Guard'],
        [1, 'Rapid Spin'],
        [1, 'Harden'],
        [1, 'Tackle'],
        [1, 'Powder Snow'],
        [9, 'Curse'],
        [12, 'Icy Wind'],
        [15, 'Protect'],
        [18, 'Avalanche'],
        [21, 'Bite'],
        [24, 'Ice Fang'],
        [27, 'Iron Defense'],
        [30, 'Recover'],
        [33, 'Crunch'],
        [36, 'Take Down'],
        [41, 'Blizzard'],
        [46, 'Double Edge'],
        [51, 'Skull Bash'],
    ],
    ],
    
    ['714',
    [
        [1, 'Absorb'],
        [1, 'Tackle'],
        [4, 'Gust'],
        [8, 'Supersonic'],
        [12, 'Double Team'],
        [16, 'Wing Attack'],
        [20, 'Bite'],
        [24, 'Air Cutter'],
        [28, 'Whirlwind'],
        [32, 'Super Fang'],
        [36, 'Air Slash'],
        [40, 'Screech'],
        [44, 'Roost'],
        [49, 'Tailwind'],
        [52, 'Hurricane'],
    ],
    ],
    
    ['715',
    [
        [0, 'Dragon Pulse'],
        [1, 'Dragon Pulse'],
        [1, 'Moonlight'],
        [1, 'Absorb'],
        [1, 'Tackle'],
        [1, 'Gust'],
        [1, 'Supersonic'],
        [12, 'Double Team'],
        [16, 'Wing Attack'],
        [20, 'Bite'],
        [24, 'Air Cutter'],
        [28, 'Whirlwind'],
        [32, 'Super Fang'],
        [36, 'Air Slash'],
        [40, 'Screech'],
        [44, 'Roost'],
        [51, 'Tailwind'],
        [56, 'Hurricane'],
        [62, 'Boomburst'],
    ],
    ],
    
    ['716',
    [
        [1, 'Tackle'],
        [1, 'Gravity'],
        [5, 'Light Screen'],
        [10, 'Aurora Beam'],
        [15, 'Nature Power'],
        [20, 'Night Slash'],
        [25, 'Aromatherapy'],
        [30, 'Psych Up'],
        [35, 'Horn Leech'],
        [40, 'Misty Terrain'],
        [45, 'Ingrain'],
        [50, 'Take Down'],
        [55, 'Geomancy'],
        [60, 'Moonblast'],
        [65, 'Heal Pulse'],
        [70, 'Megahorn'],
        [75, 'Close Combat'],
        [80, 'Outrage'],
        [85, 'Giga Impact'],
    ],
    ],
    
    ['717',
    [
        [1, 'Gust'],
        [1, 'Double Team'],
        [5, 'Taunt'],
        [10, 'Snarl'],
        [15, 'Disable'],
        [20, 'Sucker Punch'],
        [25, 'Tailwind'],
        [30, 'Roost'],
        [35, 'Air Slash'],
        [40, 'Dark Pulse'],
        [45, 'Psychic'],
        [50, 'Oblivion Wing'],
        [55, 'Phantom Force'],
        [60, 'Foul Play'],
        [65, 'Dragon Rush'],
        [70, 'Hurricane'],
        [75, 'Focus Blast'],
        [80, 'Sky Attack'],
        [85, 'Hyper Beam'],
    ],
    ],
    
    ['718',
    [
        [1, 'Thousand Arrows'],
        [1, 'Thousand Waves'],
        [1, 'Core Enforcer'],
        [1, 'Bind'],
        [1, 'Bulldoze'],
        [1, 'Dragon Breath'],
        [1, 'Bite'],
        [8, 'Haze'],
        [16, 'Dig'],
        [24, 'Safeguard'],
        [32, 'Crunch'],
        [40, 'Dragon Pulse'],
        [48, 'Lands Wrath'],
        [56, 'Glare'],
        [64, 'Sandstorm'],
        [72, 'Coil'],
        [80, 'Earthquake'],
        [88, 'Outrage'],
    ],
    ],
    
    ['719',
    [
        [1, 'Tackle'],
        [1, 'Harden'],
        [7, 'Guard Split'],
        [14, 'Smack Down'],
        [21, 'Flail'],
        [28, 'Ancient Power'],
        [35, 'Rock Polish'],
        [42, 'Light Screen'],
        [49, 'Rock Slide'],
        [56, 'Skill Swap'],
        [63, 'Power Gem'],
        [70, 'Stealth Rock'],
        [77, 'Moonblast'],
        [84, 'Stone Edge'],
        [91, 'Diamond Storm'],
    ],
    ],
    
    ['720',
    [
        [1, 'Hyperspace Hole'],
        [1, 'Trick'],
        [1, 'Destiny Bond'],
        [1, 'Ally Switch'],
        [1, 'Confusion'],
        [6, 'Astonish'],
        [10, 'Magic Coat'],
        [15, 'Light Screen'],
        [19, 'Psybeam'],
        [25, 'Skill Swap'],
        [29, 'Power Split'],
        [29, 'Guard Split'],
        [35, 'Phantom Force'],
        [46, 'Zen Headbutt'],
        [50, 'Wonder Room'],
        [50, 'Trick Room'],
        [55, 'Shadow Ball'],
        [68, 'Nasty Plot'],
        [75, 'Psychic'],
        [85, 'Hyperspace Hole'],
    ], //Hoopa Confined
    [
        [1, 'Hyperspace Fury'],
        [1, 'Trick'],
        [1, 'Destiny Bond'],
        [1, 'Ally Switch'],
        [1, 'Confusion'],
        [6, 'Astonish'],
        [10, 'Magic Coat'],
        [15, 'Light Screen'],
        [19, 'Psybeam'],
        [25, 'Skill Swap'],
        [29, 'Power Split'],
        [29, 'Guard Split'],
        [46, 'Knock Off'],
        [50, 'Wonder Room'],
        [50, 'Trick Room'],
        [55, 'Dark Pulse'],
        [75, 'Psychic'],
        [85, 'Hyperspace Fury'],
    ], //Hoopa Unbound
    ],
    
    ['721',
    [
        [1, 'Fire Spin'],
        [1, 'Water Gun'],
        [6, 'Leer'],
        [12, 'Weather Ball'],
        [18, 'Flame Charge'],
        [24, 'Water Pulse'],
        [30, 'Scary Face'],
        [36, 'Incinerate'],
        [42, 'Stomp'],
        [48, 'Scald'],
        [54, 'Take Down'],
        [60, 'Mist'],
        [60, 'Haze'],
        [66, 'Hydro Pump'],
        [72, 'Steam Eruption'],
        [78, 'Flare Blitz'],
        [84, 'Overheat'],
        [90, 'Explosion'],
    ],
    ],
    
    ['722',
    [
        [1, 'Tackle'],
        [1, 'Growl'],
        [3, 'Leafage'],
        [6, 'Astonish'],
        [9, 'Peck'],
        [12, 'Shadow Sneak'],
        [15, 'Razor Leaf'],
        [18, 'Synthesis'],
        [21, 'Pluck'],
        [24, 'Nasty Plot'],
        [27, 'Sucker Punch'],
        [30, 'Leaf Blade'],
        [33, 'Feather Dance'],
        [36, 'Brave Bird'],
    ],
    ],
    
    ['723',
    [
        [1, 'Tackle'],
        [1, 'Growl'],
        [1, 'Leafage'],
        [1, 'Astonish'],
        [9, 'Peck'],
        [12, 'Shadow Sneak'],
        [15, 'Razor Leaf'],
        [20, 'Synthesis'],
        [25, 'Pluck'],
        [30, 'Nasty Plot'],
        [35, 'Sucker Punch'],
        [40, 'Leaf Blade'],
        [45, 'Feather Dance'],
        [50, 'Brave Bird'],
    ],
    ],
    
    ['724',
    [
        [0, 'Spirit Shackle'],
        [1, 'Spirit Shackle'],
        [1, 'Phantom Force'],
        [1, 'Leaf Storm'],
        [1, 'U Turn'],
        [1, 'Spite'],
        [1, 'Tackle'],
        [1, 'Growl'],
        [1, 'Leafage'],
        [1, 'Astonish'],
        [9, 'Peck'],
        [12, 'Shadow Sneak'],
        [15, 'Razor Leaf'],
        [20, 'Synthesis'],
        [25, 'Pluck'],
        [30, 'Nasty Plot'],
        [37, 'Sucker Punch'],
        [44, 'Leaf Blade'],
        [51, 'Feather Dance'],
        [58, 'Brave Bird'],
    ],
    ],
    
    ['725',
    [
        [1, 'Scratch'],
        [1, 'Growl'],
        [3, 'Ember'],
        [6, 'Lick'],
        [9, 'Roar'],
        [12, 'Fury Swipes'],
        [15, 'Bite'],
        [18, 'Double Kick'],
        [21, 'Fire Fang'],
        [24, 'Scary Face'],
        [27, 'Swagger'],
        [30, 'Flamethrower'],
        [33, 'Thrash'],
        [36, 'Flare Blitz'],
    ],
    ],
    
    ['726',
    [
        [1, 'Scratch'],
        [1, 'Growl'],
        [1, 'Ember'],
        [1, 'Lick'],
        [9, 'Roar'],
        [12, 'Fury Swipes'],
        [15, 'Bite'],
        [20, 'Double Kick'],
        [25, 'Fire Fang'],
        [30, 'Scary Face'],
        [35, 'Swagger'],
        [40, 'Flamethrower'],
        [45, 'Thrash'],
        [50, 'Flare Blitz'],
    ],
    ],
    
    ['727',
    [
        [0, 'Darkest Lariat'],
        [1, 'Darkest Lariat'],
        [1, 'Cross Chop'],
        [1, 'Throat Chop'],
        [1, 'Bulk Up'],
        [1, 'Scratch'],
        [1, 'Growl'],
        [1, 'Ember'],
        [1, 'Lick'],
        [9, 'Roar'],
        [12, 'Fury Swipes'],
        [15, 'Bite'],
        [20, 'Double Kick'],
        [25, 'Fire Fang'],
        [30, 'Scary Face'],
        [32, 'Swagger'],
        [44, 'Flamethrower'],
        [51, 'Thrash'],
        [58, 'Flare Blitz'],
    ],
    ],
    
    ['728',
    [
        [1, 'Pound'],
        [1, 'Growl'],
        [3, 'Water Gun'],
        [6, 'Disarming Voice'],
        [9, 'Aqua Jet'],
        [12, 'Baby Doll Eyes'],
        [15, 'Icy Wind'],
        [18, 'Sing'],
        [21, 'Bubble Beam'],
        [24, 'Encore'],
        [27, 'Misty Terrain'],
        [30, 'Hyper Voice'],
        [33, 'Moonblast'],
        [36, 'Hydro Pump'],
    ],
    ],
    
    ['729',
    [
        [1, 'Pound'],
        [1, 'Growl'],
        [1, 'Water Gun'],
        [1, 'Disarming Voice'],
        [9, 'Aqua Jet'],
        [12, 'Baby Doll Eyes'],
        [15, 'Icy Wind'],
        [20, 'Sing'],
        [25, 'Bubble Beam'],
        [30, 'Encore'],
        [35, 'Misty Terrain'],
        [40, 'Hyper Voice'],
        [45, 'Moonblast'],
        [50, 'Hydro Pump'],
    ],
    ],
    
    ['730',
    [
        [0, 'Sparkling Aria'],
        [1, 'Sparkling Aria'],
        [1, 'Pound'],
        [1, 'Growl'],
        [1, 'Water Gun'],
        [1, 'Disarming Voice'],
        [9, 'Aqua Jet'],
        [12, 'Baby Doll Eyes'],
        [15, 'Icy Wind'],
        [20, 'Sing'],
        [25, 'Bubble Beam'],
        [30, 'Encore'],
        [37, 'Misty Terrain'],
        [44, 'Hyper Voice'],
        [51, 'Moonblast'],
        [58, 'Hydro Pump'],
    ],
    ],
    
    ['731',
    [
        [1, 'Peck'],
        [3, 'Growl'],
        [7, 'Echoed Voice'],
        [9, 'Rock Smash'],
        [13, 'Supersonic'],
        [15, 'Pluck'],
        [19, 'Roost'],
        [21, 'Fury Attack'],
        [25, 'Screech'],
        [27, 'Drill Peck'],
        [31, 'Bullet Seed'],
        [33, 'Feather Dance'],
        [37, 'Hyper Voice'],
    ],
    ],
    
    ['732',
    [
        [1, 'Rock Blast'],
        [1, 'Peck'],
        [1, 'Growl'],
        [1, 'Echoed Voice'],
        [1, 'Rock Smash'],
        [3, 'Growl'],
        [7, 'Echoed Voice'],
        [9, 'Rock Smash'],
        [13, 'Supersonic'],
        [16, 'Pluck'],
        [21, 'Roost'],
        [24, 'Fury Attack'],
        [29, 'Screech'],
        [32, 'Drill Peck'],
        [37, 'Bullet Seed'],
        [40, 'Feather Dance'],
        [45, 'Hyper Voice'],
    ],
    ],
    
    ['733',
    [
        [0, 'Beak Blast'],
        [1, 'Beak Blast'],
        [1, 'Rock Blast'],
        [1, 'Peck'],
        [1, 'Growl'],
        [1, 'Echoed Voice'],
        [1, 'Rock Smash'],
        [3, 'Growl'],
        [7, 'Echoed Voice'],
        [9, 'Rock Smash'],
        [13, 'Supersonic'],
        [16, 'Pluck'],
        [21, 'Roost'],
        [24, 'Fury Attack'],
        [30, 'Screech'],
        [34, 'Drill Peck'],
        [40, 'Bullet Seed'],
        [44, 'Feather Dance'],
        [50, 'Hyper Voice'],
    ],
    ],
    
    ['734',
    [
        [1, 'Tackle'],
        [3, 'Leer'],
        [7, 'Pursuit'],
        [10, 'Sand Attack'],
        [13, 'Odor Sleuth'],
        [16, 'Bide'],
        [19, 'Bite'],
        [22, 'Mud Slap'],
        [25, 'Super Fang'],
        [28, 'Take Down'],
        [31, 'Scary Face'],
        [34, 'Crunch'],
        [37, 'Hyper Fang'],
        [40, 'Yawn'],
        [43, 'Thrash'],
        [46, 'Rest'],
    ],
    ],
    
    ['735',
    [
        [1, 'Tackle'],
        [1, 'Leer'],
        [1, 'Pursuit'],
        [1, 'Sand Attack'],
        [3, 'Leer'],
        [7, 'Pursuit'],
        [10, 'Sand Attack'],
        [13, 'Odor Sleuth'],
        [16, 'Bide'],
        [19, 'Bite'],
        [23, 'Mud Slap'],
        [27, 'Super Fang'],
        [31, 'Take Down'],
        [35, 'Scary Face'],
        [39, 'Crunch'],
        [43, 'Hyper Fang'],
        [47, 'Yawn'],
        [51, 'Thrash'],
        [55, 'Rest'],
    ],
    ],
    
    ['736',
    [
        [1, 'Vice Grip'],
        [1, 'Mud Slap'],
        [5, 'String Shot'],
        [10, 'Bug Bite'],
        [15, 'Bite'],
        [21, 'Spark'],
        [25, 'Sticky Web'],
        [30, 'X Scissor'],
        [35, 'Crunch'],
        [40, 'Dig'],
    ],
    ],
    
    ['737',
    [
        [0, 'Charge'],
        [1, 'Charge'],
        [1, 'Vice Grip'],
        [1, 'Mud Slap'],
        [1, 'String Shot'],
        [1, 'Bug Bite'],
        [15, 'Bite'],
        [23, 'Spark'],
        [29, 'Sticky Web'],
        [36, 'X Scissor'],
        [43, 'Crunch'],
        [50, 'Dig'],
        [57, 'Iron Defense'],
        [64, 'Discharge'],
    ],
    ],
    
    ['738',
    [
        [0, 'Thunderbolt'],
        [1, 'Thunderbolt'],
        [1, 'Charge'],
        [1, 'X Scissor'],
        [1, 'Crunch'],
        [1, 'Dig'],
        [1, 'Iron Defense'],
        [1, 'Discharge'],
        [1, 'Vice Grip'],
        [1, 'Mud Slap'],
        [1, 'String Shot'],
        [1, 'Bug Bite'],
        [15, 'Bite'],
        [23, 'Spark'],
        [29, 'Sticky Web'],
        [36, 'Bug Buzz'],
        [43, 'Guillotine'],
        [50, 'Fly'],
        [57, 'Agility'],
        [64, 'Zap Cannon'],
    ],
    ],
    
    ['739',
    [
        [1, 'Bubble'],
        [5, 'Rock Smash'],
        [9, 'Leer'],
        [13, 'Pursuit'],
        [17, 'Bubble Beam'],
        [22, 'Power Up Punch'],
        [25, 'Dizzy Punch'],
        [29, 'Payback'],
        [33, 'Reversal'],
        [37, 'Crabhammer'],
        [42, 'Iron Defense'],
        [45, 'Dynamic Punch'],
        [49, 'Close Combat'],
    ],
    ],
    
    ['740',
    [
        [0, 'Ice Punch'],
        [1, 'Ice Punch'],
        [1, 'Bubble'],
        [1, 'Rock Smash'],
        [1, 'Leer'],
        [1, 'Pursuit'],
        [5, 'Rock Smash'],
        [9, 'Leer'],
        [13, 'Pursuit'],
        [17, 'Bubble Beam'],
        [22, 'Power Up Punch'],
        [25, 'Dizzy Punch'],
        [29, 'Avalanche'],
        [33, 'Reversal'],
        [37, 'Ice Hammer'],
        [42, 'Iron Defense'],
        [45, 'Dynamic Punch'],
        [49, 'Close Combat'],
    ],
    ],
    
    ['741',
    [
        [1, 'Pound'],
        [4, 'Growl'],
        [6, 'Peck'],
        [10, 'Helping Hand'],
        [13, 'Air Cutter'],
        [16, 'Baton Pass'],
        [20, 'Feather Dance'],
        [23, 'Double Slap'],
        [26, 'Teeter Dance'],
        [30, 'Roost'],
        [33, 'Captivate'],
        [36, 'Air Slash'],
        [40, 'Revelation Dance'],
        [43, 'Mirror Move'],
        [46, 'Agility'],
        [50, 'Hurricane'],
    ],
    ],
    
    ['742',
    [
        [1, 'Absorb'],
        [1, 'Fairy Wind'],
        [6, 'Stun Spore'],
        [12, 'Sweet Scent'],
        [18, 'Draining Kiss'],
        [24, 'Struggle Bug'],
        [30, 'Aromatherapy'],
        [36, 'Switcheroo'],
        [42, 'Dazzling Gleam'],
        [48, 'Bug Buzz'],
        [54, 'Quiver Dance'],
    ],
    ],
    
    ['743',
    [
        [0, 'Pollen Puff'],
        [1, 'Pollen Puff'],
        [1, 'Covet'],
        [1, 'Absorb'],
        [1, 'Fairy Wind'],
        [1, 'Stun Spore'],
        [1, 'Sweet Scent'],
        [18, 'Draining Kiss'],
        [24, 'Struggle Bug'],
        [32, 'Aromatherapy'],
        [40, 'Switcheroo'],
        [48, 'Dazzling Gleam'],
        [56, 'Bug Buzz'],
        [64, 'Quiver Dance'],
    ],
    ],
    
    ['744',
    [
        [1, 'Tackle'],
        [1, 'Leer'],
        [4, 'Sand Attack'],
        [8, 'Double Team'],
        [12, 'Rock Throw'],
        [16, 'Howl'],
        [20, 'Bite'],
        [24, 'Rock Tomb'],
        [28, 'Roar'],
        [32, 'Rock Slide'],
        [36, 'Crunch'],
        [40, 'Scary Face'],
        [44, 'Stealth Rock'],
        [48, 'Stone Edge'],
    ],
    ],
    
    ['745',
    [
        [0, 'Sucker Punch'],
        [1, 'Sucker Punch'],
        [1, 'Accelerock'],
        [1, 'Quick Guard'],
        [1, 'Quick Attack'],
        [1, 'Tackle'],
        [1, 'Leer'],
        [1, 'Sand Attack'],
        [1, 'Double Team'],
        [12, 'Rock Throw'],
        [16, 'Howl'],
        [20, 'Bite'],
        [24, 'Rock Tomb'],
        [30, 'Roar'],
        [36, 'Rock Slide'],
        [42, 'Crunch'],
        [48, 'Scary Face'],
        [54, 'Stealth Rock'],
        [60, 'Stone Edge'],
    ], //Day Form
    [
        [0, 'Counter'],
        [1, 'Counter'],
        [1, 'Endure'],
        [1, 'Reversal'],
        [1, 'Taunt'],
        [1, 'Tackle'],
        [1, 'Leer'],
        [1, 'Sand Attack'],
        [1, 'Double Team'],
        [12, 'Rock Throw'],
        [16, 'Howl'],
        [20, 'Bite'],
        [24, 'Rock Tomb'],
        [30, 'Roar'],
        [36, 'Rock Slide'],
        [42, 'Crunch'],
        [48, 'Scary Face'],
        [54, 'Stealth Rock'],
        [60, 'Stone Edge'],
    ], //Night Form
    [
        [0, 'Crush Claw'],
        [1, 'Crush Claw'],
        [1, 'Sucker Punch'],
        [1, 'Accelerock'],
        [1, 'Quick Guard'],
        [1, 'Quick Attack'],
        [1, 'Counter'],
        [1, 'Endure'],
        [1, 'Reversal'],
        [1, 'Taunt'],
        [1, 'Tackle'],
        [1, 'Leer'],
        [1, 'Sand Attack'],
        [1, 'Double Team'],
        [12, 'Rock Throw'],
        [16, 'Howl'],
        [20, 'Bite'],
        [24, 'Rock Tomb'],
        [30, 'Roar'],
        [36, 'Rock Slide'],
        [42, 'Crunch'],
        [48, 'Scary Face'],
        [54, 'Stealth Rock'],
        [60, 'Stone Edge'],
    ], //Dusk Form
    ], //Lycanroc
    
    ['746',
    [
        [1, 'Water Gun'],
        [1, 'Growl'],
        [4, 'Helping Hand'],
        [8, 'Beat Up'],
        [12, 'Brine'],
        [16, 'Tearful Look'],
        [20, 'Dive'],
        [24, 'Soak'],
        [28, 'Uproar'],
        [32, 'Aqua Tail'],
        [36, 'Aqua Ring'],
        [40, 'Endeavor'],
        [44, 'Hydro Pump'],
        [48, 'Double Edge'],
    ],
    ],
    
    ['747',
    [
        [1, 'Poison Sting'],
        [1, 'Peck'],
        [5, 'Wide Guard'],
        [10, 'Bite'],
        [15, 'Venoshock'],
        [20, 'Recover'],
        [25, 'Pin Missile'],
        [30, 'Toxic Spikes'],
        [35, 'Liquidation'],
        [40, 'Venom Drench'],
        [45, 'Poison Jab'],
        [50, 'Toxic'],
    ],
    ],
    
    ['748',
    [
        [0, 'Baneful Bunker'],
        [1, 'Baneful Bunker'],
        [1, 'Poison Sting'],
        [1, 'Peck'],
        [1, 'Wide Guard'],
        [1, 'Bite'],
        [15, 'Venoshock'],
        [20, 'Recover'],
        [25, 'Pin Missile'],
        [30, 'Toxic Spikes'],
        [35, 'Liquidation'],
        [42, 'Venom Drench'],
        [49, 'Poison Jab'],
        [56, 'Toxic'],
    ],
    ],
    
    ['749',
    [
        [1, 'Mud Slap'],
        [1, 'Rock Smash'],
        [4, 'Iron Defense'],
        [8, 'Double Kick'],
        [12, 'Bulldoze'],
        [16, 'Stomp'],
        [20, 'Strength'],
        [24, 'Counter'],
        [28, 'High Horsepower'],
        [32, 'Heavy Slam'],
        [36, 'Earthquake'],
        [40, 'Mega Kick'],
        [44, 'Superpower'],
    ],
    ],
    
    ['750',
    [
        [1, 'Mud Slap'],
        [1, 'Rock Smash'],
        [1, 'Iron Defense'],
        [1, 'Double Kick'],
        [12, 'Bulldoze'],
        [16, 'Stomp'],
        [20, 'Strength'],
        [24, 'Counter'],
        [28, 'High Horsepower'],
        [34, 'Heavy Slam'],
        [40, 'Earthquake'],
        [46, 'Mega Kick'],
        [52, 'Superpower'],
    ],
    ],
    
    ['751',
    [
        [1, 'Water Gun'],
        [1, 'Infestation'],
        [4, 'Bug Bite'],
        [8, 'Bite'],
        [12, 'Bubble Beam'],
        [16, 'Aqua Ring'],
        [20, 'Headbutt'],
        [24, 'Crunch'],
        [28, 'Soak'],
        [32, 'Entrainment'],
        [36, 'Lunge'],
        [40, 'Liquidation'],
        [44, 'Leech Life'],
        [48, 'Mirror Coat'],
    ],
    ],
    
    ['752',
    [
        [1, 'Wide Guard'],
        [1, 'Water Gun'],
        [1, 'Infestation'],
        [1, 'Bug Bite'],
        [1, 'Bite'],
        [12, 'Bubble Beam'],
        [16, 'Aqua Ring'],
        [20, 'Headbutt'],
        [26, 'Crunch'],
        [32, 'Soak'],
        [38, 'Entrainment'],
        [44, 'Lunge'],
        [50, 'Liquidation'],
        [56, 'Leech Life'],
        [62, 'Mirror Coat'],
    ],
    ],
    
    ['753',
    [
        [1, 'Leafage'],
        [1, 'Fury Cutter'],
        [5, 'Growth'],
        [10, 'Ingrain'],
        [15, 'Razor Leaf'],
        [20, 'Sweet Scent'],
        [25, 'Slash'],
        [30, 'X Scissor'],
        [35, 'Synthesis'],
        [40, 'Leaf Blade'],
        [45, 'Sunny Day'],
        [50, 'Solar Beam'],
    ],
    ],
    
    ['754',
    [
        [0, 'Petal Blizzard'],
        [1, 'Petal Blizzard'],
        [1, 'Night Slash'],
        [1, 'Solar Beam'],
        [1, 'Dual Chop'],
        [1, 'Leafage'],
        [1, 'Fury Cutter'],
        [1, 'Growth'],
        [1, 'Ingrain'],
        [15, 'Razor Leaf'],
        [20, 'Sweet Scent'],
        [25, 'Slash'],
        [30, 'X Scissor'],
        [37, 'Synthesis'],
        [44, 'Leaf Blade'],
        [51, 'Sunny Day'],
        [63, 'Solar Blade'],
    ],
    ],
    
    ['755',
    [
        [1, 'Absorb'],
        [1, 'Astonish'],
        [4, 'Confuse Ray'],
        [8, 'Ingrain'],
        [12, 'Mega Drain'],
        [16, 'Sleep Powder'],
        [20, 'Moonlight'],
        [25, 'Strength Sap'],
        [28, 'Giga Drain'],
        [32, 'Dazzling Gleam'],
        [36, 'Spore'],
        [40, 'Moonblast'],
        [44, 'Dream Eater'],
    ],
    ],
    
    ['756',
    [
        [1, 'Absorb'],
        [1, 'Astonish'],
        [1, 'Confuse Ray'],
        [1, 'Ingrain'],
        [12, 'Mega Drain'],
        [16, 'Sleep Powder'],
        [20, 'Moonlight'],
        [27, 'Strength Sap'],
        [32, 'Giga Drain'],
        [38, 'Dazzling Gleam'],
        [44, 'Spore'],
        [50, 'Moonblast'],
        [56, 'Dream Eater'],
    ],
    ],
    
    ['757',
    [
        [1, 'Scratch'],
        [1, 'Poison Gas'],
        [5, 'Smog'],
        [10, 'Ember'],
        [15, 'Poison Fang'],
        [20, 'Sweet Scent'],
        [25, 'Nasty Plot'],
        [30, 'Incinerate'],
        [35, 'Venoshock'],
        [40, 'Dragon Pulse'],
        [45, 'Venom Drench'],
        [50, 'Flamethrower'],
        [55, 'Toxic'],
        [60, 'Endeavor'],
    ],
    ],
    
    ['758',
    [
        [0, 'Fire Lash'],
        [1, 'Fire Lash'],
        [1, 'Knock Off'],
        [1, 'Encore'],
        [1, 'Torment'],
        [1, 'Swagger'],
        [1, 'Disable'],
        [1, 'Scratch'],
        [1, 'Endeavor'],
        [1, 'Pound'],
        [1, 'Poison Gas'],
        [1, 'Smog'],
        [1, 'Ember'],
        [15, 'Poison Fang'],
        [20, 'Sweet Scent'],
        [25, 'Nasty Plot'],
        [30, 'Incinerate'],
        [37, 'Venoshock'],
        [44, 'Dragon Pulse'],
        [51, 'Venom Drench'],
        [58, 'Flamethrower'],
        [65, 'Toxic'],
    ],
    ],
    
    ['759',
    [
        [1, 'Tackle'],
        [1, 'Leer'],
        [4, 'Baby Doll Eyes'],
        [8, 'Payback'],
        [12, 'Brutal Swing'],
        [16, 'Endure'],
        [20, 'Strength'],
        [24, 'Take Down'],
        [28, 'Flail'],
        [32, 'Hammer Arm'],
        [36, 'Thrash'],
        [40, 'Pain Split'],
        [44, 'Double Edge'],
        [48, 'Superpower'],
    ],
    ],
    
    ['760',
    [
        [0, 'Bind'],
        [1, 'Bind'],
        [1, 'Tackle'],
        [1, 'Leer'],
        [1, 'Baby Doll Eyes'],
        [1, 'Payback'],
        [12, 'Brutal Swing'],
        [16, 'Endure'],
        [20, 'Strength'],
        [24, 'Take Down'],
        [30, 'Flail'],
        [36, 'Hammer Arm'],
        [42, 'Thrash'],
        [48, 'Pain Split'],
        [54, 'Double Edge'],
        [60, 'Superpower'],
    ],
    ],
    
    ['761',
    [
        [1, 'Splash'],
        [4, 'Play Nice'],
        [8, 'Rapid Spin'],
        [12, 'Razor Leaf'],
        [16, 'Sweet Scent'],
        [20, 'Magical Leaf'],
        [24, 'Flail'],
        [28, 'Teeter Dance'],
        [32, 'Aromatic Mist'],
        [36, 'Aromatherapy'],
    ],
    ],
    
    ['762',
    [
        [1, 'Flail'],
        [1, 'Splash'],
        [1, 'Play Nice'],
        [1, 'Rapid Spin'],
        [1, 'Razor Leaf'],
        [16, 'Sweet Scent'],
        [22, 'Magical Leaf'],
        [28, 'Stomp'],
        [34, 'Teeter Dance'],
        [40, 'Aromatic Mist'],
        [46, 'Aromatherapy'],
        [52, 'Leaf Storm'],
    ],
    ],
    
    ['763',
    [
        [0, 'Trop Kick'],
        [1, 'Trop Kick'],
        [1, 'Power Whip'],
        [1, 'Flail'],
        [1, 'Play Nice'],
        [1, 'Splash'],
        [1, 'Swagger'],
        [1, 'Rapid Spin'],
        [1, 'Razor Leaf'],
        [16, 'Sweet Scent'],
        [22, 'Magical Leaf'],
        [28, 'Stomp'],
        [34, 'Teeter Dance'],
        [40, 'Aromatic Mist'],
        [46, 'Aromatherapy'],
        [52, 'Leaf Storm'],
        [58, 'High Jump Kick'],
    ],
    ],
    
    ['764',
    [
        [1, 'Wrap'],
        [1, 'Growth'],
        [3, 'Vine Whip'],
        [6, 'Helping Hand'],
        [9, 'Draining Kiss'],
        [12, 'Flower Shield'],
        [15, 'Magical Leaf'],
        [18, 'Synthesis'],
        [21, 'Leech Seed'],
        [24, 'Grass Knot'],
        [27, 'Sweet Kiss'],
        [30, 'Floral Healing'],
        [33, 'Petal Blizzard'],
        [36, 'Aromatherapy'],
        [39, 'Play Rough'],
        [42, 'Sweet Scent'],
        [45, 'Petal Dance'],
        [48, 'Grassy Terrain'],
    ],
    ],
    
    ['765',
    [
        [1, 'Confusion'],
        [1, 'Taunt'],
        [5, 'After You'],
        [10, 'Calm Mind'],
        [15, 'Stored Power'],
        [20, 'Psych Up'],
        [25, 'Quash'],
        [30, 'Nasty Plot'],
        [35, 'Zen Headbutt'],
        [40, 'Trick Room'],
        [45, 'Psychic'],
        [50, 'Instruct'],
        [55, 'Foul Play'],
        [60, 'Future Sight'],
    ],
    ],
    
    ['766',
    [
        [1, 'Tackle'],
        [1, 'Leer'],
        [5, 'Rock Smash'],
        [10, 'Focus Energy'],
        [15, 'Beat Up'],
        [20, 'Scary Face'],
        [25, 'Take Down'],
        [30, 'Fling'],
        [35, 'Bulk Up'],
        [40, 'Thrash'],
        [45, 'Double Edge'],
        [50, 'Close Combat'],
        [55, 'Reversal'],
        [60, 'Giga Impact'],
    ],
    ],
    
    ['767',
    [
        [1, 'Struggle Bug'],
        [1, 'Sand Attack'],
        [1, 'Defense Curl'],
    ],
    ],
    
    ['768',
    [
        [0, 'First Impression'],
        [1, 'First Impression'],
        [1, 'Struggle Bug'],
        [1, 'Sand Attack'],
        [1, 'Defense Curl'],
        [1, 'Spite'],
        [4, 'Rock Smash'],
        [8, 'Fury Cutter'],
        [12, 'Mud Shot'],
        [16, 'Bug Bite'],
        [20, 'Iron Defense'],
        [24, 'Sucker Punch'],
        [28, 'Slash'],
        [32, 'Razor Shell'],
        [36, 'Pin Missile'],
        [40, 'Swords Dance'],
        [44, 'Liquidation'],
    ],
    ],
    
    ['769',
    [
        [1, 'Absorb'],
        [1, 'Harden'],
        [5, 'Astonish'],
        [10, 'Sand Tomb'],
        [15, 'Mega Drain'],
        [20, 'Sand Attack'],
        [25, 'Bulldoze'],
        [30, 'Hypnosis'],
        [35, 'Giga Drain'],
        [40, 'Iron Defense'],
        [45, 'Shadow Ball'],
        [50, 'Earth Power'],
        [55, 'Shore Up'],
        [60, 'Sandstorm'],
    ],
    ],
    
    ['770',
    [
        [1, 'Absorb'],
        [1, 'Harden'],
        [1, 'Astonish'],
        [1, 'Sand Tomb'],
        [15, 'Mega Drain'],
        [20, 'Sand Attack'],
        [25, 'Bulldoze'],
        [30, 'Hypnosis'],
        [35, 'Giga Drain'],
        [40, 'Iron Defense'],
        [47, 'Shadow Ball'],
        [54, 'Earth Power'],
        [61, 'Shore Up'],
        [68, 'Sandstorm'],
    ],
    ],
    
    ['771',
    [
        [1, 'Baton Pass'],
        [1, 'Harden'],
        [5, 'Helping Hand'],
        [10, 'Taunt'],
        [15, 'Safeguard'],
        [20, 'Counter'],
        [25, 'Purify'],
        [30, 'Curse'],
        [35, 'Gastro Acid'],
        [40, 'Pain Split'],
        [45, 'Recover'],
        [50, 'Soak'],
        [55, 'Toxic'],
        [60, 'Memento'],
    ],
    ],
    
    ['772',
    [
        [1, 'Tackle'],
        [1, 'Imprison'],
        [5, 'Aerial Ace'],
        [10, 'Scary Face'],
        [15, 'Double Hit'],
        [20, 'Metal Sound'],
        [25, 'Crush Claw'],
        [30, 'Air Slash'],
        [35, 'Tri Attack'],
        [40, 'X Scissor'],
        [45, 'Iron Head'],
        [50, 'Take Down'],
        [55, 'Double Edge'],
    ],
    ],
    
    ['773',
    [
        [0, 'Multi Attack'],
        [1, 'Multi Attack'],
        [1, 'Explosion'],
        [1, 'Thunder Fang'],
        [1, 'Ice Fang'],
        [1, 'Fire Fang'],
        [1, 'Poison Fang'],
        [1, 'Imprison'],
        [1, 'Iron Head'],
        [1, 'Tackle'],
        [1, 'Bite'],
        [1, 'Aerial Ace'],
        [1, 'Scary Face'],
        [15, 'Double Hit'],
        [20, 'Metal Sound'],
        [25, 'Crush Claw'],
        [30, 'Air Slash'],
        [35, 'Tri Attack'],
        [40, 'X Scissor'],
        [45, 'Crunch'],
        [50, 'Take Down'],
        [55, 'Double Edge'],
        [60, 'Parting Shot'],
    ],
    ],
    
    ['774',
    [
        [1, 'Tackle'],
        [3, 'Defense Curl'],
        [8, 'Rollout'],
        [10, 'Confuse Ray'],
        [15, 'Swift'],
        [17, 'Ancient Power'],
        [22, 'Self Destruct'],
        [24, 'Stealth Rock'],
        [29, 'Take Down'],
        [31, 'Autotomize'],
        [36, 'Cosmic Power'],
        [38, 'Power Gem'],
        [43, 'Double Edge'],
        [45, 'Shell Smash'],
        [50, 'Explosion'],
    ],
    ],
    
    ['775',
    [
        [1, 'Defense Curl'],
        [1, 'Rollout'],
        [6, 'Stockpile'],
        [6, 'Spit Up'],
        [6, 'Swallow'],
        [11, 'Rapid Spin'],
        [16, 'Yawn'],
        [21, 'Slam'],
        [26, 'Flail'],
        [31, 'Sucker Punch'],
        [36, 'Psych Up'],
        [41, 'Wood Hammer'],
        [46, 'Thrash'],
    ],
    ],
    
    ['776',
    [
        [1, 'Smog'],
        [1, 'Tackle'],
        [4, 'Ember'],
        [8, 'Protect'],
        [12, 'Endure'],
        [16, 'Flail'],
        [20, 'Incinerate'],
        [24, 'Iron Defense'],
        [28, 'Dragon Pulse'],
        [32, 'Body Slam'],
        [36, 'Flamethrower'],
        [40, 'Shell Trap'],
        [44, 'Shell Smash'],
        [48, 'Overheat'],
        [52, 'Explosion'],
    ],
    ],
    
    ['777',
    [
        [1, 'Nuzzle'],
        [1, 'Tackle'],
        [5, 'Defense Curl'],
        [10, 'Charge'],
        [15, 'Thunder Shock'],
        [20, 'Fell Stinger'],
        [25, 'Spark'],
        [30, 'Pin Missile'],
        [35, 'Magnet Rise'],
        [40, 'Zing Zap'],
        [45, 'Discharge'],
        [50, 'Electric Terrain'],
        [55, 'Wild Charge'],
        [60, 'Spiky Shield'],
    ],
    ],
    
    ['778',
    [
        [1, 'Wood Hammer'],
        [1, 'Splash'],
        [1, 'Astonish'],
        [1, 'Scratch'],
        [1, 'Copycat'],
        [6, 'Shadow Sneak'],
        [12, 'Double Team'],
        [18, 'Baby Doll Eyes'],
        [24, 'Mimic'],
        [30, 'Hone Claws'],
        [36, 'Slash'],
        [42, 'Shadow Claw'],
        [48, 'Charm'],
        [54, 'Play Rough'],
        [60, 'Pain Split'],
    ],
    ],
    
    ['779',
    [
        [1, 'Water Gun'],
        [4, 'Astonish'],
        [9, 'Confusion'],
        [12, 'Bite'],
        [17, 'Aqua Jet'],
        [20, 'Disable'],
        [25, 'Psywave'],
        [28, 'Crunch'],
        [33, 'Aqua Tail'],
        [36, 'Screech'],
        [41, 'Psychic Fangs'],
        [44, 'Synchronoise'],
    ],
    ],
    
    ['780',
    [
        [1, 'Play Nice'],
        [1, 'Echoed Voice'],
        [5, 'Twister'],
        [10, 'Protect'],
        [15, 'Glare'],
        [20, 'Safeguard'],
        [25, 'Dragon Breath'],
        [30, 'Extrasensory'],
        [35, 'Dragon Pulse'],
        [40, 'Light Screen'],
        [45, 'Fly'],
        [50, 'Hyper Voice'],
        [55, 'Outrage'],
    ],
    ],
    
    ['781',
    [
        [1, 'Absorb'],
        [1, 'Rapid Spin'],
        [4, 'Astonish'],
        [8, 'Wrap'],
        [12, 'Mega Drain'],
        [16, 'Growth'],
        [20, 'Gyro Ball'],
        [24, 'Switcheroo'],
        [28, 'Giga Drain'],
        [32, 'Whirlpool'],
        [36, 'Heavy Slam'],
        [40, 'Slam'],
        [44, 'Shadow Ball'],
        [48, 'Metal Sound'],
        [52, 'Anchor Shot'],
        [56, 'Energy Ball'],
        [60, 'Phantom Force'],
        [64, 'Power Whip'],
    ],
    ],
    
    ['782',
    [
        [1, 'Tackle'],
        [1, 'Leer'],
        [4, 'Protect'],
        [8, 'Dragon Tail'],
        [12, 'Scary Face'],
        [16, 'Headbutt'],
        [20, 'Work Up'],
        [24, 'Screech'],
        [28, 'Iron Defense'],
        [32, 'Dragon Claw'],
        [36, 'Noble Roar'],
        [40, 'Dragon Dance'],
        [44, 'Outrage'],
    ],
    ],
    
    ['783',
    [
        [1, 'Autotomize'],
        [1, 'Tackle'],
        [1, 'Leer'],
        [1, 'Protect'],
        [1, 'Dragon Tail'],
        [12, 'Scary Face'],
        [16, 'Headbutt'],
        [20, 'Work Up'],
        [24, 'Screech'],
        [28, 'Iron Defense'],
        [32, 'Dragon Claw'],
        [38, 'Noble Roar'],
        [44, 'Dragon Dance'],
        [50, 'Outrage'],
        [56, 'Close Combat'],
    ],
    ],
    
    ['784',
    [
        [0, 'Clanging Scales'],
        [1, 'Clanging Scales'],
        [1, 'Belly Drum'],
        [1, 'Autotomize'],
        [1, 'Tackle'],
        [1, 'Leer'],
        [1, 'Protect'],
        [1, 'Dragon Tail'],
        [12, 'Scary Face'],
        [16, 'Headbutt'],
        [20, 'Work Up'],
        [24, 'Screech'],
        [28, 'Iron Defense'],
        [32, 'Dragon Claw'],
        [38, 'Noble Roar'],
        [44, 'Dragon Dance'],
        [52, 'Outrage'],
        [60, 'Close Combat'],
        [68, 'Clangorous Soul'],
        [76, 'Boomburst'],
    ],
    ],
    
    ['785',
    [
        [1, 'Quick Attack'],
        [1, 'Thunder Shock'],
        [5, 'Withdraw'],
        [10, 'Fairy Wind'],
        [15, 'False Swipe'],
        [20, 'Spark'],
        [25, 'Shock Wave'],
        [30, 'Charge'],
        [35, 'Agility'],
        [40, 'Screech'],
        [45, 'Discharge'],
        [50, 'Mean Look'],
        [55, 'Natures Madness'],
        [60, 'Wild Charge'],
        [65, 'Brave Bird'],
        [70, 'Power Swap'],
        [75, 'Electric Terrain'],
    ],
    ],
    
    ['786',
    [
        [1, 'Astonish'],
        [1, 'Confusion'],
        [5, 'Withdraw'],
        [10, 'Aromatherapy'],
        [15, 'Draining Kiss'],
        [20, 'Psybeam'],
        [25, 'Flatter'],
        [30, 'Aromatic Mist'],
        [35, 'Sweet Scent'],
        [40, 'Extrasensory'],
        [45, 'Psyshock'],
        [50, 'Mean Look'],
        [55, 'Natures Madness'],
        [60, 'Moonblast'],
        [65, 'Tickle'],
        [70, 'Skill Swap'],
        [75, 'Psychic Terrain'],
    ],
    ],
    
    ['787',
    [
        [1, 'Leafage'],
        [1, 'Rock Smash'],
        [5, 'Withdraw'],
        [10, 'Disable'],
        [15, 'Leech Seed'],
        [20, 'Mega Drain'],
        [25, 'Whirlwind'],
        [30, 'Horn Attack'],
        [35, 'Scary Face'],
        [40, 'Horn Leech'],
        [45, 'Zen Headbutt'],
        [50, 'Mean Look'],
        [55, 'Natures Madness'],
        [60, 'Wood Hammer'],
        [65, 'Megahorn'],
        [70, 'Skull Bash'],
        [75, 'Grassy Terrain'],
    ],
    ],
    
    ['788',
    [
        [1, 'Disarming Voice'],
        [1, 'Water Gun'],
        [5, 'Withdraw'],
        [10, 'Mist'],
        [10, 'Haze'],
        [15, 'Aqua Ring'],
        [20, 'Water Pulse'],
        [25, 'Brine'],
        [30, 'Defog'],
        [35, 'Heal Pulse'],
        [40, 'Surf'],
        [45, 'Muddy Water'],
        [50, 'Mean Look'],
        [55, 'Natures Madness'],
        [60, 'Moonblast'],
        [65, 'Hydro Pump'],
        [70, 'Soak'],
        [75, 'Misty Terrain'],
    ],
    ],
    
    ['789',
    [
        [1, 'Splash'],
        [1, 'Teleport'],
    ],
    ],
    
    ['790',
    [
        [0, 'Cosmic Power'],
        [1, 'Cosmic Power'],
        [1, 'Teleport'],
    ],
    ],
    
    ['791',
    [
        [0, 'Sunsteel Strike'],
        [1, 'Sunsteel Strike'],
        [1, 'Cosmic Power'],
        [1, 'Teleport'],
        [1, 'Metal Claw'],
        [1, 'Noble Roar'],
        [7, 'Iron Head'],
        [14, 'Metal Sound'],
        [21, 'Zen Headbutt'],
        [28, 'Flash Cannon'],
        [35, 'Morning Sun'],
        [42, 'Crunch'],
        [49, 'Metal Burst'],
        [56, 'Wild Charge'],
        [63, 'Solar Beam'],
        [70, 'Flare Blitz'],
        [77, 'Wide Guard'],
        [84, 'Giga Impact'],
    ],
    ],
    
    ['792',
    [
        [0, 'Moongeist Beam'],
        [1, 'Moongeist Beam'],
        [1, 'Cosmic Power'],
        [1, 'Teleport'],
        [1, 'Confusion'],
        [1, 'Hypnosis'],
        [7, 'Night Shade'],
        [14, 'Confuse Ray'],
        [21, 'Air Slash'],
        [28, 'Shadow Ball'],
        [35, 'Moonlight'],
        [42, 'Night Daze'],
        [49, 'Magic Coat'],
        [56, 'Moonblast'],
        [63, 'Phantom Force'],
        [70, 'Dream Eater'],
        [77, 'Wide Guard'],
        [84, 'Hyper Beam'],
    ],
    ],
    
    ['793',
    [
        [1, 'Wrap'],
        [1, 'Pound'],
        [5, 'Acid'],
        [10, 'Tickle'],
        [15, 'Acid Spray'],
        [20, 'Clear Smog'],
        [25, 'Power Split'],
        [25, 'Guard Split'],
        [30, 'Venoshock'],
        [35, 'Headbutt'],
        [40, 'Toxic Spikes'],
        [45, 'Venom Drench'],
        [50, 'Power Gem'],
        [55, 'Stealth Rock'],
        [60, 'Mirror Coat'],
        [65, 'Wonder Room'],
        [70, 'Head Smash'],
    ],
    ],
    
    ['794',
    [
        [1, 'Power Up Punch'],
        [1, 'Harden'],
        [5, 'Taunt'],
        [10, 'Fell Stinger'],
        [15, 'Vital Throw'],
        [20, 'Bulk Up'],
        [25, 'Endure'],
        [30, 'Reversal'],
        [35, 'Mega Punch'],
        [40, 'Lunge'],
        [45, 'Focus Energy'],
        [50, 'Dynamic Punch'],
        [55, 'Counter'],
        [60, 'Hammer Arm'],
        [65, 'Superpower'],
        [70, 'Focus Punch'],
    ],
    ],
    
    ['795',
    [
        [1, 'Feint'],
        [1, 'Rapid Spin'],
        [5, 'Leer'],
        [10, 'Quick Guard'],
        [15, 'Bug Bite'],
        [20, 'Low Kick'],
        [25, 'Double Kick'],
        [30, 'Triple Kick'],
        [35, 'Stomp'],
        [40, 'Agility'],
        [45, 'Lunge'],
        [50, 'Bounce'],
        [55, 'Speed Swap'],
        [60, 'Bug Buzz'],
        [65, 'Quiver Dance'],
        [70, 'High Jump Kick'],
    ],
    ],
    
    ['796',
    [
        [1, 'Wrap'],
        [1, 'Thunder Shock'],
        [5, 'Charge'],
        [10, 'Thunder Wave'],
        [15, 'Ingrain'],
        [20, 'Spark'],
        [25, 'Shock Wave'],
        [30, 'Hypnosis'],
        [35, 'Eerie Impulse'],
        [40, 'Thunder Punch'],
        [45, 'Discharge'],
        [50, 'Magnet Rise'],
        [55, 'Thunderbolt'],
        [60, 'Electric Terrain'],
        [65, 'Power Whip'],
        [70, 'Zap Cannon'],
    ],
    ],
    
    ['797',
    [
        [1, 'Absorb'],
        [1, 'Tackle'],
        [5, 'Harden'],
        [10, 'Wide Guard'],
        [15, 'Mega Drain'],
        [20, 'Smack Down'],
        [25, 'Ingrain'],
        [30, 'Autotomize'],
        [35, 'Giga Drain'],
        [40, 'Flash Cannon'],
        [45, 'Metal Sound'],
        [50, 'Iron Defense'],
        [55, 'Leech Seed'],
        [60, 'Heavy Slam'],
        [65, 'Double Edge'],
        [70, 'Skull Bash'],
    ],
    ],
    
    ['798',
    [
        [1, 'Fury Cutter'],
        [1, 'Vacuum Wave'],
        [5, 'Razor Leaf'],
        [10, 'False Swipe'],
        [15, 'Cut'],
        [20, 'Air Cutter'],
        [25, 'Aerial Ace'],
        [30, 'Detect'],
        [35, 'Night Slash'],
        [40, 'Synthesis'],
        [45, 'Laser Focus'],
        [50, 'Defog'],
        [55, 'Leaf Blade'],
        [60, 'Sacred Sword'],
        [65, 'Swords Dance'],
        [70, 'Guillotine'],
    ],
    ],
    
    ['799',
    [
        [1, 'Bite'],
        [1, 'Dragon Tail'],
        [5, 'Swallow'],
        [5, 'Stockpile'],
        [10, 'Knock Off'],
        [15, 'Stomp'],
        [20, 'Stomping Tantrum'],
        [25, 'Wide Guard'],
        [30, 'Crunch'],
        [35, 'Body Slam'],
        [40, 'Gastro Acid'],
        [45, 'Hammer Arm'],
        [50, 'Heavy Slam'],
        [55, 'Dragon Rush'],
        [60, 'Belch'],
        [65, 'Thrash'],
        [70, 'Giga Impact'],
    ],
    ],
    
    ['800',
    [
        [1, 'Moonlight'],
        [1, 'Morning Sun'],
        [1, 'Charge Beam'],
        [1, 'Gravity'],
        [1, 'Metal Claw'],
        [1, 'Confusion'],
        [8, 'Stealth Rock'],
        [16, 'Slash'],
        [24, 'Night Slash'],
        [32, 'Psycho Cut'],
        [40, 'Stored Power'],
        [48, 'Rock Blast'],
        [56, 'Iron Defense'],
        [64, 'Power Gem'],
        [72, 'Photon Geyser'],
        [80, 'Autotomize'],
        [88, 'Prismatic Laser'],
    ],
    ],
    
    ['801',
    [
        [1, 'Gyro Ball'],
        [1, 'Helping Hand'],
        [6, 'Defense Curl'],
        [12, 'Rollout'],
        [18, 'Iron Defense'],
        [24, 'Gear Up'],
        [30, 'Psybeam'],
        [36, 'Aurora Beam'],
        [42, 'Mind Reader'],
        [48, 'Shift Gear'],
        [54, 'Crafty Shield'],
        [60, 'Iron Head'],
        [66, 'Aura Sphere'],
        [72, 'Flash Cannon'],
        [78, 'Pain Split'],
        [84, 'Zap Cannon'],
        [90, 'Fleur Cannon'],
    ],
    ],
    
    ['802',
    [
        [1, 'Thunder Punch'],
        [1, 'Fire Punch'],
        [1, 'Ice Punch'],
        [1, 'Copycat'],
        [1, 'Shadow Sneak'],
        [1, 'Feint'],
        [1, 'Counter'],
        [9, 'Role Play'],
        [18, 'Shadow Punch'],
        [27, 'Force Palm'],
        [36, 'Assurance'],
        [45, 'Sucker Punch'],
        [54, 'Drain Punch'],
        [63, 'Psych Up'],
        [72, 'Spectral Thief'],
        [81, 'Laser Focus'],
        [90, 'Endeavor'],
        [99, 'Close Combat'],
    ],
    ],
    
    ['803',
    [
        [1, 'Dragon Pulse'],
        [1, 'Peck'],
        [1, 'Growl'],
        [1, 'Helping Hand'],
        [1, 'Acid'],
        [7, 'Fury Attack'],
        [14, 'Fell Stinger'],
        [21, 'Charm'],
        [28, 'Venoshock'],
        [35, 'Venom Drench'],
        [42, 'Nasty Plot'],
        [49, 'Poison Jab'],
        [56, 'Gastro Acid'],
        [63, 'Toxic'],
    ],
    ],
    
    ['804',
    [
        [0, 'Air Cutter'],
        [1, 'Air Cutter'],
        [1, 'Air Slash'],
        [1, 'Dragon Pulse'],
        [1, 'Peck'],
        [1, 'Growl'],
        [1, 'Helping Hand'],
        [1, 'Acid'],
        [7, 'Fury Attack'],
        [14, 'Fell Stinger'],
        [21, 'Charm'],
        [28, 'Venoshock'],
        [35, 'Venom Drench'],
        [42, 'Nasty Plot'],
        [49, 'Poison Jab'],
        [56, 'Gastro Acid'],
        [63, 'Toxic'],
        [70, 'Dragon Rush'],
    ],
    ],
    
    ['805',
    [
        [1, 'Tackle'],
        [1, 'Harden'],
        [5, 'Rock Throw'],
        [10, 'Protect'],
        [15, 'Stomp'],
        [20, 'Block'],
        [25, 'Rock Slide'],
        [30, 'Wide Guard'],
        [35, 'Autotomize'],
        [40, 'Rock Blast'],
        [45, 'Magnet Rise'],
        [50, 'Iron Defense'],
        [55, 'Iron Head'],
        [60, 'Take Down'],
        [65, 'Stealth Rock'],
        [70, 'Double Edge'],
    ],
    ],
    
    ['806',
    [
        [1, 'Astonish'],
        [1, 'Fire Spin'],
        [5, 'Light Screen'],
        [10, 'Ember'],
        [15, 'Night Shade'],
        [20, 'Confuse Ray'],
        [25, 'Magic Coat'],
        [30, 'Incinerate'],
        [35, 'Hypnosis'],
        [40, 'Mystical Fire'],
        [45, 'Shadow Ball'],
        [50, 'Calm Mind'],
        [55, 'Will O Wisp'],
        [60, 'Trick'],
        [65, 'Fire Blast'],
        [70, 'Mind Blown'],
    ],
    ],
    
    ['807',
    [
        [1, 'Power Up Punch'],
        [1, 'Fake Out'],
        [1, 'Scratch'],
        [1, 'Quick Attack'],
        [1, 'Snarl'],
        [1, 'Spark'],
        [8, 'Fury Swipes'],
        [16, 'Quick Guard'],
        [24, 'Slash'],
        [32, 'Volt Switch'],
        [40, 'Charge'],
        [48, 'Thunder Punch'],
        [56, 'Hone Claws'],
        [64, 'Discharge'],
        [72, 'Wild Charge'],
        [80, 'Agility'],
        [88, 'Plasma Fists'],
        [96, 'Close Combat'],
    ],
    ],
    
    ['808',
    [
        [1, 'Thunder Shock'],
        [1, 'Harden'],
        [8, 'Tail Whip'],
        [16, 'Headbutt'],
        [24, 'Thunder Wave'],
        [32, 'Acid Armor'],
        [40, 'Flash Cannon'],
    ],
    ],
    
    ['809',
    [
        [0, 'Thunder Punch'],
        [1, 'Thunder Punch'],
        [1, 'Thunder Shock'],
        [1, 'Harden'],
        [1, 'Tail Whip'],
        [1, 'Headbutt'],
        [24, 'Thunder Wave'],
        [32, 'Acid Armor'],
        [40, 'Flash Cannon'],
        [48, 'Mega Punch'],
        [56, 'Protect'],
        [64, 'Discharge'],
        [72, 'Dynamic Punch'],
        [80, 'Superpower'],
        [88, 'Double Iron Bash'],
        [96, 'Hyper Beam'],
    ],
    ],
    
    ['810',
    [
        [1, 'Scratch'],
        [1, 'Growl'],
        [6, 'Branch Poke'],
        [8, 'Taunt'],
        [12, 'Razor Leaf'],
        [17, 'Screech'],
        [20, 'Knock Off'],
        [24, 'Slam'],
        [28, 'Uproar'],
        [32, 'Wood Hammer'],
        [36, 'Endeavor'],
    ],
    ],
    
    ['811',
    [
        [0, 'Double Hit'],
        [1, 'Double Hit'],
        [1, 'Scratch'],
        [1, 'Growl'],
        [1, 'Branch Poke'],
        [1, 'Taunt'],
        [12, 'Razor Leaf'],
        [19, 'Screech'],
        [24, 'Knock Off'],
        [30, 'Slam'],
        [36, 'Uproar'],
        [42, 'Wood Hammer'],
        [48, 'Endeavor'],
    ],
    ],
    
    ['812',
    [
        [0, 'Drum Beating'],
        [1, 'Drum Beating'],
        [1, 'Double Hit'],
        [1, 'Grassy Terrain'],
        [1, 'Noble Roar'],
        [1, 'Scratch'],
        [1, 'Growl'],
        [1, 'Branch Poke'],
        [1, 'Taunt'],
        [12, 'Razor Leaf'],
        [19, 'Screech'],
        [24, 'Knock Off'],
        [30, 'Slam'],
        [38, 'Uproar'],
        [46, 'Wood Hammer'],
        [54, 'Endeavor'],
        [62, 'Boomburst'],
    ],
    ],
    
    ['813',
    [
        [1, 'Tackle'],
        [1, 'Growl'],
        [6, 'Ember'],
        [8, 'Quick Attack'],
        [12, 'Double Kick'],
        [17, 'Flame Charge'],
        [20, 'Agility'],
        [24, 'Headbutt'],
        [28, 'Counter'],
        [32, 'Bounce'],
        [36, 'Double Edge'],
    ],
    ],
    
    ['814',
    [
        [1, 'Tackle'],
        [1, 'Growl'],
        [1, 'Ember'],
        [1, 'Quick Attack'],
        [12, 'Double Kick'],
        [19, 'Flame Charge'],
        [24, 'Agility'],
        [30, 'Headbutt'],
        [36, 'Counter'],
        [42, 'Bounce'],
        [48, 'Double Edge'],
    ],
    ],
    
    ['815',
    [
        [0, 'Pyro Ball'],
        [1, 'Pyro Ball'],
        [1, 'Feint'],
        [1, 'Tackle'],
        [1, 'Growl'],
        [1, 'Ember'],
        [1, 'Quick Attack'],
        [12, 'Double Kick'],
        [19, 'Flame Charge'],
        [24, 'Agility'],
        [30, 'Headbutt'],
        [38, 'Counter'],
        [46, 'Bounce'],
        [54, 'Double Edge'],
        [62, 'Court Change'],
    ],
    ],
    
    ['816',
    [
        [1, 'Pound'],
        [1, 'Growl'],
        [6, 'Water Gun'],
        [8, 'Bind'],
        [12, 'Water Pulse'],
        [17, 'Tearful Look'],
        [20, 'Sucker Punch'],
        [24, 'U Turn'],
        [28, 'Liquidation'],
        [32, 'Soak'],
        [36, 'Rain Dance'],
    ],
    ],
    
    ['817',
    [
        [1, 'Pound'],
        [1, 'Growl'],
        [1, 'Water Gun'],
        [1, 'Bind'],
        [12, 'Water Pulse'],
        [19, 'Tearful Look'],
        [24, 'Sucker Punch'],
        [30, 'U Turn'],
        [36, 'Liquidation'],
        [42, 'Soak'],
        [48, 'Rain Dance'],
    ],
    ],
    
    ['818',
    [
        [0, 'Snipe Shot'],
        [1, 'Snipe Shot'],
        [1, 'Acrobatics'],
        [1, 'Pound'],
        [1, 'Growl'],
        [1, 'Water Gun'],
        [1, 'Bind'],
        [12, 'Water Pulse'],
        [19, 'Tearful Look'],
        [24, 'Sucker Punch'],
        [30, 'U Turn'],
        [38, 'Liquidation'],
        [46, 'Soak'],
        [54, 'Rain Dance'],
        [62, 'Hydro Pump'],
    ],
    ],
    
    ['819',
    [
        [1, 'Tackle'],
        [1, 'Tail Whip'],
        [5, 'Bite'],
        [10, 'Stuff Cheeks'],
        [15, 'Stockpile'],
        [15, 'Swallow'],
        [15, 'Spit Up'],
        [20, 'Body Slam'],
        [25, 'Rest'],
        [30, 'Counter'],
        [35, 'Bullet Seed'],
        [40, 'Super Fang'],
        [45, 'Belch'],
    ],
    ],
    
    ['820',
    [
        [0, 'Covet'],
        [1, 'Covet'],
        [1, 'Tackle'],
        [1, 'Tail Whip'],
        [1, 'Bite'],
        [1, 'Stuff Cheeks'],
        [15, 'Stockpile'],
        [15, 'Swallow'],
        [15, 'Spit Up'],
        [20, 'Body Slam'],
        [27, 'Rest'],
        [34, 'Counter'],
        [41, 'Bullet Seed'],
        [48, 'Super Fang'],
        [55, 'Belch'],
    ],
    ],
    
    ['821',
    [
        [1, 'Peck'],
        [1, 'Leer'],
        [4, 'Power Trip'],
        [8, 'Hone Claws'],
        [12, 'Fury Attack'],
        [16, 'Pluck'],
        [20, 'Taunt'],
        [24, 'Scary Face'],
        [28, 'Drill Peck'],
        [32, 'Swagger'],
        [36, 'Brave Bird'],
    ],
    ],
    
    ['822',
    [
        [1, 'Peck'],
        [1, 'Leer'],
        [1, 'Power Trip'],
        [1, 'Hone Claws'],
        [12, 'Fury Attack'],
        [16, 'Pluck'],
        [22, 'Taunt'],
        [28, 'Scary Face'],
        [34, 'Drill Peck'],
        [40, 'Swagger'],
        [46, 'Brave Bird'],
    ],
    ],
    
    ['823',
    [
        [0, 'Steel Wing'],
        [1, 'Steel Wing'],
        [1, 'Iron Defense'],
        [1, 'Metal Sound'],
        [1, 'Peck'],
        [1, 'Leer'],
        [1, 'Power Trip'],
        [1, 'Hone Claws'],
        [12, 'Fury Attack'],
        [16, 'Pluck'],
        [22, 'Taunt'],
        [28, 'Scary Face'],
        [34, 'Drill Peck'],
        [42, 'Swagger'],
        [50, 'Brave Bird'],
    ],
    ],
    
    ['824',
    [
        [1, 'Struggle Bug'],
    ],
    ],
    
    ['825',
    [
        [0, 'Reflect'],
        [0, 'Light Screen'],
        [0, 'Confusion'],
        [1, 'Reflect'],
        [1, 'Light Screen'],
        [1, 'Confusion'],
        [1, 'Struggle Bug'],
    ],
    ],
    
    ['826',
    [
        [1, 'Reflect'],
        [1, 'Light Screen'],
        [1, 'Confusion'],
        [1, 'Struggle Bug'],
        [4, 'Confuse Ray'],
        [8, 'Magic Coat'],
        [12, 'Agility'],
        [16, 'Psybeam'],
        [20, 'Hypnosis'],
        [24, 'Ally Switch'],
        [28, 'Bug Buzz'],
        [32, 'Mirror Coat'],
        [36, 'Psychic'],
        [40, 'After You'],
        [44, 'Calm Mind'],
        [48, 'Psychic Terrain'],
    ],
    ],
    
    ['827',
    [
        [1, 'Quick Attack'],
        [1, 'Tail Whip'],
        [4, 'Beat Up'],
        [8, 'Hone Claws'],
        [12, 'Snarl'],
        [16, 'Assurance'],
        [20, 'Nasty Plot'],
        [24, 'Sucker Punch'],
        [28, 'Night Slash'],
        [32, 'Tail Slap'],
        [36, 'Foul Play'],
    ],
    ],
    
    ['828',
    [
        [0, 'Thief'],
        [1, 'Thief'],
        [1, 'Quick Attack'],
        [1, 'Tail Whip'],
        [1, 'Beat Up'],
        [1, 'Hone Claws'],
        [12, 'Snarl'],
        [16, 'Assurance'],
        [22, 'Nasty Plot'],
        [28, 'Sucker Punch'],
        [34, 'Night Slash'],
        [40, 'Tail Slap'],
        [46, 'Foul Play'],
        [52, 'Parting Shot'],
    ],
    ],
    
    ['829',
    [
        [1, 'Leafage'],
        [1, 'Sing'],
        [4, 'Rapid Spin'],
        [8, 'Sweet Scent'],
        [12, 'Razor Leaf'],
        [16, 'Round'],
        [21, 'Leaf Tornado'],
        [24, 'Synthesis'],
        [28, 'Hyper Voice'],
        [32, 'Aromatherapy'],
        [36, 'Leaf Storm'],
    ],
    ],
    
    ['830',
    [
        [0, 'Cotton Spore'],
        [1, 'Cotton Spore'],
        [1, 'Leafage'],
        [1, 'Sing'],
        [1, 'Rapid Spin'],
        [1, 'Sweet Scent'],
        [12, 'Razor Leaf'],
        [16, 'Round'],
        [23, 'Leaf Tornado'],
        [28, 'Synthesis'],
        [34, 'Hyper Voice'],
        [40, 'Aromatherapy'],
        [46, 'Leaf Storm'],
        [52, 'Cotton Guard'],
    ],
    ],
    
    ['831',
    [
        [1, 'Tackle'],
        [1, 'Growl'],
        [4, 'Defense Curl'],
        [8, 'Copycat'],
        [12, 'Guard Split'],
        [16, 'Double Kick'],
        [21, 'Headbutt'],
        [25, 'Take Down'],
        [28, 'Guard Swap'],
        [32, 'Reversal'],
        [36, 'Cotton Guard'],
        [40, 'Double Edge'],
    ],
    ],
    
    ['832',
    [
        [1, 'Tackle'],
        [1, 'Growl'],
        [1, 'Defense Curl'],
        [1, 'Copycat'],
        [12, 'Guard Split'],
        [16, 'Double Kick'],
        [21, 'Headbutt'],
        [27, 'Take Down'],
        [32, 'Guard Swap'],
        [38, 'Reversal'],
        [44, 'Cotton Guard'],
        [50, 'Double Edge'],
        [56, 'Last Resort'],
    ],
    ],
    
    ['833',
    [
        [1, 'Tackle'],
        [1, 'Water Gun'],
        [7, 'Bite'],
        [14, 'Protect'],
        [21, 'Headbutt'],
        [28, 'Counter'],
        [35, 'Jaw Lock'],
        [42, 'Liquidation'],
        [49, 'Body Slam'],
    ],
    ],
    
    ['834',
    [
        [0, 'Rock Tomb'],
        [1, 'Rock Tomb'],
        [1, 'Razor Shell'],
        [1, 'Crunch'],
        [1, 'Rock Polish'],
        [1, 'Tackle'],
        [1, 'Water Gun'],
        [1, 'Bite'],
        [1, 'Protect'],
        [21, 'Headbutt'],
        [30, 'Counter'],
        [39, 'Jaw Lock'],
        [48, 'Liquidation'],
        [57, 'Body Slam'],
        [66, 'Head Smash'],
    ],
    ],
    
    ['835',
    [
        [1, 'Tackle'],
        [1, 'Tail Whip'],
        [5, 'Nuzzle'],
        [10, 'Bite'],
        [15, 'Roar'],
        [20, 'Spark'],
        [26, 'Charm'],
        [30, 'Crunch'],
        [35, 'Charge'],
        [40, 'Wild Charge'],
        [45, 'Play Rough'],
    ],
    ],
    
    ['836',
    [
        [1, 'Electrify'],
        [1, 'Tackle'],
        [1, 'Tail Whip'],
        [1, 'Nuzzle'],
        [1, 'Bite'],
        [15, 'Roar'],
        [20, 'Spark'],
        [28, 'Charm'],
        [34, 'Crunch'],
        [41, 'Charge'],
        [48, 'Wild Charge'],
        [55, 'Play Rough'],
        [62, 'Electric Terrain'],
    ],
    ],
    
    ['837',
    [
        [1, 'Tackle'],
        [1, 'Smokescreen'],
        [5, 'Rapid Spin'],
        [10, 'Smack Down'],
        [15, 'Rock Polish'],
        [20, 'Ancient Power'],
        [25, 'Incinerate'],
        [30, 'Stealth Rock'],
        [35, 'Heat Crash'],
        [40, 'Rock Blast'],
    ],
    ],
    
    ['838',
    [
        [0, 'Flame Charge'],
        [1, 'Flame Charge'],
        [1, 'Tackle'],
        [1, 'Smokescreen'],
        [1, 'Rapid Spin'],
        [1, 'Smack Down'],
        [15, 'Rock Polish'],
        [20, 'Ancient Power'],
        [27, 'Incinerate'],
        [35, 'Stealth Rock'],
        [41, 'Heat Crash'],
        [48, 'Rock Blast'],
        [55, 'Burn Up'],
    ],
    ],
    
    ['839',
    [
        [0, 'Tar Shot'],
        [1, 'Tar Shot'],
        [1, 'Flame Charge'],
        [1, 'Tackle'],
        [1, 'Smokescreen'],
        [1, 'Rapid Spin'],
        [1, 'Smack Down'],
        [15, 'Rock Polish'],
        [20, 'Ancient Power'],
        [27, 'Incinerate'],
        [37, 'Stealth Rock'],
        [45, 'Heat Crash'],
        [54, 'Rock Blast'],
        [63, 'Burn Up'],
    ],
    ],
    
    ['840',
    [
        [1, 'Withdraw'],
        [1, 'Astonish'],
    ],
    ],
    
    ['841',
    [
        [0, 'Wing Attack'],
        [1, 'Wing Attack'],
        [1, 'Recycle'],
        [1, 'Withdraw'],
        [1, 'Astonish'],
        [1, 'Growth'],
        [1, 'Twister'],
        [4, 'Acid Spray'],
        [8, 'Acrobatics'],
        [12, 'Leech Seed'],
        [16, 'Protect'],
        [20, 'Dragon Breath'],
        [24, 'Dragon Dance'],
        [28, 'Dragon Pulse'],
        [32, 'Grav Apple'],
        [36, 'Iron Defense'],
        [40, 'Fly'],
        [44, 'Dragon Rush'],
    ],
    ],
    
    ['842',
    [
        [0, 'Headbutt'],
        [1, 'Headbutt'],
        [1, 'Recycle'],
        [1, 'Withdraw'],
        [1, 'Astonish'],
        [1, 'Growth'],
        [1, 'Sweet Scent'],
        [4, 'Curse'],
        [8, 'Stomp'],
        [12, 'Leech Seed'],
        [16, 'Protect'],
        [20, 'Bullet Seed'],
        [24, 'Recover'],
        [28, 'Apple Acid'],
        [32, 'Body Slam'],
        [36, 'Iron Defense'],
        [40, 'Dragon Pulse'],
        [44, 'Energy Ball'],
    ],
    ],
    
    ['843',
    [
        [1, 'Wrap'],
        [1, 'Sand Attack'],
        [5, 'Minimize'],
        [10, 'Brutal Swing'],
        [15, 'Bulldoze'],
        [20, 'Headbutt'],
        [25, 'Glare'],
        [30, 'Dig'],
        [35, 'Sandstorm'],
        [40, 'Slam'],
        [45, 'Coil'],
        [50, 'Sand Tomb'],
    ],
    ],
    
    ['844',
    [
        [1, 'Skull Bash'],
        [1, 'Wrap'],
        [1, 'Sand Attack'],
        [1, 'Minimize'],
        [1, 'Brutal Swing'],
        [15, 'Bulldoze'],
        [20, 'Headbutt'],
        [25, 'Glare'],
        [30, 'Dig'],
        [35, 'Sandstorm'],
        [42, 'Slam'],
        [49, 'Coil'],
        [51, 'Sand Tomb'],
    ],
    ],
    
    ['845',
    [
        [1, 'Belch'],
        [1, 'Peck'],
        [1, 'Stockpile'],
        [1, 'Swallow'],
        [1, 'Spit Up'],
        [7, 'Water Gun'],
        [14, 'Fury Attack'],
        [21, 'Pluck'],
        [28, 'Dive'],
        [35, 'Drill Peck'],
        [42, 'Amnesia'],
        [49, 'Thrash'],
        [56, 'Hydro Pump'],
    ],
    ],
    
    ['846',
    [
        [1, 'Peck'],
        [1, 'Aqua Jet'],
        [6, 'Fury Attack'],
        [12, 'Bite'],
        [18, 'Agility'],
        [24, 'Dive'],
        [30, 'Laser Focus'],
        [36, 'Crunch'],
        [42, 'Liquidation'],
        [48, 'Double Edge'],
    ],
    ],
    
    ['847',
    [
        [1, 'Throat Chop'],
        [1, 'Peck'],
        [1, 'Aqua Jet'],
        [1, 'Fury Attack'],
        [1, 'Bite'],
        [18, 'Agility'],
        [24, 'Dive'],
        [32, 'Laser Focus'],
        [40, 'Crunch'],
        [48, 'Liquidation'],
        [56, 'Double Edge'],
    ],
    ],
    
    ['848',
    [
        [1, 'Belch'],
        [1, 'Tearful Look'],
        [1, 'Nuzzle'],
        [1, 'Growl'],
        [1, 'Flail'],
        [1, 'Acid'],
    ],
    ],
    
    ['849',
    [
        [0, 'Spark'],
        [1, 'Spark'],
        [1, 'Eerie Impulse'],
        [1, 'Belch'],
        [1, 'Tearful Look'],
        [1, 'Nuzzle'],
        [1, 'Growl'],
        [1, 'Flail'],
        [1, 'Acid'],
        [1, 'Thunder Shock'],
        [1, 'Acid Spray'],
        [1, 'Leer'],
        [1, 'Noble Roar'],
        [4, 'Charge'],
        [8, 'Shock Wave'],
        [12, 'Scary Face'],
        [16, 'Taunt'],
        [20, 'Venoshock'],
        [24, 'Screech'],
        [28, 'Swagger'],
        [32, 'Toxic'],
        [36, 'Discharge'],
        [40, 'Poison Jab'],
        [44, 'Overdrive'],
        [48, 'Boomburst'],
        [52, 'Shift Gear'],
    ], //Amped Form (Yellow)
    [
        [0, 'Spark'],
        [1, 'Spark'],
        [1, 'Eerie Impulse'],
        [1, 'Belch'],
        [1, 'Tearful Look'],
        [1, 'Nuzzle'],
        [1, 'Growl'],
        [1, 'Flail'],
        [1, 'Acid'],
        [1, 'Thunder Shock'],
        [1, 'Acid Spray'],
        [1, 'Leer'],
        [1, 'Noble Roar'],
        [4, 'Charge'],
        [8, 'Shock Wave'],
        [12, 'Scary Face'],
        [16, 'Taunt'],
        [20, 'Venom Drench'],
        [24, 'Screech'],
        [28, 'Swagger'],
        [32, 'Toxic'],
        [36, 'Discharge'],
        [40, 'Poison Jab'],
        [44, 'Overdrive'],
        [48, 'Boomburst'],
        [52, 'Magnetic Flux'],
    ], //Low-Key Form  (Blue)
    ], //Toxtricity
    
    ['850',
    [
        [1, 'Ember'],
        [1, 'Smokescreen'],
        [5, 'Wrap'],
        [10, 'Bite'],
        [15, 'Flame Wheel'],
        [20, 'Bug Bite'],
        [25, 'Coil'],
        [30, 'Slam'],
        [35, 'Fire Spin'],
        [40, 'Crunch'],
        [45, 'Fire Lash'],
        [50, 'Lunge'],
        [55, 'Burn Up'],
    ],
    ],
    
    ['851',
    [
        [1, 'Inferno'],
        [1, 'Ember'],
        [1, 'Smokescreen'],
        [1, 'Wrap'],
        [1, 'Bite'],
        [15, 'Flame Wheel'],
        [20, 'Bug Bite'],
        [25, 'Coil'],
        [32, 'Slam'],
        [39, 'Fire Spin'],
        [46, 'Crunch'],
        [53, 'Fire Lash'],
        [60, 'Lunge'],
        [67, 'Burn Up'],
    ],
    ],
    
    ['852',
    [
        [1, 'Rock Smash'],
        [1, 'Leer'],
        [5, 'Feint'],
        [10, 'Bind'],
        [15, 'Detect'],
        [20, 'Brick Break'],
        [25, 'Bulk Up'],
        [30, 'Submission'],
        [35, 'Taunt'],
        [40, 'Reversal'],
        [45, 'Superpower'],
    ],
    ],
    
    ['853',
    [
        [0, 'Octolock'],
        [1, 'Octolock'],
        [1, 'Octazooka'],
        [1, 'Rock Smash'],
        [1, 'Leer'],
        [1, 'Feint'],
        [1, 'Bind'],
        [15, 'Detect'],
        [20, 'Brick Break'],
        [25, 'Bulk Up'],
        [30, 'Submission'],
        [35, 'Taunt'],
        [40, 'Reversal'],
        [45, 'Superpower'],
        [50, 'Topsy Turvy'],
    ],
    ],
    
    ['854',
    [
        [1, 'Astonish'],
        [1, 'Withdraw'],
        [6, 'Aromatic Mist'],
        [12, 'Mega Drain'],
        [18, 'Protect'],
        [24, 'Sucker Punch'],
        [30, 'Aromatherapy'],
        [36, 'Giga Drain'],
        [42, 'Nasty Plot'],
        [48, 'Shadow Ball'],
        [54, 'Memento'],
        [60, 'Shell Smash'],
    ],
    ],
    
    ['855',
    [
        [0, 'Teatime'],
        [1, 'Teatime'],
        [1, 'Strength Sap'],
        [1, 'Astonish'],
        [1, 'Withdraw'],
        [1, 'Aromatic Mist'],
        [1, 'Mega Drain'],
        [18, 'Protect'],
        [24, 'Sucker Punch'],
        [30, 'Aromatherapy'],
        [36, 'Giga Drain'],
        [42, 'Nasty Plot'],
        [48, 'Shadow Ball'],
        [54, 'Memento'],
        [60, 'Shell Smash'],
        [66, 'Curse'],
    ],
    ],
    
    ['856',
    [
        [1, 'Confusion'],
        [1, 'Play Nice'],
        [5, 'Life Dew'],
        [10, 'Disarming Voice'],
        [15, 'Aromatherapy'],
        [20, 'Psybeam'],
        [25, 'Heal Pulse'],
        [30, 'Dazzling Gleam'],
        [35, 'Calm Mind'],
        [40, 'Psychic'],
        [45, 'Healing Wish'],
    ],
    ],
    
    ['857',
    [
        [0, 'Brutal Swing'],
        [1, 'Brutal Swing'],
        [1, 'Confusion'],
        [1, 'Play Nice'],
        [1, 'Life Dew'],
        [1, 'Disarming Voice'],
        [15, 'Aromatherapy'],
        [20, 'Psybeam'],
        [25, 'Heal Pulse'],
        [30, 'Dazzling Gleam'],
        [37, 'Calm Mind'],
        [44, 'Psychic'],
        [51, 'Healing Wish'],
    ],
    ],
    
    ['858',
    [
        [0, 'Psycho Cut'],
        [1, 'Psycho Cut'],
        [1, 'Brutal Swing'],
        [1, 'Confusion'],
        [1, 'Play Nice'],
        [1, 'Life Dew'],
        [1, 'Disarming Voice'],
        [15, 'Aromatherapy'],
        [20, 'Psybeam'],
        [25, 'Heal Pulse'],
        [30, 'Dazzling Gleam'],
        [37, 'Calm Mind'],
        [46, 'Psychic'],
        [55, 'Healing Wish'],
        [64, 'Magic Powder'],
    ],
    ],
    
    ['859',
    [
        [1, 'Fake Out'],
        [1, 'Confide'],
        [4, 'Bite'],
        [8, 'Flatter'],
        [12, 'Fake Tears'],
        [16, 'Assurance'],
        [20, 'Swagger'],
        [24, 'Sucker Punch'],
        [28, 'Torment'],
        [33, 'Dark Pulse'],
        [36, 'Nasty Plot'],
        [40, 'Play Rough'],
        [44, 'Foul Play'],
    ],
    ],
    
    ['860',
    [
        [0, 'False Surrender'],
        [1, 'False Surrender'],
        [1, 'Fake Out'],
        [1, 'Confide'],
        [1, 'Bite'],
        [1, 'Flatter'],
        [12, 'Fake Tears'],
        [16, 'Assurance'],
        [20, 'Swagger'],
        [24, 'Sucker Punch'],
        [28, 'Torment'],
        [35, 'Dark Pulse'],
        [40, 'Nasty Plot'],
        [46, 'Play Rough'],
        [52, 'Foul Play'],
    ],
    ],
    
    ['861',
    [
        [0, 'Spirit Break'],
        [1, 'Spirit Break'],
        [1, 'False Surrender'],
        [1, 'Bulk Up'],
        [1, 'Power Up Punch'],
        [1, 'Fake Out'],
        [1, 'Confide'],
        [1, 'Bite'],
        [1, 'Flatter'],
        [12, 'Fake Tears'],
        [16, 'Assurance'],
        [20, 'Swagger'],
        [24, 'Sucker Punch'],
        [28, 'Torment'],
        [35, 'Dark Pulse'],
        [40, 'Nasty Plot'],
        [48, 'Play Rough'],
        [56, 'Foul Play'],
        [64, 'Hammer Arm'],
    ],
    ],
    
    ['862',
    [
        [0, 'Obstruct'],
        [1, 'Obstruct'],
        [1, 'Cross Chop'],
        [1, 'Submission'],
        [1, 'Night Slash'],
        [1, 'Switcheroo'],
        [1, 'Pin Missile'],
        [1, 'Baby Doll Eyes'],
        [1, 'Tackle'],
        [1, 'Leer'],
        [1, 'Sand Attack'],
        [1, 'Lick'],
        [9, 'Snarl'],
        [12, 'Headbutt'],
        [15, 'Hone Claws'],
        [18, 'Fury Swipes'],
        [23, 'Rest'],
        [28, 'Take Down'],
        [35, 'Scary Face'],
        [42, 'Counter'],
        [49, 'Taunt'],
        [56, 'Double Edge'],
    ],
    ],
    
    ['863',
    [
        [0, 'Iron Head'],
        [1, 'Iron Head'],
        [1, 'Metal Burst'],
        [1, 'Iron Defense'],
        [1, 'Fake Out'],
        [1, 'Growl'],
        [1, 'Hone Claws'],
        [1, 'Scratch'],
        [12, 'Pay Day'],
        [16, 'Metal Claw'],
        [20, 'Taunt'],
        [24, 'Swagger'],
        [31, 'Fury Swipes'],
        [36, 'Screech'],
        [42, 'Slash'],
        [48, 'Metal Sound'],
        [54, 'Thrash'],
    ],
    ],
    
    ['864',
    [
        [1, 'Perish Song'],
        [1, 'Tackle'],
        [1, 'Harden'],
        [1, 'Astonish'],
        [1, 'Disable'],
        [15, 'Spite'],
        [20, 'Ancient Power'],
        [25, 'Hex'],
        [30, 'Curse'],
        [35, 'Strength Sap'],
        [40, 'Power Gem'],
        [45, 'Night Shade'],
        [50, 'Grudge'],
        [55, 'Mirror Coat'],
    ],
    ],
    
    ['865',
    [
        [0, 'Iron Defense'],
        [1, 'Iron Defense'],
        [1, 'First Impression'],
        [1, 'Peck'],
        [1, 'Sand Attack'],
        [1, 'Leer'],
        [1, 'Fury Cutter'],
        [15, 'Rock Smash'],
        [20, 'Brutal Swing'],
        [25, 'Detect'],
        [30, 'Knock Off'],
        [35, 'Defog'],
        [40, 'Brick Break'],
        [45, 'Swords Dance'],
        [50, 'Slam'],
        [55, 'Leaf Blade'],
        [60, 'Final Gambit'],
        [65, 'Brave Bird'],
        [70, 'Meteor Assault'],
    ],
    ],
    
    ['866',
    [
        [1, 'Fake Tears'],
        [1, 'Slack Off'],
        [1, 'After You'],
        [1, 'Block'],
        [1, 'Copycat'],
        [1, 'Encore'],
        [1, 'Role Play'],
        [1, 'Protect'],
        [1, 'Recycle'],
        [1, 'Mimic'],
        [1, 'Light Screen'],
        [1, 'Reflect'],
        [1, 'Safeguard'],
        [1, 'Dazzling Gleam'],
        [1, 'Misty Terrain'],
        [1, 'Pound'],
        [1, 'Rapid Spin'],
        [1, 'Baton Pass'],
        [1, 'Ice Shard'],
        [12, 'Confusion'],
        [16, 'Ally Switch'],
        [20, 'Icy Wind'],
        [24, 'Double Kick'],
        [28, 'Psybeam'],
        [32, 'Hypnosis'],
        [36, 'Mirror Coat'],
        [40, 'Sucker Punch'],
        [44, 'Freeze Dry'],
        [48, 'Psychic'],
        [52, 'Teeter Dance'],
    ],
    ],
    
    ['867',
    [
        [0, 'Shadow Claw'],
        [1, 'Shadow Claw'],
        [1, 'Scary Face'],
        [1, 'Astonish'],
        [1, 'Protect'],
        [1, 'Haze'],
        [1, 'Night Shade'],
        [12, 'Disable'],
        [16, 'Brutal Swing'],
        [20, 'Crafty Shield'],
        [24, 'Hex'],
        [28, 'Mean Look'],
        [32, 'Slam'],
        [38, 'Curse'],
        [44, 'Shadow Ball'],
        [50, 'Earthquake'],
        [56, 'Power Split'],
        [56, 'Guard Split'],
        [62, 'Destiny Bond'],
    ],
    ],
    
    ['868',
    [
        [1, 'Tackle'],
        [1, 'Aromatic Mist'],
        [5, 'Sweet Kiss'],
        [10, 'Sweet Scent'],
        [15, 'Draining Kiss'],
        [20, 'Aromatherapy'],
        [25, 'Attract'],
        [30, 'Acid Armor'],
        [35, 'Dazzling Gleam'],
        [40, 'Recover'],
        [45, 'Misty Terrain'],
        [50, 'Entrainment'],
    ],
    ],
    
    ['869',
    [
        [0, 'Decorate'],
        [1, 'Decorate'],
        [1, 'Tackle'],
        [1, 'Aromatic Mist'],
        [1, 'Sweet Kiss'],
        [1, 'Sweet Scent'],
        [15, 'Draining Kiss'],
        [20, 'Aromatherapy'],
        [25, 'Attract'],
        [30, 'Acid Armor'],
        [35, 'Dazzling Gleam'],
        [40, 'Recover'],
        [45, 'Misty Terrain'],
        [50, 'Entrainment'],
    ],
    ],
    
    ['870',
    [
        [1, 'Tackle'],
        [1, 'Protect'],
        [5, 'Rock Smash'],
        [10, 'Focus Energy'],
        [15, 'Headbutt'],
        [20, 'Bulk Up'],
        [25, 'Endure'],
        [30, 'Reversal'],
        [35, 'First Impression'],
        [40, 'No Retreat'],
        [45, 'Iron Defense'],
        [50, 'Close Combat'],
        [55, 'Megahorn'],
        [60, 'Counter'],
    ],
    ],
    
    ['871',
    [
        [1, 'Peck'],
        [1, 'Thunder Shock'],
        [5, 'Water Gun'],
        [10, 'Charge'],
        [15, 'Fury Attack'],
        [20, 'Spark'],
        [25, 'Bubble Beam'],
        [30, 'Recover'],
        [35, 'Curse'],
        [40, 'Electric Terrain'],
        [45, 'Poison Jab'],
        [50, 'Zing Zap'],
        [55, 'Acupressure'],
        [60, 'Discharge'],
    ],
    ],
    
    ['872',
    [
        [1, 'Powder Snow'],
        [1, 'Struggle Bug'],
    ],
    ],
    
    ['873',
    [
        [0, 'Icy Wind'],
        [1, 'Icy Wind'],
        [1, 'Powder Snow'],
        [1, 'Struggle Bug'],
        [1, 'Helping Hand'],
        [1, 'Attract'],
        [4, 'Stun Spore'],
        [8, 'Infestation'],
        [12, 'Mist'],
        [16, 'Defog'],
        [21, 'Feather Dance'],
        [24, 'Aurora Beam'],
        [28, 'Hail'],
        [32, 'Bug Buzz'],
        [36, 'Aurora Veil'],
        [40, 'Blizzard'],
        [44, 'Tailwind'],
        [48, 'Wide Guard'],
        [52, 'Quiver Dance'],
    ],
    ],
    
    ['874',
    [
        [1, 'Rock Throw'],
        [1, 'Block'],
        [6, 'Rock Polish'],
        [12, 'Rock Tomb'],
        [18, 'Gravity'],
        [24, 'Stomp'],
        [30, 'Stealth Rock'],
        [36, 'Rock Slide'],
        [42, 'Body Slam'],
        [48, 'Wide Guard'],
        [54, 'Heavy Slam'],
        [60, 'Stone Edge'],
        [66, 'Mega Kick'],
    ],
    ],
    
    ['875',
    [
        [1, 'Powder Snow'],
        [1, 'Tackle'],
        [6, 'Mist'],
        [12, 'Weather Ball'],
        [18, 'Icy Wind'],
        [24, 'Headbutt'],
        [30, 'Amnesia'],
        [36, 'Freeze Dry'],
        [42, 'Hail'],
        [48, 'Aurora Veil'],
        [54, 'Surf'],
        [60, 'Blizzard'],
    ],
    ],
    
    ['876',
    [
        [1, 'Stored Power'],
        [1, 'Play Nice'],
        [5, 'Encore'],
        [10, 'Disarming Voice'],
        [15, 'Psybeam'],
        [20, 'Helping Hand'],
        [25, 'After You'],
        [30, 'Aromatherapy'],
        [35, 'Psychic'],
        [40, 'Calm Mind'],
        [45, 'Power Split'],
        [50, 'Psychic Terrain'],
        [55, 'Last Resort'],
    ], //Male
    [
        [1, 'Stored Power'],
        [1, 'Play Nice'],
        [5, 'Baton Pass'],
        [10, 'Disarming Voice'],
        [15, 'Psybeam'],
        [20, 'Helping Hand'],
        [25, 'Follow Me'],
        [30, 'Aromatherapy'],
        [35, 'Psychic'],
        [40, 'Calm Mind'],
        [45, 'Guard Split'],
        [50, 'Psychic Terrain'],
        [55, 'Healing Wish'],
    ], //Female
    ], //Indeedee
    
    ['877',
    [
        [1, 'Thunder Shock'],
        [1, 'Tail Whip'],
        [5, 'Leer'],
        [10, 'Power Trip'],
        [15, 'Quick Attack'],
        [20, 'Flatter'],
        [25, 'Bite'],
        [30, 'Spark'],
        [35, 'Torment'],
        [40, 'Agility'],
        [45, 'Bullet Seed'],
        [50, 'Crunch'],
        [55, 'Aura Wheel'],
        [60, 'Thrash'],
    ],
    ],
    
    ['878',
    [
        [1, 'Tackle'],
        [1, 'Growl'],
        [5, 'Rollout'],
        [10, 'Rock Smash'],
        [15, 'Bulldoze'],
        [20, 'Stomp'],
        [25, 'Iron Defense'],
        [30, 'Dig'],
        [35, 'Strength'],
        [40, 'Iron Head'],
        [45, 'Play Rough'],
        [50, 'High Horsepower'],
        [55, 'Superpower'],
    ],
    ],
    
    ['879',
    [
        [0, 'Heavy Slam'],
        [1, 'Heavy Slam'],
        [1, 'Tackle'],
        [1, 'Growl'],
        [1, 'Rollout'],
        [1, 'Rock Smash'],
        [15, 'Bulldoze'],
        [20, 'Stomp'],
        [25, 'Iron Defense'],
        [30, 'Dig'],
        [37, 'Strength'],
        [44, 'Iron Head'],
        [51, 'Play Rough'],
        [58, 'High Horsepower'],
        [65, 'Superpower'],
    ],
    ],
    
    ['880',
    [
        [1, 'Tackle'],
        [1, 'Thunder Shock'],
        [7, 'Charge'],
        [14, 'Aerial Ace'],
        [21, 'Ancient Power'],
        [28, 'Pluck'],
        [35, 'Dragon Tail'],
        [42, 'Stomp'],
        [49, 'Slam'],
        [56, 'Discharge'],
        [63, 'Bolt Beak'],
        [70, 'Dragon Pulse'],
        [77, 'Dragon Rush'],
    ],
    ],
    
    ['881',
    [
        [1, 'Powder Snow'],
        [1, 'Thunder Shock'],
        [7, 'Charge'],
        [14, 'Echoed Voice'],
        [21, 'Ancient Power'],
        [28, 'Pluck'],
        [35, 'Avalanche'],
        [42, 'Freeze Dry'],
        [49, 'Slam'],
        [56, 'Discharge'],
        [63, 'Bolt Beak'],
        [70, 'Icicle Crash'],
        [77, 'Blizzard'],
    ],
    ],
    
    ['882',
    [
        [1, 'Tackle'],
        [1, 'Water Gun'],
        [7, 'Protect'],
        [14, 'Brutal Swing'],
        [21, 'Ancient Power'],
        [28, 'Bite'],
        [35, 'Dragon Breath'],
        [42, 'Stomp'],
        [49, 'Super Fang'],
        [56, 'Crunch'],
        [63, 'Fishious Rend'],
        [70, 'Dragon Pulse'],
        [77, 'Dragon Rush'],
    ],
    ],
    
    ['883',
    [
        [1, 'Powder Snow'],
        [1, 'Water Gun'],
        [7, 'Protect'],
        [14, 'Icy Wind'],
        [21, 'Ancient Power'],
        [28, 'Bite'],
        [35, 'Aurora Veil'],
        [42, 'Freeze Dry'],
        [49, 'Super Fang'],
        [56, 'Crunch'],
        [63, 'Fishious Rend'],
        [70, 'Icicle Crash'],
        [77, 'Blizzard'],
    ],
    ],
    
    ['884',
    [
        [1, 'Metal Claw'],
        [1, 'Leer'],
        [6, 'Rock Smash'],
        [12, 'Hone Claws'],
        [18, 'Metal Sound'],
        [24, 'Breaking Swipe'],
        [30, 'Dragon Tail'],
        [36, 'Iron Defense'],
        [42, 'Laser Focus'],
        [48, 'Dragon Claw'],
        [54, 'Flash Cannon'],
        [60, 'Metal Burst'],
        [66, 'Hyper Beam'],
    ],
    ],
    
    ['885',
    [
        [1, 'Astonish'],
        [1, 'Infestation'],
        [1, 'Quick Attack'],
        [1, 'Bite'],
    ],
    ],
    
    ['886',
    [
        [0, 'Dragon Pulse'],
        [1, 'Dragon Pulse'],
        [1, 'Astonish'],
        [1, 'Infestation'],
        [1, 'Quick Attack'],
        [1, 'Bite'],
        [6, 'Lock On'],
        [12, 'Assurance'],
        [18, 'Hex'],
        [24, 'Agility'],
        [30, 'Double Hit'],
        [36, 'U Turn'],
        [42, 'Dragon Dance'],
        [48, 'Phantom Force'],
        [54, 'Take Down'],
        [61, 'Dragon Rush'],
        [66, 'Double Edge'],
        [72, 'Last Resort'],
    ],
    ],
    
    ['887',
    [
        [0, 'Dragon Darts'],
        [1, 'Dragon Darts'],
        [1, 'Dragon Breath'],
        [1, 'Sucker Punch'],
        [1, 'Astonish'],
        [1, 'Infestation'],
        [1, 'Quick Attack'],
        [1, 'Bite'],
        [6, 'Lock On'],
        [12, 'Assurance'],
        [18, 'Hex'],
        [24, 'Agility'],
        [30, 'Double Hit'],
        [36, 'U Turn'],
        [42, 'Dragon Dance'],
        [48, 'Phantom Force'],
        [54, 'Take Down'],
        [63, 'Dragon Rush'],
        [70, 'Double Edge'],
        [78, 'Last Resort'],
    ],
    ],
    
    ['888',
    [
        [1, 'Sacred Sword'],
        [1, 'Quick Guard'],
        [1, 'Metal Claw'],
        [1, 'Howl'],
        [1, 'Quick Attack'],
        [1, 'Bite'],
        [11, 'Slash'],
        [22, 'Swords Dance'],
        [33, 'Iron Head'],
        [44, 'Laser Focus'],
        [55, 'Crunch'],
        [66, 'Moonblast'],
        [77, 'Close Combat'],
        [88, 'Giga Impact'],
    ],
    ],
    
    ['889',
    [
        [1, 'Metal Burst'],
        [1, 'Wide Guard'],
        [1, 'Metal Claw'],
        [1, 'Howl'],
        [1, 'Quick Attack'],
        [1, 'Bite'],
        [11, 'Slash'],
        [22, 'Iron Defense'],
        [33, 'Iron Head'],
        [44, 'Laser Focus'],
        [55, 'Crunch'],
        [66, 'Moonblast'],
        [77, 'Close Combat'],
        [88, 'Giga Impact'],
    ],
    ],
    
    ['890',
    [
        [1, 'Poison Tail'],
        [1, 'Confuse Ray'],
        [1, 'Dragon Tail'],
        [1, 'Agility'],
        [8, 'Toxic'],
        [16, 'Venoshock'],
        [24, 'Dragon Dance'],
        [32, 'Cross Poison'],
        [40, 'Dragon Pulse'],
        [48, 'Flamethrower'],
        [56, 'Dynamax Cannon'],
        [64, 'Cosmic Power'],
        [72, 'Recover'],
        [80, 'Hyper Beam'],
        [88, 'Eternabeam'],
    ],
    ],
    
    ['891',
    [
        [1, 'Rock Smash'],
        [1, 'Leer'],
        [4, 'Endure'],
        [8, 'Focus Energy'],
        [12, 'Aerial Ace'],
        [16, 'Scary Face'],
        [20, 'Headbutt'],
        [24, 'Brick Break'],
        [28, 'Detect'],
        [32, 'Bulk Up'],
        [36, 'Iron Head'],
        [40, 'Dynamic Punch'],
        [44, 'Counter'],
        [48, 'Close Combat'],
        [52, 'Focus Punch'],
    ],
    ],
    
    ['892',
    [
        [0, 'Wicked Blow'],
        [1, 'Wicked Blow'],
        [1, 'Sucker Punch'],
        [1, 'Rock Smash'],
        [1, 'Leer'],
        [1, 'Endure'],
        [1, 'Focus Energy'],
        [12, 'Aerial Ace'],
        [16, 'Scary Face'],
        [20, 'Headbutt'],
        [24, 'Brick Break'],
        [28, 'Detect'],
        [32, 'Bulk Up'],
        [36, 'Iron Head'],
        [40, 'Dynamic Punch'],
        [44, 'Counter'],
        [48, 'Close Combat'],
        [52, 'Focus Punch'],
    ], //Single Strike Style (Dark-type)
    [
        [0, 'Surging Strikes'],
        [1, 'Surging Strikes'],
        [1, 'Aqua Jet'],
        [1, 'Rock Smash'],
        [1, 'Leer'],
        [1, 'Endure'],
        [1, 'Focus Energy'],
        [12, 'Aerial Ace'],
        [16, 'Scary Face'],
        [20, 'Headbutt'],
        [24, 'Brick Break'],
        [28, 'Detect'],
        [32, 'Bulk Up'],
        [36, 'Iron Head'],
        [40, 'Dynamic Punch'],
        [44, 'Counter'],
        [48, 'Close Combat'],
        [52, 'Focus Punch'],
    ], //Rapid Strike Style (Water-type)
    ], //Urshifu
    
    ['893',
    [
        [1, 'Bind'],
        [1, 'Scratch'],
        [6, 'Leer'],
        [12, 'Vine Whip'],
        [18, 'Growth'],
        [24, 'Fury Swipes'],
        [30, 'Scary Face'],
        [36, 'Grass Knot'],
        [42, 'Bite'],
        [48, 'U Turn'],
        [54, 'Swagger'],
        [60, 'Energy Ball'],
        [66, 'Synthesis'],
        [72, 'Hammer Arm'],
        [78, 'Thrash'],
        [84, 'Power Whip'],
        [90, 'Jungle Healing'],
    ],
    ],
    
    ['894',
    [
        [1, 'Thunder Shock'],
        [1, 'Rapid Spin'],
        [6, 'Electroweb'],
        [12, 'Ancient Power'],
        [18, 'Shock Wave'],
        [24, 'Thunder Wave'],
        [30, 'Extreme Speed'],
        [36, 'Thunder Cage'],
        [42, 'Thunderbolt'],
        [48, 'Magnet Rise'],
        [54, 'Thrash'],
        [60, 'Lock On'],
        [66, 'Zap Cannon'],
        [72, 'Hyper Beam'],
        [78, 'Explosion'],
    ],
    ],
    
    ['895',
    [
        [1, 'Twister'],
        [1, 'Vice Grip'],
        [6, 'Bite'],
        [12, 'Ancient Power'],
        [18, 'Dragon Breath'],
        [24, 'Focus Energy'],
        [30, 'Crunch'],
        [36, 'Dragon Claw'],
        [42, 'Hammer Arm'],
        [48, 'Dragon Dance'],
        [54, 'Thrash'],
        [60, 'Laser Focus'],
        [66, 'Dragon Energy'],
        [72, 'Hyper Beam'],
        [78, 'Explosion'],
    ],
    ],
    
    ['896',
    [
        [1, 'Tackle'],
        [1, 'Tail Whip'],
        [6, 'Double Kick'],
        [12, 'Avalanche'],
        [18, 'Stomp'],
        [24, 'Torment'],
        [30, 'Mist'],
        [36, 'Icicle Crash'],
        [42, 'Take Down'],
        [48, 'Iron Defense'],
        [54, 'Thrash'],
        [60, 'Taunt'],
        [66, 'Double Edge'],
        [72, 'Swords Dance'],
    ],
    ],
    
    ['897',
    [
        [1, 'Tackle'],
        [1, 'Tail Whip'],
        [6, 'Double Kick'],
        [12, 'Hex'],
        [18, 'Stomp'],
        [24, 'Confuse Ray'],
        [30, 'Haze'],
        [36, 'Shadow Ball'],
        [42, 'Take Down'],
        [48, 'Agility'],
        [54, 'Thrash'],
        [60, 'Disable'],
        [66, 'Double Edge'],
        [72, 'Nasty Plot'],
    ],
    ],
    
    ['898',
    [
        [1, 'Pound'],
        [1, 'Mega Drain'],
        [1, 'Confusion'],
        [1, 'Growth'],
        [8, 'Life Dew'],
        [16, 'Giga Drain'],
        [24, 'Psyshock'],
        [32, 'Helping Hand'],
        [40, 'Aromatherapy'],
        [48, 'Energy Ball'],
        [56, 'Psychic'],
        [64, 'Leech Seed'],
        [72, 'Heal Pulse'],
        [80, 'Solar Beam'],
        [88, 'Future Sight'],
    ], //Normal
    [
        [1, 'Glacial Lance'],
        [1, 'Tackle'],
        [1, 'Tail Whip'],
        [1, 'Double Kick'],
        [1, 'Avalanche'],
        [1, 'Stomp'],
        [1, 'Torment'],
        [1, 'Mist'],
        [1, 'Icicle Crash'],
        [1, 'Take Down'],
        [1, 'Iron Defense'],
        [1, 'Thrash'],
        [1, 'Taunt'],
        [1, 'Double Edge'],
        [1, 'Swords Dance'],
        [1, 'Pound'],
        [1, 'Mega Drain'],
        [1, 'Confusion'],
        [1, 'Growth'],
        [8, 'Life Dew'],
        [16, 'Giga Drain'],
        [24, 'Psyshock'],
        [32, 'Helping Hand'],
        [40, 'Aromatherapy'],
        [48, 'Energy Ball'],
        [56, 'Psychic'],
        [64, 'Leech Seed'],
        [72, 'Heal Pulse'],
        [80, 'Solar Beam'],
        [88, 'Future Sight'],
    ], //Ice Rider Calyrex
    [
        [1, 'Astral Barrage'],
        [1, 'Tackle'],
        [1, 'Tail Whip'],
        [1, 'Double Kick'],
        [1, 'Hex'],
        [1, 'Stomp'],
        [1, 'Confuse Ray'],
        [1, 'Haze'],
        [1, 'Shadow Ball'],
        [1, 'Take Down'],
        [1, 'Agility'],
        [1, 'Thrash'],
        [1, 'Disable'],
        [1, 'Double Edge'],
        [1, 'Nasty Plot'],
        [1, 'Pound'],
        [1, 'Mega Drain'],
        [1, 'Confusion'],
        [1, 'Growth'],
        [8, 'Life Dew'],
        [16, 'Giga Drain'],
        [24, 'Psyshock'],
        [32, 'Helping Hand'],
        [40, 'Aromatherapy'],
        [48, 'Energy Ball'],
        [56, 'Psychic'],
        [64, 'Leech Seed'],
        [72, 'Heal Pulse'],
        [80, 'Solar Beam'],
        [88, 'Future Sight'],
    ], //Shadow Rider Calyrex
    ], //Calyrex

] // Levelup Moves - Old (Uses Sword/Shield whenever possible)

 var pokemonLevelUpMoveList=[
    ['001',
        [
            [1, 'Tackle']
            [3, 'Growl']
            [7, 'Leech Seed']
            [9, 'Vine Whip']
            [13, 'Poison Powder']
            [13, 'Sleep Powder']
            [15, 'Take Down']
            [19, 'Razor Leaf']
            [21, 'Sweet Scent']
            [25, 'Growth']
            [27, 'Double Edge']
            [31, 'Worry Seed']
            [33, 'Synthesis']
            [37, 'Seed Bomb']
        ],
    ],

    ['002',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Leech Seed']
            [3, 'Growl']
            [7, 'Leech Seed']
            [9, 'Vine Whip']
            [13, 'Poison Powder']
            [13, 'Sleep Powder']
            [15, 'Take Down']
            [20, 'Razor Leaf']
            [23, 'Sweet Scent']
            [28, 'Growth']
            [31, 'Double Edge']
            [36, 'Worry Seed']
            [39, 'Synthesis']
            [44, 'Solar Beam']
        ],
    ],

    ['003',
        [
            [0, 'Petal Dance']
            [1, 'Petal Dance']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Leech Seed']
            [1, 'Vine Whip']
            [3, 'Growl']
            [7, 'Leech Seed']
            [9, 'Vine Whip']
            [13, 'Poison Powder']
            [13, 'Sleep Powder']
            [15, 'Take Down']
            [20, 'Razor Leaf']
            [23, 'Sweet Scent']
            [28, 'Growth']
            [31, 'Double Edge']
            [39, 'Worry Seed']
            [45, 'Synthesis']
            [50, 'Petal Blizzard']
            [53, 'Solar Beam']
        ],
    ],

    ['004',
        [
            [1, 'Scratch']
            [1, 'Growl']
            [7, 'Ember']
            [10, 'Smokescreen']
            [16, 'Dragon Rage']
            [19, 'Scary Face']
            [25, 'Fire Fang']
            [28, 'Flame Burst']
            [34, 'Slash']
            [37, 'Flamethrower']
            [43, 'Fire Spin']
            [46, 'Inferno']
        ],
    ],

    ['005',
        [
            [1, 'Scratch']
            [1, 'Growl']
            [1, 'Ember']
            [7, 'Ember']
            [10, 'Smokescreen']
            [17, 'Dragon Rage']
            [21, 'Scary Face']
            [28, 'Fire Fang']
            [32, 'Flame Burst']
            [39, 'Slash']
            [43, 'Flamethrower']
            [50, 'Fire Spin']
            [54, 'Inferno']
        ],
    ],

    ['006',
        [
            [0, 'Wing Attack']
            [1, 'Wing Attack']
            [1, 'Flare Blitz']
            [1, 'Heat Wave']
            [1, 'Dragon Claw']
            [1, 'Shadow Claw']
            [1, 'Air Slash']
            [1, 'Scratch']
            [1, 'Growl']
            [1, 'Ember']
            [7, 'Ember']
            [10, 'Smokescreen']
            [17, 'Dragon Rage']
            [21, 'Scary Face']
            [28, 'Fire Fang']
            [32, 'Flame Burst']
            [41, 'Slash']
            [47, 'Flamethrower']
            [56, 'Fire Spin']
            [62, 'Inferno']
            [71, 'Heat Wave']
            [77, 'Flare Blitz']
        ],
    ],

    ['007',
        [
            [1, 'Tackle']
            [4, 'Tail Whip']
            [7, 'Water Gun']
            [10, 'Withdraw']
            [13, 'Bubble']
            [16, 'Bite']
            [19, 'Rapid Spin']
            [22, 'Protect']
            [25, 'Water Pulse']
            [28, 'Aqua Tail']
            [31, 'Skull Bash']
            [34, 'Iron Defense']
            [37, 'Rain Dance']
            [40, 'Hydro Pump']
        ],
    ],

    ['008',
        [
            [1, 'Tackle']
            [1, 'Tail Whip']
            [1, 'Water Gun']
            [4, 'Tail Whip']
            [7, 'Water Gun']
            [10, 'Withdraw']
            [13, 'Bubble']
            [17, 'Bite']
            [21, 'Rapid Spin']
            [25, 'Protect']
            [29, 'Water Pulse']
            [33, 'Aqua Tail']
            [37, 'Skull Bash']
            [41, 'Iron Defense']
            [45, 'Rain Dance']
            [49, 'Hydro Pump']
        ],
    ],

    ['009',
        [
            [1, 'Flash Cannon']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [1, 'Water Gun']
            [1, 'Withdraw']
            [4, 'Tail Whip']
            [7, 'Water Gun']
            [10, 'Withdraw']
            [13, 'Bubble']
            [17, 'Bite']
            [21, 'Rapid Spin']
            [25, 'Protect']
            [29, 'Water Pulse']
            [33, 'Aqua Tail']
            [40, 'Skull Bash']
            [47, 'Iron Defense']
            [54, 'Rain Dance']
            [60, 'Hydro Pump']
        ],
    ],

    ['010',
        [
            [1, 'Tackle']
            [1, 'String Shot']
            [9, 'Bug Bite']
        ],
    ],

    ['011',
        [
            [0, 'Harden']
            [1, 'Harden']
        ],
    ],

    ['012',
        [
            [0, 'Gust']
            [1, 'Gust']
            [1, 'Confusion']
            [11, 'Confusion']
            [13, 'Poison Powder']
            [13, 'Stun Spore']
            [13, 'Sleep Powder']
            [17, 'Psybeam']
            [19, 'Silver Wind']
            [23, 'Supersonic']
            [25, 'Safeguard']
            [29, 'Whirlwind']
            [31, 'Bug Buzz']
            [35, 'Rage Powder']
            [37, 'Captivate']
            [41, 'Tailwind']
            [43, 'Air Slash']
            [47, 'Quiver Dance']
        ],
    ],

    ['013',
        [
            [1, 'Poison Sting']
            [1, 'String Shot']
            [9, 'Bug Bite']
        ],
    ],

    ['014',
        [
            [0, 'Harden']
            [1, 'Harden']
        ],
    ],

    ['015',
        [
            [0, 'Twineedle']
            [1, 'Twineedle']
            [1, 'Fury Attack']
            [11, 'Fury Attack']
            [14, 'Rage']
            [17, 'Pursuit']
            [20, 'Focus Energy']
            [23, 'Venoshock']
            [26, 'Assurance']
            [29, 'Toxic Spikes']
            [32, 'Pin Missile']
            [35, 'Poison Jab']
            [38, 'Agility']
            [41, 'Endeavor']
            [44, 'Fell Stinger']
        ],
    ],

    ['016',
        [
            [1, 'Tackle']
            [5, 'Sand Attack']
            [9, 'Gust']
            [13, 'Quick Attack']
            [17, 'Whirlwind']
            [21, 'Twister']
            [25, 'Feather Dance']
            [29, 'Agility']
            [33, 'Wing Attack']
            [37, 'Roost']
            [41, 'Tailwind']
            [45, 'Mirror Move']
            [49, 'Air Slash']
            [53, 'Hurricane']
        ],
    ],

    ['017',
        [
            [1, 'Tackle']
            [1, 'Sand Attack']
            [1, 'Gust']
            [5, 'Sand Attack']
            [9, 'Gust']
            [13, 'Quick Attack']
            [17, 'Whirlwind']
            [22, 'Twister']
            [27, 'Feather Dance']
            [32, 'Agility']
            [37, 'Wing Attack']
            [42, 'Roost']
            [47, 'Tailwind']
            [52, 'Mirror Move']
            [57, 'Air Slash']
            [62, 'Hurricane']
        ],
    ],

    ['018',
        [
            [1, 'Hurricane']
            [1, 'Tackle']
            [1, 'Sand Attack']
            [1, 'Gust']
            [1, 'Quick Attack']
            [5, 'Sand Attack']
            [9, 'Gust']
            [13, 'Quick Attack']
            [17, 'Whirlwind']
            [22, 'Twister']
            [27, 'Feather Dance']
            [32, 'Agility']
            [38, 'Wing Attack']
            [44, 'Roost']
            [50, 'Tailwind']
            [56, 'Mirror Move']
            [62, 'Air Slash']
            [68, 'Hurricane']
        ],
    ],

    ['019',
        [
            [1, 'Tackle']
            [1, 'Tail Whip']
            [4, 'Quick Attack']
            [7, 'Focus Energy']
            [10, 'Bite']
            [13, 'Pursuit']
            [16, 'Hyper Fang']
            [19, 'Assurance']
            [22, 'Crunch']
            [25, 'Sucker Punch']
            [28, 'Super Fang']
            [31, 'Double Edge']
            [34, 'Endeavor']
        ], //Kanto
        [
            [1, 'Tackle']
            [1, 'Tail Whip']
            [4, 'Quick Attack']
            [7, 'Focus Energy']
            [10, 'Bite']
            [13, 'Pursuit']
            [16, 'Hyper Fang']
            [19, 'Assurance']
            [22, 'Crunch']
            [25, 'Sucker Punch']
            [28, 'Super Fang']
            [31, 'Double Edge']
            [34, 'Endeavor']
        ], //Alolan
    ], //Rattata

    ['020',
        [
            [0, 'Scary Face']
            [1, 'Scary Face']
            [1, 'Swords Dance']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [1, 'Quick Attack']
            [1, 'Focus Energy']
            [4, 'Quick Attack']
            [7, 'Focus Energy']
            [10, 'Bite']
            [13, 'Pursuit']
            [16, 'Hyper Fang']
            [19, 'Assurance']
            [24, 'Crunch']
            [29, 'Sucker Punch']
            [34, 'Super Fang']
            [39, 'Double Edge']
            [44, 'Endeavor']
        ], //Kanto
        [
            [0, 'Scary Face']
            [1, 'Scary Face']
            [1, 'Swords Dance']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [1, 'Quick Attack']
            [1, 'Focus Energy']
            [4, 'Quick Attack']
            [7, 'Focus Energy']
            [10, 'Bite']
            [13, 'Pursuit']
            [16, 'Hyper Fang']
            [19, 'Assurance']
            [24, 'Crunch']
            [29, 'Sucker Punch']
            [34, 'Super Fang']
            [39, 'Double Edge']
            [44, 'Endeavor']
        ], //Alolan
    ], //Raticate

    ['021',
        [
            [1, 'Peck']
            [1, 'Growl']
            [4, 'Leer']
            [8, 'Pursuit']
            [11, 'Fury Attack']
            [15, 'Aerial Ace']
            [18, 'Mirror Move']
            [22, 'Assurance']
            [25, 'Agility']
            [29, 'Focus Energy']
            [32, 'Roost']
            [36, 'Drill Peck']
        ],
    ],

    ['022',
        [
            [1, 'Drill Run']
            [1, 'Pluck']
            [1, 'Peck']
            [1, 'Growl']
            [1, 'Leer']
            [1, 'Pursuit']
            [4, 'Leer']
            [8, 'Pursuit']
            [11, 'Fury Attack']
            [15, 'Aerial Ace']
            [18, 'Mirror Move']
            [23, 'Assurance']
            [27, 'Agility']
            [32, 'Focus Energy']
            [36, 'Roost']
            [41, 'Drill Peck']
            [45, 'Drill Run']
        ],
    ],

    ['023',
        [
            [1, 'Wrap']
            [1, 'Leer']
            [4, 'Poison Sting']
            [9, 'Bite']
            [12, 'Glare']
            [17, 'Screech']
            [20, 'Acid']
            [25, 'Stockpile']
            [25, 'Swallow']
            [25, 'Spit Up']
            [28, 'Acid Spray']
            [33, 'Mud Bomb']
            [36, 'Gastro Acid']
            [38, 'Belch']
            [41, 'Haze']
            [44, 'Coil']
            [49, 'Gunk Shot']
        ],
    ],

    ['024',
        [
            [0, 'Crunch']
            [1, 'Crunch']
            [1, 'Ice Fang']
            [1, 'Thunder Fang']
            [1, 'Fire Fang']
            [1, 'Wrap']
            [1, 'Leer']
            [1, 'Poison Sting']
            [1, 'Bite']
            [4, 'Poison Sting']
            [9, 'Bite']
            [12, 'Glare']
            [17, 'Screech']
            [20, 'Acid']
            [27, 'Stockpile']
            [27, 'Swallow']
            [27, 'Spit Up']
            [32, 'Acid Spray']
            [39, 'Mud Bomb']
            [44, 'Gastro Acid']
            [48, 'Belch']
            [51, 'Haze']
            [56, 'Coil']
            [63, 'Gunk Shot']
        ],
    ],

    ['025',
        [
            [1, 'Tail Whip']
            [1, 'Thunder Shock']
            [5, 'Growl']
            [7, 'Play Nice']
            [10, 'Quick Attack']
            [13, 'Electro Ball']
            [18, 'Thunder Wave']
            [21, 'Feint']
            [23, 'Double Team']
            [26, 'Spark']
            [29, 'Nuzzle']
            [34, 'Discharge']
            [37, 'Slam']
            [42, 'Thunderbolt']
            [45, 'Agility']
            [50, 'Wild Charge']
            [53, 'Light Screen']
            [58, 'Thunder']
        ],
    ],

    ['026',
        [
            [1, 'Thunder Shock']
            [1, 'Tail Whip']
            [1, 'Quick Attack']
            [1, 'Thunderbolt']
        ], //Kanto
        [
            [0, 'Psychic']
            [1, 'Psychic']
            [1, 'Speed Swap']
            [1, 'Thunder Shock']
            [1, 'Tail Whip']
            [1, 'Quick Attack']
            [1, 'Thunderbolt']
        ], //Alolan
    ], //Raichu

    ['027',
        [
            [1, 'Scratch']
            [1, 'Defense Curl']
            [3, 'Sand Attack']
            [5, 'Poison Sting']
            [7, 'Rollout']
            [9, 'Rapid Spin']
            [11, 'Fury Cutter']
            [14, 'Magnitude']
            [17, 'Swift']
            [20, 'Fury Swipes']
            [23, 'Sand Tomb']
            [26, 'Slash']
            [30, 'Dig']
            [34, 'Gyro Ball']
            [38, 'Swords Dance']
            [42, 'Sandstorm']
            [46, 'Earthquake']
        ], //Kanto
        [
            [1, 'Scratch']
            [1, 'Defense Curl']
            [3, 'Bide']
            [5, 'Powder Snow']
            [7, 'Ice Ball']
            [9, 'Rapid Spin']
            [11, 'Fury Cutter']
            [14, 'Metal Claw']
            [17, 'Swift']
            [20, 'Fury Swipes']
            [23, 'Iron Defense']
            [26, 'Slash']
            [30, 'Iron Head']
            [34, 'Gyro Ball']
            [38, 'Swords Dance']
            [42, 'Hail']
            [46, 'Blizzard']
        ], //Alolan
    ], //Sandshrew

    ['028',
        [
            [0, 'Crush Claw']
            [1, 'Crush Claw']
            [1, 'Scratch']
            [1, 'Defense Curl']
            [1, 'Sand Attack']
            [1, 'Poison Sting']
            [3, 'Sand Attack']
            [5, 'Poison Sting']
            [7, 'Rollout']
            [9, 'Rapid Spin']
            [11, 'Fury Cutter']
            [14, 'Magnitude']
            [17, 'Swift']
            [20, 'Fury Swipes']
            [24, 'Sand Tomb']
            [28, 'Slash']
            [33, 'Dig']
            [38, 'Gyro Ball']
            [43, 'Swords Dance']
            [48, 'Sandstorm']
            [53, 'Earthquake']
        ], //Kanto
        [
            [0, 'Icicle Spear']
            [1, 'Icicle Spear']
            [1, 'Metal Burst']
            [1, 'Icicle Crash']
            [1, 'Slash']
            [1, 'Defense Curl']
            [1, 'Ice Ball']
            [1, 'Metal Claw']
        ], //Alolan
    ], //Sandslash

    ['029',
        [
            [1, 'Growl']
            [1, 'Scratch']
            [7, 'Tail Whip']
            [9, 'Double Kick']
            [13, 'Poison Sting']
            [19, 'Fury Swipes']
            [21, 'Bite']
            [25, 'Helping Hand']
            [31, 'Toxic Spikes']
            [33, 'Flatter']
            [37, 'Crunch']
            [43, 'Captivate']
            [45, 'Poison Fang']
        ],
    ],

    ['030',
        [
            [1, 'Growl']
            [1, 'Scratch']
            [7, 'Tail Whip']
            [9, 'Double Kick']
            [13, 'Poison Sting']
            [20, 'Fury Swipes']
            [23, 'Bite']
            [28, 'Helping Hand']
            [35, 'Toxic Spikes']
            [38, 'Flatter']
            [43, 'Crunch']
            [50, 'Captivate']
            [58, 'Poison Fang']
        ],
    ],

    ['031',
        [
            [1, 'Superpower']
            [1, 'Scratch']
            [1, 'Tail Whip']
            [1, 'Double Kick']
            [1, 'Poison Sting']
            [23, 'Chip Away']
            [35, 'Body Slam']
            [43, 'Earth Power']
            [58, 'Superpower']
        ],
    ],

    ['032',
        [
            [1, 'Leer']
            [1, 'Peck']
            [7, 'Focus Energy']
            [9, 'Double Kick']
            [13, 'Poison Sting']
            [19, 'Fury Attack']
            [21, 'Horn Attack']
            [25, 'Helping Hand']
            [31, 'Toxic Spikes']
            [33, 'Flatter']
            [37, 'Poison Jab']
            [43, 'Captivate']
            [45, 'Horn Drill']
        ],
    ],

    ['033',
        [
            [1, 'Leer']
            [1, 'Peck']
            [7, 'Focus Energy']
            [9, 'Double Kick']
            [13, 'Poison Sting']
            [20, 'Fury Attack']
            [23, 'Horn Attack']
            [28, 'Helping Hand']
            [35, 'Toxic Spikes']
            [38, 'Flatter']
            [43, 'Poison Jab']
            [50, 'Captivate']
            [58, 'Horn Drill']
        ],
    ],

    ['034',
        [
            [1, 'Megahorn']
            [1, 'Peck']
            [1, 'Focus Energy']
            [1, 'Double Kick']
            [1, 'Poison Sting']
            [23, 'Chip Away']
            [35, 'Thrash']
            [43, 'Earth Power']
            [58, 'Megahorn']
        ],
    ],

    ['035',
        [
            [1, 'Spotlight']
            [1, 'Disarming Voice']
            [1, 'Pound']
            [1, 'Growl']
            [1, 'Encore']
            [7, 'Sing']
            [10, 'Double Slap']
            [13, 'Defense Curl']
            [16, 'Follow Me']
            [19, 'Bestow']
            [22, 'Wake Up Slap']
            [25, 'Minimize']
            [28, 'Stored Power']
            [31, 'Metronome']
            [34, 'Cosmic Power']
            [37, 'Lucky Chant']
            [40, 'Body Slam']
            [43, 'Moonlight']
            [46, 'Moonblast']
            [49, 'Gravity']
            [50, 'Meteor Mash']
            [55, 'Healing Wish']
            [58, 'After You']
        ],
    ],

    ['036',
        [
            [1, 'Spotlight']
            [1, 'Disarming Voice']
            [1, 'Sing']
            [1, 'Double Slap']
            [1, 'Minimize']
            [1, 'Metronome']
        ],
    ],

    ['037',
        [
            [1, 'Ember']
            [4, 'Tail Whip']
            [7, 'Roar']
            [9, 'Baby Doll Eyes']
            [10, 'Quick Attack']
            [12, 'Confuse Ray']
            [15, 'Fire Spin']
            [18, 'Payback']
            [20, 'Will O Wisp']
            [23, 'Feint Attack']
            [26, 'Hex']
            [28, 'Flame Burst']
            [31, 'Extrasensory']
            [34, 'Safeguard']
            [36, 'Flamethrower']
            [39, 'Imprison']
            [42, 'Fire Blast']
            [44, 'Grudge']
            [47, 'Captivate']
            [50, 'Inferno']
        ], //Kanto
        [
            [1, 'Powder Snow']
            [4, 'Tail Whip']
            [7, 'Roar']
            [9, 'Baby Doll Eyes']
            [10, 'Ice Shard']
            [12, 'Confuse Ray']
            [15, 'Icy Wind']
            [18, 'Payback']
            [20, 'Mist']
            [23, 'Feint Attack']
            [26, 'Hex']
            [28, 'Aurora Beam']
            [31, 'Extrasensory']
            [34, 'Safeguard']
            [36, 'Ice Beam']
            [39, 'Imprison']
            [42, 'Blizzard']
            [44, 'Grudge']
            [47, 'Captivate']
            [50, 'Sheer Cold']
        ], //Alolan
    ], //Vulpix

    ['038',
        [
            [1, 'Imprison']
            [1, 'Nasty Plot']
            [1, 'Flamethrower']
            [1, 'Quick Attack']
            [1, 'Confuse Ray']
            [1, 'Safeguard']
        ], //Kanto
        [
            [0, 'Dazzling Gleam']
            [1, 'Dazzling Gleam']
            [1, 'Imprison']
            [1, 'Nasty Plot']
            [1, 'Ice Beam']
            [1, 'Ice Shard']
            [1, 'Confuse Ray']
            [1, 'Safeguard']
        ], //Alolan
    ], //Ninetales

    ['039',
        [
            [1, 'Sing']
            [3, 'Defense Curl']
            [5, 'Pound']
            [9, 'Play Nice']
            [11, 'Disarming Voice']
            [14, 'Disable']
            [17, 'Double Slap']
            [20, 'Rollout']
            [22, 'Round']
            [25, 'Stockpile']
            [25, 'Swallow']
            [25, 'Spit Up']
            [27, 'Wake Up Slap']
            [30, 'Rest']
            [32, 'Body Slam']
            [35, 'Gyro Ball']
            [38, 'Mimic']
            [41, 'Hyper Voice']
            [45, 'Double Edge']
        ],
    ],

    ['040',
        [
            [1, 'Double Edge']
            [1, 'Play Rough']
            [1, 'Sing']
            [1, 'Defense Curl']
            [1, 'Disable']
            [1, 'Double Slap']
        ],
    ],

    ['041',
        [
            [1, 'Absorb']
            [5, 'Supersonic']
            [7, 'Astonish']
            [11, 'Bite']
            [13, 'Wing Attack']
            [17, 'Confuse Ray']
            [19, 'Air Cutter']
            [23, 'Swift']
            [25, 'Poison Fang']
            [29, 'Mean Look']
            [31, 'Leech Life']
            [35, 'Haze']
            [37, 'Venoshock']
            [41, 'Air Slash']
            [43, 'Quick Guard']
        ],
    ],

    ['042',
        [
            [1, 'Screech']
            [1, 'Absorb']
            [1, 'Supersonic']
            [1, 'Astonish']
            [1, 'Bite']
            [5, 'Supersonic']
            [7, 'Astonish']
            [11, 'Bite']
            [13, 'Wing Attack']
            [17, 'Confuse Ray']
            [19, 'Air Cutter']
            [24, 'Swift']
            [27, 'Poison Fang']
            [32, 'Mean Look']
            [35, 'Leech Life']
            [40, 'Haze']
            [43, 'Venoshock']
            [48, 'Air Slash']
            [51, 'Quick Guard']
        ],
    ],

    ['043',
        [
            [1, 'Absorb']
            [1, 'Growth']
            [5, 'Sweet Scent']
            [9, 'Acid']
            [13, 'Poison Powder']
            [14, 'Stun Spore']
            [15, 'Sleep Powder']
            [19, 'Mega Drain']
            [23, 'Lucky Chant']
            [27, 'Moonlight']
            [31, 'Giga Drain']
            [35, 'Toxic']
            [39, 'Natural Gift']
            [43, 'Moonblast']
            [47, 'Grassy Terrain']
            [51, 'Petal Dance']
        ],
    ],

    ['044',
        [
            [1, 'Absorb']
            [1, 'Growth']
            [1, 'Sweet Scent']
            [1, 'Acid']
            [5, 'Sweet Scent']
            [9, 'Acid']
            [13, 'Poison Powder']
            [14, 'Stun Spore']
            [15, 'Sleep Powder']
            [19, 'Mega Drain']
            [24, 'Lucky Chant']
            [29, 'Moonlight']
            [34, 'Giga Drain']
            [39, 'Toxic']
            [44, 'Natural Gift']
            [49, 'Petal Blizzard']
            [54, 'Grassy Terrain']
            [59, 'Petal Dance']
        ],
    ],

    ['045',
        [
            [1, 'Mega Drain']
            [1, 'Aromatherapy']
            [1, 'Poison Powder']
            [1, 'Stun Spore']
            [49, 'Petal Blizzard']
            [59, 'Petal Dance']
            [69, 'Solar Beam']
        ],
    ],

    ['046',
        [
            [1, 'Scratch']
            [6, 'Stun Spore']
            [6, 'Poison Powder']
            [11, 'Absorb']
            [17, 'Fury Cutter']
            [22, 'Spore']
            [27, 'Slash']
            [33, 'Growth']
            [38, 'Giga Drain']
            [43, 'Aromatherapy']
            [49, 'Rage Powder']
            [54, 'X Scissor']
        ],
    ],

    ['047',
        [
            [1, 'Cross Poison']
            [1, 'Scratch']
            [1, 'Stun Spore']
            [1, 'Poison Powder']
            [1, 'Absorb']
            [6, 'Stun Spore']
            [6, 'Poison Powder']
            [11, 'Absorb']
            [17, 'Fury Cutter']
            [22, 'Spore']
            [29, 'Slash']
            [37, 'Growth']
            [44, 'Giga Drain']
            [51, 'Aromatherapy']
            [59, 'Rage Powder']
            [66, 'X Scissor']
        ],
    ],

    ['048',
        [
            [1, 'Tackle']
            [1, 'Disable']
            [1, 'Foresight']
            [5, 'Supersonic']
            [11, 'Confusion']
            [13, 'Poison Powder']
            [17, 'Psybeam']
            [23, 'Stun Spore']
            [25, 'Signal Beam']
            [29, 'Sleep Powder']
            [35, 'Leech Life']
            [37, 'Zen Headbutt']
            [41, 'Poison Fang']
            [47, 'Psychic']
        ],
    ],

    ['049',
        [
            [0, 'Gust']
            [1, 'Gust']
            [1, 'Quiver Dance']
            [1, 'Bug Buzz']
            [1, 'Silver Wind']
            [1, 'Tackle']
            [1, 'Disable']
            [1, 'Foresight']
            [1, 'Supersonic']
            [5, 'Supersonic']
            [11, 'Confusion']
            [13, 'Poison Powder']
            [17, 'Psybeam']
            [23, 'Stun Spore']
            [25, 'Signal Beam']
            [29, 'Sleep Powder']
            [37, 'Leech Life']
            [41, 'Zen Headbutt']
            [47, 'Poison Fang']
            [55, 'Psychic']
            [59, 'Bug Buzz']
            [63, 'Quiver Dance']
        ],
    ],

    ['050',
        [
            [1, 'Sand Attack']
            [1, 'Scratch']
            [4, 'Growl']
            [7, 'Astonish']
            [10, 'Mud Slap']
            [14, 'Magnitude']
            [18, 'Bulldoze']
            [22, 'Sucker Punch']
            [25, 'Mud Bomb']
            [28, 'Earth Power']
            [31, 'Dig']
            [35, 'Slash']
            [39, 'Earthquake']
            [43, 'Fissure']
        ], //Kanto
        [
            [1, 'Sand Attack']
            [1, 'Metal Claw']
            [4, 'Growl']
            [7, 'Astonish']
            [10, 'Mud Slap']
            [14, 'Magnitude']
            [18, 'Bulldoze']
            [22, 'Sucker Punch']
            [25, 'Mud Bomb']
            [28, 'Earth Power']
            [31, 'Dig']
            [35, 'Iron Head']
            [39, 'Earthquake']
            [43, 'Fissure']
        ], //Alolan
    ], //Diglett

    ['051',
        [
            [0, 'Sand Tomb']
            [1, 'Sand Tomb']
            [1, 'Rototiller']
            [1, 'Night Slash']
            [1, 'Tri Attack']
            [1, 'Scratch']
            [1, 'Sand Attack']
            [1, 'Growl']
            [4, 'Growl']
            [7, 'Astonish']
            [10, 'Mud Slap']
            [14, 'Magnitude']
            [18, 'Bulldoze']
            [22, 'Sucker Punch']
            [25, 'Mud Bomb']
            [30, 'Earth Power']
            [35, 'Dig']
            [41, 'Slash']
            [47, 'Earthquake']
            [53, 'Fissure']
        ], //Kanto
        [
            [0, 'Sand Tomb']
            [1, 'Sand Tomb']
            [1, 'Rototiller']
            [1, 'Night Slash']
            [1, 'Tri Attack']
            [1, 'Sand Attack']
            [1, 'Metal Claw']
            [1, 'Growl']
            [4, 'Growl']
            [7, 'Astonish']
            [10, 'Mud Slap']
            [14, 'Magnitude']
            [18, 'Bulldoze']
            [22, 'Sucker Punch']
            [25, 'Mud Bomb']
            [30, 'Earth Power']
            [35, 'Dig']
            [41, 'Iron Head']
            [47, 'Earthquake']
            [53, 'Fissure']
        ], //Alolan
    ], //Dugtrio

    ['052',
        [
            [1, 'Scratch']
            [1, 'Growl']
            [6, 'Bite']
            [9, 'Fake Out']
            [14, 'Fury Swipes']
            [17, 'Screech']
            [22, 'Feint Attack']
            [25, 'Taunt']
            [30, 'Pay Day']
            [33, 'Slash']
            [38, 'Nasty Plot']
            [41, 'Assurance']
            [46, 'Captivate']
            [49, 'Night Slash']
            [50, 'Feint']
        ], //Kanto
        [
            [1, 'Scratch']
            [1, 'Growl']
            [6, 'Bite']
            [9, 'Fake Out']
            [14, 'Fury Swipes']
            [17, 'Screech']
            [22, 'Feint Attack']
            [25, 'Taunt']
            [30, 'Pay Day']
            [33, 'Slash']
            [38, 'Nasty Plot']
            [41, 'Assurance']
            [46, 'Captivate']
            [49, 'Night Slash']
            [50, 'Feint']
            [55, 'Dark Pulse']
        ], //Alolan
        [
            [1, 'Fake Out']
            [1, 'Growl']
            [4, 'Hone Claws']
            [8, 'Scratch']
            [12, 'Pay Day']
            [16, 'Metal Claw']
            [20, 'Taunt']
            [24, 'Swagger']
            [29, 'Fury Swipes']
            [32, 'Screech']
            [36, 'Slash']
            [40, 'Metal Sound']
            [44, 'Thrash']
        ], //Galarian
    ], //Meowth

    ['053',
        [
            [0, 'Swift']
            [1, 'Swift']
            [1, 'Play Rough']
            [1, 'Switcheroo']
            [1, 'Scratch']
            [1, 'Growl']
            [1, 'Bite']
            [1, 'Fake Out']
            [6, 'Bite']
            [9, 'Fake Out']
            [14, 'Fury Swipes']
            [17, 'Screech']
            [22, 'Feint Attack']
            [25, 'Taunt']
            [32, 'Power Gem']
            [37, 'Slash']
            [44, 'Nasty Plot']
            [49, 'Assurance']
            [56, 'Captivate']
            [61, 'Night Slash']
            [65, 'Feint']
        ], //Kanto
        [
            [0, 'Swift']
            [1, 'Swift']
            [1, 'Quash']
            [1, 'Play Rough']
            [1, 'Switcheroo']
            [1, 'Scratch']
            [1, 'Growl']
            [1, 'Bite']
            [1, 'Fake Out']
            [6, 'Bite']
            [9, 'Fake Out']
            [14, 'Fury Swipes']
            [17, 'Screech']
            [22, 'Feint Attack']
            [25, 'Taunt']
            [32, 'Power Gem']
            [37, 'Slash']
            [44, 'Nasty Plot']
            [49, 'Assurance']
            [56, 'Captivate']
            [61, 'Night Slash']
            [65, 'Feint']
            [69, 'Dark Pulse']
        ], //Alolan
    ], //Persian

    ['054',
        [
            [1, 'Water Sport']
            [1, 'Scratch']
            [4, 'Tail Whip']
            [7, 'Water Gun']
            [10, 'Confusion']
            [13, 'Fury Swipes']
            [16, 'Water Pulse']
            [19, 'Disable']
            [22, 'Screech']
            [25, 'Zen Headbutt']
            [28, 'Aqua Tail']
            [31, 'Soak']
            [34, 'Psych Up']
            [37, 'Amnesia']
            [40, 'Hydro Pump']
            [43, 'Wonder Room']
        ],
    ],

    ['055',
        [
            [1, 'Me First']
            [1, 'Aqua Jet']
            [1, 'Water Sport']
            [1, 'Scratch']
            [1, 'Tail Whip']
            [1, 'Water Gun']
            [4, 'Tail Whip']
            [7, 'Water Gun']
            [10, 'Confusion']
            [13, 'Fury Swipes']
            [16, 'Water Pulse']
            [19, 'Disable']
            [22, 'Screech']
            [25, 'Zen Headbutt']
            [28, 'Aqua Tail']
            [31, 'Soak']
            [36, 'Psych Up']
            [41, 'Amnesia']
            [46, 'Hydro Pump']
            [51, 'Wonder Room']
        ],
    ],

    ['056',
        [
            [1, 'Covet']
            [1, 'Scratch']
            [1, 'Low Kick']
            [1, 'Leer']
            [1, 'Focus Energy']
            [5, 'Fury Swipes']
            [8, 'Karate Chop']
            [12, 'Pursuit']
            [15, 'Seismic Toss']
            [19, 'Swagger']
            [22, 'Cross Chop']
            [26, 'Assurance']
            [29, 'Punishment']
            [33, 'Thrash']
            [36, 'Close Combat']
            [40, 'Screech']
            [43, 'Stomping Tantrum']
            [47, 'Outrage']
            [50, 'Final Gambit']
        ],
    ],

    ['057',
        [
            [0, 'Rage']
            [1, 'Rage']
            [1, 'Final Gambit']
            [1, 'Fling']
            [1, 'Scratch']
            [1, 'Low Kick']
            [1, 'Leer']
            [1, 'Focus Energy']
            [5, 'Fury Swipes']
            [8, 'Karate Chop']
            [12, 'Pursuit']
            [15, 'Seismic Toss']
            [19, 'Swagger']
            [22, 'Cross Chop']
            [26, 'Assurance']
            [30, 'Punishment']
            [35, 'Thrash']
            [39, 'Close Combat']
            [44, 'Screech']
            [48, 'Stomping Tantrum']
            [53, 'Outrage']
            [57, 'Final Gambit']
        ],
    ],

    ['058',
        [
            [1, 'Bite']
            [1, 'Roar']
            [6, 'Ember']
            [8, 'Leer']
            [10, 'Odor Sleuth']
            [12, 'Helping Hand']
            [17, 'Flame Wheel']
            [19, 'Reversal']
            [21, 'Fire Fang']
            [23, 'Take Down']
            [28, 'Flame Burst']
            [30, 'Agility']
            [32, 'Retaliate']
            [34, 'Flamethrower']
            [39, 'Crunch']
            [41, 'Heat Wave']
            [43, 'Outrage']
            [45, 'Flare Blitz']
        ],
    ],

    ['059',
        [
            [1, 'Thunder Fang']
            [1, 'Bite']
            [1, 'Roar']
            [1, 'Odor Sleuth']
            [1, 'Fire Fang']
            [34, 'Extreme Speed']
        ],
    ],

    ['060',
        [
            [1, 'Water Sport']
            [5, 'Water Gun']
            [8, 'Hypnosis']
            [11, 'Bubble']
            [15, 'Double Slap']
            [18, 'Rain Dance']
            [21, 'Body Slam']
            [25, 'Bubble Beam']
            [28, 'Mud Shot']
            [31, 'Belly Drum']
            [35, 'Wake Up Slap']
            [38, 'Hydro Pump']
            [41, 'Mud Bomb']
        ],
    ],

    ['061',
        [
            [1, 'Water Sport']
            [1, 'Water Gun']
            [1, 'Hypnosis']
            [5, 'Water Gun']
            [8, 'Hypnosis']
            [11, 'Bubble']
            [15, 'Double Slap']
            [18, 'Rain Dance']
            [21, 'Body Slam']
            [27, 'Bubble Beam']
            [32, 'Mud Shot']
            [37, 'Belly Drum']
            [43, 'Wake Up Slap']
            [48, 'Hydro Pump']
            [53, 'Mud Bomb']
        ],
    ],

    ['062',
        [
            [0, 'Submission']
            [1, 'Submission']
            [1, 'Circle Throw']
            [1, 'Bubble Beam']
            [1, 'Hypnosis']
            [1, 'Double Slap']
            [32, 'Dynamic Punch']
            [43, 'Mind Reader']
            [53, 'Circle Throw']
        ],
    ],

    ['063',
        [
            [1, 'Teleport']
        ],
    ],

    ['064',
        [
            [0, 'Kinesis']
            [1, 'Kinesis']
            [1, 'Teleport']
            [1, 'Confusion']
            [16, 'Confusion']
            [18, 'Disable']
            [21, 'Psybeam']
            [23, 'Miracle Eye']
            [26, 'Reflect']
            [28, 'Psycho Cut']
            [31, 'Recover']
            [33, 'Telekinesis']
            [36, 'Ally Switch']
            [38, 'Psychic']
            [41, 'Role Play']
            [43, 'Future Sight']
            [46, 'Trick']
        ],
    ],

    ['065',
        [
            [0, 'Kinesis']
            [1, 'Kinesis']
            [1, 'Teleport']
            [1, 'Confusion']
            [16, 'Confusion']
            [18, 'Disable']
            [21, 'Psybeam']
            [23, 'Miracle Eye']
            [26, 'Reflect']
            [28, 'Psycho Cut']
            [31, 'Recover']
            [33, 'Telekinesis']
            [36, 'Ally Switch']
            [38, 'Psychic']
            [41, 'Calm Mind']
            [43, 'Future Sight']
            [46, 'Trick']
        ],
    ],

    ['066',
        [
            [1, 'Low Kick']
            [1, 'Leer']
            [3, 'Focus Energy']
            [7, 'Karate Chop']
            [9, 'Foresight']
            [13, 'Low Sweep']
            [15, 'Seismic Toss']
            [19, 'Revenge']
            [21, 'Knock Off']
            [25, 'Vital Throw']
            [27, 'Wake Up Slap']
            [31, 'Dual Chop']
            [33, 'Submission']
            [37, 'Bulk Up']
            [39, 'Cross Chop']
            [43, 'Scary Face']
            [45, 'Dynamic Punch']
        ],
    ],

    ['067',
        [
            [1, 'Low Kick']
            [1, 'Leer']
            [1, 'Focus Energy']
            [1, 'Karate Chop']
            [3, 'Focus Energy']
            [7, 'Karate Chop']
            [9, 'Foresight']
            [13, 'Low Sweep']
            [15, 'Seismic Toss']
            [19, 'Revenge']
            [21, 'Knock Off']
            [25, 'Vital Throw']
            [27, 'Wake Up Slap']
            [33, 'Dual Chop']
            [37, 'Submission']
            [43, 'Bulk Up']
            [47, 'Cross Chop']
            [53, 'Scary Face']
            [57, 'Dynamic Punch']
        ],
    ],

    ['068',
        [
            [0, 'Strength']
            [1, 'Strength']
            [1, 'Wide Guard']
            [1, 'Low Kick']
            [1, 'Leer']
            [1, 'Focus Energy']
            [1, 'Karate Chop']
            [3, 'Focus Energy']
            [7, 'Karate Chop']
            [9, 'Foresight']
            [13, 'Low Sweep']
            [15, 'Seismic Toss']
            [19, 'Revenge']
            [21, 'Knock Off']
            [25, 'Vital Throw']
            [27, 'Wake Up Slap']
            [33, 'Dual Chop']
            [37, 'Submission']
            [43, 'Bulk Up']
            [47, 'Cross Chop']
            [53, 'Scary Face']
            [57, 'Dynamic Punch']
        ],
    ],

    ['069',
        [
            [1, 'Vine Whip']
            [7, 'Growth']
            [11, 'Wrap']
            [13, 'Sleep Powder']
            [15, 'Poison Powder']
            [17, 'Stun Spore']
            [23, 'Acid']
            [27, 'Knock Off']
            [29, 'Sweet Scent']
            [35, 'Gastro Acid']
            [39, 'Razor Leaf']
            [41, 'Poison Jab']
            [47, 'Slam']
            [50, 'Wring Out']
        ],
    ],

    ['070',
        [
            [1, 'Vine Whip']
            [1, 'Growth']
            [1, 'Wrap']
            [7, 'Growth']
            [11, 'Wrap']
            [13, 'Sleep Powder']
            [15, 'Poison Powder']
            [17, 'Stun Spore']
            [24, 'Acid']
            [29, 'Knock Off']
            [32, 'Sweet Scent']
            [39, 'Gastro Acid']
            [44, 'Razor Leaf']
            [47, 'Poison Jab']
            [54, 'Slam']
            [58, 'Wring Out']
        ],
    ],

    ['071',
        [
            [0, 'Leaf Tornado']
            [1, 'Leaf Tornado']
            [1, 'Stockpile']
            [1, 'Swallow']
            [1, 'Spit Up']
            [1, 'Vine Whip']
            [1, 'Sleep Powder']
            [1, 'Sweet Scent']
            [1, 'Razor Leaf']
            [32, 'Leaf Storm']
            [44, 'Leaf Blade']
        ],
    ],

    ['072',
        [
            [1, 'Poison Sting']
            [4, 'Supersonic']
            [7, 'Constrict']
            [10, 'Acid']
            [13, 'Toxic Spikes']
            [16, 'Water Pulse']
            [19, 'Wrap']
            [22, 'Acid Spray']
            [25, 'Bubble Beam']
            [28, 'Barrier']
            [31, 'Poison Jab']
            [34, 'Brine']
            [37, 'Screech']
            [40, 'Hex']
            [43, 'Sludge Wave']
            [46, 'Hydro Pump']
            [49, 'Wring Out']
        ],
    ],

    ['073',
        [
            [1, 'Reflect Type']
            [1, 'Wring Out']
            [1, 'Poison Sting']
            [1, 'Supersonic']
            [1, 'Constrict']
            [1, 'Acid']
            [4, 'Supersonic']
            [7, 'Constrict']
            [10, 'Acid']
            [13, 'Toxic Spikes']
            [16, 'Water Pulse']
            [19, 'Wrap']
            [22, 'Acid Spray']
            [25, 'Bubble Beam']
            [28, 'Barrier']
            [32, 'Poison Jab']
            [36, 'Brine']
            [40, 'Screech']
            [44, 'Hex']
            [48, 'Sludge Wave']
            [52, 'Hydro Pump']
            [56, 'Wring Out']
        ],
    ],

    ['074',
        [
            [1, 'Tackle']
            [1, 'Defense Curl']
            [4, 'Mud Sport']
            [6, 'Rock Polish']
            [10, 'Rollout']
            [12, 'Magnitude']
            [16, 'Rock Throw']
            [18, 'Smack Down']
            [22, 'Bulldoze']
            [24, 'Self Destruct']
            [28, 'Stealth Rock']
            [30, 'Rock Blast']
            [34, 'Earthquake']
            [36, 'Explosion']
            [40, 'Double Edge']
            [42, 'Stone Edge']
        ], //Kanto
        [
            [1, 'Tackle']
            [1, 'Defense Curl']
            [4, 'Charge']
            [6, 'Rock Polish']
            [10, 'Rollout']
            [12, 'Spark']
            [16, 'Rock Throw']
            [18, 'Smack Down']
            [22, 'Thunder Punch']
            [24, 'Self Destruct']
            [28, 'Stealth Rock']
            [30, 'Rock Blast']
            [34, 'Discharge']
            [36, 'Explosion']
            [40, 'Double Edge']
            [42, 'Stone Edge']
        ], //Alolan
    ], //Geodude

    ['075',
        [
            [1, 'Tackle']
            [1, 'Defense Curl']
            [1, 'Mud Sport']
            [1, 'Rock Polish']
            [4, 'Mud Sport']
            [6, 'Rock Polish']
            [10, 'Rollout']
            [12, 'Magnitude']
            [16, 'Rock Throw']
            [18, 'Smack Down']
            [22, 'Bulldoze']
            [24, 'Self Destruct']
            [30, 'Stealth Rock']
            [34, 'Rock Blast']
            [40, 'Earthquake']
            [44, 'Explosion']
            [50, 'Double Edge']
            [54, 'Stone Edge']
        ], //Kanto
        [
            [1, 'Tackle']
            [1, 'Defense Curl']
            [1, 'Charge']
            [1, 'Rock Polish']
            [4, 'Charge']
            [6, 'Rock Polish']
            [10, 'Rollout']
            [12, 'Spark']
            [16, 'Rock Throw']
            [18, 'Smack Down']
            [22, 'Thunder Punch']
            [24, 'Self Destruct']
            [30, 'Stealth Rock']
            [34, 'Rock Blast']
            [40, 'Discharge']
            [44, 'Explosion']
            [50, 'Double Edge']
            [54, 'Stone Edge']
        ], //Alolan
    ], //Graveler

    ['076',
        [
            [1, 'Heavy Slam']
            [1, 'Tackle']
            [1, 'Defense Curl']
            [1, 'Mud Sport']
            [1, 'Rock Polish']
            [4, 'Mud Sport']
            [6, 'Rock Polish']
            [10, 'Steamroller']
            [12, 'Magnitude']
            [16, 'Rock Throw']
            [18, 'Smack Down']
            [22, 'Bulldoze']
            [24, 'Self Destruct']
            [30, 'Stealth Rock']
            [34, 'Rock Blast']
            [40, 'Earthquake']
            [44, 'Explosion']
            [50, 'Double Edge']
            [54, 'Stone Edge']
            [60, 'Heavy Slam']
        ], //Kanto
        [
            [1, 'Heavy Slam']
            [1, 'Tackle']
            [1, 'Defense Curl']
            [1, 'Charge']
            [1, 'Rock Polish']
            [4, 'Charge']
            [6, 'Rock Polish']
            [10, 'Steamroller']
            [12, 'Spark']
            [16, 'Rock Throw']
            [18, 'Smack Down']
            [22, 'Thunder Punch']
            [24, 'Self Destruct']
            [30, 'Stealth Rock']
            [34, 'Rock Blast']
            [40, 'Discharge']
            [44, 'Explosion']
            [50, 'Double Edge']
            [54, 'Stone Edge']
            [60, 'Heavy Slam']
        ], //Alolan
    ], //Golem

    ['077',
        [
            [1, 'Growl']
            [1, 'Tackle']
            [4, 'Tail Whip']
            [9, 'Ember']
            [13, 'Flame Wheel']
            [17, 'Stomp']
            [21, 'Flame Charge']
            [25, 'Fire Spin']
            [29, 'Take Down']
            [33, 'Inferno']
            [37, 'Agility']
            [41, 'Fire Blast']
            [45, 'Bounce']
            [49, 'Flare Blitz']
        ], //Kanto
        [
            [1, 'Tackle']
            [1, 'Growl']
            [5, 'Tail Whip']
            [10, 'Confusion']
            [15, 'Fairy Wind']
            [20, 'Agility']
            [25, 'Psybeam']
            [30, 'Stomp']
            [35, 'Heal Pulse']
            [41, 'Take Down']
            [45, 'Dazzling Gleam']
            [50, 'Psychic']
            [55, 'Healing Wish']
        ], //Galarian
    ], //Ponyta

    ['078',
        [
            [0, 'Fury Attack']
            [1, 'Fury Attack']
            [1, 'Poison Jab']
            [1, 'Megahorn']
            [1, 'Growl']
            [1, 'Quick Attack']
            [1, 'Tail Whip']
            [1, 'Ember']
            [4, 'Tail Whip']
            [9, 'Ember']
            [13, 'Flame Wheel']
            [17, 'Stomp']
            [21, 'Flame Charge']
            [25, 'Fire Spin']
            [29, 'Take Down']
            [33, 'Inferno']
            [37, 'Agility']
            [41, 'Fire Blast']
            [45, 'Bounce']
            [49, 'Flare Blitz']
        ], //Kanto
        [
            [0, 'Psycho Cut']
            [1, 'Psycho Cut']
            [1, 'Megahorn']
            [1, 'Tackle']
            [1, 'Quick Attack']
            [1, 'Growl']
            [1, 'Tail Whip']
            [1, 'Confusion']
            [15, 'Fairy Wind']
            [20, 'Agility']
            [25, 'Psybeam']
            [30, 'Stomp']
            [35, 'Heal Pulse']
            [43, 'Take Down']
            [49, 'Dazzling Gleam']
            [56, 'Psychic']
            [63, 'Healing Wish']
        ], //Galarian
    ], //Rapidash

    ['079',
        [
            [1, 'Curse']
            [1, 'Yawn']
            [1, 'Tackle']
            [5, 'Growl']
            [9, 'Water Gun']
            [14, 'Confusion']
            [19, 'Disable']
            [23, 'Headbutt']
            [28, 'Water Pulse']
            [32, 'Zen Headbutt']
            [36, 'Slack Off']
            [41, 'Amnesia']
            [45, 'Psychic']
            [49, 'Rain Dance']
            [54, 'Psych Up']
            [58, 'Heal Pulse']
        ], //Kanto
        [
            [1, 'Tackle']
            [1, 'Curse']
            [3, 'Growl']
            [6, 'Acid']
            [9, 'Yawn']
            [12, 'Confusion']
            [15, 'Disable']
            [18, 'Water Pulse']
            [21, 'Headbutt']
            [24, 'Zen Headbutt']
            [27, 'Amnesia']
            [30, 'Surf']
            [33, 'Slack Off']
            [36, 'Psychic']
            [39, 'Psych Up']
            [42, 'Rain Dance']
            [45, 'Heal Pulse']
        ], //Galarian
    ], //Slowpoke

    ['080',
        [
            [0, 'Withdraw']
            [1, 'Withdraw']
            [1, 'Heal Pulse']
            [1, 'Curse']
            [1, 'Yawn']
            [1, 'Tackle']
            [1, 'Growl']
            [5, 'Growl']
            [9, 'Water Gun']
            [14, 'Confusion']
            [19, 'Disable']
            [23, 'Headbutt']
            [28, 'Water Pulse']
            [32, 'Zen Headbutt']
            [36, 'Slack Off']
            [43, 'Amnesia']
            [49, 'Psychic']
            [55, 'Rain Dance']
            [62, 'Psych Up']
            [68, 'Heal Pulse']
        ], //Kanto
        [
            [0, 'Shell Side Arm']
            [1, 'Shell Side Arm']
            [1, 'Withdraw']
            [1, 'Tackle']
            [1, 'Curse']
            [1, 'Growl']
            [1, 'Acid']
            [9, 'Yawn']
            [12, 'Confusion']
            [15, 'Disable']
            [18, 'Water Pulse']
            [21, 'Headbutt']
            [24, 'Zen Headbutt']
            [27, 'Amnesia']
            [30, 'Surf']
            [33, 'Slack Off']
            [36, 'Psychic']
            [39, 'Psych Up']
            [42, 'Rain Dance']
            [45, 'Heal Pulse']
        ], //Galarian
    ], //Slowbro

    ['081',
        [
            [1, 'Tackle']
            [1, 'Supersonic']
            [5, 'Thunder Shock']
            [7, 'Thunder Wave']
            [11, 'Magnet Bomb']
            [13, 'Light Screen']
            [17, 'Sonic Boom']
            [19, 'Spark']
            [23, 'Mirror Shot']
            [25, 'Metal Sound']
            [29, 'Electro Ball']
            [31, 'Flash Cannon']
            [35, 'Screech']
            [37, 'Discharge']
            [41, 'Lock On']
            [43, 'Magnet Rise']
            [47, 'Gyro Ball']
            [49, 'Zap Cannon']
        ],
    ],

    ['082',
        [
            [0, 'Tri Attack']
            [1, 'Tri Attack']
            [1, 'Zap Cannon']
            [1, 'Electric Terrain']
            [1, 'Tackle']
            [1, 'Supersonic']
            [1, 'Thunder Shock']
            [1, 'Thunder Wave']
            [5, 'Thunder Shock']
            [7, 'Thunder Wave']
            [11, 'Magnet Bomb']
            [13, 'Light Screen']
            [17, 'Sonic Boom']
            [19, 'Spark']
            [23, 'Mirror Shot']
            [25, 'Metal Sound']
            [29, 'Electro Ball']
            [33, 'Flash Cannon']
            [39, 'Screech']
            [43, 'Discharge']
            [49, 'Lock On']
            [53, 'Magnet Rise']
            [59, 'Gyro Ball']
            [63, 'Zap Cannon']
        ],
    ],

    ['083',
        [
            [1, 'Brave Bird']
            [1, 'Poison Jab']
            [1, 'Peck']
            [1, 'Sand Attack']
            [1, 'Leer']
            [1, 'Fury Cutter']
            [7, 'Fury Attack']
            [9, 'Aerial Ace']
            [13, 'Knock Off']
            [19, 'Slash']
            [21, 'Air Cutter']
            [25, 'Swords Dance']
            [31, 'Agility']
            [33, 'Night Slash']
            [37, 'Acrobatics']
            [43, 'Feint']
            [45, 'False Swipe']
            [49, 'Air Slash']
            [55, 'Brave Bird']
        ], //Kanto
        [
            [1, 'Peck']
            [1, 'Sand Attack']
            [5, 'Leer']
            [10, 'Fury Cutter']
            [15, 'Rock Smash']
            [20, 'Brutal Swing']
            [25, 'Detect']
            [30, 'Knock Off']
            [35, 'Defog']
            [40, 'Brick Break']
            [45, 'Swords Dance']
            [50, 'Slam']
            [55, 'Leaf Blade']
            [60, 'Final Gambit']
            [65, 'Brave Bird']
        ], //Galarian
    ], //Farfetch'd

    ['084',
        [
            [1, 'Peck']
            [1, 'Growl']
            [5, 'Quick Attack']
            [8, 'Rage']
            [12, 'Fury Attack']
            [15, 'Pursuit']
            [19, 'Pluck']
            [22, 'Double Hit']
            [26, 'Agility']
            [29, 'Uproar']
            [33, 'Acupressure']
            [36, 'Swords Dance']
            [40, 'Jump Kick']
            [43, 'Drill Peck']
            [47, 'Endeavor']
            [50, 'Thrash']
        ],
    ],

    ['085',
        [
            [0, 'Tri Attack']
            [1, 'Tri Attack']
            [1, 'Peck']
            [1, 'Growl']
            [1, 'Quick Attack']
            [1, 'Rage']
            [5, 'Quick Attack']
            [8, 'Rage']
            [12, 'Fury Attack']
            [15, 'Pursuit']
            [19, 'Pluck']
            [22, 'Double Hit']
            [26, 'Agility']
            [29, 'Uproar']
            [34, 'Acupressure']
            [38, 'Swords Dance']
            [43, 'Jump Kick']
            [47, 'Drill Peck']
            [52, 'Endeavor']
            [56, 'Thrash']
        ],
    ],

    ['086',
        [
            [1, 'Headbutt']
            [3, 'Growl']
            [7, 'Water Sport']
            [11, 'Icy Wind']
            [13, 'Encore']
            [17, 'Ice Shard']
            [21, 'Rest']
            [23, 'Aqua Ring']
            [27, 'Aurora Beam']
            [31, 'Aqua Jet']
            [33, 'Brine']
            [37, 'Take Down']
            [41, 'Dive']
            [43, 'Aqua Tail']
            [47, 'Ice Beam']
            [51, 'Safeguard']
            [53, 'Hail']
        ],
    ],

    ['087',
        [
            [0, 'Sheer Cold']
            [1, 'Sheer Cold']
            [1, 'Headbutt']
            [1, 'Growl']
            [1, 'Signal Beam']
            [1, 'Icy Wind']
            [3, 'Growl']
            [7, 'Signal Beam']
            [11, 'Icy Wind']
            [13, 'Encore']
            [17, 'Ice Shard']
            [21, 'Rest']
            [23, 'Aqua Ring']
            [27, 'Aurora Beam']
            [31, 'Aqua Jet']
            [33, 'Brine']
            [39, 'Take Down']
            [45, 'Dive']
            [49, 'Aqua Tail']
            [55, 'Ice Beam']
            [61, 'Safeguard']
            [65, 'Hail']
        ],
    ],

    ['088',
        [
            [1, 'Pound']
            [1, 'Poison Gas']
            [4, 'Harden']
            [7, 'Mud Slap']
            [12, 'Disable']
            [15, 'Sludge']
            [18, 'Mud Bomb']
            [21, 'Minimize']
            [26, 'Fling']
            [29, 'Sludge Bomb']
            [32, 'Sludge Wave']
            [37, 'Screech']
            [40, 'Gunk Shot']
            [43, 'Acid Armor']
            [46, 'Belch']
            [48, 'Memento']
        ], //Kanto
        [
            [1, 'Pound']
            [1, 'Poison Gas']
            [4, 'Harden']
            [7, 'Bite']
            [12, 'Disable']
            [15, 'Acid Spray']
            [18, 'Poison Fang']
            [21, 'Minimize']
            [26, 'Fling']
            [29, 'Knock Off']
            [32, 'Crunch']
            [37, 'Screech']
            [40, 'Gunk Shot']
            [43, 'Acid Armor']
            [46, 'Belch']
            [48, 'Memento']
        ], //Alolan
    ], //Grimer

    ['089',
        [
            [0, 'Venom Drench']
            [1, 'Venom Drench']
            [1, 'Pound']
            [1, 'Poison Gas']
            [1, 'Harden']
            [1, 'Mud Slap']
            [4, 'Harden']
            [7, 'Mud Slap']
            [12, 'Disable']
            [15, 'Sludge']
            [18, 'Mud Bomb']
            [21, 'Minimize']
            [26, 'Fling']
            [29, 'Sludge Bomb']
            [32, 'Sludge Wave']
            [37, 'Screech']
            [40, 'Gunk Shot']
            [46, 'Acid Armor']
            [52, 'Belch']
            [57, 'Memento']
        ], //Kanto
        [
            [0, 'Venom Drench']
            [1, 'Venom Drench']
            [1, 'Pound']
            [1, 'Poison Gas']
            [1, 'Harden']
            [1, 'Bite']
            [4, 'Harden']
            [7, 'Bite']
            [12, 'Disable']
            [15, 'Acid Spray']
            [18, 'Poison Fang']
            [21, 'Minimize']
            [26, 'Fling']
            [29, 'Knock Off']
            [32, 'Crunch']
            [37, 'Screech']
            [40, 'Gunk Shot']
            [46, 'Acid Armor']
            [52, 'Belch']
            [57, 'Memento']
        ], //Alolan
    ], //Muk

    ['090',
        [
            [1, 'Tackle']
            [1, 'Water Gun']
            [4, 'Withdraw']
            [8, 'Supersonic']
            [13, 'Icicle Spear']
            [16, 'Protect']
            [20, 'Leer']
            [25, 'Clamp']
            [28, 'Ice Shard']
            [32, 'Razor Shell']
            [37, 'Aurora Beam']
            [40, 'Whirlpool']
            [44, 'Brine']
            [49, 'Iron Defense']
            [52, 'Ice Beam']
            [56, 'Shell Smash']
            [61, 'Hydro Pump']
        ],
    ],

    ['091',
        [
            [1, 'Hydro Pump']
            [1, 'Shell Smash']
            [1, 'Toxic Spikes']
            [1, 'Withdraw']
            [1, 'Supersonic']
            [1, 'Protect']
            [1, 'Aurora Beam']
            [13, 'Spike Cannon']
            [28, 'Spikes']
            [50, 'Icicle Crash']
        ],
    ],

    ['092',
        [
            [1, 'Hypnosis']
            [1, 'Lick']
            [5, 'Spite']
            [8, 'Mean Look']
            [12, 'Curse']
            [15, 'Night Shade']
            [19, 'Confuse Ray']
            [22, 'Sucker Punch']
            [26, 'Payback']
            [29, 'Shadow Ball']
            [33, 'Dream Eater']
            [36, 'Dark Pulse']
            [40, 'Destiny Bond']
            [43, 'Hex']
            [47, 'Nightmare']
        ],
    ],

    ['093',
        [
            [0, 'Shadow Punch']
            [1, 'Shadow Punch']
            [1, 'Hypnosis']
            [1, 'Lick']
            [1, 'Spite']
            [5, 'Spite']
            [8, 'Mean Look']
            [12, 'Curse']
            [15, 'Night Shade']
            [19, 'Confuse Ray']
            [22, 'Sucker Punch']
            [28, 'Payback']
            [33, 'Shadow Ball']
            [39, 'Dream Eater']
            [44, 'Dark Pulse']
            [50, 'Destiny Bond']
            [55, 'Hex']
            [61, 'Nightmare']
        ],
    ],

    ['094',
        [
            [0, 'Shadow Punch']
            [1, 'Shadow Punch']
            [1, 'Hypnosis']
            [1, 'Lick']
            [1, 'Spite']
            [5, 'Spite']
            [8, 'Mean Look']
            [12, 'Curse']
            [15, 'Night Shade']
            [19, 'Confuse Ray']
            [22, 'Sucker Punch']
            [28, 'Payback']
            [33, 'Shadow Ball']
            [39, 'Dream Eater']
            [44, 'Dark Pulse']
            [50, 'Destiny Bond']
            [55, 'Hex']
            [61, 'Nightmare']
        ],
    ],

    ['095',
        [
            [1, 'Mud Sport']
            [1, 'Tackle']
            [1, 'Harden']
            [1, 'Bind']
            [4, 'Curse']
            [7, 'Rock Throw']
            [10, 'Rock Tomb']
            [13, 'Rage']
            [16, 'Stealth Rock']
            [19, 'Rock Polish']
            [20, 'Gyro Ball']
            [22, 'Smack Down']
            [25, 'Dragon Breath']
            [28, 'Slam']
            [31, 'Screech']
            [34, 'Rock Slide']
            [37, 'Sand Tomb']
            [40, 'Iron Tail']
            [43, 'Dig']
            [46, 'Stone Edge']
            [49, 'Double Edge']
            [52, 'Sandstorm']
        ],
    ],

    ['096',
        [
            [1, 'Pound']
            [1, 'Hypnosis']
            [5, 'Disable']
            [9, 'Confusion']
            [13, 'Headbutt']
            [17, 'Poison Gas']
            [21, 'Meditate']
            [25, 'Psybeam']
            [29, 'Wake Up Slap']
            [33, 'Psych Up']
            [37, 'Synchronoise']
            [41, 'Zen Headbutt']
            [45, 'Swagger']
            [49, 'Psychic']
            [53, 'Nasty Plot']
            [57, 'Psyshock']
            [61, 'Future Sight']
        ],
    ],

    ['097',
        [
            [1, 'Future Sight']
            [1, 'Nasty Plot']
            [1, 'Nightmare']
            [1, 'Switcheroo']
            [1, 'Pound']
            [1, 'Hypnosis']
            [1, 'Disable']
            [1, 'Confusion']
            [5, 'Disable']
            [9, 'Confusion']
            [13, 'Headbutt']
            [17, 'Poison Gas']
            [21, 'Meditate']
            [25, 'Psybeam']
            [29, 'Wake Up Slap']
            [33, 'Psych Up']
            [37, 'Synchronoise']
            [41, 'Zen Headbutt']
            [45, 'Swagger']
            [49, 'Psychic']
            [53, 'Nasty Plot']
            [57, 'Psyshock']
            [61, 'Future Sight']
        ],
    ],

    ['098',
        [
            [1, 'Mud Sport']
            [1, 'Bubble']
            [5, 'Vice Grip']
            [9, 'Leer']
            [11, 'Harden']
            [15, 'Bubble Beam']
            [19, 'Mud Shot']
            [21, 'Metal Claw']
            [25, 'Stomp']
            [29, 'Protect']
            [31, 'Guillotine']
            [35, 'Slam']
            [39, 'Brine']
            [41, 'Crabhammer']
            [45, 'Flail']
        ],
    ],

    ['099',
        [
            [1, 'Wide Guard']
            [1, 'Mud Sport']
            [1, 'Bubble']
            [1, 'Vice Grip']
            [1, 'Leer']
            [5, 'Vice Grip']
            [9, 'Leer']
            [11, 'Harden']
            [15, 'Bubble Beam']
            [19, 'Mud Shot']
            [21, 'Metal Claw']
            [25, 'Stomp']
            [32, 'Protect']
            [37, 'Guillotine']
            [44, 'Slam']
            [51, 'Brine']
            [56, 'Crabhammer']
            [63, 'Flail']
        ],
    ],

    ['100',
        [
            [1, 'Charge']
            [1, 'Tackle']
            [4, 'Sonic Boom']
            [6, 'Eerie Impulse']
            [9, 'Spark']
            [11, 'Rollout']
            [13, 'Screech']
            [16, 'Charge Beam']
            [20, 'Swift']
            [22, 'Electro Ball']
            [26, 'Self Destruct']
            [29, 'Light Screen']
            [34, 'Magnet Rise']
            [37, 'Discharge']
            [41, 'Explosion']
            [46, 'Gyro Ball']
            [48, 'Mirror Coat']
        ],
    ],

    ['101',
        [
            [1, 'Magnetic Flux']
            [1, 'Charge']
            [1, 'Tackle']
            [1, 'Sonic Boom']
            [1, 'Eerie Impulse']
            [4, 'Sonic Boom']
            [6, 'Eerie Impulse']
            [9, 'Spark']
            [11, 'Rollout']
            [13, 'Screech']
            [16, 'Charge Beam']
            [20, 'Swift']
            [22, 'Electro Ball']
            [26, 'Self Destruct']
            [29, 'Light Screen']
            [36, 'Magnet Rise']
            [41, 'Discharge']
            [47, 'Explosion']
            [54, 'Gyro Ball']
            [58, 'Mirror Coat']
        ],
    ],

    ['102',
        [
            [1, 'Barrage']
            [1, 'Uproar']
            [1, 'Hypnosis']
            [7, 'Reflect']
            [11, 'Leech Seed']
            [17, 'Bullet Seed']
            [19, 'Stun Spore']
            [21, 'Poison Powder']
            [23, 'Sleep Powder']
            [27, 'Confusion']
            [33, 'Worry Seed']
            [37, 'Natural Gift']
            [43, 'Solar Beam']
            [47, 'Extrasensory']
            [50, 'Bestow']
        ],
    ],

    ['103',
        [
            [0, 'Stomp']
            [1, 'Stomp']
            [1, 'Seed Bomb']
            [1, 'Barrage']
            [1, 'Hypnosis']
            [1, 'Confusion']
            [17, 'Psyshock']
            [27, 'Egg Bomb']
            [37, 'Wood Hammer']
            [47, 'Leaf Storm']
        ], //Kanto
        [
            [0, 'Dragon Hammer']
            [1, 'Dragon Hammer']
            [1, 'Seed Bomb']
            [1, 'Barrage']
            [1, 'Hypnosis']
            [1, 'Confusion']
            [17, 'Psyshock']
            [27, 'Egg Bomb']
            [37, 'Wood Hammer']
            [47, 'Leaf Storm']
        ], //Alolan
    ], //Exeggutor

    ['104',
        [
            [1, 'Growl']
            [3, 'Tail Whip']
            [7, 'Bone Club']
            [11, 'Headbutt']
            [13, 'Leer']
            [17, 'Focus Energy']
            [21, 'Bonemerang']
            [23, 'Rage']
            [27, 'False Swipe']
            [31, 'Thrash']
            [33, 'Fling']
            [37, 'Stomping Tantrum']
            [41, 'Endeavor']
            [43, 'Double Edge']
            [47, 'Retaliate']
            [51, 'Bone Rush']
        ],
    ],

    ['105',
        [
            [1, 'Growl']
            [1, 'Tail Whip']
            [1, 'Bone Club']
            [1, 'Headbutt']
            [3, 'Tail Whip']
            [7, 'Bone Club']
            [11, 'Headbutt']
            [13, 'Leer']
            [17, 'Focus Energy']
            [21, 'Bonemerang']
            [23, 'Rage']
            [27, 'False Swipe']
            [33, 'Thrash']
            [37, 'Fling']
            [43, 'Stomping Tantrum']
            [49, 'Endeavor']
            [53, 'Double Edge']
            [59, 'Retaliate']
            [65, 'Bone Rush']
        ], //Kanto
        [
            [1, 'Growl']
            [1, 'Tail Whip']
            [1, 'Bone Club']
            [1, 'Flame Wheel']
            [3, 'Tail Whip']
            [7, 'Bone Club']
            [11, 'Flame Wheel']
            [13, 'Leer']
            [17, 'Hex']
            [21, 'Bonemerang']
            [23, 'Will O Wisp']
            [27, 'Shadow Bone']
            [33, 'Thrash']
            [37, 'Fling']
            [43, 'Stomping Tantrum']
            [49, 'Endeavor']
            [53, 'Flare Blitz']
            [59, 'Retaliate']
            [65, 'Bone Rush']
        ], //Alolan
    ], //Marowak

    ['106',
        [
            [0, 'Double Kick']
            [1, 'Double Kick']
            [1, 'Reversal']
            [1, 'Close Combat']
            [1, 'Mega Kick']
            [1, 'Revenge']
            [1, 'Meditate']
            [1, 'Rolling Kick']
            [1, 'Jump Kick']
            [5, 'Meditate']
            [9, 'Rolling Kick']
            [13, 'Jump Kick']
            [17, 'Brick Break']
            [21, 'Focus Energy']
            [25, 'Feint']
            [29, 'High Jump Kick']
            [33, 'Mind Reader']
            [37, 'Foresight']
            [41, 'Wide Guard']
            [45, 'Blaze Kick']
            [49, 'Endure']
            [53, 'Mega Kick']
            [57, 'Close Combat']
            [61, 'Reversal']
        ],
    ],

    ['107',
        [
            [0, 'Comet Punch']
            [1, 'Comet Punch']
            [1, 'Close Combat']
            [1, 'Counter']
            [1, 'Focus Punch']
            [1, 'Revenge']
            [1, 'Agility']
            [1, 'Pursuit']
            [1, 'Mach Punch']
            [6, 'Agility']
            [11, 'Pursuit']
            [16, 'Mach Punch']
            [16, 'Bullet Punch']
            [21, 'Feint']
            [26, 'Vacuum Wave']
            [31, 'Quick Guard']
            [36, 'Thunder Punch']
            [36, 'Ice Punch']
            [36, 'Fire Punch']
            [41, 'Sky Uppercut']
            [46, 'Mega Punch']
            [50, 'Detect']
            [56, 'Focus Punch']
            [61, 'Counter']
            [66, 'Close Combat']
        ],
    ],

    ['108',
        [
            [1, 'Lick']
            [5, 'Supersonic']
            [9, 'Defense Curl']
            [13, 'Knock Off']
            [17, 'Wrap']
            [21, 'Stomp']
            [25, 'Disable']
            [29, 'Slam']
            [33, 'Rollout']
            [37, 'Chip Away']
            [41, 'Me First']
            [45, 'Refresh']
            [49, 'Screech']
            [53, 'Power Whip']
            [57, 'Wring Out']
        ],
    ],

    ['109',
        [
            [1, 'Poison Gas']
            [1, 'Tackle']
            [4, 'Smog']
            [7, 'Smokescreen']
            [12, 'Assurance']
            [15, 'Clear Smog']
            [18, 'Sludge']
            [23, 'Self Destruct']
            [26, 'Haze']
            [29, 'Gyro Ball']
            [34, 'Sludge Bomb']
            [37, 'Explosion']
            [40, 'Destiny Bond']
            [42, 'Belch']
            [45, 'Memento']
        ],
    ],

    ['110',
        [
            [0, 'Double Hit']
            [1, 'Double Hit']
            [1, 'Poison Gas']
            [1, 'Tackle']
            [1, 'Smog']
            [1, 'Smokescreen']
            [4, 'Smog']
            [7, 'Smokescreen']
            [12, 'Assurance']
            [15, 'Clear Smog']
            [18, 'Sludge']
            [23, 'Self Destruct']
            [26, 'Haze']
            [29, 'Gyro Ball']
            [34, 'Sludge Bomb']
            [40, 'Explosion']
            [46, 'Destiny Bond']
            [51, 'Belch']
            [57, 'Memento']
        ], //Kanto
        [
            [0, 'Double Hit']
            [1, 'Double Hit']
            [1, 'Strange Steam']
            [1, 'Defog']
            [1, 'Heat Wave']
            [1, 'Smog']
            [1, 'Smokescreen']
            [1, 'Haze']
            [1, 'Poison Gas']
            [1, 'Tackle']
            [1, 'Fairy Wind']
            [1, 'Aromatic Mist']
            [12, 'Clear Smog']
            [16, 'Assurance']
            [20, 'Sludge']
            [24, 'Aromatherapy']
            [28, 'Self Destruct']
            [32, 'Sludge Bomb']
            [38, 'Toxic']
            [44, 'Belch']
            [50, 'Explosion']
            [56, 'Memento']
            [62, 'Destiny Bond']
            [68, 'Misty Terrain']
        ], //Galarian
    ], //Weezing

    ['111',
        [
            [1, 'Horn Attack']
            [1, 'Tail Whip']
            [5, 'Fury Attack']
            [9, 'Scary Face']
            [13, 'Smack Down']
            [17, 'Stomp']
            [21, 'Bulldoze']
            [25, 'Chip Away']
            [29, 'Rock Blast']
            [33, 'Drill Run']
            [37, 'Take Down']
            [41, 'Stone Edge']
            [45, 'Earthquake']
            [49, 'Megahorn']
            [53, 'Horn Drill']
        ],
    ],

    ['112',
        [
            [0, 'Hammer Arm']
            [1, 'Hammer Arm']
            [1, 'Horn Drill']
            [1, 'Horn Attack']
            [1, 'Tail Whip']
            [1, 'Fury Attack']
            [1, 'Scary Face']
            [5, 'Fury Attack']
            [9, 'Scary Face']
            [13, 'Smack Down']
            [17, 'Stomp']
            [21, 'Bulldoze']
            [25, 'Chip Away']
            [29, 'Rock Blast']
            [33, 'Drill Run']
            [37, 'Take Down']
            [41, 'Stone Edge']
            [48, 'Earthquake']
            [55, 'Megahorn']
            [62, 'Horn Drill']
        ],
    ],

    ['113',
        [
            [1, 'Double Edge']
            [1, 'Defense Curl']
            [1, 'Pound']
            [1, 'Growl']
            [5, 'Tail Whip']
            [9, 'Refresh']
            [12, 'Double Slap']
            [16, 'Soft Boiled']
            [20, 'Bestow']
            [23, 'Minimize']
            [27, 'Take Down']
            [31, 'Sing']
            [35, 'Fling']
            [39, 'Heal Pulse']
            [44, 'Egg Bomb']
            [50, 'Light Screen']
            [57, 'Healing Wish']
            [65, 'Double Edge']
        ],
    ],

    ['114',
        [
            [1, 'Ingrain']
            [1, 'Constrict']
            [4, 'Sleep Powder']
            [7, 'Vine Whip']
            [10, 'Absorb']
            [14, 'Poison Powder']
            [17, 'Bind']
            [20, 'Growth']
            [23, 'Mega Drain']
            [27, 'Knock Off']
            [30, 'Stun Spore']
            [33, 'Natural Gift']
            [36, 'Giga Drain']
            [38, 'Ancient Power']
            [41, 'Slam']
            [44, 'Tickle']
            [46, 'Wring Out']
            [48, 'Grassy Terrain']
            [50, 'Power Whip']
        ],
    ],

    ['115',
        [
            [1, 'Comet Punch']
            [1, 'Leer']
            [7, 'Fake Out']
            [10, 'Tail Whip']
            [13, 'Bite']
            [19, 'Double Hit']
            [22, 'Rage']
            [25, 'Mega Punch']
            [31, 'Chip Away']
            [34, 'Dizzy Punch']
            [37, 'Crunch']
            [43, 'Endure']
            [46, 'Outrage']
            [49, 'Sucker Punch']
            [50, 'Reversal']
        ],
    ],

    ['116',
        [
            [1, 'Bubble']
            [5, 'Smokescreen']
            [9, 'Leer']
            [13, 'Water Gun']
            [17, 'Twister']
            [21, 'Bubble Beam']
            [26, 'Focus Energy']
            [31, 'Brine']
            [36, 'Agility']
            [41, 'Dragon Pulse']
            [46, 'Dragon Dance']
            [52, 'Hydro Pump']
        ],
    ],

    ['117',
        [
            [1, 'Hydro Pump']
            [1, 'Bubble']
            [1, 'Smokescreen']
            [1, 'Leer']
            [1, 'Water Gun']
            [5, 'Smokescreen']
            [9, 'Leer']
            [13, 'Water Gun']
            [17, 'Twister']
            [21, 'Bubble Beam']
            [26, 'Focus Energy']
            [31, 'Brine']
            [38, 'Agility']
            [45, 'Dragon Pulse']
            [52, 'Dragon Dance']
            [60, 'Hydro Pump']
        ],
    ],

    ['118',
        [
            [1, 'Peck']
            [1, 'Tail Whip']
            [1, 'Water Sport']
            [5, 'Supersonic']
            [8, 'Horn Attack']
            [13, 'Flail']
            [16, 'Water Pulse']
            [21, 'Aqua Ring']
            [24, 'Fury Attack']
            [29, 'Agility']
            [32, 'Waterfall']
            [37, 'Horn Drill']
            [40, 'Soak']
            [45, 'Megahorn']
        ],
    ],

    ['119',
        [
            [1, 'Megahorn']
            [1, 'Poison Jab']
            [1, 'Peck']
            [1, 'Tail Whip']
            [1, 'Water Sport']
            [1, 'Supersonic']
            [5, 'Supersonic']
            [8, 'Horn Attack']
            [13, 'Flail']
            [16, 'Water Pulse']
            [21, 'Aqua Ring']
            [24, 'Fury Attack']
            [29, 'Agility']
            [32, 'Waterfall']
            [40, 'Horn Drill']
            [46, 'Soak']
            [54, 'Megahorn']
        ],
    ],

    ['120',
        [
            [1, 'Tackle']
            [1, 'Harden']
            [4, 'Water Gun']
            [7, 'Rapid Spin']
            [10, 'Recover']
            [13, 'Psywave']
            [16, 'Swift']
            [18, 'Bubble Beam']
            [22, 'Camouflage']
            [24, 'Gyro Ball']
            [28, 'Brine']
            [31, 'Minimize']
            [35, 'Reflect Type']
            [37, 'Power Gem']
            [40, 'Confuse Ray']
            [42, 'Psychic']
            [46, 'Light Screen']
            [49, 'Cosmic Power']
            [53, 'Hydro Pump']
        ],
    ],

    ['121',
        [
            [1, 'Hydro Pump']
            [1, 'Spotlight']
            [1, 'Water Gun']
            [1, 'Rapid Spin']
            [1, 'Recover']
            [1, 'Swift']
            [40, 'Confuse Ray']
        ],
    ],

    ['122',
        [
            [1, 'Misty Terrain']
            [1, 'Magical Leaf']
            [1, 'Quick Guard']
            [1, 'Wide Guard']
            [1, 'Power Swap']
            [1, 'Guard Swap']
            [1, 'Barrier']
            [1, 'Pound']
            [1, 'Confusion']
            [4, 'Copycat']
            [8, 'Meditate']
            [11, 'Double Slap']
            [15, 'Mimic']
            [15, 'Psywave']
            [18, 'Encore']
            [22, 'Light Screen']
            [22, 'Reflect']
            [25, 'Psybeam']
            [29, 'Substitute']
            [32, 'Recycle']
            [36, 'Trick']
            [39, 'Psychic']
            [43, 'Role Play']
            [46, 'Baton Pass']
            [50, 'Safeguard']
        ], //Kanto
        [
            [1, 'Copycat']
            [1, 'Encore']
            [1, 'Role Play']
            [1, 'Protect']
            [1, 'Recycle']
            [1, 'Mimic']
            [1, 'Light Screen']
            [1, 'Reflect']
            [1, 'Safeguard']
            [1, 'Dazzling Gleam']
            [1, 'Misty Terrain']
            [1, 'Pound']
            [1, 'Rapid Spin']
            [1, 'Baton Pass']
            [1, 'Ice Shard']
            [12, 'Confusion']
            [16, 'Ally Switch']
            [20, 'Icy Wind']
            [24, 'Double Kick']
            [28, 'Psybeam']
            [32, 'Hypnosis']
            [36, 'Mirror Coat']
            [40, 'Sucker Punch']
            [44, 'Freeze Dry']
            [48, 'Psychic']
            [52, 'Teeter Dance']
        ], //Galarian
    ], //Mr. Mime

    ['123',
        [
            [1, 'Vacuum Wave']
            [1, 'Quick Attack']
            [1, 'Leer']
            [5, 'Focus Energy']
            [9, 'Pursuit']
            [13, 'False Swipe']
            [17, 'Agility']
            [21, 'Wing Attack']
            [25, 'Fury Cutter']
            [29, 'Slash']
            [33, 'Razor Wind']
            [37, 'Double Team']
            [41, 'X Scissor']
            [45, 'Night Slash']
            [49, 'Double Hit']
            [50, 'Air Slash']
            [57, 'Swords Dance']
            [61, 'Feint']
        ],
    ],

    ['124',
        [
            [1, 'Draining Kiss']
            [1, 'Perish Song']
            [1, 'Pound']
            [1, 'Lick']
            [1, 'Lovely Kiss']
            [1, 'Powder Snow']
            [5, 'Lick']
            [8, 'Lovely Kiss']
            [11, 'Powder Snow']
            [15, 'Double Slap']
            [18, 'Ice Punch']
            [21, 'Heart Stamp']
            [25, 'Mean Look']
            [28, 'Fake Tears']
            [33, 'Wake Up Slap']
            [39, 'Avalanche']
            [44, 'Body Slam']
            [49, 'Wring Out']
            [55, 'Perish Song']
            [60, 'Blizzard']
        ],
    ],

    ['125',
        [
            [1, 'Quick Attack']
            [1, 'Leer']
            [1, 'Thunder Shock']
            [5, 'Thunder Shock']
            [8, 'Low Kick']
            [12, 'Swift']
            [15, 'Shock Wave']
            [19, 'Thunder Wave']
            [22, 'Electro Ball']
            [26, 'Light Screen']
            [29, 'Thunder Punch']
            [36, 'Discharge']
            [42, 'Screech']
            [49, 'Thunderbolt']
            [55, 'Thunder']
        ],
    ],

    ['126',
        [
            [1, 'Smog']
            [1, 'Leer']
            [1, 'Ember']
            [5, 'Ember']
            [8, 'Smokescreen']
            [12, 'Feint Attack']
            [15, 'Fire Spin']
            [19, 'Clear Smog']
            [22, 'Flame Burst']
            [26, 'Confuse Ray']
            [29, 'Fire Punch']
            [36, 'Lava Plume']
            [42, 'Sunny Day']
            [49, 'Flamethrower']
            [55, 'Fire Blast']
        ],
    ],

    ['127',
        [
            [1, 'Vice Grip']
            [1, 'Focus Energy']
            [4, 'Bind']
            [8, 'Seismic Toss']
            [11, 'Harden']
            [15, 'Revenge']
            [18, 'Vital Throw']
            [22, 'Double Hit']
            [26, 'Brick Break']
            [29, 'X Scissor']
            [33, 'Submission']
            [36, 'Storm Throw']
            [40, 'Swords Dance']
            [43, 'Thrash']
            [47, 'Superpower']
            [50, 'Guillotine']
        ],
    ],

    ['128',
        [
            [1, 'Tackle']
            [3, 'Tail Whip']
            [5, 'Rage']
            [8, 'Horn Attack']
            [11, 'Scary Face']
            [15, 'Pursuit']
            [19, 'Rest']
            [24, 'Payback']
            [29, 'Work Up']
            [35, 'Take Down']
            [41, 'Zen Headbutt']
            [48, 'Swagger']
            [55, 'Thrash']
            [63, 'Double Edge']
            [71, 'Giga Impact']
        ],
    ],

    ['129',
        [
            [1, 'Splash']
            [15, 'Tackle']
            [30, 'Flail']
        ],
    ],

    ['130',
        [
            [0, 'Bite']
            [1, 'Bite']
            [1, 'Thrash']
            [21, 'Leer']
            [24, 'Twister']
            [27, 'Ice Fang']
            [30, 'Aqua Tail']
            [33, 'Scary Face']
            [36, 'Dragon Rage']
            [39, 'Crunch']
            [42, 'Hydro Pump']
            [45, 'Dragon Dance']
            [48, 'Hurricane']
            [51, 'Rain Dance']
            [54, 'Hyper Beam']
        ],
    ],

    ['131',
        [
            [1, 'Sing']
            [1, 'Growl']
            [1, 'Water Gun']
            [4, 'Mist']
            [7, 'Confuse Ray']
            [10, 'Ice Shard']
            [14, 'Water Pulse']
            [18, 'Body Slam']
            [22, 'Rain Dance']
            [27, 'Perish Song']
            [32, 'Ice Beam']
            [37, 'Brine']
            [43, 'Safeguard']
            [47, 'Hydro Pump']
            [50, 'Sheer Cold']
        ],
    ],

    ['132',
        [
            [1, 'Transform']
        ],
    ],

    ['133',
        [
            [1, 'Covet']
            [1, 'Helping Hand']
            [1, 'Growl']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [5, 'Sand Attack']
            [9, 'Baby Doll Eyes']
            [13, 'Quick Attack']
            [17, 'Bite']
            [17, 'Swift']
            [20, 'Refresh']
            [25, 'Take Down']
            [29, 'Charm']
            [33, 'Baton Pass']
            [37, 'Double Edge']
            [41, 'Last Resort']
            [45, 'Trump Card']
        ],
    ],

    ['134',
        [
            [0, 'Water Gun']
            [1, 'Water Gun']
            [1, 'Helping Hand']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [5, 'Sand Attack']
            [9, 'Baby Doll Eyes']
            [13, 'Quick Attack']
            [17, 'Water Pulse']
            [20, 'Aurora Beam']
            [25, 'Aqua Ring']
            [29, 'Acid Armor']
            [33, 'Haze']
            [37, 'Muddy Water']
            [41, 'Last Resort']
            [45, 'Hydro Pump']
        ],
    ],

    ['135',
        [
            [0, 'Thunder Shock']
            [1, 'Thunder Shock']
            [1, 'Helping Hand']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [5, 'Sand Attack']
            [9, 'Baby Doll Eyes']
            [13, 'Quick Attack']
            [17, 'Double Kick']
            [20, 'Thunder Fang']
            [25, 'Pin Missile']
            [29, 'Agility']
            [33, 'Thunder Wave']
            [37, 'Discharge']
            [41, 'Last Resort']
            [45, 'Thunder']
        ],
    ],

    ['136',
        [
            [0, 'Ember']
            [1, 'Ember']
            [1, 'Helping Hand']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [5, 'Sand Attack']
            [9, 'Baby Doll Eyes']
            [13, 'Quick Attack']
            [17, 'Bite']
            [20, 'Fire Fang']
            [25, 'Fire Spin']
            [29, 'Scary Face']
            [33, 'Smog']
            [37, 'Lava Plume']
            [41, 'Last Resort']
            [45, 'Flare Blitz']
        ],
    ],

    ['137',
        [
            [1, 'Conversion 2']
            [1, 'Tackle']
            [1, 'Conversion']
            [1, 'Sharpen']
            [7, 'Psybeam']
            [12, 'Agility']
            [18, 'Recover']
            [23, 'Magnet Rise']
            [29, 'Signal Beam']
            [34, 'Recycle']
            [40, 'Discharge']
            [45, 'Lock On']
            [50, 'Tri Attack']
            [56, 'Magic Coat']
            [62, 'Zap Cannon']
        ],
    ],

    ['138',
        [
            [1, 'Constrict']
            [1, 'Withdraw']
            [7, 'Bite']
            [10, 'Water Gun']
            [16, 'Rollout']
            [19, 'Leer']
            [25, 'Mud Shot']
            [28, 'Brine']
            [34, 'Protect']
            [37, 'Ancient Power']
            [43, 'Tickle']
            [46, 'Rock Blast']
            [50, 'Shell Smash']
            [55, 'Hydro Pump']
        ],
    ],

    ['139',
        [
            [0, 'Spike Cannon']
            [1, 'Spike Cannon']
            [1, 'Hydro Pump']
            [1, 'Constrict']
            [1, 'Withdraw']
            [1, 'Bite']
            [7, 'Bite']
            [10, 'Water Gun']
            [16, 'Rollout']
            [19, 'Leer']
            [25, 'Mud Shot']
            [28, 'Brine']
            [34, 'Protect']
            [37, 'Ancient Power']
            [48, 'Tickle']
            [56, 'Rock Blast']
            [67, 'Shell Smash']
            [75, 'Hydro Pump']
        ],
    ],

    ['140',
        [
            [1, 'Scratch']
            [1, 'Harden']
            [6, 'Absorb']
            [11, 'Leer']
            [16, 'Mud Shot']
            [21, 'Sand Attack']
            [26, 'Endure']
            [31, 'Aqua Jet']
            [36, 'Mega Drain']
            [41, 'Metal Sound']
            [46, 'Ancient Power']
            [50, 'Wring Out']
        ],
    ],

    ['141',
        [
            [0, 'Slash']
            [1, 'Slash']
            [1, 'Night Slash']
            [1, 'Feint']
            [1, 'Scratch']
            [1, 'Harden']
            [1, 'Absorb']
            [1, 'Leer']
            [6, 'Absorb']
            [11, 'Leer']
            [16, 'Mud Shot']
            [21, 'Sand Attack']
            [26, 'Endure']
            [31, 'Aqua Jet']
            [36, 'Mega Drain']
            [45, 'Metal Sound']
            [54, 'Ancient Power']
            [63, 'Wring Out']
            [72, 'Night Slash']
        ],
    ],

    ['142',
        [
            [1, 'Iron Head']
            [1, 'Ice Fang']
            [1, 'Fire Fang']
            [1, 'Thunder Fang']
            [1, 'Wing Attack']
            [1, 'Supersonic']
            [1, 'Bite']
            [1, 'Scary Face']
            [9, 'Roar']
            [17, 'Agility']
            [25, 'Ancient Power']
            [33, 'Crunch']
            [41, 'Take Down']
            [49, 'Sky Drop']
            [57, 'Iron Head']
            [65, 'Hyper Beam']
            [73, 'Rock Slide']
            [81, 'Giga Impact']
        ],
    ],

    ['143',
        [
            [1, 'Tackle']
            [4, 'Defense Curl']
            [9, 'Amnesia']
            [12, 'Lick']
            [17, 'Chip Away']
            [20, 'Yawn']
            [25, 'Body Slam']
            [28, 'Rest']
            [28, 'Snore']
            [33, 'Sleep Talk']
            [35, 'Giga Impact']
            [36, 'Rollout']
            [41, 'Block']
            [44, 'Belly Drum']
            [49, 'Crunch']
            [50, 'Heavy Slam']
            [57, 'High Horsepower']
        ],
    ],

    ['144',
        [
            [1, 'Gust']
            [1, 'Powder Snow']
            [8, 'Mist']
            [15, 'Ice Shard']
            [22, 'Mind Reader']
            [29, 'Ancient Power']
            [36, 'Agility']
            [43, 'Freeze Dry']
            [50, 'Reflect']
            [57, 'Hail']
            [64, 'Tailwind']
            [71, 'Ice Beam']
            [78, 'Blizzard']
            [85, 'Roost']
            [92, 'Hurricane']
            [99, 'Sheer Cold']
        ], //Kanto
        [
            [1, 'Gust']
            [1, 'Psycho Shift']
            [5, 'Confusion']
            [10, 'Reflect']
            [15, 'Hypnosis']
            [20, 'Agility']
            [25, 'Ancient Power']
            [30, 'Tailwind']
            [35, 'Psycho Cut']
            [40, 'Recover']
            [45, 'Freezing Glare']
            [50, 'Dream Eater']
            [55, 'Hurricane']
            [60, 'Mind Reader']
            [65, 'Future Sight']
            [70, 'Trick Room']
        ], //Galarian
    ], //Articuno

    ['145',
        [
            [1, 'Peck']
            [1, 'Thunder Shock']
            [8, 'Thunder Wave']
            [15, 'Detect']
            [22, 'Pluck']
            [29, 'Ancient Power']
            [36, 'Charge']
            [43, 'Agility']
            [50, 'Discharge']
            [57, 'Rain Dance']
            [64, 'Light Screen']
            [71, 'Drill Peck']
            [78, 'Thunder']
            [85, 'Roost']
            [92, 'Magnetic Flux']
            [99, 'Zap Cannon']
        ], //Kanto
        [
            [1, 'Peck']
            [1, 'Focus Energy']
            [5, 'Rock Smash']
            [10, 'Light Screen']
            [15, 'Pluck']
            [20, 'Agility']
            [25, 'Ancient Power']
            [30, 'Brick Break']
            [35, 'Drill Peck']
            [40, 'Quick Guard']
            [45, 'Thunderous Kick']
            [50, 'Bulk Up']
            [55, 'Counter']
            [60, 'Detect']
            [65, 'Close Combat']
            [70, 'Reversal']
        ], //Galarian
    ], //Zapdos

    ['146',
        [
            [1, 'Wing Attack']
            [1, 'Ember']
            [8, 'Fire Spin']
            [15, 'Agility']
            [22, 'Endure']
            [29, 'Ancient Power']
            [36, 'Flamethrower']
            [43, 'Safeguard']
            [50, 'Air Slash']
            [57, 'Sunny Day']
            [64, 'Heat Wave']
            [71, 'Solar Beam']
            [78, 'Sky Attack']
            [85, 'Roost']
            [92, 'Hurricane']
            [99, 'Burn Up']
        ], //Kanto
        [
            [1, 'Gust']
            [1, 'Leer']
            [5, 'Payback']
            [10, 'Safeguard']
            [15, 'Wing Attack']
            [20, 'Agility']
            [25, 'Ancient Power']
            [30, 'Sucker Punch']
            [35, 'Air Slash']
            [40, 'After You']
            [45, 'Fiery Wrath']
            [50, 'Nasty Plot']
            [55, 'Hurricane']
            [60, 'Endure']
            [65, 'Memento']
            [70, 'Sky Attack']
        ], //Galarian
    ], //Moltres

    ['147',
        [
            [1, 'Wrap']
            [1, 'Leer']
            [5, 'Thunder Wave']
            [11, 'Twister']
            [15, 'Dragon Rage']
            [21, 'Slam']
            [25, 'Agility']
            [31, 'Dragon Tail']
            [35, 'Aqua Tail']
            [41, 'Dragon Rush']
            [45, 'Safeguard']
            [51, 'Dragon Dance']
            [55, 'Outrage']
            [61, 'Hyper Beam']
        ],
    ],

    ['148',
        [
            [1, 'Wrap']
            [1, 'Leer']
            [1, 'Thunder Wave']
            [1, 'Twister']
            [5, 'Thunder Wave']
            [11, 'Twister']
            [15, 'Dragon Rage']
            [21, 'Slam']
            [25, 'Agility']
            [33, 'Dragon Tail']
            [39, 'Aqua Tail']
            [47, 'Dragon Rush']
            [53, 'Safeguard']
            [61, 'Dragon Dance']
            [67, 'Outrage']
            [75, 'Hyper Beam']
        ],
    ],

    ['149',
        [
            [0, 'Wing Attack']
            [1, 'Wing Attack']
            [1, 'Hurricane']
            [1, 'Fire Punch']
            [1, 'Thunder Punch']
            [1, 'Roost']
            [1, 'Wrap']
            [1, 'Leer']
            [1, 'Thunder Wave']
            [1, 'Twister']
            [5, 'Thunder Wave']
            [11, 'Twister']
            [15, 'Dragon Rage']
            [21, 'Slam']
            [25, 'Agility']
            [33, 'Dragon Tail']
            [39, 'Aqua Tail']
            [47, 'Dragon Rush']
            [53, 'Safeguard']
            [61, 'Dragon Dance']
            [67, 'Outrage']
            [75, 'Hyper Beam']
            [81, 'Hurricane']
        ],
    ],

    ['150',
        [
            [1, 'Laser Focus']
            [1, 'Psywave']
            [1, 'Confusion']
            [1, 'Disable']
            [1, 'Safeguard']
            [8, 'Swift']
            [15, 'Future Sight']
            [22, 'Psych Up']
            [29, 'Miracle Eye']
            [36, 'Psycho Cut']
            [43, 'Power Swap']
            [43, 'Guard Swap']
            [50, 'Recover']
            [57, 'Psychic']
            [64, 'Barrier']
            [70, 'Aura Sphere']
            [79, 'Amnesia']
            [86, 'Mist']
            [93, 'Me First']
            [100, 'Psystrike']
        ],
    ],

    ['151',
        [
            [1, 'Pound']
            [1, 'Reflect Type']
            [1, 'Transform']
            [10, 'Mega Punch']
            [20, 'Metronome']
            [30, 'Psychic']
            [40, 'Barrier']
            [50, 'Ancient Power']
            [60, 'Amnesia']
            [70, 'Me First']
            [80, 'Baton Pass']
            [90, 'Nasty Plot']
            [100, 'Aura Sphere']
        ],
    ],

    ['152',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [6, 'Razor Leaf']
            [9, 'Poison Powder']
            [12, 'Synthesis']
            [17, 'Reflect']
            [20, 'Magical Leaf']
            [23, 'Natural Gift']
            [28, 'Sweet Scent']
            [31, 'Light Screen']
            [34, 'Body Slam']
            [39, 'Safeguard']
            [42, 'Aromatherapy']
            [45, 'Solar Beam']
        ],
    ],

    ['153',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Razor Leaf']
            [1, 'Poison Powder']
            [6, 'Razor Leaf']
            [9, 'Poison Powder']
            [12, 'Synthesis']
            [18, 'Reflect']
            [22, 'Magical Leaf']
            [26, 'Natural Gift']
            [32, 'Sweet Scent']
            [36, 'Light Screen']
            [40, 'Body Slam']
            [46, 'Safeguard']
            [50, 'Aromatherapy']
            [54, 'Solar Beam']
        ],
    ],

    ['154',
        [
            [0, 'Petal Dance']
            [1, 'Petal Dance']
            [1, 'Petal Blizzard']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Razor Leaf']
            [1, 'Poison Powder']
            [6, 'Razor Leaf']
            [9, 'Poison Powder']
            [12, 'Synthesis']
            [18, 'Reflect']
            [22, 'Magical Leaf']
            [26, 'Natural Gift']
            [34, 'Sweet Scent']
            [40, 'Light Screen']
            [46, 'Body Slam']
            [54, 'Safeguard']
            [60, 'Aromatherapy']
            [66, 'Solar Beam']
            [70, 'Petal Blizzard']
        ],
    ],

    ['155',
        [
            [1, 'Tackle']
            [1, 'Leer']
            [6, 'Smokescreen']
            [10, 'Ember']
            [13, 'Quick Attack']
            [19, 'Flame Wheel']
            [22, 'Defense Curl']
            [28, 'Flame Charge']
            [31, 'Swift']
            [37, 'Lava Plume']
            [40, 'Flamethrower']
            [46, 'Inferno']
            [49, 'Rollout']
            [55, 'Double Edge']
            [58, 'Burn Up']
            [64, 'Eruption']
        ],
    ],

    ['156',
        [
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Smokescreen']
            [6, 'Smokescreen']
            [10, 'Ember']
            [13, 'Quick Attack']
            [20, 'Flame Wheel']
            [24, 'Defense Curl']
            [31, 'Swift']
            [35, 'Flame Charge']
            [42, 'Lava Plume']
            [46, 'Flamethrower']
            [53, 'Inferno']
            [57, 'Rollout']
            [64, 'Double Edge']
            [68, 'Burn Up']
            [75, 'Eruption']
        ],
    ],

    ['157',
        [
            [1, 'Eruption']
            [1, 'Double Edge']
            [1, 'Gyro Ball']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Smokescreen']
            [1, 'Ember']
            [6, 'Smokescreen']
            [10, 'Ember']
            [13, 'Quick Attack']
            [20, 'Flame Wheel']
            [24, 'Defense Curl']
            [31, 'Swift']
            [35, 'Flame Charge']
            [43, 'Lava Plume']
            [48, 'Flamethrower']
            [56, 'Inferno']
            [61, 'Rollout']
            [69, 'Double Edge']
            [74, 'Burn Up']
            [82, 'Eruption']
        ],
    ],

    ['158',
        [
            [1, 'Scratch']
            [1, 'Leer']
            [6, 'Water Gun']
            [8, 'Rage']
            [13, 'Bite']
            [15, 'Scary Face']
            [20, 'Ice Fang']
            [22, 'Flail']
            [27, 'Crunch']
            [29, 'Chip Away']
            [34, 'Slash']
            [36, 'Screech']
            [41, 'Thrash']
            [43, 'Aqua Tail']
            [48, 'Superpower']
            [50, 'Hydro Pump']
        ],
    ],

    ['159',
        [
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Water Gun']
            [6, 'Water Gun']
            [8, 'Rage']
            [13, 'Bite']
            [15, 'Scary Face']
            [21, 'Ice Fang']
            [24, 'Flail']
            [30, 'Crunch']
            [33, 'Chip Away']
            [39, 'Slash']
            [42, 'Screech']
            [48, 'Thrash']
            [51, 'Aqua Tail']
            [57, 'Superpower']
            [60, 'Hydro Pump']
        ],
    ],

    ['160',
        [
            [1, 'Agility']
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Water Gun']
            [1, 'Rage']
            [6, 'Water Gun']
            [8, 'Rage']
            [13, 'Bite']
            [15, 'Scary Face']
            [21, 'Ice Fang']
            [24, 'Flail']
            [32, 'Crunch']
            [37, 'Chip Away']
            [45, 'Slash']
            [50, 'Screech']
            [58, 'Thrash']
            [63, 'Aqua Tail']
            [71, 'Superpower']
            [76, 'Hydro Pump']
        ],
    ],

    ['161',
        [
            [1, 'Scratch']
            [1, 'Foresight']
            [4, 'Defense Curl']
            [7, 'Quick Attack']
            [13, 'Fury Swipes']
            [16, 'Helping Hand']
            [19, 'Follow Me']
            [25, 'Slam']
            [28, 'Rest']
            [31, 'Sucker Punch']
            [36, 'Amnesia']
            [39, 'Baton Pass']
            [42, 'Me First']
            [47, 'Hyper Voice']
        ],
    ],

    ['162',
        [
            [0, 'Agility']
            [1, 'Agility']
            [1, 'Coil']
            [1, 'Scratch']
            [1, 'Foresight']
            [1, 'Defense Curl']
            [1, 'Quick Attack']
            [4, 'Defense Curl']
            [7, 'Quick Attack']
            [13, 'Fury Swipes']
            [17, 'Helping Hand']
            [21, 'Follow Me']
            [28, 'Slam']
            [32, 'Rest']
            [36, 'Sucker Punch']
            [42, 'Amnesia']
            [46, 'Baton Pass']
            [50, 'Me First']
            [56, 'Hyper Voice']
        ],
    ],

    ['163',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Foresight']
            [4, 'Hypnosis']
            [7, 'Peck']
            [10, 'Confusion']
            [13, 'Echoed Voice']
            [16, 'Zen Headbutt']
            [19, 'Psycho Shift']
            [22, 'Extrasensory']
            [25, 'Take Down']
            [28, 'Reflect']
            [31, 'Air Slash']
            [34, 'Uproar']
            [37, 'Roost']
            [40, 'Moonblast']
            [43, 'Synchronoise']
            [46, 'Dream Eater']
        ],
    ],

    ['164',
        [
            [1, 'Dream Eater']
            [1, 'Sky Attack']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Foresight']
            [1, 'Hypnosis']
            [4, 'Hypnosis']
            [7, 'Peck']
            [10, 'Confusion']
            [13, 'Echoed Voice']
            [16, 'Zen Headbutt']
            [19, 'Psycho Shift']
            [23, 'Extrasensory']
            [27, 'Take Down']
            [31, 'Reflect']
            [35, 'Air Slash']
            [39, 'Uproar']
            [43, 'Roost']
            [47, 'Moonblast']
            [51, 'Synchronoise']
            [55, 'Dream Eater']
        ],
    ],

    ['165',
        [
            [1, 'Tackle']
            [5, 'Supersonic']
            [8, 'Swift']
            [12, 'Light Screen']
            [12, 'Reflect']
            [12, 'Safeguard']
            [15, 'Mach Punch']
            [19, 'Silver Wind']
            [22, 'Comet Punch']
            [26, 'Baton Pass']
            [29, 'Agility']
            [33, 'Bug Buzz']
            [36, 'Air Slash']
            [40, 'Double Edge']
        ],
    ],

    ['166',
        [
            [1, 'Tackle']
            [1, 'Supersonic']
            [1, 'Swift']
            [5, 'Supersonic']
            [8, 'Swift']
            [12, 'Light Screen']
            [12, 'Reflect']
            [12, 'Safeguard']
            [15, 'Mach Punch']
            [20, 'Silver Wind']
            [24, 'Comet Punch']
            [29, 'Baton Pass']
            [33, 'Agility']
            [38, 'Bug Buzz']
            [42, 'Air Slash']
            [47, 'Double Edge']
        ],
    ],

    ['167',
        [
            [1, 'Poison Sting']
            [1, 'String Shot']
            [1, 'Constrict']
            [5, 'Absorb']
            [8, 'Infestation']
            [12, 'Scary Face']
            [15, 'Night Shade']
            [19, 'Shadow Sneak']
            [22, 'Fury Swipes']
            [26, 'Sucker Punch']
            [29, 'Spider Web']
            [33, 'Agility']
            [36, 'Pin Missile']
            [40, 'Psychic']
            [43, 'Poison Jab']
            [47, 'Cross Poison']
            [50, 'Sticky Web']
            [54, 'Toxic Thread']
        ],
    ],

    ['168',
        [
            [0, 'Swords Dance']
            [1, 'Swords Dance']
            [1, 'Focus Energy']
            [1, 'Venom Drench']
            [1, 'Fell Stinger']
            [1, 'Bug Bite']
            [1, 'Poison Sting']
            [1, 'String Shot']
            [1, 'Constrict']
            [1, 'Absorb']
            [5, 'Absorb']
            [8, 'Infestation']
            [12, 'Scary Face']
            [15, 'Night Shade']
            [19, 'Shadow Sneak']
            [23, 'Fury Swipes']
            [28, 'Sucker Punch']
            [32, 'Spider Web']
            [37, 'Agility']
            [41, 'Pin Missile']
            [46, 'Psychic']
            [50, 'Poison Jab']
            [55, 'Cross Poison']
            [58, 'Sticky Web']
            [63, 'Toxic Thread']
        ],
    ],

    ['169',
        [
            [0, 'Cross Poison']
            [1, 'Cross Poison']
            [1, 'Screech']
            [1, 'Absorb']
            [1, 'Supersonic']
            [1, 'Astonish']
            [1, 'Bite']
            [5, 'Supersonic']
            [7, 'Astonish']
            [11, 'Bite']
            [13, 'Wing Attack']
            [17, 'Confuse Ray']
            [19, 'Air Cutter']
            [24, 'Swift']
            [27, 'Poison Fang']
            [32, 'Mean Look']
            [35, 'Leech Life']
            [40, 'Haze']
            [43, 'Venoshock']
            [48, 'Air Slash']
            [51, 'Quick Guard']
        ],
    ],

    ['170',
        [
            [1, 'Bubble']
            [1, 'Supersonic']
            [6, 'Thunder Wave']
            [9, 'Electro Ball']
            [12, 'Water Gun']
            [17, 'Confuse Ray']
            [20, 'Bubble Beam']
            [23, 'Spark']
            [28, 'Signal Beam']
            [31, 'Flail']
            [34, 'Discharge']
            [39, 'Take Down']
            [42, 'Aqua Ring']
            [45, 'Hydro Pump']
            [47, 'Ion Deluge']
            [50, 'Charge']
        ],
    ],

    ['171',
        [
            [0, 'Stockpile']
            [0, 'Swallow']
            [0, 'Spit Up']
            [1, 'Stockpile']
            [1, 'Swallow']
            [1, 'Spit Up']
            [1, 'Eerie Impulse']
            [1, 'Spotlight']
            [1, 'Bubble']
            [1, 'Supersonic']
            [1, 'Thunder Wave']
            [1, 'Electro Ball']
            [6, 'Thunder Wave']
            [9, 'Electro Ball']
            [12, 'Water Gun']
            [17, 'Confuse Ray']
            [20, 'Bubble Beam']
            [23, 'Spark']
            [29, 'Signal Beam']
            [33, 'Flail']
            [37, 'Discharge']
            [43, 'Take Down']
            [47, 'Aqua Ring']
            [51, 'Hydro Pump']
            [54, 'Ion Deluge']
            [58, 'Charge']
        ],
    ],

    ['172',
        [
            [1, 'Thunder Shock']
            [1, 'Charm']
            [5, 'Tail Whip']
            [10, 'Sweet Kiss']
            [13, 'Nasty Plot']
            [18, 'Thunder Wave']
        ],
    ],

    ['173',
        [
            [1, 'Pound']
            [1, 'Charm']
            [4, 'Encore']
            [7, 'Sing']
            [10, 'Sweet Kiss']
            [13, 'Copycat']
            [16, 'Magical Leaf']
        ],
    ],

    ['174',
        [
            [1, 'Sing']
            [1, 'Charm']
            [3, 'Defense Curl']
            [5, 'Pound']
            [9, 'Sweet Kiss']
            [11, 'Copycat']
        ],
    ],

    ['175',
        [
            [1, 'Growl']
            [1, 'Charm']
            [5, 'Metronome']
            [9, 'Sweet Kiss']
            [13, 'Yawn']
            [17, 'Encore']
            [21, 'Follow Me']
            [25, 'Bestow']
            [29, 'Wish']
            [33, 'Ancient Power']
            [37, 'Safeguard']
            [41, 'Baton Pass']
            [45, 'Double Edge']
            [49, 'Last Resort']
            [53, 'After You']
        ],
    ],

    ['176',
        [
            [1, 'Magical Leaf']
            [1, 'Growl']
            [1, 'Charm']
            [1, 'Metronome']
            [1, 'Sweet Kiss']
            [5, 'Metronome']
            [9, 'Sweet Kiss']
            [13, 'Yawn']
            [14, 'Fairy Wind']
            [17, 'Encore']
            [21, 'Follow Me']
            [25, 'Bestow']
            [29, 'Wish']
            [33, 'Ancient Power']
            [37, 'Safeguard']
            [41, 'Baton Pass']
            [45, 'Double Edge']
            [49, 'Last Resort']
            [53, 'After You']
        ],
    ],

    ['177',
        [
            [1, 'Peck']
            [1, 'Leer']
            [6, 'Night Shade']
            [9, 'Teleport']
            [12, 'Lucky Chant']
            [17, 'Stored Power']
            [20, 'Ominous Wind']
            [23, 'Confuse Ray']
            [28, 'Wish']
            [33, 'Psychic']
            [36, 'Miracle Eye']
            [39, 'Psycho Shift']
            [44, 'Future Sight']
            [47, 'Power Swap']
            [47, 'Guard Swap']
            [50, 'Me First']
        ],
    ],

    ['178',
        [
            [0, 'Air Slash']
            [1, 'Air Slash']
            [1, 'Tailwind']
            [1, 'Peck']
            [1, 'Leer']
            [1, 'Night Shade']
            [1, 'Teleport']
            [6, 'Night Shade']
            [9, 'Teleport']
            [12, 'Lucky Chant']
            [17, 'Stored Power']
            [20, 'Ominous Wind']
            [23, 'Confuse Ray']
            [29, 'Wish']
            [35, 'Psychic']
            [39, 'Miracle Eye']
            [43, 'Psycho Shift']
            [49, 'Future Sight']
            [53, 'Power Swap']
            [53, 'Guard Swap']
            [57, 'Me First']
        ],
    ],

    ['179',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [4, 'Thunder Wave']
            [8, 'Thunder Shock']
            [11, 'Cotton Spore']
            [15, 'Charge']
            [18, 'Take Down']
            [22, 'Electro Ball']
            [25, 'Confuse Ray']
            [29, 'Power Gem']
            [32, 'Discharge']
            [36, 'Cotton Guard']
            [39, 'Signal Beam']
            [43, 'Light Screen']
            [46, 'Thunder']
        ],
    ],

    ['180',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Thunder Wave']
            [1, 'Thunder Shock']
            [4, 'Thunder Wave']
            [8, 'Thunder Shock']
            [11, 'Cotton Spore']
            [16, 'Charge']
            [20, 'Take Down']
            [25, 'Electro Ball']
            [29, 'Confuse Ray']
            [34, 'Power Gem']
            [38, 'Discharge']
            [43, 'Cotton Guard']
            [47, 'Signal Beam']
            [52, 'Light Screen']
            [56, 'Thunder']
        ],
    ],

    ['181',
        [
            [0, 'Thunder Punch']
            [1, 'Thunder Punch']
            [1, 'Zap Cannon']
            [1, 'Magnetic Flux']
            [1, 'Ion Deluge']
            [1, 'Dragon Pulse']
            [1, 'Fire Punch']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Thunder Wave']
            [1, 'Thunder Shock']
            [4, 'Thunder Wave']
            [8, 'Thunder Shock']
            [11, 'Cotton Spore']
            [16, 'Charge']
            [20, 'Take Down']
            [25, 'Electro Ball']
            [29, 'Confuse Ray']
            [35, 'Power Gem']
            [40, 'Discharge']
            [46, 'Cotton Guard']
            [51, 'Signal Beam']
            [57, 'Light Screen']
            [62, 'Thunder']
            [65, 'Dragon Pulse']
        ],
    ],

    ['182',
        [
            [0, 'Magical Leaf']
            [1, 'Magical Leaf']
            [1, 'Leaf Storm']
            [1, 'Leaf Blade']
            [1, 'Mega Drain']
            [1, 'Sweet Scent']
            [1, 'Stun Spore']
            [1, 'Sunny Day']
            [39, 'Quiver Dance']
            [49, 'Petal Blizzard']
            [59, 'Petal Dance']
            [69, 'Leaf Storm']
        ],
    ],

    ['183',
        [
            [1, 'Tackle']
            [1, 'Water Gun']
            [2, 'Tail Whip']
            [5, 'Water Sport']
            [7, 'Bubble']
            [10, 'Defense Curl']
            [10, 'Rollout']
            [13, 'Bubble Beam']
            [16, 'Helping Hand']
            [20, 'Aqua Tail']
            [23, 'Play Rough']
            [28, 'Aqua Ring']
            [31, 'Rain Dance']
            [37, 'Double Edge']
            [40, 'Superpower']
            [47, 'Hydro Pump']
        ],
    ],

    ['184',
        [
            [1, 'Tackle']
            [1, 'Water Gun']
            [1, 'Tail Whip']
            [1, 'Water Sport']
            [2, 'Tail Whip']
            [5, 'Water Sport']
            [7, 'Bubble']
            [10, 'Defense Curl']
            [10, 'Rollout']
            [13, 'Bubble Beam']
            [16, 'Helping Hand']
            [21, 'Aqua Tail']
            [25, 'Play Rough']
            [31, 'Aqua Ring']
            [35, 'Rain Dance']
            [42, 'Double Edge']
            [46, 'Superpower']
            [55, 'Hydro Pump']
        ],
    ],

    ['185',
        [
            [0, 'Slam']
            [1, 'Slam']
            [1, 'Wood Hammer']
            [1, 'Copycat']
            [1, 'Flail']
            [1, 'Low Kick']
            [1, 'Rock Throw']
            [5, 'Flail']
            [8, 'Low Kick']
            [12, 'Rock Throw']
            [15, 'Mimic']
            [19, 'Feint Attack']
            [22, 'Tearful Look']
            [26, 'Rock Tomb']
            [29, 'Block']
            [33, 'Rock Slide']
            [36, 'Counter']
            [40, 'Sucker Punch']
            [43, 'Double Edge']
            [47, 'Stone Edge']
            [50, 'Hammer Arm']
            [54, 'Head Smash']
        ],
    ],

    ['186',
        [
            [1, 'Bubble Beam']
            [1, 'Hypnosis']
            [1, 'Double Slap']
            [1, 'Perish Song']
            [27, 'Swagger']
            [37, 'Bounce']
            [48, 'Hyper Voice']
        ],
    ],

    ['187',
        [
            [1, 'Splash']
            [1, 'Absorb']
            [4, 'Synthesis']
            [6, 'Tail Whip']
            [8, 'Tackle']
            [10, 'Fairy Wind']
            [12, 'Poison Powder']
            [14, 'Stun Spore']
            [16, 'Sleep Powder']
            [19, 'Bullet Seed']
            [22, 'Leech Seed']
            [25, 'Mega Drain']
            [28, 'Acrobatics']
            [31, 'Rage Powder']
            [34, 'Cotton Spore']
            [37, 'U Turn']
            [40, 'Worry Seed']
            [43, 'Giga Drain']
            [46, 'Bounce']
            [49, 'Memento']
        ],
    ],

    ['188',
        [
            [1, 'Splash']
            [1, 'Absorb']
            [1, 'Synthesis']
            [1, 'Tail Whip']
            [4, 'Synthesis']
            [6, 'Tail Whip']
            [8, 'Tackle']
            [10, 'Fairy Wind']
            [12, 'Poison Powder']
            [14, 'Stun Spore']
            [16, 'Sleep Powder']
            [20, 'Bullet Seed']
            [24, 'Leech Seed']
            [28, 'Mega Drain']
            [32, 'Acrobatics']
            [36, 'Rage Powder']
            [40, 'Cotton Spore']
            [44, 'U Turn']
            [48, 'Worry Seed']
            [52, 'Giga Drain']
            [56, 'Bounce']
            [60, 'Memento']
        ],
    ],

    ['189',
        [
            [1, 'Splash']
            [1, 'Absorb']
            [1, 'Synthesis']
            [1, 'Tail Whip']
            [4, 'Synthesis']
            [6, 'Tail Whip']
            [8, 'Tackle']
            [10, 'Fairy Wind']
            [12, 'Poison Powder']
            [14, 'Stun Spore']
            [16, 'Sleep Powder']
            [20, 'Bullet Seed']
            [24, 'Leech Seed']
            [29, 'Mega Drain']
            [34, 'Acrobatics']
            [39, 'Rage Powder']
            [44, 'Cotton Spore']
            [49, 'U Turn']
            [54, 'Worry Seed']
            [59, 'Giga Drain']
            [64, 'Bounce']
            [69, 'Memento']
        ],
    ],

    ['190',
        [
            [1, 'Scratch']
            [1, 'Tail Whip']
            [4, 'Sand Attack']
            [8, 'Astonish']
            [11, 'Baton Pass']
            [15, 'Tickle']
            [18, 'Fury Swipes']
            [22, 'Swift']
            [25, 'Screech']
            [29, 'Agility']
            [32, 'Double Hit']
            [36, 'Fling']
            [39, 'Nasty Plot']
            [43, 'Last Resort']
        ],
    ],

    ['191',
        [
            [1, 'Absorb']
            [1, 'Growth']
            [4, 'Ingrain']
            [7, 'Grass Whistle']
            [10, 'Mega Drain']
            [13, 'Leech Seed']
            [16, 'Razor Leaf']
            [19, 'Worry Seed']
            [22, 'Giga Drain']
            [25, 'Endeavor']
            [28, 'Synthesis']
            [31, 'Natural Gift']
            [34, 'Solar Beam']
            [37, 'Double Edge']
            [40, 'Sunny Day']
            [43, 'Seed Bomb']
        ],
    ],

    ['192',
        [
            [1, 'Flower Shield']
            [1, 'Absorb']
            [1, 'Pound']
            [1, 'Growth']
            [4, 'Ingrain']
            [7, 'Grass Whistle']
            [10, 'Mega Drain']
            [13, 'Leech Seed']
            [16, 'Razor Leaf']
            [19, 'Worry Seed']
            [22, 'Giga Drain']
            [25, 'Bullet Seed']
            [28, 'Petal Dance']
            [31, 'Natural Gift']
            [34, 'Solar Beam']
            [37, 'Double Edge']
            [40, 'Sunny Day']
            [43, 'Leaf Storm']
            [50, 'Petal Blizzard']
        ],
    ],

    ['193',
        [
            [1, 'Tackle']
            [1, 'Foresight']
            [6, 'Quick Attack']
            [11, 'Double Team']
            [14, 'Sonic Boom']
            [17, 'Detect']
            [22, 'Supersonic']
            [27, 'Uproar']
            [30, 'Pursuit']
            [33, 'Ancient Power']
            [38, 'Hypnosis']
            [43, 'Wing Attack']
            [46, 'Screech']
            [49, 'U Turn']
            [54, 'Air Slash']
            [57, 'Bug Buzz']
        ],
    ],

    ['194',
        [
            [1, 'Water Gun']
            [1, 'Tail Whip']
            [5, 'Mud Sport']
            [9, 'Mud Shot']
            [15, 'Slam']
            [19, 'Mud Bomb']
            [23, 'Amnesia']
            [29, 'Yawn']
            [33, 'Earthquake']
            [37, 'Rain Dance']
            [43, 'Mist']
            [43, 'Haze']
            [47, 'Muddy Water']
        ],
    ],

    ['195',
        [
            [1, 'Water Gun']
            [1, 'Tail Whip']
            [1, 'Mud Sport']
            [5, 'Mud Sport']
            [9, 'Mud Shot']
            [15, 'Slam']
            [19, 'Mud Bomb']
            [24, 'Amnesia']
            [31, 'Yawn']
            [36, 'Earthquake']
            [41, 'Rain Dance']
            [48, 'Mist']
            [48, 'Haze']
            [53, 'Muddy Water']
        ],
    ],

    ['196',
        [
            [0, 'Confusion']
            [1, 'Confusion']
            [1, 'Helping Hand']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [5, 'Sand Attack']
            [9, 'Baby Doll Eyes']
            [13, 'Quick Attack']
            [17, 'Swift']
            [20, 'Psybeam']
            [25, 'Future Sight']
            [29, 'Psych Up']
            [33, 'Morning Sun']
            [37, 'Psychic']
            [41, 'Last Resort']
            [45, 'Power Swap']
        ],
    ],

    ['197',
        [
            [0, 'Pursuit']
            [1, 'Pursuit']
            [1, 'Helping Hand']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [5, 'Sand Attack']
            [9, 'Baby Doll Eyes']
            [13, 'Quick Attack']
            [17, 'Confuse Ray']
            [20, 'Feint Attack']
            [25, 'Assurance']
            [29, 'Screech']
            [33, 'Moonlight']
            [37, 'Mean Look']
            [41, 'Last Resort']
            [45, 'Guard Swap']
        ],
    ],

    ['198',
        [
            [1, 'Peck']
            [1, 'Astonish']
            [5, 'Pursuit']
            [11, 'Haze']
            [15, 'Wing Attack']
            [21, 'Night Shade']
            [25, 'Assurance']
            [31, 'Taunt']
            [35, 'Feint Attack']
            [41, 'Mean Look']
            [45, 'Foul Play']
            [50, 'Tailwind']
            [55, 'Sucker Punch']
            [61, 'Torment']
            [65, 'Quash']
        ],
    ],

    ['199',
        [
            [1, 'Heal Pulse']
            [1, 'Power Gem']
            [1, 'Hidden Power']
            [1, 'Curse']
            [1, 'Yawn']
            [1, 'Tackle']
            [5, 'Growl']
            [9, 'Water Gun']
            [14, 'Confusion']
            [19, 'Disable']
            [23, 'Headbutt']
            [28, 'Water Pulse']
            [32, 'Zen Headbutt']
            [36, 'Nasty Plot']
            [41, 'Swagger']
            [45, 'Psychic']
            [49, 'Trump Card']
            [54, 'Psych Up']
            [58, 'Heal Pulse']
        ], //Johto
        [
            [0, 'Eerie Spell']
            [1, 'Eerie Spell']
            [1, 'Power Gem']
            [1, 'Nasty Plot']
            [1, 'Swagger']
            [1, 'Tackle']
            [1, 'Curse']
            [1, 'Growl']
            [1, 'Acid']
            [9, 'Yawn']
            [12, 'Confusion']
            [15, 'Disable']
            [18, 'Water Pulse']
            [21, 'Headbutt']
            [24, 'Zen Headbutt']
            [27, 'Amnesia']
            [30, 'Surf']
            [33, 'Slack Off']
            [36, 'Psychic']
            [39, 'Psych Up']
            [42, 'Rain Dance']
            [45, 'Heal Pulse']
        ], //Galarian
    ], //Slowking

    ['200',
        [
            [1, 'Growl']
            [1, 'Psywave']
            [5, 'Spite']
            [10, 'Astonish']
            [14, 'Confuse Ray']
            [19, 'Mean Look']
            [23, 'Hex']
            [28, 'Psybeam']
            [32, 'Pain Split']
            [37, 'Payback']
            [41, 'Shadow Ball']
            [46, 'Perish Song']
            [50, 'Grudge']
            [55, 'Power Gem']
        ],
    ],

    ['201',
        [
            [1, 'Hidden Power']
        ],
    ],

    ['202',
        [
            [1, 'Counter']
            [1, 'Mirror Coat']
            [1, 'Safeguard']
            [1, 'Destiny Bond']
        ],
    ],

    ['203',
        [
            [1, 'Power Swap']
            [1, 'Guard Swap']
            [1, 'Astonish']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Confusion']
            [5, 'Odor Sleuth']
            [10, 'Assurance']
            [14, 'Stomp']
            [19, 'Psybeam']
            [23, 'Agility']
            [28, 'Double Hit']
            [32, 'Zen Headbutt']
            [37, 'Crunch']
            [41, 'Baton Pass']
            [46, 'Nasty Plot']
            [50, 'Psychic']
        ],
    ],

    ['204',
        [
            [1, 'Tackle']
            [1, 'Protect']
            [6, 'Self Destruct']
            [9, 'Bug Bite']
            [12, 'Take Down']
            [17, 'Rapid Spin']
            [20, 'Bide']
            [23, 'Natural Gift']
            [28, 'Spikes']
            [31, 'Payback']
            [34, 'Explosion']
            [39, 'Iron Defense']
            [42, 'Gyro Ball']
            [45, 'Double Edge']
        ],
    ],

    ['205',
        [
            [0, 'Mirror Shot']
            [0, 'Autotomize']
            [1, 'Mirror Shot']
            [1, 'Autotomize']
            [1, 'Heavy Slam']
            [1, 'Zap Cannon']
            [1, 'Magnet Rise']
            [1, 'Toxic Spikes']
            [1, 'Tackle']
            [1, 'Protect']
            [1, 'Self Destruct']
            [1, 'Bug Bite']
            [6, 'Self Destruct']
            [9, 'Bug Bite']
            [12, 'Take Down']
            [17, 'Rapid Spin']
            [20, 'Bide']
            [23, 'Natural Gift']
            [28, 'Spikes']
            [32, 'Payback']
            [36, 'Explosion']
            [42, 'Iron Defense']
            [46, 'Gyro Ball']
            [50, 'Double Edge']
            [56, 'Magnet Rise']
            [60, 'Zap Cannon']
            [64, 'Heavy Slam']
        ],
    ],

    ['206',
        [
            [1, 'Rage']
            [1, 'Defense Curl']
            [3, 'Rollout']
            [6, 'Spite']
            [8, 'Pursuit']
            [11, 'Screech']
            [13, 'Mud Slap']
            [16, 'Yawn']
            [18, 'Ancient Power']
            [21, 'Body Slam']
            [23, 'Drill Run']
            [26, 'Roost']
            [28, 'Take Down']
            [31, 'Coil']
            [33, 'Dig']
            [36, 'Glare']
            [38, 'Double Edge']
            [41, 'Endeavor']
            [43, 'Air Slash']
            [46, 'Dragon Rush']
            [48, 'Endure']
            [51, 'Flail']
        ],
    ],

    ['207',
        [
            [1, 'Poison Sting']
            [4, 'Sand Attack']
            [7, 'Harden']
            [10, 'Knock Off']
            [13, 'Quick Attack']
            [16, 'Fury Cutter']
            [19, 'Feint Attack']
            [22, 'Acrobatics']
            [27, 'Slash']
            [30, 'U Turn']
            [35, 'Screech']
            [40, 'X Scissor']
            [45, 'Sky Uppercut']
            [50, 'Swords Dance']
            [55, 'Guillotine']
        ],
    ],

    ['208',
        [
            [1, 'Thunder Fang']
            [1, 'Ice Fang']
            [1, 'Fire Fang']
            [1, 'Mud Sport']
            [1, 'Tackle']
            [1, 'Harden']
            [1, 'Bind']
            [4, 'Curse']
            [7, 'Rock Throw']
            [10, 'Rock Tomb']
            [13, 'Rage']
            [16, 'Stealth Rock']
            [19, 'Autotomize']
            [20, 'Gyro Ball']
            [22, 'Smack Down']
            [25, 'Dragon Breath']
            [28, 'Slam']
            [31, 'Screech']
            [34, 'Rock Slide']
            [37, 'Crunch']
            [40, 'Iron Tail']
            [43, 'Dig']
            [46, 'Stone Edge']
            [49, 'Double Edge']
            [52, 'Sandstorm']
        ],
    ],

    ['209',
        [
            [1, 'Ice Fang']
            [1, 'Fire Fang']
            [1, 'Thunder Fang']
            [1, 'Tackle']
            [1, 'Scary Face']
            [1, 'Tail Whip']
            [1, 'Charm']
            [7, 'Bite']
            [13, 'Lick']
            [19, 'Headbutt']
            [25, 'Roar']
            [31, 'Rage']
            [37, 'Play Rough']
            [43, 'Payback']
            [49, 'Crunch']
        ],
    ],

    ['210',
        [
            [1, 'Outrage']
            [1, 'Ice Fang']
            [1, 'Fire Fang']
            [1, 'Thunder Fang']
            [1, 'Tackle']
            [1, 'Scary Face']
            [1, 'Tail Whip']
            [1, 'Charm']
            [7, 'Bite']
            [13, 'Lick']
            [19, 'Headbutt']
            [27, 'Roar']
            [35, 'Rage']
            [43, 'Play Rough']
            [51, 'Payback']
            [59, 'Crunch']
            [67, 'Outrage']
        ],
    ],

    ['211',
        [
            [1, 'Fell Stinger']
            [1, 'Hydro Pump']
            [1, 'Destiny Bond']
            [1, 'Water Gun']
            [1, 'Spikes']
            [1, 'Tackle']
            [1, 'Poison Sting']
            [9, 'Harden']
            [9, 'Minimize']
            [13, 'Bubble']
            [17, 'Rollout']
            [21, 'Toxic Spikes']
            [25, 'Stockpile']
            [25, 'Spit Up']
            [29, 'Revenge']
            [33, 'Brine']
            [37, 'Pin Missile']
            [41, 'Take Down']
            [45, 'Aqua Tail']
            [49, 'Poison Jab']
            [53, 'Destiny Bond']
            [57, 'Hydro Pump']
            [60, 'Fell Stinger']
        ],
    ],

    ['212',
        [
            [1, 'Feint']
            [1, 'Bullet Punch']
            [1, 'Quick Attack']
            [1, 'Leer']
            [5, 'Focus Energy']
            [9, 'Pursuit']
            [13, 'False Swipe']
            [17, 'Agility']
            [21, 'Metal Claw']
            [25, 'Fury Cutter']
            [29, 'Slash']
            [33, 'Razor Wind']
            [37, 'Iron Defense']
            [41, 'X Scissor']
            [45, 'Night Slash']
            [49, 'Double Hit']
            [50, 'Iron Head']
            [57, 'Swords Dance']
            [61, 'Feint']
        ],
    ],

    ['213',
        [
            [1, 'Sticky Web']
            [1, 'Withdraw']
            [1, 'Constrict']
            [1, 'Bide']
            [1, 'Rollout']
            [5, 'Encore']
            [9, 'Wrap']
            [12, 'Struggle Bug']
            [16, 'Safeguard']
            [20, 'Rest']
            [23, 'Rock Throw']
            [27, 'Gastro Acid']
            [31, 'Power Trick']
            [34, 'Shell Smash']
            [38, 'Rock Slide']
            [42, 'Bug Bite']
            [45, 'Power Split']
            [45, 'Guard Split']
            [49, 'Stone Edge']
            [53, 'Sticky Web']
        ],
    ],

    ['214',
        [
            [1, 'Arm Thrust']
            [1, 'Bullet Seed']
            [1, 'Night Slash']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Horn Attack']
            [1, 'Endure']
            [7, 'Feint']
            [10, 'Aerial Ace']
            [16, 'Chip Away']
            [19, 'Counter']
            [25, 'Fury Attack']
            [28, 'Brick Break']
            [31, 'Pin Missile']
            [34, 'Take Down']
            [37, 'Megahorn']
            [43, 'Close Combat']
            [46, 'Reversal']
        ],
    ],

    ['215',
        [
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Taunt']
            [8, 'Quick Attack']
            [10, 'Feint Attack']
            [14, 'Icy Wind']
            [16, 'Fury Swipes']
            [20, 'Agility']
            [22, 'Metal Claw']
            [25, 'Hone Claws']
            [28, 'Beat Up']
            [32, 'Screech']
            [35, 'Slash']
            [40, 'Snatch']
            [44, 'Punishment']
            [47, 'Ice Shard']
        ],
    ],

    ['216',
        [
            [1, 'Fling']
            [1, 'Covet']
            [1, 'Scratch']
            [1, 'Baby Doll Eyes']
            [1, 'Lick']
            [1, 'Fake Tears']
            [8, 'Fury Swipes']
            [15, 'Feint Attack']
            [22, 'Sweet Scent']
            [25, 'Play Nice']
            [29, 'Slash']
            [36, 'Charm']
            [43, 'Rest']
            [43, 'Snore']
            [50, 'Thrash']
            [57, 'Fling']
        ],
    ],

    ['217',
        [
            [1, 'Hammer Arm']
            [1, 'Covet']
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Lick']
            [1, 'Fake Tears']
            [8, 'Fury Swipes']
            [15, 'Feint Attack']
            [22, 'Sweet Scent']
            [25, 'Play Nice']
            [29, 'Slash']
            [38, 'Scary Face']
            [47, 'Rest']
            [49, 'Snore']
            [58, 'Thrash']
            [67, 'Hammer Arm']
        ],
    ],

    ['218',
        [
            [1, 'Yawn']
            [1, 'Smog']
            [6, 'Ember']
            [8, 'Rock Throw']
            [13, 'Harden']
            [15, 'Incinerate']
            [20, 'Clear Smog']
            [22, 'Ancient Power']
            [27, 'Flame Burst']
            [29, 'Rock Slide']
            [34, 'Lava Plume']
            [36, 'Amnesia']
            [41, 'Body Slam']
            [43, 'Recover']
            [48, 'Flamethrower']
            [50, 'Earth Power']
        ],
    ],

    ['219',
        [
            [0, 'Shell Smash']
            [1, 'Shell Smash']
            [1, 'Earth Power']
            [1, 'Yawn']
            [1, 'Smog']
            [1, 'Ember']
            [1, 'Rock Throw']
            [6, 'Ember']
            [8, 'Rock Throw']
            [13, 'Harden']
            [15, 'Incinerate']
            [20, 'Clear Smog']
            [22, 'Ancient Power']
            [27, 'Flame Burst']
            [29, 'Rock Slide']
            [34, 'Lava Plume']
            [36, 'Amnesia']
            [43, 'Body Slam']
            [47, 'Recover']
            [54, 'Flamethrower']
            [58, 'Earth Power']
        ],
    ],

    ['220',
        [
            [1, 'Tackle']
            [1, 'Odor Sleuth']
            [5, 'Mud Sport']
            [8, 'Powder Snow']
            [11, 'Mud Slap']
            [14, 'Endure']
            [18, 'Mud Bomb']
            [21, 'Icy Wind']
            [24, 'Ice Shard']
            [28, 'Take Down']
            [35, 'Mist']
            [37, 'Earthquake']
            [40, 'Flail']
            [44, 'Blizzard']
            [48, 'Amnesia']
        ],
    ],

    ['221',
        [
            [0, 'Fury Attack']
            [1, 'Fury Attack']
            [1, 'Ancient Power']
            [1, 'Peck']
            [1, 'Odor Sleuth']
            [1, 'Mud Sport']
            [1, 'Powder Snow']
            [5, 'Mud Sport']
            [8, 'Powder Snow']
            [11, 'Mud Slap']
            [14, 'Endure']
            [18, 'Mud Bomb']
            [21, 'Icy Wind']
            [24, 'Ice Fang']
            [28, 'Take Down']
            [37, 'Mist']
            [41, 'Thrash']
            [46, 'Earthquake']
            [52, 'Blizzard']
            [58, 'Amnesia']
        ],
    ],

    ['222',
        [
            [1, 'Tackle']
            [1, 'Harden']
            [4, 'Bubble']
            [8, 'Recover']
            [10, 'Bubble Beam']
            [13, 'Refresh']
            [17, 'Ancient Power']
            [20, 'Spike Cannon']
            [23, 'Lucky Chant']
            [27, 'Brine']
            [29, 'Iron Defense']
            [31, 'Rock Blast']
            [35, 'Endure']
            [38, 'Aqua Ring']
            [41, 'Power Gem']
            [45, 'Mirror Coat']
            [47, 'Earth Power']
            [50, 'Flail']
        ], //Johto
        [
            [1, 'Tackle']
            [1, 'Harden']
            [5, 'Astonish']
            [10, 'Disable']
            [15, 'Spite']
            [20, 'Ancient Power']
            [25, 'Hex']
            [30, 'Curse']
            [35, 'Strength Sap']
            [40, 'Power Gem']
            [45, 'Night Shade']
            [50, 'Grudge']
            [55, 'Mirror Coat']
        ], //Galarian
    ], //Corsola

    ['223',
        [
            [1, 'Water Gun']
            [6, 'Lock On']
            [10, 'Psybeam']
            [14, 'Aurora Beam']
            [18, 'Bubble Beam']
            [22, 'Focus Energy']
            [26, 'Water Pulse']
            [30, 'Signal Beam']
            [34, 'Ice Beam']
            [38, 'Bullet Seed']
            [42, 'Hydro Pump']
            [46, 'Hyper Beam']
            [50, 'Soak']
        ],
    ],

    ['224',
        [
            [0, 'Octazooka']
            [1, 'Octazooka']
            [1, 'Gunk Shot']
            [1, 'Rock Blast']
            [1, 'Water Gun']
            [1, 'Constrict']
            [1, 'Psybeam']
            [1, 'Aurora Beam']
            [6, 'Constrict']
            [10, 'Psybeam']
            [14, 'Aurora Beam']
            [18, 'Bubble Beam']
            [22, 'Focus Energy']
            [28, 'Wring Out']
            [34, 'Signal Beam']
            [40, 'Ice Beam']
            [46, 'Bullet Seed']
            [52, 'Hydro Pump']
            [58, 'Hyper Beam']
            [64, 'Soak']
        ],
    ],

    ['225',
        [
            [1, 'Present']
            [25, 'Drill Peck']
        ],
    ],

    ['226',
        [
            [1, 'Psybeam']
            [1, 'Bullet Seed']
            [1, 'Signal Beam']
            [1, 'Roost']
            [1, 'Tackle']
            [1, 'Bubble']
            [1, 'Supersonic']
            [1, 'Bubble Beam']
            [3, 'Supersonic']
            [7, 'Bubble Beam']
            [11, 'Confuse Ray']
            [14, 'Wing Attack']
            [16, 'Headbutt']
            [19, 'Water Pulse']
            [23, 'Wide Guard']
            [27, 'Take Down']
            [32, 'Agility']
            [36, 'Air Slash']
            [39, 'Aqua Ring']
            [46, 'Bounce']
            [49, 'Hydro Pump']
        ],
    ],

    ['227',
        [
            [1, 'Leer']
            [1, 'Peck']
            [6, 'Sand Attack']
            [9, 'Metal Claw']
            [12, 'Air Cutter']
            [17, 'Fury Attack']
            [20, 'Feint']
            [23, 'Swift']
            [28, 'Spikes']
            [31, 'Agility']
            [34, 'Steel Wing']
            [39, 'Slash']
            [42, 'Metal Sound']
            [45, 'Air Slash']
            [50, 'Autotomize']
            [53, 'Night Slash']
        ],
    ],

    ['228',
        [
            [1, 'Leer']
            [1, 'Ember']
            [4, 'Howl']
            [8, 'Smog']
            [13, 'Roar']
            [16, 'Bite']
            [20, 'Odor Sleuth']
            [25, 'Beat Up']
            [28, 'Fire Fang']
            [32, 'Feint Attack']
            [37, 'Embargo']
            [40, 'Foul Play']
            [44, 'Flamethrower']
            [49, 'Crunch']
            [52, 'Nasty Plot']
            [56, 'Inferno']
        ],
    ],

    ['229',
        [
            [1, 'Inferno']
            [1, 'Nasty Plot']
            [1, 'Thunder Fang']
            [1, 'Leer']
            [1, 'Ember']
            [1, 'Howl']
            [1, 'Smog']
            [4, 'Howl']
            [8, 'Smog']
            [13, 'Roar']
            [16, 'Bite']
            [20, 'Odor Sleuth']
            [26, 'Beat Up']
            [30, 'Fire Fang']
            [35, 'Feint Attack']
            [41, 'Embargo']
            [45, 'Foul Play']
            [50, 'Flamethrower']
            [56, 'Crunch']
            [60, 'Nasty Plot']
            [65, 'Inferno']
        ],
    ],

    ['230',
        [
            [1, 'Hydro Pump']
            [1, 'Yawn']
            [1, 'Bubble']
            [1, 'Smokescreen']
            [1, 'Leer']
            [1, 'Water Gun']
            [5, 'Smokescreen']
            [9, 'Leer']
            [13, 'Water Gun']
            [17, 'Twister']
            [21, 'Bubble Beam']
            [26, 'Focus Energy']
            [31, 'Brine']
            [38, 'Agility']
            [45, 'Dragon Pulse']
            [52, 'Dragon Dance']
            [60, 'Hydro Pump']
        ],
    ],

    ['231',
        [
            [1, 'Odor Sleuth']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Defense Curl']
            [6, 'Flail']
            [10, 'Rollout']
            [15, 'Natural Gift']
            [19, 'Endure']
            [24, 'Slam']
            [28, 'Take Down']
            [33, 'Charm']
            [37, 'Last Resort']
            [42, 'Double Edge']
        ],
    ],

    ['232',
        [
            [0, 'Fury Attack']
            [1, 'Fury Attack']
            [1, 'Fire Fang']
            [1, 'Thunder Fang']
            [1, 'Horn Attack']
            [1, 'Bulldoze']
            [1, 'Growl']
            [1, 'Defense Curl']
            [6, 'Rapid Spin']
            [10, 'Rollout']
            [15, 'Assurance']
            [19, 'Knock Off']
            [24, 'Slam']
            [30, 'Magnitude']
            [37, 'Scary Face']
            [43, 'Earthquake']
            [50, 'Giga Impact']
        ],
    ],

    ['233',
        [
            [1, 'Zap Cannon']
            [1, 'Magic Coat']
            [1, 'Conversion 2']
            [1, 'Tackle']
            [1, 'Conversion']
            [1, 'Defense Curl']
            [7, 'Psybeam']
            [12, 'Agility']
            [18, 'Recover']
            [23, 'Magnet Rise']
            [29, 'Signal Beam']
            [34, 'Recycle']
            [40, 'Discharge']
            [45, 'Lock On']
            [50, 'Tri Attack']
            [56, 'Magic Coat']
            [62, 'Zap Cannon']
            [67, 'Hyper Beam']
        ],
    ],

    ['234',
        [
            [1, 'Me First']
            [1, 'Tackle']
            [3, 'Leer']
            [7, 'Astonish']
            [10, 'Hypnosis']
            [13, 'Stomp']
            [16, 'Sand Attack']
            [21, 'Take Down']
            [23, 'Confuse Ray']
            [27, 'Calm Mind']
            [33, 'Role Play']
            [38, 'Zen Headbutt']
            [43, 'Jump Kick']
            [49, 'Imprison']
            [50, 'Captivate']
            [55, 'Me First']
        ],
    ],

    ['235',
        [
            [1, 'Sketch']
            [11, 'Sketch']
            [21, 'Sketch']
            [31, 'Sketch']
            [41, 'Sketch']
            [51, 'Sketch']
            [61, 'Sketch']
            [71, 'Sketch']
            [81, 'Sketch']
            [91, 'Sketch']
        ],
    ],

    ['236',
        [
            [1, 'Tackle']
            [1, 'Helping Hand']
            [1, 'Fake Out']
            [1, 'Foresight']
        ],
    ],

    ['237',
        [
            [0, 'Rolling Kick']
            [1, 'Rolling Kick']
            [1, 'Endeavor']
            [1, 'Close Combat']
            [1, 'Detect']
            [1, 'Revenge']
            [1, 'Focus Energy']
            [1, 'Pursuit']
            [1, 'Quick Attack']
            [6, 'Focus Energy']
            [10, 'Pursuit']
            [15, 'Quick Attack']
            [19, 'Rapid Spin']
            [24, 'Feint']
            [28, 'Counter']
            [33, 'Triple Kick']
            [37, 'Agility']
            [42, 'Gyro Ball']
            [46, 'Wide Guard']
            [46, 'Quick Guard']
            [50, 'Detect']
            [55, 'Close Combat']
            [60, 'Endeavor']
        ],
    ],

    ['238',
        [
            [1, 'Pound']
            [5, 'Lick']
            [8, 'Sweet Kiss']
            [11, 'Powder Snow']
            [15, 'Confusion']
            [18, 'Sing']
            [21, 'Heart Stamp']
            [25, 'Mean Look']
            [28, 'Fake Tears']
            [31, 'Lucky Chant']
            [35, 'Avalanche']
            [38, 'Psychic']
            [41, 'Copycat']
            [45, 'Perish Song']
            [48, 'Blizzard']
        ],
    ],

    ['239',
        [
            [1, 'Quick Attack']
            [1, 'Leer']
            [5, 'Thunder Shock']
            [8, 'Low Kick']
            [12, 'Swift']
            [15, 'Shock Wave']
            [19, 'Thunder Wave']
            [22, 'Electro Ball']
            [26, 'Light Screen']
            [29, 'Thunder Punch']
            [33, 'Discharge']
            [36, 'Screech']
            [40, 'Thunderbolt']
            [43, 'Thunder']
        ],
    ],

    ['240',
        [
            [1, 'Smog']
            [1, 'Leer']
            [5, 'Ember']
            [8, 'Smokescreen']
            [12, 'Feint Attack']
            [15, 'Fire Spin']
            [19, 'Clear Smog']
            [22, 'Flame Burst']
            [26, 'Confuse Ray']
            [29, 'Fire Punch']
            [33, 'Lava Plume']
            [36, 'Sunny Day']
            [40, 'Flamethrower']
            [43, 'Fire Blast']
        ],
    ],

    ['241',
        [
            [1, 'Tackle']
            [3, 'Growl']
            [5, 'Defense Curl']
            [8, 'Stomp']
            [11, 'Milk Drink']
            [15, 'Bide']
            [19, 'Rollout']
            [24, 'Body Slam']
            [29, 'Zen Headbutt']
            [35, 'Captivate']
            [41, 'Gyro Ball']
            [48, 'Heal Bell']
            [50, 'Wake Up Slap']
        ],
    ],

    ['242',
        [
            [1, 'Double Edge']
            [1, 'Defense Curl']
            [1, 'Pound']
            [1, 'Growl']
            [5, 'Tail Whip']
            [9, 'Refresh']
            [12, 'Double Slap']
            [16, 'Soft Boiled']
            [20, 'Bestow']
            [23, 'Minimize']
            [27, 'Take Down']
            [31, 'Sing']
            [34, 'Fling']
            [39, 'Heal Pulse']
            [44, 'Egg Bomb']
            [50, 'Light Screen']
            [57, 'Healing Wish']
            [65, 'Double Edge']
        ],
    ],

    ['243',
        [
            [1, 'Extrasensory']
            [1, 'Discharge']
            [1, 'Bite']
            [1, 'Leer']
            [8, 'Thunder Shock']
            [15, 'Roar']
            [22, 'Quick Attack']
            [29, 'Spark']
            [36, 'Reflect']
            [43, 'Crunch']
            [50, 'Thunder Fang']
            [57, 'Discharge']
            [64, 'Extrasensory']
            [71, 'Rain Dance']
            [78, 'Calm Mind']
            [85, 'Thunder']
        ],
    ],

    ['244',
        [
            [1, 'Sacred Fire']
            [1, 'Eruption']
            [1, 'Extrasensory']
            [1, 'Lava Plume']
            [1, 'Bite']
            [1, 'Leer']
            [8, 'Ember']
            [15, 'Roar']
            [22, 'Fire Spin']
            [29, 'Stomp']
            [36, 'Flamethrower']
            [43, 'Swagger']
            [50, 'Fire Fang']
            [57, 'Lava Plume']
            [64, 'Extrasensory']
            [71, 'Fire Blast']
            [78, 'Calm Mind']
            [85, 'Eruption']
        ],
    ],

    ['245',
        [
            [1, 'Sheer Cold']
            [1, 'Bite']
            [1, 'Leer']
            [1, 'Bubble Beam']
            [1, 'Rain Dance']
            [8, 'Bubble Beam']
            [15, 'Rain Dance']
            [22, 'Gust']
            [29, 'Aurora Beam']
            [36, 'Mist']
            [43, 'Mirror Coat']
            [50, 'Ice Fang']
            [57, 'Tailwind']
            [64, 'Extrasensory']
            [71, 'Hydro Pump']
            [78, 'Calm Mind']
            [85, 'Blizzard']
        ],
    ],

    ['246',
        [
            [1, 'Bite']
            [1, 'Leer']
            [5, 'Sandstorm']
            [10, 'Screech']
            [14, 'Chip Away']
            [19, 'Rock Slide']
            [23, 'Scary Face']
            [28, 'Thrash']
            [32, 'Dark Pulse']
            [37, 'Payback']
            [41, 'Crunch']
            [46, 'Earthquake']
            [50, 'Stone Edge']
            [55, 'Hyper Beam']
        ],
    ],

    ['247',
        [
            [1, 'Bite']
            [1, 'Leer']
            [1, 'Sandstorm']
            [1, 'Screech']
            [5, 'Sandstorm']
            [10, 'Screech']
            [14, 'Chip Away']
            [19, 'Rock Slide']
            [23, 'Scary Face']
            [28, 'Thrash']
            [34, 'Dark Pulse']
            [41, 'Payback']
            [47, 'Crunch']
            [54, 'Earthquake']
            [60, 'Stone Edge']
            [67, 'Hyper Beam']
        ],
    ],

    ['248',
        [
            [1, 'Thunder Fang']
            [1, 'Ice Fang']
            [1, 'Fire Fang']
            [1, 'Bite']
            [1, 'Leer']
            [1, 'Sandstorm']
            [1, 'Screech']
            [5, 'Sandstorm']
            [10, 'Screech']
            [14, 'Chip Away']
            [19, 'Rock Slide']
            [23, 'Scary Face']
            [28, 'Thrash']
            [34, 'Dark Pulse']
            [41, 'Payback']
            [47, 'Crunch']
            [54, 'Earthquake']
            [63, 'Stone Edge']
            [73, 'Hyper Beam']
            [82, 'Giga Impact']
        ],
    ],

    ['249',
        [
            [1, 'Whirlwind']
            [1, 'Weather Ball']
            [9, 'Gust']
            [15, 'Dragon Rush']
            [23, 'Extrasensory']
            [29, 'Rain Dance']
            [37, 'Hydro Pump']
            [43, 'Aeroblast']
            [50, 'Punishment']
            [57, 'Ancient Power']
            [65, 'Safeguard']
            [71, 'Recover']
            [79, 'Future Sight']
            [85, 'Natural Gift']
            [93, 'Calm Mind']
            [99, 'Sky Attack']
        ],
    ],

    ['250',
        [
            [1, 'Whirlwind']
            [1, 'Weather Ball']
            [9, 'Gust']
            [15, 'Brave Bird']
            [23, 'Extrasensory']
            [29, 'Sunny Day']
            [37, 'Fire Blast']
            [43, 'Sacred Fire']
            [50, 'Punishment']
            [57, 'Ancient Power']
            [65, 'Safeguard']
            [71, 'Recover']
            [79, 'Future Sight']
            [85, 'Natural Gift']
            [93, 'Calm Mind']
            [99, 'Sky Attack']
        ],
    ],

    ['251',
        [
            [1, 'Leech Seed']
            [1, 'Confusion']
            [1, 'Recover']
            [1, 'Heal Bell']
            [10, 'Safeguard']
            [19, 'Magical Leaf']
            [28, 'Ancient Power']
            [37, 'Baton Pass']
            [46, 'Natural Gift']
            [55, 'Heal Block']
            [64, 'Future Sight']
            [73, 'Healing Wish']
            [82, 'Leaf Storm']
            [91, 'Perish Song']
        ],
    ],

    ['252',
        [
            [1, 'Pound']
            [1, 'Leer']
            [5, 'Absorb']
            [9, 'Quick Attack']
            [13, 'Mega Drain']
            [17, 'Pursuit']
            [21, 'Giga Drain']
            [25, 'Agility']
            [29, 'Slam']
            [33, 'Detect']
            [37, 'Energy Ball']
            [41, 'Quick Guard']
            [45, 'Endeavor']
            [49, 'Screech']
        ],
    ],

    ['253',
        [
            [0, 'Fury Cutter']
            [1, 'Fury Cutter']
            [1, 'Pound']
            [1, 'Leer']
            [1, 'Absorb']
            [1, 'Quick Attack']
            [5, 'Absorb']
            [9, 'Quick Attack']
            [13, 'Mega Drain']
            [18, 'Pursuit']
            [23, 'Leaf Blade']
            [28, 'Agility']
            [33, 'Slam']
            [38, 'Detect']
            [43, 'X Scissor']
            [48, 'False Swipe']
            [53, 'Quick Guard']
            [58, 'Leaf Storm']
            [63, 'Screech']
        ],
    ],

    ['254',
        [
            [0, 'Dual Chop']
            [1, 'Dual Chop']
            [1, 'Fury Cutter']
            [1, 'Leaf Storm']
            [1, 'Night Slash']
            [1, 'Pound']
            [1, 'Leer']
            [1, 'Absorb']
            [1, 'Quick Attack']
            [5, 'Absorb']
            [9, 'Quick Attack']
            [13, 'Mega Drain']
            [18, 'Pursuit']
            [23, 'Leaf Blade']
            [28, 'Agility']
            [33, 'Slam']
            [39, 'Detect']
            [45, 'X Scissor']
            [51, 'False Swipe']
            [57, 'Quick Guard']
            [63, 'Leaf Storm']
            [69, 'Screech']
        ],
    ],

    ['255',
        [
            [1, 'Scratch']
            [1, 'Growl']
            [5, 'Ember']
            [10, 'Sand Attack']
            [14, 'Peck']
            [19, 'Fire Spin']
            [23, 'Quick Attack']
            [28, 'Flame Burst']
            [32, 'Focus Energy']
            [37, 'Slash']
            [41, 'Mirror Move']
            [46, 'Flamethrower']
        ],
    ],

    ['256',
        [
            [0, 'Double Kick']
            [1, 'Double Kick']
            [1, 'Scratch']
            [1, 'Growl']
            [1, 'Ember']
            [1, 'Sand Attack']
            [5, 'Ember']
            [10, 'Sand Attack']
            [14, 'Peck']
            [20, 'Flame Charge']
            [25, 'Quick Attack']
            [31, 'Bulk Up']
            [36, 'Focus Energy']
            [42, 'Slash']
            [47, 'Mirror Move']
            [53, 'Sky Uppercut']
            [58, 'Flare Blitz']
        ],
    ],

    ['257',
        [
            [0, 'Blaze Kick']
            [1, 'Blaze Kick']
            [1, 'Double Kick']
            [1, 'Flare Blitz']
            [1, 'Fire Punch']
            [1, 'High Jump Kick']
            [1, 'Scratch']
            [1, 'Growl']
            [1, 'Ember']
            [1, 'Sand Attack']
            [5, 'Ember']
            [10, 'Sand Attack']
            [14, 'Peck']
            [20, 'Flame Charge']
            [25, 'Quick Attack']
            [31, 'Bulk Up']
            [37, 'Focus Energy']
            [44, 'Slash']
            [50, 'Brave Bird']
            [57, 'Sky Uppercut']
            [63, 'Flare Blitz']
        ],
    ],

    ['258',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [4, 'Water Gun']
            [9, 'Mud Slap']
            [12, 'Foresight']
            [17, 'Bide']
            [20, 'Mud Sport']
            [25, 'Rock Throw']
            [28, 'Protect']
            [33, 'Whirlpool']
            [36, 'Take Down']
            [41, 'Hydro Pump']
            [44, 'Endeavor']
        ],
    ],

    ['259',
        [
            [0, 'Mud Shot']
            [1, 'Mud Shot']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Water Gun']
            [1, 'Mud Slap']
            [4, 'Water Gun']
            [9, 'Mud Slap']
            [12, 'Foresight']
            [18, 'Bide']
            [22, 'Mud Bomb']
            [28, 'Rock Slide']
            [32, 'Protect']
            [38, 'Muddy Water']
            [42, 'Take Down']
            [48, 'Earthquake']
            [52, 'Endeavor']
        ],
    ],

    ['260',
        [
            [1, 'Mud Shot']
            [1, 'Hammer Arm']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Water Gun']
            [1, 'Mud Slap']
            [4, 'Water Gun']
            [9, 'Mud Slap']
            [12, 'Foresight']
            [18, 'Bide']
            [22, 'Mud Bomb']
            [28, 'Rock Slide']
            [32, 'Protect']
            [39, 'Muddy Water']
            [44, 'Take Down']
            [51, 'Earthquake']
            [56, 'Endeavor']
            [63, 'Hammer Arm']
        ],
    ],

    ['261',
        [
            [1, 'Tackle']
            [4, 'Howl']
            [7, 'Sand Attack']
            [10, 'Bite']
            [13, 'Odor Sleuth']
            [16, 'Roar']
            [19, 'Swagger']
            [22, 'Assurance']
            [25, 'Scary Face']
            [28, 'Embargo']
            [31, 'Taunt']
            [34, 'Crunch']
            [37, 'Yawn']
            [40, 'Take Down']
            [43, 'Sucker Punch']
            [46, 'Play Rough']
        ],
    ],

    ['262',
        [
            [0, 'Snarl']
            [1, 'Snarl']
            [1, 'Fire Fang']
            [1, 'Thunder Fang']
            [1, 'Ice Fang']
            [1, 'Crunch']
            [1, 'Thief']
            [1, 'Tackle']
            [1, 'Howl']
            [1, 'Sand Attack']
            [1, 'Bite']
            [4, 'Howl']
            [7, 'Sand Attack']
            [10, 'Bite']
            [13, 'Odor Sleuth']
            [16, 'Roar']
            [20, 'Swagger']
            [24, 'Assurance']
            [28, 'Scary Face']
            [32, 'Embargo']
            [36, 'Taunt']
            [40, 'Crunch']
            [44, 'Yawn']
            [48, 'Take Down']
            [52, 'Sucker Punch']
            [56, 'Play Rough']
        ],
    ],

    ['263',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [5, 'Tail Whip']
            [7, 'Sand Attack']
            [11, 'Headbutt']
            [12, 'Baby Doll Eyes']
            [13, 'Odor Sleuth']
            [17, 'Mud Sport']
            [19, 'Pin Missile']
            [23, 'Covet']
            [25, 'Bestow']
            [29, 'Flail']
            [31, 'Take Down']
            [35, 'Rest']
            [37, 'Belly Drum']
            [41, 'Fling']
        ], //Hoenn
        [
            [1, 'Tackle']
            [1, 'Leer']
            [3, 'Sand Attack']
            [6, 'Lick']
            [9, 'Snarl']
            [12, 'Headbutt']
            [15, 'Baby Doll Eyes']
            [18, 'Pin Missile']
            [21, 'Rest']
            [24, 'Take Down']
            [27, 'Scary Face']
            [30, 'Counter']
            [33, 'Taunt']
            [36, 'Double Edge']
        ], //Galarian
    ], //Zigzagoon

    ['264',
        [
            [1, 'Play Rough']
            [1, 'Rototiller']
            [1, 'Switcheroo']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Tail Whip']
            [1, 'Sand Attack']
            [5, 'Tail Whip']
            [7, 'Sand Attack']
            [11, 'Headbutt']
            [13, 'Odor Sleuth']
            [17, 'Mud Sport']
            [19, 'Fury Swipes']
            [24, 'Covet']
            [27, 'Bestow']
            [32, 'Slash']
            [35, 'Double Edge']
            [40, 'Rest']
            [43, 'Belly Drum']
            [48, 'Fling']
        ], //Hoenn
        [
            [0, 'Night Slash']
            [1, 'Night Slash']
            [1, 'Switcheroo']
            [1, 'Pin Missile']
            [1, 'Baby Doll Eyes']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Sand Attack']
            [1, 'Lick']
            [9, 'Snarl']
            [12, 'Headbutt']
            [15, 'Hone Claws']
            [18, 'Fury Swipes']
            [23, 'Rest']
            [28, 'Take Down']
            [33, 'Scary Face']
            [38, 'Counter']
            [43, 'Taunt']
            [48, 'Double Edge']
        ], //Galarian
    ], //Linoone

    ['265',
        [
            [1, 'Tackle']
            [1, 'String Shot']
            [5, 'Poison Sting']
            [15, 'Bug Bite']
        ],
    ],

    ['266',
        [
            [0, 'Harden']
            [1, 'Harden']
        ],
    ],

    ['267',
        [
            [0, 'Gust']
            [1, 'Gust']
            [12, 'Absorb']
            [15, 'Stun Spore']
            [17, 'Morning Sun']
            [20, 'Air Cutter']
            [22, 'Mega Drain']
            [25, 'Silver Wind']
            [27, 'Attract']
            [30, 'Whirlwind']
            [32, 'Giga Drain']
            [35, 'Bug Buzz']
            [37, 'Rage']
            [40, 'Quiver Dance']
        ],
    ],

    ['268',
        [
            [0, 'Harden']
            [1, 'Harden']
        ],
    ],

    ['269',
        [
            [0, 'Gust']
            [1, 'Gust']
            [12, 'Confusion']
            [15, 'Poison Powder']
            [17, 'Moonlight']
            [20, 'Venoshock']
            [22, 'Psybeam']
            [25, 'Silver Wind']
            [27, 'Light Screen']
            [30, 'Whirlwind']
            [32, 'Toxic']
            [35, 'Bug Buzz']
            [37, 'Protect']
            [40, 'Quiver Dance']
        ],
    ],

    ['270',
        [
            [1, 'Astonish']
            [3, 'Growl']
            [6, 'Absorb']
            [9, 'Bubble']
            [12, 'Natural Gift']
            [15, 'Mist']
            [18, 'Mega Drain']
            [21, 'Bubble Beam']
            [24, 'Nature Power']
            [27, 'Rain Dance']
            [30, 'Giga Drain']
            [33, 'Zen Headbutt']
            [36, 'Energy Ball']
        ],
    ],

    ['271',
        [
            [1, 'Astonish']
            [3, 'Growl']
            [6, 'Absorb']
            [9, 'Bubble']
            [12, 'Fury Swipes']
            [16, 'Fake Out']
            [20, 'Water Sport']
            [24, 'Bubble Beam']
            [28, 'Nature Power']
            [32, 'Uproar']
            [36, 'Knock Off']
            [40, 'Zen Headbutt']
            [44, 'Hydro Pump']
        ],
    ],

    ['272',
        [
            [1, 'Astonish']
            [1, 'Growl']
            [1, 'Mega Drain']
            [1, 'Nature Power']
        ],
    ],

    ['273',
        [
            [1, 'Bide']
            [3, 'Harden']
            [9, 'Growth']
            [15, 'Nature Power']
            [21, 'Synthesis']
            [27, 'Sunny Day']
            [33, 'Explosion']
        ],
    ],

    ['274',
        [
            [0, 'Razor Leaf']
            [1, 'Razor Leaf']
            [1, 'Pound']
            [3, 'Harden']
            [6, 'Growth']
            [9, 'Torment']
            [12, 'Fake Out']
            [16, 'Nature Power']
            [20, 'Razor Wind']
            [24, 'Feint Attack']
            [28, 'Leaf Blade']
            [32, 'Swagger']
            [36, 'Extrasensory']
        ],
    ],

    ['275',
        [
            [1, 'Razor Leaf']
            [1, 'Feint Attack']
            [1, 'Whirlwind']
            [1, 'Nasty Plot']
            [20, 'Leaf Tornado']
            [32, 'Hurricane']
            [44, 'Leaf Storm']
        ],
    ],

    ['276',
        [
            [1, 'Peck']
            [1, 'Growl']
            [5, 'Focus Energy']
            [9, 'Quick Attack']
            [13, 'Wing Attack']
            [17, 'Double Team']
            [21, 'Aerial Ace']
            [25, 'Quick Guard']
            [29, 'Agility']
            [33, 'Air Slash']
            [37, 'Endeavor']
            [41, 'Brave Bird']
            [45, 'Reversal']
        ],
    ],

    ['277',
        [
            [1, 'Brave Bird']
            [1, 'Air Slash']
            [1, 'Pluck']
            [1, 'Peck']
            [1, 'Growl']
            [1, 'Focus Energy']
            [1, 'Quick Attack']
            [5, 'Focus Energy']
            [9, 'Quick Attack']
            [13, 'Wing Attack']
            [17, 'Double Team']
            [21, 'Aerial Ace']
            [27, 'Quick Guard']
            [33, 'Agility']
            [39, 'Air Slash']
            [45, 'Endeavor']
            [51, 'Brave Bird']
            [57, 'Reversal']
        ],
    ],

    ['278',
        [
            [1, 'Growl']
            [1, 'Water Gun']
            [5, 'Supersonic']
            [8, 'Wing Attack']
            [12, 'Mist']
            [15, 'Water Pulse']
            [19, 'Quick Attack']
            [22, 'Air Cutter']
            [26, 'Pursuit']
            [29, 'Aerial Ace']
            [33, 'Roost']
            [36, 'Agility']
            [40, 'Air Slash']
            [43, 'Hurricane']
        ],
    ],

    ['279',
        [
            [0, 'Protect']
            [1, 'Protect']
            [1, 'Hurricane']
            [1, 'Hydro Pump']
            [1, 'Tailwind']
            [1, 'Soak']
            [1, 'Growl']
            [1, 'Water Gun']
            [1, 'Water Sport']
            [1, 'Wing Attack']
            [5, 'Supersonic']
            [8, 'Wing Attack']
            [12, 'Mist']
            [15, 'Water Pulse']
            [19, 'Payback']
            [22, 'Brine']
            [28, 'Fling']
            [33, 'Stockpile']
            [33, 'Swallow']
            [33, 'Spit Up']
            [39, 'Roost']
            [44, 'Tailwind']
            [50, 'Hydro Pump']
            [55, 'Hurricane']
        ],
    ],

    ['280',
        [
            [1, 'Growl']
            [4, 'Confusion']
            [6, 'Double Team']
            [9, 'Teleport']
            [11, 'Disarming Voice']
            [14, 'Lucky Chant']
            [17, 'Magical Leaf']
            [19, 'Heal Pulse']
            [22, 'Draining Kiss']
            [24, 'Calm Mind']
            [27, 'Psychic']
            [29, 'Imprison']
            [32, 'Future Sight']
            [34, 'Charm']
            [37, 'Hypnosis']
            [39, 'Dream Eater']
            [42, 'Stored Power']
        ],
    ],

    ['281',
        [
            [1, 'Growl']
            [1, 'Confusion']
            [1, 'Double Team']
            [1, 'Teleport']
            [4, 'Confusion']
            [6, 'Double Team']
            [9, 'Teleport']
            [11, 'Disarming Voice']
            [14, 'Lucky Chant']
            [17, 'Magical Leaf']
            [19, 'Heal Pulse']
            [23, 'Draining Kiss']
            [26, 'Calm Mind']
            [30, 'Psychic']
            [33, 'Imprison']
            [37, 'Future Sight']
            [40, 'Charm']
            [44, 'Hypnosis']
            [47, 'Dream Eater']
            [51, 'Stored Power']
        ],
    ],

    ['282',
        [
            [1, 'Moonblast']
            [1, 'Stored Power']
            [1, 'Misty Terrain']
            [1, 'Healing Wish']
            [1, 'Growl']
            [1, 'Confusion']
            [1, 'Double Team']
            [1, 'Teleport']
            [4, 'Confusion']
            [6, 'Double Team']
            [9, 'Teleport']
            [11, 'Disarming Voice']
            [14, 'Wish']
            [17, 'Magical Leaf']
            [19, 'Heal Pulse']
            [23, 'Draining Kiss']
            [26, 'Calm Mind']
            [31, 'Psychic']
            [35, 'Imprison']
            [40, 'Future Sight']
            [44, 'Captivate']
            [49, 'Hypnosis']
            [53, 'Dream Eater']
            [58, 'Stored Power']
            [62, 'Moonblast']
        ],
    ],

    ['283',
        [
            [1, 'Bubble']
            [6, 'Quick Attack']
            [9, 'Sweet Scent']
            [14, 'Water Sport']
            [17, 'Bubble Beam']
            [22, 'Agility']
            [25, 'Mist']
            [25, 'Haze']
            [30, 'Aqua Jet']
            [35, 'Baton Pass']
            [38, 'Sticky Web']
        ],
    ],

    ['284',
        [
            [1, 'Quiver Dance']
            [1, 'Whirlwind']
            [1, 'Bug Buzz']
            [1, 'Ominous Wind']
            [1, 'Bubble']
            [1, 'Quick Attack']
            [1, 'Sweet Scent']
            [1, 'Water Sport']
            [6, 'Quick Attack']
            [9, 'Sweet Scent']
            [14, 'Water Sport']
            [17, 'Gust']
            [22, 'Scary Face']
            [22, 'Air Cutter']
            [26, 'Stun Spore']
            [32, 'Silver Wind']
            [38, 'Air Slash']
            [42, 'Bug Buzz']
            [48, 'Whirlwind']
            [52, 'Quiver Dance']
        ],
    ],

    ['285',
        [
            [1, 'Absorb']
            [1, 'Tackle']
            [5, 'Stun Spore']
            [8, 'Leech Seed']
            [12, 'Mega Drain']
            [15, 'Headbutt']
            [19, 'Poison Powder']
            [22, 'Worry Seed']
            [26, 'Giga Drain']
            [29, 'Growth']
            [33, 'Toxic']
            [36, 'Seed Bomb']
            [40, 'Spore']
        ],
    ],

    ['286',
        [
            [0, 'Mach Punch']
            [1, 'Mach Punch']
            [1, 'Absorb']
            [1, 'Tackle']
            [1, 'Stun Spore']
            [1, 'Leech Seed']
            [5, 'Stun Spore']
            [8, 'Leech Seed']
            [12, 'Mega Drain']
            [15, 'Headbutt']
            [19, 'Feint']
            [22, 'Counter']
            [28, 'Force Palm']
            [33, 'Mind Reader']
            [39, 'Sky Uppercut']
            [44, 'Seed Bomb']
            [50, 'Dynamic Punch']
        ],
    ],

    ['287',
        [
            [1, 'Scratch']
            [1, 'Yawn']
            [6, 'Encore']
            [9, 'Slack Off']
            [14, 'Feint Attack']
            [17, 'Amnesia']
            [22, 'Covet']
            [25, 'Chip Away']
            [30, 'Counter']
            [33, 'Flail']
            [38, 'Play Rough']
        ],
    ],

    ['288',
        [
            [1, 'Reversal']
            [1, 'Scratch']
            [1, 'Focus Energy']
            [1, 'Encore']
            [1, 'Uproar']
            [6, 'Encore']
            [9, 'Uproar']
            [14, 'Fury Swipes']
            [17, 'Endure']
            [23, 'Slash']
            [27, 'Chip Away']
            [33, 'Counter']
            [37, 'Focus Punch']
            [43, 'Reversal']
        ],
    ],

    ['289',
        [
            [0, 'Swagger']
            [1, 'Swagger']
            [1, 'Hammer Arm']
            [1, 'Punishment']
            [1, 'Fling']
            [1, 'Scratch']
            [1, 'Yawn']
            [1, 'Encore']
            [1, 'Slack Off']
            [6, 'Encore']
            [9, 'Slack Off']
            [14, 'Feint Attack']
            [17, 'Amnesia']
            [23, 'Covet']
            [27, 'Chip Away']
            [33, 'Counter']
            [39, 'Flail']
            [47, 'Fling']
            [53, 'Punishment']
            [61, 'Hammer Arm']
        ],
    ],

    ['290',
        [
            [1, 'Scratch']
            [1, 'Harden']
            [5, 'Absorb']
            [9, 'Sand Attack']
            [13, 'Fury Swipes']
            [17, 'Mud Slap']
            [21, 'Metal Claw']
            [25, 'Mind Reader']
            [29, 'Bide']
            [33, 'False Swipe']
            [37, 'Dig']
        ],
    ],

    ['291',
        [
            [0, 'Double Team']
            [0, 'Screech']
            [0, 'Fury Cutter']
            [1, 'Double Team']
            [1, 'Screech']
            [1, 'Fury Cutter']
            [1, 'Bug Bite']
            [1, 'Scratch']
            [1, 'Harden']
            [1, 'Absorb']
            [1, 'Sand Attack']
            [5, 'Absorb']
            [9, 'Sand Attack']
            [13, 'Fury Swipes']
            [17, 'Agility']
            [23, 'Slash']
            [29, 'Mind Reader']
            [35, 'Baton Pass']
            [41, 'Swords Dance']
            [47, 'X Scissor']
        ],
    ],

    ['292',
        [
            [1, 'Scratch']
            [1, 'Harden']
            [1, 'Absorb']
            [1, 'Sand Attack']
            [5, 'Absorb']
            [9, 'Sand Attack']
            [13, 'Fury Swipes']
            [17, 'Spite']
            [21, 'Shadow Sneak']
            [25, 'Mind Reader']
            [29, 'Confuse Ray']
            [33, 'Shadow Ball']
            [37, 'Grudge']
            [41, 'Heal Block']
            [45, 'Phantom Force']
        ],
    ],

    ['293',
        [
            [1, 'Pound']
            [4, 'Echoed Voice']
            [8, 'Astonish']
            [11, 'Howl']
            [15, 'Screech']
            [18, 'Supersonic']
            [22, 'Stomp']
            [25, 'Uproar']
            [29, 'Roar']
            [32, 'Rest']
            [36, 'Sleep Talk']
            [39, 'Hyper Voice']
            [43, 'Synchronoise']
        ],
    ],

    ['294',
        [
            [0, 'Bite']
            [1, 'Bite']
            [1, 'Pound']
            [1, 'Echoed Voice']
            [1, 'Astonish']
            [1, 'Howl']
            [4, 'Echoed Voice']
            [9, 'Astonish']
            [11, 'Howl']
            [15, 'Screech']
            [18, 'Supersonic']
            [23, 'Stomp']
            [27, 'Uproar']
            [32, 'Roar']
            [36, 'Rest']
            [41, 'Sleep Talk']
            [45, 'Hyper Voice']
            [50, 'Synchronoise']
        ],
    ],

    ['295',
        [
            [0, 'Crunch']
            [1, 'Crunch']
            [1, 'Bite']
            [1, 'Boomburst']
            [1, 'Ice Fang']
            [1, 'Fire Fang']
            [1, 'Thunder Fang']
            [1, 'Pound']
            [1, 'Echoed Voice']
            [1, 'Astonish']
            [1, 'Howl']
            [4, 'Echoed Voice']
            [9, 'Astonish']
            [11, 'Howl']
            [15, 'Screech']
            [18, 'Supersonic']
            [23, 'Stomp']
            [27, 'Uproar']
            [32, 'Roar']
            [36, 'Rest']
            [42, 'Sleep Talk']
            [47, 'Hyper Voice']
            [53, 'Synchronoise']
            [58, 'Boomburst']
            [64, 'Hyper Beam']
        ],
    ],

    ['296',
        [
            [1, 'Tackle']
            [1, 'Focus Energy']
            [4, 'Sand Attack']
            [7, 'Arm Thrust']
            [10, 'Fake Out']
            [13, 'Force Palm']
            [16, 'Whirlwind']
            [19, 'Knock Off']
            [22, 'Vital Throw']
            [25, 'Belly Drum']
            [28, 'Smelling Salts']
            [31, 'Seismic Toss']
            [34, 'Wake Up Slap']
            [37, 'Endure']
            [40, 'Close Combat']
            [43, 'Reversal']
            [46, 'Heavy Slam']
        ],
    ],

    ['297',
        [
            [1, 'Brine']
            [1, 'Tackle']
            [1, 'Focus Energy']
            [1, 'Sand Attack']
            [1, 'Arm Thrust']
            [4, 'Sand Attack']
            [7, 'Arm Thrust']
            [10, 'Fake Out']
            [13, 'Force Palm']
            [16, 'Whirlwind']
            [19, 'Knock Off']
            [22, 'Vital Throw']
            [26, 'Belly Drum']
            [30, 'Smelling Salts']
            [34, 'Seismic Toss']
            [38, 'Wake Up Slap']
            [42, 'Endure']
            [46, 'Close Combat']
            [50, 'Reversal']
            [54, 'Heavy Slam']
        ],
    ],

    ['298',
        [
            [1, 'Splash']
            [1, 'Water Gun']
            [2, 'Tail Whip']
            [5, 'Water Sport']
            [7, 'Bubble']
            [10, 'Charm']
            [13, 'Bubble Beam']
            [16, 'Helping Hand']
            [20, 'Slam']
            [23, 'Bounce']
        ],
    ],

    ['299',
        [
            [1, 'Tackle']
            [4, 'Harden']
            [7, 'Block']
            [10, 'Rock Throw']
            [13, 'Thunder Wave']
            [16, 'Rest']
            [19, 'Spark']
            [22, 'Rock Slide']
            [25, 'Power Gem']
            [28, 'Rock Blast']
            [31, 'Discharge']
            [34, 'Sandstorm']
            [37, 'Earth Power']
            [40, 'Stone Edge']
            [43, 'Lock On']
            [43, 'Zap Cannon']
        ],
    ],

    ['300',
        [
            [1, 'Fake Out']
            [1, 'Growl']
            [1, 'Tail Whip']
            [1, 'Tackle']
            [4, 'Foresight']
            [7, 'Sing']
            [10, 'Attract']
            [13, 'Disarming Voice']
            [16, 'Double Slap']
            [19, 'Copycat']
            [22, 'Feint Attack']
            [25, 'Charm']
            [28, 'Wake Up Slap']
            [31, 'Assist']
            [34, 'Covet']
            [37, 'Heal Bell']
            [40, 'Double Edge']
            [43, 'Captivate']
            [46, 'Play Rough']
        ],
    ],

    ['301',
        [
            [1, 'Fake Out']
            [1, 'Sing']
            [1, 'Attract']
            [1, 'Double Slap']
        ],
    ],

    ['302',
        [
            [1, 'Leer']
            [1, 'Scratch']
            [4, 'Foresight']
            [6, 'Night Shade']
            [9, 'Astonish']
            [11, 'Fury Swipes']
            [14, 'Detect']
            [16, 'Shadow Sneak']
            [19, 'Feint Attack']
            [21, 'Fake Out']
            [24, 'Punishment']
            [26, 'Knock Off']
            [29, 'Shadow Claw']
            [31, 'Confuse Ray']
            [34, 'Zen Headbutt']
            [36, 'Power Gem']
            [39, 'Shadow Ball']
            [41, 'Foul Play']
            [44, 'Quash']
            [46, 'Mean Look']
        ],
    ],

    ['303',
        [
            [1, 'Play Rough']
            [1, 'Iron Head']
            [1, 'Taunt']
            [1, 'Growl']
            [1, 'Fairy Wind']
            [1, 'Astonish']
            [5, 'Fake Tears']
            [9, 'Bite']
            [13, 'Sweet Scent']
            [17, 'Vice Grip']
            [21, 'Feint Attack']
            [25, 'Baton Pass']
            [29, 'Crunch']
            [33, 'Iron Defense']
            [37, 'Sucker Punch']
            [41, 'Stockpile']
            [41, 'Swallow']
            [41, 'Spit Up']
            [45, 'Iron Head']
            [49, 'Play Rough']
        ],
    ],

    ['304',
        [
            [1, 'Tackle']
            [1, 'Harden']
            [4, 'Mud Slap']
            [7, 'Headbutt']
            [10, 'Metal Claw']
            [13, 'Rock Tomb']
            [16, 'Protect']
            [19, 'Roar']
            [22, 'Iron Head']
            [25, 'Rock Slide']
            [28, 'Take Down']
            [31, 'Metal Sound']
            [34, 'Iron Tail']
            [37, 'Iron Defense']
            [40, 'Double Edge']
            [43, 'Autotomize']
            [46, 'Heavy Slam']
            [49, 'Metal Burst']
        ],
    ],

    ['305',
        [
            [1, 'Tackle']
            [1, 'Harden']
            [1, 'Mud Slap']
            [1, 'Headbutt']
            [4, 'Mud Slap']
            [7, 'Headbutt']
            [10, 'Metal Claw']
            [13, 'Rock Tomb']
            [16, 'Protect']
            [19, 'Roar']
            [22, 'Iron Head']
            [25, 'Rock Slide']
            [28, 'Take Down']
            [31, 'Metal Sound']
            [35, 'Iron Tail']
            [39, 'Iron Defense']
            [43, 'Double Edge']
            [47, 'Autotomize']
            [51, 'Heavy Slam']
            [55, 'Metal Burst']
        ],
    ],

    ['306',
        [
            [1, 'Tackle']
            [1, 'Harden']
            [1, 'Mud Slap']
            [1, 'Headbutt']
            [4, 'Mud Slap']
            [7, 'Headbutt']
            [10, 'Metal Claw']
            [13, 'Rock Tomb']
            [16, 'Protect']
            [19, 'Roar']
            [22, 'Iron Head']
            [25, 'Rock Slide']
            [28, 'Take Down']
            [31, 'Metal Sound']
            [35, 'Iron Tail']
            [39, 'Iron Defense']
            [45, 'Double Edge']
            [51, 'Autotomize']
            [57, 'Heavy Slam']
            [63, 'Metal Burst']
        ],
    ],

    ['307',
        [
            [1, 'Bide']
            [4, 'Meditate']
            [7, 'Confusion']
            [9, 'Detect']
            [12, 'Endure']
            [15, 'Feint']
            [17, 'Force Palm']
            [20, 'Hidden Power']
            [23, 'Calm Mind']
            [25, 'Mind Reader']
            [28, 'High Jump Kick']
            [31, 'Psych Up']
            [33, 'Acupressure']
            [36, 'Power Trick']
            [39, 'Reversal']
            [41, 'Recover']
            [44, 'Counter']
        ],
    ],

    ['308',
        [
            [1, 'Zen Headbutt']
            [1, 'Fire Punch']
            [1, 'Thunder Punch']
            [1, 'Ice Punch']
            [1, 'Bide']
            [1, 'Meditate']
            [1, 'Confusion']
            [1, 'Detect']
            [4, 'Meditate']
            [7, 'Confusion']
            [9, 'Detect']
            [12, 'Endure']
            [15, 'Feint']
            [17, 'Force Palm']
            [20, 'Hidden Power']
            [23, 'Calm Mind']
            [25, 'Mind Reader']
            [28, 'High Jump Kick']
            [31, 'Psych Up']
            [33, 'Acupressure']
            [36, 'Power Trick']
            [42, 'Reversal']
            [47, 'Recover']
            [53, 'Counter']
        ],
    ],

    ['309',
        [
            [1, 'Tackle']
            [1, 'Thunder Wave']
            [4, 'Leer']
            [7, 'Howl']
            [10, 'Quick Attack']
            [13, 'Spark']
            [16, 'Odor Sleuth']
            [19, 'Thunder Fang']
            [24, 'Bite']
            [29, 'Discharge']
            [34, 'Roar']
            [39, 'Wild Charge']
            [44, 'Charge']
            [49, 'Thunder']
        ],
    ],

    ['310',
        [
            [1, 'Electric Terrain']
            [1, 'Fire Fang']
            [1, 'Tackle']
            [1, 'Thunder Wave']
            [1, 'Leer']
            [1, 'Howl']
            [4, 'Leer']
            [7, 'Howl']
            [10, 'Quick Attack']
            [13, 'Spark']
            [16, 'Odor Sleuth']
            [19, 'Thunder Fang']
            [24, 'Bite']
            [30, 'Discharge']
            [36, 'Roar']
            [42, 'Wild Charge']
            [48, 'Charge']
            [54, 'Thunder']
            [60, 'Electric Terrain']
        ],
    ],

    ['311',
        [
            [1, 'Nuzzle']
            [1, 'Play Nice']
            [1, 'Growl']
            [1, 'Thunder Wave']
            [1, 'Quick Attack']
            [4, 'Helping Hand']
            [7, 'Spark']
            [10, 'Encore']
            [13, 'Bestow']
            [16, 'Swift']
            [19, 'Electro Ball']
            [22, 'Copycat']
            [25, 'Charm']
            [28, 'Charge']
            [31, 'Discharge']
            [34, 'Baton Pass']
            [37, 'Agility']
            [40, 'Last Resort']
            [43, 'Thunder']
            [46, 'Nasty Plot']
            [49, 'Entrainment']
        ],
    ],

    ['312',
        [
            [1, 'Nuzzle']
            [1, 'Play Nice']
            [1, 'Growl']
            [1, 'Thunder Wave']
            [1, 'Quick Attack']
            [4, 'Helping Hand']
            [7, 'Spark']
            [10, 'Encore']
            [13, 'Switcheroo']
            [16, 'Swift']
            [19, 'Electro Ball']
            [22, 'Copycat']
            [25, 'Fake Tears']
            [28, 'Charge']
            [31, 'Discharge']
            [34, 'Baton Pass']
            [37, 'Agility']
            [40, 'Trump Card']
            [43, 'Thunder']
            [46, 'Nasty Plot']
            [49, 'Entrainment']
        ],
    ],

    ['313',
        [
            [1, 'Flash']
            [1, 'Tackle']
            [5, 'Double Team']
            [8, 'Confuse Ray']
            [12, 'Quick Attack']
            [15, 'Struggle Bug']
            [19, 'Moonlight']
            [22, 'Tail Glow']
            [26, 'Signal Beam']
            [29, 'Protect']
            [33, 'Zen Headbutt']
            [36, 'Helping Hand']
            [40, 'Bug Buzz']
            [43, 'Play Rough']
            [47, 'Double Edge']
            [50, 'Infestation']
        ],
    ],

    ['314',
        [
            [1, 'Play Nice']
            [1, 'Tackle']
            [5, 'Sweet Scent']
            [9, 'Charm']
            [12, 'Quick Attack']
            [15, 'Struggle Bug']
            [19, 'Moonlight']
            [22, 'Wish']
            [26, 'Encore']
            [29, 'Flatter']
            [33, 'Zen Headbutt']
            [36, 'Helping Hand']
            [40, 'Bug Buzz']
            [43, 'Play Rough']
            [47, 'Covet']
            [50, 'Infestation']
        ],
    ],

    ['315',
        [
            [1, 'Absorb']
            [4, 'Growth']
            [7, 'Poison Sting']
            [10, 'Stun Spore']
            [13, 'Mega Drain']
            [16, 'Leech Seed']
            [19, 'Magical Leaf']
            [22, 'Grass Whistle']
            [25, 'Giga Drain']
            [28, 'Toxic Spikes']
            [31, 'Sweet Scent']
            [34, 'Ingrain']
            [37, 'Petal Blizzard']
            [40, 'Toxic']
            [43, 'Aromatherapy']
            [46, 'Synthesis']
            [50, 'Petal Dance']
        ],
    ],

    ['316',
        [
            [1, 'Pound']
            [5, 'Yawn']
            [8, 'Poison Gas']
            [10, 'Sludge']
            [12, 'Amnesia']
            [17, 'Acid Spray']
            [20, 'Encore']
            [25, 'Toxic']
            [28, 'Stockpile']
            [28, 'Spit Up']
            [28, 'Swallow']
            [33, 'Sludge Bomb']
            [36, 'Gastro Acid']
            [41, 'Belch']
            [44, 'Wring Out']
            [49, 'Gunk Shot']
        ],
    ],

    ['317',
        [
            [0, 'Body Slam']
            [1, 'Body Slam']
            [1, 'Venom Drench']
            [1, 'Gunk Shot']
            [1, 'Wring Out']
            [1, 'Pound']
            [1, 'Yawn']
            [1, 'Poison Gas']
            [1, 'Sludge']
            [5, 'Yawn']
            [8, 'Poison Gas']
            [10, 'Sludge']
            [12, 'Amnesia']
            [17, 'Acid Spray']
            [20, 'Encore']
            [25, 'Toxic']
            [30, 'Stockpile']
            [30, 'Spit Up']
            [30, 'Swallow']
            [37, 'Sludge Bomb']
            [42, 'Gastro Acid']
            [49, 'Belch']
            [54, 'Wring Out']
            [61, 'Gunk Shot']
        ],
    ],

    ['318',
        [
            [1, 'Leer']
            [1, 'Bite']
            [4, 'Rage']
            [8, 'Focus Energy']
            [11, 'Aqua Jet']
            [15, 'Assurance']
            [18, 'Screech']
            [22, 'Swagger']
            [25, 'Ice Fang']
            [29, 'Scary Face']
            [32, 'Poison Fang']
            [36, 'Crunch']
            [39, 'Agility']
            [43, 'Take Down']
        ],
    ],

    ['319',
        [
            [0, 'Slash']
            [1, 'Slash']
            [1, 'Night Slash']
            [1, 'Feint']
            [1, 'Leer']
            [1, 'Bite']
            [1, 'Rage']
            [1, 'Focus Energy']
            [4, 'Rage']
            [8, 'Focus Energy']
            [11, 'Aqua Jet']
            [15, 'Assurance']
            [18, 'Screech']
            [22, 'Swagger']
            [25, 'Ice Fang']
            [29, 'Scary Face']
            [34, 'Poison Fang']
            [40, 'Crunch']
            [45, 'Agility']
            [51, 'Skull Bash']
            [56, 'Taunt']
            [62, 'Night Slash']
        ],
    ],

    ['320',
        [
            [1, 'Splash']
            [4, 'Growl']
            [7, 'Water Gun']
            [10, 'Rollout']
            [13, 'Whirlpool']
            [16, 'Astonish']
            [19, 'Water Pulse']
            [22, 'Mist']
            [25, 'Brine']
            [29, 'Rest']
            [33, 'Water Spout']
            [37, 'Amnesia']
            [41, 'Dive']
            [45, 'Bounce']
            [49, 'Hydro Pump']
            [53, 'Heavy Slam']
        ],
    ],

    ['321',
        [
            [1, 'Soak']
            [1, 'Noble Roar']
            [1, 'Heavy Slam']
            [1, 'Splash']
            [1, 'Growl']
            [1, 'Water Gun']
            [1, 'Rollout']
            [4, 'Growl']
            [7, 'Water Gun']
            [10, 'Rollout']
            [13, 'Whirlpool']
            [16, 'Astonish']
            [19, 'Water Pulse']
            [22, 'Mist']
            [25, 'Brine']
            [29, 'Rest']
            [33, 'Water Spout']
            [37, 'Amnesia']
            [44, 'Dive']
            [51, 'Bounce']
            [58, 'Hydro Pump']
            [65, 'Heavy Slam']
        ],
    ],

    ['322',
        [
            [1, 'Growl']
            [1, 'Tackle']
            [5, 'Ember']
            [8, 'Focus Energy']
            [12, 'Magnitude']
            [15, 'Flame Burst']
            [19, 'Amnesia']
            [22, 'Lava Plume']
            [26, 'Earth Power']
            [29, 'Curse']
            [31, 'Take Down']
            [36, 'Yawn']
            [40, 'Earthquake']
            [43, 'Flamethrower']
            [47, 'Double Edge']
        ],
    ],

    ['323',
        [
            [0, 'Rock Slide']
            [1, 'Rock Slide']
            [1, 'Fissure']
            [1, 'Eruption']
            [1, 'Growl']
            [1, 'Tackle']
            [1, 'Ember']
            [1, 'Focus Energy']
            [8, 'Ember']
            [8, 'Focus Energy']
            [12, 'Magnitude']
            [15, 'Flame Burst']
            [19, 'Amnesia']
            [22, 'Lava Plume']
            [26, 'Earth Power']
            [29, 'Curse']
            [31, 'Take Down']
            [39, 'Yawn']
            [46, 'Earthquake']
            [52, 'Eruption']
            [59, 'Fissure']
        ],
    ],

    ['324',
        [
            [1, 'Ember']
            [4, 'Smog']
            [7, 'Withdraw']
            [10, 'Rapid Spin']
            [13, 'Fire Spin']
            [15, 'Smokescreen']
            [18, 'Flame Wheel']
            [22, 'Curse']
            [25, 'Lava Plume']
            [27, 'Body Slam']
            [30, 'Protect']
            [34, 'Flamethrower']
            [38, 'Iron Defense']
            [40, 'Amnesia']
            [42, 'Flail']
            [45, 'Heat Wave']
            [47, 'Shell Smash']
            [50, 'Inferno']
        ],
    ],

    ['325',
        [
            [1, 'Splash']
            [7, 'Psywave']
            [10, 'Odor Sleuth']
            [14, 'Psybeam']
            [15, 'Psych Up']
            [18, 'Confuse Ray']
            [21, 'Magic Coat']
            [26, 'Zen Headbutt']
            [29, 'Power Gem']
            [29, 'Rest']
            [33, 'Snore']
            [38, 'Psyshock']
            [40, 'Payback']
            [44, 'Psychic']
            [50, 'Bounce']
        ],
    ],

    ['326',
        [
            [0, 'Teeter Dance']
            [1, 'Teeter Dance']
            [1, 'Belch']
            [1, 'Splash']
            [1, 'Psywave']
            [1, 'Odor Sleuth']
            [1, 'Psybeam']
            [7, 'Psywave']
            [10, 'Odor Sleuth']
            [14, 'Psybeam']
            [15, 'Psych Up']
            [18, 'Confuse Ray']
            [21, 'Magic Coat']
            [26, 'Zen Headbutt']
            [29, 'Power Gem']
            [35, 'Rest']
            [35, 'Snore']
            [42, 'Psyshock']
            [46, 'Payback']
            [52, 'Psychic']
            [60, 'Bounce']
        ],
    ],

    ['327',
        [
            [1, 'Tackle']
            [5, 'Copycat']
            [10, 'Feint Attack']
            [14, 'Psybeam']
            [19, 'Hypnosis']
            [23, 'Dizzy Punch']
            [28, 'Sucker Punch']
            [32, 'Teeter Dance']
            [37, 'Uproar']
            [41, 'Psych Up']
            [46, 'Double Edge']
            [50, 'Flail']
            [55, 'Thrash']
        ],
    ],

    ['328',
        [
            [1, 'Sand Attack']
            [1, 'Bite']
            [1, 'Feint Attack']
            [1, 'Bide']
            [5, 'Mud Slap']
            [8, 'Bulldoze']
            [12, 'Sand Tomb']
            [15, 'Rock Slide']
            [19, 'Dig']
            [22, 'Crunch']
            [26, 'Earth Power']
            [29, 'Feint']
            [33, 'Earthquake']
            [36, 'Sandstorm']
            [40, 'Superpower']
            [43, 'Hyper Beam']
            [47, 'Fissure']
        ],
    ],

    ['329',
        [
            [0, 'Dragon Breath']
            [1, 'Dragon Breath']
            [1, 'Sand Attack']
            [1, 'Sonic Boom']
            [1, 'Feint Attack']
            [1, 'Bide']
            [5, 'Mud Slap']
            [8, 'Bulldoze']
            [12, 'Sand Tomb']
            [15, 'Rock Slide']
            [19, 'Supersonic']
            [22, 'Screech']
            [26, 'Earth Power']
            [29, 'Bug Buzz']
            [33, 'Earthquake']
            [36, 'Sandstorm']
            [40, 'Uproar']
            [43, 'Hyper Beam']
            [47, 'Boomburst']
        ],
    ],

    ['330',
        [
            [0, 'Dragon Claw']
            [1, 'Dragon Claw']
            [1, 'Dragon Breath']
            [1, 'Dragon Dance']
            [1, 'Sand Attack']
            [1, 'Sonic Boom']
            [1, 'Feint Attack']
            [1, 'Bide']
            [5, 'Mud Slap']
            [8, 'Bulldoze']
            [12, 'Sand Tomb']
            [15, 'Rock Slide']
            [19, 'Supersonic']
            [22, 'Screech']
            [26, 'Earth Power']
            [29, 'Dragon Tail']
            [33, 'Earthquake']
            [36, 'Sandstorm']
            [40, 'Uproar']
            [43, 'Hyper Beam']
            [47, 'Dragon Rush']
        ],
    ],

    ['331',
        [
            [1, 'Poison Sting']
            [1, 'Leer']
            [4, 'Absorb']
            [7, 'Growth']
            [10, 'Leech Seed']
            [13, 'Sand Attack']
            [16, 'Needle Arm']
            [19, 'Feint Attack']
            [22, 'Ingrain']
            [26, 'Payback']
            [30, 'Spikes']
            [34, 'Sucker Punch']
            [38, 'Pin Missile']
            [42, 'Energy Ball']
            [46, 'Cotton Spore']
            [50, 'Sandstorm']
            [54, 'Destiny Bond']
        ],
    ],

    ['332',
        [
            [0, 'Spiky Shield']
            [1, 'Spiky Shield']
            [1, 'Destiny Bond']
            [1, 'Revenge']
            [1, 'Poison Sting']
            [1, 'Leer']
            [1, 'Absorb']
            [1, 'Growth']
            [4, 'Absorb']
            [7, 'Growth']
            [10, 'Leech Seed']
            [13, 'Sand Attack']
            [16, 'Needle Arm']
            [19, 'Feint Attack']
            [22, 'Ingrain']
            [26, 'Payback']
            [30, 'Spikes']
            [35, 'Sucker Punch']
            [38, 'Pin Missile']
            [44, 'Energy Ball']
            [49, 'Cotton Spore']
            [54, 'Sandstorm']
            [59, 'Destiny Bond']
        ],
    ],

    ['333',
        [
            [1, 'Peck']
            [1, 'Growl']
            [3, 'Astonish']
            [5, 'Sing']
            [7, 'Fury Attack']
            [9, 'Safeguard']
            [11, 'Disarming Voice']
            [14, 'Mist']
            [17, 'Round']
            [20, 'Natural Gift']
            [23, 'Take Down']
            [26, 'Refresh']
            [30, 'Mirror Move']
            [34, 'Cotton Guard']
            [38, 'Dragon Pulse']
            [42, 'Perish Song']
            [46, 'Moonblast']
        ],
    ],

    ['334',
        [
            [0, 'Dragon Breath']
            [1, 'Dragon Breath']
            [1, 'Sky Attack']
            [1, 'Pluck']
            [1, 'Peck']
            [1, 'Growl']
            [1, 'Astonish']
            [1, 'Sing']
            [3, 'Astonish']
            [5, 'Sing']
            [7, 'Fury Attack']
            [9, 'Safeguard']
            [11, 'Disarming Voice']
            [14, 'Mist']
            [17, 'Round']
            [20, 'Natural Gift']
            [23, 'Take Down']
            [26, 'Refresh']
            [30, 'Dragon Dance']
            [34, 'Cotton Guard']
            [40, 'Dragon Pulse']
            [46, 'Perish Song']
            [52, 'Moonblast']
            [59, 'Sky Attack']
        ],
    ],

    ['335',
        [
            [1, 'Scratch']
            [1, 'Leer']
            [5, 'Quick Attack']
            [8, 'Fury Cutter']
            [12, 'Pursuit']
            [15, 'Hone Claws']
            [19, 'Slash']
            [22, 'Revenge']
            [26, 'Crush Claw']
            [29, 'False Swipe']
            [33, 'Embargo']
            [36, 'Detect']
            [40, 'X Scissor']
            [43, 'Taunt']
            [47, 'Swords Dance']
            [50, 'Close Combat']
        ],
    ],

    ['336',
        [
            [1, 'Wrap']
            [1, 'Swagger']
            [4, 'Bite']
            [6, 'Lick']
            [9, 'Poison Tail']
            [11, 'Feint']
            [14, 'Screech']
            [16, 'Venoshock']
            [19, 'Glare']
            [21, 'Poison Fang']
            [24, 'Venom Drench']
            [26, 'Night Slash']
            [29, 'Gastro Acid']
            [31, 'Poison Jab']
            [34, 'Haze']
            [36, 'Swords Dance']
            [39, 'Crunch']
            [41, 'Belch']
            [44, 'Coil']
            [46, 'Wring Out']
        ],
    ],

    ['337',
        [
            [1, 'Power Gem']
            [1, 'Psyshock']
            [1, 'Moonblast']
            [1, 'Tackle']
            [1, 'Harden']
            [1, 'Confusion']
            [1, 'Rock Throw']
            [5, 'Hypnosis']
            [9, 'Rock Polish']
            [13, 'Psywave']
            [17, 'Embargo']
            [21, 'Rock Slide']
            [25, 'Cosmic Power']
            [29, 'Psychic']
            [33, 'Heal Block']
            [37, 'Stone Edge']
            [41, 'Future Sight']
            [45, 'Explosion']
            [49, 'Magic Room']
        ],
    ],

    ['338',
        [
            [1, 'Flare Blitz']
            [1, 'Tackle']
            [1, 'Harden']
            [1, 'Confusion']
            [1, 'Rock Throw']
            [5, 'Fire Spin']
            [9, 'Rock Polish']
            [13, 'Psywave']
            [17, 'Embargo']
            [21, 'Rock Slide']
            [25, 'Cosmic Power']
            [29, 'Psychic']
            [33, 'Heal Block']
            [37, 'Stone Edge']
            [41, 'Solar Beam']
            [45, 'Explosion']
            [49, 'Wonder Room']
        ],
    ],

    ['339',
        [
            [1, 'Mud Slap']
            [6, 'Mud Sport']
            [6, 'Water Sport']
            [9, 'Water Gun']
            [13, 'Mud Bomb']
            [15, 'Amnesia']
            [17, 'Water Pulse']
            [20, 'Magnitude']
            [25, 'Rest']
            [25, 'Snore']
            [28, 'Aqua Tail']
            [32, 'Earthquake']
            [35, 'Muddy Water']
            [39, 'Future Sight']
            [44, 'Fissure']
        ],
    ],

    ['340',
        [
            [0, 'Thrash']
            [1, 'Thrash']
            [1, 'Belch']
            [1, 'Zen Headbutt']
            [1, 'Tickle']
            [1, 'Mud Slap']
            [1, 'Mud Sport']
            [1, 'Water Sport']
            [1, 'Water Gun']
            [6, 'Mud Sport']
            [6, 'Water Sport']
            [9, 'Water Gun']
            [13, 'Mud Bomb']
            [15, 'Amnesia']
            [17, 'Water Pulse']
            [20, 'Magnitude']
            [25, 'Rest']
            [25, 'Snore']
            [28, 'Aqua Tail']
            [34, 'Earthquake']
            [39, 'Muddy Water']
            [45, 'Future Sight']
            [52, 'Fissure']
        ],
    ],

    ['341',
        [
            [1, 'Bubble']
            [5, 'Harden']
            [7, 'Vice Grip']
            [10, 'Leer']
            [14, 'Bubble Beam']
            [17, 'Protect']
            [20, 'Double Hit']
            [23, 'Knock Off']
            [26, 'Night Slash']
            [31, 'Razor Shell']
            [34, 'Taunt']
            [37, 'Swords Dance']
            [39, 'Crunch']
            [43, 'Crabhammer']
            [48, 'Guillotine']
        ],
    ],

    ['342',
        [
            [0, 'Swift']
            [1, 'Swift']
            [1, 'Bubble']
            [1, 'Harden']
            [1, 'Vice Grip']
            [1, 'Leer']
            [5, 'Harden']
            [7, 'Vice Grip']
            [10, 'Leer']
            [14, 'Bubble Beam']
            [17, 'Protect']
            [20, 'Double Hit']
            [23, 'Knock Off']
            [26, 'Night Slash']
            [32, 'Razor Shell']
            [36, 'Taunt']
            [40, 'Swords Dance']
            [43, 'Crunch']
            [48, 'Crabhammer']
            [54, 'Guillotine']
        ],
    ],

    ['343',
        [
            [1, 'Harden']
            [1, 'Confusion']
            [4, 'Rapid Spin']
            [7, 'Mud Slap']
            [10, 'Heal Block']
            [13, 'Rock Tomb']
            [16, 'Psybeam']
            [19, 'Ancient Power']
            [22, 'Cosmic Power']
            [25, 'Power Trick']
            [28, 'Self Destruct']
            [31, 'Extrasensory']
            [34, 'Guard Split']
            [34, 'Power Split']
            [37, 'Earth Power']
            [40, 'Sandstorm']
            [43, 'Imprison']
            [46, 'Explosion']
        ],
    ],

    ['344',
        [
            [0, 'Hyper Beam']
            [1, 'Hyper Beam']
            [1, 'Teleport']
            [1, 'Harden']
            [1, 'Confusion']
            [1, 'Rapid Spin']
            [4, 'Rapid Spin']
            [7, 'Mud Slap']
            [10, 'Heal Block']
            [13, 'Rock Tomb']
            [16, 'Psybeam']
            [19, 'Ancient Power']
            [22, 'Cosmic Power']
            [25, 'Power Trick']
            [28, 'Self Destruct']
            [31, 'Extrasensory']
            [34, 'Guard Split']
            [34, 'Power Split']
            [40, 'Earth Power']
            [46, 'Sandstorm']
            [52, 'Imprison']
            [58, 'Explosion']
        ],
    ],

    ['345',
        [
            [1, 'Astonish']
            [1, 'Constrict']
            [5, 'Acid']
            [9, 'Ingrain']
            [13, 'Confuse Ray']
            [17, 'Ancient Power']
            [21, 'Brine']
            [26, 'Giga Drain']
            [31, 'Gastro Acid']
            [36, 'Amnesia']
            [41, 'Energy Ball']
            [46, 'Stockpile']
            [46, 'Spit Up']
            [46, 'Swallow']
            [52, 'Wring Out']
        ],
    ],

    ['346',
        [
            [1, 'Wring Out']
            [1, 'Astonish']
            [1, 'Constrict']
            [1, 'Acid']
            [1, 'Ingrain']
            [5, 'Acid']
            [9, 'Ingrain']
            [13, 'Confuse Ray']
            [17, 'Ancient Power']
            [21, 'Brine']
            [26, 'Giga Drain']
            [31, 'Gastro Acid']
            [36, 'Amnesia']
            [44, 'Energy Ball']
            [52, 'Stockpile']
            [52, 'Spit Up']
            [52, 'Swallow']
            [61, 'Wring Out']
        ],
    ],

    ['347',
        [
            [1, 'Scratch']
            [1, 'Harden']
            [4, 'Mud Sport']
            [7, 'Water Gun']
            [10, 'Fury Cutter']
            [13, 'Smack Down']
            [17, 'Metal Claw']
            [21, 'Ancient Power']
            [25, 'Bug Bite']
            [29, 'Brine']
            [34, 'Slash']
            [39, 'Crush Claw']
            [44, 'X Scissor']
            [49, 'Protect']
            [55, 'Rock Blast']
        ],
    ],

    ['348',
        [
            [1, 'Scratch']
            [1, 'Harden']
            [1, 'Mud Sport']
            [1, 'Water Gun']
            [4, 'Mud Sport']
            [7, 'Water Gun']
            [10, 'Fury Cutter']
            [13, 'Smack Down']
            [17, 'Metal Claw']
            [21, 'Ancient Power']
            [25, 'Bug Bite']
            [29, 'Brine']
            [34, 'Slash']
            [39, 'Crush Claw']
            [46, 'X Scissor']
            [53, 'Protect']
            [61, 'Rock Blast']
        ],
    ],

    ['349',
        [
            [1, 'Splash']
            [15, 'Tackle']
            [30, 'Flail']
        ],
    ],

    ['350',
        [
            [0, 'Water Pulse']
            [1, 'Water Pulse']
            [1, 'Wrap']
            [1, 'Water Gun']
            [1, 'Water Sport']
            [1, 'Refresh']
            [4, 'Water Sport']
            [7, 'Refresh']
            [11, 'Disarming Voice']
            [14, 'Twister']
            [17, 'Aqua Ring']
            [21, 'Captivate']
            [24, 'Dragon Tail']
            [27, 'Recover']
            [31, 'Aqua Tail']
            [34, 'Attract']
            [37, 'Safeguard']
            [41, 'Coil']
            [44, 'Hydro Pump']
            [47, 'Rain Dance']
        ],
    ],

    ['351',
        [
            [1, 'Tackle']
            [10, 'Water Gun']
            [10, 'Ember']
            [10, 'Powder Snow']
            [15, 'Headbutt']
            [20, 'Rain Dance']
            [20, 'Sunny Day']
            [20, 'Hail']
            [25, 'Weather Ball']
            [35, 'Hydro Pump']
            [35, 'Fire Blast']
            [35, 'Blizzard']
            [45, 'Hurricane']
        ],
    ],

    ['352',
        [
            [1, 'Thief']
            [1, 'Tail Whip']
            [1, 'Astonish']
            [1, 'Lick']
            [1, 'Scratch']
            [4, 'Bind']
            [7, 'Shadow Sneak']
            [10, 'Feint']
            [13, 'Fury Swipes']
            [16, 'Feint Attack']
            [18, 'Psybeam']
            [21, 'Ancient Power']
            [25, 'Slash']
            [30, 'Camouflage']
            [33, 'Shadow Claw']
            [38, 'Screech']
            [42, 'Substitute']
            [46, 'Sucker Punch']
            [50, 'Synchronoise']
        ],
    ],

    ['353',
        [
            [1, 'Knock Off']
            [4, 'Screech']
            [7, 'Night Shade']
            [10, 'Spite']
            [13, 'Shadow Sneak']
            [16, 'Will O Wisp']
            [19, 'Feint Attack']
            [22, 'Hex']
            [26, 'Curse']
            [30, 'Shadow Ball']
            [34, 'Embargo']
            [38, 'Sucker Punch']
            [42, 'Snatch']
            [46, 'Grudge']
            [50, 'Trick']
            [54, 'Phantom Force']
        ],
    ],

    ['354',
        [
            [1, 'Phantom Force']
            [1, 'Knock Off']
            [1, 'Screech']
            [1, 'Night Shade']
            [1, 'Spite']
            [4, 'Screech']
            [7, 'Night Shade']
            [10, 'Spite']
            [13, 'Shadow Sneak']
            [16, 'Will O Wisp']
            [19, 'Feint Attack']
            [22, 'Hex']
            [26, 'Curse']
            [30, 'Shadow Ball']
            [34, 'Embargo']
            [40, 'Sucker Punch']
            [46, 'Snatch']
            [52, 'Grudge']
            [58, 'Trick']
            [64, 'Phantom Force']
        ],
    ],

    ['355',
        [
            [1, 'Leer']
            [1, 'Night Shade']
            [6, 'Disable']
            [9, 'Astonish']
            [14, 'Foresight']
            [17, 'Shadow Sneak']
            [22, 'Pursuit']
            [25, 'Will O Wisp']
            [30, 'Confuse Ray']
            [33, 'Curse']
            [38, 'Hex']
            [41, 'Shadow Ball']
            [46, 'Mean Look']
            [49, 'Payback']
            [54, 'Future Sight']
        ],
    ],

    ['356',
        [
            [0, 'Shadow Punch']
            [1, 'Shadow Punch']
            [1, 'Future Sight']
            [1, 'Fire Punch']
            [1, 'Ice Punch']
            [1, 'Thunder Punch']
            [1, 'Gravity']
            [1, 'Bind']
            [1, 'Leer']
            [1, 'Night Shade']
            [1, 'Disable']
            [1, 'Astonish']
            [6, 'Disable']
            [9, 'Astonish']
            [14, 'Foresight']
            [17, 'Shadow Sneak']
            [22, 'Pursuit']
            [25, 'Will O Wisp']
            [30, 'Confuse Ray']
            [33, 'Curse']
            [40, 'Hex']
            [45, 'Shadow Ball']
            [52, 'Mean Look']
            [57, 'Payback']
            [64, 'Future Sight']
        ],
    ],

    ['357',
        [
            [1, 'Leaf Storm']
            [1, 'Leer']
            [1, 'Gust']
            [1, 'Growth']
            [1, 'Razor Leaf']
            [6, 'Sweet Scent']
            [10, 'Stomp']
            [16, 'Magical Leaf']
            [21, 'Whirlwind']
            [26, 'Leaf Tornado']
            [30, 'Natural Gift']
            [36, 'Air Slash']
            [41, 'Body Slam']
            [46, 'Bestow']
            [50, 'Synthesis']
            [56, 'Solar Beam']
            [61, 'Leaf Storm']
        ],
    ],

    ['358',
        [
            [1, 'Healing Wish']
            [1, 'Synchronoise']
            [1, 'Wrap']
            [1, 'Growl']
            [1, 'Astonish']
            [1, 'Confusion']
            [4, 'Growl']
            [7, 'Astonish']
            [10, 'Confusion']
            [13, 'Yawn']
            [16, 'Psywave']
            [19, 'Take Down']
            [22, 'Extrasensory']
            [27, 'Heal Bell']
            [32, 'Uproar']
            [37, 'Safeguard']
            [42, 'Double Edge']
            [47, 'Heal Pulse']
            [52, 'Synchronoise']
            [57, 'Healing Wish']
        ],
    ],

    ['359',
        [
            [1, 'Perish Song']
            [1, 'Future Sight']
            [1, 'Scratch']
            [1, 'Feint']
            [1, 'Leer']
            [1, 'Quick Attack']
            [4, 'Leer']
            [7, 'Quick Attack']
            [10, 'Pursuit']
            [13, 'Taunt']
            [16, 'Bite']
            [19, 'Double Team']
            [22, 'Slash']
            [25, 'Swords Dance']
            [29, 'Night Slash']
            [33, 'Detect']
            [37, 'Psycho Cut']
            [41, 'Me First']
            [45, 'Sucker Punch']
            [49, 'Razor Wind']
            [53, 'Future Sight']
            [57, 'Perish Song']
        ],
    ],

    ['360',
        [
            [1, 'Splash']
            [1, 'Charm']
            [1, 'Encore']
            [15, 'Counter']
            [15, 'Mirror Coat']
            [15, 'Safeguard']
            [15, 'Destiny Bond']
        ],
    ],

    ['361',
        [
            [1, 'Powder Snow']
            [1, 'Leer']
            [5, 'Double Team']
            [10, 'Ice Shard']
            [14, 'Icy Wind']
            [19, 'Bite']
            [23, 'Ice Fang']
            [28, 'Headbutt']
            [32, 'Protect']
            [37, 'Frost Breath']
            [41, 'Crunch']
            [46, 'Blizzard']
            [50, 'Hail']
        ],
    ],

    ['362',
        [
            [0, 'Freeze Dry']
            [1, 'Freeze Dry']
            [1, 'Sheer Cold']
            [1, 'Powder Snow']
            [1, 'Leer']
            [1, 'Double Team']
            [1, 'Ice Shard']
            [5, 'Double Team']
            [10, 'Ice Shard']
            [14, 'Icy Wind']
            [19, 'Bite']
            [23, 'Ice Fang']
            [28, 'Headbutt']
            [32, 'Protect']
            [37, 'Frost Breath']
            [41, 'Crunch']
            [48, 'Blizzard']
            [54, 'Hail']
            [61, 'Sheer Cold']
        ],
    ],

    ['363',
        [
            [1, 'Defense Curl']
            [1, 'Powder Snow']
            [1, 'Growl']
            [1, 'Water Gun']
            [5, 'Rollout']
            [9, 'Encore']
            [13, 'Ice Ball']
            [17, 'Brine']
            [21, 'Aurora Beam']
            [26, 'Body Slam']
            [31, 'Rest']
            [31, 'Snore']
            [36, 'Hail']
            [41, 'Blizzard']
            [46, 'Sheer Cold']
        ],
    ],

    ['364',
        [
            [0, 'Swagger']
            [1, 'Swagger']
            [1, 'Defense Curl']
            [1, 'Powder Snow']
            [1, 'Growl']
            [1, 'Water Gun']
            [5, 'Rollout']
            [9, 'Encore']
            [13, 'Ice Ball']
            [17, 'Brine']
            [21, 'Aurora Beam']
            [26, 'Body Slam']
            [31, 'Rest']
            [31, 'Snore']
            [38, 'Hail']
            [45, 'Blizzard']
            [52, 'Sheer Cold']
        ],
    ],

    ['365',
        [
            [0, 'Ice Fang']
            [1, 'Ice Fang']
            [1, 'Swagger']
            [1, 'Crunch']
            [1, 'Defense Curl']
            [1, 'Powder Snow']
            [1, 'Growl']
            [1, 'Water Gun']
            [7, 'Rollout']
            [7, 'Encore']
            [13, 'Ice Ball']
            [19, 'Brine']
            [19, 'Aurora Beam']
            [25, 'Body Slam']
            [31, 'Rest']
            [31, 'Snore']
            [38, 'Hail']
            [49, 'Blizzard']
            [60, 'Sheer Cold']
        ],
    ],

    ['366',
        [
            [1, 'Clamp']
            [1, 'Water Gun']
            [1, 'Whirlpool']
            [1, 'Iron Defense']
            [50, 'Shell Smash']
        ],
    ],

    ['367',
        [
            [1, 'Whirlpool']
            [1, 'Bite']
            [5, 'Screech']
            [9, 'Scary Face']
            [11, 'Feint Attack']
            [14, 'Water Pulse']
            [16, 'Ice Fang']
            [19, 'Brine']
            [23, 'Sucker Punch']
            [26, 'Dive']
            [29, 'Baton Pass']
            [34, 'Crunch']
            [39, 'Aqua Tail']
            [45, 'Coil']
            [50, 'Hydro Pump']
        ],
    ],

    ['368',
        [
            [1, 'Whirlpool']
            [1, 'Confusion']
            [5, 'Water Sport']
            [9, 'Agility']
            [11, 'Draining Kiss']
            [14, 'Water Pulse']
            [16, 'Amnesia']
            [19, 'Aqua Ring']
            [23, 'Captivate']
            [26, 'Dive']
            [29, 'Baton Pass']
            [34, 'Psychic']
            [39, 'Aqua Tail']
            [45, 'Coil']
            [50, 'Hydro Pump']
        ],
    ],

    ['369',
        [
            [1, 'Flail']
            [1, 'Head Smash']
            [1, 'Tackle']
            [1, 'Harden']
            [1, 'Mud Sport']
            [1, 'Water Gun']
            [6, 'Mud Sport']
            [10, 'Water Gun']
            [15, 'Rock Tomb']
            [21, 'Ancient Power']
            [26, 'Dive']
            [31, 'Take Down']
            [35, 'Yawn']
            [41, 'Rest']
            [46, 'Hydro Pump']
            [50, 'Double Edge']
            [56, 'Head Smash']
        ],
    ],

    ['370',
        [
            [1, 'Tackle']
            [1, 'Charm']
            [4, 'Water Gun']
            [7, 'Agility']
            [9, 'Draining Kiss']
            [13, 'Lucky Chant']
            [17, 'Water Pulse']
            [20, 'Attract']
            [22, 'Heart Stamp']
            [26, 'Flail']
            [31, 'Sweet Kiss']
            [34, 'Take Down']
            [37, 'Captivate']
            [40, 'Aqua Ring']
            [42, 'Soak']
            [46, 'Hydro Pump']
            [49, 'Safeguard']
        ],
    ],

    ['371',
        [
            [1, 'Rage']
            [4, 'Ember']
            [7, 'Leer']
            [10, 'Bite']
            [13, 'Dragon Breath']
            [17, 'Headbutt']
            [21, 'Focus Energy']
            [25, 'Crunch']
            [29, 'Dragon Claw']
            [34, 'Zen Headbutt']
            [39, 'Scary Face']
            [44, 'Flamethrower']
            [49, 'Double Edge']
        ],
    ],

    ['372',
        [
            [0, 'Protect']
            [1, 'Protect']
            [1, 'Rage']
            [1, 'Ember']
            [1, 'Leer']
            [1, 'Bite']
            [4, 'Ember']
            [7, 'Leer']
            [10, 'Bite']
            [13, 'Dragon Breath']
            [17, 'Headbutt']
            [21, 'Focus Energy']
            [25, 'Crunch']
            [29, 'Dragon Claw']
            [35, 'Zen Headbutt']
            [42, 'Scary Face']
            [49, 'Flamethrower']
            [56, 'Double Edge']
        ],
    ],

    ['373',
        [
            [0, 'Fly']
            [1, 'Fly']
            [1, 'Protect']
            [1, 'Dragon Tail']
            [1, 'Fire Fang']
            [1, 'Thunder Fang']
            [1, 'Rage']
            [1, 'Ember']
            [1, 'Leer']
            [1, 'Bite']
            [4, 'Ember']
            [7, 'Leer']
            [10, 'Bite']
            [13, 'Dragon Breath']
            [17, 'Headbutt']
            [21, 'Focus Energy']
            [25, 'Crunch']
            [29, 'Dragon Claw']
            [35, 'Zen Headbutt']
            [42, 'Scary Face']
            [49, 'Flamethrower']
            [63, 'Double Edge']
        ],
    ],

    ['374',
        [
            [1, 'Take Down']
        ],
    ],

    ['375',
        [
            [0, 'Confusion']
            [0, 'Metal Claw']
            [1, 'Confusion']
            [1, 'Metal Claw']
            [1, 'Magnet Rise']
            [1, 'Take Down']
            [23, 'Pursuit']
            [26, 'Bullet Punch']
            [29, 'Miracle Eye']
            [32, 'Zen Headbutt']
            [35, 'Scary Face']
            [38, 'Psychic']
            [41, 'Agility']
            [44, 'Meteor Mash']
            [47, 'Iron Defense']
            [50, 'Hyper Beam']
        ],
    ],

    ['376',
        [
            [0, 'Hammer Arm']
            [1, 'Hammer Arm']
            [1, 'Confusion']
            [1, 'Metal Claw']
            [1, 'Magnet Rise']
            [1, 'Take Down']
            [23, 'Pursuit']
            [26, 'Bullet Punch']
            [29, 'Miracle Eye']
            [32, 'Zen Headbutt']
            [35, 'Scary Face']
            [38, 'Psychic']
            [41, 'Agility']
            [44, 'Meteor Mash']
            [52, 'Iron Defense']
            [60, 'Hyper Beam']
        ],
    ],

    ['377',
        [
            [1, 'Explosion']
            [1, 'Stomp']
            [1, 'Rock Throw']
            [1, 'Charge Beam']
            [1, 'Bulldoze']
            [7, 'Rock Throw']
            [13, 'Charge Beam']
            [19, 'Bulldoze']
            [25, 'Curse']
            [31, 'Ancient Power']
            [37, 'Iron Defense']
            [43, 'Stone Edge']
            [49, 'Hammer Arm']
            [55, 'Lock On']
            [55, 'Zap Cannon']
            [61, 'Superpower']
            [67, 'Hyper Beam']
        ],
    ],

    ['378',
        [
            [1, 'Explosion']
            [1, 'Stomp']
            [1, 'Icy Wind']
            [1, 'Charge Beam']
            [1, 'Bulldoze']
            [7, 'Icy Wind']
            [13, 'Charge Beam']
            [19, 'Bulldoze']
            [25, 'Curse']
            [31, 'Ancient Power']
            [37, 'Amnesia']
            [43, 'Ice Beam']
            [49, 'Hammer Arm']
            [55, 'Lock On']
            [55, 'Zap Cannon']
            [61, 'Superpower']
            [67, 'Hyper Beam']
        ],
    ],

    ['379',
        [
            [1, 'Explosion']
            [1, 'Stomp']
            [1, 'Metal Claw']
            [1, 'Charge Beam']
            [1, 'Bulldoze']
            [7, 'Metal Claw']
            [13, 'Charge Beam']
            [19, 'Bulldoze']
            [25, 'Curse']
            [31, 'Ancient Power']
            [37, 'Iron Defense']
            [37, 'Amnesia']
            [43, 'Iron Head']
            [43, 'Flash Cannon']
            [49, 'Hammer Arm']
            [55, 'Lock On']
            [55, 'Zap Cannon']
            [61, 'Superpower']
            [67, 'Hyper Beam']
        ],
    ],

    ['380',
        [
            [1, 'Healing Wish']
            [1, 'Helping Hand']
            [1, 'Wish']
            [1, 'Psywave']
            [1, 'Safeguard']
            [4, 'Water Sport']
            [7, 'Charm']
            [10, 'Stored Power']
            [13, 'Refresh']
            [16, 'Heal Pulse']
            [20, 'Dragon Breath']
            [24, 'Mist Ball']
            [28, 'Psycho Shift']
            [32, 'Recover']
            [36, 'Reflect Type']
            [41, 'Zen Headbutt']
            [46, 'Guard Split']
            [51, 'Psychic']
            [56, 'Dragon Pulse']
            [61, 'Healing Wish']
        ],
    ],

    ['381',
        [
            [1, 'Memento']
            [1, 'Helping Hand']
            [1, 'Heal Block']
            [1, 'Psywave']
            [1, 'Safeguard']
            [4, 'Protect']
            [7, 'Dragon Dance']
            [10, 'Stored Power']
            [13, 'Refresh']
            [16, 'Heal Pulse']
            [20, 'Dragon Breath']
            [24, 'Luster Purge']
            [28, 'Psycho Shift']
            [32, 'Recover']
            [36, 'Telekinesis']
            [41, 'Zen Headbutt']
            [46, 'Power Split']
            [51, 'Psychic']
            [56, 'Dragon Pulse']
            [61, 'Memento']
        ],
    ],

    ['382',
        [
            [1, 'Ancient Power']
            [1, 'Water Pulse']
            [5, 'Scary Face']
            [15, 'Aqua Tail']
            [20, 'Body Slam']
            [30, 'Aqua Ring']
            [35, 'Ice Beam']
            [45, 'Origin Pulse']
            [50, 'Calm Mind']
            [60, 'Muddy Water']
            [65, 'Sheer Cold']
            [75, 'Hydro Pump']
            [80, 'Double Edge']
            [90, 'Water Spout']
        ],
    ],

    ['383',
        [
            [1, 'Ancient Power']
            [1, 'Mud Shot']
            [5, 'Scary Face']
            [15, 'Earth Power']
            [20, 'Lava Plume']
            [30, 'Rest']
            [35, 'Earthquake']
            [45, 'Precipice Blades']
            [50, 'Bulk Up']
            [60, 'Solar Beam']
            [65, 'Fissure']
            [75, 'Fire Blast']
            [80, 'Hammer Arm']
            [90, 'Eruption']
        ],
    ],

    ['384',
        [
            [1, 'Twister']
            [5, 'Scary Face']
            [15, 'Ancient Power']
            [20, 'Crunch']
            [30, 'Air Slash']
            [35, 'Rest']
            [45, 'Extreme Speed']
            [50, 'Dragon Pulse']
            [60, 'Dragon Dance']
            [65, 'Fly']
            [75, 'Hyper Voice']
            [80, 'Outrage']
            [90, 'Hyper Beam']
        ],
    ],

    ['385',
        [
            [1, 'Wish']
            [1, 'Confusion']
            [5, 'Rest']
            [10, 'Swift']
            [15, 'Helping Hand']
            [20, 'Psychic']
            [25, 'Refresh']
            [30, 'Lucky Chant']
            [35, 'Zen Headbutt']
            [40, 'Double Edge']
            [45, 'Gravity']
            [50, 'Healing Wish']
            [55, 'Future Sight']
            [60, 'Cosmic Power']
            [65, 'Last Resort']
            [70, 'Doom Desire']
        ],
    ],

    ['386',
        [
            [1, 'Leer']
            [1, 'Wrap']
            [7, 'Night Shade']
            [13, 'Teleport']
            [19, 'Knock Off']
            [25, 'Pursuit']
            [31, 'Psychic']
            [37, 'Snatch']
            [43, 'Psycho Shift']
            [49, 'Zen Headbutt']
            [55, 'Cosmic Power']
            [61, 'Recover']
            [67, 'Psycho Boost']
            [73, 'Hyper Beam']
        ], //Normal Form
        [
            [1, 'Leer']
            [1, 'Wrap']
            [7, 'Night Shade']
            [13, 'Teleport']
            [19, 'Taunt']
            [25, 'Pursuit']
            [31, 'Psychic']
            [37, 'Superpower']
            [43, 'Psycho Shift']
            [49, 'Zen Headbutt']
            [55, 'Cosmic Power']
            [61, 'Zap Cannon']
            [67, 'Psycho Boost']
            [73, 'Hyper Beam']
        ], //Attack Form
        [
            [1, 'Leer']
            [1, 'Wrap']
            [7, 'Night Shade']
            [13, 'Teleport']
            [19, 'Knock Off']
            [25, 'Spikes']
            [31, 'Psychic']
            [37, 'Snatch']
            [43, 'Psycho Shift']
            [49, 'Zen Headbutt']
            [55, 'Iron Defense']
            [55, 'Amnesia']
            [61, 'Recover']
            [67, 'Psycho Boost']
            [73, 'Counter']
            [73, 'Mirror Coat']
        ], //Defense Form
        [
            [1, 'Leer']
            [1, 'Wrap']
            [7, 'Night Shade']
            [13, 'Double Team']
            [19, 'Knock Off']
            [25, 'Pursuit']
            [31, 'Psychic']
            [37, 'Swift']
            [43, 'Psycho Shift']
            [49, 'Zen Headbutt']
            [55, 'Agility']
            [61, 'Recover']
            [67, 'Psycho Boost']
            [73, 'Extreme Speed']
        ], //Speed Form
    ], //Deoxys

    ['387',
        [
            [1, 'Tackle']
            [5, 'Withdraw']
            [9, 'Absorb']
            [13, 'Razor Leaf']
            [17, 'Curse']
            [21, 'Bite']
            [25, 'Mega Drain']
            [29, 'Leech Seed']
            [33, 'Synthesis']
            [37, 'Crunch']
            [41, 'Giga Drain']
            [45, 'Leaf Storm']
        ],
    ],

    ['388',
        [
            [1, 'Tackle']
            [1, 'Withdraw']
            [1, 'Absorb']
            [5, 'Withdraw']
            [9, 'Absorb']
            [13, 'Razor Leaf']
            [17, 'Curse']
            [22, 'Bite']
            [27, 'Mega Drain']
            [32, 'Leech Seed']
            [37, 'Synthesis']
            [42, 'Crunch']
            [47, 'Giga Drain']
            [52, 'Leaf Storm']
        ],
    ],

    ['389',
        [
            [0, 'Earthquake']
            [1, 'Earthquake']
            [1, 'Wood Hammer']
            [1, 'Tackle']
            [1, 'Withdraw']
            [1, 'Absorb']
            [1, 'Razor Leaf']
            [5, 'Withdraw']
            [9, 'Absorb']
            [13, 'Razor Leaf']
            [17, 'Curse']
            [22, 'Bite']
            [27, 'Mega Drain']
            [33, 'Leech Seed']
            [39, 'Synthesis']
            [45, 'Crunch']
            [51, 'Giga Drain']
            [57, 'Leaf Storm']
        ],
    ],

    ['390',
        [
            [1, 'Scratch']
            [1, 'Leer']
            [7, 'Ember']
            [9, 'Taunt']
            [15, 'Fury Swipes']
            [17, 'Flame Wheel']
            [23, 'Nasty Plot']
            [25, 'Torment']
            [31, 'Facade']
            [33, 'Fire Spin']
            [39, 'Acrobatics']
            [41, 'Slack Off']
            [47, 'Flamethrower']
        ],
    ],

    ['391',
        [
            [0, 'Mach Punch']
            [1, 'Mach Punch']
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Ember']
            [7, 'Ember']
            [9, 'Taunt']
            [16, 'Fury Swipes']
            [19, 'Flame Wheel']
            [26, 'Feint']
            [29, 'Torment']
            [36, 'Close Combat']
            [39, 'Fire Spin']
            [46, 'Acrobatics']
            [49, 'Slack Off']
            [56, 'Flare Blitz']
        ],
    ],

    ['392',
        [
            [0, 'Close Combat']
            [1, 'Close Combat']
            [1, 'Mach Punch']
            [1, 'Flare Blitz']
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Ember']
            [1, 'Taunt']
            [7, 'Ember']
            [9, 'Taunt']
            [16, 'Fury Swipes']
            [19, 'Flame Wheel']
            [26, 'Feint']
            [29, 'Punishment']
            [42, 'Fire Spin']
            [52, 'Acrobatics']
            [58, 'Calm Mind']
            [68, 'Flare Blitz']
        ],
    ],

    ['393',
        [
            [1, 'Pound']
            [4, 'Growl']
            [8, 'Bubble']
            [11, 'Water Sport']
            [15, 'Peck']
            [18, 'Bubble Beam']
            [22, 'Bide']
            [25, 'Fury Attack']
            [29, 'Brine']
            [32, 'Whirlpool']
            [36, 'Mist']
            [39, 'Drill Peck']
            [43, 'Hydro Pump']
        ],
    ],

    ['394',
        [
            [0, 'Metal Claw']
            [1, 'Metal Claw']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Bubble']
            [4, 'Growl']
            [8, 'Bubble']
            [11, 'Water Sport']
            [15, 'Peck']
            [19, 'Bubble Beam']
            [24, 'Bide']
            [28, 'Fury Attack']
            [33, 'Brine']
            [37, 'Whirlpool']
            [42, 'Mist']
            [46, 'Drill Peck']
            [50, 'Hydro Pump']
        ],
    ],

    ['395',
        [
            [0, 'Aqua Jet']
            [1, 'Aqua Jet']
            [1, 'Metal Claw']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Bubble']
            [4, 'Growl']
            [8, 'Bubble']
            [11, 'Swords Dance']
            [15, 'Peck']
            [19, 'Bubble Beam']
            [24, 'Swagger']
            [28, 'Fury Attack']
            [33, 'Brine']
            [39, 'Whirlpool']
            [46, 'Mist']
            [52, 'Drill Peck']
            [59, 'Hydro Pump']
        ],
    ],

    ['396',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [5, 'Quick Attack']
            [9, 'Wing Attack']
            [13, 'Double Team']
            [17, 'Endeavor']
            [21, 'Whirlwind']
            [25, 'Aerial Ace']
            [29, 'Take Down']
            [33, 'Agility']
            [37, 'Brave Bird']
            [41, 'Final Gambit']
        ],
    ],

    ['397',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Quick Attack']
            [5, 'Quick Attack']
            [9, 'Wing Attack']
            [13, 'Double Team']
            [18, 'Endeavor']
            [23, 'Whirlwind']
            [28, 'Aerial Ace']
            [33, 'Take Down']
            [38, 'Agility']
            [43, 'Brave Bird']
            [48, 'Final Gambit']
        ],
    ],

    ['398',
        [
            [0, 'Close Combat']
            [1, 'Close Combat']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Quick Attack']
            [1, 'Wing Attack']
            [5, 'Quick Attack']
            [9, 'Wing Attack']
            [13, 'Double Team']
            [18, 'Endeavor']
            [23, 'Whirlwind']
            [28, 'Aerial Ace']
            [33, 'Take Down']
            [41, 'Agility']
            [49, 'Brave Bird']
            [57, 'Final Gambit']
        ],
    ],

    ['399',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [5, 'Defense Curl']
            [9, 'Rollout']
            [13, 'Headbutt']
            [17, 'Hyper Fang']
            [21, 'Yawn']
            [25, 'Crunch']
            [29, 'Take Down']
            [33, 'Super Fang']
            [37, 'Swords Dance']
            [41, 'Amnesia']
            [45, 'Superpower']
            [49, 'Curse']
        ],
    ],

    ['400',
        [
            [0, 'Water Gun']
            [1, 'Water Gun']
            [1, 'Aqua Jet']
            [1, 'Rototiller']
            [1, 'Tackle']
            [1, 'Growl']
            [5, 'Defense Curl']
            [9, 'Rollout']
            [13, 'Headbutt']
            [18, 'Hyper Fang']
            [23, 'Yawn']
            [28, 'Crunch']
            [33, 'Take Down']
            [38, 'Super Fang']
            [43, 'Swords Dance']
            [48, 'Amnesia']
            [53, 'Superpower']
            [58, 'Curse']
        ],
    ],

    ['401',
        [
            [1, 'Growl']
            [1, 'Bide']
            [6, 'Struggle Bug']
            [16, 'Bug Bite']
        ],
    ],

    ['402',
        [
            [0, 'Fury Cutter']
            [1, 'Fury Cutter']
            [1, 'Growl']
            [1, 'Bide']
            [14, 'Absorb']
            [18, 'Sing']
            [22, 'Focus Energy']
            [26, 'Slash']
            [30, 'X Scissor']
            [34, 'Screech']
            [36, 'Fell Stinger']
            [38, 'Taunt']
            [42, 'Night Slash']
            [44, 'Sticky Web']
            [46, 'Bug Buzz']
            [50, 'Perish Song']
        ],
    ],

    ['403',
        [
            [1, 'Tackle']
            [5, 'Leer']
            [9, 'Charge']
            [11, 'Baby Doll Eyes']
            [13, 'Spark']
            [17, 'Bite']
            [21, 'Roar']
            [25, 'Swagger']
            [29, 'Thunder Fang']
            [33, 'Crunch']
            [37, 'Scary Face']
            [41, 'Discharge']
            [45, 'Wild Charge']
        ],
    ],

    ['404',
        [
            [1, 'Tackle']
            [1, 'Leer']
            [5, 'Leer']
            [9, 'Charge']
            [13, 'Spark']
            [18, 'Bite']
            [23, 'Roar']
            [28, 'Swagger']
            [33, 'Thunder Fang']
            [38, 'Crunch']
            [43, 'Scary Face']
            [48, 'Discharge']
            [53, 'Wild Charge']
        ],
    ],

    ['405',
        [
            [1, 'Electric Terrain']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Charge']
            [5, 'Leer']
            [9, 'Charge']
            [13, 'Spark']
            [18, 'Bite']
            [23, 'Roar']
            [28, 'Swagger']
            [35, 'Thunder Fang']
            [42, 'Crunch']
            [49, 'Scary Face']
            [56, 'Discharge']
            [63, 'Wild Charge']
            [67, 'Electric Terrain']
        ],
    ],

    ['406',
        [
            [1, 'Absorb']
            [4, 'Growth']
            [7, 'Water Sport']
            [10, 'Stun Spore']
            [13, 'Mega Drain']
            [16, 'Worry Seed']
        ],
    ],

    ['407',
        [
            [1, 'Venom Drench']
            [1, 'Grassy Terrain']
            [1, 'Weather Ball']
            [1, 'Poison Sting']
            [1, 'Mega Drain']
            [1, 'Magical Leaf']
            [1, 'Sweet Scent']
        ],
    ],

    ['408',
        [
            [1, 'Headbutt']
            [1, 'Leer']
            [6, 'Focus Energy']
            [10, 'Pursuit']
            [15, 'Take Down']
            [19, 'Scary Face']
            [24, 'Assurance']
            [28, 'Chip Away']
            [33, 'Ancient Power']
            [37, 'Zen Headbutt']
            [42, 'Screech']
            [46, 'Head Smash']
        ],
    ],

    ['409',
        [
            [0, 'Endeavor']
            [1, 'Endeavor']
            [1, 'Headbutt']
            [1, 'Leer']
            [1, 'Focus Energy']
            [1, 'Pursuit']
            [6, 'Focus Energy']
            [10, 'Pursuit']
            [15, 'Take Down']
            [19, 'Scary Face']
            [24, 'Assurance']
            [28, 'Chip Away']
            [36, 'Ancient Power']
            [43, 'Zen Headbutt']
            [51, 'Screech']
            [58, 'Head Smash']
        ],
    ],

    ['410',
        [
            [1, 'Tackle']
            [1, 'Protect']
            [6, 'Taunt']
            [10, 'Metal Sound']
            [15, 'Take Down']
            [19, 'Iron Defense']
            [24, 'Swagger']
            [28, 'Ancient Power']
            [33, 'Endure']
            [37, 'Metal Burst']
            [42, 'Iron Head']
            [46, 'Heavy Slam']
        ],
    ],

    ['411',
        [
            [0, 'Block']
            [1, 'Block']
            [1, 'Tackle']
            [1, 'Protect']
            [1, 'Taunt']
            [1, 'Metal Sound']
            [6, 'Taunt']
            [10, 'Metal Sound']
            [15, 'Take Down']
            [19, 'Iron Defense']
            [24, 'Swagger']
            [28, 'Ancient Power']
            [36, 'Endure']
            [43, 'Metal Burst']
            [51, 'Iron Head']
            [58, 'Heavy Slam']
        ],
    ],

    ['412',
        [
            [1, 'Protect']
            [10, 'Tackle']
            [15, 'Bug Bite']
            [20, 'Hidden Power']
        ],
    ],

    ['413',
        [
            [0, 'Quiver Dance']
            [1, 'Quiver Dance']
            [1, 'Sucker Punch']
            [1, 'Tackle']
            [1, 'Protect']
            [1, 'Bug Bite']
            [10, 'Protect']
            [15, 'Bug Bite']
            [20, 'Hidden Power']
            [23, 'Confusion']
            [26, 'Razor Leaf']
            [29, 'Growth']
            [32, 'Psybeam']
            [35, 'Captivate']
            [38, 'Flail']
            [41, 'Attract']
            [44, 'Psychic']
            [47, 'Leaf Storm']
            [50, 'Bug Buzz']
        ], //Plant
        [
            [0, 'Quiver Dance']
            [1, 'Quiver Dance']
            [1, 'Sucker Punch']
            [1, 'Tackle']
            [1, 'Protect']
            [1, 'Bug Bite']
            [10, 'Protect']
            [15, 'Bug Bite']
            [20, 'Hidden Power']
            [23, 'Confusion']
            [26, 'Rock Blast']
            [29, 'Harden']
            [32, 'Psybeam']
            [35, 'Captivate']
            [38, 'Flail']
            [41, 'Attract']
            [44, 'Psychic']
            [47, 'Fissure']
            [50, 'Bug Buzz']
        ], //Sandy
        [
            [0, 'Quiver Dance']
            [1, 'Quiver Dance']
            [1, 'Metal Burst']
            [1, 'Sucker Punch']
            [1, 'Tackle']
            [1, 'Protect']
            [1, 'Bug Bite']
            [10, 'Protect']
            [15, 'Bug Bite']
            [20, 'Hidden Power']
            [23, 'Confusion']
            [26, 'Mirror Shot']
            [29, 'Metal Sound']
            [32, 'Psybeam']
            [35, 'Captivate']
            [38, 'Flail']
            [41, 'Attract']
            [44, 'Psychic']
            [47, 'Iron Head']
            [50, 'Bug Buzz']
        ], //Trash
    ], //Wormadam

    ['414',
        [
            [0, 'Quiver Dance']
            [1, 'Quiver Dance']
            [1, 'Tackle']
            [1, 'Protect']
            [1, 'Bug Bite']
            [10, 'Protect']
            [15, 'Bug Bite']
            [20, 'Hidden Power']
            [23, 'Confusion']
            [26, 'Gust']
            [29, 'Poison Powder']
            [32, 'Psybeam']
            [35, 'Camouflage']
            [38, 'Silver Wind']
            [41, 'Air Slash']
            [44, 'Psychic']
            [47, 'Lunge']
            [50, 'Bug Buzz']
        ],
    ],

    ['415',
        [
            [1, 'Sweet Scent']
            [1, 'Gust']
            [13, 'Bug Bite']
            [29, 'Bug Buzz']
        ],
    ],

    ['416',
        [
            [0, 'Slash']
            [1, 'Slash']
            [1, 'Fell Stinger']
            [1, 'Destiny Bond']
            [1, 'Sweet Scent']
            [1, 'Gust']
            [1, 'Poison Sting']
            [1, 'Confuse Ray']
            [5, 'Fury Cutter']
            [9, 'Pursuit']
            [13, 'Fury Swipes']
            [17, 'Defend Order']
            [25, 'Power Gem']
            [29, 'Heal Order']
            [33, 'Toxic']
            [37, 'Air Slash']
            [41, 'Captivate']
            [45, 'Attack Order']
            [49, 'Swagger']
            [53, 'Destiny Bond']
            [57, 'Fell Stinger']
        ],
    ],

    ['417',
        [
            [1, 'Growl']
            [1, 'Bide']
            [5, 'Quick Attack']
            [9, 'Charm']
            [13, 'Spark']
            [17, 'Endure']
            [19, 'Nuzzle']
            [21, 'Swift']
            [25, 'Electro Ball']
            [29, 'Sweet Kiss']
            [33, 'Thunder Wave']
            [37, 'Super Fang']
            [41, 'Discharge']
            [45, 'Last Resort']
            [49, 'Hyper Fang']
        ],
    ],

    ['418',
        [
            [1, 'Sonic Boom']
            [4, 'Growl']
            [7, 'Water Sport']
            [11, 'Quick Attack']
            [15, 'Water Gun']
            [18, 'Pursuit']
            [21, 'Swift']
            [24, 'Aqua Jet']
            [27, 'Double Hit']
            [31, 'Whirlpool']
            [35, 'Razor Wind']
            [38, 'Aqua Tail']
            [41, 'Agility']
            [45, 'Hydro Pump']
        ],
    ],

    ['419',
        [
            [1, 'Ice Fang']
            [1, 'Crunch']
            [1, 'Sonic Boom']
            [1, 'Growl']
            [1, 'Water Sport']
            [1, 'Quick Attack']
            [4, 'Growl']
            [7, 'Water Sport']
            [11, 'Quick Attack']
            [15, 'Water Gun']
            [18, 'Pursuit']
            [21, 'Swift']
            [24, 'Aqua Jet']
            [29, 'Double Hit']
            [35, 'Whirlpool']
            [41, 'Razor Wind']
            [46, 'Aqua Tail']
            [51, 'Agility']
            [57, 'Hydro Pump']
        ],
    ],

    ['420',
        [
            [1, 'Morning Sun']
            [1, 'Tackle']
            [7, 'Growth']
            [10, 'Leech Seed']
            [13, 'Helping Hand']
            [19, 'Magical Leaf']
            [22, 'Sunny Day']
            [28, 'Worry Seed']
            [31, 'Take Down']
            [37, 'Solar Beam']
            [40, 'Lucky Chant']
            [47, 'Petal Blizzard']
        ],
    ],

    ['421',
        [
            [0, 'Petal Dance']
            [1, 'Petal Dance']
            [1, 'Morning Sun']
            [1, 'Tackle']
            [1, 'Growth']
            [1, 'Leech Seed']
            [7, 'Growth']
            [10, 'Leech Seed']
            [13, 'Helping Hand']
            [19, 'Magical Leaf']
            [22, 'Sunny Day']
            [30, 'Worry Seed']
            [35, 'Take Down']
            [43, 'Solar Beam']
            [48, 'Lucky Chant']
            [50, 'Petal Blizzard']
        ],
    ],

    ['422',
        [
            [1, 'Mud Slap']
            [2, 'Mud Sport']
            [4, 'Harden']
            [7, 'Water Pulse']
            [11, 'Mud Bomb']
            [16, 'Hidden Power']
            [22, 'Rain Dance']
            [29, 'Body Slam']
            [37, 'Muddy Water']
            [46, 'Recover']
        ],
    ],

    ['423',
        [
            [1, 'Mud Slap']
            [1, 'Mud Sport']
            [1, 'Harden']
            [1, 'Water Pulse']
            [2, 'Mud Sport']
            [4, 'Harden']
            [7, 'Water Pulse']
            [11, 'Mud Bomb']
            [16, 'Hidden Power']
            [22, 'Rain Dance']
            [29, 'Body Slam']
            [41, 'Muddy Water']
            [54, 'Recover']
        ],
    ],

    ['424',
        [
            [1, 'Dual Chop']
            [1, 'Scratch']
            [1, 'Tail Whip']
            [1, 'Sand Attack']
            [1, 'Astonish']
            [4, 'Sand Attack']
            [8, 'Astonish']
            [11, 'Baton Pass']
            [15, 'Tickle']
            [18, 'Fury Swipes']
            [22, 'Swift']
            [25, 'Screech']
            [29, 'Agility']
            [32, 'Double Hit']
            [36, 'Fling']
            [39, 'Nasty Plot']
            [43, 'Last Resort']
        ],
    ],

    ['425',
        [
            [1, 'Constrict']
            [1, 'Minimize']
            [4, 'Astonish']
            [8, 'Gust']
            [13, 'Focus Energy']
            [16, 'Payback']
            [20, 'Ominous Wind']
            [25, 'Stockpile']
            [27, 'Hex']
            [32, 'Swallow']
            [32, 'Spit Up']
            [36, 'Shadow Ball']
            [40, 'Amnesia']
            [44, 'Baton Pass']
            [50, 'Explosion']
        ],
    ],

    ['426',
        [
            [1, 'Phantom Force']
            [1, 'Constrict']
            [1, 'Minimize']
            [1, 'Astonish']
            [1, 'Gust']
            [4, 'Astonish']
            [8, 'Gust']
            [13, 'Focus Energy']
            [16, 'Payback']
            [20, 'Ominous Wind']
            [25, 'Stockpile']
            [27, 'Hex']
            [34, 'Swallow']
            [34, 'Spit Up']
            [40, 'Shadow Ball']
            [46, 'Amnesia']
            [52, 'Baton Pass']
            [60, 'Explosion']
            [65, 'Phantom Force']
        ],
    ],

    ['427',
        [
            [1, 'Frustration']
            [1, 'Defense Curl']
            [1, 'Splash']
            [1, 'Pound']
            [1, 'Foresight']
            [6, 'Endure']
            [13, 'Baby Doll Eyes']
            [16, 'Quick Attack']
            [23, 'Jump Kick']
            [26, 'Baton Pass']
            [33, 'Agility']
            [36, 'Dizzy Punch']
            [43, 'After You']
            [46, 'Charm']
            [50, 'Entrainment']
            [56, 'Bounce']
            [63, 'Healing Wish']
        ],
    ],

    ['428',
        [
            [0, 'Return']
            [1, 'Return']
            [1, 'Healing Wish']
            [1, 'Bounce']
            [1, 'Rototiller']
            [1, 'Mirror Coat']
            [1, 'Magic Coat']
            [1, 'Defense Curl']
            [1, 'Splash']
            [1, 'Pound']
            [1, 'Foresight']
            [6, 'Endure']
            [13, 'Baby Doll Eyes']
            [16, 'Quick Attack']
            [23, 'Jump Kick']
            [26, 'Baton Pass']
            [33, 'Agility']
            [36, 'Dizzy Punch']
            [43, 'After You']
            [46, 'Charm']
            [53, 'Entrainment']
            [56, 'Bounce']
            [63, 'Healing Wish']
            [66, 'High Jump Kick']
        ],
    ],

    ['429',
        [
            [1, 'Mystical Fire']
            [1, 'Power Gem']
            [1, 'Phantom Force']
            [1, 'Lucky Chant']
            [1, 'Magical Leaf']
            [1, 'Growl']
            [1, 'Psywave']
            [1, 'Spite']
            [1, 'Astonish']
        ],
    ],

    ['430',
        [
            [1, 'Night Slash']
            [1, 'Sucker Punch']
            [1, 'Astonish']
            [1, 'Pursuit']
            [1, 'Haze']
            [1, 'Wing Attack']
            [25, 'Swagger']
            [35, 'Nasty Plot']
            [45, 'Foul Play']
            [55, 'Night Slash']
            [65, 'Quash']
            [75, 'Dark Pulse']
        ],
    ],

    ['431',
        [
            [1, 'Fake Out']
            [5, 'Scratch']
            [8, 'Growl']
            [13, 'Hypnosis']
            [17, 'Feint Attack']
            [20, 'Fury Swipes']
            [25, 'Charm']
            [29, 'Assist']
            [32, 'Captivate']
            [37, 'Slash']
            [41, 'Sucker Punch']
            [44, 'Attract']
            [48, 'Hone Claws']
            [50, 'Play Rough']
        ],
    ],

    ['432',
        [
            [0, 'Swagger']
            [1, 'Swagger']
            [1, 'Fake Out']
            [1, 'Scratch']
            [1, 'Growl']
            [5, 'Scratch']
            [8, 'Growl']
            [13, 'Hypnosis']
            [17, 'Feint Attack']
            [20, 'Fury Swipes']
            [25, 'Charm']
            [29, 'Assist']
            [32, 'Captivate']
            [37, 'Slash']
            [45, 'Body Slam']
            [52, 'Attract']
            [60, 'Hone Claws']
        ],
    ],

    ['433',
        [
            [1, 'Wrap']
            [4, 'Growl']
            [7, 'Astonish']
            [10, 'Confusion']
            [13, 'Yawn']
            [16, 'Last Resort']
            [19, 'Entrainment']
            [32, 'Uproar']
        ],
    ],

    ['434',
        [
            [1, 'Scratch']
            [1, 'Focus Energy']
            [3, 'Poison Gas']
            [7, 'Screech']
            [9, 'Fury Swipes']
            [13, 'Smokescreen']
            [15, 'Feint']
            [19, 'Acid Spray']
            [21, 'Bite']
            [25, 'Slash']
            [27, 'Toxic']
            [31, 'Night Slash']
            [33, 'Memento']
            [37, 'Venom Drench']
            [39, 'Sucker Punch']
            [43, 'Belch']
            [45, 'Explosion']
        ],
    ],

    ['435',
        [
            [0, 'Flamethrower']
            [1, 'Flamethrower']
            [1, 'Scratch']
            [1, 'Focus Energy']
            [1, 'Poison Gas']
            [1, 'Screech']
            [3, 'Poison Gas']
            [7, 'Screech']
            [9, 'Fury Swipes']
            [13, 'Smokescreen']
            [15, 'Feint']
            [19, 'Acid Spray']
            [21, 'Bite']
            [25, 'Slash']
            [27, 'Toxic']
            [31, 'Night Slash']
            [33, 'Memento']
            [37, 'Venom Drench']
            [39, 'Sucker Punch']
            [43, 'Belch']
            [45, 'Explosion']
        ],
    ],

    ['436',
        [
            [1, 'Tackle']
            [1, 'Confusion']
            [5, 'Hypnosis']
            [9, 'Imprison']
            [11, 'Confuse Ray']
            [15, 'Psywave']
            [19, 'Iron Defense']
            [21, 'Feint Attack']
            [25, 'Safeguard']
            [29, 'Future Sight']
            [31, 'Metal Sound']
            [35, 'Gyro Ball']
            [39, 'Extrasensory']
            [41, 'Payback']
            [45, 'Heal Block']
            [49, 'Heavy Slam']
        ],
    ],

    ['437',
        [
            [0, 'Block']
            [1, 'Block']
            [1, 'Sunny Day']
            [1, 'Rain Dance']
            [1, 'Tackle']
            [1, 'Confusion']
            [1, 'Hypnosis']
            [1, 'Imprison']
            [5, 'Hypnosis']
            [9, 'Imprison']
            [11, 'Confuse Ray']
            [15, 'Psywave']
            [19, 'Iron Defense']
            [21, 'Feint Attack']
            [25, 'Safeguard']
            [29, 'Future Sight']
            [31, 'Metal Sound']
            [36, 'Gyro Ball']
            [42, 'Extrasensory']
            [46, 'Payback']
            [52, 'Heal Block']
            [58, 'Heavy Slam']
        ],
    ],

    ['438',
        [
            [1, 'Fake Tears']
            [1, 'Copycat']
            [5, 'Flail']
            [8, 'Low Kick']
            [12, 'Rock Throw']
            [15, 'Mimic']
            [19, 'Feint Attack']
            [22, 'Tearful Look']
            [26, 'Rock Tomb']
            [29, 'Block']
            [33, 'Rock Slide']
            [36, 'Counter']
            [40, 'Sucker Punch']
            [43, 'Double Edge']
        ],
    ],

    ['439',
        [
            [1, 'Tickle']
            [1, 'Barrier']
            [1, 'Pound']
            [1, 'Confusion']
            [4, 'Copycat']
            [8, 'Meditate']
            [11, 'Double Slap']
            [15, 'Mimic']
            [18, 'Encore']
            [22, 'Light Screen']
            [22, 'Reflect']
            [25, 'Psybeam']
            [29, 'Substitute']
            [32, 'Recycle']
            [36, 'Trick']
            [39, 'Psychic']
            [43, 'Role Play']
            [46, 'Baton Pass']
            [50, 'Safeguard']
        ],
    ],

    ['440',
        [
            [1, 'Pound']
            [1, 'Charm']
            [5, 'Copycat']
            [9, 'Refresh']
            [12, 'Sweet Kiss']
        ],
    ],

    ['441',
        [
            [1, 'Hyper Voice']
            [1, 'Chatter']
            [1, 'Confide']
            [1, 'Taunt']
            [1, 'Peck']
            [5, 'Growl']
            [9, 'Mirror Move']
            [13, 'Sing']
            [17, 'Fury Attack']
            [21, 'Chatter']
            [25, 'Taunt']
            [29, 'Round']
            [33, 'Mimic']
            [37, 'Echoed Voice']
            [41, 'Roost']
            [45, 'Uproar']
            [49, 'Synchronoise']
            [50, 'Feather Dance']
            [57, 'Hyper Voice']
        ],
    ],

    ['442',
        [
            [1, 'Curse']
            [1, 'Pursuit']
            [1, 'Confuse Ray']
            [1, 'Spite']
            [1, 'Shadow Sneak']
            [7, 'Feint Attack']
            [13, 'Hypnosis']
            [19, 'Dream Eater']
            [25, 'Ominous Wind']
            [31, 'Sucker Punch']
            [37, 'Nasty Plot']
            [43, 'Memento']
            [49, 'Dark Pulse']
        ],
    ],

    ['443',
        [
            [1, 'Tackle']
            [3, 'Sand Attack']
            [7, 'Dragon Rage']
            [13, 'Sandstorm']
            [15, 'Take Down']
            [19, 'Sand Tomb']
            [25, 'Slash']
            [27, 'Dragon Claw']
            [31, 'Dig']
            [37, 'Dragon Rush']
        ],
    ],

    ['444',
        [
            [0, 'Dual Chop']
            [1, 'Dual Chop']
            [1, 'Tackle']
            [1, 'Sand Attack']
            [1, 'Dragon Rage']
            [3, 'Sand Attack']
            [7, 'Dragon Rage']
            [13, 'Sandstorm']
            [15, 'Take Down']
            [19, 'Sand Tomb']
            [28, 'Slash']
            [33, 'Dragon Claw']
            [40, 'Dig']
            [49, 'Dragon Rush']
        ],
    ],

    ['445',
        [
            [0, 'Crunch']
            [1, 'Crunch']
            [1, 'Dual Chop']
            [1, 'Fire Fang']
            [1, 'Tackle']
            [1, 'Sand Attack']
            [1, 'Dragon Rage']
            [1, 'Sandstorm']
            [3, 'Sand Attack']
            [7, 'Dragon Rage']
            [13, 'Sandstorm']
            [15, 'Take Down']
            [19, 'Sand Tomb']
            [28, 'Slash']
            [33, 'Dragon Claw']
            [40, 'Dig']
            [55, 'Dragon Rush']
        ],
    ],

    ['446',
        [
            [1, 'Last Resort']
            [1, 'Recycle']
            [1, 'Lick']
            [1, 'Metronome']
            [1, 'Odor Sleuth']
            [1, 'Tackle']
            [4, 'Defense Curl']
            [9, 'Amnesia']
            [12, 'Lick']
            [17, 'Chip Away']
            [20, 'Screech']
            [25, 'Body Slam']
            [28, 'Stockpile']
            [33, 'Swallow']
            [36, 'Rollout']
            [41, 'Fling']
            [44, 'Belly Drum']
            [49, 'Natural Gift']
            [50, 'Snatch']
            [57, 'Last Resort']
        ],
    ],

    ['447',
        [
            [1, 'Foresight']
            [1, 'Quick Attack']
            [1, 'Endure']
            [6, 'Counter']
            [11, 'Feint']
            [15, 'Force Palm']
            [19, 'Copycat']
            [24, 'Screech']
            [29, 'Reversal']
            [47, 'Nasty Plot']
            [50, 'Final Gambit']
        ],
    ],

    ['448',
        [
            [0, 'Aura Sphere']
            [1, 'Aura Sphere']
            [1, 'Laser Focus']
            [1, 'Foresight']
            [1, 'Quick Attack']
            [1, 'Detect']
            [1, 'Metal Claw']
            [6, 'Counter']
            [11, 'Feint']
            [15, 'Power Up Punch']
            [19, 'Swords Dance']
            [24, 'Metal Sound']
            [29, 'Bone Rush']
            [33, 'Quick Guard']
            [37, 'Me First']
            [42, 'Work Up']
            [47, 'Calm Mind']
            [51, 'Heal Pulse']
            [55, 'Close Combat']
            [60, 'Dragon Pulse']
            [65, 'Extreme Speed']
        ],
    ],

    ['449',
        [
            [1, 'Tackle']
            [1, 'Sand Attack']
            [7, 'Bite']
            [13, 'Yawn']
            [19, 'Take Down']
            [19, 'Dig']
            [25, 'Sand Tomb']
            [31, 'Crunch']
            [37, 'Earthquake']
            [44, 'Double Edge']
            [50, 'Fissure']
        ],
    ],

    ['450',
        [
            [1, 'Ice Fang']
            [1, 'Fire Fang']
            [1, 'Thunder Fang']
            [1, 'Tackle']
            [1, 'Sand Attack']
            [1, 'Bite']
            [1, 'Yawn']
            [7, 'Bite']
            [13, 'Yawn']
            [19, 'Take Down']
            [19, 'Dig']
            [25, 'Sand Tomb']
            [31, 'Crunch']
            [40, 'Earthquake']
            [50, 'Double Edge']
            [60, 'Fissure']
        ],
    ],

    ['451',
        [
            [1, 'Bite']
            [1, 'Poison Sting']
            [1, 'Leer']
            [5, 'Knock Off']
            [9, 'Pin Missile']
            [13, 'Acupressure']
            [16, 'Pursuit']
            [20, 'Bug Bite']
            [23, 'Poison Fang']
            [27, 'Venoshock']
            [30, 'Hone Claws']
            [34, 'Toxic Spikes']
            [38, 'Night Slash']
            [41, 'Scary Face']
            [45, 'Crunch']
            [47, 'Fell Stinger']
            [49, 'Cross Poison']
        ],
    ],

    ['452',
        [
            [1, 'Thunder Fang']
            [1, 'Ice Fang']
            [1, 'Fire Fang']
            [1, 'Bite']
            [1, 'Poison Sting']
            [1, 'Leer']
            [1, 'Knock Off']
            [5, 'Knock Off']
            [9, 'Pin Missile']
            [13, 'Acupressure']
            [16, 'Pursuit']
            [20, 'Bug Bite']
            [23, 'Poison Fang']
            [27, 'Venoshock']
            [30, 'Hone Claws']
            [34, 'Toxic Spikes']
            [38, 'Night Slash']
            [43, 'Scary Face']
            [49, 'Crunch']
            [53, 'Fell Stinger']
            [57, 'Cross Poison']
        ],
    ],

    ['453',
        [
            [1, 'Astonish']
            [3, 'Mud Slap']
            [8, 'Poison Sting']
            [10, 'Taunt']
            [15, 'Pursuit']
            [17, 'Feint Attack']
            [22, 'Revenge']
            [24, 'Swagger']
            [29, 'Mud Bomb']
            [31, 'Sucker Punch']
            [36, 'Venoshock']
            [38, 'Nasty Plot']
            [43, 'Poison Jab']
            [45, 'Sludge Bomb']
            [47, 'Belch']
            [50, 'Flatter']
        ],
    ],

    ['454',
        [
            [1, 'Astonish']
            [1, 'Mud Slap']
            [1, 'Poison Sting']
            [3, 'Mud Slap']
            [8, 'Poison Sting']
            [10, 'Taunt']
            [15, 'Pursuit']
            [17, 'Feint Attack']
            [22, 'Revenge']
            [24, 'Swagger']
            [29, 'Mud Bomb']
            [31, 'Sucker Punch']
            [36, 'Venoshock']
            [41, 'Nasty Plot']
            [49, 'Poison Jab']
            [54, 'Sludge Bomb']
            [58, 'Belch']
            [62, 'Flatter']
        ],
    ],

    ['455',
        [
            [1, 'Bind']
            [1, 'Growth']
            [7, 'Bite']
            [11, 'Vine Whip']
            [17, 'Sweet Scent']
            [21, 'Ingrain']
            [27, 'Feint Attack']
            [31, 'Leaf Tornado']
            [37, 'Stockpile']
            [37, 'Spit Up']
            [37, 'Swallow']
            [41, 'Crunch']
            [47, 'Wring Out']
            [50, 'Power Whip']
        ],
    ],

    ['456',
        [
            [1, 'Pound']
            [6, 'Water Gun']
            [10, 'Attract']
            [13, 'Rain Dance']
            [17, 'Gust']
            [22, 'Water Pulse']
            [26, 'Captivate']
            [29, 'Safeguard']
            [33, 'Aqua Ring']
            [38, 'Whirlpool']
            [42, 'U Turn']
            [45, 'Bounce']
            [49, 'Silver Wind']
            [54, 'Soak']
        ],
    ],

    ['457',
        [
            [1, 'Soak']
            [1, 'Gust']
            [1, 'Pound']
            [1, 'Water Gun']
            [1, 'Attract']
            [6, 'Water Gun']
            [10, 'Attract']
            [13, 'Rain Dance']
            [17, 'Gust']
            [22, 'Water Pulse']
            [26, 'Captivate']
            [29, 'Safeguard']
            [35, 'Aqua Ring']
            [42, 'Whirlpool']
            [48, 'U Turn']
            [53, 'Bounce']
            [59, 'Silver Wind']
            [66, 'Soak']
        ],
    ],

    ['458',
        [
            [1, 'Tackle']
            [1, 'Bubble']
            [3, 'Supersonic']
            [7, 'Bubble Beam']
            [11, 'Confuse Ray']
            [14, 'Wing Attack']
            [16, 'Headbutt']
            [19, 'Water Pulse']
            [23, 'Wide Guard']
            [27, 'Take Down']
            [32, 'Agility']
            [36, 'Air Slash']
            [39, 'Aqua Ring']
            [46, 'Bounce']
            [49, 'Hydro Pump']
        ],
    ],

    ['459',
        [
            [1, 'Powder Snow']
            [1, 'Leer']
            [5, 'Razor Leaf']
            [9, 'Icy Wind']
            [13, 'Grass Whistle']
            [17, 'Swagger']
            [21, 'Mist']
            [26, 'Ice Shard']
            [31, 'Ingrain']
            [36, 'Wood Hammer']
            [41, 'Blizzard']
            [46, 'Sheer Cold']
        ],
    ],

    ['460',
        [
            [1, 'Ice Punch']
            [1, 'Powder Snow']
            [1, 'Leer']
            [1, 'Razor Leaf']
            [1, 'Icy Wind']
            [5, 'Razor Leaf']
            [9, 'Icy Wind']
            [13, 'Grass Whistle']
            [17, 'Swagger']
            [21, 'Mist']
            [26, 'Ice Shard']
            [31, 'Ingrain']
            [36, 'Wood Hammer']
            [47, 'Blizzard']
            [58, 'Sheer Cold']
        ],
    ],

    ['461',
        [
            [1, 'Embargo']
            [1, 'Revenge']
            [1, 'Assurance']
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Taunt']
            [1, 'Quick Attack']
            [8, 'Quick Attack']
            [10, 'Feint Attack']
            [14, 'Icy Wind']
            [16, 'Fury Swipes']
            [20, 'Nasty Plot']
            [22, 'Metal Claw']
            [25, 'Hone Claws']
            [28, 'Fling']
            [32, 'Screech']
            [35, 'Night Slash']
            [40, 'Snatch']
            [44, 'Punishment']
            [47, 'Dark Pulse']
        ],
    ],

    ['462',
        [
            [1, 'Tri Attack']
            [1, 'Zap Cannon']
            [1, 'Magnetic Flux']
            [1, 'Mirror Coat']
            [1, 'Barrier']
            [1, 'Electric Terrain']
            [1, 'Tackle']
            [1, 'Supersonic']
            [1, 'Thunder Shock']
            [1, 'Thunder Wave']
            [5, 'Thunder Shock']
            [7, 'Thunder Wave']
            [11, 'Magnet Bomb']
            [13, 'Light Screen']
            [17, 'Sonic Boom']
            [19, 'Spark']
            [23, 'Mirror Shot']
            [25, 'Metal Sound']
            [29, 'Electro Ball']
            [33, 'Flash Cannon']
            [39, 'Screech']
            [43, 'Discharge']
            [49, 'Lock On']
            [53, 'Magnet Rise']
            [59, 'Gyro Ball']
            [63, 'Zap Cannon']
        ],
    ],

    ['463',
        [
            [1, 'Wring Out']
            [1, 'Power Whip']
            [1, 'Lick']
            [5, 'Supersonic']
            [9, 'Defense Curl']
            [13, 'Knock Off']
            [17, 'Wrap']
            [21, 'Stomp']
            [25, 'Disable']
            [29, 'Slam']
            [33, 'Rollout']
            [37, 'Chip Away']
            [41, 'Me First']
            [45, 'Refresh']
            [49, 'Screech']
            [53, 'Power Whip']
            [57, 'Wring Out']
            [61, 'Gyro Ball']
        ],
    ],

    ['464',
        [
            [1, 'Hammer Arm']
            [1, 'Rock Wrecker']
            [1, 'Horn Drill']
            [1, 'Poison Jab']
            [1, 'Horn Attack']
            [1, 'Tail Whip']
            [1, 'Fury Attack']
            [1, 'Scary Face']
            [5, 'Fury Attack']
            [9, 'Scary Face']
            [13, 'Smack Down']
            [17, 'Stomp']
            [21, 'Bulldoze']
            [25, 'Chip Away']
            [29, 'Rock Blast']
            [33, 'Drill Run']
            [37, 'Take Down']
            [41, 'Stone Edge']
            [48, 'Earthquake']
            [55, 'Megahorn']
            [62, 'Horn Drill']
            [69, 'Rock Wrecker']
        ],
    ],

    ['465',
        [
            [1, 'Block']
            [1, 'Ingrain']
            [1, 'Constrict']
            [4, 'Sleep Powder']
            [7, 'Vine Whip']
            [10, 'Absorb']
            [14, 'Poison Powder']
            [17, 'Bind']
            [20, 'Growth']
            [23, 'Mega Drain']
            [27, 'Knock Off']
            [30, 'Stun Spore']
            [33, 'Natural Gift']
            [36, 'Giga Drain']
            [40, 'Ancient Power']
            [43, 'Slam']
            [46, 'Tickle']
            [49, 'Wring Out']
            [50, 'Grassy Terrain']
            [53, 'Power Whip']
            [56, 'Block']
        ],
    ],

    ['466',
        [
            [1, 'Electric Terrain']
            [1, 'Ion Deluge']
            [1, 'Fire Punch']
            [1, 'Quick Attack']
            [1, 'Leer']
            [1, 'Thunder Shock']
            [1, 'Low Kick']
            [5, 'Thunder Shock']
            [8, 'Low Kick']
            [12, 'Swift']
            [15, 'Shock Wave']
            [19, 'Thunder Wave']
            [22, 'Electro Ball']
            [26, 'Light Screen']
            [29, 'Thunder Punch']
            [36, 'Discharge']
            [42, 'Screech']
            [49, 'Thunderbolt']
            [55, 'Thunder']
            [62, 'Giga Impact']
            [65, 'Electric Terrain']
        ],
    ],

    ['467',
        [
            [1, 'Thunder Punch']
            [1, 'Smog']
            [1, 'Leer']
            [1, 'Ember']
            [1, 'Smokescreen']
            [5, 'Ember']
            [8, 'Smokescreen']
            [12, 'Feint Attack']
            [15, 'Fire Spin']
            [19, 'Clear Smog']
            [22, 'Flame Burst']
            [26, 'Confuse Ray']
            [29, 'Fire Punch']
            [36, 'Lava Plume']
            [42, 'Sunny Day']
            [49, 'Flamethrower']
            [55, 'Fire Blast']
            [62, 'Hyper Beam']
        ],
    ],

    ['468',
        [
            [1, 'After You']
            [1, 'Sky Attack']
            [1, 'Extreme Speed']
            [1, 'Aura Sphere']
            [1, 'Air Slash']
        ],
    ],

    ['469',
        [
            [1, 'Bug Buzz']
            [1, 'Air Slash']
            [1, 'Night Slash']
            [1, 'Bug Bite']
            [1, 'Tackle']
            [1, 'Foresight']
            [1, 'Quick Attack']
            [1, 'Double Team']
            [6, 'Quick Attack']
            [11, 'Double Team']
            [14, 'Sonic Boom']
            [17, 'Detect']
            [22, 'Supersonic']
            [27, 'Uproar']
            [30, 'Pursuit']
            [33, 'Ancient Power']
            [38, 'Feint']
            [43, 'Slash']
            [46, 'Screech']
            [49, 'U Turn']
            [54, 'Air Slash']
            [57, 'Bug Buzz']
        ],
    ],

    ['470',
        [
            [0, 'Razor Leaf']
            [1, 'Razor Leaf']
            [1, 'Helping Hand']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [5, 'Sand Attack']
            [9, 'Baby Doll Eyes']
            [13, 'Quick Attack']
            [17, 'Grass Whistle']
            [20, 'Magical Leaf']
            [25, 'Giga Drain']
            [29, 'Swords Dance']
            [33, 'Synthesis']
            [37, 'Sunny Day']
            [41, 'Last Resort']
            [45, 'Leaf Blade']
        ],
    ],

    ['471',
        [
            [0, 'Icy Wind']
            [1, 'Icy Wind']
            [1, 'Helping Hand']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [5, 'Sand Attack']
            [9, 'Baby Doll Eyes']
            [13, 'Quick Attack']
            [17, 'Bite']
            [20, 'Ice Fang']
            [25, 'Ice Shard']
            [29, 'Barrier']
            [33, 'Mirror Coat']
            [37, 'Hail']
            [41, 'Last Resort']
            [45, 'Blizzard']
        ],
    ],

    ['472',
        [
            [1, 'Guillotine']
            [1, 'Thunder Fang']
            [1, 'Ice Fang']
            [1, 'Fire Fang']
            [1, 'Poison Jab']
            [1, 'Sand Attack']
            [1, 'Harden']
            [1, 'Knock Off']
            [4, 'Sand Attack']
            [7, 'Harden']
            [10, 'Knock Off']
            [13, 'Quick Attack']
            [16, 'Fury Cutter']
            [19, 'Feint Attack']
            [22, 'Acrobatics']
            [27, 'Night Slash']
            [30, 'U Turn']
            [35, 'Screech']
            [40, 'X Scissor']
            [45, 'Sky Uppercut']
            [50, 'Swords Dance']
            [55, 'Guillotine']
        ],
    ],

    ['473',
        [
            [1, 'Fury Attack']
            [1, 'Scary Face']
            [1, 'Ancient Power']
            [1, 'Peck']
            [1, 'Odor Sleuth']
            [1, 'Mud Sport']
            [1, 'Powder Snow']
            [5, 'Mud Sport']
            [8, 'Powder Snow']
            [11, 'Mud Slap']
            [14, 'Endure']
            [18, 'Mud Bomb']
            [21, 'Hail']
            [24, 'Ice Fang']
            [28, 'Take Down']
            [33, 'Double Hit']
            [37, 'Mist']
            [41, 'Thrash']
            [46, 'Earthquake']
            [52, 'Blizzard']
            [58, 'Scary Face']
        ],
    ],

    ['474',
        [
            [1, 'Trick Room']
            [1, 'Zap Cannon']
            [1, 'Magic Coat']
            [1, 'Conversion 2']
            [1, 'Tackle']
            [1, 'Conversion']
            [1, 'Nasty Plot']
            [7, 'Psybeam']
            [12, 'Agility']
            [18, 'Recover']
            [23, 'Magnet Rise']
            [29, 'Signal Beam']
            [34, 'Embargo']
            [40, 'Discharge']
            [45, 'Lock On']
            [50, 'Tri Attack']
            [56, 'Magic Coat']
            [62, 'Zap Cannon']
            [67, 'Hyper Beam']
        ],
    ],

    ['475',
        [
            [0, 'Slash']
            [1, 'Slash']
            [1, 'Stored Power']
            [1, 'Close Combat']
            [1, 'Leaf Blade']
            [1, 'Night Slash']
            [1, 'Leer']
            [1, 'Confusion']
            [1, 'Double Team']
            [1, 'Teleport']
            [4, 'Confusion']
            [6, 'Double Team']
            [9, 'Teleport']
            [11, 'Quick Guard']
            [14, 'Fury Cutter']
            [17, 'Aerial Ace']
            [19, 'Heal Pulse']
            [23, 'Wide Guard']
            [26, 'Swords Dance']
            [31, 'Psycho Cut']
            [35, 'Helping Hand']
            [40, 'Feint']
            [44, 'False Swipe']
            [49, 'Protect']
            [53, 'Close Combat']
            [58, 'Stored Power']
        ],
    ],

    ['476',
        [
            [0, 'Tri Attack']
            [1, 'Tri Attack']
            [1, 'Magnetic Flux']
            [1, 'Magnet Rise']
            [1, 'Gravity']
            [1, 'Wide Guard']
            [1, 'Tackle']
            [1, 'Iron Defense']
            [1, 'Block']
            [1, 'Magnet Bomb']
            [4, 'Iron Defense']
            [7, 'Block']
            [10, 'Magnet Bomb']
            [13, 'Thunder Wave']
            [16, 'Rest']
            [19, 'Spark']
            [22, 'Rock Slide']
            [25, 'Power Gem']
            [28, 'Rock Blast']
            [31, 'Discharge']
            [34, 'Sandstorm']
            [37, 'Earth Power']
            [40, 'Stone Edge']
            [43, 'Lock On']
            [43, 'Zap Cannon']
        ],
    ],

    ['477',
        [
            [1, 'Shadow Punch']
            [1, 'Future Sight']
            [1, 'Fire Punch']
            [1, 'Ice Punch']
            [1, 'Thunder Punch']
            [1, 'Gravity']
            [1, 'Bind']
            [1, 'Leer']
            [1, 'Night Shade']
            [1, 'Disable']
            [1, 'Astonish']
            [6, 'Disable']
            [9, 'Astonish']
            [14, 'Foresight']
            [17, 'Shadow Sneak']
            [22, 'Pursuit']
            [25, 'Will O Wisp']
            [30, 'Confuse Ray']
            [33, 'Curse']
            [40, 'Hex']
            [45, 'Shadow Ball']
            [52, 'Mean Look']
            [57, 'Payback']
            [64, 'Future Sight']
        ],
    ],

    ['478',
        [
            [0, 'Ominous Wind']
            [1, 'Ominous Wind']
            [1, 'Destiny Bond']
            [1, 'Powder Snow']
            [1, 'Leer']
            [1, 'Double Team']
            [1, 'Ice Shard']
            [5, 'Double Team']
            [10, 'Ice Shard']
            [14, 'Icy Wind']
            [19, 'Astonish']
            [23, 'Draining Kiss']
            [28, 'Will O Wisp']
            [32, 'Confuse Ray']
            [37, 'Wake Up Slap']
            [41, 'Captivate']
            [42, 'Shadow Ball']
            [48, 'Blizzard']
            [54, 'Hail']
            [61, 'Destiny Bond']
        ],
    ],

    ['479',
        [
            [1, 'Discharge']
            [1, 'Charge']
            [1, 'Trick']
            [1, 'Astonish']
            [1, 'Thunder Wave']
            [1, 'Thunder Shock']
            [1, 'Confuse Ray']
            [8, 'Uproar']
            [15, 'Double Team']
            [22, 'Shock Wave']
            [29, 'Ominous Wind']
            [36, 'Substitute']
            [43, 'Electro Ball']
            [50, 'Hex']
            [57, 'Charge']
            [64, 'Discharge']
        ],
    ],

    ['480',
        [
            [1, 'Memento']
            [1, 'Natural Gift']
            [1, 'Flail']
            [1, 'Rest']
            [1, 'Confusion']
            [6, 'Imprison']
            [16, 'Endure']
            [21, 'Swift']
            [31, 'Yawn']
            [36, 'Future Sight']
            [46, 'Amnesia']
            [50, 'Extrasensory']
            [61, 'Flail']
            [66, 'Natural Gift']
            [76, 'Memento']
        ],
    ],

    ['481',
        [
            [1, 'Healing Wish']
            [1, 'Natural Gift']
            [1, 'Copycat']
            [1, 'Rest']
            [1, 'Confusion']
            [6, 'Imprison']
            [16, 'Protect']
            [21, 'Swift']
            [31, 'Lucky Chant']
            [36, 'Future Sight']
            [46, 'Charm']
            [50, 'Extrasensory']
            [61, 'Copycat']
            [66, 'Natural Gift']
            [76, 'Healing Wish']
        ],
    ],

    ['482',
        [
            [1, 'Natural Gift']
            [1, 'Last Resort']
            [1, 'Rest']
            [1, 'Confusion']
            [6, 'Imprison']
            [16, 'Detect']
            [21, 'Swift']
            [31, 'Uproar']
            [36, 'Future Sight']
            [46, 'Nasty Plot']
            [50, 'Extrasensory']
            [61, 'Last Resort']
            [66, 'Natural Gift']
            [76, 'Explosion']
        ],
    ],

    ['483',
        [
            [1, 'Dragon Breath']
            [1, 'Scary Face']
            [6, 'Metal Claw']
            [10, 'Ancient Power']
            [15, 'Slash']
            [19, 'Power Gem']
            [24, 'Metal Burst']
            [28, 'Dragon Claw']
            [33, 'Earth Power']
            [37, 'Aura Sphere']
            [42, 'Iron Tail']
            [46, 'Roar Of Time']
            [50, 'Flash Cannon']
        ],
    ],

    ['484',
        [
            [1, 'Dragon Breath']
            [1, 'Scary Face']
            [6, 'Water Pulse']
            [10, 'Ancient Power']
            [15, 'Slash']
            [19, 'Power Gem']
            [24, 'Aqua Ring']
            [28, 'Dragon Claw']
            [33, 'Earth Power']
            [37, 'Aura Sphere']
            [42, 'Aqua Tail']
            [46, 'Spacial Rend']
            [50, 'Hydro Pump']
        ],
    ],

    ['485',
        [
            [1, 'Magma Storm']
            [1, 'Heat Wave']
            [1, 'Earth Power']
            [1, 'Iron Head']
            [1, 'Fire Spin']
            [1, 'Ancient Power']
            [9, 'Leer']
            [17, 'Fire Fang']
            [25, 'Metal Sound']
            [33, 'Crunch']
            [41, 'Scary Face']
            [49, 'Lava Plume']
            [57, 'Fire Spin']
            [65, 'Iron Head']
            [73, 'Earth Power']
            [81, 'Heat Wave']
            [88, 'Stone Edge']
            [96, 'Magma Storm']
        ],
    ],

    ['486',
        [
            [1, 'Heavy Slam']
            [1, 'Crush Grip']
            [1, 'Fire Punch']
            [1, 'Ice Punch']
            [1, 'Thunder Punch']
            [1, 'Dizzy Punch']
            [1, 'Knock Off']
            [1, 'Confuse Ray']
            [1, 'Foresight']
            [25, 'Revenge']
            [40, 'Wide Guard']
            [50, 'Zen Headbutt']
            [65, 'Payback']
            [75, 'Crush Grip']
            [90, 'Heavy Slam']
            [100, 'Giga Impact']
        ],
    ],

    ['487',
        [
            [1, 'Dragon Breath']
            [1, 'Scary Face']
            [6, 'Ominous Wind']
            [10, 'Ancient Power']
            [15, 'Slash']
            [19, 'Shadow Sneak']
            [24, 'Destiny Bond']
            [28, 'Dragon Claw']
            [33, 'Earth Power']
            [37, 'Aura Sphere']
            [42, 'Shadow Claw']
            [46, 'Shadow Force']
            [50, 'Hex']
        ],
    ],

    ['488',
        [
            [1, 'Lunar Dance']
            [1, 'Psycho Shift']
            [1, 'Psycho Cut']
            [1, 'Moonlight']
            [1, 'Confusion']
            [1, 'Double Team']
            [11, 'Safeguard']
            [20, 'Mist']
            [29, 'Aurora Beam']
            [38, 'Future Sight']
            [47, 'Slash']
            [57, 'Moonlight']
            [66, 'Psycho Cut']
            [75, 'Psycho Shift']
            [84, 'Lunar Dance']
            [93, 'Psychic']
            [99, 'Moonblast']
        ],
    ],

    ['489',
        [
            [1, 'Bubble']
            [1, 'Water Sport']
            [9, 'Charm']
            [16, 'Supersonic']
            [24, 'Bubble Beam']
            [31, 'Acid Armor']
            [39, 'Whirlpool']
            [46, 'Water Pulse']
            [54, 'Aqua Ring']
            [61, 'Dive']
            [69, 'Rain Dance']
        ],
    ],

    ['490',
        [
            [1, 'Tail Glow']
            [1, 'Bubble']
            [1, 'Water Sport']
            [9, 'Charm']
            [16, 'Supersonic']
            [24, 'Bubble Beam']
            [31, 'Acid Armor']
            [39, 'Whirlpool']
            [46, 'Water Pulse']
            [54, 'Aqua Ring']
            [61, 'Dive']
            [69, 'Rain Dance']
            [76, 'Heart Swap']
        ],
    ],

    ['491',
        [
            [1, 'Ominous Wind']
            [1, 'Disable']
            [11, 'Quick Attack']
            [20, 'Hypnosis']
            [29, 'Feint Attack']
            [38, 'Nightmare']
            [47, 'Double Team']
            [57, 'Haze']
            [66, 'Dark Void']
            [75, 'Nasty Plot']
            [84, 'Dream Eater']
            [93, 'Dark Pulse']
        ],
    ],

    ['492',
        [
            [1, 'Growth']
            [10, 'Magical Leaf']
            [19, 'Leech Seed']
            [28, 'Synthesis']
            [37, 'Sweet Scent']
            [46, 'Natural Gift']
            [55, 'Worry Seed']
            [64, 'Aromatherapy']
            [73, 'Energy Ball']
            [82, 'Sweet Kiss']
            [91, 'Healing Wish']
            [100, 'Seed Flare']
        ], //Land Forme
        [
            [1, 'Growth']
            [10, 'Magical Leaf']
            [19, 'Leech Seed']
            [28, 'Quick Attack']
            [37, 'Sweet Scent']
            [46, 'Natural Gift']
            [55, 'Worry Seed']
            [64, 'Air Slash']
            [73, 'Energy Ball']
            [82, 'Sweet Kiss']
            [91, 'Leaf Storm']
            [100, 'Seed Flare']
        ], //Sky Form
    ], //Shaymin

    ['493',
        [
            [1, 'Seismic Toss']
            [1, 'Cosmic Power']
            [1, 'Natural Gift']
            [1, 'Punishment']
            [10, 'Gravity']
            [20, 'Earth Power']
            [30, 'Hyper Voice']
            [40, 'Extreme Speed']
            [50, 'Refresh']
            [60, 'Future Sight']
            [70, 'Recover']
            [80, 'Hyper Beam']
            [90, 'Perish Song']
            [100, 'Judgment']
        ],
    ],

    ['494',
        [
            [1, 'Searing Shot']
            [1, 'Focus Energy']
            [1, 'Confusion']
            [1, 'Incinerate']
            [1, 'Quick Attack']
            [9, 'Endure']
            [17, 'Headbutt']
            [25, 'Flame Charge']
            [33, 'Reversal']
            [41, 'Flame Burst']
            [49, 'Zen Headbutt']
            [57, 'Inferno']
            [65, 'Double Edge']
            [73, 'Flare Blitz']
            [81, 'Final Gambit']
            [89, 'Stored Power']
            [97, 'Overheat']
        ],
    ],

    ['495',
        [
            [1, 'Tackle']
            [4, 'Leer']
            [7, 'Vine Whip']
            [10, 'Wrap']
            [13, 'Growth']
            [16, 'Leaf Tornado']
            [19, 'Leech Seed']
            [22, 'Mega Drain']
            [25, 'Slam']
            [28, 'Leaf Blade']
            [31, 'Coil']
            [34, 'Giga Drain']
            [37, 'Wring Out']
            [40, 'Gastro Acid']
            [43, 'Leaf Storm']
        ],
    ],

    ['496',
        [
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Vine Whip']
            [1, 'Wrap']
            [4, 'Leer']
            [7, 'Vine Whip']
            [10, 'Wrap']
            [13, 'Growth']
            [16, 'Leaf Tornado']
            [20, 'Leech Seed']
            [24, 'Mega Drain']
            [28, 'Slam']
            [32, 'Leaf Blade']
            [36, 'Coil']
            [40, 'Giga Drain']
            [44, 'Wring Out']
            [48, 'Gastro Acid']
            [52, 'Leaf Storm']
        ],
    ],

    ['497',
        [
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Vine Whip']
            [1, 'Wrap']
            [4, 'Leer']
            [7, 'Vine Whip']
            [10, 'Wrap']
            [13, 'Growth']
            [16, 'Leaf Tornado']
            [20, 'Leech Seed']
            [24, 'Mega Drain']
            [28, 'Slam']
            [32, 'Leaf Blade']
            [38, 'Coil']
            [44, 'Giga Drain']
            [50, 'Wring Out']
            [56, 'Gastro Acid']
            [62, 'Leaf Storm']
        ],
    ],

    ['498',
        [
            [1, 'Tackle']
            [3, 'Tail Whip']
            [7, 'Ember']
            [9, 'Odor Sleuth']
            [13, 'Defense Curl']
            [15, 'Flame Charge']
            [19, 'Smog']
            [21, 'Rollout']
            [25, 'Take Down']
            [27, 'Heat Crash']
            [31, 'Assurance']
            [33, 'Flamethrower']
            [37, 'Head Smash']
            [39, 'Roar']
            [43, 'Flare Blitz']
        ],
    ],

    ['499',
        [
            [0, 'Arm Thrust']
            [1, 'Arm Thrust']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [1, 'Ember']
            [1, 'Odor Sleuth']
            [3, 'Tail Whip']
            [7, 'Ember']
            [9, 'Odor Sleuth']
            [13, 'Defense Curl']
            [15, 'Flame Charge']
            [20, 'Smog']
            [23, 'Rollout']
            [28, 'Take Down']
            [31, 'Heat Crash']
            [36, 'Assurance']
            [39, 'Flamethrower']
            [44, 'Head Smash']
            [47, 'Roar']
            [52, 'Flare Blitz']
        ],
    ],

    ['500',
        [
            [1, 'Arm Thrust']
            [1, 'Hammer Arm']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [1, 'Ember']
            [1, 'Odor Sleuth']
            [3, 'Tail Whip']
            [7, 'Ember']
            [9, 'Odor Sleuth']
            [13, 'Defense Curl']
            [15, 'Flame Charge']
            [20, 'Smog']
            [23, 'Rollout']
            [28, 'Take Down']
            [31, 'Heat Crash']
            [38, 'Assurance']
            [43, 'Flamethrower']
            [50, 'Head Smash']
            [55, 'Roar']
            [62, 'Flare Blitz']
        ],
    ],

    ['501',
        [
            [1, 'Tackle']
            [5, 'Tail Whip']
            [7, 'Water Gun']
            [11, 'Water Sport']
            [13, 'Focus Energy']
            [17, 'Razor Shell']
            [19, 'Fury Cutter']
            [23, 'Water Pulse']
            [25, 'Revenge']
            [29, 'Aqua Jet']
            [31, 'Encore']
            [35, 'Aqua Tail']
            [37, 'Retaliate']
            [41, 'Swords Dance']
            [43, 'Hydro Pump']
        ],
    ],

    ['502',
        [
            [1, 'Tackle']
            [1, 'Tail Whip']
            [1, 'Water Gun']
            [1, 'Water Sport']
            [5, 'Tail Whip']
            [7, 'Water Gun']
            [11, 'Water Sport']
            [13, 'Focus Energy']
            [18, 'Razor Shell']
            [21, 'Fury Cutter']
            [26, 'Water Pulse']
            [29, 'Revenge']
            [34, 'Aqua Jet']
            [37, 'Encore']
            [42, 'Aqua Tail']
            [45, 'Retaliate']
            [50, 'Swords Dance']
            [53, 'Hydro Pump']
        ],
    ],

    ['503',
        [
            [0, 'Slash']
            [1, 'Slash']
            [1, 'Megahorn']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [1, 'Water Gun']
            [1, 'Water Sport']
            [5, 'Tail Whip']
            [7, 'Water Gun']
            [11, 'Water Sport']
            [13, 'Focus Energy']
            [18, 'Razor Shell']
            [21, 'Fury Cutter']
            [25, 'Water Pulse']
            [29, 'Revenge']
            [34, 'Aqua Jet']
            [39, 'Encore']
            [46, 'Aqua Tail']
            [51, 'Retaliate']
            [58, 'Swords Dance']
            [63, 'Hydro Pump']
        ],
    ],

    ['504',
        [
            [1, 'Tackle']
            [3, 'Leer']
            [6, 'Bite']
            [8, 'Bide']
            [11, 'Detect']
            [13, 'Sand Attack']
            [16, 'Crunch']
            [18, 'Hypnosis']
            [21, 'Super Fang']
            [23, 'After You']
            [26, 'Focus Energy']
            [28, 'Work Up']
            [31, 'Hyper Fang']
            [33, 'Nasty Plot']
            [36, 'Mean Look']
            [38, 'Baton Pass']
            [41, 'Slam']
        ],
    ],

    ['505',
        [
            [0, 'Confuse Ray']
            [1, 'Confuse Ray']
            [1, 'Rototiller']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Bite']
            [1, 'Low Kick']
            [3, 'Leer']
            [6, 'Bite']
            [8, 'Bide']
            [11, 'Detect']
            [13, 'Sand Attack']
            [16, 'Crunch']
            [18, 'Hypnosis']
            [22, 'Super Fang']
            [25, 'After You']
            [29, 'Focus Energy']
            [32, 'Psych Up']
            [36, 'Hyper Fang']
            [39, 'Nasty Plot']
            [43, 'Mean Look']
            [46, 'Baton Pass']
            [50, 'Slam']
        ],
    ],

    ['506',
        [
            [1, 'Leer']
            [1, 'Tackle']
            [5, 'Odor Sleuth']
            [8, 'Bite']
            [10, 'Baby Doll Eyes']
            [12, 'Helping Hand']
            [15, 'Take Down']
            [19, 'Work Up']
            [22, 'Crunch']
            [26, 'Roar']
            [29, 'Retaliate']
            [33, 'Reversal']
            [36, 'Last Resort']
            [40, 'Giga Impact']
            [45, 'Play Rough']
        ],
    ],

    ['507',
        [
            [1, 'Leer']
            [1, 'Tackle']
            [1, 'Odor Sleuth']
            [1, 'Bite']
            [5, 'Odor Sleuth']
            [8, 'Bite']
            [12, 'Helping Hand']
            [15, 'Take Down']
            [20, 'Work Up']
            [24, 'Crunch']
            [29, 'Roar']
            [33, 'Retaliate']
            [38, 'Reversal']
            [42, 'Last Resort']
            [47, 'Giga Impact']
            [52, 'Play Rough']
        ],
    ],

    ['508',
        [
            [1, 'Ice Fang']
            [1, 'Fire Fang']
            [1, 'Thunder Fang']
            [1, 'Leer']
            [1, 'Tackle']
            [1, 'Odor Sleuth']
            [1, 'Bite']
            [5, 'Odor Sleuth']
            [8, 'Bite']
            [12, 'Helping Hand']
            [15, 'Take Down']
            [20, 'Work Up']
            [24, 'Crunch']
            [29, 'Roar']
            [36, 'Retaliate']
            [42, 'Reversal']
            [51, 'Last Resort']
            [59, 'Giga Impact']
            [63, 'Play Rough']
        ],
    ],

    ['509',
        [
            [1, 'Scratch']
            [3, 'Growl']
            [6, 'Assist']
            [10, 'Sand Attack']
            [12, 'Fury Swipes']
            [15, 'Pursuit']
            [19, 'Torment']
            [21, 'Fake Out']
            [24, 'Hone Claws']
            [28, 'Assurance']
            [30, 'Slash']
            [33, 'Captivate']
            [37, 'Night Slash']
            [39, 'Snatch']
            [42, 'Nasty Plot']
            [46, 'Sucker Punch']
            [49, 'Play Rough']
        ],
    ],

    ['510',
        [
            [1, 'Scratch']
            [1, 'Growl']
            [1, 'Assist']
            [1, 'Sand Attack']
            [3, 'Growl']
            [6, 'Assist']
            [10, 'Sand Attack']
            [12, 'Fury Swipes']
            [15, 'Pursuit']
            [19, 'Torment']
            [22, 'Fake Out']
            [26, 'Hone Claws']
            [31, 'Assurance']
            [34, 'Slash']
            [38, 'Taunt']
            [43, 'Night Slash']
            [47, 'Snatch']
            [50, 'Nasty Plot']
            [55, 'Sucker Punch']
            [58, 'Play Rough']
        ],
    ],

    ['511',
        [
            [1, 'Scratch']
            [1, 'Play Nice']
            [4, 'Leer']
            [7, 'Lick']
            [10, 'Vine Whip']
            [13, 'Fury Swipes']
            [16, 'Leech Seed']
            [19, 'Bite']
            [22, 'Seed Bomb']
            [25, 'Torment']
            [28, 'Fling']
            [31, 'Acrobatics']
            [34, 'Grass Knot']
            [37, 'Recycle']
            [40, 'Natural Gift']
            [43, 'Crunch']
        ],
    ],

    ['512',
        [
            [1, 'Leer']
            [1, 'Lick']
            [1, 'Fury Swipes']
            [1, 'Seed Bomb']
        ],
    ],

    ['513',
        [
            [1, 'Scratch']
            [1, 'Play Nice']
            [4, 'Leer']
            [7, 'Lick']
            [10, 'Incinerate']
            [13, 'Fury Swipes']
            [16, 'Yawn']
            [19, 'Bite']
            [22, 'Flame Burst']
            [25, 'Amnesia']
            [28, 'Fling']
            [31, 'Acrobatics']
            [34, 'Fire Blast']
            [37, 'Recycle']
            [40, 'Natural Gift']
            [43, 'Crunch']
        ],
    ],

    ['514',
        [
            [1, 'Leer']
            [1, 'Lick']
            [1, 'Fury Swipes']
            [1, 'Flame Burst']
        ],
    ],

    ['515',
        [
            [1, 'Scratch']
            [1, 'Play Nice']
            [4, 'Leer']
            [7, 'Lick']
            [10, 'Water Gun']
            [13, 'Fury Swipes']
            [16, 'Water Sport']
            [19, 'Bite']
            [22, 'Scald']
            [25, 'Taunt']
            [28, 'Fling']
            [31, 'Acrobatics']
            [34, 'Brine']
            [37, 'Recycle']
            [40, 'Natural Gift']
            [43, 'Crunch']
        ],
    ],

    ['516',
        [
            [1, 'Leer']
            [1, 'Lick']
            [1, 'Fury Swipes']
            [1, 'Scald']
        ],
    ],

    ['517',
        [
            [1, 'Psywave']
            [1, 'Defense Curl']
            [5, 'Lucky Chant']
            [7, 'Yawn']
            [11, 'Psybeam']
            [13, 'Imprison']
            [17, 'Moonlight']
            [19, 'Hypnosis']
            [23, 'Zen Headbutt']
            [25, 'Synchronoise']
            [29, 'Nightmare']
            [31, 'Future Sight']
            [35, 'Calm Mind']
            [37, 'Psychic']
            [41, 'Dream Eater']
            [43, 'Telekinesis']
            [47, 'Stored Power']
        ],
    ],

    ['518',
        [
            [1, 'Psychic Terrain']
            [1, 'Defense Curl']
            [1, 'Lucky Chant']
            [1, 'Psybeam']
            [1, 'Hypnosis']
        ],
    ],

    ['519',
        [
            [1, 'Gust']
            [4, 'Growl']
            [8, 'Leer']
            [11, 'Quick Attack']
            [15, 'Air Cutter']
            [18, 'Roost']
            [22, 'Detect']
            [25, 'Taunt']
            [29, 'Air Slash']
            [32, 'Razor Wind']
            [36, 'Feather Dance']
            [39, 'Swagger']
            [43, 'Facade']
            [46, 'Tailwind']
            [50, 'Sky Attack']
        ],
    ],

    ['520',
        [
            [1, 'Gust']
            [1, 'Growl']
            [1, 'Leer']
            [1, 'Quick Attack']
            [4, 'Growl']
            [8, 'Leer']
            [11, 'Quick Attack']
            [15, 'Air Cutter']
            [18, 'Roost']
            [23, 'Detect']
            [27, 'Taunt']
            [32, 'Air Slash']
            [36, 'Razor Wind']
            [41, 'Feather Dance']
            [45, 'Swagger']
            [50, 'Facade']
            [54, 'Tailwind']
            [59, 'Sky Attack']
        ],
    ],

    ['521',
        [
            [1, 'Gust']
            [1, 'Growl']
            [1, 'Leer']
            [1, 'Quick Attack']
            [4, 'Growl']
            [8, 'Leer']
            [11, 'Quick Attack']
            [15, 'Air Cutter']
            [18, 'Roost']
            [23, 'Detect']
            [27, 'Taunt']
            [33, 'Air Slash']
            [38, 'Razor Wind']
            [44, 'Feather Dance']
            [49, 'Swagger']
            [55, 'Facade']
            [60, 'Tailwind']
            [66, 'Sky Attack']
        ],
    ],

    ['522',
        [
            [1, 'Quick Attack']
            [4, 'Tail Whip']
            [8, 'Charge']
            [11, 'Shock Wave']
            [15, 'Thunder Wave']
            [18, 'Flame Charge']
            [22, 'Pursuit']
            [25, 'Spark']
            [29, 'Stomp']
            [32, 'Discharge']
            [36, 'Agility']
            [39, 'Wild Charge']
            [43, 'Thrash']
        ],
    ],

    ['523',
        [
            [1, 'Ion Deluge']
            [1, 'Quick Attack']
            [1, 'Tail Whip']
            [1, 'Charge']
            [1, 'Thunder Wave']
            [4, 'Tail Whip']
            [8, 'Charge']
            [11, 'Shock Wave']
            [15, 'Thunder Wave']
            [18, 'Flame Charge']
            [22, 'Pursuit']
            [25, 'Spark']
            [31, 'Stomp']
            [36, 'Discharge']
            [42, 'Agility']
            [47, 'Wild Charge']
            [53, 'Thrash']
            [58, 'Ion Deluge']
        ],
    ],

    ['524',
        [
            [1, 'Tackle']
            [4, 'Harden']
            [7, 'Sand Attack']
            [10, 'Headbutt']
            [14, 'Rock Blast']
            [17, 'Mud Slap']
            [20, 'Iron Defense']
            [23, 'Smack Down']
            [27, 'Rock Slide']
            [30, 'Stealth Rock']
            [33, 'Sandstorm']
            [36, 'Stone Edge']
            [40, 'Explosion']
        ],
    ],

    ['525',
        [
            [0, 'Power Gem']
            [1, 'Power Gem']
            [1, 'Tackle']
            [1, 'Harden']
            [1, 'Sand Attack']
            [1, 'Headbutt']
            [4, 'Harden']
            [7, 'Sand Attack']
            [10, 'Headbutt']
            [14, 'Rock Blast']
            [17, 'Mud Slap']
            [20, 'Iron Defense']
            [23, 'Smack Down']
            [30, 'Rock Slide']
            [36, 'Stealth Rock']
            [42, 'Sandstorm']
            [48, 'Stone Edge']
            [55, 'Explosion']
        ],
    ],

    ['526',
        [
            [1, 'Power Gem']
            [1, 'Tackle']
            [1, 'Harden']
            [1, 'Sand Attack']
            [1, 'Headbutt']
            [4, 'Harden']
            [7, 'Sand Attack']
            [10, 'Headbutt']
            [14, 'Rock Blast']
            [17, 'Mud Slap']
            [20, 'Iron Defense']
            [23, 'Smack Down']
            [30, 'Rock Slide']
            [36, 'Stealth Rock']
            [42, 'Sandstorm']
            [48, 'Stone Edge']
            [55, 'Explosion']
        ],
    ],

    ['527',
        [
            [1, 'Confusion']
            [4, 'Odor Sleuth']
            [8, 'Gust']
            [12, 'Assurance']
            [15, 'Heart Stamp']
            [19, 'Imprison']
            [21, 'Air Cutter']
            [25, 'Attract']
            [29, 'Amnesia']
            [29, 'Calm Mind']
            [32, 'Air Slash']
            [36, 'Future Sight']
            [41, 'Psychic']
            [47, 'Endeavor']
        ],
    ],

    ['528',
        [
            [1, 'Confusion']
            [1, 'Odor Sleuth']
            [1, 'Gust']
            [1, 'Assurance']
            [4, 'Odor Sleuth']
            [8, 'Gust']
            [12, 'Assurance']
            [15, 'Heart Stamp']
            [19, 'Imprison']
            [21, 'Air Cutter']
            [25, 'Attract']
            [29, 'Amnesia']
            [29, 'Calm Mind']
            [32, 'Air Slash']
            [36, 'Future Sight']
            [41, 'Psychic']
            [47, 'Endeavor']
        ],
    ],

    ['529',
        [
            [1, 'Scratch']
            [1, 'Mud Sport']
            [5, 'Rapid Spin']
            [8, 'Mud Slap']
            [12, 'Fury Swipes']
            [15, 'Metal Claw']
            [19, 'Dig']
            [22, 'Hone Claws']
            [26, 'Slash']
            [29, 'Rock Slide']
            [33, 'Earthquake']
            [36, 'Swords Dance']
            [40, 'Sandstorm']
            [43, 'Drill Run']
            [47, 'Fissure']
        ],
    ],

    ['530',
        [
            [0, 'Horn Drill']
            [1, 'Horn Drill']
            [1, 'Rototiller']
            [1, 'Scratch']
            [1, 'Mud Sport']
            [1, 'Rapid Spin']
            [1, 'Mud Slap']
            [5, 'Rapid Spin']
            [8, 'Mud Slap']
            [12, 'Fury Swipes']
            [15, 'Metal Claw']
            [19, 'Dig']
            [22, 'Hone Claws']
            [26, 'Slash']
            [29, 'Rock Slide']
            [36, 'Earthquake']
            [42, 'Swords Dance']
            [49, 'Sandstorm']
            [55, 'Drill Run']
            [62, 'Fissure']
        ],
    ],

    ['531',
        [
            [1, 'Last Resort']
            [1, 'Hyper Voice']
            [1, 'Misty Terrain']
            [1, 'Play Nice']
            [1, 'Pound']
            [1, 'Growl']
            [1, 'Helping Hand']
            [5, 'Baby Doll Eyes']
            [9, 'Refresh']
            [13, 'Disarming Voice']
            [17, 'Double Slap']
            [21, 'Attract']
            [25, 'Secret Power']
            [29, 'Entrainment']
            [33, 'Take Down']
            [37, 'Heal Pulse']
            [41, 'After You']
            [45, 'Simple Beam']
            [49, 'Double Edge']
            [53, 'Hyper Voice']
            [57, 'Last Resort']
        ],
    ],

    ['532',
        [
            [1, 'Pound']
            [1, 'Leer']
            [4, 'Focus Energy']
            [8, 'Bide']
            [12, 'Low Kick']
            [16, 'Rock Throw']
            [20, 'Wake Up Slap']
            [24, 'Chip Away']
            [28, 'Bulk Up']
            [31, 'Rock Slide']
            [34, 'Dynamic Punch']
            [37, 'Scary Face']
            [40, 'Hammer Arm']
            [43, 'Stone Edge']
            [46, 'Focus Punch']
            [49, 'Superpower']
        ],
    ],

    ['533',
        [
            [1, 'Pound']
            [1, 'Leer']
            [1, 'Focus Energy']
            [1, 'Bide']
            [4, 'Focus Energy']
            [8, 'Bide']
            [12, 'Low Kick']
            [16, 'Rock Throw']
            [20, 'Wake Up Slap']
            [24, 'Chip Away']
            [29, 'Bulk Up']
            [33, 'Rock Slide']
            [37, 'Dynamic Punch']
            [41, 'Scary Face']
            [45, 'Hammer Arm']
            [49, 'Stone Edge']
            [53, 'Focus Punch']
            [57, 'Superpower']
        ],
    ],

    ['534',
        [
            [1, 'Pound']
            [1, 'Leer']
            [1, 'Focus Energy']
            [1, 'Bide']
            [4, 'Focus Energy']
            [8, 'Bide']
            [12, 'Low Kick']
            [16, 'Rock Throw']
            [20, 'Wake Up Slap']
            [24, 'Chip Away']
            [29, 'Bulk Up']
            [33, 'Rock Slide']
            [37, 'Dynamic Punch']
            [41, 'Scary Face']
            [45, 'Hammer Arm']
            [49, 'Stone Edge']
            [53, 'Focus Punch']
            [57, 'Superpower']
        ],
    ],

    ['535',
        [
            [1, 'Bubble']
            [1, 'Growl']
            [5, 'Supersonic']
            [9, 'Round']
            [12, 'Bubble Beam']
            [16, 'Mud Shot']
            [20, 'Aqua Ring']
            [23, 'Uproar']
            [27, 'Muddy Water']
            [31, 'Rain Dance']
            [34, 'Flail']
            [38, 'Echoed Voice']
            [42, 'Hydro Pump']
            [45, 'Hyper Voice']
        ],
    ],

    ['536',
        [
            [1, 'Bubble']
            [1, 'Growl']
            [1, 'Supersonic']
            [1, 'Round']
            [5, 'Supersonic']
            [9, 'Round']
            [12, 'Bubble Beam']
            [16, 'Mud Shot']
            [20, 'Aqua Ring']
            [23, 'Uproar']
            [28, 'Muddy Water']
            [33, 'Rain Dance']
            [37, 'Flail']
            [42, 'Echoed Voice']
            [47, 'Hydro Pump']
            [51, 'Hyper Voice']
        ],
    ],

    ['537',
        [
            [0, 'Acid']
            [1, 'Acid']
            [1, 'Bubble']
            [1, 'Growl']
            [1, 'Supersonic']
            [1, 'Round']
            [5, 'Supersonic']
            [9, 'Round']
            [12, 'Bubble Beam']
            [16, 'Mud Shot']
            [20, 'Aqua Ring']
            [23, 'Uproar']
            [28, 'Muddy Water']
            [33, 'Rain Dance']
            [39, 'Flail']
            [44, 'Drain Punch']
            [49, 'Echoed Voice']
            [53, 'Hydro Pump']
            [59, 'Hyper Voice']
        ],
    ],

    ['538',
        [
            [1, 'Mat Block']
            [1, 'Bind']
            [1, 'Leer']
            [1, 'Bide']
            [1, 'Focus Energy']
            [5, 'Seismic Toss']
            [9, 'Vital Throw']
            [13, 'Revenge']
            [17, 'Storm Throw']
            [21, 'Body Slam']
            [25, 'Bulk Up']
            [29, 'Circle Throw']
            [33, 'Endure']
            [37, 'Wide Guard']
            [41, 'Superpower']
            [45, 'Reversal']
        ],
    ],

    ['539',
        [
            [1, 'Rock Smash']
            [1, 'Leer']
            [1, 'Bide']
            [1, 'Focus Energy']
            [5, 'Double Kick']
            [9, 'Low Sweep']
            [13, 'Counter']
            [17, 'Karate Chop']
            [21, 'Brick Break']
            [25, 'Bulk Up']
            [29, 'Retaliate']
            [33, 'Endure']
            [37, 'Quick Guard']
            [41, 'Close Combat']
            [45, 'Reversal']
        ],
    ],

    ['540',
        [
            [1, 'Tackle']
            [1, 'String Shot']
            [8, 'Bug Bite']
            [15, 'Razor Leaf']
            [22, 'Struggle Bug']
            [29, 'Endure']
            [31, 'Sticky Web']
            [36, 'Bug Buzz']
            [43, 'Flail']
        ],
    ],

    ['541',
        [
            [0, 'Protect']
            [1, 'Protect']
            [1, 'Grass Whistle']
            [1, 'Tackle']
            [1, 'String Shot']
            [1, 'Bug Bite']
            [1, 'Razor Leaf']
        ],
    ],

    ['542',
        [
            [0, 'Slash']
            [1, 'Slash']
            [1, 'False Swipe']
            [1, 'Tackle']
            [1, 'String Shot']
            [1, 'Bug Bite']
            [1, 'Razor Leaf']
            [8, 'Bug Bite']
            [15, 'Razor Leaf']
            [22, 'Struggle Bug']
            [29, 'Fell Stinger']
            [32, 'Helping Hand']
            [36, 'Leaf Blade']
            [39, 'X Scissor']
            [43, 'Entrainment']
            [46, 'Swords Dance']
            [50, 'Leaf Storm']
        ],
    ],

    ['543',
        [
            [1, 'Defense Curl']
            [1, 'Rollout']
            [5, 'Poison Sting']
            [8, 'Screech']
            [12, 'Pursuit']
            [15, 'Protect']
            [19, 'Poison Tail']
            [22, 'Bug Bite']
            [26, 'Venoshock']
            [29, 'Agility']
            [33, 'Steamroller']
            [36, 'Toxic']
            [38, 'Venom Drench']
            [40, 'Rock Climb']
            [43, 'Double Edge']
        ],
    ],

    ['544',
        [
            [0, 'Iron Defense']
            [1, 'Iron Defense']
            [1, 'Defense Curl']
            [1, 'Rollout']
            [1, 'Poison Sting']
            [1, 'Screech']
            [5, 'Poison Sting']
            [8, 'Screech']
            [12, 'Pursuit']
            [15, 'Protect']
            [19, 'Poison Tail']
            [23, 'Bug Bite']
            [28, 'Venoshock']
            [32, 'Agility']
            [37, 'Steamroller']
            [41, 'Toxic']
            [43, 'Venom Drench']
            [46, 'Rock Climb']
            [50, 'Double Edge']
        ],
    ],

    ['545',
        [
            [0, 'Baton Pass']
            [1, 'Baton Pass']
            [1, 'Iron Defense']
            [1, 'Megahorn']
            [1, 'Defense Curl']
            [1, 'Rollout']
            [1, 'Poison Sting']
            [1, 'Screech']
            [5, 'Poison Sting']
            [8, 'Screech']
            [12, 'Pursuit']
            [15, 'Protect']
            [19, 'Poison Tail']
            [23, 'Bug Bite']
            [28, 'Venoshock']
            [33, 'Agility']
            [39, 'Steamroller']
            [44, 'Toxic']
            [47, 'Venom Drench']
            [50, 'Rock Climb']
            [55, 'Double Edge']
            [65, 'Megahorn']
        ],
    ],

    ['546',
        [
            [1, 'Absorb']
            [1, 'Fairy Wind']
            [4, 'Growth']
            [8, 'Leech Seed']
            [10, 'Stun Spore']
            [13, 'Mega Drain']
            [17, 'Cotton Spore']
            [19, 'Razor Leaf']
            [22, 'Poison Powder']
            [26, 'Giga Drain']
            [28, 'Charm']
            [31, 'Helping Hand']
            [35, 'Energy Ball']
            [37, 'Cotton Guard']
            [40, 'Sunny Day']
            [44, 'Endeavor']
            [46, 'Solar Beam']
        ],
    ],

    ['547',
        [
            [1, 'Growth']
            [1, 'Leech Seed']
            [1, 'Mega Drain']
            [1, 'Cotton Spore']
            [10, 'Gust']
            [28, 'Tailwind']
            [46, 'Hurricane']
            [50, 'Moonblast']
        ],
    ],

    ['548',
        [
            [1, 'Absorb']
            [4, 'Growth']
            [8, 'Leech Seed']
            [10, 'Sleep Powder']
            [13, 'Mega Drain']
            [17, 'Synthesis']
            [19, 'Magical Leaf']
            [22, 'Stun Spore']
            [26, 'Giga Drain']
            [28, 'Aromatherapy']
            [31, 'Helping Hand']
            [35, 'Energy Ball']
            [37, 'Entrainment']
            [40, 'Sunny Day']
            [44, 'After You']
            [46, 'Leaf Storm']
        ],
    ],

    ['549',
        [
            [1, 'Growth']
            [1, 'Leech Seed']
            [1, 'Mega Drain']
            [1, 'Synthesis']
            [10, 'Teeter Dance']
            [28, 'Quiver Dance']
            [46, 'Petal Dance']
            [50, 'Petal Blizzard']
        ],
    ],

    ['550',
        [
            [1, 'Tail Whip']
            [1, 'Tackle']
            [1, 'Water Gun']
            [3, 'Uproar']
            [5, 'Headbutt']
            [7, 'Bite']
            [9, 'Aqua Jet']
            [11, 'Chip Away']
            [14, 'Take Down']
            [17, 'Crunch']
            [20, 'Aqua Tail']
            [23, 'Soak']
            [26, 'Double Edge']
            [30, 'Scary Face']
            [34, 'Flail']
            [38, 'Final Gambit']
            [42, 'Thrash']
            [46, 'Head Smash']
        ],
    ],

    ['551',
        [
            [1, 'Leer']
            [1, 'Rage']
            [4, 'Bite']
            [7, 'Sand Attack']
            [10, 'Torment']
            [13, 'Sand Tomb']
            [16, 'Assurance']
            [19, 'Mud Slap']
            [22, 'Embargo']
            [25, 'Swagger']
            [28, 'Crunch']
            [31, 'Dig']
            [34, 'Scary Face']
            [37, 'Foul Play']
            [40, 'Sandstorm']
            [43, 'Earthquake']
            [46, 'Thrash']
        ],
    ],

    ['552',
        [
            [1, 'Leer']
            [1, 'Rage']
            [1, 'Bite']
            [1, 'Sand Attack']
            [4, 'Bite']
            [7, 'Sand Attack']
            [10, 'Torment']
            [13, 'Sand Tomb']
            [16, 'Assurance']
            [19, 'Mud Slap']
            [22, 'Embargo']
            [25, 'Swagger']
            [28, 'Crunch']
            [32, 'Dig']
            [36, 'Scary Face']
            [40, 'Foul Play']
            [44, 'Sandstorm']
            [48, 'Earthquake']
            [52, 'Thrash']
        ],
    ],

    ['553',
        [
            [1, 'Power Trip']
            [1, 'Leer']
            [1, 'Rage']
            [1, 'Bite']
            [1, 'Sand Attack']
            [4, 'Bite']
            [7, 'Sand Attack']
            [10, 'Torment']
            [13, 'Sand Tomb']
            [16, 'Assurance']
            [19, 'Mud Slap']
            [22, 'Embargo']
            [25, 'Swagger']
            [28, 'Crunch']
            [32, 'Dig']
            [36, 'Scary Face']
            [42, 'Foul Play']
            [48, 'Sandstorm']
            [54, 'Earthquake']
            [60, 'Outrage']
        ],
    ],

    ['554',
        [
            [1, 'Tackle']
            [3, 'Rollout']
            [6, 'Incinerate']
            [9, 'Rage']
            [11, 'Fire Fang']
            [14, 'Headbutt']
            [17, 'Uproar']
            [19, 'Facade']
            [22, 'Fire Punch']
            [25, 'Work Up']
            [27, 'Thrash']
            [30, 'Belly Drum']
            [33, 'Flare Blitz']
            [35, 'Taunt']
            [39, 'Superpower']
            [42, 'Overheat']
        ], //Unova
        [
            [1, 'Powder Snow']
            [1, 'Tackle']
            [4, 'Taunt']
            [8, 'Bite']
            [12, 'Avalanche']
            [16, 'Work Up']
            [20, 'Ice Fang']
            [24, 'Headbutt']
            [28, 'Ice Punch']
            [32, 'Uproar']
            [36, 'Belly Drum']
            [40, 'Blizzard']
            [44, 'Thrash']
            [48, 'Superpower']
        ], //Galarian
    ], //Darumaka

    ['555',
        [
            [0, 'Hammer Arm']
            [1, 'Hammer Arm']
            [1, 'Tackle']
            [1, 'Rollout']
            [1, 'Incinerate']
            [1, 'Rage']
            [3, 'Rollout']
            [6, 'Incinerate']
            [9, 'Rage']
            [11, 'Fire Fang']
            [14, 'Headbutt']
            [17, 'Swagger']
            [19, 'Facade']
            [22, 'Fire Punch']
            [25, 'Work Up']
            [27, 'Thrash']
            [30, 'Belly Drum']
            [33, 'Flare Blitz']
            [39, 'Taunt']
            [47, 'Superpower']
            [54, 'Overheat']
        ], //Unovan
        [
            [0, 'Icicle Crash']
            [1, 'Icicle Crash']
            [1, 'Powder Snow']
            [1, 'Tackle']
            [1, 'Taunt']
            [1, 'Bite']
            [12, 'Avalanche']
            [16, 'Work Up']
            [20, 'Ice Fang']
            [24, 'Headbutt']
            [28, 'Ice Punch']
            [32, 'Uproar']
            [38, 'Belly Drum']
            [44, 'Blizzard']
            [50, 'Thrash']
            [56, 'Superpower']
        ], //Galarian
    ], //Darmanitan

    ['556',
        [
            [1, 'Spiky Shield']
            [1, 'Cotton Guard']
            [1, 'After You']
            [1, 'Peck']
            [1, 'Absorb']
            [3, 'Sweet Scent']
            [6, 'Growth']
            [10, 'Pin Missile']
            [13, 'Mega Drain']
            [15, 'Synthesis']
            [18, 'Cotton Spore']
            [22, 'Needle Arm']
            [26, 'Giga Drain']
            [29, 'Acupressure']
            [33, 'Ingrain']
            [38, 'Petal Dance']
            [42, 'Sucker Punch']
            [45, 'Sunny Day']
            [48, 'Petal Blizzard']
            [50, 'Solar Beam']
            [55, 'Cotton Guard']
            [57, 'After You']
        ],
    ],

    ['557',
        [
            [1, 'Fury Cutter']
            [5, 'Rock Blast']
            [7, 'Withdraw']
            [11, 'Sand Attack']
            [13, 'Feint Attack']
            [17, 'Smack Down']
            [19, 'Rock Polish']
            [23, 'Bug Bite']
            [24, 'Stealth Rock']
            [29, 'Rock Slide']
            [31, 'Slash']
            [35, 'X Scissor']
            [37, 'Shell Smash']
            [41, 'Flail']
            [43, 'Rock Wrecker']
        ],
    ],

    ['558',
        [
            [1, 'Shell Smash']
            [1, 'Rock Blast']
            [1, 'Withdraw']
            [1, 'Sand Attack']
            [5, 'Rock Blast']
            [7, 'Withdraw']
            [11, 'Sand Attack']
            [13, 'Feint Attack']
            [17, 'Smack Down']
            [19, 'Rock Polish']
            [23, 'Bug Bite']
            [24, 'Stealth Rock']
            [29, 'Rock Slide']
            [31, 'Slash']
            [38, 'X Scissor']
            [43, 'Shell Smash']
            [50, 'Flail']
            [55, 'Rock Wrecker']
        ],
    ],

    ['559',
        [
            [1, 'Leer']
            [1, 'Headbutt']
            [5, 'Sand Attack']
            [9, 'Feint Attack']
            [12, 'Swagger']
            [16, 'Low Kick']
            [20, 'Payback']
            [23, 'Brick Break']
            [27, 'Chip Away']
            [31, 'High Jump Kick']
            [34, 'Scary Face']
            [38, 'Crunch']
            [42, 'Facade']
            [45, 'Rock Climb']
            [48, 'Focus Punch']
            [50, 'Head Smash']
        ],
    ],

    ['560',
        [
            [1, 'Leer']
            [1, 'Headbutt']
            [1, 'Sand Attack']
            [1, 'Feint Attack']
            [5, 'Sand Attack']
            [9, 'Feint Attack']
            [12, 'Swagger']
            [16, 'Low Kick']
            [20, 'Payback']
            [23, 'Brick Break']
            [27, 'Chip Away']
            [31, 'High Jump Kick']
            [34, 'Scary Face']
            [38, 'Crunch']
            [45, 'Facade']
            [51, 'Rock Climb']
            [58, 'Focus Punch']
            [65, 'Head Smash']
        ],
    ],

    ['561',
        [
            [1, 'Gust']
            [1, 'Miracle Eye']
            [4, 'Hypnosis']
            [8, 'Psywave']
            [11, 'Tailwind']
            [14, 'Whirlwind']
            [18, 'Psybeam']
            [21, 'Air Cutter']
            [24, 'Light Screen']
            [28, 'Reflect']
            [31, 'Synchronoise']
            [34, 'Mirror Move']
            [38, 'Gravity']
            [41, 'Air Slash']
            [44, 'Psychic']
            [48, 'Cosmic Power']
            [50, 'Sky Attack']
        ],
    ],

    ['562',
        [
            [1, 'Astonish']
            [1, 'Protect']
            [5, 'Disable']
            [9, 'Haze']
            [13, 'Night Shade']
            [17, 'Hex']
            [21, 'Will O Wisp']
            [25, 'Ominous Wind']
            [29, 'Curse']
            [33, 'Power Split']
            [33, 'Guard Split']
            [37, 'Shadow Ball']
            [41, 'Grudge']
            [45, 'Mean Look']
            [49, 'Destiny Bond']
        ], //Unova
        [
            [1, 'Astonish']
            [1, 'Protect']
            [4, 'Haze']
            [8, 'Night Shade']
            [12, 'Disable']
            [16, 'Brutal Swing']
            [20, 'Crafty Shield']
            [24, 'Hex']
            [28, 'Mean Look']
            [32, 'Slam']
            [36, 'Curse']
            [40, 'Shadow Ball']
            [44, 'Earthquake']
            [48, 'Power Split']
            [48, 'Guard Split']
            [52, 'Destiny Bond']
        ], //Galarian
    ], //Yamask

    ['563',
        [
            [0, 'Scary Face']
            [1, 'Scary Face']
            [1, 'Astonish']
            [1, 'Protect']
            [1, 'Disable']
            [1, 'Haze']
            [5, 'Disable']
            [9, 'Haze']
            [13, 'Night Shade']
            [17, 'Hex']
            [21, 'Will O Wisp']
            [25, 'Ominous Wind']
            [29, 'Curse']
            [33, 'Power Split']
            [33, 'Guard Split']
            [39, 'Shadow Ball']
            [45, 'Grudge']
            [51, 'Mean Look']
            [57, 'Destiny Bond']
        ],
    ],

    ['564',
        [
            [1, 'Bide']
            [1, 'Withdraw']
            [1, 'Water Gun']
            [5, 'Rollout']
            [8, 'Bite']
            [11, 'Protect']
            [15, 'Aqua Jet']
            [18, 'Ancient Power']
            [21, 'Crunch']
            [25, 'Wide Guard']
            [28, 'Brine']
            [31, 'Smack Down']
            [35, 'Curse']
            [38, 'Shell Smash']
            [41, 'Aqua Tail']
            [45, 'Rock Slide']
            [48, 'Rain Dance']
            [50, 'Hydro Pump']
        ],
    ],

    ['565',
        [
            [1, 'Bide']
            [1, 'Withdraw']
            [1, 'Water Gun']
            [1, 'Rollout']
            [5, 'Rollout']
            [8, 'Bite']
            [11, 'Protect']
            [15, 'Aqua Jet']
            [18, 'Ancient Power']
            [21, 'Crunch']
            [25, 'Wide Guard']
            [28, 'Brine']
            [31, 'Smack Down']
            [35, 'Curse']
            [40, 'Shell Smash']
            [45, 'Aqua Tail']
            [51, 'Rock Slide']
            [56, 'Rain Dance']
            [61, 'Hydro Pump']
        ],
    ],

    ['566',
        [
            [1, 'Quick Attack']
            [1, 'Leer']
            [1, 'Wing Attack']
            [5, 'Rock Throw']
            [8, 'Double Team']
            [11, 'Scary Face']
            [15, 'Pluck']
            [18, 'Ancient Power']
            [21, 'Agility']
            [25, 'Quick Guard']
            [28, 'Acrobatics']
            [31, 'Dragon Breath']
            [35, 'Crunch']
            [38, 'Endeavor']
            [41, 'U Turn']
            [45, 'Rock Slide']
            [48, 'Dragon Claw']
            [50, 'Thrash']
        ],
    ],

    ['567',
        [
            [1, 'Quick Attack']
            [1, 'Leer']
            [1, 'Wing Attack']
            [1, 'Rock Throw']
            [5, 'Rock Throw']
            [8, 'Double Team']
            [11, 'Scary Face']
            [15, 'Pluck']
            [18, 'Ancient Power']
            [21, 'Agility']
            [25, 'Quick Guard']
            [28, 'Acrobatics']
            [31, 'Dragon Breath']
            [35, 'Crunch']
            [40, 'Endeavor']
            [45, 'U Turn']
            [51, 'Rock Slide']
            [56, 'Dragon Claw']
            [61, 'Thrash']
        ],
    ],

    ['568',
        [
            [1, 'Pound']
            [1, 'Poison Gas']
            [3, 'Recycle']
            [7, 'Toxic Spikes']
            [12, 'Acid Spray']
            [14, 'Double Slap']
            [18, 'Sludge']
            [23, 'Stockpile']
            [23, 'Swallow']
            [25, 'Take Down']
            [29, 'Sludge Bomb']
            [34, 'Clear Smog']
            [36, 'Toxic']
            [40, 'Amnesia']
            [42, 'Belch']
            [45, 'Gunk Shot']
            [47, 'Explosion']
        ],
    ],

    ['569',
        [
            [1, 'Pound']
            [1, 'Poison Gas']
            [1, 'Recycle']
            [1, 'Toxic Spikes']
            [3, 'Recycle']
            [7, 'Toxic Spikes']
            [12, 'Acid Spray']
            [14, 'Double Slap']
            [18, 'Sludge']
            [23, 'Stockpile']
            [23, 'Swallow']
            [25, 'Body Slam']
            [29, 'Sludge Bomb']
            [34, 'Clear Smog']
            [39, 'Toxic']
            [46, 'Amnesia']
            [49, 'Belch']
            [54, 'Gunk Shot']
            [59, 'Explosion']
        ],
    ],

    ['570',
        [
            [1, 'Scratch']
            [1, 'Leer']
            [5, 'Pursuit']
            [9, 'Fake Tears']
            [13, 'Fury Swipes']
            [17, 'Feint Attack']
            [21, 'Scary Face']
            [25, 'Taunt']
            [29, 'Foul Play']
            [33, 'Torment']
            [37, 'Agility']
            [41, 'Embargo']
            [45, 'Punishment']
            [49, 'Nasty Plot']
            [53, 'Imprison']
            [57, 'Night Daze']
        ],
    ],

    ['571',
        [
            [0, 'Night Slash']
            [1, 'Night Slash']
            [1, 'Night Daze']
            [1, 'Imprison']
            [1, 'U Turn']
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Pursuit']
            [1, 'Hone Claws']
            [5, 'Pursuit']
            [9, 'Hone Claws']
            [13, 'Fury Swipes']
            [17, 'Feint Attack']
            [21, 'Scary Face']
            [25, 'Taunt']
            [29, 'Foul Play']
            [34, 'Torment']
            [39, 'Agility']
            [44, 'Embargo']
            [49, 'Punishment']
            [54, 'Nasty Plot']
            [59, 'Imprison']
            [64, 'Night Daze']
        ],
    ],

    ['572',
        [
            [1, 'Pound']
            [3, 'Baby Doll Eyes']
            [7, 'Helping Hand']
            [9, 'Tickle']
            [13, 'Double Slap']
            [15, 'Encore']
            [19, 'Swift']
            [21, 'Sing']
            [25, 'Tail Slap']
            [27, 'Charm']
            [31, 'Wake Up Slap']
            [33, 'Echoed Voice']
            [37, 'Slam']
            [39, 'Captivate']
            [43, 'Hyper Voice']
            [45, 'Last Resort']
            [49, 'After You']
        ],
    ],

    ['573',
        [
            [1, 'Bullet Seed']
            [1, 'Rock Blast']
            [1, 'Helping Hand']
            [1, 'Tickle']
            [1, 'Sing']
            [1, 'Tail Slap']
        ],
    ],

    ['574',
        [
            [1, 'Pound']
            [3, 'Confusion']
            [7, 'Tickle']
            [8, 'Play Nice']
            [10, 'Fake Tears']
            [14, 'Double Slap']
            [16, 'Psybeam']
            [19, 'Embargo']
            [24, 'Feint Attack']
            [25, 'Psyshock']
            [28, 'Flatter']
            [31, 'Future Sight']
            [33, 'Heal Block']
            [37, 'Psychic']
            [40, 'Telekinesis']
            [46, 'Charm']
            [48, 'Magic Room']
        ],
    ],

    ['575',
        [
            [1, 'Pound']
            [1, 'Confusion']
            [1, 'Tickle']
            [1, 'Play Nice']
            [3, 'Confusion']
            [7, 'Tickle']
            [10, 'Fake Tears']
            [14, 'Double Slap']
            [16, 'Psybeam']
            [19, 'Embargo']
            [24, 'Feint Attack']
            [25, 'Psyshock']
            [28, 'Flatter']
            [31, 'Future Sight']
            [34, 'Heal Block']
            [39, 'Psychic']
            [43, 'Telekinesis']
            [50, 'Charm']
            [53, 'Magic Room']
        ],
    ],

    ['576',
        [
            [1, 'Pound']
            [1, 'Confusion']
            [1, 'Tickle']
            [1, 'Play Nice']
            [3, 'Confusion']
            [7, 'Tickle']
            [10, 'Fake Tears']
            [14, 'Double Slap']
            [16, 'Psybeam']
            [19, 'Embargo']
            [24, 'Feint Attack']
            [25, 'Psyshock']
            [28, 'Flatter']
            [31, 'Future Sight']
            [34, 'Heal Block']
            [39, 'Psychic']
            [45, 'Telekinesis']
            [54, 'Charm']
            [59, 'Magic Room']
        ],
    ],

    ['577',
        [
            [1, 'Psywave']
            [3, 'Reflect']
            [7, 'Rollout']
            [10, 'Snatch']
            [14, 'Hidden Power']
            [16, 'Light Screen']
            [19, 'Charm']
            [24, 'Recover']
            [25, 'Psyshock']
            [28, 'Endeavor']
            [31, 'Future Sight']
            [33, 'Pain Split']
            [37, 'Psychic']
            [40, 'Skill Swap']
            [46, 'Heal Block']
            [48, 'Wonder Room']
        ],
    ],

    ['578',
        [
            [1, 'Psywave']
            [1, 'Reflect']
            [1, 'Rollout']
            [1, 'Snatch']
            [3, 'Reflect']
            [7, 'Rollout']
            [10, 'Snatch']
            [14, 'Hidden Power']
            [16, 'Light Screen']
            [19, 'Charm']
            [24, 'Recover']
            [25, 'Psyshock']
            [28, 'Endeavor']
            [31, 'Future Sight']
            [34, 'Pain Split']
            [39, 'Psychic']
            [43, 'Skill Swap']
            [50, 'Heal Block']
            [53, 'Wonder Room']
        ],
    ],

    ['579',
        [
            [0, 'Dizzy Punch']
            [1, 'Dizzy Punch']
            [1, 'Psywave']
            [1, 'Reflect']
            [1, 'Rollout']
            [1, 'Snatch']
            [3, 'Reflect']
            [7, 'Rollout']
            [10, 'Snatch']
            [14, 'Hidden Power']
            [16, 'Light Screen']
            [19, 'Charm']
            [24, 'Recover']
            [25, 'Psyshock']
            [28, 'Endeavor']
            [31, 'Future Sight']
            [34, 'Pain Split']
            [39, 'Psychic']
            [45, 'Skill Swap']
            [54, 'Heal Block']
            [59, 'Wonder Room']
        ],
    ],

    ['580',
        [
            [1, 'Water Gun']
            [3, 'Water Sport']
            [6, 'Defog']
            [9, 'Wing Attack']
            [13, 'Water Pulse']
            [15, 'Aerial Ace']
            [19, 'Bubble Beam']
            [21, 'Feather Dance']
            [24, 'Aqua Ring']
            [27, 'Air Slash']
            [30, 'Roost']
            [34, 'Rain Dance']
            [37, 'Tailwind']
            [41, 'Brave Bird']
            [46, 'Hurricane']
        ],
    ],

    ['581',
        [
            [1, 'Water Gun']
            [1, 'Water Sport']
            [1, 'Defog']
            [1, 'Wing Attack']
            [3, 'Water Sport']
            [6, 'Defog']
            [9, 'Wing Attack']
            [13, 'Water Pulse']
            [15, 'Aerial Ace']
            [19, 'Bubble Beam']
            [21, 'Feather Dance']
            [24, 'Aqua Ring']
            [27, 'Air Slash']
            [30, 'Roost']
            [34, 'Rain Dance']
            [40, 'Tailwind']
            [47, 'Brave Bird']
            [55, 'Hurricane']
        ],
    ],

    ['582',
        [
            [1, 'Icicle Spear']
            [4, 'Harden']
            [7, 'Astonish']
            [10, 'Uproar']
            [13, 'Icy Wind']
            [16, 'Mist']
            [19, 'Avalanche']
            [22, 'Taunt']
            [26, 'Mirror Shot']
            [31, 'Acid Armor']
            [35, 'Ice Beam']
            [40, 'Hail']
            [44, 'Mirror Coat']
            [49, 'Blizzard']
            [53, 'Sheer Cold']
        ],
    ],

    ['583',
        [
            [1, 'Icicle Spear']
            [1, 'Harden']
            [1, 'Astonish']
            [1, 'Uproar']
            [4, 'Harden']
            [7, 'Astonish']
            [10, 'Uproar']
            [13, 'Icy Wind']
            [16, 'Mist']
            [19, 'Avalanche']
            [22, 'Taunt']
            [26, 'Mirror Shot']
            [31, 'Acid Armor']
            [36, 'Ice Beam']
            [42, 'Hail']
            [47, 'Mirror Coat']
            [53, 'Blizzard']
            [58, 'Sheer Cold']
        ],
    ],

    ['584',
        [
            [1, 'Sheer Cold']
            [1, 'Freeze Dry']
            [1, 'Weather Ball']
            [1, 'Icicle Spear']
            [1, 'Harden']
            [1, 'Astonish']
            [1, 'Uproar']
            [4, 'Harden']
            [7, 'Astonish']
            [10, 'Uproar']
            [13, 'Icy Wind']
            [16, 'Mist']
            [19, 'Avalanche']
            [22, 'Taunt']
            [26, 'Mirror Shot']
            [31, 'Acid Armor']
            [36, 'Ice Beam']
            [42, 'Hail']
            [50, 'Mirror Coat']
            [59, 'Blizzard']
            [67, 'Sheer Cold']
        ],
    ],

    ['585',
        [
            [1, 'Tackle']
            [1, 'Camouflage']
            [4, 'Growl']
            [7, 'Sand Attack']
            [10, 'Double Kick']
            [13, 'Leech Seed']
            [16, 'Feint Attack']
            [20, 'Take Down']
            [24, 'Jump Kick']
            [28, 'Aromatherapy']
            [32, 'Energy Ball']
            [36, 'Charm']
            [41, 'Nature Power']
            [46, 'Double Edge']
            [51, 'Solar Beam']
        ],
    ],

    ['586',
        [
            [0, 'Horn Leech']
            [1, 'Horn Leech']
            [1, 'Megahorn']
            [1, 'Tackle']
            [1, 'Camouflage']
            [1, 'Growl']
            [1, 'Sand Attack']
            [4, 'Growl']
            [7, 'Sand Attack']
            [10, 'Double Kick']
            [13, 'Leech Seed']
            [16, 'Feint Attack']
            [20, 'Take Down']
            [24, 'Jump Kick']
            [28, 'Aromatherapy']
            [32, 'Energy Ball']
            [36, 'Charm']
            [44, 'Nature Power']
            [52, 'Double Edge']
            [60, 'Solar Beam']
        ],
    ],

    ['587',
        [
            [1, 'Thunder Shock']
            [4, 'Quick Attack']
            [7, 'Tail Whip']
            [10, 'Charge']
            [13, 'Spark']
            [15, 'Nuzzle']
            [16, 'Pursuit']
            [19, 'Double Team']
            [22, 'Shock Wave']
            [26, 'Electro Ball']
            [30, 'Acrobatics']
            [34, 'Light Screen']
            [38, 'Encore']
            [42, 'Volt Switch']
            [46, 'Agility']
            [50, 'Discharge']
        ],
    ],

    ['588',
        [
            [1, 'Peck']
            [4, 'Leer']
            [8, 'Endure']
            [13, 'Fury Cutter']
            [16, 'Fury Attack']
            [20, 'Headbutt']
            [25, 'False Swipe']
            [28, 'Bug Buzz']
            [32, 'Slash']
            [37, 'Take Down']
            [40, 'Scary Face']
            [44, 'X Scissor']
            [49, 'Flail']
            [52, 'Swords Dance']
            [56, 'Double Edge']
        ],
    ],

    ['589',
        [
            [1, 'Double Edge']
            [1, 'Fell Stinger']
            [1, 'Peck']
            [1, 'Leer']
            [1, 'Quick Guard']
            [1, 'Twineedle']
            [4, 'Leer']
            [8, 'Quick Guard']
            [13, 'Twineedle']
            [16, 'Fury Attack']
            [20, 'Headbutt']
            [25, 'False Swipe']
            [28, 'Bug Buzz']
            [32, 'Slash']
            [37, 'Iron Head']
            [40, 'Iron Defense']
            [44, 'X Scissor']
            [49, 'Reversal']
            [52, 'Swords Dance']
            [56, 'Giga Impact']
            [60, 'Fell Stinger']
        ],
    ],

    ['590',
        [
            [1, 'Absorb']
            [6, 'Growth']
            [8, 'Astonish']
            [12, 'Bide']
            [15, 'Mega Drain']
            [18, 'Ingrain']
            [20, 'Feint Attack']
            [24, 'Sweet Scent']
            [28, 'Giga Drain']
            [32, 'Toxic']
            [35, 'Synthesis']
            [39, 'Clear Smog']
            [43, 'Solar Beam']
            [45, 'Rage Powder']
            [50, 'Spore']
        ],
    ],

    ['591',
        [
            [1, 'Absorb']
            [1, 'Growth']
            [1, 'Astonish']
            [1, 'Bide']
            [6, 'Growth']
            [8, 'Astonish']
            [12, 'Bide']
            [15, 'Mega Drain']
            [18, 'Ingrain']
            [20, 'Feint Attack']
            [24, 'Sweet Scent']
            [28, 'Giga Drain']
            [32, 'Toxic']
            [35, 'Synthesis']
            [43, 'Clear Smog']
            [49, 'Solar Beam']
            [54, 'Rage Powder']
            [62, 'Spore']
        ],
    ],

    ['592',
        [
            [1, 'Bubble']
            [1, 'Water Sport']
            [5, 'Absorb']
            [9, 'Night Shade']
            [13, 'Bubble Beam']
            [17, 'Recover']
            [22, 'Water Pulse']
            [27, 'Ominous Wind']
            [32, 'Brine']
            [37, 'Rain Dance']
            [43, 'Hex']
            [49, 'Hydro Pump']
            [55, 'Wring Out']
            [61, 'Water Spout']
        ],
    ],

    ['593',
        [
            [1, 'Water Spout']
            [1, 'Wring Out']
            [1, 'Bubble']
            [1, 'Water Sport']
            [1, 'Absorb']
            [1, 'Night Shade']
            [5, 'Absorb']
            [9, 'Night Shade']
            [13, 'Bubble Beam']
            [17, 'Recover']
            [22, 'Water Pulse']
            [27, 'Ominous Wind']
            [32, 'Brine']
            [37, 'Rain Dance']
            [45, 'Hex']
            [53, 'Hydro Pump']
            [61, 'Wring Out']
            [69, 'Water Spout']
        ],
    ],

    ['594',
        [
            [1, 'Play Nice']
            [1, 'Hydro Pump']
            [1, 'Wide Guard']
            [1, 'Healing Wish']
            [1, 'Helping Hand']
            [1, 'Pound']
            [1, 'Water Sport']
            [5, 'Aqua Ring']
            [9, 'Aqua Jet']
            [13, 'Double Slap']
            [17, 'Heal Pulse']
            [21, 'Protect']
            [25, 'Water Pulse']
            [29, 'Wake Up Slap']
            [33, 'Soak']
            [37, 'Wish']
            [41, 'Brine']
            [45, 'Safeguard']
            [49, 'Whirlpool']
            [53, 'Helping Hand']
            [57, 'Healing Wish']
            [61, 'Wide Guard']
            [65, 'Hydro Pump']
        ],
    ],

    ['595',
        [
            [1, 'String Shot']
            [1, 'Absorb']
            [1, 'Spider Web']
            [4, 'Thunder Wave']
            [7, 'Screech']
            [12, 'Fury Cutter']
            [15, 'Electroweb']
            [18, 'Bug Bite']
            [23, 'Gastro Acid']
            [26, 'Slash']
            [29, 'Electro Ball']
            [34, 'Signal Beam']
            [37, 'Agility']
            [40, 'Sucker Punch']
            [45, 'Discharge']
            [48, 'Bug Buzz']
        ],
    ],

    ['596',
        [
            [0, 'Sticky Web']
            [1, 'Sticky Web']
            [1, 'String Shot']
            [1, 'Absorb']
            [1, 'Spider Web']
            [1, 'Thunder Wave']
            [4, 'Thunder Wave']
            [7, 'Screech']
            [12, 'Fury Cutter']
            [15, 'Electroweb']
            [18, 'Bug Bite']
            [23, 'Gastro Acid']
            [26, 'Slash']
            [29, 'Electro Ball']
            [34, 'Signal Beam']
            [40, 'Agility']
            [46, 'Sucker Punch']
            [54, 'Discharge']
            [60, 'Bug Buzz']
        ],
    ],

    ['597',
        [
            [1, 'Tackle']
            [1, 'Harden']
            [6, 'Rollout']
            [9, 'Curse']
            [14, 'Metal Claw']
            [18, 'Pin Missile']
            [21, 'Gyro Ball']
            [26, 'Iron Defense']
            [30, 'Mirror Shot']
            [35, 'Ingrain']
            [38, 'Self Destruct']
            [43, 'Iron Head']
            [47, 'Payback']
            [52, 'Flash Cannon']
            [55, 'Explosion']
        ],
    ],

    ['598',
        [
            [0, 'Power Whip']
            [1, 'Power Whip']
            [1, 'Rock Climb']
            [1, 'Tackle']
            [1, 'Harden']
            [1, 'Rollout']
            [1, 'Curse']
            [6, 'Rollout']
            [9, 'Curse']
            [14, 'Metal Claw']
            [18, 'Pin Missile']
            [21, 'Gyro Ball']
            [26, 'Iron Defense']
            [30, 'Mirror Shot']
            [35, 'Ingrain']
            [38, 'Self Destruct']
            [46, 'Iron Head']
            [53, 'Payback']
            [61, 'Flash Cannon']
            [67, 'Explosion']
        ],
    ],

    ['599',
        [
            [1, 'Vice Grip']
            [6, 'Charge']
            [11, 'Thunder Shock']
            [16, 'Gear Grind']
            [21, 'Bind']
            [26, 'Charge Beam']
            [31, 'Autotomize']
            [36, 'Mirror Shot']
            [39, 'Screech']
            [42, 'Discharge']
            [45, 'Metal Sound']
            [48, 'Shift Gear']
            [50, 'Lock On']
            [54, 'Zap Cannon']
            [57, 'Hyper Beam']
        ],
    ],

    ['600',
        [
            [1, 'Vice Grip']
            [1, 'Charge']
            [1, 'Thunder Shock']
            [1, 'Gear Grind']
            [6, 'Charge']
            [11, 'Thunder Shock']
            [16, 'Gear Grind']
            [21, 'Bind']
            [26, 'Charge Beam']
            [31, 'Autotomize']
            [36, 'Mirror Shot']
            [40, 'Screech']
            [44, 'Discharge']
            [48, 'Metal Sound']
            [52, 'Shift Gear']
            [56, 'Lock On']
            [60, 'Zap Cannon']
            [64, 'Hyper Beam']
        ],
    ],

    ['601',
        [
            [0, 'Magnetic Flux']
            [1, 'Magnetic Flux']
            [1, 'Gear Up']
            [1, 'Vice Grip']
            [1, 'Charge']
            [1, 'Thunder Shock']
            [1, 'Gear Grind']
            [6, 'Charge']
            [11, 'Thunder Shock']
            [16, 'Gear Grind']
            [21, 'Bind']
            [25, 'Charge Beam']
            [31, 'Autotomize']
            [36, 'Mirror Shot']
            [40, 'Screech']
            [44, 'Discharge']
            [48, 'Metal Sound']
            [54, 'Shift Gear']
            [60, 'Lock On']
            [66, 'Zap Cannon']
            [72, 'Hyper Beam']
        ],
    ],

    ['602',
        [
            [1, 'Tackle']
            [1, 'Thunder Wave']
            [1, 'Spark']
            [1, 'Charge Beam']
        ],
    ],

    ['603',
        [
            [0, 'Crunch']
            [1, 'Crunch']
            [1, 'Headbutt']
            [1, 'Thunder Wave']
            [1, 'Spark']
            [1, 'Charge Beam']
            [9, 'Bind']
            [19, 'Acid']
            [29, 'Discharge']
            [44, 'Thunderbolt']
            [49, 'Acid Spray']
            [54, 'Coil']
            [59, 'Wild Charge']
            [64, 'Gastro Acid']
            [69, 'Zap Cannon']
            [74, 'Thrash']
        ],
    ],

    ['604',
        [
            [1, 'Crunch']
            [1, 'Thrash']
            [1, 'Zap Cannon']
            [1, 'Gastro Acid']
            [1, 'Coil']
            [1, 'Ion Deluge']
            [1, 'Crush Claw']
            [1, 'Headbutt']
            [1, 'Acid']
            [1, 'Discharge']
        ],
    ],

    ['605',
        [
            [1, 'Confusion']
            [4, 'Growl']
            [8, 'Heal Block']
            [11, 'Miracle Eye']
            [15, 'Psybeam']
            [18, 'Headbutt']
            [22, 'Hidden Power']
            [25, 'Imprison']
            [29, 'Simple Beam']
            [32, 'Zen Headbutt']
            [36, 'Psych Up']
            [39, 'Psychic']
            [43, 'Calm Mind']
            [46, 'Recover']
            [50, 'Guard Split']
            [50, 'Power Split']
            [53, 'Synchronoise']
            [56, 'Wonder Room']
        ],
    ],

    ['606',
        [
            [1, 'Psychic Terrain']
            [1, 'Wonder Room']
            [1, 'Synchronoise']
            [1, 'Confusion']
            [1, 'Growl']
            [1, 'Heal Block']
            [1, 'Miracle Eye']
            [4, 'Growl']
            [8, 'Heal Block']
            [11, 'Miracle Eye']
            [15, 'Psybeam']
            [18, 'Headbutt']
            [22, 'Hidden Power']
            [25, 'Imprison']
            [29, 'Simple Beam']
            [32, 'Zen Headbutt']
            [36, 'Psych Up']
            [39, 'Psychic']
            [45, 'Calm Mind']
            [50, 'Recover']
            [56, 'Guard Split']
            [58, 'Power Split']
            [63, 'Synchronoise']
            [68, 'Wonder Room']
        ],
    ],

    ['607',
        [
            [1, 'Ember']
            [1, 'Astonish']
            [3, 'Minimize']
            [5, 'Smog']
            [7, 'Fire Spin']
            [10, 'Confuse Ray']
            [13, 'Night Shade']
            [16, 'Will O Wisp']
            [20, 'Flame Burst']
            [24, 'Imprison']
            [28, 'Hex']
            [33, 'Memento']
            [38, 'Inferno']
            [43, 'Curse']
            [49, 'Shadow Ball']
            [55, 'Pain Split']
            [61, 'Overheat']
        ],
    ],

    ['608',
        [
            [1, 'Ember']
            [1, 'Astonish']
            [1, 'Minimize']
            [1, 'Smog']
            [3, 'Minimize']
            [5, 'Smog']
            [7, 'Fire Spin']
            [10, 'Confuse Ray']
            [13, 'Night Shade']
            [16, 'Will O Wisp']
            [20, 'Flame Burst']
            [24, 'Imprison']
            [28, 'Hex']
            [33, 'Memento']
            [38, 'Inferno']
            [45, 'Curse']
            [53, 'Shadow Ball']
            [61, 'Pain Split']
            [69, 'Overheat']
        ],
    ],

    ['609',
        [
            [1, 'Pain Split']
            [1, 'Smog']
            [1, 'Confuse Ray']
            [1, 'Flame Burst']
            [1, 'Hex']
        ],
    ],

    ['610',
        [
            [1, 'Scratch']
            [4, 'Leer']
            [7, 'Assurance']
            [10, 'Dragon Rage']
            [13, 'Dual Chop']
            [16, 'Scary Face']
            [20, 'Slash']
            [24, 'False Swipe']
            [28, 'Dragon Claw']
            [32, 'Dragon Dance']
            [36, 'Taunt']
            [41, 'Dragon Pulse']
            [46, 'Swords Dance']
            [50, 'Guillotine']
            [56, 'Outrage']
            [61, 'Giga Impact']
        ],
    ],

    ['611',
        [
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Assurance']
            [1, 'Dragon Rage']
            [4, 'Leer']
            [7, 'Assurance']
            [10, 'Dragon Rage']
            [13, 'Dual Chop']
            [16, 'Scary Face']
            [20, 'Slash']
            [24, 'False Swipe']
            [28, 'Dragon Claw']
            [32, 'Dragon Dance']
            [36, 'Taunt']
            [42, 'Dragon Pulse']
            [48, 'Swords Dance']
            [54, 'Guillotine']
            [60, 'Outrage']
            [66, 'Giga Impact']
        ],
    ],

    ['612',
        [
            [1, 'Outrage']
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Assurance']
            [1, 'Dragon Rage']
            [4, 'Leer']
            [7, 'Assurance']
            [10, 'Dragon Rage']
            [13, 'Dual Chop']
            [16, 'Scary Face']
            [20, 'Slash']
            [24, 'False Swipe']
            [28, 'Dragon Claw']
            [32, 'Dragon Dance']
            [36, 'Taunt']
            [42, 'Dragon Pulse']
            [50, 'Swords Dance']
            [58, 'Guillotine']
            [66, 'Outrage']
            [74, 'Giga Impact']
        ],
    ],

    ['613',
        [
            [1, 'Growl']
            [5, 'Powder Snow']
            [9, 'Bide']
            [13, 'Icy Wind']
            [15, 'Play Nice']
            [17, 'Fury Swipes']
            [21, 'Brine']
            [25, 'Endure']
            [29, 'Charm']
            [33, 'Slash']
            [36, 'Flail']
            [41, 'Rest']
            [45, 'Blizzard']
            [49, 'Hail']
            [53, 'Thrash']
            [57, 'Sheer Cold']
        ],
    ],

    ['614',
        [
            [0, 'Icicle Crash']
            [1, 'Icicle Crash']
            [1, 'Sheer Cold']
            [1, 'Thrash']
            [1, 'Superpower']
            [1, 'Aqua Jet']
            [1, 'Growl']
            [1, 'Powder Snow']
            [1, 'Bide']
            [1, 'Icy Wind']
            [5, 'Powder Snow']
            [9, 'Bide']
            [13, 'Icy Wind']
            [15, 'Play Nice']
            [17, 'Fury Swipes']
            [21, 'Brine']
            [25, 'Endure']
            [29, 'Swagger']
            [33, 'Slash']
            [36, 'Flail']
            [41, 'Rest']
            [45, 'Blizzard']
            [53, 'Hail']
            [59, 'Thrash']
            [66, 'Sheer Cold']
        ],
    ],

    ['615',
        [
            [1, 'Sheer Cold']
            [1, 'Night Slash']
            [1, 'Bind']
            [1, 'Ice Shard']
            [1, 'Sharpen']
            [1, 'Rapid Spin']
            [5, 'Icy Wind']
            [9, 'Mist']
            [9, 'Haze']
            [13, 'Aurora Beam']
            [17, 'Acid Armor']
            [21, 'Ancient Power']
            [25, 'Ice Beam']
            [29, 'Light Screen']
            [33, 'Reflect']
            [37, 'Slash']
            [41, 'Confuse Ray']
            [45, 'Recover']
            [49, 'Freeze Dry']
            [50, 'Solar Beam']
            [53, 'Night Slash']
            [57, 'Sheer Cold']
        ],
    ],

    ['616',
        [
            [1, 'Absorb']
            [4, 'Acid']
            [8, 'Bide']
            [13, 'Curse']
            [16, 'Struggle Bug']
            [20, 'Mega Drain']
            [25, 'Yawn']
            [28, 'Protect']
            [32, 'Acid Armor']
            [37, 'Giga Drain']
            [40, 'Body Slam']
            [44, 'Bug Buzz']
            [49, 'Recover']
            [50, 'Guard Swap']
            [56, 'Final Gambit']
        ],
    ],

    ['617',
        [
            [1, 'Water Shuriken']
            [1, 'Final Gambit']
            [1, 'Power Swap']
            [1, 'Absorb']
            [1, 'Acid Spray']
            [1, 'Double Team']
            [1, 'Quick Attack']
            [4, 'Acid Spray']
            [8, 'Double Team']
            [13, 'Quick Attack']
            [16, 'Struggle Bug']
            [20, 'Mega Drain']
            [25, 'Swift']
            [28, 'Me First']
            [32, 'Agility']
            [37, 'Giga Drain']
            [40, 'U Turn']
            [44, 'Bug Buzz']
            [49, 'Recover']
            [52, 'Power Swap']
            [56, 'Final Gambit']
        ],
    ],

    ['618',
        [
            [1, 'Fissure']
            [1, 'Flail']
            [1, 'Tackle']
            [1, 'Water Gun']
            [1, 'Mud Slap']
            [1, 'Mud Sport']
            [5, 'Bide']
            [9, 'Thunder Shock']
            [13, 'Mud Shot']
            [17, 'Camouflage']
            [21, 'Mud Bomb']
            [25, 'Discharge']
            [30, 'Endure']
            [35, 'Bounce']
            [40, 'Muddy Water']
            [45, 'Thunderbolt']
            [50, 'Revenge']
            [55, 'Flail']
            [61, 'Fissure']
        ], //Unovan
        [
            [1, 'Mud Slap']
            [1, 'Tackle']
            [1, 'Water Gun']
            [1, 'Metal Claw']
            [5, 'Endure']
            [10, 'Mud Shot']
            [15, 'Revenge']
            [20, 'Metal Sound']
            [25, 'Sucker Punch']
            [30, 'Iron Defense']
            [35, 'Bounce']
            [40, 'Muddy Water']
            [45, 'Snap Trap']
            [50, 'Flail']
            [55, 'Fissure']
        ], //Galarian
    ], //Stunfisk

    ['619',
        [
            [1, 'Pound']
            [5, 'Meditate']
            [9, 'Detect']
            [13, 'Fake Out']
            [17, 'Double Slap']
            [21, 'Swift']
            [25, 'Calm Mind']
            [29, 'Force Palm']
            [33, 'Drain Punch']
            [37, 'Jump Kick']
            [41, 'U Turn']
            [45, 'Quick Guard']
            [49, 'Bounce']
            [50, 'High Jump Kick']
            [57, 'Reversal']
            [61, 'Aura Sphere']
        ],
    ],

    ['620',
        [
            [1, 'Aura Sphere']
            [1, 'Reversal']
            [1, 'Pound']
            [1, 'Meditate']
            [1, 'Detect']
            [1, 'Fake Out']
            [5, 'Meditate']
            [9, 'Detect']
            [13, 'Fake Out']
            [17, 'Double Slap']
            [21, 'Swift']
            [25, 'Calm Mind']
            [29, 'Force Palm']
            [33, 'Drain Punch']
            [37, 'Jump Kick']
            [41, 'U Turn']
            [45, 'Wide Guard']
            [49, 'Bounce']
            [56, 'High Jump Kick']
            [63, 'Reversal']
            [70, 'Aura Sphere']
        ],
    ],

    ['621',
        [
            [1, 'Leer']
            [1, 'Scratch']
            [5, 'Hone Claws']
            [9, 'Bite']
            [13, 'Scary Face']
            [18, 'Dragon Rage']
            [21, 'Slash']
            [25, 'Crunch']
            [27, 'Dragon Claw']
            [31, 'Chip Away']
            [35, 'Revenge']
            [40, 'Night Slash']
            [45, 'Dragon Tail']
            [49, 'Rock Climb']
            [55, 'Superpower']
            [62, 'Outrage']
        ],
    ],

    ['622',
        [
            [1, 'Pound']
            [1, 'Astonish']
            [1, 'Defense Curl']
            [5, 'Mud Slap']
            [9, 'Rollout']
            [13, 'Shadow Punch']
            [17, 'Iron Defense']
            [21, 'Stomping Tantrum']
            [25, 'Mega Punch']
            [30, 'Magnitude']
            [35, 'Dynamic Punch']
            [40, 'Night Shade']
            [45, 'Curse']
            [50, 'Earthquake']
            [55, 'Hammer Arm']
            [61, 'Focus Punch']
        ],
    ],

    ['623',
        [
            [0, 'Heavy Slam']
            [1, 'Heavy Slam']
            [1, 'High Horsepower']
            [1, 'Pound']
            [1, 'Astonish']
            [1, 'Defense Curl']
            [1, 'Mud Slap']
            [5, 'Mud Slap']
            [9, 'Rollout']
            [13, 'Shadow Punch']
            [17, 'Iron Defense']
            [21, 'Stomping Tantrum']
            [25, 'Mega Punch']
            [30, 'Magnitude']
            [35, 'Dynamic Punch']
            [40, 'Night Shade']
            [47, 'Curse']
            [54, 'Earthquake']
            [61, 'Hammer Arm']
            [69, 'Focus Punch']
            [76, 'Phantom Force']
        ],
    ],

    ['624',
        [
            [1, 'Scratch']
            [6, 'Leer']
            [9, 'Fury Cutter']
            [14, 'Torment']
            [17, 'Feint Attack']
            [22, 'Scary Face']
            [25, 'Metal Claw']
            [30, 'Slash']
            [33, 'Assurance']
            [38, 'Metal Sound']
            [41, 'Embargo']
            [46, 'Iron Defense']
            [49, 'Night Slash']
            [54, 'Iron Head']
            [57, 'Swords Dance']
            [62, 'Guillotine']
        ],
    ],

    ['625',
        [
            [1, 'Guillotine']
            [1, 'Iron Head']
            [1, 'Metal Burst']
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Fury Cutter']
            [1, 'Torment']
            [6, 'Leer']
            [9, 'Fury Cutter']
            [14, 'Torment']
            [17, 'Feint Attack']
            [22, 'Scary Face']
            [25, 'Metal Claw']
            [30, 'Slash']
            [33, 'Assurance']
            [38, 'Metal Sound']
            [41, 'Embargo']
            [46, 'Iron Defense']
            [49, 'Night Slash']
            [57, 'Iron Head']
            [63, 'Swords Dance']
            [71, 'Guillotine']
        ],
    ],

    ['626',
        [
            [1, 'Pursuit']
            [1, 'Leer']
            [6, 'Rage']
            [11, 'Fury Attack']
            [16, 'Horn Attack']
            [21, 'Scary Face']
            [26, 'Revenge']
            [31, 'Head Charge']
            [36, 'Focus Energy']
            [41, 'Megahorn']
            [46, 'Reversal']
            [50, 'Thrash']
            [56, 'Swords Dance']
            [61, 'Giga Impact']
        ],
    ],

    ['627',
        [
            [1, 'Peck']
            [1, 'Leer']
            [5, 'Fury Attack']
            [10, 'Wing Attack']
            [14, 'Hone Claws']
            [19, 'Scary Face']
            [23, 'Aerial Ace']
            [28, 'Slash']
            [32, 'Defog']
            [37, 'Tailwind']
            [41, 'Air Slash']
            [46, 'Crush Claw']
            [50, 'Sky Drop']
            [55, 'Whirlwind']
            [59, 'Brave Bird']
            [64, 'Thrash']
        ],
    ],

    ['628',
        [
            [0, 'Superpower']
            [1, 'Superpower']
            [1, 'Thrash']
            [1, 'Brave Bird']
            [1, 'Whirlwind']
            [1, 'Peck']
            [1, 'Leer']
            [1, 'Fury Attack']
            [1, 'Wing Attack']
            [5, 'Fury Attack']
            [10, 'Wing Attack']
            [14, 'Hone Claws']
            [19, 'Scary Face']
            [23, 'Aerial Ace']
            [28, 'Slash']
            [32, 'Defog']
            [37, 'Tailwind']
            [41, 'Air Slash']
            [46, 'Crush Claw']
            [50, 'Sky Drop']
            [57, 'Whirlwind']
            [63, 'Brave Bird']
            [70, 'Thrash']
        ],
    ],

    ['629',
        [
            [1, 'Gust']
            [1, 'Leer']
            [5, 'Fury Attack']
            [10, 'Pluck']
            [14, 'Nasty Plot']
            [19, 'Flatter']
            [23, 'Feint Attack']
            [28, 'Punishment']
            [32, 'Defog']
            [37, 'Tailwind']
            [41, 'Air Slash']
            [46, 'Dark Pulse']
            [50, 'Embargo']
            [55, 'Whirlwind']
            [59, 'Brave Bird']
            [64, 'Mirror Move']
        ],
    ],

    ['630',
        [
            [0, 'Bone Rush']
            [1, 'Bone Rush']
            [1, 'Mirror Move']
            [1, 'Brave Bird']
            [1, 'Whirlwind']
            [1, 'Gust']
            [1, 'Leer']
            [1, 'Fury Attack']
            [1, 'Pluck']
            [5, 'Fury Attack']
            [10, 'Pluck']
            [14, 'Nasty Plot']
            [19, 'Flatter']
            [23, 'Feint Attack']
            [28, 'Punishment']
            [32, 'Defog']
            [37, 'Tailwind']
            [41, 'Air Slash']
            [46, 'Dark Pulse']
            [50, 'Embargo']
            [57, 'Whirlwind']
            [63, 'Brave Bird']
            [70, 'Mirror Move']
        ],
    ],

    ['631',
        [
            [1, 'Hone Claws']
            [1, 'Tackle']
            [1, 'Incinerate']
            [1, 'Lick']
            [6, 'Odor Sleuth']
            [11, 'Bind']
            [16, 'Fire Spin']
            [21, 'Fury Swipes']
            [26, 'Snatch']
            [31, 'Flame Burst']
            [36, 'Bug Bite']
            [41, 'Slash']
            [44, 'Fire Lash']
            [47, 'Amnesia']
            [50, 'Flamethrower']
            [56, 'Stockpile']
            [56, 'Spit Up']
            [56, 'Swallow']
            [61, 'Flare Blitz']
            [66, 'Inferno']
        ],
    ],

    ['632',
        [
            [1, 'Metal Sound']
            [1, 'Guillotine']
            [1, 'Vice Grip']
            [1, 'Sand Attack']
            [1, 'Fury Cutter']
            [1, 'Bite']
            [6, 'Agility']
            [11, 'Metal Claw']
            [16, 'Bug Bite']
            [21, 'Crunch']
            [26, 'Iron Head']
            [31, 'Dig']
            [36, 'Entrainment']
            [41, 'X Scissor']
            [46, 'Iron Defense']
            [51, 'Guillotine']
            [56, 'Metal Sound']
        ],
    ],

    ['633',
        [
            [1, 'Tackle']
            [1, 'Dragon Rage']
            [4, 'Focus Energy']
            [9, 'Bite']
            [12, 'Headbutt']
            [17, 'Dragon Breath']
            [20, 'Roar']
            [25, 'Crunch']
            [28, 'Slam']
            [32, 'Dragon Pulse']
            [38, 'Work Up']
            [42, 'Dragon Rush']
            [48, 'Body Slam']
            [50, 'Scary Face']
            [58, 'Hyper Voice']
            [62, 'Outrage']
        ],
    ],

    ['634',
        [
            [1, 'Double Hit']
            [1, 'Dragon Rage']
            [1, 'Focus Energy']
            [1, 'Bite']
            [4, 'Focus Energy']
            [9, 'Bite']
            [12, 'Headbutt']
            [17, 'Dragon Breath']
            [20, 'Roar']
            [25, 'Crunch']
            [28, 'Slam']
            [32, 'Dragon Pulse']
            [38, 'Work Up']
            [42, 'Dragon Rush']
            [48, 'Body Slam']
            [55, 'Scary Face']
            [64, 'Hyper Voice']
            [71, 'Outrage']
        ],
    ],

    ['635',
        [
            [1, 'Outrage']
            [1, 'Hyper Voice']
            [1, 'Tri Attack']
            [1, 'Dragon Rage']
            [1, 'Focus Energy']
            [1, 'Bite']
            [4, 'Focus Energy']
            [9, 'Bite']
            [12, 'Headbutt']
            [17, 'Dragon Breath']
            [20, 'Roar']
            [25, 'Crunch']
            [28, 'Slam']
            [32, 'Dragon Pulse']
            [38, 'Work Up']
            [42, 'Dragon Rush']
            [48, 'Body Slam']
            [55, 'Scary Face']
            [68, 'Hyper Voice']
            [79, 'Outrage']
        ],
    ],

    ['636',
        [
            [1, 'Ember']
            [1, 'String Shot']
            [10, 'Absorb']
            [20, 'Take Down']
            [30, 'Flame Charge']
            [40, 'Bug Bite']
            [50, 'Double Edge']
            [60, 'Flame Wheel']
            [70, 'Bug Buzz']
            [80, 'Amnesia']
            [90, 'Thrash']
            [100, 'Flare Blitz']
        ],
    ],

    ['637',
        [
            [0, 'Quiver Dance']
            [1, 'Quiver Dance']
            [1, 'Fiery Dance']
            [1, 'Hurricane']
            [1, 'Rage Powder']
            [1, 'Heat Wave']
            [1, 'Flare Blitz']
            [1, 'Thrash']
            [1, 'Amnesia']
            [1, 'Bug Buzz']
            [1, 'Flame Wheel']
            [1, 'Ember']
            [1, 'String Shot']
            [1, 'Absorb']
            [1, 'Gust']
            [10, 'Absorb']
            [20, 'Gust']
            [30, 'Fire Spin']
            [40, 'Whirlwind']
            [50, 'Silver Wind']
            [60, 'Heat Wave']
            [70, 'Bug Buzz']
            [80, 'Rage Powder']
            [90, 'Hurricane']
            [100, 'Fiery Dance']
        ],
    ],

    ['638',
        [
            [1, 'Close Combat']
            [1, 'Metal Burst']
            [1, 'Quick Attack']
            [1, 'Leer']
            [1, 'Double Kick']
            [1, 'Metal Claw']
            [7, 'Take Down']
            [13, 'Helping Hand']
            [19, 'Retaliate']
            [25, 'Iron Head']
            [31, 'Sacred Sword']
            [37, 'Swords Dance']
            [42, 'Quick Guard']
            [49, 'Work Up']
            [55, 'Metal Burst']
            [61, 'Close Combat']
        ],
    ],

    ['639',
        [
            [1, 'Close Combat']
            [1, 'Quick Attack']
            [1, 'Leer']
            [1, 'Double Kick']
            [1, 'Smack Down']
            [7, 'Take Down']
            [13, 'Helping Hand']
            [19, 'Retaliate']
            [25, 'Rock Slide']
            [31, 'Sacred Sword']
            [37, 'Swords Dance']
            [42, 'Quick Guard']
            [49, 'Work Up']
            [55, 'Stone Edge']
            [61, 'Close Combat']
        ],
    ],

    ['640',
        [
            [1, 'Close Combat']
            [1, 'Leaf Blade']
            [1, 'Quick Attack']
            [1, 'Leer']
            [1, 'Double Kick']
            [1, 'Magical Leaf']
            [7, 'Take Down']
            [13, 'Helping Hand']
            [19, 'Retaliate']
            [25, 'Giga Drain']
            [31, 'Sacred Sword']
            [37, 'Swords Dance']
            [42, 'Quick Guard']
            [49, 'Work Up']
            [55, 'Leaf Blade']
            [61, 'Close Combat']
        ],
    ],

    ['641',
        [
            [1, 'Thrash']
            [1, 'Hammer Arm']
            [1, 'Hurricane']
            [1, 'Uproar']
            [1, 'Astonish']
            [1, 'Gust']
            [1, 'Swagger']
            [7, 'Bite']
            [13, 'Revenge']
            [19, 'Air Cutter']
            [25, 'Extrasensory']
            [31, 'Agility']
            [37, 'Air Slash']
            [43, 'Crunch']
            [49, 'Tailwind']
            [55, 'Rain Dance']
            [61, 'Hurricane']
            [67, 'Dark Pulse']
            [73, 'Hammer Arm']
            [79, 'Thrash']
        ],
    ],

    ['642',
        [
            [1, 'Thrash']
            [1, 'Hammer Arm']
            [1, 'Nasty Plot']
            [1, 'Uproar']
            [1, 'Astonish']
            [1, 'Thunder Shock']
            [1, 'Swagger']
            [7, 'Bite']
            [13, 'Revenge']
            [19, 'Shock Wave']
            [25, 'Heal Block']
            [31, 'Agility']
            [37, 'Discharge']
            [43, 'Crunch']
            [49, 'Charge']
            [55, 'Nasty Plot']
            [61, 'Thunder']
            [67, 'Dark Pulse']
            [73, 'Hammer Arm']
            [79, 'Thrash']
        ],
    ],

    ['643',
        [
            [1, 'Fire Fang']
            [1, 'Dragon Rage']
            [8, 'Imprison']
            [15, 'Ancient Power']
            [22, 'Flamethrower']
            [29, 'Dragon Breath']
            [36, 'Slash']
            [43, 'Extrasensory']
            [50, 'Fusion Flare']
            [54, 'Dragon Pulse']
            [64, 'Noble Roar']
            [71, 'Crunch']
            [78, 'Fire Blast']
            [85, 'Outrage']
            [92, 'Hyper Voice']
            [100, 'Blue Flare']
        ],
    ],

    ['644',
        [
            [1, 'Thunder Fang']
            [1, 'Dragon Rage']
            [8, 'Imprison']
            [15, 'Ancient Power']
            [22, 'Thunderbolt']
            [29, 'Dragon Breath']
            [36, 'Slash']
            [43, 'Zen Headbutt']
            [50, 'Fusion Bolt']
            [54, 'Dragon Claw']
            [64, 'Noble Roar']
            [71, 'Crunch']
            [78, 'Thunder']
            [85, 'Outrage']
            [92, 'Hyper Voice']
            [100, 'Bolt Strike']
        ],
    ],

    ['645',
        [
            [1, 'Outrage']
            [1, 'Hammer Arm']
            [1, 'Fissure']
            [1, 'Block']
            [1, 'Mud Shot']
            [1, 'Rock Tomb']
            [1, 'Imprison']
            [7, 'Punishment']
            [13, 'Bulldoze']
            [19, 'Rock Throw']
            [25, 'Extrasensory']
            [31, 'Swords Dance']
            [37, 'Earth Power']
            [43, 'Rock Slide']
            [49, 'Earthquake']
            [55, 'Sandstorm']
            [61, 'Fissure']
            [67, 'Stone Edge']
            [73, 'Hammer Arm']
            [79, 'Outrage']
        ],
    ],

    ['646',
        [
            [1, 'Icy Wind']
            [1, 'Dragon Rage']
            [8, 'Imprison']
            [15, 'Ancient Power']
            [22, 'Ice Beam']
            [29, 'Dragon Breath']
            [36, 'Slash']
            [43, 'Scary Face']
            [50, 'Glaciate']
            [57, 'Dragon Pulse']
            [64, 'Noble Roar']
            [71, 'Endeavor']
            [78, 'Blizzard']
            [85, 'Outrage']
            [92, 'Hyper Voice']
        ], //Normal
        [
            [1, 'Icy Wind']
            [1, 'Dragon Rage']
            [8, 'Imprison']
            [15, 'Ancient Power']
            [22, 'Ice Beam']
            [29, 'Dragon Breath']
            [36, 'Slash']
            [43, 'Fusion Flare']
            [50, 'Ice Burn']
            [57, 'Dragon Pulse']
            [64, 'Noble Roar']
            [71, 'Endeavor']
            [78, 'Blizzard']
            [85, 'Outrage']
            [92, 'Hyper Voice']
        ], //White Kyurem
        [
            [1, 'Icy Wind']
            [1, 'Dragon Rage']
            [8, 'Imprison']
            [15, 'Ancient Power']
            [22, 'Ice Beam']
            [29, 'Dragon Breath']
            [36, 'Slash']
            [43, 'Fusion Bolt']
            [50, 'Freeze Shock']
            [57, 'Dragon Pulse']
            [64, 'Noble Roar']
            [71, 'Endeavor']
            [78, 'Blizzard']
            [85, 'Outrage']
            [92, 'Hyper Voice']
        ], //Black Kyurem
    ], //Kyurem

    ['647',
        [
            [1, 'Aqua Jet']
            [1, 'Leer']
            [1, 'Double Kick']
            [1, 'Bubble Beam']
            [7, 'Double Kick']
            [13, 'Bubble Beam']
            [19, 'Take Down']
            [25, 'Helping Hand']
            [31, 'Retaliate']
            [37, 'Aqua Tail']
            [43, 'Sacred Sword']
            [49, 'Swords Dance']
            [55, 'Quick Guard']
            [61, 'Work Up']
            [67, 'Hydro Pump']
            [73, 'Close Combat']
        ],
    ],

    ['648',
        [
            [1, 'Round']
            [1, 'Quick Attack']
            [1, 'Confusion']
            [1, 'Sing']
            [6, 'Quick Attack']
            [11, 'Confusion']
            [16, 'Sing']
            [21, 'Teeter Dance']
            [26, 'Acrobatics']
            [31, 'Psybeam']
            [36, 'Echoed Voice']
            [43, 'U Turn']
            [50, 'Wake Up Slap']
            [57, 'Psychic']
            [64, 'Hyper Voice']
            [71, 'Role Play']
            [78, 'Close Combat']
            [85, 'Perish Song']
        ],
    ],

    ['649',
        [
            [1, 'Fell Stinger']
            [1, 'Techno Blast']
            [1, 'Quick Attack']
            [1, 'Magnet Rise']
            [1, 'Metal Claw']
            [1, 'Screech']
            [7, 'Fury Cutter']
            [11, 'Lock On']
            [18, 'Flame Charge']
            [22, 'Magnet Bomb']
            [29, 'Slash']
            [33, 'Metal Sound']
            [40, 'Signal Beam']
            [44, 'Tri Attack']
            [51, 'X Scissor']
            [55, 'Bug Buzz']
            [62, 'Simple Beam']
            [66, 'Zap Cannon']
            [73, 'Hyper Beam']
            [77, 'Self Destruct']
        ],
    ],

    ['650',
        [
            [1, 'Growl']
            [1, 'Vine Whip']
            [5, 'Vine Whip']
            [8, 'Rollout']
            [11, 'Bite']
            [15, 'Leech Seed']
            [18, 'Pin Missile']
            [27, 'Take Down']
            [32, 'Seed Bomb']
            [35, 'Mud Shot']
            [39, 'Bulk Up']
            [42, 'Body Slam']
            [45, 'Pain Split']
            [48, 'Wood Hammer']
        ],
    ],

    ['651',
        [
            [0, 'Needle Arm']
            [1, 'Needle Arm']
            [1, 'Growl']
            [1, 'Vine Whip']
            [5, 'Vine Whip']
            [8, 'Rollout']
            [11, 'Bite']
            [15, 'Leech Seed']
            [19, 'Pin Missile']
            [29, 'Take Down']
            [35, 'Seed Bomb']
            [39, 'Mud Shot']
            [44, 'Bulk Up']
            [48, 'Body Slam']
            [52, 'Pain Split']
            [56, 'Wood Hammer']
        ],
    ],

    ['652',
        [
            [0, 'Spiky Shield']
            [1, 'Spiky Shield']
            [1, 'Needle Arm']
            [1, 'Hammer Arm']
            [1, 'Feint']
            [1, 'Belly Drum']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Vine Whip']
            [1, 'Rollout']
            [5, 'Vine Whip']
            [8, 'Rollout']
            [11, 'Bite']
            [15, 'Leech Seed']
            [19, 'Pin Missile']
            [29, 'Take Down']
            [35, 'Seed Bomb']
            [41, 'Mud Shot']
            [48, 'Bulk Up']
            [54, 'Body Slam']
            [60, 'Pain Split']
            [66, 'Wood Hammer']
            [72, 'Hammer Arm']
            [78, 'Giga Impact']
        ],
    ],

    ['653',
        [
            [1, 'Scratch']
            [1, 'Tail Whip']
            [5, 'Ember']
            [11, 'Howl']
            [14, 'Flame Charge']
            [17, 'Psybeam']
            [20, 'Fire Spin']
            [25, 'Lucky Chant']
            [27, 'Light Screen']
            [31, 'Psyshock']
            [35, 'Flamethrower']
            [38, 'Will O Wisp']
            [41, 'Psychic']
            [43, 'Sunny Day']
            [46, 'Magic Room']
            [48, 'Fire Blast']
        ],
    ],

    ['654',
        [
            [1, 'Scratch']
            [1, 'Tail Whip']
            [1, 'Ember']
            [5, 'Ember']
            [11, 'Howl']
            [14, 'Flame Charge']
            [18, 'Psybeam']
            [22, 'Fire Spin']
            [28, 'Lucky Chant']
            [31, 'Light Screen']
            [36, 'Psyshock']
            [41, 'Flamethrower']
            [45, 'Will O Wisp']
            [49, 'Psychic']
            [52, 'Sunny Day']
            [56, 'Magic Room']
            [59, 'Fire Blast']
        ],
    ],

    ['655',
        [
            [0, 'Mystical Fire']
            [1, 'Mystical Fire']
            [1, 'Future Sight']
            [1, 'Role Play']
            [1, 'Switcheroo']
            [1, 'Shadow Ball']
            [1, 'Scratch']
            [1, 'Tail Whip']
            [1, 'Ember']
            [1, 'Howl']
            [5, 'Ember']
            [11, 'Howl']
            [14, 'Flame Charge']
            [18, 'Psybeam']
            [22, 'Fire Spin']
            [28, 'Lucky Chant']
            [31, 'Light Screen']
            [38, 'Psyshock']
            [45, 'Flamethrower']
            [51, 'Will O Wisp']
            [57, 'Psychic']
            [62, 'Sunny Day']
            [68, 'Magic Room']
            [74, 'Fire Blast']
            [80, 'Future Sight']
        ],
    ],

    ['656',
        [
            [1, 'Pound']
            [1, 'Growl']
            [5, 'Bubble']
            [8, 'Quick Attack']
            [10, 'Lick']
            [14, 'Water Pulse']
            [18, 'Smokescreen']
            [21, 'Round']
            [25, 'Fling']
            [29, 'Smack Down']
            [35, 'Substitute']
            [39, 'Bounce']
            [43, 'Double Team']
            [48, 'Hydro Pump']
        ],
    ],

    ['657',
        [
            [1, 'Pound']
            [1, 'Growl']
            [1, 'Bubble']
            [5, 'Bubble']
            [8, 'Quick Attack']
            [10, 'Lick']
            [14, 'Water Pulse']
            [19, 'Smokescreen']
            [23, 'Round']
            [28, 'Fling']
            [33, 'Smack Down']
            [40, 'Substitute']
            [45, 'Bounce']
            [50, 'Double Team']
            [56, 'Hydro Pump']
        ],
    ],

    ['658',
        [
            [0, 'Water Shuriken']
            [1, 'Water Shuriken']
            [1, 'Night Slash']
            [1, 'Haze']
            [1, 'Role Play']
            [1, 'Mat Block']
            [1, 'Pound']
            [1, 'Growl']
            [1, 'Bubble']
            [1, 'Quick Attack']
            [5, 'Bubble']
            [8, 'Quick Attack']
            [10, 'Lick']
            [14, 'Water Pulse']
            [19, 'Smokescreen']
            [23, 'Shadow Sneak']
            [28, 'Spikes']
            [33, 'Feint Attack']
            [42, 'Substitute']
            [49, 'Extrasensory']
            [56, 'Double Team']
            [68, 'Hydro Pump']
            [70, 'Haze']
            [77, 'Night Slash']
        ],
    ],

    ['659',
        [
            [1, 'Tackle']
            [1, 'Agility']
            [1, 'Leer']
            [7, 'Quick Attack']
            [10, 'Double Slap']
            [13, 'Mud Slap']
            [15, 'Take Down']
            [18, 'Mud Shot']
            [20, 'Double Kick']
            [25, 'Odor Sleuth']
            [29, 'Flail']
            [33, 'Dig']
            [38, 'Bounce']
            [42, 'Super Fang']
            [47, 'Facade']
            [49, 'Earthquake']
        ],
    ],

    ['660',
        [
            [1, 'Hammer Arm']
            [1, 'Rototiller']
            [1, 'Bulldoze']
            [1, 'Swords Dance']
            [1, 'Tackle']
            [1, 'Agility']
            [1, 'Leer']
            [7, 'Quick Attack']
            [13, 'Double Slap']
            [13, 'Mud Slap']
            [15, 'Take Down']
            [18, 'Mud Shot']
            [21, 'Double Kick']
            [27, 'Odor Sleuth']
            [32, 'Flail']
            [37, 'Dig']
            [43, 'Bounce']
            [48, 'Super Fang']
            [54, 'Facade']
            [57, 'Earthquake']
            [60, 'Hammer Arm']
        ],
    ],

    ['661',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [6, 'Quick Attack']
            [10, 'Peck']
            [13, 'Agility']
            [16, 'Flail']
            [21, 'Roost']
            [25, 'Razor Wind']
            [29, 'Natural Gift']
            [34, 'Flame Charge']
            [39, 'Acrobatics']
            [41, 'Me First']
            [45, 'Tailwind']
            [48, 'Steel Wing']
        ],
    ],

    ['662',
        [
            [0, 'Ember']
            [1, 'Ember']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Quick Attack']
            [6, 'Quick Attack']
            [10, 'Peck']
            [13, 'Agility']
            [16, 'Flail']
            [25, 'Roost']
            [27, 'Razor Wind']
            [31, 'Natural Gift']
            [38, 'Flame Charge']
            [42, 'Acrobatics']
            [46, 'Me First']
            [51, 'Tailwind']
            [55, 'Steel Wing']
        ],
    ],

    ['663',
        [
            [1, 'Ember']
            [1, 'Brave Bird']
            [1, 'Flare Blitz']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Quick Attack']
            [1, 'Peck']
            [6, 'Quick Attack']
            [10, 'Peck']
            [13, 'Agility']
            [16, 'Flail']
            [25, 'Roost']
            [27, 'Razor Wind']
            [31, 'Natural Gift']
            [39, 'Flame Charge']
            [44, 'Acrobatics']
            [49, 'Me First']
            [55, 'Tailwind']
            [60, 'Steel Wing']
            [64, 'Brave Bird']
        ],
    ],

    ['664',
        [
            [1, 'Tackle']
            [1, 'String Shot']
            [6, 'Stun Spore']
            [15, 'Bug Bite']
        ],
    ],

    ['665',
        [
            [0, 'Protect']
            [1, 'Protect']
            [1, 'Harden']
        ],
    ],

    ['666',
        [
            [0, 'Gust']
            [1, 'Gust']
            [1, 'Powder']
            [1, 'Sleep Powder']
            [1, 'Poison Powder']
            [1, 'Stun Spore']
            [1, 'Struggle Bug']
            [12, 'Light Screen']
            [17, 'Psybeam']
            [21, 'Supersonic']
            [25, 'Draining Kiss']
            [31, 'Aromatherapy']
            [35, 'Bug Buzz']
            [41, 'Safeguard']
            [45, 'Quiver Dance']
            [50, 'Hurricane']
            [55, 'Powder']
        ],
    ],

    ['667',
        [
            [1, 'Tackle']
            [1, 'Leer']
            [5, 'Ember']
            [8, 'Work Up']
            [11, 'Headbutt']
            [15, 'Noble Roar']
            [20, 'Take Down']
            [23, 'Fire Fang']
            [28, 'Endeavor']
            [33, 'Echoed Voice']
            [36, 'Flamethrower']
            [39, 'Crunch']
            [43, 'Hyper Voice']
            [46, 'Incinerate']
            [50, 'Overheat']
        ],
    ],

    ['668',
        [
            [1, 'Hyper Beam']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Ember']
            [1, 'Work Up']
            [5, 'Ember']
            [8, 'Work Up']
            [11, 'Headbutt']
            [15, 'Noble Roar']
            [20, 'Take Down']
            [23, 'Fire Fang']
            [28, 'Endeavor']
            [33, 'Echoed Voice']
            [38, 'Flamethrower']
            [42, 'Crunch']
            [48, 'Hyper Voice']
            [51, 'Incinerate']
            [57, 'Overheat']
        ],
    ],

    ['669',
        [
            [1, 'Tackle']
            [1, 'Vine Whip']
            [6, 'Fairy Wind']
            [10, 'Lucky Chant']
            [15, 'Razor Leaf']
            [20, 'Wish']
            [22, 'Magical Leaf']
            [24, 'Grassy Terrain']
            [28, 'Petal Blizzard']
            [33, 'Aromatherapy']
            [37, 'Misty Terrain']
            [41, 'Moonblast']
            [45, 'Petal Dance']
            [48, 'Solar Beam']
        ],
    ],

    ['670',
        [
            [1, 'Tackle']
            [1, 'Vine Whip']
            [1, 'Fairy Wind']
            [6, 'Fairy Wind']
            [10, 'Lucky Chant']
            [15, 'Razor Leaf']
            [20, 'Wish']
            [25, 'Magical Leaf']
            [27, 'Grassy Terrain']
            [33, 'Petal Blizzard']
            [38, 'Aromatherapy']
            [43, 'Misty Terrain']
            [46, 'Moonblast']
            [51, 'Petal Dance']
            [58, 'Solar Beam']
        ],
    ],

    ['671',
        [
            [1, 'Disarming Voice']
            [1, 'Lucky Chant']
            [1, 'Wish']
            [1, 'Magical Leaf']
            [1, 'Flower Shield']
            [1, 'Grass Knot']
            [1, 'Grassy Terrain']
            [1, 'Petal Blizzard']
            [1, 'Misty Terrain']
            [1, 'Moonblast']
            [1, 'Petal Dance']
            [1, 'Aromatherapy']
        ],
    ],

    ['672',
        [
            [1, 'Tackle']
            [1, 'Growth']
            [7, 'Vine Whip']
            [9, 'Tail Whip']
            [12, 'Leech Seed']
            [13, 'Razor Leaf']
            [16, 'Worry Seed']
            [20, 'Synthesis']
            [22, 'Take Down']
            [26, 'Bulldoze']
            [30, 'Seed Bomb']
            [34, 'Bulk Up']
            [38, 'Double Edge']
            [42, 'Horn Leech']
            [45, 'Leaf Blade']
            [50, 'Milk Drink']
        ],
    ],

    ['673',
        [
            [0, 'Aerial Ace']
            [1, 'Aerial Ace']
            [1, 'Earthquake']
            [1, 'Tackle']
            [1, 'Growth']
            [1, 'Vine Whip']
            [1, 'Tail Whip']
            [7, 'Vine Whip']
            [9, 'Tail Whip']
            [12, 'Leech Seed']
            [13, 'Razor Leaf']
            [16, 'Worry Seed']
            [20, 'Synthesis']
            [22, 'Take Down']
            [26, 'Bulldoze']
            [30, 'Seed Bomb']
            [34, 'Bulk Up']
            [40, 'Double Edge']
            [47, 'Horn Leech']
            [55, 'Leaf Blade']
            [58, 'Milk Drink']
        ],
    ],

    ['674',
        [
            [1, 'Tackle']
            [1, 'Leer']
            [7, 'Arm Thrust']
            [10, 'Work Up']
            [12, 'Karate Chop']
            [15, 'Comet Punch']
            [20, 'Slash']
            [25, 'Circle Throw']
            [27, 'Vital Throw']
            [33, 'Body Slam']
            [39, 'Crunch']
            [42, 'Entrainment']
            [45, 'Parting Shot']
            [48, 'Sky Uppercut']
        ],
    ],

    ['675',
        [
            [0, 'Bullet Punch']
            [1, 'Bullet Punch']
            [1, 'Hammer Arm']
            [1, 'Low Sweep']
            [1, 'Entrainment']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Arm Thrust']
            [1, 'Work Up']
            [7, 'Arm Thrust']
            [10, 'Work Up']
            [12, 'Karate Chop']
            [15, 'Comet Punch']
            [20, 'Slash']
            [25, 'Circle Throw']
            [27, 'Vital Throw']
            [35, 'Body Slam']
            [42, 'Crunch']
            [45, 'Entrainment']
            [48, 'Parting Shot']
            [52, 'Sky Uppercut']
            [57, 'Low Sweep']
            [65, 'Taunt']
            [70, 'Hammer Arm']
        ],
    ],

    ['676',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [5, 'Sand Attack']
            [9, 'Baby Doll Eyes']
            [12, 'Headbutt']
            [15, 'Tail Whip']
            [22, 'Bite']
            [27, 'Odor Sleuth']
            [33, 'Retaliate']
            [35, 'Take Down']
            [38, 'Charm']
            [42, 'Sucker Punch']
            [48, 'Cotton Guard']
        ],
    ],

    ['677',
        [
            [1, 'Scratch']
            [1, 'Leer']
            [5, 'Covet']
            [9, 'Confusion']
            [13, 'Light Screen']
            [17, 'Psybeam']
            [19, 'Fake Out']
            [22, 'Disarming Voice']
            [25, 'Psyshock']
        ],
    ],

    ['678',
        [
            [1, 'Quick Guard']
            [1, 'Mean Look']
            [1, 'Helping Hand']
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Covet']
            [1, 'Confusion']
            [5, 'Covet']
            [9, 'Confusion']
            [13, 'Light Screen']
            [17, 'Psybeam']
            [19, 'Fake Out']
            [22, 'Disarming Voice']
            [25, 'Psyshock']
            [28, 'Charm']
            [31, 'Miracle Eye']
            [35, 'Reflect']
            [40, 'Psychic']
            [43, 'Role Play']
            [45, 'Imprison']
            [48, 'Sucker Punch']
            [50, 'Misty Terrain']
            [53, 'Quick Guard']
        ], //Male
        [
            [1, 'Stored Power']
            [1, 'Me First']
            [1, 'Magical Leaf']
            [1, 'Scratch']
            [1, 'Leer']
            [1, 'Covet']
            [1, 'Confusion']
            [5, 'Covet']
            [9, 'Confusion']
            [13, 'Light Screen']
            [17, 'Psybeam']
            [19, 'Fake Out']
            [22, 'Disarming Voice']
            [25, 'Psyshock']
            [28, 'Charge Beam']
            [31, 'Shadow Ball']
            [35, 'Extrasensory']
            [40, 'Psychic']
            [43, 'Role Play']
            [45, 'Signal Beam']
            [48, 'Sucker Punch']
            [50, 'Future Sight']
            [53, 'Stored Power']
        ], //Female
    ], //Meowstic

    ['679',
        [
            [1, 'Tackle']
            [1, 'Swords Dance']
            [5, 'Fury Cutter']
            [8, 'Metal Sound']
            [13, 'Pursuit']
            [18, 'Autotomize']
            [20, 'Shadow Sneak']
            [22, 'Aerial Ace']
            [26, 'Retaliate']
            [29, 'Slash']
            [32, 'Iron Defense']
            [35, 'Night Slash']
            [39, 'Power Trick']
            [42, 'Iron Head']
            [47, 'Sacred Sword']
        ],
    ],

    ['680',
        [
            [1, 'Tackle']
            [1, 'Swords Dance']
            [1, 'Fury Cutter']
            [5, 'Fury Cutter']
            [8, 'Metal Sound']
            [13, 'Pursuit']
            [18, 'Autotomize']
            [20, 'Shadow Sneak']
            [22, 'Aerial Ace']
            [26, 'Retaliate']
            [29, 'Slash']
            [32, 'Iron Defense']
            [36, 'Night Slash']
            [41, 'Power Trick']
            [45, 'Iron Head']
            [51, 'Sacred Sword']
        ],
    ],

    ['681',
        [
            [1, 'Fury Cutter']
            [1, 'Pursuit']
            [1, 'Autotomize']
            [1, 'Shadow Sneak']
            [1, 'Slash']
            [1, 'Iron Defense']
            [1, 'Night Slash']
            [1, 'Power Trick']
            [1, 'Iron Head']
            [1, 'Head Smash']
            [1, 'Swords Dance']
            [1, 'Aerial Ace']
            [1, 'Kings Shield']
            [1, 'Sacred Sword']
        ],
    ],

    ['682',
        [
            [1, 'Sweet Scent']
            [1, 'Fairy Wind']
            [6, 'Sweet Kiss']
            [8, 'Odor Sleuth']
            [13, 'Echoed Voice']
            [17, 'Calm Mind']
            [21, 'Draining Kiss']
            [25, 'Aromatherapy']
            [29, 'Attract']
            [31, 'Moonblast']
            [35, 'Charm']
            [38, 'Flail']
            [42, 'Misty Terrain']
            [44, 'Skill Swap']
            [48, 'Psychic']
            [50, 'Disarming Voice']
        ],
    ],

    ['683',
        [
            [1, 'Aromatic Mist']
            [1, 'Heal Pulse']
            [1, 'Sweet Scent']
            [1, 'Fairy Wind']
            [1, 'Sweet Kiss']
            [1, 'Odor Sleuth']
            [6, 'Sweet Kiss']
            [8, 'Odor Sleuth']
            [13, 'Echoed Voice']
            [17, 'Calm Mind']
            [21, 'Draining Kiss']
            [25, 'Aromatherapy']
            [29, 'Attract']
            [31, 'Moonblast']
            [35, 'Charm']
            [38, 'Flail']
            [42, 'Misty Terrain']
            [44, 'Skill Swap']
            [48, 'Psychic']
            [53, 'Disarming Voice']
            [57, 'Reflect']
            [64, 'Psych Up']
        ],
    ],

    ['684',
        [
            [1, 'Sweet Scent']
            [1, 'Tackle']
            [5, 'Fairy Wind']
            [8, 'Play Nice']
            [10, 'Fake Tears']
            [13, 'Round']
            [17, 'Cotton Spore']
            [21, 'Endeavor']
            [26, 'Aromatherapy']
            [31, 'Draining Kiss']
            [36, 'Energy Ball']
            [41, 'Cotton Guard']
            [45, 'Wish']
            [49, 'Play Rough']
            [58, 'Light Screen']
            [67, 'Safeguard']
        ],
    ],

    ['685',
        [
            [1, 'Sweet Scent']
            [1, 'Tackle']
            [1, 'Fairy Wind']
            [1, 'Play Nice']
            [5, 'Fairy Wind']
            [8, 'Play Nice']
            [10, 'Fake Tears']
            [13, 'Round']
            [17, 'Cotton Spore']
            [21, 'Endeavor']
            [26, 'Aromatherapy']
            [31, 'Draining Kiss']
            [36, 'Energy Ball']
            [41, 'Cotton Guard']
            [45, 'Wish']
            [49, 'Play Rough']
            [58, 'Light Screen']
            [67, 'Safeguard']
        ],
    ],

    ['686',
        [
            [1, 'Tackle']
            [1, 'Peck']
            [1, 'Constrict']
            [4, 'Reflect']
            [8, 'Foul Play']
            [12, 'Swagger']
            [13, 'Psywave']
            [15, 'Topsy Turvy']
            [18, 'Hypnosis']
            [21, 'Psybeam']
            [23, 'Switcheroo']
            [27, 'Payback']
            [31, 'Light Screen']
            [35, 'Pluck']
            [39, 'Psycho Cut']
            [43, 'Slash']
            [46, 'Night Slash']
            [48, 'Superpower']
        ],
    ],

    ['687',
        [
            [1, 'Reversal']
            [1, 'Tackle']
            [1, 'Peck']
            [1, 'Constrict']
            [1, 'Reflect']
            [4, 'Reflect']
            [8, 'Foul Play']
            [12, 'Swagger']
            [13, 'Psywave']
            [15, 'Topsy Turvy']
            [18, 'Hypnosis']
            [21, 'Psybeam']
            [23, 'Switcheroo']
            [27, 'Payback']
            [31, 'Light Screen']
            [35, 'Pluck']
            [39, 'Psycho Cut']
            [43, 'Slash']
            [46, 'Night Slash']
            [48, 'Superpower']
        ],
    ],

    ['688',
        [
            [1, 'Shell Smash']
            [1, 'Scratch']
            [1, 'Sand Attack']
            [4, 'Water Gun']
            [7, 'Withdraw']
            [10, 'Fury Swipes']
            [13, 'Slash']
            [18, 'Mud Slap']
            [20, 'Clamp']
            [24, 'Rock Polish']
            [28, 'Ancient Power']
            [32, 'Hone Claws']
            [37, 'Fury Cutter']
            [41, 'Night Slash']
            [45, 'Razor Shell']
            [49, 'Cross Chop']
        ],
    ],

    ['689',
        [
            [1, 'Skull Bash']
            [1, 'Stone Edge']
            [1, 'Shell Smash']
            [1, 'Scratch']
            [1, 'Sand Attack']
            [1, 'Water Gun']
            [4, 'Water Gun']
            [7, 'Withdraw']
            [10, 'Fury Swipes']
            [13, 'Slash']
            [18, 'Mud Slap']
            [20, 'Clamp']
            [24, 'Rock Polish']
            [28, 'Ancient Power']
            [32, 'Hone Claws']
            [37, 'Fury Cutter']
            [44, 'Night Slash']
            [48, 'Razor Shell']
            [55, 'Cross Chop']
            [60, 'Stone Edge']
            [65, 'Skull Bash']
        ],
    ],

    ['690',
        [
            [1, 'Tackle']
            [1, 'Smokescreen']
            [1, 'Water Gun']
            [5, 'Feint Attack']
            [9, 'Tail Whip']
            [12, 'Bubble']
            [15, 'Acid']
            [19, 'Camouflage']
            [23, 'Poison Tail']
            [25, 'Water Pulse']
            [28, 'Double Team']
            [32, 'Toxic']
            [35, 'Aqua Tail']
            [38, 'Sludge Bomb']
            [42, 'Hydro Pump']
            [49, 'Dragon Pulse']
        ],
    ],

    ['691',
        [
            [0, 'Twister']
            [1, 'Twister']
            [1, 'Dragon Tail']
            [1, 'Tackle']
            [1, 'Smokescreen']
            [1, 'Water Gun']
            [1, 'Feint Attack']
            [5, 'Feint Attack']
            [9, 'Tail Whip']
            [12, 'Bubble']
            [15, 'Acid']
            [19, 'Camouflage']
            [23, 'Poison Tail']
            [25, 'Water Pulse']
            [28, 'Double Team']
            [32, 'Toxic']
            [35, 'Aqua Tail']
            [38, 'Sludge Bomb']
            [42, 'Hydro Pump']
            [53, 'Dragon Pulse']
            [59, 'Dragon Tail']
        ],
    ],

    ['692',
        [
            [1, 'Splash']
            [1, 'Water Gun']
            [7, 'Water Sport']
            [9, 'Vice Grip']
            [12, 'Bubble']
            [16, 'Flail']
            [20, 'Bubble Beam']
            [25, 'Swords Dance']
            [30, 'Crabhammer']
            [34, 'Water Pulse']
            [39, 'Smack Down']
            [43, 'Aqua Jet']
            [48, 'Muddy Water']
        ],
    ],

    ['693',
        [
            [0, 'Aura Sphere']
            [1, 'Aura Sphere']
            [1, 'Dark Pulse']
            [1, 'Dragon Pulse']
            [1, 'Heal Pulse']
            [1, 'Splash']
            [1, 'Water Gun']
            [1, 'Water Sport']
            [1, 'Vice Grip']
            [7, 'Water Sport']
            [9, 'Vice Grip']
            [12, 'Bubble']
            [16, 'Flail']
            [20, 'Bubble Beam']
            [25, 'Swords Dance']
            [30, 'Crabhammer']
            [34, 'Water Pulse']
            [42, 'Smack Down']
            [49, 'Aqua Jet']
            [57, 'Muddy Water']
        ],
    ],

    ['694',
        [
            [1, 'Pound']
            [1, 'Tail Whip']
            [6, 'Thunder Shock']
            [11, 'Charge']
            [13, 'Mud Slap']
            [17, 'Quick Attack']
            [22, 'Razor Wind']
            [25, 'Parabolic Charge']
            [31, 'Thunder Wave']
            [35, 'Bulldoze']
            [40, 'Volt Switch']
            [45, 'Electrify']
            [49, 'Thunderbolt']
        ],
    ],

    ['695',
        [
            [1, 'Eerie Impulse']
            [1, 'Electrify']
            [1, 'Razor Wind']
            [1, 'Quick Attack']
            [1, 'Thunder']
            [1, 'Charge']
            [1, 'Parabolic Charge']
        ],
    ],

    ['696',
        [
            [1, 'Tail Whip']
            [1, 'Tackle']
            [6, 'Roar']
            [10, 'Stomp']
            [12, 'Bide']
            [15, 'Stealth Rock']
            [17, 'Bite']
            [20, 'Charm']
            [26, 'Ancient Power']
            [30, 'Dragon Tail']
            [34, 'Crunch']
            [37, 'Dragon Claw']
            [40, 'Thrash']
            [44, 'Earthquake']
            [49, 'Horn Drill']
        ],
    ],

    ['697',
        [
            [0, 'Rock Slide']
            [1, 'Rock Slide']
            [1, 'Head Smash']
            [1, 'Tail Whip']
            [1, 'Tackle']
            [1, 'Roar']
            [1, 'Stomp']
            [6, 'Roar']
            [10, 'Stomp']
            [12, 'Bide']
            [15, 'Stealth Rock']
            [17, 'Bite']
            [20, 'Charm']
            [26, 'Ancient Power']
            [30, 'Dragon Tail']
            [34, 'Crunch']
            [37, 'Dragon Claw']
            [42, 'Thrash']
            [47, 'Earthquake']
            [53, 'Horn Drill']
            [58, 'Head Smash']
            [68, 'Giga Impact']
        ],
    ],

    ['698',
        [
            [1, 'Growl']
            [1, 'Powder Snow']
            [5, 'Thunder Wave']
            [10, 'Rock Throw']
            [13, 'Icy Wind']
            [15, 'Take Down']
            [18, 'Mist']
            [20, 'Aurora Beam']
            [26, 'Ancient Power']
            [30, 'Round']
            [34, 'Avalanche']
            [38, 'Hail']
            [41, 'Nature Power']
            [44, 'Encore']
            [47, 'Light Screen']
            [50, 'Ice Beam']
            [57, 'Hyper Beam']
            [65, 'Blizzard']
        ],
    ],

    ['699',
        [
            [0, 'Freeze Dry']
            [1, 'Freeze Dry']
            [1, 'Growl']
            [1, 'Powder Snow']
            [1, 'Thunder Wave']
            [1, 'Rock Throw']
            [5, 'Thunder Wave']
            [10, 'Rock Throw']
            [13, 'Icy Wind']
            [15, 'Take Down']
            [18, 'Mist']
            [20, 'Aurora Beam']
            [26, 'Ancient Power']
            [30, 'Round']
            [34, 'Avalanche']
            [38, 'Hail']
            [43, 'Nature Power']
            [46, 'Encore']
            [50, 'Light Screen']
            [56, 'Ice Beam']
            [63, 'Hyper Beam']
            [74, 'Blizzard']
        ],
    ],

    ['700',
        [
            [0, 'Fairy Wind']
            [1, 'Fairy Wind']
            [1, 'Disarming Voice']
            [1, 'Helping Hand']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [5, 'Sand Attack']
            [9, 'Baby Doll Eyes']
            [13, 'Quick Attack']
            [17, 'Swift']
            [20, 'Draining Kiss']
            [25, 'Skill Swap']
            [29, 'Misty Terrain']
            [33, 'Light Screen']
            [37, 'Moonblast']
            [41, 'Last Resort']
            [45, 'Psych Up']
        ],
    ],

    ['701',
        [
            [1, 'Detect']
            [1, 'Tackle']
            [1, 'Hone Claws']
            [4, 'Karate Chop']
            [8, 'Wing Attack']
            [12, 'Roost']
            [16, 'Aerial Ace']
            [20, 'Encore']
            [24, 'Fling']
            [28, 'Flying Press']
            [32, 'Bounce']
            [36, 'Endeavor']
            [40, 'Feather Dance']
            [44, 'High Jump Kick']
            [48, 'Sky Attack']
            [55, 'Sky Drop']
            [60, 'Swords Dance']
        ],
    ],

    ['702',
        [
            [1, 'Tackle']
            [1, 'Tail Whip']
            [7, 'Thunder Shock']
            [11, 'Charge']
            [14, 'Charm']
            [17, 'Parabolic Charge']
            [20, 'Nuzzle']
            [23, 'Thunder Wave']
            [26, 'Volt Switch']
            [30, 'Rest']
            [31, 'Snore']
            [34, 'Charge Beam']
            [39, 'Entrainment']
            [42, 'Play Rough']
            [45, 'Thunder']
            [50, 'Discharge']
        ],
    ],

    ['703',
        [
            [1, 'Tackle']
            [1, 'Harden']
            [5, 'Rock Throw']
            [8, 'Sharpen']
            [12, 'Smack Down']
            [18, 'Reflect']
            [21, 'Stealth Rock']
            [27, 'Guard Split']
            [31, 'Ancient Power']
            [35, 'Flail']
            [40, 'Skill Swap']
            [46, 'Power Gem']
            [49, 'Stone Edge']
            [50, 'Moonblast']
            [60, 'Light Screen']
            [70, 'Safeguard']
        ],
    ],

    ['704',
        [
            [1, 'Tackle']
            [1, 'Bubble']
            [5, 'Absorb']
            [9, 'Protect']
            [13, 'Bide']
            [18, 'Dragon Breath']
            [25, 'Rain Dance']
            [28, 'Flail']
            [32, 'Body Slam']
            [38, 'Muddy Water']
            [42, 'Dragon Pulse']
        ],
    ],

    ['705',
        [
            [1, 'Tackle']
            [1, 'Bubble']
            [1, 'Absorb']
            [5, 'Absorb']
            [9, 'Protect']
            [13, 'Bide']
            [18, 'Dragon Breath']
            [25, 'Rain Dance']
            [28, 'Flail']
            [32, 'Body Slam']
            [38, 'Muddy Water']
            [47, 'Dragon Pulse']
        ],
    ],

    ['706',
        [
            [0, 'Aqua Tail']
            [1, 'Aqua Tail']
            [1, 'Outrage']
            [1, 'Feint']
            [1, 'Tackle']
            [1, 'Bubble']
            [1, 'Absorb']
            [1, 'Protect']
            [5, 'Absorb']
            [9, 'Protect']
            [13, 'Bide']
            [18, 'Dragon Breath']
            [25, 'Rain Dance']
            [28, 'Flail']
            [32, 'Body Slam']
            [38, 'Muddy Water']
            [47, 'Dragon Pulse']
            [50, 'Power Whip']
            [55, 'Outrage']
        ],
    ],

    ['707',
        [
            [1, 'Fairy Lock']
            [1, 'Tackle']
            [5, 'Fairy Wind']
            [8, 'Astonish']
            [12, 'Metal Sound']
            [15, 'Spikes']
            [18, 'Draining Kiss']
            [23, 'Crafty Shield']
            [27, 'Foul Play']
            [32, 'Torment']
            [34, 'Mirror Shot']
            [36, 'Imprison']
            [40, 'Recycle']
            [43, 'Play Rough']
            [44, 'Magic Room']
            [50, 'Heal Block']
        ],
    ],

    ['708',
        [
            [1, 'Tackle']
            [1, 'Confuse Ray']
            [5, 'Astonish']
            [8, 'Growth']
            [13, 'Ingrain']
            [19, 'Feint Attack']
            [23, 'Leech Seed']
            [28, 'Curse']
            [31, 'Will O Wisp']
            [35, 'Forests Curse']
            [39, 'Destiny Bond']
            [45, 'Phantom Force']
            [49, 'Wood Hammer']
            [54, 'Horn Leech']
        ],
    ],

    ['709',
        [
            [0, 'Shadow Claw']
            [1, 'Shadow Claw']
            [1, 'Horn Leech']
            [1, 'Tackle']
            [1, 'Confuse Ray']
            [1, 'Astonish']
            [1, 'Growth']
            [5, 'Astonish']
            [8, 'Growth']
            [13, 'Ingrain']
            [19, 'Feint Attack']
            [23, 'Leech Seed']
            [28, 'Curse']
            [31, 'Will O Wisp']
            [35, 'Forests Curse']
            [39, 'Destiny Bond']
            [45, 'Phantom Force']
            [49, 'Wood Hammer']
            [54, 'Horn Leech']
        ],
    ],

    ['710',
        [
            [1, 'Trick']
            [1, 'Astonish']
            [1, 'Confuse Ray']
            [4, 'Scary Face']
            [6, 'Trick Or Treat']
            [11, 'Worry Seed']
            [16, 'Razor Leaf']
            [20, 'Leech Seed']
            [23, 'Trick Or Treat']
            [26, 'Bullet Seed']
            [30, 'Shadow Sneak']
            [36, 'Shadow Ball']
            [40, 'Trick Or Treat']
            [42, 'Pain Split']
            [48, 'Seed Bomb']
        ],
    ],

    ['711',
        [
            [1, 'Explosion']
            [1, 'Phantom Force']
            [1, 'Trick']
            [1, 'Astonish']
            [1, 'Confuse Ray']
            [1, 'Scary Face']
            [4, 'Scary Face']
            [6, 'Trick Or Treat']
            [11, 'Worry Seed']
            [16, 'Razor Leaf']
            [20, 'Leech Seed']
            [23, 'Trick Or Treat']
            [26, 'Bullet Seed']
            [30, 'Shadow Sneak']
            [36, 'Shadow Ball']
            [40, 'Trick Or Treat']
            [42, 'Pain Split']
            [48, 'Seed Bomb']
            [57, 'Phantom Force']
            [63, 'Trick Or Treat']
            [70, 'Explosion']
        ],
    ],

    ['712',
        [
            [1, 'Tackle']
            [1, 'Bite']
            [1, 'Harden']
            [5, 'Powder Snow']
            [10, 'Icy Wind']
            [15, 'Take Down']
            [20, 'Sharpen']
            [22, 'Curse']
            [26, 'Ice Fang']
            [30, 'Ice Ball']
            [35, 'Rapid Spin']
            [39, 'Avalanche']
            [43, 'Blizzard']
            [47, 'Recover']
            [49, 'Double Edge']
        ],
    ],

    ['713',
        [
            [0, 'Body Slam']
            [1, 'Body Slam']
            [1, 'Wide Guard']
            [1, 'Crunch']
            [1, 'Skull Bash']
            [1, 'Iron Defense']
            [1, 'Tackle']
            [1, 'Bite']
            [1, 'Harden']
            [1, 'Powder Snow']
            [5, 'Powder Snow']
            [10, 'Icy Wind']
            [15, 'Take Down']
            [20, 'Sharpen']
            [22, 'Curse']
            [26, 'Ice Fang']
            [30, 'Ice Ball']
            [35, 'Rapid Spin']
            [42, 'Avalanche']
            [46, 'Blizzard']
            [51, 'Recover']
            [56, 'Double Edge']
            [60, 'Skull Bash']
            [65, 'Crunch']
        ],
    ],

    ['714',
        [
            [1, 'Screech']
            [1, 'Supersonic']
            [1, 'Tackle']
            [5, 'Absorb']
            [11, 'Gust']
            [13, 'Bite']
            [16, 'Wing Attack']
            [18, 'Agility']
            [23, 'Air Cutter']
            [27, 'Roost']
            [31, 'Razor Wind']
            [35, 'Tailwind']
            [40, 'Whirlwind']
            [43, 'Super Fang']
            [48, 'Air Slash']
            [58, 'Hurricane']
        ],
    ],

    ['715',
        [
            [1, 'Boomburst']
            [1, 'Dragon Pulse']
            [1, 'Hurricane']
            [1, 'Moonlight']
            [1, 'Screech']
            [1, 'Supersonic']
            [1, 'Tackle']
            [1, 'Absorb']
            [5, 'Absorb']
            [11, 'Gust']
            [13, 'Bite']
            [16, 'Wing Attack']
            [18, 'Agility']
            [23, 'Air Cutter']
            [27, 'Roost']
            [31, 'Razor Wind']
            [35, 'Tailwind']
            [40, 'Whirlwind']
            [43, 'Super Fang']
            [53, 'Air Slash']
            [62, 'Hurricane']
            [70, 'Dragon Pulse']
            [75, 'Boomburst']
        ],
    ],

    ['716',
        [
            [1, 'Heal Pulse']
            [1, 'Aromatherapy']
            [1, 'Ingrain']
            [1, 'Take Down']
            [5, 'Light Screen']
            [10, 'Aurora Beam']
            [18, 'Gravity']
            [26, 'Geomancy']
            [35, 'Moonblast']
            [44, 'Megahorn']
            [51, 'Night Slash']
            [55, 'Horn Leech']
            [59, 'Psych Up']
            [63, 'Misty Terrain']
            [72, 'Nature Power']
            [80, 'Close Combat']
            [88, 'Giga Impact']
            [93, 'Outrage']
        ],
    ],

    ['717',
        [
            [1, 'Hurricane']
            [1, 'Razor Wind']
            [1, 'Taunt']
            [1, 'Roost']
            [5, 'Double Team']
            [10, 'Air Slash']
            [18, 'Snarl']
            [26, 'Oblivion Wing']
            [35, 'Disable']
            [44, 'Dark Pulse']
            [51, 'Foul Play']
            [55, 'Phantom Force']
            [59, 'Psychic']
            [63, 'Dragon Rush']
            [72, 'Focus Blast']
            [80, 'Sucker Punch']
            [88, 'Hyper Beam']
            [93, 'Sky Attack']
        ],
    ],

    ['718',
        [
            [1, 'Glare']
            [1, 'Bulldoze']
            [1, 'Dragon Breath']
            [1, 'Bite']
            [5, 'Safeguard']
            [10, 'Dig']
            [18, 'Bind']
            [26, 'Lands Wrath']
            [35, 'Sandstorm']
            [44, 'Haze']
            [51, 'Crunch']
            [55, 'Earthquake']
            [59, 'Camouflage']
            [63, 'Dragon Pulse']
            [72, 'Coil']
            [80, 'Outrage']
        ],
    ],

    ['719',
        [
            [1, 'Tackle']
            [1, 'Harden']
            [1, 'Rock Throw']
            [5, 'Sharpen']
            [8, 'Smack Down']
            [12, 'Reflect']
            [18, 'Stealth Rock']
            [21, 'Guard Split']
            [27, 'Ancient Power']
            [31, 'Flail']
            [35, 'Skill Swap']
            [40, 'Power Gem']
            [46, 'Trick Room']
            [49, 'Stone Edge']
            [50, 'Moonblast']
            [50, 'Diamond Storm']
            [60, 'Light Screen']
            [70, 'Safeguard']
        ],
    ],

    ['720',
        [
            [1, 'Hyperspace Hole']
            [1, 'Trick']
            [1, 'Destiny Bond']
            [1, 'Ally Switch']
            [1, 'Confusion']
            [6, 'Astonish']
            [10, 'Magic Coat']
            [15, 'Light Screen']
            [19, 'Psybeam']
            [25, 'Skill Swap']
            [29, 'Power Split']
            [29, 'Guard Split']
            [35, 'Phantom Force']
            [46, 'Zen Headbutt']
            [50, 'Wonder Room']
            [50, 'Trick Room']
            [55, 'Shadow Ball']
            [68, 'Nasty Plot']
            [75, 'Psychic']
            [85, 'Hyperspace Hole']
        ], //Confined
        [
            [1, 'Hyperspace Fury']
            [1, 'Trick']
            [1, 'Destiny Bond']
            [1, 'Ally Switch']
            [1, 'Confusion']
            [6, 'Astonish']
            [10, 'Magic Coat']
            [15, 'Light Screen']
            [19, 'Psybeam']
            [25, 'Skill Swap']
            [29, 'Power Split']
            [29, 'Guard Split']
            [46, 'Knock Off']
            [50, 'Wonder Room']
            [50, 'Trick Room']
            [55, 'Dark Pulse']
            [75, 'Psychic']
            [85, 'Hyperspace Fury']
        ], //Unbound
    ], //Hoopa

    ['721',
        [
            [1, 'Steam Eruption']
            [1, 'Flare Blitz']
            [1, 'Take Down']
            [8, 'Mist']
            [11, 'Haze']
            [15, 'Flame Charge']
            [21, 'Water Pulse']
            [28, 'Stomp']
            [32, 'Scald']
            [40, 'Weather Ball']
            [46, 'Body Slam']
            [50, 'Hydro Pump']
            [58, 'Flare Blitz']
            [65, 'Overheat']
            [76, 'Explosion']
            [85, 'Steam Eruption']
        ],
    ],

    ['722',
        [
            [1, 'Tackle']
            [1, 'Leafage']
            [4, 'Growl']
            [8, 'Peck']
            [11, 'Astonish']
            [14, 'Razor Leaf']
            [16, 'Ominous Wind']
            [18, 'Foresight']
            [22, 'Pluck']
            [25, 'Synthesis']
            [29, 'Fury Attack']
            [32, 'Sucker Punch']
            [36, 'Leaf Blade']
            [39, 'Feather Dance']
            [43, 'Brave Bird']
            [46, 'Nasty Plot']
        ],
    ],

    ['723',
        [
            [1, 'Tackle']
            [1, 'Leafage']
            [1, 'Growl']
            [1, 'Peck']
            [4, 'Growl']
            [8, 'Peck']
            [11, 'Astonish']
            [14, 'Razor Leaf']
            [16, 'Ominous Wind']
            [19, 'Foresight']
            [24, 'Pluck']
            [28, 'Synthesis']
            [33, 'Fury Attack']
            [37, 'Sucker Punch']
            [42, 'Leaf Blade']
            [46, 'Feather Dance']
            [51, 'Brave Bird']
            [55, 'Nasty Plot']
        ],
    ],

    ['724',
        [
            [0, 'Spirit Shackle']
            [1, 'Spirit Shackle']
            [1, 'Phantom Force']
            [1, 'Leaf Storm']
            [1, 'U Turn']
            [1, 'Shadow Sneak']
            [1, 'Tackle']
            [1, 'Leafage']
            [1, 'Growl']
            [1, 'Peck']
            [4, 'Growl']
            [8, 'Peck']
            [11, 'Astonish']
            [14, 'Razor Leaf']
            [16, 'Ominous Wind']
            [19, 'Foresight']
            [24, 'Pluck']
            [28, 'Synthesis']
            [33, 'Fury Attack']
            [38, 'Sucker Punch']
            [44, 'Leaf Blade']
            [49, 'Feather Dance']
            [55, 'Brave Bird']
            [60, 'Nasty Plot']
        ],
    ],

    ['725',
        [
            [1, 'Scratch']
            [1, 'Ember']
            [4, 'Growl']
            [8, 'Lick']
            [11, 'Leer']
            [14, 'Fire Fang']
            [16, 'Double Kick']
            [18, 'Roar']
            [22, 'Bite']
            [25, 'Swagger']
            [29, 'Fury Swipes']
            [32, 'Thrash']
            [36, 'Flamethrower']
            [39, 'Scary Face']
            [43, 'Flare Blitz']
            [46, 'Outrage']
        ],
    ],

    ['726',
        [
            [1, 'Scratch']
            [1, 'Ember']
            [1, 'Growl']
            [1, 'Lick']
            [4, 'Growl']
            [8, 'Lick']
            [11, 'Leer']
            [14, 'Fire Fang']
            [16, 'Double Kick']
            [19, 'Roar']
            [24, 'Bite']
            [28, 'Swagger']
            [33, 'Fury Swipes']
            [37, 'Thrash']
            [42, 'Flamethrower']
            [46, 'Scary Face']
            [51, 'Flare Blitz']
            [55, 'Outrage']
        ],
    ],

    ['727',
        [
            [0, 'Darkest Lariat']
            [1, 'Darkest Lariat']
            [1, 'Bulk Up']
            [1, 'Throat Chop']
            [1, 'Scratch']
            [1, 'Ember']
            [1, 'Growl']
            [1, 'Lick']
            [4, 'Growl']
            [8, 'Lick']
            [11, 'Leer']
            [14, 'Fire Fang']
            [16, 'Double Kick']
            [19, 'Roar']
            [24, 'Bite']
            [28, 'Swagger']
            [33, 'Fury Swipes']
            [38, 'Thrash']
            [44, 'Flamethrower']
            [49, 'Scary Face']
            [55, 'Flare Blitz']
            [60, 'Outrage']
            [66, 'Cross Chop']
        ],
    ],

    ['728',
        [
            [1, 'Pound']
            [1, 'Water Gun']
            [4, 'Growl']
            [8, 'Disarming Voice']
            [11, 'Baby Doll Eyes']
            [14, 'Aqua Jet']
            [16, 'Icy Wind']
            [18, 'Encore']
            [22, 'Bubble Beam']
            [25, 'Sing']
            [29, 'Double Slap']
            [32, 'Hyper Voice']
            [36, 'Moonblast']
            [39, 'Captivate']
            [43, 'Hydro Pump']
            [46, 'Misty Terrain']
        ],
    ],

    ['729',
        [
            [1, 'Pound']
            [1, 'Water Gun']
            [1, 'Growl']
            [1, 'Disarming Voice']
            [4, 'Growl']
            [8, 'Disarming Voice']
            [11, 'Baby Doll Eyes']
            [14, 'Aqua Jet']
            [16, 'Icy Wind']
            [19, 'Encore']
            [24, 'Bubble Beam']
            [28, 'Sing']
            [33, 'Double Slap']
            [37, 'Hyper Voice']
            [42, 'Moonblast']
            [46, 'Captivate']
            [51, 'Hydro Pump']
            [55, 'Misty Terrain']
        ],
    ],

    ['730',
        [
            [0, 'Sparkling Aria']
            [1, 'Sparkling Aria']
            [1, 'Pound']
            [1, 'Water Gun']
            [1, 'Growl']
            [1, 'Disarming Voice']
            [4, 'Growl']
            [9, 'Disarming Voice']
            [11, 'Baby Doll Eyes']
            [14, 'Aqua Jet']
            [16, 'Icy Wind']
            [19, 'Encore']
            [24, 'Bubble Beam']
            [28, 'Sing']
            [33, 'Double Slap']
            [38, 'Hyper Voice']
            [44, 'Moonblast']
            [49, 'Captivate']
            [55, 'Hydro Pump']
            [60, 'Misty Terrain']
        ],
    ],

    ['731',
        [
            [1, 'Peck']
            [3, 'Growl']
            [7, 'Echoed Voice']
            [9, 'Rock Smash']
            [13, 'Supersonic']
            [15, 'Pluck']
            [19, 'Roost']
            [21, 'Fury Attack']
            [25, 'Screech']
            [27, 'Drill Peck']
            [31, 'Bullet Seed']
            [33, 'Feather Dance']
            [37, 'Hyper Voice']
        ],
    ],

    ['732',
        [
            [1, 'Rock Blast']
            [1, 'Peck']
            [1, 'Growl']
            [1, 'Echoed Voice']
            [1, 'Rock Smash']
            [3, 'Growl']
            [7, 'Echoed Voice']
            [9, 'Rock Smash']
            [13, 'Supersonic']
            [16, 'Pluck']
            [21, 'Roost']
            [24, 'Fury Attack']
            [29, 'Screech']
            [32, 'Drill Peck']
            [37, 'Bullet Seed']
            [40, 'Feather Dance']
            [45, 'Hyper Voice']
        ],
    ],

    ['733',
        [
            [0, 'Beak Blast']
            [1, 'Beak Blast']
            [1, 'Rock Blast']
            [1, 'Peck']
            [1, 'Growl']
            [1, 'Echoed Voice']
            [1, 'Rock Smash']
            [3, 'Growl']
            [7, 'Echoed Voice']
            [9, 'Rock Smash']
            [13, 'Supersonic']
            [16, 'Pluck']
            [21, 'Roost']
            [24, 'Fury Attack']
            [30, 'Screech']
            [34, 'Drill Peck']
            [40, 'Bullet Seed']
            [44, 'Feather Dance']
            [50, 'Hyper Voice']
        ],
    ],

    ['734',
        [
            [1, 'Tackle']
            [3, 'Leer']
            [7, 'Pursuit']
            [10, 'Sand Attack']
            [13, 'Odor Sleuth']
            [16, 'Bide']
            [19, 'Bite']
            [22, 'Mud Slap']
            [25, 'Super Fang']
            [28, 'Take Down']
            [31, 'Scary Face']
            [34, 'Crunch']
            [37, 'Hyper Fang']
            [40, 'Yawn']
            [43, 'Thrash']
            [46, 'Rest']
        ],
    ],

    ['735',
        [
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Pursuit']
            [1, 'Sand Attack']
            [3, 'Leer']
            [7, 'Pursuit']
            [10, 'Sand Attack']
            [13, 'Odor Sleuth']
            [16, 'Bide']
            [19, 'Bite']
            [23, 'Mud Slap']
            [27, 'Super Fang']
            [31, 'Take Down']
            [35, 'Scary Face']
            [39, 'Crunch']
            [43, 'Hyper Fang']
            [47, 'Yawn']
            [51, 'Thrash']
            [55, 'Rest']
        ],
    ],

    ['736',
        [
            [1, 'Vice Grip']
            [4, 'String Shot']
            [7, 'Mud Slap']
            [10, 'Bite']
            [13, 'Bug Bite']
            [16, 'Spark']
            [19, 'Acrobatics']
            [22, 'Crunch']
            [25, 'X Scissor']
            [28, 'Dig']
        ],
    ],

    ['737',
        [
            [0, 'Charge']
            [1, 'Charge']
            [1, 'Vice Grip']
            [1, 'String Shot']
            [1, 'Mud Slap']
            [1, 'Bite']
            [4, 'String Shot']
            [7, 'Mud Slap']
            [10, 'Bite']
            [13, 'Bug Bite']
            [16, 'Spark']
            [19, 'Acrobatics']
            [25, 'Crunch']
            [31, 'X Scissor']
            [37, 'Dig']
            [43, 'Discharge']
            [49, 'Iron Defense']
        ],
    ],

    ['738',
        [
            [0, 'Thunderbolt']
            [1, 'Thunderbolt']
            [1, 'Air Slash']
            [1, 'Charge']
            [1, 'Vice Grip']
            [1, 'String Shot']
            [1, 'Mud Slap']
            [1, 'Bite']
            [4, 'String Shot']
            [7, 'Mud Slap']
            [10, 'Bite']
            [13, 'Bug Bite']
            [16, 'Spark']
            [19, 'Acrobatics']
            [25, 'Guillotine']
            [31, 'Bug Buzz']
            [37, 'Dig']
            [41, 'Zap Cannon']
            [49, 'Agility']
        ],
    ],

    ['739',
        [
            [1, 'Bubble']
            [5, 'Rock Smash']
            [9, 'Leer']
            [13, 'Pursuit']
            [17, 'Bubble Beam']
            [22, 'Power Up Punch']
            [25, 'Dizzy Punch']
            [29, 'Payback']
            [33, 'Reversal']
            [37, 'Crabhammer']
            [42, 'Iron Defense']
            [45, 'Dynamic Punch']
            [49, 'Close Combat']
        ],
    ],

    ['740',
        [
            [0, 'Ice Punch']
            [1, 'Ice Punch']
            [1, 'Bubble']
            [1, 'Rock Smash']
            [1, 'Leer']
            [1, 'Pursuit']
            [5, 'Rock Smash']
            [9, 'Leer']
            [13, 'Pursuit']
            [17, 'Bubble Beam']
            [22, 'Power Up Punch']
            [25, 'Dizzy Punch']
            [29, 'Avalanche']
            [33, 'Reversal']
            [37, 'Ice Hammer']
            [42, 'Iron Defense']
            [45, 'Dynamic Punch']
            [49, 'Close Combat']
        ],
    ],

    ['741',
        [
            [1, 'Pound']
            [4, 'Growl']
            [6, 'Peck']
            [10, 'Helping Hand']
            [13, 'Air Cutter']
            [16, 'Baton Pass']
            [20, 'Feather Dance']
            [23, 'Double Slap']
            [26, 'Teeter Dance']
            [30, 'Roost']
            [33, 'Captivate']
            [36, 'Air Slash']
            [40, 'Revelation Dance']
            [43, 'Mirror Move']
            [46, 'Agility']
            [50, 'Hurricane']
        ],
    ],

    ['742',
        [
            [1, 'Absorb']
            [4, 'Fairy Wind']
            [7, 'Stun Spore']
            [10, 'Struggle Bug']
            [13, 'Silver Wind']
            [16, 'Draining Kiss']
            [21, 'Sweet Scent']
            [26, 'Bug Buzz']
            [31, 'Dazzling Gleam']
            [36, 'Aromatherapy']
            [41, 'Quiver Dance']
        ],
    ],

    ['743',
        [
            [0, 'Pollen Puff']
            [1, 'Pollen Puff']
            [1, 'Absorb']
            [1, 'Fairy Wind']
            [1, 'Stun Spore']
            [1, 'Struggle Bug']
            [4, 'Fairy Wind']
            [7, 'Stun Spore']
            [10, 'Struggle Bug']
            [13, 'Silver Wind']
            [16, 'Draining Kiss']
            [21, 'Sweet Scent']
            [28, 'Bug Buzz']
            [35, 'Dazzling Gleam']
            [42, 'Aromatherapy']
            [49, 'Quiver Dance']
        ],
    ],

    ['744',
        [
            [1, 'Tackle']
            [1, 'Leer']
            [4, 'Sand Attack']
            [7, 'Bite']
            [12, 'Howl']
            [15, 'Rock Throw']
            [18, 'Odor Sleuth']
            [23, 'Rock Tomb']
            [26, 'Roar']
            [29, 'Stealth Rock']
            [34, 'Rock Slide']
            [37, 'Scary Face']
            [40, 'Crunch']
            [45, 'Rock Climb']
            [48, 'Stone Edge']
        ],
    ],

    ['745',
        [
            [0, 'Accelerock']
            [1, 'Accelerock']
            [1, 'Quick Guard']
            [1, 'Quick Attack']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Sand Attack']
            [1, 'Bite']
            [4, 'Sand Attack']
            [7, 'Bite']
            [12, 'Howl']
            [15, 'Rock Throw']
            [18, 'Odor Sleuth']
            [23, 'Rock Tomb']
            [26, 'Roar']
            [29, 'Stealth Rock']
            [34, 'Rock Slide']
            [37, 'Scary Face']
            [40, 'Crunch']
            [45, 'Rock Climb']
            [48, 'Stone Edge']
        ], //Day Form
        [
            [0, 'Counter']
            [1, 'Counter']
            [1, 'Reversal']
            [1, 'Taunt']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Sand Attack']
            [1, 'Bite']
            [4, 'Sand Attack']
            [7, 'Bite']
            [12, 'Howl']
            [15, 'Rock Throw']
            [18, 'Odor Sleuth']
            [23, 'Rock Tomb']
            [26, 'Roar']
            [29, 'Stealth Rock']
            [34, 'Rock Slide']
            [37, 'Scary Face']
            [40, 'Crunch']
            [45, 'Rock Climb']
            [48, 'Stone Edge']
        ], //Night Form
        [
            [0, 'Thrash']
            [1, 'Thrash']
            [1, 'Accelerock']
            [1, 'Counter']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Sand Attack']
            [1, 'Bite']
            [4, 'Sand Attack']
            [7, 'Bite']
            [12, 'Howl']
            [15, 'Rock Throw']
            [18, 'Odor Sleuth']
            [23, 'Rock Tomb']
            [26, 'Roar']
            [29, 'Stealth Rock']
            [34, 'Rock Slide']
            [37, 'Scary Face']
            [40, 'Crunch']
            [45, 'Rock Climb']
            [48, 'Stone Edge']
        ], //Dusk Form
    ], //Lycanroc

    ['746',
        [
            [1, 'Water Gun']
            [1, 'Growl']
            [6, 'Helping Hand']
            [9, 'Feint Attack']
            [14, 'Brine']
            [17, 'Aqua Ring']
            [22, 'Tearful Look']
            [25, 'Take Down']
            [30, 'Dive']
            [33, 'Beat Up']
            [38, 'Aqua Tail']
            [41, 'Double Edge']
            [46, 'Soak']
            [49, 'Endeavor']
            [54, 'Hydro Pump']
        ],
    ],

    ['747',
        [
            [1, 'Poison Sting']
            [5, 'Peck']
            [9, 'Bite']
            [13, 'Toxic Spikes']
            [17, 'Wide Guard']
            [21, 'Toxic']
            [25, 'Venoshock']
            [29, 'Spike Cannon']
            [33, 'Recover']
            [37, 'Poison Jab']
            [41, 'Venom Drench']
            [45, 'Pin Missile']
            [49, 'Liquidation']
        ],
    ],

    ['748',
        [
            [0, 'Baneful Bunker']
            [1, 'Baneful Bunker']
            [1, 'Poison Sting']
            [1, 'Peck']
            [1, 'Bite']
            [1, 'Toxic Spikes']
            [5, 'Peck']
            [9, 'Bite']
            [13, 'Toxic Spikes']
            [17, 'Wide Guard']
            [21, 'Toxic']
            [25, 'Venoshock']
            [29, 'Spike Cannon']
            [33, 'Recover']
            [37, 'Poison Jab']
            [44, 'Venom Drench']
            [51, 'Pin Missile']
            [58, 'Liquidation']
        ],
    ],

    ['749',
        [
            [1, 'Mud Slap']
            [3, 'Mud Sport']
            [8, 'Rototiller']
            [10, 'Bulldoze']
            [15, 'Double Kick']
            [17, 'Stomp']
            [22, 'Bide']
            [24, 'High Horsepower']
            [29, 'Iron Defense']
            [31, 'Heavy Slam']
            [36, 'Counter']
            [38, 'Earthquake']
            [43, 'Mega Kick']
            [45, 'Superpower']
        ],
    ],

    ['750',
        [
            [1, 'Mud Slap']
            [1, 'Mud Sport']
            [1, 'Rototiller']
            [1, 'Bulldoze']
            [3, 'Mud Sport']
            [8, 'Rototiller']
            [10, 'Bulldoze']
            [15, 'Double Kick']
            [17, 'Stomp']
            [22, 'Bide']
            [24, 'High Horsepower']
            [29, 'Iron Defense']
            [34, 'Heavy Slam']
            [42, 'Counter']
            [47, 'Earthquake']
            [55, 'Mega Kick']
            [60, 'Superpower']
        ],
    ],

    ['751',
        [
            [1, 'Water Sport']
            [1, 'Bubble']
            [5, 'Infestation']
            [8, 'Spider Web']
            [13, 'Bug Bite']
            [16, 'Bubble Beam']
            [21, 'Bite']
            [24, 'Aqua Ring']
            [29, 'Leech Life']
            [32, 'Crunch']
            [37, 'Lunge']
            [40, 'Mirror Coat']
            [45, 'Liquidation']
            [48, 'Entrainment']
        ],
    ],

    ['752',
        [
            [1, 'Wide Guard']
            [1, 'Soak']
            [1, 'Bubble']
            [1, 'Infestation']
            [1, 'Spider Web']
            [1, 'Bug Bite']
            [5, 'Infestation']
            [8, 'Spider Web']
            [13, 'Bug Bite']
            [16, 'Bubble Beam']
            [21, 'Bite']
            [26, 'Aqua Ring']
            [33, 'Leech Life']
            [38, 'Crunch']
            [45, 'Lunge']
            [50, 'Mirror Coat']
            [57, 'Liquidation']
            [62, 'Entrainment']
        ],
    ],

    ['753',
        [
            [1, 'Fury Cutter']
            [5, 'Leafage']
            [10, 'Razor Leaf']
            [14, 'Growth']
            [19, 'Ingrain']
            [23, 'Leaf Blade']
            [28, 'Synthesis']
            [32, 'Slash']
            [37, 'Sweet Scent']
            [41, 'Solar Beam']
            [46, 'Sunny Day']
        ],
    ],

    ['754',
        [
            [0, 'Petal Blizzard']
            [1, 'Petal Blizzard']
            [1, 'X Scissor']
            [1, 'Night Slash']
            [1, 'Fury Cutter']
            [1, 'Leafage']
            [1, 'Razor Leaf']
            [1, 'Growth']
            [5, 'Leafage']
            [10, 'Razor Leaf']
            [14, 'Growth']
            [19, 'Ingrain']
            [23, 'Leaf Blade']
            [28, 'Synthesis']
            [32, 'Slash']
            [40, 'Sweet Scent']
            [47, 'Solar Blade']
            [55, 'Sunny Day']
        ],
    ],

    ['755',
        [
            [1, 'Absorb']
            [4, 'Astonish']
            [8, 'Flash']
            [11, 'Moonlight']
            [15, 'Mega Drain']
            [18, 'Sleep Powder']
            [22, 'Ingrain']
            [25, 'Confuse Ray']
            [29, 'Giga Drain']
            [32, 'Strength Sap']
            [36, 'Spore']
            [39, 'Moonblast']
            [43, 'Dream Eater']
            [46, 'Spotlight']
        ],
    ],

    ['756',
        [
            [1, 'Absorb']
            [1, 'Astonish']
            [1, 'Ingrain']
            [1, 'Flash']
            [4, 'Astonish']
            [8, 'Flash']
            [11, 'Moonlight']
            [15, 'Mega Drain']
            [18, 'Sleep Powder']
            [22, 'Ingrain']
            [26, 'Confuse Ray']
            [31, 'Giga Drain']
            [35, 'Strength Sap']
            [40, 'Spore']
            [44, 'Moonblast']
            [49, 'Dream Eater']
            [53, 'Spotlight']
        ],
    ],

    ['757',
        [
            [1, 'Scratch']
            [1, 'Poison Gas']
            [5, 'Ember']
            [8, 'Sweet Scent']
            [13, 'Dragon Rage']
            [16, 'Smog']
            [21, 'Double Slap']
            [24, 'Flame Burst']
            [29, 'Toxic']
            [32, 'Nasty Plot']
            [37, 'Venoshock']
            [40, 'Flamethrower']
            [45, 'Venom Drench']
            [48, 'Dragon Pulse']
        ],
    ],

    ['758',
        [
            [0, 'Captivate']
            [1, 'Captivate']
            [1, 'Disable']
            [1, 'Encore']
            [1, 'Torment']
            [1, 'Swagger']
            [1, 'Pound']
            [1, 'Poison Gas']
            [1, 'Ember']
            [1, 'Sweet Scent']
            [5, 'Ember']
            [8, 'Sweet Scent']
            [13, 'Dragon Rage']
            [16, 'Smog']
            [21, 'Double Slap']
            [24, 'Flame Burst']
            [29, 'Toxic']
            [32, 'Nasty Plot']
            [39, 'Venoshock']
            [44, 'Flamethrower']
            [51, 'Venom Drench']
            [56, 'Dragon Pulse']
        ],
    ],

    ['759',
        [
            [1, 'Tackle']
            [1, 'Leer']
            [5, 'Bide']
            [10, 'Baby Doll Eyes']
            [14, 'Brutal Swing']
            [19, 'Flail']
            [23, 'Payback']
            [28, 'Take Down']
            [32, 'Hammer Arm']
            [37, 'Thrash']
            [41, 'Pain Split']
            [46, 'Double Edge']
            [50, 'Superpower']
        ],
    ],

    ['760',
        [
            [0, 'Bind']
            [1, 'Bind']
            [1, 'Tackle']
            [1, 'Leer']
            [5, 'Bide']
            [10, 'Baby Doll Eyes']
            [14, 'Brutal Swing']
            [19, 'Flail']
            [23, 'Payback']
            [30, 'Take Down']
            [36, 'Hammer Arm']
            [43, 'Thrash']
            [49, 'Pain Split']
            [56, 'Double Edge']
            [62, 'Superpower']
        ],
    ],

    ['761',
        [
            [1, 'Splash']
            [5, 'Play Nice']
            [9, 'Rapid Spin']
            [13, 'Razor Leaf']
            [17, 'Sweet Scent']
            [21, 'Magical Leaf']
            [25, 'Teeter Dance']
            [29, 'Flail']
            [33, 'Aromatic Mist']
        ],
    ],

    ['762',
        [
            [0, 'Double Slap']
            [1, 'Double Slap']
            [1, 'Splash']
            [1, 'Play Nice']
            [1, 'Rapid Spin']
            [1, 'Razor Leaf']
            [5, 'Play Nice']
            [9, 'Rapid Spin']
            [13, 'Razor Leaf']
            [17, 'Sweet Scent']
            [21, 'Magical Leaf']
            [25, 'Teeter Dance']
            [29, 'Stomp']
            [33, 'Aromatic Mist']
            [37, 'Captivate']
            [41, 'Aromatherapy']
            [45, 'Leaf Storm']
        ],
    ],

    ['763',
        [
            [0, 'Trop Kick']
            [1, 'Trop Kick']
            [1, 'Punishment']
            [1, 'Double Slap']
            [1, 'Splash']
            [1, 'Swagger']
            [1, 'Rapid Spin']
            [1, 'Razor Leaf']
            [5, 'Swagger']
            [9, 'Rapid Spin']
            [13, 'Razor Leaf']
            [17, 'Sweet Scent']
            [21, 'Magical Leaf']
            [25, 'Teeter Dance']
            [29, 'Stomp']
            [33, 'Aromatic Mist']
            [37, 'Captivate']
            [41, 'Aromatherapy']
            [45, 'Leaf Storm']
            [49, 'High Jump Kick']
            [53, 'Power Whip']
        ],
    ],

    ['764',
        [
            [1, 'Helping Hand']
            [1, 'Vine Whip']
            [1, 'Flower Shield']
            [4, 'Leech Seed']
            [7, 'Draining Kiss']
            [10, 'Magical Leaf']
            [13, 'Growth']
            [16, 'Wrap']
            [19, 'Sweet Kiss']
            [22, 'Natural Gift']
            [25, 'Petal Blizzard']
            [28, 'Synthesis']
            [31, 'Sweet Scent']
            [34, 'Grass Knot']
            [37, 'Floral Healing']
            [40, 'Petal Dance']
            [43, 'Aromatherapy']
            [46, 'Grassy Terrain']
            [49, 'Play Rough']
        ],
    ],

    ['765',
        [
            [1, 'Confusion']
            [4, 'After You']
            [8, 'Taunt']
            [11, 'Quash']
            [15, 'Stored Power']
            [18, 'Psych Up']
            [22, 'Feint Attack']
            [25, 'Nasty Plot']
            [29, 'Zen Headbutt']
            [32, 'Instruct']
            [36, 'Foul Play']
            [39, 'Calm Mind']
            [43, 'Psychic']
            [46, 'Future Sight']
            [50, 'Trick Room']
        ],
    ],

    ['766',
        [
            [1, 'Tackle']
            [4, 'Leer']
            [8, 'Rock Smash']
            [11, 'Focus Energy']
            [15, 'Beat Up']
            [18, 'Scary Face']
            [22, 'Take Down']
            [25, 'Bestow']
            [29, 'Thrash']
            [32, 'Bulk Up']
            [36, 'Double Edge']
            [39, 'Fling']
            [43, 'Close Combat']
            [46, 'Reversal']
            [50, 'Giga Impact']
        ],
    ],

    ['767',
        [
            [1, 'Struggle Bug']
            [1, 'Sand Attack']
        ],
    ],

    ['768',
        [
            [0, 'First Impression']
            [1, 'First Impression']
            [1, 'Struggle Bug']
            [1, 'Sand Attack']
            [1, 'Fury Cutter']
            [1, 'Rock Smash']
            [4, 'Fury Cutter']
            [7, 'Rock Smash']
            [10, 'Bug Bite']
            [13, 'Spite']
            [16, 'Swords Dance']
            [21, 'Slash']
            [26, 'Razor Shell']
            [31, 'Sucker Punch']
            [36, 'Iron Defense']
            [41, 'Pin Missile']
            [48, 'Liquidation']
        ],
    ],

    ['769',
        [
            [1, 'Harden']
            [1, 'Absorb']
            [5, 'Astonish']
            [9, 'Sand Attack']
            [14, 'Sand Tomb']
            [18, 'Mega Drain']
            [23, 'Bulldoze']
            [27, 'Hypnosis']
            [32, 'Iron Defense']
            [36, 'Giga Drain']
            [41, 'Shadow Ball']
            [45, 'Earth Power']
            [50, 'Shore Up']
            [54, 'Sandstorm']
        ],
    ],

    ['770',
        [
            [1, 'Harden']
            [1, 'Absorb']
            [1, 'Astonish']
            [1, 'Sand Attack']
            [5, 'Astonish']
            [9, 'Sand Attack']
            [14, 'Sand Tomb']
            [18, 'Mega Drain']
            [23, 'Bulldoze']
            [27, 'Hypnosis']
            [32, 'Iron Defense']
            [36, 'Giga Drain']
            [41, 'Shadow Ball']
            [47, 'Earth Power']
            [54, 'Shore Up']
            [60, 'Sandstorm']
        ],
    ],

    ['771',
        [
            [1, 'Baton Pass']
            [1, 'Water Sport']
            [1, 'Mud Sport']
            [1, 'Harden']
            [1, 'Bide']
            [5, 'Helping Hand']
            [9, 'Taunt']
            [13, 'Safeguard']
            [17, 'Counter']
            [21, 'Purify']
            [25, 'Curse']
            [29, 'Gastro Acid']
            [33, 'Pain Split']
            [37, 'Recover']
            [41, 'Soak']
            [45, 'Toxic']
            [49, 'Memento']
        ],
    ],

    ['772',
        [
            [1, 'Tackle']
            [5, 'Rage']
            [10, 'Pursuit']
            [15, 'Imprison']
            [20, 'Aerial Ace']
            [25, 'Crush Claw']
            [30, 'Scary Face']
            [35, 'X Scissor']
            [40, 'Take Down']
            [45, 'Metal Sound']
            [50, 'Iron Head']
            [55, 'Double Hit']
            [60, 'Air Slash']
            [65, 'Punishment']
            [70, 'Razor Wind']
            [75, 'Tri Attack']
            [80, 'Double Edge']
            [85, 'Heal Block']
        ],
    ],

    ['773',
        [
            [0, 'Multi Attack']
            [1, 'Multi Attack']
            [1, 'Heal Block']
            [1, 'Imprison']
            [1, 'Iron Head']
            [1, 'Poison Fang']
            [1, 'Fire Fang']
            [1, 'Ice Fang']
            [1, 'Thunder Fang']
            [1, 'Tackle']
            [5, 'Rage']
            [10, 'Pursuit']
            [15, 'Bite']
            [20, 'Aerial Ace']
            [25, 'Crush Claw']
            [30, 'Scary Face']
            [35, 'X Scissor']
            [40, 'Take Down']
            [45, 'Metal Sound']
            [50, 'Crunch']
            [55, 'Double Hit']
            [60, 'Air Slash']
            [65, 'Punishment']
            [70, 'Razor Wind']
            [75, 'Tri Attack']
            [80, 'Double Edge']
            [85, 'Parting Shot']
        ],
    ],

    ['774',
        [
            [1, 'Tackle']
            [3, 'Defense Curl']
            [8, 'Rollout']
            [10, 'Confuse Ray']
            [15, 'Swift']
            [17, 'Ancient Power']
            [22, 'Self Destruct']
            [24, 'Stealth Rock']
            [29, 'Take Down']
            [31, 'Autotomize']
            [36, 'Cosmic Power']
            [38, 'Power Gem']
            [43, 'Double Edge']
            [45, 'Shell Smash']
            [50, 'Explosion']
        ],
    ],

    ['775',
        [
            [1, 'Defense Curl']
            [1, 'Rollout']
            [6, 'Stockpile']
            [6, 'Spit Up']
            [6, 'Swallow']
            [11, 'Rapid Spin']
            [16, 'Yawn']
            [21, 'Slam']
            [26, 'Flail']
            [31, 'Sucker Punch']
            [36, 'Psych Up']
            [41, 'Wood Hammer']
            [46, 'Thrash']
        ],
    ],

    ['776',
        [
            [1, 'Ember']
            [1, 'Tackle']
            [5, 'Smog']
            [9, 'Protect']
            [13, 'Incinerate']
            [17, 'Flail']
            [21, 'Endure']
            [25, 'Iron Defense']
            [29, 'Flamethrower']
            [33, 'Body Slam']
            [37, 'Shell Smash']
            [41, 'Dragon Pulse']
            [45, 'Shell Trap']
            [49, 'Overheat']
            [53, 'Explosion']
        ],
    ],

    ['777',
        [
            [1, 'Tackle']
            [1, 'Thunder Shock']
            [5, 'Defense Curl']
            [9, 'Rollout']
            [13, 'Charge']
            [17, 'Spark']
            [21, 'Nuzzle']
            [25, 'Magnet Rise']
            [29, 'Discharge']
            [33, 'Zing Zap']
            [37, 'Electric Terrain']
            [41, 'Wild Charge']
            [45, 'Pin Missile']
            [49, 'Spiky Shield']
            [53, 'Fell Stinger']
        ],
    ],

    ['778',
        [
            [1, 'Wood Hammer']
            [1, 'Splash']
            [1, 'Scratch']
            [1, 'Astonish']
            [1, 'Copycat']
            [5, 'Double Team']
            [10, 'Baby Doll Eyes']
            [14, 'Shadow Sneak']
            [19, 'Mimic']
            [23, 'Feint Attack']
            [28, 'Charm']
            [32, 'Slash']
            [37, 'Shadow Claw']
            [41, 'Hone Claws']
            [46, 'Play Rough']
            [50, 'Pain Split']
        ],
    ],

    ['779',
        [
            [1, 'Water Gun']
            [4, 'Astonish']
            [9, 'Confusion']
            [12, 'Bite']
            [17, 'Aqua Jet']
            [20, 'Disable']
            [25, 'Psywave']
            [28, 'Crunch']
            [33, 'Aqua Tail']
            [36, 'Screech']
            [41, 'Psychic Fangs']
            [44, 'Synchronoise']
        ],
    ],

    ['780',
        [
            [1, 'Play Nice']
            [1, 'Echoed Voice']
            [5, 'Twister']
            [9, 'Protect']
            [13, 'Glare']
            [17, 'Light Screen']
            [21, 'Dragon Rage']
            [25, 'Natural Gift']
            [29, 'Dragon Breath']
            [33, 'Safeguard']
            [37, 'Extrasensory']
            [41, 'Dragon Pulse']
            [45, 'Fly']
            [49, 'Hyper Voice']
            [53, 'Outrage']
        ],
    ],

    ['781',
        [
            [1, 'Switcheroo']
            [1, 'Absorb']
            [1, 'Growth']
            [1, 'Rapid Spin']
            [1, 'Astonish']
            [5, 'Mega Drain']
            [9, 'Wrap']
            [14, 'Gyro Ball']
            [18, 'Metal Sound']
            [23, 'Giga Drain']
            [27, 'Whirlpool']
            [32, 'Anchor Shot']
            [36, 'Shadow Ball']
            [41, 'Energy Ball']
            [45, 'Slam']
            [50, 'Heavy Slam']
            [54, 'Phantom Force']
            [59, 'Power Whip']
        ],
    ],

    ['782',
        [
            [1, 'Tackle']
            [5, 'Leer']
            [9, 'Bide']
            [13, 'Protect']
            [17, 'Dragon Tail']
            [21, 'Scary Face']
            [25, 'Headbutt']
            [29, 'Work Up']
            [33, 'Screech']
            [37, 'Iron Defense']
            [41, 'Dragon Claw']
            [45, 'Noble Roar']
            [49, 'Dragon Dance']
            [53, 'Outrage']
        ],
    ],

    ['783',
        [
            [0, 'Sky Uppercut']
            [1, 'Sky Uppercut']
            [1, 'Autotomize']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Bide']
            [1, 'Protect']
            [5, 'Leer']
            [9, 'Bide']
            [13, 'Protect']
            [17, 'Dragon Tail']
            [21, 'Scary Face']
            [25, 'Headbutt']
            [29, 'Work Up']
            [33, 'Screech']
            [38, 'Iron Defense']
            [43, 'Dragon Claw']
            [48, 'Noble Roar']
            [53, 'Dragon Dance']
            [58, 'Outrage']
            [63, 'Close Combat']
        ],
    ],

    ['784',
        [
            [0, 'Clanging Scales']
            [1, 'Clanging Scales']
            [1, 'Sky Uppercut']
            [1, 'Belly Drum']
            [1, 'Autotomize']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Bide']
            [1, 'Protect']
            [5, 'Leer']
            [9, 'Bide']
            [13, 'Protect']
            [17, 'Dragon Tail']
            [21, 'Scary Face']
            [25, 'Headbutt']
            [29, 'Work Up']
            [33, 'Screech']
            [38, 'Iron Defense']
            [43, 'Dragon Claw']
            [51, 'Noble Roar']
            [59, 'Dragon Dance']
            [67, 'Outrage']
            [75, 'Close Combat']
        ],
    ],

    ['785',
        [
            [1, 'Electric Terrain']
            [1, 'Brave Bird']
            [1, 'Power Swap']
            [1, 'Mean Look']
            [1, 'Quick Attack']
            [1, 'False Swipe']
            [1, 'Withdraw']
            [1, 'Thunder Shock']
            [8, 'Spark']
            [14, 'Shock Wave']
            [20, 'Screech']
            [26, 'Charge']
            [32, 'Wild Charge']
            [38, 'Mirror Move']
            [43, 'Natures Madness']
            [48, 'Discharge']
            [53, 'Agility']
            [58, 'Electro Ball']
        ],
    ],

    ['786',
        [
            [1, 'Psychic Terrain']
            [1, 'Aromatic Mist']
            [1, 'Aromatherapy']
            [1, 'Mean Look']
            [1, 'Draining Kiss']
            [1, 'Astonish']
            [1, 'Withdraw']
            [1, 'Confusion']
            [8, 'Psywave']
            [14, 'Psybeam']
            [20, 'Sweet Scent']
            [26, 'Skill Swap']
            [32, 'Psyshock']
            [38, 'Tickle']
            [43, 'Natures Madness']
            [48, 'Extrasensory']
            [53, 'Flatter']
            [58, 'Moonblast']
        ],
    ],

    ['787',
        [
            [1, 'Grassy Terrain']
            [1, 'Wood Hammer']
            [1, 'Superpower']
            [1, 'Mean Look']
            [1, 'Disable']
            [1, 'Whirlwind']
            [1, 'Withdraw']
            [1, 'Leafage']
            [8, 'Horn Attack']
            [14, 'Giga Drain']
            [20, 'Scary Face']
            [26, 'Leech Seed']
            [32, 'Horn Leech']
            [38, 'Rototiller']
            [43, 'Natures Madness']
            [48, 'Zen Headbutt']
            [53, 'Megahorn']
            [58, 'Skull Bash']
        ],
    ],

    ['788',
        [
            [1, 'Misty Terrain']
            [1, 'Moonblast']
            [1, 'Heal Pulse']
            [1, 'Mean Look']
            [1, 'Haze']
            [1, 'Mist']
            [1, 'Withdraw']
            [1, 'Water Gun']
            [8, 'Water Pulse']
            [14, 'Whirlpool']
            [20, 'Soak']
            [26, 'Refresh']
            [32, 'Brine']
            [38, 'Defog']
            [43, 'Natures Madness']
            [48, 'Muddy Water']
            [53, 'Aqua Ring']
            [58, 'Hydro Pump']
        ],
    ],

    ['789',
        [
            [1, 'Splash']
            [23, 'Teleport']
        ],
    ],

    ['790',
        [
            [0, 'Cosmic Power']
            [1, 'Cosmic Power']
            [1, 'Teleport']
        ],
    ],

    ['791',
        [
            [0, 'Sunsteel Strike']
            [1, 'Sunsteel Strike']
            [1, 'Cosmic Power']
            [1, 'Wake Up Slap']
            [1, 'Teleport']
            [1, 'Metal Claw']
            [7, 'Iron Head']
            [13, 'Metal Sound']
            [19, 'Zen Headbutt']
            [23, 'Flash Cannon']
            [31, 'Morning Sun']
            [37, 'Crunch']
            [43, 'Metal Burst']
            [47, 'Solar Beam']
            [59, 'Noble Roar']
            [61, 'Flare Blitz']
            [67, 'Wide Guard']
            [73, 'Giga Impact']
        ],
    ],

    ['792',
        [
            [0, 'Moongeist Beam']
            [1, 'Moongeist Beam']
            [1, 'Cosmic Power']
            [1, 'Hypnosis']
            [1, 'Teleport']
            [1, 'Confusion']
            [7, 'Night Shade']
            [13, 'Confuse Ray']
            [19, 'Air Slash']
            [23, 'Shadow Ball']
            [31, 'Moonlight']
            [37, 'Night Daze']
            [43, 'Magic Coat']
            [47, 'Moonblast']
            [59, 'Dream Eater']
            [61, 'Phantom Force']
            [67, 'Wide Guard']
            [73, 'Hyper Beam']
        ],
    ],

    ['793',
        [
            [1, 'Power Split']
            [1, 'Guard Split']
            [1, 'Tickle']
            [1, 'Acid']
            [1, 'Constrict']
            [1, 'Pound']
            [7, 'Clear Smog']
            [13, 'Psywave']
            [19, 'Headbutt']
            [23, 'Venoshock']
            [29, 'Toxic Spikes']
            [31, 'Safeguard']
            [37, 'Power Gem']
            [43, 'Mirror Coat']
            [47, 'Acid Spray']
            [53, 'Venom Drench']
            [59, 'Stealth Rock']
            [67, 'Wonder Room']
            [73, 'Head Smash']
        ],
    ],

    ['794',
        [
            [1, 'Fell Stinger']
            [1, 'Thunder Punch']
            [1, 'Ice Punch']
            [1, 'Reversal']
            [1, 'Harden']
            [1, 'Power Up Punch']
            [1, 'Focus Energy']
            [7, 'Comet Punch']
            [13, 'Bulk Up']
            [19, 'Vital Throw']
            [23, 'Endure']
            [29, 'Leech Life']
            [31, 'Taunt']
            [37, 'Mega Punch']
            [43, 'Counter']
            [47, 'Hammer Arm']
            [53, 'Lunge']
            [59, 'Dynamic Punch']
            [67, 'Superpower']
            [73, 'Focus Punch']
        ],
    ],

    ['795',
        [
            [1, 'Quiver Dance']
            [1, 'Quick Guard']
            [1, 'Low Kick']
            [1, 'Rapid Spin']
            [1, 'Leer']
            [1, 'Double Kick']
            [7, 'Swift']
            [13, 'Stomp']
            [19, 'Feint']
            [23, 'Silver Wind']
            [29, 'Bounce']
            [31, 'Jump Kick']
            [37, 'Agility']
            [43, 'Triple Kick']
            [47, 'Lunge']
            [53, 'Bug Buzz']
            [59, 'Me First']
            [67, 'High Jump Kick']
            [73, 'Speed Swap']
        ],
    ],

    ['796',
        [
            [1, 'Tail Glow']
            [1, 'Spark']
            [1, 'Charge']
            [1, 'Wrap']
            [1, 'Thunder Shock']
            [7, 'Thunder Wave']
            [13, 'Shock Wave']
            [19, 'Ingrain']
            [23, 'Thunder Punch']
            [29, 'Eerie Impulse']
            [31, 'Signal Beam']
            [37, 'Thunderbolt']
            [43, 'Hypnosis']
            [47, 'Discharge']
            [53, 'Electric Terrain']
            [59, 'Power Whip']
            [67, 'Ion Deluge']
            [73, 'Zap Cannon']
        ],
    ],

    ['797',
        [
            [1, 'Wide Guard']
            [1, 'Air Slash']
            [1, 'Ingrain']
            [1, 'Absorb']
            [1, 'Harden']
            [1, 'Tackle']
            [7, 'Smack Down']
            [13, 'Mega Drain']
            [19, 'Leech Seed']
            [23, 'Metal Sound']
            [29, 'Iron Head']
            [31, 'Giga Drain']
            [37, 'Flash Cannon']
            [43, 'Autotomize']
            [47, 'Seed Bomb']
            [53, 'Skull Bash']
            [59, 'Iron Defense']
            [67, 'Heavy Slam']
            [73, 'Double Edge']
        ],
    ],

    ['798',
        [
            [1, 'Sacred Sword']
            [1, 'Defog']
            [1, 'Vacuum Wave']
            [1, 'Air Cutter']
            [1, 'Fury Cutter']
            [1, 'Cut']
            [7, 'False Swipe']
            [13, 'Razor Leaf']
            [19, 'Synthesis']
            [23, 'Aerial Ace']
            [29, 'Laser Focus']
            [31, 'Night Slash']
            [37, 'Swords Dance']
            [43, 'Leaf Blade']
            [47, 'X Scissor']
            [53, 'Detect']
            [59, 'Air Slash']
            [67, 'Psycho Cut']
            [73, 'Guillotine']
        ],
    ],

    ['799',
        [
            [1, 'Belch']
            [1, 'Wide Guard']
            [1, 'Swallow']
            [1, 'Stockpile']
            [1, 'Dragon Rage']
            [1, 'Bite']
            [7, 'Stomp']
            [13, 'Brutal Swing']
            [19, 'Steamroller']
            [23, 'Dragon Tail']
            [29, 'Iron Tail']
            [31, 'Stomping Tantrum']
            [37, 'Crunch']
            [43, 'Hammer Arm']
            [47, 'Thrash']
            [53, 'Gastro Acid']
            [59, 'Heavy Slam']
            [67, 'Wring Out']
            [73, 'Dragon Rush']
        ],
    ],

    ['800',
        [
            [1, 'Moonlight']
            [1, 'Morning Sun']
            [1, 'Charge Beam']
            [1, 'Mirror Shot']
            [1, 'Metal Claw']
            [1, 'Confusion']
            [7, 'Slash']
            [13, 'Stored Power']
            [19, 'Rock Blast']
            [23, 'Night Slash']
            [31, 'Gravity']
            [37, 'Psycho Cut']
            [43, 'Power Gem']
            [47, 'Autotomize']
            [50, 'Photon Geyser']
            [53, 'Stealth Rock']
            [59, 'Iron Defense']
            [67, 'Wring Out']
            [73, 'Prismatic Laser']
        ],
    ],

    ['801',
        [
            [1, 'Crafty Shield']
            [1, 'Gear Up']
            [1, 'Shift Gear']
            [1, 'Iron Head']
            [1, 'Helping Hand']
            [1, 'Sonic Boom']
            [1, 'Defense Curl']
            [1, 'Psybeam']
            [9, 'Lucky Chant']
            [17, 'Aurora Beam']
            [25, 'Mirror Shot']
            [33, 'Mind Reader']
            [41, 'Flash Cannon']
            [49, 'Fleur Cannon']
            [57, 'Iron Defense']
            [65, 'Pain Split']
            [73, 'Synchronoise']
            [81, 'Aura Sphere']
            [89, 'Heart Swap']
            [97, 'Trump Card']
        ],
    ],

    ['802',
        [
            [1, 'Laser Focus']
            [1, 'Assurance']
            [1, 'Fire Punch']
            [1, 'Thunder Punch']
            [1, 'Ice Punch']
            [1, 'Drain Punch']
            [1, 'Counter']
            [1, 'Pursuit']
            [1, 'Shadow Sneak']
            [5, 'Force Palm']
            [11, 'Feint']
            [15, 'Rolling Kick']
            [20, 'Copycat']
            [26, 'Shadow Punch']
            [30, 'Role Play']
            [35, 'Jump Kick']
            [41, 'Psych Up']
            [45, 'Spectral Thief']
            [50, 'Close Combat']
            [56, 'Sucker Punch']
            [60, 'Endeavor']
        ],
    ],

    ['803',
        [
            [1, 'Dragon Pulse']
            [1, 'Peck']
            [1, 'Growl']
            [1, 'Helping Hand']
            [1, 'Acid']
            [7, 'Fury Attack']
            [13, 'Venoshock']
            [19, 'Charm']
            [23, 'Venom Drench']
            [31, 'Nasty Plot']
            [37, 'Poison Jab']
            [41, 'Toxic']
            [47, 'Fell Stinger']
        ],
    ],

    ['804',
        [
            [0, 'Air Cutter']
            [1, 'Air Cutter']
            [1, 'Dragon Pulse']
            [1, 'Peck']
            [1, 'Growl']
            [1, 'Helping Hand']
            [1, 'Acid']
            [7, 'Fury Attack']
            [13, 'Venoshock']
            [19, 'Charm']
            [23, 'Venom Drench']
            [31, 'Nasty Plot']
            [37, 'Poison Jab']
            [41, 'Toxic']
            [47, 'Fell Stinger']
            [53, 'Air Slash']
            [61, 'Dragon Pulse']
        ],
    ],

    ['805',
        [
            [1, 'Protect']
            [1, 'Tackle']
            [5, 'Rock Slide']
            [11, 'Stealth Rock']
            [17, 'Bide']
            [19, 'Take Down']
            [23, 'Rock Throw']
            [31, 'Autotomize']
            [37, 'Iron Defense']
            [43, 'Iron Head']
            [47, 'Rock Blast']
            [53, 'Wide Guard']
            [61, 'Double Edge']
        ],
    ],

    ['806',
        [
            [1, 'Ember']
            [1, 'Astonish']
            [7, 'Magic Coat']
            [13, 'Stored Power']
            [17, 'Flame Burst']
            [23, 'Night Shade']
            [29, 'Light Screen']
            [31, 'Calm Mind']
            [37, 'Fire Blast']
            [41, 'Shadow Ball']
            [47, 'Trick']
            [59, 'Mind Blown']
        ],
    ],

    ['807',
        [
            [1, 'Scratch']
            [1, 'Spark']
            [5, 'Hone Claws']
            [8, 'Quick Attack']
            [12, 'Fury Swipes']
            [15, 'Volt Switch']
            [19, 'Snarl']
            [22, 'Fake Out']
            [26, 'Charge']
            [29, 'Thunder Punch']
            [33, 'Slash']
            [36, 'Wild Charge']
            [40, 'Quick Guard']
            [43, 'Plasma Fists']
            [47, 'Close Combat']
            [50, 'Discharge']
        ],
    ],

    ['808',
        [
            [1, 'Thunder Shock']
            [1, 'Harden']
            [8, 'Tail Whip']
            [16, 'Headbutt']
            [24, 'Thunder Wave']
            [32, 'Acid Armor']
            [40, 'Flash Cannon']
        ],
    ],

    ['809',
        [
            [0, 'Thunder Punch']
            [1, 'Thunder Punch']
            [1, 'Thunder Shock']
            [1, 'Harden']
            [1, 'Tail Whip']
            [1, 'Headbutt']
            [24, 'Thunder Wave']
            [32, 'Acid Armor']
            [40, 'Flash Cannon']
            [48, 'Mega Punch']
            [56, 'Protect']
            [64, 'Discharge']
            [72, 'Dynamic Punch']
            [80, 'Superpower']
            [88, 'Double Iron Bash']
            [96, 'Hyper Beam']
        ],
    ],

    ['810',
        [
            [1, 'Scratch']
            [1, 'Growl']
            [6, 'Branch Poke']
            [8, 'Taunt']
            [12, 'Razor Leaf']
            [17, 'Screech']
            [20, 'Knock Off']
            [24, 'Slam']
            [28, 'Uproar']
            [32, 'Wood Hammer']
            [36, 'Endeavor']
        ],
    ],

    ['811',
        [
            [0, 'Double Hit']
            [1, 'Double Hit']
            [1, 'Scratch']
            [1, 'Growl']
            [1, 'Branch Poke']
            [1, 'Taunt']
            [12, 'Razor Leaf']
            [19, 'Screech']
            [24, 'Knock Off']
            [30, 'Slam']
            [36, 'Uproar']
            [42, 'Wood Hammer']
            [48, 'Endeavor']
        ],
    ],

    ['812',
        [
            [0, 'Drum Beating']
            [1, 'Drum Beating']
            [1, 'Double Hit']
            [1, 'Grassy Terrain']
            [1, 'Noble Roar']
            [1, 'Scratch']
            [1, 'Growl']
            [1, 'Branch Poke']
            [1, 'Taunt']
            [12, 'Razor Leaf']
            [19, 'Screech']
            [24, 'Knock Off']
            [30, 'Slam']
            [38, 'Uproar']
            [46, 'Wood Hammer']
            [54, 'Endeavor']
            [62, 'Boomburst']
        ],
    ],

    ['813',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [6, 'Ember']
            [8, 'Quick Attack']
            [12, 'Double Kick']
            [17, 'Flame Charge']
            [20, 'Agility']
            [24, 'Headbutt']
            [28, 'Counter']
            [32, 'Bounce']
            [36, 'Double Edge']
        ],
    ],

    ['814',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Ember']
            [1, 'Quick Attack']
            [12, 'Double Kick']
            [19, 'Flame Charge']
            [24, 'Agility']
            [30, 'Headbutt']
            [36, 'Counter']
            [42, 'Bounce']
            [48, 'Double Edge']
        ],
    ],

    ['815',
        [
            [0, 'Pyro Ball']
            [1, 'Pyro Ball']
            [1, 'Feint']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Ember']
            [1, 'Quick Attack']
            [12, 'Double Kick']
            [19, 'Flame Charge']
            [24, 'Agility']
            [30, 'Headbutt']
            [38, 'Counter']
            [46, 'Bounce']
            [54, 'Double Edge']
            [62, 'Court Change']
        ],
    ],

    ['816',
        [
            [1, 'Pound']
            [1, 'Growl']
            [6, 'Water Gun']
            [8, 'Bind']
            [12, 'Water Pulse']
            [17, 'Tearful Look']
            [20, 'Sucker Punch']
            [24, 'U Turn']
            [28, 'Liquidation']
            [32, 'Soak']
            [36, 'Rain Dance']
        ],
    ],

    ['817',
        [
            [1, 'Pound']
            [1, 'Growl']
            [1, 'Water Gun']
            [1, 'Bind']
            [12, 'Water Pulse']
            [19, 'Tearful Look']
            [24, 'Sucker Punch']
            [30, 'U Turn']
            [36, 'Liquidation']
            [42, 'Soak']
            [48, 'Rain Dance']
        ],
    ],

    ['818',
        [
            [0, 'Snipe Shot']
            [1, 'Snipe Shot']
            [1, 'Acrobatics']
            [1, 'Pound']
            [1, 'Growl']
            [1, 'Water Gun']
            [1, 'Bind']
            [12, 'Water Pulse']
            [19, 'Tearful Look']
            [24, 'Sucker Punch']
            [30, 'U Turn']
            [38, 'Liquidation']
            [46, 'Soak']
            [54, 'Rain Dance']
            [62, 'Hydro Pump']
        ],
    ],

    ['819',
        [
            [1, 'Tackle']
            [1, 'Tail Whip']
            [5, 'Bite']
            [10, 'Stuff Cheeks']
            [15, 'Stockpile']
            [15, 'Swallow']
            [15, 'Spit Up']
            [20, 'Body Slam']
            [25, 'Rest']
            [30, 'Counter']
            [35, 'Bullet Seed']
            [40, 'Super Fang']
            [45, 'Belch']
        ],
    ],

    ['820',
        [
            [0, 'Covet']
            [1, 'Covet']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [1, 'Bite']
            [1, 'Stuff Cheeks']
            [15, 'Stockpile']
            [15, 'Swallow']
            [15, 'Spit Up']
            [20, 'Body Slam']
            [27, 'Rest']
            [34, 'Counter']
            [41, 'Bullet Seed']
            [48, 'Super Fang']
            [55, 'Belch']
        ],
    ],

    ['821',
        [
            [1, 'Peck']
            [1, 'Leer']
            [4, 'Power Trip']
            [8, 'Hone Claws']
            [12, 'Fury Attack']
            [16, 'Pluck']
            [20, 'Taunt']
            [24, 'Scary Face']
            [28, 'Drill Peck']
            [32, 'Swagger']
            [36, 'Brave Bird']
        ],
    ],

    ['822',
        [
            [1, 'Peck']
            [1, 'Leer']
            [1, 'Power Trip']
            [1, 'Hone Claws']
            [12, 'Fury Attack']
            [16, 'Pluck']
            [22, 'Taunt']
            [28, 'Scary Face']
            [34, 'Drill Peck']
            [40, 'Swagger']
            [46, 'Brave Bird']
        ],
    ],

    ['823',
        [
            [0, 'Steel Wing']
            [1, 'Steel Wing']
            [1, 'Iron Defense']
            [1, 'Metal Sound']
            [1, 'Peck']
            [1, 'Leer']
            [1, 'Power Trip']
            [1, 'Hone Claws']
            [12, 'Fury Attack']
            [16, 'Pluck']
            [22, 'Taunt']
            [28, 'Scary Face']
            [34, 'Drill Peck']
            [42, 'Swagger']
            [50, 'Brave Bird']
        ],
    ],

    ['824',
        [
            [1, 'Struggle Bug']
        ],
    ],

    ['825',
        [
            [0, 'Reflect']
            [0, 'Light Screen']
            [0, 'Confusion']
            [1, 'Reflect']
            [1, 'Light Screen']
            [1, 'Confusion']
            [1, 'Struggle Bug']
        ],
    ],

    ['826',
        [
            [1, 'Reflect']
            [1, 'Light Screen']
            [1, 'Confusion']
            [1, 'Struggle Bug']
            [4, 'Confuse Ray']
            [8, 'Magic Coat']
            [12, 'Agility']
            [16, 'Psybeam']
            [20, 'Hypnosis']
            [24, 'Ally Switch']
            [28, 'Bug Buzz']
            [32, 'Mirror Coat']
            [36, 'Psychic']
            [40, 'After You']
            [44, 'Calm Mind']
            [48, 'Psychic Terrain']
        ],
    ],

    ['827',
        [
            [1, 'Quick Attack']
            [1, 'Tail Whip']
            [4, 'Beat Up']
            [8, 'Hone Claws']
            [12, 'Snarl']
            [16, 'Assurance']
            [20, 'Nasty Plot']
            [24, 'Sucker Punch']
            [28, 'Night Slash']
            [32, 'Tail Slap']
            [36, 'Foul Play']
        ],
    ],

    ['828',
        [
            [0, 'Thief']
            [1, 'Thief']
            [1, 'Quick Attack']
            [1, 'Tail Whip']
            [1, 'Beat Up']
            [1, 'Hone Claws']
            [12, 'Snarl']
            [16, 'Assurance']
            [22, 'Nasty Plot']
            [28, 'Sucker Punch']
            [34, 'Night Slash']
            [40, 'Tail Slap']
            [46, 'Foul Play']
            [52, 'Parting Shot']
        ],
    ],

    ['829',
        [
            [1, 'Leafage']
            [1, 'Sing']
            [4, 'Rapid Spin']
            [8, 'Sweet Scent']
            [12, 'Razor Leaf']
            [16, 'Round']
            [21, 'Leaf Tornado']
            [24, 'Synthesis']
            [28, 'Hyper Voice']
            [32, 'Aromatherapy']
            [36, 'Leaf Storm']
        ],
    ],

    ['830',
        [
            [0, 'Cotton Spore']
            [1, 'Cotton Spore']
            [1, 'Leafage']
            [1, 'Sing']
            [1, 'Rapid Spin']
            [1, 'Sweet Scent']
            [12, 'Razor Leaf']
            [16, 'Round']
            [23, 'Leaf Tornado']
            [28, 'Synthesis']
            [34, 'Hyper Voice']
            [40, 'Aromatherapy']
            [46, 'Leaf Storm']
            [52, 'Cotton Guard']
        ],
    ],

    ['831',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [4, 'Defense Curl']
            [8, 'Copycat']
            [12, 'Guard Split']
            [16, 'Double Kick']
            [21, 'Headbutt']
            [25, 'Take Down']
            [28, 'Guard Swap']
            [32, 'Reversal']
            [36, 'Cotton Guard']
            [40, 'Double Edge']
        ],
    ],

    ['832',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Defense Curl']
            [1, 'Copycat']
            [12, 'Guard Split']
            [16, 'Double Kick']
            [21, 'Headbutt']
            [27, 'Take Down']
            [32, 'Guard Swap']
            [38, 'Reversal']
            [44, 'Cotton Guard']
            [50, 'Double Edge']
            [56, 'Last Resort']
        ],
    ],

    ['833',
        [
            [1, 'Tackle']
            [1, 'Water Gun']
            [7, 'Bite']
            [14, 'Protect']
            [21, 'Headbutt']
            [28, 'Counter']
            [35, 'Jaw Lock']
            [42, 'Liquidation']
            [49, 'Body Slam']
        ],
    ],

    ['834',
        [
            [0, 'Rock Tomb']
            [1, 'Rock Tomb']
            [1, 'Razor Shell']
            [1, 'Crunch']
            [1, 'Rock Polish']
            [1, 'Tackle']
            [1, 'Water Gun']
            [1, 'Bite']
            [1, 'Protect']
            [21, 'Headbutt']
            [30, 'Counter']
            [39, 'Jaw Lock']
            [48, 'Liquidation']
            [57, 'Body Slam']
            [66, 'Head Smash']
        ],
    ],

    ['835',
        [
            [1, 'Tackle']
            [1, 'Tail Whip']
            [5, 'Nuzzle']
            [10, 'Bite']
            [15, 'Roar']
            [20, 'Spark']
            [26, 'Charm']
            [30, 'Crunch']
            [35, 'Charge']
            [40, 'Wild Charge']
            [45, 'Play Rough']
        ],
    ],

    ['836',
        [
            [1, 'Electrify']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [1, 'Nuzzle']
            [1, 'Bite']
            [15, 'Roar']
            [20, 'Spark']
            [28, 'Charm']
            [34, 'Crunch']
            [41, 'Charge']
            [48, 'Wild Charge']
            [55, 'Play Rough']
            [62, 'Electric Terrain']
        ],
    ],

    ['837',
        [
            [1, 'Tackle']
            [1, 'Smokescreen']
            [5, 'Rapid Spin']
            [10, 'Smack Down']
            [15, 'Rock Polish']
            [20, 'Ancient Power']
            [25, 'Incinerate']
            [30, 'Stealth Rock']
            [35, 'Heat Crash']
            [40, 'Rock Blast']
        ],
    ],

    ['838',
        [
            [0, 'Flame Charge']
            [1, 'Flame Charge']
            [1, 'Tackle']
            [1, 'Smokescreen']
            [1, 'Rapid Spin']
            [1, 'Smack Down']
            [15, 'Rock Polish']
            [20, 'Ancient Power']
            [27, 'Incinerate']
            [35, 'Stealth Rock']
            [41, 'Heat Crash']
            [48, 'Rock Blast']
            [55, 'Burn Up']
        ],
    ],

    ['839',
        [
            [0, 'Tar Shot']
            [1, 'Tar Shot']
            [1, 'Flame Charge']
            [1, 'Tackle']
            [1, 'Smokescreen']
            [1, 'Rapid Spin']
            [1, 'Smack Down']
            [15, 'Rock Polish']
            [20, 'Ancient Power']
            [27, 'Incinerate']
            [37, 'Stealth Rock']
            [45, 'Heat Crash']
            [54, 'Rock Blast']
            [63, 'Burn Up']
        ],
    ],

    ['840',
        [
            [1, 'Withdraw']
            [1, 'Astonish']
        ],
    ],

    ['841',
        [
            [0, 'Wing Attack']
            [1, 'Wing Attack']
            [1, 'Recycle']
            [1, 'Withdraw']
            [1, 'Astonish']
            [1, 'Growth']
            [1, 'Twister']
            [4, 'Acid Spray']
            [8, 'Acrobatics']
            [12, 'Leech Seed']
            [16, 'Protect']
            [20, 'Dragon Breath']
            [24, 'Dragon Dance']
            [28, 'Dragon Pulse']
            [32, 'Grav Apple']
            [36, 'Iron Defense']
            [40, 'Fly']
            [44, 'Dragon Rush']
        ],
    ],

    ['842',
        [
            [0, 'Headbutt']
            [1, 'Headbutt']
            [1, 'Recycle']
            [1, 'Withdraw']
            [1, 'Astonish']
            [1, 'Growth']
            [1, 'Sweet Scent']
            [4, 'Curse']
            [8, 'Stomp']
            [12, 'Leech Seed']
            [16, 'Protect']
            [20, 'Bullet Seed']
            [24, 'Recover']
            [28, 'Apple Acid']
            [32, 'Body Slam']
            [36, 'Iron Defense']
            [40, 'Dragon Pulse']
            [44, 'Energy Ball']
        ],
    ],

    ['843',
        [
            [1, 'Wrap']
            [1, 'Sand Attack']
            [5, 'Minimize']
            [10, 'Brutal Swing']
            [15, 'Bulldoze']
            [20, 'Headbutt']
            [25, 'Glare']
            [30, 'Dig']
            [35, 'Sandstorm']
            [40, 'Slam']
            [45, 'Coil']
            [50, 'Sand Tomb']
        ],
    ],

    ['844',
        [
            [1, 'Skull Bash']
            [1, 'Wrap']
            [1, 'Sand Attack']
            [1, 'Minimize']
            [1, 'Brutal Swing']
            [15, 'Bulldoze']
            [20, 'Headbutt']
            [25, 'Glare']
            [30, 'Dig']
            [35, 'Sandstorm']
            [42, 'Slam']
            [49, 'Coil']
            [51, 'Sand Tomb']
        ],
    ],

    ['845',
        [
            [1, 'Belch']
            [1, 'Peck']
            [1, 'Stockpile']
            [1, 'Swallow']
            [1, 'Spit Up']
            [7, 'Water Gun']
            [14, 'Fury Attack']
            [21, 'Pluck']
            [28, 'Dive']
            [35, 'Drill Peck']
            [42, 'Amnesia']
            [49, 'Thrash']
            [56, 'Hydro Pump']
        ],
    ],

    ['846',
        [
            [1, 'Peck']
            [1, 'Aqua Jet']
            [6, 'Fury Attack']
            [12, 'Bite']
            [18, 'Agility']
            [24, 'Dive']
            [30, 'Laser Focus']
            [36, 'Crunch']
            [42, 'Liquidation']
            [48, 'Double Edge']
        ],
    ],

    ['847',
        [
            [1, 'Throat Chop']
            [1, 'Peck']
            [1, 'Aqua Jet']
            [1, 'Fury Attack']
            [1, 'Bite']
            [18, 'Agility']
            [24, 'Dive']
            [32, 'Laser Focus']
            [40, 'Crunch']
            [48, 'Liquidation']
            [56, 'Double Edge']
        ],
    ],

    ['848',
        [
            [1, 'Belch']
            [1, 'Tearful Look']
            [1, 'Nuzzle']
            [1, 'Growl']
            [1, 'Flail']
            [1, 'Acid']
        ],
    ],

    ['849',
        [
            [0, 'Spark']
            [1, 'Spark']
            [1, 'Eerie Impulse']
            [1, 'Belch']
            [1, 'Tearful Look']
            [1, 'Nuzzle']
            [1, 'Growl']
            [1, 'Flail']
            [1, 'Acid']
            [1, 'Thunder Shock']
            [1, 'Acid Spray']
            [1, 'Leer']
            [1, 'Noble Roar']
            [4, 'Charge']
            [8, 'Shock Wave']
            [12, 'Scary Face']
            [16, 'Taunt']
            [20, 'Venoshock']
            [24, 'Screech']
            [28, 'Swagger']
            [32, 'Toxic']
            [36, 'Discharge']
            [40, 'Poison Jab']
            [44, 'Overdrive']
            [48, 'Boomburst']
            [52, 'Shift Gear']
        ], //Amped Form
        [
            [0, 'Spark']
            [1, 'Spark']
            [1, 'Eerie Impulse']
            [1, 'Belch']
            [1, 'Tearful Look']
            [1, 'Nuzzle']
            [1, 'Growl']
            [1, 'Flail']
            [1, 'Acid']
            [1, 'Thunder Shock']
            [1, 'Acid Spray']
            [1, 'Leer']
            [1, 'Noble Roar']
            [4, 'Charge']
            [8, 'Shock Wave']
            [12, 'Scary Face']
            [16, 'Taunt']
            [20, 'Venom Drench']
            [24, 'Screech']
            [28, 'Swagger']
            [32, 'Toxic']
            [36, 'Discharge']
            [40, 'Poison Jab']
            [44, 'Overdrive']
            [48, 'Boomburst']
            [52, 'Magnetic Flux']
        ], //Low Key Form
    ], //Toxtricity

    ['850',
        [
            [1, 'Ember']
            [1, 'Smokescreen']
            [5, 'Wrap']
            [10, 'Bite']
            [15, 'Flame Wheel']
            [20, 'Bug Bite']
            [25, 'Coil']
            [30, 'Slam']
            [35, 'Fire Spin']
            [40, 'Crunch']
            [45, 'Fire Lash']
            [50, 'Lunge']
            [55, 'Burn Up']
        ],
    ],

    ['851',
        [
            [1, 'Inferno']
            [1, 'Ember']
            [1, 'Smokescreen']
            [1, 'Wrap']
            [1, 'Bite']
            [15, 'Flame Wheel']
            [20, 'Bug Bite']
            [25, 'Coil']
            [32, 'Slam']
            [39, 'Fire Spin']
            [46, 'Crunch']
            [53, 'Fire Lash']
            [60, 'Lunge']
            [67, 'Burn Up']
        ],
    ],

    ['852',
        [
            [1, 'Rock Smash']
            [1, 'Leer']
            [5, 'Feint']
            [10, 'Bind']
            [15, 'Detect']
            [20, 'Brick Break']
            [25, 'Bulk Up']
            [30, 'Submission']
            [35, 'Taunt']
            [40, 'Reversal']
            [45, 'Superpower']
        ],
    ],

    ['853',
        [
            [0, 'Octolock']
            [1, 'Octolock']
            [1, 'Octazooka']
            [1, 'Rock Smash']
            [1, 'Leer']
            [1, 'Feint']
            [1, 'Bind']
            [15, 'Detect']
            [20, 'Brick Break']
            [25, 'Bulk Up']
            [30, 'Submission']
            [35, 'Taunt']
            [40, 'Reversal']
            [45, 'Superpower']
            [50, 'Topsy Turvy']
        ],
    ],

    ['854',
        [
            [1, 'Astonish']
            [1, 'Withdraw']
            [6, 'Aromatic Mist']
            [12, 'Mega Drain']
            [18, 'Protect']
            [24, 'Sucker Punch']
            [30, 'Aromatherapy']
            [36, 'Giga Drain']
            [42, 'Nasty Plot']
            [48, 'Shadow Ball']
            [54, 'Memento']
            [60, 'Shell Smash']
        ],
    ],

    ['855',
        [
            [0, 'Teatime']
            [1, 'Teatime']
            [1, 'Strength Sap']
            [1, 'Astonish']
            [1, 'Withdraw']
            [1, 'Aromatic Mist']
            [1, 'Mega Drain']
            [18, 'Protect']
            [24, 'Sucker Punch']
            [30, 'Aromatherapy']
            [36, 'Giga Drain']
            [42, 'Nasty Plot']
            [48, 'Shadow Ball']
            [54, 'Memento']
            [60, 'Shell Smash']
            [66, 'Curse']
        ],
    ],

    ['856',
        [
            [1, 'Confusion']
            [1, 'Play Nice']
            [5, 'Life Dew']
            [10, 'Disarming Voice']
            [15, 'Aromatherapy']
            [20, 'Psybeam']
            [25, 'Heal Pulse']
            [30, 'Dazzling Gleam']
            [35, 'Calm Mind']
            [40, 'Psychic']
            [45, 'Healing Wish']
        ],
    ],

    ['857',
        [
            [0, 'Brutal Swing']
            [1, 'Brutal Swing']
            [1, 'Confusion']
            [1, 'Play Nice']
            [1, 'Life Dew']
            [1, 'Disarming Voice']
            [15, 'Aromatherapy']
            [20, 'Psybeam']
            [25, 'Heal Pulse']
            [30, 'Dazzling Gleam']
            [37, 'Calm Mind']
            [44, 'Psychic']
            [51, 'Healing Wish']
        ],
    ],

    ['858',
        [
            [0, 'Psycho Cut']
            [1, 'Psycho Cut']
            [1, 'Brutal Swing']
            [1, 'Confusion']
            [1, 'Play Nice']
            [1, 'Life Dew']
            [1, 'Disarming Voice']
            [15, 'Aromatherapy']
            [20, 'Psybeam']
            [25, 'Heal Pulse']
            [30, 'Dazzling Gleam']
            [37, 'Calm Mind']
            [46, 'Psychic']
            [55, 'Healing Wish']
            [64, 'Magic Powder']
        ],
    ],

    ['859',
        [
            [1, 'Fake Out']
            [1, 'Confide']
            [4, 'Bite']
            [8, 'Flatter']
            [12, 'Fake Tears']
            [16, 'Assurance']
            [20, 'Swagger']
            [24, 'Sucker Punch']
            [28, 'Torment']
            [33, 'Dark Pulse']
            [36, 'Nasty Plot']
            [40, 'Play Rough']
            [44, 'Foul Play']
        ],
    ],

    ['860',
        [
            [0, 'False Surrender']
            [1, 'False Surrender']
            [1, 'Fake Out']
            [1, 'Confide']
            [1, 'Bite']
            [1, 'Flatter']
            [12, 'Fake Tears']
            [16, 'Assurance']
            [20, 'Swagger']
            [24, 'Sucker Punch']
            [28, 'Torment']
            [35, 'Dark Pulse']
            [40, 'Nasty Plot']
            [46, 'Play Rough']
            [52, 'Foul Play']
        ],
    ],

    ['861',
        [
            [0, 'Spirit Break']
            [1, 'Spirit Break']
            [1, 'False Surrender']
            [1, 'Bulk Up']
            [1, 'Power Up Punch']
            [1, 'Fake Out']
            [1, 'Confide']
            [1, 'Bite']
            [1, 'Flatter']
            [12, 'Fake Tears']
            [16, 'Assurance']
            [20, 'Swagger']
            [24, 'Sucker Punch']
            [28, 'Torment']
            [35, 'Dark Pulse']
            [40, 'Nasty Plot']
            [48, 'Play Rough']
            [56, 'Foul Play']
            [64, 'Hammer Arm']
        ],
    ],

    ['862',
        [
            [0, 'Obstruct']
            [1, 'Obstruct']
            [1, 'Cross Chop']
            [1, 'Submission']
            [1, 'Night Slash']
            [1, 'Switcheroo']
            [1, 'Pin Missile']
            [1, 'Baby Doll Eyes']
            [1, 'Tackle']
            [1, 'Leer']
            [1, 'Sand Attack']
            [1, 'Lick']
            [9, 'Snarl']
            [12, 'Headbutt']
            [15, 'Hone Claws']
            [18, 'Fury Swipes']
            [23, 'Rest']
            [28, 'Take Down']
            [35, 'Scary Face']
            [42, 'Counter']
            [49, 'Taunt']
            [56, 'Double Edge']
        ],
    ],

    ['863',
        [
            [0, 'Iron Head']
            [1, 'Iron Head']
            [1, 'Metal Burst']
            [1, 'Iron Defense']
            [1, 'Fake Out']
            [1, 'Growl']
            [1, 'Hone Claws']
            [1, 'Scratch']
            [12, 'Pay Day']
            [16, 'Metal Claw']
            [20, 'Taunt']
            [24, 'Swagger']
            [31, 'Fury Swipes']
            [36, 'Screech']
            [42, 'Slash']
            [48, 'Metal Sound']
            [54, 'Thrash']
        ],
    ],

    ['864',
        [
            [1, 'Perish Song']
            [1, 'Tackle']
            [1, 'Harden']
            [1, 'Astonish']
            [1, 'Disable']
            [15, 'Spite']
            [20, 'Ancient Power']
            [25, 'Hex']
            [30, 'Curse']
            [35, 'Strength Sap']
            [40, 'Power Gem']
            [45, 'Night Shade']
            [50, 'Grudge']
            [55, 'Mirror Coat']
        ],
    ],

    ['865',
        [
            [0, 'Iron Defense']
            [1, 'Iron Defense']
            [1, 'First Impression']
            [1, 'Peck']
            [1, 'Sand Attack']
            [1, 'Leer']
            [1, 'Fury Cutter']
            [15, 'Rock Smash']
            [20, 'Brutal Swing']
            [25, 'Detect']
            [30, 'Knock Off']
            [35, 'Defog']
            [40, 'Brick Break']
            [45, 'Swords Dance']
            [50, 'Slam']
            [55, 'Leaf Blade']
            [60, 'Final Gambit']
            [65, 'Brave Bird']
            [70, 'Meteor Assault']
        ],
    ],

    ['866',
        [
            [1, 'Fake Tears']
            [1, 'Slack Off']
            [1, 'After You']
            [1, 'Block']
            [1, 'Copycat']
            [1, 'Encore']
            [1, 'Role Play']
            [1, 'Protect']
            [1, 'Recycle']
            [1, 'Mimic']
            [1, 'Light Screen']
            [1, 'Reflect']
            [1, 'Safeguard']
            [1, 'Dazzling Gleam']
            [1, 'Misty Terrain']
            [1, 'Pound']
            [1, 'Rapid Spin']
            [1, 'Baton Pass']
            [1, 'Ice Shard']
            [12, 'Confusion']
            [16, 'Ally Switch']
            [20, 'Icy Wind']
            [24, 'Double Kick']
            [28, 'Psybeam']
            [32, 'Hypnosis']
            [36, 'Mirror Coat']
            [40, 'Sucker Punch']
            [44, 'Freeze Dry']
            [48, 'Psychic']
            [52, 'Teeter Dance']
        ],
    ],

    ['867',
        [
            [0, 'Shadow Claw']
            [1, 'Shadow Claw']
            [1, 'Scary Face']
            [1, 'Astonish']
            [1, 'Protect']
            [1, 'Haze']
            [1, 'Night Shade']
            [12, 'Disable']
            [16, 'Brutal Swing']
            [20, 'Crafty Shield']
            [24, 'Hex']
            [28, 'Mean Look']
            [32, 'Slam']
            [38, 'Curse']
            [44, 'Shadow Ball']
            [50, 'Earthquake']
            [56, 'Power Split']
            [56, 'Guard Split']
            [62, 'Destiny Bond']
        ],
    ],

    ['868',
        [
            [1, 'Tackle']
            [1, 'Aromatic Mist']
            [5, 'Sweet Kiss']
            [10, 'Sweet Scent']
            [15, 'Draining Kiss']
            [20, 'Aromatherapy']
            [25, 'Attract']
            [30, 'Acid Armor']
            [35, 'Dazzling Gleam']
            [40, 'Recover']
            [45, 'Misty Terrain']
            [50, 'Entrainment']
        ],
    ],

    ['869',
        [
            [0, 'Decorate']
            [1, 'Decorate']
            [1, 'Tackle']
            [1, 'Aromatic Mist']
            [1, 'Sweet Kiss']
            [1, 'Sweet Scent']
            [15, 'Draining Kiss']
            [20, 'Aromatherapy']
            [25, 'Attract']
            [30, 'Acid Armor']
            [35, 'Dazzling Gleam']
            [40, 'Recover']
            [45, 'Misty Terrain']
            [50, 'Entrainment']
        ],
    ],

    ['870',
        [
            [1, 'Tackle']
            [1, 'Protect']
            [5, 'Rock Smash']
            [10, 'Focus Energy']
            [15, 'Headbutt']
            [20, 'Bulk Up']
            [25, 'Endure']
            [30, 'Reversal']
            [35, 'First Impression']
            [40, 'No Retreat']
            [45, 'Iron Defense']
            [50, 'Close Combat']
            [55, 'Megahorn']
            [60, 'Counter']
        ],
    ],

    ['871',
        [
            [1, 'Peck']
            [1, 'Thunder Shock']
            [5, 'Water Gun']
            [10, 'Charge']
            [15, 'Fury Attack']
            [20, 'Spark']
            [25, 'Bubble Beam']
            [30, 'Recover']
            [35, 'Curse']
            [40, 'Electric Terrain']
            [45, 'Poison Jab']
            [50, 'Zing Zap']
            [55, 'Acupressure']
            [60, 'Discharge']
        ],
    ],

    ['872',
        [
            [1, 'Powder Snow']
            [1, 'Struggle Bug']
        ],
    ],

    ['873',
        [
            [0, 'Icy Wind']
            [1, 'Icy Wind']
            [1, 'Powder Snow']
            [1, 'Struggle Bug']
            [1, 'Helping Hand']
            [1, 'Attract']
            [4, 'Stun Spore']
            [8, 'Infestation']
            [12, 'Mist']
            [16, 'Defog']
            [21, 'Feather Dance']
            [24, 'Aurora Beam']
            [28, 'Hail']
            [32, 'Bug Buzz']
            [36, 'Aurora Veil']
            [40, 'Blizzard']
            [44, 'Tailwind']
            [48, 'Wide Guard']
            [52, 'Quiver Dance']
        ],
    ],

    ['874',
        [
            [1, 'Rock Throw']
            [1, 'Block']
            [6, 'Rock Polish']
            [12, 'Rock Tomb']
            [18, 'Gravity']
            [24, 'Stomp']
            [30, 'Stealth Rock']
            [36, 'Rock Slide']
            [42, 'Body Slam']
            [48, 'Wide Guard']
            [54, 'Heavy Slam']
            [60, 'Stone Edge']
            [66, 'Mega Kick']
        ],
    ],

    ['875',
        [
            [1, 'Powder Snow']
            [1, 'Tackle']
            [6, 'Mist']
            [12, 'Weather Ball']
            [18, 'Icy Wind']
            [24, 'Headbutt']
            [30, 'Amnesia']
            [36, 'Freeze Dry']
            [42, 'Hail']
            [48, 'Aurora Veil']
            [54, 'Surf']
            [60, 'Blizzard']
        ],
    ],

    ['876',
        [
            [1, 'Stored Power']
            [1, 'Play Nice']
            [5, 'Encore']
            [10, 'Disarming Voice']
            [15, 'Psybeam']
            [20, 'Helping Hand']
            [25, 'After You']
            [30, 'Aromatherapy']
            [35, 'Psychic']
            [40, 'Calm Mind']
            [45, 'Power Split']
            [50, 'Psychic Terrain']
            [55, 'Last Resort']
        ], //Male
        [
            [1, 'Stored Power']
            [1, 'Play Nice']
            [5, 'Baton Pass']
            [10, 'Disarming Voice']
            [15, 'Psybeam']
            [20, 'Helping Hand']
            [25, 'Follow Me']
            [30, 'Aromatherapy']
            [35, 'Psychic']
            [40, 'Calm Mind']
            [45, 'Guard Split']
            [50, 'Psychic Terrain']
            [55, 'Healing Wish']
        ], //Female
    ], //Indeedee

    ['877',
        [
            [1, 'Thunder Shock']
            [1, 'Tail Whip']
            [5, 'Leer']
            [10, 'Power Trip']
            [15, 'Quick Attack']
            [20, 'Flatter']
            [25, 'Bite']
            [30, 'Spark']
            [35, 'Torment']
            [40, 'Agility']
            [45, 'Bullet Seed']
            [50, 'Crunch']
            [55, 'Aura Wheel']
            [60, 'Thrash']
        ],
    ],

    ['878',
        [
            [1, 'Tackle']
            [1, 'Growl']
            [5, 'Rollout']
            [10, 'Rock Smash']
            [15, 'Bulldoze']
            [20, 'Stomp']
            [25, 'Iron Defense']
            [30, 'Dig']
            [35, 'Strength']
            [40, 'Iron Head']
            [45, 'Play Rough']
            [50, 'High Horsepower']
            [55, 'Superpower']
        ],
    ],

    ['879',
        [
            [0, 'Heavy Slam']
            [1, 'Heavy Slam']
            [1, 'Tackle']
            [1, 'Growl']
            [1, 'Rollout']
            [1, 'Rock Smash']
            [15, 'Bulldoze']
            [20, 'Stomp']
            [25, 'Iron Defense']
            [30, 'Dig']
            [37, 'Strength']
            [44, 'Iron Head']
            [51, 'Play Rough']
            [58, 'High Horsepower']
            [65, 'Superpower']
        ],
    ],

    ['880',
        [
            [1, 'Tackle']
            [1, 'Thunder Shock']
            [7, 'Charge']
            [14, 'Aerial Ace']
            [21, 'Ancient Power']
            [28, 'Pluck']
            [35, 'Dragon Tail']
            [42, 'Stomp']
            [49, 'Slam']
            [56, 'Discharge']
            [63, 'Bolt Beak']
            [70, 'Dragon Pulse']
            [77, 'Dragon Rush']
        ],
    ],

    ['881',
        [
            [1, 'Powder Snow']
            [1, 'Thunder Shock']
            [7, 'Charge']
            [14, 'Echoed Voice']
            [21, 'Ancient Power']
            [28, 'Pluck']
            [35, 'Avalanche']
            [42, 'Freeze Dry']
            [49, 'Slam']
            [56, 'Discharge']
            [63, 'Bolt Beak']
            [70, 'Icicle Crash']
            [77, 'Blizzard']
        ],
    ],

    ['882',
        [
            [1, 'Tackle']
            [1, 'Water Gun']
            [7, 'Protect']
            [14, 'Brutal Swing']
            [21, 'Ancient Power']
            [28, 'Bite']
            [35, 'Dragon Breath']
            [42, 'Stomp']
            [49, 'Super Fang']
            [56, 'Crunch']
            [63, 'Fishious Rend']
            [70, 'Dragon Pulse']
            [77, 'Dragon Rush']
        ],
    ],

    ['883',
        [
            [1, 'Powder Snow']
            [1, 'Water Gun']
            [7, 'Protect']
            [14, 'Icy Wind']
            [21, 'Ancient Power']
            [28, 'Bite']
            [35, 'Aurora Veil']
            [42, 'Freeze Dry']
            [49, 'Super Fang']
            [56, 'Crunch']
            [63, 'Fishious Rend']
            [70, 'Icicle Crash']
            [77, 'Blizzard']
        ],
    ],

    ['884',
        [
            [1, 'Metal Claw']
            [1, 'Leer']
            [6, 'Rock Smash']
            [12, 'Hone Claws']
            [18, 'Metal Sound']
            [24, 'Breaking Swipe']
            [30, 'Dragon Tail']
            [36, 'Iron Defense']
            [42, 'Laser Focus']
            [48, 'Dragon Claw']
            [54, 'Flash Cannon']
            [60, 'Metal Burst']
            [66, 'Hyper Beam']
        ],
    ],

    ['885',
        [
            [1, 'Astonish']
            [1, 'Infestation']
            [1, 'Quick Attack']
            [1, 'Bite']
        ],
    ],

    ['886',
        [
            [0, 'Dragon Pulse']
            [1, 'Dragon Pulse']
            [1, 'Astonish']
            [1, 'Infestation']
            [1, 'Quick Attack']
            [1, 'Bite']
            [6, 'Lock On']
            [12, 'Assurance']
            [18, 'Hex']
            [24, 'Agility']
            [30, 'Double Hit']
            [36, 'U Turn']
            [42, 'Dragon Dance']
            [48, 'Phantom Force']
            [54, 'Take Down']
            [61, 'Dragon Rush']
            [66, 'Double Edge']
            [72, 'Last Resort']
        ],
    ],

    ['887',
        [
            [0, 'Dragon Darts']
            [1, 'Dragon Darts']
            [1, 'Dragon Breath']
            [1, 'Sucker Punch']
            [1, 'Astonish']
            [1, 'Infestation']
            [1, 'Quick Attack']
            [1, 'Bite']
            [6, 'Lock On']
            [12, 'Assurance']
            [18, 'Hex']
            [24, 'Agility']
            [30, 'Double Hit']
            [36, 'U Turn']
            [42, 'Dragon Dance']
            [48, 'Phantom Force']
            [54, 'Take Down']
            [63, 'Dragon Rush']
            [70, 'Double Edge']
            [78, 'Last Resort']
        ],
    ],

    ['888',
        [
            [1, 'Sacred Sword']
            [1, 'Quick Guard']
            [1, 'Metal Claw']
            [1, 'Howl']
            [1, 'Quick Attack']
            [1, 'Bite']
            [11, 'Slash']
            [22, 'Swords Dance']
            [33, 'Iron Head']
            [44, 'Laser Focus']
            [55, 'Crunch']
            [66, 'Moonblast']
            [77, 'Close Combat']
            [88, 'Giga Impact']
        ],
    ],

    ['889',
        [
            [1, 'Metal Burst']
            [1, 'Wide Guard']
            [1, 'Metal Claw']
            [1, 'Howl']
            [1, 'Quick Attack']
            [1, 'Bite']
            [11, 'Slash']
            [22, 'Iron Defense']
            [33, 'Iron Head']
            [44, 'Laser Focus']
            [55, 'Crunch']
            [66, 'Moonblast']
            [77, 'Close Combat']
            [88, 'Giga Impact']
        ],
    ],

    ['890',
        [
            [1, 'Poison Tail']
            [1, 'Confuse Ray']
            [1, 'Dragon Tail']
            [1, 'Agility']
            [8, 'Toxic']
            [16, 'Venoshock']
            [24, 'Dragon Dance']
            [32, 'Cross Poison']
            [40, 'Dragon Pulse']
            [48, 'Flamethrower']
            [56, 'Dynamax Cannon']
            [64, 'Cosmic Power']
            [72, 'Recover']
            [80, 'Hyper Beam']
            [88, 'Eternabeam']
        ],
    ],

    ['891',
        [
            [1, 'Rock Smash']
            [1, 'Leer']
            [4, 'Endure']
            [8, 'Focus Energy']
            [12, 'Aerial Ace']
            [16, 'Scary Face']
            [20, 'Headbutt']
            [24, 'Brick Break']
            [28, 'Detect']
            [32, 'Bulk Up']
            [36, 'Iron Head']
            [40, 'Dynamic Punch']
            [44, 'Counter']
            [48, 'Close Combat']
            [52, 'Focus Punch']
        ],
    ],

    ['892',
        [
            [0, 'Wicked Blow']
            [1, 'Wicked Blow']
            [1, 'Sucker Punch']
            [1, 'Rock Smash']
            [1, 'Leer']
            [1, 'Endure']
            [1, 'Focus Energy']
            [12, 'Aerial Ace']
            [16, 'Scary Face']
            [20, 'Headbutt']
            [24, 'Brick Break']
            [28, 'Detect']
            [32, 'Bulk Up']
            [36, 'Iron Head']
            [40, 'Dynamic Punch']
            [44, 'Counter']
            [48, 'Close Combat']
            [52, 'Focus Punch']
        ], //Single Strike
        [
            [0, 'Surging Strikes']
            [1, 'Surging Strikes']
            [1, 'Aqua Jet']
            [1, 'Rock Smash']
            [1, 'Leer']
            [1, 'Endure']
            [1, 'Focus Energy']
            [12, 'Aerial Ace']
            [16, 'Scary Face']
            [20, 'Headbutt']
            [24, 'Brick Break']
            [28, 'Detect']
            [32, 'Bulk Up']
            [36, 'Iron Head']
            [40, 'Dynamic Punch']
            [44, 'Counter']
            [48, 'Close Combat']
            [52, 'Focus Punch']
        ], //Rapid Strike
    ], //Urshifu

    ['893',
        [
            [1, 'Bind']
            [1, 'Scratch']
            [6, 'Leer']
            [12, 'Vine Whip']
            [18, 'Growth']
            [24, 'Fury Swipes']
            [30, 'Scary Face']
            [36, 'Grass Knot']
            [42, 'Bite']
            [48, 'U Turn']
            [54, 'Swagger']
            [60, 'Energy Ball']
            [66, 'Synthesis']
            [72, 'Hammer Arm']
            [78, 'Thrash']
            [84, 'Power Whip']
            [90, 'Jungle Healing']
        ],
    ],

    ['894',
        [
            [1, 'Thunder Shock']
            [1, 'Rapid Spin']
            [6, 'Electroweb']
            [12, 'Ancient Power']
            [18, 'Shock Wave']
            [24, 'Thunder Wave']
            [30, 'Extreme Speed']
            [36, 'Thunder Cage']
            [42, 'Thunderbolt']
            [48, 'Magnet Rise']
            [54, 'Thrash']
            [60, 'Lock On']
            [66, 'Zap Cannon']
            [72, 'Hyper Beam']
            [78, 'Explosion']
        ],
    ],

    ['895',
        [
            [1, 'Twister']
            [1, 'Vice Grip']
            [6, 'Bite']
            [12, 'Ancient Power']
            [18, 'Dragon Breath']
            [24, 'Focus Energy']
            [30, 'Crunch']
            [36, 'Dragon Claw']
            [42, 'Hammer Arm']
            [48, 'Dragon Dance']
            [54, 'Thrash']
            [60, 'Laser Focus']
            [66, 'Dragon Energy']
            [72, 'Hyper Beam']
            [78, 'Explosion']
        ],
    ],

    ['896',
        [
            [1, 'Tackle']
            [1, 'Tail Whip']
            [6, 'Double Kick']
            [12, 'Avalanche']
            [18, 'Stomp']
            [24, 'Torment']
            [30, 'Mist']
            [36, 'Icicle Crash']
            [42, 'Take Down']
            [48, 'Iron Defense']
            [54, 'Thrash']
            [60, 'Taunt']
            [66, 'Double Edge']
            [72, 'Swords Dance']
        ],
    ],

    ['897',
        [
            [1, 'Tackle']
            [1, 'Tail Whip']
            [6, 'Double Kick']
            [12, 'Hex']
            [18, 'Stomp']
            [24, 'Confuse Ray']
            [30, 'Haze']
            [36, 'Shadow Ball']
            [42, 'Take Down']
            [48, 'Agility']
            [54, 'Thrash']
            [60, 'Disable']
            [66, 'Double Edge']
            [72, 'Nasty Plot']
        ],
    ],

    ['898',
        [
            [1, 'Pound']
            [1, 'Mega Drain']
            [1, 'Confusion']
            [1, 'Growth']
            [8, 'Life Dew']
            [16, 'Giga Drain']
            [24, 'Psyshock']
            [32, 'Helping Hand']
            [40, 'Aromatherapy']
            [48, 'Energy Ball']
            [56, 'Psychic']
            [64, 'Leech Seed']
            [72, 'Heal Pulse']
            [80, 'Solar Beam']
            [88, 'Future Sight']
        ], //Normal
        [
            [1, 'Glacial Lance']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [1, 'Double Kick']
            [1, 'Avalanche']
            [1, 'Stomp']
            [1, 'Torment']
            [1, 'Mist']
            [1, 'Icicle Crash']
            [1, 'Take Down']
            [1, 'Iron Defense']
            [1, 'Thrash']
            [1, 'Taunt']
            [1, 'Double Edge']
            [1, 'Swords Dance']
            [1, 'Pound']
            [1, 'Mega Drain']
            [1, 'Confusion']
            [1, 'Growth']
            [8, 'Life Dew']
            [16, 'Giga Drain']
            [24, 'Psyshock']
            [32, 'Helping Hand']
            [40, 'Aromatherapy']
            [48, 'Energy Ball']
            [56, 'Psychic']
            [64, 'Leech Seed']
            [72, 'Heal Pulse']
            [80, 'Solar Beam']
            [88, 'Future Sight']
        ], //Ice Rider
        [
            [1, 'Astral Barrage']
            [1, 'Tackle']
            [1, 'Tail Whip']
            [1, 'Double Kick']
            [1, 'Hex']
            [1, 'Stomp']
            [1, 'Confuse Ray']
            [1, 'Haze']
            [1, 'Shadow Ball']
            [1, 'Take Down']
            [1, 'Agility']
            [1, 'Thrash']
            [1, 'Disable']
            [1, 'Double Edge']
            [1, 'Nasty Plot']
            [1, 'Pound']
            [1, 'Mega Drain']
            [1, 'Confusion']
            [1, 'Growth']
            [8, 'Life Dew']
            [16, 'Giga Drain']
            [24, 'Psyshock']
            [32, 'Helping Hand']
            [40, 'Aromatherapy']
            [48, 'Energy Ball']
            [56, 'Psychic']
            [64, 'Leech Seed']
            [72, 'Heal Pulse']
            [80, 'Solar Beam']
            [88, 'Future Sight']
        ], //Shadow Rider
    ], //Calyrex
 ] //Levelup Moves - Current (Sword/Shield for new Pokemon only)