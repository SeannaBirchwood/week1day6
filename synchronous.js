var fs = require("fs");

var filePath = "/tmp/test_sync.txt";
var fileData = "Testing synchronous file write.\n CHecking this out too";

fs.writeFileSync(filePath, fileData);
console.log("successfully wrote to", filePath);