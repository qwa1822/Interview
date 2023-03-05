let nums=(arr)=>{



  if(arr.legnth===0){
    return [];
  }
  let p=[]
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i]===arr[j]){
        p.push(arr[i])
      }
    }
  }
  return p.sort((a,b)=>a-b);


}

console.log(nums([4,3,2,7,8,2,3,1]));
console.log(nums([1,1,2]));
console.log(nums([1]));