module.exports.test = 'a';

const modB = require('./mod_b');
console.log('mod_a: ', modB.test);

module.exports.test ='aa';