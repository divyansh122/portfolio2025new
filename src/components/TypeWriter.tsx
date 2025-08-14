import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number;
  showCursor?: boolean;
}

export default function TypeWriter({ text, speed = 100, showCursor = true }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="typewriter">
      {displayText}
      {showCursor && <span className="typewriter-cursor"></span>}
    </span>
  );
}
