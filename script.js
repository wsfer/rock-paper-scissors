let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    const randomNum = Math.floor(Math.random()*3);
    const compSelector = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = compSelector[randomNum];

    const imageSelected = document.querySelector(`#comp${computerSelection}`);
    console.log(imageSelected);

    return computerSelection;
}

document.getElementById('Rock').addEventListener('click', function (e) {
    playRound(e.target.id);
});
document.getElementById('Paper').addEventListener('click', function (e) {
    playRound(e.target.id);
});
document.getElementById('Scissors').addEventListener('click', function (e) {
    playRound(e.target.id);
});

let playerScoreText = document.getElementById('pScore');
let computerScoreText = document.getElementById('cScore');

const results = document.getElementById('results');

function playRound (playerSelection) {
    computerSelection = computerPlay();
    let roundResult = null;

    if (playerSelection === computerSelection) {
        roundResult = `Nobody won! both selected ${playerSelection}`;
    }

    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Scissors") {
                roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
            } else if (computerSelection === "Paper") {
                roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
            }
            break;
        case "Paper":
            if (computerSelection === "Rock") {
                roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
            } else if (computerSelection === "Scissors") {
                roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
            }
            break;
        case "Scissors":
            if (computerSelection === "Paper") {
                roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
            } else if (computerSelection === "Rock") {
                roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
            }
            break;
    }
    results.textContent = roundResult;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    if (playerScore == 5 || computerScore == 5) {
        checkGame();
    }
}

function checkGame () {
    if (playerScore == 5) {
        results.textContent = 'YOU WIN!';
        results.style.color = "red";
    } else {
        results.textContent = 'Gameover!';
        results.style.color = "red";
    }
}

const btnRestart = document.getElementById('restart');
btnRestart.addEventListener('click', restartGame);

function restartGame () {
    playerScore = 0;
    computerScore = 0;
    results.textContent = 'Game Restarted';
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}