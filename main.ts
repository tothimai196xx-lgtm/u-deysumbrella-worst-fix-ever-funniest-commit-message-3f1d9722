import { mkdirSync, writeFileSync } from "node:fs";

// One-line commit message for a fix that made everything worse.
const entry =
  "fix: notifications were too loud, so I muted the server — silence at last, nobody knows a thing";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
