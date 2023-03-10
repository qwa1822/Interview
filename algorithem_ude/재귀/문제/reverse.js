function reverse(str){

 if(str.length===0){
  return str;
 }


 return reverse(str.slice(1))+str[0];
}
// hello
// ello h
// llo  e h
// lo l e h

// olleh


console.log(reverse('hello'));