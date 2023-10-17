const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    
})