
// variables for the javascript.
var secretWord = "xyz";
var secretWordLength = secretWord.length;
var wrongGuesses = [];
var currentUserWord = [];
var currentGuess = null;
var masterGuesses = [];
var guessesRemaining = 0;
var wins = 0;
var losses = 0;

// variables for the HTML writes
var htmlWins = document.getElementById('wins');
var htmlLosses = document.getElementById('losses');
var htmlcurrentUserWord = document.getElementById('currentUserWord');
var htmlGuessesRemaining = document.getElementById('guessesRemaining');
var htmlWrongGuesses = document.getElementById('wrongGuesses');

// so many functions.... microservices, anyone? :-)

// defines the word bank, picks the secret word, resets guesses, blanks user's current word
function appSetup() {
	var wordBank = ["amigos", "cactus", "eastwood", "gunfight", "locomotive", "mesas", "noose", "poker", "ranch", "saloon", "stagecoach", "tombstone", "wanted", "westworld"];
	console.log("There are " + wordBank.length + " words in the bank.");
	secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	secretWordLength = secretWord.length;
	guessesRemaining = 13
	currentUserWordBlanks();
	console.log("Reset of GuessesRemaining (should be 13): " + guessesRemaining);
	console.log("The secret word is " + secretWord);
	console.log("The secret word is " + secretWordLength + " letters long.")
	alert("Let's Get Started! Push a key to start guessing.");
	}

// blanks user's current word
function currentUserWordBlanks() {
	for (var i = 0; i < secretWordLength; i++) {
		currentUserWord.push(" _ ");
		htmlcurrentUserWord.innerHTML = currentUserWord;
    	}
	}

// Captures the user's guess
function userGuessCapture() {
	document.onkeyup = function(userGuess) {
		currentGuess = userGuess.key;
		isLetter(currentGuess);
		}
	}

// verifies a guess is a letter and not a number or signal
function isLetter() {
	if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
		console.log("user typed " + currentGuess + ". This is a valid choice.");
		letterMatch(currentGuess);
		} else {
	    alert("Not a letter. Please pick again.")
		}
	}

// attempts to match the letter
function letterMatch() {
	if ((secretWord.indexOf(currentGuess)) !== -1) {
		letterMatched();
		} else {
		letterNotMatched();
		}
	}

function win() {
	console.log("user won");
	alert("Congrats, Partner!");
	wins = wins++;
	htmlWins.innerHTML = wins;
	appSetup();
}

function lose() {
	console.log("user lost");
	alert("Bummer, y'all...");
	htmlGuessesRemaining.innerHTML = "none";
	losses = losses++;
	htmlLosses.innerHTML = losses;
	appSetup();
}

function guessOperation() {
	userGuessCapture();
	isLetter(currentGuess);
}

function letterMatched() {
	console.log(currentGuess + " is one of the letters.")
	checkIfAlreadyMatched(userGuess);
	updateCurrentUserWord(userGuess);
}

function updateCurrentUserWord() {
	currentUserWord.push(currentGuess);
}

function checkIfAlreadyMatched() {
	if (((currentUserWord.indexOf(currentGuess)) !== -1) || ((currentUserWord.indexOf(wrongGuesses)) !== -1) ) {
		alert("You already chose this letter. Please select another choice.");
}

function letterNotMatched() {
	checkIfAlreadyMatched(userGuess);
	console.log(currentGuess + " is NOT one of the letters.")
	wrongGuesses.push(currentGuess);
	wrongGuesses.sort();
    htmlWrongGuesses.innerHTML = wrongGuesses;
	guessesRemaining = (guessesRemaining - 1);
	htmlGuessesRemaining.innerHTML = guessesRemaining;
	}

// main function primary logic

console.log("Initial Declaration of GuessesRemaining (should be Zero): " + guessesRemaining);
appSetup();

	// If my solution === secret word
	if (currentUserWord === secretWord) {
		// win
		win();
	} else {
		if (guessesRemaining > 0) {
			//guess
			guessOperation();
		} else {
			//lose
			lose();
		}
	}




	// if ((guessesRemaining > 1)) {

	// 	currentUserWord.push(userGuesses);
	// 	console.log(currentUserWord);
	// 	console.log(userGuesses);

	// 	console.log("Guesses Remaining: " + guessesRemaining);
