import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const numberOfGames = 3;

export default (getQuestionAndAnswer, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < numberOfGames; i += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    const question = car(questionAndAnswer);
    const correctAnswer = String(cdr(questionAndAnswer));
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer:');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Corect answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
