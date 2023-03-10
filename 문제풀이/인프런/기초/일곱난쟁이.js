
function Solutioon(arr){

 
  
  let sum=arr.reduce((acc,cur)=>acc+cur,0);
  
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(sum-(arr[i]+arr[j])===100){
        arr.splice(j,1);     // i번쨰꺼 하나삭제
        arr.splice(i,1);    // i번쨰꺼 하나삭제
      }

      // 이상한 8이 삭제되는것을 방지하기위해
      // 뒤에거부터 제거함 
      // i번쨰꺼부터 지우면 뒤에꺼 떙겨져서 8이삭제됨
      //그것을 방지하기위해뒤에거부터 삭제하면 
      //앞으로 당겨질일이 없음.
      
    }
  }

  return arr;
}




let arr=[20,7,23,19,10,15,25,8,13];
console.log(Solutioon(arr));