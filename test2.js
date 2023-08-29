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

function onLoadData(){
    const result1 = document.createElement('div');
    result1.textContent = 'add result: ' + add(10,20);

    console.log("html page loaded");
    let result = add(10, 20);
    console.log('result: ', result);
    result = sub(10, 20);
    console.log('result: ', result);
    result = mul(10, 20);
    console.log('result: ', result);
}

function run(){
    console.log("타이머 완료");
}
console.log("시작");
setTimeout(run,3000);
console.log('끝');