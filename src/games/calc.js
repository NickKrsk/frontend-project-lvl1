import { cons } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

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
      return undefined;
  }
};

const getQuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const a = getRandom();
  const b = getRandom();
  const oper = chooseOperations(operations);
  const question = `${a} ${oper} ${b}`;
  const answer = calculate(a, b, oper);
  return cons(question, answer);
};

export default () => {
  const gameName = 'What is the result of the expression?';
  game(getQuestionAndAnswer, gameName);
};
