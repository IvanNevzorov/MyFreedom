let array = [1, 2, 3, 4];

let callback = function (accumuleted, item, index, array) {
  console.log(accumuleted, item, index, array);
  accumuleted.push(1);
  return accumuleted;
};

Array.prototype.customReduce = function (func, accumuleted) {
  const thisArray = this;
  for (let i = 0; i < this.length; i++) {
    accumuleted = func(accumuleted, thisArray[i], i, thisArray);
  }

  return accumuleted;
};

let arrayArray = [[1], [2], [3, 5], [4]];

// []
// [...[], ...[1]] = [1]

// [...[1], ...[2]] = [1, 2]

// [...[1, 2], ...[3,5] ] = [1,2,3,5]

let funcRed = function (accumuleted, item, index, array) {
  return [...accumuleted, ...item];
};
let newArray = arrayArray.reduce(funcRed, []);

let funcObj = function (accumuleted, item, index, array) {
  accumuleted[index] = item;
  return accumuleted;
};

let newObj = arrayArray.reduce(funcObj, {});

console.log(newObj);

let obj = {
  name: "ivan",
  age: "30",
};

// let map = new Map([[key, value],[key, value],[key, value]]);
// let map = new Map(Object.entries(obj));

let mapUsers = new Map();

mapUsers.set(obj, new Date());
mapUsers.set(obj, new Date());
// map.set(key, value);
// map.get(key);
// map.delete(key);
// map.has(key);
// map.size();
// map.clear();

// Object.keys();
// Object.values();
// Object.entries(); [[key, value],[key, value],[key, value]]

console.log(mapUsers);
console.log(mapUsers.get(obj));

let set = new Set([1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 7]);

set.add(10);
set.add(10);
set.add(10);
set.add(10);

// set.clear();
console.log(set.has(10));
set.delete(10);

console.log(set);

function filterArray(array) {
  let set = new Set(array);

  for( key of set) {
    console.log(key);
  }

  let newArray = [...set];
  return newArray;
}

function filterArrayTest(array) {
  let newArray = [];
  array.forEach((element) => {
    if (!newArray.some((item) => item === element)) {
      newArray.push(element);
    }
  });
  let newArray = [...set];
  return newArray;
}

let customArray = [1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7];

let filteredArray = filterArray(customArray);

console.log(filteredArray);

let obj = {
  name: "Slava",
  age: 20,
};

let obj1 = {
  name: "Ivan",
  age: 20,
};

let obj2 = {
  name: "Dasha",
  age: 20,
};

let obj3 = {
  name: "Nastya",
  age: 20,
};

let setUsers = new Set([
  obj,
  obj,
  obj,
  obj,
  obj1,
  obj1,
  obj1,
  obj1,
  obj1,
  obj2,
  obj3,
  obj3,
  obj3,
]);

console.log(setUsers);
