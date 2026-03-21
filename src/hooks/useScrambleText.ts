import { useEffect, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!%&*';

const isScramblable = (char: string) => /[A-Z0-9'.,!&?]/.test(char);

export function useScrambleText(target: string, delay = 0) {
  const [output, setOutput] = useState(() =>
    target
      .split('')
      .map((c) => (isScramblable(c) ? CHARS[Math.floor(Math.random() * CHARS.length)] : c))
      .join('')
  );

  useEffect(() => {
    let iteration = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setOutput(
          target
            .split('')
            .map((char, i) => {
              if (!isScramblable(char)) return char;
              if (i < iteration) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );

        iteration += 0.55;

        if (iteration > target.length) {
          clearInterval(intervalId);
          setOutput(target);
        }
      }, 35);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [target, delay]);

  return output;
}
