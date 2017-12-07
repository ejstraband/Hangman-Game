// this is a comment from coda
// this is a comment from the mac. 11:00 AM:

// variables for the javascript.
var secretWord = "";
var secretWordArray = [];
// var secretIndices = [];
var winningImage = "";
var secretImage = ".jpeg";
var wrongGuessLetters = [];
var correctGuessLetters = [];
var currentUserWord = "";
var currentUserWordArray = [];
var currentGuess = null;
var lastCorrectWord = "";
var guessesRemaining = 0;
var wins = 0;
var losses = 0;

// variables for the HTML writes
var htmlWins = document.getElementById('wins');
var htmlLosses = document.getElementById('losses');
var htmlcurrentUserWord = document.getElementById('currentUserWord');
var htmlGuessesRemaining = document.getElementById('guessesRemaining');
var htmlWrongGuessLetters = document.getElementById('wrongGuessLetters');
var htmlWinningImage = document.getElementById('guessImg');
var htmlLastCorrectWord = document.getElementById('lastCorrectWord');
// so many functions.... microservices, anyone? :-)

// defines the word bank, picks the secret word, resets guesses, blanks user's current word
function appSetup() {
	var wordBank = ["amigos", "cactus", "eastwood", "gunfight", "locomotive", "mesas", "noose", "poker", "ranch", "saloon", "stagecoach", "tombstone", "wanted", "westworld"];
	console.log("There are " + wordBank.length + " words in the bank.");
	secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	console.log("The secret word is " + secretWord);
	winningImage = secretWord + ".jpeg";
	console.log("The secret image is " + winningImage);
	guessesRemaining = 13;
	htmlGuessesRemaining.innerHTML = guessesRemaining;
	console.log("Reset of guessesRemaining (should be 13): " + guessesRemaining);
	wrongGuessLetters = [];
	console.log("Blanking out last round's wrong guesses array.")
    htmlWrongGuessLetters.innerHTML = wrongGuessLetters;
	console.log("Writing out the blank wrong guesses to the HTML page.")
	correctGuessLetters = [];
	currentUserWord = "";
	console.log("Blanking out last round's correct guesses  and word.")
	
	// make a secret word long dash word
	for (var i = 0; i < secretWord.length; i++) { (currentUserWord = currentUserWord + "_") ; }
    htmlcurrentUserWord.innerHTML = currentUserWord;
	
	currentUserWordArray = currentUserWord.split("");
	//populating the secret word array
	secretWordArray = secretWord.split("");

	// alert("Let's Get Started! Push a key to start guessing.");
	}

// validates the entry is a - z with a regex
// this solution is pulling in enter/shift/meta with the on key event. Switching methods.
function entryValidator(currentGuess) {
	// reference: https://www.w3schools.com/jsref/jsref_regexp_test.asp
	// pattern reference: https://stackoverflow.com/questions/388996/regex-for-javascript-to-allow-only-alphanumeric 
	var patt = new RegExp(/[a-z]/i);
	var success = patt.test(currentGuess);
	console.log(success);
	return success;
	}

// validator by array method
// less elegant, but it works. :-)
function entryValidator2(currentGuess) {
	var validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q" , "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	if (validLetters.indexOf(currentGuess) !== -1) {
	return true;
	}

}

// checks to see if the currentGuess has been guessed before
function newGuessCheck(currentGuess) {
	console.log("checking the current guess " + currentGuess + " to see if it has been chosen before." )
	if ((wrongGuessLetters.indexOf(currentGuess)) !== -1) {
		var success = false;
		return success;
		} else if ((correctGuessLetters.indexOf(currentGuess)) !== -1) {
			var success = false;
			return success;
		} else {
			var success = true;
			return success;
		}
	}

// checks to see if the currentGuess is in the secret word
function guessChecker(currentGuess) {
	if (secretWord.match(currentGuess)) {
		var success = true;
		return success;
		}
	}

// actions for an incorrect guess
function incorrectGuess(currentGuess) {
	console.log("this letter is an incorrect guess.");
	wrongGuessLetters.push(currentGuess);
	wrongGuessLetters.sort();
	guessesRemaining = (guessesRemaining - 1);
	htmlWrongGuessLetters.innerHTML = wrongGuessLetters;
	htmlGuessesRemaining.innerHTML = guessesRemaining;
	}

// actions for a correct guess
function correctGuess(currentGuess) {
	console.log("this letter is a correct guess.");
	correctGuessLetters.push(currentGuess);
}

function updateCurrentWord(currentGuess) {
	for (var i = 0; i<secretWord.length; i++) {
		if (secretWordArray[i]===currentGuess) {
			currentUserWordArray[i]=currentGuess;
			currentUserWord = currentUserWordArray.join("");
			htmlcurrentUserWord.innerHTML = currentUserWord;
			}
		}
	}

function winChecker() {
	if (currentUserWord === secretWord) {
		return true;
		}
	}

function loseChecker() {
	if (guessesRemaining === 0) {
		return true;
		}
	}

function win() {
	updateWinImage(winningImage);
	var audio = new Audio('assets/sounds/yeehaw.wav')
	audio.play();
	wins = (wins + 1);
	htmlLastCorrectWord.innerHTML = secretWord;
	htmlWins.innerHTML = wins

	// alert("You Win!");
	appSetup();
	}

function lose() {
    losses = (losses + 1);
	htmlLosses.innerHTML = losses
	alert("You Lose!");
	appSetup();
	}

function updateWinImage(winningImage) {
	htmlWinningImage.src = "assets/images/" + winningImage;
}

// function winSound();


//------------
// main application logic
//------------

// sets default for the page load
appSetup();


// main "loop"
// capture the user guess into currentGuess
document.onkeyup = function(currentKeypress) {
	currentGuess = currentKeypress.key;
	currentGuess = currentGuess.toLowerCase();
	console.log(currentGuess + " is the current guess.");

	// Function 1 validate the choice is a-z
	if (entryValidator2(currentGuess)) {
		console.log(currentGuess + " is a valid entry.");

		// Function 2 validates the choice is new
		if (newGuessCheck(currentGuess)) {
			console.log(currentGuess + " is a new choice.");			
	
			// function 3 validates that the guess is in the secret word
			if (guessChecker(currentGuess)) {
				console.log(currentGuess + " is a match!");
				updateCurrentWord(currentGuess);
				
				// function 4: Check for a "win" condition
				if (winChecker()) {
					win();
				} else {
					// alert("Letter Matched. Please guess again.");
				}

			// function 3 else condition (third-to-last condition in program)
			} else {
				incorrectGuess(currentGuess);
				
				// function 5: Check for a lose condition
				if (loseChecker()) {
					lose();
				} else {
					// alert("Please guess again.");
				}
			}

		// Function 2 else condition (second-to-last condition in program)
		} else {
			// alert("This letter was already guessed. Please choose again.");			
		} 	

	// Function 1 else condition (last condition in program)
	} else {
		alert("Invalid Entry. Please try again.");
		}
	//end of program
}
