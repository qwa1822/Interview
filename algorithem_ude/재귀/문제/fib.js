function fib(j){

  if(j<=2){
    return 1;
  }

  return fib(j-1)+fib(j-2)
}

console.log(fib(5));