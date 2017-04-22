
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
			console.log("User found a match. Score +1")

		;}
		else {
			document.querySelector(".matchMessage").innerHTML="Sorry, try again.";
			document.querySelector(".matchMessage").style.color="#F15B31";
			console.log("Mismatch")
		;}
	};
	if (cardsInPlay.length ===3) {
		for (var i=0; i<cards.length; i++) {
		document.querySelectorAll("img")[i].setAttribute("src", "images/back.png");
		};
		document.querySelector(".matchMessage").innerHTML=" ";
		cardsInPlay = [];
	};
};

var flipCard = function() {
	if (this.getAttribute("src") !== "images/back.png") /*user clicks face up card*/{
		for (var i=0; i<cards.length; i++) {
			document.querySelectorAll("img")[i].setAttribute("src", "images/back.png"); /*turn all cards back over*/
		};	
		document.querySelector(".matchMessage").innerHTML=" ";
		cardsInPlay = [];
	}
	else {
		var cardId = this.getAttribute("data-id");
		this.setAttribute("src", cards[cardId].cardImage);
		console.log("User flipped "+cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);
		checkForMatch();
	// console.log(cards[cardId].cardImage);
	// console.log(cards[cardId].suit);
	};
};

var createBoard = function () {
 	for (var i = 0; i<cards.length; i++) {
 		var cardElement = document.createElement("img");
	 	cardElement.setAttribute("src", "images/back.png");
	 	cardElement.setAttribute("data-id", i);
	 	cardElement.addEventListener("click", flipCard);
	 	document.getElementById('game-board').appendChild(cardElement);
 	};
 	cards.sort(function(a,b){return 0.5 - Math.random()}); /*shuffle cards*/
};

createBoard();

var cardReset = function() {
	for (var i=0; i<cards.length; i++) {
		document.querySelectorAll("img")[i].setAttribute("src", "images/back.png");
	};
	cardsInPlay = [];
	document.querySelector(".matchMessage").innerHTML=" ";
	cards.sort(function(a,b) {
		return 0.5 - Math.random(); /*randomly sorts cards array*/
	});
	console.log("Cards were shuffled");
};

var cardButton = document.getElementById("card-reset");
cardButton.addEventListener("click", cardReset);

var score=0;
document.querySelector(".scoreMessage").innerHTML="Your score is: "+score;

var scoreReset = function () {
	score = 0;
	document.querySelector(".scoreMessage").innerHTML="Your score is: "+score;
	console.log("Score was reset");

};

var scoreButton = document.getElementById("score-reset");
scoreButton.addEventListener("click", scoreReset);


