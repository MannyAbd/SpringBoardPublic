const gameContainer = document.getElementById("game");

// Variables
let firstClickedCard = null; //First card clicked
let secondClickedCard = null; //Second card clicked
let cardsFlipped = 0; //Counter
let noClicking = false; //Controls the boolean for clicking ability

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // If the card already has the class of flipped
  if (event.target.classList.contains("flipped")) {
    return;
  }

  // If the card has already been clicked
  if (noClicking === true) {
    return;
  }

  let currentCard = event.target;
  currentCard.style.backgroundColor = currentCard.classList[0];
  // Assigns value of first and second clicked cards
  // Adds the flipped class to the card
  if (firstClickedCard === null) {
    firstClickedCard = currentCard;
    firstClickedCard.classList.add("flipped");
    // console.log('FirstCard:', firstClickedCard);
  } else {
    secondClickedCard = currentCard;
    secondClickedCard.classList.add("flipped");
    // console.log('SecondCard:', secondClickedCard);
  }

  // Checks to see if two cards were clicked and then allow no more clicks
  if (firstClickedCard && secondClickedCard) {
    noClicking = true;

    // Gets the cards class name
    let card1 = firstClickedCard.className;
    let card2 = secondClickedCard.className;

    // If the cards match
    if (card1 === card2) {
      // Add 2 to the counter
      cardsFlipped += 2;

      // Remove the event handler
      firstClickedCard.removeEventListener("click", handleCardClick);
      secondClickedCard.removeEventListener("click", handleCardClick);

      // Set the values back to null
      firstClickedCard = null;
      secondClickedCard = null;

      // Set noClicking back to false
      noClicking = false;

      setTimeout(function () {
        //This is an ugly and disgraceful solution to my async problem, and I have brought
        //shame upon my dojo from having used it
        // Sets an alert to say the game is over
        if (cardsFlipped === COLORS.length) {
          alert("game over!");
        }
      }, 500);
    } else {
      // Sets a one second time for cards that don't match
      setTimeout(function () {
        // Clears the background color
        firstClickedCard.style.backgroundColor = "";
        secondClickedCard.style.backgroundColor = "";

        //Removes the flipped class
        firstClickedCard.classList.remove("flipped");
        secondClickedCard.classList.remove("flipped");

        // Sets the card values back to null
        firstClickedCard = null;
        secondClickedCard = null;

        // Sets noClicking back to false
        noClicking = false;
      }, 1000);
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
