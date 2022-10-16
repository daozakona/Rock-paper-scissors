const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const btns = Array.from(document.getElementsByTagName("button"));
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let winner;
let playerChoice;
let computerChoise;

const gameItems = {
    rock : {
        name : "rock",
        icon : "✊",
        beat : "scissors",
    },
    paper : {
        name : "paper",
        icon : "✋",
        beat : "rock",
    },
    scissors : {
        name : "scissors",
        icon : "✌️",
        beat : "paper",
    }

};

for (let btn of btns) {
    btn.addEventListener("click", (e) => {
        playerChoice = e.target.id;
        computerChoise = getComputerChoice();

        if ((playerScore.innerText < 6) && (computerScore.innerText < 6)) {
            playRound();
            changeScore();
        } else {
            computerScore.innerText = 0;
            playerScore.innerText = 0;
        }
        
    })
}

function playRound() {
    if (gameItems[playerChoice].name == gameItems[computerChoise].name) {
        winner = "no winner";
    } else if (gameItems[playerChoice].name == gameItems[computerChoise].beat) {
        winner = "computer win";
    } else if (gameItems[playerChoice].beat == gameItems[computerChoise].name) {
        winner = "player win";
    }
    console.log(winner);
}

function changeScore() {
    if (winner == "computer win") {
        ++computerScore.innerText;
    } else if (winner == "player win") {
        ++playerScore.innerText;
    }
}

function getComputerChoice() {
    switch (Math.round(Math.random()*2)) {
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
    }
}
