// Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem

/* var elemFirst = document.createElement('div');
elemFirst.innerHTML = '<b>Новый 1 элемент</b>';
var elemLast = document.createElement('div');
elemLast.innerHTML = '<b>Новый 2 элемент</b>';
function insertAfter(elem, refElem) {
    console.log("refElem", refElem);
    console.log("elem", elem);
    refElem.after(elem)
}
var body = document.body;
// вставить elem после первого элемента
insertAfter(elemFirst, body.firstElementChild); // <--- должно работать
// вставить elem за последним элементом
insertAfter(elemLast, body.lastElementChild); // <--- должно работать */

// Напишите функцию removeChildren, которая удаляет всех потомков элемента

/* function removeChildren(elem) {
    return document.body.removeChild(elem)
}
removeChildren(document.body.children[3]); // Должно очищать таблицу
removeChildren(document.body.children[4]); // Должно очищать список */