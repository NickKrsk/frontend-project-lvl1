import { cons, car, cdr } from '@hexlet/pairs';
import { game } from './gameFlow';
import { getRandom, isEven, isPrime, nod } from './math';

export const brainEven = () => {
    const question = () => {
        const expression = getRandom();
        return cons(expression, expression);
    }
    const answer = (num) => isEven(num) ? 'yes' : 'no';
    const gameName = 'Answer "yes" if the number is even, otherwise answer "no".';
    game(question, answer, gameName);
}

export const brainCalc = () => {
    const operChoice = (operations) => {
        const num = getRandom(0, operations.length);
        switch (num) {
            case 0:
                return "*";
            case 1:
                return "+";
            case 2:
                return "-";
        }
    }
    const operations = ['+', '-', '*'];
    const question = () => {
        const a = getRandom();
        const b = getRandom();
        const oper = operChoice(operations);
        const expression = cons(a, cons(b, oper));
        const view = `${a} ${oper} ${b}`;
        return cons(expression, view);
    }
    const answer = (expression) => {
        const a = car(expression);
        const b = car(cdr(expression));
        const oper = cdr(cdr(expression));

        switch (oper) {
            case "*":
                return a * b;
            case "+":
                return a + b;
            case "-":
                return a - b;
        }
    }
    const gameName = 'What is the result of the expression?';
    game(question, answer, gameName);
}

export const brainGcd = () => {    
    const question = () => {
        const expression = cons(getRandom(), getRandom());
        const view = `${car(expression)} and ${cdr(expression)}`;
        return cons(expression, view);
    }
    const answer = (expression) => {
        const a = car(expression);
        const b = cdr(expression);
        return nod(a, b);
    }
    const gameName = 'Find the greatest common divisor of given numbers.';
    game(question, answer, gameName);
}

export const brainPrime = () => {
    const question = () => {
        const expression = getRandom(2);
        return cons(expression, expression);
    }
    const answer = (num) => isPrime(num) ? 'yes' : 'no';
    const gameName = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    game(question, answer, gameName);
}

export const brainProgression = () => {
    const length = 10;
    const question = () => {
        const a1 = getRandom();
        const d = getRandom();
        const n = getRandom(0, length);

        const expression = cons(a1, cons(d, n));

        let view = "";
        let a;
        for (let i = 0; i < length; i++) {
            if (i === n) {
                a = '..';
            } else {
                a = a1 + d * i;
            }
            view += ` ${a}`;
        }
        return cons(expression, view);
    }
    const answer = (expression) => {
        const a1 = car(expression);
        const d = car(cdr(expression));
        const n = cdr(cdr(expression));
        return a1 + d * n;
    }
    game(question, answer, 'What number is missing in the progression?');
}