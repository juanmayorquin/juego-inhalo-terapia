import { useState } from 'react';

export function Card ({ imageSrc, text, isCorrect }) {
    const [bgColor, setBgColor] = useState('bg-white');

    const checkIfCorrect = () => {
        if (isCorrect) {
            setBgColor('bg-green-300 scale-[1.025] animate-pulse animate-once animate-duration-150');
        } else {
            setBgColor('bg-red-300 scale-[0.975] animate-shake animate-duration-150');
        }
    };

    return (
        <div className={`rounded-lg p-8 flex flex-col items-center justify-center w-[85%] min-h-[12rem] md:min-h-[30rem] drop-shadow-2xl md:hover:scale-[1.015] transition-all ${bgColor}`} onClick={checkIfCorrect}>
            <img src={imageSrc} alt="card image" className="w-1/2" />
            <p className="text-center text-lg mt-4">{text}</p>
        </div>
    );
}
