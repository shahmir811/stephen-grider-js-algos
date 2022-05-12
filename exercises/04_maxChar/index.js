// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = str => {
	let max = 0;
	let char;

	const obj = {};

	for (const char of str) {
		obj[char] = ++obj[char] || 1;
	}

	for (const key in obj) {
		if (max < obj[key]) {
			max = obj[key];
			char = key;
		}
	}

	return char;
};

module.exports = maxChar;
