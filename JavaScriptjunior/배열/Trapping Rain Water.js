


function Solution(arr){

 let totalwater=0;

 for(let p=0; p<arr.length; p++){

  let leftP=p,rightP=p,maxleft=0,maxright=0

  while(leftP>=0){
    maxleft=Math.max(maxleft,arr[leftP])
    leftP--;
  }
  while(rightP<arr.length){
    maxright=Math.max(maxright,arr[rightP]);
    rightP++;

  }

  let currentWater=Math.min(maxleft,maxright)-arr[p];

  if(currentWater>=0){
    totalwater+=currentWater
  }



  
}

return totalwater;

}



const getRappedRainWater=function(height){

  let left=0,right=height.length-1,total=0;

  let maxleft=0,maxright=0;

  // 1. identify pointer with leaser value
  // 2. is This pointer value? lesser than or equal to max of 
  // that size
  // yes->update max on the that side
  // no->get water for pointer,value,add to total

  // 3.more pointer increase
  // repeat for of that pointer
  

    while(left<right){
      if(height[left]<=height[right]){
        if(height[left]>=maxleft){
          maxleft=height[left];
        }else{
          total+=maxleft-height[left];
        }
        // 포인터 한칸이동
        left++;

        // 오른쪽 right문 실행
      }if(height[right]>=maxright){
        maxright=height[right];

      }else{
        total+=maxright-height[right];
      }
      right--;
    }


    return total;

}


console.log(Solution[0,1,0,2,1,0,3,1,0,1,2]);

console.log(getRappedRainWater([0,1,0,2,1,0,3,1,0,1,2]));