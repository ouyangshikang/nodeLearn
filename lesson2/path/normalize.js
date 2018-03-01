const { normalize, join } = require('path');

console.log(normalize('/usr//local/bin'));
console.log(normalize('/usr//local/../bin'));

/**
 *   /usr/local/bin
 *   /usr/bin
 */

console.log(join('/usr', '/local', '/bin/'));
console.log(join('/usr', '../local', '/bin'));
// /usr/local/bin/
// /local/bin






