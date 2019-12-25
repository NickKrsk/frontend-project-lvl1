#!/usr/bin/env node

import { askQuestion } from './askNumber';
import index from '..';

const play = () => {
	const name = index();
	console.log('Answer "yes" if the number is even, otherwise answer "no".');

	for(let i = 0; i < 3; i++) {
		if(!askQuestion()) {	
		console.log(`Let's try again, ${name}`);	
		return;	
		}
	}
	console.log(`Congratulations, ${name}!`);
}

play();



