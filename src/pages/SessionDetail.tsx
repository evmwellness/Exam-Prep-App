import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../db/db'
import { practiceItemsByUid } from '../data/practiceItems'
import { formatSeconds } from '../lib/examConfig'
import QuestionReview from '../components/question/QuestionReview'
import { ChevronRightIcon } from '../components/layout/icons'

export default function SessionDetail() {
  const { sessionId } = useParams<{ sessionId: string }>()
  const id = Number(sessionId)

  const session = useLiveQuery(() => db.sessions.get(id), [id], undefined)

  const rows = useMemo(() => {
    if (!session) return []
    return session.questionUids
      .map((uid) => ({ uid, item: practiceItemsByUid.get(uid), selectedKey: session.answers[uid] ?? null }))
      .filter((r) => r.item != null)
  }, [session])

  if (session === undefined) {
    return <div className="flex-1 px-4 pt-6 text-slate-500 text-sm">Loading…</div>
  }
  if (session === null) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <p className="text-slate-400">Session not found.</p>
        <Link to="/history" className="text-sky-400 font-medium">Back to history</Link>
      </div>
    )
  }

  const accuracy = Math.round((session.correctCount / session.totalCount) * 100)

  return (
    <div className="flex-1 px-4 pt-6 pb-8">
      <Link to="/history" className="text-xs text-sky-400 flex items-center gap-1 mb-3 rotate-180 w-fit">
        <ChevronRightIcon width={14} height={14} />
      </Link>
      <h1 className="text-xl font-semibold mb-1">
        {session.exam} · {new Date(session.finishedAt ?? session.startedAt).toLocaleDateString(undefined, { dateStyle: 'medium' })}
      </h1>
      <p className="text-sm text-slate-400 mb-5">
        {session.correctCount}/{session.totalCount} correct ({accuracy}%) · {formatSeconds(session.totalTimeSec)} total
      </p>

      <div className="space-y-2">
        {rows.map((r, i) => (
          <QuestionReview key={r.uid} item={r.item!} selectedKey={r.selectedKey} index={i} />
        ))}
      </div>
    </div>
  )
}
