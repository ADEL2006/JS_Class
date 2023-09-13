const crypto = require('crypto');
const algorithm = "aes-156-cbc";
const key = "abcdefghijklmnopqrstuvwxyz123456";
const iv = "12345678909876";

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update("짱짱짱!!!", 'utf-8', 'base64');
result = cipher.final("base64");
console.log("암호화: " + result);

const decipher = crypto.createCipheriv(algorithm, key, iv);
let result2 = cipher.update(result, 'base64', 'utf-8');
result = cipher.final("utf-8");
console.log("암호화: " + result);