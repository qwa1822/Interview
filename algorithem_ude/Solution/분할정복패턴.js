function search(arr,target){

  for(let i=0; i<arr.length; i++){
    if(arr[i]===target){
      return arr[i]
;
    }
  }
}


console.log(search([1,2,3,4,5,6],4));