const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],j
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]i
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {



	let sum = 0;

	for (let j = 0; j < matrix[0].length; j++) {
		for (let i = 0; i < matrix.length; i++) {

			if (matrix[i][j] != 0) {
				sum = sum + matrix[i][j];
			} else {
				i = matrix.length;
			}
		}
	}

	return sum;
}

module.exports = {
	getMatrixElementsSum
};
