class Parent {
  constructor() {
    this.age = 18;
  }
  parent() {
    console.log("parent");
  }
}

class Child extends Parent {
  constructor() {
    super();

    this.name = "child";
  }
  child() {
    console.log("child");
  }
}

class ChildChild extends Child {
//   constructor() {
//     super();

//     this.fill = "none";
//   }
  childchild() {
    console.log("childchild");
  }
}

let parent = new Parent();
let child = new Child();
let childchild = new ChildChild();
childchild.childchild();
childchild.child();
childchild.parent();

// console.log("parent", parent);
// console.log("child", child);

// console.log(child.__proto__ === Child.prototype);
// console.log(Child.prototype.__proto__ === Object.prototype);
// console.log(Child.prototype.__proto__ === Parent.prototype);

// function Parent()  {
//     this = {}
//     this.age = 18;
//     return this;
// }

// function Child extends Parent() {
//     this
//     super() {
//         this = new Parent()
//     }

//     this.name = "child";

//     return this;
// }
