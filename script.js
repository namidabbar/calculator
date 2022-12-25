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

let displaystring='';

function displayDigits(){
    let currentbutton=this.id;
    console.log(currentbutton);
    display.innerHTML = displaystring.concat(currentbutton);
displaystring=displaystring.concat(currentbutton);
}

// adding eventListeners to the operator buttons

const operatorbuttons=operators.querySelectorAll('button');
operatorbuttons.forEach((button)=>{
    button.addEventListener('click', storeOperator);
});

let chosenOpertator='';
let input1;

function storeOperator(){
     chosenOpertator=this.id;
     input1=Number(displaystring);
     //won't display the operator anymore
     console.log(chosenOpertator);
     console.log(input1);
     displaystring='';
    // displaystring=displaystring.concat(chosenOpertator);
    //display.innerHTML=displaystring;
if(chosenOpertator== '+'){
    document.getElementById('-').disabled=true;
        document.getElementById('*').disabled=true;
        document.getElementById('/').disabled=true;
}
else if (chosenOpertator== '-'){
    document.getElementById('+').disabled=true;
        document.getElementById('*').disabled=true;
        document.getElementById('/').disabled=true;
}
else if (chosenOpertator== '*'){
    document.getElementById('+').disabled=true;
        document.getElementById('-').disabled=true;
        document.getElementById('/').disabled=true;
}
else if (chosenOpertator== '/'){
    document.getElementById('+').disabled=true;
        document.getElementById('-').disabled=true;
        document.getElementById('*').disabled=true;
}
}