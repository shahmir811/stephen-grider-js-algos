// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// *********************************************** //
// *********************************************** //
// *********************************************** //

// *********************************************** //
// *************** 3rd SOLUTION ****************** //
// *********************************************** //

// Memoized solution
const fib = (n, memo = []) => {
	if (memo[n] !== undefined) return memo[n];
	if (n < 2) return 1;

	const result = fib(n - 1, memo) + fib(n - 2, memo);
	memo[n] = result;

	return result;
};

// *********************************************** //
// *************** 2nd SOLUTION ****************** //
// *********************************************** //

// Iterative solution
// const fib = n => {
// 	const fibNums = [0, 1, 1];

// 	for (let i = 3; i <= n; i++) {
// 		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
// 	}

// 	return fibNums[n];
// };

// *********************************************** //
// *************** 1st SOLUTION ****************** //
// *********************************************** //

// Naive solution
// const fib = n => {
// 	if (n < 2) return 1;

// 	return fib(n - 1) + fib(n - 2);
// };

module.exports = fib;
