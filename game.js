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