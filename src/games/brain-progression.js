#!/usr/bin/env node

import { cons, car, cdr } from '@hexlet/pairs';

import { game } from '../gameFlow';
import { getRandom, getRandomInt } from '../math';


const play = () => {
	const question = () => {
        const length = 10;
        const a1 = getRandom();
        const d = getRandom();
        const n = getRandomInt(length);

        const expression = cons(a1, cons(d, n));

        let view = "";
        let a;
        for(let i = 0; i < length; i++) {
            if(i === n) {
                a = '..';
            } else {
                a = a1 + d * i;
            }            
            view +=  ` ${a}`;
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

play();