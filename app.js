let a = alert(`hey! this is  a casino game BLACK-JACK, 
so you have to hit start botton first then have to choose a number between 11-21 in the prompt ...
if your entered number and the second card which is a random num between 1-11 comes for server site. 
sum is equal to 21 you got the black jack means you won the match.if sum is less then 21 you got another chance and got a new card...
if the sum is greater then 21 you lost the match`)
let firstCard = "";
firstCard = Number.parseInt(firstCard);
let secondCard = ""
let message = "";
let messageEl = document.getElementById("message-El");
let sumEl = document.getElementById("sum-El");
let cardEl = document.getElementById("card-El");
let scardEl = document.getElementById("scard-El");
let hasBlackJack = false;
let isAlive = true;
function start() {
  firstCard = prompt("Enter your card number");
  firstCard = Number.parseInt(firstCard);
  secondCard = [Math.floor(Math.random() * 11)];
secondCard = Number.parseInt(secondCard);
let sum = firstCard + secondCard;

  if (sum < 21) {
    message = "Do you want to draw a new card";
  } else if (sum === 21) {
    message = "wOoh! you got a black jack";
    hasBlackJack = true;
  } else {
    message = "you lost!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum:" + sum;
  cardEl.textContent = "First_card:" + firstCard;
  scardEl.textContent = "Second_card:" + secondCard;
  
}

function restart(){
  if (isAlive == true && hasBlackJack == false){
  
  let firstCard = prompt("Enter your card number");
firstCard = Number.parseInt(firstCard);
let secondCard = [Math.floor(Math.random() * 11)];
secondCard = Number.parseInt(secondCard);
let sum = firstCard + secondCard;
// let hasBlackJack = false;
// let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-El");
let sumEl = document.getElementById("sum-El");
let cardEl = document.getElementById("card-El");
let scardEl = document.getElementById("scard-El");
function start() {
  if (sum < 21) {
    message = "Do you want to draw a new card";
  } else if (sum === 21) {
    message = "wOoh! you got a black jack";
    hasBlackJack = true;
  } else {
    message = "you lost!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum:" + sum;
  cardEl.textContent = "First_card:" + firstCard;
  scardEl.textContent = "Second_card:" + secondCard;
} 

start()
  }
  
}
 
