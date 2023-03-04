




function Solution(arr,target){


  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i]+arr[j]===target){
        return [i,j];
      }
    }
  }
}


function Solution2(arr,target){

  let map=new Map();

  for(let i=0; i<arr.length; i++){
    let needNum=target-arr[i];
    let getIdx=map.get(needNum);
    if(getIdx!==undefined){
      return[getIdx,i];
    }
    map.set(arr[i],i);
  
  }

}






console.log(Solution([3,5,3,9,2],11));
console.log(Solution2([3,5,3,9,2],11));