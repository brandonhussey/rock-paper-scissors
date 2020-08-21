const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  //select a random index from array
  let random = Math.floor(Math.random() * choices.length);

  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == computerSelection) {
    return "Tie game!";
  }

  return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  let i = 0;

  while (i < 5) {
    let round = playRound(
      prompt("Make a selection: rock, paper, or scissors"),
      computerPlay()
    );

    console.log(round);

    if (round.includes("win")) {
      playerWins++;
    } else if (round.includes("lose")) {
      computerWins++;
    }

    i++;
  }

  if (playerWins > computerWins) {
    console.log("Game over, you win!!!");
  } else if (computerWins > playerWins) {
    console.log("Game over, you lose!");
  } else {
    console.log("Game over, tie!");
  }
}

game();
