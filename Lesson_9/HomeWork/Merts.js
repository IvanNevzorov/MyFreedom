/*1. Создадим новый объект, вот такой:

function Rabbit() { }
Rabbit.prototype.test = function() { alert(this); }
var rabbit = new Rabbit();

Есть ли разница между вызовами:

rabbit.test();
rabbit.__proto__.test();
Rabbit.prototype.test();
Object.getPrototypeOf(rabbit).test();*/

function Rabbit() { } //ф. конструктор
Rabbit.prototype.test = function() { console.log(this); } //прототипу создаем св-во test - функция
var rabbit = new Rabbit(); //создает новый объект Rabbit

rabbit.test(); //this объекта rabbit - Rabbit
rabbit.__proto__.test(); //this ф. test
Rabbit.prototype.test(); //this ф. test
Object.getPrototypeOf(rabbit).test(); //this ф. test 19-21 - идентичны

/*2.Вы — руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил задание создать класс «хомяк» (англ - "Hamster").
Объекты-хомяки должны иметь массив food для хранения еды и метод found, который добавляет к нему.
Ниже — его решение. При создании двух хомяков, если поел один — почему-то сытым становится и второй тоже.
В чём дело? Как поправить?*/

// function Hamster() { }
// Hamster.prototype.food = [ ]; // пустой "живот"
// Hamster.prototype.found = function(something) {
// this.food.push(something);
// };
// // Создаём двух хомяков и кормим первого
// speedy = new Hamster();
// lazy = new Hamster();
// speedy.found("яблоко");
// speedy.found("орех");
// alert(speedy.food.length); // 2
// alert(lazy.food.length); // 2 (!??) -- found в прототипе и 36-37 меняют в нем значения - lazy считывает данные из прототипа

class Hamster{ 
    food = [ ]; // пустой "живот"
    found (something) {
        this.food.push(something);
    };
}

speedy = new Hamster();
lazy = new Hamster();
speedy.found("яблоко");
speedy.found("орех");
alert(speedy.food.length); // 2
alert(lazy.food.length); // 0