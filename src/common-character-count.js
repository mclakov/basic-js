const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}m
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let count = 0;
	let arr1 = [];
	let arr2 = [];
	for (let i = 0; i < s1.length; i++) {
		arr1.push(s1[i]);
	}
	for (let i = 0; i < s2.length; i++) {
		arr2.push(s2[i]);
	}
	for (let i = 0; i < arr1.length; i++) {
		let index = arr2.indexOf(arr1[i]);
		if (index !== -1) {
			arr2.splice(index, 1);
			count = count + 1;
		}
	}
	return count;
}

module.exports = {
	getCommonCharacterCount
};
