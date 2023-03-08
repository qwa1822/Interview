const increase=(num)=>{
  return ++num
}

const decrase=(num)=>{
  return ++dec;
}

let changeNum={increase,decrase}

function makeCounter(changeNum){
  let num=0;


  return ()=>{
    num=changeNum(num);
    return num;
  }
}


let num1=makeCounter(changeNum.increase)
console.log(increase());
console.log(increase());