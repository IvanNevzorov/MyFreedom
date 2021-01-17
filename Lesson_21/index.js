import { createDomElemet } from "./dom";
import { addElemToLocalStorage, checkLocalStorage } from "./localStorage";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

checkLocalStorage();

btn.addEventListener("click", addElement);

function addElement() {
  const value = input.value;
  createDomElemet(value);
  addElemToLocalStorage(value);
}
