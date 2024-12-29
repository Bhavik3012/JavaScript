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
  remaining.innerHTML = `${10 - numGuess}`;
  numGuess++;
}

// display message
function displayMessage(message) {
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

// endgame
function endgame() {
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newgame">Start New Game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}

// start new game
function newgame() {
  const newgamebutton = document.querySelector("#newgame");
  newgamebutton.addEventListener("click", function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessslot.innerHTML = "";
    remaining.innerHTML = `${10 - numGuess}`;
    userinput.removeAttribute("disabled");
    startover.removeChild(p);
    playgame = true;
  });
}
