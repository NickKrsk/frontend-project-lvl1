import { cons } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandom();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  const gameName = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(getQuestionAndAnswer, gameName);
};
