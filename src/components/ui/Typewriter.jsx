import { useEffect, useState } from 'react';

export default function AdvancedTypewriter() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrases = ['Frontend Developer', 'UI/UX Designer', 'Creative Thinker'];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    if (index < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setIndex(0);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, phraseIndex]);

  return <span>{text}</span>;
}