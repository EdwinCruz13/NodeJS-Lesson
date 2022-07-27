var fs = require('fs');

//you have to pass the Relative path of the file from the Current working directory.
fs.rename('resource/writing_a_file.txt', 'resource/new_file.txt', (err) => {
	if (err)
		throw err;
	console.log('File renamed successfully');
});


//you have to pass the Relative path of the file from the Current working directory.
fs.renameSync('resource/new_file.txt', 'resource/writing_a_file.txt');
console.log('File renamed successfully');
