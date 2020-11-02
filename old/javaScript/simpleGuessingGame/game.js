// create secretNumber
const secretNumber = 4;

// ask user for guess
const guess = Number(prompt("Guess a number"));
alert(guess)

// check if guess is right
if (guess === secretNumber) {
  alert("YOU GOT IT RIGHT")
} 
// otherwise check if higher
else if (guess > secretNumber) {
  alert("Too high")
}

// otherwise check if lower
else {
  alert("Too low")
}
