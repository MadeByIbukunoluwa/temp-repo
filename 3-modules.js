//Modules
// CommonJS, every file is module
// Modules - Encapsulated code only sharing the minimum

const { john, peter } = require("./4-names");

const sayHi = require("./5-utils");

const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
// the function inside will run even though we didnt assign it to a variable
// console.log(data)

sayHi("susan");
sayHi(john);
sayHi(peter);
