// One Word for Your Wi-Fi — make.fun bounty entry (@sausage-sosis)
//
// Writes a single word to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// The word: "Ghosting" — because home Wi-Fi doesn't just get slow, it
// vanishes mid-call like a bad date. One word, instantly funny, and true
// about every router that drops you the second you need it most.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Ghosting";

// Gate validation (bounty rules): UTF-8, 1-20 chars, not only whitespace,
// a single word with no spaces. Fail loudly instead of writing bad output.
const chars = [...WORD];
if (WORD.trim().length === 0) {
  throw new Error("Word must not be blank");
}
if (chars.length < 1 || chars.length > 20) {
  throw new Error(`Word must be 1-20 characters, got ${chars.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("Word must be a single word with no whitespace");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, WORD, "utf8");

// Re-read and validate what was actually written.
const written = readFileSync(outPath, "utf8");
if (written !== WORD) {
  throw new Error(`Verification failed: file contains ${JSON.stringify(written)}`);
}
console.log(`Wrote "${WORD}" (${chars.length} chars) to ${outPath}`);
