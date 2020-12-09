/*1. Что выведет этот код?

<script>
var body = document.body;
body.innerHTML = "<!--" + body.tagName + "-->"; 
alert(body.firstChild.data); // что выведет?
</script>*/

/*
var body = document.body;
console.log(body);
body.innerHTML = "<!--" + body.tagName + "-->"; //заменит body(внутри) на комментарий - <!--BODY-->
//.tagName - возвращает HTML-тег элемента
alert(body.firstChild.data); // BODY
//firstChild - возвращает первый потомок узла в дереве 
//The data property sets or returns the value of the data attribute of an <object> element.
*/
/*2. Напишите функцию, которая удаляет элемент из DOM.
Синтаксис должен быть таким: remove(elem), то есть, в отличие от parentNode.removeChild(elem) — без родительского элемента.

<div>Это</div>
<div>Все</div>
<div>Элементы DOM</div>*/


var elem = document.body.children[0];
function remove(elem) {
  elem.remove();
}
remove(elem);   
