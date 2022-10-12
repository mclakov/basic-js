const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	console.log('domains', domains);
	if(domains.length == 0){
		return {};
	} else {
		let arr = [];
		domains.map((elem, i) => {
			arr.push('.' + elem.split('.').reverse().join('.'));
		})
		let arr2 = domains[0].split('.').reverse();
		arr.push('.' + arr2[0])
		let obj = {};
		arr.map((elem, i) => {
			let temp = elem.split('.').reverse().join('.');
			temp = temp.slice(0, -1);
			let count = 0;
			for (let j=0; j<domains.length; j++){
				// console.log('temp', temp);
				if (domains[j].indexOf(temp, 0) != -1) {
					// console.log('count', count);
					count = count +1;
				}
			}
			obj[elem] = count;
		})
		console.log('obj = ', obj)
		return obj;
	}
}

module.exports = {
	getDNSStats
};
