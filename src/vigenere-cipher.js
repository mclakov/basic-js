const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(direction = true) {
		this.direction = direction;
	}






	isLetter(letter) {
		let l = letter.charCodeAt();
		if (l >= 65 && l <= 90) return true;
		return false;
	};

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!');
		}

		let cipher = "";
		message = message.toUpperCase();
		for (let i = 0, j = 0; i < message.length; i++) {
			let currentLetter = message[i];
			if (this.isLetter(currentLetter)) {
				let upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
				cipher += String.fromCharCode(upperLetter + 65);
				j++;
			}
			else {
				cipher += currentLetter;
			}
		}
		if(this.direction) return cipher;
		return cipher.split('').reverse().join('');
	}

	decrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!');
		}
		let cipher = "";
		for (let i = 0, j = 0; i < message.length; i++) {
			let currentLetter = message[i];
			if (this.isLetter(currentLetter)) {
				let upperLetter = ((currentLetter.charCodeAt() - 65) - (key[j % key.length].toUpperCase().charCodeAt() - 65))
				if(upperLetter < 0) {
					upperLetter = (upperLetter + 26) % 26;
				} else {
					upperLetter = (upperLetter) % 26;
				}
				cipher += String.fromCharCode(upperLetter + 65);
				j++;
			}
			else {
				cipher += currentLetter;
			}
		}
		if(this.direction) return cipher;
		return cipher.split('').reverse().join('');
	}
}

module.exports = {
	VigenereCipheringMachine
};
