let a=10;
let b=20;

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20);
    },2000);
});

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
});