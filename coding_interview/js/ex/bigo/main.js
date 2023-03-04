const nemo=['nemo'];

const everyone=['dory','bruce','marlin','nemo','gill']
const large=new Array(10000).fill('nemo');
function findNemo(array){

  let t0=performance.now();

  for(let i=0; i<array.length; i++){
    if(array[i]==='nemo'){
      console.log('Found Nemo!');
      break;
    }
  }

  let t1=performance.now();
  console.log('Call to find Nemo took ' +(t1-t0)+"millseconds");

}



findNemo(large)   //O(n)-> linear Time

const boxes=[0,1,2,3,4,5,6];

function logFirstTwoboxs(boxes){

  console.log(boxes[0])   //O(1)
  console.log(boxes[1])   //O(1)
}

logFirstTwoboxs(boxes)    //O(2)