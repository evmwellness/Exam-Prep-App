// Generates each sound as a WAV file inside a worker so the UI never freezes.
// Everything is synthesised from scratch: no downloads, no licensing, works offline.
// The WAV is played through an <audio> element, which (unlike Web Audio alone)
// keeps playing when the phone is locked or another app is in front.

const SR = 32000

function rng(seed) {
  let s = seed >>> 0 || 1
  return () => {
    s ^= s << 13
    s >>>= 0
    s ^= s >>> 17
    s ^= s << 5
    s >>>= 0
    return s / 4294967296
  }
}

function lpCoef(hz) {
  return 1 - Math.exp((-2 * Math.PI * hz) / SR)
}

// Paul Kellet's pink noise filter
function pinkSource(rand) {
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
  return () => {
    const w = rand() * 2 - 1
    b0 = 0.99886 * b0 + w * 0.0555179
    b1 = 0.99332 * b1 + w * 0.0750759
    b2 = 0.969 * b2 + w * 0.153852
    b3 = 0.8665 * b3 + w * 0.3104856
    b4 = 0.55 * b4 + w * 0.5329522
    b5 = -0.7616 * b5 - w * 0.016898
    const out = b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362
    b6 = w * 0.115926
    return out * 0.11
  }
}

function brownSource(rand) {
  let last = 0
  return () => {
    last = (last + 0.02 * (rand() * 2 - 1)) / 1.02
    return last * 3.5
  }
}

class Bandpass {
  constructor() {
    this.x1 = this.x2 = this.y1 = this.y2 = 0
  }
  set(freq, q) {
    const w = (2 * Math.PI * freq) / SR
    const alpha = Math.sin(w) / (2 * q)
    const a0 = 1 + alpha
    this.b0 = alpha / a0
    this.b2 = -alpha / a0
    this.a1 = (-2 * Math.cos(w)) / a0
    this.a2 = (1 - alpha) / a0
  }
  run(x) {
    const y = this.b0 * x + this.b2 * this.x2 - this.a1 * this.y1 - this.a2 * this.y2
    this.x2 = this.x1
    this.x1 = x
    this.y2 = this.y1
    this.y1 = y
    return y
  }
}

// Slow, non-repeating-feeling drift built from a few detuned sines (0..1).
function drift(rand, ...periods) {
  const parts = periods.map((p) => ({ w: (2 * Math.PI) / (p * SR), ph: rand() * Math.PI * 2 }))
  return (i) => {
    let v = 0
    for (const p of parts) v += Math.sin(i * p.w + p.ph)
    return 0.5 + v / (2 * parts.length)
  }
}

// ---------------------------------------------------------------------------
// Noise-based soundscapes. Rendered a little long, then the tail is
// cross-faded into the head so the loop has no audible seam.
// ---------------------------------------------------------------------------

const LOOP_SECONDS = 60
const XFADE_SECONDS = 4

const generators = {
  white(rand) {
    const n = (LOOP_SECONDS + XFADE_SECONDS) * SR
    const out = new Float32Array(n)
    const a = lpCoef(9000)
    let lp = 0
    for (let i = 0; i < n; i++) {
      lp += a * (rand() * 2 - 1 - lp)
      out[i] = lp
    }
    return out
  },

  fire(rand) {
    const n = (LOOP_SECONDS + XFADE_SECONDS) * SR
    const out = new Float32Array(n)
    const brown = brownSource(rand)
    const pink = pinkSource(rand)
    const flicker = drift(rand, 3.1, 5.3, 8.9)
    const aLow = lpCoef(250)
    const aHiss = lpCoef(1500)
    let low = 0, hissLp = 0
    for (let i = 0; i < n; i++) {
      low += aLow * (brown() - low)
      const p = pink()
      hissLp += aHiss * (p - hissLp)
      const hiss = p - hissLp
      out[i] = low * (0.5 + 0.4 * flicker(i)) + hiss * 0.08
    }
    // Crackles: many tiny clicks, the odd louder snap, and a few deep pops.
    const addBurst = (start, len, amp, tone) => {
      let prev = 0, lp = 0
      const a = lpCoef(tone)
      for (let k = 0; k < len && start + k < n; k++) {
        const env = Math.exp((-5 * k) / len)
        const w = rand() * 2 - 1
        lp += a * (w - lp)
        const s = lp - prev * 0.6
        prev = lp
        out[start + k] += s * env * amp
      }
    }
    let t = 0
    while (t < n) {
      t += Math.floor(-Math.log(1 - rand()) * SR / 14)
      const big = rand() < 0.08
      const amp = (big ? 1.2 : 0.35) * Math.pow(rand(), 2) + 0.05
      addBurst(t, Math.floor(SR * (0.001 + rand() * (big ? 0.012 : 0.004))), amp, big ? 5000 : 9000)
    }
    t = 0
    while (t < n) {
      t += Math.floor(-Math.log(1 - rand()) * SR * 2.5)
      addBurst(t, Math.floor(SR * (0.02 + rand() * 0.03)), 0.6 + rand() * 0.4, 900)
    }
    return out
  },

  waves(rand) {
    const n = (LOOP_SECONDS + XFADE_SECONDS) * SR
    const env = new Float32Array(n)
    // Each wave: slow swell up, break, long wash back out.
    let t = 0
    while (t < n) {
      const len = Math.floor(SR * (8 + rand() * 5))
      const peak = 0.6 + rand() * 0.4
      for (let k = 0; k < len && t + k < n; k++) {
        const x = k / len
        const shape = x < 0.4 ? Math.pow(Math.sin((x / 0.4) * Math.PI * 0.5), 2) : Math.exp(-(x - 0.4) * 4.5)
        env[t + k] = Math.max(env[t + k], shape * peak)
      }
      t += Math.floor(len * (0.7 + rand() * 0.2))
    }
    const out = new Float32Array(n)
    const pink = pinkSource(rand)
    const brown = brownSource(rand)
    let lp = 0, bed = 0, e = 0
    const aBed = lpCoef(180)
    const aEnv = lpCoef(3)
    for (let i = 0; i < n; i++) {
      e += aEnv * (env[i] - e)
      const cutoff = 300 + e * e * 2800
      lp += lpCoef(cutoff) * (pink() - lp)
      bed += aBed * (brown() - bed)
      out[i] = lp * (0.12 + e * 1.1) + bed * 0.35
    }
    return out
  },

  // Rain in a forest is mostly *separate* drops hitting leaves, plus life around
  // it. A steady broadband hiss on its own reads as a waterfall, so the hiss is
  // kept quiet and band-limited and the texture comes from individual events.
  rainforest(rand) {
    const n = (LOOP_SECONDS + XFADE_SECONDS) * SR
    const layer = () => new Float32Array(n)
    const rms = (b) => {
      let s = 0
      for (let i = 0; i < n; i++) s += b[i] * b[i]
      return Math.sqrt(s / n) || 1
    }

    // 1. Distant rain bed: band-limited (≈500 Hz–3 kHz), soft, slowly swelling.
    const bed = layer()
    const pink = pinkSource(rand)
    const swell = drift(rand, 13, 23, 37)
    const aHp = lpCoef(500)
    const aLp = lpCoef(3000)
    let hp = 0, lp = 0
    for (let i = 0; i < n; i++) {
      const p = pink()
      hp += aHp * (p - hp)
      lp += aLp * (p - hp - lp)
      bed[i] = lp * (0.6 + 0.4 * swell(i))
    }

    // 2. Patter: many tiny drops on leaves, each a short resonant tick at its own
    //    pitch. Rate drifts so showers come and go.
    const patter = layer()
    const density = drift(rand, 17, 29)
    const bp = new Bandpass()
    let t = 0
    while (t < n) {
      const rate = 35 + 55 * density(t)
      t += Math.max(1, Math.floor((-Math.log(1 - rand()) * SR) / rate))
      const len = Math.floor(SR * (0.003 + rand() * 0.006))
      const amp = 0.35 + Math.pow(rand(), 2) * 0.45 // mostly quiet, a few louder
      const q = 4 + rand() * 4
      bp.x1 = bp.x2 = bp.y1 = bp.y2 = 0
      bp.set(1400 + rand() * 4200, q)
      for (let k = 0; k < len + 200 && t + k < n; k++) {
        const x = k < len ? (rand() * 2 - 1) * Math.exp((-4 * k) / len) : 0
        patter[t + k] += bp.run(x) * amp
      }
    }

    // 3. Canopy drips: occasional bigger drops falling from leaves — a short
    //    "plip" whose pitch rises, like a real water droplet.
    const drips = layer()
    t = Math.floor(SR * 0.5)
    while (t < n) {
      t += Math.floor(-Math.log(1 - rand()) * SR * 0.7)
      const f0 = 700 + rand() * 900
      const len = Math.floor(SR * (0.03 + rand() * 0.04))
      const amp = 0.45 + rand() * 0.4
      let ph = 0
      for (let k = 0; k < len && t + k < n; k++) {
        const x = k / len
        ph += (2 * Math.PI * f0 * (1 + 0.6 * x)) / SR
        drips[t + k] += Math.sin(ph) * Math.exp(-5 * x) * Math.min(1, k / 20) * amp
      }
    }

    // 4. Crickets: two soft chirping insects at different pitches and rhythms.
    const insects = layer()
    for (const c of [
      { f: 4300, pulse: 0.018, gap: 0.03, pulses: 3, every: 0.62 },
      { f: 5100, pulse: 0.014, gap: 0.022, pulses: 4, every: 0.95 },
    ]) {
      const presence = drift(rand, 19, 31)
      for (let start = Math.floor(rand() * SR); start < n; start += Math.floor(c.every * SR * (0.9 + rand() * 0.2))) {
        const level = Math.max(0, presence(start) - 0.35) // fades in and out
        if (!level) continue
        for (let j = 0; j < c.pulses; j++) {
          const s0 = start + Math.floor(j * (c.pulse + c.gap) * SR)
          const len = Math.floor(c.pulse * SR)
          for (let k = 0; k < len && s0 + k < n; k++) {
            insects[s0 + k] += Math.sin((2 * Math.PI * c.f * k) / SR) * Math.sin((Math.PI * k) / len) * level
          }
        }
      }
    }

    // 5. Birds: a few different distant calls — whistles, trills and warbles.
    const birds = layer()
    const note = (s, len, f0, f1, vib, amp) => {
      let ph = 0
      for (let k = 0; k < len && s + k < n; k++) {
        const x = k / len
        const f = f0 + (f1 - f0) * x + Math.sin((2 * Math.PI * 7 * k) / SR) * vib
        ph += (2 * Math.PI * f) / SR
        birds[s + k] += Math.sin(ph) * Math.pow(Math.sin(Math.PI * x), 1.5) * amp
      }
    }
    t = Math.floor(SR * 1.5)
    while (t < n) {
      const kind = rand()
      const amp = 0.4 + rand() * 0.6
      let s = t
      if (kind < 0.35) {
        // two- or three-note falling whistle
        const f = 1800 + rand() * 900
        const notes = 2 + Math.floor(rand() * 2)
        for (let j = 0; j < notes; j++) {
          const len = Math.floor(SR * (0.18 + rand() * 0.12))
          note(s, len, f * (1 - j * 0.12), f * (1 - j * 0.12) * 0.94, 15, amp)
          s += len + Math.floor(SR * 0.08)
        }
      } else if (kind < 0.65) {
        // fast trill
        const f = 2800 + rand() * 1200
        const notes = 8 + Math.floor(rand() * 10)
        for (let j = 0; j < notes; j++) {
          const len = Math.floor(SR * 0.035)
          note(s, len, f * 1.1, f * 0.9, 0, amp * 0.6)
          s += len + Math.floor(SR * 0.025)
        }
      } else {
        // wandering warble
        const len = Math.floor(SR * (0.5 + rand() * 0.5))
        const f = 2200 + rand() * 1500
        note(s, len, f, f * (0.8 + rand() * 0.5), 180, amp * 0.8)
        s += len
      }
      t = s + Math.floor(SR * (2.5 + rand() * 6))
    }

    // 6. Frogs: an occasional low, distant croak.
    const frogs = layer()
    t = Math.floor(SR * (4 + rand() * 4))
    while (t < n) {
      const croaks = 1 + Math.floor(rand() * 3)
      const f = 350 + rand() * 250
      let s = t
      for (let j = 0; j < croaks; j++) {
        const len = Math.floor(SR * 0.22)
        for (let k = 0; k < len && s + k < n; k++) {
          const x = k / len
          const buzz = 0.5 + 0.5 * Math.sin((2 * Math.PI * 28 * k) / SR) // pulsing
          frogs[s + k] += Math.sin((2 * Math.PI * f * k) / SR) * buzz * Math.sin(Math.PI * x)
        }
        s += len + Math.floor(SR * 0.15)
      }
      t = s + Math.floor(SR * (7 + rand() * 10))
    }

    // Mix: each layer scaled to a set loudness so the balance is predictable.
    const mix = [
      [bed, 0.035],
      [patter, 0.06],
      [drips, 0.03],
      [insects, 0.006],
      [birds, 0.02],
      [frogs, 0.008],
    ]
    const out = layer()
    for (const [buf, level] of mix) {
      const g = level / rms(buf)
      for (let i = 0; i < n; i++) out[i] += buf[i] * g
    }
    // Drops are spiky, so gently round off only the loudest peaks. That lets the
    // overall level match the other sounds without any single drop startling.
    const g = 0.1 / rms(out)
    const T = 0.45
    for (let i = 0; i < n; i++) {
      const x = out[i] * g
      const a = Math.abs(x)
      out[i] = a <= T ? x : Math.sign(x) * (T + (1 - T) * Math.tanh((a - T) / (1 - T)))
    }
    return out
  },

  snow(rand) {
    const n = (LOOP_SECONDS + XFADE_SECONDS) * SR
    const out = new Float32Array(n)
    const pink = pinkSource(rand)
    const brown = brownSource(rand)
    const hush = drift(rand, 13, 21, 34)
    const air = drift(rand, 7, 19)
    const a1 = lpCoef(650)
    const a2 = lpCoef(650)
    const aBed = lpCoef(120)
    let l1 = 0, l2 = 0, bed = 0
    for (let i = 0; i < n; i++) {
      l1 += a1 * (pink() - l1)
      l2 += a2 * (l1 - l2)
      bed += aBed * (brown() - bed)
      out[i] = l2 * (0.7 + 0.5 * hush(i)) + bed * (0.25 + 0.15 * air(i))
    }
    // Very faint, sparse soft settling sounds.
    let t = 0
    while (t < n) {
      t += Math.floor(-Math.log(1 - rand()) * SR / 3)
      const len = Math.floor(SR * (0.04 + rand() * 0.08))
      let lp = 0
      const a = lpCoef(1200 + rand() * 1500)
      for (let k = 0; k < len && t + k < n; k++) {
        lp += a * (rand() * 2 - 1 - lp)
        out[t + k] += lp * Math.sin((Math.PI * k) / len) * 0.03
      }
    }
    return out
  },

  wind(rand) {
    const n = (LOOP_SECONDS + XFADE_SECONDS) * SR
    const out = new Float32Array(n)
    const pink = pinkSource(rand)
    const brown = brownSource(rand)
    const pitch = drift(rand, 9, 14, 23)
    const gust = drift(rand, 6, 11, 17)
    const bp1 = new Bandpass()
    const bp2 = new Bandpass()
    const aBed = lpCoef(200)
    let bed = 0
    for (let i = 0; i < n; i++) {
      if (i % 32 === 0) {
        const p = pitch(i)
        bp1.set(220 + p * 520, 2.5)
        bp2.set(420 + p * 900, 5)
      }
      const g = gust(i)
      const x = pink()
      bed += aBed * (brown() - bed)
      out[i] = (bp1.run(x) * 2.2 + bp2.run(x) * 1.2) * (0.25 + g * g * 0.9) + bed * 0.3
    }
    return out
  },

  bach() {
    return renderBach()
  },
}

// ---------------------------------------------------------------------------
// J.S. Bach — Prelude in C major, BWV 846 (public domain), played on a soft
// synthesised harp/piano tone. Bars 1–32 use the same figure over 5 notes.
// ---------------------------------------------------------------------------

const PRELUDE = [
  'C4 E4 G4 C5 E5', 'C4 D4 A4 D5 F5', 'B3 D4 G4 D5 F5', 'C4 E4 G4 C5 E5',
  'C4 E4 A4 E5 A5', 'C4 D4 F#4 A4 D5', 'B3 D4 G4 D5 G5', 'B3 C4 E4 G4 C5',
  'A3 C4 E4 G4 C5', 'D3 A3 D4 F#4 C5', 'G3 B3 D4 G4 B4', 'G3 Bb3 E4 G4 C#5',
  'F3 A3 D4 A4 D5', 'F3 Ab3 D4 F4 B4', 'E3 G3 C4 G4 C5', 'E3 F3 A3 C4 F4',
  'D3 F3 A3 C4 F4', 'G2 D3 G3 B3 F4', 'C3 E3 G3 C4 E4', 'C3 G3 Bb3 C4 E4',
  'F2 F3 A3 C4 E4', 'F#2 C3 A3 C4 Eb4', 'Ab2 F3 B3 C4 D4', 'G2 F3 G3 B3 D4',
  'G2 E3 G3 C4 E4', 'G2 D3 G3 C4 F4', 'G2 D3 G3 B3 F4', 'G2 Eb3 A3 C4 F#4',
  'G2 E3 G3 C4 G4', 'G2 D3 G3 C4 F4', 'G2 D3 G3 B3 F4', 'C2 C3 G3 Bb3 E4',
]
const BAR_33 = 'C2 C3 F3 A3 C4 F4 C4 A3 C4 A3 F3 A3 F3 D3 F3 D3'
const BAR_34 = 'C2 B2 G4 B4 D5 F5 D5 B4 D5 B4 G4 B4 D4 F4 E4 D4'
const FINAL = 'C2 C3 E4 G4 C5'

function midi(name) {
  const m = /^([A-G])([#b]?)(\d)$/.exec(name)
  const base = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[m[1]]
  const acc = m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0
  return 12 * (Number(m[3]) + 1) + base + acc
}

function renderBach() {
  const sixteenth = 0.22
  const events = [] // [timeSeconds, midi, holdSeconds]
  let t = 0.5
  const figure = [0, 1, 2, 3, 4, 2, 3, 4]
  for (const bar of PRELUDE) {
    const notes = bar.split(' ').map(midi)
    for (let half = 0; half < 2; half++) {
      figure.forEach((idx, j) => {
        // The first two notes of each half-bar are held, as Bach wrote them.
        const hold = idx === 0 ? sixteenth * 8 : idx === 1 && j === 1 ? sixteenth * 7 : sixteenth * 2.5
        events.push([t + j * sixteenth, notes[idx], hold])
      })
      t += sixteenth * 8
    }
  }
  const slowing = [1, 1.04, 1.08, 1.12, 1.17, 1.22, 1.28, 1.34]
  for (const [b, bar] of [BAR_33, BAR_34].entries()) {
    bar.split(' ').map(midi).forEach((note, j) => {
      const step = sixteenth * (b === 1 ? slowing[Math.floor(j / 2)] : 1)
      events.push([t, note, j < 2 ? sixteenth * 16 : step * 2.5])
      t += step
    })
  }
  t += 0.1
  FINAL.split(' ').map(midi).forEach((note, j) => events.push([t + j * 0.03, note, 7]))
  t += 10

  const n = Math.floor(t * SR)
  const out = new Float32Array(n)
  const harmonics = [1, 0.35, 0.14, 0.06, 0.025]
  for (const [start, note, hold] of events) {
    const f = 440 * Math.pow(2, (note - 69) / 12)
    const s0 = Math.floor(start * SR)
    const decay = 1.1 + (84 - note) * 0.05 // lower notes ring longer
    const release = 0.35
    const len = Math.floor((hold + release + 0.5) * SR)
    const amp = 0.16 * (note < 52 ? 1.15 : 1)
    for (let h = 0; h < harmonics.length; h++) {
      const fh = f * (h + 1)
      if (fh > SR / 2.5) break
      const w = (2 * Math.PI * fh) / SR
      const hDecay = decay / (1 + h * 0.8)
      // Rotating phasor avoids a Math.sin call per sample.
      let re = 1, im = 0
      const cr = Math.cos(w), ci = Math.sin(w)
      const fall = Math.exp(-1 / (hDecay * SR))
      const attack = Math.floor(0.006 * SR)
      const holdEnd = Math.floor(hold * SR)
      const releaseLen = release * SR
      const g = amp * harmonics[h]
      let decayEnv = g
      for (let k = 0; k < len && s0 + k < n; k++) {
        let env = decayEnv
        decayEnv *= fall
        if (k < attack) env *= k / attack
        if (k > holdEnd) env *= Math.max(0, 1 - (k - holdEnd) / releaseLen)
        out[s0 + k] += im * env
        const nr = re * cr - im * ci
        im = re * ci + im * cr
        re = nr
      }
    }
  }
  // Light room reverb so it sits softly in the background.
  const taps = [[0.043, 0.28], [0.071, 0.22], [0.113, 0.16], [0.167, 0.11], [0.241, 0.07]]
  const wet = new Float32Array(n)
  for (const [d, g] of taps) {
    const off = Math.floor(d * SR)
    for (let i = off; i < n; i++) wet[i] += out[i - off] * g
  }
  let lp = 0
  const a = lpCoef(2500)
  for (let i = 0; i < n; i++) {
    lp += a * (wet[i] - lp)
    out[i] += lp
  }
  return out
}

// ---------------------------------------------------------------------------

function makeLoop(raw) {
  const x = XFADE_SECONDS * SR
  const n = raw.length - x
  const out = raw.slice(0, n)
  for (let i = 0; i < x; i++) {
    const g = i / x
    // Equal-power cross-fade of the rendered tail into the head.
    out[i] = raw[n + i] * Math.cos(g * Math.PI * 0.5) + raw[i] * Math.sin(g * Math.PI * 0.5)
  }
  return out
}

function normalise(buf, targetRms) {
  let sum = 0
  for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i]
  const rms = Math.sqrt(sum / buf.length) || 1
  let gain = targetRms / rms
  let peak = 0
  for (let i = 0; i < buf.length; i++) peak = Math.max(peak, Math.abs(buf[i]))
  if (peak * gain > 0.95) gain = 0.95 / peak
  for (let i = 0; i < buf.length; i++) buf[i] *= gain
}

function toWav(buf) {
  const bytes = new ArrayBuffer(44 + buf.length * 2)
  const v = new DataView(bytes)
  const str = (o, s) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)))
  str(0, 'RIFF')
  v.setUint32(4, 36 + buf.length * 2, true)
  str(8, 'WAVE')
  str(12, 'fmt ')
  v.setUint32(16, 16, true)
  v.setUint16(20, 1, true)
  v.setUint16(22, 1, true)
  v.setUint32(24, SR, true)
  v.setUint32(28, SR * 2, true)
  v.setUint16(32, 2, true)
  v.setUint16(34, 16, true)
  str(36, 'data')
  v.setUint32(40, buf.length * 2, true)
  for (let i = 0; i < buf.length; i++) {
    const s = Math.max(-1, Math.min(1, buf[i]))
    v.setInt16(44 + i * 2, s * 32767, true)
  }
  return bytes
}

const LEVELS = { white: 0.12, fire: 0.14, waves: 0.15, rainforest: 0.1, snow: 0.13, wind: 0.14, bach: 0.12 }

function generate(name) {
  const raw = generators[name](rng(name.length * 7919 + 17))
  const buf = name === 'bach' ? raw : makeLoop(raw)
  normalise(buf, LEVELS[name])
  return toWav(buf)
}

if (typeof self !== 'undefined' && typeof self.postMessage === 'function' && typeof module === 'undefined') {
  self.onmessage = (e) => {
    const { id, name } = e.data
    try {
      const wav = generate(name)
      self.postMessage({ id, name, wav }, [wav])
    } catch (err) {
      self.postMessage({ id, name, error: String(err) })
    }
  }
}

if (typeof module !== 'undefined') module.exports = { generate, SR }
