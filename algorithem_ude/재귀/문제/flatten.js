function flatten(arr){
  


  return arr.reduce((acc,cur)=>acc.concat(Array.isArray(cur)?flatten(cur):cur),[])
 
}



console.log(flatten([1, 2, 3, [4, 5] ]));
console.log(flatten([1, [2, [3, 4], [[5]]]]))