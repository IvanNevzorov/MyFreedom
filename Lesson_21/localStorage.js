import { createDomElemet } from "./dom";

export function addElemToLocalStorage(todo) {
  let todos = JSON.parse(localStorage.getItem("todos"));
  if (!todos) {
    todos = [];
  }
  const result = JSON.stringify([...todos, todo]);

  localStorage.setItem("todos", result);
}

export function checkLocalStorage() {
  let todos = JSON.parse(localStorage.getItem("todos"));
  console.log(Array.isArray(todos));
  if (Array.isArray(todos)) {
    todos.forEach((element) => {
      createDomElemet(element);
    });
  }
}
