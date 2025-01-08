
const display = document.getElementById("display");

function updateDisplay(value){
  if(display.value==="0"){
    display.value=value
  } else {
    display.value+=value
  }
}
function clearDisplay() {
  display.value = "0";
}
function clearentry() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") {
    display.value = 0;
  }
}
function calculateSquareRoot() {
  const number = parseFloat(display.value);
  display.value = Math.sqrt(number);
}
function calculateSquare() {
  const number = parseFloat(display.value);
  display.value = number * number;
}

function calculateResult(){
  let expression= display.value
  display.value=eval(expression)
}

const buttons=document.querySelectorAll("button")
 for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        const value= buttons[i].textContent
        if(value==="C"){
            clearDisplay()
        }else if(value==="CE"||value==="⌫"){
            clearentry()
        }else if(value==="="){
            calculateResult()
        }
        else if(value==="x²"){
        calculateSquare()
        }
        else if(value==="√x"){
            calculateSquare()
            }
        else{
            updateDisplay(value)
        }
    })
 }