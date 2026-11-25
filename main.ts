// Worst Fix Ever: Funniest Commit Message
// Writes a single commit message (at most 100 characters) for a bug fix
// that made everything worse, to /output/entry.txt.
//
// The joke: the "fix" for a slow checkout was to delete checkout entirely.
// The page is fast now. Nothing is sold anymore. The repair broke more
// than it mended — and the engineer reports it deadpan, like a real
// commit subject typed at the end of a bad day.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `fix: checkout was too slow, so I removed checkout — page loads instantly now and sales are zero`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
