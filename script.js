let humanScore = 0 
let computerScore = 0

function getComputerChoice(){
  let random = Math.random()

  if (random < 0.33){
    return "rock"
  }else if(random < 0.67){
    return "paper"
  }else{
    return "scissors"
  }
}

console.log(getComputerChoice());

function getHumanChoice(){
  let choice = prompt('paper, rock or scissors');
  return choice
}

console.log(getHumanChoice())