#!/usr/bin/env node

import readlineSync from 'readline-sync';
import StartBG from '../src/cli.js';

const userName = StartBG();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const task = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

let correctAnswers = 0;
const roundsCount = 3;

for (let i = 0; i < roundsCount; i += 1) {
  const [question, correctAnswer] = task();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

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