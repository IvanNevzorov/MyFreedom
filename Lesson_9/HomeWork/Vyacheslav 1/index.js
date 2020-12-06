// Задание №1.1
// Каковы будут результаты выполнения? Почему?

/* function Rabbit() { }
Rabbit.prototype = { eats: true };
var rabbit = new Rabbit();
Rabbit.prototype = {};
console.log(rabbit.eats); */

// Задание №1.2
// Каковы будут результаты выполнения? (заменена одна строка)

/* function Rabbit(name) { }
Rabbit.prototype = { eats: true };
var rabbit = new Rabbit();
Rabbit.prototype.eats = false; // (*)
alert(rabbit.eats); */

// Задание №1.3
// Каковы будут результаты выполнения? (заменена одна строка)

/* function Rabbit(name) { }
Rabbit.prototype = { eats: true };
var rabbit = new Rabbit();
delete Rabbit.prototype.eats; // (*)
alert(rabbit.eats); */

// Задание №1.4
// Каковы будут результаты выполнения, если бы в последнем коде вместо строки (*) было delete rabbit.eats?

// Задание №2
// Задание состоит из двух частей:
// Задание №2.1 Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму
// pockets > bed > table > head. То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined
// Задание №2.2 После этого ответьте на вопрос, как быстрее искать glasses:
// обращением к pockets.glasses или head.glasses? Попробуйте протестировать

 var head = {
    glasses: 1
};

  var table = {
    pen: 3
};

  var bed = {
    sheet: 1,
    pillow: 2
};

  var pockets = {
    money: 2000
}; 

var proto = new Proto();

proto.