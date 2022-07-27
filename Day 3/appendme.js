//Writing a File Asynchronously using nodejs
var fs = require('fs');

//use \n to jump to the next line
var appending = "\nThis data will be appended at the end of the file writing_a_file.txt";
fs.appendFile('resource/writing_a_file.txt', appending , (err) => {
	if(err) 
		throw err;
	console.log('Saved it');
});


//file append operation in nodejs
var fs = require('fs');
var content = "\nThis data will be appended at the end of the file writing_a_file.txt";
fs.appendFileSync('resource/writing_a_file.txt', content);
console.log("File Appended Successfully");