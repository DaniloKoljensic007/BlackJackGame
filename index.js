
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let message = ""
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")


function getRandomCard() {

    return Math.floor(Math.random() * 10) + 1

}

function startGame() {
    renderGame()
    
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
    for(let i = 0; i < cards.length; i++) {

        cardsEl.textContent +=  " " + cards[i] 
             
    }
     
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
        
    }else if(sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        
    }else {
        message = message = "You're out of the game!"  
        isAlive = false
    }


    messageEl.textContent = message
    
       
}


function newCard() {

    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()

}