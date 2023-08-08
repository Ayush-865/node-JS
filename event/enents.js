const express = require('express');
const EventEmitter = require('events');
const event = new EventEmitter(); //creating object of class EventEmitter
const run = express();

let count =0;

event.on("count API",(req,res)=>{
    count++;
    console.log("event called "+count);
});

run.get("/1st",(req,res)=>{
    res.send("1st api called");
    event.emit("count API");
});


run.get("/2nd",(req,res)=>{
    res.send("2nd api called");
    event.emit("event called");
});


run.get("/3rd",(req,res)=>{
    res.send("3rd api called");
    event.emit("event called");
});

run.listen(5000);