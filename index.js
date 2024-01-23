
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let message = ""
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")


function startGame() {
 
    
    if(sum <= 20) {
        message += "Do you want to draw a new card?"
        sumEl.textContent += sum
        
    }else if(sum === 21) {
        message += "Wohoo! You've got Blackjack!"
        sumEl.textContent +=  sum
        hasBlackJack = true
        
    }else {
        message += message = "You're out of the game!"
        sumEl.textContent += sum      
        isAlive = false
    }


    messageEl.textContent = message
    messageEl = ""
    sumEl = ""
    
}