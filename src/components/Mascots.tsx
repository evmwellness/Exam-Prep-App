interface MascotSvgProps {
  className?: string
  talking?: boolean
}

export function LionMascot({ className = '', talking = false }: MascotSvgProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Larry the Lion">
      <ellipse cx="100" cy="180" rx="55" ry="10" fill="#000" opacity="0.08" />
      {/* mane */}
      <g>
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2
          const x = 100 + Math.cos(angle) * 62
          const y = 92 + Math.sin(angle) * 62
          return <circle key={i} cx={x} cy={y} r="20" fill="#e0791f" />
        })}
        <circle cx="100" cy="92" r="52" fill="#f2a53c" />
      </g>
      {/* ears */}
      <circle cx="66" cy="55" r="12" fill="#f2a53c" />
      <circle cx="134" cy="55" r="12" fill="#f2a53c" />
      <circle cx="66" cy="57" r="6" fill="#fbd9a5" />
      <circle cx="134" cy="57" r="6" fill="#fbd9a5" />
      {/* face */}
      <ellipse cx="100" cy="100" rx="38" ry="34" fill="#fbd9a5" />
      {/* eyes */}
      <circle cx="86" cy="94" r="6" fill="#4a2e0a" />
      <circle cx="114" cy="94" r="6" fill="#4a2e0a" />
      <circle cx="88" cy="92" r="2" fill="#fff" />
      <circle cx="116" cy="92" r="2" fill="#fff" />
      {/* eyebrows */}
      <path d="M78 84 q8 -6 16 0" stroke="#4a2e0a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M106 84 q8 -6 16 0" stroke="#4a2e0a" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* nose + muzzle */}
      <ellipse cx="100" cy="112" rx="14" ry="10" fill="#fff4e2" />
      <ellipse cx="100" cy="104" rx="8" ry="6" fill="#7a4a1e" />
      <path
        d={talking ? 'M92 118 q8 10 16 0' : 'M92 116 q8 6 16 0'}
        stroke="#4a2e0a"
        strokeWidth="2.5"
        fill={talking ? '#7a2e2e' : 'none'}
        strokeLinecap="round"
      />
      {/* whiskers */}
      <path d="M60 108 h20 M60 116 h18" stroke="#c98a3a" strokeWidth="2" strokeLinecap="round" />
      <path d="M140 108 h-20 M140 116 h-18" stroke="#c98a3a" strokeWidth="2" strokeLinecap="round" />
      {/* crown */}
      <path d="M78 44 l6 -16 10 10 6 -18 6 18 10 -10 6 16 z" fill="#ffd166" stroke="#e0a324" strokeWidth="2" />
    </svg>
  )
}

export function PlatypusMascot({ className = '', talking = false }: MascotSvgProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Percy the Platypus">
      <ellipse cx="100" cy="182" rx="55" ry="9" fill="#000" opacity="0.08" />
      {/* tail */}
      <ellipse cx="150" cy="140" rx="30" ry="18" fill="#3f7d6b" transform="rotate(20 150 140)" />
      {/* body */}
      <ellipse cx="100" cy="120" rx="55" ry="42" fill="#4d9b85" />
      <ellipse cx="100" cy="130" rx="40" ry="26" fill="#bfe6da" />
      {/* feet */}
      <ellipse cx="70" cy="158" rx="14" ry="8" fill="#e8a23c" />
      <ellipse cx="130" cy="158" rx="14" ry="8" fill="#e8a23c" />
      {/* head */}
      <ellipse cx="70" cy="88" rx="34" ry="30" fill="#4d9b85" />
      {/* bill */}
      <ellipse cx={talking ? 36 : 34} cy="96" rx="26" ry="15" fill="#e8a23c" />
      <ellipse cx={talking ? 36 : 34} cy={talking ? 101 : 98} rx="22" ry={talking ? 8 : 5} fill="#c9821f" />
      {/* eyes */}
      <circle cx="66" cy="76" r="6" fill="#20342f" />
      <circle cx="86" cy="76" r="6" fill="#20342f" />
      <circle cx="68" cy="74" r="2" fill="#fff" />
      <circle cx="88" cy="74" r="2" fill="#fff" />
      {/* cheek blush */}
      <circle cx="60" cy="90" r="6" fill="#f2a4a4" opacity="0.6" />
      <circle cx="94" cy="90" r="6" fill="#f2a4a4" opacity="0.6" />
      {/* spikes on back like a crown of fur */}
      <path d="M60 62 q10 -14 20 0 q10 -14 20 0" stroke="#2e6b58" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function EmuMascot({ className = '', talking = false }: MascotSvgProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Ellie the Emu">
      <ellipse cx="100" cy="188" rx="50" ry="8" fill="#000" opacity="0.08" />
      {/* legs */}
      <rect x="86" y="150" width="8" height="34" rx="4" fill="#d99a3d" />
      <rect x="112" y="150" width="8" height="34" rx="4" fill="#d99a3d" />
      <path d="M82 184 l8 -6 8 6 M108 184 l8 -6 8 6" stroke="#d99a3d" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* body */}
      <ellipse cx="100" cy="130" rx="46" ry="40" fill="#8a7863" />
      <ellipse cx="100" cy="140" rx="34" ry="26" fill="#c9bda8" />
      {/* wing */}
      <ellipse cx="140" cy="128" rx="14" ry="22" fill="#6f5f4d" transform="rotate(20 140 128)" />
      {/* neck */}
      <path d="M92 100 q-6 -40 4 -62" stroke="#8a7863" strokeWidth="26" strokeLinecap="round" fill="none" />
      {/* head */}
      <circle cx="98" cy="38" r="18" fill="#8a7863" />
      {/* eyes */}
      <circle cx="92" cy="34" r="4.5" fill="#2b2118" />
      <circle cx="93.5" cy="32.5" r="1.5" fill="#fff" />
      {/* beak */}
      <path
        d={talking ? 'M110 36 l16 2 -16 8 z' : 'M110 38 l18 -2 -18 6 z'}
        fill="#3d84c9"
      />
      {/* feather tuft */}
      <path d="M92 22 q4 -10 10 -4 q2 -8 8 0" stroke="#6f5f4d" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function MascotFor({
  id,
  className,
  talking,
}: {
  id: 'lion' | 'platypus' | 'emu'
  className?: string
  talking?: boolean
}) {
  if (id === 'lion') return <LionMascot className={className} talking={talking} />
  if (id === 'platypus') return <PlatypusMascot className={className} talking={talking} />
  return <EmuMascot className={className} talking={talking} />
}
