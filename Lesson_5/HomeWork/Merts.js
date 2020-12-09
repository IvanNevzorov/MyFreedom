/*1. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
doubleArray([1,2,3]) // [1,2,3,1,2,3]*/

function doubleArray(array) {
    let newArray;
    newArray = array.concat(array);
    return newArray;
}

let doubleArray = (array) => array.concat(array);

console.log(doubleArray([1, 2, 3]));

/*2. Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами.
stringArray([1,2,3]) // "1,2,3"*/

let stringArray = array => array.join();
console.log(stringArray([1, 2, 3]));

stringArray = array => array.toString();
console.log(stringArray([1, 2, 3]));

/*3. Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
removeDuplicates([1,2,2,3]) // [1,2,3]*/

function removeDuplicates(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(!(newArray.includes(array[i]))) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeDuplicates([1, 'a', 2, 2, 3, 'A', 'b']));

function removeDuplicates(array) {
    let newArray = [];
    array.sort();
    let currentCompare = array[0];
    newArray.push(array[0]);
    for(let i = 0; i < array.length; i++) {
        if(currentCompare != array[i]) {
            currentCompare = array[i];
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeDuplicates([1, 'a', 2, 2, 3, 'A', 'b', 'b']));

/*4. Напишите функцию, которая возвращает массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
sumArrays([[1,3], [1,2] , [2,3], [3]]) // [4,3,5,3]*/

function sumArrays(array) {
    let newArray;
    newArray = array.map(item => item.reduce((sum, itemValue) => (sum + itemValue)));
    // for(let i = 0; i < array.length; i++) {
    //    let sumItem = array[i].reduce((sum, item) => (sum + item));
    //    newArray.push(sumItem)
    // }
    return newArray;
}

console.log(sumArrays([[1, 3, 7, 8], [1, 2, 7, 10] , [2, 3, 6], [3]]));

/*5. Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.
compareNumbers([[1,2,2,3]]) // [3,2,2,1]*/

function compareNumbers(array) {
   array.sort((a, b) => (b - a)); 
   return array;
}

console.log(compareNumbers([4, 8, 1, 2, 2, 3, 4, 7]));


/*6. Напишите функцию, которая возвращает  сумму и произведение значений массива.
sumArrays([1,2,2,3]) //"8 и 12"*/

function sumArrays(array) {
    let sum,
    product;
    sum = array.reduce((sum, item) => (sum + item));
    product = array.reduce((product, item) => (product * item))
    return `Сумма = ${sum}, произведение = ${product}`;
}

console.log(sumArrays([1, 2, 2, 3, 5]));
