interface Props {
  value: number
  max?: number
  label?: string
  size?: 'sm' | 'md'
}

export default function ProgressStars({ value, max = 3, label, size = 'md' }: Props) {
  const textSize = size === 'sm' ? 'text-sm' : 'text-xl'
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className={`flex gap-0.5 ${textSize}`}>
        {Array.from({ length: max }).map((_, i) => (
          <span key={i} className={i < value ? '' : 'opacity-25 grayscale'}>
            ⭐
          </span>
        ))}
      </div>
      {label && <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500">{label}</span>}
    </div>
  )
}
