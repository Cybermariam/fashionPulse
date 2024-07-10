import { useState, useEffect } from 'react';
import './Banner.css';

const messages = [
  { text: 'Get 20% Off Your First Order Today.', span: ' Order now!' },
  { text: 'Sale: Up to 14% off.', span: ' Shop now!' },
  { text: 'Collections: Find your steez.', span: ' Shop now!' },
];

export default function Banner() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const currentMessage = messages[currentMessageIndex];

  return (
    <div className="banner">
      {currentMessage.text}
      <span className="shop-now">{currentMessage.span}</span>
    </div>
  );
}
