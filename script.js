"use strict";

window.addEventListener("load", start);

let number;

function start() {
  console.log("Javascript is running!");
  number = generateRandomNumber();

  document.querySelector("#guessForm").addEventListener("submit", receiveGuess);
}

function generateRandomNumber() {
  return 42;
}

function receiveGuess(event) {
  event.preventDefault();

  const form = event.target;
  const value = form.guess.valueAsNumber;

  console.log("Received guess");
  console.log(value);
  evaluateGuess(value);
}

function evaluateGuess(guess) {
  if (guess === number) {
    guessIsCorrect(guess);
  } else if (guess < number) {
    guessIsTooLow(guess);
  } else {
    guessIsTooHigh(guess);
  }
}

function guessIsCorrect(guess) {
  console.log("Correct!");
  const list = document.querySelector("#guessList");
  const html = `<li>You guessed ${guess} - WHICH IS CORRECT!!</li>`;
  list.insertAdjacentHTML("beforeend", html);
}

function guessIsTooLow(guess) {
  console.log("Too low!!");
  const list = document.querySelector("#guessList");
  const html = `<li>You guessed ${guess} - that was TOO LOW! - try again!</li>`;
  list.insertAdjacentHTML("beforeend", html);
}

function guessIsTooHigh(guess) {
  console.log("Too high!");
  const list = document.querySelector("#guessList");
  const html = `<li>You guessed ${guess} - that was TOO HIGH! - try again!</li>`;
  list.insertAdjacentHTML("beforeend", html);
}
