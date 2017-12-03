var wordBank = ["amigos", "cactus", "eastwood", "gunfight", "locomotive", "mesas", "noose", "poker", "ranch", "saloon", "stagecoach", "tombstone", "wanted", "westworld"];

console.log("There are " + wordBank.length + " words in the bank.");

var computerGuess = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log("The computer word is " + computerGuess);

// main function
document.onkeyup = function(event) {
	// capture the user guess
	var userGuess = event.key;

	var guessesRemaining = 11;

	if (guessesRemaining > 0) {

		console.log(userGuess);	

		guessesRemaining = (guessesRemaining - 1);

		var userSolution = [];

		console.log("Guesses Remaining: " + guessesRemaining);

		userSolution.push(userGuess);

		console.log(userSolution);

		}

	}