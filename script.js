let add=(a,b)=>a+b;
let subtract=(a,b)=>a-b;
let multiply=(a,b)=>a*b;
let divide=(a,b)=>a/b;



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
// the operator buttons will be enabled again
        document.getElementById('+').disabled=false;
        document.getElementById('-').disabled=false;
        document.getElementById('*').disabled=false;
        document.getElementById('/').disabled=false;
}

// adding eventListeners to the operator buttons

const operatorbuttons=operators.querySelectorAll('button');
operatorbuttons.forEach((button)=>{
    button.addEventListener('click', storeOperator);
});

let chosenOpertator='';
let input1;
let input2;

function storeOperator(){
     chosenOpertator=this.id;
     input1=Number(displaystring);
     //won't display the operator anymore
     console.log(chosenOpertator);
     console.log(input1);
     displaystring='';
     display.innerHTML = displaystring;
    // the operator buttons get disableb after clicking on them
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

// adding eventListeners to the = button
const equalsCleardiv =container.querySelector('#equalsClear')

const equalsbutton=equalsCleardiv.firstElementChild;

equalsbutton.addEventListener('click',operate);


function operate() {
input2=Number(displaystring);
console.log("equalsbuttonclicked")
if(chosenOpertator== '+'){
   let answer=add(input1,input2);
   console.log(answer);
    display.innerHTML= answer;
    displaystring=answer;
    }   
else if(chosenOpertator== '-'){
        let answer=subtract(input1,input2);
        console.log(answer);
         display.innerHTML= answer;
         displaystring=answer;
         } 
else if(chosenOpertator== '*'){
            let answer=multiply(input1,input2);
            console.log(answer);
             display.innerHTML= answer;
             displaystring=answer;
             } 
else if(chosenOpertator== '/'){
    if(input2===0){
        displaystring='';
    input1='';
    input2='';
    chosenOpertator='';
    display.innerHTML='SNAKE DETECTED!';
    }
    else{
                let answer=divide(input1,input2);
                console.log(answer);
                 display.innerHTML= answer;
                 displaystring=answer;
                 } }
}

const clearButton=equalsCleardiv.lastElementChild;

clearButton.addEventListener('click',clear);

function clear(){
    displaystring='';
    input1='';
    input2='';
    chosenOpertator='';
    display.innerHTML='';
}