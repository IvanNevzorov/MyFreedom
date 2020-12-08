class Slava {
  height = 180;
  weidth = 60;

  constructor({ name, age }) {
    this.name = name;
    this.age = age;
    Slava.student = true;
  }

  getFunction = function () {
    console.log(this.height);
  };

  static getFullAge(student1, student2) {
    if (typeof student1.age === "number" && typeof student2.age === "number") {
      console.log(student1.age + student2.age);
      return;
    }
    console.log("Не подошло");
  }

  canRun() {
    console.log(true);
  }

  static method() {}

  static primer = 123;
}

// let denis = new Slava();
let slava = new Slava({ name: "Slavik", age: 18 });
let ivan = new Slava({ name: "Ivan", age: 30 });

console.log(slava, ivan);

// Slava.getFullAge(slava, ivan);
// console.log(denis);

class NewSlava extends Slava {
  newParam = 123;
}

class NewNewSlava extends NewSlava {
  newParam = 123;
}

let newSlava = new NewSlava({});
let newIvan = new NewSlava({});

console.log(newSlava);

// function func() {
//   console.log(this);
// }

function func() {
  console.log(this);
}

const tryBind = {
  name: "Bind",
  show: function () {
    console.log("tryBind", this);
  },
};

const tryApply = {
  name: "apply",
  show: tryBind.show.bind(null),
};

tryApply.show();
