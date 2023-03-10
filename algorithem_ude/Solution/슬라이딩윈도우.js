function maxSubarraysum(arr,num){

  let maxsum=0;
  let tempmsum=0;

  if(arr.length<num) return null;


  for(let i=0; i<num; i++){
    maxSum+=arr[i];
  }

  tempmsum=maxSum;

  for(let i=num; i<arr.length; i++){
    tempmsum=tempmsum-arr[i-num]+arr[i];
    maxSum=Math.max(maxSum,tempmsum);
  }

  return maxSum;
}



