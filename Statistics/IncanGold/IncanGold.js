allGemCards = ["Gem01", "Gem02", "Gem03", "Gem04", "Gem05", "Gem06", "Gem07", "Gem08", "Gem09", "Gem10", "Gem11", "Gem12", "Gem13", "Gem14", "Gem15", "Gem16", "Gem17", "Gem18", "Gem19", "Gem20", "Gem21", "Gem22", "Gem23", "Gem24", "Gem25", "Gem26", "Gem27", "Gem28", "Gem29", "Gem30"];
allTrapCards = ["TrapF", "TrapF", "TrapF", "TrapS", "TrapS", "TrapS", "TrapR", "TrapR", "TrapR", "TrapM", "TrapM", "TrapM", "TrapP", "TrapP", "TrapP"];
tempTrapCount = [3,3,3,3,3];
trapNumbers = [0,0,0,0,0];
trapCount = [3,3,3,3,3];
allArtifactCards = [];
templeNames = ['Round1Result', 'Round2Result', 'Round3Result', 'Round4Result', 'Round5Result'];
playedCards = [];

endOfGame=true;
addedArtifact=false;
playerNumEntered=false;
afterOverCardCheck=false;
alreadyShuffled = false;
totalCards=0;
GemCardsNum=0;
TrapCardsNum=0;
ArtCardsNum=0;
numberOfPlayers=0;
playersRemaining=0;
currenttempleNum=-1;

function displayCardNumbers(){
    numberValueLoc = document.getElementById("CardsLeft");
    numberValueLoc.innerHTML = totalCards + " Cards Left in Deck";
            
    numberValueLoc = document.getElementById("GemCardsLeft");
    numberValueLoc.innerHTML = GemCardsNum + " Gem Cards Left in Deck";
            
    numberValueLoc = document.getElementById("TrapCardsLeft");
    numberValueLoc.innerHTML = TrapCardsNum + " Trap Cards Left in Deck";
            
    numberValueLoc = document.getElementById("ArtCardsLeft");
    numberValueLoc.innerHTML = ArtCardsNum + " Artifact Cards Left in Deck";
            
    numberValueLoc = document.getElementById("RemainingPlayers");
    numberValueLoc.innerHTML = "There are " + playersRemaining + " players left in the temple";

    numberValueLoc = document.getElementById("TrapCardsDetails");
    trapString = "";
    trapString += trapCount[0]-trapNumbers[0].toString() + " Fire Traps Left<br>";
    trapString += trapCount[1]-trapNumbers[1].toString() + " Snake Traps Left<br>";
    trapString += trapCount[2]-trapNumbers[2].toString() + " Rock Traps Left<br>";
    trapString += trapCount[3]-trapNumbers[3].toString() + " Mummy Traps Left<br>";
    trapString += trapCount[4]-trapNumbers[4].toString() + " Spider Traps Left<br>";
    numberValueLoc.innerHTML = trapString;
}
        
function setUpDeck(roundNumber){
    if(!playerNumEntered || currenttempleNum>4){
        return;
    }
    if(!endOfGame){
        return;
    }
    playedCards = [];
    currentTrapDeck = allTrapCards.slice();
    currentGemDeck = allGemCards.slice();
            
    currentGemDeck = shuffle(currentGemDeck);
    currentTrapDeck = shuffle(currentTrapDeck);
    currentGemDeck = shuffle(currentGemDeck);
    currentTrapDeck = shuffle(currentTrapDeck);
    currentGemDeck = shuffle(currentGemDeck);
    currentTrapDeck = shuffle(currentTrapDeck);
    if(allArtifactCards.length<=roundNumber && !addedArtifact){
        allArtifactCards.push("Artifact");
        addedArtifact = true;
    }
    trapNumbers = [0,0,0,0,0]
    endOfGame = false;
    GemCardsNum = currentGemDeck.length;
    TrapCardsNum = currentTrapDeck.length;
    ArtCardsNum = allArtifactCards.length;
    totalCards = GemCardsNum + TrapCardsNum + ArtCardsNum;
    playersRemaining = numberOfPlayers;
    currenttempleNum += 1;
    alreadyShuffled = true;
    trapCount = tempTrapCount;

    displayCardNumbers();
}

function drawCardAfter(){
    if(!endOfGame){
        return;
    }
    afterOverCardCheck = true;
    endOfGame = false;
    drawCard();
    afterOverCardCheck = false;
    endOfGame = true;
}

function drawCard(){
    roundName=templeNames[currenttempleNum];
    if(!playerNumEntered){
        return
    }
    eachPlayerGems = 0;
    gemValue = 0;
    altText = "";
    if(endOfGame || currenttempleNum>4){
        return;
    }
    resultDiv = document.getElementById(roundName);
    currentText = resultDiv.innerHTML;
    totalCards = currentGemDeck.length + currentTrapDeck.length;
    randomIndex = Math.floor(Math.random() * totalCards);
    if((randomIndex == 0 || totalCards==0) && allArtifactCards.length>0){
        thisCard = allArtifactCards[0];
        thisCard += "<br>[5]"
        allArtifactCards.shift();
        ArtCardsNum -= 1;
    } else if (randomIndex <= currentTrapDeck.length && currentTrapDeck.length>0) {
        thisCard = currentTrapDeck[0];
        currentTrapDeck.shift();
        TrapCardsNum -= 1;
    } else {
        thisCard = currentGemDeck[0];
        gemValue = checkGemValue(thisCard);
        eachPlayerGems = (gemValue-(gemValue%playersRemaining))/playersRemaining;
        thisCard = gemValue.toString() + " Gems Found<br>Each player receives " + eachPlayerGems + " gems";
        thisCard += "<br>(" + gemValue%playersRemaining + " leftover)"
        currentGemDeck.shift();
        GemCardsNum -= 1;
    }
    thisCard = addTrap(thisCard);

    playedCards.push(thisCard);

    currentText = generateTable(playedCards);

    if(endGameCheck()){
        if(afterOverCardCheck){

        } else {
            resultAfterDiv = document.getElementById(templeNames[currenttempleNum] + "After");
            resultAfterDiv.innerHTML += '<p style="text-align:center;font-weight:bolder">The temple has collapsed. End of Round.</p>'
            endOfGame = true;
            addedArtifact = false;
            tempTrapCount = trapCount;
        }
    } else {
        currentText += altText;
    }
    resultDiv.innerHTML = currentText;
    displayCardNumbers();
}
        
function checkGemValue(GemCard){
    return parseInt(GemCard.slice(-2));
}

function addTrap(curCard){
    if(curCard == "TrapF"){
        trapNumbers[0]++;
        return "Trap<br>Fire";
    } else if (curCard == "TrapS"){
        trapNumbers[1]++;
        return "Trap<br>Snake";
    } else if (curCard == "TrapR"){
        trapNumbers[2]++;
        return "Trap<br>Rocks";
    } else if (curCard == "TrapM"){
        trapNumbers[3]++;
        return "Trap<br>Mummy";
    } else if (curCard == "TrapP"){
        trapNumbers[4]++;
        return "Trap<br>Spider";
    } else return curCard;
}

function endGameCheck(){
    if(afterOverCardCheck){
        return true;
    }
    if(trapNumbers[0]==2){
        locationNum=allTrapCards.indexOf('TrapF');
        allTrapCards.splice(locationNum,1);
        trapCount[0]--;
        return true;
    } else if(trapNumbers[1]==2){
        locationNum=allTrapCards.indexOf('TrapS');
        allTrapCards.splice(locationNum,1);
        trapCount[1]--;
        return true;
    } else if(trapNumbers[2]==2){
        locationNum=allTrapCards.indexOf('TrapR');
        allTrapCards.splice(locationNum,1);
        trapCount[2]--;
        return true;
    } else if(trapNumbers[3]==2){
        locationNum=allTrapCards.indexOf('TrapM');
        allTrapCards.splice(locationNum,1);
        trapCount[3]--;
        return true;
    } else if(trapNumbers[4]==2){
        locationNum=allTrapCards.indexOf('TrapP');
        allTrapCards.splice(locationNum,1);
        trapCount[4]--;
        return true;
    } else {
        return false;
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function reset(){
    allGemCards = ["Gem01", "Gem02", "Gem03", "Gem04", "Gem05", "Gem06", "Gem07", "Gem08", "Gem09", "Gem10", "Gem11", "Gem12", "Gem13", "Gem14", "Gem15", "Gem16", "Gem17", "Gem18", "Gem19", "Gem20", "Gem21", "Gem22", "Gem23", "Gem24", "Gem25", "Gem26", "Gem27", "Gem28", "Gem29", "Gem30"];
    allTrapCards = ["TrapF", "TrapF", "TrapF", "TrapS", "TrapS", "TrapS", "TrapR", "TrapR", "TrapR", "TrapM", "TrapM", "TrapM", "TrapP", "TrapP", "TrapP"];
    tempTrapCount = [3,3,3,3,3];
    allArtifactCards = [];
    endOfGame=true;
    addedArtifact=false;
    totalCards=0;
    GemCardsNum=0;
    TrapCardsNum=0;
    ArtCardsNum=0;
    numberOfPlayers=0;
            
    resultDiv = document.getElementById("Round1Result");
    resultDiv.innerHTML = "";
    resultDiv = document.getElementById("Round2Result");
    resultDiv.innerHTML = "";
    resultDiv = document.getElementById("Round3Result");
    resultDiv.innerHTML = "";
    resultDiv = document.getElementById("Round4Result");
    resultDiv.innerHTML = "";
    resultDiv = document.getElementById("Round5Result");
    resultDiv.innerHTML = "";

    currenttempleNum=-1;
    currentTemple=templeNames[0];

    PlayerNumberInput = document.getElementById("playersPopup");
    PlayerNumberInput.style.display = "block"
}
        
function readPlayerNumbers(){
    PlayerNumberInput = document.getElementById("PlayerNumbers").value;
    numberOfPlayers = PlayerNumberInput;

    PlayerNumberInput = document.getElementById("playersPopup");
    PlayerNumberInput.style.display = "none"

    PlayerNumberDisplay = document.getElementById("TotalPlayers");
    tempstring = 'There are ' + numberOfPlayers + ' players in this game';
    PlayerNumberDisplay.innerHTML = tempstring;
    playerNumEntered=true;
}
        
function getPosition(thisString, pattern, n) {
    var i = -1;
    while (n-- && i++ < thisString.length) {
        i = thisString.indexOf(pattern, i);
        if (i < 0) break;
    }
    return i;
}
        
function replaceAt(thisString, index, replacement) {
    return thisString.substr(0, index) + replacement + thisString.substr(index + 1);
}

function PlayersLeave(){
    if(endOfGame){
        return;
    }
    if(!playerNumEntered){
        return
    }

    playersLeavingLoc = document.getElementById("LeavingPlayersGemCount");
            
    gemsLeavingNumber = 0;
    artifactLeavingNumber = 0;
    currentParen = 1;
            
     PlayersLeavingNumberInput = document.getElementById("PlayersLeaving").value;
    if(isNaN(PlayersLeavingNumberInput)){
        return;
    }
    PlayersLeavingNum = parseInt(PlayersLeavingNumberInput);
    playersRemaining = playersRemaining - PlayersLeavingNum;
            
    curTempleResultDiv = document.getElementById(templeNames[currenttempleNum]);
    curTempleResult = curTempleResultDiv.innerHTML;
                        
    parenthesesLoc = getPosition(curTempleResult, "(", currentParen);
    currentParen += 1;
            
    while(parenthesesLoc != -1){
        curGemsLeaving = parseInt(curTempleResult.charAt(parenthesesLoc+1));
        remained = curGemsLeaving%PlayersLeavingNum;
        gemsLeavingNumber += (curGemsLeaving - remained);
        curTempleResult = replaceAt(curTempleResult, parenthesesLoc+1, remained.toString());
        parenthesesLoc = getPosition(curTempleResult, "(", currentParen);
        currentParen += 1;
    }
    gemsLeavingNumber=gemsLeavingNumber/PlayersLeavingNum;

    if(PlayersLeavingNum==1){
        currentParen = 1;
        parenthesesLoc = getPosition(curTempleResult, "[", currentParen);
        currentParen += 1;
                
        while(parenthesesLoc != -1){
            curGemsLeaving = parseInt(curTempleResult.charAt(parenthesesLoc+1));
            gemsLeavingNumber += curGemsLeaving;
            curTempleResult = replaceAt(curTempleResult, parenthesesLoc+1, "0");
            parenthesesLoc = getPosition(curTempleResult, "[", currentParen);
            currentParen += 1;
        }
    }

    playersLeavingLoc.innerHTML = "Each player that is leaving receives " + gemsLeavingNumber + " gems";
    curTempleResultDiv.innerHTML = curTempleResult;
            
    displayCardNumbers();

    if(playersRemaining==0){
        resultDiv = document.getElementById(templeNames[currenttempleNum] + "After");
        currentText = resultDiv.innerHTML;
        currentText += '<p style="font-weight:bolder;text-align:center;">All players have left the temple. End of Round.</p>';
        resultDiv.innerHTML = currentText;
        endOfGame = true;
        addedArtifact = false;
        tempTrapCount = trapCount;
    }
}

function generateTable(cardArray){
    cellCount = cardArray.length-1;
    if(currentText == ''){
        tableString = '<table class="roundResultsTable"><tr>';
    } else {
        if(cellCount % 5 != 0){
            tableString  = currentText.slice(0, -21);
        } else {
            tableString = currentText.slice(0, -16);
        }
    }
            
    while(cellCount<cardArray.length){
        tableString += '<td>'
        if(cardArray[cellCount].search("Spider")!=-1){
            tableString += '<img class="allImages" src="Spider.svg"><br>'
        } else if (cardArray[cellCount].search("Snake")!=-1){
             tableString += '<img class="allImages" src="Snake.svg"><br>'
        } else if (cardArray[cellCount].search("Fire")!=-1){
            tableString += '<img class="allImages" src="Fire.svg"><br>'
        } else if (cardArray[cellCount].search("Rock")!=-1){
            tableString += '<img class="allImages" src="Rock.png"><br>'
        } else if (cardArray[cellCount].search("Mummy")!=-1){
            tableString += '<img class="allImages" src="Mummy.png"><br>'
        } else if (cardArray[cellCount].search("Artifact")!=-1){
            tableString += '<img class="allImages" src="Treasure.svg"><br>'
        } else {
            tableString += '<img class="allImages" src="Gem.svg"><br>'
        } 
        tableString += cardArray[cellCount] + '</td>';
        cellCount++;
        if(cellCount % 5 == 0){
            tableString += '</tr><tr>'
        }
    }
    tableString += '</tr></table>'
    return tableString;
}
