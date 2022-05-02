const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr) {

    if (!Array.isArray(arr)) {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }

    let tempArr = [...arr]
    let stack = [];
    try {
        if (arr.length >= 0) {
            tempArr.map((elem, i) => {
                if (elem != '--double-next' && elem != '--discard-next' && elem != '--discard-prev' && elem != '--double-prev') {
                    stack.push(elem);
                }
                if (elem === '--double-next') {
                    if (tempArr[i + 1] != undefined) {
                        stack.push(tempArr[i + 1]);
                    }
                }
                if (elem === '--double-prev') {
                    if (stack[i - 1] != undefined) {
                        stack.push(stack[stack.length - 1]);
                    }
                }
                if (elem === '--discard-next') {
                    if (tempArr[i + 1] != undefined) {
                        tempArr[i + 1] = "discard";
                    }
                }
                if (elem === '--discard-prev') {
                    if (tempArr[i - 1] != undefined) {
                        stack.pop();
                        stack.push("discard");
                    }
                }
            });
            return stack.filter(elem => elem != "discard")
        } else {
            throw new Error('\'arr\' parameter must be an instance of the Array!')
        }
    } catch {
        throw new Error('\'arr\' parameter must be an instance of the Array!')
    }
}

module.exports = {
    transform
};
