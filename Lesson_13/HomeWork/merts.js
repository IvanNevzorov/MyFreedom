let body = document.body;
let ul = document.createElement('ul');
body.append(ul);
let userChoice = prompt('Введите пункт списка', '');

while (userChoice != null){
    let li = document.createElement('li');
    li.innerHTML = userChoice.replace(/^</, "").replace(/>$/, "");
    ul.appendChild(li);//beforeend
    userChoice = prompt('Введите пункт списка', '');
}

let hideButton = body.querySelector('#hider');
hideButton.addEventListener('click', function()  {
    let hiddenText = body.querySelector('#hide');
    hiddenText.style.visibility = 'hidden'
});