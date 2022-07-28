//Name of the File is  : blocking-code.js

//use the fs module
var fs = require('fs');

/////////////////////////////////////////////////////////////////////////
//define a chronometer, this mark is the begining of the execution
/////////////////////////////////////////////////////////////////////////
var currentDate = new Date();
var timeStart = currentDate.getTime();



//now, we are going to read a file
var file = "resources/text.txt";
var content = fs.readFileSync(file);
console.log("Im done!!!")


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