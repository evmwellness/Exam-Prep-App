import { Penguin, Koala } from '../components/Mascots';
import { SpeechBubble } from '../components/SpeechBubble';

interface HomeProps {
  onStart: () => void;
  onProgress: () => void;
  quizzesCompleted: number;
}

export function Home({ onStart, onProgress, quizzesCompleted }: HomeProps) {
  return (
    <div className="flex flex-col items-center text-center px-4 pb-16 pt-4 sm:pt-8">
      <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-purple-700 drop-shadow-sm mb-2">
        Let's Learn Math!
      </h1>
      <p className="text-lg sm:text-xl text-slate-600 max-w-xl mb-8">
        Practice addition, subtraction, multiplication and division with Percy the Penguin
        and Kiki the Koala.
      </p>

      <div className="flex items-end justify-center gap-4 sm:gap-8 mb-8">
        <div className="flex flex-col items-center animate-bounce-in">
          <SpeechBubble color="#eaf6ff" className="mb-2">
            Ready to play?
          </SpeechBubble>
          <Penguin mood="excited" className="w-28 h-28 sm:w-40 sm:h-40" />
        </div>
        <div className="flex flex-col items-center animate-bounce-in" style={{ animationDelay: '0.15s' }}>
          <SpeechBubble color="#fff0e0" className="mb-2" tailSide="right">
            Let's do this!
          </SpeechBubble>
          <Koala mood="happy" className="w-28 h-28 sm:w-40 sm:h-40" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onStart}
          className="font-heading font-extrabold text-xl sm:text-2xl text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded-3xl px-10 py-5 shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          🚀 Start Practicing
        </button>
        <button
          onClick={onProgress}
          className="font-heading font-extrabold text-xl sm:text-2xl text-purple-700 bg-white rounded-3xl px-10 py-5 shadow-lg hover:scale-105 active:scale-95 transition-transform border-4 border-purple-200"
        >
          📈 My Progress
        </button>
      </div>

      {quizzesCompleted > 0 && (
        <p className="mt-8 text-slate-500 font-heading">
          You've completed <span className="font-extrabold text-purple-600">{quizzesCompleted}</span> quiz
          {quizzesCompleted === 1 ? '' : 'zes'} so far. Keep it up!
        </p>
      )}
    </div>
  );
}
