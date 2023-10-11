const res = require('express/lib/response');
const http = require('http');

http.createServer(async (req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.writable('<h1>Hello Node81! </h1>');
            return res.end('<p>Hello server!</p>');
        } else if (req.url === '/server2') {
            try {
                const data = await fs.readFile('./server2.js');
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(data)
            } catch (err) {
                console.error(err);
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                return req.end(err.message);
            }
        }
        res.writeHead(404)
        res.end('404 Not Found');
    }
})
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     res.write('<h1>Hello Node!</h1>');
//     res.end('<p>Hello server!</p>');
// });
// server.listen(8080);

// server.on('listening', () => {
//     console.log('8080 포트에서 서버 대기 중입니다.');
// });
// server.on('error', (error) => {
//     console.error(error);
// })

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello server!</p>');
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!')
});