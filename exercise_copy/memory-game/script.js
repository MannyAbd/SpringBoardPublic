const gameContainer = document.getElementById("game");
let firstCard, secondCard;
let noClick = false



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
// it is based on an algorithm called Fisher Yates if you want ot research more
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

function handleCardClick(e) {
  // you can use event.target to see which element was clicked

  //from solution
  let currentCard = e.target;
  currentCard.style.backgroundColor = currentCard.classList[0];

  //if noclick is false than it means first time it is clicked then it is set to true after clicking the second card. I want it to stop after the second click then 'flip' back.
  
  //Followed https://marina-ferreira.github.io/tutorials/js/memory-game/ for this part.
  if (!noClick) {
    noClick = true;
    firstCard = this;
  } else {
    noClick = false;
    secondCard = this;
    console.log("hi");

    if (firstCard && secondCard){
      noClick = true
    }
    // if (firstCard == secondCard) {
    //   console.log("match");
    // }
  }
}
//

let createdDiv = createDivsForColors(shuffledColors);

