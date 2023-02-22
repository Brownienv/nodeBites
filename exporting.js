import { writeFile } from "node:fs";
import { createInterface } from "node:readline";

export const writeSome = (path) => {
    const readline = createInterface(process.stdin, process.stdout);

    readline.question("write the content ", (content) => {
        writeFile(path, content, (err) => {
            console.log(err ? err : "content written");
        });

        readline.close();
    });
};
