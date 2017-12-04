
// variables for the javascript.
var secretWord = "";
var secretArray = secretWord.split('');
var secretWordLength = secretArray.length;
var wrongGuesses = [];
var currentUserWord = "";
var currentUserWordArray = currentUserWord.split('');
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
	console.log("The secret word is " + secretWord);
	secretWordLength = secretWord.length;
	console.log("The secret word is " + secretWordLength + " letters long.");
	guessesRemaining = 13;
	console.log("Reset of GuessesRemaining (should be 13): " + guessesRemaining);
	currentUserWordBlanks();
	htmlcurrentUserWord.innerHTML = currentUserWordArray;
	console.log("This is the current user guess array: " + currentUserWordArray);
	wrongGuesses = [];
    htmlWrongGuesses.innerHTML = wrongGuesses;
	console.log("Wrong Guesses should be empty and blank.")

	alert("Let's Get Started! Push a key to start guessing.");
	}

// blanks user's current word
function currentUserWordBlanks() {
	for (var i = 0; i < secretWordLength; i++) {
		currentUserWordArray.push(" _ ");
		htmlcurrentUserWord.innerHTML = currentUserWord;
    	}
	}

// Captures the user's guess
function userGuessCapture() {
	document.onkeyup = function(userGuess) {
		currentGuess = userGuess.key;
		// isLetter(currentGuess);
		}
	}

// verifies a guess is a letter and not a number or signal
function isLetter() {
	if (((currentGuess.keyCode >= 65) && (currentGuess.keyCode <= 90)) || ((currentGuess.keyCode >= 97) && (currentGuess.keyCode <= 122))) {
		console.log("user typed " + currentGuess + ". This is a valid choice.");
		letterMatch(currentGuess);
		} else {
	    alert("Not a letter. Please pick again.");
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
	wins = wins+1;
	console.log("Total Wins: " + wins);
	htmlWins.innerHTML = wins;
	appSetup();
}

function lose() {
	console.log("user lost");
	alert("Bummer, y'all...");
	htmlGuessesRemaining.innerHTML = "13";
	losses = losses+1;
	htmlLosses.innerHTML = losses;
	appSetup();
}

function guessOperation() {
	userGuessCapture();
	letterMatch();
	// isLetter(currentGuess);
}

function letterMatched() {
	console.log(currentGuess + " is one of the letters.");
	checkIfAlreadyMatched(currentGuess);
	updateCurrentUserWord(currentGuess);
}

function updateCurrentUserWord() {
	if ((currentUserWordArray.indexOf(currentGuess)) !== -1) {
	currentUserWordArray.push(currentGuess);
	}

	htmlcurrentUserWord.innerHTML = currentUserWordArray;
}

function checkIfAlreadyMatched() {
	if (((currentUserWordArray.indexOf(currentGuess)) !== -1) || ((wrongGuesses.indexOf(currentGuess)) !== -1) ) {
		guessesRemaining = (guessesRemaining + 1)
		alert("You already chose this letter. Please select another choice.");
	}
}

function letterNotMatched() {
	checkIfAlreadyMatched(currentGuess);
	console.log(currentGuess + " is NOT one of the letters.")
	wrongGuesses.push(currentGuess);
	wrongGuesses.sort();
    htmlWrongGuesses.innerHTML = wrongGuesses;
	guessesRemaining = (guessesRemaining - 1);
	htmlGuessesRemaining.innerHTML = guessesRemaining;
	}


// main function primary logic

console.log("Initial Declaration of GuessesRemaining (should be Zero): " + guessesRemaining);

htmlWins.innerHTML = wins;

appSetup();

document.onkeyup = function(userGuess) {
	// capture the user guess
	currentGuess = userGuess.key;
	// isLetter(currentGuess);

	if (guessesRemaining > 1) {
	letterMatch();
	}

	else {
	lose();
	}
}

// uncomment these 2 lines for an "auto-win" condition for testing
// currentUserWord = "striker";
// secretWord = "striker";

// if (currentUserWord === secretWord) {
// 	console.log("winning condition");
// 	win();
// 	} else if (guessesRemaining > 0) {
// 		console.log("winning condition not met");
// 		//takeUserGuess
// 		guessOperation();
// 	} else {
// 		lose();
// 	}

