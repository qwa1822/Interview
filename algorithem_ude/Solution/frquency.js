

function same(arr1,arr2){


  

  if(arr1.length!==arr2.length){
    return false;
  }

  for(let i=0; i<arr1.length; i++){
    let currentIndex=arr2.indexOf(arr1[i]**2);
    if(currentIndex===-1){
      return false
    }
    arr2.splice(currentIndex,1);
  }
  return  true;
}


function same1(arr1,arr2){
  if(arr1.length!==arr2.length){

    return false;
  }

  let frequencyCounter1={};
  let frequencyCounter2={};


  for(let val of arr1){
    frequencyCounter1[val]=(frequencyCounter1[val]||0)+1;
  }
  
  for(let val of arr2){
    frequencyCounter2[val]=(frequencyCounter2[val]||0)+1;
  }

  for(let key in frequencyCounter1){
    if(!(key**2 in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter1[key**2]!==frequencyCounter2[key]){
      return false;
    }
  }
  return true;
  
}





console.log(same1([1,2,3,2],[4,4,1,9]));