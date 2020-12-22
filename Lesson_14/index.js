// let someProperty = true;

// let interval = setInterval(() => {
//   if (someProperty) {
//     console.log("someProperty");
//   }
//   console.log("setInterval");
// }, 3000);

// setTimeout(() => {
//   someProperty = false;
//   clearInterval(interval);
// }, 10000);

// let init;

// function func() {
//   let origin = init;

//   init = {
//     data: [1, 2, 3, 4],
//     method: () => {
//       console.log("method");
//     },
//   };
// }

// let block1 = document.querySelector(".block1");
// let block2 = document.querySelector(".block2");

// let obj = {
//   a: block1,
//   b: block2,
// };

// document.body.removeChild(block1);

// obj.a = null;

// console.log(obj.a);

// const objFunc = {
//   name: "objFunc",
//   method: function () {
//     console.log(this);
//   },
// };

// const objArow = {
//   name: "objArow",
//   method: () => {
//     console.log(this);
//   },
// };
// console.log("objFunc");
// objFunc.method();

// console.log("objFunc - call, apply");
// objFunc.method.apply(objArow);

// console.log("objArow - ()=>");
// objArow.method();

// function parent() {
//   let objObjArow = {
//     name: "parent",
//     child: {
//       name: "child",
//       childChild: {
//         name: "childChild",

//         method: () => {
//           console.log(this);
//         },
//       },
//     },
//   };

//   console.log("parent");
//   objObjArow.child.childChild.method();
// }
// parent.apply(objArow);

// let parent = {
//   name: "parent",
// };
// let some = () => {
//   console.log(this);
// };

// some.call(parent);

// (function (){
//  console.log('anonim');
// })()

// let anonimus = function () {
//   console.log("anonimus");
// };

// function highOrderFunction(func){
//   console.log('highOrderFunction');
//   func();
// }

// function callBack(){
//   console.log('callBack');
// }

// highOrderFunction(callBack);

// function* generator() {
//   yield "Do this";

//   yield "Do that";

//   return "Finish";

//   yield "Something";
// }

// console.log(generator);

// let generatorDoing = generator();

// console.log(generatorDoing);

// console.log("1", generatorDoing.next());

// console.log("2", generatorDoing.next());

// console.log("3", generatorDoing.next());

// console.log("4", generatorDoing.next());

function* fibonacci(length) {
  let privious = 0;
  let current = 1;

  for (let i = 0; i < length; i++) {
    yield current;
    [privious, current] = [current, current + privious];
  }
}

let first5fibonacci = [...fibonacci(8)];

console.log(first5fibonacci);

function global() {
  let glob;

  function local() {
    let loc;

    function another() {
      let anoth;

      local();
      // локальное область видимости local()
      // ссылка на global() LE
    }

    another();
    // локальное область видимости another()
    // ссылка на local() LE
  }

  local();
  // локальное область видимости local()
  // ссылка на global() LE
}

global();
// локальное область видимости global()
// ссылка на GLOBAL LE

let array = [1, 2, 3, 4];

array.push();
array.concat();
array.slice();
array.splice();
array.forEach();
array.map();
array.reduce();
array.find();
array.filter();
array.some();
array.every();
array.indexOf();
array.includes();
array.join();
