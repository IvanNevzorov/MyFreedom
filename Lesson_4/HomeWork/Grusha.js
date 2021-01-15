function isEven(number) {
    number = prompt('Введите число:', '')
    if(number%2===0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven())

function fizzBuzz(number){
    number%3 === 0 && console.log("Fizz");
    number%5 === 0 && console.log("Buzz");
    number%15 === 0 && console.log("FizzBuzz");
}
fizzBuzz(15)

function loop (start, end, step){
    for(start; start<=end; start= start+step){
        console.log(start);
    }
}
loop(1, 20, 3)

function factorial(number){
    return(number!=1)?number*factorial(number-1):1;
}
console.log (factorial(5))

function clone (array) {
    return array;
}
var a =[1,2,3];
//var b = clone(a);
//console.log(b);

function first (array){
return array[0];
return;
}
console.log(first());

function last (array){
    return array[length-1];
    return;
}

function range (start, end, step) {
   let a =[];
    [0]=start;
    [length-1]=end;
return a;
}
console.log(1,3,5);
