import { addDOM, clearDOM, userName } from "./dom";

let webSocket;

export function connectWebSocket() {
  webSocket = new WebSocket("ws://localhost:8081");

  webSocket.onopen = function (event) {
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

      case "clear": {
        clearDOM();
        break;
      }

      default:
        break;
    }
  };
}

export function sendMessages(value) {
  const message = JSON.stringify({
    type: "message",
    data: { user: userName, message: value },
  });
  webSocket.send(message);
}

export function sendClear() {
  const message = JSON.stringify({
    type: "clear",
    data: {},
  });
  webSocket.send(message);
}
