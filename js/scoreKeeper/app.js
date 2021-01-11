const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const btnP1 = document.querySelector("#btnP1");
const btnP2 = document.querySelector("#btnP2");
const btnR = document.querySelector("#btnR");
const playTo = document.querySelector("#playTo");

let currP1Score = 0;
let currP2Score = 0;
let winningScore = 3;
let isGameOver = false;

btnP1.addEventListener('click', function (e) {
    if (!isGameOver) {
        currP1Score++
        if (currP1Score === winningScore) {
            isGameOver = true;
        }
        p1Score.innerText = currP1Score;
    }
});

btnP2.addEventListener('click', function (e) {
    if (!isGameOver) {
        currP2Score++
        if (currP2Score === winningScore) {
            isGameOver = true;
        }
        p2Score.innerText = currP2Score;
    }
});


btnR.addEventListener('click', reset);

playTo.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    currP1Score = currP2Score = 0;
    p1Score.innerText = p2Score.innerText = currP1Score;
}

