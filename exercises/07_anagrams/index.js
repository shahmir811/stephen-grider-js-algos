// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// *********************************************** //
// *********************************************** //
// *********************************************** //

// *********************************************** //
// *************** 2nd SOLUTION ****************** //
// *********************************************** //

const anagrams = (stringA, stringB) => {
	const cleanString = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

	return cleanString(stringA) === cleanString(stringB);
};

// *********************************************** //
// *************** 1st SOLUTION ****************** //
// *********************************************** //

// const anagrams = (stringA, stringB) => {
// 	const objA = {};
// 	const objB = {};

// 	const makeItSimple = str => str.toLowerCase().replace(/[^\w]/g, '');

// 	let strA = makeItSimple(stringA);
// 	let strB = makeItSimple(stringB);

// 	if (strA.length !== strB.length) return false;

// 	for (const char of strA) {
// 		objA[char] = ++objA[char] || 1;
// 	}

// 	for (const char of strB) {
// 		objB[char] = ++objB[char] || 1;
// 	}

// 	for (const key in objA) {
// 		if (objA[key] !== objB[key]) {
// 			return false;
// 		}
// 	}

// 	return true;
// };

module.exports = anagrams;
