import { useState, useEffect } from "react";

export function useTypewriter(text: string, speed: number = 100, trigger: boolean = true) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!trigger) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, trigger, isComplete]);

  useEffect(() => {
    if (trigger) {
      setDisplayText("");
      setCurrentIndex(0);
      setIsComplete(false);
    }
  }, [trigger]);

  return { displayText, isComplete };
}
