console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne || cardTwo === "queen") {
  alert("You found a match.");
} else if (cardThree || cardFour === "king") {
  alert("You found a match.");
} else {
  alert("Sorry try again.");
}
