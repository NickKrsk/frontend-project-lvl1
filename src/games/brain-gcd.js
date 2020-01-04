#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';
import { getRandom } from '../math';
import { game } from '../gameFlow';

const nod = (n, m) => {
    if(m > 0) { 
      var k = n % m;
      return nod(m, k); 
    } 
    else { 
      return Math.abs(n);  
    }
  }

const play = () => {
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
	game(question, answer, 'Find the greatest common divisor of given numbers.');
}

play();