import React, { useState, useEffect, useRef } from 'react';

export function Timer({ initialTime, timeUp, updateTimeUp }) {
  const [time, setTime] = useState(initialTime);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Change the threshold value as per your requirement
    );

    observer.observe(timerRef.current);

    return () => {
      observer.unobserve(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 0.1);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  useEffect(() => {
    if (time <= 0) {
      updateTimeUp();
    }
  }, [time, updateTimeUp]);

  const progress = (time / initialTime) * 100;

  return (
    <div ref={timerRef} className="absolute top-0 left-0 w-full h-4">
      {isVisible && (
        <div
          className="h-full bg-turquoise transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      )}
    </div>
  );
}
