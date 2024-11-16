const selectionButtons = document.querySelectorAll("button.selection-button");
const gameDisplay = document.querySelector("#display");
const roundCounterDisplay = document.querySelector("#round-counter");
const scoreDisplay = document.querySelector("#score")

selectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        humanSelection = button.textContent.toLowerCase();

        playGame(humanSelection, getComputerChoice());
    });
});

let humanChoice = '';
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

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

function playGame (humanChoice, computerChoice) {

    let playRound = () => {
        switch(humanChoice) {
            case 'rock':
                if (computerChoice === 'rock') {
                    gameDisplay.textContent = "It's a draw!";
                    break;
                } else if (computerChoice !== 'paper') {
                    humanScore++;
                    computerScore--;
                    gameDisplay.textContent = "Rock beats Scissors - You win!";
                    break;
                } else {
                    humanScore--;
                    computerScore++;
                    gameDisplay.textContent = "Paper beats Rock - You lose!";
                    break;
                }
            case 'paper':
                if (computerChoice === 'paper') {
                    gameDisplay.textContent = "It's a draw!";
                    break;
                } else if (computerChoice !== 'scissors') {
                    humanScore++;
                    computerScore--;
                    gameDisplay.textContent = "Paper beats Rock - You win!";
                    break;
                } else {
                    humanScore--;
                    computerScore++;
                    gameDisplay.textContent = "Scissors beats Paper - You lose!";
                    break;
                }
            case 'scissors':
                if (computerChoice === 'scissors') {
                    gameDisplay.textContent = "It's a draw!";
                    break;
                } else if (computerChoice !== 'rock') {
                    humanScore++;
                    computerScore--;
                    gameDisplay.textContent = "Scissors beats Paper - You win!";
                    break;
                } else {
                    humanScore--;
                    computerScore++;
                    gameDisplay.textContent = "Rock beats Scissors - You lose!";
                    break;
                }
            default:
                gameDisplay.textContent = "Invalid weapon";
                break;
        }
        scoreDisplay.textContent = humanScore;
    };

    if (roundCounter < 5) {
        roundCounter++;
        roundCounterDisplay.textContent = `${roundCounter}`
        playRound();
    } else if (roundCounter === 5){
        roundCounterDisplay.textContent = '1';
        humanScore = 0;
        computerScore = 0;
        roundCounter = 1;
        playRound();
    }
}