const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email ) {
  // console.log('email = ', email);
  //
  // let pos = -1;
  // let domain = '';
  // while ((pos = email.indexOf('@', pos + 1)) != -1) {
  //
  // }
  // console.log('pos = ', pos)
  // domain = email.slice(Number(pos+1));
  // console.log('domain = ', domain)
  // return domain;

  return email.slice(email.lastIndexOf('@')+1);


}

module.exports = {
  getEmailDomain
};
