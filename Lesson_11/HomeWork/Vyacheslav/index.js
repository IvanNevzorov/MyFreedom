// Задание №1
// Что выведет этот код?

// Заметка для учителя: там, где стоит знак "...", это значит, что я не понял/не знаю, что писать дальше

/* var body = document.body; // Создание переменной body и присвоение ей значения тега body документа html
body.innerHTML = "<!--" + body.tagName + "-->"; // Установка содержимого для переменной body с помощью свойства innerHTML; содержимое - имя тега, к которому привязана переменная body
alert(body.firstChild.data);  // Вывод первого элемента...
// alert(body.innerHTML) */ // Вывод названия тега, к которому обращается innerHTML

// Задание №2
// Напишите функцию, которая удаляет элемент из DOM
// Синтаксис должен быть таким: remove(elem)
// То есть, в отличие от parentNode.removeChild(elem) — без родительского элемента.

/* var elem = document.body.children[0];
function remove(elem) {
    return elem.parentNode.removeChild(elem);

}
remove(elem); */