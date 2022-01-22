function rollDice(){
    var numberofDice = document.getElementById("numberOfDiceInput").value;
    if(numberofDice==0){numberofDice=5;}

    var diceRollResultElement = document.getElementById("diceRollResult");
    var diceRolls = [];
    var curRoll = 0;

    var diceFrequencies = [0,0,0,0,0,0]

    while(curRoll<numberofDice){
        newRoll = Math.floor(Math.random() * 6)+1;
        if(newRoll == 1){
            diceRolls.push('Wildcard');
            diceFrequencies[newRoll-1]++;
        } else {
            diceRolls.push(newRoll);
            diceFrequencies[newRoll-1]++;
        }
        curRoll++;
    }
    
    diceRollResultElement.innerHTML = displayDice(diceFrequencies);;

    return diceFrequencies;
}

function displayDice(diceFrequencies){
    curNumber = 1;
    tabletext = '<table id="diceResultTable"><tbody><tr>'
    while(curNumber<7){
        if(diceFrequencies[curNumber-1]>0){
            for(i=0;i<diceFrequencies[curNumber-1];i++){
                tabletext += '<td><img src="'+curNumber+'Dice.png"></td>'
            }
        }
        curNumber++;
    }
    tabletext += '</tr></tbody></table>'
    return tabletext;
}

function generateProbabilityTable(thisCurrentDice){
    numberofRemainingDice = document.getElementById("numberofRemainingDiceInput").value;
    if(numberofRemainingDice==0){numberofRemainingDice=10;}

    curLoop = 0;
    curNumber = 2;

    tableLocation = document.getElementById("probabilityTable");
    tableText = '<tbody>'

    tableText += '<tr><th colspan="2">"Wildcards"</th><th colspan="2">"2"</th><th colspan="2">"3"</th><th colspan="2">"4"</th><th colspan="2">"5"</th><th colspan="2">"6"</th></tr>'

    

    while(curLoop <= numberofRemainingDice){
        tableText += '<tr>';
        curPercentage = Math.floor(((factorial(numberofRemainingDice)/((factorial(curLoop)*factorial(numberofRemainingDice-curLoop)))))*(Math.pow(1/6,curLoop))*(Math.pow(5/6,numberofRemainingDice-curLoop))*100);
        tableText += '<td class="numberOfDiceCSS">' + (curLoop+thisCurrentDice[0]) + '</td><td class="percentageNumberCSS">' + curPercentage + '%</td>';

        curNumber = 2;
        while(curNumber < 7){
            curPercentage = Math.floor(((factorial(numberofRemainingDice)/((factorial(curLoop)*factorial(numberofRemainingDice-curLoop)))))*(Math.pow(2/6,curLoop))*(Math.pow(4/6,numberofRemainingDice-curLoop))*100);
            tableText += '<td class="numberOfDiceCSS">' + (curLoop+thisCurrentDice[0]+thisCurrentDice[curNumber-1]) + '</td><td class="percentageNumberCSS">' + curPercentage + '%</td>';
            curNumber++;
        }
        curLoop++;
    }
    

    tableText += '</tbody>'
    tableLocation.innerHTML = tableText;
}

function factorial(thisNumber){
    if(thisNumber == 0 || thisNumber == 1){
        return 1;
    }
    tempNumber = thisNumber;
    while(thisNumber>1){
        thisNumber--;
        tempNumber = tempNumber * thisNumber;
    }
    return tempNumber;
}