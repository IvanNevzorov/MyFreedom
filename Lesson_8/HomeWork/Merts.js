/*1.В примерах ниже производятся различные действия с prototype.;

1.1. Каковы будут результаты выполнения? Почему?*/
function Rabbit() { } //  по умолчанию Rabbit.prototype = {constructor: Rabbit}
Rabbit.prototype = { eats: true }; //заменяем св-во Rabbit.prototype по умолчанию на другой объект
var rabbit = new Rabbit(); //создаем новый объект с помощью конструктора
Rabbit.prototype = {}; //заменяем св-во Rabbit.prototype из 5 строки на пустой объект 
alert(rabbit.eats);//выведет true т.к. был создан до 5 строки



/*1.2. А если код будет такой? (заменена одна строка):*/
function Rabbit(name) { }
Rabbit.prototype = { eats: true };
var rabbit = new Rabbit();
Rabbit.prototype.eats = false; // изменяем св-во Rabbit.prototype
alert(rabbit.eats);//???? false

/*1.3. А такой? (заменена одна строка)*/
function Rabbit(name) { }
Rabbit.prototype = { eats: true };
var rabbit = new Rabbit();
delete Rabbit.prototype.eats; //удаляем св-во из прототипа
alert(rabbit.eats);//undefined, т.к. удалили св-во из прототипа - его не существует

/*1.4. А если бы в последнем коде вместо строки (*) было delete rabbit.eats?*/
function Rabbit(name) { }
Rabbit.prototype = { eats: true };
var rabbit = new Rabbit();
delete rabbit.eats; //удаляем св-во объекта, но его там нет
alert(rabbit.eats);//true -  

/*2. Задание состоит из двух частей:

2.1. Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -&gt; bed -&gt; table -&gt; head. То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.*/
let head = {
    glasses: 1
};
  
  let table = {
    pen: 3,
    __proto__: head
};
  
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
  
let pockets = {
    money: 2000,
    __proto__: bed
}

/*2.2.После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать.*/
/*С точки зрения производительности, для современных движков неважно, откуда берётся свойство – из объекта или из прототипа. Они запоминают, где было найдено свойство, и повторно используют его в следующем запросе */