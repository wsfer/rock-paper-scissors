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

function playerSelection () {
    let playSelect = prompt("Rock, Paper or Scissor? ").toLowerCase();
    playSelect = playSelect.replace(playSelect.slice(0,1), playSelect.slice(0,1).toUpperCase());
    if (playSelect === "Rock" || playSelect === "Paper" || playSelect === "Scissor") {
        return playSelect;
    }
}



