const K = 22;
const ARR = [10, 15, 18, 24, 38];

const findBestMatch = (k, arr) => {
	if (typeof k !== 'number') {
		throw new Error('k must be number');
	}

	let bestMatch, minDiff;
	arr.forEach((num, i) => {
		const diff = Math.abs(num - k);
		if (i === 0 || diff < minDiff) {
			minDiff = diff;
			bestMatch = num;
		}
	});

	return bestMatch;
}

const bestMatch = findBestMatch(K, ARR);

console.log(bestMatch);
