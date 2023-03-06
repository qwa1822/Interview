








function height(arr){

  
  let maxheight=arr[0];

  let maxindex=0;
  let wallheight=0;
  let sum=0;


  for(let i=0; i<arr.length; i++){
    if(maxheight<arr[i]){
      maxheight=arr[i];
      maxindex=i;
    }
  }


  
  for(let i=0; i<=maxindex; i++){
    if(wallheight<arr[i]){
      wallheight=arr[i];
    }else{
      sum+=wallheight-arr[i];
    }
  }

  wallheight=0;


  for(let i=arr.length-1; i>=maxindex; i--){
    if(wallheight<arr[i]){
      wallheight=arr[i];
    }else{
      sum+=wallheight-arr[i];
    }
  }


  return sum;

}







console.log(height([0,1,0,2,1,0,1,3,2,1,2,1]));