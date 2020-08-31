const p1Button = document.querySelector("#p1");
const p2Button = document.querySelector("#p2");
const resetButton = document.querySelector("#reset")
const h1 = document.querySelector("h1")
let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener("click", () => {
  p1Score++;
  h1.textContent = `${p1Score} to ${p2Score}`;
})

p2Button.addEventListener("click", () => {
  p2Score++;
  h1.textContent = `${p1Score} to ${p2Score}`;
})