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

export default () => {
  const question = () => {
    const expression = getRandom(2);
    return cons(expression, expression);
  };
  const answer = (num) => (isPrime(num) ? 'yes' : 'no');
  const gameName = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(question, answer, gameName);
};
