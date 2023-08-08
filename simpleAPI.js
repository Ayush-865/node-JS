const http = require('http');
const data = require('./data');

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'application/json'});
    res.write(JSON.stringify(data));
    res.write("this is ayush");
    res.end();
}).listen(9000);

// localhost:9000