#!/usr/bin/env node

import readlineSync from 'readline-sync';
import StartBG from '../src/cli.js';

const userName = StartBG();
console.log('What number is missing in the progression?');

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const task = () => {
  const start = Math.floor(Math.random() * 50) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const length = Math.floor(Math.random() * 6) + 5;
  const progression = generateProgression(start, step, length);
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[hiddenIndex].toString();
  
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  
  return [question, correctAnswer];
};

let correctAnswers = 0;
const roundsCount = 3;

for (let i = 0; i < roundsCount; i += 1) {
  const [question, correctAnswer] = task();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

if (correctAnswers === roundsCount) {
  console.log(`Congratulations, ${userName}!`);
}