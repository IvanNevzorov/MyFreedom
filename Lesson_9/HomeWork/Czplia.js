//1. Создадим новый объект, вот такой:

function Rabbit() {}
Rabbit.prototype.test = function () {
    console.log(this);
}
var rabbit = new Rabbit();

//Есть ли разница между вызовами: - первый вызов - this объекта, все остальные - this функции

rabbit.test();
rabbit.__proto__.test();
Rabbit.prototype.test();
Object.getPrototypeOf(rabbit).test();

//2.Вы — руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил задание создать класс «хомяк» (англ - "Hamster").
//Объекты-хомяки должны иметь массив food для хранения еды и метод found, который добавляет к нему.
//Ниже — его решение. При создании двух хомяков, если поел один — почему-то сытым становится и второй тоже.
//В чём дело? Как поправить?

function Hamster() {
    this.food = []; // пустой "живот"
    this.found = function (something) {
        this.food.push(something);
    }
};
// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();
speedy.found("яблоко");
speedy.found("орех");
console.log(speedy.food.length); // 2
console.log(lazy.food.length); // 2 (!??)