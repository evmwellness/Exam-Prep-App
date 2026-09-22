import { useEffect, useState } from 'react'
import type { MascotId } from '../types'
import { MASCOTS, randomLine } from '../data/mascots'
import { MascotFor } from './Mascots'

interface Props {
  mascot: MascotId
  message?: string
  size?: 'sm' | 'md' | 'lg'
  talking?: boolean
  floaty?: boolean
}

const SIZES = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-36 h-36',
}

export default function MascotBubble({ mascot, message, size = 'md', talking = false, floaty = true }: Props) {
  const info = MASCOTS[mascot]
  const [line, setLine] = useState(message ?? randomLine(mascot))

  useEffect(() => {
    setLine(message ?? randomLine(mascot))
  }, [message, mascot])

  return (
    <div className="flex items-end gap-3">
      <div className={`${SIZES[size]} ${floaty ? 'animate-floaty' : ''} shrink-0 drop-shadow-lg`}>
        <MascotFor id={mascot} talking={talking} />
      </div>
      <div className={`relative max-w-xs rounded-3xl border-4 bg-white/95 px-4 py-3 shadow-md ${info.bubbleClass}`}>
        <p className="font-display text-sm font-semibold leading-snug sm:text-base">{line}</p>
        <span className="font-body block text-xs font-bold uppercase tracking-wide opacity-70">{info.name}</span>
        <div
          className={`absolute -left-3 bottom-4 h-4 w-4 rotate-45 border-b-4 border-l-4 bg-white/95 ${info.bubbleClass}`}
        />
      </div>
    </div>
  )
}
