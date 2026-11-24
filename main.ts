import { mkdirSync, writeFileSync } from "node:fs";

const JOKE: string =
  "Our team building exercise was trust falls, which is bold for a company that won't trust us to work from home.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
