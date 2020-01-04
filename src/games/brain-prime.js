#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import { game, getRandom } from '../gameFlow';

const  isPrime = (num) => {
	if (num < 2) {
		return false;
		} else if (num === 2) {
			return true;
	}
  
	let i = 2;
	const limit = Math.sqrt(num);
	while (i <= limit) {
		if (num % i === 0) {
			return false;
		}
		i +=1;
	}	
	return true;
}

const play = () => {
	const question = () => {
		const expression = getRandom(2);
		return cons(expression, expression);
	}
	const answer = (num) => isPrime(num) ? 'yes' : 'no';
	game(question, answer, 'Answer "yes" if given number is prime. Otherwise answer "no".');
}

play();