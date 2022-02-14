let allCitizens = []

function loadAllCitizens(){
    fileNameBase = 'allCitizens'
    for(loop = 0; loop < 547; loop++){
        allCitizens.push(JSON.parse(eval(fileNameBase + String(loop))));
    }
}


function getRandomCitizen(){
    randomCitizensAge = [];
    randomCitizensHeight = [];
    randomCitizensWeight = [];
    randomCitizensPurpose = [];
    randomCitizensMoney = [];
    var tableString = '<table id="sampleResultTable"><tr><th>ID</th><th>Age</th><th>Height (cm)</th><th>Weight (kg)</th><th>Purpose of Visit</th><th>Amount of Money Spent</th>';
    var sampleSize = 100;
    
    for(loop = 0; loop < sampleSize; loop++){
        randomFile = Math.floor(Math.random() * 547); //Random File
        randomID = Math.floor(Math.random() * 1687); //Random ID

        randomCitizensAge.push(allCitizens[randomFile]['Age'][randomID]); //For Analysis
        randomCitizensHeight.push(allCitizens[randomFile]['Height'][randomID]); //For Analysis
        randomCitizensWeight.push(allCitizens[randomFile]['Weight'][randomID]); //For Analysis
        randomCitizensPurpose.push(allCitizens[randomFile]['Purpose of Visit'][randomID]); //For Analysis
        randomCitizensMoney.push(allCitizens[randomFile]['Amount of Money Spent'][randomID]); //For Analysis

        tableString += '<tr>';
        tableString += '<td>' + allCitizens[randomFile]['ID'][randomID] + '</td>';
        tableString += '<td>' + allCitizens[randomFile]['Age'][randomID] + '</td>';
        tableString += '<td>' + allCitizens[randomFile]['Height'][randomID] + '</td>';
        tableString += '<td>' + allCitizens[randomFile]['Weight'][randomID] + '</td>';
        tableString += '<td>' + allCitizens[randomFile]['Purpose of Visit'][randomID] + '</td>';
        tableString += '<td>' + allCitizens[randomFile]['Amount of Money Spent'][randomID] + '</td>';
        tableString += '</tr>';
        //randomCitizens.push(allCitizens[randomFile]['ID'][randomID]) //get Citizen ID
    }
    tableString += '</table>';
    document.getElementById("tableResult").innerHTML = tableString;

    allPurposes = getPercentages(randomCitizensPurpose);

    var numericalString = '<table id="numericalResultTable">'
    numericalString += '<tr class="numbers"><td colspan="3">Average Age (Years):<br>Standard Deviation Age (Years):</td><td colspan="3">' + getAverage(randomCitizensAge) + '</td><td colspan="3">Average Money Spent (Baht):<br>Standard Deviation Money Spent (Baht):</td><td colspan="3">' + getAverage(randomCitizensMoney) + '</td></tr>';
    numericalString += '<tr class="numbers"><td colspan="3">Average Height (cm):<br>Standard Deviation Height (cm):</td><td colspan="3">' + getAverage(randomCitizensHeight) + '</td><td colspan="3">Average Weight (kg)<br>Standard Deviation Weight (kg)</td><td colspan="3">' + getAverage(randomCitizensWeight) + '</td></tr>';
    numericalString += '<tr class="percentages"><td colspan="2">Shopping %</td><td colspan="2">' + allPurposes[0] + '%</td><td colspan="2">Eating %</td><td colspan="2">' + allPurposes[1] + '%</td><td colspan="2">Socializing %</td><td colspan="2">' + allPurposes[2] + '%</td>'
    numericalString += '<tr class="percentages"><td colspan="2">Movies %</td><td colspan="2">' + allPurposes[3] + '%</td><td colspan="2">Work-Related %</td><td colspan="2">' + allPurposes[4] + '%</td><td colspan="2">Others %</td><td colspan="2">' + allPurposes[5] + '%</td>'
    numericalString += '</table><br><br>';

    document.getElementById("numericalResult").innerHTML = numericalString;
}

function getAverage(arrayHere){
    sum = 0;
    for(loop = 0; loop < arrayHere.length; loop++){
        sum += arrayHere[loop];
    }
    mean = sum/arrayHere.length;

    sum = 0;
    for(loop = 0; loop < arrayHere.length; loop++){
        sum += Math.pow(arrayHere[loop]-mean,2);
    }
    stdev = Math.round(Math.sqrt(sum/arrayHere.length)*100)/100

    return mean + '<br>' + stdev
    //return sum/arrayHere.length;
}

function getPercentages(arrayHere){
    allCounts = [0,0,0,0,0,0] //[Shopping, Eating, Socializing, Movies, Work, Others]

    for(loop = 0; loop < arrayHere.length; loop++){
        if(arrayHere[loop][0]=='M'){ //Work
            allCounts[4]++;
            continue
        } else if (arrayHere[loop][0]=='E'){ //Eating
            allCounts[1]++;
        } else if (arrayHere[loop][0]=='O'){ //Others
            allCounts[5]++;
        } else if (arrayHere[loop][0]=='W'){ //Movies
            allCounts[3]++;
        } else if (arrayHere[loop][1]=='o'){ //Socializing
            allCounts[2]++;
        } else {
            allCounts[0]++;
        }
    }

    return allCounts;
}