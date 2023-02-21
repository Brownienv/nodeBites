import { basename } from "node:path";

console.log("file is",basename(import.meta.url));
