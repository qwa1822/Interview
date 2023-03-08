let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');


let hour=Number(input.split(' ')[0]);
let minute=Number(input.split(' ')[1]);

if(minute<45){
  minute+=15;
  hour--;

  if(hour<0){
    hour=23;
  }
}else{
  minute-=45;
}

console.log(hour+' '+minute);