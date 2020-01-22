import { cons } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

const gameDescription = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const length = 10;
  const firstElement = getRandom(0, 100);
  const diff = getRandom(0, 100);
  const hiddenElementPosition = getRandom(0, length);

  let question = '';
  let currentElement;
  let answer;
  for (let i = 0; i < length; i += 1) {
    currentElement = firstElement + diff * i;
    if (i === hiddenElementPosition) {
      answer = currentElement;
      question = `${question} .. `;
    } else {
      question += `${question} ${currentElement}`;
    }
  }
  return cons(question, answer);
};

export default () => {
  game(getQuestionAndAnswer, gameDescription);
};
