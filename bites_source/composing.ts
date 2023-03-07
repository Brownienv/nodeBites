import { createInterface } from "node:readline";
import { writeFile } from "node:fs";

export const write = async (filename: string): Promise<void> => {
    const readline = createInterface(process.stdin, process.stdout);

    readline.question("write the data ", (data: string) => {
        writeFile(filename, data, (err) => {
            console.log(err ? err : "file written");
        });

        readline.close();
    });
};
