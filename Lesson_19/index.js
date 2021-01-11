"use strict";
try {
  let obj = {
    name: "Ivan",
  };

  // let map = new Map([[obj, "Ivan"]]);
  let weakMap = new WeakMap();
  weakMap.set(obj, "Ivan");

  // obj = null;

  // console.log(map);
  console.log(weakMap);

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      try {
        // console.log(data.sdlkj());
        if (data.title) {
          let message = "какая-то ошибка";
          throw new Error(message);
        }
        let div = document.createElement("p");
        div.textContent = data.title;
        document.body.appendChild(div);
      } catch (error) {
        let div = document.createElement("p");
        div.textContent = "Извините возникла ошибка";
        document.body.appendChild(div);
        console.log("response", error);
      } finally {
        console.log("finally");
      }

      console.log("all good");
    });
} catch (e) {
  console.log(e);
}

// Map и Set && WeakMap и WeakSet
// у WeakMap keys - objects
// у WeakSet values - objects
// WeakMap и WeakSet не имеют size так как размер колекции может изменять чистильщиком мусора

let obj = {
  name: "Ivan",
};

let map = new Map([[obj, "Ivan"]]);
let weakMap = new WeakMap();
weakMap.set(obj, "Ivan");

// obj = null;

console.log(map);
console.log(weakMap);

obj.name = "Dima";
