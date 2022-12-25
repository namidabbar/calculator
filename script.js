let add=(a,b)=>a+b;
let subtract=(a,b)=>a-b;
let multiply=(a,b)=>a*b;
let divide=(a,b)=>a/b;

let operate=(operator,a,b)=>operator(a,b);

const container = document.querySelector('#container');
const display=container.querySelector('#display')
const operators=container.querySelector('#operators');
const numbers=container.querySelector('#numbers');

const numberbuttons =numbers.querySelectorAll('button');

numberbuttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', displayDigits);
  });

let displayarray=new Array();

function displayDigits(){
displayarray.push(this.id);
console.log(displayarray);
    display.innerHTML = displayarray.join(',');
}