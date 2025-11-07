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

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}