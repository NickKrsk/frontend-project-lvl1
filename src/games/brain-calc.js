#!/usr/bin/env node
import { game, getRandom, getRandomInt } from '../gameFlow';
import { cons, car, cdr, toString } from '@hexlet/pairs';

const pair = cons(3, 5);
car(pair); // 3
cdr(pair); // 5
toString(pair); // (3, 5)

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
        //console.log(toString(expression));
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
	//const answer = (num) => !(num % 2) ? 'yes' : 'no';
    game(question, answer, 'What is the result of the expression?');
}

play();