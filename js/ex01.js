

const startGameBtn=document.querySelector(".start_game_btn");

const SELECTION_ROCK="ROCK";
const PAPER="PAPER";
const Scissors="SCISSORS";

const RESULT_DRAW="DRAW";
const RESULST_PLAYER_WINS="WIN";

const DEFAULT_USER_CHOICE=SELECTION_ROCK;


let gameisRunning=false;

const getPlayChoice=function(){
  const selection=prompt(`${SELECTION_ROCK} ${PAPER} ${Scissors}}`,"").toUpperCase();

  if(selection!==SELECTION_ROCK
   && selection!==PAPER
    && selection!==Scissors){
      alert('Invalid Choice! We chose Rock for you!');

      return DEFAULT_USER_CHOICE;
  }

  return selection;


};

const getComputerChoice=function(){
 const randomValue=Math.random();
 if(randomValue<0.34){
  return SELECTION_ROCK;
 }else if(randomValue<0.67){
  return PAPER;
 }else{
  return Scissors;
 }

  console.log(num);
}


const getWinner=(user,computer)=>{

  return user===computer?RESULT_DRAW:(computer===SELECTION_ROCK && user===PAPER ||
    computer===Scissors 
    && user===SELECTION_ROCK||
    computer===PAPER && 
    user===Scissors)?RESULST_PLAYER_WINS:"COMputer wins";



}






startGameBtn.addEventListener('click',()=>{

  if(gameisRunning){
    return;
  }
  gameisRunning=true;
  
  console.log('hello');
  const playerSelection=getPlayChoice();    
  const computerChoice=getComputerChoice();

  let winner;
  if(playerSelection){
    winner=getWinner(playerSelection,computerChoice);
  }else{
    winner=getWinner(computerChoice);

  }


  

  let message=`You picked ${playerSelection||DEFAULT_USER_CHOICE} , computer picked ${computerChoice} ,  `
  if(winner===RESULT_DRAW){
    message=message+'had a draw';
  }else if(winner===RESULST_PLAYER_WINS){
    message=message+'won.';
  } else{
    message=message+='lost';

  }
  alert(message);

  gameisRunning=false;
})  



const sumpUp=(...numbers)=>{

let sum=0;
for(const num of numbers){
  sum+=num;
}
return sum;
}

const subtractUp=(...numbers)=>{
  let sum=0;
for(const num of numbers){
  sum-=num;
}
return sum;
}




console.log(sumpUp(1,5,10,-3,6,10));
console.log(subtractUp(1,5,10,-3,6,10));


