let screenContent = document.getElementById('screenContent');
let buttons = document.getElementsByClassName('number');
let operators = document.getElementsByClassName('operator');
let clearEntry = document.querySelector('.clearentry');
let num1;
let result;
let waitingForSecondOperand = false;

function clearE() {
 clearEntry.addEventListener('click', function() {
  screenContent.innerHTML = '';
 });
}

function wipeScreen() {
  screenContent.innerHTML = '';
}

function storeNumbers () {
  
  if (screenContent.innerHTML !== '0' && screenContent.innerHTML !== 'ERROR      ' && !waitingForSecondOperand){
    num1 = screenContent.innerHTML;
    console.log(num1)
      
  }else {
      
    result = num1;
    wipeScreen();
    num1 = '';    
    console.log(result)
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

 function operate() {
    for(let i= 0; i < operators.length; i++) {
      operators[i].addEventListener('click', function(){
       switch (operators[i].value) {
       
       case '/':
       console.log('division');
       waitingForSecondOperand = true;
       break;

       case 'x':
       console.log('multiply');
       waitingForSecondOperand = true;
       break;
       
       case '+':
       console.log('sum');
       waitingForSecondOperand = true;
       break;

       case '-':
       console.log('subtract');
       waitingForSecondOperand = true;
       break;
       }
      
    })
  }  
}
operate();




