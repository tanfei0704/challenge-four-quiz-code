var quizFinished = document.getElementById("quiz-finished");
var initials = document.getElementById("initials");
var score = document.getElementById("score");
var btn = document.getElementById("btn");
var endScore = localStorage.getItem('timer')


score.textContent = "Your final score is "+ count;

btn.addEventListener("submit", function (event) {
    event.preventDefault();
     
    setTimeout(function () {
        window.location.href = "highscore.html"; 
    });
})
 
