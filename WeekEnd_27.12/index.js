Array.prototype.lastIndex = function () {
  return this.length - 1;
};

Array.prototype.customReverse = function () {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(this[this.lastIndex() - i]);
  }

  return newArray;
};

Array.prototype.customReverseThis = function () {
  let newArray = [...this];
  for (let i = 0; i < newArray.length; i++) {
    this[i] = newArray[newArray.lastIndex() - i];
  }
};

let array = [1, 2, 3];
console.log("array", array);
let arrayReversed = array.customReverse();
console.log("arrayReversed", arrayReversed);
console.log("array", array);
let result = array.customReverseThis();
console.log("array", array);
console.log("result", result);

// let newArray = new Array(1, 2, 3, 4);
// console.log("newArray", newArray);
// let newArrayReversed = newArray.customReverse();
// console.log("newArrayReversed", newArrayReversed);

// let obj = {};
// let newObj = new Object();

// newObj = obj;
// console.log("step1");
// console.log(obj);
// console.log(newObj);

// newObj.name = "Slava";
// console.log("step2");
// console.log(obj);
// console.log(newObj);

// newObj = { ...obj };
// console.log("step3");
// console.log(obj);
// console.log(newObj);

// newObj.name = "Ivan";
// console.log("step4");
// console.log(obj);
// // console.log(newObj);

// console.log(array.__proto__);
// console.log(Array.prototype);

// let arrayTest = [1, 2, 3];
// let variable = arrayTest.reverse();

// console.log(arrayTest);
// console.log(variable);

// let array8 = [];
// let array1 = [];
// let array2 = [];
// let array3 = [];
// let array4 = [];
// let array5 = [];
// let array6 = [];
// let array7 = [];

// // let proto = Array.getPrototypeOf(array7);
// let str = "Ivan";
// let proto = Object.getPrototypeOf(str);
// console.log(proto);

// Array.prototype.method = () => {
//   console.log("new method");
// };
// console.log(array1);
// array7.method();

let arrayMap = [1, 2, 3, 4];

Array.prototype.customMap = function (func) {
  let thisArray = this;
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray[i] = func(thisArray[i], i, thisArray);
  }

  return newArray;
};

let result = arrayMap.customMap(func);

let func = (item, index, array) => {
  console.log(item, index, array);
  return 1;
};

console.log(result);

let arrayFilter = [1, 2, 3, 4];

Array.prototype.customFilter = function (func) {
  let thisArray = this;
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (func(thisArray[i], i, thisArray)) {
      newArray[newArray.length] = thisArray[i];
    }
  }

  return newArray;
};

let resultFilter = arrayFilter.customFilter(funcFilter);

function funcFilter(item, index, array) {
  return item % 2 === 0;
}

console.log(resultFilter);

console.log([], [].length);
console.log([1], [1].length);
console.log([1, 2], [1, 2].length);
console.log([1, 2, 3], [1, 2, 3].length);

array.map();
array.filter();

let isarray = [];
let str = "array";
console.log(Array.isArray(str));
isarray.isArray();
