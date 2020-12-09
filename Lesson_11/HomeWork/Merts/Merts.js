// var body = document.body;
// console.log(body);
// body.innerHTML = "<!--" + body.tagName + "-->"; //вставит комментарий в body - <!--BODY-->
// //.tagName - возвращает HTML-тег элемента
// alert(body.firstChild.data); // BODY
//firstChild - возвращает первый потомок узла в дереве 
//The data property sets or returns the value of the data attribute of an <object> element.

var elem = document.body.children[0];
function remove(elem) {
  elem.remove();
}
remove(elem);  