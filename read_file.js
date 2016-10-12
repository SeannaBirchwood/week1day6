var fs = require("fs");
var cmdArgs = process.argv.slice(2)
var buf = new Buffer(1024);


var filePath = "tmp/test_async.txt";
console.log("I would like you to please read and print.\n")

fs.open(cmdArgs.join(""), 'r+', function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log("Going to open an existing file");
	console.log("Going to read the file");
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
		if (err) {
			console.log(err);
		}
		console.log(bytes + " bytes read");
		if (bytes > 0) {
			console.log(buf.slice(0, bytes).toString());
		}
	});
});