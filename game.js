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

  function game() {

    let playerWins = 0
    let computerWins = 0

    // plays 5 rounds
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, paper, scissors?")
        let result = playRound(playerChoice, getComputerChoice())
        console.log(result)

        if (result.charAt(4) === "W") {
            playerWins++
        } else if (result.charAt(4) === "L") {
            computerWins++
        }
    }

    if (playerWins > computerWins) {
        console.log("Final Winner: YOU!")
    } else if (computerWins > playerWins) {
        console.log("Final Winner: The Computer!")
    } else {
        console.log("Final Result: A draw!")
    }
  }

  game()