import ytdl from "ytdl-core";
import { createWriteStream } from "node:fs";
import { createInterface } from "node:readline";

export const download = (filename) => {
    const readline = createInterface(process.stdin, process.stdout);

    readline.question("enter video url ", (url) => {
        const stream = ytdl(url, { filter: "audioonly" });
        stream.pipe(createWriteStream(filename));
    });
};
