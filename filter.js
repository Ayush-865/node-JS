var arr = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10, 20, 30];

// let result = arr.filter((item)=>{
//     return item%2==0;
// });

// console.warn(result);

// let a = arr.filter((item)=>{return item%10==0});
// console.log(a)

// let b= arr.map((item)=>{return item*item});
// console.log(b);
let c = 5;
let arr2 = [];
let num = c;

for (let i = 0; i < c - 1; i++) { // Loop until c-1 to include all elements from 10 down to 2
    arr2.push(num--);
}

let d = arr2.reduce((i1, i2) => { return i1 * i2 });
console.log(d);
