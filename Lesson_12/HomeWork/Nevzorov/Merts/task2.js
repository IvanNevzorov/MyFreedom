/*2. Напишите функцию removeChildren, которая удаляет всех потомков элемента.*/

function removeChildren(elem) {
    while(elem.firstChild){
       elem.firstChild.remove();
    }
}
removeChildren(document.body.children[0]); // очищает таблицу
removeChildren(document.body.children[1]); // очищает список
