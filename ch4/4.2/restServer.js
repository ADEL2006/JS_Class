const res = require('express/lib/response');
const http = require('http');
const fs = require('fs').promises;

const users = {};

http.createServer(async (req, res) => {
    try {
        if(req.method === 'GET') {
            if(req.url === '/') {
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf' });
                return res.end();
            }else if (req.url === '/about') {

            }
        }else if (req.method === 'POST') {
        
        }else if (req.method === 'PUT') {
        
        }else if (req.method === 'DELETE') {
        
        }
    }catch(err){

    }
}).listen(8082, () => {
    console.log('8082포트에서 대기')
});