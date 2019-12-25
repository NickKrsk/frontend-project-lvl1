import readlineSync from 'readline-sync';

export const getRandom = () => Math.floor(1000000 * Math.random());

export const askQuestion = () => {
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
