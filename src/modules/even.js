import { cons } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

const isEven = (num) => num % 2 === 0;

export default () => {
  const question = () => {
    const expression = getRandom();
    return cons(expression, expression);
  };
  const answer = (num) => (isEven(num) ? 'yes' : 'no');
  const gameName = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(question, answer, gameName);
};
