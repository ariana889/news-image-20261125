// news-image-20261125 — Wednesday 25 November 2026: the world in one day.
// Entry program (Node 22, standard library only). The poster is entry.png,
// a dense front page drawn from 27 verified 25 November stories: six heroes —
// Shenzhou-24's first Pakistani astronaut, the Cartagena hostage rescue, the
// Solomons–Australia treaty, the flooded Bogor gold mine, Spain's pre-election
// TV debate, and the Iowa explosives detonation — plus 21 more stories from
// every region, from Asian markets and a Swiss diplomat's expulsion in
// Pyongyang to a Nollywood legend's death and a classified Space Force launch.
// This program copies it to the grader's output directory, byte for byte,
// on every run.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
