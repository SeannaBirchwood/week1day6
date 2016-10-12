var fs = require("fs");

var filePath = "tmp/test_async.txt";
var fileData = "Testing asynchronous file write.\n";

fs.writeFile(filePath, fileData, function(err) {
	if (err) {
		throw err;
	}
	console.log("Successfully wrote to", filePath);
	console.log("Let's read the newly written data");
	fs.readFile(filePath, function(err, data) {
		if (err) {
			return console.log(err);
		}
		console.log("Asynchronous read: " + data.toString());
	});
});