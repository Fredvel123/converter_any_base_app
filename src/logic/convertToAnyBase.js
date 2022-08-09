const mapValueLetter = {
	10: 'A',
	11: 'B',
	12: 'C',
	13: 'D',
	14: 'E',
	15: 'F',
	16: 'G',
	17: 'H',
	18: 'I',
	19: 'J',
	20: 'K',
};

export default function convertToAnyBase(number, base) {
	let index = number;
	const arrOfNumbers = [number];
	while (index >= base) {
		const res = Math.floor(index / base);
		arrOfNumbers.push(res);
		index = res;
	}
	const finalArr = [];
	let finalRes = '';
	for (const number of arrOfNumbers) {
		const result = number % base;
		if (result > 9 && result in mapValueLetter) {
			const resultLetter = mapValueLetter[result];
			finalArr.push(resultLetter);
		} else {
			finalRes += result.toString();
			finalArr.push(result);
		}
	}
	const finalArrofNumbers = finalArr.reverse();

	let result = '';
	for (const number of finalArrofNumbers) {
		result += number;
	}
	return result;
	// console.log(result);
}

// convertToAnyBase('11259375', 16);
