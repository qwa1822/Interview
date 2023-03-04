






function Solution(arr){
  let sumOne=[]

  let sum=0;
  for(let i=0; i<arr.length; i++){
    sum+=arr[i];
  }
  sum-=100;

  let result=[];
  for(let i=0; i<arr.length; i++){
    for(let j=1; j<arr.length; j++){
      if(sum===arr[i]+arr[j]){
          result[0]=i;
          result[1]=j;
          break;
      }


    }

    if(result.length!==0){
      break;
    }

  

  }
  console.log(result);


  for(let i=0; i<arr.length; i++){
    if(result[0]!==i && result[1]!==i){
      sumOne.push(arr[i]);
    }
  }


  return sumOne;
}







let arr=[
  [1,5,6,7,10,12,19,29,33],
  [25,23,11,2,18,3,28,6,37],
  [3,37,5,36,6,22,19,2,28],
]
for(let i=0; i<arr.length; i++){
  console.log(`#${i+1} ${Solution(arr[i])}`);
}