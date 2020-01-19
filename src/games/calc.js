import { cons } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

const gameDescription = 'What is the result of the expression?';
const chooseOperations = (operations) => operations[getRandom(0, operations.length - 1)];
const calculate = (a, b, oper) => {
  switch (oper) {
    case '*':
      return a * b;
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const oper = chooseOperations(operations);
  const question = `${a} ${oper} ${b}`;
  const answer = calculate(a, b, oper);
  return cons(question, answer);
};

export default () => {
  game(getQuestionAndAnswer, gameDescription);
};
