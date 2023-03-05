


// const array1=['a','b','c','x'];
// const array2=['z','y','i]

function Solution(arr1,arr2){

  for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){

      if(arr1[i]==arr2[j]){
        return true;
      }
    }
  }
  return false;

}


function Solution2(arr1,arr2){
  let sum=new Map();



  for(let i=0; i<arr1.length; i++){
    if(!sum[arr1[i]]){
      const item=arr1[i];
      sum[item]=true;
    }
  }
  for(let j=0; j<arr2.length; j++){
    if(sum[arr2[j]]){
      return true;
    }
  }
  return false;

}

function reverse(arr){
  return arr.split('').reverse().join('');
}

function reverse2(arr){
  
  let result=[];
  for(let i=arr.length-1; i>=0; i--){
    result.push(arr[i]);
  }
  return result.join('');
}




console.log(reverse('Hi my Name is andrei!'));
console.log(reverse2('Hi my Name is andrei!'));






console.log(Solution(['a','b','c','x'],['z','f','c']));


console.log(Solution2(['a','b','c','x'],['a','f','g']));