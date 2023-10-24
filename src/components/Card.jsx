import { useState } from 'react';

export function Card ({ imageSrc, text }) {
    return (
        <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center w-[90%] min-h-[20rem] md:min-h-[30rem]">
            <img src={imageSrc} alt="card image" className="w-1/2" />
            <p className="text-center text-lg mt-4">{text}</p>
        </div>
    );
}

export default Card;
