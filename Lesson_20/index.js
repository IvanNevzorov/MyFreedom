const chat = document.querySelector("#divMessages");
const input = document.querySelector("#inputMessages");
const btnSend = document.querySelector("#btnSend");

const webSocket = new WebSocket("ws://localhost:8081");

webSocket.onopen = function (event) {
  console.log(event);
  const message = JSON.stringify({ type: "onload" });
  webSocket.send(message);
};

webSocket.onmessage = function (event) {
  const { type, data } = JSON.parse(event.data);
  switch (type) {
    case "allMessages": {
      data.forEach((element) => {
        addDOM(element);
      });
      break;
    }

    case "message": {
      addDOM(data);
      break;
    }

    default:
      break;
  }
};

function addDOM(item) {
  let div = document.createEvent("div");
  chat.innerHTML += `<div class="${item.user}">${item.message}</div>`;
}

btnSend.addEventListener("click", (event) => {
  event.preventDefault();
  const value = input.value;
  const message = JSON.stringify({
    type: "message",
    data: { user: "Slava", message: value },
  });
  webSocket.send(message);
});

if ({} || (1 && [] && " " && null)) {
  console.log("true");
}

const some = {} && 1 && [] && "1";


xhr.onload = (e) => {
  console.log(e);
  console.log(xhr.status);
  console.log(JSON.parse(xhr.response));
  const usersArr = JSON.parse(xhr.response);
}

xhr.addEventListener('load', (e) => {
  console.log(e);
  console.log(xhr.status);
  console.log(JSON.parse(xhr.response));
  const usersArr = JSON.parse(xhr.response);
})