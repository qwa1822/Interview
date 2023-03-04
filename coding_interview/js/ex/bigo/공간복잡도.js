function boooo(n){
  for(let i=0; i<n.length; i++){
    console.log('boooooo!');
  }
}


boooo([1,2,3,4,5]);  //O(1)


function arrayOfHintTImes(n){
  let hiArray=[];

  for(let i=0; i<n.length; i++){
    hiArray[i]='hi';
  }
  return hiArray;     //O(n)
}


const array=[{
  tweet:'hi',
  date:2012,},
  {tweet:'my',
  date:2014},
  {tweet:'teddy',
date:2013}];

array[0];   //O(1)
array[array.length-1];    //O(1)
