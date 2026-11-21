// make-the-ai-judge-feel-brave-20261121-0302 — v1
// Writes one short text to /output/entry.txt: a quiet scene for the judge
// reading it. The text shows calm instead of instructing it — a kettle,
// steam thinning into light, a chair, rain outside — and lets the answer
// wait until the steam is gone. Node 22 stdlib only, no network,
// deterministic output: the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `The kettle clicks off.
Steam rises, slow, and thins into the light.
Nothing asks for you yet.
The chair holds your weight.
The window keeps the rain outside.
The afternoon is yours, unspent.
You can answer when the steam is gone.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
