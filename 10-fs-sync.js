const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");

const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// if the file was not there, ndoe will create the file, if the file was there node by default will override the values that are already in the file
// if you want to append the file use a third argument - an object and set it to {flag : "a"}
writeFileSync(
  "./content/result-sync.txt",
  `here is the result : ${(first, second)}`,
  { flag: "a" }
);
console.log("done with this task")

console.log("starting the next one")