import { cons } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

const nod = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return nod(m, k);
  }
  return Math.abs(n);
};

const getQuestionAndAnswer = () => {
  const a = getRandom();
  const b = getRandom();
  const question = `${a} and ${b}`;
  const answer = nod(a, b);
  return cons(question, answer);
};

export default () => {
  const gameName = 'Find the greatest common divisor of given numbers.';
  game(getQuestionAndAnswer, gameName);
};
