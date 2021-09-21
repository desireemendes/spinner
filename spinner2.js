let increment = 200;

let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];

for (const r of spinner) {
  setTimeout (() => {
    process.stdout.write(r);
  }, increment)
  increment +=200
}
