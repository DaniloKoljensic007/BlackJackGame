let player = {
    name: "Danilo",
    chips: "200$"
}
let cards = []
let message = ""
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " " + player.chips

function getRandomCard() {
    
    let randomCard = Math.floor(Math.random() * 12) + 1
    if(randomCard === 1) {
        randomCard = 11
    }else if (randomCard === 11 || randomCard === 12 || randomCard === 13) {
        randomCard = 10     
    }
    return randomCard
    
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
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

    if(isAlive && !hasBlackJack) {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
    }else {
        return
    }

}