import { cons } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGCD = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return getGCD(m, k);
  }
  return Math.abs(n);
};

const getQuestionAndAnswer = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const question = `${a} and ${b}`;
  const answer = getGCD(a, b);
  return cons(question, answer);
};

export default () => {
  game(getQuestionAndAnswer, gameDescription);
};
