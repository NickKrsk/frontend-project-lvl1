import { cons } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

const isEven = (num) => num % 2 === 0;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandom(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  game(getQuestionAndAnswer, gameDescription);
};
