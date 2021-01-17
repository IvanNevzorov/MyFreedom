const list = document.querySelector(".list");

export function createDomElemet(todo) {
  const li = document.createElement("li");
  li.textContent += todo;
  list.appendChild(li);
}

function declaration() {
  console.log(this);
}
