function getComputerChoice() {
    // returns 0, 1 or 2
    let randomNumber = Math.floor(Math.random() * 3)
    
    switch (randomNumber) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        default:
            return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()

    let result

    if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            result = "You Lose! Paper beats Rock"
        } else if (computerSelection === "SCISSORS") {
            result = "You Win! Rock beats Scissors"
        } else {
            result = "It's draw!"
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            result = "You Lose! Scissors beats Paper"
        } else if (computerSelection === "ROCK") {
            result = "You Win! Paper beats Rock"
        } else {
            result = "It's draw!"
        }
    } else {
        if (computerSelection === "ROCK") {
            result = "You Lose! Rock beats Scissors"
        } else if (computerSelection === "PAPER") {
            result = "You Win! Scissors beats Paper"
        } else {
            result = "It's draw!"
        }
    }

    return result
  }