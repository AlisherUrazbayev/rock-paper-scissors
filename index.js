function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      break;
  }
}

function playRound(computerChoice, humanChoice) {
  let computerWinnerStr = "Computer wins!";
  let humanWinnerStr = "Human wins!";
  let noWinnerStr = "No winners!";

  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    return computerWinnerStr;
  } else if (
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    humanScore++;
    return humanWinnerStr;
  } else {
    return noWinnerStr;
  }
}

function playGame() {
  const btnPlay = document.querySelector("#btn-play");
  const btnRock = document.querySelector("#btn-rock");
  const btnPaper = document.querySelector("#btn-paper");
  const btnScissors = document.querySelector("#btn-scissors");
  const humanScoreContainer = document.querySelector(".human-score-text");
  const computerScoreContainer = document.querySelector(".computer-score-text");
  const resultContaner = document.querySelector(".result-screen-text");

  humanScoreContainer.textContent = humanScore;
  computerScoreContainer.textContent = computerScore;

  btnRock.addEventListener("click", () => {
    let cpChoice = getComputerChoice();
    let result = playRound(cpChoice, "rock");
    humanScoreContainer.textContent = humanScore;
    computerScoreContainer.textContent = computerScore;
    resultContaner.textContent = result;
  });
  btnPaper.addEventListener("click", () => {
    let cpChoice = getComputerChoice();
    let result = playRound(cpChoice, "paper");
    humanScoreContainer.textContent = humanScore;
    computerScoreContainer.textContent = computerScore;
    resultContaner.textContent = result;
  });
  btnScissors.addEventListener("click", () => {
    let cpChoice = getComputerChoice();
    let result = playRound(cpChoice, "scissors");
    humanScoreContainer.textContent = humanScore;
    computerScoreContainer.textContent = computerScore;
    resultContaner.textContent = result;
  });

  btnPlay.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    humanScoreContainer.textContent = humanScore;
    computerScoreContainer.textContent = computerScore;
    resultContaner.textContent = "-";
    console.log("New Game started");
  });
}

var humanScore = 0;
var computerScore = 0;

playGame();
