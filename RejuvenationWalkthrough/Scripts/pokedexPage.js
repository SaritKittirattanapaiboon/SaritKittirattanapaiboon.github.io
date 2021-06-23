function readText(){
    var notFound=true;
    var inputField=document.getElementById("myTextInput");
    var inputtext=inputField.value;
    var outputField=document.getElementById("testOutput");
    for(var i=0; i<PokemonList.length; i++){
        if(inputtext.toLowerCase()==PokemonList[i]){
            outputField.innerHTML=createbattlePokedexText(BattlePokedex[i]);
            notFound=false;
        }
    }
    if(notFound){
        outputField.innerHTML="Pokemon Not Found"
    }
}

function createbattlePokedexText(PokemontoDetail){
    var fulltext="";
    var currentForm;

    var imageplace;
    var numbertext;
    var formtext;
    var subformtext="";

    var typetext;

    //var numbertext="This Pokemon's National Dex Number is " + PokemontoDetail[0] + "<br>";
    //var formtext="The number of forms this Pokemon has is " + PokemontoDetail[1].toString()+"<br><br>";
    for(var i=0; i<PokemontoDetail[1]; i++){ //Loop through each form
        
        currentForm=PokemontoDetail[7+i]
        if(i==0 || PokemontoDetail[0]=="711"){
            subformtext+="<img src=\"../../images/PokemonSprites/"+PokemontoDetail[0]+".png\"<br><br>";
        } else {
            subformtext+="<img src=\"../../images/PokemonSprites/"+PokemontoDetail[0]+"_"+i.toString()+".png\"<br><br>";
        }
        subformtext+="Form: " + (i+1).toString() + "<br>";
        subformtext+="Name: " + currentForm[0] + "<br>";
        subformtext+="Type: " + currentForm[1][0];
        if(currentForm[1].length==2){
            subformtext+="/" + currentForm[1][1];
        }
        subformtext+="<br>"
        subformtext+="Ability: " + currentForm[2][0];
        if(currentForm[2].length==2){
            subformtext+=" or " + currentForm[2][1];
        }
        subformtext+="<br>"
        subformtext+="Hidden Ability: " + currentForm[3][0];
        subformtext+="<br>"

        subformtext+="<br><br>"
    }
    return numbertext + formtext + subformtext;
}

/*
        <span class="pokedexAll">
          <table class="pokedexTable">
            <tr><th colspan="2" class="formTitle">Form: 1</th></tr>
            <tr><td class="pokemonImageCell"><img class="pokemonImageSource" src="../../images/PokemonSprites/003.png"></td><td rowspan="2" class="pokemonType">Grass<br>Poison</td></tr>
            <tr><th class="pokemonName">Venusaur</th></tr>
            <tr><td class="pokemonAbility">Ability 1: Overgrow</td><td class="pokemonAbility">Hidden Ability: Chlorophyll</td></tr>
          </table>
          <table class="pokedexTable">
            <tr class="statTitles"><td>HP</td><td>Attack</td><td>Defense</td><td>Special Attack</td><td>Special Defense</td><td>Speed</td><td>Base Stat Totals</td></tr>
            <tr class="statTitles"><td>80</td><td>82</td><td>83</td><td>100</td><td>100</td><td>80</td><td>525</td></tr>
          </table>
          <table class="pokedexTable">
            <tr><td class="genderRatio">Male: 88%<br>Female: 12%</td><td class="eggGroup">Egg Group 1: Monster<br>Egg Group 2: Grass</td></tr>
            <tr><td class="expYield">Base Exp Yield: 236</td><td class="EVTitle">Effort Values Yield:</td><td class="EVYield">2 Special Attack<br>1 Special Defense</td></tr>
            <tr><td class="evolutionFromTitle">Evolves from:</td><td class="evolutionFrom"><img class="pokemonImageSource" src="../../images/PokemonSprites/002.png"><br>Ivysaur<br>At Level 16</td></tr>
            <tr><td class="evolutionToTitle">Evolves into:</td><td class="evolutionTo"><img class="pokemonImageSource" src="../../images/PokemonSprites/003_1.png"><br>Mega Venusaur<br>Through Mega Evolution</td></tr>
          </table>
        </span>
*/