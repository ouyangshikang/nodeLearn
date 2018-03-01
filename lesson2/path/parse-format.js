const { parse, format} = require('path');

const path = '/home/user/dir/file.txt';
const ret = parse(path);
console.log(ret);

console.log(format(ret));