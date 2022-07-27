//import the module fs
var fs =  require('fs');

//the content that we have to write to
var content= "this is the content that I want to write";

//write the file using the content we made before
fs.writeFile('resource/writing_a_file.txt', content , (err) => {
	if (err) 
		throw err;
	console.log('It\'s saved!');
});


var fs = require('fs');
var content = "We are writing this file synchronously using node.js";
fs.writeFileSync('resource/writing_a_file.txt', content);
console.log("File Written Successfully");