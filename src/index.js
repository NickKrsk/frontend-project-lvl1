import readlineSync from 'readline-sync';

export const hello = (title) => {
	console.log("Welcome to the Brain Games!!");
	if(title) {
		console.log(title);
	}
	const name = readlineSync.question("May I have your name?");
	console.log(`Hello, ${name}!`);
	return name;
}

