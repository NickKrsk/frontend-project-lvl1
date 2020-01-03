import readlineSync from 'readline-sync';
import { hello } from './'
import { car, cdr } from '@hexlet/pairs';

export const getRandom = (min = -1000000, max = 1000000) => {//Math.floor(1000000 * Math.random());
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
 
export const game = (question, getAnswer, title) => {
	const name = hello(title);
	for(let i = 0; i < 3; i++) {
		const pair = question();
		const answer = car(pair);
		const view = cdr(pair);
		console.log(`Question: ${view}`); 
		const userAnswer = readlineSync.question("You answer:");
		const correctAnswer = getAnswer(answer);
		if(correctAnswer != userAnswer) {	
			console.log(`"${userAnswer}" is wrong answer ;(. Corect answer was "${correctAnswer}"`);
			console.log(`Let's try again, ${name}`);
			return;	
		}
		console.log('Correct!');		
	} 
	console.log(`Congratulations, ${name}!`);
}


