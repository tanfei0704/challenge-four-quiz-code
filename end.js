var quizFinished = document.getElementById("quiz-finished");
var initials = document.getElementById("initials").value;
var btn = document.getElementById("btn");
var score = document.getElementById("score");
var userScore = localStorage.getItem("timer");
var highScore =[];

score.textContent =  userScore;
// console.log(score);

btn.addEventListener('click',function(){

     setTimeout(function () {
          window.location.href = "highscore.html"; 
      });
});

