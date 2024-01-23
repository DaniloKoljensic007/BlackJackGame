
let firstCard = 4
let secondCard = 11
let sum = firstCard + secondCard
let message = ""
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")

function startGame() {
    cardsEl.textContent += firstCard + " " + secondCard
    sumEl.textContent += sum

    if(sum <= 20) {
        message += "Do you want to draw a new card?"
        
        
        
    }else if(sum === 21) {
        message += "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        
    }else {
        message += message = "You're out of the game!"  
        isAlive = false
    }


    messageEl.textContent = message
    
    
}


function newCard() {

    let newCard = 2
    sum += newCard
    startGame()
}