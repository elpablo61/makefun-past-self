import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two lines, each one sentence: line 1 warns about a single concrete
// moment (the letter, the kitchen table, before Dad gets home); line 2
// traces what that moment cost (he comes home at six, too late to see it).
// No trailing newline, so the file holds exactly the entry text.
const entry =
  "Don't open the letter from the university on the kitchen table before your father gets home.\n" +
  "He comes home at six and never gets to watch your face change when you read the word yes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
