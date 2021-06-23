var allmoves=JSON.parse(movetext)

function outputMoves(pokeName){
    outputPlace=document.getElementById("testOutput")
    inputName=document.getElementById("pokemonName")
    pokeName=inputName.value
    if(pokeName==""){
        pokeName="Bulbasaur"
    }
    keyList=[]
    moveList=[]
    moveLevel=[]
    fulltext='<table class="eventTrainerBattle">'
    for (var key in allmoves.pokemon_name){
        if(allmoves.pokemon_name[key]==pokeName){
            keyList.push(key)
        }
    }
    for (var key in keyList){
        moveList.push(allmoves.move_name[keyList[key]])
        moveLevel.push(allmoves.level[keyList[key]])
    }
    for (var key in keyList){
        fulltext+="<tr><td>"+moveLevel[key]+"</td><td>"+moveList[key]+"</td></tr>"
    }
    outputPlace.innerHTML=fulltext
    outputPlace=document.getElementById("speNum")
    speNumber=allmoves.pokemon_species[keyList[0]]
    formNumber=allmoves.pokemon_form[keyList[0]]
    pokName=allmoves.pokemon_name[keyList[0]]
    outputPlace.innerHTML=speNumber+", Form: "+formNumber+", Name: "+pokName

    outputPlace=document.getElementById("stats")
    fulltext='<table class="eventTrainerBattle"><tr><td>HP</td><td>Attack</td><td>Defense</td><td>Special Attack</td><td>Special Defense</td><td>Speed</td><td>BST</td></tr><tr>'
    thisPokemon=BattlePokedex[speNumber-1][formNumber+7][4]
    fulltext+='<td>'+thisPokemon[0]+'</td>'+'<td>'+thisPokemon[1]+'</td>'+'<td>'+thisPokemon[2]+'</td>'+'<td>'+thisPokemon[3]+'</td>'+'<td>'+thisPokemon[4]+'</td>'+'<td>'+thisPokemon[5]+'</td>'+'<td>'+thisPokemon[6]+'</td>'
    fulltext+='</tr></table>'
    outputPlace.innerHTML=fulltext

    outputPlace=document.getElementById("evolutions")
    thisPokemon=BattlePokedex[speNumber-1][formNumber+7][9]
    outputPlace.innerHTML=thisPokemon
}

function pseudoHash(){
    outputLoc=document.getElementById("testOutput");
    hashedArray=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
    fulltext="";
    for(i=0; i<AllEncounters.length; i++){
        hashNumber = AllEncounters[i][0][0].charCodeAt(0)-65;
        hashedArray[hashNumber].push(AllEncounters[i]);
    }
    for(i=0; i<hashedArray.length; i++){ //Initial
        fulltext+='[<br>'
        for(j=0; j<hashedArray[i].length; j++){
            fulltext+='\u00A0\u00A0\u00A0\u00A0[[\''+hashedArray[i][j][0][0]+'\', [';
            for(k=0; k<hashedArray[i][j][0][1].length; k++){
                fulltext+='\''+hashedArray[i][j][0][1][k]+'\', '
            }
            fulltext=fulltext.slice(0, -2);
            fulltext+=']],<br>';
            for(k=0; k<hashedArray[i][j][0][1].length; k++){
                actualLocation=k+1;
                fulltext+='\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0[\''+hashedArray[i][j][actualLocation][0]+'\', ['+hashedArray[i][j][actualLocation][1][0]+', [';
                for(l=0; l<hashedArray[i][j][actualLocation][1][0]; l++){
                    fulltext+='\''+hashedArray[i][j][actualLocation][1][1][l]+'\', ';
                }
                fulltext=fulltext.slice(0, -2);
                fulltext+=']],<br>'+'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0['+'<br>';
                for(l=0; l<hashedArray[i][j][actualLocation][2].length; l++){
                    fulltext+='\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';
                    fulltext+='[[\''+hashedArray[i][j][actualLocation][2][l][0][0]+'\'], [';
                    for(m=0; m<hashedArray[i][j][actualLocation][2][l][1].length; m++){
                        textToAdd=hashedArray[i][j][actualLocation][2][l][1][m]
                        textToAdd=textToAdd.replaceAll("<br>", "-br-")
                        fulltext+='\''+textToAdd+'\', '
                    }
                    fulltext=fulltext.slice(0, -2);
                    if(hashedArray[i][j][actualLocation][0]=='Shadows'){
                        textToAdd=hashedArray[i][j][actualLocation][2][l][2]
                        textToAdd=textToAdd.replaceAll("<br>", "-br-")
                        fulltext+='], \''+textToAdd+'\'';
                    } else {
                        fulltext+='], '+hashedArray[i][j][actualLocation][2][l][2];
                    }
                    if(hashedArray[i][j][actualLocation][0]=='Events'){
                        fulltext+=', '+hashedArray[i][j][actualLocation][2][l][3]+'],';
                    }
                    else{
                        fulltext+='], '
                    }
                    fulltext+='<br>'
                }
                fulltext+='\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0],<br>'
                fulltext+='\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0],<br>'
            }
            fulltext+='\u00A0\u00A0\u00A0\u00A0],<br>'
        }
        fulltext+='], //' + String.fromCharCode(65 + i) + '<br>'
    }
    outputLoc.innerHTML=fulltext;
}

function emptyHashed(){
    outputLoc=document.getElementById("testOutput");
    fulltext=""
    for(i=0; i<26; i++){
        fulltext+="[<br><br>], //"+String.fromCharCode(65 + i) + '<br>'
    }
    outputLoc.innerHTML=fulltext;
}