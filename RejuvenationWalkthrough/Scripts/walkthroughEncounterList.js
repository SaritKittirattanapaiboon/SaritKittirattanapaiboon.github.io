function encounterSet(randomEncounterNumbers, eventEncounterNumbers, otherRandomEncounterNumbers){
    var encounterLocation=document.getElementById("encountersHere");
    var fulltext="";
    var actualPokemonNumber;
    var pokemonFormNumber;
    var currentRandomLoc;
    var curPokNum;
    var exceptionsLoc=[4,8,9,10,11];
    for (var i=0; i<randomEncounterNumbers.length; i++){   
        currentRandomLoc=RandomEncounters[randomEncounterNumbers[i]];
        fulltext+=walkthroughRandomEncountersStart[randomEncounterNumbers[i]][0];
        for (var curPok=2; curPok<currentRandomLoc.length; curPok++){
            if(currentRandomLoc[curPok][0].length>3){
                actualPokemonNumber=currentRandomLoc[curPok][0].substr(0,3);
                actualPokemonNumber=parseInt(actualPokemonNumber);
                pokemonFormNumber=currentRandomLoc[curPok][0].substr(currentRandomLoc[curPok][0].length-1,1);
                pokemonFormNumber=parseInt(pokemonFormNumber);
            } else {
                actualPokemonNumber=parseInt(currentRandomLoc[curPok][0]);
                pokemonFormNumber=0;
            }
            actualPokemonNumber=actualPokemonNumber-1;
            pokemonFormNumber+=7;
            fulltext+=`<tr><th class="wildPokemonTooltipPosition"><span class="wildPokemonName">`;
            fulltext+=`<span class="type1" style="background-color: var(--type`+BattlePokedex[actualPokemonNumber][pokemonFormNumber][1][0]+`);"></span>`+`<span class="type2" style="background-color: var(--type`+BattlePokedex[actualPokemonNumber][pokemonFormNumber][1][1]+`);"></span>`;
            fulltext+=`<img class="encounterPokemonImage" src="../../images/PokemonSprites/`+currentRandomLoc[curPok][0]+`.png"><br>`;
            fulltext+=currentRandomLoc[curPok][0]+" "+BattlePokedex[actualPokemonNumber][pokemonFormNumber][0];
            fulltext+=`<span class="wildPokemonTooltip">`+currentRandomLoc[curPok][2]+`</span></th>`;
            for (var j=1; j<currentRandomLoc[1].length; j++){ //Fix All Day
                var typeofencounter=currentRandomLoc[1][j];
                if(typeofencounter=="All Day"){
                    typeofencounter='allday';
                } else if (typeofencounter=="Morning & Daytime"){
                    typeofencounter='daytime';
                }
                if(currentRandomLoc[curPok][1][j-1]=="0%"){
                    fulltext+=`<td>`+currentRandomLoc[1][j]+`</td>`;
                } else {
                    fulltext+=`<td style="background-color:  var(--`+typeofencounter.toLowerCase()+`Available);">`+currentRandomLoc[1][j]+`<br>`+currentRandomLoc[curPok][1][j-1]+`</td>`;
                }
            }
            fulltext+=`</tr>`;
        }
        fulltext+=`</table></div>`
    } //Random Encounters
    for (var i=0; i<eventEncounterNumbers.length; i++){
        if(checkExceptions(i,eventEncounterNumbers)){
            fulltext+=walkthroughOtherEncountersList[eventEncounterNumbers[i][0]][eventEncounterNumbers[i][1]];
            continue; //Skip everything below
        }
        fulltext+=walkthroughOtherEncountersList[eventEncounterNumbers[i][0]][0];
        for (var j=0; j<walkthroughOtherEncountersList[eventEncounterNumbers[i][0]][eventEncounterNumbers[i][1]].length;j++){
            curPok=walkthroughOtherEncountersList[eventEncounterNumbers[i][0]][eventEncounterNumbers[i][1]][j];
            if(EventEncounters[eventEncounterNumbers[i][0]][curPok+1][0].length>3){
                actualPokemonNumber=EventEncounters[eventEncounterNumbers[i][0]][curPok+1][0].substr(0,3);
                actualPokemonNumber=parseInt(actualPokemonNumber);
                pokemonFormNumber=EventEncounters[eventEncounterNumbers[i][0]][curPok+1][0].substr(EventEncounters[eventEncounterNumbers[i][1]][curPok+1][0].length-1,1);
                pokemonFormNumber=parseInt(pokemonFormNumber);
            } else {
                actualPokemonNumber=parseInt(EventEncounters[eventEncounterNumbers[i][0]][curPok+1][0]);
                pokemonFormNumber=0;
            }
            actualPokemonNumber=actualPokemonNumber-1;
            pokemonFormNumber+=7;

            fulltext+=`<tr><th class="wildPokemonTooltipPosition"><span class="wildPokemonName">`;
            fulltext+=`<span class="type1" style="background-color: var(--type`+BattlePokedex[actualPokemonNumber][pokemonFormNumber][1][0]+`);"></span>`+`<span class="type2" style="background-color: var(--type`+BattlePokedex[actualPokemonNumber][pokemonFormNumber][1][1]+`);"></span>`;
            fulltext+=`<img class="encounterPokemonImage" src="../../images/PokemonSprites/`+EventEncounters[eventEncounterNumbers[i][0]][curPok+1][0]+`.png"><br>`;
            fulltext+=EventEncounters[eventEncounterNumbers[i][0]][curPok+1][0]+" "+BattlePokedex[actualPokemonNumber][pokemonFormNumber][0];
            fulltext+=`<span class="wildPokemonTooltip">`+EventEncounters[eventEncounterNumbers[i][0]][curPok+1][2]+`</span></th>`;
            fulltext+='<td>'+EventEncounters[eventEncounterNumbers[i][0]][curPok+1][1][0]+'</td>';
            if(EventEncounters[eventEncounterNumbers[i][0]][curPok+1][1][1].search("Night")!=-1){
                fulltext+='<td style="background-color: var(--nightAvailable);">';
            } else if (EventEncounters[eventEncounterNumbers[i][0]][curPok+1][1][1].search("Day")!=-1){
                fulltext+='<td style="background-color: var(--daytimeAvailable);">';
            } else if (EventEncounters[eventEncounterNumbers[i][0]][curPok+1][1][1].search("Morning")!=-1){
                fulltext+='<td style="background-color: var(--morningAvailable);">';
            }
            else {
                fulltext+='<td style="background-color: var(--alldayAvailable);">';
            }
            fulltext+=EventEncounters[eventEncounterNumbers[i][0]][curPok+1][1][1]+'</td>'
        }
        fulltext+="</table></div>"
    } //Event Encounters
    if(otherRandomEncounterNumbers!=null){
        for(var i=0; i<otherRandomEncounterNumbers.length; i++){
            fulltext+=OtherRandomEncounters[otherRandomEncounterNumbers[i]][1];
        }
    } //Other Randoms such as Rock Smash, Fishing, Headbutt
    
    encounterLocation.innerHTML=fulltext;
}

function checkExceptions(curCheck,eventEncounterNumbers){
    var exceptionsLoc=[4,8,9,10,11];
    for (var j=0; j<exceptionsLoc.length; j++){
        if(eventEncounterNumbers[curCheck][0]==exceptionsLoc[j]){
            return true;
        }
    }
    return false;
}

var walkthroughOtherEncountersList=[
    [ //Code 000 Oceana Pier
    `<div id="OceanaPier" class="EncounterPopup">
        <span class="close" id="OceanaPierClose">&times;</span>
        <p class="encounterDetails" style="text-align:center;">
        Oceana Pier Pokemon
        </p>
        <table class="encounterPopupContent">
        <tr>
            <th>Pokemon Name</th>
            <td>Location</td>
            <td>Other Requirements</td>
        </tr>`,
        [0,1], //Initial (01)
        [0,1,2], //Add Litleo (02)
    ],

    [ //Code 001 Gearen Events
    `<div id="GearenEvents" class="EncounterPopup">
        <span class="close" id="EventsClose">&times;</span>
        <p class="encounterDetails" style="text-align:center;">
        Event Pokemon - Gained through Other Means
        </p>
        <table class="encounterPopupContent">
        <tr>
            <th>Pokemon Name</th>
            <td>Location</td>
            <td>Other Requirements</td>
        </tr>
        `,
        [0,1], //Left Side Only (01)
        [0,1,4,5,3], //Right Side Only (02)
        [0,1,2,4,5,3], //Both Left and Right Sides (03)
        [0,1,2,4,5,3,6,7], //Help Quest (04)
        [0,1,2,4,5,3,6,7,8], //+Blitzle (05)
        [0,1,2,4,5,3,6,7,8,9], //+Budew (06)
    ],

    [ //Code 002 Chrisola Hotel Events
    `<div id="HotelEvents" class="EncounterPopup">
        <span class="close" id="HotelEventsClose">&times;</span>
        <p class="encounterDetails" style="text-align:center;">
        Chrisola Hotel Casino and Event Pokemon
        </p>
        <table class="encounterPopupContent">
        <tr>
            <th>Pokemon Name</th>
            <td>Location</td>
            <td>Other Requirements</td>
        </tr>
       `,
       [0,1,2,3], //Hotel Casino Only (01)
       [0,1,2,3,4], //+Mincinno (02)
    ],

    [ //Code 003 Gearen Sewers (Others)
    ],

    [ //Code 004 Goldenwood Events
    `<div id="GoldenwoodEvents" class="EncounterPopup">
        <span class="close" id="GoldenwoodEventsClose">&times;</span>
        <p class="encounterDetails" style="text-align:center;">
          Route 1/Goldenwood Event Pokemon - Gained through Other Means
        </p>
        <table class="encounterPopupContent">
          <tr>
            <th>Pokemon Name</th>
            <td>Location</td>
            <td>Other Requirements</td>
          </tr>
          
          <tr>
            <th class="wildPokemonTooltipPosition">
              <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typeNormal);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/293.png">
                <br>
                #293 Whismur
                <span class="wildPokemonTooltip">
                  Whismur as a Pokemon is not good. It has decent Attack and Special Attack, but it's Speed and Defenses are so low that it will often fall before getting a hit off. To add insult to injury, it's movepool is also very poor until it evolves into a Loudred. The good news is, it does evolve into Loudred early, at level 20, and once it has Uproar it can put dents into a lot of teams, even Ghost types if you manage to get one with the ability Scrappy. Loudred is weak against the second gym, which can cause problems, but if you can work around and manage to get Exploud then you have one of the few extremely powerful Boomburst users. It'll just take a while to get there.
                </span>
              </span>
            </th>
            <td>Route 1</td>
            <td style="background-color: var(--alldayAvailable);">Give Gourmet Treat</td>
          </tr>

          <tr>
            <th class="wildPokemonTooltipPosition">
              <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typeBug);"></span>
                <span class="type2" style="background-color: var(--typeGrass);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/540.png">
                <br>
                #540 Sewaddle
                <span class="wildPokemonTooltip">
                  Given its typing, one wouldn't expect Sewaddle to be of much use. It seems to be weak to virtually every type, making switching it in difficult. Sewaddle's advantage, like a lot of Bug types, comes with its ability to be fully evolved very early, with level 21 being the earliest. As a Sewaddle, Bug Bite and Razor Leaf are perfectly serviceable moves to take advantage of its decent Attack stat. Once it evolves into a Swadloon, it will automatically learn Protect, and evolving into Leavanny will grant it the move Slash. With these three moves, Leavanny can become a menace for the first three to four badges, but its weaknesses will start to catch up with it before long.
                </span>
              </span>
            </th>
            <td>Goldenwood Cave</td>
            <td style="background-color: var(--alldayAvailable);">Defeat Culvier Clans Mars</td>
          </tr>
          
        </table>
    </div>`, //Code 000 Goldenwood Events Initial

    `<div id="GoldenwoodShadows" class="EncounterPopup">
        <span class="close" id="GoldenwoodShadowsClose">&times;</span>
        <p class="encounterDetails" style="text-align:center;">
        Catchable Shadow Pokemon
        </p>
        <table class="encounterPopupContent">
        <tr>
            <th>Pokemon Name</th>
            <td>Unique Move(s) Relearned</td>
            <td>Trainer Name</td>
        </tr>
        
        <tr>
            <th class="wildPokemonTooltipPosition">
            <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typeShadow);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/052_shadow.png">
                <br>
                Shadow Meowth
            </span>
            </th>
            <td>Beat Up, Glare</td>
            <td>Team Xen Nickoli</td>
        </tr>

        <tr>
            <th class="wildPokemonTooltipPosition">
            <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typeShadow);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/456_shadow.png">
                <br>
                Shadow Finneon
            </span>
            </th>
            <td>Headbutt, Tail Glow</td>
            <td>Team Xen Leela</td>
        </tr>

        <tr>
            <th class="wildPokemonTooltipPosition">
            <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typeShadow);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/331_shadow.png">
                <br>
                Shadow Cacnea
            </span>
            </th>
            <td>Toxic Spikes</td>
            <td>Team Xen Henrie</td>
        </tr>

        <tr>
            <th class="wildPokemonTooltipPosition">
            <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typeShadow);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/088_1_shadow.png">
                <br>
                Shadow Alolan Grimer
            </span>
            </th>
            <td>Aromatherapy</td>
            <td>Xen Executive Zetta</td>
        </tr>
        </table>
    </div>`, //Code 001 Goldenwood Shadows
    ], //SPECIAL CASE - SHADOWS & ALSO ROUTE 1

    [ //Code 005 Route 2
    ],

    [ //Code 006 Amethyst Cave
    `<div id="AmethystEvents" class="EncounterPopup">
        <span class="close" id="AmethystEventsClose">&times;</span>
        <p class="encounterDetails" style="text-align:center;">
        Amethyst Cave - Event Encounters
        </p>
        <table class="encounterPopupContent">
        <tr>
            <th>Pokemon Name</th>
            <td>Location</td>
            <td>Other Requirements</td>
        </tr>`, //Code 000 Ameythyst Other Encounters (Fishing)
        [0,3], //Lunatone and Klink (01)
        [0,1,3], //+Solrock (02)
        [0,1,2,3], //+Houndour (03)
    ],

    [ //Code 007 Sheridan Village Arena
    `<div id="SheridanEvents" class="EncounterPopup">
        <span class="close" id="SheridanEventsClose">&times;</span>
        <p class="encounterDetails" style="text-align:center;">
        Event Pokemon
        </p>
        <table class="encounterPopupContent">
        <tr>
            <th>Pokemon Name</th>
            <td>Location</td>
            <td>Other Requirements</td>
        </tr>`, //Code 000 Sheriden Village Events Initial
        [0,1], //Sheridan Village
        [0,1,2,3], //Sheridan Village + Help Plaza
    ],

    [ //Code 008 Caratos Mountain
    `<div id="CaratosMountainOthers" class="EncounterPopup">
        <span class="close" id="CaratosMountainOthersClose">&times;</span>
        <p class="encounterDetails" style="text-align:center;">
        Caratos Mountain
        </p>
        <table class="encounterPopupContent">
        <tr>
            <th>Pokemon Name</th>
            <td colspan="2">Obtained Method + Rarity</td>
        </tr>

        <tr>
            <th class="wildPokemonTooltipPosition">
            <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typeFire);"></span>
                <span class="type2" style="background-color: var(--typeGround);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/322.png">
                <br>
                #322 Numel
                <span class="wildPokemonTooltip">
                Numel's slow speed and lacking defenses means that it will be one or two shot by nearly anything that has an offensive presence. It does have a good Special Attack stat, and learns very powerful moves early with Lava Plume at level 22 and Earth Power at level 26, but it likely won't survive long enough to deal consistent damage. Once it evolves into a Camerupt at level 33 though, it will have enough bulk to dish out some damage before falling. It's typing is decent, with only two weaknesses albeit to common types in Ground and Water. If you can get it to a Camerupt, then this Pokemon is definitely viable.
                </span>
            </th>
            <td style="background-color: var(--fishingAvailable);">Old Rod<br>70%</td>
            <td>Good Rod</td>
        </tr>

        <tr>
            <th class="wildPokemonTooltipPosition">
            <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typeFire);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/218.png">
                <br>
                #218 Slugma
                <span class="wildPokemonTooltip">
                Slugma is another very slow Fire-type Pokemon that doesn't have the defenses to take hits, especially early on. If it evolves, it will gain a lot of bulk, but also more common weaknesses to Fighting, Rock, Water, and Ground, the latter two its 4x weak to. It evolves very late, at level 38 which is 3 gyms away from this point, making Slugma not viable at the moment. It does get Shell Smash on evolution, which when combined with Lava Plume and Rock Slide can make it a decent damage threat while still being bulky, as long as you avoid its large weaknesses.
                </span>
            </th>
            <td style="background-color: var(--fishingAvailable);">Old Rod<br>30%</td>
            <td style="background-color: var(--fishingAvailable);">Good Rod<br>100%</td>
        </tr>
        </table>
    </div>`, //Caratos Mountain (Volcano) Other Encounters (Old Rod, Good Rod)

    `<div id="CaratosShadows" class="EncounterPopup">
        <span class="close" id="CaratosShadowsClose">&times;</span>
        <p class="encounterDetails" style="text-align:center;">
        Catchable Shadow Pokemon
        </p>
        <table class="encounterPopupContent">
        <tr>
            <th>Pokemon Name</th>
            <td>Unique Move(s) Relearned</td>
            <td>Trainer Name</td>
        </tr>
        
        <tr>
            <th class="wildPokemonTooltipPosition">
            <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typeShadow);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/077_shadow.png">
                <br>
                Shadow Ponyta
            </span>
            </th>
            <td>Fell Stinger</td>
            <td>Security Component SEC (First Battle)</td>
        </tr>

        <tr>
            <th class="wildPokemonTooltipPosition">
            <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typeShadow);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/582_shadow.png">
                <br>
                Shadow Vanillite
            </span>
            </th>
            <td>Will-O-Wisp</td>
            <td>Team Xen Zeneth</td>
        </tr>

        <tr>
            <th class="wildPokemonTooltipPosition">
            <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typeShadow);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/438_shadow.png">
                <br>
                Shadow Bonsly
            </span>
            </th>
            <td>Shift Gear, Tackle</td>
            <td>Team Xen Timothy</td>
        </tr>

        <tr>
            <th class="wildPokemonTooltipPosition">
            <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typeShadow);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/195_shadow.png">
                <br>
                Shadow Quagsire
            </span>
            </th>
            <td>Flame Burst, Refresh</td>
            <td>Security Component SEC (Third Battle)</td>
        </tr>
        </table>
    </div>`, //Caratos (Volcano) Shadows
    ], //SPECIAL CASE - SHADOWS AND MADELIS LABORATORY

    [ //Code 009 Hidden Library
    `<div id="HiddenLibraryEncounters" class="EncounterPopup">
        <span class="close" id="HiddenLibraryEncountersClose">&times;</span>
        <p class="encounterDetails" style="text-align:center;">
        Hidden Library
        </p>
        <table class="encounterPopupContent">
        <tr>
            <th>Pokemon Name</th>
            <td colspan>Obtained Method + Rarity</td>
        </tr>
        
        <tr>
            <th class="wildPokemonTooltipPosition">
            <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typePsychic);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/201.png">
                <br>
                #201 Unown
                <span class="wildPokemonTooltip">
                Unown is probably one of the worst Pokemon to use over all. It's stats are all mediocre, losing to most if not all other no-evolution Pokemon, and it can only learn one move: Hidden Power. Granted, Hidden Power can be any type, but you won't be able to choose what type it is so finding one with the type you want is difficult. It does give decent Exp though, so it can be used for training.
                </span>
            </th>
            <td style="background-color: var(--alldayAvailable);">Random Encounter (100%)</td>
        </tr>

        <tr>
            <th class="wildPokemonTooltipPosition">
            <span class="wildPokemonName">
                <span class="type1" style="background-color: var(--typePsychic);"></span>
                <img class="encounterPokemonImage" src="../../images/PokemonSprites/605.png">
                <br>
                #605 Elgyem
                <span class="wildPokemonTooltip">
                Elgyem has very poor initial stats, but it does learn Psybeam early at level 15. It also gets Simple Beam at level 29, which is useful for getting rid of annoying abilities. Other than that, it is weaker than other Psychic-type Pokemon available right now, and it doesn't evolve until the faraway level of 42. Once it evolves though, it gains a lot of Special stats, and its physical Defense won't be too shabby either. Soon after it evolves, it can learn Calm Mind at level 45 and Recover at level 50, making it a very bulky setup sweeper if played right. That being said, that level is far away, and for the moment there are better Psychic-types than Elgyem.
                </span>
            </th>
            <td style="background-color: var(--alldayAvailable);">Random Encounter (100%)</td>
        </tr>
        </table>
    </div>`,
    ], //SPECIAL CASE - UNOWN AND ELGYEM

    [ //Code 010 Mirage Woods - Zubat
        `<div id="MirageWoodEventEncounters" class="EncounterPopup">
            <span class="close" id="MirageWoodEventEncountersClose">&times;</span>
            <p class="encounterDetails" style="text-align:center;">
            Mirage Woods Event Encounters
            </p>
            <table class="encounterPopupContent">
            <tr>
                <th>Pokemon Name</th>
                <td colspan>Obtained Method</td>
            </tr>
            
            <tr>
                <th class="wildPokemonTooltipPosition">
                <span class="wildPokemonName">
                    <span class="type1" style="background-color: var(--typePoison);"></span>
                    <span class="type2" style="background-color: var(--typeFlying);"></span>
                    <img class="encounterPokemonImage" src="../../images/PokemonSprites/041.png">
                    <br>
                    #041 Zubat
                    <span class="wildPokemonTooltip">
                    Despite its reputation as an annoyance in caves, Zubat and subsequently Crobat is a very good Pokemon. It can evolve into Golbat when you obtain it, and with some time it can evolve into Crobat via friendship. As a Crobat, it instantly learns the move Cross Poison, and it has great Attack and amazing Speed to back it up. It'll learn Bite at level 34, but after that there's a drought of moves until Leech Life at level 69. That being said, Crobat does also have support options in terms of moves. With a Heart Scale, it can learn Tailwind to help your team outspeed your opponents, or Toxic to spread status. Naturally, it will learn Quick Guard as a Zubat at level 20 to stop priority abusers and Haze as a Crobat at level 41 to stop set-up sweepers. It also has a surprising amount of bulk all around, making it a possible tank in the front line with its really good defensive typing.
                    </span>
                </th>
                <td style="background-color: var(--alldayAvailable);">Defeat Crobat in the cave in the research area<br>Requires Flash</td>
            </tr>
            </table>
        </div>`,
    ],

    [ //Code 011 Chrysalis Courtyard - Gothita
        `<div id="CourtyardEventEncounters" class="EncounterPopup">
            <span class="close" id="CourtyardEventEncountersClose">&times;</span>
            <p class="encounterDetails" style="text-align:center;">
                Crysalis Courtyard Event Encounters
            </p>
            <table class="encounterPopupContent">
            <tr>
                <th>Pokemon Name</th>
                <td colspan>Obtained Method</td>
            </tr>
            
            <tr>
                <th class="wildPokemonTooltipPosition">
                <span class="wildPokemonName">
                    <span class="type1" style="background-color: var(--typePsychic);"></span>
                    <img class="encounterPokemonImage" src="../../images/PokemonSprites/574.png">
                    <br>
                    #574 Gothita
                    <span class="wildPokemonTooltip">
                    Gothita itself has pretty low stats, and even after evolving to Gothorita at level 32 its stats aren't particularly high for that point in the game, but it can hold its own against Pokemon that are weak to Psychic. The main prize though is Gothitelle at level 41, meaning you can get it before the level limit using a Rare Candy then Reverse Candy. Gothitelle effectively functions as a defensive Psychic type, as it has very high Special Defense and a good HP pool. It's Special Attack is good enough that it's not completely without offensive power. It also comes with a large variety of stat-lowering moves that can be used to weaken the opponent, such as Charm and Fake Tears. With its already high Special Defense, Charm means that it will be able to also wall physical threats. It does have low speed though, so it will often have to take a hit before it can start crippling the enemy. Gothitelle is definitely worth a consideration if you want to use a stalling strategy, but do not that it'll be another two gyms before we can actually get a Gothitelle.
                    </span>
                </th>
                <td style="background-color: var(--alldayAvailable);">Interact with the Gardevoir statue during Indriad's trail<br>Requires Ancient Book from the Sheridan Help Request: The Hidden Library 2</td>
            </tr>
            </table>
        </div>`,
    ],
]

var walkthroughRandomEncountersStart=[
    [`<div id="GearenGrass" class="EncounterPopup">
    <span class="close" id="GearenGrassClose">&times;</span>
    <p class="encounterDetails">
    East Gearen City Grass
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td colspan="3">Time of Day + Rarity</td>
    </tr>`], //Random Gearen Grass (00)

    [`<div id="HotelEncounters" class="EncounterPopup">
    <span class="close" id="HotelEncountersClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Chrisola Hotel Rooftop Encounters
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td>Location</td>
    </tr>`], //Random Chrisola Hotel Rooftop (01)

    [`<div id="GearenPark" class="EncounterPopup">
    <span class="close" id="GearenParkClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Gearen Park Grass
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td colspan="3">Time of Day + Rarity</td>
    </tr>`], //Random Gearen Park (02)

    [`<div id="GearenSewersEncounters" class="EncounterPopup">
    <span class="close" id="GearenSewersEncountersClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Gearen Sewers
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td colspan="3">Time of Day + Rarity</td>
    </tr>`], //Random Gearen Sewers (03)

    [`<div id="Route1Grass" class="EncounterPopup">
    <span class="close" id="Route1GrassClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Route 1 Grass
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td colspan="3">Time of Day + Rarity</td>
    </tr>`], //Random Route 1 Grass (04)

    [`<div id="GoldenwoodForestEnc" class="EncounterPopup">
    <span class="close" id="GoldenwoodForestEncClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Goldenwood Forest Grass
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td colspan="3">Time of Day + Rarity</td>
    </tr>`], //Random Goldenwood Forest Grass Low Level (05)

    [`<div id="GoldenwoodCaveEnc" class="EncounterPopup">
    <span class="close" id="GoldenwoodCaveEncClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Goldenwood Cave
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td colspan="3">Time of Day + Rarity</td>
    </tr>`], //Random Goldenwood Cave 1F (06)

    [`<div id="Route2Grass" class="EncounterPopup">
    <span class="close" id="Route2GrassClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Route 2 Grass
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td colspan="3">Time of Day + Rarity</td>
    </tr>`], //Random Route 2 Grass (07)

    [`<div id="AmethystCaveEncounters" class="EncounterPopup">
    <span class="close" id="AmethystCaveEncountersClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Amethyst Cave
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td colspan="3">Time of Day + Rarity</td>
    </tr>`], //Random Amethyst Cave (08)

    [`<div id="AmethystGrottoEncounters" class="EncounterPopup">
    <span class="close" id="AmethystGrottoEncountersClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Amethyst Grotto
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td>Time of Day + Rarity</td>
    </tr>`], //Random Amethyst Grotto (09)

    [`<div id="SheridanVillageArenaGrass" class="EncounterPopup">
    <span class="close" id="SheridanVillageArenaGrassClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Sheridan Village & Sheridan Arena Grass
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td colspan="2">Time of Day + Rarity</td>
    </tr>`], //Random Sheridan Village/Arena Grass (10)

    [`<div id="SpringPurification" class="EncounterPopup">
    <span class="close" id="SpringPurificationClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Spring of Purification
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td>Time of Day + Rarity</td>
    </tr>`], //Random Spring of Purification (11)

    [`<div id="CaratosMountain" class="EncounterPopup">
    <span class="close" id="CaratosMountainClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Caratos Mountain
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td colspan="3">Obtained Method + Rarity</td>
    </tr>`], //Random Caratos Mountain (12)

    [`<div id="PomPomMeadowEncounters" class="EncounterPopup">
    <span class="close" id="PomPomMeadowEncountersClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Pom Pom Meadow
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td>Time of Day + Rarity</td>
    </tr>`], //Random Pom Pom Meadows Grass (13)

    [`<div id="Route3Encounters" class="EncounterPopup">
    <span class="close" id="Route3EncountersClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Route 3 Grass
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td>Time of Day + Rarity</td>
    </tr>`], //Random Route 3 Grass (14)

    [`<div id="PhasialCaveEncounters" class="EncounterPopup">
    <span class="close" id="PhasialCaveEncountersClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Phasial Cave Random Encounters
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td>Time of Day + Rarity</td>
    </tr>`], //Random Phasial Cave (15)

    [`<div id="MirageWoodsEncounters" class="EncounterPopup">
    <span class="close" id="MirageWoodsEncountersClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Mirage Woods Grass
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td>Time of Day + Rarity</td>
    </tr>`], //Random Mirage Woods Grass (16)

    [`<div id="CrysalisCourtyardEncounters" class="EncounterPopup">
    <span class="close" id="CrysalisCourtyardEncountersClose">&times;</span>
    <p class="encounterDetails" style="text-align:center;">
    Mirage Woods Grass
    </p>
    <table class="encounterPopupContent">
    <tr>
        <th>Pokemon Name</th>
        <td>Time of Day + Rarity</td>
    </tr>`], //Random Crysalis Courtyard Grass (17)
]