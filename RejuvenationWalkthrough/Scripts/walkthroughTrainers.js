function trainersSet(locationCode, idName){
    var trainerHereLocation=document.getElementById("trainersHere")
    var fulltext="";
    var temptext;
    var pokemonList;
    var pokemonList2; //For Doubles
    var pokemonIDString;
    var moves;
    var movesUsed;
    
    for(var i=0; i<walkthroughTrainerList[locationCode].length; i++){
      if(walkthroughTrainerList[locationCode][i][1]=='Special'){
        continue; //Skip Special Trainers
      }
        temptext=walkthroughTrainerList[locationCode][i][0].replaceAll(' ','');
        temptext=temptext.replaceAll('&','');
        fulltext+='<div id="'+temptext+'" class="TrainerPopup">';
        fulltext+='<span class="close" id="'+temptext+'Close">&times;</span><p class="normalTrainerTitle" style="text-align:center;">'+walkthroughTrainerList[locationCode][i][0]+'</p><table class="trainerPopupContent">';
        if(walkthroughTrainerList[locationCode][i][2]==1){ //Single Battles
          pokemonList=walkthroughTrainerList[locationCode][i][3];
            for(var pokemonNum=0; pokemonNum<pokemonList.length; pokemonNum++){
                movesUsed=0;
                pokemonIDNum=pokemonList[pokemonNum][0];
                pokemonFormNum=pokemonList[pokemonNum][1];
                pokemonLevelNum=pokemonList[pokemonNum][2];
                pokemonIDString=String(pokemonIDNum);
                moves=fourPokemonMoves(pokemonIDNum,pokemonFormNum,pokemonLevelNum);

                ///Picture and Name
                if(pokemonIDString.length==1){
                    pokemonIDString="00"+pokemonIDString;
                } else if (pokemonIDString.length==2){
                    pokemonIDString="0"+pokemonIDString;
                }
                if(pokemonFormNum==0){
                    temptext='<tr><th rowspan="4"><img class="trainerPokemonImage" src="../../images/PokemonSprites/'+pokemonIDString+'.png"><br>'
                } else {
                    temptext='<tr><th rowspan="4"><img class="trainerPokemonImage" src="../../images/PokemonSprites/'+pokemonIDString+'_'+pokemonFormNum+'.png"><br>'
                }
                temptext+=BattlePokedex[pokemonIDNum-1][pokemonFormNum+7][0]+", Level "+pokemonLevelNum+'</th>';

                ///Type
                typeAmount=BattlePokedex[pokemonIDNum-1][pokemonFormNum+7][1].length;
                if(typeAmount==1){
                    temptext+='<td rowspan="4">'+BattlePokedex[pokemonIDNum-1][pokemonFormNum+7][1][0]+'</td>'
                } else {
                    temptext+='<td rowspan="2">'+BattlePokedex[pokemonIDNum-1][pokemonFormNum+7][1][0]+'</td>'
                }
                if(movesUsed<moves.length){ //Move 1
                    movesUsed+=1;
                    temptext+='<td>'+moves[moves.length-movesUsed]+'</td></tr>';
                }
                if(movesUsed<moves.length){ //Move 2
                    movesUsed+=1;
                    temptext+='<tr><td>'+moves[moves.length-movesUsed]+'</td></tr>';
                } else {
                    temptext+='<tr><td>---</td></tr>';
                }

                temptext+='<tr>';
                if(typeAmount==2){
                    temptext+='<td rowspan="2">'+BattlePokedex[pokemonIDNum-1][pokemonFormNum+7][1][1]+'</td>'
                }
                if(movesUsed<moves.length){ //Move 3
                    movesUsed+=1;
                    temptext+='<td>'+moves[moves.length-movesUsed]+'</td></tr>';
                } else {
                    temptext+='<td>---</td></tr>';
                }
                if(movesUsed<moves.length){ //Move 4
                    movesUsed+=1;
                    temptext+='<tr><td>'+moves[moves.length-movesUsed]+'</td></tr>';
                } else {
                    temptext+='<tr><td>---</td></tr>';
                }
                fulltext+=temptext;
            }
            fulltext+='<tr><td class="moneyGained" colspan="3">Reward: <img src="../../images/PokeDollar.png">'+walkthroughTrainerList[locationCode][i][1]+'</td></tr></table></div>';
        }
        else { //Double Battles
          pokemonList=walkthroughTrainerList[locationCode][i][3];
          pokemonList2=walkthroughTrainerList[locationCode][i][4];
          secondPokemonExists=false;
          for(var setNum=0; setNum<pokemonList.length; setNum++){
            movesUsed=0; movesUsed2=0;
            if(pokemonList[setNum][0]=="---"){
              temptext='<tr><th rowspan="4">---</th><td rowspan="4">---</td><td>---</td>';
              typeAmount=1;
              moves=['---','---','---','---'];
              movesUsed++;
            }
            else {
              pokemonIDNum=pokemonList[setNum][0];
              pokemonFormNum=pokemonList[setNum][1];
              pokemonLevelNum=pokemonList[setNum][2];
              pokemonIDString=String(pokemonIDNum);
              moves=fourPokemonMoves(pokemonIDNum,pokemonFormNum,pokemonLevelNum);
              for(var movesMissing=moves.length; movesMissing<4; movesMissing++){
                moves.unshift('---');
              }
              typeAmount=BattlePokedex[pokemonIDNum-1][pokemonFormNum+7][1].length;
              if(pokemonIDString.length==1){
                  pokemonIDString="00"+pokemonIDString;
              } else if (pokemonIDString.length==2){
                  pokemonIDString="0"+pokemonIDString;
              }
              temptext='<tr><th rowspan="4"><img class="trainerPokemonImage" src="../../images/PokemonSprites/'+getImageCode(pokemonIDString,pokemonFormNum)+'.png"><br>'+BattlePokedex[pokemonIDNum-1][pokemonFormNum+7][0]+", Level "+pokemonLevelNum+'</th>';
              if(typeAmount==1){
                temptext+='<td rowspan="4">'+BattlePokedex[pokemonIDNum-1][pokemonFormNum+7][1][0]+'</td>';
              } else {
                temptext+='<td rowspan="2">'+BattlePokedex[pokemonIDNum-1][pokemonFormNum+7][1][0]+'</td>';
              }
              movesUsed++;
              temptext+='<td>'+moves[moves.length-movesUsed]+'</td>';
            }
            // IF Second Pokemon exists
            if(pokemonList2.length>=setNum+1){
              secondPokemonExists=true;
              movesUsed2=0;
              pokemonIDNum2=pokemonList2[setNum][0];
              pokemonFormNum2=pokemonList2[setNum][1];
              pokemonLevelNum2=pokemonList2[setNum][2];
              pokemonIDString2=String(pokemonIDNum2);
              moves2=fourPokemonMoves(pokemonIDNum2,pokemonFormNum2,pokemonLevelNum2);
              typeAmount2=BattlePokedex[pokemonIDNum2-1][pokemonFormNum2+7][1].length;
              for(var movesMissing=moves2.length; movesMissing<4; movesMissing++){
                moves2.unshift('---');
              }

              if(pokemonIDString2.length==1){
                  pokemonIDString2="00"+pokemonIDString2;
              } else if (pokemonIDString2.length==2 ){
                  pokemonIDString2="0"+pokemonIDString2;
              }
              temptext+='<th rowspan="4"><img class="trainerPokemonImage" src="../../images/PokemonSprites/'+getImageCode(pokemonIDString2,pokemonFormNum2)+'.png"><br>'+BattlePokedex[pokemonIDNum2-1][pokemonFormNum2+7][0]+", Level "+pokemonLevelNum2+'</th>';
              if(typeAmount2==1){
                temptext+='<td rowspan="4">'+BattlePokedex[pokemonIDNum2-1][pokemonFormNum2+7][1][0]+'</td>';
              } else {
                temptext+='<td rowspan="2">'+BattlePokedex[pokemonIDNum2-1][pokemonFormNum2+7][1][0]+'</td>';
              }
              movesUsed2++;
              temptext+='<td>'+moves2[moves2.length-movesUsed2]+'</td>';
            }
            // IF Second Pokemon does NOT exist
            else {
                temptext+='<th rowspan="4">---</th><td rowspan="4">---</td><td>---</td>';
                moves2=['---','---','---','---']
                movesUsed2++;
                typeAmount2=1;
            }
            //Setup Complete
            movesUsed++; movesUsed2++;
            temptext+='<tr><td>'+moves[moves.length-movesUsed]+'</td><td>'+moves2[moves2.length-movesUsed2]+'</td></tr>';
            movesUsed++; movesUsed2++;
            if(typeAmount==1){
              temptext+='<tr><td>'+moves[moves.length-movesUsed]+'</td>'
            } else {
              temptext+='<tr><td rowspan="2">'+BattlePokedex[pokemonIDNum-1][pokemonFormNum+7][1][1]+'</td><td>'+moves[moves.length-movesUsed]+'</td>'
            }
            if(typeAmount2==1){
              temptext+='<td>'+moves2[moves2.length-movesUsed2]+'</td></tr>'
            } else {
              temptext+='<td rowspan="2">'+BattlePokedex[pokemonIDNum2-1][pokemonFormNum2+7][1][1]+'</td><td>'+moves2[moves2.length-movesUsed2]+'</td></tr>'
            }
            movesUsed++; movesUsed2++;
            temptext+='<tr><td>'+moves[moves.length-movesUsed]+'</td><td>'+moves2[moves2.length-movesUsed2]+'</td></tr>';
            fulltext+=temptext;
          }
          fulltext+='<tr><td class="moneyGained" colspan="6">Reward: <img src="../../images/PokeDollar.png">'+walkthroughTrainerList[locationCode][i][1]+'</td></tr></table></div>';
        }
    }
    trainerHereLocation.innerHTML=fulltext;
    if(idName!=null){
      for(var curLoc=0; curLoc<idName.length; curLoc++){
        createTrainerTable(locationCode,idName[curLoc]);
      }
    }
}

function getImageCode(pokemonNumber, formNumber){
  if(formNumber==0){
    return pokemonNumber;
  } else {
    return pokemonNumber+"_"+formNumber;
  }
}

function createTrainerTable(locationCode, idName){
  var trainerTableLoc=document.getElementById(idName);
  var trainerList=walkthroughTrainerList[locationCode];
  if(trainerTableLoc==null){
    return;
  }
  var fulltext="";
  var shortTrainerName;
  fulltext+='<tr class="heading"><td>Trainer</td><td>Location</td></tr>';
  for(var curTrainer=0; curTrainer<trainerList.length; curTrainer++){
    shortTrainerName=trainerList[curTrainer][0].replaceAll('&','');
    shortTrainerName=shortTrainerName.replaceAll(' ','');
    fulltext+='<tr><td><a href="javascript:void(0)" class="normalTrainerNameTable" id="'+shortTrainerName+'TxT">'+trainerList[curTrainer][0]+'<span class="normalTrainerImage"><img class=normalTrainerMap src="../../images/Screenshots/'+trainerList[curTrainer][trainerList[curTrainer].length-1]+shortTrainerName+'.png"></span></a></td><td>'+trainerList[curTrainer][trainerList[curTrainer].length-2]+'</td></tr>';
  }
  trainerTableLoc.innerHTML=fulltext;
}
/*

*/

var walkthroughTrainerList=[
    //Template: [Name, Money Earned, 1=Single 2=Doubles, [List of Pokemon]]
    [
        ['Optimist Talia', 24, 1, [[52,1,3], [16,0,4]]],
        ['Charmer Derek', 27, 1, [[174,0,3], [734,0,3]]],
        ['Enthusiast Lacey', 45, 1, [[16,0,4], [265,0,5]]],
        ['Yukata Girl Shakotal', 72, 1, [[753,0,5], [183,0,6]]],
        ['Mistress Nadine', 96, 1, [[265,0,6], [439,0,5]]],
        ['Schoolgirl Zara', 30, 1, [[672,0,4], [273,0,5], [535,0,6]]],
        ['Youngster Kaleb', 36, 1, [[161,0,4], [21,0,5], [353,0,6]]],
        ['Clerk Samson', 90, 1, [[406,0,5], [41,0,6]]],
        ['Clerk Allison', 105, 1, [[734,0,6], [731,0,7]]],
        ['Clerk Andrew', 120, 1, [[403,0,8], [396,0,8]]],
        ['Clerk Henry', 120, 1, [[736,0,8], [163,0,8]]],
        ['Hardcore Trainer Salem', 100, 1, [[263,0,9], [293,0,10]]],
        ['Technician Jonah', 60, 1, [[172,0,6]]],
    ], //East Gearen City Left (0000)
    [
        ['Prima Donna Bianca', 56, 1, [[298,0,6], [527,0,7]]],
        ['Prima Donna Penelope', 48, 1, [[349,0,6], [77,0,5]]],
        ['Cool Guy Sim', 54, 1, [[252,0,6], [396,0,6]]],
        ['Hiker Denko', 63, 1, [[41,0,6], [194,0,6], [194,0,6]]],
        ['Gang Member Rufus', 35, 1, [[767,0,6], [519,0,7], [216,0,7]]],
    ], //East Gearen City Right (0001)
    [
      ['Enthusiast Luca', 81, 2, [[300,0,8],[396,0,8]],[[316,0,9]]],
      ['Technician Jerald', 90, 2,[[172,0,7]],[[25,0,9]]],
      //Schoolgirl Amanda - Special
      ['Youngster Ben', 54, 2, [[54,0,7],[659,0,9]],[[434,0,8]]],
      ['Gang Member Bob', 40, 2, [[296,0,7],[296,0,8]],[[532,0,8]]],
    ], //Gearen Sewers (0002)
    [
      //Fishermen Shane and Orlando - Special Magikarp Tackle
      ['Schoolboy Darin & Gang Member Emile', 60, 2, [[58,0,10],[261,0,11],[74,0,12]],[[66,0,10],[659,0,11],[529,0,12]]],
      ['Cool Guy Jeff & Youngster Nickolus', 117, 2, [[270,0,12],[355,0,11],[524,0,13]],[[172,0,12],[36,0,12],[343,0,12]]],
      ['Optimist Kairi & Tourist Karin', 72, 2, [[27,0,12],[513,0,11],[515,0,12]],[[37,0,12],[511,0,12],[669,0,12]]],
    ], //Goldenwood Part 1 (0003)
    [
      ['Team Xen Shiela', 56, 1, [[285,0,14],[276,0,13],[345,0,13]]],
      ['Team Xen Daryle', 56, 1, [[580,0,12],[347,0,12],[100,0,14]]],
      //Some Special Xen Grunts with Shadow
    ], //Goldenwood Part 2 (0004)
    [
      ['Optimist Talia', 84, 1, [[52,1,14], [16,0,13], [190,0,14]]],
      ['Charmer Derek', 126, 1, [[39,0,13], [179,0,14], [400,0,12]]],
      ['Enthusiast Lacey', 117, 1, [[16,0,13], [269,0,12], [267,0,12]]],
      ['Mistress Nadine', 256, 1, [[267,0,15], [438,0,15], [439,0,16]]],
      ['Schoolgirl Zara', 70, 1, [[672,0,12], [231,0,12], [274,0,14]]],
      ['Prima Donna Bianca', 112, 1, [[183,0,14], [527,0,14], [293,0,14]]],
      ['Prima Donna Penelope', 104, 1, [[349,0,12], [222,0,11], [221,0,12], [77,0,13]]],
      ['Hiker Denko', 126, 1, [[41,0,13], [194,0,13], [304,0,14]]],
      ['Gang Member Rufus', 65, 1, [[767,0,13], [520,0,13], [216,0,13]]],
      ['Technician Arnold', 180, 1, [[81,0,17], [694,0,17], [100,0,18]]],
      ['Team Xen Laurel', 60, 1, [[434,0,13], [7,0,15]]],
      ['Team Xen Orran', 60, 1, [[109,0,15], [712,0,13], [54,0,13]]],
      ['Team Xen Yanny', 60, 1, [[431,0,13], [4,0,15]]],
      ['Team Xen Vera', 60, 1, [[252,0,13], [72,0,13], [177,0,14],[165,0,15]]],
      ['Team Xen Teepo', 60, 1, [[258,0,13], [72,0,13], [96,0,14],[167,0,15]]],
    ], //Gearen City Left+Right Second Visit (0005)
    [
      ['Enthusiast Luca', 126, 1, [[69,0,14],[48,0,14],[316,0,14]]],
      ['Hardcore Trainer Reina', 140, 1, [[41,0,14],[41,0,14],[42,0,13]]],
      ['Hardcore Trainer Lenny', 150, 1, [[2,0,14],[25,0,15]]],
      ['Guitarist Natalia', 56, 1, [[23,0,14],[15,0,13]]],
    ], //Gearen Gym (0006)
    [
      ['Tourist Hinata', 378, 1, [[520,0,17],[662,0,18]]],
      ['Fragrant Lady Ruddie', 198, 1, [[406,0,18],[682,0,18],]],
      ['Youngster Kaius', 102, 1, [[156,0,17],[414,0,17]]],
      ['Prima Donna Jiara', 198, 1, [[175,0,15],[39,0,16],[301,0,17]]],
      //Special Fisherman Connald Magikarps
    ], //Route 2 (0007)
    [
      ['News Crew Henrietta and Jeff', 76, 2, [[81,0,19]],[[293,0,19]]],
      ['Technician Edward', 200, 1, [[599,0,18],[714,0,20]]],
      ['Mistress Era', 336, 1, [[263,0,17],[264,0,21]]],
    ], //Amethyst Cave (0008)
    [
      ['Battle Girl Lilith', 266, 1, [[417,0,18],[777,0,19]]],
      ['Battle Boy Alexander', 154, 1, [[307,0,21],[391,0,22]]],
      ['Fragrant Lady Jessibelle', 231, 1, [[315,0,19],[753,0,20],[762,0,21]]],
      ['Battle Girl Natalia', 294, 1, [[532,0,21],[397,0,21]]],
      ['Battle Boy Charles', 147, 1, [[66,0,19],[296,0,20],[588,0,21]]],
    ], //Sheridan Village Arena (0009)
    [
      ['Team Xen Danie', 96, 2, [[322,0,24],[294,0,23]],[[240,0,23]]],
      ['Team Xen Ben', 68, 1, [[215,0,16],[168,0,17]]],
      ['Team Xen Alyssa', 72, 1, [[594,0,16],]],
      ['Team Xen Melly & Team Xen Sarah', 188, 2, [[75,0,22],[42,0,23],['---']],[[757,0,24],[24,0,22],[22,0,23]]],
      ['Team Xen Alison', 96, 2, [[347,0,24],[566,0,22]],[[345,0,23]]],
      ['Xen Analyst Forrest & Xen Analyst Jensly', 288, 2, [[89,0,24],[213,0,24]],[[101,0,24],[617,0,24]]],
      ['Team Xen Demil & Team Xen Aisel', 96, 2, [[95,0,24],[329,0,22],[206,0,23]],[[328,0,24],[246,0,23],[554,0,23]]],
      ['Xen Analyst Donald & Xen Analyst Maria', 588, 2, [[125,0,24],[26,0,23],[64,0,23]],[[81,0,24],[82,0,23],[600,0,25]]], //Huge Money
      ['Xen Analyst Fern & Xen Analyst Prescilla', 288, 2, [[331,0,23],[496,0,23],[315,0,24]],[[137,0,23],[233,0,23],[113,0,24]]],
      ['Team Xen Jessie & Team Xen Jasmine', 100, 2, [[662,0,24],[55,0,23],[58,0,25]],[[28,0,23],[105,0,23]]],
      //Special Grunts with Shadows
    ], //Caratos Mountain (0010)
    [
      ['Schoolgirl Lizzy', 230, 1, [[122,0,23],[678,0,23]], [], 'Route 3 - Near the gate entrace', 'Chapter 3/Route3/Trainers/'],
      ['Optimist Marissa', 276, 1, [[670,0,23],[184,0,23]], [], 'Route 3 - Along the path below Schoolgirl Lizzy', 'Chapter 3/Route3/Trainers/'],
      ['Cool Couple Nate & Delilah', 800, 2, [[536,0,24],[135,0,24]], [[57,0,24],[121,0,25]], 'Route 3 - Along the path after the intersection to Phasial Cave', 'Chapter 3/Route3/Trainers/'],
      ['Hardcore Trainer Elizabeth', 'Special', 'Route 3 - Right after Cool Couple Nate & Delilah', 'Chapter 3/Route3/Trainers/']
      //Special Cincinno
    ], //Route 3 (0011)
]

/*

*/