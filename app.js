let screenContent = document.getElementById('screenContent');
let buttons = document.getElementsByClassName('number');
let operators = document.getElementsByClassName('operator');
let clearEntry = document.querySelector('.clearentry');
let equal = document.querySelector('.equals');
let num1;
let result;
let result2;
let operationsObject = {
  divide : false,
  multiply : false,
  sum : false,
  subtract : false
}


function clearE() {
 clearEntry.addEventListener('click', function() {
  screenContent.innerHTML = '';
 });
}



function storeNumbers () {
  
  if (screenContent.innerHTML !== '0' && screenContent.innerHTML !== 'ERROR      '){
    num1 = screenContent.innerHTML;
    console.log(num1)
      

  }




}
  
function showNumbersOnScreen () {
  
  for (let i = 0; i < buttons.length; i ++) {
    
    buttons[i].addEventListener('click', function () {
      if(screenContent.innerHTML === '0') {
      screenContent.innerHTML = buttons[i].innerHTML;
      
      
      } else {
        screenContent.innerHTML += buttons[i].innerHTML;
        storeNumbers();
        restrictNumbersOnScreen();
      }
    });
  }
}

showNumbersOnScreen();

function restrictNumbersOnScreen() {
  
  if (screenContent.innerHTML.length > 8) {
    screenContent.innerHTML = 'ERROR      ';
  }
}
function equals () {
  equal.addEventListener('click', function () {
    if (operationsObject.divide) {
      
      divide(result, num1)
      
    } else if(operationsObject.sum) {
      sum(result, num1)
    } else if (operationsObject.multiply) {
      multiply(result, num1)
    } else if(operationsObject.subtract) {
      subtract(result, num1)
    }
  })
}
equals();
function divide (result, num1) {
  result2 = Number(result) / Number(num1);
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
function subtract (result, num1) {
  result2 = Number(result) - Number(num1);
  screenContent.innerHTML = result2;
}
 function operate() {
    for(let i= 0; i < operators.length; i++) {
      operators[i].addEventListener('click', function(){
       switch (operators[i].value) {
       
       case '/':
       
       operationsObject.divide = true;
       screenContent.innerHTML = '';
       result = num1;
       num1 = '';
       
       
       
       console.log(result + 'result');
       console.log(num1 + 'num1')
       
       break;

       case 'x':
           operationsObject.multiply = true;
           screenContent.innerHTML = '';
           result = num1;
           num1 = '';
           console.log(result + 'result');
           console.log(num1 + 'num1')
       
       break;
       
       case '+':
           operationsObject.sum = true;
           screenContent.innerHTML = '';
           result = num1;
           num1 = '';
       
       break;

       case '-':
           operationsObject.subtract = true;
           screenContent.innerHTML = '';
           result = num1;
           num1 = '';
       
       break;
       }
      
    })
  }  
}
operate();




