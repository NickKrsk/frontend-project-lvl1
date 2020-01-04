#!/usr/bin/env node
import { game } from '../gameFlow';
import { getRandom, getRandomInt } from '../math';
import { cons, car, cdr } from '@hexlet/pairs';

const operChoice = () => {
    const num = getRandomInt(3);
    switch(num) {
        case 0:  
            return "*";      
        case 1:  
            return "+";
        case 2:
            return "-";
    }
}

const play = () => {
	const question = () => {
        const a = getRandom();
        const b = getRandom();
        const oper = operChoice();
        const expression = cons(a, cons(b, oper));
        const view = `${a} ${oper} ${b}`;
        return cons(expression, view);
    }
    const answer = (expression) => {
        const a = car(expression);
        const b = car(cdr(expression));
        const oper = cdr(cdr(expression));

        switch(oper) {
            case "*":  
                return a * b;
            case "+":  
                return a + b;                   
            case "-":
                return a - b;
        }
    }
  game(question, answer, 'What is the result of the expression?');
}

play();