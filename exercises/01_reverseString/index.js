// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// *********************************************** //
// *********************************************** //
// *********************************************** //

// *********************************************** //
// *************** 4th SOLUTION ****************** //
// *********************************************** //

const reverse = str => {
	// using Spread operator
	return [...str].reduce((reversed, char) => char + reversed, '');
};

// *********************************************** //
// *************** 3rd SOLUTION ****************** //
// *********************************************** //

// const reverse = str => {
// 	return str.split('').reduce((reversed, char) => char + reversed, '');
// };

// *********************************************** //
// *************** 2nd SOLUTION ****************** //
// *********************************************** //

// const reverse = str => {
// 	let reversed = '';

// 	for (const character of str) {
// 		reversed = character + reversed;
// 	}

// 	return reversed;
// };

// *********************************************** //
// *************** 1st SOLUTION ****************** //
// *********************************************** //

// const reverse = str => {
// 	return str.split('').reverse().join('');
// };

// *********************************************** //
// ********** RECURSIVE SOLUTION ***************** //
// *********************************************** //

// const reverse = str => {
// 	let newString = '';

// 	const helper = arr => {
// 		if (arr.length === 0) return newString;

// 		newString += arr.pop();
// 		helper(arr);
// 	};

// 	helper(str.split(''));
// 	return newString;
// };

module.exports = reverse;
