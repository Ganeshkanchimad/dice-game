var imageOne = document.querySelector("#img-1");
var imageTwo = document.querySelector("#img-2");
var subHead = document.querySelector("#sub-head");
var randomNumber1 = (Math.floor(Math.random() * 6) + 1);

imageOne.setAttribute("src" , "/dices/dice" + randomNumber1 + ".png");

var randomNumber2 = (Math.floor(Math.random() * 6) + 1);
imageTwo.setAttribute("src" , "/dices/dice" + randomNumber2 + ".png");

if(randomNumber1 < randomNumber2){
    subHead.innerText = "Player 2 Won"
    imageTwo.style.backgroundColor = "Green"
    imageOne.style.backgroundColor = "Red"
  } else if (randomNumber1 === randomNumber2){
    subHead.innerText = "It's a Tie"
  } else {
    subHead.innerText = "Player 1 Won"
    imageOne.style.backgroundColor = "Green"
    imageTwo.style.backgroundColor = "Red"
  }