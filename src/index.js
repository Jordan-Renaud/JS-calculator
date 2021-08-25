const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const clearAllButton = document.getElementsByClassName("clear")[0];
const removeLastButton = document.getElementsByClassName("remove-last")[0];
const equals = document.getElementsByClassName("equals")[0];
const output = document.getElementsByClassName("output")[0];

let runningTotal = 0;
let previousNumber = 0;
let currentNumber = 0;
let currentOperater = "";
let answer = 0;

function addToDisplay(event) {
  currentNumber = event.target.innerHTML;
  output.innerHTML === "0"
    ? (output.innerHTML = currentNumber)
    : (output.innerHTML += currentNumber);
  currentNumber = output.innerHTML;
}

function setEquationVariables(event) {
  output.innerHTML = "0";
  previousNumber = currentNumber;
  currentOperater = event.target.innerHTML;
}

function doEquation() {
  if (currentOperater === "") return;

  if (currentOperater === "+") {
    answer = add(previousNumber, currentNumber);
  } else if (currentOperater === "-") {
    answer = minus(previousNumber, currentNumber);
  } else if (currentOperater === "÷") {
    answer = divide(previousNumber, currentNumber);
  } else if (currentOperater === "x") {
    answer = multiply(previousNumber, currentNumber);
  }
  runningTotal = answer;
}

function showEquation() {
  doEquation();
  output.innerHTML = answer;
}

function add(firstNumber, secondNumber) {
  return parseInt(firstNumber) + parseInt(secondNumber);
}

function minus(firstNumber, secondNumber) {
  return parseInt(firstNumber) - parseInt(secondNumber);
}

function multiply(firstNumber, secondNumber) {
  return parseInt(firstNumber) * parseInt(secondNumber);
}

function divide(firstNumber, secondNumber) {
  return Math.floor(parseInt(firstNumber) / parseInt(secondNumber));
}

function clearAll() {
  previousNumber = 0;
  currentNumber = 0;
  currentOperater = "";
  answer = 0;
  runningTotal = 0;
  output.innerHTML = "0";
}

function removeLast() {
  currentNumber = 0;
  output.innerHTML = "0";
}

//add listners to buttons
Array.from(numberButtons).map((button) => {
  button.addEventListener("click", addToDisplay);
});

Array.from(operatorButtons).map((button) => {
  button.addEventListener("click", setEquationVariables);
});

equals.addEventListener("click", showEquation);
clearAllButton.addEventListener("click", clearAll);
removeLastButton.addEventListener("click", removeLast);
