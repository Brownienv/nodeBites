import { createServer } from "node:http";

export const server = createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    ree.end("bites the dust");
});
