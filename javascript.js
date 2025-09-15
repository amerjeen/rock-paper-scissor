// 1. Computer choice:
//     - Write `getComputerChoice()`:
//         > Randomly returns “rock”, “paper” or “scissors”
//             // do that via `Math.random()`

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }

    return computerChoice;
}

// 2. Human choice:
//     - Write `getHumanChoice()`:
//         > `prompt()` user to input a string:
//             // "Rock", "Paper" or "Scissors"

function getHumanChoice() {
    let humanChoice = prompt('It\'s your turn. "Rock", "Paper" or "Scissors"?', '');

    return humanChoice.trim().toLowerCase();    // remove whitespace + lowercase
}

// 3. Initialize two global variables:
//     - `humanScore` = 0
//     - `computerScore` = 0

let humanScore = 0;
let computerScore = 0;

// 5. Play a game:
//     - Write `playGame()`:
//         > It encloses `playRound()`
//         > It loops 5 times (5 games total)
//             // Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
//             // Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
//             // If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.

function playGame() {
    // 4. Play a round:
    //     - Write `playRound(humanChoice, computerChoice)`:
    //         > Use the previous choices as arguments
    //             // `humanChoice` needs to be case-insensitive
    //     - Log "Rock, Paper, Scissors, Shoot!", followed by:
    //         > “You win! Paper beats Rock”
    //         > “You win! Scissors beats Paper”
    //         > “You win! Rocks beats Scissors”
    //         > “You lose! Paper beats Rock”
    //         > “You lose! Scissors beats Paper”
    //         > “You lose! Rocks beats Scissors”
    //     - increment `humanScore` or `computerScore` based on round winner 

    function playRound(humanChoice, computerChoice) {
        // Helper function to capitalize first letter
        function capitalize(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }

        console.log("Rock, Paper, Scissors, Shoot!");

        switch (humanChoice + " vs " + computerChoice) {
            case "paper vs rock":
                humanScore++;
                console.log("You win! Paper beats Rock.");
                console.log(`The score is: human ${humanScore} - computer ${computerScore}`);
                break;
            case "scissors vs paper":
                humanScore++;
                console.log("You win! Scissors beats Paper.");
                console.log(`The score is: human ${humanScore} - computer ${computerScore}`);
                break;
            case "rock vs scissors":
                humanScore++;
                console.log("You win! Rock beats Scissors.");
                console.log(`The score is: human ${humanScore} - computer ${computerScore}`);
                break;
            case "rock vs paper":
                computerScore++;
                console.log("You lose! Paper beats Rock.");
                console.log(`The score is: human ${humanScore} - computer ${computerScore}`);
                break;
            case "paper vs scissors":
                computerScore++;
                console.log("You lose! Scissors beats Paper.");
                console.log(`The score is: human ${humanScore} - computer ${computerScore}`);
                break;
            case "scissors vs rock":
                computerScore++;
                console.log("You lose! Rock beats Scissors.");
                console.log(`The score is: human ${humanScore} - computer ${computerScore}`);
                break;
            default:
                console.log(`This round is a tie! ${capitalize(humanChoice)} vs ${capitalize(computerChoice)}.`);
                console.log(`The score is: human ${humanScore} - computer ${computerScore}`);
        }
    }

    humanScore = 0;    // reset scores for a new game
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {    // play 5 rounds
        console.log(`\n=== ROUND ${i} ===`);

        let humanChoice = getHumanChoice();     // get fresh choices for each round
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);    // play the round
    }

    console.log("\n=== FINAL RESULTS ===");    // announce the final winner
    if (humanScore > computerScore) {
        console.log(`🎉 YOU WIN THE GAME! Final Score: ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`😞 YOU LOSE THE GAME! Final Score: ${humanScore} - ${computerScore}`);
    } else {
        console.log(`🤝 IT'S A TIE GAME! Final Score: ${humanScore} - ${computerScore}`);
    }
}

playGame();    // calll playGame()
