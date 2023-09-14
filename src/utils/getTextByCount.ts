const getTextByCount = (count: number, words: string[]) => {
	const value = Math.abs(Number(count)) % 100;
	const num = value % 10;
	let str = `${count}\u00A0`;
	let without = 'Без ';
	if (num === 0) {
		without += words[2];
		return without;
	}
	if (value > 10 && value < 20) str += words[2];
	else if (num > 1 && num < 5) str += words[1];
	else if (num === 1) str += words[0];
	else str += words[2];

	return str;
};

export const getStopByCount = (count: number) =>
	getTextByCount(count, ['пересадка', 'пересадки', 'пересадок']);
