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
let equal = document.querySelector('.equals');
let decimalPoint = document.querySelector('.decimal');

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
        storeNumbers()
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
    console.log(num1)
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
    }else {
      
      return

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
}

function subtract (result, num1) {
  result2 = Number(result) - Number(num1);
  screenContent.innerHTML = result2;  
}

function multiply (result, num1) {
  result2 = Number(result) * Number(num1);
  screenContent.innerHTML = result2;
}

function sum (result, num1) {
  result2 = Number(result) + Number(num1);
  screenContent.innerHTML = result2;
}

function clearE() {
 clearEntry.addEventListener('click', function() {
  screenContent.innerHTML = '0';
  num1 = '';
 });
}

let operate = function () {
    for(let i= 0; i < operators.length; i++) {
      operators[i].addEventListener('click', function(){
       switch (operators[i].value) {
       
       case '/':        
        operatorsObject.divide = true;
          if (num1) {
          
          result = num1;
           console.log(num1)
           console.log(result)

          num1 = '';
          screenContent.innerHTML = '';
          
          }

       break;

       case 'x':             
        operatorsObject.multiply = true;
        if (num1) {
          result = num1;
          num1 = '';
          screenContent.innerHTML = '';
        }
             
       break;
       
       case '+':        
        operatorsObject.sum = true;
        if (num1) {
          result = num1;
          num1 = '';
          screenContent.innerHTML = '';
        }           
       
       break;

       case '-':        
        operatorsObject.subtract = true;
        if (num1) {
          result = num1;
          num1 = '';
          screenContent.innerHTML = '';
        }      
       
       break;
       }     
    });
  }  
}

function equals () {
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
 })
}
equals();
clearE();
showNumbersOnScreen();
operate();
addDecimalPoint();
