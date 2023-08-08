const express = require('express')
const app = express();

app.get('/home',(req,res)=>{
    console.log(req.query.name);
    res.send('Welcome to home page  '+req.query.name);
});

app.get('/admin',(req,res)=>{
    res.send(`
    <h1>HELLO ADMIN</h1>
    <input placeholder="send ur name" value="${req.query.name}" />
    <button>START</button>
    <a href="/help">Go to help</a>
    `);
});

app.get('/help',(req,res)=>{
    res.send([
        {'name':'ayush','email':'ayush@info.com'},
        {'name':'advait','email':'advait@info.com'}
    ]);
});
app.listen(3000);
// localhost:3000/home