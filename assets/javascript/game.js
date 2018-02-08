var words = ['werewolf', 'drakula', 'frankenstein', 'zombie'];
var word = words(Math.floor(Math.random()*words.length));
// ^perhaps array
var playerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLives = 0;

document.onKeyUp = function(event) {
    var playerLetter = event.key;
    
}
