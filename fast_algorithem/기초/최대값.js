let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');




let maxindex=0;
let maxvalue=0;


for(let i=0; i<9; i++){
  let data=Number(input[i]);

  if(data>maxvalue){
    maxvalue=data;
    maxindex=i;
  }
}
console.log(maxvalue);
console.log(maxindex+1);