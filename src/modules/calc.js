import { cons, car, cdr } from '@hexlet/pairs';
import game from '../gameFlow';
import getRandom from '../random';

export default () => {
  const operChoice = (operations) => {
    const num = getRandom(0, operations.length);
    switch (num) {
      case 0:
        return '*';
      case 1:
        return '+';
      case 2:
        return '-';
      default:
        return undefined;
    }
  };
  const operations = ['+', '-', '*'];
  const question = () => {
    const a = getRandom();
    const b = getRandom();
    const oper = operChoice(operations);
    const expression = cons(a, cons(b, oper));
    const view = `${a} ${oper} ${b}`;
    return cons(expression, view);
  };
  const answer = (expression) => {
    const a = car(expression);
    const b = car(cdr(expression));
    const oper = cdr(cdr(expression));

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
  const gameName = 'What is the result of the expression?';
  game(question, answer, gameName);
};
