


function StringCount(arr){


  let obj={};

  for(let i=0; i<arr.length; i++){
    let char=arr[i].toLowerCase();


    if(obj[char]>0){
      obj[char]++;
    }else{
      obj[char]=1;
    }
  }
  return obj;
}


function StringCount2(arr){

    let obj={};

    for(let x of arr){
      x=x.toLowerCase();

      if(obj[x]>0){
        obj[x]++;
      }else{
        obj[x]=1;
      }
    }
    return obj;
}
function StringCOunt3(arr){
  let obj={};

  for(let x of arr){
    x=x.toLowerCase();

    if(/[a-z0-9]/.test(x)){
      obj[x]=++obj[x]||1;
    }
  }
  return obj;


  
}





console.log(StringCount('hello world'));
console.log(StringCount2('hello world'));
console.log(StringCOunt3('hello world'));