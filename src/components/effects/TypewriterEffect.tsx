
'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  className?: string;
  loop?: boolean;
}

export function TypewriterEffect({ text, speed = 100, className, loop = false }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (loop) {
        if (isDeleting) {
          if (displayedText.length > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
          } else {
            setIsDeleting(false);
          }
        } else {
          if (displayedText.length < text.length) {
            setDisplayedText((prev) => prev + text.charAt(displayedText.length));
          } else {
            setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
          }
        }
      } else {
        if (index < text.length) {
            setDisplayedText((prev) => prev + text.charAt(index));
            setIndex(prev => prev + 1)
        }
      }
    };

    const timeoutId = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, index, text, speed, loop]);


  return <span className={className}>{displayedText}</span>;
}
