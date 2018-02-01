
function playRound(playerSelection, computerSelection){
    // Determine who wins, or if there is a tie
    if (playerSelection === computerSelection){
        return 'tie'
    }
    else if (playerSelection === 'rock'){
        if(computerSelection === 'scissors'){
            return 'win'
        } else{
            return 'lose'
        }
    }else if (playerSelection === 'scissors'){
        if( computerSelection === 'paper'){
            return 'win'
        } else{
            return 'lose'
        }
    }else if (playerSelection === 'paper'){
        if( computerSelection === 'rock'){
            return 'win'
        } else{
            return 'lose'
        }
    }
  }

  function computerPlay(){
    // randomly assigns the computer a choice of rock, paper or scissors
      var randChoice = Math.floor(Math.random() * 3)

      if (randChoice == 0){
        return 'rock';
      } else if (randChoice == 1){
        return 'paper';
      } else {
        return 'scissors';
      }
  }

function game(e){
    // Player and computer choose
    var playerChoice = e.target.className;
    var computerChoice = computerPlay();
    var determination = playRound(computerChoice, playerChoice);
    
    // writes to screen the results of the round
    if (determination === 'win'){
        const playerWin = document.querySelector('.playerWins')
        var playerText = playerWin.innerHTML.split(' ');
        playerText[3] = parseInt(playerText[3]) + 1;
        playerWin.textContent = playerText.join(' ');
    } else if (determination ==='lose'){
        const compWin = document.querySelector('.compWins')
        var compText = compWin.innerHTML.split(' ');
        compText[4] = parseInt(compText[4]) + 1;
        compWin.textContent = compText.join(' ');
    } else {
        const ties = document.querySelector('.ties')
        var tieText = ties.innerHTML.split(' ');
        tieText[3] = parseInt(tieText[3]) + 1;
        ties.textContent = tieText.join(' ');
    }
    
}

function clearAll(){
    // resets screen to start
    const compReset = document.querySelector('.compWins');
    const playerReset = document.querySelector('.playerWins');
    const tieReset = document.querySelector('.ties');
    compReset.textContent = 'The computer has won: 0 Games';
    playerReset.textContent = 'Player has won: 0 Games';
    tieReset.textContent = 'Number of ties: 0 Games';
}

//create event listener for refresh button
const reset = document.querySelector('.refresh');
reset.addEventListener('click', clearAll);

//create event listeners on the 3 images
const images = document.querySelectorAll('img');
images.forEach(image => {
   image.addEventListener('click', game);
});