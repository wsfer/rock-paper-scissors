let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    const randomNum = Math.floor(Math.random()*3) + 1;
    let compSelect;
    switch (randomNum) {
        case 1:
            compSelect = "Rock";
            break;
        case 2:
            compSelect = "Paper";
            break;
        case 3:
            compSelect = "Scissor";
            break;
    }
    return compSelect;
}



function playRound (playerSelection, computerSelection) {

    let result = null;

    if (playerSelection === computerSelection) {
        result = `Nobody won! both selected ${playerSelection}`;
        return result;
    }

    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Scissor") {
                result = `You win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
            } else if (computerSelection === "Paper") {
                result = `You lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
            }
            break;
        case "Paper":
            if (computerSelection === "Rock") {
                result = `You win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
            } else if (computerSelection === "Scissor") {
                result = `You lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
            }
            break;
        case "Scissor":
            if (computerSelection === "Paper") {
                result = `You win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
            } else if (computerSelection === "Rock") {
                result = `You lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++
            }
            break;
    }
    return result;
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        const ask = prompt("Rock, Paper or Scissor? ").toLowerCase();
        const playerSelection = ask.replace(ask.slice(0,1), ask.slice(0,1).toUpperCase());
        const computerSelection = computerPlay();

        console.log(`Computer: ${computerSelection}, Player: ${playerSelection}`);
        playRound(playerSelection, computerSelection);
        console.log(`SCORE: Player = ${playerScore}, Computer = ${computerScore}`);
    }
}

