import { useMemo, useRef, useState } from 'react';
import type { Level, Operation, Question, QuizAnswer, QuizResult } from '../types';
import { generateChoices, generateQuiz } from '../data/questions';
import { getOperationMeta } from '../data/operations';
import { Koala, Penguin } from '../components/Mascots';
import { SpeechBubble } from '../components/SpeechBubble';
import { CORRECT_PRAISE, ENCOURAGEMENTS, TRY_AGAIN, randomFrom, randomTip } from '../data/concepts';

interface QuizProps {
  operation: Operation;
  level: Level;
  onComplete: (result: QuizResult) => void;
  onQuit: () => void;
}

const QUESTION_COUNT = 10;

export function Quiz({ operation, level, onComplete, onQuit }: QuizProps) {
  const questions = useMemo(() => generateQuiz(operation, level, QUESTION_COUNT), [operation, level]);
  const meta = getOperationMeta(operation);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null);

  const [quizStartTime] = useState(() => performance.now());
  const questionStart = useRef<number>(quizStartTime);
  const quizStart = useRef<number>(quizStartTime);

  const current: Question = questions[index];
  const choices = useMemo(() => generateChoices(current), [current]);

  function handleAnswer(choice: number) {
    if (selected !== null) return;
    setSelected(choice);
    const correct = choice === current.answer;
    const timeMs = performance.now() - questionStart.current;
    const answer: QuizAnswer = { question: current, userAnswer: choice, correct, timeMs };
    setFeedback({
      correct,
      message: correct ? randomFrom(CORRECT_PRAISE) : `${randomFrom(TRY_AGAIN)} The answer was ${current.answer}.`,
    });

    const nextAnswers = [...answers, answer];
    setAnswers(nextAnswers);

    window.setTimeout(() => {
      if (index + 1 >= questions.length) {
        const durationSeconds = Math.round((performance.now() - quizStart.current) / 1000);
        const result: QuizResult = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          date: new Date().toISOString(),
          operation,
          level,
          total: questions.length,
          correct: nextAnswers.filter((a) => a.correct).length,
          durationSeconds,
          answers: nextAnswers,
        };
        onComplete(result);
      } else {
        setIndex(index + 1);
        setSelected(null);
        setFeedback(null);
        setShowHint(false);
        questionStart.current = performance.now();
      }
    }, correct ? 1100 : 1900);
  }

  const questionLabel =
    operation === 'division' ? `${current.a} ÷ ${current.b}` : `${current.a} ${meta.symbol} ${current.b}`;

  const mascotMood = feedback ? (feedback.correct ? 'excited' : 'sad') : 'thinking';

  return (
    <div className="px-4 pb-16 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button onClick={onQuit} className="font-heading font-bold text-purple-600 hover:underline">
          ← Quit
        </button>
        <span className="font-heading font-bold text-slate-500">
          Question {index + 1} / {questions.length}
        </span>
      </div>

      <div className="w-full h-3 bg-white/70 rounded-full overflow-hidden mb-8 shadow-inner">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${(index / questions.length) * 100}%`, background: meta.color }}
        />
      </div>

      <div
        className="rounded-3xl shadow-xl p-6 sm:p-10 text-center mb-6"
        style={{ background: meta.colorSoft }}
      >
        <p className="font-heading font-bold text-slate-600 mb-2">{meta.label} · Level {level}</p>
        <p className="font-heading text-5xl sm:text-6xl font-extrabold text-slate-800 mb-2">
          {questionLabel} = ?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
        {choices.map((choice) => {
          const isSelected = selected === choice;
          const isCorrectChoice = choice === current.answer;
          let stateClasses = 'bg-white hover:bg-purple-50 border-transparent';
          if (selected !== null) {
            if (isCorrectChoice) {
              stateClasses = 'bg-green-200 border-green-500';
            } else if (isSelected) {
              stateClasses = 'bg-red-200 border-red-500';
            } else {
              stateClasses = 'bg-white opacity-60 border-transparent';
            }
          }
          return (
            <button
              key={choice}
              onClick={() => handleAnswer(choice)}
              disabled={selected !== null}
              className={`font-heading font-extrabold text-2xl sm:text-3xl rounded-2xl py-6 shadow-md border-4 transition-all ${stateClasses} ${
                isSelected ? 'animate-pop' : ''
              }`}
            >
              {choice}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-3 mb-4">
        <button
          onClick={() => setShowHint((v) => !v)}
          disabled={selected !== null}
          className="font-heading font-bold text-sm bg-white/80 hover:bg-white text-purple-700 rounded-full px-4 py-2 shadow disabled:opacity-50"
        >
          💡 Need a hint?
        </button>
      </div>

      <div className="flex items-end justify-center gap-4 min-h-[110px]">
        <Penguin mood={mascotMood} className="w-16 h-16 sm:w-20 sm:h-20" />
        {(feedback || showHint) && (
          <SpeechBubble color={feedback ? (feedback.correct ? '#e3fbe6' : '#ffe8ea') : '#eaf6ff'} className="max-w-xs">
            {feedback ? feedback.message : randomTip(operation)}
          </SpeechBubble>
        )}
        <Koala mood={feedback?.correct ? 'excited' : 'happy'} className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>
      {!feedback && !showHint && (
        <p className="text-center text-slate-400 text-sm mt-2">{randomFrom(ENCOURAGEMENTS)}</p>
      )}
    </div>
  );
}
