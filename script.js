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

function getHumanChoice(){
    let checkAnswer = true;
    let choice = '';

    while(checkAnswer) {
       choice = prompt("Choose your weapon: (rock / paper / scissors)");

       if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        console.log(`
            Invalid weapon, please try again.
            `);
        continue;
       } else {
            checkAnswer = false;
            return choice.toLocaleLowerCase();
       }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCounter = 1;
    let isItRollin = true;

    let playRound = (humanChoice, computerChoice) => {
        switch(humanChoice) {
            case 'rock':
                if (computerChoice === 'rock') {
                    console.log('It\'s a draw!');
                    break;
                } else if (computerChoice !== 'paper') {
                    humanScore++;
                    computerScore--;
                    console.log('Rock beats Scissors - You win!');
                    break;
                } else {
                    humanScore--;
                    computerScore++;
                    console.log('Paper beats Rock - You lose!');
                    break;
                }
            case 'paper':
                if (computerChoice === 'paper') {
                    console.log('It\'s a draw!');
                    break;
                } else if (computerChoice !== 'scissors') {
                    humanScore++;
                    computerScore--;
                    console.log('Paper beats Rock - You win!');
                    break;
                } else {
                    humanScore--;
                    computerScore++;
                    console.log('Scissors beats Paper - You lose!');
                    break;
                }
            case 'scissors':
                if (computerChoice === 'scissors') {
                    console.log('It\'s a draw!');
                    break;
                } else if (computerChoice !== 'rock') {
                    humanScore++;
                    computerScore--;
                    console.log('Scissors beats Paper - You win!');
                    break;
                } else {
                    humanScore--;
                    computerScore++;
                    console.log('Rock beats Scissors - You lose!');
                    break;
                }
            default:
                console.log('Invalid weapon');
                break;
        }
    };

    while(isItRollin) {
        if (roundCounter > 5) {
            console.log(`
                Game is over.
                Score: ${humanScore}
                `);
            humanScore = 0;
            computerScore = 0;
            roundCounter = 1;
            break;
        } else {
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
    
            console.log(`
                Current score: ${humanScore}
                Current Round: ${roundCounter}/5
                `);
            roundCounter++;
            continue;
        }
    }
}

playGame();