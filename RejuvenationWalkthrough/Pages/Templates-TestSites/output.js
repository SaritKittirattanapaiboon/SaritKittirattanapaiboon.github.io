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
}