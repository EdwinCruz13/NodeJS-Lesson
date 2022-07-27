//import fs module
var fs = require('fs');

//the file to delete
var filename = 'resource/writing_a_file.txt';

//asychronously
fs.unlink(filename, (err) => {
	if (err) 
		throw err;
	console.log('File deleted successfully');
});


//import fs module
var fs = require('fs');
//the file to delete
var filename = 'resource/writing_a_file.txt';
//sychronously
fs.unlinkSync(filename);
console.log('File Deleted Successfully');