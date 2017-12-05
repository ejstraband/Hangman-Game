// make an array out of a word
// secretWordArray = secretWord.split("");

// make a word out of an array
// currentUserWord = secretWordArray.join("");

secretIndices = [];

for(var i=0; i<secretWord.length;i++) {if (secretWord[i] === currentGuess) secretIndices.push(i);}

for (var i=0; i<secretIndices.length; i++) { 
	currentIndex = secretIndices[i];
	currentUserWordArray.splice(currentIndex, i, currentGuess






// matching loop for guesses

for (var i = 0; i<secretWord.length; i++) {
	if(secretWord[i]===currentGuess) {
		currentUserWordArray[i]=currentGuess;
		currentUserWord = secretWordArray.join("");

	}
};