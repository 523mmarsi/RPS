
//Store DOM elements as JS Variables//
let pScoreboard = document.querySelector('.p-count')
let cScoreboard = document.querySelector('.c-count')
let roundResult = document.querySelector('.roundResultDisplay')
//setting score variables//
let playerScore = 0;
let computerScore = 0;
//initializing global variables to store user and computer selection//
let computerChoice;
let playerChoice;
//function that will store the computer's selection as a variable//
function compChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = computerOptions[randomNum];
}
//reset button//
function reset() {
 playerScore = 0;
 computerScore = 0;
 pScoreboard.innerHTML = playerScore;
 cScoreboard.innerHTML = computerScore;
}

//function to run when user chooses rock//
 function throwRock() {
   playerChoice = "rock";
   compChoice();
   playGame(playerChoice, computerChoice);
 }
 //function to run when user chooses paper//
 function throwPaper() {
   playerChoice = "paper";
   compChoice();
   playGame(playerChoice, computerChoice);
 }
 //function to run when user chooses scissors//
 function throwScissors() {
   playerChoice = "scissors";
   compChoice();
   playGame(playerChoice, computerChoice);
 }

 //what happens when player wins//
function playerWin() {
  playerScore++;
  pScoreboard.innerHTML = playerScore;
  roundResult.innerHTML = "Player Wins!"
}

//what happens when computer wins//
function compWin() {
  computerScore++;
  cScoreboard.innerHTML = computerScore;
  roundResult.innerHTML = "Computer Wins!"
}

 //game if else//
 function playGame(player, computer) {
   if (player === computer){
     roundResult.innerHTML = "Its a tie!"
   }
   else if (player === "rock" && computer === "scissors"){
     playerWin();
   }
   else if (player === "paper" && computer === "rock"){
     playerWin();
   } else if (player === "scissors" && computer === "paper"){
      playerWin();
    }
    else {
      compWin();
    }
 }
