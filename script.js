const getUserChoice = () => {
    let userInput = prompt("Enter your choice (rock, paper, or scissors):");
    userInput = userInput ? userInput.toLowerCase() : '';
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      return 'Invalid input';
    }
  }
  
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
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
      return "User wins!";
    } else {
      return "Computer wins!";
    }
  };
  
  const userChoice = 'rock';
  const computerChoice = getComputerChoice();
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
  
  const playGame = () => {
    const userChoice = getUserChoice('rock'); 
    const computerChoice = getComputerChoice();
  
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  