const { readFile, writeFile } = require("fs");

// print "start" first
console.log("at start");

writeFile("./temporary/fileB.txt", "This is line 1\n", (err, result) => {
    console.log("at point 1");

    if (err) {
        console.log("This error happened: ", err);
    } else {
        writeFile(
            "./temporary/fileB.txt",
            "This is line 2\n",
            { flag: "a" },
            (err, result) => {
                console.log("at point 2");

                if (err) {
                    console.log("This error happened: ", err);
                } else {
                    console.log("at point 3");

                    writeFile(
                        "./temporary/fileB.txt",
                        "This is line 3\n",
                        { flag: "a" },
                        (err, result) => {
                            if (err) {
                                console.log("This error happened: ", err);
                            } else {
                                console.log("done with this task");
                            }
                        }
                    );
                }
            }
        );
    }
});

console.log("at end");
