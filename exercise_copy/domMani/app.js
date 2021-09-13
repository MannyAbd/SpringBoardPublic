// Write the code necessary to do the following:

// Select the section with an id of container without using querySelector.
// Select the section with an id of container using querySelector.
// Select all of the list items with a class of “second”.
// Select a list item with a class of third, but only the list item inside of the ol tag.
// Give the section with an id of container the text “Hello!”.
// Add the class main to the div with a class of footer.
// Remove the class main on the div with a class of footer.
// Create a new li element.
// Give the li the text “four”.
// Append the li to the ul element.
// Loop over all of the lis inside the ol tag and give them a background color of “green”.
// Remove the div with a class of footer

const section = document.getElementById('container')
console.log(section)
const sectionTwo = document.querySelector('#container')
console.log(sectionTwo)
const li = document.querySelectorAll('.second')
console.log(li)
const third = document.querySelectorAll('.third')
console.log(third[1])
// section.innerText = "Hello!"
console.log(section.innerText)
const divFooter = document.querySelector('.footer')
divFooter.className += " main"
console.log(divFooter)
divFooter.classList.remove('main')
const newLi = document.createElement('li')
newLi.innerText = 'four'
const ul = document.querySelector('ul')
ul.append(newLi)
let loopLiInOl = document.querySelectorAll('ol li')
for (let i = 0; i<loopLiInOl.length; i++){
    loopLiInOl[i].style.backgroundColor = 'green'
}
divFooter.remove()
console.log(divFooter)