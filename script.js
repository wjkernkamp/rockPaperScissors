function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

let capitalize = function(a) {
    return a[0].toUpperCase() + a.substring(1).toLowerCase();
};

var playerPick = "rock";

var playerSelection = capitalize(playerPick);

function playRound(player, round) {
    console.log("Round" + (round+1));
    const computer = computerPlay();
    console.log(`You pick : ${playerSelection}`);
    console.log(`Computer picked : ${computer}`);
    if (player === computer) {
        return 'tie';
        } else if (player === "Rock" & computer === "Paper") {
            return 'lose';
        } else if (player === "Rock" & computer === "Scissors") {
            return 'win';
        } else if (player === "Paper" & computer === "Scissors") {
            return 'lose';
        } else if (player === "Paper" & computer === "Rock") {
            return 'win';
        } else if (player === "Scissors" & computer === "Rock") {
            return 'lose';
        } else if (player === "Scissors" & computer === "Paper") {
            return 'win';
        }

}

function game() {
    const lose = "You Lose. :(";
    const win = "You Win! :))";
    const tie = "It's a tie. :/";
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
      playerPick = prompt("Yo");
      playerSelection = capitalize(playerPick);
      const result = playRound(playerSelection, i);
      switch (result) {
        case 'win':
          console.log(win);
          playerScore++;
          break;
        case 'lose':
          console.log(lose);
          computerScore++;
          break;
        default:
          console.log(tie);
          playerScore++;
          computerScore++;
          break;
      }
    }
    console.log("Final Results: Player: " + playerScore + " Computer: " + computerScore);
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game.");
    } else {
      console.log("The game was an overall tie.");
    }
  }
  
game();