import { basename } from "node:path";
console.log("viewing", basename(import.meta.url));

process.stdout.write("write your name ");

process.stdin.on("data", (data) => {
    const name = data.toString().trim();
    console.log("your name is", name);
    process.exit();
});
