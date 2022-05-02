const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater(/* str, options */) {
function repeater(str, options) {

    let repeatedString = "";
    let string = String(str);
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || "+";
    let addition = (options.addition === undefined) ? "" : String(options.addition);
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || "|";

    // if (addition == null) {
    //     addition = "null"
    // }
    for (let i = 0; i < repeatTimes; i++) {  //STRING
        repeatedString = repeatedString + string;
        for (let j = 0; j < additionRepeatTimes; j++) {   //addition: 'PLUS'
            repeatedString = repeatedString + addition;
            if (j < additionRepeatTimes - 1) {
            // if (additionRepeatTimes != undefined && j < additionRepeatTimes - 1) {
                repeatedString = repeatedString + additionSeparator;
            }
        }
        if (i < repeatTimes - 1) {
            repeatedString = repeatedString + separator;
        }
    }
    return repeatedString;
}

module.exports = {
    repeater
};
