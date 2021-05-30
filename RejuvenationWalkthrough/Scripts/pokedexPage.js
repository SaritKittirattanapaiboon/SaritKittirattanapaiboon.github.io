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

    var numbertext="This Pokemon's National Dex Number is " + PokemontoDetail[0] + "<br>";
    var formtext="The number of forms this Pokemon has is " + PokemontoDetail[1].toString()+"<br><br>";
    for(var i=0; i<PokemontoDetail[1]; i++){
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
            subformtext+=" and " + currentForm[1][1];
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