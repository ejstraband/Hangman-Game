// make an array out of a word
// secretWordArray = secretWord.split("");

// ====================================

// make a word out of an array
// currentUserWord = secretWordArray.join("");

// ====================================

// secretIndices = [];

// for(var i=0; i<secretWord.length;i++) {if (secretWord[i] === currentGuess) secretIndices.push(i);}

// for (var i=0; i<secretIndices.length; i++) { 
// 	currentIndex = secretIndices[i];
// 	currentUserWordArray.splice(currentIndex, i, currentGuess

// ====================================
// matching loop for guesses

// for (var i = 0; i<secretWord.length; i++) {
// 	if(secretWord[i]===currentGuess) {
// 		currentUserWordArray[i]=currentGuess;
// 		currentUserWord = secretWordArray.join("");

// 	}
// };

// ====================================

// debugging == force fail options == debugging
// wrongGuessLetters = ["a"];
// correctGuessLetters = ["b"];

// debugging == console logs to display proper reset on win/loss == debugging
// console.log(wrongGuessLetters);
// console.log(correctGuessLetters); 


// 	if (guessChecker(currentGuess)) {
// 		// function 3 loop
// 		for (var i = 0; i<secretWord.length; i++) {
// 			// function 3 matcher
// 			if(secretWord[i]===currentGuess) {
// 				currentUserWordArray[i]=currentGuess;
// 				currentUserWord = currentUserWordArray.join("");
// 				htmlcurrentUserWord.innerHTML = currentUserWord;
// 			// function 3 else condition
// 		} else {
// 		incorrectGuess(currentGuess);
// 		}
// 	}
// }

// else {
// 				incorrectGuess(currentGuess);
		
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








// =================================
// =================================
// first draft of the .js file
// =================================
// =================================

// variables for the javascript

// var secretWord = "xyz";
// var secretWordLength = secretWord.length;
// var wrongGuesses = [];
// var userSuccesses = [];
// var currentWord = [];
// var currentGuess = null;
// var masterGuesses = [];
// var guessesRemaining = 0;
// var wins = 0;
// var losses = 0;

// // variables for the HTML writes
// var htmlWins = document.getElementById('wins');
// var htmlLosses = document.getElementById('losses');
// var htmlCurrentWord = document.getElementById('currentWord');
// var htmlGuessesRemaining = document.getElementById('guessesRemaining');
// var htmlWrongGuesses = document.getElementById('wrongGuesses');


// console.log("Initial Declaration of GuessesRemaining (should be Zero): " + guessesRemaining);

// // defines the word bank, picks the secret word, resets guesses, blanks user's current word
// function appSetup() {
// 	var wordBank = ["amigos", "cactus", "eastwood", "gunfight", "locomotive", "mesas", "noose", "poker", "ranch", "saloon", "stagecoach", "tombstone", "wanted", "westworld"];
// 	console.log("There are " + wordBank.length + " words in the bank.");
// 	secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// 	secretWordLength = secretWord.length;
// 	guessesRemaining = 13
// 	currentWordBlanks();
// 	console.log("Reset of GuessesRemaining (should be 13): " + guessesRemaining);	
// }

// function appStart() {
// 	console.log("The secret word is " + secretWord);
// 	console.log("The secret word is " + secretWordLength + " letters long.")
// 	alert("Let's Get Started! Push a key to start guessing.");
// }

// function isLetter() {
// 	if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
// 		console.log("user typed " + currentGuess + ". This is a valid choice.");
// 		letterMatch(currentGuess);
// 	} 	else {
//     alert("Not a letter. Please pick again.")
// 	}
// }

// function letterMatch() {
// 	if ((secretWord.indexOf(currentGuess)) !== -1) {
// 		console.log(currentGuess + " is one of the letters.")
//     } else {
//       	console.log(currentGuess + " is NOT one of the letters.")
//       	wrongGuesses.push(currentGuess);
//       	htmlWrongGuesses.innerHTML = wrongGuesses;
//     }
// }

// function currentWordBlanks() {
// 	for (var i = 0; i < secretWordLength; i++) {
// 		currentWord.push(" _ ");
// 		htmlCurrentWord.innerHTML = currentWord;
//       }
// }



// appSetup();
// appStart();

// // main function
// document.onkeyup = function(userGuess) {
// 	// capture the user guess
// 	currentGuess = userGuess.key;
// 	isLetter(currentGuess);
// }

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




// =================================
// =================================
// second draft of the .js file
// =================================
// =================================

// this is a comment from coda
// this is a comment from the mac. 11:00 AM:

// variables for the javascript.
// var secretWord = "";
// var secretArray = secretWord.split('');
// var secretWordLength = secretArray.length;
// var wrongGuesses = [];
// var currentUserWord = "";
// var currentUserWordArray = currentUserWord.split('');
// var currentGuess = null;
// var masterGuesses = [];
// var guessesRemaining = 0;
// var wins = 0;
// var losses = 0;

// // variables for the HTML writes
// var htmlWins = document.getElementById('wins');
// var htmlLosses = document.getElementById('losses');
// var htmlcurrentUserWord = document.getElementById('currentUserWord');
// var htmlGuessesRemaining = document.getElementById('guessesRemaining');
// var htmlWrongGuesses = document.getElementById('wrongGuesses');

// // so many functions.... microservices, anyone? :-)

// // defines the word bank, picks the secret word, resets guesses, blanks user's current word
// function appSetup() {
// 	var wordBank = ["amigos", "cactus", "eastwood", "gunfight", "locomotive", "mesas", "noose", "poker", "ranch", "saloon", "stagecoach", "tombstone", "wanted", "westworld"];
// 	console.log("There are " + wordBank.length + " words in the bank.");
// 	secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// 	console.log("The secret word is " + secretWord);
// 	secretWordLength = secretWord.length;
// 	console.log("The secret word is " + secretWordLength + " letters long.");
// 	guessesRemaining = 13;
// 	console.log("Reset of GuessesRemaining (should be 13): " + guessesRemaining);
// 	currentUserWordBlanks();
// 	htmlcurrentUserWord.innerHTML = currentUserWordArray;
// 	console.log("This is the current user guess array: " + currentUserWordArray);
// 	wrongGuesses = [];
//     htmlWrongGuesses.innerHTML = wrongGuesses;
// 	console.log("Wrong Guesses should be empty and blank.")

// 	alert("Let's Get Started! Push a key to start guessing.");
// 	}

// // blanks user's current word
// function currentUserWordBlanks() {
// 	for (var i = 0; i < secretWordLength; i++) {
// 		currentUserWordArray.push(" _ ");
// 		htmlcurrentUserWord.innerHTML = currentUserWord;
//     	}
// 	}

// // Captures the user's guess
// function userGuessCapture() {
// 	document.onkeyup = function(userGuess) {
// 		if (isLetter()) {
// 		currentGuess = userGuess.key;
// 			}
// 		}
// 	}

// // verifies a guess is a letter and not a number or signal
// function isLetter(currentGuess) {
// 	if (((currentGuess.keyCode >= 65) && (currentGuess.keyCode <= 90)) || ((currentGuess.keyCode >= 97) && (currentGuess.keyCode <= 122))) {
// 		console.log("user typed " + currentGuess + ". This is a valid choice.");
// 		return true;
// 		} else {
// 	    alert("Not a letter. Please pick again.");
// 	    return false;
// 		}
// 	}

// // attempts to match the letter
// function letterMatch(currentGuess) {
// 	if ((secretWord.indexOf(currentGuess)) !== -1) {
// 		letterMatched();
// 		} else {
// 		letterNotMatched();
// 		}
// 	}

// function win() {
// 	console.log("user won");
// 	alert("Congrats, Partner!");
// 	wins = wins+1;
// 	console.log("Total Wins: " + wins);
// 	htmlWins.innerHTML = wins;
// 	appSetup();
// }

// function lose() {
// 	console.log("user lost");
// 	alert("Bummer, y'all...");
// 	htmlGuessesRemaining.innerHTML = "13";
// 	losses = losses+1;
// 	htmlLosses.innerHTML = losses;
// 	appSetup();
// }

// function guessOperation(userGuess) {
// 	userGuessCapture(userGuess);
// 	letterMatch(userGuess);
// 	// isLetter(currentGuess);
// }

// function letterMatched() {
// 	console.log(currentGuess + " is one of the letters.");
// 	checkIfAlreadyMatched(currentGuess);
// 	updateCurrentUserWord(currentGuess);
// }

// function updateCurrentUserWord() {
// 	if ((currentUserWordArray.indexOf(currentGuess)) !== -1) {
// 	currentUserWordArray.push(currentGuess);
// 	}

// 	htmlcurrentUserWord.innerHTML = currentUserWordArray;
// }

// function checkIfAlreadyMatched() {
// 	if (((currentUserWordArray.indexOf(currentGuess)) !== -1) || ((wrongGuesses.indexOf(currentGuess)) !== -1) ) {
// 		guessesRemaining = (guessesRemaining + 1)
// 		alert("You already chose this letter. Please select another choice.");
// 	}
// }

// function letterNotMatched() {
// 	checkIfAlreadyMatched(currentGuess);
// 	console.log(currentGuess + " is NOT one of the letters.")
// 	wrongGuesses.push(currentGuess);
// 	wrongGuesses.sort();
//     htmlWrongGuesses.innerHTML = wrongGuesses;
// 	guessesRemaining = (guessesRemaining - 1);
// 	htmlGuessesRemaining.innerHTML = guessesRemaining;
// 	}


// // main function primary logic

// console.log("Initial Declaration of GuessesRemaining (should be Zero): " + guessesRemaining);

// htmlWins.innerHTML = wins;

// appSetup();

// document.onkeyup = function(userGuess) {
// 	// capture the user guess
// 	console.log(wrongGuesses);
// 	console.log(secretWord);

// 	currentGuess = userGuess.key;
// 	if (isLetter(currentGuess)) {
// 		letterMatch(currentGuess);
// 	}
// 	// isLetter(currentGuess);

// 	if (guessesRemaining > 1) {
// 	letterMatch();
// 	}

// 	else {
// 	lose();
// 	}
// }

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

