let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');



let n=Number(input[0]);
let arr=input[1].split(' ').map(Number);

let maxvalue=arr.reduce((acc,cur)=>Math.max(acc,cur));
let sum=[]


for(let i=0; i<n; i++){
  sum.push(arr[i]/maxvalue*100);
}

console.log(sum.reduce((a,b)=>a+b)/n);