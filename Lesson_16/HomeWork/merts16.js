/*
Реализовать домашнее задание 15 урока используя метод fetch для запросов.
Дополнительно:
реализовать кнопку и добавлять по одной записи в список
*/
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(result => {
    let ul = document.querySelector(".usersList");
    if(Array.isArray(result)) {
        result.forEach(element => {
            let li = document.createElement('li');
            ul.appendChild(li);

            let h2 = document.createElement('h2');
            h2.innerHTML = "ID: " + element.id;
            li.appendChild(h2);

            let p = document.createElement('p');
            p.innerHTML = "Name: " + element.name;
            li.appendChild(p);

            p = document.createElement('p');
            p.innerHTML = `User name: ${element.username}`;
            li.appendChild(p);
        });
    } else {
        let li = document.createElement('li');
        li.innerHTML = JSON.stringify(element);
        ul.appendChild(li);
    }
});


const btnAddUser = document.querySelector(".addUser");
const ul = document.querySelector(".postsList");
let id = 1;

btnAddUser.addEventListener("click", addLiUser);

function addLiUser() {
    btnAddUser.style.backgroundColor = 'yellow';
    let li = document.createElement('li');
    ul.append(li);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(result => {
        let p = document.createElement('p');
        p.innerHTML = `User ID: ${result.userId}`;
        li.append(p);
        p = document.createElement('p');
        p.innerHTML = `ID: ${result.id}`;
        li.append(p);
        p = document.createElement('p');
        p.innerHTML = `Title: ${result.title}`;
        li.append(p);
        if(id <= 100){
            id++;
        }
    });
    
}