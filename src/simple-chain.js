const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {

    chainArr: [],
    chainLength: 0,

    getLength() {
        return this.chainLength;
    },

    addLink(value) {
        this.chainArr.push(`( ${value} )`);
        this.chainLength = this.chainLength + 1;
        return this;
    },

    removeLink(position) {
        if (position <= 0 || position > this.chainLength || typeof position != "number") {
            this.chainArr = [];
            this.chainLength = 0;
            throw new Error('You can\'t remove incorrect link!');
        } else {
            this.chainArr.splice(position-1, 1);
            this.chainLength = this.chainLength - 1;
        }
        return this;
    },

    reverseChain() {
        this.chainArr = this.chainArr.reverse();
        return this;
    },

    finishChain() {
        let tempArr = [...this.chainArr];
        this.chainArr = [];
        this.chainLength = 0;
        return tempArr.join('~~');
    }
};

module.exports = {
    chainMaker
};
