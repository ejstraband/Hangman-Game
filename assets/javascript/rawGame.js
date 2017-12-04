
// variables for the javascript

var secretWord = "xyz";
var secretWordLength = secretWord.length;
var wrongGuesses = [];
var userSuccesses = [];
var currentWord = [];
var currentGuess = null;
var masterGuesses = [];
var guessesRemaining = 0;
var wins = 0;
var losses = 0;

// variables for the HTML writes
var htmlWins = document.getElementById('wins');
var htmlLosses = document.getElementById('losses');
var htmlCurrentWord = document.getElementById('currentWord');
var htmlGuessesRemaining = document.getElementById('guessesRemaining');
var htmlWrongGuesses = document.getElementById('wrongGuesses');


console.log("Initial Declaration of GuessesRemaining (should be Zero): " + guessesRemaining);

// defines the word bank, picks the secret word, resets guesses, blanks user's current word
function appSetup() {
	var wordBank = ["amigos", "cactus", "eastwood", "gunfight", "locomotive", "mesas", "noose", "poker", "ranch", "saloon", "stagecoach", "tombstone", "wanted", "westworld"];
	console.log("There are " + wordBank.length + " words in the bank.");
	secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	secretWordLength = secretWord.length;
	guessesRemaining = 13
	currentWordBlanks();
	console.log("Reset of GuessesRemaining (should be 13): " + guessesRemaining);	
}

function appStart() {
	console.log("The secret word is " + secretWord);
	console.log("The secret word is " + secretWordLength + " letters long.")
	alert("Let's Get Started! Push a key to start guessing.");
}

function isLetter() {
	if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
		console.log("user typed " + currentGuess + ". This is a valid choice.");
		letterMatch(currentGuess);
	} 	else {
    alert("Not a letter. Please pick again.")
	}
}

function letterMatch() {
	if ((secretWord.indexOf(currentGuess)) !== -1) {
		console.log(currentGuess + " is one of the letters.")
    } else {
      	console.log(currentGuess + " is NOT one of the letters.")
      	wrongGuesses.push(currentGuess);
      	htmlWrongGuesses.innerHTML = wrongGuesses;
    }
}

function currentWordBlanks() {
	for (var i = 0; i < secretWordLength; i++) {
		currentWord.push(" _ ");
		htmlCurrentWord.innerHTML = currentWord;
      }
}



appSetup();
appStart();

// main function
document.onkeyup = function(userGuess) {
	// capture the user guess
	currentGuess = userGuess.key;
	isLetter(currentGuess);
}

	// while you have guesses remaining

// 	if ((guessesRemaining > 1)) {
// 		currentWord.push(userGuesses);
// 		console.log(currentWord);
// 		console.log(userGuesses);
// 		guessesRemaining = (guessesRemaining - 1);
// 		console.log("Guesses Remaining: " + guessesRemaining);
// 		htmlWrongGuesses = wrongGuesses;
// 		htmlGuessesRemaining.innerHTML = guessesRemaining;
// 	} else {
// 		htmlGuessesRemaining.innerHTML = "none";
// 		losses++;
// 		htmlLosses.innerHTML = losses;
// 		console.log("You Lose!");
// 		alert("You Lose!");
// 		appSetup();
// 		appStart();
// 	}
// }