const http = require('http');
const PORT = 3000;
http.createServer((req,res)=>{
    res.end('Hello from Dockerized App!');
}).listen(PORT, ()=>console.log(`Running on ${PORT}`));

