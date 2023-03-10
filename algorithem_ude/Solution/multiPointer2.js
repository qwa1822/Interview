function Soltion(arr){

  // 객체생성해서
  // 1: 6 2 : 1 중복안되게끔 만들려면?
  
  if(arr.length===0){
    return 0;
  }
  let sum={}; 
  for(let i=0; i<arr.length; i++){
    let curr=arr[i];

    sum[curr]?sum[curr]+=1:sum[curr]=1;
  }
let count=0;
 for(let key in sum){
  count++;
 }

 return count;
}


function Solution2(arr){
 

  let i=0;
  if(arr.length===0)
  return 0;

  for(let j=1; j<arr.length; j++){
    if(arr[i]!==arr[j]){
      i++;
      arr[i]=arr[j];                       
    }
  }

  return i+1;
}

// i
// [1,1,2,3,3,4,5,6,6,7]
//       j
console.log(Soltion([1,1,1,1,1,1,2]));
console.log(Soltion([1,2,3,4,4,4,7,7,12,12,13]));
console.log(Soltion([-2,-1,-1,0,1]));
console.log(Soltion([]));
console.log(Solution2([1,1,1,1,1,1,2]));
