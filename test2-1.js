function add(num1, num2) {
    return num1 + num2;
}

let sub = function(num1, num2) {
    return num1 - num2;
}

let mul = (num1, num2) => {
    return num1 * num2;
}

let div = (num1, num2) => {
    if(num2 == 0) {
        return 0;
    }
    return num1 / num2;
}

function onLoadData() {
    const result1 = document.createElement('div');
    result1.textContent = 'add result: ' + add(10, 20);

    const result2 = document.createElement('div');
    result1.textContent = 'add result: ' + add(10, 20);

    const resultData = document.getElementById('results');
    resultData.appendChild(result1);
    resultData.appendChild(result2);
}

window.onload = onLoadData;