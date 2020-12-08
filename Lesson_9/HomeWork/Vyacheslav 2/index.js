// Задание №1

/* function Rabbit() { }
Rabbit.prototype.test = function() { console.log(this); }
var rabbit = new Rabbit();

// Есть ли разница между вызовами:

rabbit.test(); // Простой вывод в консоль переменной rabbit с помощью метода test
rabbit.__proto__.test(); // Вывод в консоль переменной rabbit и её свойств с помощью __proto__ и метода test
Rabbit.prototype.test(); // Вывод в консоль прототипа функции конструктора Rabbit с помощью метода test
Object.getPrototypeOf(rabbit).test(); */ // Вывод в консоль прототипа переменной rabbit через функцию конструктор object с помощью метода test

// Вы — руководитель команды, которая разрабатывает игру, хомяковую ферму.
// Один из программистов получил задание создать класс «хомяк» (англ - "Hamster").
// Объекты-хомяки должны иметь массив food для хранения еды и метод found, который увеличивает его.
// При создании двух хомяков, если поел один — почему-то сытым становится и второй тоже.
// В чём дело? Как поправить? Ниже — его решение.

 function Hamster() {  }
Hamster.prototype.food = [  ];
// Hamster.prototype.food2 = [  ]; // Как вариант, можно создать "живот" в виде массива для каждого хомяка отдельно
Hamster.prototype.found = function(something) {
  this.food.push(something);
};

speedy = new Hamster();
lazy = new Hamster();
speedy.found("яблоко");
speedy.found("орех");
console.log(speedy.food.length);
console.log(lazy.food.length); 