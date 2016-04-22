
var fs = require('fs');
var util = require('util');
if( process.argv.length <=2){
    console.log("Usage: node filetimes filename.txt");
    process.exit(1);
}
var filename = process.argv[2];

if( !fs.existsSync(filename) ){
    console.log("Invalid path/filename");
    process.exit(2);
}
	
var pathStat = fs.statSync(filename);
if( !pathStat.isFile() ){
   console.log("Please provide a file name");
   process.exit(3);
}
// var info = util.inspect(pathStat);
// console.log(info);
var ctime = pathStat.ctime;
var mtime = pathStat.mtime;
var atime = pathStat.atime;
var btime = pathStat.birthtime;

// console.log(ctime, mtime, atime, btime);
console.log("\nFile times for: ",filename);
console.log("\nCreated:",ctime);
console.log("\nModified:",mtime);
console.log("\nLast accessed:",atime);
console.log("\nBirthtime:",btime);

