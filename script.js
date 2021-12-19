let playerScore = 0;
let computerScore = 0;

document.getElementById('rock').addEventListener('click', playRound);
document.getElementById('paper').addEventListener('click', playRound);
document.getElementById('scissors').addEventListener('click', playRound);

function computerPlay () {
    const randomNum = Math.floor(Math.random()*3);
    const compSelector = ['rock', 'paper', 'scissors'];
    return compSelector[randomNum];
}

function playRound (playerSelection, computerSelection) {

    let roundResult = null;


    if (playerSelection === computerSelection) {
        roundResult = `Nobody won! both selected ${playerSelection}`;
        return roundResult;
    }

    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Scissor") {
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
            } else if (computerSelection === "Scissor") {
                roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
            }
            break;
        case "Scissor":
            if (computerSelection === "Paper") {
                roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
            } else if (computerSelection === "Rock") {
                roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
            }
            break;
    }
    return roundResult;
}

function game() {
    
    console.clear();

    if (playerScore > computerScore) {
        console.log("YOU WIN!");
        console.log(`Final Score: Player = ${playerScore}, Computer = ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log("YOU LOSE!");
        console.log(`Final Score: Player = ${playerScore}, Computer = ${computerScore}`);
    } else {
        console.log("NOBODY WON!");
        console.log(`Final Score: Player = ${playerScore}, Computer = ${computerScore}`);
    }
}

