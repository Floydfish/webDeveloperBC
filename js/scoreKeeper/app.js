const p1 = {
    score: 0,
    button: document.querySelector("#btnP1"),
    display: document.querySelector("#p1Score")
}

const p2 = {
    score: 0,
    button: document.querySelector("#btnP2"),
    display: document.querySelector("#p2Score")
}

const btnR = document.querySelector("#btnR");
const playTo = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("winner")
            opponent.display.classList.add("loser")
        }
        player.display.innerText = player.score
    }
}

p1.button.addEventListener('click', function (e) {
    updateScore(p1, p2)
});

p2.button.addEventListener('click', function (e) {
    updateScore(p2, p1)
});


btnR.addEventListener('click', reset);

playTo.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove("winner", "loser");
    }
}

