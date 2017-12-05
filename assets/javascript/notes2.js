			if (guessChecker(currentGuess)) {
				// function 3 loop
				for (var i = 0; i<secretWord.length; i++) {
					// function 3 matcher
					if(secretWord[i]===currentGuess) {
						currentUserWordArray[i]=currentGuess;
						currentUserWord = currentUserWordArray.join("");
						htmlcurrentUserWord.innerHTML = currentUserWord;
					// function 3 else condition
				} else {
				incorrectGuess(currentGuess);
				}
			}
		}




		else {
						incorrectGuess(currentGuess);



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





// debugging == force fail options == debugging
// wrongGuessLetters = ["a"];
// correctGuessLetters = ["b"];

// debugging == console logs to display proper reset on win/loss == debugging
// console.log(wrongGuessLetters);
// console.log(correctGuessLetters); 
