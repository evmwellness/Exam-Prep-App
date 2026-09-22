import type { ReactNode } from 'react';

interface SpeechBubbleProps {
  children: ReactNode;
  color?: string;
  className?: string;
  tailSide?: 'left' | 'right';
}

export function SpeechBubble({ children, color = '#fff', className = '', tailSide = 'left' }: SpeechBubbleProps) {
  return (
    <div
      className={`relative rounded-3xl px-4 py-3 shadow-md border-2 border-white/60 font-heading text-sm sm:text-base ${className}`}
      style={{ background: color }}
    >
      {children}
      <span
        className={`absolute -bottom-2 ${tailSide === 'left' ? 'left-8' : 'right-8'} w-4 h-4 rotate-45 border-b-2 border-r-2 border-white/60`}
        style={{ background: color }}
      />
    </div>
  );
}
