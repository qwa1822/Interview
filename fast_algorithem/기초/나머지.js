let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');



let data=input.map(Number);
let myset=new Set();


for(let i=0; i<10; i++){
  myset.add(data[i]%42);
}

console.log(myset.size);