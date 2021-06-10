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
    outputPlace.innerHTML=speNumber

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