import { useState } from 'react';

export function Card ({ imageSrc, text, correct }) {
    const [bgColor, setBgColor] = useState('bg-white');
    

    const handleClick = () => {
        // Do something when the card is clicked
        console.log("Card clicked")
        setBgColor(correct ? 'bg-green-500 animate-jump animate-duration-[250ms]' : 'bg-red-500 animate-shake animate-once animate-duration-[250ms]');
    }

    return (
          
    );
}

export default Card;
