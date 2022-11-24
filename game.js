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

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()

    let result

    if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            result = "You Lose! Paper beats Rock"
            computerScore++
        } else if (computerSelection === "SCISSORS") {
            result = "You Win! Rock beats Scissors"
            playerScore++
        } else {
            result = "It's draw!"
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            result = "You Lose! Scissors beats Paper"
            computerScore++
        } else if (computerSelection === "ROCK") {
            result = "You Win! Paper beats Rock"
            playerScore++
        } else {
            result = "It's draw!"
        }
    } else {
        if (computerSelection === "ROCK") {
            result = "You Lose! Rock beats Scissors"
            computerScore++
        } else if (computerSelection === "PAPER") {
            result = "You Win! Scissors beats Paper"
            playerScore++
        } else {
            result = "It's draw!"
        }
    }

    let finalResult

    if (playerScore === 5) {
        finalResult = "Final Winner: YOU!"
    } else if (computerScore === 5) {
        finalResult = "Final Winner: The Computer!"
    }

    updateScore(result, finalResult, playerScore, computerScore)

  }

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice())
    })
})

const container = document.querySelector('#container')
const content = document.createElement('div')
const playerCurrentScore = document.createElement('div')
const computerCurrentScore = document.createElement('div')
const finalResultString = document.createElement('div')

container.appendChild(content)
container.appendChild(playerCurrentScore)
container.appendChild(computerCurrentScore)
container.appendChild(finalResultString)

function updateScore(result, finalResult, playerScore, computerScore) {
    content.textContent = result
    playerCurrentScore.textContent = `Your score: ${playerScore}`
    computerCurrentScore.textContent = `Computer's score: ${computerScore}`
    finalResultString.textContent = finalResult
}


  

  /*
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
  */