


const trap=(arr1)=>{



  let result=[]
  let maxheight=arr1[0];
  
  let sum=0;
  let hellheight=0;
  let heightindex=0;

  for(let i=0; i<arr1.length; i++){
    if(arr1[i]>maxheight){
      maxheight=arr1[i];
      heightindex=i;
    }
  }
  


  for(let i=0; i<=heightindex; i++){
    if(arr1[i]>hellheight){
      hellheight=arr1[i];


    }else{
      sum+=hellheight-arr1[i];
    }
  }


  hellheight=0;

  for(let j=arr1.length-1; j>=heightindex; j--){
    if(hellheight<arr1[j]){
      hellheight=arr1[j];
    }else{
      sum+=hellheight-arr1[j];
    }
  }
return sum;

}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));