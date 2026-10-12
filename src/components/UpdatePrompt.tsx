import { useRegisterSW } from 'virtual:pwa-register/react'

const UPDATE_CHECK_INTERVAL_MS = 30 * 60 * 1000

export default function UpdatePrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    offlineReady: [offlineReady, setOfflineReady],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_url, registration) {
      if (!registration) return
      window.setInterval(() => registration.update(), UPDATE_CHECK_INTERVAL_MS)
    },
  })

  if (needRefresh) {
    return (
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-3">
        <div className="max-w-md w-full flex items-center justify-between gap-3 rounded-xl bg-sky-500 text-slate-950 px-4 py-2.5 shadow-lg">
          <p className="text-sm font-medium">A new version is ready</p>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={() => setNeedRefresh(false)} className="text-xs font-medium opacity-70">
              Later
            </button>
            <button
              onClick={() => updateServiceWorker(true)}
              className="text-xs font-semibold bg-slate-950 text-sky-400 px-3 py-1.5 rounded-full"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (offlineReady) {
    return (
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-3">
        <div className="max-w-md w-full flex items-center justify-between gap-3 rounded-xl bg-slate-800 text-slate-200 px-4 py-2.5 shadow-lg">
          <p className="text-sm">Ready to work fully offline.</p>
          <button onClick={() => setOfflineReady(false)} className="text-xs font-medium text-slate-400 shrink-0">
            Dismiss
          </button>
        </div>
      </div>
    )
  }

  return null
}
