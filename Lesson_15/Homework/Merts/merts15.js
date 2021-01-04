/*
Реализовать отображение списка задач. Необходимо выполнить с 3-мя условиями:
- список задач взять на https://jsonplaceholder.typicode.com/
- загрузку задач осуществить при помощи XMLHttpRequest
- для реализации цикла использовать методы массива
*/
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
xhr.send();
xhr.onload = function() {
    if(xhr.status === 200) {
        let todos = JSON.parse(xhr.response);
        let body =  document.body;
        let ul = document.createElement('ul');
        body.appendChild(ul);
        if(Array.isArray(todos)) {
            todos.forEach(element => {
                let data = JSON.stringify(element);
                let li = document.createElement('li');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                h2.innerHTML = "ID: " + element.id;
                p.innerHTML = "Title: " + element.title;
                ul.appendChild(li);
                li.appendChild(h2);
                li.appendChild(p);
                p = document.createElement('p');
                p.innerHTML = `Completed: ${element.completed}`;
                li.appendChild(p);
            });
        } else {
            let li = document.createElement('li');
            li.innerHTML = JSON.stringify(element);
            ul.appendChild(li);
        }
    }
}

xhr.onerror = function(error) {
    alert(error);
}
