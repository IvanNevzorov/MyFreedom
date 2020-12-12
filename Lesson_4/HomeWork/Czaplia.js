/*

15. Напишите функцию flatten(array), которая принимает на вход массив из массивом и возвращает массив, в котором сначала идут все элементы первого массива, затем второго, затем третьего и т.д.
Примеры:
flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]) // возвращает [1, 2, 3, 4, 5, 6, 7, 8, 9]
flatten([['a'], [], ['b', 'c']]) // возвращает ['a', 'b', 'c']
*/

//1 Написать функцию isEven(number), котора возвращает true, если число number - четное, false - если нечетное. 

function isEven(number) {
    return number % 2 === 0 ? true : false;
}

console.log(isEven(5));

//2 Написать функцию fizzBuzz(number), которая выводит в консоль строку "Fizz", если число number делится на 3, строку "Buzz" - если число number делится на 5, строку "FizzBuzz" - если делится на 15.

function fizzBuzz(number) {
    if (number % 15 === 0) {
        console.log('FizzBuzz');
    } else if (number % 5 === 0) {
        console.log('Buzz');
    } else if (number % 3 === 0) {
        console.log('Fizz');
    }
}
fizzBuzz(45);

// 3. Написать функцию loop(start, end, step), которая выводит на консоль все числа, начиная со start, до end включительно, с шагом равным step. Например, loop(1, 10, 3) должно вывести 1 4 7 10, а loop (-10, 3, 4) должно вывести -10 -6 -2 2

function loop(start, end, step) {
    for (i = start; i <= end; i += step) {
        console.log(i);
    }
}

loop(-10, 3, 4);

// 4. Написать функцию factorial(number), которая считает факториал числа number (т.е. произведение всех чисел от 1 до number включительно с шагом 1).

function factorial(number) {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(fact);
}

factorial(7);

//5 Напишите функцию clone(array), которая возвращает копию массива array.
/* Пример:
var a = [1, 2, 3];
var b = clone(a);
b[0]++;
console.log(a) // [1, 2, 3]
console.log(b) // [2, 2, 3]
Никаких встроенных приемов, только то, что мы изучали 
*/

function clone(array) {
    newArray = array.concat();
    return newArray;
}

let a = [1, 2, 3]
let b = clone(a);
b[0]++;
console.log(a);
console.log(b);


//6 Напишите функцию first(array), которая возвращает первый элемент массива. Если массив пустой, функция возвращает undefined. 

function first(array) {
    return !array.length === false ? array[0] : undefined;
}

console.log(first([1, 2, 3]));

//7 Напишите функцию last(array), которая возвращает последний элемент массива. Если массив пустой, функция возвращает undefined.

function last(array) {
    return !array.length === false ? array[array.length - 1] : undefined;
}

console.log(last([]));

/*8 Напишите функцию range(start, end, step), которая возвращает массив всех чисел от start до end включительно с шагом step.
Пример:
range(0, 3, 1) // возвращает [0, 1, 2, 3]
range(2, 10, 3) // возвращает [2, 5, 8]
*/

function range(start, end, step) {
    let result = [];
    for (i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}

console.log(range(2, 10, 3));

/* 9. Напишите функцию, max(array) которая возвращает максимальный элемент из массива чисел array. Если массив пустой - возвращает undefined.
Примеры:
max([1, 3, 2]) // возвращает 3
max([]) // возвращает undefined
*/

function max(array) {
    return Math.max(...array);
}

console.log(max([1, 2, 5, 4, 0]));


/* 10. Напишите функции firstN(array, count), которая возвращает count первых элементов массива.
Если count больше длины массива, возвращается копия всего массива.
Если array - пустой массив или count равен 0, функция возвращает пустой массив.
Примеры:
firstN([1, 2, 3], 2) // возвращает [1, 2]
firstN([1, 2, 3], 10) // возвращает [1, 2, 3]
firstN([], 3) // возвращает []
firstN([1, 2, 3], 0) // возвращает []
*/


function firstN(array, count) {
    let result = [];
    if (array.length < count) {
        return array.concat();
    } else if (!array.length === true || count === 0) {
        return [];
    } else {
        for (i = 0; i < count; i++) {
            result.push(array[i]);
        }
        return result;
    }
}

console.log(firstN([1], 0));

/*
11. Напишите функции lastN(array, count), которая возвращает count последних элементов массива.
Если count больше длины массива, возвращается копия всего массива.
Если array - пустой массив или count равен 0, функция возвращает пустой массив.
Примеры:
lastN([1, 2, 3], 2) // возвращает [2, 3]
lastN([1, 2, 3], 10) // возвращает [1, 2, 3]
lastN([], 3) // возвращает []
lastN([1, 2, 3], 0) // возвращает []
*/

function lastN(array, count) {
    let result = [];
    if (array.length < count) {
        return array.concat();
    } else if (!array.length === true || count === 0) {
        return [];
    } else {
        let counter = 1;
        for (i = 0; i < count; i++) {
            result.push(array[array.length - counter])
            counter++;
        }
        return result.reverse();
    }
}

console.log(lastN([1, 2, 3, 3, 3, 3, 4, 5], 3));


/* 
12. Напишите функцию join(array, space), которая возвращает строку, в которой все элементы массива отделены друг от друга строкой, задана аргументом space.
Примеры:
join([1, 2, 3], ',') // возвращает "1,2,3"
join([1, 2, 3], '') // возвращает "123"
join([1, 2, 3], 'baz') // возвращает "1baz2baz3"
*/

function join(array, space) {
    return array.join(space);
}

console.log(join([1, 2, 3], ' space '));

/* 
Напишите функцию contains(array, element), которая возвращает true только в том случае, если массив содержит элемент element.
Примеры:
contains([1, 2, 3], 3) // возвращает true
contains(['a', 'b', 'c'], 'd') // возвращает false
*/

function contains(array, element) {

    return array.includes(element) === true ? true : false;
}

console.log(contains([1, 2, 3], 3));
console.log(contains([1, 2, 3], 'd'));

/* 14. Напишите функцию pluck(array, propertyName), которая принимает на вход массив объектов array и возвращает массив из свойств с именем, заданным переменной propertyName в каждом объекте.
Пример:
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}, {name: 'bill'}];
pluck(stooges, 'age')// возвращает [40, 50, 60, undefined]
*/

function pluck(array, propertyName) {
    let result = [];
    array.forEach(element => result.push(element[propertyName]));
    return result;
}

let stooges = [{
    name: 'moe',
    age: 40
}, {
    name: 'larry',
    age: 50
}, {
    name: 'curly',
    age: 60
}, {
    name: 'bill'
}];
console.log(pluck(stooges, 'age'));

/* 15. Напишите функцию flatten(array), которая принимает на вход массив из массивом и возвращает массив, в котором сначала идут все элементы первого массива, затем второго, затем третьего и т.д.
Примеры:
flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]) // возвращает [1, 2, 3, 4, 5, 6, 7, 8, 9]
flatten([['a'], [], ['b', 'c']]) // возвращает ['a', 'b', 'c']
*/

function flutten(array) {
    let a = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            a.push(array[i][j]);
        }
    }
    return a;
}
console.log(flutten([
    ['a'],
    [],
    ['b', 'c']
]));