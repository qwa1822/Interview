

function reverse(str){



  return str.split('').reverse().join('');




}

function  reverse2(str){
    // check Input

    if(!str || str.length<2 || typeof str!=='string'){
      return 'hmm that is not good!';
    }

    const backwards=[];
    const totalItems=str.length-1;
    for(let i=totalItems; i>=0; i--){
      backwards.push(str[i])
    }

    return backwards.join('');  //배열을 문자열로

}

const reverse3=str=>[...str].split('').reverse().join('');

console.log(reverse('Hi my Name is andrei!'));
console.log(reverse2('Hi my Name is andrei!'));