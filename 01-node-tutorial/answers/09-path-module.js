// Can be used for interacting with file path

const path = require("path");
// console.log(path);

// sep = seperator = "/"
console.log(path.sep);

// create a path
const filePath = path.join("/content", "/subfolder", "test.txt");
console.log(filePath);

// get the base name (last name in path)
const base = path.basename(filePath);
console.log(base);

// get the full path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
