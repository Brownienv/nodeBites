import { writeFile } from "node:fs";
import { createInterface} from "node:readline";

export const write = (filename) => {
    const readline = createInterface(process.stdin, process.stdout);

    readline.question("write the data ", (data) => {
        writeFile(filename, data, (err) => {
            console.log(err ? err : "file written");
        });

        readline.close();
    });
};

write("test.txt");