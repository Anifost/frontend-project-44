#!/usr/bin/env node

import readlineSync from 'readline-sync';

const generateProgression = () => {
  const progressionLength = 10;
  const startNumber = Math.floor(Math.random() * 100);
  const difference = Math.floor(Math.random() * 10) + 1;
  const progression = [startNumber];

  for (let i = 1; i < progressionLength; i += 1) {
    const nextNumber = progression[i - 1] + difference;
    progression.push(nextNumber);
  }

  return progression;
};

const hideElement = (progression) => {
  const indexToHide = Math.floor(Math.random() * progression.length);
  const hiddenProgression = [...progression];
  hiddenProgression[indexToHide] = '..';
  return { hiddenProgression, hiddenElement: progression[indexToHide] };
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const progression = generateProgression();
    const { hiddenProgression, hiddenElement } = hideElement(progression);

    console.log(`Question: ${hiddenProgression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = hiddenElement.toString();

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
