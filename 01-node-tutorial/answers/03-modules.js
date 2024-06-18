// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./04-names");

console.log(names);

/* =============================== */
const sayHi = require("./05-utils");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

/* =============================== */
const data = require("./06-alternative-flavor");

console.log(data);
console.log(data.items);
console.log(data.singlePerson);

/* =============================== */
require("./07-mind-grenade");
