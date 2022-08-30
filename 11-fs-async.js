const { readFile, writeFile } = require("fs");
console.log("start")
// if we don't provide the utf8 encoding , we will get the buffer

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile(
    "./content/second.txt",
    "utf-8",
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      const second = result;
      writeFile(
        "./content/result-async.txt",
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("done with this task");
        }
      );
    }
  );
});
console.log("starting next task")