let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    const randomNum = Math.floor(Math.random()*3);
    const compSelector = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = compSelector[randomNum];
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



function playRound (playerSelection) {
    computerSelection = computerPlay();
    let roundResult = null;

    if (playerSelection === computerSelection) {
        roundResult = `Nobody won! both selected ${playerSelection}`;
        return roundResult;
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
    console.log(roundResult);
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

