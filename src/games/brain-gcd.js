#!/usr/bin/env node

import readlineSync from 'readline-sync';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
};

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);

    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = findGCD(number1, number2).toString();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
