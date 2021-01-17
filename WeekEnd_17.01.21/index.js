import { changePosition } from "./js/dom";
import { connectWebSocket, sendClear, sendMessages } from "./js/websoket";

const input = document.querySelector("#inputMessages");
const btnSend = document.querySelector("#btnSend");
const btnChoose = document.querySelector("#btnChoose");
const btnClear = document.querySelector("#btnClear");

connectWebSocket();

btnSend.addEventListener("click", (event) => {
  event.preventDefault();
  const value = input.value;
  sendMessages(value);
});

btnChoose.addEventListener("click", changePosition);

btnClear.addEventListener("click", sendClear);
