import { cons, car, cdr } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

const nod = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return nod(m, k);
  }
  return Math.abs(n);
};

export default () => {
  const question = () => {
    const expression = cons(getRandom(), getRandom());
    const view = `${car(expression)} and ${cdr(expression)}`;
    return cons(expression, view);
  };
  const answer = (expression) => {
    const a = car(expression);
    const b = cdr(expression);
    return nod(a, b);
  };
  const gameName = 'Find the greatest common divisor of given numbers.';
  game(question, answer, gameName);
};
