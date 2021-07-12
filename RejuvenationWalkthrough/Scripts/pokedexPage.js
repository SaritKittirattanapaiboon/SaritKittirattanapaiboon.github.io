function readText(){
    var notFound=true;
    var inputField=document.getElementById("myTextInput"); //Input text field
    var outputField=document.getElementById("testOutput"); //Output of the Pokedex
    var bigNameField=document.getElementById("pokemonBigName"); //Big Name on Top of page
    
    //Input text assessment
    var inputtext=inputField.value;
    var formnumber; //Form Number
    if(inputtext.search("_")==-1){
        formNumber=0;
        inputName=inputtext.substr(6,inputtext.length-6);
    } else {
        formNumber=parseInt(inputtext.substr(inputtext.search("_")+1,1));
        inputName=inputtext.substr(8,inputtext.length-8);
    }

    inputNumber=parseInt(inputtext.substr(0,3)); 
    for(var i=0; i<PokemonList.length; i++){

        if(inputName.toLowerCase()==PokemonList[i]){
            outputField.innerHTML=createbattlePokedexText(BattlePokedex[i]);
            bigNameField.innerHTML=BattlePokedex[i][0]+" - "+inputName;
            notFound=false;
        }
    }
    if(notFound){
        outputField.innerHTML="Pokemon Not Found"
        bigNameField.innerHTML="Pokemon"
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
  