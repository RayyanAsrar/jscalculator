// // Select the display element where numbers will be shown
// const display = document.getElementById("display");

// // Function to update the display when a number or operator button is clicked
// function updateDisplay(value) {
//     // If the current display shows only "0", replace it with the new value
//     if (display.value === "0") {
//         display.value = value;
//     } else {
//         // Otherwise, add the new value to the existing value
//         display.value += value;
//     }
// }

// // Function to clear the entire display
// function clearDisplay() {
//     display.value = "0";
// }

// // Function to delete the last digit or symbol entered (like a backspace)
// function clearEntry() {
//     // Remove the last character from the display value
//     display.value = display.value.slice(0, -1);

//     // If the display becomes empty, reset it to "0"
//     if (display.value === "") {
//         display.value = "0";
//     }
// }

// // Function to perform the calculation
// function calculateResult() {
//     // Evaluate the expression shown on the display
//     let expression = display.value;

//     // Replacing the division symbol (÷) with the actual operator (/)
//     // expression = expression.replace("÷", "/");

//     // Calculate the result and update the display
//     display.value = eval(expression); // Be careful with eval() in larger projects
// }

// // Function to calculate the square of the current number
// function calculateSquare() {
//     const number = parseFloat(display.value);
//     display.value = number * number;
// }

// // Function to calculate the square root of the current number
// function calculateSquareRoot() {
//     const number = parseFloat(display.value);
//     display.value = Math.sqrt(number);
// }

// // Adding event listeners for each button (loop used for simplicity)
// const buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//         const value = buttons[i].textContent; // Get the button text (like "7", "+", "C")

//         // Check what button was clicked and call the appropriate function
//         if (value === "C") {
//             clearDisplay();
//         } else if (value === "CE" || value === "⌫") {
//             clearEntry();
//         } else if (value === "=") {
//             calculateResult();
//         } else if (value === "x²") {
//             calculateSquare();
//         } else if (value === "√x") {
//             calculateSquareRoot();
//         } else {
//             // If it's a number or operator, update the display
//             updateDisplay(value);
//         }
//     });
// }

////////////////
const display = document.getElementById("display");

function updateDisplay(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
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
function calculateResult() {
  let expression = display.value;
  display.value = eval(expression);
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
