import { cons } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  } if (num === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandom(2);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  const gameName = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(getQuestionAndAnswer, gameName);
};
