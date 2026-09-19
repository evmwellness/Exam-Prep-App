import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { HomeIcon, PracticeIcon, HistoryIcon, TargetIcon, SettingsIcon } from './icons'

const TABS = [
  { to: '/', label: 'Home', icon: HomeIcon, end: true },
  { to: '/practice', label: 'Practice', icon: PracticeIcon, end: false },
  { to: '/history', label: 'History', icon: HistoryIcon, end: false },
  { to: '/weak-areas', label: 'Weak Areas', icon: TargetIcon, end: false },
  { to: '/settings', label: 'Settings', icon: SettingsIcon, end: false },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t border-slate-800 bg-slate-950/95 backdrop-blur pb-[env(safe-area-inset-bottom)]">
      <ul className="flex justify-between max-w-md mx-auto px-1">
        {TABS.map(({ to, label, icon: Icon, end }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                clsx(
                  'flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium transition-colors',
                  isActive ? 'text-sky-400' : 'text-slate-500 hover:text-slate-300',
                )
              }
            >
              <Icon width={20} height={20} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
