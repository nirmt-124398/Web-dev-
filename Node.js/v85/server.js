var slugify = require('slugify')
let a='HEllo There'
slugify(a) // some-string
console.log(a);
// if you prefer something other than '-' as separator
const b=slugify(a, 'YOYO')  // some_string
console.log(b);