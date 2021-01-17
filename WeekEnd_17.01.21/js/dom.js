const chat = document.querySelector("#divMessages");
const inputUser = document.querySelector("#inputUser");
const seletUser = document.querySelector(".seletUser");
const messages = document.querySelector(".messages");

export let userName = "";

export function addDOM(item) {
  chat.innerHTML += `<div class="${item.user}">${item.user}:${item.message}</div>`;
}

export function changePosition() {
  userName = inputUser.value;
  seletUser.style.display = "none";
  messages.style.display = "block";
}

export function clearDOM() {
  chat.innerHTML = ``;
}
