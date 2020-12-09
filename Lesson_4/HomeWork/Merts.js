/*1. Написать функцию isEven(number), котора возвращает true, если число number - четное, false - если нечетное.*/

function isEven(number) {
    let result;
    result = (number % 2 === 0) ? true : false;
    return result;
}
console.log(isEven(5));

/*2. Написать функцию fizzBuzz(number), которая выводит в консоль строку "Fizz", если число number делится на 3, строку "Buzz" - если число number делится на 5, строку "FizzBuzz" - если делится на 15.*/

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 !== 0) {
        console.log('Fizz');
    } 
    if (number % 5 === 0 && number % 3 !== 0) {
        console.log('Buzz');
    } 
    if ((number % 3 === 0) && (number % 5 === 0)) {
        console.log('FizzBuzz');
    }
 }

 function fizzBuzz(number) {
    number % 3 === 0 && console.log("Fizz");
    number % 5 === 0 && console.log("Buzz");
    number % 15 === 0 && console.log("FizzBuzz");
  }

fizzBuzz(15);

/*3. Написать функцию loop(start, end, step), которая выводит на консоль все числа, начиная со start, до end включительно, с шагом равным step.
Например, loop(1, 10, 3) должно вывести 1 4 7 10, а loop (-10, 3, 4) должно вывести -10 -6 -2 2 */

function loop(start, end, step) {
    for(let i = start; i <= end; i = i + step) {
        console.log(i);
    }
}

loop(-10, 3, 4);

/*4. Написать функцию factorial(number), которая считает факториал числа number (т.е. произведение всех чисел от 1 до number включительно с шагом 1).*/

function factorial(number) {
    return number > 1 ? (number * factorial(number - 1)) : 1;
}

console.log(factorial(3));

/*5. Напишите функцию clone(array), которая возвращает копию массива array.
// Пример:
// var a = [1, 2, 3];
// var b = clone(a);
// b[0]++;
// console.log(a) // [1, 2, 3]
// console.log(b) // [2, 2, 3]
// Никаких встроенных приемов, только то, что мы изучали*/

function clone(array) {
    let cloneArray = [...array];
    return cloneArray;

    /*let cloneArray = [];
    for (let i = 0; i < array.length; i++) {
        cloneArray[i] = array[i];
    } 
    return cloneArray;*/ //может по заданию нужно копирование через цикл
}

let startArray = [1, 2, 3];
let newArray = clone(startArray);
newArray[0]++;
console.log(startArray);
console.log(newArray);

/*6. Напишите функцию first(array), которая возвращает первый элемент массива. Если массив пустой, функция возвращает undefined.*/

function first(array) {
    //return (array.length != 0) ? array[0] : undefined;
    return Array.isArray(array) && array.length !== 0 ? array[0] : undefined;
    //Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.
}

console.log(first([6, 3, 0]));

/*7. Напишите функцию last(array), которая возвращает последний элемент массива. Если массив пустой, функция возвращает undefined.*/

function last(array) {
    // let n = array.length;
    // return (n != 0) ? array[n - 1] : undefined;

    let n = Array.isArray(array) && array.length != 0 ? array.length : null;
    return n > 0 ? array[n - 1] : undefined;
}
console.log(last([5, 2, 9]));

/*8. Напишите функцию range(start, end, step), которая возвращает массив всех чисел от start до end включительно с шагом step.
Пример:
range(0, 3, 1) // возвращает [0, 1, 2, 3]
range(2, 10, 3) // возвращает [2, 5, 8]*/

function range(start, end, step) {
    let array = [];
    for(let i = start; i <= end; i+= step) {
        array.push(i);
    }
    return array;
}

console.log(range(2, 10, 3));

/*9. Напишите функцию, max(array) которая возвращает максимальный элемент из массива чисел array. Если массив пустой - возвращает undefined.
Примеры:
max([1, 3, 2]) // возвращает 3
max([]) // возвращает undefined*/

function max(array) {
    if(array.length != 0) {
        let max = array[0];
        for(let i = 1; i < array.length; i++) {
            if(max < array[i]) {
                max = array[i];
            }
        }
        return max;
    } else {
        return undefined;
    }
}

/*function max(array) {
    if (!Array.isArray(array) || array.length === 0) return undefined;
    return Math.max(...array);//Spread
  }*/
console.log(max([2, 6, 10, 4, 0, 3]));

/*10. Напишите функции firstN(array, count), которая возвращает count первых элементов массива.
Если count больше длины массива, возвращается копия всего массива.
Если array - пустой массив или count равен 0, функция возвращает пустой массив.
Примеры:
firstN([1, 2, 3], 2) // возвращает [1, 2]
firstN([1, 2, 3], 10) // возвращает [1, 2, 3]
firstN([], 3) // возвращает []
firstN([1, 2, 3], 0) // возвращает []*/

function firstN(array, count) {
    const n = array.length;
    let newArray = [];
    if (count < n && count != 0) {
        for(let i = 0; i < count; i++) {
            newArray.push(array[i]);
        }
    } else if (count != 0) {
        newArray = [...array];
    } 
    return newArray;
}

/*function firstN(array, count) {
    if (!Array.isArray(array) || array.length === 0) return [];
    if (array.length > count) return array.slice(0, count);
    return [...array];//return array's copy
  }*/

console.log(firstN([1, 2, 3], 3));

/*11. Напишите функции lastN(array, count), которая возвращает count последних элементов массива.
Если count больше длины массива, возвращается копия всего массива.
Если array - пустой массив или count равен 0, функция возвращает пустой массив.
Примеры:
lastN([1, 2, 3], 2) // возвращает [2, 3]
lastN([1, 2, 3], 10) // возвращает [1, 2, 3]
lastN([], 3) // возвращает []
lastN([1, 2, 3], 0) // возвращает []*/

function lastN(array, count) {
    const n = array.length;
    let newArray = [];
    if(n <= count && count != 0) {
        newArray = [...array];
    } else if (n > count) {
        for (let i = n - count; i < n; i++) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

/*function lastN(array, count) {
    if (!Array.isArray(array) || array.length === 0 || count === 0) return [];
    if (array.length > count) return array.slice(array.length - count);
    return [...array];
  }*/

console.log(lastN([2, 2, 3, 6, 8, 9, 3, 10], 8));

/*12. Напишите функцию join(array, space), которая возвращает строку, в которой все элементы массива отделены друг от друга строкой, задана аргументом space.
Примеры:
join([1, 2, 3], ',') // возвращает "1,2,3"
join([1, 2, 3], '') // возвращает "123"
join([1, 2, 3], 'baz') // возвращает "1baz2baz3"*/

function join(array, space) {
    let newString = '';
    for(let i = 0; i < array.length; i++) {
        if (i != array.length - 1) {
            newString += (array[i] + space);
        } else {
            newString += array[i];
        }
        
    }
    return array.join(space);
    //return newString;
}

console.log(join([1, 2, 3], 'baz'));

/*13. Напишите функцию contains(array, element), которая возвращает true только в том случае, если массив содержит элемент element.
Примеры:
contains([1, 2, 3], 3) // возвращает true
contains(['a', 'b', 'c'], 'd') // возвращает false*/

function contains(array, element) {
    //return (array.includes(element));
    for(let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            return true;
        }
    }
    return false;
}

console.log(contains([1, 2, 3], 3));

/*14. Напишите функцию pluck(array, propertyName), которая принимает на вход массив объектов array и возвращает массив из свойств с именем, заданным переменной propertyName в каждом объекте.
Пример:
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}, {name: 'bill'}];
pluck(stooges, 'age')// возвращает [40, 50, 60, undefined]*/

function pluck(array, propertyName) {
    let propertiesArray = [];
    for(let i = 0; i < array.length; i++) {
        propertiesArray.push(array[i][propertyName]);
    }
    return propertiesArray;
}

// function pluck(array, propertyName) {
//     return array.map((item) => item[propertyName]);
//   }

var stooges = [
    {name: 'moe', age: 40}, 
    {name: 'larry', age: 50}, 
    {name: 'curly', age: 60}, 
    {name: 'bill'}
];
console.log(pluck(stooges, 'name'));

/*15. Напишите функцию flatten(array), которая принимает на вход массив из массивом и возвращает массив, в котором сначала идут все элементы первого массива, затем второго, затем третьего и т.д.
Примеры:
flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]) // возвращает [1, 2, 3, 4, 5, 6, 7, 8, 9]
flatten([['a'], [], ['b', 'c']]) // возвращает ['a', 'b', 'c']*/

function flatten(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            newArray.push(array[i][j]);
        }
        
    }
    return newArray;
    //return array.reduce((acc, item) => {(acc = acc.push(item))}, []);
}

console.log(flatten([['a'], [], ['b', 'c']]));
