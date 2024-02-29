import readlineSync from 'readline-sync';

const playGame = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);

  const roundsToWin = 3;
  let roundsPlayed = 0;

  while (roundsPlayed < roundsToWin) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
    roundsPlayed += 1;
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;
