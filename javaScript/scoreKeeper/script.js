const p1Button = document.querySelector("#p1");
const p2Button = document.querySelector("#p2");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset")
const h1 = document.querySelector("h1")
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