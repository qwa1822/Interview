





function Solution(arr){

  let sum=[];
  if(arr.length===0){
    return [];
  }
    

    for(let i=0; i<arr.length; i++){
      for(let j=i+1; j<arr.length; j++){
        if(arr[i]===arr[j]){
          sum.push(arr[i])
        }
      }

     
    }

    return sum.sort((a,b)=>a-b);
  
}







console.log(Solution([4,3,2,7,8,2,3,1]));
console.log(Solution([1,1,2]));
console.log(Solution([1]));