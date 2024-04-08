function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function deleteToDisplay(value) {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculate() {
    let expression = document.getElementById('display').value;
    let operator = '';
    let operands = [];
    let result;

    if (expression.includes('+')) {
      operator = '+';
    } else if (expression.includes('-')) {
      operator = '-';
    } else if (expression.includes('*')) {
      operator = '*';
    } else if (expression.includes('/')) {
      operator = '/';
    } else if (expression.includes('%')) {
      operator = '%';
    }

    operands = expression.split(operator).map(parseFloat);

    switch (operator) {
      case '+':
        result = operands[0] + operands[1];
        break;
      case '-':
        result = operands[0] - operands[1];
        break;
      case '*':
        result = operands[0] * operands[1];
        break;
      case '/':
        result = operands[0] / operands[1];
        break;
      case '%':
        result = operands[0] % operands[1];
        break;
      default:
        result = 'Error';
    }

    document.getElementById('display').value = result;
  }