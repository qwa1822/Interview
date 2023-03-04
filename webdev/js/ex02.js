function Solution(arr){


  let result=0;
  let avg=0;
  for(let i=0; i<arr.length; i++){
    avg+=arr[i];
  }

  avg/=arr.length;


  for(let i=0; i<arr.length; i++){
    if(avg<arr[i]){
      result+=arr[i]-avg;
    }
  }

  return Math.floor(result)
}


let b=[
  [5,2,4,1,7,5],
  [12,8,10,11,9,5,8],
  [27,14,19,11,26,22,23,15],
]

for(let i=0; i<b.length; i++){
  console.log(`#${i+1}  ${Solution(b[i])}` );
}