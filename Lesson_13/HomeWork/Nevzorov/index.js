const ul = document.createElement("ul");
document.body.appendChild(ul);

do {
  let data = prompt(" Введите значение для строки", "");
  if (data === null) {
    break;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(data));
  ul.appendChild(li);
} while (false);
