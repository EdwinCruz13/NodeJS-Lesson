//Name of the File is  : nonblocking-code.js

//use the fs module
var fs = require('fs');

/////////////////////////////////////////////////////////////////////////
//define a chronometer, this mark is the begining of the execution
/////////////////////////////////////////////////////////////////////////
var currentDate = new Date();
var timeStart = currentDate.getTime();



//now, we are going to read a file synchronously
var file = "resources/text.txt";
fs.readFile(file, (err, data) => {
	if (err) 
		throw err;
		
	console.log("Im done!!!");
});


/////////////////////////////////////////////////////////////////////////
//define a chronometer, this mark is the end of the execution
/////////////////////////////////////////////////////////////////////////
var lastDate = new Date();
var timeEnd = lastDate.getTime();


/////////////////////////////////////////////////////////////////////////
//define a chronometer, this mark the time of execution
var elapsedTime = timeEnd-timeStart;
console.log("\nStart of execution: " + timeStart + " ms");
console.log("End of execution: " + timeEnd + " ms");
console.log("Time of execution: " + elapsedTime + " ms");
/////////////////////////////////////////////////////////////////////////