let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');

let n=Number(input[0]);
let arr=input[1].split(' ').map(Number);


let max=Number.MIN_SAFE_INTEGER;
let min=Number.MAX_SAFE_INTEGER;
for(let i=0; i<n; i++){
  if(min>arr[i]){
    min=arr[i];
  }
  if(max<arr[i]){
    max=arr[i];
  }
}

console.log(min,max);