function newFunc() {
  this.name = "Slava";
}

console.log(newFunc());

newFunc.prototype.sayHelo = function () {
  console.log("Hi!");
};

const funcExpression = function () {};

const funcExpressionSecond = function named() {};

const funcExpressionSTherd = () => {};

// console.log("prototype", newFunc.prototype);

let newObj = new newFunc(); //{name = "Slava"}

let objObj = {};
let funPrototype = {
  constructor: newFunc,
};

Object.setPrototypeOf(objObj, newFunc.prototype);

console.log("newObj", newObj);
console.log("objObj", objObj);
// console.log("prototype", newFunc.prototype);

let newArrowObj = new funcExpressionSTherd();

// console.log(newObj);

// console.log(newObj.__proto__ === newFunc.prototype);
// console.log(newObj.prototype === newFunc.prototype);

// console.log(newFunc.prototype);
// console.log(funcExpression.prototype);
// console.log(funcExpressionSecond.prototype);
// console.log(funcExpressionSTherd.prototype);

// console.log(funcExpressionSTherd.__proto__);

console.log(funcExpressionSTherd.__proto__ === Function.prototype);
console.log(funcExpression.__proto__ === Function.prototype);
console.log(newFunc.__proto__ === Function.prototype);

function CustomFunction() {}
const foo = new CustomFunction({});

foo.__proto__ === CustomFunction.prototype;

Function;

function fooFunction() {} //new Function

console.log(fooFunction.__proto__ === Function.prototype);
console.log(fooFunction.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
