




function Solution(arr,target){


  let sum;
  let sum2;

  if(arr.length===0){
    return [];
  }

  
  for(let i=0; i<arr.length; i++){
    sum=target-arr[i];
    for(let j=1; j<arr.length; j++){
      if(sum===arr[j]){
        return [i,j]
      }
    }
  }

  return null;
}



console.log(Solution([1,3,7,9,2],11));