
let firstCard = 9
let secondCard = 11
let sum = firstCard + secondCard
let message = ""
let hasBlackJack = false
let isAlive = true

function startGame() {
    if(sum <= 20) {
        message += "Do you want to draw a new card? 🙂"
    }else if(sum === 21) {
        message += "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    }else {
        message += message = "You're out of the game! 😭"
        isAlive = false
    }
    
    console.log(message)

}