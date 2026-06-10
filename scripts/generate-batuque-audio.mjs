import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/audio");

const SAMPLE_RATE = 44100;
const DURATION_SEC = 6;

const patterns = {
  ijexa: { bpm: 72, beats: [1, 0, 0.6, 0, 0.8, 0, 0.6, 0, 1, 0, 0.6, 0, 0.8, 0, 0.6, 0], freq: 180 },
  barravento: { bpm: 96, beats: [1, 0.7, 0.9, 0.7, 1, 0.7, 0.9, 0.7], freq: 140 },
  aluja: { bpm: 108, beats: [1, 0, 0.8, 0, 0.9, 0, 0.8, 0, 1, 0, 0.8, 0], freq: 200 },
  aluere: { bpm: 120, beats: [1, 0.5, 0, 0.6, 0, 0.5, 1, 0.5, 0, 0.6, 0, 0.5], freq: 220 },
};

function drumHit(t, freq, amp) {
  const env = Math.exp(-t * 18);
  const tone = Math.sin(2 * Math.PI * freq * t) * env;
  const noise = (Math.random() * 2 - 1) * env * 0.35;
  return (tone * 0.65 + noise) * amp;
}

function generateWav({ bpm, beats, freq }) {
  const totalSamples = SAMPLE_RATE * DURATION_SEC;
  const samples = new Float32Array(totalSamples);
  const beatDuration = 60 / bpm;
  const patternDuration = beats.length * beatDuration;

  for (let i = 0; i < totalSamples; i++) {
    const time = i / SAMPLE_RATE;
    const posInPattern = time % patternDuration;
    const beatIndex = Math.floor(posInPattern / beatDuration);
    const amp = beats[beatIndex % beats.length];
    const hitTime = posInPattern - beatIndex * beatDuration;

    if (amp > 0 && hitTime < 0.12) {
      samples[i] += drumHit(hitTime, freq, amp);
    }
  }

  let max = 0;
  for (const s of samples) max = Math.max(max, Math.abs(s));
  const scale = max > 0 ? 0.85 / max : 1;

  const pcm = Buffer.alloc(totalSamples * 2);
  for (let i = 0; i < totalSamples; i++) {
    const val = Math.max(-1, Math.min(1, samples[i] * scale));
    pcm.writeInt16LE(Math.round(val * 32767), i * 2);
  }

  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(SAMPLE_RATE, 24);
  header.writeUInt32LE(SAMPLE_RATE * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write("data", 36);
  header.writeUInt32LE(pcm.length, 40);

  return Buffer.concat([header, pcm]);
}

mkdirSync(outDir, { recursive: true });

for (const [name, config] of Object.entries(patterns)) {
  const wav = generateWav(config);
  writeFileSync(join(outDir, `${name}.wav`), wav);
  console.log(`Generated ${name}.wav`);
}
