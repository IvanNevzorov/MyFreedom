let max = document.querySelector(".max");
let button = document.querySelector(".button");
let buttonBack = document.querySelector(".button_back");

button.addEventListener("click", () => {
  console.dir(max);
  max.attributes.style.value = "width: 100px; height: 100px; background: green";
});

buttonBack.addEventListener("click", () => {
  console.dir(max);
  max.attributes.style.value = "width: 50px; height: 50px; background: red";
});

let obj = {
  name: "Ivan",
  getName: function () {
    return `${this.name}`;
  },
};

console.log(obj.getName());

let key = "name";

let objIvan = {
  variableName: "name",
  variableAge: "age",
  variableDoor: "door",
  variableWhat: "what",
  name: "IvanHey",
  getName: function () {
    return (
      this.name +
      " это лишь пример нашего " +
      this.variable +
      " все что вашей душе угодно " +
      this.variable
    );
  },
};

let { name, getName, ...otherKeys } = objIvan;

console.log(objIvan.name);

console.log(name, getName(), otherKeys);

let newObj = { ...objIvan };
