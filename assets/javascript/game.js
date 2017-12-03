
// variables for the javascript

var secretWord = "xyz";
var secretWordLength = secretWord.length;
var wrongGuesses = [];
var userSuccesses = [];
var currentWord = [];
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

function appSetup() {
	var wordBank = ["amigos", "cactus", "eastwood", "gunfight", "locomotive", "mesas", "noose", "poker", "ranch", "saloon", "stagecoach", "tombstone", "wanted", "westworld"];
	console.log("There are " + wordBank.length + " words in the bank.");
	secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	secretWordLength = secretWord.length;
	guessesRemaining = 13
	currentWord = [];
	console.log("Reset of GuessesRemaining (should be 13): " + guessesRemaining);	
}

function appStart() {
	console.log("The secret word is " + secretWord);
	console.log("The secret word is " + secretWordLength + " letters long.")
	alert("Let's Get Started! Push a key to start guessing.");
}

function letterMatch() {
	
}

appSetup();
appStart();

// main function
document.onkeyup = function(event) {
	// capture the user guess
	var userGuesses = event.key;
	// while you have guesses remaining
	if (guessesRemaining > 1) {
		currentWord.push(userGuesses);
		console.log(currentWord);
		console.log(userGuesses);
		guessesRemaining = (guessesRemaining - 1);
		console.log("Guesses Remaining: " + guessesRemaining);
		htmlWrongGuesses = wrongGuesses;
		htmlGuessesRemaining.innerHTML = guessesRemaining;
	} else {
		htmlGuessesRemaining.innerHTML = "none";
		losses++;
		htmlLosses.innerHTML = losses;
		console.log("You Lose!");
		alert("You Lose!");
		appSetup();
		appStart();
	}

}