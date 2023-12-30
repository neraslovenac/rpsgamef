function makeChoice(playerSelection) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById('player-choice').textContent = playerSelection;
  document.getElementById('computer-choice').textContent = computerSelection;

  const result = getResult(playerSelection, computerSelection);
  updateScore(result);
  displayResult(result);
}

function getResult(player, computer) {
  if (player === computer) {
    return 'draw';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function updateScore(result) {
  const playerScore = document.getElementById('player-score');
  const computerScore = document.getElementById('computer-score');

  if (result === 'win') {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (result === 'lose') {
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
  }
}

function displayResult(result) {
  const resultText = document.getElementById('result-text');

  if (result === 'win') {
    resultText.textContent = 'You win!';
    resultText.style.color = 'green';
  } else if (result === 'lose') {
    resultText.textContent = 'You lose!';
    resultText.style.color = 'red';
  } else {
    resultText.textContent = 'It\'s a draw.';
    resultText.style.color = 'black';
  }
}

