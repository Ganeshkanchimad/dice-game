var imageOne = document.querySelector("#img-1")
var imageTwo = document.querySelector("#img-2")
var subHead = document.querySelector("#sub-head")
var randomNumber = Math.floor(Math.random() * 6)
var randomNumber2 = Math.floor(Math.random() * 6)

if (randomNumber === 0){
  imageOne.setAttribute("src" , "dices/dice1.png")
} else if (randomNumber === 1) {
  imageOne.setAttribute("src" , "dices/dice2.png")
} else if (randomNumber === 2) {
  imageOne.setAttribute("src" , "dices/dice3.png")
} else if (randomNumber === 3) {
  imageOne.setAttribute("src" , "dices/dice4.png")
} else if (randomNumber === 4) {
  imageOne.setAttribute("src" , "dices/dice5.png")
} else {
  imageOne.setAttribute("src" , "dices/dice6.png")
}



if (randomNumber2 === 0){
  imageTwo.setAttribute("src" , "dices/dice1.png")
} else if (randomNumber2 === 1) {
  imageTwo.setAttribute("src" , "dices/dice2.png")
} else if (randomNumber2 === 2) {
  imageTwo.setAttribute("src" , "dices/dice3.png")
} else if (randomNumber2 === 3) {
  imageTwo.setAttribute("src" , "dices/dice4.png")
} else if (randomNumber2 === 4) {
  imageTwo.setAttribute("src" , "dices/dice5.png")
} else {
  imageTwo.setAttribute("src" , "dices/dice6.png")
}

if(randomNumber < randomNumber2){
    subHead.innerText = "Player 2 Won"
  } else if (randomNumber === randomNumber2){
    subHead.innerText = "It's a Tie"
  } else {
    subHead.innerText = "Player 1 Won"
  }