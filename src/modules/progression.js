import { cons, car, cdr } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

export default () => {
  const length = 10;
  const question = () => {
    const a1 = getRandom();
    const d = getRandom();
    const n = getRandom(0, length);

    const expression = cons(a1, cons(d, n));

    let view = '';
    let a;
    for (let i = 0; i < length; i += 1) {
      if (i === n) {
        a = '..';
      } else {
        a = a1 + d * i;
      }
      view += ` ${a}`;
    }
    return cons(expression, view);
  };
  const answer = (expression) => {
    const a1 = car(expression);
    const d = car(cdr(expression));
    const n = cdr(cdr(expression));
    return a1 + d * n;
  };
  game(question, answer, 'What number is missing in the progression?');
};
