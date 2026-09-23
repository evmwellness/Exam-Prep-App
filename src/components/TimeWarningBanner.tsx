function formatTime(ms: number): string {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function TimeWarningBanner({ remainingMs }: { remainingMs: number }) {
  return (
    <div className="sticky top-0 z-40 flex justify-center px-4 pt-2">
      <div className="flex items-center gap-2 bg-amber-100 border-2 border-amber-400 text-amber-800 font-heading font-bold rounded-full px-4 py-2 shadow-lg animate-pop">
        <span className="text-xl">⚠️</span>
        <span>Almost time to stop! {formatTime(remainingMs)} left</span>
      </div>
    </div>
  );
}
