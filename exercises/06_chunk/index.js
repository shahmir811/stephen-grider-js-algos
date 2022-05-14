// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// *********************************************** //
// *********************************************** //
// *********************************************** //

// *********************************************** //
// *************** 2nd SOLUTION ****************** //
// *********************************************** //

const chunk = (array, size) => {
	const result = [];
	let index = 0;

	while (index < array.length) {
		result.push(array.slice(index, index + size));
		index += size;
	}

	return result;
};

// *********************************************** //
// *************** 1st SOLUTION ****************** //
// *********************************************** //

// const chunk = (array, size) => {
// 	let outerArray = [];
// 	let innerArray = [];

// 	for (let i of array) {
// 		innerArray.push(i);

// 		if (innerArray.length === size || i === array.length) {
// 			outerArray.push(innerArray);
// 			innerArray = [];
// 		}
// 	}

// 	return outerArray;
// };

module.exports = chunk;
