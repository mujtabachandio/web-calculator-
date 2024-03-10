// input element
var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
// button element
var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mult = document.getElementById("mult");
var divide = document.getElementById("divide");
// output element
var printresult = document.getElementById("result");
// function for add
function addnumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printresult.textContent = result.toString();
}
add.addEventListener("click", addnumber);
// funtion for sub 
function subnumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printresult.textContent = result.toString();
}
sub.addEventListener("click", subnumber);
// function for mult
function multnumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printresult.textContent = result.toString();
}
mult.addEventListener("click", multnumber);
// function for divide
function divnumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printresult.textContent = result.toString();
}
divide.addEventListener("click", divnumber);
