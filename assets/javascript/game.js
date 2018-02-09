var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var lives = 10;
var compChoice = choices[Math.floor(Math.random()*choices.length)];

document.addEventListener("keyup", function(event) {
    var playerChoice = event.key;
    if (playerChoice === compChoice) {
        wins++;
    }
    else {
        lives--;
    }
    if(lives === 0) {
        losses++;
    }
    if (lives < 1) {
       lives += 10;
    }
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("lives").innerHTML = "Lives: " + lives;
})