var wordGame = ["pepsi", "gatorade", "aquafina", "tropicana"];

var totalGuessAllow, winCounter, wrongCount = 0;
var wrongGuesses;
var correctGuesses;
var word;
var wordElement = document.getElementById('word-blanks');
var winCounterElement = document.getElementById('win-counter');
var lossCounterElement = document.getElementById('loss-counter');
var guessesLeftElement = document.getElementById('guesses-left');
var wrongguessElement = document.getElementById('wrong-guesses');
//var userTextElement = document.getElementById('user-text');

function setUp() {
    totalGuessAllow = 10;
    var index = Math.floor(Math.random() * wordGame.length);
    word =  wordGame[index];
    console.log("word: "+word);
    
    totalGuessAllow = 10;
    winCounter = 0;   // what is winCounter 
    lossCounter = 0;
    wrongGuesses = [];
    correctGuesses = [];
  
    // initialize correctGuesses array with underscores
    for (var i = 0; i < word.length; i++) {
      correctGuesses.push('_');
    }
  
    console.log(correctGuesses);
    wordElement.innerHTML = correctGuesses.join(' ');
    //wordElement.innerHTML = correctGuesses;
    guessesLeftElement.innerHTML = totalGuessAllow;
    wrongguessElement.innerHTML = lossCounter;
}

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function (event) {
    totalGuessAllow -= 1;
    var letter =  String.fromCharCode(event.keyCode).toLowerCase();
    if (word.indexOf(letter) === -1) { 
        wrongGuesses.push(letter); // update letters guessed
       // lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
        lossCounter += 1;
       // lossCounterElement.innerHTML = lossCounter;
      } else { // letter IS in the word
        // replace underscore with the letter
        for (var i = 0; i < word.length; i++) {
          if (word[i] === letter) {
            correctGuesses[i] = letter;
          }
        }
       // wrongguessElement.innerHTML = wrongCounter;
        wordElement.innerHTML = correctGuesses.join(' ');
      }
 
};

setUp();