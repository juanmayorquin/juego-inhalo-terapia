import {useEffect, useRef } from "react";

export function Timer({ time, setTime, updateTimeUp }) {

  useEffect(() => {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 0.1);
      }, 100);

      return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time <= 0) {
      updateTimeUp();
    }
  }, [time, updateTimeUp]);

  const progress = (time / 10) * 100;

  return (
    <div className="absolute top-0 left-0 w-full h-4">
      <div
        className="h-full bg-turquoise transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
