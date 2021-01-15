function Rabbit(name, cat) {
    this.name = name,
    this.cat= 10;
 }
Rabbit.prototype.test = function() { console.log(this); }
var rabbit = new Rabbit();

rabbit.test();
rabbit.__proto__.test();
Rabbit.prototype.test();
Object.getPrototypeOf(rabbit).test();

function Hamster() { 
    this.food = [];
 }
Hamster.prototype.found = function(something) {
  this.food.push(something);
};
// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();
speedy.found("яблоко");
speedy.found("орех");
lazy.found('cucumber');
console.log(speedy.food); // 2
console.log(lazy.food);   // 2 (!??)
