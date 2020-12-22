document.forms.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.reportValidity());
  console.log(event.target.password.validity);
  event.target.reset();
});

document.forms.loginForm.addEventListener("invalid", (event) => {
  event.preventDefault();
  console.log("invalid");
});

const titleRegExp = new RegExp("JavaScript");
const titleRegExpSecond = /[A-Za-z]{5,}/;
const firstTitle = "JavaScript rules";
const secondTitle = "Ifka SSds ";

// console.log(titleRegExpSecond.test(firstTitle));

// console.log(titleRegExpSecond.test(secondTitle));

let _promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject");
    console.log("settimeout");
  }, 5000);
  //   resolve("resolve");
  //   reject("reject");
});

console.log(_promise);

_promise
  .then((data) => {
    console.log("then", data);
    console.log(_promise);
  })
  .catch((data) => {
    console.log("catch", data);
    console.log(_promise);
  });

console.log(_promise);


console.log('1');

setTimeout(()=>{
    console.log('2');
},0);

console.log('3');


let newFoo = foo.bind(oldObj);
newFoo();

foo.call(oldObj, arg);
foo.apply(oldObj, argArray);

let {nameIvan} = obj;
let {second, first, third} = array;[1,2,3]