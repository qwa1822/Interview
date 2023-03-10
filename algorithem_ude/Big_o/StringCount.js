/**
 * 어떻게 문제를 풀것인가?
 * 이제 문제를 이해한다.
 * 1. 문제를 이해하는것
 * 2. 문제를 해결하는것
 * 
 */
// 1.Can i restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3.what are the outputs that shoud come from the solution to the problem?
// 4.can the outputs be determined from the inputs? In other words, do I have enough information to solve


// 5. How shoudl I label the important pieces of data tha are a part of the problem?
// 



function charCount(str){

  // make object to ruturn at end
  // loop over string
  // return object to and
  let answer;
  for(let i=0; i<str.length; i++){
    if(str[i].toLowerCase()){
       return str.toUpperCase().trim()
    }
  }

  return answer;
}

function charCount2(str){
  

  
  let result={};

  for(let i=0; i<str.length; i++){
    let char=str[i].toLowerCase();

    if(result[char]>0){
      result[char]++;
    }else{
      result[char]=1;
    }
  }
  return result
}

function charCount(str){
  let obj={};

  for(let i=0; i<str.length; i++){
    let char=str[i].toLowerCase();

    if(/[a-z0-9]/.test(char)){
      if(obj[char]>0){
        obj[char]++;
      }else{
        obj[char]=1;
      }
    }
  }
}


function charCount(str){
  let obj={};

  for(let char of str){
     char=char.toLowerCase();

    if(/[a-z0-9]/.test(char)){
    obj[char]=++obj[char]||1;

    }
  }
return obj;
}


function charCount4(str){

  let obj={};

  for(let char of str){
   
    if(isAlphaNumeric(char)){
        char=char.toLowerCase();
        obj[char]=++obj[char]||1;
    }
  }
  return obj;

}

function isAlphaNumeric(char){
  let code=char.charCodeAt(0);

  if(!(code>47 && code <58) &&  //numeric(0-9)
    !(code>65 && code<91) &&  //upper alpha(A-Z)
    !(code>96 && code<123)) {    //lower alpha(a-z)
      return false;
    }
    return true;

  
}







console.log(charCount('your dream'));
console.log(charCount2('youddddwwr dream'));
console.log(charCount2('youddddwwr dream'));


console.log(charCount4("your dream"));