#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

import { game, getRandom } from '../gameFlow';
//import { hello } from '..';

const play = () => {
	const question = () => {
		const expression = getRandom();
		return cons(expression, expression);
	}
	const answer = (num) => !(num % 2) ? 'yes' : 'no';
	console.log(question);
	game(question, answer, 'Answer "yes" if the number is even, otherwise answer "no".');
}

play();

