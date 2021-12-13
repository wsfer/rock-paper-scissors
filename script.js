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