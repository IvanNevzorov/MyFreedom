/*1. Дан массив. Запишите первый элемент этого массива в переменную elem1, второй - в переменную elem2, третий - в переменную elem3, а все остальные элементы массива - в переменную arr.*/

let array = [1, 5, 8, 3, 2, 8];
let [elem1, elem2, elem3, ...otherElem] = array;

console.log(elem1, elem2, elem3);

/*2. Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}. Запишите соответствующие значения в переменные name, surname и age*/

let man = {
    name: 'Петр',
    surname: 'Петров', 
    age: '20 лет'
}

let {name, surname, age} = man;
console.log(name, surname, age);

/*3. Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }. Запишите соответствующие значения в переменные name, surname и age. Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.*/

let person = {
    surnamePerson: 'Петров', 
    agePerson: '20 лет'
}
let {namePerson = 'Аноном', surnamePerson = 'Анонимович', agePerson = '? лет'} = person;

console.log(namePerson, surnamePerson, agePerson);