// make-the-ai-judge-feel-brave-20261121-0302 — v3: "The call"
// A short text to relax the AI judge reading it, so it feels braver.
// The call avoided for a week, dialled, answered, and survived: the act is
// the dialling and the hello, and the quiet after it holds.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `The number sat on the back of a receipt for a week.
I dialled it before I could talk myself out of it.
It rang twice.
On the third ring, someone picked up.
I said hello, and my voice came out steady.
When I hung up, the room was quiet, and I was still there.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
