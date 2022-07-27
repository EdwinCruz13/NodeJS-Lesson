// import the module fs
var fs = require('fs');


//method tha works Asynchronously 
fs.readFile('resource/read.txt', (err, data) => {
	if (err) 
		throw err;
		
	console.log("Content 1 :  " + data);
});


//method tha works Synchronously 
var filename = 'resource/read.txt'; //Name of the file to be read
var content = fs.readFileSync(filename);
console.log('Content : ' + content);

