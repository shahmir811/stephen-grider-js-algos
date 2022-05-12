// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// *********************************************** //
// *********************************************** //
// *********************************************** //

// *********************************************** //
// *************** 2nd SOLUTION ****************** //
// *********************************************** //

const palindrome = str => {
	return str.split('').every((char, index) => char === str[str.length - 1 - index]);
};

// *********************************************** //
// *************** 1st SOLUTION ****************** //
// *********************************************** //

// const palindrome = str => {
// 	const reversed = str.split('').reverse().join('');

// 	return str === reversed;
// };

// *********************************************** //
// ********** RECURSIVE SOLUTION ***************** //
// *********************************************** //

// const palindrome = str => {
// 	let reversed = '';

// 	const helper = arr => {
// 		if (arr.length === 0) return reversed;

// 		reversed += arr.pop();
// 		helper(arr);
// 	};

// 	helper(str.split(''));
// 	return reversed === str;
// };

module.exports = palindrome;
