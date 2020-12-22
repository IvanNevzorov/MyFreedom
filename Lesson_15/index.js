// const obj = {
//   name: "Slava",
//   age: 18,
// };

// obj.change = 123;

// const objSting = JSON.stringify(obj);

// const stringObj = JSON.parse(objSting);

// let btn = document.querySelector(".btn");

// btn.onclick = function () {
//   localStorage.clear();
// };
// //отправить данные в localStorage
// // localStorage.setItem(key, value);
// localStorage.setItem("obj", objSting);

// //взять данные из localStorage
// // localStorage.getItem(key);
// localStorage.getItem("obj");
// let newItem = localStorage.getItem("obj");
// //взять данные из localStorage
// // localStorage.removeItem(key);
// // localStorage.removeItem("obj");

// console.log(newItem);
// localStorage.setItem("123", 123);
// localStorage.setItem("1231", 123);
// localStorage.setItem("1232", 123);
// localStorage.setItem("1233", 123);
// localStorage.setItem("1234", 123);
// localStorage.setItem("1235", 123);

let xhr = new XMLHttpRequest();

console.log(xhr);
//инициализация
// xhr.open(method, URL, [async, user, passwork])
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");

//инициализация
// xhr.sent([body])

xhr.send();

xhr.onload = (event) => {
  console.log(event);
  console.log(xhr.status);

  let todos = JSON.parse(xhr.response);
  todos.map((item) => {
    let li = document.createElement("li");

    let h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(item.title));
    let parag = document.createElement("p");
    parag.appendChild(document.createTextNode(item.body));
    li.appendChild(h1);
    li.appendChild(parag);
    console.log(li);
  });
};
