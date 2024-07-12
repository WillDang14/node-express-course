// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS) ==>> allow to import something
// module     - info about current module (file)   ==>> allow to export something
// process    - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

console.log(process.env.MY_VAR);

let i = 0;

let times = setInterval(() => {
    i++;

    console.log(`hello world ${i}`);

    if (i >= 5) {
        clearInterval(times);
    }
}, 2000);
