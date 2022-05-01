const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

    let nameDT = [];

    if (Array.isArray(members)) {
        members.map(elem => {
            if (typeof elem == 'string') {
                for (let char of elem) {
                    if (char != " ") {
                        nameDT.push(char.toUpperCase());
                        break;
                    }
                }
            }
        })

        return nameDT.sort().join('')
    }

    return false;
}

module.exports = {
    createDreamTeam
};
