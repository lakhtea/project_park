const current = document.querySelector(".current");
const buttons = document.querySelectorAll(".button");
const opButtons = document.querySelectorAll('.button[data-type="op"]');
let lastVal = +current.textContent;
let currentOperator = null;
let operatorActive = false;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const percentage = (a) => a / 100;
const signChange = (a) => a * -1;
const clear = () => {
  if (operatorActive) {
    operatorActive = false;
    currentOperator = null;
  } else {
    operatorActive = false;
    currentOperator = null;
    current.textContent = 0;
    lastVal = +current.textContent;
  }
};

const operations = {
  add,
  subtract,
  multiply,
  divide,
};

const utils = {
  clear,
  percentage,
  signChange,
};

const handleNumberClick = (dataVal) => {
  if (operatorActive) {
    lastVal = +current.textContent;
    current.textContent = dataVal;
  } else {
    current.textContent === "0"
      ? (current.textContent = dataVal)
      : (current.textContent += dataVal);
  }
  operatorActive = false;
};

const handleOperatorClick = (dataVal) => {
  if (operatorActive) {
    currentOperator = dataVal;
    return;
  }

  if (currentOperator) {
    current.textContent = operations[currentOperator](
      lastVal,
      +current.textContent
    );
  }

  if (dataVal === "equal") {
    currentOperator = null;
    operatorActive = false;
  } else {
    currentOperator = dataVal;
    operatorActive = true;
  }
};

const handleUtilityClick = (dataVal) =>
  dataVal !== "clear"
    ? (current.textContent = utils[dataVal](+current.textContent))
    : utils[dataVal]();

const handleClick = (dataVal, type) => (e) => {
  if (type === "num") handleNumberClick(dataVal);
  if (type === "op") handleOperatorClick(dataVal);
  if (type === "util") handleUtilityClick(dataVal);

  opButtons.forEach((button) => button.classList.remove("active"));
  if (dataVal !== "equal" && type === "op") e.target.classList.add("active");
};

buttons.forEach((button) => {
  const { val, type } = button.dataset;
  button.addEventListener("click", handleClick(val, type));
});
