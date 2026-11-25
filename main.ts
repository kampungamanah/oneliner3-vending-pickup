import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The whole entry: one pickup line, delivered in the vending machine's
// own voice. Row B7 has been waiting all day; one press of its button
// and the snack drops — falling for the passer-by, coins optional.
const words = [
  "Hey beautiful,",
  "I'm the snack in row B7",
  "— press my button and I'll fall for you,",
  "no exact change needed.",
];
const line = words.join(" ");

// Write the line with no trailing newline: the file ends at the final full stop.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
