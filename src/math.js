export const getRandom = (min = -1000000, max = 1000000) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));