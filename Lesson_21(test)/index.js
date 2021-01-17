this.x = 9; // 'this' refers to global 'window' object here in a browser
const module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};
console.log(module.getX());

//  returns 81

const retrieveX = function () {
  console.log(this);
  console.log(typeof this);

  //   return this.x;
};
console.log(retrieveX());
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
String.prototype.method = function () {
  return "string";
};
const boundGetX = retrieveX.bind(module).bind("module");
// console.log(boundGetX());
retrieveX.call(module, 1, 2, 3, 4);
retrieveX.call("module");
retrieveX.apply(1, [...params]);
//  returns 81
retrieveX();

const obj = {
  asdad: 123123,
  123123: 123123,

  asdad: 123123,
  123123: 123123,
  asdad: 123123,
};

console.log(obj);
