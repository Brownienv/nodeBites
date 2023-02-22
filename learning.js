import { basename } from "node:path";
import { createInterface } from "node:readline";
import { writeSome } from "./exporting.js";

console.log("viewing", basename(import.meta.url));

const readline = createInterface(process.stdin, process.stdout);

readline.question("write your name ", (name) => {
    console.log("your name is", name);
    readline.close();
    writeSome("testing.py");
});
