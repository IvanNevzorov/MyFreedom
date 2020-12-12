//1 Дан массив. Запишите первый элемент этого массива в переменную elem1, второй - в переменную elem2, третий - в переменную elem3, а все остальные элементы массива - в переменную arr.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [elem1, elem2, elem3, ...arr] = array;
console.log(elem1);

//2 Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}. Запишите соответствующие значения в переменные name, surname и age

// let obj = {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}; 
// let {name, surname, age} = obj; 
// console.log(surname);
// console.log(age);
// console.log(name);

//3 Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }. Запишите соответствующие значения в переменные name, surname и age. Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.

let obj2 = {
    obj2Name: 'Петр',
    'obj2Surname': 'Петров',
    'objAge': '20 лет',
};
let {
    obj2Name,
    obj2Surname,
    objAge,
    name = 'Петр',
    surname = 'Петров',
    age = '20 лет'
} = obj2;
console.log(obj2Name);


console.log(name);