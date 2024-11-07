function getComputerChoice() {
    // Generate a random number between 1 and 3.
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let weapon = '';

    if (randomNumber === 1) {
        weapon = 'rock';
    } else if (randomNumber === 2) {
        weapon = 'paper';
    } else {
        weapon = 'scissors';
    }

    return weapon;
}