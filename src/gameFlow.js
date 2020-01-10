import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (question, getAnswer, title) => {
  console.log('Welcome to the Brain Games!');
  console.log(title);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  const numberOfGames = 3;
  for (let i = 0; i < numberOfGames; i += 1) {
    const pair = question();
    const answer = car(pair);
    const view = cdr(pair);
    console.log(`Question: ${view}`);
    const userAnswer = readlineSync.question('You answer:');
    const correctAnswer = getAnswer(answer);
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Corect answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
