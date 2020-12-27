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
array.customReverseThis();
console.log("arrayReversed", arrayReversed);
console.log("array", array);

let newArray = new Array(1, 2, 3, 4);
console.log("newArray", newArray);
let newArrayReversed = newArray.customReverse();
console.log("newArrayReversed", newArrayReversed);
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
// console.log(newObj);

console.log(array.__proto__);
console.log(Array.prototype);
