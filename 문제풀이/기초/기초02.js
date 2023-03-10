let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');

let num=Number(input[0]);

let sum="";
for(let i=0; i<num; i++){
  for(let j=0; j<num; j++){
    sum+='*';
  }
  console.log('\n');
}