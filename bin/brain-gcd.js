#!/usr/bin/env node

import readlineSync from 'readline-sync';
import StartBG from '../src/cli.js';

const userName = StartBG();
console.log('Find the greatest common divisor of given numbers.');

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const task = () => {
  const num1 = Math.round(Math.random() * 100) + 1;
  const num2 = Math.round(Math.random() * 100) + 1;
  const correctAnswer = gcd(num1, num2).toString();
  return [`${num1} ${num2}`, correctAnswer];
};

let mark = 0;
for (let i = 1; i <= 3; i += 1) {
  const step = task();
  console.log(`Question: ${step[0]}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === step[1]) {
    console.log('Correct!');
    mark += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${step[1]}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

if (mark === 3) {
  console.log(`Congratulations, ${userName}!`);
}