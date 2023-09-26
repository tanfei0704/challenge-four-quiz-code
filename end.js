var quizFinished = document.getElementById("quiz-finished");
var initials = document.getElementById("initials");
var btn = document.getElementById("btn");
var endScore = localStorage.getItem("timer");
var finalScore = document.getElementsById("final-score");

finalScore.textContent = "Your final score is " + endScore;

btn.addEventListener("submit", function (event) {
    event.preventDefault();
    setTimeout(function () {
        window.location.href = "highscore.html"; 
    });
})
 
