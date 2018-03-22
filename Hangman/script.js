var wordz = ['chicken', 'laptop','javascript','hard','jazz' , 'placebo','next', 'This was too hard','cat','dog','pelican','rubi','portfolio'];

var Word = wordz[Math.floor(Math.random()*wordz.length)];

const wordToGuess = Word;

const wordState = []

let guessesLeft = 10

const prevGuesses = [];

function displayWordState(state){

let output = '';
for (let i = 0; i < state.length; i++){
	const char = state[i]
		output = output + char
		output = output + ' ';
 	}

const wordStateContainer = document.getElementById('word');
wordStateContainer.innerHTML = output;
}

function displayGuessesLeft(num){
	document.getElementById('guesses-left').innerHTML = num;
}

function displayPreviousGuesses(guessesArray){
	const list = document.getElementById('past-guesses');

	list.innerHTML = '';

	for(let i = 0; i < guessesArray.length; i++){
		const guess = document.createElement('li');
		guess.innerHTML = guessesArray[i];
		list.appendChild(guess);
	}
}
//takes in word to guess, the current state of the word and the new character to guess
function guess(wordToGuess, wordState, currGuess){
	//for each character in the word to be guessed
	for(i = 0; i < wordToGuess.length; i++){
		//if the character matches the current guess update wordState at the position
		if(wordToGuess[i] == currGuess){
			wordState[i] = currGuess;
		}
	}


}

function checkWon(wordState){
	let hasBlanks = false;
	for(let i = 0; i < wordState.length; i++){
		if(wordState[i] == '_'){
			hasBlanks = true;
		}
	}
return !hasBlanks;

}


guess(wordToGuess, wordState, 'x')

function setup(){
for(let i = 0; i <wordToGuess.length; i++){
	wordState.push('_');
	}

// updated word state
displayWordState(wordState);
displayPreviousGuesses(prevGuesses);
displayGuessesLeft(guessesLeft);
}

setup();

const form = document.getElementById('player-input');
const input = document.getElementById('player-guess')

form.onsubmit = function(event){
	event.preventDefault();
	//get current guess
	const currentInput = input.value.toLowerCase();

	//check if input is valid
	if(!validateInput(currentInput, prevGuesses)){
		window.alert('Please enter a singal alphabetical character that has not been used. Spaces are also allowed')
	return;
	}

	//clear input box
	input.value = '';
	prevGuesses.push(currentInput);

	//update guesses left
	guessesLeft = guessesLeft - 1;
	displayGuessesLeft(guessesLeft);

	//execute the guess
	guess(wordToGuess, wordState, currentInput);

	//check if user has won
		displayWordState(wordState);
	const won = checkWon(wordState);
	if(won){
		window.location.replace('Youwin.html')
	}

	//check if user has lost
	else if(guessesLeft == 0){
		window.alert(Word);
		window.location.replace('youLose.html')
	}

	//update previous guesses
	displayPreviousGuesses(prevGuesses);
};

function validateInput(guess){
	//check that guess is on character
	//user has not guessed this before
if(guess.length == 1 && prevGuesses.indexOf(guess) == -1){ 
	return true;
	}

return false;
}