// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = n => {
	let reversed = n.toString().split('').reverse().join('');
	reversed = Math.sign(n) * parseInt(reversed);
	return reversed;
};

module.exports = reverseInt;
