// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
//   Shuffles array in place.

// function shuffle(a) {
//     let j, x, i;
//     for (i = a.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = a[i];
//         a[i] = a[j];
//         a[j] = x;
//     }
//     return a;
//} //https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array

let form = document.createElement("form");
let categories = [];

// class Game {
//     constructor(cat = 6, clue = 5){
//         this.cat = cat
//         this.clue = clue
//         this.fillTable()
//     }
// }
// let topArea = document.createElement('div')

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
  // let randomCat = res.data.length
  // if(randomCat){
  //     let randomPick = Math.floor(Math.random() * randomCat);
  //     let div = document.createElement('div')
  //     div.innerText = res.data[randomPick].id

  // }
  // topArea.append(div)
  const res = await axios.get("https://jservice.io/api/random");
  // console.log(res.data)
  const div = document.createElement("div");
  div.innerText = res.data.title;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.querySelector("#search");
  getCategoryIds(input.value);
  input.value = "";
  getCategoryIds(res.data);
});
