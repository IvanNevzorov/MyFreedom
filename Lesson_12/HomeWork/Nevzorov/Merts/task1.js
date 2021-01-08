/*1. Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.*/

function insertAfter(elem, refElem) { 
    refElem.after(elem);

    //let parentElem = refElem.parentNode;
    // if(parentElem.lastElementChild === refElem) {
    //     parentElem.appendChild(elem);
    // } else {
    //     let nextElement = refElem.nextElementSibling;
    //     parentElem.insertBefore(elem, nextElement);
    // }
}
var elem = document.createElement('div');
elem.innerHTML = '<b>Новый DIV 1</b>';
var body = document.body;

insertAfter(elem, body.firstElementChild);// <--- должно работать

var elem = document.createElement('div');
elem.innerHTML = '<b>Новый DIV 2</b>';

insertAfter(elem, body.lastElementChild); // <--- должно работать
