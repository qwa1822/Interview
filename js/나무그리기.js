


function Solution(arr){


  let result='\n';

  for(let i=0; i<arr; i++){
    for(let j=0; j<arr-i-1; j++){
      result+=" "
    }
   

    for(let k=0; k<i*2+1; k++){
    result+='*'
    }



    result+='\n';
   
  }


  
return result;

}











console.log(Solution(3));
console.log(Solution(5));
console.log(Solution(7));