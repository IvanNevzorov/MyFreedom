const sum = (numberOne) => {
  let sumValue = 0;
  function newF(paramA) {}

  return newF(numberOne);
};

let b = sum(1)(2)(3)(4);
console.log(b);

function first() {
  const a = 1;
  const b = 2;

  function second() {
    const a = 3;
    const b = 4;

    function fourth() {
      console.log(a, b);
    }
    third();
    fourth();
  }

  function third() {
    console.log(a, b);
  }

  second();
}

first();

function count() {
  let countValue = 0;
  return function () {
    let value = 1;
    value++;
    console.log(value);
    countValue++;
    console.log(countValue);
  };
}

const first = count();
first();
first();
first();

const second = count();
second();
second();
second();
first();

Array.prototype.custumSome = function (fn) {
  const newArray = [...this];
  let result = false;
  for (let index = 0; index < newArray.length; index++) {
    if (fn(newArray[index], index, newArray)) {
      result = true;
    }
  }

  return result;
};

Array.prototype.custumEvery = function (fn) {
  const newArray = [...this];
  let result = true;
  for (let index = 0; index < newArray.length; index++) {
    if (!fn(newArray[index], index, newArray)) {
      result = false;
    }
  }

  return result;
};

Array.prototype.custumFilter = function (fn) {
  const newArray = [...this];
  let result = [];
  for (let index = 0; index < newArray.length; index++) {
    if (fn(newArray[index], index, newArray)) {
      result.push(newArray[index]);
    }
  }

  return result;
};

Array.prototype.custumFind = function (fn) {
  const newArray = [...this];
  let result;
  for (let index = 0; index < newArray.length; index++) {
    if (fn(newArray[index], index, newArray)) {
      result = newArray[index];
      break;
    }
  }

  return result;
};

Array.prototype.custumMap = function (fn) {
  const newArray = [...this];
  let result = [];
  for (let index = 0; index < newArray.length; index++) {
    result[index] = fn(newArray[index], index, newArray);
  }
  return result;
};

Array.prototype.custumReduce = function (fn, accum) {
  const newArray = [...this];
  let result = accum;
  for (let index = 0; index < newArray.length; index++) {
    result = fn(result, newArray[index], index, newArray);
  }
  return result;
};
