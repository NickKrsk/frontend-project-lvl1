import { cons } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

const operations = ['+', '-', '*'];
const gameDescription = 'What is the result of the expression?';
const chooseOperation = (operations) => operations[getRandom(0, operations.length - 1)];
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
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const operation = chooseOperation(operations);
  const question = `${a} ${operation} ${b}`;
  const answer = calculate(a, b, operation);
  return cons(question, answer);
};

export default () => {
  game(getQuestionAndAnswer, gameDescription);
};
