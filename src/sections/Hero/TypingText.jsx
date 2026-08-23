import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

const TYPE_SPEED_MS = 80;
const DELETE_SPEED_MS = 45;
const PAUSE_AFTER_TYPE_MS = 1500;
const PAUSE_AFTER_DELETE_MS = 300;

export function TypingText({ words, className = "" }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(prefersReducedMotion ? words[0] : "");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(words[wordIndex]);
      return;
    }

    const currentWord = words[wordIndex];
    let timeoutId;

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        timeoutId = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), TYPE_SPEED_MS);
      } else {
        timeoutId = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE_MS);
      }
    } else {
      if (text.length > 0) {
        timeoutId = setTimeout(() => setText(text.slice(0, -1)), DELETE_SPEED_MS);
      } else {
        timeoutId = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE_MS);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, phase, wordIndex, words, prefersReducedMotion]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle" style={{ height: "1em" }} aria-hidden="true" />
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
