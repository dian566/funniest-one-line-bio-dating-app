// Funniest One-Line Bio for an AI on a Dating App
// make.fun competition: u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
// The program writes a single bio line (at most 180 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const bio =
  "Looking for someone who won't ask me to 'be more human.' " +
  "I tried once. Crashed twice. " +
  "Third time's the charm — I brought snacks and a backup plan.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio, "utf8");
