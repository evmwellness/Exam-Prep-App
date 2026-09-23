import { Koala, Penguin } from '../components/Mascots';
import { SpeechBubble } from '../components/SpeechBubble';

interface TimesUpProps {
  onOpenParentZone: () => void;
}

export function TimesUp({ onOpenParentZone }: TimesUpProps) {
  return (
    <div className="px-4 pb-16 pt-8 max-w-xl mx-auto text-center">
      <p className="text-6xl mb-4">⏰</p>
      <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-purple-700 mb-3">
        Screen Time's Up!
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        Great practicing today! Time to take a break from the screen.
      </p>

      <div className="flex items-end justify-center gap-4 mb-10">
        <Penguin mood="happy" className="w-24 h-24 sm:w-32 sm:h-32" />
        <SpeechBubble color="#eaf6ff" className="max-w-xs">
          See you next time!
        </SpeechBubble>
        <Koala mood="happy" className="w-24 h-24 sm:w-32 sm:h-32" />
      </div>

      <button
        onClick={onOpenParentZone}
        className="font-heading font-bold text-purple-700 bg-white rounded-2xl px-6 py-3 shadow-md border-4 border-purple-200 hover:scale-105 active:scale-95 transition-transform"
      >
        🔒 Parent Zone — unlock more time
      </button>
    </div>
  );
}
