



function maxsubarraysum(arr1,target)
{



  let max=-Infinity;

  for(let i=0; i<arr1.length-target+1; i++){
    temp=0;

    for(let j=0; j<target; j++){
      temp+=arr1[i+j];
    }
    if(temp>max){
      max=temp;
    }
  }

  return max;
}


function maxSum(arr,num){

  let maxSum=0;
  let tempSum=0;

  if(arr.length<num) return null;
  for(let i=0; i<num; i++){
    maxSum+=arr[i];
  } //시작 위치에서 시작하여 첫 두글자의 합계를 구하고,
  // amxsum에 저장
  tempSum=maxSum;

  for(let i=num; i<arr.length; i++){
    tempSum=tempSum-arr[i-num]+arr[i];
    maxSum=Math.max(maxSum,tempSum);
  }

  return maxSum
}
/**
 * [1,2,5,2,8,1,5]
 * 1,2는구했으니 5부터시작
 */



// 2,6,9는 이미구했으니 2부터 시작
//합계를 가진 변수가있고 합계는 17
// tempSUm에 2를더하고 2를뺴줌
// 6,9,2가 나오는데 이것은 다시 17
// 이제 1을더하고 6을 뺴줌
maxsubarraysum([2,6,9,2,1,8,5,6,3],3)


console.log(maxsubarraysum([1,2,5,2,8,1,5],2));
