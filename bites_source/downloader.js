import ytdl from "ytdl-core";
import { createWriteStream } from "node:fs";

export const download = (url, filename) => {
    const stream = ytdl(url, { quality: "highestaudio" });
    stream.pipe(createWriteStream(filename));
};
