//import from module.exports.js
var msg = require('./module.exports.js');
//print the result
console.log(msg);

//import from exports.js
var msg2 = require('./exports.js');
//print the result
console.log(msg2);

//import from export.function.js
var msg3 = require('./export.function.js');
//print the result
msg3('Hello World');


//import from export.class.function.js
var person = require('./export.class.js');
//create a new object
var person1 = new person('Timmy', 'Turner');
console.log(person1.fullName());

