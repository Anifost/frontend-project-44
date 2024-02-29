#!/usr/bin/env node

import readlineSync from 'readline-sync';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

const calculateExpression = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);
    const operator = generateRandomOperator();

    const expression = `${num1} ${operator} ${num2}`;
    console.log(`Question: ${expression}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = calculateExpression(num1, operator, num2);
    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
