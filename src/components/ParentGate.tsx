import { useState } from 'react';

interface ParentGateProps {
  onSuccess: () => void;
  onCancel: () => void;
}

function randomChallenge() {
  const a = Math.floor(Math.random() * 8) + 4; // 4-11
  const b = Math.floor(Math.random() * 8) + 3; // 3-10
  return { a, b, answer: a * b };
}

export function ParentGate({ onSuccess, onCancel }: ParentGateProps) {
  const [challenge] = useState(randomChallenge);
  const [value, setValue] = useState('');
  const [wrong, setWrong] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (parseInt(value, 10) === challenge.answer) {
      onSuccess();
    } else {
      setWrong(true);
      setValue('');
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-sm w-full text-center animate-bounce-in">
        <p className="text-3xl mb-2">🔒</p>
        <h2 className="font-heading text-xl font-extrabold text-purple-700 mb-2">Grown-ups only</h2>
        <p className="text-slate-500 text-sm mb-4">Solve this to open Parent Zone</p>
        <p className="font-heading text-3xl font-extrabold text-slate-800 mb-4">
          {challenge.a} × {challenge.b} = ?
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            inputMode="numeric"
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setWrong(false);
            }}
            className={`w-full text-center font-heading font-bold text-xl border-4 rounded-2xl py-2 mb-2 focus:outline-none ${
              wrong ? 'border-red-400' : 'border-purple-200 focus:border-purple-400'
            }`}
          />
          {wrong && <p className="text-red-500 text-sm mb-2">Not quite — try again.</p>}
          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 font-heading font-bold text-slate-600 bg-slate-100 rounded-2xl py-2 hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 font-heading font-bold text-white bg-purple-600 rounded-2xl py-2 hover:bg-purple-700"
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
