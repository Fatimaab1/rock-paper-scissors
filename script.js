const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock') {
        return userInput;
    } else if (userInput === 'paper') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error, enter: rock, paper or scissors');
    }
}

//console.log(getUserChoice('rock'));
//console.log(getUserChoice('hello'));


// computer choice 
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

//console.log(getComputerChoice());
//console.log(getComputerChoice());
//console.log(getComputerChoice());


// comparing both user and computer choice
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations you won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }
};

//console.log(determineWinner('rock', 'scissors'));
//console.log(determineWinner('paper', 'scissors'));
//console.log(determineWinner('rock', 'rock'));



const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame()


// Display Results

const startGame = () => {
    const userChoice = getUserChoice(event.target.id);
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    const resultText = document.getElementById("result-message");
    const userChoiceText = document.getElementById("user-choice");
    const computerChoiceText = document.getElementById("computer-choice");


    resultText.textContent = result;
    userChoiceText.textContent = userChoice;
    computerChoiceText.textContent = computerChoice;
}
