const p1Button = document.querySelector("#p1");
const p2Button = document.querySelector("#p2");
const resetButton = document.querySelector("#reset")
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const numInput = document.querySelector("input[type='number']");
const winningScoreDisplay = document.querySelector("p span");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener("click", () => {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner")
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
})

p2Button.addEventListener("click", () => {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
    }
  }
  p2Display.textContent = p2Score;
})

resetButton.addEventListener("click", () => {
  reset();
})

numInput.addEventListener("change", () => {
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
})

function reset() {
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
}