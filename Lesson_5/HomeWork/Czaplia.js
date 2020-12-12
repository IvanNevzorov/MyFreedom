//1. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.

let arr = [5, 2, 2, 3,]; 
function doubleArray(arr) {
    return arr.concat(arr); 
} 
console.log(doubleArray(arr));

//2 Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами.


function firstMethod(arr) {
    return arr.toString(); 
}

console.log(firstMethod(arr));

function secondMethod(arr) {
    return arr.join(); 
}

console.log(secondMethod(arr));

//3 Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру). 

function removeDuplicates(arr) {
   return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr)); 


//4 Напишите функцию, которая возвращает массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
// arrInsArr([[1,3], [1,2] , [2,3], [3]]) // [4,3,5,3]
function arrInsArr(arr) {
    let value = [];
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            value.push(arr[j].reduce((acc, item) => acc + item)); 
        }
    }
    return value;
}

console.log(arrInsArr([[1,3], [1,2] , [2,3], [3]]));  // я не совсем понял как мне сделать reduce для двухмерного массива в одну строку, тут чтобы у меня был только один проход я добавил i < 1 в первом for



//5  Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.

function compareNumbers(arr) {
    let b = arr.sort((a, b) => a - b); 
    return b.reverse(); 
}

console.log(compareNumbers(arr));




// 6 Напишите функцию, которая возвращает  сумму и произведение значений массива.
function sumArrays(arr) {
    let sum = arr.reduce((acc, item) => acc + item); 
    let multiplication = arr.reduce((acc, item) => acc*item)
    return (sum + ' & ' + multiplication); 
} 

console.log(sumArrays(arr));