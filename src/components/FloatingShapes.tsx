const SHAPES = [
  { top: '6%', left: '4%', size: 70, color: '#ffd166', delay: '0s', kind: 'circle' },
  { top: '70%', left: '2%', size: 50, color: '#06d6a0', delay: '1.5s', kind: 'circle' },
  { top: '12%', left: '88%', size: 60, color: '#ef476f', delay: '0.8s', kind: 'circle' },
  { top: '78%', left: '90%', size: 90, color: '#118ab2', delay: '2.2s', kind: 'circle' },
  { top: '45%', left: '94%', size: 36, color: '#ffd166', delay: '1s', kind: 'circle' },
  { top: '38%', left: '1%', size: 34, color: '#ef476f', delay: '2.6s', kind: 'circle' },
];

const SQUARES = [
  { top: '20%', left: '80%', size: 34, color: '#06d6a0', rotate: 12 },
  { top: '60%', left: '6%', size: 28, color: '#118ab2', rotate: -10 },
];

const TRIANGLES = [
  { top: '85%', left: '18%', size: 30, color: '#ffd166', rotate: 8 },
  { top: '8%', left: '50%', size: 26, color: '#ef476f', rotate: -18 },
];

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {SHAPES.map((s, i) => (
        <div
          key={`c-${i}`}
          className="shape"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: s.color,
            animationDelay: s.delay,
          }}
        />
      ))}
      {SQUARES.map((s, i) => (
        <div
          key={`sq-${i}`}
          className="shape rounded-xl"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: s.color,
            transform: `rotate(${s.rotate}deg)`,
          }}
        />
      ))}
      {TRIANGLES.map((t, i) => (
        <div
          key={`tr-${i}`}
          className="shape rounded-md"
          style={{
            top: t.top,
            left: t.left,
            width: 0,
            height: 0,
            background: 'transparent',
            borderLeft: `${t.size / 2}px solid transparent`,
            borderRight: `${t.size / 2}px solid transparent`,
            borderBottom: `${t.size}px solid ${t.color}`,
            transform: `rotate(${t.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
