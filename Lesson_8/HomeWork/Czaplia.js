//1.В примерах ниже производятся различные действия с prototype.

//1.1.  Каковы будут результаты выполнения? Почему?
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};
var rabbit = new Rabbit();
Rabbit.prototype = {};
console.log(rabbit.eats); // выведет true - кролик создан раньше того, как его объект от которого он создан стал пустым, и вроде бы меняли через прототип - непонятно.  

//1.2. А если код будет такой? (заменена одна строка):
function Rabbit(name) {}
Rabbit.prototype = {
    eats: true
};
var rabbit = new Rabbit();
Rabbit.prototype.eats = false; // наверное мы по прототипу меняем то что написали выше, но итог неожиданный
console.log(rabbit.eats);

//1.3. А такой? (заменена одна строка)
function Rabbit(name) {}
Rabbit.prototype = {
    eats: true
};
var rabbit = new Rabbit();
delete Rabbit.prototype.eats; // так же как и в предыдущем, мы по прототипу заменили свойство, хз как это объяснить - так и не понял, по логике с первым ожидаешь, что будет true; 
console.log(rabbit.eats);

//1.4. А если бы в последнем коде вместо строки (*) было delete rabbit.eats? -- получилось true, т.е. насколько понял - если изменяем через прототип - то изменения происходят радикально, если без прототипа по ссылке - изменения учитываются сверху вниз как и читается код

//2.  Есть объекты:

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

Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);
console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);


//Задание состоит из двух частей:

//2.1. Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets > bed > table > head. То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

//2.2.После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать. - быстрее искать head.glasses, т.к. сначала ищет в объекте, потом в прототипе