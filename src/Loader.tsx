import { useState, useEffect } from 'react';
import './loader.css';

const words = [
  'culture',
  'business',
  'people'
];

export default function Loader() {
  const [mostrar, setMostrar] = useState(false);
  const [index, setIndex] = useState(0);
  const [terminado, setTerminado] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setMostrar(true);
    }, 4000);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!mostrar) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === words.length - 1) {
          clearInterval(interval);

          setTimeout(() => {
            setTerminado(true);
          }, 1000);

          return prev;
        }

        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [mostrar]);

  if (terminado) {
    return null;
  }
 
  return (
    <div className="loader">
      {mostrar && (
        <h2>
              The power to move{' '}
            <span
              key={words[index]}
              className={`word ${words[index]}`}
            >
              {words[index]}
            </span>
          </h2>
      )}
    </div>
  );
}