const job = {
  vaction: false,
};


let {vaction, name } = job

console.log(vaction, name);
const obj = {
  name: "ivan",
  age: 18,
  _married: false,
  isHaveCar: false,
  job: job,
  get something() {
    return this.age;
  },
  set something(value) {
    this.age = value;
  },
};

console.log(obj.something);
obj.something = 44321;
console.log(obj);
// Object.freeze(obj);

// obj.name = "slava";
// obj.newOption = 123;

// console.log(obj);

Object.defineProperties(obj, {
  "name": {
    writable: false,
    configurable: false,
    enumerable: false,
  },
  "married": {
    get: function () {
      return this._married;
    },
    set: function (value) {
      this._married = value;
      this.job.vaction = value;
    },
  },
});

obj.name = "slava";

console.log(obj);

// Object.defineProperty(obj, "name", {
//   writable: false,
//   configurable: false,
//   enumerable: false,
// });

// for (let item in obj) {
//   console.log(item);
// }

// Object.defineProperty(obj, "married", {
//   get: function () {
//     return this._married;
//   },
//   set: function (value) {
//     this._married = value;
//     this.job.vaction = value;
//   },
// });

obj.married = true;
console.log(obj.married);
console.log(obj);
