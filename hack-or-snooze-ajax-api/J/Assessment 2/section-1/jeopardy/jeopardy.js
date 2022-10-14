//First I was able to print out a hundred of the Ids. Then I was able to randomize it. Then I was able to print 6 random ids in the console. Then I created a table.

const numCat = 6;
const numClue = 5;
let baseURL = "https://jservice.io/api/";
let categories = [];
let body = document.querySelector('body')
let tbl = document.querySelector("#jeopardy");

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
  let res = await axios.get(`${baseURL}categories?count=100`);
  let catIds = res.data.map((cat) => cat.id);
  return _.sampleSize(catIds, numCat);
  //using _.sampleSize method: https://www.geeksforgeeks.org/lodash-_-samplesize-method/
}

async function getCategory(catId) {
  let res = await axios.get(`${baseURL}category?id=${catId}`);
  let cat = res.data;
  let allClues = cat.clues
  let randClue = _.sampleSize(allClues, numClue)
  let clues = randClue.map((categories) => ({
    question: categories.question,
    answer: categories.answer,
  }));
  
  return { title: cat.title, clues };
}

//Followed: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
//To make a table
async function fillTable() {

  let tbl = document.querySelector("#jeopardy");
  let tHead = document.createElement('thead')
  let tBody = document.createElement("tbody");
  let row = document.createElement("tr");

  for (let cId = 0; cId < numCat; cId++) {
    let cell = document.createElement("th");
    cell.innerText = categories[cId].title;
    row.append(cell);
    tHead.append(row)
  }
  tbl.append(tHead)
  
  for(let clueId = 0; clueId < numClue; clueId++){
    let row = document.createElement("tr");
    for (let cId = 0; cId < numCat; cId++){
      let cell = document.createElement("td");
      cell.innerText = '?'
      row.append(cell)
      tBody.append(row);

      cell.addEventListener('click', function(){
        let clue = categories[cId].clues[clueId];
        if (this.innerText = '?'){
          this.innerText = clue.question;
        }else {
          this.innerText = clue.answer;
          console.log(clue.answer);
        }
         setInterval(() => {
           this.innerText = clue.answer;
         }, 6000); 
         let text = document.createElement('h3')
         text.innerText = 'You have 5 seconds to answer'
         body.append(text)
         setTimeout(() => {
           text.innerText = ''
         }, 5000);
      })

    }
  }

  tbl.append(tBody)
  tbl.setAttribute("border", "2");  
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

//starting page
function showLoadingView() {
  tbl.innerText = "Welcome to a game of Jeopardy! Please click start!";
  body.append(tbl);
}

/** Remove the loading spinner and update the button used to fetch data. */

//reset/start game
async function hideLoadingView() {
  
  const btn = document.createElement("button");
  btn.addEventListener("click", function(){
    tbl.innerHTML = ''
  });
  
  setTimeout(btn.addEventListener("click", setupAndStart), 100);
  btn.innerText = "start/reset";
  body.append(btn);
}
/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
  let catIds = await getCategoryIds();

  categories = [];

  for (let catId of catIds) {
    categories.push(await getCategory(catId));
  }
  fillTable();
}

showLoadingView();
hideLoadingView();

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO