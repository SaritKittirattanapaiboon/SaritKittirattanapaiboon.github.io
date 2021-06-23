var allOverlays=[]
/*
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
*/
function showMapVersion2(selectedValue, changeView){
  if(typeof selectedValue == 'string'){
    pictureCode=selectedValue;
    hashNumber = selectedValue.charCodeAt(0)-65;
    var changeTitle=document.getElementById("currentMapLocation");
    if(pictureCode=="EGC-LeftSide"){
      changeTitle.innerHTML="East Gearen City - Left"
    } else {
      changeTitle.innerHTML=pictureCode;
    }
  }
  else {
    pictureCode = selectedValue.value;
    hashNumber = pictureCode.charCodeAt(0)-65;
    var changeTitle=document.getElementById("currentMapLocation");
    changeTitle.innerHTML=selectedValue.options[selectedValue.selectedIndex].text;
  }
  

  dataArray = null;
  for(i=0; i<mapList[hashNumber].length; i++){
    if(mapList[hashNumber][i]==undefined){
      break;
    }
    if(mapList[hashNumber][i][0]==pictureCode){
      dataArray=mapList[hashNumber][i];
      break;
    }
  }
  if(dataArray==null){
    return
  }

  var changeMapSize=document.getElementById("currentMap");
  if(changeView){
    map.eachLayer(function (layer) {
      map.removeLayer(layer);
    });
    mapNumbers = dataArray[2];
    mapFilePath='../../images/Screenshots/TrainerMaps/'+pictureCode+'.png';
    var newHeight=mapNumbers[0][0];
    if(newHeight<800){
      newHeight=newHeight.toString().concat('px');
      changeMapSize.style.height=newHeight;
    }
    else{
      changeMapSize.style.height='800px';
    }
    var newWidth=mapNumbers[0][1];
    if(newWidth<800){
      newWidth=newWidth.toString().concat('px');
      changeMapSize.style.width=newWidth;
    }
    else{
      changeMapSize.style.width='800px';
    }
  
    setTimeout(1000);
    map.invalidateSize();
  
    map.setMaxBounds([[0,0], [mapNumbers[0][0]+50,mapNumbers[0][1]]]);
    bounds = [[0,0], [mapNumbers[0][0],mapNumbers[0][1]]];
  
    var image = L.imageOverlay(mapFilePath, bounds).addTo(map);
    map.fitBounds([mapNumbers[1][0],mapNumbers[1][1]]);
  } else {
    for(i=0; i<allOverlays.length; i++){
      map.removeLayer(allOverlays[i]);
      allOverlays.shift;
    }
  }

  addPins(dataArray);
  createEncounterTable(dataArray[1]);
}

function addPins(currentData){
  var battleIcon = L.icon({
    iconUrl: '../../images/markerIcons/battleMarkerTestRed.png',
  
    iconSize: [26,26],
    iconAnchor: [13,13],
    popupAnchor: [0,0],
  })

  var hiddenIcon = L.icon({
    iconUrl: '../../images/markerIcons/battleMarker2.png',
  
    iconSize: [26,26],
    iconAnchor: [13,13],
    popupAnchor: [0,0],
  })
  //Trainers
  checkboxCheck=document.getElementById("showTrainers");
  if(checkboxCheck.checked){
    var currentWorkingList=currentData[3]
    trainerMarkers = L.layerGroup();
    for (var i = 0; i < currentWorkingList.length; i++){
      curMarker = L.marker(L.latLng(currentWorkingList[i][1],currentWorkingList[i][2]), {icon: battleIcon}).bindPopup(currentWorkingList[i][0]);
      trainerMarkers.addLayer(curMarker);
    }
    trainerMarkers.addTo(map);
    allOverlays.push(trainerMarkers)
  }

  //Map Connections
  checkboxCheck=document.getElementById("showConnections");
  if(checkboxCheck.checked){
    currentWorkingList=currentData[4]
    connectionMarkers = L.layerGroup();
    for (var i = 0; i < currentWorkingList.length; i++){
      curLine = L.polyline([[currentWorkingList[i][0],currentWorkingList[i][1]], [currentWorkingList[i][2],currentWorkingList[i][3]]]);
      connectionMarkers.addLayer(curLine);
    }
    allOverlays.push(connectionMarkers);
    connectionMarkers.addTo(map);
  }

  checkboxCheck=document.getElementById("showHiddenItems");
  if(checkboxCheck.checked){
    currentWorkingList=currentData[5]
    connectionMarkers = L.layerGroup();
    for (var i = 0; i < currentWorkingList.length; i++){
      curLine = L.marker(L.latLng(currentWorkingList[i][1],currentWorkingList[i][2]), {icon: hiddenIcon}).bindPopup(currentWorkingList[i][0]);
      connectionMarkers.addLayer(curLine);
    }
    allOverlays.push(connectionMarkers);
    connectionMarkers.addTo(map);
  }

}

function createEncounterTable(locationName){
  var thisMapEncounters=document.getElementById("thisMapEncounters");

  if(locationName=="No Encounters"){
    fulltext='<p class="NoEncounters">No Encounters</p>';
    thisMapEncounters.innerHTML=fulltext;
    return;
  }

  var fulltext="";
  for(locationsMap=0; locationsMap<locationName.length; locationsMap++){
    fullEncounterList = returnHashedArray(locationName[locationsMap]);
    encounterTypeList=fullEncounterList[0][1];
    for(encounterType=0; encounterType<encounterTypeList.length; encounterType++){
      EncType = fullEncounterList[encounterType+1];
      fulltext+='<table class="mapEncounterTable"><tr><th class="mapEncounterTableMethod" colspan="9">'+encounterTypeList[encounterType]+'</th></tr>';
      methodList=EncType[1][1];
      pokemonEncTypeList=EncType[2];
      for(curPok=0; curPok<pokemonEncTypeList.length; curPok++){
        fulltext+=createPokemonText(pokemonEncTypeList[curPok],methodList)+'<tr><td colspan="9"></td></tr>';
      }
      fulltext=fulltext.slice(0,-30);
      fulltext+='</table><br>'
    }
  }
  thisMapEncounters.innerHTML=fulltext;
  return; 

  
  var timeofDayNum;
  var timeofDayList=[];
  var locationNumber=[];
  var currentLocationArray;

  //Random Encounters
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
  currentPokemonNumberText = thisPokemon[0][0].substr(0,3);
  currentPokemonNumber = parseInt(currentPokemonNumberText);
  currentPokemon = BattlePokedex[currentPokemonNumber-1];

  //Form Check
  if(thisPokemon[0][0].length==3){
    currentPokemonFormNumber=0;
  }
  else {
    currentPokemonFormNumber=thisPokemon[0][0].slice(thisPokemon[0][0].length-1);
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
        <img class="mapEncounterTableImage" src="../../images/PokemonSprites/`+thisPokemon[0][0]+`.png"><br>#`+currentPokemonNumberText+`, `+currentPokemonForm[0]+'<br>Held Item: <br>'+currentPokemonHoldItemText+'</th>';
  
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

function showHiddenList(selectElement){
  var allhiddenLists=document.getElementsByClassName("areaSelect")
  for (var i = 0; i < allhiddenLists.length; i++) {
    allhiddenLists[i].style.display="none";
  }
  if(typeof selectElement === 'string'){
    hiddenList=document.getElementById(selectElement);
    hiddenList.style.display="block";
    return
  }
  hiddenList=document.getElementById(selectElement.value);
  if(hiddenList==null){
    return
  }
  if(hiddenList.style.display=="none"){
    hiddenList.style.display="block";
  } else {
    hiddenList.style.display="none";
  }

  if(selectElement.value=="FloriaIsland"){
    showHiddenList2("EastGearenCity");
  } else if(selectElement.value=="TerajumaIsland"){
    showHiddenList2("TerajumaBeach");
  } else if(selectElement.value=="AeviumPast"){
    showHiddenList2("Kugearen");
  } else if(selectElement.value=="TerrialIsland"){
    showHiddenList2("Route7");
  } else if(selectElement.value=="Badlands"){
    showHiddenList2("ZorrailynArea");
  }
}

function showHiddenList2(selectElement){
  var allhiddenLists=document.getElementsByClassName("locationSelect")
  for (var i = 0; i < allhiddenLists.length; i++) {
    allhiddenLists[i].style.display="none";
  }
  if(typeof selectElement === 'string'){
    hiddenList=document.getElementById(selectElement);
    hiddenList.style.display="block";
    return
  }
  hiddenList=document.getElementById(selectElement.value);
  if(hiddenList==null){
    return
  }
  if(hiddenList.style.display=="none"){
    hiddenList.style.display="block";
  } else {
    hiddenList.style.display="none";
  }
}