import { LionMascot, PlatypusMascot, EmuMascot } from './Mascots'

interface Props {
  onStart: () => void
}

export default function HomeScreen({ onStart }: Props) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-8 text-center">
      <h1 className="font-display text-3xl font-extrabold text-slate-800 sm:text-5xl">
        <span className="text-outback">Type</span> <span className="text-billabong">Mates</span>
      </h1>
      <p className="max-w-xl font-body text-lg text-slate-600 sm:text-xl">
        A fun typing and reading adventure for Aussie kids from Prep to Year 5 - built to get you exam-ready for your
        NAPLAN story writing!
      </p>

      <div className="flex flex-wrap items-end justify-center gap-6 py-4">
        <div className="flex flex-col items-center gap-2">
          <div className="h-28 w-28 animate-floaty sm:h-36 sm:w-36">
            <LionMascot />
          </div>
          <p className="font-display font-bold text-outback">Larry the Lion</p>
          <p className="max-w-[9rem] text-xs text-slate-500">Home row hero</p>
        </div>
        <div className="flex flex-col items-center gap-2" style={{ animationDelay: '0.3s' }}>
          <div className="h-28 w-28 animate-floaty sm:h-36 sm:w-36" style={{ animationDelay: '0.5s' }}>
            <PlatypusMascot />
          </div>
          <p className="font-display font-bold text-billabong">Percy the Platypus</p>
          <p className="max-w-[9rem] text-xs text-slate-500">Word explorer</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-28 w-28 animate-floaty sm:h-36 sm:w-36" style={{ animationDelay: '1s' }}>
            <EmuMascot />
          </div>
          <p className="font-display font-bold text-gum">Ellie the Emu</p>
          <p className="max-w-[9rem] text-xs text-slate-500">Speedy reader</p>
        </div>
      </div>

      <button
        onClick={onStart}
        className="animate-wiggle rounded-full bg-gradient-to-r from-outback via-amber-400 to-billabong px-10 py-4 font-display text-xl font-extrabold text-white shadow-lg transition hover:brightness-105 active:scale-95"
      >
        Let's Start Typing!
      </button>

      <div className="grid grid-cols-1 gap-3 pt-4 text-left sm:grid-cols-3">
        {[
          { icon: '⌨️', text: 'Short, playful lessons for every year level, Prep to Year 5' },
          { icon: '📖', text: 'Reading passages and quizzes matched to your level' },
          { icon: '🏆', text: 'A NAPLAN-style story challenge to get exam-ready' },
        ].map((f) => (
          <div key={f.text} className="rounded-2xl bg-white/80 p-4 shadow">
            <span className="text-2xl">{f.icon}</span>
            <p className="mt-1 font-body text-sm font-semibold text-slate-600">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
