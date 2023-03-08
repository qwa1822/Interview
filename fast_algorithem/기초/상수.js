let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');




let num1=input[0].split(' ')[0]
let num2=input[0].split(' ')[1]



let newA=num1[2]+num1[1]+num1[0];
let newB=num2[2]+num2[1]+num2[0];


console.log(Math.max(Number(newA),Number(newB)));