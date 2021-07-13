function readText(){
    var notFound=true;
    var inputField=document.getElementById("myTextInput"); //Input text field
    var outputField=document.getElementById("testOutput"); //Output of the Pokedex
    var bigNameField=document.getElementById("pokemonBigName"); //Big Name on Top of page
    
    //Input text assessment
    var inputtext=inputField.value;
    var formNumber; //Form Number

    if(isNaN(inputtext[0])){
      inputName=inputtext;
      for(var i=0; i<PokemonList.length; i++){
        if(inputName.toLowerCase()==PokemonList[i]){
            outputField.innerHTML=createbattlePokedexText(BattlePokedex[i],7);
            bigNameField.innerHTML=BattlePokedex[i][0]+" - "+inputName;
            notFound=false;
        }
      }
      if(notFound){
          outputField.innerHTML="Pokemon Not Found"
          bigNameField.innerHTML="Pokemon"
      }
      return
    }

    if(inputtext.search("_")==-1){
        formNumber=0;
        inputName=inputtext.substr(6,inputtext.length-6);
    } else {
        formNumber=parseInt(inputtext.substr(inputtext.search("_")+1,1));
        inputName=inputtext.substr(8,inputtext.length-8);
    }

    inputNumber=parseInt(inputtext.substr(0,3));
    outputField.innerHTML=createbattlePokedexText(BattlePokedex[inputNumber-1],formNumber+7);
    bigNameField.innerHTML=BattlePokedex[inputNumber-1][0]+" - "+inputName;
}

function createbattlePokedexText(PokemontoDetail, formNumber){
  var actualPokemon=PokemontoDetail[formNumber];
  var pokemonImageNumberString;
  var i

  statTitleNames=['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed', 'Stat Total']

  if(formNumber==7){
    pokemonImageNumberString=PokemontoDetail[0];
  }
  else{
    pokemonImageNumberString=PokemontoDetail[0]+"_"+String(formNumber-7);
  }

  //Image + Statbars
  fulltext='<table class="pokedexTable"><tr><td rowspan="7" class="pokemonImageCell" style="text-align: center;"><img class="pokemonImageSource" src="../../images/PokemonSprites/'+pokemonImageNumberString+'.png"></td><td class="statTitles">HP:</td><td class="statBarContainer"><div class="statBar" style="width: '+String(2*actualPokemon[4][0]) +'px;"></div></td><td class="statNumber" style="width: 40px;">'+String(actualPokemon[4][0])+'</td></tr>';
  for(i=1; i<6; i++){
    fulltext+='<tr><td class="statTitles">'+statTitleNames[i]+':</td><td class="statBarContainer"><div class="statBar" style="width: '+String(2*actualPokemon[4][i]) +'px;"></div></td><td class="statNumber" style="width: 40px;">'+String(actualPokemon[4][i])+'</td></tr>'
  }
  fulltext+='<tr><td class="statTitles">'+statTitleNames[6]+':</td><td class="statBarContainer"><div class="statBar" style="width: '+String((500/720)*actualPokemon[4][6]) +'px;"></div></td><td class="statNumber" style="width: 40px;">'+String(actualPokemon[4][6])+'</td></tr>'

  //Type + Abilities
  fulltext+='<tr><td style="text-align: center;"><span class="typeTable" style="background-color: var(--type'+actualPokemon[1][0]+');">'+actualPokemon[1][0]+'</span><br>'
  if(actualPokemon[1].length==2){
    fulltext+='<span class="typeTable" style="background-color: var(--type'+actualPokemon[1][1]+');">'+actualPokemon[1][1]+'</span>'
  }
  fulltext+='</td><td class="abilityTable" colspan="2">'
  for(var i=0; i<actualPokemon[2].length; i++){
    fulltext+='Ability '+String(i+1)+': '+actualPokemon[2][i]+'<br>';
  }
  if(actualPokemon[3][0]!='None'){
    fulltext+='Hidden Ability: '+actualPokemon[3][0];
    if(actualPokemon[3].length>1) {
      fulltext+='<br>Other Ability: '+actualPokemon[3][1];
      //Exceptions "Other Abilities" -> Rockruff
    }
    fulltext+='</td></tr>'
  }
  fulltext+='</table><br><br>'

  //Evolution Table
  baseForm=getBaseForm(PokemontoDetail, formNumber); //find the base form of the evolution line
  evolutionLine=getEvoLine(baseForm); //find the full evolution line for the base form
  evolutionNumbers=getEvoNumbers(evolutionLine); //calculate the number of rows and columns needed for the table

  temptext=[];
  evolutionsToInsert=[];
  for(var i=1; i<evolutionLine.length; i++){
    evolutionsToInsert.push(evolutionLine[i]);
  }

  fulltext+='<table class="evolutionTable"><tr>';
  curRowSpan=evolutionNumbers[0];
  var curPokNumForm = getNumberForm(evolutionLine[0]);
  setWidth=parseInt(600/(evolutionNumbers[1]+1));
  fulltext+='<td rowspan="'+String(curRowSpan+1)+'" class="pokemonImageCell" style="width: '+String(setWidth)+'px;"><img class="pokemonImageSource" src="../../images/PokemonSprites/'+evolutionLine[0]+'.png"><br>'+BattlePokedex[curPokNumForm[0]-1][curPokNumForm[1]+7][0]+'</td>'
  if(evolutionLine.length==1){ //Only 1 Evolution
    fulltext+='</tr></table>';
  } else {
    while(evolutionsToInsert.length!=0){
      temptextVal=0;
      evolutionsToInsertTemp=[];
      for(var curInsertion=0; curInsertion<evolutionsToInsert.length; curInsertion++){
        curPokNumForm=getNumberForm(evolutionsToInsert[curInsertion][0]);
        if(evolutionsToInsert.length>1){
          curRowSpan=0;
        }
        if(typeof(temptext[curInsertion])=='undefined'){
          temptext.push('<td rowspan="'+String(curRowSpan+1)+'" class="evolutionArrowCell"><div class="rightArrow"></div><br>Method</td>'+'<td rowspan="'+String(curRowSpan+1)+'" class="pokemonImageCell" style="width: '+String(setWidth)+'px;"><img class="pokemonImageSource" src="../../images/PokemonSprites/'+evolutionsToInsert[curInsertion][0]+'.png"><br>'+BattlePokedex[curPokNumForm[0]-1][curPokNumForm[1]+7][0]+'</td>');
        } else {
          temptext[curInsertion]=temptext[curInsertion]+'<td rowspan="'+String(curRowSpan+1)+'" class="evolutionArrowCell"><div class="rightArrow"></div><br>Method</td>'+'<td rowspan="'+String(curRowSpan+1)+'" class="pokemonImageCell" style="width: '+String(setWidth)+'px;"><img class="pokemonImageSource" src="../../images/PokemonSprites/'+evolutionsToInsert[curInsertion][0]+'.png"><br>'+BattlePokedex[curPokNumForm[0]-1][curPokNumForm[1]+7][0]+'</td>';
        }
        if(evolutionsToInsert[curInsertion].length==1){
          //evolutionsToInsert.shift();
        } else {
          for(var i=1; i<evolutionsToInsert[curInsertion].length; i++){
            evolutionsToInsertTemp.push(evolutionsToInsert[curInsertion][i]);
          }
        }
      }
      evolutionsToInsert=evolutionsToInsertTemp;
    }
    fulltext+=temptext[0]+'</tr>'
    for(var i=1; i<temptext.length; i++){
      fulltext+='<tr>'+temptext[i]+'</tr>';
    }
  }

  
  
  fulltext+='</table>'
  return fulltext
}

function getBaseForm(thisPokemon, formNumber){
  var nextPokemon=thisPokemon;
  var pokemonToAddNumber;

  while(nextPokemon[formNumber][8]!='None'){
    pokemonToAddNumber=parseInt(nextPokemon[formNumber][8].substr(0,3));
    if(nextPokemon[formNumber][8].search("_")==-1){
      formNumber=7;
    } else {
      formNumber=parseInt(inputtext.substr(inputtext.search("_")+1,1)+7);
    }
    nextPokemon=BattlePokedex[pokemonToAddNumber-1]
  }

  return [nextPokemon[0], formNumber];
} //Get the base form of an evolution line

function getEvoLine(baseForm){
  var evolutionLine=[];
  var dexNumber=parseInt(baseForm[0]-1);
  var formNumber=baseForm[1]
  var evolvedPokemonNumber;
  var evolvedPokemonForm;
  var j=0; //Variable to find where the "next" evolution Pokemon is

  if(baseForm[1]==7){
    evolutionLine.unshift(baseForm[0])
  } else {
    evolutionLine.unshift(baseForm[0]+"_"+String(formNumber-7))
  }
  for(var i=0; i<parseInt((BattlePokedex[dexNumber][formNumber][9].length)/2); i++){
    if(BattlePokedex[dexNumber][formNumber][9][j+1].search("_")==-1){
      evolvedPokemonNumber=BattlePokedex[dexNumber][formNumber][9][j+1];
      evolvedPokemonForm=7;
    } else {
      evolvedPokemonNumber=BattlePokedex[dexNumber][formNumber][9][j+1].substr(0,3);
      evolvedPokemonForm=parseInt(BattlePokedex[dexNumber][formNumber][9][j+1].substr(4,1))+7;
    }
    j=j+2;
    newBaseForm=[evolvedPokemonNumber, evolvedPokemonForm];
    evolutionLine.push(getEvoLine(newBaseForm));
  }

  return evolutionLine;
}

function getEvoNumbers(evolutionLine){
  var evoNumbers=[0,0]; //number of rows (max diverging evolutions) & number of columns (max number of evolutions)
  if(evolutionLine.length==1){
    return evoNumbers;
  } else {
    evoNumbers[0]=evolutionLine.length-1;
    evoNumbers[1]=1;
    for(var i=1; i<evolutionLine.length; i++){
      var nextEvolutionNumbers=getEvoNumbers(evolutionLine[i]);
      if(nextEvolutionNumbers[0]>evoNumbers[0]){
        evoNumbers[0]=nextEvolutionNumbers[0];
      }
      evoNumbers[1]+=nextEvolutionNumbers[1];
    }
  }
  return evoNumbers;
}

function getNumberForm(pokemonString){
  if(pokemonString.search("_")==-1){
    return [parseInt(pokemonString), 0];
  } else {
    return [parseInt(pokemonString.substr(0,3)), parseInt(pokemonString.substr(4,1))];
  }
}

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocompleteTest-list");
        a.setAttribute("class", "autocompleteTest-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if(arr[i].toUpperCase().search(val.toUpperCase())!=-1){
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                readText();
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocompleteTest-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    input.addEventListener('keyup', function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          document.getElementById("textInputButton").click();
        }
      });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocompleteTest-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocompleteTest-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocompleteTest-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  