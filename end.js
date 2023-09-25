var quizFinished = document.getElementById("quiz-finished");
var initials = document.getElementById("initials");
var score = document.getElementById("score");
var btn = document.getElementById("btn");
var count = 0;

score.textContent = "Your final score is "+ count;

btn.addEventListener("submit", function (event) {
    event.preventDefault();
    // window.location.href = "highscore.html";
})