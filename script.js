let firstValue = '';
let lastValue = '';
let operation = '';

function appendValue(num) {
    let dis = document.getElementById('display');

    if (operation === '') {
        firstValue += num;
        dis.value = firstValue;
    } else {
        lastValue += num;
        dis.value = firstValue + operation + lastValue;
    }
}

function appendDotValue() {
    let dis = document.getElementById('display');

    if (operation === '') {
        if (!firstValue.includes('.')) {
            firstValue += '.';
            dis.value = firstValue;
        }
    } else {
        if (!lastValue.includes('.')) {
            lastValue += '.';
            dis.value = firstValue + operation + lastValue;
        }
    }
}

function appendOperation(opr) {
    if (firstValue === '') return;

    if (lastValue !== '') {
        calculate(); // chaining support
    }

    operation = opr;
    document.getElementById('display').value = firstValue + operation;
}

function calculate() {
    if (firstValue === '' || lastValue === '') return;

    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(lastValue);
    let result = 0;

    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 === 0 ? 'Error' : num1 / num2; break;
    }

    document.getElementById('display').value = result;

    firstValue = result.toString();
    lastValue = '';
    operation = '';
}

function clearAll() {
    firstValue = '';
    lastValue = '';
    operation = '';
    document.getElementById('display').value = '';
}
