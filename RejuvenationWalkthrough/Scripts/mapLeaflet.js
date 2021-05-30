function showMap(mapName, locationCode, locationID){
  var locationName
  var changelocation = document.getElementById("currentMapLocation");
  if(Number.isInteger(locationCode)){
    locationName = RandomEncounters[locationCode][0][locationID];
  }
  else{
    locationName=locationCode;
  }
  changelocation.innerHTML=locationName;
  

  var changeMapSize=document.getElementById("currentMap");
  map.eachLayer(function (layer) {
    map.removeLayer(layer);
  });

  
  var locationNumber;
  for (var i = 0; i < testTrainers.length; i++){
    if(testTrainers[i][0]==locationName){
      locationNumber=i;
      break;
    }
  }

  var newHeight=testTrainers[locationNumber][1][0];
  if(newHeight<800){
    newHeight=newHeight.toString().concat('px');
    changeMapSize.style.height=newHeight;
  }
  else{
    changeMapSize.style.height='800px';
  }
  var newWidth=testTrainers[locationNumber][1][1];
  if(newWidth<800){
    newWidth=newWidth.toString().concat('px');
    changeMapSize.style.width=newWidth;
  }
  else{
    changeMapSize.style.width='800px';
  }

  setTimeout(1000);
  map.invalidateSize();

  map.setMaxBounds([[0,0], [testTrainers[locationNumber][1][0],testTrainers[locationNumber][1][1]]]);
  bounds = [[0,0], [testTrainers[locationNumber][1][0],testTrainers[locationNumber][1][1]]];

  var image = L.imageOverlay(mapName, bounds).addTo(map);
  map.fitBounds([testTrainers[locationNumber][2][0],testTrainers[locationNumber][2][1]]);

  addPins(locationName);
  createEncounterTable(locationCode, locationID);
}

function addPins(locationName){
  //Trainers
  var locationNumber=-1;
  var currentTrainerList
  for (var i = 0; i < testTrainers.length; i++){
    if(testTrainers[i][0]==locationName){
      locationNumber=i;
      break;
    }
  }
  if(locationNumber>=0){
    currentTrainerList=testTrainers[locationNumber];
    for (var i = 3; i < currentTrainerList.length; i++){
      L.marker(L.latLng(currentTrainerList[i][1],currentTrainerList[i][2])).addTo(map).bindPopup(currentTrainerList[i][0]);
    }
  }

  //Map Connections
  locationNumber=-1;
  for (var i = 0; i < mapConnections.length; i++){
    if(mapConnections[i][0]==locationName){
      locationNumber=i;
      break;
    }
  }
  if(locationNumber>=0){
    currentTrainerList=mapConnections[locationNumber];
    for (var i = 1; i < currentTrainerList.length; i++){
      L.polyline([[currentTrainerList[i][0],currentTrainerList[i][1]], [currentTrainerList[i][2],currentTrainerList[i][3]]]).addTo(map);
    }
  }
}

function createEncounterTable(locationCode, locationID){
  var locationName
  if(Number.isInteger(locationCode)){
    locationName = RandomEncounters[locationCode][0][locationID];
  }
  else{
    locationName=locationCode;
  }
  var thisMapEncounters=document.getElementById("thisMapEncounters");
  
  var timeofDayNum;
  var timeofDayList=[];
  var fulltext='';

  var locationNumber=[];
  var currentLocationArray;

  //Random Encounters
  for (var i = 0; i < RandomEncounters.length; i++){
    if(RandomEncounters[i][0][0]==locationName || RandomEncounters[i][0][locationID]==locationName){
      locationNumber.push(i);
    }
  }

  if(locationNumber.length==0){
    fulltext='<p class="NoEncounters">No Encounters</p>';
    thisMapEncounters.innerHTML=fulltext;
    return;
  }

  for(var j=0; j < locationNumber.length; j++){
    currentLocationArray=RandomEncounters[locationNumber[j]];
    timeofDayList=[];

    fulltext=fulltext+'<table class="mapEncounterTable"><tr><th class="mapEncounterTableMethod" colspan="9">'+currentLocationArray[0][currentLocationArray[0].length-1]+'</th></tr>';

    timeofDayNum = currentLocationArray[1][0];
    for (var i = 1; i <= timeofDayNum; i++){
      timeofDayList.push(currentLocationArray[1][i]);
    }

    for(var i = 2; i < RandomEncounters[locationNumber[j]].length; i++){
      fulltext=fulltext+createPokemonText(currentLocationArray[i],timeofDayList)+'<tr><td colspan="9"></td></tr>';
    }
    fulltext=fulltext.slice(0,-30);
    fulltext=fulltext+'</table><br>';
  }
  
  thisMapEncounters.innerHTML=fulltext;
}

function createPokemonText(thisPokemon, listofTimes){
  var currentPokemon;
  var currentPokemonForm;

  var currentPokemonNumberText;
  var currentPokemonNumber;
  var currentPokemonFormNumber;
  var currentPokemonHoldItemText;

  var currentPokemonTypeRowSpan;
  var currentPokemonTypeOne;
  var currentPokemonTypeTwo;
  var currentPokemonRates=[];
  var currentPokemonAbilities=[];
  var currentPokemonHiddenAbility;
  var currentPokemonStats;

  var currentPokemonNumberNameText;
  var currentPokemonRateText;
  var currentPokemonTypeRateText;
  var currentPokemonAbilityShortText;
  var currentPokemonAbilityText;
  var currentPokemonStatShortText;
  var currentPokemonStatText;

  //For Loop Begins
  currentPokemonRates=[];
  currentPokemonAbilities=[];

  //Setup
  currentPokemonNumberText = thisPokemon[0].substr(0,3);
  currentPokemonNumber = parseInt(currentPokemonNumberText);
  currentPokemon = BattlePokedex[currentPokemonNumber-1];

  //Form Check
  if(thisPokemon[0].length==3){
    currentPokemonFormNumber=0;
  }
  else {
    currentPokemonFormNumber=thisPokemon[0].slice(thisPokemon[0].length-1);
  }
  currentPokemonFormNumber=parseInt(currentPokemonFormNumber);
  currentPokemonForm=currentPokemon[currentPokemonFormNumber+7]; //7 things before the data

  //Type Calculations
  if(currentPokemonForm[1].length==2){
    currentPokemonTypeRowSpan=1;
    currentPokemonTypeOne=currentPokemonForm[1][0];
    currentPokemonTypeTwo=currentPokemonForm[1][1];
  }
  else{
    currentPokemonTypeRowSpan=2;
    currentPokemonTypeOne=currentPokemonForm[1][0];
  }

  //Rate
  for (var i = 0; i < thisPokemon[1].length; i++){
    currentPokemonRates.push(thisPokemon[1][i]);
  }

  //Ability
  for (var i = 0; i < currentPokemonForm[2].length; i++){
    currentPokemonAbilities.push(currentPokemonForm[2][i]);
  }
  if(currentPokemonForm[2].length==1){
    currentPokemonAbilityShortText=currentPokemonAbilities[0];
  }
  else{
    currentPokemonAbilityShortText=currentPokemonAbilities[0]+', '+currentPokemonAbilities[1];
  }

  currentPokemonHiddenAbility=currentPokemonForm[3]; //Hidden Ability
  currentPokemonStats=currentPokemonForm[4]; //Stats

  currentPokemonHoldItemText="";
  //Hold Items
  if(currentPokemonForm[11].length==1){
    currentPokemonHoldItemText="None";
  }
  else{
    for (var i = 0; i < currentPokemonForm[11].length; i=i+2){
      currentPokemonHoldItemText+=currentPokemonForm[11][i]+', '+currentPokemonForm[11][i+1];
      if(i+2>=currentPokemonForm[11].length){

      }
      else{
        currentPokemonHoldItemText+="<br>";
      }
    }
    
  }

  //Number Name Text
  currentPokemonNumberNameText=`
    <tr>
      <th class="mapEncounterTableMainName" rowspan="6" colspan="3">
        <img class="mapEncounterTableImage" src="../../images/PokemonSprites/`+currentPokemon[0]+`.png"><br>#`+currentPokemonNumber+`, `+currentPokemonForm[0]+'<br>Held Item: <br>'+currentPokemonHoldItemText+'</th>';
  
  //Rate Text
  currentPokemonRateText = `<td class="mapEncounterTablePercentage" rowspan="2" colspan="4">`;
  for (var i = 0; i < currentPokemonRates.length; i++){
    currentPokemonRateText=currentPokemonRateText+listofTimes[i]+': '+currentPokemonRates[i]+'<br>';
  }
  currentPokemonRateText=currentPokemonRateText.slice(0,-4);
  currentPokemonRateText=currentPokemonRateText+'</td>';

  //Type and Rate Text
  if(currentPokemonTypeRowSpan==2){
    currentPokemonTypeRateText=`
        <td class="mapEncounterTableType" rowspan="2" colspan="2" style="background-color: var(--type`+currentPokemonTypeOne+`);">`+currentPokemonTypeOne+`</td>`+currentPokemonRateText+`
      </tr><tr></tr>`
  } else {
    currentPokemonTypeRateText=`
      <td class="mapEncounterTableType" colspan="2" style="background-color: var(--type`+currentPokemonTypeOne+`);">`+currentPokemonTypeOne+`</td>`+currentPokemonRateText+`
    </tr>
    <tr>
      <td class="mapEncounterTableType" colspan="2" style="background-color: var(--type`+currentPokemonTypeTwo+`);">`+currentPokemonTypeTwo+`</td>
    </tr>`
  }

  //Abilities Text
  currentPokemonAbilityText='<tr><td class="mapEncounterTableAbilities" rowspan="2" colspan="6">Abilities: '+currentPokemonAbilityShortText+'<br>Hidden Ability: '+currentPokemonHiddenAbility+'</td></tr><tr></tr>';

  //Stats Text
  currentPokemonStatShortText='';
  for (var i = 0; i < currentPokemonStats.length-1; i++){
    currentPokemonStatShortText=currentPokemonStatShortText+'<td>'+currentPokemonStats[i]+'</td>'
  }
  currentPokemonStatText='<tr><td>HP</td><td>Attack</td><td>Defense</td><td>Special Attack</td><td>Special Defense</td><td>Speed</td></tr><tr>'+currentPokemonStatShortText+'</tr>';

  currentPokemonFullText=currentPokemonNumberNameText+currentPokemonTypeRateText+currentPokemonAbilityText+currentPokemonStatText;

  return currentPokemonFullText;
}

function showHiddenList(listID){
  var hiddenList=document.getElementById(listID);
  if(hiddenList.style.display=="none"){
    hiddenList.style.display="inherit";
  } else {
    hiddenList.style.display="none";
  }
}

function hiddenListSetup(){
  var hiddenlists=document.getElementsByClassName("mapSelectionHiddenList");
  for(var i=0; i<hiddenlists.length; i++){
    showHiddenList(hiddenlists[i].id);
  }
}