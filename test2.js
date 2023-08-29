function add(num1, num2) {
    return num1 + num2;
}

let sub = function(num1, num2) {
    return num1 - num2;
}

let mul = (num1, num2) => {
    return num1 * num2;
}

let result = add(10, 20);
console.log('result: ', result);
result = sub(10, 20);
console.log('result: ', result);
result = mul(10, 20);
console.log('result: ', result);