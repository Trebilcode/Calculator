let operatorsObject = {
  divide: false,
  sum: false,
  multiply: false,
  subtract: false
}

let screenContent = document.getElementById('screenContent');
let buttons = document.getElementsByClassName('number');
let operators = document.getElementsByClassName('operator');
let clearEntry = document.querySelector('.clearentry');
let all_clear = document.querySelector('.allclear');
let equal = document.querySelector('.equals');
let decimalPoint = document.querySelector('.decimal');
let back_Space = document.querySelector('.backspace');
let num1;
let result;
let result2;

function showNumbersOnScreen() {

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      if (screenContent.innerHTML === '0') {
        screenContent.innerHTML = buttons[i].innerHTML;
      } else {
        screenContent.innerHTML += buttons[i].innerHTML;
        storeNumbers();
        restrictNumbersOnScreen();
      }
      if (!num1) {
        num1 = screenContent.innerHTML;
      }
    });    
  }  
}

function storeNumbers() {
  if (screenContent.innerHTML !== '0' && screenContent.innerHTML !== 'ERROR      ') {
    num1 = screenContent.innerHTML;
  }
}

function restrictNumbersOnScreen() {
  if (screenContent.innerHTML.length > 8) {
      screenContent.innerHTML = 'ERROR      ';
  } 
}

function addDecimalPoint () {
  decimalPoint.addEventListener('click', function () {
    if (!screenContent.innerHTML.includes('.')) {
    screenContent.innerHTML += '.';
    } else {
      return;
    }
  });
}

function divide (result, num1) {  
  result2 = Number(result) / Number(num1);
  if(result2 !== Infinity) {
  screenContent.innerHTML = result2;
  } else {
    screenContent.innerHTML = 'ERROR'
  }  
  if(String(result2).length > 10) {
    screenContent.innerHTML = result2.toFixed(5);
  }  
}

function subtract (result, num1) {
  result2 = Number(result) - Number(num1);
  screenContent.innerHTML = result2;  
  if (String(result2).length > 10) {
    screenContent.innerHTML = result2.toFixed(5);
  }
}

function multiply (result, num1) {
  result2 = Number(result) * Number(num1);
  screenContent.innerHTML = result2;
  if (String(result2).length > 10) {
    screenContent.innerHTML = result2.toFixed(5);
  }
}

function sum (result, num1) {
  result2 = Number(result) + Number(num1);
  screenContent.innerHTML = result2;
  if (String(result2).length > 10) {
    screenContent.innerHTML = result2.toFixed(5);
  }
}

function clearE() {
 clearEntry.addEventListener('click', function() {
  screenContent.innerHTML = '0';
  num1 = '';
 });
}

function allClear() {
  all_clear.addEventListener('click', function () {
    result = '';
    num1 = '';
    screenContent.innerHTML = '0';
  });
}

function backSpace () {
  back_Space.addEventListener('click', function () {
    screenContent.innerHTML = screenContent.innerHTML.slice(0, -1);
    num1 = screenContent.innerHTML;
  });
}

 function operate () {
    for(let i= 0; i < operators.length; i++) {
      operators[i].addEventListener('click', function(){
       switch (operators[i].value) {       
       case '/': 
        if(num1){
          operatorsObject.divide = true; 
        }else{ 
         return;
        }
         result = num1;
         num1 = '';
         screenContent.innerHTML = '';
        break;
        case 'x':             
         if(num1) {
          operatorsObject.multiply = true;
         } else {
          return;
         }
          result = num1;
          screenContent.innerHTML = '';
          num1 = '';
        break;
        case '+':        
         if(num1) {
          operatorsObject.sum = true;
           } else {
             return;
           }
           result = num1;
           screenContent.innerHTML = '';
           num1 = '';
        break;
        case '-':        
         if (num1) {
          operatorsObject.subtract = true;
         } else {
             return
         }
           result = num1;
           screenContent.innerHTML = '';
           num1 = '';
        break;
       }     
    });
  }  
}

function equals (){
  equal.addEventListener('click', function(){    
    if (operatorsObject.divide) {
      divide(result, num1)
      operatorsObject.divide = false;
      num1 = result2;      
    } else if (operatorsObject.subtract) {
      subtract(result, num1)
      operatorsObject.subtract = false;
      num1 = result2;
    } else if(operatorsObject.multiply) {
      multiply(result, num1)
      operatorsObject.multiply = false;
      num1 = result2;      
    } else if(operatorsObject.sum) {
      sum (result, num1)
      operatorsObject.sum = false;
      num1 = result2;
    }
 });
}

equals();
clearE();
allClear();
backSpace();
showNumbersOnScreen();
operate();
addDecimalPoint();