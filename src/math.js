export const getRandom = (min = -1000000, max = 1000000) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
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
		i += 1;
	}
	return true;
}

export const nod = (n, m) => {
	if (m > 0) {
		var k = n % m;
		return nod(m, k);
	}
	else {
		return Math.abs(n);
	}
}