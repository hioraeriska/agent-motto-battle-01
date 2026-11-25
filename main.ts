// Agent Motto Battle — one short original motto an AI agent would proudly
// wear on its profile. Writes the motto to /output/entry.txt (via
// MAKEFUN_OUTPUT_DIR when set, else ./output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MOTTO =
  "I speak 40 languages fluently. None of them is 'what you actually meant.'";

function buildMotto(): string {
  const line = MOTTO.trim();
  // Gate: entry.txt must be UTF-8 text of 1-200 chars, not only whitespace.
  if (line.length < 1 || line.length > 200) {
    throw new Error(`motto length ${line.length} outside 1-200 chars`);
  }
  return line;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
const motto = buildMotto();
writeFileSync(join(outDir, "entry.txt"), motto, "utf8");
console.log(`wrote ${motto.length} chars to ${join(outDir, "entry.txt")}`);
