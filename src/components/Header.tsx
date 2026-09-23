import { Penguin, Koala } from './Mascots';

interface HeaderProps {
  onHome: () => void;
  onProgress: () => void;
  onParentZone: () => void;
  stars: number;
  active: 'home' | 'progress' | 'other';
  locked?: boolean;
}

export function Header({ onHome, onProgress, onParentZone, stars, active, locked = false }: HeaderProps) {
  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
      <button
        onClick={onHome}
        className="flex items-center gap-2 font-heading text-xl sm:text-3xl font-extrabold text-purple-700 hover:scale-105 transition-transform"
      >
        <Penguin className="w-9 h-9 sm:w-12 sm:h-12" />
        <Koala className="w-9 h-9 sm:w-12 sm:h-12 -ml-3" />
        <span className="drop-shadow-sm">MathQuest</span>
      </button>

      <nav className="flex items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-1 bg-white/80 rounded-full px-3 py-1.5 shadow font-heading font-bold text-amber-600 text-sm sm:text-base">
          <span>⭐</span>
          <span>{stars}</span>
        </div>
        <button
          onClick={onHome}
          disabled={locked}
          className={`hidden sm:inline-block rounded-full px-4 py-2 font-heading font-bold text-sm transition-colors ${
            locked
              ? 'bg-white/40 text-purple-300 cursor-not-allowed'
              : active === 'home'
              ? 'bg-purple-600 text-white'
              : 'bg-white/70 text-purple-700 hover:bg-white'
          }`}
        >
          Home
        </button>
        <button
          onClick={onProgress}
          disabled={locked}
          className={`rounded-full px-4 py-2 font-heading font-bold text-sm transition-colors ${
            locked
              ? 'bg-white/40 text-purple-300 cursor-not-allowed'
              : active === 'progress'
              ? 'bg-purple-600 text-white'
              : 'bg-white/70 text-purple-700 hover:bg-white'
          }`}
        >
          My Progress
        </button>
        <button
          onClick={onParentZone}
          title="Parent Zone"
          aria-label="Parent Zone"
          className="rounded-full w-9 h-9 flex items-center justify-center bg-white/70 hover:bg-white shadow text-lg"
        >
          🔒
        </button>
      </nav>
    </header>
  );
}
