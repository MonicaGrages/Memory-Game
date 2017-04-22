
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			document.querySelector(".matchMessage").innerHTML="You found a match!";
			document.querySelector(".matchMessage").style.color="#00A6B3";
			score++;
			document.querySelector(".scoreMessage").innerHTML="Your score is: "+score;

		;}
		else {
			document.querySelector(".matchMessage").innerHTML="Sorry, try again.";
			document.querySelector(".matchMessage").style.color="#F15B31";
		;}
	};
	if (cardsInPlay.length ===3) {
		cardReset();
	};
};

var flipCard = function() {
	var cardId = this.getAttribute("data-id");
	this.setAttribute("src", cards[cardId].cardImage);
	console.log("User flipped "+cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};

var createBoard = function () {
 for (var i = 0; i<cards.length; i++) {
 	var cardElement = document.createElement("img");
 	cardElement.setAttribute("src", "images/back.png");
 	cardElement.setAttribute("data-id", i);
 	cardElement.addEventListener("click", flipCard);
 	document.getElementById('game-board').appendChild(cardElement);
 }
};

createBoard();

var cardReset = function() {
	console.log("card reset button clicked");
	for (var i=0; i<cards.length; i++) {
	document.querySelectorAll("img")[i].setAttribute("src", "images/back.png");
	}
	cardsInPlay = [];
	document.querySelector(".matchMessage").innerHTML=" ";

};

var cardButton = document.getElementById("card-reset");
cardButton.addEventListener("click", cardReset);

var score=0;
document.querySelector(".scoreMessage").innerHTML="Your score is: "+score;


var scoreReset = function () {
	console.log("score reset button clicked");
	score = 0;
	document.querySelector(".scoreMessage").innerHTML="Your score is: "+score;

};

var scoreButton = document.getElementById("score-reset");
scoreButton.addEventListener("click", scoreReset);
