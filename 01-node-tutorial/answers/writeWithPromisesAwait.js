const { writeFile, readFile } = require("fs").promises;

async function writer() {
    try {
        await writeFile(
            "temp.txt",
            "This is line 1\nThis is line 2\nThis is line 3\n",
            {
                flag: "a",
            }
        );
    } catch (err) {
        console.log("This error happened: ", err);
    }
}

async function reader() {
    try {
        const data = await readFile("temp.txt", "utf8");

        console.log(data);
    } catch (err) {
        console.log("This error happened: ", err);
    }
}

async function readWrite() {
    await writer();
    await reader();
}

// writer();
// reader();
readWrite();
