

let maxSubArray=function(nums){
 

  for(let i=1; i<nums.length; i++){
    nums[i]=Math.max(nums[i],nums[i]+nums[i-1]);


  }
  return Math.max(...nums);
}





console.log(maxSubArray([-3,3,5,-3,-7,9,-2,10,-5,-2]));