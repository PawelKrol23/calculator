let operator = ""
let register1 = ""
let register2 = ""
const maxDisplayLength = 12
const calculatorDisplay = document.querySelector(".calculator-display")

function addNumberToRegister(num) {
    console.log(num)

    if(operator === "") {
        if(register1 === "" && num === 0) return
        if(register1.length < maxDisplayLength) register1 += num
        calculatorDisplay.innerText = register1
    }
    else {
        if(register2 === "" && num === 0) calculatorDisplay.innerText = "0"
        if(register2.length < maxDisplayLength) register2 += num
        calculatorDisplay.innerText = register2
    }
}

// Adds events listener to every number button
document.querySelector("#btn1").addEventListener("click", () => addNumberToRegister(1))
document.querySelector("#btn2").addEventListener("click", () => addNumberToRegister(2))
document.querySelector("#btn3").addEventListener("click", () => addNumberToRegister(3))
document.querySelector("#btn4").addEventListener("click", () => addNumberToRegister(4))
document.querySelector("#btn5").addEventListener("click", () => addNumberToRegister(5))
document.querySelector("#btn6").addEventListener("click", () => addNumberToRegister(6))
document.querySelector("#btn7").addEventListener("click", () => addNumberToRegister(7))
document.querySelector("#btn8").addEventListener("click", () => addNumberToRegister(8))
document.querySelector("#btn9").addEventListener("click", () => addNumberToRegister(9))
document.querySelector("#btn0").addEventListener("click", () => addNumberToRegister(0))
