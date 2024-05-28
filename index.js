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

function getHumanChoice() {
  let choice = prompt(
    "Enter your choice: rock, paper or scissors."
  ).toLowerCase();
  while (true) {
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    } else {
      choice = prompt("Enter valid choice.").toLowerCase();
    }
  }
}

function playRound(computerChoice, humanChoice) {
  let result = `Your choice: ${humanChoice} and computer choice: ${computerChoice} `;
  let computerWinnerStr = "Computer wins!";
  let humanWinnerStr = "Human wins!";
  let noWinnerStr = "No winners!";
  console.log("Playing a round.");
  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    console.log(result + computerWinnerStr);
  } else if (
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    humanScore++;
    console.log(result + humanWinnerStr);
  } else {
    console.log(result + noWinnerStr);
  }
}

playRound(computerChoice, humanChoice);
