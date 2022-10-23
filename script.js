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
const declarationWinner = document.querySelector(".declare-winner");
const declareWinnerText = document.querySelector(".declare-winner__text");

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

declarationWinner.addEventListener("click",e=> {
    if(e.target) {
        declarationWinner.style.visibility = "hidden";
        computerScore.innerText = 0;
        playerScore.innerText = 0;
    }
})

for (let btn of btns) {
    btn.addEventListener("click", (e) => {
        playerChoice = e.target.id;
        computerChoice = getComputerChoice();

        playerIcon = gameItems[playerChoice].icon;
        computerIcon = gameItems[computerChoice].icon;

        if ((playerScore.innerText < 5) && (computerScore.innerText < 5)) {
            playRound();
            changeScore();
            checkWinner();
            
        }
    })
}

function declareWinner() {
    if(playerScore.innerText == 5) {
        declareWinnerText.innerText = "Player win"
        declarationWinner.style.visibility = "visible";
        console.log(declarationWinner.style.visibility)
    } else if(computerScore.innerText == 5) {
        declareWinnerText.innerText = "Computer win"
        declarationWinner.style.visibility = "visible";
        console.log(declarationWinner.style.visibility)
    }
}

function checkWinner() {
    if((playerScore.innerText == 5) || (computerScore.innerText == 5)) {
        declareWinner()
    }
}

function playRound() {
    plIcon.innerText = playerIcon;
    comIcon.innerText = computerIcon;
    comIcon.style.opacity = 1;
    plIcon.style.opacity = 1;
    if (gameItems[playerChoice].name == gameItems[computerChoice].name) {
        winner = "no winner";
    } else if (gameItems[playerChoice].name == gameItems[computerChoice].beat) {
        winner = "computer win";
        plIcon.style.opacity = 0.5;
    } else if (gameItems[playerChoice].beat == gameItems[computerChoice].name) {
        winner = "player win";
        comIcon.style.opacity = 0.5;
    }
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
