#!/usr/bin/env node

import { game, getRandom } from '../gameFlow';
//import { hello } from '..';
import readlineSync from 'readline-sync';

const play = () => {
	/*const name = hello();
	console.log('Answer "yes" if the number is even, otherwise answer "no".');

	for(let i = 0; i < 3; i++) {
		if(!askQuestion()) {	
		console.log(`Let's try again, ${name}`);	
		return;	
		}
	}
	console.log(`Congratulations, ${name}!`);*/

	const askQuestion = () => {
		const number = getRandom();
		const isEven = !(number % 2);
		const correctAnswer = (isEven ? 'yes' : 'no');
		console.log(`Question: ${number}`); 
		const answer = readlineSync.question("You answer:");
		if(answer === correctAnswer) {
			console.log('Correct!');
			return true;	
		}
		console.log(`"${answer}" is wrong answer ;(. Corect answer was "${correctAnswer}"`);
		return false;
	}

	game(askQuestion, 'Answer "yes" if the number is even, otherwise answer "no".');
}

play();
