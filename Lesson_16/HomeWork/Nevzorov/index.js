const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
let counter = 0;

btn.addEventListener("click", addItem);

function addItem() {
  fetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)
    .then((response) => response.json())
    .then((data) => {
      counter++;
      const item = document.createElement("li");
      const text = document.createTextNode(data.title);
      item.appendChild(text);
      list.appendChild(item);
    });
}
