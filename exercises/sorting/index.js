// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const bubbleSort = array => {
	let noSwaps;
	for (let i = 0; i < array.length; i++) {
		noSwaps = true;
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}

	return array;
};

const selectionSort = array => {
	for (let i = 0; i < array.length; i++) {
		let lowest = i;

		for (let j = i + 1; j < array.length; j++) {
			if (array[lowest] > array[j]) {
				lowest = j;
			}
		}

		if (i !== lowest) {
			// SWAP
			const temp = array[i];
			array[i] = array[lowest];
			array[lowest] = temp;
		}
	}

	return array;
};

function mergeSort(array) {
	if (array.length <= 1) return array;

	let mid = Math.floor(array.length / 2);

	let left = mergeSort(array.slice(0, mid));
	let right = mergeSort(array.slice(mid));

	return merge(left, right);
}

function merge(arr1, arr2) {
	// It is similar to mergeTwoSortedArrays function in Colt-Steele Udemy course
	const results = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
