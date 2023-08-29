function onLoadData() {
    const result1 = document.createElement('div');
    result1.textContent = 'add result: ' + add(10, 20);
    const resultData = document.getElementById('result');
    resultData.appendChild(result1);
}

window.onload = onLoadData;
