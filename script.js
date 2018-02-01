const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const btn9 = document.querySelector('.btn9');
const btn10 = document.querySelector('.btn10');
const btn11 = document.querySelector('.btn11');
const btn12 = document.querySelector('.btn12');
const btn13 = document.querySelector('.btn13');
const btn14 = document.querySelector('.btn14');
const btn15 = document.querySelector('.btn15');
const btn16 = document.querySelector('.btn16');
const btn17 = document.querySelector('.btn17');
const btn18 = document.querySelector('.btn18');
const btn19 = document.querySelector('.btn19');
const result = document.querySelector('.result');
let zero = [0];
let inputArray = [];
let resultArray = [];
let operatorValue = [];

function reset() {
  inputArray = [];
  resultArray = [];
  result.innerHTML = zero;
}

function input() {
  inputArray.push(this.value);
  let temp = inputArray.join('');
  inputArray = [];
  inputArray.push(temp);
  result.innerHTML = temp;
  console.log(inputArray);
}

function operator() {
  if (inputArray && inputArray.length) {
    resultArray.push(inputArray);
  }
  // if (this.value !== inputArray[inputArray.length - 1]) {
  // }
  // resultArray.push(')');
  resultArray.push(this.value);

  // resultArray.push('(');
  // result.innerHTML = eval(resultArray.join('') + 0);
  inputArray = [];
  console.log(resultArray);
}

function equalto(value) {
  resultArray.push(inputArray.join(''));
  // resultArray.push(')');
  result.innerHTML = eval(resultArray.join(''));
  inputArray = [];
  console.log(this.value);
  console.log(result.innerHTML);
  console.log(resultArray);
  console.log(inputArray);
}

btn1.addEventListener('click', reset);
// btn2.addEventListener('click');
// btn3.addEventListener('click');
btn4.addEventListener('click', operator);
btn5.addEventListener('click', input);
btn6.addEventListener('click', input);
btn7.addEventListener('click', input);
btn8.addEventListener('click', operator);
btn9.addEventListener('click', input);
btn10.addEventListener('click', input);
btn11.addEventListener('click', input);
btn12.addEventListener('click', operator);
btn13.addEventListener('click', input);
btn14.addEventListener('click', input);
btn15.addEventListener('click', input);
btn16.addEventListener('click', operator);
btn17.addEventListener('click', input);
btn18.addEventListener('click', input);
btn19.addEventListener('click', equalto);
