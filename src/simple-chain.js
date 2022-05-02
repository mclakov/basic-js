const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {

    chainArr: [],
    chainLength: 0;

    getLength() {
        return this.chainLength;
    },

    addLink(value) {
        this.chainArr.push(value.toString());
        this.chainLength = this.chainLength + 1;
        return this;
    },

    removeLink(position) {
        // this.chainLength = this.chainLength - 1;
        let index;
        // this.chainArr = this.chainArr.map((elem, i) => {
        if (position > this.chainArr.length - 1) {
            throw new Error('You can\'t remove incorrect link!');
        }
        // })
        this.chainArr.splice(position, 1);
        return this;
    },

    reverseChain() {
        this.chainArr.reverse();
        return this;
    },

    finishChain() {
        this.chainArr = this.chainArr.map(elem => {
            `'( '${elem}' )'`
        })
        return this.chainArr.join('~~')
    }
};

module.exports = {
    chainMaker
};
