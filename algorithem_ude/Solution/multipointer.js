

function sumzero(arr1){       //O(N^2)



  for(let i=0; i<arr1.length; i++){
    for(let j=i+1; j<arr1.length; j++){
      if(arr1[i]+arr1[j]===0){
        return [arr1[i],arr1[j]]
      }
    }
  }
} 


function sumzero2(arr){   // O(N)

 let left=0;
 let right=arr.length-1;

 while(left<right){

  let sum=arr[left]+arr[right];

  if(sum===0){
    return [arr[left],arr[right]];
  }
  if(sum>0){
    right--;
  }else{
    left++;
  }
 }
}


console.log(sumzero2([-4,-3,-2,-1,0,1,2,3,10]));