const form = document.querySelector('form')
const toDo = document.querySelector('#todo')



form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = document.querySelector("#add-ToDo");
  const newLi = document.createElement("li");
  const newButton = document.createElement("button");

  newLi.innerText = newTodo.value;
  newButton.innerText = "Done";

  newLi.append(" ", newButton);
  toDo.prepend(newLi);
  console.log("yas");
  form.reset();
});

toDo.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});




