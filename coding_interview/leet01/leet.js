function Solution(a,b)
{

  let result=[]
  let arrItem1=a[0];
  let arrItem2=a[0];

  if(a.length===0){
    return b;
  }if(b.length===0){
    return a;
  }


  let index=1;

  while(arrItem1 || arrItem2){
    if(arrItem1<arrItem2){
      const let1=arrItem1[index];
      result.push(let1);
      index++;
    }else{
      const let2=arrItem2[index];
      result.push(let2)
      index++;
    }
  }




   
}


console.log(Solution([0,3,4,31],[4,6,30]));




function Solution2(arr1,arr2){


  let map={};

  for(let i=0; i<arr1.length; i++){
    map[arr1[i]]=true;
  }


  for(let j=0; j<arr2.length; j++){
    if(map[arr2[j]]===map[arr1[j]]){
      return map[arr2[j]];
    }else{
      return false;
    }
  }
}


console.log(Solution2(['a','b','c','x'],['z','f','d']));


console.log(Solution2(['a','b','c','x'],['g','f','g']));

