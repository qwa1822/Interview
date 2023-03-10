function Solution(str){ 



  let half=Math.floor(str.length/2);

  for(let i=0; i<half; i++){      //문자열의 중간까지만 반복 될수있게
    if(str[i]!==str[str.length-i-1]){ //앞문자와 대칭되는 뒷문자가 서로 일치하지 않는겨우
      return false;
    }
  }
  return true;


}
console.log(Solution('korea'));
console.log(Solution('kayak'));
console.log(Solution('hannah'));