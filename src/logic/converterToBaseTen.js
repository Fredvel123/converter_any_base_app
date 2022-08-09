const sumArray = (arr) => {
	let result = 0;
	for (const number of arr) {
		result += number;
	}
	return result;
};

const mapValueLetter = {
	a: 10,
	b: 11,
	c: 12,
	d: 13,
	e: 14,
	f: 15,
	g: 16,
	h: 17,
	i: 18,
	j: 19,
	k: 20,
};

export default function converterToBaseten(number, base) {
	if (base === 10) {
		return number;
	}
	const arrOfDigits = Array.from(String(number, Number));
	// base greater than 10
	if (base > 10) {
		for (let i = 0; i < arrOfDigits.length; i++) {
			const items = arrOfDigits[i];
			const itemLowerCase = items.toLowerCase();
			if (itemLowerCase in mapValueLetter) {
				const intNumber = mapValueLetter[itemLowerCase];
				arrOfDigits[i] = intNumber;
			}
		}
	}
	let index = arrOfDigits.length - 1;
	const arrOfFinalNumbers = [];
	for (const number of arrOfDigits) {
		if (number !== '.') {
			arrOfFinalNumbers.push(number * base ** index);
			index -= 1;
		}
	}
	return sumArray(arrOfFinalNumbers);
}

// console.log(converterToBaseten('ab', 16));
