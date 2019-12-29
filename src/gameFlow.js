import readlineSync from 'readline-sync';
import { hello } from './'

export const getRandom = () => Math.floor(1000000 * Math.random());

export const game = (askQuestion, title) => {
	const name = hello(title);
	for(let i = 0; i < 3; i++) {
		if(!askQuestion()) {	
		console.log(`Let's try again, ${name}`);	
		return;	
		}
	} 
}


