// Pick the word, determine the length, store gu

var secretWord = "xyz";
var secretWordLength = secretWord.length;
var userGuesseses = [];
var userSuccesses = [];
var userSolution = [];
var guessesRemaining = 0;


var htmlGuessesRemaining = document.getElementById('guessesRemaining');

console.log("Initial Declaration of GuessesRemaining (should be Zero): " + guessesRemaining);

function appSetup() {
	var wordBank = ["amigos", "cactus", "eastwood", "gunfight", "locomotive", "mesas", "noose", "poker", "ranch", "saloon", "stagecoach", "tombstone", "wanted", "westworld"];
	console.log("There are " + wordBank.length + " words in the bank.");
	secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	secretWordLength = secretWord.length;
	guessesRemaining = 13
	console.log("Reset of GuessesRemaining (should be 13): " + guessesRemaining);	
}

function appStart() {
	console.log("The secret word is " + secretWord);
	console.log("The secret word is " + secretWordLength + " letters long.")
	console.log("Let's Get Started! Push a key to start guessing.");
}

appSetup();
appStart();

// main function
document.onkeyup = function(event) {
	// capture the user guess
	var userGuesses = event.key;
	// while you have guesses remaining
	if (guessesRemaining > 1) {
		userSolution.push(userGuesses);
		console.log(userSolution);
		console.log(userGuesses);
		guessesRemaining = (guessesRemaining - 1);
		console.log("Guesses Remaining: " + guessesRemaining);
		htmlGuessesRemaining.innerHTML = guessesRemaining;
		console.log("htmlGuessesRemaining: " + htmlGuessesRemaining)
		}

	else if (guessesRemaining === 1) {
		console.log("You Lose!");
		appSetup();
		appStart();
	}

}