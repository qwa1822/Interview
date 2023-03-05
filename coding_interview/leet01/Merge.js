


function mergeSortedArray(array1,array2){
  const mergedArray=[];

  let array1Item=array1[0];
  let array2Item=array2[0];


  // check Input
  if(array1.length===0){
    return array2;
  }
  if(array2.length===0){
    return array1;
  }
  let index=1;
  while(array1Item || array2Item){  // 값이있다면
    // arrayitem이 array2item보다 작을경우
    if(!undefined || array1Item<array2Item){
      //작은값은 push해준다
      mergedArray.push(array1Item)
      array1Item=array1[index]
      index++;
      //만약 0이라는값에서 index가 옮겨가야되는데
      //못옮겨가면 안되기떄문에 index를 ++를 해준다. [0,3,1,2]
      //index++를 해준다.
    }else{
      mergedArray.push(array2Item);
      array2Item=array2[index];
      index++;
    }
  }


  return mergedArray
}


const arr=(arr1,arr2)=>{


  const Sortdata=arr1.concat(arr2);

  return Sortdata.sort((a,b)=>a-b);

}

console.log(arr([0,3,4,31],[4,6,30]));
console.log(mergeSortedArray([0,3,4,31],[4,6,30]));