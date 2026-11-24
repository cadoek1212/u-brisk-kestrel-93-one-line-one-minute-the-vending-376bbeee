// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single pickup line, spoken by a vending machine, to /output/entry.txt.
// The line must be 1-200 characters of UTF-8 text, one line, no trailing newline
// (a smaller file wins an exact tie on judge win rate).

import { mkdirSync, writeFileSync } from "node:fs";

// The machine speaks in the first person, in its own world: it drops snacks,
// it jams, its coil spins. The turn lands on the last few words: the coil
// that never jams gets stuck — on the passing human.
const LINE =
  "I drop snacks all day and never jam once — then you walked by, and my coil got stuck on you.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
