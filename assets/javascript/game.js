// this is a comment from coda
// this is a comment from the mac. 11:00 AM:

// variables for the javascript.
var secretWord = "";
var secretWordArray = [];
var secretIndices = [];
var wrongGuessLetters = [];
var correctGuessLetters = [];
var currentUserWord = "";
var currentUserWordArray = [];
var currentGuess = null;
var guessesRemaining = 0;
var wins = 0;
var losses = 0;

// variables for the HTML writes
var htmlWins = document.getElementById('wins');
var htmlLosses = document.getElementById('losses');
var htmlcurrentUserWord = document.getElementById('currentUserWord');
var htmlGuessesRemaining = document.getElementById('guessesRemaining');
var htmlWrongGuessLetters = document.getElementById('wrongGuessLetters');


// so many functions.... microservices, anyone? :-)

// defines the word bank, picks the secret word, resets guesses, blanks user's current word
function appSetup() {
	var wordBank = ["amigos", "cactus", "eastwood", "gunfight", "locomotive", "mesas", "noose", "poker", "ranch", "saloon", "stagecoach", "tombstone", "wanted", "westworld"];
	console.log("There are " + wordBank.length + " words in the bank.");
	secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	console.log("The secret word is " + secretWord);
	guessesRemaining = 13;
	console.log("Reset of GuessesRemaining (should be 13): " + guessesRemaining);
	wrongGuessLetters = [];
	console.log("Blanking out last round's wrong guesses array.")
    htmlWrongGuessLetters.innerHTML = wrongGuessLetters;
	console.log("Writing out the blank wrong guesses to the HTML page.")
	correctGuessLetters = [];
	console.log("Blanking out last round's correct guesses array.")
	
	// make a secret word long dash word
	for (var i = 0; i < secretWord.length; i++) { (currentUserWord = currentUserWord + "-") ; }
    htmlcurrentUserWord.innerHTML = currentUserWord;
	
	currentUserWordArray = currentUserWord.split("");
	//populating the secret word array
	secretWordArray = secretWord.split("");

	alert("Let's Get Started! Push a key to start guessing.");
	}

// validates the entry is a - z
function entryValidator(currentGuess) {
	// reference: https://www.w3schools.com/jsref/jsref_regexp_test.asp
	// pattern reference: https://stackoverflow.com/questions/388996/regex-for-javascript-to-allow-only-alphanumeric 
	var patt = new RegExp(/[a-z]/i);
	var success = patt.test(currentGuess);
	console.log(success);
	return success;
	}

// checks to see if the currentGuess has been guessed before
function newGuessCheck(currentGuess) {
	console.log("checking the current guess " + currentGuess + " to see if it has been chosen before." )
	if (((wrongGuessLetters.indexOf(currentGuess)) !== -1) || ((correctGuessLetters.indexOf(currentGuess)) !== -1)) {
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
	htmlGuessesRemaining.innerHTML = guessesRemaining
	alert("This was not a match. Please choose again.")
}

// actions for a correct guess
function correctGuess(currentGuess) {
	console.log("this letter is a correct guess.");
	correctGuessLetters.push(currentGuess);

	if (currentUserWord === secretWord) {
		wins = (wins + 1);
		htmlWins.innerHTML = wins
		alert("You Win!");

	} else {
		alert("This was a match. Please choose again.")		
	}

}

// =================================
//Matching Experiments
// =================================

// find instances of a letter in the secret word and copy indicies into a variable
// for(var i=0; i<secretWord.length;i++) {if (secretWord[i] === currentGuess) secretIndices.push(i);}

// make a secret word long dash word
// for (var i = 0; i < secretWord.length; i++) { (currentUserWord = currentUserWord + "-") ; }

// write currentGuess into secretIndices[index] locations in currentUserWord
// for (var i = 0; i < secretIndicies.length; i++) {
// currentUserWord[i] = secretIndicies[i].push(currentGuess);

// enter currentGuess into the currentUserWord[] at the correct index
// for (var i=0; i<secretIndices.length; i++) { currentUserWordArray.splice(i, 0, currentGuess);


// matching loop for guesses

// for (var i = 0; i<secretWord.length; i++) {
// 	if(secretWord[i]===currentGuess) {
// 		currentUserWordArray[i]=currentGuess;
// 		currentUserWord = secretWordArray.join("");
//      htmlcurrentUserWord.innerHTML = currentUserWord;
// 	}
// };

// =================================
//Matching Experiments
// =================================


//------------
// main application logic
//------------

// sets default for the page load
appSetup();

// debugging == force fail options == debugging
// wrongGuessLetters = ["a"];
// correctGuessLetters = ["b"];

// debugging == console logs to display proper reset on win/loss == debugging
// console.log(wrongGuessLetters);
// console.log(correctGuessLetters); 

// main "loop"
// capture the user guess
document.onkeyup = function(currentGuess) {
	currentGuess = currentGuess.key;
	console.log(currentGuess + " is the current guess(1).");

	// Function 1 validate the choice is a-z
	if (entryValidator(currentGuess)) {
		console.log("valid entry");

		// function 2 validate original guess
		if (newGuessCheck(currentGuess)) {
			alert("This letter has already been guessed. Please try again");

		// function 2 else condition
		} else {
			console.log("Checked " + currentGuess + ". This is a new guess.");

			// function 3 guessChecker
			if (guessChecker(currentGuess)) {
				correctGuess(currentGuess);
			// function 3 else condition
			} else {
				incorrectGuess(currentGuess);
			}
		}

	// Function 1 else condition
	} else {
		alert("Invalid Entry. Please try again.");
	}
}
