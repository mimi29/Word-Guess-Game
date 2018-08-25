var wordGame = ["pepsi", "gatorade", "aquafina", "tropicana"];

var wrongGuesses;
var correctGuesses;
var word;
var winCounter = 0;  
var lossCounter = 0;
var totalGuessAllow = 0;
var wordElement = document.getElementById('word-blanks');
var winCounterElement = document.getElementById('win-counter');
var lossCounterElement = document.getElementById('loss-counter');
var guessesLeftElement = document.getElementById('guesses-left');
var wrongGuessElement = document.getElementById('wrong-guesses');
var userTextElement = document.getElementById('user-text');

function setUp() {
    var index = Math.floor(Math.random() * wordGame.length);
    word = wordGame[index];
    totalGuessAllow = 10;
    wrongGuesses = [];
    correctGuesses = [];

    for (var i = 0; i < word.length; i++) {
        correctGuesses.push('_');
    }

    wordElement.innerHTML = correctGuesses.join(' ');
    guessesLeftElement.innerHTML = totalGuessAllow;
    wrongGuessElement.innerHTML = wrongGuesses;
    userTextElement.innerHTML = "...";
}

function updateStatus() {
   if (correctGuesses.indexOf('_') == -1) {
       winCounter++;
       winCounterElement.innerHTML = winCounter;
       var ans = confirm("You win! Play it again?");
       if (ans) {
           setUp();
       }
   }
   else if (totalGuessAllow == 0) {
       lossCounter++;
       lossCounterElement.innerHTML = lossCounter;
       var ans = confirm("You loose... Play it again?");
       if (ans) {
           setUp();
       }
   }  
}

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function (event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    userTextElement.innerHTML = letter;
    totalGuessAllow = totalGuessAllow - 1;
    guessesLeftElement.innerHTML = totalGuessAllow;

    if (word.indexOf(letter) === -1) {  // guess wrong
        wrongGuesses.push(letter); // update letters guessed
        wrongGuessElement.innerHTML = wrongGuesses.join(', ');
    } 
    else {   // guess right
        for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                correctGuesses[i] = letter;
            }
        }
        wordElement.innerHTML = correctGuesses.join(' ');
    }
    updateStatus();

};

setUp();
