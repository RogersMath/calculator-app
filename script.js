let display = document.getElementById('display');
let numbers = [];
let operator = '';

function appendNumber(number) {
  numbers.push(number);
  display.value = numbers.join('');
}

function clearDisplay() {
  numbers = [];
  operator = '';
  display.value = '';
}

function appendOperator(op) {
  operator = op;
  numbers.push(op);
}

async function calculate() {
  if (numbers.length < 3) {
    return;
  }

  let num1 = parseFloat(numbers[0]);
  let num2 = parseFloat(numbers[2]);
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert("Error: Division by zero");
        return;
      }
      result = num1 / num2;
      break;
    default:
      return;
  }

  numbers = [result];
  display.value = result;
}
