let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
xhr.send();
xhr.onload = (event)=>{
    console.log(event);
    console.log(xhr.status);
    let btn = document.querySelector("button")
    btn.onclick = function(){
    let todos = JSON.parse(xhr.response);
        todos.map(function func(item){
        let li = document.createElement("li");
        let header = document.createElement("h1");
        header.appendChild(document.createTextNode(item.title));
        let parag = document.createElement("p");
        parag.appendChild(document.createTextNode(item.userId));
        let a = document.createElement("a");
        a.href = "#";
        a.appendChild(document.createTextNode(item.id));
        li.appendChild(header);
        li.appendChild(a);
        li.appendChild(parag);

        let ul = document.querySelector("ul");
        ul.appendChild(li);
    })}
 

}