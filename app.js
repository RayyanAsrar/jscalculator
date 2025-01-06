const display = document.getElementById("display")
function updateDisplay(value){
    if(display.value==="0"){
        display.value=value
    }else{
        display.value+=value
    }
}
function clearDisplay(){
    display.value="0"

}
function clearEntry(){
    display.value=display.value.slice(0,-1);
    if(display.value=""){
        display.value=0
    }
}
function calculateResult(){
if(display.value.includes("/")||display.value.includes("*")||display.value.includes("+")||display.value.includes("-")){
    display.value=eval(display.value)
}else{
    alert("Invalid calculation")
    clearDisplay()
}
}
function calculateSquare() {
    display.value = Math.pow(parseFloat(display.value), 2);
}
function calculateSquareRoot() {
    display.value = Math.sqrt(parseFloat(display.value));
}
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const value = buttons[i].textContent;
        
        if (value === "C") clearDisplay();
        else if (value === "CE") clearEntry();
        else if (value === "=") calculateResult();
        else if (value === "x²") calculateSquare();
        else if (value === "√x") calculateSquareRoot();
        else if (["+", "-", "*", "÷"].includes(value)) {
            updateDisplay(value === "÷" ? "/" : value);
        } else {
            updateDisplay(value);
        }
    });
}

// function calculateResult() {
//     if (display.value.includes("/") || display.value.includes("*") || display.value.includes("+") || display.value.includes("-")) {
//         display.value = eval(display.value);
//     } else {
//         alert("Invalid calculation");
//         clearDisplay();
//     }
// }