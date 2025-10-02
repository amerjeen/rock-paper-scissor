// === COMPUTER CHOICE ===
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

// === GAME LOGIC ===
// Initialize counters
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Select <div>> where you will show the results
const results = document.querySelector(".results");

// Helper function to display results
function displayResult(message) {
    const para = document.createElement("p");
    para.textContent = message;
    results.appendChild(para);
}

// Round logic
function playRound(humanChoice, computerChoice) {
    // Helper function to capitalize first letter
    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    // Announcement
    displayResult("Rock, Paper, Scissors, Shoot!");

    // Define each case
    switch (humanChoice + " vs " + computerChoice) {
        case "paper vs rock":
            humanScore++;
            displayResult("You win! Paper beats Rock.");
            displayResult(`Score: Human ${humanScore} - Computer ${computerScore}`);
            break;
        case "scissors vs paper":
            humanScore++;
            displayResult("You win! Scissors beats Paper.");
            displayResult(`Score: Human ${humanScore} - Computer ${computerScore}`);
            break;
        case "rock vs scissors":
            humanScore++;
            displayResult("You win! Rock beats Scissors.");
            displayResult(`Score: Human ${humanScore} - Computer ${computerScore}`);
            break;
        case "rock vs paper":
            computerScore++;
            displayResult("You lose! Paper beats Rock.");
            displayResult(`Score: Human ${humanScore} - Computer ${computerScore}`);
            break;
        case "paper vs scissors":
            computerScore++;
            displayResult("You lose! Scissors beats Paper.");
            displayResult(`Score: Human ${humanScore} - Computer ${computerScore}`);
            break;
        case "scissors vs rock":
            computerScore++;
            displayResult("You lose! Rock beats Scissors.");
            displayResult(`Score: Human ${humanScore} - Computer ${computerScore}`);
            break;
        default:
            displayResult(`This round is a tie! ${capitalize(humanChoice)} vs ${capitalize(computerChoice)}.`);
            displayResult(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }
    roundsPlayed++;

    checkGameEnd();
}

// Helper function to check  if we played 5 rounds
function checkGameEnd() {
    if (roundsPlayed >= 5) {
        // Display final results
        if (humanScore > computerScore) {
            displayResult(`🎉 YOU WIN THE GAME! Final Score: ${humanScore} - ${computerScore}`);
        } else if (computerScore > humanScore) {
            displayResult(`😞 YOU LOSE THE GAME! Final Score: ${humanScore} - ${computerScore}`);
        } else {
            displayResult(`🤝 IT'S A TIE GAME! Final Score: ${humanScore} - ${computerScore}`);
        }
    }
}

// === BUTTONS EVENT HANDLERS ===
// Select elements
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// Define listeners
rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});