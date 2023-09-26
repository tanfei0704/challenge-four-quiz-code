var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var nextQuestions 
var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var addscore = document.getElementById("btn-start")
var score = 0;
var count = 60;
var alert =document.getElementById("alert");
var info = document.getElementById("info");
var allScores = [];
var currentindex = 0;
var storedScores = JSON.parse(localStorage.getItem("userData"));
var answerChioceText = document.getElementById("alert")
var questions = [
    {
        title: "Which language runs in a web browser?",
        choices:["Java","C","Python", "Java Script"],
        answerIndex : 3,
    },
    {
        title: "What year was JavaScript launched?",
        choices:["1996","1995","1994", "none of the above"],
        answerIndex : 1,  
    },
    {
        title: "What does CSS stand for?",
        choices:["Center Style Sheets","Cascading Style Sheets", "Cascading Simple Sheets","Cars SUVs Sailboats"],
        answerIndex : 1,   
    },
    {
        title: "What does HTML stand for?",
        choices:["Hypertext Markup language","Hypertext Markdown language","Hyperloop Machine Language","Helicopters Terminals Motorboats Lamborginis"],
        answerIndex : 0,   
    },
]
// console.log(questions);
    
btnStart.addEventListener("click", function(){
    var time = setInterval(function(){
        if(count > 0) {
            count--;
            timer.textContent= count;}
        else {
            clearInterval(time);
            titleitem.textContent = "GAME OVER";}
        }, 1000);
     starQuiz();
     displayQuestion();
});

function starQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.remove();
    btnStart.remove(); 
}

function displayQuestion() {
    if (currentindex < questions.length) {
        var currentQuestion = questions[currentindex];
        var titleElement = document.getElementById("title-item");
        var questionAnswers = document.getElementById("question-answers");

        // Set the question title
        titleElement.textContent = currentQuestion.title;

        // Clear previous answer choices
        questionAnswers.innerHTML = "";

        // Loop through answer choices and create buttons for each
        currentQuestion.choices.forEach(function (choice, index) {
            var choiceButton = document.createElement("button");
            choiceButton.textContent = choice;
            choiceButton.classList.add("btn", "btn-primary");

            // Add a click event listener to the choice button
            choiceButton.addEventListener("click", function () {
                handleChoiceClick(); 
            });
            questionAnswers.appendChild(choiceButton);
        });
    } else {
        // No more questions, end the quiz or display the final score
        endQuiz();
    }
}

function handleChoiceClick(selectedIndex, answerIndex) {
    var choiceButtons = document.querySelectorAll("#question-answers button");
    choiceButtons.forEach(function (button) {
        button.disabled = true;
    });
    var currentQuestion = questions[currentindex];
    var selectedIndex = Array.from(choiceButtons).indexOf(event.target);
    // Check if the selected choice index matches the index of the correct answer
    if (selectedIndex === currentQuestion.answerIndex) {
        // Display a "Correct" message or any other desired feedback
        var feedback = document.createElement("p");
        feedback.textContent = "Correct!";
        document.getElementById("question-answers").appendChild(feedback);
    } else {
        var feedback = document.createElement("p");
        feedback.textContent = "Wrong!";
        document.getElementById("question-answers").appendChild(feedback);
        count -=15;
        timer.textContent = count;
        if (count <= 0){
            clearInterval(timer);
            titleitem.textContent = "GAME OVER";}

        } 
    setTimeout(function(){
        currentindex++;
        if (currentindex < questions.length) {
            displayQuestion();
        } else {
            endQuiz();
    }   
    },1000);
}

function endQuiz() {
    clearInterval(timer);
   
    timer.textContent = count;

    localStorage.setItem('timer', count);
    
    setTimeout(function () {
        window.location.href = "end.html"; 
    });
    }
        
    

