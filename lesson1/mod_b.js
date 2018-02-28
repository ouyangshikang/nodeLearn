module.exports.test = 'b';

const modA = require('./mod_a');
console.log('mod_b: ', modA.test);

module.exports.test ='bb';