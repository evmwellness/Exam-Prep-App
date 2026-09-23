import type { QuizResult } from '../types';
import { getOperationMeta } from '../data/operations';
import { starsForResult } from '../data/storage';
import { Koala, Penguin } from '../components/Mascots';
import { SpeechBubble } from '../components/SpeechBubble';
import { Confetti } from '../components/Confetti';

interface ResultsProps {
  result: QuizResult;
  titleLabel: string;
  onRetry: () => void;
  onChooseAnother: () => void;
  onMemoryCheck?: () => void;
  onHome: () => void;
}

export function Results({ result, titleLabel, onRetry, onChooseAnother, onMemoryCheck, onHome }: ResultsProps) {
  const percent = Math.round((result.correct / result.total) * 100);
  const stars = starsForResult(result);
  const great = percent >= 70;

  const message =
    percent === 100
      ? "Perfect score! You're a math superstar!"
      : percent >= 70
      ? 'Awesome work! You really know this!'
      : percent >= 40
      ? "Good effort! A little more practice and you'll ace it."
      : "Nice try! Let's practice this one some more.";

  return (
    <div className="px-4 pb-16 max-w-2xl mx-auto text-center">
      {great && <Confetti />}

      <p className="font-heading font-bold text-slate-500 mb-1">{titleLabel}</p>
      <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-purple-700 mb-4">
        {result.correct} / {result.total} Correct!
      </h2>

      <div className="text-4xl sm:text-5xl mb-6">
        {'⭐'.repeat(stars)}
        {'☆'.repeat(3 - stars)}
      </div>

      <div className="flex items-end justify-center gap-4 mb-8">
        <Penguin mood={great ? 'excited' : 'happy'} className="w-24 h-24 sm:w-32 sm:h-32" />
        <SpeechBubble color={great ? '#e3fbe6' : '#eaf6ff'} className="max-w-xs">
          {message}
        </SpeechBubble>
        <Koala mood={great ? 'excited' : 'happy'} className="w-24 h-24 sm:w-32 sm:h-32" />
      </div>

      <div className="bg-white/80 rounded-3xl p-4 sm:p-6 shadow-md mb-8 text-left max-h-64 overflow-y-auto">
        <h3 className="font-heading font-extrabold text-slate-700 mb-3">Question review</h3>
        <ul className="space-y-2">
          {result.answers.map((a, i) => {
            const q = a.question;
            const qMeta = getOperationMeta(q.operation);
            const label = q.operation === 'division' ? `${q.a} ÷ ${q.b}` : `${q.a} ${qMeta.symbol} ${q.b}`;
            return (
              <li key={i} className="flex items-center justify-between text-sm sm:text-base">
                <span className="font-heading font-bold text-slate-600">
                  {label} = {q.answer}
                </span>
                <span className={a.correct ? 'text-green-600 font-bold' : 'text-red-500 font-bold'}>
                  {a.correct ? '✔ correct' : `✘ you said ${a.userAnswer}`}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap">
        <button
          onClick={onRetry}
          className="font-heading font-extrabold text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl px-6 py-3 shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          🔁 Try Again
        </button>
        <button
          onClick={onChooseAnother}
          className="font-heading font-extrabold text-purple-700 bg-white rounded-2xl px-6 py-3 shadow-lg hover:scale-105 active:scale-95 transition-transform border-4 border-purple-200"
        >
          🎯 Choose Another
        </button>
        {onMemoryCheck && (
          <button
            onClick={onMemoryCheck}
            className="font-heading font-extrabold text-white bg-gradient-to-br from-violet-500 to-indigo-400 rounded-2xl px-6 py-3 shadow-lg hover:scale-105 active:scale-95 transition-transform"
          >
            🧠 Quick Memory Check
          </button>
        )}
        <button
          onClick={onHome}
          className="font-heading font-extrabold text-slate-600 bg-white/70 rounded-2xl px-6 py-3 shadow hover:scale-105 active:scale-95 transition-transform"
        >
          🏠 Home
        </button>
      </div>
    </div>
  );
}
