import { cons } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

const lengthProgression = 10;
const gameDescription = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const firstElement = getRandom(0, 100);
  const diff = getRandom(0, 100);
  const hiddenElementPosition = getRandom(0, lengthProgression);

  let question = '';
  const answer = firstElement + diff * hiddenElementPosition;
  for (let i = 0; i < lengthProgression; i += 1) {
    if (i === hiddenElementPosition) {
      question = `${question} .. `;
    } else {
      const currentElement = firstElement + diff * i;
      question = `${question} ${currentElement}`;
    }
  }
  return cons(question, answer);
};

export default () => {
  game(getQuestionAndAnswer, gameDescription);
};
