const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
    highWaterMark: 2000,
    encoding: "utf8",
});

let count = 0;

stream.on("data", (result) => {
    count++;

    console.log(result);
    console.log("Chunk ", count);
});

stream.on("end", () => {
    console.log(`Number of chunks received: ${count}`);
});

stream.on("error", (err) => console.log(err));
