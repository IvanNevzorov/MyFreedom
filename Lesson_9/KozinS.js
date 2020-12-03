// 1. Создадим новый объект, вот такой:

function Rabbit() { }
Rabbit.prototype.test = function() { alert(this); }
var rabbit = new Rabbit();

//Есть ли разница между вызовами:

rabbit.test(); // выводится пустой объект, поскольку в конкретно в него мы не добавляли никаких свойств.
rabbit.__proto__.test(); // выводится свойство 'test' прототипа объекта.
Rabbit.prototype.test(); // выводится то же самое: свойство 'test' прототипа объекта.
Object.getPrototypeOf(rabbit).test(); // выводится то же самое: свойство 'test' прототипа объекта.

// 2.Вы — руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил задание создать класс «хомяк» (англ - "Hamster").
// Объекты-хомяки должны иметь массив food для хранения еды и метод found, который добавляет к нему.
// Ниже — его решение. При создании двух хомяков, если поел один — почему-то сытым становится и второй тоже.
// В чём дело? Как поправить?

function Hamster() {  }
Hamster.prototype.food = [ ]; // пустой "живот"
Hamster.prototype.found = function(something) {
  this.food.push(something);
};
// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();
speedy.found("яблоко");
speedy.found("орех");
alert(speedy.food.length); // 2
alert(lazy.food.length);   // 2 (!??)

// Всё дето в том ,что мы в прототипе создали один общий "живот" для двоих хомяков.
// Нам нужно сделать два разных "живота", тогда при кормлении первого хомяка, второй будет оставаться голодным.
// Реализовать это можно двумя способами:
// Способ 1. Добавлением в прототип второго "живота":

function Hamster() {  }
Hamster.prototype.food1 = [ ]; // пустой "живот"
Hamster.prototype.found1 = function(something) {
  this.food1.push(something);
};
Hamster.prototype.food2 = [ ]; // пустой "живот"
Hamster.prototype.found2 = function(something) {
  this.food2.push(something);
};
// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();
speedy.found1("яблоко");
speedy.found1("орех");
alert(speedy.food1.length); // 2
alert(lazy.food2.length);   // 0


// Способ 2. Созданием класса Hamster. При использовании его каждым хомяком, их "животы" будет независимы друг от друга.

class Hamster {
    food = [ ]; // пустой "живот"
    found = function(something) {
        this.food.push(something);
    };
};

speedy = new Hamster();
lazy = new Hamster();
speedy.found1("яблоко");
speedy.found1("орех");
alert(speedy.food1.length); // 2
alert(lazy.food2.length);   // 0