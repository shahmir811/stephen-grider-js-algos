// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = str => {
	const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;

	const setString = str.replace(/[^\w]/g, '').toLowerCase();

	for (const char of setString) {
		if (vowelsArr.includes(char)) {
			count++;
		}
	}

	return count;
};

module.exports = vowels;
