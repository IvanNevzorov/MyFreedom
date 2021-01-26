// const add = (n) => n + 10;

// add(9)
memoizedAdd()
let memoizedAdd = function () {
    let cache = {};
    return (n) => {
        if(n in cache){
            console.log('Есть');
             return cache[n];
        } else {
            let result = n+10;
            cache[n] = result;
            return result;
        }
    }
}

let newAdd = memoizedAdd();
summ()
console.log(newAdd(9));
console.log(newAdd(9));
function summ (a, b, c=10){
    return a+b+c
}

console.log(summ10(10,20)); 

document.addEventListener('click', ()=> {},{capture: true})


(function(){
    console.log(123);
})()

