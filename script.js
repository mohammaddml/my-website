let inputElem = document.getElementById("input");
let form = document.querySelector("form");
let ulElem = document.querySelector("ul");

function addNewTodo(todoValue) {
  let newLi = document.createElement("li");
  newLi.className = "newLiStyle";

  let newSpan = document.createElement("span");
  newSpan.innerHTML = todoValue;

  let newIcon = document.createElement("span");
  newIcon.innerHTML = "delete";
  newIcon.className = "material-symbols-outlined";

  newIcon.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });

  newLi.append(newSpan, newIcon);

  ulElem.append(newLi);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputElem.addEventListener("keydown", function (event) {
  let todoValue = event.target.value.trim();

  if (event.keyCode === 13) {
    if (todoValue) {
      inputElem.value = "";
      addNewTodo(todoValue);
    }
  }
});
