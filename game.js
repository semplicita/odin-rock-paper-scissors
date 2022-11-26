function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    
    switch (randomNumber) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        default:
            return "scissors"
    }
}

let gameOver = false
let playerScore = 0
let computerScore = 0
let finalResult

function playRound(playerSelection, computerSelection) {
    let winner = getWinner(playerSelection, computerSelection)
    updateScore(winner, playerSelection, computerSelection)
}

function getWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()

    let winner = ""

    if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            winner = "computer"
        } else if (computerSelection === "SCISSORS") {
            winner = "player"
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            winner = "computer"
        } else if (computerSelection === "ROCK") {
            winner = "player"
        }
    } else {
        if (computerSelection === "ROCK") {
            winner = "computer"
        } else if (computerSelection === "PAPER") {
            winner = "player"
        }
    }
    return winner
}

function updateScore(winner, playerSelection, computerSelection) {
    if (winner === "computer") {
        result = "you lose! " + computerSelection + " beats " + playerSelection
        computerScore++
    } else if (winner === "player") {
        result = "you win! " + playerSelection + " beats " + computerSelection
        playerScore++
    } else {
        result = "it's a draw!"
    }

    if (playerScore === 5) {
        finalResult = "FINAL WINNER: YOU!"
        gameOver = true
    } else if (computerScore === 5) {
        finalResult = "FINAL WINNER: THE COMPUTER!"
        gameOver = true
    }

    updatePage(result, finalResult, playerScore, computerScore)
}

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!gameOver) {
            playRound(button.id, getComputerChoice())
        }
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

function updatePage(result, finalResult, playerScore, computerScore) {
    content.textContent = result
    playerCurrentScore.textContent = `your score: ${playerScore}`
    computerCurrentScore.textContent = `computer's score: ${computerScore}`
    finalResultString.textContent = finalResult
}