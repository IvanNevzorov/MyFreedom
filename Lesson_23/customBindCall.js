function customBind(fn, customThis) {
  return function () {
    customCall(fn, customThis);
  };
}

function customCall(fn, customThis) {
  Object.prototype.fu = fn;
  customThis.fu();
  delete Object.prototype.fu;
}

function test() {
  console.log(this);
}

console.log("test");
// test();

let obj = {
  name: "Ivan",
};

let foo = function () {
  Object.prototype.fu = test;
  obj.fu();
  delete Object.prototype.fu;
};

console.log("foo");
foo();
