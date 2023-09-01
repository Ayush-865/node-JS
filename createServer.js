const http = require('http');

http.createServer((req, res) => {
    res.write("<b>Ayush </b><hr>");
    res.end();
}).listen(1000); 

const datacontrol=(req , res)=>{
    res.write("<b>Ayush </b><hr>");
    res.end();
}
http.createServer(datacontrol).listen(5000);