type Mood = 'happy' | 'excited' | 'thinking' | 'sad' | 'wink';

interface MascotProps {
  mood?: Mood;
  className?: string;
}

function Eyes({ mood, cx1, cx2, cy }: { mood: Mood; cx1: number; cx2: number; cy: number }) {
  if (mood === 'sad') {
    return (
      <>
        <path d={`M ${cx1 - 4} ${cy + 2} q 4 -6 8 0`} stroke="#2d2a4a" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d={`M ${cx2 - 4} ${cy + 2} q 4 -6 8 0`} stroke="#2d2a4a" strokeWidth="2" fill="none" strokeLinecap="round" />
      </>
    );
  }
  if (mood === 'wink') {
    return (
      <>
        <path d={`M ${cx1 - 4} ${cy} q 4 4 8 0`} stroke="#2d2a4a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx={cx2} cy={cy} r="3.4" fill="#2d2a4a" />
      </>
    );
  }
  const r = mood === 'excited' ? 4 : 3.4;
  return (
    <>
      <circle cx={cx1} cy={cy} r={r} fill="#2d2a4a" />
      <circle cx={cx2} cy={cy} r={r} fill="#2d2a4a" />
      <circle cx={cx1 + 1} cy={cy - 1} r="1" fill="white" />
      <circle cx={cx2 + 1} cy={cy - 1} r="1" fill="white" />
    </>
  );
}

export function Penguin({ mood = 'happy', className = '' }: MascotProps) {
  return (
    <svg viewBox="0 0 120 130" className={className} role="img" aria-label="Percy the penguin">
      <ellipse cx="60" cy="122" rx="30" ry="6" fill="#000" opacity="0.08" />
      {/* feet */}
      <path d="M42 108 q -10 10 -18 8 q 6 6 20 2 z" fill="#ffb703" />
      <path d="M78 108 q 10 10 18 8 q -6 6 -20 2 z" fill="#ffb703" />
      {/* body */}
      <ellipse cx="60" cy="70" rx="38" ry="46" fill="#2d3142" />
      <ellipse cx="60" cy="78" rx="25" ry="34" fill="#f4f7fb" />
      {/* wings */}
      <path
        className={mood === 'excited' ? 'animate-wiggle' : ''}
        style={{ transformOrigin: '26px 60px' }}
        d="M26 46 q -18 10 -14 38 q 10 -4 18 -16 z"
        fill="#2d3142"
      />
      <path
        className={mood === 'excited' ? 'animate-wiggle' : ''}
        style={{ transformOrigin: '94px 60px' }}
        d="M94 46 q 18 10 14 38 q -10 -4 -18 -16 z"
        fill="#2d3142"
      />
      {/* face */}
      <Eyes mood={mood} cx1={49} cx2={71} cy={56} />
      <path d="M52 66 q 8 8 16 0 q -8 10 -16 0 z" fill="#ffb703" />
      {/* cheeks */}
      <circle cx="42" cy="66" r="5" fill="#ffb4a2" opacity="0.6" />
      <circle cx="78" cy="66" r="5" fill="#ffb4a2" opacity="0.6" />
      {/* scarf */}
      <path d="M32 78 q 28 14 56 0 l -4 12 q -24 10 -48 0 z" fill="#ff5d8f" />
    </svg>
  );
}

export function Koala({ mood = 'happy', className = '' }: MascotProps) {
  return (
    <svg viewBox="0 0 120 130" className={className} role="img" aria-label="Kiki the koala">
      <ellipse cx="60" cy="122" rx="30" ry="6" fill="#000" opacity="0.08" />
      {/* ears */}
      <circle cx="22" cy="34" r="20" fill="#9aa5b1" />
      <circle cx="98" cy="34" r="20" fill="#9aa5b1" />
      <circle cx="22" cy="34" r="11" fill="#e7ebf0" />
      <circle cx="98" cy="34" r="11" fill="#e7ebf0" />
      {/* head */}
      <ellipse cx="60" cy="62" rx="40" ry="38" fill="#b6c0cc" />
      {/* body */}
      <ellipse cx="60" cy="112" rx="30" ry="22" fill="#b6c0cc" />
      {/* big nose */}
      <ellipse cx="60" cy="72" rx="15" ry="11" fill="#3a3f47" />
      <ellipse cx="55" cy="68" rx="3" ry="2" fill="white" opacity="0.5" />
      {/* face */}
      <Eyes mood={mood} cx1={42} cx2={78} cy={52} />
      {/* cheeks */}
      <circle cx="30" cy="60" r="6" fill="#ffb4a2" opacity="0.55" />
      <circle cx="90" cy="60" r="6" fill="#ffb4a2" opacity="0.55" />
      {/* leaf accessory */}
      <path
        className={mood === 'excited' ? 'animate-wiggle' : ''}
        style={{ transformOrigin: '96px 18px' }}
        d="M96 8 q 14 4 10 20 q -14 -2 -10 -20 z"
        fill="#57cc99"
      />
    </svg>
  );
}

export type { Mood };
