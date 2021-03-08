let pcScore = 0;
let playerScore = 0;

const startGame = () => {
    const playBtn = document.querySelector('.intro-button');
    const intro = document.querySelector('.intro');
    const game = document.querySelector('.game');

    playBtn.addEventListener('click', () => {
        intro.classList.add('easeOut');
        game.classList.add('easeIn');
    })
}

const playGame = () => {
    const options = document.querySelectorAll('.option-button');
    const playerHand = document.querySelector('.player-hand');
    const pcHand = document.querySelector('.pc-hand');

    const pcOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
        option.addEventListener('click', function() {
            //console.log(this.textContent);

            let pcNumber = Math.round(Math.random() * 2);
            let computerChoice = pcOptions[pcNumber];

            setTimeout(() => {
                compareHands(this.textContent, computerChoice);

                playerHand.src = `img/${this.textContent}.png`;
                pcHand.src = `img/${computerChoice}.png`;
            }, 100);
        })
    })
}

const updateScore = () => {
    let pScore = document.querySelector('.player-score p');
    let computerScore = document.querySelector('.pc-score p');

    pScore.textContent = playerScore;
    computerScore.textContent = pcScore;
}

const compareHands = (playerChoice, computerChoice) => {
    let text = document.querySelector('.h2');

    if(playerChoice == computerChoice) {
        text.textContent = 'Draw!';
    }

    if((playerChoice == 'rock') && (computerChoice == 'scissors')) {
        text.textContent = 'You win!';
        playerScore++;
        updateScore();
        return;
    } else if((playerChoice == 'rock') && (computerChoice == 'paper')) {
        text.textContent = 'Computer wins!';
        pcScore++;
        updateScore();
        return;
    }

    if((playerChoice == 'paper') && (computerChoice == 'rock')) {
        text.textContent = 'You win!';
        playerScore++;
        updateScore();
        return;
    } else if((playerChoice == 'paper') && (computerChoice == 'scissors')) {
        text.textContent = 'Computer wins!';
        pcScore++;
        updateScore();
        return;
    }

    if((playerChoice == 'scissors') && (computerChoice == 'paper')) {
        text.textContent = 'You win!';
        playerScore++;
        updateScore();
        return;
    } else if((playerChoice == 'scissors') && (computerChoice == 'rock')) {
        text.textContent = 'Computer wins!';
        pcScore++;
        updateScore();
        return;
    }
}

startGame();
playGame();
updateScore();