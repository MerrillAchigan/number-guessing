let score = { wins: 0, losses: 0 };
let number = Math.floor(Math.random() * 100) + 1;
const checkButton = document.getElementById('checkButton');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

  checkButton.addEventListener('click', () => {
    const playerNumber = parseInt(document.getElementById('number').value);

    if (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 100) {
      resultDisplay.textContent = "Please enter a valid number (1-100)!";
      return;
    }

    if (playerNumber === number) {
      score.wins++;
      resultDisplay.textContent = `You win! The number was ${number}.`;
      resultDisplay.className = "text-green-500 text-center mt-5 text-xl";
    } else {
      score.losses++;
      resultDisplay.textContent = `You lose! The number was ${number}.`;
      resultDisplay.className = "text-red-500 text-center mt-5 text-xl";
    }

    scoreDisplay.textContent = `Wins: ${score.wins} | Losses: ${score.losses}`;

    number = Math.floor(Math.random() * 100) + 1;
    document.getElementById('number').value = '';
  });
