let randomnumber = parseInt(Math.random() * 100 + 1);
// console.log(randomnumber);

const userinput = document.querySelector("#guessField");
const submit = document.querySelector(".guessSubmit");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrhigh = document.querySelector(".lowOrhigh");
const startover = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

// validate guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter greater than 1");
  } else if (guess > 100) {
    alert("Please enter less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayguess(guess);
      displayMessage(`Game Over, Random number was ${randomnumber}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

// CheckGuess
function checkguess(guess) {
  if (guess === randomnumber) {
    displayMessage(`Congratulation You guessed it right`);
    endgame();
  } else if (guess < randomnumber) {
    displayMessage(`Your guess is smaller`);
  } else {
    displayMessage(`Your guess is bigger`);
  }
}

// display guess
function displayguess(guess) {
  userinput.value = "";
  guessslot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// display message
function displayMessage(message) {}

// endgame
function endgame() {}

// start new game
function newgame() {}
