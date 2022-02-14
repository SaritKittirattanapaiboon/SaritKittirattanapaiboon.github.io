let allCitizens = []
var fileAmount = 63;
var individualFileAmount = 48752;

function loadAllCitizens(){
    fileNameBase = 'allCitizens'
    for(loop = 0; loop < fileAmount; loop++){
        allCitizens.push(JSON.parse(eval(fileNameBase + String(loop))));
    }
} //Initilize all the population files


function getRandomCitizen(){
    let fileArray = new Array(fileAmount); fileArray.fill(0);
    let individualArray = new Array(individualFileAmount); individualArray.fill(0); //Arrays to ensure that there are no repeated samples

    randomCitizensAge = [];
    randomCitizensHeight = [];
    randomCitizensWeight = [];
    randomCitizensPurpose = [];
    randomCitizensMoney = [];
    var tableString = '<table id="sampleResultTable"><tr><th>ID</th><th>Age</th><th>Height (cm)</th><th>Weight (kg)</th><th>Purpose of Visit</th><th>Amount of Money Spent (Baht)</th>';
    var sampleSize = 100; //sample size value, replace with text input from page if needed

    randomFile = Math.floor(Math.random() * fileAmount); //Random File
    randomID = Math.floor(Math.random() * individualFileAmount); //Random ID
    
    //Loop for selecting the samples and creating the table
    for(loop = 0; loop < sampleSize; loop++){
        while(fileArray[randomFile] != 0 && individualArray[randomID] != 0){
            randomFile = Math.floor(Math.random() * fileAmount); //Random File
            randomID = Math.floor(Math.random() * individualFileAmount); //Random ID
        } //Ensure that there is no repeated samples
        fileArray[randomFile] = 1;
        individualArray[randomID] = 1;

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

    /////////// Get and display analysis of data
    allPurposes = getPercentages(randomCitizensPurpose);
    var numericalString = '<table id="numericalResultTable">'
    numericalString += '<tr class="numbers"><td colspan="3">Average Age (Years):<br>Standard Deviation Age (Years):</td><td colspan="3">' + getAverage(randomCitizensAge) + '</td><td colspan="3">Average Money Spent (Baht):<br>Standard Deviation Money Spent (Baht):</td><td colspan="3">' + getAverage(randomCitizensMoney) + '</td></tr>';
    numericalString += '<tr class="numbers"><td colspan="3">Average Height (cm):<br>Standard Deviation Height (cm):</td><td colspan="3">' + getAverage(randomCitizensHeight) + '</td><td colspan="3">Average Weight (kg)<br>Standard Deviation Weight (kg)</td><td colspan="3">' + getAverage(randomCitizensWeight) + '</td></tr>';
    numericalString += '<tr class="percentages"><td colspan="2">Shopping %</td><td colspan="2">' + allPurposes[0] + '%</td><td colspan="2">Eating %</td><td colspan="2">' + allPurposes[1] + '%</td><td colspan="2">Socializing %</td><td colspan="2">' + allPurposes[2] + '%</td>'
    numericalString += '<tr class="percentages"><td colspan="2">Movies %</td><td colspan="2">' + allPurposes[3] + '%</td><td colspan="2">Work-Related %</td><td colspan="2">' + allPurposes[4] + '%</td><td colspan="2">Others %</td><td colspan="2">' + allPurposes[5] + '%</td>'
    numericalString += '</table><br><br>';
    document.getElementById("numericalResult").innerHTML = numericalString;
    ///////////

    
} //Get a random sample of 100 individuals

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
} //Get average and standard deviation as strings

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
            allCounts[0]++; //Shopping
        }
    }

    return allCounts;
} //Get percentages of each reason to visit ******* Will need to change if sample size is NOT 100