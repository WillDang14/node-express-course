// const fs = require("fs");
// console.log(fs.readFileSync);

// Destructure method
// const { readFileSync } = require("fs");
// console.log(readFileSync);

const { readFileSync, writeFileSync } = require("fs");

for (i = 1; i < 4; i++) {
    writeFileSync("./temporary/fileA.txt", `Line ${i}\n`, { flag: "a" });
}

const data = readFileSync("./temporary/fileA.txt", "utf8");
console.log(data);
