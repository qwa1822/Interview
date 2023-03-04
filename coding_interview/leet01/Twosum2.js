




function Solution(arr,target){

   let map=new Map();

   for(let i=0; i<arr.length; i++){
    let key=target-arr[i];
    const getValue=map.get(key);

    if(getValue!==undefined){
      return[getValue,i];
    }
    map.set(arr[i],i);  
   }
}



console.log(Solution([1,3,7,9,2],11));