// Iteration 8: Making scoreboard functional

var again = document.getElementById('play-again-button')
again.onclick=()=>{
location.href='./index.html'
}

var urlParams = new URLSearchParams(window.location.search)
console.log(urlParams)
console.log(window.location.search)

var scoreboard = document.getElementById('score-board')
var score = urlParams.get("score")
console.log(score)
scoreboard.innerHTML =score; 