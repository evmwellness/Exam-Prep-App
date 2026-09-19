import { HashRouter, Routes, Route } from 'react-router-dom'
import BottomNav from './components/layout/BottomNav'
import Dashboard from './pages/Dashboard'
import PracticeSetup from './pages/PracticeSetup'
import Session from './pages/Session'
import Results from './pages/Results'
import History from './pages/History'
import SessionDetail from './pages/SessionDetail'
import WeakAreas from './pages/WeakAreas'
import Settings from './pages/Settings'
import ReminderWatcher from './components/ReminderWatcher'

export default function App() {
  return (
    <HashRouter>
      <ReminderWatcher />
      <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
        <div className="max-w-md mx-auto min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/practice" element={<PracticeSetup />} />
            <Route path="/session" element={<Session />} />
            <Route path="/results" element={<Results />} />
            <Route path="/history" element={<History />} />
            <Route path="/history/:sessionId" element={<SessionDetail />} />
            <Route path="/weak-areas" element={<WeakAreas />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
      <BottomNav />
    </HashRouter>
  )
}
