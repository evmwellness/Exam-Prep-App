import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { getStreakCalendar } from '../lib/streak'

interface Props {
  days?: number
}

export default function StreakCalendar({ days = 70 }: Props) {
  const [cells, setCells] = useState<{ date: string; questionsAnswered: number; correctAnswered: number }[]>([])

  useEffect(() => {
    getStreakCalendar(days).then(setCells)
  }, [days])

  function intensity(count: number): string {
    if (count === 0) return 'bg-slate-800'
    if (count < 5) return 'bg-sky-900'
    if (count < 15) return 'bg-sky-700'
    if (count < 30) return 'bg-sky-500'
    return 'bg-sky-300'
  }

  return (
    <div className="grid grid-cols-10 gap-1">
      {cells.map((c) => (
        <div
          key={c.date}
          title={`${c.date}: ${c.questionsAnswered} question${c.questionsAnswered === 1 ? '' : 's'}`}
          className={clsx('aspect-square rounded-sm', intensity(c.questionsAnswered))}
        />
      ))}
    </div>
  )
}
