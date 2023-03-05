

let trap=function(height){


  if(!height.length) return 0;

  let sum=0;
  let wallheight=0;
  let maxheight=height[0];
  let heightIndex=0;



  // 가장 높은 인덱스를 찾음
  // find the index of the highest height in heights array
  for(let i=0; i<height.length; i++){
    if(height[i]>maxheight){
      // 최대높이를 i와같게
      maxheight=height[i];
      heightIndex=i;
    } 
  }

  console.log(heightIndex);




  // 현재값이 벽의갚보다 높다면
  // 벽의높이를 현재값으로변경

  // 아니면 sum+=벽의높이-현재값

  // Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]


  

  for(let i=0; i<=heightIndex; i++){
    if(height[i]>wallheight){
      wallheight=height[i]
    }else{
      sum+=wallheight-height[i];
    }
  }

  console.log(sum);

  // 


  wallheight=0;

  for(let i=height.length-1; i>=heightIndex; i--){
    if(height[i]>wallheight){
      wallheight=height[i]
    }else{
      sum+=wallheight-height[i];
    }
  }

  return sum;


  // 모든 높이를 반복

}

console.log(trap([[0,1,0,2,1,0,1,3,2,1,2,1]]));