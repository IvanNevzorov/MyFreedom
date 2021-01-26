function simple(user, data, massage) {
  return `${user}: ${data} - ${massage}`;
}

function curry(foo) {
  return function (a) {
    return function (b) {
      return function (c) {
        return foo(a, b, c);
      };
    };
  };
}

let curriedSimple = curry(simple);
let userBob = curriedSimple("Bob");
let todayBobMessage = userBob("10.01");

let firstMessage = todayBobMessage("I am fine");
let secondMessage = todayBobMessage("or not");

console.log(firstMessage);
console.log(secondMessage);
