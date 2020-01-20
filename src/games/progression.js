import { cons } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

const gameDescription = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const length = 10;
  const a1 = getRandom(0, 100);
  const d = getRandom(0, 100);
  const n = getRandom(0, length);

  let question = '';
  let sequenceSum;
  let answer;
  for (let i = 0; i < length; i += 1) {
    sequenceSum = a1 + d * i;
    if (i === n) {
      answer = sequenceSum;
      question = `${question} .. `;
    } else {
      question += `${question} ${sequenceSum}`;
    }
  }
  return cons(question, answer);
};

export default () => {
  game(getQuestionAndAnswer, gameDescription);
};