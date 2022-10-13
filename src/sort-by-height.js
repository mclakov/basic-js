const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

	const result = arr.filter(num => num !== -1);
	let i = 0;
	result.sort((a, b) => a - b);
	let arr2 = []
	arr.map(elem => {
		if(elem !== -1){
			arr2.push(result[i]);
			i = i + 1;
		} else {
			arr2.push(elem)
		}
	})
	return arr2;

}

module.exports = {
	sortByHeight
};
