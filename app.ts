// input element
const number1 = document.getElementById("num1") as HTMLInputElement
const number2 = document.getElementById("num2") as HTMLInputElement


// button element
const add = document.getElementById("add") as HTMLButtonElement
const sub = document.getElementById("sub") as HTMLButtonElement
const mult = document.getElementById("mult") as HTMLButtonElement
const divide = document.getElementById("divide") as HTMLButtonElement

// output element

const printresult = document.getElementById("result") as HTMLDivElement

// function for add
function addnumber(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a + b;
    printresult.textContent = result.toString();
}
add.addEventListener("click",addnumber)

// funtion for sub 

function subnumber(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a - b;
    printresult.textContent = result.toString();
}
sub.addEventListener("click",subnumber)

// function for mult

function multnumber(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a * b;
    printresult.textContent = result.toString();
}
mult.addEventListener("click",multnumber)

// function for divide

function divnumber(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a / b;
    printresult.textContent = result.toString();
}
divide.addEventListener("click",divnumber)