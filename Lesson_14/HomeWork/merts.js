/*1. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.*/

let array1 = ['a', 'b', 'c'];
let array2 = [1, 2, 3];
let array3 = [...array1, ...array2];
console.log(array3);
console.log(array1.concat(array2));

/*2. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.*/

let array = ['a', 'b', 'c'];
array.push(1);
array.push(2);
array.push(3);
//array.push(1, 2, 3);
console.log(array);

/*3. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].*/

let arrayReverse = [1, 2, 3];
console.log(arrayReverse.reverse());

/*4. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.*/

let web = ['js', 'css', 'jq'];
console.log(web[0]);

/*5. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].*/

let array5 = [1, 2, 3, 4, 5];
array5.splice(1, 2);
console.log(array);


/*6. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.*/

let array6 = [3, 4, 1, 2, 7];
array6.sort((a, b) => (a - b));
console.log(array6);

/*7. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.*/

let array7 = [[1, 2, 3], [4, 5], [6]];
let sum = array7.reduce((a, b) => a.concat(b)).reduce((a, b) => a + b);
console.log(sum);