const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const btnP1 = document.querySelector("#btnP1");
const btnP2 = document.querySelector("#btnP2");
const btnR = document.querySelector("#btnR");
const numberMatches = document.querySelector("#numberMatches");

let currP1Score = 0;
let currP2Score = 0;

btnP1.addEventListener('click', function (e) {
    currP1Score++
    p1Score.innerText = currP1Score;
    if (currP1Score === numberMatches.value) {
        p1Score.innerText.style.color = "green";
    }
});

btnP2.addEventListener('click', function (e) {
    currP2Score++
    p2Score.innerText = currP2Score;
});

btnR.addEventListener('click', function(e) {
    currP1Score = currP2Score = 0;
    p1Score.innerText = p2Score.innerText = currP1Score;
});

