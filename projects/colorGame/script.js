let numSquares = 6;
let colors = generateRandomColors(numSquares);
let colorDisplay = document.querySelector("#colorDisplay");
let pickedColor = pickColor();

const squares = document.querySelectorAll(".square");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset")
const easyBtn = document.querySelector("#easyBtn")
const hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})

hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  // generate all new colors
  colors = generateRandomColors(6);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay do match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (let i = 0; i< squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
  }
  h1.style.backgroundColor = "steelblue"
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++ ) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i]
  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked square
    const clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "CORRECT!"
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "Try Again"
    }
  })
}

function changeColors(color) {
  // Loop through all squares
  for (let i = 0; i < colors.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
};

function pickColor() {
  const random = randomNum(colors.length);
  return colors[random]
}

function generateRandomColors(num) {
  // make an array
  const array = [];
  //repeat num times
  for (let i = 0; i < num; i++) {
    //get random random colors and push into array
    array.push(randomColor())
  };
  //return that array
  return array;
}

function randomColor() {
  // pick a "red" from 0 to 255
  const r = randomNum(256)
  // pick a "green" from 0 to 255
  const g = randomNum(256)
  // pick a "blue" from 0 to 255
  const b = randomNum(256)
  return `rgb(${r}, ${g}, ${b})`
}

function randomNum(n) {
  return Math.floor(Math.random() * n)
}