let humanScore = 0;
let computerScore = 0;

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

console.log(getComputerChoice());
const ans = getHumanChoice();
console.log(ans);
