var player1 = Math.ceil(Math.random() * 6);
var player2 = Math.ceil(Math.random() * 6);

var player1Dice = document.getElementById("player1-dice");
var player2Dice = document.getElementById("player2-dice");

var resultText = document.getElementById("result-text");

player1Dice.setAttribute("src", "/Users/harrismkhawar/Google Drive/Code/WebDev/UdemyCourse/DYCE/images/dice-" + player1 + ".png");

player2Dice.setAttribute("src", "/Users/harrismkhawar/Google Drive/Code/WebDev/UdemyCourse/DYCE/images/dice-" + player2 + ".png");

if (player1 > player2) {
  resultText.innerText = "Player 1 Wins!";
} else if (player2 > player1) {
  resultText.innerText = "Player 2 Wins!";
} else {
  resultText.innerText = "Draw!";
}
