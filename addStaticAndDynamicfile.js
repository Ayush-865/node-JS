const express = require('express');
const path = require('path');
const app=express();

app.set('view engine','ejs');

app.get('/profile', (req, res) => {
    let user={
        'name':'Ayush',
        'email':'ayush@test.com',
        'phoneNO':'9834016627',
        skills: ['cpp','java','javascript']
    }
    res.render('profile',{user}); // Corrected response variable from "response" to "res"
});

app.get('/admin',(req,res)=>{
    res.sendFile(`${__dirname}/files/admin.html`)
});

app.get('/contact',(req,res)=>{
    res.sendFile(`${__dirname}/files/contact.html`)
});

app.get('/help',(req,res)=>{
    res.sendFile(`${__dirname}/files/help.html`)
});

app.get('*',(req,res)=>{
    res.sendFile(`${__dirname}/files/pageNotFound.html`)
});

app.listen(8000);