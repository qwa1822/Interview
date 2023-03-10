function maxSubarraySum(arr,target){




  let sum=0;

  for(let i=0; i<target; i++){


  sum+=arr[i];
  }

  let temp=sum;
  for(let i=target; i<arr.length; i++){
    temp=temp-arr[i-target]+arr[i];
    sum=Math.max(sum,temp);
  }

  return sum;
}

console.log(maxSubarraySum([100,200,300,400], 2) );
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) );