let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');



let n1=Number(input[0])
let string=input[1];


let answer=0;

for(let x of string){
  answer+=Number(x);
}

console.log(answer);
