
function playRound(playerSelection, computerSelection){
// run the game to determine who wins
  console.log("started the function")
  var ans = ""

  if (playerSelection == 'rock') {
    if (computerSelection == 'rock'){
        ans = 'tie';
    }
    else if (computerSelection == 'paper'){
        var ans = 'lose';
    }

    else if (computerSelection == 'sissors'){
         ans = 'win';
    }
  }

  if (playerSelection == 'paper') {
    if (computerSelection == 'rock'){
        ans = 'win';
    }
    else if (computerSelection == 'paper'){
        var ans = 'tie';
    }

    else if (computerSelection == 'sissors'){
         ans = 'lose';
    }
  }

  if (playerSelection == 'sissors') {
    if (computerSelection == 'rock'){
        ans = 'lose';
    }
    else if (computerSelection == 'paper'){
        var ans = 'win';
    }

    else if (computerSelection == 'sissors'){
         ans = 'tie';
    }
  }

  if (ans == 'tie'){
    alert("You tie!  " + playerSelection + " ties " + computerSelection + ".");
  }

  else if (ans == 'win'){
    alert("You wie!  " + playerSelection + " beats " + computerSelection + ".");
  }

  else if (ans == 'tie'){
    alert("You lose!  " + playerSelection + " loses to " + computerSelection + ".");
  }

}

function playerSelection(){
    var playerInput = prompt("Choose 'rock', 'paper', or 'sissors'.");

    var lowerPlayer = playerInput.toLowerCase();

    return lowerPlayer;
}

function computerSelection(){
    var randChoice = Math.floor(Math.random() * 3)

    if (randChoice == 0){
        return 'rock';
    }
    else if (randomChoice == 1){
        return 'paper';
    }
    else {
        return 'sissors';
    }
}

playRound();