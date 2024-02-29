import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (num) => num % 2 === 0;

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const correctAnswersCount = 3;
  let correctAnswers = 0;

  while (correctAnswers < correctAnswersCount) {
    const questionNumber = getRandomNumber(1, 100);
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
