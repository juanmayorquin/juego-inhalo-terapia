import React, { useState, useEffect } from 'react';

export function Timer ({ initialTime }) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const progress = (time / initialTime) * 100;

  return (
    <div className="absolute top-0 left-0 w-full h-4">
      <div
        className="h-full bg-turquoise transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
