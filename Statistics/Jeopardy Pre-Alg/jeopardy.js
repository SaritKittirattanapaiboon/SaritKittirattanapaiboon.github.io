var allquestions = JSON.parse(jeopardyQuestionList);

var currentAnswer = '';

function escapeToClose(){
    document.getElementById("questionDiv").style.display="none";
} //Press escape to close from the questions view

function setSet(){
    document.getElementById('chooseSet').style.display='none';
    document.getElementById("gameLocation").innerHTML='';

    gametableText = '<table class="gameTable"><tr class="categories" id="curSetCategories">';
    gametableText += '<th>'+allCategories[setNumber-1][0]+'</th><th>'+allCategories[setNumber-1][1]+'</th><th>'+allCategories[setNumber-1][2]+'</th><th>'+allCategories[setNumber-1][3]+'</th>'
    
    catNumberLoop = 1;
    queNumberLoop = 1;
    if(setNumber==1){
        gametableText += '<th>'+allCategories[setNumber-1][4]+'</th></tr>';
        maxCat = 6;
    } else {
        gametableText += '</tr>';
        maxCat = 5;
    }
    while (queNumberLoop<6){
        gametableText += '<tr class="questionValues">';
        catNumberLoop = 1;
            while(catNumberLoop<maxCat){
                curqueID = catNumberLoop.toString() + "Q" + queNumberLoop.toString();
                gametableText += '<td class="unclicked" id="'+curqueID+'Loc">'
                gametableText += '<button class="questionButton" id="'+curqueID+'" onclick="openQuestion(\''+curqueID+'\');">'+allScores[setNumber-1][queNumberLoop-1][catNumberLoop-1]+'</button></td>';
                catNumberLoop++;
            }
        gametableText += '</tr>';
        queNumberLoop++;
    }
    gametableText += '</table>';

    document.getElementById("gameLocation").innerHTML=gametableText;
}

function openQuestion(thisQuestion){
    document.getElementById("questionDiv").style.display="block";
    curQuestionDiv = document.getElementById("questionDiv");
    temptext = '';
    temptext += '<div id="questionArea">' + getQuestion(thisQuestion) + '</div>';
    temptext += '<div id="answerArea"><button class="answerButton" id="'+thisQuestion+'Ans" onclick="showAnswer(\''+thisQuestion+'\');">Show Answer</button></div>';
    curQuestionDiv.innerHTML = temptext;

    document.getElementById(thisQuestion+"Loc").className = "clicked";
    document.getElementById(thisQuestion+"Loc").innerHTML = document.getElementById(thisQuestion).innerHTML;
} //Open the selected question

function getQuestion(thisQuestion){
    var catNum = parseInt(thisQuestion[0]);
    var queNum = parseInt(thisQuestion[2]);

    var curSetQuestions = questionsList[setNumber-1];

    temptext = '';
    temptext += "Category: " + catNum.toString() + ", Question #" + queNum.toString() + "<br><br>";
    catNum = catNum - 1;
    queNum = queNum - 1;
    temptext += curSetQuestions[catNum][queNum][1] + "<br>";

    currentAnswer = curSetQuestions[catNum][queNum][2];

    temptabletext = '';
    if(curSetQuestions[catNum][queNum][0] == "MC"){
        temptabletext = '';
        temptabletext += '<br><br><table class="multipleChoiceTable"><tr><td>'+curSetQuestions[catNum][queNum][3]+'</td><td>'+curSetQuestions[catNum][queNum][4]+'</td></tr><tr><td>'+curSetQuestions[catNum][queNum][5]+'</td><td>'+curSetQuestions[catNum][queNum][6]+'</td></tr></table>';
    }
    temptext += temptabletext;

    return temptext;
}

function showAnswer(thisAnswer){
    temptext = '';
    temptext += currentAnswer;
    temptext += '<br><button class="answerButton" onclick="escapeToClose();">Back to Panel</button>';

    document.getElementById("answerArea").innerHTML=temptext
} //Show the answer to the question

function resetAll(){
    document.getElementById("gameLocation").innerHTML = "";
    document.getElementById("chooseSet").innerHTML = '<div class="buttonLoc"><button class="setButton" onclick="setNumber=1;setSet()">Chapter 1-2</button></div><div class="buttonLoc"><button class="setButton" onclick="setNumber=2;setSet();">Chapter 3</button></div><div class="buttonLoc"><button class="setButton" onclick="setNumber=3;setSet();">Chapter 4-5</button></div>'
    document.getElementById('chooseSet').style.display='block';
}