


// function validAnagram(str1,str2){



//   let result={};
//   let result2={};
//   for(let x of str1){
//       x=x.toLowerCase();

//       if(result[x]>0){
//         result[x]++;
//       }else{
//         result[x]=1;
//       }
//   }
 
//   for(let b of str2){
//       b=b.toLowerCase();

//       if(result2[b]>0){
//         result2[b]++;
//       }else{
//         result2[b]=1;
//       }
//   }
//   return result2;
// }
// function validAnagram2(str1,str2){


//   let fre1={};

//   let fre2={}

//   for(let x of str1){
//     fre1[x]=(fre1[x]||0)+1;
//   }
//   for(let j of str2){
//     fre2[j]=(fre2[j]||0)+1;
//   }



//   for(let key in fre1){
//     if(!(key in fre2)){
//       return false;
//     }
//     if(fre1[key]!==fre2[key]){
//       return false;
//     }

//     return true;
//   }
  
// }

// console.log(validAnagram('',''));
// console.log(validAnagram('aaz','zza'));
// console.log(validAnagram('rat','car'));
// console.log(validAnagram2('rat','car'));
// console.log(validAnagram2('awesome','awesom'));
// console.log(validAnagram2('qwerty','qeywrt'));



// function validAnagram(first,second){


//   if(first.length!==second.length){
//     return false;
//   }

//   const lookup={};

//   for(let i=0; i<first.length; i++){
//     let letter=first[i];

//     lookup[letter]?lookup[letter]+=1:lookup[letter]=1;
//   }


//   for(let i=0; i<second.length; i++){
//     let letter=second[i];

//     if(!lookup[letter]){
//       return false;
//     }else{
//       lookup[letter]-=1;
//     }
//   }

//   return true;


// }



function validAnagram(first,second){




  // 문자열의 개수를 추가
  // 객체로 함

  let result={};

  for(let i=0; i<first.length; i++){
    let letter=first[i];

// 있다면 1씩 추가하거나 아니면 1로 초기화
    result[letter]?result[letter]+=1:result[letter]=1;
  }

  for(let j=0; j<second.length; j++){
    let letter=second[j];

    if(!result[letter]){
      return false;
    }
    result[letter]-=1;
  }

  return true;

}

console.log(validAnagram('anagram','nagaram'));