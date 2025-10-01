### 1. UNDERSTANDING THE PROBLEM

"Rock, Paper, Scissors is a hand game for two or more players where each person simultaneously makes one of three shapes: a fist for rock, a flat hand for paper, or two fingers extended for scissors. The winning rules are: Rock beats Scissors, Scissors beats Paper, and Paper beats Rock. Players chant "Rock, Paper, Scissors, Shoot!" and reveal their chosen shape on "Shoot!" to determine the outcome".


### 2. PLANNING ---

Does your program have an interface? What will it look like?
No, it will be a console program.

Do we need user interaction?
Yes, via prompt().

What inputs will your program have?
- A string (the player choice):
    > "Rock"
    > "Paper"
    > "Scissors:
- The rules are:
    > Rock beats Scissors
    > Scissors beats Paper
    > Paper beats Rock

What’s the desired output?
- The string "Rock, Paper, Scissors, Shoot!" => followed by the result


### 3. PSEUDOCODE ---

1. Computer choice:
    - Write `getComputerChoice()`:
        > Randomly returns “rock”, “paper” or “scissors”
            // do that via `Math.random()`
            
2. Human choice:
    - Write `getHumanChoice()`:
        > `prompt()` user to input a string:
            // "Rock", "Paper" or "Scissors"

3. Initialize two global variables:
    - `humanScore` = 0
    - `computerScore` = 0

4. Play a round:
    - Write `playRound(humanChoice, computerChoice)`:
        > Use the previous choices as arguments
            // `humanChoice` needs to be case-insensitive
    - Log "Rock, Paper, Scissors, Shoot!", followed by:
        > “You win! Paper beats Rock”
        > “You win! Scissors beats Paper”
        > “You win! Rocks beats Scissors”
        > “You lose! Paper beats Rock”
        > “You lose! Scissors beats Paper”
        > “You lose! Rocks beats Scissors”
    - increment `humanScore` or `computerScore` based on round winner 

```
/*
function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
*/
```

5. Play a game:
    - Write `playGame()`:
        > It encloses `playRound()`
        > It loops 5 times (5 games total)
            // Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
            // Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
            // If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.