import type { Mascot, MascotId } from '../types'

export const MASCOTS: Record<MascotId, Mascot> = {
  lion: {
    id: 'lion',
    name: 'Larry the Lion',
    role: 'King of the Home Row',
    colorClass: 'bg-outback',
    bubbleClass: 'border-outback text-outback',
  },
  platypus: {
    id: 'platypus',
    name: 'Percy the Platypus',
    role: 'Word Explorer',
    colorClass: 'bg-billabong',
    bubbleClass: 'border-billabong text-billabong',
  },
  emu: {
    id: 'emu',
    name: 'Ellie the Emu',
    role: 'Speedy Reading Runner',
    colorClass: 'bg-gum',
    bubbleClass: 'border-gum text-gum',
  },
}

const LION_LINES = [
  "Roar! Keep your fingers on the home row, mate!",
  "You're doing pawsome!",
  "Steady paws, steady typing!",
  "A lion never looks down at the keyboard!",
]

const PLATYPUS_LINES = [
  "Let's paddle through these words together!",
  "Ripper typing, that's the spirit!",
  "Every word is a new billabong to explore!",
  "You found the right keys - beauty!",
]

const EMU_LINES = [
  "Zoom zoom! Let's read like the wind!",
  "Fast legs, fast fingers - you've got this!",
  "Keep running through that story!",
  "You're faster than an emu on the outback track!",
]

export const ENCOURAGEMENT: Record<MascotId, string[]> = {
  lion: LION_LINES,
  platypus: PLATYPUS_LINES,
  emu: EMU_LINES,
}

export function randomLine(id: MascotId): string {
  const lines = ENCOURAGEMENT[id]
  return lines[Math.floor(Math.random() * lines.length)]
}
