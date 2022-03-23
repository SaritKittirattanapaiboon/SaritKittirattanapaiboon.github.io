let allCitizens = []
var fileAmount = 23;
var individualFileAmount = 34741;
var mySeed = String(Math.round(Math.random()*100000000))
var myrng = new Math.seedrandom(mySeed)
var sampleRecieved = false;

function resetSeed(){
    mySeed = document.getElementById("seedInputTextInput").value;
    myrng = new Math.seedrandom(mySeed);
    sampleRecieved = false;
}

function getNumbersTest(){
    //document.getElementById("outputNumbers").value = myrng();
}

function loadAllCitizens(){
    fileNameBase = 'allCitizens'
    for(loop = 0; loop < fileAmount; loop++){
        allCitizens.push(JSON.parse(eval(fileNameBase + String(loop))));
    }

    document.getElementById("seedInputTextInput").value = mySeed;
} //Initilize all the population files and seed

function getRandomCitizen(){
    if(sampleRecieved){
        return
    }
    let fileArray = new Array(fileAmount); fileArray.fill(0);
    let individualArray = new Array(individualFileAmount); individualArray.fill(0); //Arrays to ensure that there are no repeated samples

    randomCitizensAgeShopping = [];
    randomCitizensAgeMovies = [];
    randomCitizensMoneyShopping = [];
    randomCitizensMoneyMovies = [];

    movieCount = 0;
    shoppingCount = 0;

    var sampleSize = 1000; //sample size value, replace with text input from page if needed

    randomFile = Math.floor(myrng() * fileAmount); //Random File
    randomID = Math.floor(myrng() * individualFileAmount); //Random ID
    
    //Loop for selecting the samples and creating the table
    for(loop = 0; loop < sampleSize; loop++){
        while(fileArray[randomFile] != 0 && individualArray[randomID] != 0){
            randomFile = Math.floor(myrng() * fileAmount); //Random File
            randomID = Math.floor(myrng() * individualFileAmount); //Random ID
        } //Ensure that there is no repeated samples
        fileArray[randomFile] = 1;
        individualArray[randomID] = 1;

        if(allCitizens[randomFile]['Purpose of Visit'][randomID] == 'Watching Movies'){
            randomCitizensAgeMovies.push(allCitizens[randomFile]['Age'][randomID]); //For Analysis
            randomCitizensMoneyMovies.push(allCitizens[randomFile]['Amount of Money Spent'][randomID]); //For Analysis
            movieCount += 1;
        }
        else if(allCitizens[randomFile]['Purpose of Visit'][randomID] == 'Shopping'){
            randomCitizensAgeShopping.push(allCitizens[randomFile]['Age'][randomID]); //For Analysis
            randomCitizensMoneyShopping.push(allCitizens[randomFile]['Amount of Money Spent'][randomID]); //For Analysis
            shoppingCount += 1;
        }
    }

    //Data Analysis
    movieAgeData = getAverage(randomCitizensAgeMovies)
    movieMoneyData = getAverage(randomCitizensMoneyMovies)
    shoppingAgeData = getAverage(randomCitizensAgeShopping)
    shoppingMoneyData = getAverage(randomCitizensMoneyShopping)

    //Question 1
    document.getElementById("Question1Area").innerHTML = "Question 1:<br><br>Out of 1000 customers at the mall, " + movieCount + " people came to watch movies and " + shoppingCount + " people came to do some shopping"

    //Question 2
    document.getElementById("Question2Area").innerHTML = "Question 2:<br><br>The average age of the customers that come to watch movies is " + movieAgeData[0] + " with a standard deviation of " + movieAgeData[1] + ".<br><br>The average age of the customers that come to shop is " + shoppingAgeData[0] + " with a standard deviation of " + shoppingAgeData[1] + "."

    //Question 3
    document.getElementById("Question3Area").innerHTML = "Question 3:<br><br>Information is provided in the test paper."

    //Question 4
    document.getElementById("Question4Area").innerHTML = "Question 4:<br><br>The average amount of money speny by customers that come to watch movies is " + movieMoneyData[0] + " with a standard deviation of " + movieMoneyData[1] + ".<br><br>The average amount of money speny by customers that come to shop is " + shoppingMoneyData[0] + " with a standard deviation of " + shoppingMoneyData[1] + "."

    //Question 5
    randomCustomers = [0,0,0,0,0]
    randomCustomers[0] = Math.floor(myrng() * randomCitizensMoneyShopping.length);
    randomCustomers[1] = Math.floor(myrng() * randomCitizensMoneyShopping.length);
    randomCustomers[2] = Math.floor(myrng() * randomCitizensMoneyShopping.length);
    randomCustomers[3] = Math.floor(myrng() * randomCitizensMoneyShopping.length);
    randomCustomers[4] = Math.floor(myrng() * randomCitizensMoneyShopping.length);
    randomCustomers[5] = Math.floor(myrng() * randomCitizensMoneyShopping.length);
    tabletext = '<table id="sampleResultTable"><tr><th>Customer Number</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr>';
    tabletext += '<tr><th>Amount Spent<br>(No Sale)</th><th>'+randomCitizensMoneyShopping[randomCustomers[0]]+'.00</th><th>'+randomCitizensMoneyShopping[randomCustomers[1]]+'.00</th><th>'+randomCitizensMoneyShopping[randomCustomers[2]]+'.00</th><th>'+randomCitizensMoneyShopping[randomCustomers[3]]+'.00</th><th>'+randomCitizensMoneyShopping[randomCustomers[4]]+'.00</th><th>'+randomCitizensMoneyShopping[randomCustomers[5]]+'.00</th></tr>';
    tabletext += '<tr><th>Amount Spent<br>(Sale)</th><th>'+Math.floor((randomCitizensMoneyShopping[randomCustomers[0]]*(((myrng()*60)+80)/100)))+'.00</th><th>'+Math.floor((randomCitizensMoneyShopping[randomCustomers[1]]*(((myrng()*60)+80)/100)))+'.00</th><th>'+Math.floor((randomCitizensMoneyShopping[randomCustomers[2]]*(((myrng()*60)+80)/100)))+'.00</th><th>'+Math.floor((randomCitizensMoneyShopping[randomCustomers[3]]*(((myrng()*60)+80)/100)))+'.00</th><th>'+Math.floor((randomCitizensMoneyShopping[randomCustomers[4]]*(((myrng()*60)+80)/100)))+'.00</th><th>'+Math.floor((randomCitizensMoneyShopping[randomCustomers[5]]*(((myrng()*60)+80)/100)))+'.00</th></tr>';
    document.getElementById("Question5Area").innerHTML = "Question 5:<br><br>Below is a table of the average amount of money spent by 5 customers on days where there are no items on sale and days where there are items on sale:<br><br>" + tabletext;

    sampleRecieved = true;
} //Get a random sample of 1000 individuals

function getAverage(arrayHere){
    data = [0,0]
    sum = 0;
    for(loop = 0; loop < arrayHere.length; loop++){
        sum += arrayHere[loop];
    }
    data[0] = Math.round((sum/arrayHere.length)*100)/100;

    sum = 0;
    for(loop = 0; loop < arrayHere.length; loop++){
        sum += Math.pow(arrayHere[loop]-data[0],2);
    }
    data[1] = Math.round(Math.sqrt(sum/arrayHere.length)*100)/100

    return data
} //Get average and standard deviation as strings