function power(base,expont){

  if(expont===0) return 1;
  return base*power(base,expont-1);
}

console.log(power(2,4));