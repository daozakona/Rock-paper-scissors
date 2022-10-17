const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerResult = document.getElementById("player-result");
const computerResult = document.getElementById("computer-result");
const btns = Array.from(document.getElementsByTagName("button"));
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const plIcon = document.getElementById("player-result__icon");
const comIcon = document.getElementById("computer-result__icon");
const div = document.createElement("div");
const divClone = div.cloneNode();
let winner;
let playerChoice;
let computerChoice;
let playerIcon;
let computerIcon;

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
        computerChoice = getComputerChoice();

        playerIcon = gameItems[playerChoice].icon;
        computerIcon = gameItems[computerChoice].icon;
        plIcon.innerText = playerIcon;
        comIcon.innerText = computerIcon;

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
    if (gameItems[playerChoice].name == gameItems[computerChoice].name) {
        winner = "no winner";
    } else if (gameItems[playerChoice].name == gameItems[computerChoice].beat) {
        winner = "computer win";
    } else if (gameItems[playerChoice].beat == gameItems[computerChoice].name) {
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

// function appendItem(playerIcon,computerIcon) {
//     playerResult.appendChild
// }

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
