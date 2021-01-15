/*
Реализовать To-Do List, в котором пользователь может создавать новые списки дел (To-Dos), вычёркивать сделанные пункты или удалять их, сохранять состояние списка дел, чтобы вернуться к нему позже, и удалять список дел целиком.
 */
const iconPencil = document.querySelector("#pencil");
const textAreaTask = document.querySelector("#textTask");
const listTodo = document.querySelector(".todos");

let todosArray = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const data = JSON.parse(localStorage.getItem("todos"));
// console.log(data);

if(data != null) {
    data.forEach((item) => {
        createNewItem(item);
    });
}

iconPencil.addEventListener("click", hideTextArea);

function hideTextArea() {
  if (textAreaTask.style.visibility !== "hidden") {
    textAreaTask.style.visibility = "hidden";
  } else {
    textAreaTask.style.visibility = "visible";
  }
}

textAreaTask.addEventListener("keydown", addNewTodo);

function addNewTodo(event) {
  if (event.keyCode === 13) {
    let textLi = textAreaTask.value;
    createNewItem(textLi);

    todosArray.push(textLi);
  }
}

function deleteTodo(event) {
  let clickedTrush = event.currentTarget;
  let parentLi = clickedTrush.parentNode;

  let index = todosArray.indexOf(parentLi.textContent);
  todosArray.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todosArray));
  parentLi.remove();
}

const btnClear = document.querySelector(".clear");
const btnSave = document.querySelector(".save");

btnClear.addEventListener("click", clearAllTodo);
btnSave.addEventListener("click", saveAllTodo);

function clearAllTodo() {
  while (listTodo.firstChild) {
    listTodo.removeChild(listTodo.firstChild);
  }

  todosArray.splice(0, todosArray.length - 1);

  localStorage.clear();
}

function saveAllTodo() {
  localStorage.setItem("todos", JSON.stringify(todosArray));
}

function createNewItem(textLi) {
  let liTodo = document.createElement("li");
  liTodo.textContent = textLi;
  listTodo.append(liTodo);

  let span = document.createElement("span");
  span.classList.add("todo-trash");
  span.addEventListener("click", deleteTodo);
  liTodo.append(span);

  let i = document.createElement("i");
  i.classList.add("fas");
  i.classList.add("fa-trash-alt");
  span.append(i);

  textAreaTask.value = "";
}
