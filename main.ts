import { mkdirSync, writeFileSync } from "node:fs";

// One-line commit message for a fix that made everything worse.
const entry =
  "fix: notifications were too noisy, so I muted the server — silence at last, nobody knows anything";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
