function increment() {
  let count = 0;

  return function () {
    count += 1;
    console.log(count);
  };
}

let count1 = increment();
let count2 = increment();

// console.log(count1());
// // console.log(count2());

// console.log(count1());
// console.log(count2());

// console.log(count1());
// console.log(count2());

// console.log(count1());
// console.log(count2());

let someObject = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: {
      f: 4,
      g: 5,
    },
  },
  h: 6,
};

function getPropCount(obj, count = 0) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    count += Object.keys(obj).length;

    for (let property in obj) {
      console.log(property);
      count = getPropCount(obj[property], count);
    }
  }
  console.log(count);
  return count;
}

// console.log("result", getPropCount(someObject));

// let array = [1, 2, 3];

// let string = "str";

// let number = 1;

// console.log(typeof number);

// array.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });

// for (let property of array) {
//   console.log(property);
// }

let example = document.getElementById("123");
// example.classList.add("gren");

console.dir(document);

example.setAttribute("class", "green");
