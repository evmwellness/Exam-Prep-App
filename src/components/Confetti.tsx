import { useMemo } from 'react';

const COLORS = ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#b185db', '#ff8fab'];

export function Confetti({ count = 60 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const left = Math.random() * 100;
        const duration = 2.5 + Math.random() * 2;
        const delay = Math.random() * 1.5;
        const size = 6 + Math.random() * 8;
        const color = COLORS[i % COLORS.length];
        const rounded = i % 2 === 0;
        return { left, duration, delay, size, color, rounded, i };
      }),
    [count],
  );
  return (
    <div aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.i}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.rounded ? '50%' : '2px',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
