let operator = ""
let register1 = ""
let register2 = ""
const calculatorDisplay = document.querySelector(".calculator-display")
calculatorDisplay.innerText = "0"

function addNumberToRegister(num) {
    if(operator === "") {
        if(register1 === "" && num === 0) return
        register1 += String(num)
        calculatorDisplay.innerText = register1
    }
    else {
        if(register2 === "" && num === 0) calculatorDisplay.innerText = "0"
        register2 += String(num)
        calculatorDisplay.innerText = register2
    }
}

function evalExpr() {
    if(operator === "+") {
        register1 = +register1 + +register2
    }
    else if(operator === "-") {
        register1 = +register1 - +register2
    }
    else if(operator === "*") {
        register1 = +register1 * +register2
    }
    else if(operator === "/") {
        if(register2 == 0) {
            clearAll()
            calculatorDisplay.innerText = "Unlucky"
            return
        }
        register1 = +register1 / +register2
    }

    register2 = ""
    operator = ""
    register1 = round(register1)
    calculatorDisplay.innerText = register1
}

function setOperator(o) {
    if(operator !== "") {
        evalExpr()
    }

    operator = o;
}

function clearAll() {
    register1 = ""
    register2 = ""
    operator = ""
    calculatorDisplay.innerText = "0"
}

function addFloatingPoint() {
    if(operator === "") {
        if(register1 === "") register1 = "0."
        if(!register1.includes(".")) register1 += "."
        calculatorDisplay.innerText = register1
    }
    else {
        if(register2 === "") register2 = "0."
        if(!register2.includes(".")) register2 += "."
        calculatorDisplay.innerText = register2
    }
}

function deleteChar() {
    if(operator === "") {
        register1 = register1.slice(0,-1)
        if(register1 === "") calculatorDisplay.innerText = "0"
        else calculatorDisplay.innerText = register1
    }
    else {
        register2 = register2.slice(0,-1)
        if(register2 === "") calculatorDisplay.innerText = "0"
        else calculatorDisplay.innerText = register2
    }
}

function round(num) {
    return String(Math.floor(+num * 1000) / 1000)
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

// Adds events listener to every operation button
document.querySelector("#add").addEventListener("click", () => setOperator("+"))
document.querySelector("#substract").addEventListener("click", () => setOperator("-"))
document.querySelector("#multiply").addEventListener("click", () => setOperator("*"))
document.querySelector("#divide").addEventListener("click", () => setOperator("/"))

// Adds listeners to rest of buttons
document.querySelector("#equals").addEventListener("click", evalExpr)
document.querySelector("#clear").addEventListener("click", clearAll)
document.querySelector("#point").addEventListener("click", addFloatingPoint)
document.querySelector("#delete").addEventListener("click", deleteChar)
