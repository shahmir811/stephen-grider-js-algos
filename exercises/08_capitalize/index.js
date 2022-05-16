// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = str => {
	const charToUpperCase = str => str[0].toUpperCase() + str.slice(1);

	const array = str.split(' ');
	let temp = [];

	for (const element of array) {
		temp.push(charToUpperCase(element));
	}

	const final = temp.join(' ');
	return final;
};

module.exports = capitalize;
